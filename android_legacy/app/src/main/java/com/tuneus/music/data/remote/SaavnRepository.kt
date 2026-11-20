package com.tuneus.music.data.remote

import com.tuneus.music.data.model.Track
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import okhttp3.OkHttpClient
import okhttp3.Request
import org.json.JSONObject
import java.net.URLEncoder
import java.util.concurrent.TimeUnit

object SaavnRepository {
    private val client = OkHttpClient.Builder()
        .connectTimeout(12, TimeUnit.SECONDS)
        .readTimeout(15, TimeUnit.SECONDS)
        .build()

    suspend fun searchSongs(query: String, quality: String = "320"): List<Track> = withContext(Dispatchers.IO) {
        val trimmed = query.trim()
        if (trimmed.isEmpty()) return@withContext emptyList()

        val encodedQuery = URLEncoder.encode(trimmed, "UTF-8")
        val url = "https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=40&q=$encodedQuery"

        val request = Request.Builder()
            .url(url)
            .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
            .build()

        try {
            val response = client.newCall(request).execute()
            val body = response.body?.string() ?: return@withContext emptyList()
            val json = JSONObject(body)
            val resultsArray = json.optJSONArray("results") ?: return@withContext emptyList()

            val tracks = mutableListOf<Track>()
            val seenKeys = mutableSetOf<String>()

            for (i in 0 until resultsArray.length()) {
                val songObj = resultsArray.getJSONObject(i)
                val moreInfo = songObj.optJSONObject("more_info")

                val encryptedUrl = songObj.optString("encrypted_media_url", "")
                    .ifEmpty { moreInfo?.optString("encrypted_media_url", "") ?: "" }

                val streamUrl = BlowfishDecryptor.decryptSaavnUrl(encryptedUrl, quality)
                if (streamUrl.isBlank()) continue

                val rawTitle = cleanHtml(songObj.optString("song", songObj.optString("title", "")))
                if (rawTitle.isBlank()) continue

                val rawArtist = cleanHtml(
                    songObj.optString("singers",
                        songObj.optString("primary_artists",
                            moreInfo?.optString("singers",
                                moreInfo?.optString("music", "Unknown Artist") ?: "Unknown Artist"
                            ) ?: "Unknown Artist"
                        )
                    )
                )

                val movie = cleanHtml(songObj.optString("album", moreInfo?.optString("album", "Single") ?: "Single"))
                val rawImage = songObj.optString("image", "").replace("150x150.jpg", "500x500.jpg")
                val year = songObj.optString("year", "2024").toIntOrNull() ?: 2024
                val duration = songObj.optString("duration", "240").toIntOrNull() ?: 240
                val lang = songObj.optString("language", "Telugu").replaceFirstChar { it.uppercase() }

                val dedupeKey = "${rawTitle.lowercase()}__${rawArtist.lowercase()}"
                if (seenKeys.contains(dedupeKey)) continue
                seenKeys.add(dedupeKey)

                val id = "saavn-" + songObj.optString("id", "${System.currentTimeMillis()}-$i")
                tracks.add(
                    Track(
                        id = id,
                        title = rawTitle,
                        artist = rawArtist,
                        movie = movie,
                        year = year,
                        language = lang,
                        category = lang,
                        src = streamUrl,
                        artwork = rawImage,
                        duration = duration,
                        isOnline = true
                    )
                )
            }
            tracks
        } catch (e: Exception) {
            e.printStackTrace()
            emptyList()
        }
    }

    private fun cleanHtml(str: String): String {
        return str
            .replace("&quot;", "\"")
            .replace("&amp;", "&")
            .replace("&#039;", "'")
            .replace("&apos;", "'")
            .replace("&lt;", "<")
            .replace("&gt;", ">")
            .replace("&ndash;", "–")
            .replace("&mdash;", "—")
            .replace("&hellip;", "…")
            .replace(Regex("&#(\\d+);")) { match ->
                match.groupValues[1].toIntOrNull()?.toChar()?.toString() ?: ""
            }
            .trim()
    }
}

