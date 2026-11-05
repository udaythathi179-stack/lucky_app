package com.tuneus.music.playback

import android.content.Context
import android.content.SharedPreferences
import android.media.audiofx.BassBoost
import android.media.audiofx.Equalizer
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

object AudioFxManager {
    private const val PREFS_NAME = "tuneus_audio_fx_prefs"
    private const val KEY_BASS = "eq_bass_level"
    private const val KEY_VOCAL = "eq_vocal_level"
    private const val KEY_PRESET = "eq_preset_name"

    private lateinit var prefs: SharedPreferences
    private var bassBoost: BassBoost? = null
    private var equalizer: Equalizer? = null
    private var currentSessionId: Int = 0

    private val _bassLevel = MutableStateFlow(0) // -12 to +14 dB
    val bassLevel: StateFlow<Int> = _bassLevel.asStateFlow()

    private val _vocalLevel = MutableStateFlow(0) // -12 to +14 dB
    val vocalLevel: StateFlow<Int> = _vocalLevel.asStateFlow()

    private val _currentPreset = MutableStateFlow("normal")
    val currentPreset: StateFlow<String> = _currentPreset.asStateFlow()

    fun init(context: Context) {
        prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        _bassLevel.value = prefs.getInt(KEY_BASS, 0)
        _vocalLevel.value = prefs.getInt(KEY_VOCAL, 0)
        _currentPreset.value = prefs.getString(KEY_PRESET, "normal") ?: "normal"
    }

    fun attachToSession(sessionId: Int) {
        if (sessionId == 0 || sessionId == currentSessionId) return
        currentSessionId = sessionId
        release()

        try {
            bassBoost = BassBoost(0, sessionId).apply {
                enabled = true
            }
            equalizer = Equalizer(0, sessionId).apply {
                enabled = true
            }
            applyCurrentLevels()
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    fun setBass(level: Int) {
        _bassLevel.value = level.coerceIn(-12, 14)
        _currentPreset.value = "custom"
        applyCurrentLevels()
        save()
    }

    fun setVocal(level: Int) {
        _vocalLevel.value = level.coerceIn(-12, 14)
        _currentPreset.value = "custom"
        applyCurrentLevels()
        save()
    }

    fun applyPreset(preset: String) {
        _currentPreset.value = preset
        when (preset) {
            "bass" -> {
                _bassLevel.value = 10
                _vocalLevel.value = 0
            }
            "vocal" -> {
                _bassLevel.value = -1
                _vocalLevel.value = 9
            }
            "bass_vocal" -> {
                _bassLevel.value = 8
                _vocalLevel.value = 7
            }
            "party" -> {
                _bassLevel.value = 7
                _vocalLevel.value = 4
            }
            "normal" -> {
                _bassLevel.value = 0
                _vocalLevel.value = 0
            }
        }
        applyCurrentLevels()
        save()
    }

    private fun applyCurrentLevels() {
        // Apply Bass boost
        bassBoost?.let { bb ->
            try {
                if (bb.strengthSupported) {
                    val strength = ((_bassLevel.value.coerceAtLeast(0) / 14f) * 1000).toInt().toShort()
                    bb.setStrength(strength)
                }
            } catch (e: Exception) {}
        }

        // Apply Vocal clarity / midrange band
        equalizer?.let { eq ->
            try {
                val bands = eq.numberOfBands.toInt()
                val minLevel = eq.bandLevelRange[0]
                val maxLevel = eq.bandLevelRange[1]

                // Find band closest to vocal frequency (~2000 Hz / 2,000,000 mHz)
                var vocalBand: Short = -1
                var minDiff = Int.MAX_VALUE
                for (i in 0 until bands) {
                    val centerFreq = eq.getCenterFreq(i.toShort()) // in milliHertz
                    val diff = Math.abs(centerFreq - 2000000)
                    if (diff < minDiff) {
                        minDiff = diff
                        vocalBand = i.toShort()
                    }
                }

                if (vocalBand >= 0) {
                    val ratio = (_vocalLevel.value / 14f).coerceIn(-1f, 1f)
                    val targetLevel = if (ratio >= 0) {
                        (maxLevel * ratio).toInt().toShort()
                    } else {
                        (minLevel * -ratio).toInt().toShort()
                    }
                    eq.setBandLevel(vocalBand, targetLevel)
                }
            } catch (e: Exception) {}
        }
    }

    private fun save() {
        prefs.edit()
            .putInt(KEY_BASS, _bassLevel.value)
            .putInt(KEY_VOCAL, _vocalLevel.value)
            .putString(KEY_PRESET, _currentPreset.value)
            .apply()
    }

    fun release() {
        try {
            bassBoost?.release()
            equalizer?.release()
        } catch (e: Exception) {}
        bassBoost = null
        equalizer = null
    }
}
