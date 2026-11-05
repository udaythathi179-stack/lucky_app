package com.tuneus.music.data.local

import android.content.Context
import android.content.SharedPreferences
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.tuneus.music.data.model.Track
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

object RecentSongsManager {
    private const val PREFS_NAME = "tuneus_music_prefs"
    private const val KEY_RECENT_TRACKS = "tuneus_recent_tracks_v2"
    private const val MAX_RECENT_COUNT = 9

    private lateinit var prefs: SharedPreferences
    private val gson = Gson()

    private val _recentTracks = MutableStateFlow<List<Track>>(emptyList())
    val recentTracks: StateFlow<List<Track>> = _recentTracks.asStateFlow()

    fun init(context: Context) {
        prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        loadRecentTracks()
    }

    private fun loadRecentTracks() {
        val json = prefs.getString(KEY_RECENT_TRACKS, null)
        if (!json.isNullOrBlank()) {
            try {
                val type = object : TypeToken<List<Track>>() {}.type
                val list: List<Track> = gson.fromJson(json, type) ?: emptyList()
                _recentTracks.value = list.take(MAX_RECENT_COUNT)
            } catch (e: Exception) {
                e.printStackTrace()
                _recentTracks.value = emptyList()
            }
        }
    }

    /**
     * Adds a song to Recent Songs with strict FIFO eviction at 9 songs:
     * - Places the played song at index 0 (most recent).
     * - Removes any duplicate occurrence of the same song so it moves to front.
     * - If the list reaches 10 songs, the 10th song (the oldest one listened to earliest)
     *   is removed, keeping strictly up to 9 songs.
     */
    fun addTrack(track: Track) {
        val current = _recentTracks.value.toMutableList()

        // Remove if already present (by ID or same title+artist)
        current.removeAll { existing ->
            existing.id == track.id || (
                existing.title.equals(track.title, ignoreCase = true) &&
                existing.artist.equals(track.artist, ignoreCase = true)
            )
        }

        // Add newly played song at index 0 (top-left, most recent)
        current.add(0, track)

        // Keep strictly up to 9 songs (FIFO: evicts the 10th song)
        val cappedList = if (current.size > MAX_RECENT_COUNT) {
            current.take(MAX_RECENT_COUNT)
        } else {
            current
        }

        _recentTracks.value = cappedList
        saveRecentTracks(cappedList)
    }

    private fun saveRecentTracks(list: List<Track>) {
        try {
            val json = gson.toJson(list)
            prefs.edit().putString(KEY_RECENT_TRACKS, json).apply()
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
}

