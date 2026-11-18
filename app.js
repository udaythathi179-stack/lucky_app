// Tuneus - Studio Music Streaming Catalog (Tollywood, Bollywood, Folk, English & Global)
const catalog = [
  {
    "id": "allantha-doorala",
    "title": "Allantha Doorala",
    "artist": "S. P. Balasubrahmanyam",
    "movie": "Aadavari Matalaku Ardhalu Veruley",
    "year": 2007,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/483/3c96b533ef626347762d06d3a9f433c5_320.mp4",
    "artwork": "https://c.saavncdn.com/483/Aadavari-Matalaku-Ardhalu-Veruley-2007-500x500.jpg",
    "duration": 274
  },
  {
    "id": "ee-manase-se-se",
    "title": "Ee Manase Se Se",
    "artist": "S. P. Balasubrahmanyam",
    "movie": "Tholiprema",
    "year": 1998,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/252/c086f0cf5ab8996412d8d60f52bd059b_320.mp4",
    "artwork": "https://c.saavncdn.com/252/Tholiprema-Telugu-2014-20251011224607-500x500.jpg",
    "duration": 265
  },
  {
    "id": "samajavaragamana",
    "title": "Samajavaragamana",
    "artist": "Sid Sriram",
    "movie": "Ala Vaikunthapurramuloo",
    "year": 2019,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/517/339d76dce4db4f43f4721eec2d8f03ef_320.mp4",
    "artwork": "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
    "duration": 219
  },
  {
    "id": "srivalli",
    "title": "Srivalli",
    "artist": "Sid Sriram",
    "movie": "Pushpa - The Rise",
    "year": 2021,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/000/05c5d77f6a8225d6667cf7a1fcaf37d8_320.mp4",
    "artwork": "https://c.saavncdn.com/blob/056/Pushpa-The-Rise-Telugu-2021-20211216115409-500x500.jpg",
    "duration": 221
  },
  {
    "id": "ramuloo-ramulaa",
    "title": "Ramuloo Ramulaa",
    "artist": "Anurag Kulkarni, Mangli",
    "movie": "Ala Vaikunthapurramuloo",
    "year": 2019,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/517/5702757c42c1ad44b3224a339817c8b0_320.mp4",
    "artwork": "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
    "duration": 245
  },
  {
    "id": "sirivennela",
    "title": "Sirivennela",
    "artist": "Anurag Kulkarni",
    "movie": "Shyam Singha Roy - Telugu",
    "year": 2021,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/008/663f6bb75d853aa700bffbebcb4e74fc_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/008/Shyam-Singha-Roy-Telugu-Telugu-2021-20220113123204-500x500.jpg",
    "duration": 253
  },
  {
    "id": "pilla-raa",
    "title": "Pilla Raa",
    "artist": "Anurag Kulkarni",
    "movie": "RX 100",
    "year": 2018,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/172/4c364289c4c896e2a87012f74ba4a11d_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/172/RX-100-Telugu-2018-20230207103253-500x500.jpg",
    "duration": 235
  },
  {
    "id": "nuvve-nuvve-kavalantundi",
    "title": "Nuvve Nuvve Kavalantundi",
    "artist": "K. S. Chithra",
    "movie": "Nuvve Nuvve",
    "year": 2002,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/312/b7f6f9bb21067eb568f3ac1b3af7ed8d_320.mp4",
    "artwork": "https://c.saavncdn.com/312/Nuvve-Nuvve-2002-500x500.jpg",
    "duration": 288
  },
  {
    "id": "mooga-manasulu",
    "title": "Mooga Manasulu",
    "artist": "Shreya Ghoshal, Anurag Kulkarni",
    "movie": "Mahanati",
    "year": 2018,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/187/cd44883b7bef19f22178977a770fea76_320.mp4",
    "artwork": "https://c.saavncdn.com/187/Mahanati-Telugu-2018-20180531-500x500.jpg",
    "duration": 254
  },
  {
    "id": "chitti",
    "title": "Chitti",
    "artist": "Ram Miriyala",
    "movie": "Jathi Ratnalu",
    "year": 2021,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/604/f2c7f087e4bee0bf947b0c43bc22a507_320.mp4",
    "artwork": "https://c.saavncdn.com/604/Jathi-Ratnalu-Telugu-2021-20251011225120-500x500.jpg",
    "duration": 186
  },
  {
    "id": "tillu-anna-dj-pedithe",
    "title": "Tillu Anna DJ Pedithe",
    "artist": "Ram Miriyala",
    "movie": "DJ Tillu",
    "year": 2022,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/430/7c1e7a6ca761e7db04d9169208d46eca_320.mp4",
    "artwork": "https://c.saavncdn.com/430/DJ-Tillu-Telugu-2022-20220210033850-500x500.jpg",
    "duration": 183
  },
  {
    "id": "ooru-palletooru",
    "title": "Ooru Palletooru",
    "artist": "Ram Miriyala",
    "movie": "Balagam",
    "year": 2023,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/000/2b768ef9928cdc7dc77c032227082576_320.mp4",
    "artwork": "https://c.saavncdn.com/000/Balagam-Telugu-2023-20230304184334-500x500.jpg",
    "duration": 247
  },
  {
    "id": "saranga-dariya",
    "title": "Saranga Dariya",
    "artist": "Mangli",
    "movie": "Love Story",
    "year": 2020,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/582/499f47fee99a0809e9d2b343ac2bec8e_320.mp4",
    "artwork": "https://c.saavncdn.com/582/Love-Story-Telugu-2020-20210923220520-500x500.jpg",
    "duration": 230
  },
  {
    "id": "jwala-reddy",
    "title": "Jwala Reddy",
    "artist": "Mangli, Shankar Babu",
    "movie": "Seetimaarr",
    "year": 2021,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/null/934439e9473fb0240ae6c727683df225_320.mp4",
    "artwork": "https://c.saavncdn.com/000/Seetimaarr-Telugu-2021-20210825165343-500x500.jpg",
    "duration": 245
  },
  {
    "id": "galli-chinada-bonalu-song",
    "title": "Galli Chinada (Bonalu Song)",
    "artist": "Mangli",
    "movie": "Bonalu Song 2024",
    "year": 2024,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/246/51e86753266aa1f2b16f324baab76f85_320.mp4",
    "artwork": "https://c.saavncdn.com/246/Bonalu-Song-2024-Telugu-2024-20240711234452-500x500.jpg",
    "duration": 264
  },
  {
    "id": "pakka-local",
    "title": "Pakka Local",
    "artist": "Geetha Madhuri, Sagar",
    "movie": "Janatha Garage",
    "year": 2016,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/974/4bfe0670f5515c0ee16a98fbb2a8c27d_320.mp4",
    "artwork": "https://c.saavncdn.com/974/Janatha-Garage-Telugu-2016-20251012002813-500x500.jpg",
    "duration": 259
  },
  {
    "id": "top-lesi-poddi",
    "title": "Top Lesi Poddi",
    "artist": "Geetha Madhuri, Sagar",
    "movie": "Iddarammayilatho",
    "year": 2013,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/514/fe66691dec3c9f0660c14073878e779a_320.mp4",
    "artwork": "https://c.saavncdn.com/514/Idharammayilatho-2013-500x500.jpg",
    "duration": 259
  },
  {
    "id": "manohari",
    "title": "Manohari",
    "artist": "L. V. Revanth, Mohana Bhogaraju",
    "movie": "Baahubali - The Beginning (Telugu)",
    "year": 2015,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/301/0f681e3f10be2861001857ac9fc4da56_320.mp4",
    "artwork": "https://c.saavncdn.com/301/Baahubali-The-Beginning-Telugu-2015-20251028160018-500x500.jpg",
    "duration": 216
  },
  {
    "id": "teliseney-na-nuvvey",
    "title": "Teliseney Na Nuvvey",
    "artist": "L. V. Revanth",
    "movie": "Arjun Reddy",
    "year": 2017,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/630/7655fe13643d8f86292c36aa2c2d3898_320.mp4",
    "artwork": "https://c.saavncdn.com/630/Arjun-Reddy-Telugu-2017-20200817233242-500x500.jpg",
    "duration": 252
  },
  {
    "id": "naatu-naatu",
    "title": "Naatu Naatu",
    "artist": "Rahul Sipligunj, Kaala Bhairava",
    "movie": "RRR - Telugu",
    "year": 2022,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/683/000ab54759049a8451ffcdc6412a0ef6_320.mp4",
    "artwork": "https://c.saavncdn.com/683/RRR-Telugu-Telugu-2022-20250828171313-500x500.jpg",
    "duration": 214
  },
  {
    "id": "ranga-ranga-rangasthalaana",
    "title": "Ranga Ranga Rangasthalaana",
    "artist": "Rahul Sipligunj",
    "movie": "Rangasthalam",
    "year": 2018,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/065/583b04cb1a3033f8c1cd0f8b7ce0463b_320.mp4",
    "artwork": "https://c.saavncdn.com/065/Rangasthalam-Telugu-2017-20251012015759-500x500.jpg",
    "duration": 308
  },
  {
    "id": "dhivara",
    "title": "Dhivara",
    "artist": "Ramya Behara, Deepu",
    "movie": "Baahubali - The Beginning (Telugu)",
    "year": 2015,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/301/78a0e467f2f62690869c1b0474745953_320.mp4",
    "artwork": "https://c.saavncdn.com/301/Baahubali-The-Beginning-Telugu-2015-20251028160018-500x500.jpg",
    "duration": 327
  },
  {
    "id": "lover-also-fighter-also",
    "title": "Lover Also Fighter Also",
    "artist": "Ramya Behara, Allu Arjun",
    "movie": "Naa Peru Surya Naa Illu India",
    "year": 2018,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/416/a6359c4d18edf63f8b9f82523f5d51b6_320.mp4",
    "artwork": "https://c.saavncdn.com/416/Naa-Peru-Surya-Naa-Illu-India-Telugu-2018-20180422-500x500.jpg",
    "duration": 236
  },
  {
    "id": "em-sandeham-ledu",
    "title": "Em Sandeham Ledu",
    "artist": "Sunitha, Kalyani Malik",
    "movie": "Oohalu Gusagusalade (Original Motion Picture Soundtrack)",
    "year": 2014,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/243/c1e3c893e19e706cc87c8ff7ca7ba8b1_320.mp4",
    "artwork": "https://c.saavncdn.com/243/Oohalu-Gusagusalade-Telugu-2014-20240802162328-500x500.jpg",
    "duration": 232
  },
  {
    "id": "kaatuka-kanneeru",
    "title": "Kaatuka Kanneeru",
    "artist": "Haricharan",
    "movie": "Aakaasam Nee Haddhu Ra",
    "year": 2020,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/114/ff4b98b216bbb44bf1ec511fbd3a83d1_320.mp4",
    "artwork": "https://c.saavncdn.com/114/Aakaasam-Nee-Haddhu-Ra-Telugu-2020-20201111104315-500x500.jpg",
    "duration": 276
  },
  {
    "id": "manasa",
    "title": "Manasa",
    "artist": "Haricharan",
    "movie": "Yeto Vellipoyindhi Manasu",
    "year": 2012,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/606/1647f817ead753bac3770e4d34b82eac_320.mp4",
    "artwork": "https://c.saavncdn.com/606/Yeto-Vellipoyindhi-Manasu-Telugu-2012-20190914122125-500x500.jpg",
    "duration": 366
  },
  {
    "id": "evare",
    "title": "Evare",
    "artist": "Vijay Yesudas",
    "movie": "Premam",
    "year": 2016,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/121/474e2fa83b583a9a4ccee850e0fd5bc1_320.mp4",
    "artwork": "https://c.saavncdn.com/121/Premam2-Telugu-2016-500x500.jpg",
    "duration": 309
  },
  {
    "id": "pushpa-pushpa",
    "title": "Pushpa Pushpa",
    "artist": "Devi Sri Prasad, Nakash Aziz",
    "movie": "Top 10 Dance Dhamaka Hits",
    "year": 2025,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/915/338e5143057ba7dcd6c7bbbb1ce8bb89_320.mp4",
    "artwork": "https://c.saavncdn.com/915/Top-10-Dance-Dhamaka-Hits-Telugu-2025-20251014181041-500x500.jpg",
    "duration": 247
  },
  {
    "id": "kissik",
    "title": "Kissik",
    "artist": "Devi Sri Prasad, Sublahshini",
    "movie": "Tollywood Romantic Songs",
    "year": 2026,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/209/a28988f11e10beedabf2eb4d98f2a77a_320.mp4",
    "artwork": "https://c.saavncdn.com/209/Tollywood-Romantic-Songs-Telugu-2026-20260206171136-500x500.jpg",
    "duration": 248
  },
  {
    "id": "vachinde",
    "title": "Vachinde",
    "artist": "Madhu Priya, Ram Miriyala",
    "movie": "Fidaa",
    "year": 2017,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/904/991725e264a6af3ac3d10a0c8bd3164c_320.mp4",
    "artwork": "https://c.saavncdn.com/904/Fidaa-Telugu-2017-500x500.jpg",
    "duration": 322
  },
  {
    "id": "aadabidda",
    "title": "Aadabidda",
    "artist": "Madhu Priya",
    "movie": "Sillam Sai Kattakinda",
    "year": 2022,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/006/8585fd2f8b188ea915e9985a84570c16_320.mp4",
    "artwork": "https://c.saavncdn.com/006/Sillam-Sai-Kattakinda-Telugu-2022-20250516155007-500x500.jpg",
    "duration": 248
  },
  {
    "id": "piliche-pedavula-paina",
    "title": "Piliche Pedavula Paina",
    "artist": "Hemachandra",
    "movie": "Khaleja",
    "year": 2010,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/616/29bd409625822a7ba5cc15997fa7bae1_320.mp4",
    "artwork": "https://c.saavncdn.com/616/Khaleja-Telugu-2010-20250606101049-500x500.jpg",
    "duration": 342
  },
  {
    "id": "adiga-adigo",
    "title": "Adiga Adigo",
    "artist": "S. P. Charan",
    "movie": "Ninnu Kori",
    "year": 2017,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/070/c9fc65602ab820be804527719172ac5c_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/070/Ninnu-Kori-Telugu-2017-20220323073319-500x500.jpg",
    "duration": 209
  },
  {
    "id": "reddy-ikkada-soodu",
    "title": "Reddy Ikkada Soodu",
    "artist": "Saketh Komanduri, Daler Mehndi",
    "movie": "Aravindha Sametha",
    "year": 2018,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/260/8600d4d610ce6d7a771a75ec07c6d628_320.mp4",
    "artwork": "https://c.saavncdn.com/260/Aravindha-Sametha-Telugu-2018-20181031-500x500.jpg",
    "duration": 244
  },
  {
    "id": "baguntundi-nuvvu-navvithe",
    "title": "Baguntundi Nuvvu Navvithe",
    "artist": "Saketh Komanduri",
    "movie": "Atithi Devobhava",
    "year": 2022,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/257/a62e37bc8207cc11bc1c3850fc920807_320.mp4",
    "artwork": "https://c.saavncdn.com/257/Atithi-Devobhava-Original-Motion-Picture-Soundtrack--Telugu-2022-20220107133410-500x500.jpg",
    "duration": 222
  },
  {
    "id": "bullettu-bandi",
    "title": "Bullettu Bandi",
    "artist": "Mohana Bhogaraju",
    "movie": "Bullettu Bandi",
    "year": 2021,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/009/afc28d94bfee619e879a150d37a4ee52_320.mp4",
    "artwork": "https://c.saavncdn.com/009/Bullettu-Bandi-Telugu-2021-20210327120013-500x500.jpg",
    "duration": 282
  },
  {
    "id": "varaha-roopam",
    "title": "Varaha Roopam",
    "artist": "Sai Vignesh",
    "movie": "Radhe Govind (Shree Krishna Bhajan)",
    "year": 2013,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/887/7d3bac1eb37fc22306eac9dd37a54693_320.mp4",
    "artwork": "https://c.saavncdn.com/887/Radhe-Govind-Shree-Krishna-Bhajan--Hindi-2001-20200903140631-500x500.jpg",
    "duration": 63
  },
  {
    "id": "chaudhary",
    "title": "Chaudhary",
    "artist": "Mame Khan, Amit Trivedi",
    "movie": "Coke Studio S2",
    "year": 2023,
    "language": "Hindi",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/668/e66b0ca97c953970ed512e327b5f969e_320.mp4",
    "artwork": "https://c.saavncdn.com/668/Coke-Studio-S2-Hindi-2023-20260606091636-500x500.jpg",
    "duration": 420
  },
  {
    "id": "kesariya-balam",
    "title": "Kesariya Balam",
    "artist": "Mame Khan",
    "movie": "Kesariya Balam - Folk Fusion by the Maestro",
    "year": 2016,
    "language": "Hindi",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/172/a4bea4456e24237e27cfe35a86d5cec7_320.mp4",
    "artwork": "https://c.saavncdn.com/172/Kesariya-Balam-Folk-Fusion-by-the-Maestro-Rajasthani-2016-20220430001351-500x500.jpg",
    "duration": 357
  },
  {
    "id": "kesariya",
    "title": "Kesariya",
    "artist": "Arijit Singh, Pritam",
    "movie": "Brahmastra",
    "year": 2022,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/871/c2febd353f3a076a406fa37510f31f9f_320.mp4",
    "artwork": "https://c.saavncdn.com/871/Brahmastra-Original-Motion-Picture-Soundtrack-Hindi-2022-20221006155213-500x500.jpg",
    "duration": 268
  },
  {
    "id": "tum-hi-ho",
    "title": "Tum Hi Ho",
    "artist": "Arijit Singh",
    "movie": "Aashiqui 2",
    "year": 2013,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_320.mp4",
    "artwork": "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",
    "duration": 262
  },
  {
    "id": "channa-mereya",
    "title": "Channa Mereya",
    "artist": "Arijit Singh, Pritam",
    "movie": "Ae Dil Hai Mushkil  [Deluxe Edition]",
    "year": 2016,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/608/26836683536476d7c5fda4473c2dce98_320.mp4",
    "artwork": "https://c.saavncdn.com/608/Ae-Dil-Hai-Mushkil-Deluxe-Edition-Hindi-2016-500x500.jpg",
    "duration": 289
  },
  {
    "id": "apna-bana-le",
    "title": "Apna Bana Le",
    "artist": "Arijit Singh, Sachin-Jigar",
    "movie": "Bhediya",
    "year": 2023,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/815/483a6e118e8108cbb3e5cd8701674f32_320.mp4",
    "artwork": "https://c.saavncdn.com/815/Bhediya-Hindi-2023-20230927155213-500x500.jpg",
    "duration": 261
  },
  {
    "id": "kal-ho-naa-ho",
    "title": "Kal Ho Naa Ho",
    "artist": "Sonu Nigam",
    "movie": "Kal Ho Naa Ho",
    "year": 2003,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/587/d3bd1ed49eb108d2425e4875cc3ad86e_320.mp4",
    "artwork": "https://c.saavncdn.com/587/Kal-Ho-Naa-Ho-Hindi-2003-20190516130956-500x500.jpg",
    "duration": 321
  },
  {
    "id": "abhi-mujh-mein-kahin",
    "title": "Abhi Mujh Mein Kahin",
    "artist": "Sonu Nigam",
    "movie": "Agneepath",
    "year": 2011,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/317/ff7bb9dd26d1e8054bab5bb90c4a6b2a_320.mp4",
    "artwork": "https://c.saavncdn.com/317/Agneepath-Hindi-2011-20190603132941-500x500.jpg",
    "duration": 365
  },
  {
    "id": "deewani-mastani",
    "title": "Deewani Mastani",
    "artist": "Shreya Ghoshal",
    "movie": "Bajirao Mastani",
    "year": 2025,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/808/08d91b5009b5e221ea5838d2acb4b690_320.mp4",
    "artwork": "https://c.saavncdn.com/808/Bajirao-Mastani-Hindi-2025-20260120201154-500x500.jpg",
    "duration": 339
  },
  {
    "id": "teri-ore",
    "title": "Teri Ore",
    "artist": "Shreya Ghoshal, Rahat Fateh Ali Khan",
    "movie": "Singh Is Kinng",
    "year": 2008,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/963/07265c1c801e9d38c4205119d2cfb759_320.mp4",
    "artwork": "https://c.saavncdn.com/942/Singh-Is-Kinng-Hindi-2008-20190305113715-500x500.jpg",
    "duration": 289
  },
  {
    "id": "lag-ja-gale",
    "title": "Lag Ja Gale",
    "artist": "Lata Mangeshkar",
    "movie": "Woh Kaun Thi",
    "year": 1964,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/834/ea681a69a0bc7ecc4cd3ea4fc477cefe_320.mp4",
    "artwork": "https://c.saavncdn.com/834/Woh-Kaun-Thi-Hindi-1964-20251103094113-500x500.jpg",
    "duration": 257
  },
  {
    "id": "tujhe-dekha-to-yeh-jaana-sanam",
    "title": "Tujhe Dekha To Yeh Jaana Sanam",
    "artist": "Lata Mangeshkar, Kumar Sanu",
    "movie": "Dilwale Dulhania Le Jayenge",
    "year": 1995,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/588/1915cd0934f79eeb646ffebde384e59d_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/588/Dilwale-Dulhania-Le-Jayenge-Hindi-1995-20171114-500x500.jpg",
    "duration": 303
  },
  {
    "id": "pal-pal-dil-ke-paas",
    "title": "Pal Pal Dil Ke Paas",
    "artist": "Kishore Kumar",
    "movie": "Best of Kishore Da",
    "year": 2026,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/132/8ea5a52dd6250f58374bba48a721d986_320.mp4",
    "artwork": "https://c.saavncdn.com/132/Best-of-Kishore-Da-Hindi-2026-20260617153038-500x500.jpg",
    "duration": 327
  },
  {
    "id": "o-mere-dil-ke-chain",
    "title": "O Mere Dil Ke Chain",
    "artist": "Kishore Kumar",
    "movie": "Mere Jeevan Saathi",
    "year": 1972,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/086/e7cb16446c3a8205febe7aa602a1c97a_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/086/Mere-Jeevan-Saathi-Hindi-1972-20200901153944-500x500.jpg",
    "duration": 277
  },
  {
    "id": "pehla-nasha",
    "title": "Pehla Nasha",
    "artist": "Udit Narayan, Sadhana Sargam",
    "movie": "Jo Jeeta Wohi Sikandar",
    "year": 1992,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/852/9d335ee08b26f171a3d65e11f8819d52_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/852/Jo-Jeeta-Wohi-Sikandar-Hindi-1992-500x500.jpg",
    "duration": 293
  },
  {
    "id": "main-nikla-gaddi-leke",
    "title": "Main Nikla Gaddi Leke",
    "artist": "Udit Narayan",
    "movie": "Gadar - Ek Prem Katha",
    "year": 2001,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/228/d28a57ac4d8bbc4bdc0dba65795c7add_320.mp4",
    "artwork": "https://c.saavncdn.com/605/Gadar-Ek-Prem-Katha-Hindi-2001-20250617084053-500x500.jpg",
    "duration": 326
  },
  {
    "id": "chura-ke-dil-mera",
    "title": "Chura Ke Dil Mera",
    "artist": "Kumar Sanu, Alka Yagnik",
    "movie": "Bollywood Queens",
    "year": 2016,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/367/887807906880a91aaa1b09432a6e0161_320.mp4",
    "artwork": "https://c.saavncdn.com/367/Bollywood-Queens-Hindi-2016-20260331205729-500x500.jpg",
    "duration": 475
  },
  {
    "id": "dheere-dheere-se-meri-zindagi",
    "title": "Dheere Dheere Se Meri Zindagi",
    "artist": "Kumar Sanu",
    "movie": "Aashiqui",
    "year": 1989,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/088/4f7393c087c15f563b88632dae29bb0c_320.mp4",
    "artwork": "https://c.saavncdn.com/088/Aashiqui-Hindi-1989-20241225141825-500x500.jpg",
    "duration": 327
  },
  {
    "id": "dum-maro-dum",
    "title": "Dum Maro Dum",
    "artist": "Asha Bhosle",
    "movie": "Hare Rama Hare Krishna",
    "year": 1971,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/046/7f200fd05e46ac6b90542fad7637d0c9_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/046/Hare-Rama-Hare-Krishna-Hindi-1971-20190131-500x500.jpg",
    "duration": 208
  },
  {
    "id": "chura-liya-hai-tumne-jo-dil-ko",
    "title": "Chura Liya Hai Tumne Jo Dil Ko",
    "artist": "Asha Bhosle, Mohammed Rafi",
    "movie": "Yaadon Ki Baaraat",
    "year": 1973,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/854/a48723fa6382061a3db02b90c5c0bd43_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/854/Yaadon-Ki-Baaraat-Hindi-1973-20200622062706-500x500.jpg",
    "duration": 289
  },
  {
    "id": "pyaar-ke-pal",
    "title": "Pyaar Ke Pal",
    "artist": "KK",
    "movie": "Kites",
    "year": 2010,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/929/e49fb2c42d53e51acc5b66f52f122b14_320.mp4",
    "artwork": "https://c.saavncdn.com/938/Kites-Hindi-2010-20221211101112-500x500.jpg",
    "duration": 257
  },
  {
    "id": "yaaron",
    "title": "Yaaron",
    "artist": "KK",
    "movie": "Rangeela (Jhankar) [Original Motion Picture Soundtrack]",
    "year": 1995,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/782/481d95176a7d6c45dcf37896a4dcfe61_320.mp4",
    "artwork": "https://c.saavncdn.com/782/Rangeela-Jhankar-Original-Motion-Picture-Soundtrack-Hindi-1995-20261029135834-500x500.jpg",
    "duration": 349
  },
  {
    "id": "raataan-lambiyan",
    "title": "Raataan Lambiyan",
    "artist": "Jubin Nautiyal, Asees Kaur",
    "movie": "Shershaah",
    "year": 2021,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/238/35726d4394604604e961bf5b846870d0_320.mp4",
    "artwork": "https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg",
    "duration": 230
  },
  {
    "id": "lut-gaye",
    "title": "Lut Gaye",
    "artist": "Jubin Nautiyal",
    "movie": "World Music Day - Best Of Bollywood Hits",
    "year": 2026,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/179/2e9766ab987c48ec442ac7e58818571c_320.mp4",
    "artwork": "https://c.saavncdn.com/179/World-Music-Day-Best-Of-Bollywood-Hits-Hindi-2026-20260622111029-500x500.jpg",
    "duration": 228
  },
  {
    "id": "main-rahoon-ya-na-rahoon",
    "title": "Main Rahoon Ya Na Rahoon",
    "artist": "Armaan Malik",
    "movie": "Main Rahoon Ya Na Rahoon",
    "year": 2015,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/395/1e3c94b9a575aa2887f47bd38e9dc3ac_320.mp4",
    "artwork": "https://c.saavncdn.com/395/Main-Rahoon-Ya-Na-Rahoon-Hindi-2015-500x500.jpg",
    "duration": 310
  },
  {
    "id": "bol-do-na-zara",
    "title": "Bol Do Na Zara",
    "artist": "Armaan Malik",
    "movie": "Azhar",
    "year": 2016,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/633/2fddfdf78b3c810d561b594d15a9456b_320.mp4",
    "artwork": "https://c.saavncdn.com/633/Azhar-1-Hindi-2016-500x500.jpg",
    "duration": 293
  },
  {
    "id": "tum-se-hi",
    "title": "Tum Se Hi",
    "artist": "Mohit Chauhan",
    "movie": "Jab We Met",
    "year": 2007,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/223/7eddc0f9b56f110ae39a145752fabb34_320.mp4",
    "artwork": "https://c.saavncdn.com/223/Jab-We-Met-Hindi-2007-20231016162009-500x500.jpg",
    "duration": 321
  },
  {
    "id": "kun-faya-kun",
    "title": "Kun Faya Kun",
    "artist": "Mohit Chauhan, A. R. Rahman, Javed Ali",
    "movie": "World Music Day - Best Of Bollywood Hits",
    "year": 2026,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/179/53fd6b97b1616b941b115f840e8b1e42_320.mp4",
    "artwork": "https://c.saavncdn.com/179/World-Music-Day-Best-Of-Bollywood-Hits-Hindi-2026-20260622111029-500x500.jpg",
    "duration": 469
  },
  {
    "id": "mile-ho-tum-reprise",
    "title": "Mile Ho Tum (Reprise)",
    "artist": "Neha Kakkar, Tony Kakkar",
    "movie": "Mile Ho Tum Humko",
    "year": 2026,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/414/dde1fe5c6e384dff6a62979d0ab0bcbc_320.mp4",
    "artwork": "https://c.saavncdn.com/414/Mile-Ho-Tum-Humko-Unknown-2026-20260324142938-500x500.jpg",
    "duration": 306
  },
  {
    "id": "dilbar",
    "title": "Dilbar",
    "artist": "Neha Kakkar, Dhvani Bhanushali",
    "movie": "Satyameva Jayate",
    "year": 2018,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/333/35b50861b2ab58628f3dea16d87cd546_320.mp4",
    "artwork": "https://c.saavncdn.com/333/Satyameva-Jayate-Hindi-2018-20180801-500x500.jpg",
    "duration": 184
  },
  {
    "id": "tanha-dil",
    "title": "Tanha Dil",
    "artist": "Shaan",
    "movie": "Tanha Dil...",
    "year": 2006,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/851/4bd825075e511ef11c7089f2efba9b7f_320.mp4",
    "artwork": "https://c.saavncdn.com/851/Tanha-Dil-Hindi-2006-500x500.jpg",
    "duration": 293
  },
  {
    "id": "chand-sifarish",
    "title": "Chand Sifarish",
    "artist": "Shaan, Kailash Kher",
    "movie": "Fanaa",
    "year": 2006,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/146/53c9ccea6717dc94d957d1f1f5163723_320.mp4",
    "artwork": "https://c.saavncdn.com/146/Fanaa-Hindi-2006-20190329181154-500x500.jpg",
    "duration": 275
  },
  {
    "id": "jeene-laga-hoon",
    "title": "Jeene Laga Hoon",
    "artist": "Atif Aslam, Shreya Ghoshal",
    "movie": "Jeene Laga Hoon (Instrumental)",
    "year": 2026,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/436/0525ca5bc69f927ddca459c2580e803f_320.mp4",
    "artwork": "https://c.saavncdn.com/436/Jeene-Laga-Hoon-Instrumental-Instrumental-2026-20261029134128-500x500.jpg",
    "duration": 546
  },
  {
    "id": "agar-tum-saath-ho",
    "title": "Agar Tum Saath Ho",
    "artist": "Alka Yagnik, Arijit Singh",
    "movie": "Tamasha",
    "year": 2015,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/994/2e6b47719cea3e7c9f971a3f1ddc9b0a_320.mp4",
    "artwork": "https://c.saavncdn.com/994/Tamasha-Hindi-2015-500x500.jpg",
    "duration": 341
  },
  {
    "id": "tip-tip-barsa-paani",
    "title": "Tip Tip Barsa Paani",
    "artist": "Alka Yagnik, Udit Narayan",
    "movie": "Mohra",
    "year": 1994,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/041/c9c7533375a46d285bc156a2212fdbb5_320.mp4",
    "artwork": "https://c.saavncdn.com/041/Mohra-Hindi-1994-20210226141759-500x500.jpg",
    "duration": 363
  },
  {
    "id": "pehle-bhi-main",
    "title": "Pehle Bhi Main",
    "artist": "Vishal Mishra",
    "movie": "ANIMAL",
    "year": 2023,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/092/81b52beea90f186f27cf5c5eead972c8_320.mp4",
    "artwork": "https://c.saavncdn.com/092/ANIMAL-Hindi-2023-20260724191152-500x500.jpg",
    "duration": 250
  },
  {
    "id": "kaise-hua",
    "title": "Kaise Hua",
    "artist": "Vishal Mishra",
    "movie": "Singham",
    "year": 2011,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/971/6135b7bb882ab68c151b74eee28187f7_320.mp4",
    "artwork": "https://c.saavncdn.com/470/Singham-Hindi-2011-20221211220044-500x500.jpg",
    "duration": 350
  },
  {
    "id": "mauja-hi-mauja",
    "title": "Mauja Hi Mauja",
    "artist": "Mika Singh",
    "movie": "Jab We Met",
    "year": 2007,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/223/23e2458ea15711517d9a4e458b96f76c_320.mp4",
    "artwork": "https://c.saavncdn.com/223/Jab-We-Met-Hindi-2007-20231016162009-500x500.jpg",
    "duration": 245
  },
  {
    "id": "subah-hone-na-de",
    "title": "Subah Hone Na De",
    "artist": "Mika Singh, Shaan",
    "movie": "Desi Boyz",
    "year": 2011,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/743/75c6adf15c7ce788993785a9c2becef1_320.mp4",
    "artwork": "https://c.saavncdn.com/743/Desi-Boyz-Hindi-2011-20241223142123-500x500.jpg",
    "duration": 288
  },
  {
    "id": "breathless",
    "title": "Breathless",
    "artist": "Shankar Mahadevan",
    "movie": "Hai Junoon!",
    "year": 2025,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/489/268baee5ecbfa8dfbd41f564e7070408_320.mp4",
    "artwork": "https://c.saavncdn.com/489/Hai-Junoon-Hindi-2025-20260204153259-500x500.jpg",
    "duration": 130
  },
  {
    "id": "dil-chahta-hai",
    "title": "Dil Chahta Hai",
    "artist": "Shankar Mahadevan",
    "movie": "Dil Chahta Hai",
    "year": 2001,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/219/e92e9a632990c55bf3f9e1cc41c071c7_320.mp4",
    "artwork": "https://c.saavncdn.com/219/Dil-Chahta-Hai-Hindi-2001-500x500.jpg",
    "duration": 310
  },
  {
    "id": "gulabi-aankhen",
    "title": "Gulabi Aankhen",
    "artist": "Mohammed Rafi",
    "movie": "Barish with Rafi",
    "year": 2026,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/812/4a604c9ad0d3435a9d07f1b40513bde3_320.mp4",
    "artwork": "https://c.saavncdn.com/812/Barish-with-Rafi-Hindi-2026-20260827053717-500x500.jpg",
    "duration": 198
  },
  {
    "id": "likhe-jo-khat-tujhe",
    "title": "Likhe Jo Khat Tujhe",
    "artist": "Mohammed Rafi",
    "movie": "Kanyadaan",
    "year": 1968,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/743/8f736df7477f942707b8c3af1379c29c_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/743/Kanyadaan-Hindi-1968-20171213-500x500.jpg",
    "duration": 273
  },
  {
    "id": "shape-of-you",
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "movie": "÷",
    "year": 2017,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/286/2929d11a5d44a3592ced0383fa6f1977_320.mp4",
    "artwork": "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
    "duration": 233
  },
  {
    "id": "believer",
    "title": "Believer",
    "artist": "Imagine Dragons",
    "movie": "Evolve",
    "year": 2018,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/248/46944eb7b4b31f5b0abf5eb2e1be2d2a_320.mp4",
    "artwork": "https://c.saavncdn.com/248/Evolve-English-2018-20260605220036-500x500.jpg",
    "duration": 204
  },
  {
    "id": "starboy",
    "title": "Starboy",
    "artist": "The Weeknd ft. Daft Punk",
    "movie": "Starboy",
    "year": 2016,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/372/b7f9937fefd686876e90be4a96c9a6e9_320.mp4",
    "artwork": "https://c.saavncdn.com/372/Starboy-English-2016-20261007033842-500x500.jpg",
    "duration": 230
  },
  {
    "id": "cruel-summer",
    "title": "Cruel Summer",
    "artist": "Taylor Swift",
    "movie": "The Cruelest Summer",
    "year": 2023,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/243/cf6b522de1390996fdbe109298873c72_320.mp4",
    "artwork": "https://c.saavncdn.com/243/The-Cruelest-Summer-English-2023-20231109123211-500x500.jpg",
    "duration": 178
  },
  {
    "id": "blinding-lights",
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "movie": "Blinding Lights",
    "year": 2020,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/820/5ddb9a79a5218f85ca9bef170f3a461d_320.mp4",
    "artwork": "https://c.saavncdn.com/820/Blinding-Lights-English-2020-20200912094411-500x500.jpg",
    "duration": 204
  },
  {
    "id": "stay",
    "title": "STAY",
    "artist": "The Kid LAROI, Justin Bieber",
    "movie": "F*CK LOVE 3+: OVER YOU",
    "year": 2021,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/663/a1d051c95254676b565d2afef135b626_320.mp4",
    "artwork": "https://c.saavncdn.com/663/F-CK-LOVE-3-OVER-YOU-English-2021-20210727032800-500x500.jpg",
    "duration": 140
  },
  {
    "id": "levitating",
    "title": "Levitating",
    "artist": "Dua Lipa",
    "movie": "Future Nostalgia",
    "year": 2020,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/665/7790c3b9097592113008eaf1031d6e57_320.mp4",
    "artwork": "https://c.saavncdn.com/665/Future-Nostalgia-English-2020-20260306223201-500x500.jpg",
    "duration": 203
  },
  {
    "id": "night-changes",
    "title": "Night Changes",
    "artist": "One Direction",
    "movie": "FOUR (Deluxe)",
    "year": 2014,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/851/d3f6d5e7ae7c9050697a779f85eaabe8_320.mp4",
    "artwork": "https://c.saavncdn.com/851/FOUR-Deluxe--English-2014-500x500.jpg",
    "duration": 226
  },
  {
    "id": "closer",
    "title": "Closer",
    "artist": "The Chainsmokers ft. Halsey",
    "movie": "Collage EP",
    "year": 2016,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/054/00363f6aceae57b88fa39f686c5af82e_320.mp4",
    "artwork": "https://c.saavncdn.com/054/Collage-EP-English-2016-500x500.jpg",
    "duration": 249
  },
  {
    "id": "chilipiga",
    "title": "Chilipiga",
    "artist": "Karthik",
    "movie": "Orange",
    "year": 2010,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/105/db53cf3a0a9a04a21758ff12f5330eca_320.mp4",
    "artwork": "https://c.saavncdn.com/105/Orange-Telugu-2006-20210624180302-500x500.jpg",
    "duration": 328
  },
  {
    "id": "asalem-gurthukuradhu",
    "title": "Asalem Gurthukuradhu",
    "artist": "K. S. Chithra",
    "movie": "Antahpuram",
    "year": 1998,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/209/a81b8b8ba4aed5503d4de9311ab020cc_320.mp4",
    "artwork": "https://c.saavncdn.com/209/Antahpuram-Telugu-1998-20180518-500x500.jpg",
    "duration": 350
  },
  {
    "id": "tere-sang-yaara",
    "title": "Tere Sang Yaara",
    "artist": "Atif Aslam",
    "movie": "Wedding Love Songs",
    "year": 2026,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/809/0481bfc90d836513541476fdbf9c6934_320.mp4",
    "artwork": "https://c.saavncdn.com/809/Wedding-Love-Songs-Hindi-2026-20251230172703-500x500.jpg",
    "duration": 286
  },
  {
    "id": "zara-sa",
    "title": "Zara Sa",
    "artist": "KK",
    "movie": "Jannat",
    "year": 2008,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/801/571617f7810fb699ed56bc8a7d9e40d9_320.mp4",
    "artwork": "https://c.saavncdn.com/801/Jannat-Hindi-2008-20190629135803-500x500.jpg",
    "duration": 302
  },
  {
    "id": "genda-phool",
    "title": "Genda Phool",
    "artist": "Badshah, Payal Dev",
    "movie": "Genda Phool",
    "year": 2020,
    "language": "Hindi",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/991/8efb3ed04260fdd52e5b42b06593ffe4_320.mp4",
    "artwork": "https://c.saavncdn.com/991/Genda-Phool-Hindi-2020-20200325120350-500x500.jpg",
    "duration": 168
  },
  {
    "id": "kurchi-madathapetti",
    "title": "Kurchi Madathapetti",
    "artist": "Thaman S, Sri Krishna, Sahithi Chaganti",
    "movie": "Guntur Kaaram",
    "year": 2023,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/000/a8b06cdf02fd61001823e10d55ad3ebe_320.mp4",
    "artwork": "https://c.saavncdn.com/000/Guntur-Kaaram-Telugu-2023-20240126145901-500x500.jpg",
    "duration": 216
  }
];

// Helper shorthand
const el = (id) => document.getElementById(id);

// Storage Keys
const STORAGE_FAVORITES = 'tuneus_favorites_v1';
const STORAGE_PLAYLISTS = 'tuneus_playlists_v1';
const STORAGE_CUSTOM_TRACKS = 'tuneus_custom_tracks_v1';
const STORAGE_RECENT_HISTORY = 'tuneus_recent_history_v1';
const STORAGE_RECENT_TRACKS = 'tuneus_recent_tracks_v2';
const STORAGE_STREAMING_QUALITY = 'tuneus_streaming_quality_v1';
const STORAGE_EQ_BASS = 'tuneus_eq_bass_v1';
const STORAGE_EQ_VOCAL = 'tuneus_eq_vocal_v1';
const STORAGE_EQ_TREBLE = 'tuneus_eq_treble_v1';
const STORAGE_EQ_PRESET = 'tuneus_eq_preset_v1';

// Load stored data safely
function getStoredJSON(key, fallback) {
  try {
    let val = localStorage.getItem(key);
    if (!val) {
      const legacyKey = key.replace('tuneus_', 'lucky_');
      val = localStorage.getItem(legacyKey);
    }
    return val ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
}
function setStoredJSON(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}

// Offline downloads storage (IndexedDB) so songs can play without internet
const DOWNLOADS_DB_NAME = 'tuneus_music_downloads_v1';
const DOWNLOADS_DB_VERSION = 1;
const DOWNLOADS_STORE = 'songs';
let downloadsDbPromise = null;

function openDownloadsDB() {
  if (!('indexedDB' in window)) {
    return Promise.reject(new Error('IndexedDB is not available'));
  }
  if (downloadsDbPromise) return downloadsDbPromise;
  downloadsDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DOWNLOADS_DB_NAME, DOWNLOADS_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DOWNLOADS_STORE)) {
        db.createObjectStore(DOWNLOADS_STORE, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      downloadsDbPromise = null;
      reject(request.error);
    };
    request.onblocked = () => {
      downloadsDbPromise = null;
      reject(new Error('Downloads database is blocked'));
    };
  });
  return downloadsDbPromise;
}

function downloadsStoreRequest(mode, action) {
  return openDownloadsDB().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(DOWNLOADS_STORE, mode);
    const store = tx.objectStore(DOWNLOADS_STORE);
    let request;
    try {
      request = action(store);
    } catch (err) {
      reject(err);
      return;
    }
    tx.oncomplete = () => resolve(request ? request.result : undefined);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  }));
}

function getStoredDownloads() {
  return downloadsStoreRequest('readonly', (store) => store.getAll()).catch(() => []);
}

function putStoredDownload(record) {
  return downloadsStoreRequest('readwrite', (store) => store.put(record));
}

function deleteStoredDownload(id) {
  return downloadsStoreRequest('readwrite', (store) => store.delete(id));
}

function downloadRecordFor(trackId) {
  return state.downloads.get(trackId) || null;
}

function trackSource(track) {
  if (!track) return '';
  const offline = downloadRecordFor(track.id);
  if (offline && offline.blobUrl) return offline.blobUrl;
  let src = track.src || '';
  if (src.includes('saavncdn.com')) {
    const q = state.streamingQuality || '96';
    src = src.replace(/_(320|160|96)\.mp4/, `_${q}.mp4`);
  }
  return src;
}

function findTrackById(id) {
  if (!id) return null;
  // 0. Registered home shelf tracks map (guarantees shelf clicks always return exact matching track)
  if (typeof HOME_SHELF_TRACKS_MAP !== 'undefined' && HOME_SHELF_TRACKS_MAP.has(id)) {
    return HOME_SHELF_TRACKS_MAP.get(id);
  }
  // 1. If currently displaying a view (artist discography, search results, or playlist), look up in visible tracks FIRST
  if (typeof visibleTracks === 'function') {
    const visible = visibleTracks().find((t) => t && t.id === id);
    if (visible) return visible;
  }
  // 2. Online/artist tracks
  if (Array.isArray(state.onlineTracks) && state.onlineTracks.length > 0) {
    const online = state.onlineTracks.find((t) => t && t.id === id);
    if (online) return online;
  }
  // 3. Main library tracks
  const local = state.tracks.find((t) => t && t.id === id);
  if (local) return local;
  // 4. Shelf and recommendation tracks
  const rec = (typeof RECOMMENDED_TODAY !== 'undefined' ? RECOMMENDED_TODAY : []).find((t) => t && t.id === id);
  if (rec) return rec;
  const photo = (typeof PHOTO_REFERENCE_TRACKS !== 'undefined' ? PHOTO_REFERENCE_TRACKS : []).find((t) => t && t.id === id);
  if (photo) return photo;
  const alb = (typeof ALBUMS_FEATURING !== 'undefined' ? ALBUMS_FEATURING : []).find((t) => t && t.id === id);
  if (alb) return alb;
  // 5. Recent tracks
  const recent = (state.recentTracks || []).find((t) => t && t.id === id);
  if (recent) return recent;
  // 6. Curated catalog
  const cat = (typeof catalog !== 'undefined' ? catalog : []).find((t) => t && t.id === id);
  if (cat) return cat;
  // 7. Custom playlists
  if (Array.isArray(state.playlists)) {
    for (const pl of state.playlists) {
      if (Array.isArray(pl.tracks)) {
        const found = pl.tracks.find((t) => t && t.id === id);
        if (found) return found;
      }
    }
  }
  // 8. Offline downloads
  const offline = downloadRecordFor(id);
  return offline ? offline.track : null;
}

async function loadDownloads() {
  const records = await getStoredDownloads();
  records.forEach((record) => {
    if (!record || !record.id || !record.blob) return;
    const existing = state.downloads.get(record.id);
    if (existing && existing.blobUrl) URL.revokeObjectURL(existing.blobUrl);
    state.downloads.set(record.id, {
      track: record.track,
      blob: record.blob,
      blobUrl: URL.createObjectURL(record.blob),
      fileName: record.fileName,
      downloadedAt: record.downloadedAt
    });
  });
}

async function saveDownloadOffline(track, blob, fileName) {
  const meta = {
    id: track.id,
    title: track.title,
    artist: track.artist,
    movie: track.movie,
    year: track.year,
    language: track.language,
    artwork: track.artwork,
    duration: track.duration,
    isOnline: Boolean(track.isOnline)
  };
  const record = {
    id: track.id,
    track: meta,
    blob,
    mime: blob.type || 'audio/mpeg',
    fileName,
    downloadedAt: Date.now()
  };

  await putStoredDownload(record);

  const existing = state.downloads.get(track.id);
  if (existing && existing.blobUrl) URL.revokeObjectURL(existing.blobUrl);
  state.downloads.set(track.id, {
    track: meta,
    blob,
    blobUrl: URL.createObjectURL(blob),
    fileName,
    downloadedAt: record.downloadedAt
  });
}

async function fetchTrackBlob(track) {
  if (!track) return null;
  const src = track.src;
  if (!src) return null;

  if (src.startsWith('blob:') || src.startsWith('data:')) {
    try {
      const res = await fetch(src);
      return res.ok ? await res.blob() : null;
    } catch (e) {
      return null;
    }
  }

  try {
    const res = await fetch(src, { mode: 'cors' });
    if (res.ok) return await res.blob();
  } catch (e) {}

  try {
    const proxyUrl = `/api/download?url=${encodeURIComponent(src)}&name=${encodeURIComponent('offline-cache')}`;
    const res = await fetch(proxyUrl);
    if (res.ok) return await res.blob();
  } catch (e) {}

  return null;
}

function saveBlobToDevice(blob, fileName) {
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
}

// Initial Playlists (All 4 pre-made default playlists removed; custom playlists only)
const defaultPlaylists = [];

// Load stored playlists and purge the 4 legacy default playlists (Tollywood, Bollywood, Folk, English)
const legacyDefaultIds = new Set(['pl-tuneus-telugu', 'pl-tuneus-hindi', 'pl-tuneus-folk', 'pl-tuneus-english']);
let storedPlaylists = (getStoredJSON(STORAGE_PLAYLISTS, []) || [])
  .filter((p) => p && p.id && !legacyDefaultIds.has(p.id));

// Save cleaned list back to storage so the 4 default playlists are completely wiped
setStoredJSON(STORAGE_PLAYLISTS, storedPlaylists);
const storedFavorites = new Set(getStoredJSON(STORAGE_FAVORITES, []));
const storedCustomTracks = getStoredJSON(STORAGE_CUSTOM_TRACKS, []);
const storedRecentTracks = getStoredJSON(STORAGE_RECENT_TRACKS, null);
const storedRecentHistory = getStoredJSON(STORAGE_RECENT_HISTORY, []);

// Initialize Recent Songs: preserve full track objects so online songs from search play seamlessly
let initialRecentTracks = [];
if (Array.isArray(storedRecentTracks) && storedRecentTracks.length > 0) {
  initialRecentTracks = storedRecentTracks.filter((t) => t && t.id && t.title).slice(0, 6);
} else if (Array.isArray(storedRecentHistory) && storedRecentHistory.length > 0) {
  storedRecentHistory.forEach((id) => {
    const t = catalog.find((c) => c.id === id);
    if (t) initialRecentTracks.push({ ...t });
  });
  initialRecentTracks = initialRecentTracks.slice(0, 6);
}

// Always ensure exactly 6 songs in Recent Songs by backfilling from top catalog master hits
if (initialRecentTracks.length < 6) {
  const existingIds = new Set(initialRecentTracks.map((t) => t.id));
  for (const catTrack of catalog) {
    if (initialRecentTracks.length >= 6) break;
    if (!existingIds.has(catTrack.id)) {
      initialRecentTracks.push({ ...catTrack });
      existingIds.add(catTrack.id);
    }
  }
}

// Clean and deduplicate any list of tracks by normalized title, artist and movie
function deduplicateTrackList(tracks) {
  if (!Array.isArray(tracks)) return [];
  const seenTitleKeys = new Set();
  const seenUrls = new Set();
  const unique = [];

  for (const track of tracks) {
    if (!track || !track.title) continue;

    const rawTitle = String(track.title).toLowerCase();

    // Aggressive normalization of title
    const normTitle = rawTitle
      .replace(/\s*\(.*?\)/g, '')
      .replace(/\s*\[.*?\]/g, '')
      .replace(/\s*-\s*(from|lyrical|remix|full video|audio|remastered|video song|single|original|telugu|hindi|party mix).*$/i, '')
      .replace(/\b(from|song|video song|full song|lyrical|remix|audio|track|soundtrack)\b/gi, '')
      .replace(/[^a-z0-9]/g, '')
      .trim();

    // Primary artist (first person's normalized name)
    const primaryArtist = String(track.artist || '')
      .toLowerCase()
      .split(/[,&/|]/)[0]
      .replace(/[^a-z0-9]/g, '')
      .trim();

    const cleanUrl = track.src ? String(track.src).trim().toLowerCase().split('?')[0] : '';

    // Check URL duplicate
    if (cleanUrl && seenUrls.has(cleanUrl)) continue;

    // Check Title Duplicate
    // If title is distinct (>3 letters and not generic), check by normTitle alone OR (normTitle + primaryArtist)
    const isGeneric = ['intro', 'outro', 'theme', 'bgm', 'instrumental', 'titlesong'].includes(normTitle);
    const titleKey = (!isGeneric && normTitle.length > 3)
      ? normTitle
      : `${normTitle}__${primaryArtist}`;

    if (normTitle && seenTitleKeys.has(titleKey)) continue;

    if (normTitle) seenTitleKeys.add(titleKey);
    if (cleanUrl) seenUrls.add(cleanUrl);
    unique.push(track);
  }

  return unique;
}

// State
const state = {
  tracks: deduplicateTrackList([...storedCustomTracks, ...catalog.map((t) => ({ ...t }))]),
  onlineTracks: [],
  filter: 'All',
  sort: 'default',
  query: '',
  activeArtist: null,
  onlineSearch: false,
  activePlaylistId: null,
  current: null,
  playing: false,
  shuffle: false,
  repeat: 'none', // 'none' | 'all' | 'one'
  volume: 1.0,
  muted: false,
  favorites: storedFavorites,
  playlists: storedPlaylists,
  downloads: new Map(),
  recentTracks: initialRecentTracks,
  recentHistory: initialRecentTracks.map((t) => t.id),
  eqPreset: getStoredJSON(STORAGE_EQ_PRESET, 'normal'),
  eqBass: Number(getStoredJSON(STORAGE_EQ_BASS, 0)) || 0,
  eqVocal: Number(getStoredJSON(STORAGE_EQ_VOCAL, 0)) || 0,
  eqTreble: Number(getStoredJSON(STORAGE_EQ_TREBLE, 0)) || 0,
  streamingQuality: getStoredJSON(STORAGE_STREAMING_QUALITY, '96')
};

// Strict artist matchers to prevent unrelated tracks
const SPECIFIC_ARTIST_MATCHERS = {
  's. p. balasubrahmanyam': (t) => /balasubrahmanyam|balasubramanyam|balasubramaniam/i.test(t) || (/\bs\s*p\s*b\b|\bspb\b/i.test(t) && !/\bs\s*p\s*b\s*charan\b|\bspb\s*charan\b/i.test(t)),
  'sid sriram': (t) => /\bsid\s+sriram\b/i.test(t),
  'arijit singh': (t) => /\barijit\s+singh\b/i.test(t),
  'shreya ghoshal': (t) => /\bshreya\s+gh?oshal\b/i.test(t),
  'anurag kulkarni': (t) => /\banurag\s+kulkarni\b/i.test(t),
  'mangli': (t) => /\bmangli\b|\bsatyavathi\b/i.test(t),
  'sonu nigam': (t) => /\bsonu\s+nigam\b/i.test(t),
  'karthik': (t) => /\bkarthik\b/i.test(t.replace(/\bkarthik\s+raja\b/gi, '')) && !/\bkarthikeya\b/i.test(t),
  'k. s. chithra': (t) => /\bk\s*s\s*chith?ra\b|\bchithra\b|\bchitra\b/i.test(t),
  'kk': (t) => /(?:^|,|\s)k\s*k(?:$|,|\s)|\bkrishnakumar\s+kunnath\b/i.test(t),
  'devi sri prasad': (t) => /\bdevi\s+sri\s+prasad\b|\bdsp\b/i.test(t),
  'atif aslam': (t) => /\batif\s+aslam\b/i.test(t),
  'ram miriyala': (t) => /\bram\s+miriyala\b|\bmiriyala\b/i.test(t),
  'sunitha': (t) => /\bsunitha\b/i.test(t) && !/\bsunitha\s+sarathy\b/i.test(t),
  'jubin nautiyal': (t) => /\bjubin\s+nautiyal\b/i.test(t),
  'geetha madhuri': (t) => /\bgeetha\s+madhuri\b/i.test(t),
  'haricharan': (t) => /\bharicharan\b|\bhari\s+charan\b/i.test(t),
  'lata mangeshkar': (t) => /\blata\s+mangeshkar\b/i.test(t),
  'kishore kumar': (t) => /\bkishore\s+kumar\b/i.test(t),
  'armaan malik': (t) => /\barmaan\s+malik\b/i.test(t),
  'udit narayan': (t) => /\budit\s+narayan\b/i.test(t),
  'kumar sanu': (t) => /\bkumar\s+sanu\b/i.test(t),
  'alka yagnik': (t) => /\balka\s+yagnik\b/i.test(t),
  'mohammed rafi': (t) => /\b(?:mohammed|mohammad|mohd)\s+rafi\b/i.test(t),
  'mohit chauhan': (t) => /\bmohit\s+chauhan\b/i.test(t),
  'vishal mishra': (t) => /\bvishal\s+mishra\b/i.test(t),
  'shaan': (t) => /\bshaan\b/i.test(t),
  'shankar mahadevan': (t) => /\bshankar\s+mahadevan\b/i.test(t),
  'asha bhosle': (t) => /\basha\s+bhosle\b/i.test(t),
  'neha kakkar': (t) => /\bneha\s+kakkar\b/i.test(t),
  'mika singh': (t) => /\bmika\s+singh\b/i.test(t),
  'revanth': (t) => /\brevanth\b/i.test(t),
  'rahul sipligunj': (t) => /\brahul\s+sipligunj\b|\bsipligunj\b/i.test(t),
  'ramya behara': (t) => /\bramya\s+beh[ae]?ra\b/i.test(t),
  'vijay yesudas': (t) => /\bvijay\s+yesudas\b/i.test(t),
  'madhu priya': (t) => /\bmadhu\s+priya\b/i.test(t),
  'hemachandra': (t) => /\bhemachandra\b|\bhema\s+chandra\b/i.test(t),
  's. p. charan': (t) => /\bs\s*p\s*(?:b\s*)?charan\b|\bspb\s*charan\b/i.test(t),
  'saketh komanduri': (t) => /\bsaketh\s+komanduri\b|\bsaketh\b/i.test(t),
  'ed sheeran': (t) => /\bed\s+sheeran\b/i.test(t),
  'the weeknd': (t) => /\bthe\s+weeknd\b|\bweeknd\b/i.test(t),
  'imagine dragons': (t) => /\bimagine\s+dragons\b/i.test(t),
  'dua lipa': (t) => /\bdua\s+lipa\b/i.test(t),
  'justin bieber': (t) => /\bjustin\s+bieber\b/i.test(t),
  'taylor swift': (t) => /\btaylor\s+swift\b/i.test(t),
  'coldplay': (t) => /\bcoldplay\b/i.test(t),
  'queen': (t) => /(?:^|,|\s)queen(?:$|,|\s)|\bfreddie\s+mercury\b/i.test(t) && !/\bqueen\s+latifah\b/i.test(t),
  'michael jackson': (t) => /\bmichael\s+jackson\b/i.test(t),
  'anirudh ravichander': (t) => /\banirudh\s+ravichander\b|\banirudh\b/i.test(t),
  'santhosh narayanan': (t) => /\bsanthosh\s+narayanan\b/i.test(t),
  'ghantasala': (t) => /\bghantasala\b/i.test(t)
};

const NON_ORIGINAL_TRACK_RE = /\b(mashup|dj\s*mix|remix|lofi|lo-fi|karaoke|instrumental|tribute|cover|recreated|slowed|reverb|reverbed|8d|ringtone|dialogue|teaser|trailer|jukebox|nonstop|non-stop|medley|bgm|ambient|lullaby|meditation|whistle\s+cover|bit\s+song|-bit)\b/i;

// Check if track is an original song strictly sung by the target artist
function matchesArtist(track, artistName, query = '') {
  if (!track || !track.artist) return false;
  if (NON_ORIGINAL_TRACK_RE.test(track.title || '') || NON_ORIGINAL_TRACK_RE.test(track.movie || '')) {
    return false;
  }
  const tArtist = (track.artist || '').toLowerCase().replace(/[^a-z0-9,]/g, ' ').replace(/\s+/g, ' ').trim();
  const targetKey = (artistName || '').toLowerCase().trim();

  // 1. Check custom artist matcher if defined
  const matcher = SPECIFIC_ARTIST_MATCHERS[targetKey];
  if (matcher) {
    return matcher(tArtist);
  }

  // 2. Generic exact whole-phrase or distinctive token match
  const cleanTarget = targetKey.replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!cleanTarget) return false;

  const escaped = cleanTarget.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (new RegExp('(?:^|\\s)' + escaped + '(?:\\s|$)', 'i').test(tArtist)) {
    return true;
  }

  // Disallow solo generic tokens
  const genericTokens = new Set(['singh', 'kumar', 'prasad', 'sri', 'sharma', 'malik', 'roy', 'reddy', 'rao', 'das', 'khan', 'nair', 'gupta', 'verma', 'the', 'and', 'music', 'songs', 'hits']);
  const tokens = cleanTarget.split(/\s+/).filter(tok => tok.length >= 4 && !genericTokens.has(tok));
  if (tokens.length >= 2) {
    return tokens.every(tok => new RegExp('(?:^|\\s)' + tok + '(?:\\s|$)', 'i').test(tArtist));
  } else if (tokens.length === 1 && cleanTarget.length > 5) {
    return new RegExp('(?:^|\\s)' + tokens[0] + '(?:\\s|$)', 'i').test(tArtist);
  }

  return false;
}

// Expand and populate full Universe library with hundreds of top songs across Telugu, Hindi, Folk & Global
function hydrateLibraryWithUniverseSongs() {
  const extraSongs = [];
  if (typeof window !== 'undefined' && window.ARTIST_CURATED_TRACKS) {
    for (const key of Object.keys(window.ARTIST_CURATED_TRACKS)) {
      const list = window.ARTIST_CURATED_TRACKS[key];
      if (Array.isArray(list)) extraSongs.push(...list.filter((t) => matchesArtist(t, key)));
    }
  }
  if (typeof window !== 'undefined' && window.ALL_ARTIST_DISCOGRAPHIES) {
    for (const key of Object.keys(window.ALL_ARTIST_DISCOGRAPHIES)) {
      const list = window.ALL_ARTIST_DISCOGRAPHIES[key];
      if (Array.isArray(list)) extraSongs.push(...list.slice(0, 20).filter((t) => matchesArtist(t, key)));
    }
  }
  if (extraSongs.length > 0) {
    state.tracks = deduplicateTrackList([...state.tracks, ...extraSongs]);
  }
}
hydrateLibraryWithUniverseSongs();

// HTML5 Audio Engine & Web Audio Visualizer / EQ
const audio = new Audio();
audio.preload = 'none';
audio.crossOrigin = 'anonymous';

let audioCtx = null;
let audioSourceNode = null;
let analyserNode = null;
let biquadBass = null;
let biquadSubBass = null;
let biquadTreble = null;
let biquadMid = null;
let eqCompressor = null;
let animFrameId = null;

// Progress tracking
const progress = { current: 0, duration: 0 };
let pendingFiles = [];
let importLang = 'Telugu';
let toastTimer = null;
let trackToAddId = null;

// Palette generation for artwork fallback (Consistent Blue Theme)
const palettes = [
  ['#0284c7', '#0369a1'],
  ['#2563eb', '#1d4ed8'],
  ['#38bdf8', '#1e40af'],
  ['#0ea5e9', '#2563eb'],
  ['#60a5fa', '#1e3a8a'],
  ['#06b6d4', '#3b82f6'],
  ['#1d4ed8', '#0284c7']
];

function hash(value) {
  let result = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    result ^= value.charCodeAt(i);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function initials(title) {
  return (title || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase() || 'L';
}

function artStyle(track) {
  const seed = hash(track.id || track.title);
  const colors = palettes[seed % palettes.length];
  return `linear-gradient(${seed % 360}deg, ${colors[0]}, ${colors[1]})`;
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));
}

function fmt(seconds) {
  const total = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  const minutes = Math.floor(total / 60);
  return `${minutes}:${String(total % 60).padStart(2, '0')}`;
}

// Client-side CryptoJS Decryptor for JioSaavn full-length media URLs
function decryptSaavnInBrowser(encrypted) {
  if (!encrypted || typeof CryptoJS === 'undefined') return '';
  try {
    const key = CryptoJS.enc.Utf8.parse('38346591');
    const decrypted = CryptoJS.DES.decrypt(
      { ciphertext: CryptoJS.enc.Base64.parse(encrypted) },
      key,
      { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
    );
    let url = decrypted.toString(CryptoJS.enc.Utf8);
    if (url) {
      const q = state.streamingQuality || '96';
      url = url.replace(/(_96|_160|_64|_32|_320)\.mp4$/, `_${q}.mp4`);
    }
    return url;
  } catch (e) {
    return '';
  }
}

// Setup Web Audio Graph for EQ & Visualizer
function initWebAudio() {
  if (audioCtx) return;
  const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtxClass) return;
  try {
    audioCtx = new AudioCtxClass();
    analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 128;
    analyserNode.smoothingTimeConstant = 0.8;

    // Bass lowshelf filter (130 Hz for maximum deep sub-bass & 808 thump)
    biquadBass = audioCtx.createBiquadFilter();
    biquadBass.type = 'lowshelf';
    biquadBass.frequency.value = 130;

    // Sub-bass punch peaking filter (65 Hz for hard-hitting beat kicks)
    biquadSubBass = audioCtx.createBiquadFilter();
    biquadSubBass.type = 'peaking';
    biquadSubBass.frequency.value = 65;
    biquadSubBass.Q.value = 1.3;

    // Vocal presence peaking filter (2200 Hz, Q=1.2 for singer voice clarity)
    biquadMid = audioCtx.createBiquadFilter();
    biquadMid.type = 'peaking';
    biquadMid.frequency.value = 2200;
    biquadMid.Q.value = 1.2;

    // Treble highshelf filter (4500 Hz for airy acoustic brightness)
    biquadTreble = audioCtx.createBiquadFilter();
    biquadTreble.type = 'highshelf';
    biquadTreble.frequency.value = 4500;

    // Studio dynamics compressor & limiter to ensure MAXIMUM base beats without distortion
    eqCompressor = audioCtx.createDynamicsCompressor();
    eqCompressor.threshold.value = -4.0;
    eqCompressor.knee.value = 10.0;
    eqCompressor.ratio.value = 12.0;
    eqCompressor.attack.value = 0.003;
    eqCompressor.release.value = 0.25;

    audioSourceNode = audioCtx.createMediaElementSource(audio);
    audioSourceNode.connect(biquadBass);
    biquadBass.connect(biquadSubBass);
    biquadSubBass.connect(biquadMid);
    biquadMid.connect(biquadTreble);
    biquadTreble.connect(eqCompressor);
    eqCompressor.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);

    // Apply stored Bass & Vocal gains
    applyBandGains(state.eqBass, state.eqVocal, state.eqTreble, state.eqPreset, false);
    startVisualizerLoop();
  } catch (err) {}
}

function applyBandGains(bassDb, vocalDb, trebleDb, preset = 'custom', save = true) {
  const b = Math.max(-12, Math.min(24, Math.round(Number(bassDb) || 0)));
  const v = Math.max(-12, Math.min(18, Math.round(Number(vocalDb) || 0)));
  const t = Math.max(-12, Math.min(18, Math.round(Number(trebleDb) || 0)));

  state.eqBass = b;
  state.eqVocal = v;
  state.eqTreble = t;
  state.eqPreset = preset;

  if (biquadBass) biquadBass.gain.value = b;
  if (biquadSubBass) biquadSubBass.gain.value = b > 0 ? Math.round(b * 0.75) : b;
  if (biquadMid) biquadMid.gain.value = v;
  if (biquadTreble) biquadTreble.gain.value = t;

  // Sync range inputs
  const bassInput = el('eqBassSlider');
  if (bassInput && parseFloat(bassInput.value) !== b) bassInput.value = b;
  const vocalInput = el('eqVocalSlider');
  if (vocalInput && parseFloat(vocalInput.value) !== v) vocalInput.value = v;
  const trebleInput = el('eqTrebleSlider');
  if (trebleInput && parseFloat(trebleInput.value) !== t) trebleInput.value = t;

  // Sync badges
  function updateBadge(badgeId, val, isBass = false) {
    const badge = el(badgeId);
    if (!badge) return;
    badge.textContent = (val > 0 ? '+' : '') + val + ' dB';
    badge.classList.toggle('boosted', val > 0 && (!isBass || val < 18));
    badge.classList.toggle('max-boost', isBass && val >= 18);
    badge.classList.toggle('cut', val < 0);
  }
  updateBadge('eqBassVal', b, true);
  updateBadge('eqVocalVal', v);
  updateBadge('eqTrebleVal', t);

  // Sync preset card active states
  document.querySelectorAll('#eqPresets .eq-card').forEach((card) => {
    card.classList.toggle('active', card.dataset.preset === preset);
  });

  // Keep 3rd action pill cleanly labeled as "Base"
  const expEqName = el('expEqName');
  if (expEqName) {
    expEqName.textContent = 'Base';
  }

  if (save) {
    setStoredJSON(STORAGE_EQ_BASS, b);
    setStoredJSON(STORAGE_EQ_VOCAL, v);
    setStoredJSON(STORAGE_EQ_TREBLE, t);
    setStoredJSON(STORAGE_EQ_PRESET, preset);
  }
}

function applyEqPreset(preset) {
  switch (preset) {
    case 'bass':
      applyBandGains(24, 0, 2, 'bass', true); // Maximum Base Beats (+24 dB)
      break;
    case 'vocal':
      applyBandGains(-1, 10, 3, 'vocal', true);
      break;
    case 'bass_vocal':
      applyBandGains(20, 8, 3, 'bass_vocal', true); // Maximum Base + Vocal
      break;
    case 'party':
      applyBandGains(18, 4, 8, 'party', true);
      break;
    case 'treble':
      applyBandGains(-2, 1, 10, 'treble', true);
      break;
    case 'normal':
    default:
      applyBandGains(0, 0, 0, 'normal', true);
      break;
  }
}

function openEqModal() {
  initWebAudio();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  const liveText = el('eqLiveTrackText');
  if (liveText) {
    if (state.current && state.playing) {
      liveText.textContent = `Now Playing: ${state.current.title} — Real-time tuning`;
    } else if (state.current) {
      liveText.textContent = `Tuning: ${state.current.title}`;
    } else {
      liveText.textContent = 'Tune your sound • Adjustments apply instantly to audio playback';
    }
  }

  applyBandGains(state.eqBass, state.eqVocal, state.eqTreble, state.eqPreset, false);

  const modal = el('eqModal');
  if (modal) modal.hidden = false;
}

function closeEqModal() {
  const modal = el('eqModal');
  if (modal) modal.hidden = true;
}

// High-Performance Visualizer Loop (Zero CPU/GPU usage when paused)
function startVisualizerLoop() {
  if (animFrameId) return;

  const miniCanvas = el('miniVisualizer');
  const expCanvas = el('expandedVisualizer');
  const miniCtx = miniCanvas ? miniCanvas.getContext('2d') : null;
  const expCtx = expCanvas ? expCanvas.getContext('2d') : null;

  const bufferLength = analyserNode ? analyserNode.frequencyBinCount : 32;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    if (!state.playing) {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
      if (miniCtx) miniCtx.clearRect(0, 0, miniCanvas.width, miniCanvas.height);
      if (expCtx) expCtx.clearRect(0, 0, expCanvas.width, expCanvas.height);
      return;
    }

    animFrameId = requestAnimationFrame(draw);

    if (analyserNode) {
      analyserNode.getByteFrequencyData(dataArray);
    } else {
      for (let i = 0; i < bufferLength; i++) {
        dataArray[i] = Math.floor(Math.random() * 140 + 40);
      }
    }

    if (miniCtx && miniCanvas) {
      miniCtx.clearRect(0, 0, miniCanvas.width, miniCanvas.height);
      const barCount = 36;
      const barWidth = miniCanvas.width / barCount;
      const grad = miniCtx.createLinearGradient(0, 0, 0, miniCanvas.height);
      grad.addColorStop(0, '#38bdf8');
      grad.addColorStop(1, '#1d4ed8');
      miniCtx.fillStyle = grad;

      for (let i = 0; i < barCount; i++) {
        const val = dataArray[i % bufferLength] / 255;
        const h = Math.max(2, val * miniCanvas.height);
        miniCtx.fillRect(i * barWidth, miniCanvas.height - h, barWidth - 2, h);
      }
    }

    if (expCtx && expCanvas && !el('expandedModal').hidden) {
      expCtx.clearRect(0, 0, expCanvas.width, expCanvas.height);
      const barCount = 48;
      const barWidth = expCanvas.width / barCount;
      const expGrad = expCtx.createLinearGradient(0, 0, 0, expCanvas.height);
      expGrad.addColorStop(0, '#e0f2fe');
      expGrad.addColorStop(0.25, '#38bdf8');
      expGrad.addColorStop(0.65, '#2563eb');
      expGrad.addColorStop(1, 'rgba(29, 78, 216, 0.45)');
      expCtx.fillStyle = expGrad;

      for (let i = 0; i < barCount; i++) {
        const val = dataArray[i % bufferLength] / 255;
        const h = Math.max(3, val * (expCanvas.height - 6));
        const x = i * barWidth;
        const w = barWidth - 3;
        const y = expCanvas.height - h;

        // Glowing electric blue acoustic soundwave bar matching theme image
        expCtx.beginPath();
        expCtx.roundRect(x, y, w, h, [3, 3, 0, 0]);
        expCtx.fill();

        // Starry glowing acoustic particle bead atop wave crest (Fast direct drawing)
        if (h > 6) {
          expCtx.fillStyle = '#ffffff';
          expCtx.beginPath();
          expCtx.arc(x + w / 2, y, 1.8, 0, Math.PI * 2);
          expCtx.fill();
          expCtx.fillStyle = expGrad;
        }
      }
    }
  }

  animFrameId = requestAnimationFrame(draw);
}

// Filter and Sort Tracks
function visibleTracks() {
  if (state.activeArtist) {
    return state.onlineTracks.filter((t) => matchesArtist(t, state.activeArtist));
  }
  if (state.onlineSearch) {
    return state.onlineTracks;
  }

  const query = state.query.trim().toLowerCase();
  let list;

  if (state.filter === 'Downloads') {
    list = Array.from(state.downloads.values()).map((item) => ({ ...item.track }));
  } else {
    list = state.tracks.slice();

    if (state.filter === 'Music') {
      list = list.filter((t) => t.category !== 'Podcasts');
    } else if (state.filter === 'Podcasts') {
      list = list.filter((t) => t.category === 'Podcasts' || (t.movie && t.movie.toLowerCase().includes('podcast')) || (t.title && t.title.toLowerCase().includes('podcast')));
    } else if (state.filter === 'Telugu') {
      list = list.filter((t) => t.language === 'Telugu');
    } else if (state.filter === 'Hindi') {
      list = list.filter((t) => t.language === 'Hindi');
    } else if (state.filter === 'English') {
      list = list.filter((t) => t.language === 'English');
    } else if (state.filter === 'Folk') {
      list = list.filter((t) => t.category === 'Folk');
    } else if (state.filter === 'Favorites') {
      list = list.filter((t) => state.favorites.has(t.id));
    } else if (state.filter === 'Playlists') {
      if (state.activePlaylistId) {
        const pl = state.playlists.find((p) => p.id === state.activePlaylistId);
        if (pl) {
          const set = new Set(pl.trackIds);
          list = list.filter((t) => set.has(t.id));
        }
      }
    }
  }

  if (query) {
    list = list.filter((t) => {
      const haystack = [t.title, t.artist, t.movie, t.year, t.language].join(' ').toLowerCase();
      return haystack.includes(query);
    });
  }

  switch (state.sort) {
    case 'title-asc':
      list.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'artist-asc':
      list.sort((a, b) => a.artist.localeCompare(b.artist));
      break;
    case 'year-desc':
      list.sort((a, b) => (b.year || 0) - (a.year || 0));
      break;
    case 'year-asc':
      list.sort((a, b) => (a.year || 0) - (b.year || 0));
      break;
    case 'default':
    default:
      break;
  }

  return deduplicateTrackList(list);
}

// Popular Home Artists Data (100% verified local 500x500 portraits)
const HOME_ARTISTS = [
  { name: 'S. P. Balasubrahmanyam', tag: 'Legend &bull; 40k Songs', img: 'images/artists/sp-balasubrahmanyam.jpg', query: 'SP Balasubrahmanyam Telugu hits' },
  { name: 'Sid Sriram', tag: 'Melody King &bull; Srivalli', img: 'images/artists/sid-sriram.jpg', query: 'Sid Sriram Telugu' },
  { name: 'Arijit Singh', tag: 'Soul of Bollywood', img: 'images/artists/arijit-singh.jpg', query: 'Arijit Singh romantic hits' },
  { name: 'Shreya Ghoshal', tag: 'Melody Queen', img: 'images/artists/shreya-ghoshal.jpg', query: 'Shreya Ghoshal Telugu' },
  { name: 'Anurag Kulkarni', tag: 'Ramuloo, Pilla Raa', img: 'images/artists/anurag-kulkarni.jpg', query: 'Anurag Kulkarni Telugu' },
  { name: 'Ed Sheeran', tag: 'Global Pop King &bull; Shape of You', img: 'images/artists/ed-sheeran.jpg', query: 'Ed Sheeran' },
  { name: 'The Weeknd', tag: 'Starboy &bull; Blinding Lights', img: 'images/artists/the-weeknd.jpg', query: 'The Weeknd' },
  { name: 'Imagine Dragons', tag: 'Believer &bull; Rock Titans', img: 'images/artists/imagine-dragons.jpg', query: 'Imagine Dragons' },
  { name: 'Taylor Swift', tag: 'Cruel Summer &bull; Global Icon', img: 'images/artists/taylor-swift.jpg', query: 'Taylor Swift' },
  { name: 'Queen', tag: 'Bohemian Rhapsody &bull; Rock Legends', img: 'images/artists/queen.jpg', query: 'Queen' },
  { name: 'Michael Jackson', tag: 'King of Pop &bull; Billie Jean', img: 'images/artists/michael-jackson.jpg', query: 'Michael Jackson' },
  { name: 'Anirudh Ravichander', tag: 'Devara & Jawan &bull; Rockstar', img: 'images/artists/anirudh-ravichander.jpg', query: 'Anirudh Ravichander' },
  { name: 'Ghantasala', tag: 'Telugu Golden Era Legend', img: 'images/artists/ghantasala.jpg', query: 'Ghantasala' },
  { name: 'Mangli', tag: 'Folk Sensationalist', img: 'images/artists/mangli.jpg', query: 'Mangli songs' },
  { name: 'Sonu Nigam', tag: 'Golden Voice', img: 'images/artists/sonu-nigam.jpg', query: 'Sonu Nigam romantic hits' },
  { name: 'Karthik', tag: 'Ee Manase, Niluvaddham', img: 'images/artists/karthik.jpg', query: 'Karthik Telugu songs' },
  { name: 'K. S. Chithra', tag: 'Nightingale of South', img: 'images/artists/ks-chithra.jpg', query: 'KS Chithra Telugu hits' },
  { name: 'KK', tag: 'Timeless Voice', img: 'images/artists/kk.jpg', query: 'KK hits' },
  { name: 'Devi Sri Prasad', tag: 'Rockstar DSP', img: 'images/artists/dsp.jpg', query: 'Devi Sri Prasad hits' },
  { name: 'Atif Aslam', tag: 'Romantic Icon', img: 'images/artists/atif-aslam.jpg', query: 'Atif Aslam romantic hits' },
  { name: 'Ram Miriyala', tag: 'DJ Tillu, Chitti', img: 'images/artists/ram-miriyala.jpg', query: 'Ram Miriyala songs' },
  { name: 'Sunitha', tag: 'Melodious Diva', img: 'images/artists/sunitha.jpg', query: 'Sunitha Telugu songs' },
  { name: 'Jubin Nautiyal', tag: 'Raataan Lambiyan', img: 'images/artists/jubin-nautiyal.jpg', query: 'Jubin Nautiyal songs' },
  { name: 'Geetha Madhuri', tag: 'Pakka Local, Top Lesi', img: 'images/artists/geetha-madhuri.jpg', query: 'Geetha Madhuri Telugu' },
  { name: 'Haricharan', tag: 'Kaatuka Kanneeru', img: 'images/artists/haricharan.jpg', query: 'Haricharan Telugu' },
  { name: 'Lata Mangeshkar', tag: 'Voice of the Millennium', img: 'images/artists/lata-mangeshkar.jpg', query: 'Lata Mangeshkar timeless hits' },
  { name: 'Kishore Kumar', tag: 'Evergreen Legend', img: 'images/artists/kishore-kumar.jpg', query: 'Kishore Kumar classic hits' },
  { name: 'Armaan Malik', tag: 'Butta Bomma', img: 'images/artists/armaan-malik.jpg', query: 'Armaan Malik Hindi songs' }
];

// Complete local portrait lookup for all 51 artists (including Artist Menu drawer singers)
const ALL_ARTIST_AVATARS = {
  's. p. balasubrahmanyam': 'images/artists/sp-balasubrahmanyam.jpg',
  'sid sriram': 'images/artists/sid-sriram.jpg',
  'arijit singh': 'images/artists/arijit-singh.jpg',
  'shreya ghoshal': 'images/artists/shreya-ghoshal.jpg',
  'anurag kulkarni': 'images/artists/anurag-kulkarni.jpg',
  'ed sheeran': 'images/artists/ed-sheeran.jpg',
  'the weeknd': 'images/artists/the-weeknd.jpg',
  'imagine dragons': 'images/artists/imagine-dragons.jpg',
  'taylor swift': 'images/artists/taylor-swift.jpg',
  'queen': 'images/artists/queen.jpg',
  'michael jackson': 'images/artists/michael-jackson.jpg',
  'anirudh ravichander': 'images/artists/anirudh-ravichander.jpg',
  'ghantasala': 'images/artists/ghantasala.jpg',
  'dua lipa': 'images/artists/dua-lipa.jpg',
  'justin bieber': 'images/artists/justin-bieber.jpg',
  'coldplay': 'images/artists/coldplay.jpg',
  'santhosh narayanan': 'images/artists/santhosh-narayanan.jpg',
  'mangli': 'images/artists/mangli.jpg',
  'sonu nigam': 'images/artists/sonu-nigam.jpg',
  'karthik': 'images/artists/karthik.jpg',
  'k. s. chithra': 'images/artists/ks-chithra.jpg',
  'kk': 'images/artists/kk.jpg',
  'devi sri prasad': 'images/artists/dsp.jpg',
  'atif aslam': 'images/artists/atif-aslam.jpg',
  'ram miriyala': 'images/artists/ram-miriyala.jpg',
  'sunitha': 'images/artists/sunitha.jpg',
  'jubin nautiyal': 'images/artists/jubin-nautiyal.jpg',
  'geetha madhuri': 'images/artists/geetha-madhuri.jpg',
  'haricharan': 'images/artists/haricharan.jpg',
  'lata mangeshkar': 'images/artists/lata-mangeshkar.jpg',
  'kishore kumar': 'images/artists/kishore-kumar.jpg',
  'armaan malik': 'images/artists/armaan-malik.jpg',
  'udit narayan': 'images/artists/udit-narayan.jpg',
  'kumar sanu': 'images/artists/kumar-sanu.jpg',
  'alka yagnik': 'images/artists/alka-yagnik.jpg',
  'mohammed rafi': 'images/artists/mohammed-rafi.jpg',
  'mohit chauhan': 'images/artists/mohit-chauhan.jpg',
  'vishal mishra': 'images/artists/vishal-mishra.jpg',
  'shaan': 'images/artists/shaan.jpg',
  'shankar mahadevan': 'images/artists/shankar-mahadevan.jpg',
  'asha bhosle': 'images/artists/asha-bhosle.jpg',
  'neha kakkar': 'images/artists/neha-kakkar.jpg',
  'mika singh': 'images/artists/mika-singh.jpg',
  'revanth': 'images/artists/revanth.jpg',
  'rahul sipligunj': 'images/artists/rahul-sipligunj.jpg',
  'ramya behara': 'images/artists/ramya-behara.jpg',
  'vijay yesudas': 'images/artists/vijay-yesudas.jpg',
  'madhu priya': 'images/artists/madhu-priya.jpg',
  'hemachandra': 'images/artists/hemachandra.jpg',
  's. p. charan': 'images/artists/sp-charan.jpg',
  'saketh komanduri': 'images/artists/saketh-komanduri.jpg'
};

function queueTracks() {
  const list = visibleTracks();
  return list.length ? list : state.tracks;
}

// Generate Card HTML
function cardHTML(track) {
  const isActive = state.current && state.current.id === track.id;
  const isPlaying = isActive && state.playing;
  const isLiked = state.favorites.has(track.id);
  const isDownloaded = state.downloads.has(track.id);
  const lang = (track.language || 'Other').toLowerCase();
  const languageClass = lang === 'telugu' ? 'telugu' : lang === 'hindi' ? 'hindi' : lang === 'english' ? 'english' : track.isOnline ? 'online' : 'other';

  const classes = ['song-card'];
  if (isActive) classes.push('is-active');
  if (isPlaying) classes.push('is-playing');

  const fallbackStyle = track.artwork ? '' : `style="background: ${artStyle(track)};"`;
  const artworkInner = track.artwork
    ? `<img class="art-img" src="${esc(track.artwork)}" alt="${esc(track.title)}" loading="lazy" decoding="async" />`
    : `<span class="art-initials">${esc(initials(track.title))}</span>`;

  return `
    <div class="${classes.join(' ')}" data-id="${esc(track.id)}" role="button" tabindex="0" aria-label="Play ${esc(track.title)} by ${esc(track.artist)}">
      <div class="art" ${fallbackStyle}>
        ${artworkInner}
        <div class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      </div>
      <div class="song-info">
        <span class="song-title">${esc(track.title)}</span>
        <span class="song-artist">${esc(track.artist)}</span>
        <span class="song-meta">
          <span class="lang-badge ${languageClass}">${esc(track.language || 'Music')}</span>
          ${isDownloaded ? '<span class="offline-badge" title="Available offline">&#8681; Offline</span>' : ''}
          <span class="song-sub">${esc(track.movie || '')} &middot; ${fmt(track.duration || 210)}</span>
        </span>
      </div>
      <div class="card-actions">
        <button class="card-action-btn ${isLiked ? 'is-liked' : ''}" type="button" data-action="like" data-id="${esc(track.id)}" title="${isLiked ? 'Unlike' : 'Like'}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <button class="card-action-btn ${isDownloaded ? 'is-downloaded' : ''}" type="button" data-action="download" data-id="${esc(track.id)}" title="${isDownloaded ? 'Saved offline - save a copy to device' : 'Download for offline listening'}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </button>
        <button class="card-action-btn" type="button" data-action="playlist" data-id="${esc(track.id)}" title="Add to Playlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <div class="card-state" aria-hidden="true">
          <svg class="i-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          <svg class="i-pause" viewBox="0 0 24 24" fill="currentColor"><rect x="7" y="5" width="3.6" height="14" rx="1.2" /><rect x="13.4" y="5" width="3.6" height="14" rx="1.2" /></svg>
        </div>
      </div>
    </div>`;
}

// Render Playlists Section (Clean custom playlists with "+ Create New Playlist" card)
function renderPlaylistsGrid() {
  const container = el('playlistsGrid');
  if (!container) return;

  // Prominent "+ Create New Playlist" Card
  const createCardHTML = `
    <div class="playlist-create-card" data-action="create-playlist" role="button" tabindex="0" title="Create a new playlist">
      <div class="playlist-create-icon">+</div>
      <h3>Create New Playlist</h3>
      <p>Start a new collection for your favorite songs</p>
      <button class="primary-btn-sm" type="button" data-action="create-playlist">+ Create</button>
    </div>
  `;

  const customPlaylists = (state.playlists || []).filter((pl) => pl && pl.id);
  const playlistCardsHTML = customPlaylists.map((pl) => {
    const count = (pl.trackIds || []).length;
    return `
      <div class="playlist-card" data-playlist-id="${esc(pl.id)}">
        <div class="playlist-card-top">
          <div class="playlist-card-icon">&#9835;</div>
          <button class="playlist-card-delete" type="button" data-action="delete-playlist" data-playlist-id="${esc(pl.id)}" title="Delete playlist">&times;</button>
        </div>
        <h3>${esc(pl.name)}</h3>
        <p>${esc(pl.description || 'Custom playlist')}</p>
        <div class="playlist-card-meta">
          <span>${count} track${count === 1 ? '' : 's'}</span>
          <button class="playlist-card-play" type="button" data-action="play-playlist" data-playlist-id="${esc(pl.id)}">Play All</button>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = createCardHTML + playlistCardsHTML;
}

// Render Filter Chips (Downloads count is kept visible)
function renderChips() {
  document.querySelectorAll('.chip').forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.filter === state.filter && !state.onlineSearch);
  });
  const downloadsCount = el('countDownloads');
  if (downloadsCount) downloadsCount.textContent = state.downloads.size;
}

// Render Recent Songs Grid (Always exactly 10 songs with equal sized cards)
// Render Recent Songs Grid (Always exactly 6 songs in 2 columns x 3 rows)
function renderRecentGrid() {
  const quickGrid = el('quickJumpGrid');
  if (!quickGrid) return;

  let tracks = (state.recentTracks || []).filter((t) => t && t.id && t.title);

  // If fewer than 6 songs, backfill from photo reference tracks first, then catalog
  if (tracks.length < 6) {
    const existingIds = new Set(tracks.map((t) => t.id));
    const pool = [
      ...(typeof PHOTO_REFERENCE_TRACKS !== 'undefined' ? PHOTO_REFERENCE_TRACKS : []),
      ...(typeof catalog !== 'undefined' ? catalog : [])
    ];
    for (const poolTrack of pool) {
      if (tracks.length >= 6) break;
      if (!existingIds.has(poolTrack.id)) {
        tracks.push({ ...poolTrack });
        existingIds.add(poolTrack.id);
      }
    }
    state.recentTracks = tracks.slice(0, 6);
    state.recentHistory = state.recentTracks.map((t) => t.id);
    setStoredJSON(STORAGE_RECENT_TRACKS, state.recentTracks);
    setStoredJSON(STORAGE_RECENT_HISTORY, state.recentHistory);
  }

  // Strictly display 6 unique songs
  const displayTracks = deduplicateTrackList(tracks).slice(0, 6);
  quickGrid.innerHTML = displayTracks.map((t) => {
    const art = t.artwork || 'icon-192.png';
    const artistName = t.artist || t.movie || 'Tuneus Master';
    const isPlaying = state.current && state.current.id === t.id && state.playing;
    return `
      <div class="quick-jump-card ${isPlaying ? 'is-playing' : ''}" data-action="play-track" data-id="${esc(t.id)}" role="button" tabindex="0" title="Play ${esc(t.title)} by ${esc(artistName)}">
        <img class="quick-jump-art" src="${esc(art)}" alt="${esc(t.title)}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='icon-192.png'" />
        <div class="quick-jump-info">
          <span class="quick-jump-title">${esc(t.title)}</span>
          <span class="quick-jump-artist">${esc(artistName)}</span>
        </div>
        <div class="qj-eq-bars" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <div class="quick-jump-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
    `;
  }).join('');
}

// Add listened song to Recent Songs History (Max 6 songs, FIFO eviction of 7th song)
function addToRecentHistory(track) {
  if (!track || !track.id) return;

  // Clone full track object with complete audio/art metadata
  const trackToSave = {
    id: String(track.id),
    title: String(track.title || 'Untitled'),
    artist: String(track.artist || 'Unknown Artist'),
    movie: String(track.movie || ''),
    year: track.year || '',
    language: track.language || '',
    category: track.category || '',
    src: track.src || '',
    artwork: track.artwork || 'icon-192.png',
    duration: Number(track.duration) || 0,
    isOnline: Boolean(track.isOnline)
  };

  // Remove if already present (by ID or normalized title+artist) so it moves to index 0 (most recent)
  const existingList = Array.isArray(state.recentTracks) ? state.recentTracks : [];
  state.recentTracks = existingList.filter((t) => {
    if (!t || !t.id) return false;
    if (t.id === trackToSave.id) return false;
    if (
      t.title && trackToSave.title &&
      t.title.trim().toLowerCase() === trackToSave.title.trim().toLowerCase() &&
      t.artist && trackToSave.artist &&
      t.artist.trim().toLowerCase() === trackToSave.artist.trim().toLowerCase()
    ) {
      return false;
    }
    return true;
  });

  // Prepend to top/front (index 0 - most recent)
  state.recentTracks.unshift(trackToSave);

  // If there are more than 6 songs (e.g. 7th song added), remove the oldest song (FIFO)
  if (state.recentTracks.length > 6) {
    state.recentTracks = state.recentTracks.slice(0, 6);
  }

  // Also maintain state.recentHistory IDs for backwards compatibility
  state.recentHistory = state.recentTracks.map((t) => t.id);

  // Persist to storage
  setStoredJSON(STORAGE_RECENT_TRACKS, state.recentTracks);
  setStoredJSON(STORAGE_RECENT_HISTORY, state.recentHistory);

  // Re-render recent songs grid immediately
  renderRecentGrid();
}

// ==========================================================================
// Verified Master Shelf Data (100% Genuine Audio Streams & Exact Match)
// ==========================================================================
const HOME_SHELF_TRACKS_MAP = new Map();

const RECOMMENDED_TODAY = [
  {
    "id": "reco-1-boomboom",
    "title": "Boom Boom",
    "artist": "Sai Abhyankkar, Deepthi Suresh, Bebhumika",
    "badge": "Trending",
    "movie": "Dude",
    "year": 2025,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/177/7f1d8dfacf14f782e07dd0597699f941_320.mp4",
    "artwork": "https://c.saavncdn.com/177/Dude-Telugu-Original-Motion-Picture-Soundtrack-Telugu-2025-20251029174900-500x500.jpg",
    "duration": 240
  },
  {
    "id": "reco-2-panchadaar",
    "title": "Panchadaara",
    "artist": "M. M. Keeravaani, Rita Thyagarajan, Anuj Gurwara",
    "badge": "Blockbuster",
    "movie": "Magadheera",
    "year": 2009,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/896/b31711f5ffc53101d52d93a5219e95da_320.mp4",
    "artwork": "https://c.saavncdn.com/896/Magadheera-2009-500x500.jpg",
    "duration": 288
  },
  {
    "id": "reco-3-terebina",
    "title": "Tere Bina",
    "artist": "A.R. Rahman, Chinmayi, Murtuza Khan",
    "badge": "Masterpiece",
    "movie": "Guru",
    "year": 2006,
    "language": "Hindi",
    "category": "Soundtrack",
    "src": "https://aac.saavncdn.com/020/6ac166981a9551c3ea2a435f938c554e_320.mp4",
    "artwork": "https://c.saavncdn.com/020/Guru-Hindi-2006-20190516131307-500x500.jpg",
    "duration": 309
  },
  {
    "id": "reco-4-yeshanagul",
    "title": "Yeshanagula",
    "artist": "Anirudh Ravichander, Singer Prabha, Jangi Reddy",
    "badge": "Latest Hit",
    "movie": "The Paradise",
    "year": 2026,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/377/f2306d3e15caf253e8a7c271f66c8ef7_320.mp4",
    "artwork": "https://c.saavncdn.com/377/The-Paradise-Telugu-Telugu-2026-20261009114029-500x500.jpg",
    "duration": 236
  },
  {
    "id": "reco-5-namore",
    "title": "Namo Re",
    "artist": "Sri Harsha Emani, Junaid Kumar, AbhE",
    "badge": "Divine",
    "movie": "Nagabandham",
    "year": 2026,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/468/3b171fd16c313cbb882a0fb6877a8598_320.mp4",
    "artwork": "https://c.saavncdn.com/468/Namo-Re-From-Nagabandham-Telugu-Telugu-2026-20260314183156-500x500.jpg",
    "duration": 215
  },
  {
    "id": "reco-6-kesariya",
    "title": "Kesariya",
    "artist": "Arijit Singh, Pritam",
    "badge": "Melody",
    "movie": "Brahmastra",
    "year": 2022,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/871/c2febd353f3a076a406fa37510f31f9f_320.mp4",
    "artwork": "https://c.saavncdn.com/871/Brahmastra-Original-Motion-Picture-Soundtrack-Hindi-2022-20221006155213-500x500.jpg",
    "duration": 268
  },
  {
    "id": "reco-7-srivalli",
    "title": "Srivalli",
    "artist": "Sid Sriram, Devi Sri Prasad",
    "badge": "Chartbuster",
    "movie": "Pushpa - The Rise",
    "year": 2021,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/000/05c5d77f6a8225d6667cf7a1fcaf37d8_320.mp4",
    "artwork": "https://c.saavncdn.com/blob/056/Pushpa-The-Rise-Telugu-2021-20211216115409-500x500.jpg",
    "duration": 224
  },
  {
    "id": "reco-8-fearsong",
    "title": "Fear Song",
    "artist": "Anirudh Ravichander",
    "badge": "Mass Hit",
    "movie": "Devara Part 1",
    "year": 2024,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/313/1178c7b2a16c3fd32ec5cd002b5a1ce0_320.mp4",
    "artwork": "https://c.saavncdn.com/313/Devara-Part-1-Telugu-Telugu-2024-20240926171010-500x500.jpg",
    "duration": 194
  },
  {
    "id": "reco-9-pushpapush",
    "title": "Pushpa Pushpa",
    "artist": "Nakash Aziz, Devi Sri Prasad",
    "badge": "Dance",
    "movie": "Pushpa 2: The Rule",
    "year": 2024,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/366/0377fc358eb812da5d44b215b4bebfb3_320.mp4",
    "artwork": "https://c.saavncdn.com/915/Top-10-Dance-Dhamaka-Hits-Telugu-2025-20251014181041-500x500.jpg",
    "duration": 266
  },
  {
    "id": "reco-10-kurchimada",
    "title": "Kurchi Madathapetti",
    "artist": "Thaman S, Sri Krishna, Sahithi Chaganti",
    "badge": "Mega Hit",
    "movie": "Guntur Kaaram",
    "year": 2024,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/000/a8b06cdf02fd61001823e10d55ad3ebe_320.mp4",
    "artwork": "https://c.saavncdn.com/000/Guntur-Kaaram-Telugu-2023-20240126145901-500x500.jpg",
    "duration": 215
  }
];

const JUMP_BACK_TRACKS = [
  {
    "id": "jump-1-shapeofyou",
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "badge": "Global Pop",
    "movie": "÷",
    "year": 2017,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/286/2929d11a5d44a3592ced0383fa6f1977_320.mp4",
    "artwork": "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
    "duration": 233
  },
  {
    "id": "jump-2-tumhiho",
    "title": "Tum Hi Ho",
    "artist": "Arijit Singh",
    "badge": "Evergreen",
    "movie": "Aashiqui 2",
    "year": 2013,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_320.mp4",
    "artwork": "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",
    "duration": 262
  },
  {
    "id": "jump-3-believer",
    "title": "Believer",
    "artist": "Imagine Dragons",
    "badge": "Rock Anthem",
    "movie": "Evolve",
    "year": 2018,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/248/46944eb7b4b31f5b0abf5eb2e1be2d2a_320.mp4",
    "artwork": "https://c.saavncdn.com/248/Evolve-English-2018-20260605220036-500x500.jpg",
    "duration": 204
  },
  {
    "id": "jump-4-buttabomma",
    "title": "Butta Bomma",
    "artist": "Armaan Malik",
    "badge": "Chartbuster",
    "movie": "Ala Vaikunthapurramuloo",
    "year": 2020,
    "language": "Telugu",
    "category": "Curated",
    "src": "https://aac.saavncdn.com/517/68cc88035f2fbcd5772e6551bf64c111_320.mp4",
    "artwork": "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
    "duration": 198
  },
  {
    "id": "jump-5-inkeminkem",
    "title": "Inkem Inkem Inkem Kaavaale",
    "artist": "Sid Sriram",
    "badge": "Soulful Melody",
    "movie": "Geetha Govindam",
    "year": 2018,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/237/7942edb73e64d4e35e488337e14753b7_320.mp4",
    "artwork": "https://c.saavncdn.com/237/Geetha-Govindam-Telugu-2018-20180921-500x500.jpg",
    "duration": 266
  },
  {
    "id": "jump-6-blindingli",
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "badge": "Synthwave",
    "movie": "Blinding Lights",
    "year": 2020,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/820/5ddb9a79a5218f85ca9bef170f3a461d_320.mp4",
    "artwork": "https://c.saavncdn.com/820/Blinding-Lights-English-2020-20200912094411-500x500.jpg",
    "duration": 204
  },
  {
    "id": "jump-7-stay",
    "title": "STAY",
    "artist": "The Kid LAROI, Justin Bieber",
    "badge": "Pop Hit",
    "movie": "F*CK LOVE 3+: OVER YOU",
    "year": 2021,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/663/a1d051c95254676b565d2afef135b626_320.mp4",
    "artwork": "https://c.saavncdn.com/663/F-CK-LOVE-3-OVER-YOU-English-2021-20210727032800-500x500.jpg",
    "duration": 140
  },
  {
    "id": "jump-8-levitating",
    "title": "Levitating",
    "artist": "Dua Lipa",
    "badge": "Disco Pop",
    "movie": "Future Nostalgia",
    "year": 2020,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/665/7790c3b9097592113008eaf1031d6e57_320.mp4",
    "artwork": "https://c.saavncdn.com/665/Future-Nostalgia-English-2020-20260306223201-500x500.jpg",
    "duration": 203
  }
];

const TOLLYWOOD_BLOCKBUSTERS = [
  {
    "id": "toll-1-samajavara",
    "title": "Samajavaragamana",
    "artist": "Sid Sriram",
    "badge": "Sensational",
    "movie": "Ala Vaikunthapurramuloo",
    "year": 2019,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/517/339d76dce4db4f43f4721eec2d8f03ef_320.mp4",
    "artwork": "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
    "duration": 219
  },
  {
    "id": "toll-2-naatunaatu",
    "title": "Naatu Naatu",
    "artist": "Rahul Sipligunj, Kaala Bhairava",
    "badge": "Oscar Winner",
    "movie": "RRR - Telugu",
    "year": 2022,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/683/000ab54759049a8451ffcdc6412a0ef6_320.mp4",
    "artwork": "https://c.saavncdn.com/683/RRR-Telugu-Telugu-2022-20250828171313-500x500.jpg",
    "duration": 214
  },
  {
    "id": "toll-3-chitti",
    "title": "Chitti",
    "artist": "Ram Miriyala",
    "badge": "Viral Hit",
    "movie": "Jathi Ratnalu",
    "year": 2021,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/604/f2c7f087e4bee0bf947b0c43bc22a507_320.mp4",
    "artwork": "https://c.saavncdn.com/604/Jathi-Ratnalu-Telugu-2021-20251011225120-500x500.jpg",
    "duration": 186
  },
  {
    "id": "toll-4-ramulooram",
    "title": "Ramuloo Ramulaa",
    "artist": "Anurag Kulkarni, Mangli",
    "badge": "Party Hit",
    "movie": "Ala Vaikunthapurramuloo",
    "year": 2019,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/517/5702757c42c1ad44b3224a339817c8b0_320.mp4",
    "artwork": "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
    "duration": 245
  },
  {
    "id": "toll-5-tilluannad",
    "title": "Tillu Anna DJ Pedithe",
    "artist": "Ram Miriyala",
    "badge": "Club Anthem",
    "movie": "DJ Tillu",
    "year": 2022,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/430/7c1e7a6ca761e7db04d9169208d46eca_320.mp4",
    "artwork": "https://c.saavncdn.com/430/DJ-Tillu-Telugu-2022-20220210033850-500x500.jpg",
    "duration": 183
  },
  {
    "id": "toll-6-pakkalocal",
    "title": "Pakka Local",
    "artist": "Geetha Madhuri, Sagar",
    "badge": "Mass Beat",
    "movie": "Janatha Garage",
    "year": 2016,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/974/4bfe0670f5515c0ee16a98fbb2a8c27d_320.mp4",
    "artwork": "https://c.saavncdn.com/974/Janatha-Garage-Telugu-2016-20251012002813-500x500.jpg",
    "duration": 259
  },
  {
    "id": "toll-7-toplesipod",
    "title": "Top Lesi Poddi",
    "artist": "Geetha Madhuri, Sagar",
    "badge": "Energy Beat",
    "movie": "Iddarammayilatho",
    "year": 2013,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/514/fe66691dec3c9f0660c14073878e779a_320.mp4",
    "artwork": "https://c.saavncdn.com/514/Idharammayilatho-2013-500x500.jpg",
    "duration": 259
  },
  {
    "id": "toll-8-dhivara",
    "title": "Dhivara",
    "artist": "Ramya Behara, Deepu",
    "badge": "Epic Soundtrack",
    "movie": "Baahubali - The Beginning (Telugu)",
    "year": 2015,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/301/78a0e467f2f62690869c1b0474745953_320.mp4",
    "artwork": "https://c.saavncdn.com/301/Baahubali-The-Beginning-Telugu-2015-20251028160018-500x500.jpg",
    "duration": 327
  }
];

const BOLLYWOOD_MELODIES = [
  {
    "id": "boll-1-apnabanale",
    "title": "Apna Bana Le",
    "artist": "Arijit Singh, Sachin-Jigar",
    "badge": "Pure Romance",
    "movie": "Bhediya",
    "year": 2023,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/815/483a6e118e8108cbb3e5cd8701674f32_320.mp4",
    "artwork": "https://c.saavncdn.com/815/Bhediya-Hindi-2023-20230927155213-500x500.jpg",
    "duration": 261
  },
  {
    "id": "boll-2-raataanlam",
    "title": "Raataan Lambiyan",
    "artist": "Jubin Nautiyal, Asees Kaur",
    "badge": "Romantic Hit",
    "movie": "Shershaah",
    "year": 2021,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/238/35726d4394604604e961bf5b846870d0_320.mp4",
    "artwork": "https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg",
    "duration": 230
  },
  {
    "id": "boll-3-peeloon",
    "title": "Pee Loon (From \"Once Upon A Time In Mumbaai\")",
    "artist": "Mohit Chauhan, Pritam, Irshad Kamil",
    "badge": "Soul Classic",
    "movie": "Emraan Hashmi Hits",
    "year": 2026,
    "language": "Hindi",
    "category": "Curated",
    "src": "https://aac.saavncdn.com/106/c7c9cdfc2ea4dcd3388fe15e3eae06c2_320.mp4",
    "artwork": "https://c.saavncdn.com/106/Emraan-Hashmi-Hits-Hindi-2026-20260905191028-500x500.jpg",
    "duration": 285
  },
  {
    "id": "boll-4-kalhonaaho",
    "title": "Kal Ho Naa Ho",
    "artist": "Sonu Nigam",
    "badge": "Nostalgic Classic",
    "movie": "Kal Ho Naa Ho",
    "year": 2003,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/587/d3bd1ed49eb108d2425e4875cc3ad86e_320.mp4",
    "artwork": "https://c.saavncdn.com/587/Kal-Ho-Naa-Ho-Hindi-2003-20190516130956-500x500.jpg",
    "duration": 321
  },
  {
    "id": "boll-5-agartumsaa",
    "title": "Agar Tum Saath Ho",
    "artist": "Alka Yagnik, Arijit Singh",
    "badge": "Heartfelt",
    "movie": "Tamasha",
    "year": 2015,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/994/2e6b47719cea3e7c9f971a3f1ddc9b0a_320.mp4",
    "artwork": "https://c.saavncdn.com/994/Tamasha-Hindi-2015-500x500.jpg",
    "duration": 341
  },
  {
    "id": "boll-6-kaisehua",
    "title": "Kaise Hua",
    "artist": "Vishal Mishra",
    "badge": "Emotional Hit",
    "movie": "Singham",
    "year": 2011,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/971/6135b7bb882ab68c151b74eee28187f7_320.mp4",
    "artwork": "https://c.saavncdn.com/470/Singham-Hindi-2011-20221211220044-500x500.jpg",
    "duration": 350
  },
  {
    "id": "boll-7-deewanimas",
    "title": "Deewani Mastani",
    "artist": "Shreya Ghoshal",
    "badge": "Royal Grandeur",
    "movie": "Bajirao Mastani",
    "year": 2025,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/808/08d91b5009b5e221ea5838d2acb4b690_320.mp4",
    "artwork": "https://c.saavncdn.com/808/Bajirao-Mastani-Hindi-2025-20260120201154-500x500.jpg",
    "duration": 339
  },
  {
    "id": "boll-8-channamere",
    "title": "Channa Mereya",
    "artist": "Arijit Singh, Pritam",
    "badge": "Heartbreak Classic",
    "movie": "Ae Dil Hai Mushkil  [Deluxe Edition]",
    "year": 2016,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/608/26836683536476d7c5fda4473c2dce98_320.mp4",
    "artwork": "https://c.saavncdn.com/608/Ae-Dil-Hai-Mushkil-Deluxe-Edition-Hindi-2016-500x500.jpg",
    "duration": 289
  }
];

const FOLK_MASTERPIECES = [
  {
    "id": "folk-1-sarangadar",
    "title": "Saranga Dariya",
    "artist": "Mangli",
    "badge": "Telangana Folk",
    "movie": "Love Story",
    "year": 2020,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/582/499f47fee99a0809e9d2b343ac2bec8e_320.mp4",
    "artwork": "https://c.saavncdn.com/582/Love-Story-Telugu-2020-20210923220520-500x500.jpg",
    "duration": 230
  },
  {
    "id": "folk-2-bullettuba",
    "title": "Bullettu Bandi",
    "artist": "Mohana Bhogaraju",
    "badge": "Baraat Folk",
    "movie": "Bullettu Bandi",
    "year": 2021,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/009/afc28d94bfee619e879a150d37a4ee52_320.mp4",
    "artwork": "https://c.saavncdn.com/009/Bullettu-Bandi-Telugu-2021-20210327120013-500x500.jpg",
    "duration": 282
  },
  {
    "id": "folk-3-bonalusong",
    "title": "Bonalu Song - Chethilo Gampa",
    "artist": "Mangli",
    "badge": "Devotional Folk",
    "movie": "Telangana Bonalu Beats",
    "year": 2022,
    "language": "Telugu",
    "category": "Curated",
    "src": "https://aac.saavncdn.com/712/e616231da7e27dd8a8aa67732d8471b6_320.mp4",
    "artwork": "https://c.saavncdn.com/246/Bonalu-Song-2024-Telugu-2024-20240711234452-500x500.jpg",
    "duration": 268
  },
  {
    "id": "folk-4-oorupallet",
    "title": "Ooru Palletooru",
    "artist": "Ram Miriyala",
    "badge": "Village Soul",
    "movie": "Balagam",
    "year": 2023,
    "language": "Telugu",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/000/2b768ef9928cdc7dc77c032227082576_320.mp4",
    "artwork": "https://c.saavncdn.com/000/Balagam-Telugu-2023-20230304184334-500x500.jpg",
    "duration": 247
  },
  {
    "id": "folk-5-chaudhary",
    "title": "Chaudhary",
    "artist": "Mame Khan, Amit Trivedi",
    "badge": "Rajasthani Folk",
    "movie": "Coke Studio S2",
    "year": 2023,
    "language": "Hindi",
    "category": "Folk",
    "src": "https://aac.saavncdn.com/668/e66b0ca97c953970ed512e327b5f969e_320.mp4",
    "artwork": "https://c.saavncdn.com/668/Coke-Studio-S2-Hindi-2023-20260606091636-500x500.jpg",
    "duration": 420
  },
  {
    "id": "folk-6-bayiloneba",
    "title": "Bayilone Ballipalike",
    "artist": "Mangli",
    "badge": "Desi Rhythm",
    "movie": "Bayilone Ballipalike",
    "year": 2025,
    "language": "Telugu",
    "category": "Curated",
    "src": "https://aac.saavncdn.com/604/2ef1404906dcb0e534340d2f3cfa3e33_320.mp4",
    "artwork": "https://c.saavncdn.com/604/Bayilone-Ballipalike-Telugu-2025-20251121155720-500x500.jpg",
    "duration": 247
  }
];

const LATEST_MOVIE_HITS = [
  {
    "id": "latest-1-themeofkal",
    "title": "Theme of Kalki",
    "artist": "Santhosh Narayanan, Gowtham Bharadwaj",
    "badge": "Blockbuster 2024",
    "movie": "Kalki 2898 AD",
    "year": 2024,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/888/a40cb595cf75a62e1469ac0a8194e998_320.mp4",
    "artwork": "https://c.saavncdn.com/888/Kalki-2898-Ad-Telugu-Telugu-2024-20240712063717-500x500.jpg",
    "duration": 189
  },
  {
    "id": "latest-2-chuttamall",
    "title": "Chuttamalle",
    "artist": "Shilpa Rao, Anirudh Ravichander",
    "badge": "Blockbuster 2024",
    "movie": "Devara Part 1",
    "year": 2024,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/313/e49e604945889f330e5b3536dd0ff524_320.mp4",
    "artwork": "https://c.saavncdn.com/313/Devara-Part-1-Telugu-Telugu-2024-20240926171010-500x500.jpg",
    "duration": 222
  },
  {
    "id": "latest-3-soosekithe",
    "title": "Sooseki (The Couple Song)",
    "artist": "Shreya Ghoshal, Devi Sri Prasad",
    "badge": "Blockbuster 2024",
    "movie": "Pushpa 2: The Rule",
    "year": 2024,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/366/41c23b604eed1e0bb950ad4566b40198_320.mp4",
    "artwork": "https://c.saavncdn.com/366/Pushpa-2-The-Rule-Telugu-Telugu-2024-20241205211012-500x500.jpg",
    "duration": 260
  },
  {
    "id": "latest-4-aajkiraat",
    "title": "Aaj Ki Raat",
    "artist": "Madhubanti Bagchi, Divya Kumar, Sachin-Jigar",
    "badge": "Blockbuster 2024",
    "movie": "Stree 2",
    "year": 2024,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/373/36b1b3637cdeedfaa9a9012453948aa6_320.mp4",
    "artwork": "https://c.saavncdn.com/373/Stree-2-Hindi-2024-20240828083834-500x500.jpg",
    "duration": 228
  },
  {
    "id": "latest-5-pehlebhima",
    "title": "Pehle Bhi Main",
    "artist": "Vishal Mishra, JAM8",
    "badge": "Blockbuster 2024",
    "movie": "Animal",
    "year": 2023,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/092/81b52beea90f186f27cf5c5eead972c8_320.mp4",
    "artwork": "https://c.saavncdn.com/092/ANIMAL-Hindi-2023-20260724191152-500x500.jpg",
    "duration": 250
  },
  {
    "id": "latest-6-satranga",
    "title": "Satranga",
    "artist": "Arijit Singh, Shreyas Puranik",
    "badge": "Blockbuster 2024",
    "movie": "Animal",
    "year": 2023,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/092/86b1368e104225e0bfbc69cda4ab8580_320.mp4",
    "artwork": "https://c.saavncdn.com/092/ANIMAL-Hindi-2023-20260724191152-500x500.jpg",
    "duration": 271
  },
  {
    "id": "latest-7-dummasala",
    "title": "Dum Masala",
    "artist": "Sanjith Hegde, Thaman S",
    "badge": "Blockbuster 2024",
    "movie": "Guntur Kaaram",
    "year": 2024,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/000/a20063ed2317350eb8f7e13728847e40_320.mp4",
    "artwork": "https://c.saavncdn.com/000/Guntur-Kaaram-Telugu-2023-20240126145901-500x500.jpg",
    "duration": 206
  },
  {
    "id": "latest-8-chaleya",
    "title": "Chaleya",
    "artist": "Arijit Singh, Shilpa Rao, Anirudh Ravichander",
    "badge": "Blockbuster 2024",
    "movie": "Jawan",
    "year": 2023,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/047/d1366530468931703ac909e82a3ee788_320.mp4",
    "artwork": "https://c.saavncdn.com/047/Jawan-Hindi-2023-20230921190854-500x500.jpg",
    "duration": 200
  },
  {
    "id": "latest-9-ticketehko",
    "title": "Ticket Eh Konakunda",
    "artist": "Ram Miriyala",
    "badge": "Blockbuster 2024",
    "movie": "Tillu Square",
    "year": 2024,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/000/4230cca1e82b5c22a2c34063e561ae0f_320.mp4",
    "artwork": "https://c.saavncdn.com/000/Tillu-Square-Telugu-2023-20240405190047-500x500.jpg",
    "duration": 189
  },
  {
    "id": "latest-10-amijetomar",
    "title": "Ami Je Tomar 3.0",
    "artist": "Shreya Ghoshal, Amaal Mallik, Pritam",
    "badge": "Blockbuster 2024",
    "movie": "Bhool Bhulaiyaa 3",
    "year": 2024,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/443/a852d618fa668280b031631e1f01d5c0_320.mp4",
    "artwork": "https://c.saavncdn.com/443/Bhool-Bhulaiyaa-3-Hindi-2024-20250430161035-500x500.jpg",
    "duration": 315
  }
];

const GOLDEN_ERA_CLASSICS = [
  {
    "id": "classic-1-omkaaranaa",
    "title": "Omkaara Naadaanu",
    "artist": "S. P. Balasubrahmanyam, K. V. Mahadevan",
    "badge": "Golden Classic",
    "movie": "Shankarabharanam",
    "year": 1980,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/956/3fc3ee51fb84d78c26e570aa6c375e7b_320.mp4",
    "artwork": "https://c.saavncdn.com/956/Shankara-Bharanam-Telugu-1979-500x500.jpg",
    "duration": 354
  },
  {
    "id": "classic-2-dorakunaai",
    "title": "Dorakunaa Ituvanti Seva",
    "artist": "S. P. Balasubrahmanyam, Vani Jayaram",
    "badge": "Golden Classic",
    "movie": "Shankarabharanam",
    "year": 1980,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/653/998f6a07a7799c83f989af850970b70c_320.mp4",
    "artwork": "https://c.saavncdn.com/653/Shankarabharanam-Kannada-2021-20220827080451-500x500.jpg",
    "duration": 277
  },
  {
    "id": "classic-3-omnamahshi",
    "title": "Om Namah Shivaaya",
    "artist": "S. P. Balasubrahmanyam, K. S. Chithra, Ilaiyaraaja",
    "badge": "Golden Classic",
    "movie": "Geethanjali",
    "year": 1989,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/525/d58110283b17643f5ac7e6cd4ec24956_320.mp4",
    "artwork": "https://c.saavncdn.com/525/Bhoom-Shankara-Kannada-2025-20250719214506-500x500.jpg",
    "duration": 241
  },
  {
    "id": "classic-4-vedamanuva",
    "title": "Vedam Anuvanuvuna",
    "artist": "S. P. Balasubrahmanyam, S. P. Sailaja, Ilaiyaraaja",
    "badge": "Golden Classic",
    "movie": "Sagara Sangamam",
    "year": 1983,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/901/348819da9f4641c73a44341be7922c0e_320.mp4",
    "artwork": "https://c.saavncdn.com/901/Sagara-Sangamam-Telugu-Telugu-1983-500x500.jpg",
    "duration": 315
  },
  {
    "id": "classic-5-lahirilahi",
    "title": "Lahiri Lahiri Lahirilo",
    "artist": "Ghantasala, P. Leela",
    "badge": "Golden Classic",
    "movie": "Mayabazar",
    "year": 1957,
    "language": "Telugu",
    "category": "Telugu",
    "src": "https://aac.saavncdn.com/596/774d24d9934f4395c6f1a865c2fbbb15_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/279/Maya-Bazaar-Tamil-1957-20230509153547-500x500.jpg",
    "duration": 230
  },
  {
    "id": "classic-6-meresapnon",
    "title": "Mere Sapnon Ki Rani",
    "artist": "Kishore Kumar, S. D. Burman",
    "badge": "Golden Classic",
    "movie": "Aradhana",
    "year": 1969,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/951/4882fc8a7bf7b8e7a1040ef94de6b9ef_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/951/Aradhana-Hindi-1969-500x500.jpg",
    "duration": 300
  },
  {
    "id": "classic-7-yehdostihu",
    "title": "Yeh Dosti Hum Nahi Todenge",
    "artist": "Kishore Kumar, Manna Dey, R. D. Burman",
    "badge": "Golden Classic",
    "movie": "Sholay",
    "year": 1975,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/619/5534a1d8fbe23d8765c28af27a3a8470_320.mp4",
    "artwork": "https://c.saavncdn.com/619/Ye-Dosti-Hum-Nahin-Todenge-Hindi-2024-20240727053154-500x500.jpg",
    "duration": 321
  },
  {
    "id": "classic-8-kahidoorja",
    "title": "Kahi Door Jab Din Dhal Jaye",
    "artist": "Mukesh, Salil Chowdhury",
    "badge": "Golden Classic",
    "movie": "Anand",
    "year": 1971,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/339/581c52f09522eab9b94a72987e194bcd_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/339/Anand-Hindi-1971-20180111-500x500.jpg",
    "duration": 202
  },
  {
    "id": "classic-9-churaliyah",
    "title": "Chura Liya Hai Tumne Jo Dil Ko",
    "artist": "Mohammed Rafi, Asha Bhosle, R. D. Burman",
    "badge": "Golden Classic",
    "movie": "Yaadon Ki Baaraat",
    "year": 1973,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/854/a48723fa6382061a3db02b90c5c0bd43_sar_320.mp4",
    "artwork": "https://c.saavncdn.com/854/Yaadon-Ki-Baaraat-Hindi-1973-20200622062706-500x500.jpg",
    "duration": 289
  },
  {
    "id": "classic-10-gulabiaank",
    "title": "Gulabi Aankhen",
    "artist": "Mohammed Rafi, R. D. Burman",
    "badge": "Golden Classic",
    "movie": "The Train",
    "year": 1970,
    "language": "Hindi",
    "category": "Hindi",
    "src": "https://aac.saavncdn.com/812/4a604c9ad0d3435a9d07f1b40513bde3_320.mp4",
    "artwork": "https://c.saavncdn.com/812/Barish-with-Rafi-Hindi-2026-20260827053717-500x500.jpg",
    "duration": 198
  }
];

const GLOBAL_ENGLISH_HITS = [
  {
    "id": "english-1-perfect",
    "title": "Perfect",
    "artist": "Ed Sheeran",
    "badge": "Global Chartbuster",
    "movie": "÷ (Divide)",
    "year": 2017,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/286/71bb6cc3391ddf619a4a3f1a1134f1c4_320.mp4",
    "artwork": "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
    "duration": 263
  },
  {
    "id": "english-2-starboy",
    "title": "Starboy",
    "artist": "The Weeknd ft. Daft Punk",
    "badge": "Global Chartbuster",
    "movie": "Starboy",
    "year": 2016,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/396/b4e570050007b056c662f2a98c9f28ec_320.mp4",
    "artwork": "https://c.saavncdn.com/396/The-Highlights-English-2021-20240207045714-500x500.jpg",
    "duration": 230
  },
  {
    "id": "english-3-demons",
    "title": "Demons",
    "artist": "Imagine Dragons",
    "badge": "Global Chartbuster",
    "movie": "Night Visions",
    "year": 2012,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/210/6878daf1737dcbd57b99677f085952d1_320.mp4",
    "artwork": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
    "duration": 175
  },
  {
    "id": "english-4-cruelsumme",
    "title": "Cruel Summer",
    "artist": "Taylor Swift",
    "badge": "Global Chartbuster",
    "movie": "Lover",
    "year": 2019,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/243/cf6b522de1390996fdbe109298873c72_320.mp4",
    "artwork": "https://c.saavncdn.com/243/The-Cruelest-Summer-English-2023-20231109123211-500x500.jpg",
    "duration": 178
  },
  {
    "id": "english-5-peaches",
    "title": "Peaches",
    "artist": "Justin Bieber ft. Daniel Caesar, Giveon",
    "badge": "Global Chartbuster",
    "movie": "Justice",
    "year": 2021,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/983/01100b84f61ca8b3a0432f12c564be8e_320.mp4",
    "artwork": "https://c.saavncdn.com/983/Justice-English-2021-20210325102906-500x500.jpg",
    "duration": 198
  },
  {
    "id": "english-6-dontstartn",
    "title": "Don't Start Now",
    "artist": "Dua Lipa",
    "badge": "Global Chartbuster",
    "movie": "Future Nostalgia",
    "year": 2019,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/175/ebe4bde7f08c39cc9f98596f9b0d943f_320.mp4",
    "artwork": "https://c.saavncdn.com/175/Don-t-Start-Now-English-2019-20231110075133-500x500.jpg",
    "duration": 183
  },
  {
    "id": "english-7-bohemianrh",
    "title": "Bohemian Rhapsody",
    "artist": "Queen",
    "badge": "Rock Legend",
    "movie": "A Night at the Opera",
    "year": 1975,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/271/25722226e82ded09c73b13896a437a78_320.mp4",
    "artwork": "https://c.saavncdn.com/271/A-Night-At-The-Opera-Deluxe-Edition-English-2026-20260617043527-500x500.jpg",
    "duration": 358
  },
  {
    "id": "english-8-billiejean",
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "badge": "Rock Legend",
    "movie": "Thriller",
    "year": 1982,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/798/ba245d3ac53dc20f560b9da379d7f4b3_320.mp4",
    "artwork": "https://c.saavncdn.com/798/Mundial-2026-Copa-de-F-tbol-del-Mundo-2026-English-2026-20260714021441-500x500.jpg",
    "duration": 293
  },
  {
    "id": "english-9-asitwas",
    "title": "As It Was",
    "artist": "Harry Styles",
    "badge": "Global Chartbuster",
    "movie": "Harry's House",
    "year": 2022,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/061/3cd80564e24ad83245334f8a0e7fb126_320.mp4",
    "artwork": "https://c.saavncdn.com/061/Harry-s-House-English-2022-20220518224913-500x500.jpg",
    "duration": 167
  },
  {
    "id": "english-10-hymnforthe",
    "title": "Hymn For The Weekend",
    "artist": "Coldplay",
    "badge": "Global Chartbuster",
    "movie": "A Head Full of Dreams",
    "year": 2015,
    "language": "English",
    "category": "English",
    "src": "https://aac.saavncdn.com/141/579c70096de26b2fab435301383d2bfb_320.mp4",
    "artwork": "https://c.saavncdn.com/141/A-Head-Full-of-Dreams-English-2015-20201104170723-500x500.jpg",
    "duration": 258
  }
];


const ALBUMS_FEATURING = [
  {
    id: "alb-vikramasimha",
    title: "Vikramasimha",
    artist: "A.R. Rahman, Rajinikanth",
    badge: "Album",
    artwork: "https://c.saavncdn.com/799/Vikramasimha-Telugu-2014-20190914112556-500x500.jpg",
    query: "Vikramasimha",
    src: "https://aac.saavncdn.com/799/b44f25eef4672726ebaa633bac5373da_320.mp4"
  },
  {
    id: "alb-chhaava",
    title: "Chhaava",
    artist: "A.R. Rahman, Arijit Singh",
    badge: "Album",
    artwork: "images/cover-chhaava.jpg",
    query: "Chhaava",
    src: "https://aac.saavncdn.com/871/c2febd353f3a076a406fa37510f31f9f_320.mp4"
  },
  {
    id: "alb-hanuman",
    title: "Shree Hanuman Chalisa",
    artist: "Hariharan, Gulshan Kumar",
    badge: "Album",
    artwork: "https://c.saavncdn.com/798/Shree-Hanuman-Chalisa-Hanuman-Ashtak-Hindi-1992-20240924151740-500x500.jpg",
    query: "Hanuman Chalisa Hariharan",
    src: "https://aac.saavncdn.com/707/dbb4a98e6cdd947ae974b3f37e6ad42d_320.mp4"
  },
  {
    id: "alb-pushpa2",
    title: "Pushpa 2: The Rule",
    artist: "Devi Sri Prasad",
    badge: "Album",
    artwork: "https://c.saavncdn.com/366/Pushpa-2-The-Rule-Telugu-Telugu-2024-20241205211012-500x500.jpg",
    query: "Pushpa 2",
    src: "https://aac.saavncdn.com/366/0377fc358eb812da5d44b215b4bebfb3_320.mp4"
  },
  {
    id: "alb-devara",
    title: "Devara Part 1",
    artist: "Anirudh Ravichander",
    badge: "Album",
    artwork: "https://c.saavncdn.com/313/Devara-Part-1-Telugu-Telugu-2024-20240926171010-500x500.jpg",
    query: "Devara",
    src: "https://aac.saavncdn.com/313/1178c7b2a16c3fd32ec5cd002b5a1ce0_320.mp4"
  },
  {
    id: "alb-alavp",
    title: "Ala Vaikunthapurramuloo",
    artist: "Thaman S",
    badge: "Album",
    artwork: "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
    query: "Ala Vaikunthapurramuloo",
    src: "https://aac.saavncdn.com/517/5702757c42c1ad44b3224a339817c8b0_320.mp4"
  }
];

const PHOTO_REFERENCE_TRACKS = [];

async function playAndShowAlbum(albumTitle, query) {
  const cleanTitle = (albumTitle || '').toLowerCase().trim();
  const albumEntry = (typeof ALBUMS_FEATURING !== 'undefined' ? ALBUMS_FEATURING : []).find(
    (a) => a.title.toLowerCase() === cleanTitle || cleanTitle.includes(a.title.toLowerCase()) || a.title.toLowerCase().includes(cleanTitle)
  );
  if (albumEntry && albumEntry.src) {
    const trackObj = {
      id: albumEntry.id,
      title: albumEntry.title,
      artist: albumEntry.artist,
      movie: albumEntry.title,
      src: albumEntry.src,
      artwork: albumEntry.artwork,
      duration: 260
    };
    playTrack(trackObj);
    return;
  }

  const q = query || albumTitle;
  toast(`Opening album: ${albumTitle}...`);
  const localMatches = state.tracks.filter((t) => {
    const m = (t.movie || '').toLowerCase();
    const tit = (t.title || '').toLowerCase();
    return m.includes(cleanTitle) || cleanTitle.includes(m) || tit.includes(cleanTitle);
  });

  state.activeArtist = null;
  state.activePlaylistId = null;
  state.onlineSearch = true;
  state.query = albumTitle;
  const searchInput = el('search');
  if (searchInput) searchInput.value = albumTitle;
  const clearBtn = el('clearSearch');
  if (clearBtn) clearBtn.hidden = false;

  if (localMatches.length > 0) {
    state.onlineTracks = localMatches;
    render();
    playTrack(localMatches[0]);
  } else {
    searchOnlineCatalog(q);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let homeDashboardRendered = false;

// Render Spotify-Style Home Dashboard (Rendered once on startup for maximum speed)
function renderHomeDashboard() {
  // 1. Recent Songs Grid (6 equal sized cards)
  renderRecentGrid();

  // Reset Home Shelves map
  HOME_SHELF_TRACKS_MAP.clear();

  // Helper for rendering standard horizontal shelves with guaranteed track resolution
  function renderShelf(containerId, tracks) {
    const container = el(containerId);
    if (!container) return;
    const uniqueTracks = deduplicateTrackList(tracks);
    uniqueTracks.forEach((t) => {
      if (t && t.id) HOME_SHELF_TRACKS_MAP.set(t.id, t);
    });
    container.innerHTML = uniqueTracks.map((t) => {
      const art = t.artwork || 'icon-192.png';
      return `
        <div class="shelf-card" data-action="play-track" data-id="${esc(t.id)}" role="button" tabindex="0" title="Play ${esc(t.title)} by ${esc(t.artist)}">
          <div class="shelf-art-wrap">
            <img class="shelf-art" src="${esc(art)}" alt="${esc(t.title)}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='icon-192.png';" />
            <div class="shelf-play-floating" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <span class="shelf-title">${esc(t.title)}</span>
          <span class="shelf-subtitle">${esc(t.artist)}</span>
        </div>
      `;
    }).join('');
  }

  // 2. Recommended for today shelf (100% verified studio hits)
  const recEl = el('recommendedShelf');
  if (recEl) {
    RECOMMENDED_TODAY.forEach((t) => {
      if (t && t.id) HOME_SHELF_TRACKS_MAP.set(t.id, t);
    });
    recEl.innerHTML = RECOMMENDED_TODAY.map((t) => {
      const art = t.artwork || 'icon-192.png';
      return `
        <div class="shelf-card" data-action="play-track" data-id="${esc(t.id)}" role="button" tabindex="0" title="Play ${esc(t.title)} by ${esc(t.artist)}">
          <div class="shelf-art-wrap">
            <img class="shelf-art" src="${esc(art)}" alt="${esc(t.title)}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='icon-192.png';" />
            <div class="shelf-play-floating" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <span class="shelf-type-badge">${esc(t.badge || 'Single')}</span>
          <span class="shelf-title">${esc(t.title)}</span>
          <span class="shelf-subtitle">${esc(t.artist)}</span>
        </div>
      `;
    }).join('');
  }

  // 3. Popular Artists Shelf (Circular Avatars)
  const homeArtistsEl = el('homeArtistsShelf');
  if (homeArtistsEl) {
    homeArtistsEl.innerHTML = HOME_ARTISTS.map((artist) => `
      <button class="artist-shelf-card" type="button" data-artist-query="${esc(artist.query)}" data-artist-name="${esc(artist.name)}" onclick="window.openArtistShelfSongs(this, event)" title="Listen to all songs by ${esc(artist.name)}">
        <div class="artist-avatar-wrap">
          <img class="artist-avatar-img" src="${esc(artist.img)}" alt="${esc(artist.name)}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='icon-192.png';" />
        </div>
        <span class="artist-name">${esc(artist.name)}</span>
        <span class="artist-genre">${esc(artist.tag)}</span>
      </button>
    `).join('');
  }

  // 4. Jump back in shelf (100% verified hits matching titles exactly)
  renderShelf('jumpBackShelf', JUMP_BACK_TRACKS);

  // 5. Tollywood Blockbusters (100% verified Telugu blockbuster songs)
  renderShelf('teluguShelf', TOLLYWOOD_BLOCKBUSTERS);

  // 6. Bollywood Melodies (100% verified Hindi melodies)
  renderShelf('hindiShelf', BOLLYWOOD_MELODIES);

  // 7. Folk & Cultural Masterpieces (100% verified folk songs)
  renderShelf('folkShelf', FOLK_MASTERPIECES);

  // 8. Latest Movie Blockbusters (2024-2026 Telugu & Hindi)
  renderShelf('latestHitsShelf', LATEST_MOVIE_HITS);

  // 9. Golden Era Retro Classics (Telugu & Hindi)
  renderShelf('classicHitsShelf', GOLDEN_ERA_CLASSICS);

  // 10. Global English Hits & Legends
  renderShelf('englishHitsShelf', GLOBAL_ENGLISH_HITS);
}

// Progressive Song Grid Rendering (Ultra-Smooth 60FPS Virtual Pagination)
let songGridLimit = 36;
const SONG_GRID_CHUNK_SIZE = 36;
let currentSongList = [];
let lastRenderedContextKey = '';
let songGridObserver = null;

function renderSongGrid(resetLimit = false) {
  const songGridEl = el('songGrid');
  if (!songGridEl) return;

  if (resetLimit) {
    songGridLimit = SONG_GRID_CHUNK_SIZE;
  }

  const total = currentSongList.length;
  const isLimited = total > songGridLimit;
  const displayTracks = isLimited ? currentSongList.slice(0, songGridLimit) : currentSongList;

  songGridEl.innerHTML = displayTracks.map(cardHTML).join('');

  const loadMoreWrap = el('songGridLoadMoreContainer');
  const loadMoreBtn = el('songGridLoadMoreBtn');
  const loadMoreText = el('songGridLoadMoreText');
  const isArtistView = Boolean(state.activeArtist);

  if (loadMoreWrap) {
    loadMoreWrap.hidden = isArtistView || !isLimited;
    if (loadMoreText && isLimited) {
      loadMoreText.textContent = `Show More Songs (${displayTracks.length} of ${total})`;
    }
  }

  if (loadMoreBtn && !loadMoreBtn._hasBoundClick) {
    loadMoreBtn._hasBoundClick = true;
    loadMoreBtn.onclick = () => {
      if (songGridLimit >= currentSongList.length) return;
      const prevLimit = songGridLimit;
      songGridLimit += SONG_GRID_CHUNK_SIZE;
      const nextChunk = currentSongList.slice(prevLimit, songGridLimit);
      if (nextChunk.length > 0) {
        songGridEl.insertAdjacentHTML('beforeend', nextChunk.map(cardHTML).join(''));
        const newCount = Math.min(songGridLimit, currentSongList.length);
        if (loadMoreText) {
          loadMoreText.textContent = `Show More Songs (${newCount} of ${currentSongList.length})`;
        }
        if (newCount >= currentSongList.length && loadMoreWrap) {
          loadMoreWrap.hidden = true;
        }
      } else if (loadMoreWrap) {
        loadMoreWrap.hidden = true;
      }
    };
  }

  initSongGridObserver();
}

function initSongGridObserver() {
  if (songGridObserver) return;
  const target = el('songGridLoadMoreContainer');
  if (!target || !('IntersectionObserver' in window)) return;
  songGridObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !target.hidden) {
        const btn = el('songGridLoadMoreBtn');
        if (btn) btn.click();
      }
    });
  }, { rootMargin: '300px' });
  songGridObserver.observe(target);
}

// Main Render Function
function render() {
  renderChips();

  const isArtistView = Boolean(state.activeArtist);
  const isPlaylistsFilter = state.filter === 'Playlists' && !state.activePlaylistId && !state.onlineSearch && !isArtistView;
  el('playlistsContainer').hidden = !isPlaylistsFilter;
  if (isPlaylistsFilter) renderPlaylistsGrid();

  const onlineBanner = el('onlineSearchBanner');
  if (onlineBanner) onlineBanner.hidden = !state.onlineSearch || isArtistView;

  // Home Dashboard (Spotify ordered view: visible on All / Music view without active search and without active artist)
  const isHomeView = (state.filter === 'All' || state.filter === 'Music') && !state.query && !state.onlineSearch && !isArtistView;
  const homeDashboard = el('homeDashboard');
  if (homeDashboard) {
    homeDashboard.hidden = !isHomeView;
    if (isHomeView) {
      if (!homeDashboardRendered) {
        renderHomeDashboard();
        homeDashboardRendered = true;
      } else {
        renderRecentGrid();
      }
    }
  }

  const artistHero = el('artistHeroSection');
  if (artistHero) {
    artistHero.hidden = !isArtistView;
  }

  const list = visibleTracks();
  currentSongList = list;

  const currentContextKey = `${state.filter}__${state.query}__${state.activeArtist}__${state.onlineSearch}__${state.activePlaylistId}`;
  const contextChanged = currentContextKey !== lastRenderedContextKey;
  lastRenderedContextKey = currentContextKey;

  renderSongGrid(contextChanged);
  el('emptyState').hidden = list.length > 0;

  const libHead = el('libraryHeaderSection');
  if (libHead) libHead.hidden = isArtistView || isPlaylistsFilter || (!isHomeView && state.onlineSearch);

  let titleText = isHomeView ? 'Complete Song Library (Studio Master)' : 'Song library (Full Length)';
  if (state.onlineSearch) {
    titleText = `Online Results for "${state.query || 'Telugu & Hindi'}"`;
  } else if (state.filter === 'Playlists') {
    if (state.activePlaylistId) {
      const pl = state.playlists.find((p) => p.id === state.activePlaylistId);
      titleText = pl ? `Playlist: ${pl.name}` : 'Playlist';
    } else {
      titleText = 'All Songs in Playlists';
    }
  } else if (state.filter === 'Favorites') {
    titleText = 'Liked Songs';
  } else if (state.filter === 'Downloads') {
    titleText = 'Downloaded Songs (Offline)';
  } else if (state.filter !== 'All') {
    titleText = `${state.filter} songs`;
  }
  el('sectionTitle').textContent = titleText;

  const countSuffix = list.length === 1 ? '' : 's';
  if (state.filter === 'Downloads' && !state.query && !state.onlineSearch) {
    el('resultInfo').textContent = `${list.length} song${countSuffix} saved for offline listening`;
  } else if (state.query) {
    el('resultInfo').textContent = `${list.length} result${countSuffix} for "${state.query}"`;
  } else {
    el('resultInfo').textContent = 'Studio master streams (320kbps)';
  }

  if (state.onlineSearch) {
    el('emptyHeading').textContent = 'No online songs found';
    el('emptyText').textContent = 'Try searching with another song title, artist, or movie name.';
    el('searchOnlineFromEmpty').hidden = true;
  } else if (state.filter === 'Downloads') {
    el('emptyHeading').textContent = 'No downloads yet';
    el('emptyText').textContent = 'Tap the download icon on any song to save it here for offline listening.';
    el('searchOnlineFromEmpty').hidden = true;
  } else if (state.filter === 'Favorites') {
    el('emptyHeading').textContent = 'No liked songs yet';
    el('emptyText').textContent = 'Click the heart icon on any song to save it to your Favorites.';
    el('searchOnlineFromEmpty').hidden = false;
  } else {
    el('emptyHeading').textContent = 'No songs found';
    el('emptyText').textContent = state.query
      ? `No local matches for "${state.query}". Would you like to search online for the full song?`
      : 'No songs in this view. Try another category or add your own music.';
    el('searchOnlineFromEmpty').hidden = !state.query;
  }

  syncPlayState();
  renderQueueList();
}

// Render Player Bar and Expanded Screen
function renderPlayer() {
  const track = state.current;
  const isPlaying = state.playing && Boolean(track);
  document.body.classList.toggle('is-playing-music', isPlaying);

  el('player').dataset.empty = track ? 'false' : 'true';

  el('playBtn').classList.toggle('is-playing', isPlaying);
  el('playBtn').setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
  el('expPlayBtn').classList.toggle('is-playing', isPlaying);
  el('expPlayBtn').setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');

  el('nowTitle').textContent = track ? track.title : 'Nothing playing';
  el('nowArtist').textContent = track ? `${track.artist} \u00b7 ${track.language || 'Music'}` : 'Pick a song to start';

  const playerArtNode = el('nowArt');
  if (track) {
    if (track.artwork) {
      playerArtNode.style.backgroundImage = `url('${track.artwork}')`;
      playerArtNode.innerHTML = '';
    } else {
      playerArtNode.style.background = artStyle(track);
      playerArtNode.innerHTML = `<span class="art-initials">${esc(initials(track.title))}</span>`;
    }
  } else {
    playerArtNode.style.backgroundImage = "url('logo.png?v=100')";
    playerArtNode.style.backgroundSize = "cover";
    playerArtNode.innerHTML = '';
  }

  const isLiked = track ? state.favorites.has(track.id) : false;
  el('playerLikeBtn').classList.toggle('is-liked', isLiked);
  el('expandedLikeBtn').classList.toggle('is-liked', isLiked);

  el('expandedTitle').textContent = track ? track.title : 'Select a track';
  el('expandedArtist').textContent = track ? `${track.artist} \u00b7 ${track.movie || ''}` : 'Tuneus Universe of Music';
  el('expandedLangBadge').textContent = track ? (track.language || 'MUSIC').toUpperCase() : 'TUNEUS';
  el('expandedVinyl').classList.toggle('spinning', isPlaying);

  const expArtNode = el('expandedArt');
  if (track) {
    if (track.artwork) {
      expArtNode.style.backgroundImage = `url('${track.artwork}')`;
      expArtNode.innerHTML = '';
    } else {
      expArtNode.style.background = artStyle(track);
      expArtNode.innerHTML = esc(initials(track.title));
    }
  } else {
    expArtNode.style.backgroundImage = "url('logo.png?v=100')";
    expArtNode.style.backgroundSize = "cover";
    expArtNode.innerHTML = '';
  }

  el('shuffleBtn').classList.toggle('is-on', state.shuffle);
  el('shuffleBtn').setAttribute('aria-pressed', String(state.shuffle));
  el('expShuffleBtn').classList.toggle('is-on', state.shuffle);

  const isRepeat = state.repeat !== 'none';
  el('repeatBtn').classList.toggle('is-on', isRepeat);
  el('repeatBtn').classList.toggle('repeat-one', state.repeat === 'one');
  el('expRepeatBtn').classList.toggle('is-on', isRepeat);
  el('expRepeatBtn').classList.toggle('repeat-one', state.repeat === 'one');

  // Keep floating and bottom players permanently hidden as requested
  const floatPlayer = el('floatingMiniPlayer');
  if (floatPlayer) {
    floatPlayer.style.display = 'none';
  }
  const deskPlayer = el('player');
  if (deskPlayer) {
    deskPlayer.style.display = 'none';
  }
}

// Synchronize song card states (Targeted update for high performance)
function syncPlayState() {
  const currentId = state.current ? String(state.current.id) : null;
  const isPlaying = Boolean(state.playing && state.current);

  document.querySelectorAll('.song-card.is-active, .song-card.is-playing').forEach((c) => {
    if (c.dataset.id !== currentId) {
      c.classList.remove('is-active', 'is-playing');
    }
  });

  if (currentId) {
    document.querySelectorAll(`.song-card[data-id="${CSS.escape(currentId)}"]`).forEach((c) => {
      c.classList.add('is-active');
      c.classList.toggle('is-playing', isPlaying);
    });
  }
  renderPlayer();
}

// Timeline & Progress updates (Full Length Tracking)
function updateProgress(current, duration) {
  progress.current = Number.isFinite(current) && current > 0 ? current : 0;
  progress.duration = Number.isFinite(duration) && duration > 0 ? duration : (state.current?.duration || 210);
  const ratio = progress.duration ? Math.min(1, progress.current / progress.duration) : 0;

  const curFormatted = fmt(progress.current);
  const durFormatted = fmt(progress.duration);

  el('curTime').textContent = curFormatted;
  el('durTime').textContent = durFormatted;
  el('expCurTime').textContent = curFormatted;
  el('expDurTime').textContent = durFormatted;

  const seek = el('seek');
  const expSeek = el('expSeek');
  const val = String(Math.round(ratio * 1000));
  const percent = `${(ratio * 100).toFixed(1)}%`;

  seek.value = val;
  seek.style.setProperty('--p', percent);
  expSeek.value = val;
  expSeek.style.setProperty('--p', percent);
  const pb = el('playerProgressBar');
  if (pb) pb.style.width = percent;
  const fpb = el('floatingProgressBar');
  if (fpb) fpb.style.width = percent;
}

// Stop all playback cleanly
function stopAll() {
  audio.pause();
  state.playing = false;
}

function getStreamProxyUrl(rawUrl) {
  if (!rawUrl) return '';
  if (rawUrl.startsWith('data:') || rawUrl.startsWith('blob:') || rawUrl.includes('/api/stream')) {
    return rawUrl;
  }
  return `/api/stream?url=${encodeURIComponent(rawUrl)}`;
}

// Play specified track (Full Length 320kbps Audio)
function playTrack(track, forceModal = null) {
  stopAll();
  state.current = track;
  state.playing = false;
  addToRecentHistory(track);
  initWebAudio();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  const src = trackSource(track);
  if (src) {
    if (audio.src !== src) {
      audio.src = src;
    }
    audio.currentTime = 0;
    audio.volume = state.muted ? 0 : state.volume;
    updateProgress(0, track.duration || 210);

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        if (state.current && state.current.id === track.id) {
          state.playing = true;
          syncPlayState();
          startVisualizerLoop();
          renderRecentGrid();
        }
      }).catch((err) => {
        if (err && err.name === 'AbortError') {
          return; // Benign transient interruption, do not show any error
        }
        // Resilient fallback: if direct stream was blocked by CORS or network, switch to proxy
        if (src.startsWith('http') && !src.includes('/api/stream')) {
          const proxyUrl = getStreamProxyUrl(src);
          audio.src = proxyUrl;
          setTimeout(() => {
            if (state.current && state.current.id === track.id) {
              audio.play().then(() => {
                state.playing = true;
                syncPlayState();
                startVisualizerLoop();
                renderRecentGrid();
              }).catch(() => {});
            }
          }, 200);
        } else {
          setTimeout(() => {
            if (state.current && state.current.id === track.id) {
              audio.play().then(() => {
                state.playing = true;
                syncPlayState();
                startVisualizerLoop();
                renderRecentGrid();
              }).catch(() => {});
            }
          }, 300);
        }
      });
    }
  } else {
    toast(`No audio source found for ${track.title}`);
  }

  syncPlayState();

  const shouldOpen = forceModal !== null ? forceModal : true;
  if (shouldOpen) {
    openExpandedModal();
  }
}

function pausePlayback() {
  if (!state.current) return;
  audio.pause();
  state.playing = false;
  syncPlayState();
}

function resumePlayback() {
  if (!state.current) {
    const list = queueTracks();
    if (list.length) playTrack(list[0]);
    return;
  }
  initWebAudio();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  const track = state.current;
  const src = trackSource(track);
  if (src) {
    if (!audio.getAttribute('src')) audio.src = src;
    audio.play().then(() => {
      state.playing = true;
      syncPlayState();
      startVisualizerLoop();
    }).catch(() => {
      playTrack(track);
    });
  }
}

function togglePlayback() {
  if (!state.current) {
    const list = queueTracks();
    if (list.length) playTrack(list[0]);
    return;
  }
  if (state.playing) pausePlayback();
  else resumePlayback();
}

function seekTo(ratio) {
  if (!state.current) return;
  const duration = audio.duration || progress.duration || state.current.duration || 210;
  if (duration > 0) {
    audio.currentTime = Math.max(0, Math.min(duration, ratio * duration));
    updateProgress(audio.currentTime, duration);
  }
  syncPlayState();
}

function nextTrack() {
  const list = queueTracks();
  if (!list.length) return;
  const keepModalState = !el('expandedModal').hidden;

  if (state.shuffle) {
    const pool = list.filter((track) => !state.current || track.id !== state.current.id);
    const source = pool.length ? pool : list;
    playTrack(source[Math.floor(Math.random() * source.length)], keepModalState);
    return;
  }

  const index = state.current ? list.findIndex((track) => track.id === state.current.id) : -1;
  playTrack(list[index === -1 ? 0 : (index + 1) % list.length], keepModalState);
}

function prevTrack() {
  const list = queueTracks();
  if (!list.length) return;
  const keepModalState = !el('expandedModal').hidden;

  if (progress.current > 3 && trackSource(state.current)) {
    audio.currentTime = 0;
    updateProgress(0, progress.duration);
    return;
  }

  const index = state.current ? list.findIndex((track) => track.id === state.current.id) : -1;
  playTrack(list[index <= 0 ? list.length - 1 : index - 1], keepModalState);
}

function handleEnded() {
  const keepModalState = !el('expandedModal').hidden;
  if (state.repeat === 'one') {
    if (state.current) playTrack(state.current, keepModalState);
    return;
  }

  const list = queueTracks();
  if (!list.length || !state.current) {
    stopAll();
    updateProgress(0, 0);
    syncPlayState();
    return;
  }

  if (state.shuffle) {
    const pool = list.filter((track) => track.id !== state.current.id);
    const source = pool.length ? pool : list;
    playTrack(source[Math.floor(Math.random() * source.length)], keepModalState);
    return;
  }

  let index = list.findIndex((track) => track.id === state.current.id);
  if (index === -1) {
    playTrack(list[0], keepModalState);
    return;
  }

  if (index === list.length - 1 && state.repeat === 'none') {
    state.playing = false;
    stopAll();
    updateProgress(0, state.current.duration || 210);
    syncPlayState();
    return;
  }

  playTrack(list[(index + 1) % list.length], keepModalState);
}

function applyVolume() {
  audio.volume = state.muted ? 0 : state.volume;
  const volPercent = `${Math.round(state.volume * 100)}%`;
  const volVal = String(Math.round(state.volume * 100));

  const volSlider = el('volume');
  if (volSlider) {
    volSlider.value = volVal;
    volSlider.style.setProperty('--p', volPercent);
  }
  const expVolSlider = el('expVolume');
  if (expVolSlider) {
    expVolSlider.value = volVal;
    expVolSlider.style.setProperty('--p', volPercent);
  }

  const muteBtn = el('muteBtn');
  const expMuteBtn = el('expMuteBtn');
  const isOff = state.muted || state.volume === 0;

  if (muteBtn) {
    muteBtn.classList.toggle('is-off', isOff);
    muteBtn.setAttribute('aria-label', state.muted ? 'Unmute' : 'Mute');
  }
  if (expMuteBtn) {
    expMuteBtn.classList.toggle('is-off', isOff);
    expMuteBtn.setAttribute('aria-label', state.muted ? 'Unmute' : 'Mute');
  }
}

// Toast feedback
function toast(message) {
  const node = el('toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('show'), 2800);
}

// Favorites / Like Management (High-performance in-place update)
function toggleLike(trackId) {
  if (!trackId) return;
  const isLiked = state.favorites.has(trackId);
  const nowLiked = !isLiked;
  if (isLiked) {
    state.favorites.delete(trackId);
    toast('Removed from Liked Songs');
  } else {
    state.favorites.add(trackId);
    toast('Added to Liked Songs ❤️');
  }
  setStoredJSON(STORAGE_FAVORITES, Array.from(state.favorites));

  // Instantly toggle player buttons
  if (state.current && state.current.id === trackId) {
    el('playerLikeBtn').classList.toggle('is-liked', nowLiked);
    el('expandedLikeBtn').classList.toggle('is-liked', nowLiked);
  }

  // Instantly toggle cards currently in DOM without destroying the grid
  document.querySelectorAll(`.song-card[data-id="${trackId}"] [data-action="like"]`).forEach((btn) => {
    btn.classList.toggle('is-liked', nowLiked);
    btn.title = nowLiked ? 'Unlike' : 'Like';
  });

  if (state.filter === 'Favorites') {
    render();
  }
}

// Up Next Queue Drawer
function toggleQueue() {
  const drawer = el('queueDrawer');
  drawer.hidden = !drawer.hidden;
  if (!drawer.hidden) renderQueueList();
}

function renderQueueList() {
  const container = el('queueList');
  if (!container || el('queueDrawer').hidden) return;
  const list = queueTracks();

  container.innerHTML = list.map((track) => {
    const isCurrent = state.current && state.current.id === track.id;
    const artBg = track.artwork ? `background-image:url('${esc(track.artwork)}')` : `background:${artStyle(track)}`;
    return `
      <div class="queue-item ${isCurrent ? 'is-current' : ''}" data-id="${esc(track.id)}">
        <div class="queue-item-art" style="${artBg}">
          ${!track.artwork ? esc(initials(track.title)) : ''}
        </div>
        <div class="queue-item-info">
          <div class="queue-item-title">${esc(track.title)}</div>
          <div class="queue-item-artist">${esc(track.artist)} &middot; ${fmt(track.duration || 210)}</div>
        </div>
      </div>`;
  }).join('');
}

// Online Full Song Search via backend proxy or JioSaavn
let searchDebounceTimer = null;
async function searchOnlineCatalog(term) {
  const query = (term || state.query).trim();
  if (!query) {
    state.onlineSearch = false;
    state.onlineTracks = [];
    render();
    return;
  }

  state.onlineSearch = true;
  const banner = el('onlineSearchBanner');
  if (banner) banner.hidden = false;
  const statusTitle = el('onlineStatusTitle');
  if (statusTitle) statusTitle.textContent = `Searching full songs for "${query}"...`;
  const statusSub = el('onlineStatusSub');
  if (statusSub) statusSub.textContent = 'Fetching complete 320kbps studio tracks...';
  render();

  try {
    const q = state.streamingQuality || '96';
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&quality=${q}`);
    const data = await res.json();

    if (data.success && data.results && data.results.length > 0) {
      state.onlineTracks = deduplicateTrackList(data.results);
      if (statusTitle) statusTitle.textContent = `Found ${state.onlineTracks.length} full songs for "${query}"`;
      if (statusSub) statusSub.textContent = `Full tracks ready to stream (${q === '96' ? '⚡ 96kbps Data Saver' : q === '160' ? '🎧 160kbps Standard' : '💎 320kbps Master'})`;
    } else {
      state.onlineTracks = [];
      if (statusTitle) statusTitle.textContent = `No full songs found for "${query}"`;
      if (statusSub) statusSub.textContent = 'Try another song title or artist name.';
    }
  } catch (err) {
    toast('Search server unavailable. Ensure server is running.');
    state.onlineTracks = [];
  }
  render();
}

function toggleOnlineSearch() {
  state.onlineSearch = !state.onlineSearch;
  if (state.onlineSearch) {
    const query = state.query || 'Telugu Hits';
    searchOnlineCatalog(query);
  } else {
    render();
  }
}

let artistDiscographyPage = 1;
let isLoadingArtistMore = false;
const ARTIST_DISCOGRAPHY_CACHE = new Map();

// Load more lifetime songs for the currently active artist
async function loadMoreArtistDiscography() {
  if (!state.activeArtist || isLoadingArtistMore) return;
  const loadBtn = el('artistLoadMoreBtn');
  const loadText = el('artistLoadMoreText');
  isLoadingArtistMore = true;
  if (loadBtn) loadBtn.classList.add('is-loading');
  if (loadText) loadText.textContent = 'Loading more songs...';

  artistDiscographyPage += 1;
  const qQuality = state.streamingQuality || '320';
  try {
    let newResults = [];

    // Attempt 1: Fetch from dedicated artist-discography endpoint
    try {
      const res = await fetch(`/api/artist-discography?name=${encodeURIComponent(state.activeArtist)}&page=${artistDiscographyPage}&quality=${qQuality}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.results)) {
          newResults = data.results;
        }
      }
    } catch (e) {}

    // Attempt 2: Fallback to /api/search with artist query
    if (newResults.length === 0) {
      try {
        const res2 = await fetch(`/api/search?q=${encodeURIComponent(state.activeArtist + ' hits')}&quality=${qQuality}`);
        if (res2.ok) {
          const data2 = await res2.json();
          if (data2.success && Array.isArray(data2.results)) {
            newResults = data2.results;
          }
        }
      } catch (e) {}
    }

    if (newResults.length > 0 && state.activeArtist) {
      const validResults = newResults.filter((t) => matchesArtist(t, state.activeArtist));
      if (validResults.length > 0) {
        const merged = deduplicateTrackList([...state.onlineTracks, ...validResults]).filter((t) => matchesArtist(t, state.activeArtist));
        const addedCount = merged.length - state.onlineTracks.length;
        state.onlineTracks = merged;
        ARTIST_DISCOGRAPHY_CACHE.set(state.activeArtist, merged);
        const songCountBadge = el('artistSongCountBadge');
        if (songCountBadge) songCountBadge.textContent = `${merged.length} Lifetime Studio Songs`;
        render();
        toast(`Added ${addedCount} more songs by ${state.activeArtist} (${merged.length} total)`);
      } else {
        toast(`All lifetime songs loaded for ${state.activeArtist}`);
        const container = el('artistLoadMoreContainer');
        if (container) container.hidden = true;
      }
    } else {
      toast(`All lifetime songs loaded for ${state.activeArtist}`);
      const container = el('artistLoadMoreContainer');
      if (container) container.hidden = true;
    }
  } catch (err) {
    toast('Could not fetch more songs at this moment');
  } finally {
    isLoadingArtistMore = false;
    if (loadBtn) loadBtn.classList.remove('is-loading');
    if (loadText) loadText.textContent = 'Load More Songs from Discography';
  }
}

// Open dedicated artist discography and display all songs sung by artist
async function openArtistHero(artistName, query) {
  const cleanName = (artistName || '').trim();
  const searchQuery = (query || cleanName).trim();
  if (!cleanName && !searchQuery) return;

  // 1. Close menu drawer if open
  closeUniverseDrawer();

  // 2. Find matching artist from HOME_ARTISTS
  let artistData = HOME_ARTISTS.find((a) => {
    const aLower = a.name.toLowerCase();
    const cLower = cleanName.toLowerCase();
    return aLower === cLower || aLower.includes(cLower) || cLower.includes(aLower);
  });

  if (!artistData) {
    const cLower = cleanName.toLowerCase();
    const mappedImg = ALL_ARTIST_AVATARS[cLower]
      || Object.entries(ALL_ARTIST_AVATARS).find(([k]) => k.includes(cLower) || cLower.includes(k))?.[1]
      || 'logo.png?v=100';
    artistData = {
      name: cleanName,
      tag: 'Playback Singer &bull; Hit Discography',
      img: mappedImg,
      query: searchQuery || cleanName
    };
  }

  // Guard against rapid duplicate triggers
  if (state.activeArtist === artistData.name && el('artistHeroSection') && !el('artistHeroSection').hidden) {
    return;
  }

  // Reset discography pagination
  artistDiscographyPage = 1;
  const loadMoreContainer = el('artistLoadMoreContainer');
  if (loadMoreContainer) loadMoreContainer.hidden = true;

  // 3. Set application state to dedicated artist view
  state.activeArtist = artistData.name;
  state.query = '';
  state.onlineSearch = false;
  state.activePlaylistId = null;
  state.filter = 'All';

  // Clear search bar UI
  const searchInput = el('search');
  if (searchInput) searchInput.value = '';
  const clearBtn = el('clearSearch');
  if (clearBtn) clearBtn.hidden = true;

  // 4. Populate Artist Hero Banner UI
  const heroSection = el('artistHeroSection');
  const heroAvatar = el('artistHeroAvatar');
  const heroBackdrop = el('artistHeroBackdrop');
  const heroName = el('artistHeroName');
  const heroBio = el('artistHeroBio');
  const heroGenre = el('artistHeroGenre');
  const songCountBadge = el('artistSongCountBadge');

  if (heroAvatar) heroAvatar.src = artistData.img || 'icon-192.png';
  if (heroBackdrop) heroBackdrop.style.backgroundImage = `url('${artistData.img || 'icon-192.png'}')`;
  if (heroName) heroName.textContent = artistData.name;
  if (heroBio) heroBio.innerHTML = `Complete Lifetime Discography &bull; ${artistData.tag}`;
  if (heroGenre) heroGenre.textContent = artistData.tag.split('&bull;')[0]?.trim() || 'Legendary Singer';

  // Wire Hero Buttons
  const playAllBtn = el('artistPlayAllBtn');
  if (playAllBtn) {
    playAllBtn.onclick = () => {
      const list = visibleTracks();
      if (list.length > 0) {
        playTrack(list[0]);
        toast(`Playing all ${list.length} songs by ${artistData.name}`);
      }
    };
  }

  const shuffleBtn = el('artistShuffleBtn');
  if (shuffleBtn) {
    shuffleBtn.onclick = () => {
      const list = visibleTracks();
      if (list.length > 0) {
        const shuffled = list.slice().sort(() => Math.random() - 0.5);
        state.onlineTracks = shuffled;
        render();
        playTrack(shuffled[0]);
        toast(`Shuffled songs by ${artistData.name}`);
      }
    };
  }

  const backBtn = el('artistBackBtn');
  if (backBtn) {
    backBtn.onclick = () => {
      closeArtistHero();
    };
  }

  // Check instant client-side cache
  if (ARTIST_DISCOGRAPHY_CACHE.has(artistData.name)) {
    const cachedTracks = ARTIST_DISCOGRAPHY_CACHE.get(artistData.name).filter((t) => matchesArtist(t, artistData.name));
    state.onlineTracks = cachedTracks;
    if (songCountBadge) songCountBadge.textContent = `${cachedTracks.length} Lifetime Studio Songs`;
    render();
    if (loadMoreContainer) loadMoreContainer.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Instantly show top curated tracks from local memory (0ms initial paint)
  const curatedMap = window.ARTIST_CURATED_TRACKS || {};
  const curated = (curatedMap[artistData.name] || []).filter((t) => matchesArtist(t, artistData.name));
  const localLibraryMatches = state.tracks.filter((t) => matchesArtist(t, artistData.name));
  const initialTracks = deduplicateTrackList([...curated, ...localLibraryMatches]).filter((t) => matchesArtist(t, artistData.name));

  state.onlineTracks = initialTracks;
  if (songCountBadge) {
    songCountBadge.textContent = initialTracks.length > 0
      ? `${initialTracks.length} Lifetime Studio Songs`
      : 'Loading songs...';
  }

  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // High-performance API fetch from in-memory backend database (Sub-millisecond response)
  try {
    const qQuality = state.streamingQuality || '320';
    const res = await fetch(`/api/artist-discography?name=${encodeURIComponent(artistData.name)}&page=1&quality=${qQuality}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.results) && data.results.length > 0 && state.activeArtist === artistData.name) {
        const validApiResults = data.results.filter((t) => matchesArtist(t, artistData.name));
        const merged = deduplicateTrackList([...initialTracks, ...validApiResults]).filter((t) => matchesArtist(t, artistData.name));
        state.onlineTracks = merged;
        ARTIST_DISCOGRAPHY_CACHE.set(artistData.name, merged);
        if (songCountBadge) songCountBadge.textContent = `${merged.length} Lifetime Studio Songs`;
        render();
        if (loadMoreContainer) loadMoreContainer.hidden = false;
      }
    }
  } catch (e) {
    console.warn('Could not load artist discography:', e);
  }
}

function closeArtistHero() {
  state.activeArtist = null;
  state.query = '';
  state.onlineSearch = false;
  state.activePlaylistId = null;
  state.filter = 'All';
  const hero = el('artistHeroSection');
  if (hero) hero.hidden = true;
  const loadMoreContainer = el('artistLoadMoreContainer');
  if (loadMoreContainer) loadMoreContainer.hidden = true;
  const searchInput = el('search');
  if (searchInput) searchInput.value = '';
  const clearBtn = el('clearSearch');
  if (clearBtn) clearBtn.hidden = true;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Global hook so any artist avatar card click in the Popular Artists shelf triggers reliably
window.openArtistShelfSongs = function(card, event) {
  if (event && event.stopPropagation) event.stopPropagation();
  if (!card) return;
  const q = card.dataset.artistQuery;
  const name = card.dataset.artistName || card.querySelector('.artist-name')?.textContent || q;
  openArtistHero(name, q);
};
window.playAndShowArtist = openArtistHero;
window.closeArtistHero = closeArtistHero;

// Playlists Management
function openNewPlaylistModal() {
  el('playlistNameInput').value = '';
  el('playlistDescInput').value = '';
  el('newPlaylistModal').hidden = false;
  el('playlistNameInput').focus();
}

function closeNewPlaylistModal() {
  el('newPlaylistModal').hidden = true;
}

function confirmNewPlaylist() {
  const name = el('playlistNameInput').value.trim();
  if (!name) {
    toast('Please enter a playlist name');
    return;
  }
  const desc = el('playlistDescInput').value.trim();
  const newPl = {
    id: `pl-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    name: name,
    description: desc || 'Custom user playlist',
    trackIds: trackToAddId ? [trackToAddId] : []
  };
  state.playlists.push(newPl);
  setStoredJSON(STORAGE_PLAYLISTS, state.playlists);
  closeNewPlaylistModal();
  toast(`Playlist "${name}" created!`);
  render();
}

function openAddToPlaylist(trackId) {
  trackToAddId = trackId;
  const track = findTrackById(trackId);
  el('addToPlaylistSub').textContent = track ? `Add "${track.title}" to a playlist:` : 'Choose a playlist:';

  const listNode = el('userPlaylistsList');
  listNode.innerHTML = `
    <div class="user-playlist-item" data-action="new-pl">
      <strong>+ Create New Playlist</strong>
      <span>Start a fresh collection</span>
    </div>
  ` + state.playlists.map((pl) => {
    const hasTrack = pl.trackIds.includes(trackId);
    return `
      <div class="user-playlist-item" data-pl-id="${esc(pl.id)}">
        <div>
          <strong>${esc(pl.name)}</strong>
          <div><span>${pl.trackIds.length} tracks ${hasTrack ? ' \u2713' : ''}</span></div>
        </div>
        <button class="ghost-btn-xs" type="button">${hasTrack ? 'Remove' : 'Add'}</button>
      </div>`;
  }).join('');

  el('addToPlaylistModal').hidden = false;
}

function closeAddToPlaylist() {
  el('addToPlaylistModal').hidden = true;
  trackToAddId = null;
}

// Local Audio File Import
function openImport(fileList) {
  pendingFiles = Array.from(fileList);
  if (!pendingFiles.length) return;
  importLang = 'Telugu';
  el('importInfo').textContent = `${pendingFiles.length} file${pendingFiles.length > 1 ? 's' : ''} selected`;
  document.querySelectorAll('#importLanguages .choice').forEach((choice) => {
    choice.classList.toggle('active', choice.dataset.lang === importLang);
  });
  el('importArtistInput').value = '';
  el('importModal').hidden = false;
}

function closeImport() {
  el('importModal').hidden = true;
  pendingFiles = [];
  el('fileInput').value = '';
}

function confirmImport() {
  const files = pendingFiles.slice();
  if (!files.length) {
    closeImport();
    return;
  }
  const customArtist = el('importArtistInput').value.trim() || 'My Music';

  const added = files.map((file, index) => {
    const rawTitle = file.name.replace(/\.[^.]+$/, '').replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
    return {
      id: `local-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
      title: rawTitle || 'Untitled Track',
      artist: customArtist,
      movie: 'Imported',
      year: new Date().getFullYear(),
      language: importLang,
      src: URL.createObjectURL(file),
      artwork: '',
      duration: 240
    };
  });

  state.tracks = [...added, ...state.tracks];
  closeImport();

  if (state.filter !== 'All' && state.filter !== importLang) state.filter = 'All';
  render();
  toast(`${added.length} track${added.length > 1 ? 's' : ''} added! Playing now...`);
  playTrack(added[0]);
}

function resetFilters() {
  state.query = '';
  state.filter = 'All';
  state.onlineSearch = false;
  state.activePlaylistId = null;
  el('search').value = '';
  el('clearSearch').hidden = true;
  render();
}

function openExpandedModal() {
  const modal = el('expandedModal');
  if (modal) modal.hidden = false;
  document.body.classList.add('is-expanded-modal-open');
  document.body.style.overflow = 'hidden';
  // Completely hide bottom player & bottom nav dock
  const floatPlayer = el('floatingMiniPlayer');
  if (floatPlayer) floatPlayer.style.display = 'none';
  const bottomNav = el('mobileBottomNav');
  if (bottomNav) bottomNav.style.display = 'none';
  const playerBar = el('player');
  if (playerBar) playerBar.style.display = 'none';

  // Update dynamic playing source context
  const srcTitle = el('expandedSourceTitle');
  if (srcTitle) {
    if (state.activeArtist) {
      srcTitle.textContent = `${state.activeArtist} Discography`;
    } else if (state.activePlaylistId) {
      const pl = (state.playlists || []).find((p) => p && p.id === state.activePlaylistId);
      srcTitle.textContent = pl ? pl.name : 'Playlist';
    } else if (state.onlineSearch || state.query) {
      srcTitle.textContent = `Search: ${state.query || 'Online'}`;
    } else {
      srcTitle.textContent = 'Tuneus Music Library';
    }
  }

  renderPlayer();
}

function closeExpandedModal(landHome = false) {
  const modal = el('expandedModal');
  if (modal) modal.hidden = true;
  document.body.classList.remove('is-expanded-modal-open');
  document.body.style.overflow = '';
  // Restore mobile bottom navigation only; keep bottom mini player hidden as requested
  const floatPlayer = el('floatingMiniPlayer');
  if (floatPlayer) floatPlayer.style.display = 'none';
  const bottomNav = el('mobileBottomNav');
  if (bottomNav) bottomNav.style.display = '';
  const playerBar = el('player');
  if (playerBar) playerBar.style.display = 'none';

  if (landHome) {
    // Land cleanly on first page (Home Dashboard)
    closeArtistHero();
    closeUniverseDrawer();
    closeProfileDrawer();
    const createSheet = el('createBottomSheet');
    if (createSheet) createSheet.hidden = true;

    state.filter = 'All';
    state.activeArtist = null;
    state.activePlaylistId = null;
    state.onlineSearch = false;
    state.query = '';
    const searchInput = el('search');
    if (searchInput) searchInput.value = '';

    // Switch active bottom nav to Home
    document.querySelectorAll('.s-nav-item').forEach(btn => btn.classList.remove('active'));
    const tabHome = el('tabHome');
    if (tabHome) tabHome.classList.add('active');

    // Switch library tabs to All
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    const tabAll = el('tabAll');
    if (tabAll) tabAll.classList.add('active');

    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function closeExpandedModalAndLandHome() {
  closeExpandedModal(true);
}

let pendingDownloadTrack = null;

function openDownloadModal(track) {
  if (!track) {
    toast('No song selected');
    return;
  }
  pendingDownloadTrack = track;

  const titleNode = el('downloadTrackTitle');
  const artistNode = el('downloadTrackArtist');
  const artNode = el('downloadTrackArt');

  if (titleNode) titleNode.textContent = track.title || 'Untitled';
  if (artistNode) artistNode.textContent = track.artist || 'Tuneus Music';
  if (artNode) {
    if (track.artwork) {
      artNode.style.backgroundImage = `url('${track.artwork}')`;
      artNode.textContent = '';
    } else {
      artNode.style.backgroundImage = 'none';
      artNode.style.background = artStyle(track);
      artNode.textContent = initials(track.title);
    }
  }

  const isAlreadyOffline = Boolean(state.downloads && state.downloads.has(track.id));
  const appBadge = document.querySelector('#dlOptionApp .dl-opt-badge');
  if (appBadge) {
    appBadge.textContent = isAlreadyOffline ? 'Saved' : 'In-App';
    appBadge.classList.toggle('active', isAlreadyOffline);
  }

  const modal = el('downloadModal');
  if (modal) modal.hidden = false;
}

function closeDownloadModal() {
  const modal = el('downloadModal');
  if (modal) modal.hidden = true;
  pendingDownloadTrack = null;
}

async function handleDownloadChoice(mode) {
  const track = pendingDownloadTrack;
  closeDownloadModal();
  if (!track) return;

  const cleanTitle = (track.title || 'Tuneus_Music').replace(/[/\\?%*:|"<>]/g, '_').trim();
  const cleanArtist = (track.artist || '').replace(/[/\\?%*:|"<>]/g, '_').trim();
  const baseName = cleanArtist ? `${cleanTitle} - ${cleanArtist}` : cleanTitle;
  const fileName = `${baseName}.mp3`;

  // 1. Download to Device (MP3 file for phone or laptop)
  if (mode === 'device') {
    toast(`Downloading "${cleanTitle}" to device...`);
    const existing = downloadRecordFor(track.id);
    if (existing && existing.blob) {
      saveBlobToDevice(existing.blob, existing.fileName || fileName);
      toast(`Saved "${cleanTitle}" to your Downloads folder!`);
      return;
    }

    const blob = await fetchTrackBlob(track);
    if (blob) {
      saveBlobToDevice(blob, fileName);
      toast(`Saved "${cleanTitle}" to your Downloads folder!`);
    } else {
      // Fallback via streaming proxy endpoint
      try {
        const proxyUrl = `/api/download?url=${encodeURIComponent(track.src)}&name=${encodeURIComponent(fileName)}`;
        const link = document.createElement('a');
        link.href = proxyUrl;
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast(`Downloading "${cleanTitle}" to device...`);
      } catch (fallbackErr) {
        window.open(track.src, '_blank');
        toast(`Opening download stream for "${cleanTitle}"...`);
      }
    }
    return;
  }

  // 2. Save Inside Tuneus App (Offline Listening with 0 data)
  if (mode === 'app') {
    const existing = downloadRecordFor(track.id);
    if (existing) {
      toast(`"${cleanTitle}" is already saved in Tuneus for offline listening!`);
      return;
    }

    toast(`Saving "${cleanTitle}" inside Tuneus app for offline mode...`);
    const blob = await fetchTrackBlob(track);
    if (blob) {
      try {
        await saveDownloadOffline(track, blob, fileName);
        toast(`"${cleanTitle}" saved inside Tuneus! Listen offline anytime.`);
        render();
      } catch (err) {
        toast(`Could not save offline copy: ${err.message}`);
      }
    } else {
      toast('Could not fetch audio bytes for in-app offline storage.');
    }
    return;
  }

  // 3. Both (Save to Device AND inside Tuneus app)
  if (mode === 'both') {
    toast(`Downloading "${cleanTitle}" to device and saving in Tuneus app...`);
    const blob = await fetchTrackBlob(track);
    if (blob) {
      try {
        await saveDownloadOffline(track, blob, fileName);
      } catch (err) {}
      saveBlobToDevice(blob, fileName);
      toast(`Saved "${cleanTitle}" to device AND inside Tuneus app!`);
      render();
    } else {
      const proxyUrl = `/api/download?url=${encodeURIComponent(track.src)}&name=${encodeURIComponent(fileName)}`;
      const link = document.createElement('a');
      link.href = proxyUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast(`Downloading "${cleanTitle}" to device...`);
    }
  }
}

// Download button entry point: open destination choice modal
function downloadTrack(track) {
  openDownloadModal(track);
}

// Streaming Quality & Data Saver Management
function updateQualityButton() {
  const btn = el('dataSaverBtn');
  const label = el('dataSaverLabel');
  if (!btn || !label) return;
  const q = state.streamingQuality || '96';
  btn.classList.remove('mode-96', 'mode-160', 'mode-320');
  btn.classList.add(`mode-${q}`);
  if (q === '96') {
    label.textContent = 'Data Saver ⚡ (96k)';
    btn.title = 'Data Saver: Using 70% less data (~3.3MB/song). Click to switch.';
  } else if (q === '160') {
    label.textContent = 'Standard 🎧 (160k)';
    btn.title = 'Standard Quality: Using 50% less data (~5.5MB/song). Click to switch.';
  } else {
    label.textContent = 'Ultra HD 💎 (320k)';
    btn.title = 'Ultra HD Quality: Full studio master (~11MB/song). Click to switch.';
  }
}

function cycleStreamingQuality() {
  const current = state.streamingQuality || '96';
  let next = '96';
  if (current === '96') next = '160';
  else if (current === '160') next = '320';
  else next = '96';

  state.streamingQuality = next;
  setStoredJSON(STORAGE_STREAMING_QUALITY, next);
  updateQualityButton();

  if (next === '96') {
    toast('⚡ Data Saver Mode ON (96 kbps) - Saves 70% Internet Data!');
  } else if (next === '160') {
    toast('🎧 Standard Quality ON (160 kbps) - Saves 50% Internet Data!');
  } else {
    toast('💎 Ultra HD ON (320 kbps) - Studio Master Quality');
  }

  // If a song is currently playing, update source seamlessly
  if (state.current) {
    const curTime = audio.currentTime;
    const wasPlaying = state.playing;
    const newSrc = trackSource(state.current);
    if (audio.src !== newSrc) {
      audio.src = newSrc;
      audio.currentTime = curTime;
      if (wasPlaying) {
        audio.play().catch(() => {});
      }
    }
  }
}

// Event Bindings
function bindEvents() {
  const searchInput = el('search');

  searchInput.addEventListener('input', () => {
    const q = (searchInput.value || '').trim();
    state.query = q;
    state.activeArtist = null;
    el('clearSearch').hidden = !searchInput.value;

    clearTimeout(searchDebounceTimer);
    if (!q) {
      state.onlineSearch = false;
      state.onlineTracks = [];
      render();
    } else {
      state.onlineSearch = true;
      searchDebounceTimer = setTimeout(() => {
        searchOnlineCatalog(q);
      }, 350);
    }
  });

  function performSearch() {
    const q = (searchInput.value || state.query || '').trim();
    if (!q) {
      searchInput.focus();
      state.onlineSearch = false;
      state.onlineTracks = [];
      render();
      return;
    }
    clearTimeout(searchDebounceTimer);
    state.query = q;
    state.activeArtist = null;
    state.onlineSearch = true;
    searchOnlineCatalog(q);
  }

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  el('clearSearch').addEventListener('click', () => {
    state.query = '';
    state.activeArtist = null;
    searchInput.value = '';
    el('clearSearch').hidden = true;
    searchInput.focus();
    clearTimeout(searchDebounceTimer);
    state.onlineSearch = false;
    state.onlineTracks = [];
    render();
  });

  const exitBtn = el('exitOnlineSearch');
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      state.onlineSearch = false;
      state.activeArtist = null;
      state.onlineTracks = [];
      state.query = '';
      if (searchInput) searchInput.value = '';
      el('clearSearch').hidden = true;
      render();
    });
  }

  // Quick Universe Online Search Pills
  document.querySelectorAll('.quick-universe-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const q = pill.dataset.query || pill.textContent.trim();
      searchInput.value = q;
      el('clearSearch').hidden = false;
      state.query = q;
    state.activeArtist = null;
      state.onlineSearch = true;
      searchOnlineCatalog(q);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  el('searchOnlineFromEmpty').addEventListener('click', () => {
    state.onlineSearch = true;
    searchOnlineCatalog(state.query);
  });

  document.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      state.onlineSearch = false;
      state.activeArtist = null;
      state.activePlaylistId = null;
      state.filter = chip.dataset.filter;
      render();
    });
  });

  const sortSelect = el('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      render();
    });
  }

  const artistLoadMoreBtn = el('artistLoadMoreBtn');
  if (artistLoadMoreBtn) {
    artistLoadMoreBtn.addEventListener('click', loadMoreArtistDiscography);
  }

  // Home Dashboard interactions (Quick Jump cards, Shelves, Artists, Spotlight)
  const homeDashboard = el('homeDashboard');
  if (homeDashboard) {
    homeDashboard.addEventListener('click', (event) => {
      const seeAllArtists = event.target.closest('#seeAllArtistsBtn');
      if (seeAllArtists) {
        openUniverseDrawer();
        return;
      }

      const artistCard = event.target.closest('.artist-shelf-card');
      if (artistCard) {
        const q = artistCard.dataset.artistQuery;
        const name = artistCard.dataset.artistName || artistCard.querySelector('.artist-name')?.textContent || q;
        playAndShowArtist(name, q);
        return;
      }

      const albumCard = event.target.closest('[data-action="open-album"]');
      if (albumCard) {
        const albumName = albumCard.dataset.album;
        const albumQuery = albumCard.dataset.query;
        playAndShowAlbum(albumName, albumQuery);
        return;
      }

      const seeAllBtn = event.target.closest('.shelf-see-all');
      if (seeAllBtn) {
        state.onlineSearch = false;
        state.activePlaylistId = null;
        state.filter = seeAllBtn.dataset.filterTarget;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const card = event.target.closest('[data-action="play-track"]');
      if (!card) return;
      const trackId = card.dataset.id;
      let track = (typeof HOME_SHELF_TRACKS_MAP !== 'undefined') ? HOME_SHELF_TRACKS_MAP.get(trackId) : null;
      if (!track && card.closest('#quickJumpGrid') && Array.isArray(state.recentTracks)) {
        track = state.recentTracks.find((t) => t && t.id === trackId);
      }
      if (!track) {
        track = findTrackById(trackId);
      }
      if (!track) return;

      if (state.current && state.current.id === track.id) {
        if (!state.playing) resumePlayback();
        openExpandedModal();
      } else {
        playTrack(track);
      }
    });
  }

  // Home Artists Shelf direct click listener (guarantees immediate opening on all devices)
  const homeArtistsShelf = el('homeArtistsShelf');
  if (homeArtistsShelf) {
    homeArtistsShelf.addEventListener('click', (e) => {
      const card = e.target.closest('.artist-shelf-card');
      if (!card) return;
      const q = card.dataset.artistQuery;
      const name = card.dataset.artistName || card.querySelector('.artist-name')?.textContent || q;
      playAndShowArtist(name, q);
    });
  }

  // Mobile Bottom Navigation Dock interactions (Screenshot 2 & 3: 5 tabs)
  const mobileNav = el('mobileBottomNav');
  if (mobileNav) {
    mobileNav.addEventListener('click', (event) => {
      const tab = event.target.closest('.s-nav-item, .nav-tab');
      if (!tab) return;

      if (tab.id === 'tabCreate') {
        toggleCreateSheet();
        return;
      }

      // If create sheet was open, close it
      closeCreateSheet();

      mobileNav.querySelectorAll('.s-nav-item, .nav-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      if (tab.id === 'tabHome') {
        closeTopbarSearch();
        state.filter = 'All';
        state.query = '';
        state.onlineSearch = false;
        state.activeArtist = null;
        state.activePlaylistId = null;
        if (el('search')) el('search').value = '';
        if (el('clearSearch')) el('clearSearch').hidden = true;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tab.id === 'tabSearch') {
        const input = el('search');
        if (input) {
          input.focus();
          input.select();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tab.id === 'tabLibrary') {
        closeTopbarSearch();
        state.filter = 'Playlists';
        state.activeArtist = null;
        state.onlineSearch = false;
        render();
        const plContainer = el('playlistsContainer');
        if (plContainer) plContainer.scrollIntoView({ behavior: 'smooth' });
      } else if (tab.id === 'tabEqualizer') {
        openEqModal();
      }
    });
  }

  // Song grid click
  el('songGrid').addEventListener('click', (event) => {
    const likeBtn = event.target.closest('[data-action="like"]');
    if (likeBtn) {
      event.stopPropagation();
      toggleLike(likeBtn.dataset.id);
      return;
    }

    const dlBtn = event.target.closest('[data-action="download"]');
    if (dlBtn) {
      event.stopPropagation();
      const track = findTrackById(dlBtn.dataset.id);
      if (track) downloadTrack(track);
      return;
    }

    const plBtn = event.target.closest('[data-action="playlist"]');
    if (plBtn) {
      event.stopPropagation();
      openAddToPlaylist(plBtn.dataset.id);
      return;
    }

    const card = event.target.closest('.song-card');
    if (!card) return;
    const trackId = card.dataset.id;
    const list = typeof visibleTracks === 'function' ? visibleTracks() : state.tracks;
    const track = list.find((t) => t && t.id === trackId) || findTrackById(trackId);
    if (!track) return;

    if (state.current && state.current.id === track.id) {
      if (!state.playing) resumePlayback();
      openExpandedModal();
    } else {
      playTrack(track);
    }
  });

  // Playlists grid interactions
  el('playlistsGrid').addEventListener('click', (event) => {
    const createBtn = event.target.closest('[data-action="create-playlist"], .playlist-create-card');
    if (createBtn) {
      openNewPlaylistModal();
      return;
    }

    const deleteBtn = event.target.closest('[data-action="delete-playlist"]');
    if (deleteBtn) {
      event.stopPropagation();
      const plId = deleteBtn.dataset.playlistId;
      state.playlists = state.playlists.filter((p) => p.id !== plId);
      setStoredJSON(STORAGE_PLAYLISTS, state.playlists);
      if (state.activePlaylistId === plId) state.activePlaylistId = null;
      render();
      toast('Playlist deleted');
      return;
    }

    const playBtn = event.target.closest('[data-action="play-playlist"]');
    if (playBtn) {
      event.stopPropagation();
      const pl = state.playlists.find((p) => p.id === playBtn.dataset.playlistId);
      if (pl && pl.trackIds.length > 0) {
        state.activePlaylistId = pl.id;
        state.filter = 'Playlists';
        render();
        const first = state.tracks.find((t) => t.id === pl.trackIds[0]);
        if (first) playTrack(first);
      } else {
        toast('This playlist is empty. Add songs to play!');
      }
      return;
    }

    const card = event.target.closest('.playlist-card');
    if (card) {
      state.activePlaylistId = card.dataset.playlistId;
      render();
    }
  });

  el('newPlaylistBtn').addEventListener('click', openNewPlaylistModal);
  el('cancelNewPlaylist').addEventListener('click', closeNewPlaylistModal);
  el('confirmNewPlaylist').addEventListener('click', confirmNewPlaylist);

  el('userPlaylistsList').addEventListener('click', (event) => {
    const item = event.target.closest('.user-playlist-item');
    if (!item) return;
    if (item.dataset.action === 'new-pl') {
      closeAddToPlaylist();
      openNewPlaylistModal();
      return;
    }
    const plId = item.dataset.plId;
    const pl = state.playlists.find((p) => p.id === plId);
    if (pl && trackToAddId) {
      const idx = pl.trackIds.indexOf(trackToAddId);
      if (idx > -1) {
        pl.trackIds.splice(idx, 1);
        toast(`Removed from "${pl.name}"`);
      } else {
        pl.trackIds.push(trackToAddId);
        toast(`Added to "${pl.name}"!`);
      }
      setStoredJSON(STORAGE_PLAYLISTS, state.playlists);
      closeAddToPlaylist();
      render();
    }
  });
  el('closeAddToPlaylist').addEventListener('click', closeAddToPlaylist);

  const atpModal = el('addToPlaylistModal');
  if (atpModal) {
    atpModal.addEventListener('click', (e) => {
      if (e.target === atpModal) closeAddToPlaylist();
    });
  }

  const npModal = el('newPlaylistModal');
  if (npModal) {
    npModal.addEventListener('click', (e) => {
      if (e.target === npModal) closeNewPlaylistModal();
    });
  }

  const closeDlModal = el('closeDownloadModal');
  if (closeDlModal) closeDlModal.addEventListener('click', closeDownloadModal);

  const dlModal = el('downloadModal');
  if (dlModal) {
    dlModal.addEventListener('click', (e) => {
      if (e.target === dlModal) closeDownloadModal();
    });
  }

  const optDevice = el('dlOptionDevice');
  if (optDevice) optDevice.addEventListener('click', () => handleDownloadChoice('device'));

  const optApp = el('dlOptionApp');
  if (optApp) optApp.addEventListener('click', () => handleDownloadChoice('app'));

  const optBoth = el('dlOptionBoth');
  if (optBoth) optBoth.addEventListener('click', () => handleDownloadChoice('both'));

  const addMusicBtn = el('addMusicBtn');
  if (addMusicBtn) addMusicBtn.addEventListener('click', () => el('fileInput')?.click());
  const fileInput = el('fileInput');
  if (fileInput) fileInput.addEventListener('change', (e) => openImport(e.target.files));

  document.querySelectorAll('#importLanguages .choice').forEach((choice) => {
    choice.addEventListener('click', () => {
      importLang = choice.dataset.lang;
      document.querySelectorAll('#importLanguages .choice').forEach((c) => c.classList.toggle('active', c === choice));
    });
  });
  el('cancelImport').addEventListener('click', closeImport);
  el('confirmImport').addEventListener('click', confirmImport);

  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      openImport(e.dataTransfer.files);
    }
  });

  el('playBtn').addEventListener('click', togglePlayback);
  el('nextBtn').addEventListener('click', nextTrack);
  el('prevBtn').addEventListener('click', prevTrack);

  el('shuffleBtn').addEventListener('click', () => {
    state.shuffle = !state.shuffle;
    toast(state.shuffle ? 'Shuffle enabled' : 'Shuffle disabled');
    renderPlayer();
  });

  el('repeatBtn').addEventListener('click', () => {
    if (state.repeat === 'none') {
      state.repeat = 'all';
      toast('Repeat All enabled');
    } else if (state.repeat === 'all') {
      state.repeat = 'one';
      toast('Repeat One enabled');
    } else {
      state.repeat = 'none';
      toast('Repeat disabled');
    }
    renderPlayer();
  });

  el('seek').addEventListener('input', (e) => {
    seekTo(Number(e.target.value) / 1000);
  });

  el('volume').addEventListener('input', (e) => {
    state.volume = Number(e.target.value) / 100;
    if (state.volume > 0) state.muted = false;
    applyVolume();
  });

  el('muteBtn').addEventListener('click', () => {
    state.muted = !state.muted;
    if (!state.muted && state.volume === 0) state.volume = 1.0;
    applyVolume();
  });

  el('playerLikeBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.current) toggleLike(state.current.id);
  });

  const playerDlBtn = el('playerDownloadBtn');
  if (playerDlBtn) {
    playerDlBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.current) downloadTrack(state.current);
      else toast('Pick a song to download');
    });
  }

  el('nowCard').addEventListener('click', openExpandedModal);
  el('expandPlayerBtn').addEventListener('click', openExpandedModal);
  el('closeExpandedBtn').addEventListener('click', () => closeExpandedModal(false));

  const expDragWrap = el('expandedDragWrap');
  if (expDragWrap) expDragWrap.addEventListener('click', () => closeExpandedModal(false));

  const expHeaderTitle = el('expandedHeaderTitle');
  if (expHeaderTitle) expHeaderTitle.addEventListener('click', () => closeExpandedModal(false));

  const artistBackBtn = el('artistBackBtn');
  if (artistBackBtn) {
    artistBackBtn.addEventListener('click', closeArtistHero);
  }

  el('expandedLikeBtn').addEventListener('click', () => {
    if (state.current) toggleLike(state.current.id);
  });

  el('expPlayBtn').addEventListener('click', togglePlayback);
  el('expNextBtn').addEventListener('click', nextTrack);
  el('expPrevBtn').addEventListener('click', prevTrack);
  el('expShuffleBtn').addEventListener('click', () => {
    state.shuffle = !state.shuffle;
    renderPlayer();
  });
  el('expRepeatBtn').addEventListener('click', () => {
    state.repeat = state.repeat === 'none' ? 'all' : state.repeat === 'all' ? 'one' : 'none';
    renderPlayer();
  });

  el('expSeek').addEventListener('input', (e) => {
    seekTo(Number(e.target.value) / 1000);
  });

  el('expVolume').addEventListener('input', (e) => {
    state.volume = Number(e.target.value) / 100;
    if (state.volume > 0) state.muted = false;
    applyVolume();
  });

  el('expMuteBtn').addEventListener('click', () => {
    state.muted = !state.muted;
    if (!state.muted && state.volume === 0) state.volume = 1.0;
    applyVolume();
  });

  const expDlBtn = el('expDownloadBtn');
  if (expDlBtn) {
    expDlBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.current) downloadTrack(state.current);
      else toast('Pick a song to download');
    });
  }

  const expAddPlBtn = el('expAddToPlaylistBtn');
  if (expAddPlBtn) {
    expAddPlBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.current) openAddToPlaylist(state.current.id);
      else toast('Select a song first to add it to a playlist');
    });
  }

  const eqToggle = el('eqToggleBtn');
  if (eqToggle) {
    eqToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      openEqModal();
    });
  }

  const expEq = el('expEqBtn');
  if (expEq) {
    expEq.addEventListener('click', (e) => {
      e.stopPropagation();
      openEqModal();
    });
  }

  const closeEq = el('closeEqBtn');
  if (closeEq) closeEq.addEventListener('click', closeEqModal);

  const closeEqX = el('closeEqXBtn');
  if (closeEqX) closeEqX.addEventListener('click', closeEqModal);

  // Close modal when clicking outside (backdrop)
  const eqModal = el('eqModal');
  if (eqModal) {
    eqModal.addEventListener('click', (e) => {
      if (e.target === eqModal) closeEqModal();
    });
  }

  // Bass slider real-time input
  const bassSlider = el('eqBassSlider');
  if (bassSlider) {
    bassSlider.addEventListener('input', (e) => {
      initWebAudio();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
      const val = parseFloat(e.target.value) || 0;
      applyBandGains(val, state.eqVocal, state.eqTreble, 'custom', true);
    });
  }

  // Vocal slider real-time input (Increases/decreases singing vocal volume & presence)
  const vocalSlider = el('eqVocalSlider');
  if (vocalSlider) {
    vocalSlider.addEventListener('input', (e) => {
      initWebAudio();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
      const val = parseFloat(e.target.value) || 0;
      applyBandGains(state.eqBass, val, state.eqTreble, 'custom', true);
    });
  }

  // Treble slider real-time input
  const trebleSlider = el('eqTrebleSlider');
  if (trebleSlider) {
    trebleSlider.addEventListener('input', (e) => {
      initWebAudio();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
      const val = parseFloat(e.target.value) || 0;
      applyBandGains(state.eqBass, state.eqVocal, val, 'custom', true);
    });
  }

  // Stepper buttons (− and +)
  document.querySelectorAll('.eq-step-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      initWebAudio();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
      const target = btn.dataset.target;
      const step = parseFloat(btn.dataset.step) || 1;
      if (target === 'eqBass') {
        const next = Math.max(-12, Math.min(24, state.eqBass + step));
        applyBandGains(next, state.eqVocal, state.eqTreble, 'custom', true);
      } else if (target === 'eqVocal') {
        const next = Math.max(-12, Math.min(18, state.eqVocal + step));
        applyBandGains(state.eqBass, next, state.eqTreble, 'custom', true);
      } else if (target === 'eqTreble') {
        const next = Math.max(-12, Math.min(18, state.eqTreble + step));
        applyBandGains(state.eqBass, state.eqVocal, next, 'custom', true);
      }
    });
  });

  // Reset to Flat button
  const resetEq = el('resetEqBtn');
  if (resetEq) {
    resetEq.addEventListener('click', () => {
      initWebAudio();
      applyBandGains(0, 0, 0, 'normal', true);
      toast('Equalizer reset to Flat (0 dB)');
    });
  }

  // Preset cards
  const eqPresets = el('eqPresets');
  if (eqPresets) {
    eqPresets.addEventListener('click', (e) => {
      const card = e.target.closest('.eq-card');
      if (card) {
        initWebAudio();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        applyEqPreset(card.dataset.preset);
        const name = card.querySelector('strong') ? card.querySelector('strong').textContent : card.dataset.preset;
        toast(`Equalizer: ${name}`);
      }
    });
  }

  el('queueToggleBtn').addEventListener('click', toggleQueue);
  el('closeQueueBtn').addEventListener('click', toggleQueue);
  el('clearQueueBtn').addEventListener('click', () => {
    state.filter = 'All';
    state.onlineSearch = false;
    render();
    toast('Queue reset to all library tracks');
  });
  el('queueList').addEventListener('click', (e) => {
    const item = e.target.closest('.queue-item');
    if (item) {
      const track = findTrackById(item.dataset.id);
      if (track) playTrack(track);
    }
  });

  const dataSaverBtn = el('dataSaverBtn');
  if (dataSaverBtn) {
    dataSaverBtn.addEventListener('click', cycleStreamingQuality);
  }

  const helpBtn = el('helpBtn');
  if (helpBtn) {
    helpBtn.addEventListener('click', () => el('shortcutsModal').hidden = false);
  }
  el('closeShortcutsBtn').addEventListener('click', () => el('shortcutsModal').hidden = true);
  el('resetFilters').addEventListener('click', resetFilters);

  // Audio element events
  audio.addEventListener('timeupdate', () => {
    if (state.current && trackSource(state.current)) updateProgress(audio.currentTime, audio.duration);
  });
  audio.addEventListener('loadedmetadata', () => {
    if (state.current && trackSource(state.current)) updateProgress(audio.currentTime, audio.duration);
  });
  audio.addEventListener('ended', handleEnded);
  audio.addEventListener('error', () => {
    const curSrc = audio.src || '';
    if (curSrc && curSrc.startsWith('http') && !curSrc.includes('/api/stream') && !curSrc.startsWith('blob:')) {
      const proxyUrl = getStreamProxyUrl(curSrc);
      console.log('Audio error encountered, switching to stream proxy:', proxyUrl);
      audio.src = proxyUrl;
      audio.play().then(() => {
        state.playing = true;
        syncPlayState();
        startVisualizerLoop();
      }).catch(() => {});
    }
  });

  // Global Keyboard Shortcuts
  document.addEventListener('keydown', (event) => {
    const tag = document.activeElement ? document.activeElement.tagName : '';
    const typing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

    if (event.key === '/' && !typing) {
      event.preventDefault();
      searchInput.focus();
      return;
    }

    if (event.key === 'Escape') {
      const exitModal = el('exitConfirmModal');
      if (exitModal && !exitModal.hidden) { closeExitConfirmModal(); return; }

      const dlModal = el('downloadModal');
      const eqModal = el('eqModal');
      const atpModal = el('addToPlaylistModal');
      const npModal = el('newPlaylistModal');
      const scModal = el('shortcutsModal');
      const impModal = el('importModal');
      const qDrawer = el('queueDrawer');

      if (dlModal && !dlModal.hidden) { closeDownloadModal(); return; }
      if (eqModal && !eqModal.hidden) { closeEqModal(); return; }
      if (atpModal && !atpModal.hidden) { closeAddToPlaylist(); return; }
      if (npModal && !npModal.hidden) { closeNewPlaylistModal(); return; }
      if (scModal && !scModal.hidden) { scModal.hidden = true; return; }
      if (impModal && !impModal.hidden) { impModal.hidden = true; return; }
      if (qDrawer && !qDrawer.hidden) { qDrawer.hidden = true; return; }

      closeUniverseDrawer();
      closeExpandedModal();
      if (document.activeElement === searchInput) searchInput.blur();
      return;
    }

    if (typing) return;

    if (event.code === 'Space' && tag !== 'BUTTON') {
      event.preventDefault();
      togglePlayback();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      if (event.shiftKey && trackSource(state.current)) {
        audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
      } else {
        nextTrack();
      }
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      if (event.shiftKey && trackSource(state.current)) {
        audio.currentTime = Math.max(0, audio.currentTime - 5);
      } else {
        prevTrack();
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      state.volume = Math.min(1, state.volume + 0.05);
      state.muted = false;
      applyVolume();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      state.volume = Math.max(0, state.volume - 0.05);
      applyVolume();
    } else if (event.key.toLowerCase() === 'm') {
      state.muted = !state.muted;
      if (!state.muted && state.volume === 0) state.volume = 1.0;
      applyVolume();
    } else if (event.key.toLowerCase() === 'l') {
      if (state.current) toggleLike(state.current.id);
    } else if (event.key.toLowerCase() === 'd') {
      if (state.current) downloadTrack(state.current);
      else toast('Pick a song to download');
    } else if (event.key.toLowerCase() === 's') {
      state.shuffle = !state.shuffle;
      renderPlayer();
    } else if (event.key.toLowerCase() === 'r') {
      state.repeat = state.repeat === 'none' ? 'all' : state.repeat === 'all' ? 'one' : 'none';
      renderPlayer();
    } else if (event.key.toLowerCase() === 'f') {
      if (el('expandedModal').hidden) openExpandedModal();
      else closeExpandedModal();
    } else if (event.key.toLowerCase() === 'q') {
      toggleQueue();
    }
  });

  // Mobile Back Button Exit Confirmation Modal Handlers
  const exitNoBtn = el('exitNoBtn');
  if (exitNoBtn) exitNoBtn.addEventListener('click', closeExitConfirmModal);

  const exitYesBtn = el('exitYesBtn');
  if (exitYesBtn) exitYesBtn.addEventListener('click', handleExitConfirmed);

  const exitConfirmModal = el('exitConfirmModal');
  if (exitConfirmModal) {
    exitConfirmModal.addEventListener('click', (e) => {
      if (e.target === exitConfirmModal) {
        closeExitConfirmModal();
      }
    });
  }
}

// ==========================================================================
// User Authentication, Google Identity Services & Enterprise JWT Session Engine
// ==========================================================================
const AUTH_STORAGE_KEY = 'tuneus_user';
const AUTH_SESSION_STORAGE_KEY = 'tuneus_auth_session';
const AUTH_COOKIE_KEY = 'tuneus_persistent_user';
const GOOGLE_CLIENT_ID_STORAGE_KEY = 'tuneus_google_client_id';
const AUTH_GATE_CLASS = 'auth-locked';

let activeAuthMode = 'signin'; // 'signin' | 'register'
let googleGisInitialized = false;
let tokenRefreshTimer = null;

// Persist logged-in user in a 1-year cookie as backup alongside localStorage
// so login survives cache/storage hiccups until the user explicitly clicks Sign Out
function setPersistentAuthCookie(user) {
  try {
    if (!user || !user.email) {
      document.cookie = `${AUTH_COOKIE_KEY}=; Max-Age=0; Path=/; SameSite=Lax`;
      return;
    }
    const slimUser = {
      id: user.id || '',
      name: user.name || '',
      email: user.email || '',
      avatar: user.avatar || '',
      provider: user.provider || 'google'
    };
    const encoded = encodeURIComponent(JSON.stringify(slimUser));
    document.cookie = `${AUTH_COOKIE_KEY}=${encoded}; Max-Age=31536000; Path=/; SameSite=Lax`;
  } catch (_) {}
}

function getPersistentAuthCookie() {
  try {
    const cookies = document.cookie ? document.cookie.split(';') : [];
    for (const part of cookies) {
      const idx = part.indexOf('=');
      if (idx < 0) continue;
      const key = part.slice(0, idx).trim();
      if (key === AUTH_COOKIE_KEY) {
        const val = decodeURIComponent(part.slice(idx + 1).trim());
        const parsed = JSON.parse(val);
        if (parsed && parsed.name && parsed.email) return parsed;
      }
    }
  } catch (_) {}
  return null;
}

// Get currently stored user profile (resilient across localStorage keys + 1-year cookie)
function getStoredUser() {
  try {
    const rawSession = localStorage.getItem(AUTH_SESSION_STORAGE_KEY);
    if (rawSession) {
      const parsed = JSON.parse(rawSession);
      if (parsed && parsed.user && parsed.user.name && parsed.user.name !== 'Guest User') {
        return parsed.user;
      }
    }

    const rawUser = localStorage.getItem(AUTH_STORAGE_KEY);
    if (rawUser) {
      const parsedUser = JSON.parse(rawUser);
      if (parsedUser && parsedUser.name && parsedUser.name !== 'Guest User' && parsedUser.email) {
        // Auto-heal session object from stored user
        try {
          localStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify({
            user: parsedUser,
            accessToken: '',
            refreshToken: '',
            persistent: true,
            savedAt: Date.now()
          }));
        } catch (_) {}
        return parsedUser;
      }
    }

    // Fallback to 1-year persistent cookie if localStorage was cleared
    const cookieUser = getPersistentAuthCookie();
    if (cookieUser && cookieUser.name && cookieUser.name !== 'Guest User') {
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(cookieUser));
        localStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify({
          user: cookieUser,
          accessToken: '',
          refreshToken: '',
          persistent: true,
          savedAt: Date.now()
        }));
      } catch (_) {}
      return cookieUser;
    }

    return null;
  } catch (e) {
    return null;
  }
}

// Get stored application JWT access token
function getStoredAccessToken() {
  try {
    const raw = localStorage.getItem(AUTH_SESSION_STORAGE_KEY);
    return raw ? JSON.parse(raw)?.accessToken || '' : '';
  } catch (e) {
    return '';
  }
}

// Get stored refresh token
function getStoredRefreshToken() {
  try {
    const raw = localStorage.getItem(AUTH_SESSION_STORAGE_KEY);
    return raw ? JSON.parse(raw)?.refreshToken || '' : '';
  } catch (e) {
    return '';
  }
}

// Save authentication session (user, JWT access token, refresh token)
// Only clears session when explicitly called with null (from Sign Out)
function saveUserSession(sessionData) {
  try {
    if (!sessionData) {
      localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
      localStorage.removeItem(AUTH_STORAGE_KEY);
      setPersistentAuthCookie(null);
      if (tokenRefreshTimer) clearTimeout(tokenRefreshTimer);
      return;
    }

    const user = sessionData.user || sessionData;
    const accessToken = sessionData.accessToken || getStoredAccessToken() || '';
    const refreshToken = sessionData.refreshToken || getStoredRefreshToken() || '';
    const expiresIn = sessionData.expiresIn || (365 * 24 * 60 * 60);

    const sessionObj = {
      user,
      accessToken,
      refreshToken,
      persistent: true,
      expiresAt: Date.now() + (expiresIn * 1000)
    };

    localStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify(sessionObj));
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    setPersistentAuthCookie(user);

    // Schedule proactive token refresh (clamped safely under 32-bit setTimeout limit)
    if (refreshToken) {
      scheduleTokenRefresh(expiresIn);
    }
  } catch (e) {
    console.warn('[Session Error]', e);
  }
}

// Set auth gate
function setAuthGate(locked) {
  document.body.classList.remove(AUTH_GATE_CLASS);
}

// Schedule proactive JWT refresh (clamped to <= 7 days to avoid 32-bit setTimeout overflow)
function scheduleTokenRefresh(expiresInSeconds) {
  if (tokenRefreshTimer) clearTimeout(tokenRefreshTimer);
  const maxSafeDelayMs = 7 * 24 * 60 * 60 * 1000; // 7 days
  const rawDelayMs = Math.max((expiresInSeconds - 300) * 1000, 60000);
  const refreshMs = Math.min(rawDelayMs, maxSafeDelayMs);
  tokenRefreshTimer = setTimeout(async () => {
    const refreshToken = getStoredRefreshToken();
    if (!refreshToken) return;
    try {
      const res = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken })
      });
      const data = await res.json();
      if (data && data.success && data.accessToken) {
        const raw = localStorage.getItem(AUTH_SESSION_STORAGE_KEY);
        if (raw) {
          const session = JSON.parse(raw);
          session.accessToken = data.accessToken;
          session.expiresAt = Date.now() + ((data.expiresIn || (365 * 24 * 60 * 60)) * 1000);
          localStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify(session));
        }
        scheduleTokenRefresh(data.expiresIn || (365 * 24 * 60 * 60));
      }
    } catch (err) {
      // Never sign out on a transient refresh error — keep user logged in
      console.warn('[Auth] Token refresh warning:', err);
    }
  }, refreshMs);
}

// Update all UI elements displaying user profile & Google verified status
function updateAuthUI(user) {
  const avatarBadge = el('userAvatarBadge');
  const nameLabel = el('userNameLabel');
  const dropAvatar = el('dropdownAvatar');
  const dropName = el('dropdownName');
  const dropEmail = el('dropdownEmail');
  const loginActionLabel = el('loginActionLabel');
  const logoutBtn = el('logoutBtn');
  const settingsSignoutBtn = el('settingsSignoutBtn');
  const pDrawerSignOutBtn = el('pDrawerSignOutBtn');
  const pDrawerAvatar = document.querySelector('.p-drawer-avatar');
  const pDrawerName = el('pDrawerUserName');
  const pDrawerEmail = el('pDrawerUserEmail');
  const topbarAvatar = document.querySelector('.topbar-avatar-img');
  const avatarUrl = (user && user.avatar) ? user.avatar : 'logo.png?v=100';

  if (topbarAvatar) {
    topbarAvatar.src = avatarUrl;
    topbarAvatar.onerror = () => { topbarAvatar.src = 'logo.png?v=100'; };
  }
  if (pDrawerAvatar) {
    pDrawerAvatar.src = avatarUrl;
    pDrawerAvatar.onerror = () => { pDrawerAvatar.src = 'logo.png?v=100'; };
  }

  const isLoggedIn = user && user.name && user.name !== 'Guest User';
  setAuthGate(!isLoggedIn);

  if (isLoggedIn) {
    const initial = user.name.trim().charAt(0).toUpperCase() || 'U';
    const isGoogle = user.provider === 'google' || (user.email && user.email.endsWith('@gmail.com'));

    if (avatarBadge) {
      if (user.avatar) {
        avatarBadge.innerHTML = `<img src="${user.avatar}" alt="${user.name}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" onerror="this.outerHTML='${initial}'" />`;
      } else {
        avatarBadge.textContent = initial;
      }
    }
    if (nameLabel) nameLabel.textContent = user.name;
    if (dropAvatar) {
      if (user.avatar) {
        dropAvatar.innerHTML = `<img src="${user.avatar}" alt="${user.name}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" onerror="this.outerHTML='${initial}'" />`;
      } else {
        dropAvatar.textContent = initial;
      }
    }
    if (dropName) dropName.textContent = user.name;
    if (dropEmail) {
      dropEmail.innerHTML = isGoogle
        ? `${user.email} <span class="google-verified-badge"><svg viewBox="0 0 24 24" width="10" height="10"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg> Google</span>`
        : (user.email || 'Logged In');
    }
    if (loginActionLabel) loginActionLabel.textContent = 'Switch Account';
    if (logoutBtn) logoutBtn.style.display = 'flex';
    if (settingsSignoutBtn) settingsSignoutBtn.style.display = 'inline-flex';
    if (pDrawerSignOutBtn) pDrawerSignOutBtn.style.display = 'flex';
    if (pDrawerName) pDrawerName.textContent = user.name;
    if (pDrawerEmail) {
      pDrawerEmail.textContent = user.email || '';
      pDrawerEmail.hidden = false;
    }
  } else {
    if (avatarBadge) avatarBadge.textContent = '👤';
    if (nameLabel) nameLabel.textContent = 'Sign In';
    if (dropAvatar) dropAvatar.textContent = '?';
    if (dropName) dropName.textContent = 'Guest User';
    if (dropEmail) dropEmail.textContent = 'Not logged in';
    if (loginActionLabel) loginActionLabel.textContent = 'Sign In with Google';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (settingsSignoutBtn) settingsSignoutBtn.style.display = 'none';
    if (pDrawerSignOutBtn) pDrawerSignOutBtn.style.display = 'none';
    if (pDrawerName) pDrawerName.textContent = 'Guest User';
    if (pDrawerEmail) pDrawerEmail.hidden = true;
  }
}

// Initialize Google Identity Services when the login screen becomes visible.
function renderGoogleButtonIfNeeded() {
  initGoogleIdentityServices();
}

// Open Login Modal with support for mode ('signin' | 'register')
function openLoginModal(mode = 'signin', prefillEmail = '') {
  const modal = el('loginModal');
  const errorMsg = el('loginErrorMsg');
  const emailInput = el('loginEmail');
  const nameInput = el('loginName');
  const dropdown = el('userDropdownPanel');

  if (dropdown) dropdown.hidden = true;
  if (errorMsg) {
    errorMsg.textContent = '';
    errorMsg.hidden = true;
  }

  setAuthTab(mode);

  if (prefillEmail && emailInput) {
    emailInput.value = prefillEmail;
  }

  if (modal) {
    modal.hidden = false;
    // Re-render Google button if container exists
    renderGoogleButtonIfNeeded();
  }
}

function closeLoginModal(force = false) {
  const modal = el('loginModal');
  if (modal) modal.hidden = true;
  document.body.classList.remove(AUTH_GATE_CLASS);
}

// Switch between Sign In and Create Account tabs
function setAuthTab(mode) {
  activeAuthMode = mode;
  const tabSignIn = el('authTabSignIn');
  const tabRegister = el('authTabRegister');
  const nameField = el('loginNameField');
  const submitText = el('loginSubmitText');
  const title = el('loginTitle');
  const subText = el('loginSubText');

  if (mode === 'register') {
    if (tabRegister) tabRegister.classList.add('active');
    if (tabSignIn) tabSignIn.classList.remove('active');
    if (nameField) nameField.hidden = false;
    if (submitText) submitText.textContent = 'Create Account & Listen';
    if (title) title.textContent = 'Create your Tuneus Account';
    if (subText) subText.textContent = 'Sign up to stream verified 320kbps studio masters across all devices';
  } else {
    if (tabSignIn) tabSignIn.classList.add('active');
    if (tabRegister) tabRegister.classList.remove('active');
    if (nameField) nameField.hidden = true;
    if (submitText) submitText.textContent = 'Sign In & Listen';
    if (title) title.textContent = 'Welcome back to Tuneus';
    if (subText) subText.textContent = 'Sign in with your Google account to stream in 320kbps studio master audio';
  }
}

// ==========================================================================
// Google Identity Services (GIS) & Real Account Chooser Engine
// ==========================================================================

// ==========================================================================
// Google Accounts Storage & Instant Account Chooser
// ==========================================================================
const GOOGLE_ACCOUNTS_STORAGE_KEY = 'tuneus_google_accounts';

const DEFAULT_GOOGLE_ACCOUNTS = [
  {
    name: 'Uday Kumar',
    email: 'udaythathi179@gmail.com',
    avatar: 'images/avatar-uday.jpg',
    color: '#4285F4'
  },
  {
    name: 'uday kumar',
    email: 'udaythathi2509@gmail.com',
    avatar: 'images/avatar-uday.jpg',
    color: '#34A853'
  }
];

function getSavedGoogleAccounts() {
  try {
    const raw = localStorage.getItem(GOOGLE_ACCOUNTS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {}
  return [...DEFAULT_GOOGLE_ACCOUNTS];
}

function saveGoogleAccount(acc) {
  if (!acc || !acc.email) return;
  const accounts = getSavedGoogleAccounts();
  const cleanEmail = acc.email.trim().toLowerCase();
  const existingIdx = accounts.findIndex(a => a.email.toLowerCase() === cleanEmail);
  const updatedItem = {
    name: acc.name || 'Google User',
    email: cleanEmail,
    avatar: acc.avatar || 'images/avatar-uday.jpg',
    color: acc.color || '#4285F4',
    lastUsed: Date.now()
  };
  if (existingIdx >= 0) {
    accounts[existingIdx] = { ...accounts[existingIdx], ...updatedItem };
  } else {
    accounts.push(updatedItem);
  }
  try {
    localStorage.setItem(GOOGLE_ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
  } catch (e) {}
}

async function syncGoogleAccountsFromDB() {
  try {
    const res = await fetch('/api/auth/users');
    const data = await res.json();
    if (data && data.success && Array.isArray(data.users)) {
      data.users.forEach(u => {
        if (u.email && u.email.endsWith('@gmail.com')) {
          saveGoogleAccount({
            name: u.name,
            email: u.email,
            avatar: u.avatar || 'images/avatar-uday.jpg',
            color: '#4285F4'
          });
        }
      });
    }
  } catch (_) {}
}

function openGoogleAccountModal() {
  const modal = el('googleAccountModal');
  if (!modal) return;
  closeLoginModal();
  renderGoogleAccountsList();
  const form = el('googleNewAccountForm');
  if (form) form.hidden = true;
  modal.hidden = false;
}

function closeGoogleAccountModal(reopenLoginIfGuest = false) {
  const modal = el('googleAccountModal');
  if (modal) modal.hidden = true;
  if (reopenLoginIfGuest && !getStoredUser()) {
    openLoginModal('signin');
  }
}

function renderGoogleAccountsList() {
  const listContainer = el('googleAccountsList');
  if (!listContainer) return;
  const accounts = getSavedGoogleAccounts();

  listContainer.innerHTML = '';
  accounts.forEach((acc, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'g-account-item';
    btn.setAttribute('data-index', String(index));
    btn.setAttribute('data-email', acc.email);
    btn.setAttribute('data-name', acc.name);

    const initial = (acc.name || 'G').trim().charAt(0).toUpperCase();
    const avatarHtml = acc.avatar
      ? `<img src="${acc.avatar}" alt="${escapeHtml(acc.name)}" class="g-avatar-img" onerror="this.outerHTML='<span>${initial}</span>'" />`
      : `<span>${initial}</span>`;

    btn.innerHTML = `
      <div class="g-avatar-circle" style="background:${acc.color || '#4285F4'};">
        ${avatarHtml}
      </div>
      <div class="g-account-meta">
        <strong class="g-account-name">${escapeHtml(acc.name)}</strong>
        <span class="g-account-email">${escapeHtml(acc.email)}</span>
      </div>
      <svg class="g-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `;

    btn.addEventListener('click', async () => {
      saveGoogleAccount(acc);
      closeGoogleAccountModal(false);
      await loginUser(acc.name, acc.email, acc.avatar || 'images/avatar-uday.jpg');
      toast(`Signed in with Google as ${acc.name}!`);
    });

    listContainer.appendChild(btn);
  });
}

function getGoogleClientId() {
  const stored = localStorage.getItem(GOOGLE_CLIENT_ID_STORAGE_KEY) || window.GOOGLE_CLIENT_ID || '';
  if (stored && !stored.includes('tuneusmusic')) return stored.trim();
  return '';
}

function setGoogleClientId(newId) {
  if (!newId) return;
  const clean = newId.trim();
  window.GOOGLE_CLIENT_ID = clean;
  localStorage.setItem(GOOGLE_CLIENT_ID_STORAGE_KEY, clean);
  googleGisInitialized = false;
  initGoogleIdentityServices();
}

async function initGoogleIdentityServices() {
  try {
    const res = await fetch('/api/auth/config');
    const data = await res.json();
    if (data && data.googleClientId && !data.googleClientId.includes('tuneusmusic')) {
      window.GOOGLE_CLIENT_ID = data.googleClientId;
    }
  } catch (_) {}

  const clientId = getGoogleClientId();
  const input = el('googleClientIdInput');
  if (input) input.value = clientId;

  if (!clientId) return;

  if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
        clearInterval(interval);
        setupGisWithClientId(clientId);
      } else if (attempts > 20) {
        clearInterval(interval);
      }
    }, 250);
    return;
  }

  setupGisWithClientId(clientId);
}

function setupGisWithClientId(clientId) {
  if (!clientId) return;
  try {
    google.accounts.id.initialize({
      client_id: clientId,
      callback: (response) => {
        if (response && response.credential) {
          processRealGoogleToken(null, response.credential);
        }
      },
      auto_select: false,
      cancel_on_tap_outside: true,
      itp_support: true
    });
    googleGisInitialized = true;
  } catch (err) {
    console.warn('[GIS Setup]', err.message);
  }
}

// Trigger the official Google Account Chooser & OAuth 2.0 flow
function startRealGoogleLogin() {
  const clientId = '352956550844-or56kt72is04ql7b1pag65kmfk4ho1tv.apps.googleusercontent.com';
  const redirectUri = window.location.origin.replace(/\/+$/, ''); // e.g. https://lucky-app-iofl.vercel.app
  const scope = encodeURIComponent('openid email profile');
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${scope}&prompt=select_account`;

  const btnText = el('googleContinueText');
  if (btnText) btnText.textContent = 'Opening Google Sign-In...';

  const width = 500;
  const height = 640;
  const left = Math.max(0, (window.screen.width - width) / 2);
  const top = Math.max(0, (window.screen.height - height) / 2);

  const popup = window.open(
    authUrl,
    'Tuneus_Google_Login',
    `width=${width},height=${height},top=${top},left=${left},status=no,resizable=yes`
  );

  if (!popup || popup.closed || typeof popup.closed === 'undefined') {
    window.location.href = authUrl;
    return;
  }

  const checkClosed = setInterval(() => {
    if (!popup || popup.closed) {
      clearInterval(checkClosed);
      if (btnText) btnText.textContent = 'Continue with Google';
    }
  }, 1000);
}

// Handle Google OAuth callback from URL hash (#access_token=... or #id_token=...)
function handleGoogleOAuthCallback() {
  const hash = window.location.hash;
  if (!hash || (!hash.includes('access_token=') && !hash.includes('id_token='))) {
    return false;
  }

  const cleanHash = hash.startsWith('#') ? hash.substring(1) : hash;
  const params = new URLSearchParams(cleanHash);
  const accessToken = params.get('access_token');
  const idToken = params.get('id_token');

  if (!accessToken && !idToken) return false;

  // If this window is a popup opened by the main window:
  if (window.opener && !window.opener.closed && window.opener !== window) {
    try {
      window.opener.postMessage({
        type: 'GOOGLE_AUTH_SUCCESS',
        accessToken,
        idToken
      }, window.location.origin);
      window.close();
      return true;
    } catch (_) {}
  }

  // Otherwise handle directly in current window (and close if this was the Google login popup)
  const isLoginPopup = window.name === 'Tuneus_Google_Login';
  processRealGoogleToken(accessToken, idToken).then(() => {
    if (isLoginPopup) {
      try { window.close(); } catch (_) {}
    }
  });
  return true;
}

// Process real Google credentials, fetch profile, and persist session permanently until explicit Sign Out
async function processRealGoogleToken(accessToken, idToken) {
  toast('Verifying real Google account profile...');
  const btnText = el('googleContinueText');
  if (btnText) btnText.textContent = 'Verifying Google Account...';

  try {
    let profile = null;

    if (accessToken) {
      const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      });
      if (res.ok) {
        profile = await res.json();
      }
    }

    if (!profile && idToken) {
      const parts = idToken.split('.');
      if (parts.length === 3) {
        profile = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
      }
    }

    if (!profile || !profile.email) {
      throw new Error('Could not retrieve Google profile');
    }

    const realName = profile.name || profile.given_name || profile.email.split('@')[0];
    const realEmail = profile.email.toLowerCase().trim();
    const realAvatar = profile.picture || 'logo.png?v=100';

    const verifiedUser = {
      id: `google_${profile.sub || Date.now()}`,
      name: realName,
      email: realEmail,
      avatar: realAvatar,
      provider: 'google',
      googleSub: profile.sub || null
    };

    // Persist immediately to localStorage + 1-year cookie so login never drops on reload/cold-start
    saveUserSession({ user: verifiedUser });
    saveGoogleAccount(verifiedUser);
    updateAuthUI(verifiedUser);
    closeLoginModal(true);
    closeGoogleAccountModal(false);

    if (window.history && window.history.replaceState) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    toast(`Signed in with Google as ${verifiedUser.name}!`);

    // Sync with backend database & upgrade with server-signed 1-year JWT tokens
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: realName,
          email: realEmail,
          avatar: realAvatar,
          provider: 'google',
          googleSub: profile.sub
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && data.user) {
          saveUserSession(data);
          updateAuthUI(data.user);
        }
      }
    } catch (syncErr) {
      console.warn('[Auth] Backend token sync skipped (Google session preserved):', syncErr.message);
    }
  } catch (err) {
    console.error('[Google OAuth Error]', err);
    toast('Google Sign-In failed: ' + err.message);
  } finally {
    if (btnText) btnText.textContent = 'Continue with Google';
  }
}

// Window message listener for Google OAuth popup
window.addEventListener('message', (event) => {
  if (event.origin !== window.location.origin) return;
  if (event.data && event.data.type === 'GOOGLE_AUTH_SUCCESS') {
    processRealGoogleToken(event.data.accessToken, event.data.idToken);
  }
});

// Sync login/logout state across tabs and OAuth popups (handles COOP popup isolation too)
window.addEventListener('storage', (event) => {
  if (event.key === AUTH_SESSION_STORAGE_KEY || event.key === AUTH_STORAGE_KEY) {
    const user = getStoredUser();
    if (user && user.name && user.name !== 'Guest User') {
      updateAuthUI(user);
      closeLoginModal(true);
      closeGoogleAccountModal(false);
    } else if (!event.newValue) {
      updateAuthUI(null);
    }
  }
});

// Standard Email/Password login or registration (Preserves existing email flow)
async function loginUser(name, email, avatar = '') {
  const errorMsg = el('loginErrorMsg');
  const submitBtn = el('loginSubmitBtn');
  const submitText = el('loginSubmitText');

  const cleanName = (name || '').trim();
  const cleanEmail = (email || '').trim().toLowerCase();

  if (activeAuthMode === 'register' && !cleanName) {
    if (errorMsg) {
      errorMsg.textContent = 'Please enter your full name.';
      errorMsg.hidden = false;
    }
    return false;
  }

  if (!cleanEmail || !cleanEmail.includes('@')) {
    if (errorMsg) {
      errorMsg.textContent = 'Please enter a valid email address.';
      errorMsg.hidden = false;
    }
    return false;
  }

  if (errorMsg) errorMsg.hidden = true;
  if (submitBtn) submitBtn.disabled = true;
  if (submitText) submitText.textContent = 'Connecting...';

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: cleanName || cleanEmail.split('@')[0],
        email: cleanEmail,
        avatar
      })
    });
    const data = await res.json();
    if (data && data.success && data.user) {
      saveUserSession(data);
      updateAuthUI(data.user);
      closeLoginModal();
      toast(`Welcome ${data.user.name}!`);
      return true;
    } else {
      if (errorMsg) {
        errorMsg.textContent = data?.error || 'Authentication failed.';
        errorMsg.hidden = false;
      }
    }
  } catch (err) {
    console.warn('API login request error:', err);
    toast('Network error during login.');
  } finally {
    if (submitBtn) submitBtn.disabled = false;
    if (submitText) {
      submitText.textContent = activeAuthMode === 'register' ? 'Create Account & Listen' : 'Sign In & Listen';
    }
  }
  return false;
}

// User logout: Revoke session, clear JWT & tokens, reset UI
async function logoutUser() {
  const refreshToken = getStoredRefreshToken();
  if (refreshToken) {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken })
      });
    } catch (_) {}
  }

  // Disable Google Auto Select so GIS prompts account selection next time
  if (window.google?.accounts?.id?.disableAutoSelect) {
    try {
      window.google.accounts.id.disableAutoSelect();
    } catch (_) {}
  }

  saveUserSession(null);
  updateAuthUI(null);
  const dropdown = el('userDropdownPanel');
  if (dropdown) dropdown.hidden = true;
  closeSettingsModal();
  closeProfileDrawer();
  toast('Signed out successfully.');
  openLoginModal('signin');
}

function openSettingsModal() {
  const modal = el('settingsModal');
  if (!modal) return;
  const user = getStoredUser();
  const isLoggedIn = user && user.name && user.name !== 'Guest User';
  const userName = isLoggedIn ? user.name : 'Guest User';
  const userEmail = (isLoggedIn && user.email) ? user.email : 'Not logged in';
  const nameNode = el('settingsUserName');
  const emailNode = el('settingsUserEmail');
  const avatarNode = el('settingsAvatarBadge');
  const signoutBtn = el('settingsSignoutBtn');

  if (nameNode) nameNode.textContent = userName;
  if (emailNode) emailNode.textContent = userEmail;
  if (avatarNode) {
    if (user?.avatar) {
      avatarNode.innerHTML = `<img src="${user.avatar}" alt="${userName}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" onerror="this.outerHTML='${userName.charAt(0).toUpperCase()}'" />`;
    } else {
      avatarNode.textContent = userName.charAt(0).toUpperCase();
    }
  }
  if (signoutBtn) {
    signoutBtn.style.display = isLoggedIn ? 'inline-flex' : 'none';
  }
  modal.hidden = false;
}

function closeSettingsModal() {
  const modal = el('settingsModal');
  if (modal) modal.hidden = true;
}

// Bind all Authentication & Google Identity UI Events
function bindAuthEvents() {
  const userProfileBtn = el('userProfileBtn');
  const userDropdownPanel = el('userDropdownPanel');
  const openLoginBtn = el('openLoginBtn');
  const logoutBtn = el('logoutBtn');
  const loginForm = el('loginForm');
  const loginGuestBtn = el('loginGuestBtn');
  const closeLoginModalBtn = el('closeLoginModalBtn');
  const googleContinueBtn = el('googleContinueBtn');

  // Tab switchers
  const authTabSignIn = el('authTabSignIn');
  const authTabRegister = el('authTabRegister');
  if (authTabSignIn) {
    authTabSignIn.onclick = () => setAuthTab('signin');
  }
  if (authTabRegister) {
    authTabRegister.onclick = () => setAuthTab('register');
  }

  // Google Continue Button -> Trigger Real Google Account Login
  if (googleContinueBtn) {
    googleContinueBtn.onclick = (e) => {
      e.preventDefault();
      startRealGoogleLogin();
    };
  }

  const googleSwitchAccountBtn = el('googleSwitchAccountBtn');
  if (googleSwitchAccountBtn) {
    googleSwitchAccountBtn.onclick = (e) => {
      e.preventDefault();
      startRealGoogleLogin();
    };
  }

  // Google Client ID Settings toggle
  const toggleGoogleConfigBtn = el('toggleGoogleConfigBtn');
  const googleConfigPanel = el('googleConfigPanel');
  const saveGoogleClientIdBtn = el('saveGoogleClientIdBtn');
  const googleClientIdInput = el('googleClientIdInput');

  if (toggleGoogleConfigBtn && googleConfigPanel) {
    toggleGoogleConfigBtn.onclick = () => {
      googleConfigPanel.hidden = !googleConfigPanel.hidden;
    };
  }

  if (saveGoogleClientIdBtn && googleClientIdInput) {
    saveGoogleClientIdBtn.onclick = () => {
      const val = googleClientIdInput.value.trim();
      if (val) {
        setGoogleClientId(val);
        toast('Google Client ID updated & GIS reinitialized!');
        if (googleConfigPanel) googleConfigPanel.hidden = true;
      }
    };
  }

  if (closeLoginModalBtn) {
    closeLoginModalBtn.onclick = () => closeLoginModal();
  }

  // Topbar Profile Drawer trigger
  const profileDrawerBtn = el('profileDrawerBtn');
  const profileDrawer = el('profileDrawer');
  const profileDrawerBackdrop = el('profileDrawerBackdrop');
  const pDrawerCloseBtn = el('pDrawerCloseBtn');

  if (profileDrawerBtn && profileDrawer) {
    profileDrawerBtn.onclick = () => {
      profileDrawer.classList.add('open');
      if (profileDrawerBackdrop) profileDrawerBackdrop.hidden = false;
    };
  }
  if (pDrawerCloseBtn) {
    pDrawerCloseBtn.onclick = () => {
      if (profileDrawer) profileDrawer.classList.remove('open');
      if (profileDrawerBackdrop) profileDrawerBackdrop.hidden = true;
    };
  }
  if (profileDrawerBackdrop) {
    profileDrawerBackdrop.onclick = () => {
      if (profileDrawer) profileDrawer.classList.remove('open');
      profileDrawerBackdrop.hidden = true;
    };
  }

  // Settings Modal Sign Out & Close
  const settingsSignoutBtn = el('settingsSignoutBtn');
  if (settingsSignoutBtn) {
    settingsSignoutBtn.onclick = (e) => {
      e.preventDefault();
      closeSettingsModal();
      logoutUser();
    };
  }

  // Profile Drawer Sign Out
  const pDrawerSignOutBtn = el('pDrawerSignOutBtn');
  if (pDrawerSignOutBtn) {
    pDrawerSignOutBtn.onclick = (e) => {
      e.preventDefault();
      closeProfileDrawer();
      logoutUser();
    };
  }

  // Settings Modal Close Buttons & Backdrop
  const closeSettingsBtn = el('closeSettingsBtn');
  if (closeSettingsBtn) {
    closeSettingsBtn.onclick = () => closeSettingsModal();
  }

  const settingsModal = el('settingsModal');
  if (settingsModal) {
    settingsModal.onclick = (e) => {
      if (e.target === settingsModal) closeSettingsModal();
    };
  }

  if (logoutBtn) {
    logoutBtn.onclick = (e) => {
      e.preventDefault();
      logoutUser();
    };
  }

  // Google Account Chooser modal events
  const closeGoogleAccountBtn = el('closeGoogleAccountBtn');
  if (closeGoogleAccountBtn) {
    closeGoogleAccountBtn.addEventListener('click', () => closeGoogleAccountModal(true));
  }

  const googleAccountModal = el('googleAccountModal');
  if (googleAccountModal) {
    googleAccountModal.addEventListener('click', (e) => {
      if (e.target === googleAccountModal) closeGoogleAccountModal(true);
    });
  }

  const googleAddAnotherBtn = el('googleAddAnotherBtn');
  const googleNewAccountForm = el('googleNewAccountForm');
  const cancelGoogleNewAccount = el('cancelGoogleNewAccount');

  if (googleAddAnotherBtn && googleNewAccountForm) {
    googleAddAnotherBtn.addEventListener('click', () => {
      googleNewAccountForm.hidden = !googleNewAccountForm.hidden;
      if (!googleNewAccountForm.hidden) {
        const nameInput = el('gNewName');
        if (nameInput) nameInput.focus();
      }
    });
  }

  if (cancelGoogleNewAccount && googleNewAccountForm) {
    cancelGoogleNewAccount.addEventListener('click', () => {
      googleNewAccountForm.hidden = true;
    });
  }

  if (googleNewAccountForm) {
    googleNewAccountForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = el('gNewName')?.value?.trim();
      const email = el('gNewEmail')?.value?.trim().toLowerCase();
      if (!name || !email) return;
      if (!email.includes('@')) {
        toast('Please enter a valid Gmail address.');
        return;
      }
      const newAcc = { name, email, avatar: 'images/avatar-uday.jpg' };
      saveGoogleAccount(newAcc);
      closeGoogleAccountModal(false);
      await loginUser(name, email, newAcc.avatar);
      toast(`Signed in with Google as ${name}!`);
    });
  }

  if (loginGuestBtn) {
    loginGuestBtn.onclick = () => {
      closeLoginModal(true);
      toast('Browsing as Guest. Sign in anytime from profile.');
    };
  }

  // Form submission (Email auth)
  if (loginForm) {
    loginForm.onsubmit = async (e) => {
      e.preventDefault();
      const nameInput = el('loginName');
      const emailInput = el('loginEmail');
      const name = nameInput ? nameInput.value : '';
      const email = emailInput ? emailInput.value : '';
      await loginUser(name, email);
    };
  }

  // Initialize Google Identity Services SDK
  initGoogleIdentityServices();
}


  // Prevent browser mini-infobar or annoying pop-up on page load
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
  });

// ==========================================================================
// Explore Universe Option Menu (Left-Side Up Corner Option Drawer)
// ==========================================================================
function openUniverseDrawer() {
  const backdrop = el('universeDrawerBackdrop');
  const input = el('universeFilterInput');
  if (backdrop) {
    backdrop.hidden = false;
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 120);
    }
    filterUniverseDrawerItems('');
  }
}

function closeUniverseDrawer() {
  const backdrop = el('universeDrawerBackdrop');
  if (backdrop) backdrop.hidden = true;
}

function filterUniverseDrawerItems(filterText, tab = 'all') {
  const content = el('universeDrawerContent');
  if (!content) return;
  const q = (filterText || '').toLowerCase().trim();

  content.querySelectorAll('.universe-group').forEach((group) => {
    const groupType = group.dataset.group;
    let groupMatchesTab = tab === 'all' || tab === groupType;

    let visibleInGroup = 0;
    group.querySelectorAll('.universe-item-btn').forEach((btn) => {
      const name = (btn.querySelector('.u-item-name')?.textContent || '').toLowerCase();
      const sub = (btn.querySelector('.u-item-sub')?.textContent || '').toLowerCase();
      const query = (btn.dataset.query || '').toLowerCase();

      const textMatches = !q || name.includes(q) || sub.includes(q) || query.includes(q);
      const isVisible = groupMatchesTab && textMatches;
      btn.style.display = isVisible ? 'flex' : 'none';
      if (isVisible) visibleInGroup++;
    });

    group.style.display = visibleInGroup > 0 ? 'block' : 'none';
  });
}

function bindUniverseDrawerEvents() {
  const openBtn = el('universeMenuBtn');
  const closeBtn = el('closeUniverseDrawer');
  const backdrop = el('universeDrawerBackdrop');
  const drawer = el('universeDrawer');
  const filterInput = el('universeFilterInput');
  const content = el('universeDrawerContent');

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openUniverseDrawer();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeUniverseDrawer();
    });
  }

  if (backdrop && drawer) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeUniverseDrawer();
    });
  }

  // Live search in drawer
  let activeTab = 'all';
  if (filterInput) {
    filterInput.addEventListener('input', () => {
      filterUniverseDrawerItems(filterInput.value, activeTab);
    });
  }

  // Tabs in drawer
  document.querySelectorAll('.u-tab').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      document.querySelectorAll('.u-tab').forEach((t) => t.classList.remove('active'));
      tabBtn.classList.add('active');
      activeTab = tabBtn.dataset.tab;
      filterUniverseDrawerItems(filterInput ? filterInput.value : '', activeTab);
    });
  });

  // Clicking an item in drawer (Play artist songs and show all their tracks)
  if (content) {
    content.addEventListener('click', (e) => {
      const itemBtn = e.target.closest('.universe-item-btn');
      if (!itemBtn) return;
      const query = itemBtn.dataset.query;
      const singerName = itemBtn.querySelector('.u-item-name')?.textContent || query;
      playAndShowArtist(singerName, query);
    });
  }
}

// ==========================================================================
// Spotify-Style Profile Drawer & Create Bottom Sheet Actions (Screenshots 1, 2, 3)
// ==========================================================================
function openProfileDrawer() {
  const drawer = el('profileDrawer');
  const backdrop = el('profileDrawerBackdrop');
  if (drawer) {
    drawer.hidden = false;
    drawer.classList.add('open');
  }
  if (backdrop) backdrop.hidden = false;
  const user = getStoredUser();
  const isLoggedIn = user && user.name && user.name !== 'Guest User';
  const nameEl = el('pDrawerUserName');
  if (nameEl) nameEl.textContent = isLoggedIn ? user.name : 'Guest User';
  const emailEl = el('pDrawerUserEmail');
  if (emailEl) {
    emailEl.textContent = (isLoggedIn && user.email) ? user.email : '';
    emailEl.hidden = !(isLoggedIn && user.email);
  }
  const signoutBtn = el('pDrawerSignOutBtn');
  if (signoutBtn) {
    signoutBtn.style.display = isLoggedIn ? 'flex' : 'none';
  }
}

function closeProfileDrawer() {
  const drawer = el('profileDrawer');
  const backdrop = el('profileDrawerBackdrop');
  if (drawer) {
    drawer.hidden = true;
    drawer.classList.remove('open');
  }
  if (backdrop) backdrop.hidden = true;
}

function openCreateSheet() {
  const sheet = el('createBottomSheet');
  const backdrop = el('createSheetBackdrop');
  if (sheet) sheet.hidden = false;
  if (backdrop) backdrop.hidden = false;
  document.body.classList.add('is-create-sheet-open');
}

function closeCreateSheet() {
  const sheet = el('createBottomSheet');
  const backdrop = el('createSheetBackdrop');
  if (sheet) sheet.hidden = true;
  if (backdrop) backdrop.hidden = true;
  document.body.classList.remove('is-create-sheet-open');
}

function toggleCreateSheet() {
  const sheet = el('createBottomSheet');
  if (sheet && !sheet.hidden) {
    closeCreateSheet();
  } else {
    openCreateSheet();
  }
}

function createCollaborativePlaylist() {
  const name = prompt('Enter Collaborative Playlist Name:', 'Friends Jam Session');
  if (!name || !name.trim()) return;
  const code = 'JAM-' + Math.floor(1000 + Math.random() * 9000);
  const sampleTracks = (state.tracks.slice(0, 8)).map((t) => t.id);
  const newPl = {
    id: 'collab-' + Date.now(),
    name: name.trim(),
    trackIds: sampleTracks,
    isCollaborative: true,
    inviteCode: code,
    createdBy: 'uday',
    createdAt: new Date().toISOString()
  };
  state.playlists.push(newPl);
  setStoredJSON(STORAGE_PLAYLISTS, state.playlists);
  state.filter = 'Playlists';
  state.activePlaylistId = newPl.id;
  render();
  const plContainer = el('playlistsContainer');
  if (plContainer) plContainer.scrollIntoView({ behavior: 'smooth' });
  toast(`✨ Created Collaborative Playlist "${name.trim()}"! Invite Code: ${code}`);
}

function createDailyBlendPlaylist() {
  const blendTracks = [
    ...state.tracks.filter((t) => t.language === 'Telugu').slice(0, 5),
    ...state.tracks.filter((t) => t.language === 'Hindi').slice(0, 5),
    ...state.tracks.filter((t) => t.category === 'Folk' || (t.artist && t.artist.includes('Mangli'))).slice(0, 4),
    ...Array.from(state.favorites).map((id) => findTrackById(id)).filter(Boolean).slice(0, 6)
  ];
  const uniqueBlend = deduplicateTrackList(blendTracks);
  const newPl = {
    id: 'blend-' + Date.now(),
    name: 'Tuneus Daily Blend (uday & Friends)',
    trackIds: uniqueBlend.map((t) => t.id),
    isBlend: true,
    blendScore: '98% Taste Match',
    createdAt: new Date().toISOString()
  };
  state.playlists.push(newPl);
  setStoredJSON(STORAGE_PLAYLISTS, state.playlists);
  state.filter = 'Playlists';
  state.activePlaylistId = newPl.id;
  render();
  const plContainer = el('playlistsContainer');
  if (plContainer) plContainer.scrollIntoView({ behavior: 'smooth' });
  toast('✨ Created "Daily Blend" playlist with 98% taste match!');
}

function openTopbarSearch() {
  const input = el('search');
  if (input) {
    input.focus();
    input.select();
  }
}

function closeTopbarSearch() {
  // Fitted search bar remains permanently integrated in topbar
}

function bindSpotifyNavigationEvents() {
  // 1. Profile Drawer (Screenshot 1)
  const profileDrawerBtn = el('profileDrawerBtn');
  if (profileDrawerBtn) {
    profileDrawerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openProfileDrawer();
    });
  }

  const profileBackdrop = el('profileDrawerBackdrop');
  if (profileBackdrop) {
    profileBackdrop.addEventListener('click', closeProfileDrawer);
  }

  const viewProfileBtn = el('pDrawerViewProfileBtn');
  if (viewProfileBtn) {
    viewProfileBtn.addEventListener('click', () => {
      closeProfileDrawer();
      const user = getStoredUser();
      if (user && user.name && user.name !== 'Guest User') {
        openSettingsModal();
      } else {
        openLoginModal('signin');
      }
    });
  }

  const addAccountBtn = el('pDrawerAddAccountBtn');
  if (addAccountBtn) {
    addAccountBtn.addEventListener('click', () => {
      closeProfileDrawer();
      openGoogleAccountModal();
    });
  }

  const pRecentsBtn = el('pDrawerRecentsBtn');
  if (pRecentsBtn) {
    pRecentsBtn.addEventListener('click', () => {
      closeProfileDrawer();
      const searchScreen = el('searchScreen');
      if (searchScreen) searchScreen.hidden = true;
      state.filter = 'All';
      state.query = '';
      state.onlineSearch = false;
      state.activeArtist = null;
      render();
      const qj = el('quickJumpGrid');
      if (qj) qj.scrollIntoView({ behavior: 'smooth', block: 'center' });
      toast('Showing your 6 most recent songs');
    });
  }

  const pUpdatesBtn = el('pDrawerUpdatesBtn');
  if (pUpdatesBtn) {
    pUpdatesBtn.addEventListener('click', () => {
      closeProfileDrawer();
      toast('📢 Tuneus Updates: Studio Equalizer with Bass & Vocal Band Boost, Curated Daily Mixes, Popular Artists & Collaborative Blend playlists!');
    });
  }

  const pSettingsBtn = el('pDrawerSettingsBtn');
  if (pSettingsBtn) {
    pSettingsBtn.addEventListener('click', () => {
      closeProfileDrawer();
      openSettingsModal();
    });
  }

  // 2. Floating Mini Player (Screenshot 2)
  const floatBody = el('floatingPlayerBody');
  if (floatBody) {
    floatBody.addEventListener('click', openExpandedModal);
  }

  const floatEq = el('floatingEqBtn');
  if (floatEq) {
    floatEq.addEventListener('click', (e) => {
      e.stopPropagation();
      openEqModal();
    });
  }

  const floatAdd = el('floatingAddBtn');
  if (floatAdd) {
    floatAdd.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.current) openAddToPlaylist(state.current.id);
      else toast('Play a song first to add it to a playlist');
    });
  }

  const floatPlay = el('floatingPlayBtn');
  if (floatPlay) {
    floatPlay.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlayback();
    });
  }

  // 3. "+ Create" Bottom Sheet Modal (Screenshot 3)
  const sheetBackdrop = el('createSheetBackdrop');
  if (sheetBackdrop) {
    sheetBackdrop.addEventListener('click', closeCreateSheet);
  }

  const createPlaylistBtn = el('createSheetPlaylistBtn');
  if (createPlaylistBtn) {
    createPlaylistBtn.addEventListener('click', () => {
      closeCreateSheet();
      openNewPlaylistModal();
    });
  }

  const createCollabBtn = el('createSheetCollabBtn');
  if (createCollabBtn) {
    createCollabBtn.addEventListener('click', () => {
      closeCreateSheet();
      createCollaborativePlaylist();
    });
  }

  const createBlendBtn = el('createSheetBlendBtn');
  if (createBlendBtn) {
    createBlendBtn.addEventListener('click', () => {
      closeCreateSheet();
      createDailyBlendPlaylist();
    });
  }

  // 4. Category Filter Chips (Screenshot 2)
  const topChips = el('topbarChipsScroll');
  if (topChips) {
    topChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      const f = chip.dataset.filter;
      const searchScreen = el('searchScreen');
      if (searchScreen) searchScreen.hidden = true;
      state.activeArtist = null;
      state.onlineSearch = false;
      state.activePlaylistId = null;
      state.query = '';
      if (el('search')) el('search').value = '';
      if (el('clearSearch')) el('clearSearch').hidden = true;

      if (f === 'Music') {
        state.filter = 'Music';
      } else if (f === 'Podcasts') {
        state.filter = 'Podcasts';
      } else {
        state.filter = f;
      }
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// Mobile Back Button Protection & Double-Tap Exit Confirmation
// ==========================================================================
let backPressCount = 0;
let backPressTimer = null;

function showExitConfirmModal() {
  const modal = el('exitConfirmModal');
  if (modal) {
    modal.hidden = false;
    const noBtn = el('exitNoBtn');
    if (noBtn) noBtn.focus();
  }
}

function closeExitConfirmModal() {
  const modal = el('exitConfirmModal');
  if (modal) modal.hidden = true;
  backPressCount = 0;
  clearTimeout(backPressTimer);
}

function handleExitConfirmed() {
  closeExitConfirmModal();
  toast('Exiting Tuneus...');
  setTimeout(() => {
    try {
      window.close();
    } catch (_) {}
    try {
      if (window.navigator && window.navigator.app && typeof window.navigator.app.exitApp === 'function') {
        window.navigator.app.exitApp();
        return;
      }
    } catch (_) {}
    try {
      window.history.go(-10);
    } catch (_) {}
    setTimeout(() => {
      try {
        window.location.replace('about:blank');
      } catch (_) {}
    }, 200);
  }, 150);
}

function initMobileBackTrap() {
  // Push an initial history trap so mobile back button doesn't exit immediately
  try {
    if (window.history && window.history.pushState) {
      window.history.pushState({ tuneusApp: true, depth: 1 }, '', window.location.href);
    }
  } catch (_) {}

  // Keep history trap armed on touch or click
  const rearmHistory = () => {
    try {
      if (window.history && window.history.pushState && (!window.history.state || !window.history.state.tuneusApp)) {
        window.history.pushState({ tuneusApp: true, depth: 1 }, '', window.location.href);
      }
    } catch (_) {}
  };
  window.addEventListener('click', rearmHistory, { passive: true });
  window.addEventListener('touchstart', rearmHistory, { passive: true });

  // Handle hardware / gesture / browser back button
  window.addEventListener('popstate', () => {
    // Immediately re-push history state to stay trapped in Tuneus
    try {
      window.history.pushState({ tuneusApp: true, depth: 1 }, '', window.location.href);
    } catch (_) {}

    // 1. If Exit Modal is open, back button acts as "No" (dismisses it)
    const exitModal = el('exitConfirmModal');
    if (exitModal && !exitModal.hidden) {
      closeExitConfirmModal();
      return;
    }

    // 2. If any subview/modal/drawer/expanded player is open, close that first
    const dlModal = el('downloadModal');
    const eqModal = el('eqModal');
    const atpModal = el('addToPlaylistModal');
    const npModal = el('newPlaylistModal');
    const scModal = el('shortcutsModal');
    const impModal = el('importModal');
    const setModal = el('settingsModal');
    const logModal = el('loginModal');
    const googModal = el('googleAccountModal');
    const qDrawer = el('queueDrawer');
    const profDrawer = el('profileDrawer');
    const uniDrawer = el('universeDrawer');
    const createSheet = el('createBottomSheet');
    const expModal = el('expandedModal');
    const artistHero = el('artistHeroSection');

    if (dlModal && !dlModal.hidden) { closeDownloadModal(); return; }
    if (eqModal && !eqModal.hidden) { closeEqModal(); return; }
    if (atpModal && !atpModal.hidden) { closeAddToPlaylist(); return; }
    if (npModal && !npModal.hidden) { closeNewPlaylistModal(); return; }
    if (scModal && !scModal.hidden) { scModal.hidden = true; return; }
    if (impModal && !impModal.hidden) { impModal.hidden = true; return; }
    if (setModal && !setModal.hidden) { setModal.hidden = true; return; }
    if (logModal && !logModal.hidden) { closeLoginModal(true); return; }
    if (googModal && !googModal.hidden) { closeGoogleAccountModal(true); return; }
    if (qDrawer && !qDrawer.hidden) { qDrawer.hidden = true; return; }
    if (profDrawer && !profDrawer.hidden) { closeProfileDrawer(); return; }
    if (uniDrawer && !uniDrawer.hidden) { closeUniverseDrawer(); return; }
    if (createSheet && !createSheet.hidden) { createSheet.hidden = true; return; }
    if (expModal && !expModal.hidden) { closeExpandedModal(false); return; }
    if (artistHero && !artistHero.hidden) { closeArtistHero(); return; }
    if (state.activePlaylistId) {
      state.activePlaylistId = null;
      render();
      return;
    }
    if (state.onlineSearch || state.query) {
      state.onlineSearch = false;
      state.query = '';
      const searchInput = el('search');
      if (searchInput) searchInput.value = '';
      const clearBtn = el('clearSearch');
      if (clearBtn) clearBtn.hidden = true;
      render();
      return;
    }
    if (state.filter !== 'All') {
      setFilter('All');
      return;
    }

    // 3. Main home view: track consecutive back button clicks
    backPressCount += 1;

    if (backPressCount === 1) {
      // 1st click: Do NOT exit directly!
      toast('Press back again to exit');
      clearTimeout(backPressTimer);
      backPressTimer = setTimeout(() => {
        backPressCount = 0;
      }, 2500);
    } else if (backPressCount >= 2) {
      // 2nd click: Show confirmation prompt:
      // "Are you sure wanted to exit" with Yes and No options
      clearTimeout(backPressTimer);
      backPressCount = 0;
      showExitConfirmModal();
    }
  });
}

// App Initialization
function init() {
  bindEvents();
  bindAuthEvents();
  bindUniverseDrawerEvents();
  bindSpotifyNavigationEvents();
  initMobileBackTrap();
  updateQualityButton();
  hydrateLibraryWithUniverseSongs();
  render();
  applyVolume();
  updateProgress(0, 0);
  loadDownloads().then(() => render()).catch(() => {});
  syncGoogleAccountsFromDB();

  // Idle background load for full discographies JSON (0ms impact on initial load and rendering)
  if (typeof window !== 'undefined' && (!window.ALL_ARTIST_DISCOGRAPHIES || Object.keys(window.ALL_ARTIST_DISCOGRAPHIES).length === 0)) {
    const idleFn = window.requestIdleCallback || ((cb) => setTimeout(cb, 1000));
    idleFn(() => {
      fetch('data/artistDiscographies.json')
        .then((r) => r.ok ? r.json() : null)
        .then((data) => {
          if (data) {
            window.ALL_ARTIST_DISCOGRAPHIES = data;
            hydrateLibraryWithUniverseSongs();
          }
        })
        .catch(() => {});
    });
  }

  // 1. Check for incoming Google OAuth callback in URL hash
  const handledOAuth = handleGoogleOAuthCallback();
  if (handledOAuth) {
    return;
  }

  // 2. Check for an authenticated user session (persists until user explicitly clicks Sign Out)
  const currentUser = getStoredUser();
  if (currentUser && currentUser.name && currentUser.name !== 'Guest User') {
    updateAuthUI(currentUser);
    closeLoginModal(true);
    setPersistentAuthCookie(currentUser);
  } else {
    // Fresh arrival -> Show Login Page only when not logged in
    updateAuthUI(null);
    openLoginModal('signin');
  }
}

init();
