# 🎵 Tuneus Music Player

> **Tuneus** is a world-class, responsive full-length studio music streaming Progressive Web Application (PWA) with 320kbps audio playback, offline downloads, equalizer & visualizer, and universal online song search covering **Tollywood, Bollywood, English & Global hits**.

---

## ✨ Features

- **🌍 Universal Online Song Search**: Search and stream complete full-length tracks across **Tollywood**, **Bollywood**, **English Pop/Rock/EDM/Hip-Hop**, **Punjabi**, **Tamil**, and **Global** hits.
- **⚡ Studio Master Quality**: Complete 320kbps full studio streams.
- **💾 Dual Download Options**:
  - **Save to Device**: Download MP3 files directly to your phone or laptop storage.
  - **Save In-App**: Save songs inside the app with IndexedDB for offline listening with 0 data usage.
- **🎨 World-Famous Blue Aesthetic**: Electric cyan & sapphire neon theme with responsive card layouts and glowing badges.
- **📱 PWA & Mobile Install Ready**: Full PWA manifest, service worker cache, and icons for seamless home screen install on Android & iOS.
- **🎛️ Equalizer & Visualizer**: Real-time Web Audio API frequency visualizer and EQ presets (Bass Boost, Vocal, Club, etc.).
- **🎹 Keyboard Shortcuts**: Instant spacebar play/pause, arrow skip/volume, `/` quick search, and `M` mute.

---

## 📱 Mobile App (Android APK & iOS)

### 🤖 Android (APK & Native Install)
1. **Direct APK Download**:
   - Go to [Releases](https://github.com/udaythathi179-stack/lucky_app/releases) and download **`Tuneus.apk`**.
   - Tap the downloaded `.apk` file and select **Install**.
2. **Instant 1-Click PWA Install (No APK needed)**:
   - Open `https://judy-guestbook-seekers-asbestos.trycloudflare.com` in **Google Chrome**.
   - Tap **"Install Tuneus"** banner or tap the 3 dots (`⋮`) -> **"Install app"**.
   - Tuneus will be installed directly to your phone's app list with the glowing logo!

### 🍏 iOS (iPhone & iPad)
- iOS does not support raw `.apk` files, but natively supports installing PWAs directly to your home screen with full app capabilities:
1. Open `https://judy-guestbook-seekers-asbestos.trycloudflare.com` in **Safari** on your iPhone or iPad.
2. Tap the **Share** button (the square with an arrow pointing up at the bottom).
3. Scroll down and tap **"Add to Home Screen"** (`➕`).
4. Tap **Add** in the top-right corner.
5. **Tuneus** now appears on your iOS home screen as a standalone full-screen app!

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/udaythathi179-stack/lucky_app.git
   cd lucky_app
   ```

2. Start the local server:
   ```bash
   node --openssl-legacy-provider server.js
   ```
   *(Or run `npm start` or double-click `Launch-Tuneus.bat` on Windows)*

3. Open your browser:
   - **Local PC**: [http://localhost:3000](http://localhost:3000)
   - **LAN Network**: [http://<your-local-ip>:3000](http://localhost:3000)

---

## 📂 Project Structure

```
songs app/
├── app.js               # Core player logic, state management, search & IndexedDB offline cache
├── styles.css           # World-famous electric cyan/sapphire theme & responsive UI
├── index.html           # Main application structure, modals, player bar & quick tags
├── server.js            # Node.js backend proxy, audio range streaming & 320kbps decipher
├── manifest.json        # PWA configuration
├── sw.js                # Service Worker for offline asset caching
├── Launch-Tuneus.bat    # Windows desktop 1-click launcher
├── package.json         # Project metadata and start script
└── icons & assets       # Logo, favicon, and PWA icons
```

---

## 📄 License
ISC © Uday Kumar

