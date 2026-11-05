# 🎵 Tuneus Music - Native Kotlin Android App

A 100% native Android music streaming app built with **Kotlin**, **Jetpack Compose**, and **AndroidX Media3 (ExoPlayer)**. Replicates the full Tuneus web experience with native Android background audio, lock screen media controls, direct 320kbps JioSaavn streaming, and offline persistence.

---

## ✨ Features

- **⚡ Modern Jetpack Compose UI**: Clean Electric Blue Dark Theme matching the web app.
- **🎧 Studio Master 320kbps Streaming**: Direct audio stream playback using native DES/ECB decryption without needing an external backend.
- **🕒 Recent Songs Section (FIFO Max 9 Eviction)**:
  - Tracks every song listened to from the search bar or library.
  - Keeps strictly up to 9 songs.
  - When the 10th song is listened to, the 1st/oldest song is automatically evicted.
- **⭐ Popular Artists & Legendary Singers**:
  - Horizontal circular avatars for SPB, Sid Sriram, Arijit Singh, Shreya Ghoshal, Anurag Kulkarni, Mangli, Sonu Nigam, etc.
  - Tap any artist avatar to instantly load and play their complete discography.
- **🎙️ Sliding Artist Menu Drawer**:
  - Browse 40+ legendary Telugu & Hindi singers with live filter and tabs (`All`, `Telugu`, `Hindi`).
- **🔍 Live Online Catalog Search**:
  - Fast search with coroutine debouncing directly querying the 320kbps catalog.
- **🔊 Background Media Playback (Media3 ExoPlayer)**:
  - System Media Notification with album artwork, title, artist, and playback controls (play, pause, next, previous).
  - Keeps playing smoothly when switching apps or locking the screen.
- **📱 Mini Player & Full-Screen Player Modal**:
  - Floating bottom mini player bar with progress indicator.
  - Full-screen sheet with large album artwork, interactive scrubber slider, shuffle, and repeat modes.
- **♥ Liked / Favorites Management**:
  - Persistent local favorites storage.

---

## 📂 Project Structure

```
tuneus-android/
├── app/
│   ├── build.gradle.kts
│   ├── src/main/
│   │   ├── AndroidManifest.xml
│   │   ├── assets/
│   │   │   └── images/artists/      # Local artist avatars
│   │   ├── java/com/tuneus/music/
│   │   │   ├── MainActivity.kt      # Main Activity & Navigation
│   │   │   ├── TuneusApplication.kt # Application initialization
│   │   │   ├── data/
│   │   │   │   ├── model/           # Track, Artist, Playlist models
│   │   │   │   ├── remote/          # SaavnRepository & BlowfishDecryptor
│   │   │   │   └── local/           # CatalogData, RecentSongsManager, FavoritesManager
│   │   │   ├── playback/            # MusicPlaybackService & PlayerManager (Media3)
│   │   │   └── ui/
│   │   │       ├── theme/           # Color, Theme, Typography (Electric Blue)
│   │   │       ├── components/      # QuickJumpCard, SongCard, MiniPlayer, PlayerSheet, Drawer
│   │   │       └── screens/         # HomeScreen, SearchScreen, ArtistDetailScreen
│   │   └── res/                     # Strings, Colors, Themes, Drawables
├── build.gradle.kts
├── settings.gradle.kts
└── gradlew.bat
```

---

## 🚀 How to Run in Android Studio

1. Open **Android Studio** (Hedgehog, Iguana, or Koala recommended).
2. Click **File** > **Open...** and select the folder:
   `c:\Users\User\OneDrive\Desktop\tuneus-android`
3. Wait for Android Studio to sync Gradle dependencies.
4. Select your connected Android phone (via USB with Developer Options enabled) or an Android Emulator.
5. Click the green **Run (▶)** button or press `Shift + F10`.

---

## 🛠️ Build APK from Command Line

To generate a debug APK:
```cmd
cd "c:\Users\User\OneDrive\Desktop\tuneus-android"
.\gradlew assembleDebug
```
The output APK will be located at:
`app/build/outputs/apk/debug/app-debug.apk`

