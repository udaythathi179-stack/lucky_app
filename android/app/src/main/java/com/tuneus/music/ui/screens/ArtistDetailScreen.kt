package com.tuneus.music.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Shuffle
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import com.tuneus.music.data.local.CatalogData
import com.tuneus.music.data.local.FavoritesManager
import com.tuneus.music.data.model.Artist
import com.tuneus.music.data.model.Track
import com.tuneus.music.data.remote.SaavnRepository
import com.tuneus.music.playback.PlayerManager
import com.tuneus.music.ui.components.SongCard
import com.tuneus.music.ui.theme.BgCard
import com.tuneus.music.ui.theme.BgMain
import com.tuneus.music.ui.theme.ElectricBlue
import com.tuneus.music.ui.theme.TextMuted
import com.tuneus.music.ui.theme.TextPrimary
import com.tuneus.music.ui.theme.TextSecondary

@Composable
fun ArtistDetailScreen(
    artist: Artist,
    onBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    var artistTracks by remember { mutableStateOf<List<Track>>(emptyList()) }
    var isLoading by remember { mutableStateOf(true) }

    val currentTrack by PlayerManager.currentTrack.collectAsState()
    val isPlaying by PlayerManager.isPlaying.collectAsState()

    // Fetch artist songs: first match local catalog, then query JioSaavn online
    LaunchedEffect(artist) {
        isLoading = true
        val localMatches = CatalogData.BUNDLED_TRACKS.filter { track ->
            track.artist.contains(artist.name, ignoreCase = true) ||
                    artist.name.contains(track.artist, ignoreCase = true)
        }

        val onlineResults = SaavnRepository.searchSongs(artist.query.ifBlank { artist.name })
        val combined = (localMatches + onlineResults).distinctBy { "${it.title.lowercase()}__${it.artist.lowercase()}" }

        artistTracks = combined
        isLoading = false
    }

    Column(
        modifier = modifier
            .fillMaxSize()
            .background(BgMain)
    ) {
        // Top Back Row
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 12.dp, vertical = 8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            IconButton(onClick = onBack) {
                Icon(
                    imageVector = Icons.Default.ArrowBack,
                    contentDescription = "Back",
                    tint = TextPrimary
                )
            }
            Spacer(modifier = Modifier.width(6.dp))
            Text(
                text = "Artist Discography",
                color = TextSecondary,
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold
            )
        }

        // Artist Hero Header
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 20.dp, vertical = 12.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            AsyncImage(
                model = artist.img.ifBlank { "file:///android_asset/icon-192.png" },
                contentDescription = artist.name,
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .size(110.dp)
                    .clip(CircleShape)
                    .border(3.dp, ElectricBlue, CircleShape)
            )

            Spacer(modifier = Modifier.height(12.dp))

            Text(
                text = artist.name,
                color = TextPrimary,
                fontSize = 21.sp,
                fontWeight = FontWeight.Bold
            )

            Text(
                text = artist.tag,
                color = TextMuted,
                fontSize = 12.5.sp
            )

            Spacer(modifier = Modifier.height(14.dp))

            // Action Buttons Row (Play All & Shuffle)
            if (artistTracks.isNotEmpty()) {
                Row(
                    horizontalArrangement = androidx.compose.foundation.layout.Arrangement.spacedBy(10.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Play All
                    Row(
                        modifier = Modifier
                            .clip(RoundedCornerShape(24.dp))
                            .background(ElectricBlue)
                            .clickable {
                                PlayerManager.playTrack(artistTracks.first(), artistTracks)
                            }
                            .padding(horizontal = 20.dp, vertical = 10.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Default.PlayArrow,
                            contentDescription = "Play All",
                            tint = BgMain,
                            modifier = Modifier.size(20.dp)
                        )
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "Play All (${artistTracks.size})",
                            color = BgMain,
                            fontSize = 13.5.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }

                    // Shuffle
                    Row(
                        modifier = Modifier
                            .clip(RoundedCornerShape(24.dp))
                            .background(BgCard)
                            .border(1.dp, CardBorder, RoundedCornerShape(24.dp))
                            .clickable {
                                val shuffled = artistTracks.shuffled()
                                PlayerManager.playTrack(shuffled.first(), shuffled)
                            }
                            .padding(horizontal = 16.dp, vertical = 10.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Default.Shuffle,
                            contentDescription = "Shuffle",
                            tint = TextPrimary,
                            modifier = Modifier.size(18.dp)
                        )
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "Shuffle",
                            color = TextPrimary,
                            fontSize = 13.sp,
                            fontWeight = FontWeight.SemiBold
                        )
                    }
                }
            }
        }

        // Song List
        if (isLoading) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(top = 40.dp),
                contentAlignment = Alignment.TopCenter
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    CircularProgressIndicator(color = ElectricBlue, modifier = Modifier.size(36.dp))
                    Spacer(modifier = Modifier.height(12.dp))
                    Text("Loading songs by ${artist.name}...", color = TextSecondary, fontSize = 13.5.sp)
                }
            }
        } else {
            LazyColumn(
                contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp),
                modifier = Modifier.fillMaxSize()
            ) {
                items(artistTracks, key = { it.id }) { track ->
                    val isCurrent = currentTrack?.id == track.id
                    SongCard(
                        track = track,
                        isPlaying = isCurrent && isPlaying,
                        isLiked = FavoritesManager.isLiked(track.id),
                        onTrackClick = {
                            if (isCurrent) {
                                PlayerManager.togglePlayPause()
                            } else {
                                PlayerManager.playTrack(track, artistTracks)
                            }
                        },
                        onLikeToggle = { FavoritesManager.toggleLike(track) },
                        modifier = Modifier.padding(vertical = 4.dp)
                    )
                }
            }
        }
    }
}

