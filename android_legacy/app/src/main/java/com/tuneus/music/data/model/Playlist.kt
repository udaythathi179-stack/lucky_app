package com.tuneus.music.data.model

data class Playlist(
    val id: String,
    val name: String,
    val description: String = "",
    val trackIds: List<String> = emptyList()
)

