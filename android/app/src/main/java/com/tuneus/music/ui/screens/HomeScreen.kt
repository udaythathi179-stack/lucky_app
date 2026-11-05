package com.tuneus.music.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
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
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.tuneus.music.data.local.CatalogData
import com.tuneus.music.data.local.FavoritesManager
import com.tuneus.music.data.local.RecentSongsManager
import com.tuneus.music.data.model.Artist
import com.tuneus.music.data.model.Track
import com.tuneus.music.playback.PlayerManager
import com.tuneus.music.ui.components.ArtistAvatarCard
import com.tuneus.music.ui.components.QuickJumpCard
import com.tuneus.music.ui.components.ShelfSection
import com.tuneus.music.ui.components.SongCard
import com.tuneus.music.ui.theme.BgCard
import com.tuneus.music.ui.theme.BgMain
import com.tuneus.music.ui.theme.CardBorder
import com.tuneus.music.ui.theme.ElectricBlue
import com.tuneus.music.ui.theme.TextMuted
import com.tuneus.music.ui.theme.TextPrimary
import com.tuneus.music.ui.theme.TextSecondary

@Composable
fun HomeScreen(
    onOpenDrawer: () -> Unit,
    onOpenSearch: () -> Unit,
    onArtistClick: (Artist) -> Unit,
    modifier: Modifier = Modifier
) {
    var activeFilter by remember { mutableStateOf("All") }

    val recentSongs by RecentSongsManager.recentTracks.collectAsState()
    val likedSongs by FavoritesManager.likedTracks.collectAsState()
    val currentTrack by PlayerManager.currentTrack.collectAsState()
    val isPlaying by PlayerManager.isPlaying.collectAsState()

    val allTracks = CatalogData.BUNDLED_TRACKS

    val displayedTracks = when (activeFilter) {
        "Liked" -> likedSongs
        "Telugu" -> allTracks.filter { it.language.equals("Telugu", ignoreCase = true) }
        "Hindi" -> allTracks.filter { it.language.equals("Hindi", ignoreCase = true) }
        "Folk" -> allTracks.filter { it.category.equals("Folk", ignoreCase = true) }
        else -> allTracks
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(BgMain),
        contentPadding = PaddingValues(bottom = 120.dp)
    ) {
        // Topbar
        item {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 12.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Artist Menu Button
                Row(
                    modifier = Modifier
                        .clip(RoundedCornerShape(10.dp))
                        .background(BgCard)
                        .border(1.dp, CardBorder, RoundedCornerShape(10.dp))
                        .clickable(onClick = onOpenDrawer)
                        .padding(horizontal = 10.dp, vertical = 6.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        imageVector = Icons.Default.Menu,
                        contentDescription = "Artist Menu",
                        tint = ElectricBlue,
                        modifier = Modifier.size(18.dp)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = "Artist Menu",
                        color = TextPrimary,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.SemiBold
                    )
                }

                Spacer(modifier = Modifier.weight(1f))

                // Brand Title
                Text(
                    text = "TUNEUS",
                    color = ElectricBlue,
                    fontSize = 18.sp,
                    fontWeight = FontWeight.ExtraBold,
                    letterSpacing = 2.sp
                )

                Spacer(modifier = Modifier.weight(1f))

                // Search Icon Button
                IconButton(onClick = onOpenSearch) {
                    Icon(
                        imageVector = Icons.Default.Search,
                        contentDescription = "Search",
                        tint = TextPrimary,
                        modifier = Modifier.size(24.dp)
                    )
                }
            }
        }

        // Category Filter Chips
        item {
            LazyRow(
                contentPadding = PaddingValues(horizontal = 16.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                modifier = Modifier.padding(bottom = 14.dp)
            ) {
                val filters = listOf("All", "Liked", "Telugu", "Hindi", "Folk")
                items(filters) { filter ->
                    val isSelected = activeFilter == filter
                    val bg = if (isSelected) ElectricBlue else BgCard
                    val textCol = if (isSelected) BgMain else TextSecondary
                    val border = if (isSelected) ElectricBlue else CardBorder

                    Box(
                        modifier = Modifier
                            .clip(RoundedCornerShape(20.dp))
                            .background(bg)
                            .border(1.dp, border, RoundedCornerShape(20.dp))
                            .clickable { activeFilter = filter }
                            .padding(horizontal = 14.dp, vertical = 7.dp)
                    ) {
                        Text(
                            text = if (filter == "Liked") "♥ Liked (${likedSongs.size})" else filter,
                            color = textCol,
                            fontSize = 12.5.sp,
                            fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium
                        )
                    }
                }
            }
        }

        // Show Full Home Dashboard only when on "All" view
        if (activeFilter == "All") {
            // Recent Songs Section (Up to 9 songs with FIFO eviction)
            item {
                Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 6.dp)) {
                    Text(
                        text = "Recent Songs",
                        color = TextPrimary,
                        fontSize = 17.sp,
                        fontWeight = FontWeight.Bold
                    )
                    Spacer(modifier = Modifier.height(10.dp))

                    if (recentSongs.isEmpty()) {
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .clip(RoundedCornerShape(12.dp))
                                .background(BgCard.copy(alpha = 0.5f))
                                .border(1.dp, CardBorder, RoundedCornerShape(12.dp))
                                .padding(18.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = "Songs you listen to will appear here (up to 9 songs)",
                                color = TextMuted,
                                fontSize = 13.sp
                            )
                        }
                    } else {
                        // Display 2-column grid of up to 9 songs
                        val chunked = recentSongs.take(9).chunked(2)
                        Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                            chunked.forEach { rowTracks ->
                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                                ) {
                                    rowTracks.forEach { track ->
                                        QuickJumpCard(
                                            track = track,
                                            onClick = { PlayerManager.playTrack(track) },
                                            modifier = Modifier.weight(1f)
                                        )
                                    }
                                    if (rowTracks.size == 1) {
                                        Spacer(modifier = Modifier.weight(1f))
                                    }
                                }
                            }
                        }
                    }
                }
                Spacer(modifier = Modifier.height(20.dp))
            }

            // Popular Artists & Legendary Singers Shelf
            item {
                Column(modifier = Modifier.fillMaxWidth()) {
                    Column(modifier = Modifier.padding(horizontal = 16.dp)) {
                        Text(
                            text = "⭐ Popular Artists & Legendary Singers",
                            color = TextPrimary,
                            fontSize = 17.sp,
                            fontWeight = FontWeight.Bold
                        )
                        Text(
                            text = "Listen to your favorite singers • Tap to explore tracks",
                            color = TextSecondary,
                            fontSize = 12.sp
                        )
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    LazyRow(
                        contentPadding = PaddingValues(horizontal = 16.dp),
                        horizontalArrangement = Arrangement.spacedBy(14.dp)
                    ) {
                        items(CatalogData.POPULAR_ARTISTS, key = { it.name }) { artist ->
                            ArtistAvatarCard(
                                artist = artist,
                                onClick = { onArtistClick(artist) }
                            )
                        }
                    }
                }
                Spacer(modifier = Modifier.height(24.dp))
            }

            // Jump back in (Trending Hits)
            item {
                ShelfSection(
                    title = "Jump back in",
                    subtitle = "Trending studio master hits picked for you",
                    tracks = allTracks.take(10),
                    onTrackClick = { PlayerManager.playTrack(it) }
                )
                Spacer(modifier = Modifier.height(24.dp))
            }

            // Folk & Cultural Masterpieces
            item {
                val folkTracks = allTracks.filter { it.category.equals("Folk", ignoreCase = true) }
                if (folkTracks.isNotEmpty()) {
                    ShelfSection(
                        title = "🪕 Folk & Cultural Masterpieces",
                        subtitle = "Authentic roots, vibrant rhythms & energetic rural beats",
                        tracks = folkTracks,
                        onTrackClick = { PlayerManager.playTrack(it) }
                    )
                    Spacer(modifier = Modifier.height(24.dp))
                }
            }

            // Tollywood Blockbusters
            item {
                val teluguTracks = allTracks.filter { it.language.equals("Telugu", ignoreCase = true) }
                ShelfSection(
                    title = "🎬 Tollywood Blockbusters",
                    subtitle = "Mass anthems, melody chartbusters & legendary Telugu hits",
                    tracks = teluguTracks,
                    onTrackClick = { PlayerManager.playTrack(it) }
                )
                Spacer(modifier = Modifier.height(24.dp))
            }

            // Bollywood Melodies
            item {
                val hindiTracks = allTracks.filter { it.language.equals("Hindi", ignoreCase = true) }
                ShelfSection(
                    title = "✨ Bollywood Melodies",
                    subtitle = "Soulful romantic tracks & iconic timeless Hindi classics",
                    tracks = hindiTracks,
                    onTrackClick = { PlayerManager.playTrack(it) }
                )
                Spacer(modifier = Modifier.height(24.dp))
            }
        }

        // Complete Library List Section
        item {
            Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 6.dp)) {
                Text(
                    text = if (activeFilter == "All") "Song Library (Studio Master)" else "$activeFilter Songs",
                    color = TextPrimary,
                    fontSize = 17.sp,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "${displayedTracks.size} songs • 320kbps Studio Master",
                    color = TextMuted,
                    fontSize = 12.sp
                )
            }
            Spacer(modifier = Modifier.height(10.dp))
        }

        items(displayedTracks, key = { it.id }) { track ->
            val isCurrent = currentTrack?.id == track.id
            SongCard(
                track = track,
                isPlaying = isCurrent && isPlaying,
                isLiked = FavoritesManager.isLiked(track.id),
                onTrackClick = {
                    if (isCurrent) {
                        PlayerManager.togglePlayPause()
                    } else {
                        PlayerManager.playTrack(track, displayedTracks)
                    }
                },
                onLikeToggle = { FavoritesManager.toggleLike(track) },
                modifier = Modifier.padding(horizontal = 16.dp, vertical = 4.dp)
            )
        }
    }
}

