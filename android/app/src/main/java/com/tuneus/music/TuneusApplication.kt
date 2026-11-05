package com.tuneus.music

import android.app.Application
import com.tuneus.music.data.local.FavoritesManager
import com.tuneus.music.data.local.RecentSongsManager
import com.tuneus.music.playback.PlayerManager

class TuneusApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        RecentSongsManager.init(this)
        FavoritesManager.init(this)
        PlayerManager.init(this)
    }
}

