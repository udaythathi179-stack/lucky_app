package com.tuneus.music.data.model

data class Artist(
    val name: String,
    val tag: String,
    val img: String,
    val query: String,
    val language: String = "Telugu"
)

