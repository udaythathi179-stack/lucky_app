package com.tuneus.music

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.DrawerValue
import androidx.compose.material3.ModalNavigationDrawer
import androidx.compose.material3.Scaffold
import androidx.compose.material3.rememberDrawerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.tuneus.music.data.local.FavoritesManager
import com.tuneus.music.data.model.Artist
import com.tuneus.music.playback.PlayerManager
import com.tuneus.music.ui.components.ArtistMenuDrawer
import com.tuneus.music.ui.components.ExpandedPlayerSheet
import com.tuneus.music.ui.components.MiniPlayerBar
import com.tuneus.music.ui.screens.ArtistDetailScreen
import com.tuneus.music.ui.screens.HomeScreen
import com.tuneus.music.ui.screens.SearchScreen
import com.tuneus.music.ui.theme.BgMain
import com.tuneus.music.ui.theme.TuneusMusicTheme
import kotlinx.coroutines.launch

enum class ScreenState {
    HOME,
    SEARCH,
    ARTIST_DETAIL
}

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            TuneusMusicTheme {
                MainAppContent()
            }
        }
    }
}

@Composable
fun MainAppContent() {
    val drawerState = rememberDrawerState(initialValue = DrawerValue.Closed)
    val scope = rememberCoroutineScope()

    var currentScreen by remember { mutableStateOf(ScreenState.HOME) }
    var selectedArtist by remember { mutableStateOf<Artist?>(null) }
    var showExpandedPlayer by remember { mutableStateOf(false) }

    val currentTrack by PlayerManager.currentTrack.collectAsState()
    val isPlaying by PlayerManager.isPlaying.collectAsState()
    val currentPosition by PlayerManager.currentPosition.collectAsState()
    val duration by PlayerManager.duration.collectAsState()
    val isShuffle by PlayerManager.isShuffle.collectAsState()
    val repeatMode by PlayerManager.repeatMode.collectAsState()

    // Handle system back navigation
    BackHandler(enabled = drawerState.isOpen || currentScreen != ScreenState.HOME) {
        if (drawerState.isOpen) {
            scope.launch { drawerState.close() }
        } else if (currentScreen != ScreenState.HOME) {
            currentScreen = ScreenState.HOME
        }
    }

    ModalNavigationDrawer(
        drawerState = drawerState,
        drawerContent = {
            ArtistMenuDrawer(
                onArtistSelect = { artist ->
                    selectedArtist = artist
                    currentScreen = ScreenState.ARTIST_DETAIL
                },
                onClose = {
                    scope.launch { drawerState.close() }
                }
            )
        }
    ) {
        Scaffold(
            containerColor = BgMain
        ) { paddingValues ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
                    .background(BgMain)
            ) {
                // Active Screen
                when (currentScreen) {
                    ScreenState.HOME -> {
                        HomeScreen(
                            onOpenDrawer = { scope.launch { drawerState.open() } },
                            onOpenSearch = { currentScreen = ScreenState.SEARCH },
                            onArtistClick = { artist ->
                                selectedArtist = artist
                                currentScreen = ScreenState.ARTIST_DETAIL
                            }
                        )
                    }
                    ScreenState.SEARCH -> {
                        SearchScreen(
                            onBack = { currentScreen = ScreenState.HOME }
                        )
                    }
                    ScreenState.ARTIST_DETAIL -> {
                        selectedArtist?.let { artist ->
                            ArtistDetailScreen(
                                artist = artist,
                                onBack = { currentScreen = ScreenState.HOME }
                            )
                        } ?: run {
                            currentScreen = ScreenState.HOME
                        }
                    }
                }

                // Persistent Floating Mini Player Dock
                currentTrack?.let { track ->
                    val safeDuration = duration.coerceAtLeast(1L)
                    val progress = (currentPosition.toFloat() / safeDuration.toFloat()).coerceIn(0f, 1f)

                    MiniPlayerBar(
                        track = track,
                        isPlaying = isPlaying,
                        progress = progress,
                        onBarClick = { showExpandedPlayer = true },
                        onPlayPauseClick = { PlayerManager.togglePlayPause() },
                        onNextClick = { PlayerManager.playNext() },
                        modifier = Modifier
                            .align(Alignment.BottomCenter)
                            .padding(bottom = 8.dp)
                    )
                }

                // Full-Screen Bottom Sheet Player Modal
                if (showExpandedPlayer && currentTrack != null) {
                    val track = currentTrack!!
                    ExpandedPlayerSheet(
                        track = track,
                        isPlaying = isPlaying,
                        currentPosition = currentPosition,
                        duration = duration,
                        isShuffle = isShuffle,
                        repeatMode = repeatMode,
                        isLiked = FavoritesManager.isLiked(track.id),
                        onDismiss = { showExpandedPlayer = false },
                        onPlayPause = { PlayerManager.togglePlayPause() },
                        onNext = { PlayerManager.playNext() },
                        onPrevious = { PlayerManager.playPrevious() },
                        onSeek = { PlayerManager.seekTo(it) },
                        onToggleShuffle = { PlayerManager.toggleShuffle() },
                        onCycleRepeat = { PlayerManager.cycleRepeatMode() },
                        onToggleLike = { FavoritesManager.toggleLike(track) }
                    )
                }
            }
        }
    }
}

