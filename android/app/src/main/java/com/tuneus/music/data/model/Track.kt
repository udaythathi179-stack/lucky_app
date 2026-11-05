package com.tuneus.music.data.model

data class Track(
    val id: String,
    val title: String,
    val artist: String,
    val movie: String = "",
    val year: Int = 2024,
    val language: String = "Telugu",
    val category: String = "Telugu",
    val src: String,
    val artwork: String = "",
    val duration: Int = 240,
    val isOnline: Boolean = false
)

