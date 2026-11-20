package com.tuneus.music.data.local

import com.tuneus.music.data.model.Artist
import com.tuneus.music.data.model.Track

object CatalogData {

    val POPULAR_ARTISTS = listOf(
        Artist("S. P. Balasubrahmanyam", "Legend • 40k Songs", "file:///android_asset/images/artists/sp-balasubrahmanyam.jpg", "SP Balasubrahmanyam Telugu hits", "Telugu"),
        Artist("Sid Sriram", "Melody King • Srivalli", "file:///android_asset/images/artists/sid-sriram.jpg", "Sid Sriram Telugu", "Telugu"),
        Artist("Arijit Singh", "Soul of Bollywood", "file:///android_asset/images/artists/arijit-singh.jpg", "Arijit Singh romantic hits", "Hindi"),
        Artist("Shreya Ghoshal", "Melody Queen", "file:///android_asset/images/artists/shreya-ghoshal.jpg", "Shreya Ghoshal Telugu", "Telugu"),
        Artist("Anurag Kulkarni", "Ramuloo, Pilla Raa", "file:///android_asset/images/artists/anurag-kulkarni.jpg", "Anurag Kulkarni Telugu", "Telugu"),
        Artist("Mangli", "Folk Sensationalist", "file:///android_asset/images/artists/mangli.jpg", "Mangli songs", "Telugu"),
        Artist("Sonu Nigam", "Golden Voice", "file:///android_asset/images/artists/sonu-nigam.jpg", "Sonu Nigam romantic hits", "Hindi"),
        Artist("Karthik", "Ee Manase, Niluvaddham", "file:///android_asset/images/artists/karthik.jpg", "Karthik Telugu songs", "Telugu"),
        Artist("K. S. Chithra", "Nightingale of South", "file:///android_asset/images/artists/ks-chithra.jpg", "KS Chithra Telugu hits", "Telugu"),
        Artist("KK", "Timeless Voice", "file:///android_asset/images/artists/kk.jpg", "KK hits", "Hindi"),
        Artist("Devi Sri Prasad", "Rockstar DSP", "file:///android_asset/images/artists/dsp.jpg", "Devi Sri Prasad hits", "Telugu"),
        Artist("Atif Aslam", "Romantic Icon", "file:///android_asset/images/artists/atif-aslam.jpg", "Atif Aslam romantic hits", "Hindi"),
        Artist("Ram Miriyala", "DJ Tillu, Chitti", "file:///android_asset/images/artists/ram-miriyala.jpg", "Ram Miriyala songs", "Telugu"),
        Artist("Sunitha", "Melodious Diva", "file:///android_asset/images/artists/sunitha.jpg", "Sunitha Telugu songs", "Telugu"),
        Artist("Jubin Nautiyal", "Raataan Lambiyan", "file:///android_asset/images/artists/jubin-nautiyal.jpg", "Jubin Nautiyal songs", "Hindi"),
        Artist("Geetha Madhuri", "Pakka Local, Top Lesi", "file:///android_asset/images/artists/geetha-madhuri.jpg", "Geetha Madhuri Telugu", "Telugu"),
        Artist("Haricharan", "Kaatuka Kanneeru", "file:///android_asset/images/artists/haricharan.jpg", "Haricharan Telugu", "Telugu"),
        Artist("Lata Mangeshkar", "Voice of the Millennium", "file:///android_asset/images/artists/lata-mangeshkar.jpg", "Lata Mangeshkar timeless hits", "Hindi"),
        Artist("Kishore Kumar", "Evergreen Legend", "file:///android_asset/images/artists/kishore-kumar.jpg", "Kishore Kumar classic hits", "Hindi"),
        Artist("Armaan Malik", "Butta Bomma", "file:///android_asset/images/artists/armaan-malik.jpg", "Armaan Malik Hindi songs", "Hindi")
    )

    val ALL_DRAWER_ARTISTS = listOf(
        // Telugu
        Artist("S. P. Balasubrahmanyam", "Gana Gandharva • 40,000+ Songs", "file:///android_asset/images/artists/sp-balasubrahmanyam.jpg", "SP Balasubrahmanyam Telugu hits", "Telugu"),
        Artist("Sid Sriram", "Melody King • Srivalli, Samajavaragamana", "file:///android_asset/images/artists/sid-sriram.jpg", "Sid Sriram Telugu", "Telugu"),
        Artist("Anurag Kulkarni", "Ramuloo Ramulaa, Pilla Raa", "file:///android_asset/images/artists/anurag-kulkarni.jpg", "Anurag Kulkarni Telugu", "Telugu"),
        Artist("Karthik", "Ee Manase, Niluvaddham", "file:///android_asset/images/artists/karthik.jpg", "Karthik Telugu songs", "Telugu"),
        Artist("K. S. Chithra", "Nightingale of South • 25,000+ Songs", "file:///android_asset/images/artists/ks-chithra.jpg", "KS Chithra Telugu hits", "Telugu"),
        Artist("Shreya Ghoshal", "Melody Queen • Telugu & Hindi Classics", "file:///android_asset/images/artists/shreya-ghoshal.jpg", "Shreya Ghoshal Telugu", "Telugu"),
        Artist("Ram Miriyala", "DJ Tillu, Chitti, Ooru Palleturu", "file:///android_asset/images/artists/ram-miriyala.jpg", "Ram Miriyala songs", "Telugu"),
        Artist("Mangli", "Folk Sensationalist • Saranga Dariya", "file:///android_asset/images/artists/mangli.jpg", "Mangli songs", "Telugu"),
        Artist("Devi Sri Prasad", "Rockstar DSP • Pushpa, Rangasthalam", "file:///android_asset/images/artists/dsp.jpg", "Devi Sri Prasad hits", "Telugu"),
        Artist("Sunitha", "Melodious Diva • 1000+ Telugu Classics", "file:///android_asset/images/artists/sunitha.jpg", "Sunitha Telugu songs", "Telugu"),
        Artist("Haricharan", "Kaatuka Kanneeru, Manohari", "file:///android_asset/images/artists/haricharan.jpg", "Haricharan Telugu", "Telugu"),
        Artist("Geetha Madhuri", "Pakka Local, Top Lesi Poddi", "file:///android_asset/images/artists/geetha-madhuri.jpg", "Geetha Madhuri Telugu", "Telugu"),
        Artist("Hemachandra", "Piliche Pedavula Paina", "file:///android_asset/images/artists/hemachandra.jpg", "Hemachandra Telugu", "Telugu"),
        Artist("Revanth", "Manohari (Baahubali)", "file:///android_asset/images/artists/revanth.jpg", "L. V. Revanth Telugu hits", "Telugu"),
        Artist("S. P. Charan", "Adiga Adigo, Mellaga Tattindi", "file:///android_asset/images/artists/sp-charan.jpg", "S. P. Charan Telugu songs", "Telugu"),
        Artist("Rahul Sipligunj", "Naatu Naatu (Oscar Winner)", "file:///android_asset/images/artists/rahul-sipligunj.jpg", "Rahul Sipligunj Telugu", "Telugu"),
        Artist("Madhu Priya", "Vachinde, Aadabidda", "file:///android_asset/images/artists/madhu-priya.jpg", "Madhu Priya Telugu folk", "Telugu"),
        Artist("Ramya Behara", "Dhivara (Baahubali)", "file:///android_asset/images/artists/ramya-behara.jpg", "Ramya Behara Telugu hits", "Telugu"),
        Artist("Saketh Komanduri", "Reddy Ikkada Soodu", "file:///android_asset/images/artists/saketh-komanduri.jpg", "Saketh Komanduri songs", "Telugu"),
        Artist("Vijay Yesudas", "Malare, Telugu Masterpieces", "file:///android_asset/images/artists/vijay-yesudas.jpg", "Vijay Yesudas Telugu", "Telugu"),
        // Hindi
        Artist("Arijit Singh", "Soul of Bollywood • Kesariya, Tum Hi Ho", "file:///android_asset/images/artists/arijit-singh.jpg", "Arijit Singh romantic hits", "Hindi"),
        Artist("Sonu Nigam", "Golden Voice • Kal Ho Naa Ho", "file:///android_asset/images/artists/sonu-nigam.jpg", "Sonu Nigam romantic hits", "Hindi"),
        Artist("KK", "Timeless Voice • Yaaron, Zara Sa", "file:///android_asset/images/artists/kk.jpg", "KK hits", "Hindi"),
        Artist("Atif Aslam", "Romantic Icon • Dil Diyan Gallan", "file:///android_asset/images/artists/atif-aslam.jpg", "Atif Aslam romantic hits", "Hindi"),
        Artist("Jubin Nautiyal", "Raataan Lambiyan, Lut Gaye", "file:///android_asset/images/artists/jubin-nautiyal.jpg", "Jubin Nautiyal songs", "Hindi"),
        Artist("Lata Mangeshkar", "Voice of the Millennium", "file:///android_asset/images/artists/lata-mangeshkar.jpg", "Lata Mangeshkar timeless hits", "Hindi"),
        Artist("Kishore Kumar", "Evergreen Legend • Pal Pal Dil Ke Paas", "file:///android_asset/images/artists/kishore-kumar.jpg", "Kishore Kumar classic hits", "Hindi"),
        Artist("Mohit Chauhan", "Rockstar, Tum Se Hi", "file:///android_asset/images/artists/mohit-chauhan.jpg", "Mohit Chauhan romantic songs", "Hindi"),
        Artist("Armaan Malik", "Bol Do Na Zara, Main Hoon Hero", "file:///android_asset/images/artists/armaan-malik.jpg", "Armaan Malik Hindi songs", "Hindi"),
        Artist("Udit Narayan", "Tip Tip Barsa Paani, Pehla Nasha", "file:///android_asset/images/artists/udit-narayan.jpg", "Udit Narayan 90s hits", "Hindi"),
        Artist("Kumar Sanu", "King of 90s Melodies", "file:///android_asset/images/artists/kumar-sanu.jpg", "Kumar Sanu romantic hits", "Hindi"),
        Artist("Shaan", "Chand Sifarish, Tanha Dil", "file:///android_asset/images/artists/shaan.jpg", "Shaan romantic songs", "Hindi"),
        Artist("Alka Yagnik", "Queen of 90s & 2000s Melodies", "file:///android_asset/images/artists/alka-yagnik.jpg", "Alka Yagnik evergreen songs", "Hindi"),
        Artist("Asha Bhosle", "Versatile Diva • Dum Maro Dum", "file:///android_asset/images/artists/asha-bhosle.jpg", "Asha Bhosle classic hits", "Hindi"),
        Artist("Mohammed Rafi", "Emperor of Indian Cinema", "file:///android_asset/images/artists/mohammed-rafi.jpg", "Mohammed Rafi timeless classics", "Hindi"),
        Artist("Shankar Mahadevan", "Breathless, Mitwa, Maa", "file:///android_asset/images/artists/shankar-mahadevan.jpg", "Shankar Mahadevan powerful hits", "Hindi"),
        Artist("Neha Kakkar", "Party Anthem Queen • Dilbar, O Saki", "file:///android_asset/images/artists/neha-kakkar.jpg", "Neha Kakkar dance hits", "Hindi"),
        Artist("Mika Singh", "Powerhouse Energy • Mauja Hi Mauja", "file:///android_asset/images/artists/mika-singh.jpg", "Mika Singh party hits", "Hindi"),
        Artist("Vishal Mishra", "Pehle Bhi Main (Animal)", "file:///android_asset/images/artists/vishal-mishra.jpg", "Vishal Mishra soulful hits", "Hindi")
    )

    val BUNDLED_TRACKS = listOf(
        Track(
            id = "samajavaragamana",
            title = "Samajavaragamana",
            artist = "Sid Sriram",
            movie = "Ala Vaikunthapurramuloo",
            year = 2020,
            language = "Telugu",
            category = "Telugu",
            src = "https://aac.saavncdn.com/264/3494e82e16d4ea22c60e36502da285f2_320.mp4",
            artwork = "https://c.saavncdn.com/264/Ala-Vaikunthapurramuloo-Telugu-2019-20200113143343-500x500.jpg",
            duration = 222
        ),
        Track(
            id = "srivalli",
            title = "Srivalli",
            artist = "Sid Sriram",
            movie = "Pushpa: The Rise",
            year = 2021,
            language = "Telugu",
            category = "Telugu",
            src = "https://aac.saavncdn.com/491/299c5123d45e43b8a8b11eb0e14a2a1d_320.mp4",
            artwork = "https://c.saavncdn.com/491/Pushpa-The-Rise-Telugu-2021-20211217154546-500x500.jpg",
            duration = 224
        ),
        Track(
            id = "naatu-naatu",
            title = "Naatu Naatu",
            artist = "Rahul Sipligunj, Kaala Bhairava",
            movie = "RRR",
            year = 2022,
            language = "Telugu",
            category = "Telugu",
            src = "https://aac.saavncdn.com/743/449f8742ad05faef37eb7b9b2bfb0b97_320.mp4",
            artwork = "https://c.saavncdn.com/743/RRR-Telugu-2021-20211210131015-500x500.jpg",
            duration = 216
        ),
        Track(
            id = "allantha-doorala",
            title = "Allantha Doorala",
            artist = "S. P. Balasubrahmanyam",
            movie = "Aadavari Matalaku Ardhalu Veruley",
            year = 2007,
            language = "Telugu",
            category = "Telugu",
            src = "https://aac.saavncdn.com/483/3c96b533ef626347762d06d3a9f433c5_320.mp4",
            artwork = "https://c.saavncdn.com/483/Aadavari-Matalaku-Ardhalu-Veruley-2007-500x500.jpg",
            duration = 274
        ),
        Track(
            id = "ee-manase-se-se",
            title = "Ee Manase Se Se",
            artist = "S. P. Balasubrahmanyam",
            movie = "Tholiprema",
            year = 1998,
            language = "Telugu",
            category = "Telugu",
            src = "https://aac.saavncdn.com/252/c086f0cf5ab8996412d8d60f52bd059b_320.mp4",
            artwork = "https://c.saavncdn.com/252/Tholiprema-Telugu-2014-20251011224607-500x500.jpg",
            duration = 265
        ),
        Track(
            id = "ramuloo-ramulaa",
            title = "Ramuloo Ramulaa",
            artist = "Anurag Kulkarni, Mangli",
            movie = "Ala Vaikunthapurramuloo",
            year = 2020,
            language = "Telugu",
            category = "Telugu",
            src = "https://aac.saavncdn.com/264/46b0a1a0c4f80879ebfe87e7436ca5a9_320.mp4",
            artwork = "https://c.saavncdn.com/264/Ala-Vaikunthapurramuloo-Telugu-2019-20200113143343-500x500.jpg",
            duration = 264
        ),
        Track(
            id = "kesariya",
            title = "Kesariya",
            artist = "Arijit Singh, Pritam",
            movie = "Brahmastra",
            year = 2022,
            language = "Hindi",
            category = "Hindi",
            src = "https://aac.saavncdn.com/871/c2febd353f3a076a406fa37510f31f9f_320.mp4",
            artwork = "https://c.saavncdn.com/871/Brahmastra-Original-Motion-Picture-Soundtrack-Hindi-2022-20221006155213-500x500.jpg",
            duration = 268
        ),
        Track(
            id = "tum-hi-ho",
            title = "Tum Hi Ho",
            artist = "Arijit Singh",
            movie = "Aashiqui 2",
            year = 2013,
            language = "Hindi",
            category = "Hindi",
            src = "https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_320.mp4",
            artwork = "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",
            duration = 262
        ),
        Track(
            id = "channa-mereya",
            title = "Channa Mereya",
            artist = "Arijit Singh, Pritam",
            movie = "Ae Dil Hai Mushkil",
            year = 2016,
            language = "Hindi",
            category = "Hindi",
            src = "https://aac.saavncdn.com/624/e9e3e3b7bca00e3ba239d5622a5786ee_320.mp4",
            artwork = "https://c.saavncdn.com/624/Ae-Dil-Hai-Mushkil-Deluxe-Edition-Hindi-2016-500x500.jpg",
            duration = 289
        ),
        Track(
            id = "shape-of-you",
            title = "Shape of You",
            artist = "Ed Sheeran",
            movie = "÷ (Divide)",
            year = 2017,
            language = "English",
            category = "English",
            src = "https://aac.saavncdn.com/869/c27ea3c87a151b5c3e66bbd8dbcf9231_320.mp4",
            artwork = "https://c.saavncdn.com/869/Divide-Deluxe-Edition-English-2017-500x500.jpg",
            duration = 233
        ),
        Track(
            id = "believer",
            title = "Believer",
            artist = "Imagine Dragons",
            movie = "Evolve",
            year = 2017,
            language = "English",
            category = "English",
            src = "https://aac.saavncdn.com/393/d27376c9ad64b971a81ce3575d1f11c7_320.mp4",
            artwork = "https://c.saavncdn.com/393/Evolve-English-2017-500x500.jpg",
            duration = 204
        ),
        Track(
            id = "blinding-lights",
            title = "Blinding Lights",
            artist = "The Weeknd",
            movie = "After Hours",
            year = 2020,
            language = "English",
            category = "English",
            src = "https://aac.saavncdn.com/264/c83786aa0cbdf1fba2574e92a83ad9e7_320.mp4",
            artwork = "https://c.saavncdn.com/264/After-Hours-English-2020-20200320013008-500x500.jpg",
            duration = 200
        ),
        Track(
            id = "saranga-dariya",
            title = "Saranga Dariya",
            artist = "Mangli",
            movie = "Love Story",
            year = 2021,
            language = "Telugu",
            category = "Folk",
            src = "https://aac.saavncdn.com/280/81ce2b02baaaae4210d7a04913ea3b80_320.mp4",
            artwork = "https://c.saavncdn.com/280/Love-Story-Telugu-2021-20210924083510-500x500.jpg",
            duration = 227
        ),
        Track(
            id = "bullettu-bandi",
            title = "Bullettu Bandi",
            artist = "Mohana Bhogaraju",
            movie = "Bullettu Bandi",
            year = 2021,
            language = "Telugu",
            category = "Folk",
            src = "https://aac.saavncdn.com/009/afc28d94bfee619e879a150d37a4ee52_320.mp4",
            artwork = "https://c.saavncdn.com/009/Bullettu-Bandi-Telugu-2021-20210327120013-500x500.jpg",
            duration = 282
        )
    )
}

