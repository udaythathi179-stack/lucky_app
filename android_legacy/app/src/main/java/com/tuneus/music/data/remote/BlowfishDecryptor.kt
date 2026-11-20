package com.tuneus.music.data.remote

import android.util.Base64
import javax.crypto.Cipher
import javax.crypto.spec.SecretKeySpec

object BlowfishDecryptor {
    private const val DES_KEY = "38346591"

    /**
     * Decrypts the JioSaavn encrypted_media_url to a full streamable audio URL.
     * Optionally replaces the bitrate suffix with _320.mp4 for studio master quality.
     */
    fun decryptSaavnUrl(encrypted: String?, quality: String = "320"): String {
        if (encrypted.isNullOrBlank()) return ""
        val targetBitrate = when (quality) {
            "320" -> "_320.mp4"
            "160" -> "_160.mp4"
            else -> "_96.mp4"
        }

        return try {
            val keySpec = SecretKeySpec(DES_KEY.toByteArray(Charsets.UTF_8), "DES")
            val cipher = Cipher.getInstance("DES/ECB/PKCS5Padding")
            cipher.init(Cipher.DECRYPT_MODE, keySpec)
            val decodedBytes = Base64.decode(encrypted, Base64.DEFAULT)
            val decryptedBytes = cipher.doFinal(decodedBytes)
            val rawUrl = String(decryptedBytes, Charsets.UTF_8)
            if (rawUrl.startsWith("http")) {
                rawUrl.replace(Regex("_(96|160|320)\\.mp4$"), targetBitrate)
            } else {
                ""
            }
        } catch (e: Exception) {
            e.printStackTrace()
            ""
        }
    }
}

