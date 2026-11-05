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
    private const val MAX_RECENT_COUNT = 10

    private lateinit var prefs: SharedPreferences
    private val gson = Gson()

    private val _recentTracks = MutableStateFlow<List<Track>>(emptyList())
    val recentTracks: StateFlow<List<Track>> = _recentTracks.asStateFlow()

    fun init(context: Context) {
        prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        loadRecentTracks()
    }

    private fun loadRecentTracks() {
        val list = mutableListOf<Track>()
        val json = prefs.getString(KEY_RECENT_TRACKS, null)
        if (!json.isNullOrBlank()) {
            try {
                val type = object : TypeToken<List<Track>>() {}.type
                val stored: List<Track> = gson.fromJson(json, type) ?: emptyList()
                list.addAll(stored.take(MAX_RECENT_COUNT))
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }

        // If fewer than 10 songs, pre-populate from catalog hits so Recent Songs always has 10 songs
        if (list.size < MAX_RECENT_COUNT) {
            val existingIds = list.map { it.id }.toSet()
            for (t in CatalogData.BUNDLED_TRACKS) {
                if (list.size >= MAX_RECENT_COUNT) break
                if (!existingIds.contains(t.id)) {
                    list.add(t)
                }
            }
        }

        val capped = list.take(MAX_RECENT_COUNT)
        _recentTracks.value = capped
        saveRecentTracks(capped)
    }

    /**
     * Adds a song to Recent Songs with strict FIFO eviction at 10 songs:
     * - Places the played song at index 0 (most recent).
     * - Removes any duplicate occurrence of the same song so it moves to front.
     * - If the list reaches 11 songs, the 11th song (the oldest one listened to earliest)
     *   is removed, keeping strictly up to 10 songs.
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

        // Keep strictly up to 10 songs (FIFO: evicts the 11th song)
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

