package com.tuneus.music.playback

import android.content.Context
import android.net.Uri
import androidx.media3.common.MediaItem
import androidx.media3.common.MediaMetadata
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import com.tuneus.music.data.local.RecentSongsManager
import com.tuneus.music.data.model.Track
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch

object PlayerManager {
    private var exoPlayer: ExoPlayer? = null
    val player: ExoPlayer
        get() = exoPlayer ?: throw IllegalStateException("PlayerManager not initialized!")

    private val scope = CoroutineScope(Dispatchers.Main + Job())
    private var progressJob: Job? = null

    private val _currentTrack = MutableStateFlow<Track?>(null)
    val currentTrack: StateFlow<Track?> = _currentTrack.asStateFlow()

    private val _isPlaying = MutableStateFlow(false)
    val isPlaying: StateFlow<Boolean> = _isPlaying.asStateFlow()

    private val _currentPosition = MutableStateFlow(0L)
    val currentPosition: StateFlow<Long> = _currentPosition.asStateFlow()

    private val _duration = MutableStateFlow(0L)
    val duration: StateFlow<Long> = _duration.asStateFlow()

    private val _queue = MutableStateFlow<List<Track>>(emptyList())
    val queue: StateFlow<List<Track>> = _queue.asStateFlow()

    private val _isShuffle = MutableStateFlow(false)
    val isShuffle: StateFlow<Boolean> = _isShuffle.asStateFlow()

    private val _repeatMode = MutableStateFlow(Player.REPEAT_MODE_OFF)
    val repeatMode: StateFlow<Int> = _repeatMode.asStateFlow()

    fun init(context: Context) {
        if (exoPlayer != null) return

        exoPlayer = ExoPlayer.Builder(context).build().apply {
            addListener(object : Player.Listener {
                override fun onIsPlayingChanged(playing: Boolean) {
                    _isPlaying.value = playing
                    if (playing) startProgressTicker() else stopProgressTicker()
                }

                override fun onPlaybackStateChanged(playbackState: Int) {
                    if (playbackState == Player.STATE_READY) {
                        _duration.value = duration.coerceAtLeast(0L)
                    } else if (playbackState == Player.STATE_ENDED) {
                        playNext()
                    }
                }
            })
        }
    }

    fun playTrack(track: Track, newQueue: List<Track>? = null) {
        val p = exoPlayer ?: return
        _currentTrack.value = track

        if (newQueue != null && newQueue.isNotEmpty()) {
            _queue.value = newQueue
        } else if (!_queue.value.any { it.id == track.id }) {
            _queue.value = listOf(track) + _queue.value
        }

        // Add to Recent Songs with strict FIFO max 9 eviction
        RecentSongsManager.addTrack(track)

        val metadata = MediaMetadata.Builder()
            .setTitle(track.title)
            .setArtist(track.artist)
            .setAlbumTitle(track.movie)
            .setArtworkUri(if (track.artwork.isNotBlank()) Uri.parse(track.artwork) else null)
            .build()

        val mediaItem = MediaItem.Builder()
            .setMediaId(track.id)
            .setUri(track.src)
            .setMediaMetadata(metadata)
            .build()

        p.setMediaItem(mediaItem)
        p.prepare()
        p.play()
    }

    fun togglePlayPause() {
        val p = exoPlayer ?: return
        if (p.isPlaying) {
            p.pause()
        } else {
            p.play()
        }
    }

    fun seekTo(positionMs: Long) {
        exoPlayer?.seekTo(positionMs)
        _currentPosition.value = positionMs
    }

    fun playNext() {
        val q = _queue.value
        if (q.isEmpty()) return
        val current = _currentTrack.value
        val currentIndex = q.indexOfFirst { it.id == current?.id }

        val nextIndex = if (_isShuffle.value) {
            (0 until q.size).random()
        } else {
            if (currentIndex == -1 || currentIndex >= q.size - 1) 0 else currentIndex + 1
        }
        playTrack(q[nextIndex])
    }

    fun playPrevious() {
        val q = _queue.value
        if (q.isEmpty()) return
        val current = _currentTrack.value
        val currentIndex = q.indexOfFirst { it.id == current?.id }

        val prevIndex = if (currentIndex <= 0) q.size - 1 else currentIndex - 1
        playTrack(q[prevIndex])
    }

    fun toggleShuffle() {
        _isShuffle.value = !_isShuffle.value
    }

    fun cycleRepeatMode() {
        val p = exoPlayer ?: return
        val nextMode = when (_repeatMode.value) {
            Player.REPEAT_MODE_OFF -> Player.REPEAT_MODE_ALL
            Player.REPEAT_MODE_ALL -> Player.REPEAT_MODE_ONE
            else -> Player.REPEAT_MODE_OFF
        }
        _repeatMode.value = nextMode
        p.repeatMode = nextMode
    }

    private fun startProgressTicker() {
        stopProgressTicker()
        progressJob = scope.launch {
            while (isActive) {
                exoPlayer?.let {
                    _currentPosition.value = it.currentPosition.coerceAtLeast(0L)
                    if (it.duration > 0) {
                        _duration.value = it.duration
                    }
                }
                delay(300)
            }
        }
    }

    private fun stopProgressTicker() {
        progressJob?.cancel()
        progressJob = null
    }
}

