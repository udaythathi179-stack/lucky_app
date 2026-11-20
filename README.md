# 🎵 Lucky App (Tuneus Mobile & Web Music Player)

> **Live Website:** [https://lucky-app-iofl.vercel.app](https://lucky-app-iofl.vercel.app)  
> **Android Package ID:** `com.luckyapp.mobile`  
> **iOS Bundle ID:** `com.luckyapp.mobile`  
> **Target Platforms:** Android (APK & AAB), iOS (Xcode Project), Web (Responsive SPA)

---

## 📱 Mobile Applications (Android & iOS)

Lucky App has been packaged into native mobile applications for Android and iOS using Ionic Capacitor v8:

### 1. Android Release
- **Direct Release APK:** [`release/LuckyApp-release.apk`](file:///c:/Users/User/OneDrive/Desktop/songs%20app/release/LuckyApp-release.apk)
- **Google Play App Bundle (AAB):** [`release/LuckyApp-release.aab`](file:///c:/Users/User/OneDrive/Desktop/songs%20app/release/LuckyApp-release.aab)
- **Package Name:** `com.luckyapp.mobile`
- **Compile SDK:** Android 36 (Android 16 preview / target Android 34+)
- **Signing Keystore:** `android/app/luckyapp-release-key.jks` (Key alias: `luckyapp`)

### 📲 How to Install the APK on Your Android Phone
1. Transfer `LuckyApp-release.apk` to your Android device (via USB cable, Google Drive, WhatsApp, or local download).
2. Tap on the APK file on your Android phone.
3. If prompted with *"Install Unknown Apps"*, tap **Settings** and enable **"Allow from this source"**.
4. Tap **Install**.
5. Tap **Open** and enjoy Lucky App natively!

### 2. iOS Xcode Project
- Located at: [`ios/App/App.xcodeproj`](file:///c:/Users/User/OneDrive/Desktop/songs%20app/ios/App/App.xcodeproj)
- Bundle Identifier: `com.luckyapp.mobile`
- Display Name: `Lucky App`
- **Building IPA on macOS:**
  ```bash
  cd ios/App
  pod install # if cocoapods used, or open directly in Xcode
  open App.xcodeproj
  # Select your Apple Developer Team in Signing & Capabilities, then Product > Archive.
  ```

---

## ✨ Features

- **🌍 Universal Online Song Search**: Search and stream complete full-length tracks across **Tollywood**, **Bollywood**, **English Pop/Rock/EDM/Hip-Hop**, **Punjabi**, **Tamil**, and **Global** hits.
- **⚡ Studio Master Quality**: Complete 320kbps full studio streams.
- **💾 Dual Download Options**:
  - **Save to Device**: Download MP3 files directly to your PC storage.
  - **Save In-App**: Save songs inside the browser storage for offline playback.
- **🎨 Electric Blue Aesthetic**: Electric cyan & sapphire neon theme with responsive card layouts and glowing badges.
- **🎛️ Equalizer & Visualizer**: Real-time Web Audio API frequency visualizer and EQ presets (Bass Boost, Vocal, Club, etc.).
- **🎹 Keyboard Shortcuts**: Instant spacebar play/pause, arrow skip/volume, `/` quick search, and `M` mute.

---

## 🚀 Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)

### Quick Start

1. Start the server:
   ```bash
   node server.js
   ```
   *(Or run `npm start` or double-click `Launch-Tuneus.bat`)*

2. Open your web browser and go to:
   **[http://localhost:3000](http://localhost:3000)**

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Space` | Play / Pause |
| `Left Arrow` / `Right Arrow` | Seek backward / forward 5s |
| `Up Arrow` / `Down Arrow` | Volume up / down 5% |
| `M` | Toggle Mute |
| `S` | Toggle Shuffle |
| `R` | Cycle Repeat (Off / All / One) |
| `F` | Toggle Full-screen Player |
| `Q` | Open Queue drawer |
| `/` | Focus search bar |
| `Esc` | Close open overlays / Clear search |

---

## 📄 License
ISC License
