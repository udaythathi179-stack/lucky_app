package com.tuneus.music.data.local

import android.content.Context
import android.content.SharedPreferences
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.tuneus.music.data.model.Track
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

object FavoritesManager {
    private const val PREFS_NAME = "tuneus_music_prefs"
    private const val KEY_LIKED_TRACKS = "tuneus_liked_tracks_v1"

    private lateinit var prefs: SharedPreferences
    private val gson = Gson()

    private val _likedTracks = MutableStateFlow<List<Track>>(emptyList())
    val likedTracks: StateFlow<List<Track>> = _likedTracks.asStateFlow()

    fun init(context: Context) {
        prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        loadLikedTracks()
    }

    private fun loadLikedTracks() {
        val json = prefs.getString(KEY_LIKED_TRACKS, null)
        if (!json.isNullOrBlank()) {
            try {
                val type = object : TypeToken<List<Track>>() {}.type
                val list: List<Track> = gson.fromJson(json, type) ?: emptyList()
                _likedTracks.value = list
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    fun isLiked(trackId: String): Boolean {
        return _likedTracks.value.any { it.id == trackId }
    }

    fun toggleLike(track: Track): Boolean {
        val current = _likedTracks.value.toMutableList()
        val exists = current.any { it.id == track.id }
        val nowLiked = if (exists) {
            current.removeAll { it.id == track.id }
            false
        } else {
            current.add(0, track)
            true
        }
        _likedTracks.value = current
        saveLikedTracks(current)
        return nowLiked
    }

    private fun saveLikedTracks(list: List<Track>) {
        try {
            val json = gson.toJson(list)
            prefs.edit().putString(KEY_LIKED_TRACKS, json).apply()
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
}

