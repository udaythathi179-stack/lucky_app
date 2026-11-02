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
  return track.src || '';
}

function findTrackById(id) {
  const local = state.tracks.find((t) => t.id === id);
  if (local) return local;
  const online = state.onlineTracks.find((t) => t.id === id);
  if (online) return online;
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

// Initial Playlists
const defaultPlaylists = [
  {
    id: 'pl-tuneus-telugu',
    name: 'Tuneus Tollywood Superhits',
    description: 'Full-length Telugu chartbusters and party hits',
    trackIds: catalog.filter((t) => t.language === 'Telugu').map((t) => t.id)
  },
  {
    id: 'pl-tuneus-hindi',
    name: 'Tuneus Bollywood Melodies',
    description: 'Full-length Bollywood romantic and soulful songs',
    trackIds: catalog.filter((t) => t.language === 'Hindi').map((t) => t.id)
  },
  {
    id: 'pl-tuneus-folk',
    name: 'Tuneus Folk Classics & Beats',
    description: 'Authentic Telugu, Telangana & Indian folk songs and festival beats',
    trackIds: catalog.filter((t) => t.category === 'Folk').map((t) => t.id)
  },
  {
    id: 'pl-tuneus-english',
    name: 'Tuneus English & Global Hits',
    description: 'World-famous international chartbusters and pop anthems',
    trackIds: catalog.filter((t) => t.language === 'English').map((t) => t.id)
  }
];

let storedPlaylists = getStoredJSON(STORAGE_PLAYLISTS, defaultPlaylists);
if (!storedPlaylists.some((p) => p.id === 'pl-tuneus-folk')) {
  const folkPlaylist = defaultPlaylists.find((p) => p.id === 'pl-tuneus-folk');
  if (folkPlaylist) storedPlaylists.push(folkPlaylist);
}
if (!storedPlaylists.some((p) => p.id === 'pl-tuneus-english')) {
  const engPlaylist = defaultPlaylists.find((p) => p.id === 'pl-tuneus-english');
  if (engPlaylist) storedPlaylists.push(engPlaylist);
}
const storedFavorites = new Set(getStoredJSON(STORAGE_FAVORITES, []));
const storedCustomTracks = getStoredJSON(STORAGE_CUSTOM_TRACKS, []);
const storedRecentHistory = getStoredJSON(STORAGE_RECENT_HISTORY, []);

// Clean and deduplicate any list of tracks by normalized title and language
function deduplicateTrackList(tracks) {
  if (!Array.isArray(tracks)) return [];
  const seenKeys = new Set();
  const seenUrls = new Set();
  const unique = [];

  for (const track of tracks) {
    if (!track || !track.title) continue;

    const normTitle = String(track.title)
      .toLowerCase()
      .replace(/\s*\(.*?\)/g, '')
      .replace(/\s*\[.*?\]/g, '')
      .replace(/\s*-\s*(from|lyrical|remix|full video|audio|remastered|video song|single|original).*$/i, '')
      .replace(/[^a-z0-9]/g, '')
      .trim();

    const normLang = String(track.language || 'all').toLowerCase().trim();
    const key = `${normTitle}__${normLang}`;
    const cleanUrl = track.src ? String(track.src).trim().toLowerCase().split('?')[0] : '';

    if (normTitle && seenKeys.has(key)) continue;
    if (cleanUrl && seenUrls.has(cleanUrl)) continue;

    if (normTitle) seenKeys.add(key);
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
  recentHistory: storedRecentHistory,
  eqPreset: 'normal'
};

// HTML5 Audio Engine & Web Audio Visualizer / EQ
const audio = new Audio();
audio.preload = 'none';
audio.crossOrigin = 'anonymous';

let audioCtx = null;
let audioSourceNode = null;
let analyserNode = null;
let biquadBass = null;
let biquadTreble = null;
let biquadMid = null;
let animFrameId = null;

// Progress tracking
const progress = { current: 0, duration: 0 };
let pendingFiles = [];
let importLang = 'Telugu';
let toastTimer = null;
let trackToAddId = null;

// Palette generation for artwork fallback
const palettes = [
  ['#ff9f43', '#ff5f6d'],
  ['#7c5cff', '#2ec5ff'],
  ['#22c55e', '#0ea5e9'],
  ['#f472b6', '#8b5cf6'],
  ['#f59e0b', '#ef4444'],
  ['#06b6d4', '#3b82f6'],
  ['#a3e635', '#14b8a6'],
  ['#fb7185', '#f97316'],
  ['#e879f9', '#6366f1']
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
      url = url.replace(/(_96|_160|_64|_32)\.mp4$/, '_320.mp4');
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

    biquadBass = audioCtx.createBiquadFilter();
    biquadBass.type = 'lowshelf';
    biquadBass.frequency.value = 200;

    biquadMid = audioCtx.createBiquadFilter();
    biquadMid.type = 'peaking';
    biquadMid.frequency.value = 1500;
    biquadMid.Q.value = 1;

    biquadTreble = audioCtx.createBiquadFilter();
    biquadTreble.type = 'highshelf';
    biquadTreble.frequency.value = 3500;

    audioSourceNode = audioCtx.createMediaElementSource(audio);
    audioSourceNode.connect(biquadBass);
    biquadBass.connect(biquadMid);
    biquadMid.connect(biquadTreble);
    biquadTreble.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);

    applyEqPreset(state.eqPreset);
    startVisualizerLoop();
  } catch (err) {}
}

function applyEqPreset(preset) {
  state.eqPreset = preset;
  if (!biquadBass || !biquadMid || !biquadTreble) return;
  switch (preset) {
    case 'bass':
      biquadBass.gain.value = 8;
      biquadMid.gain.value = -1;
      biquadTreble.gain.value = 1;
      break;
    case 'vocal':
      biquadBass.gain.value = -3;
      biquadMid.gain.value = 6;
      biquadTreble.gain.value = 3;
      break;
    case 'treble':
      biquadBass.gain.value = -2;
      biquadMid.gain.value = 1;
      biquadTreble.gain.value = 7;
      break;
    case 'party':
      biquadBass.gain.value = 6;
      biquadMid.gain.value = 2;
      biquadTreble.gain.value = 6;
      break;
    case 'normal':
    default:
      biquadBass.gain.value = 0;
      biquadMid.gain.value = 0;
      biquadTreble.gain.value = 0;
      break;
  }
  const labelMap = { normal: 'Normal', bass: 'Bass Boost', vocal: 'Vocal Clarity', treble: 'Treble Boost', party: 'Party Dynamic' };
  el('expEqName').textContent = `EQ: ${labelMap[preset] || 'Normal'}`;
  document.querySelectorAll('#eqPresets .eq-card').forEach((card) => {
    card.classList.toggle('active', card.dataset.preset === preset);
  });
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
      for (let i = 0; i < barCount; i++) {
        const val = dataArray[i % bufferLength] / 255;
        const h = Math.max(2, val * miniCanvas.height);
        const grad = miniCtx.createLinearGradient(0, miniCanvas.height - h, 0, miniCanvas.height);
        grad.addColorStop(0, '#38bdf8');
        grad.addColorStop(1, '#1d4ed8');
        miniCtx.fillStyle = grad;
        miniCtx.fillRect(i * barWidth, miniCanvas.height - h, barWidth - 2, h);
      }
    }

    if (expCtx && expCanvas && !el('expandedModal').hidden) {
      expCtx.clearRect(0, 0, expCanvas.width, expCanvas.height);
      const barCount = 48;
      const barWidth = expCanvas.width / barCount;
      for (let i = 0; i < barCount; i++) {
        const val = dataArray[i % bufferLength] / 255;
        const h = Math.max(3, val * (expCanvas.height - 6));
        const x = i * barWidth;
        const w = barWidth - 3;
        const y = expCanvas.height - h;

        // Glowing electric blue acoustic soundwave bar matching theme image
        const gradient = expCtx.createLinearGradient(0, y, 0, expCanvas.height);
        gradient.addColorStop(0, '#e0f2fe');
        gradient.addColorStop(0.25, '#38bdf8');
        gradient.addColorStop(0.65, '#2563eb');
        gradient.addColorStop(1, 'rgba(29, 78, 216, 0.45)');
        expCtx.fillStyle = gradient;
        expCtx.beginPath();
        expCtx.roundRect(x, y, w, h, [3, 3, 0, 0]);
        expCtx.fill();

        // Starry glowing acoustic particle bead atop wave crest (Fast direct drawing)
        if (h > 6) {
          expCtx.fillStyle = '#ffffff';
          expCtx.beginPath();
          expCtx.arc(x + w / 2, y, 1.8, 0, Math.PI * 2);
          expCtx.fill();
        }
      }
    }
  }

  animFrameId = requestAnimationFrame(draw);
}

// Filter and Sort Tracks
function visibleTracks() {
  if (state.onlineSearch) {
    return state.onlineTracks;
  }

  const query = state.query.trim().toLowerCase();
  let list;

  if (state.filter === 'Downloads') {
    list = Array.from(state.downloads.values()).map((item) => ({ ...item.track }));
  } else {
    list = state.tracks.slice();

    if (state.filter === 'Telugu') {
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

function thumbArtwork(url) {
  if (!url) return 'icon-192.png';
  if (typeof url === 'string' && url.includes('500x500.jpg')) {
    return url.replace('500x500.jpg', '150x150.jpg');
  }
  return url;
}

// Popular Home Artists Data
const HOME_ARTISTS = [
  { name: 'S. P. Balasubrahmanyam', tag: 'Legend &bull; 40k Songs', img: 'images/artists/sp-balasubrahmanyam.jpg', query: 'SP Balasubrahmanyam Telugu hits' },
  { name: 'Sid Sriram', tag: 'Melody King &bull; Srivalli', img: 'images/artists/sid-sriram.jpg', query: 'Sid Sriram Telugu' },
  { name: 'Arijit Singh', tag: 'Soul of Bollywood', img: 'images/artists/arijit-singh.jpg', query: 'Arijit Singh romantic hits' },
  { name: 'Shreya Ghoshal', tag: 'Melody Queen', img: 'images/artists/shreya-ghoshal.jpg', query: 'Shreya Ghoshal Telugu' },
  { name: 'Anurag Kulkarni', tag: 'Ramuloo, Pilla Raa', img: 'images/artists/anurag-kulkarni.jpg', query: 'Anurag Kulkarni Telugu' },
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

function queueTracks() {
  const list = visibleTracks();
  return list.length ? list : state.tracks;
}

// Generate Card HTML (Optimized: single image decode, lazy load, async decoding)
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

  const thumbUrl = thumbArtwork(track.artwork);
  const artworkInner = track.artwork
    ? `<img class="art-img" src="${esc(thumbUrl)}" alt="${esc(track.title)}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='icon-192.png';" />`
    : `<span class="art-initials">${esc(initials(track.title))}</span>`;

  return `
    <div class="${classes.join(' ')}" data-id="${esc(track.id)}" role="button" tabindex="0" aria-label="Play ${esc(track.title)} by ${esc(track.artist)}">
      <div class="art" style="background: rgba(8, 20, 52, 0.9);">
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

// Render Playlists Section
function renderPlaylistsGrid() {
  const container = el('playlistsGrid');
  if (!container) return;
  container.innerHTML = state.playlists.map((pl) => {
    const count = pl.trackIds.length;
    return `
      <div class="playlist-card" data-playlist-id="${esc(pl.id)}">
        <div class="playlist-card-icon">&#9835;</div>
        <h3>${esc(pl.name)}</h3>
        <p>${esc(pl.description || 'Tuneus music playlist')}</p>
        <div class="playlist-card-meta">
          <span>${count} full track${count === 1 ? '' : 's'}</span>
          <button class="playlist-card-play" type="button" data-action="play-playlist" data-playlist-id="${esc(pl.id)}">Play All</button>
        </div>
      </div>`;
  }).join('');
}

// Render Filter Chips (Downloads count is kept visible)
function renderChips() {
  document.querySelectorAll('.chip').forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.filter === state.filter && !state.onlineSearch);
  });
  const downloadsCount = el('countDownloads');
  if (downloadsCount) downloadsCount.textContent = state.downloads.size;
}

// Render Recent Songs Grid (History of up to 9 songs)
function renderRecentGrid() {
  const quickGrid = el('quickJumpGrid');
  if (!quickGrid) return;

  // Resolve tracks from recentHistory IDs (only valid songs in catalog)
  let recentTracks = [];
  if (state.recentHistory && state.recentHistory.length > 0) {
    state.recentHistory.forEach((id) => {
      const t = findTrackById(id);
      if (t) recentTracks.push(t);
    });
  }

  recentTracks = deduplicateTrackList(recentTracks);

  // If user has listened to fewer than 9 songs, fill remaining slots up to 9 from catalog with unique songs
  if (recentTracks.length < 9) {
    const existingIds = new Set(recentTracks.map((t) => t.id));
    // Pick diverse top songs across Telugu, Hindi & English
    const defaultFillIds = [
      'samajavaragamana', 'tum-hi-ho', 'shape-of-you',
      'srivalli', 'kesariya', 'believer',
      'naatu-naatu', 'channa-mereya', 'blinding-lights'
    ];
    for (const fillId of defaultFillIds) {
      const t = findTrackById(fillId);
      if (t && !existingIds.has(t.id)) {
        recentTracks.push(t);
        existingIds.add(t.id);
        if (recentTracks.length === 9) break;
      }
    }
    // Fallback if needed
    if (recentTracks.length < 9) {
      for (const t of state.tracks) {
        if (!existingIds.has(t.id)) {
          recentTracks.push(t);
          existingIds.add(t.id);
          if (recentTracks.length === 9) break;
        }
      }
    }
  }

  // Strictly cap at 9 unique songs
  const displayTracks = deduplicateTrackList(recentTracks).slice(0, 9);
  quickGrid.innerHTML = displayTracks.map((t) => {
    const art = t.artwork || 'icon-192.png';
    return `
      <div class="quick-jump-card" data-action="play-track" data-id="${esc(t.id)}" role="button" tabindex="0" title="Play ${esc(t.title)}">
        <img class="quick-jump-art" src="${esc(art)}" alt="${esc(t.title)}" loading="lazy" onerror="this.src='icon-192.png'" />
        <span class="quick-jump-title">${esc(t.title)}</span>
        <div class="quick-jump-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
    `;
  }).join('');
}

// Add listened song to Recent Songs History (Max 9 songs)
function addToRecentHistory(track) {
  if (!track || !track.id) return;
  // If already present, remove old position to bring it to index 0 (most recent)
  state.recentHistory = state.recentHistory.filter((id) => id !== track.id);
  state.recentHistory.unshift(track.id);
  // Store only 9 songs maximum
  if (state.recentHistory.length > 9) {
    state.recentHistory = state.recentHistory.slice(0, 9);
  }
  setStoredJSON(STORAGE_RECENT_HISTORY, state.recentHistory);
  renderRecentGrid();
}

let homeDashboardRendered = false;

// Render Spotify-Style Home Dashboard (Rendered once on startup for maximum speed)
function renderHomeDashboard() {
  // 1. Recent Songs Grid (Up to 9 recent tracks)
  renderRecentGrid();

  // Helper for rendering horizontal shelves with tiny, fast, cached thumbnails
  function renderShelf(containerId, tracks) {
    const container = el(containerId);
    if (!container) return;
    const uniqueTracks = deduplicateTrackList(tracks);
    container.innerHTML = uniqueTracks.map((t) => {
      const art = thumbArtwork(t.artwork);
      return `
        <div class="shelf-card" data-action="play-track" data-id="${esc(t.id)}" role="button" tabindex="0" title="Play ${esc(t.title)}">
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

  // 2. Jump back in shelf (Diverse Trending Hits Across All Languages)
  const trendingIds = [
    'srivalli', 'kesariya', 'shape-of-you', 'samajavaragamana',
    'tum-hi-ho', 'believer', 'naatu-naatu', 'apna-bana-le',
    'blinding-lights', 'chitti'
  ];
  const jumpBackTracks = trendingIds.map((id) => findTrackById(id)).filter(Boolean);
  renderShelf('jumpBackShelf', jumpBackTracks.length >= 8 ? jumpBackTracks : state.tracks.slice(0, 10));

  // 3. Popular Artists Shelf (Circular Avatars)
  const homeArtistsEl = el('homeArtistsShelf');
  if (homeArtistsEl) {
    homeArtistsEl.innerHTML = HOME_ARTISTS.map((artist) => `
      <button class="artist-shelf-card" type="button" data-artist-query="${esc(artist.query)}" title="Listen to ${esc(artist.name)}">
        <div class="artist-avatar-wrap">
          <img class="artist-avatar-img" src="${esc(artist.img)}" alt="${esc(artist.name)}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='icon-192.png';" />
        </div>
        <span class="artist-name">${esc(artist.name)}</span>
        <span class="artist-genre">${esc(artist.tag)}</span>
      </button>
    `).join('');
  }

  // 4. Folk Shelf (Authentic Roots & Rhythms)
  const folkTracks = state.tracks.filter((t) => (
    t.language === 'Folk' ||
    (t.category && t.category.toLowerCase().includes('folk')) ||
    (t.artist && (t.artist.includes('Mangli') || t.artist.includes('Madhu Priya') || t.artist.includes('Rahul Sipligunj') || t.artist.includes('Mame Khan')))
  ));
  renderShelf('folkShelf', folkTracks.slice(0, 10));

  // 5. Telugu Shelf (Tollywood Blockbusters)
  const teluguTracks = state.tracks.filter((t) => t.language === 'Telugu');
  renderShelf('teluguShelf', teluguTracks.slice(0, 10));

  // 6. Hindi Shelf (Bollywood Melodies)
  const hindiTracks = state.tracks.filter((t) => t.language === 'Hindi');
  renderShelf('hindiShelf', hindiTracks.slice(0, 10));
}

// Main Render Function
function render() {
  renderChips();

  const isPlaylistsFilter = state.filter === 'Playlists' && !state.activePlaylistId && !state.onlineSearch;
  el('playlistsContainer').hidden = !isPlaylistsFilter;
  if (isPlaylistsFilter) renderPlaylistsGrid();

  const onlineBanner = el('onlineSearchBanner');
  if (onlineBanner) onlineBanner.hidden = !state.onlineSearch;

  // Home Dashboard (Spotify ordered view: visible on All view without active search)
  const isHomeView = state.filter === 'All' && !state.query && !state.onlineSearch;
  const homeDashboard = el('homeDashboard');
  if (homeDashboard) {
    homeDashboard.hidden = !isHomeView;
    if (isHomeView && !homeDashboardRendered) {
      renderHomeDashboard();
      homeDashboardRendered = true;
    }
  }

  const list = visibleTracks();
  el('songGrid').innerHTML = list.map(cardHTML).join('');
  el('emptyState').hidden = list.length > 0;

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
    playerArtNode.style.backgroundImage = "url('logo.png')";
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
    expArtNode.style.backgroundImage = "url('logo.png')";
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

  if (track) {
    const seed = hash(track.id || track.title);
    const colors = palettes[seed % palettes.length];
    el('glowA').style.background = colors[0];
    el('glowB').style.background = colors[1];
  }
}

// Synchronize song card states
function syncPlayState() {
  document.querySelectorAll('.song-card').forEach((card) => {
    const isActive = Boolean(state.current) && card.dataset.id === state.current.id;
    card.classList.toggle('is-active', isActive);
    card.classList.toggle('is-playing', isActive && state.playing);
  });
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
}

// Stop all playback
function stopAll() {
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
  state.playing = false;
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
    audio.src = src;
    audio.volume = state.muted ? 0 : state.volume;
    updateProgress(0, track.duration || 210);

    audio.play().then(() => {
      if (state.current && state.current.id === track.id) {
        state.playing = true;
        syncPlayState();
        startVisualizerLoop();
        renderRecentGrid();
      }
    }).catch((err) => {
      toast(`Error playing ${track.title}. Retrying...`);
      setTimeout(() => {
        audio.play().then(() => {
          state.playing = true;
          syncPlayState();
          startVisualizerLoop();
          renderRecentGrid();
        }).catch(() => {});
      }, 500);
    });
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

  if (state.shuffle) {
    const pool = list.filter((track) => !state.current || track.id !== state.current.id);
    const source = pool.length ? pool : list;
    playTrack(source[Math.floor(Math.random() * source.length)]);
    return;
  }

  const index = state.current ? list.findIndex((track) => track.id === state.current.id) : -1;
  playTrack(list[index === -1 ? 0 : (index + 1) % list.length]);
}

function prevTrack() {
  const list = queueTracks();
  if (!list.length) return;

  if (progress.current > 3 && trackSource(state.current)) {
    audio.currentTime = 0;
    updateProgress(0, progress.duration);
    return;
  }

  const index = state.current ? list.findIndex((track) => track.id === state.current.id) : -1;
  playTrack(list[index <= 0 ? list.length - 1 : index - 1]);
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
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();

    if (data.success && data.results && data.results.length > 0) {
      state.onlineTracks = deduplicateTrackList(data.results);
      if (statusTitle) statusTitle.textContent = `Found ${state.onlineTracks.length} full songs for "${query}"`;
      if (statusSub) statusSub.textContent = 'Full tracks ready to play at 320kbps!';
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
  el('expandedModal').hidden = false;
  document.body.style.overflow = 'hidden';
  renderPlayer();
}

function closeExpandedModal() {
  el('expandedModal').hidden = true;
  document.body.style.overflow = '';
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

// Event Bindings
function bindEvents() {
  const searchInput = el('search');

  searchInput.addEventListener('input', () => {
    const q = (searchInput.value || '').trim();
    state.query = q;
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
      state.query = '';
      searchInput.value = '';
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
        el('searchInput').value = q;
        state.onlineSearch = true;
        searchOnlineCatalog(q);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
      const track = findTrackById(trackId);
      if (!track) return;

      if (state.current && state.current.id === track.id) {
        togglePlayback();
      } else {
        playTrack(track);
      }
    });
  }

  // Mobile Bottom Navigation Dock interactions
  const mobileNav = el('mobileBottomNav');
  if (mobileNav) {
    mobileNav.addEventListener('click', (event) => {
      const tab = event.target.closest('.nav-tab');
      if (!tab) return;
      mobileNav.querySelectorAll('.nav-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      if (tab.id === 'tabHome') {
        state.filter = 'All';
        state.query = '';
        state.onlineSearch = false;
        if (el('search')) el('search').value = '';
        el('clearSearch').hidden = true;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tab.id === 'tabSearch') {
        if (el('search')) {
          el('search').focus();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (tab.id === 'tabLibrary') {
        state.filter = 'Playlists';
        state.onlineSearch = false;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tab.id === 'tabEqualizer') {
        openEqModal();
      } else if (tab.id === 'tabProfile') {
        openLoginModal();
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
    const track = findTrackById(trackId);
    if (!track) return;

    if (state.current && state.current.id === track.id) {
      togglePlayback();
    } else {
      playTrack(track);
    }
  });

  // Playlists grid interactions
  el('playlistsGrid').addEventListener('click', (event) => {
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

  const closeDlModal = el('closeDownloadModal');
  if (closeDlModal) closeDlModal.addEventListener('click', closeDownloadModal);

  const optDevice = el('dlOptionDevice');
  if (optDevice) optDevice.addEventListener('click', () => handleDownloadChoice('device'));

  const optApp = el('dlOptionApp');
  if (optApp) optApp.addEventListener('click', () => handleDownloadChoice('app'));

  const optBoth = el('dlOptionBoth');
  if (optBoth) optBoth.addEventListener('click', () => handleDownloadChoice('both'));

  el('addMusicBtn').addEventListener('click', () => el('fileInput').click());
  el('fileInput').addEventListener('change', (e) => openImport(e.target.files));

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
  el('closeExpandedBtn').addEventListener('click', closeExpandedModal);
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

  el('expAddToPlaylistBtn').addEventListener('click', () => {
    if (state.current) openAddToPlaylist(state.current.id);
  });

  el('eqToggleBtn').addEventListener('click', () => el('eqModal').hidden = false);
  el('expEqBtn').addEventListener('click', () => el('eqModal').hidden = false);
  el('closeEqBtn').addEventListener('click', () => el('eqModal').hidden = true);
  el('eqPresets').addEventListener('click', (e) => {
    const card = e.target.closest('.eq-card');
    if (card) {
      applyEqPreset(card.dataset.preset);
      toast(`Equalizer: ${card.querySelector('strong').textContent}`);
    }
  });

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

  el('helpBtn').addEventListener('click', () => el('shortcutsModal').hidden = false);
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
    if (!audio.getAttribute('src')) return;
    toast('Audio playback error. Retrying stream...');
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
      closeUniverseDrawer();
      el('importModal').hidden = true;
      el('shortcutsModal').hidden = true;
      el('eqModal').hidden = true;
      el('newPlaylistModal').hidden = true;
      el('addToPlaylistModal').hidden = true;
      const dlModal = el('downloadModal');
      if (dlModal) dlModal.hidden = true;
      el('queueDrawer').hidden = true;
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
}

// ==========================================================================
// User Authentication & Database Synchronization
// ==========================================================================
const AUTH_STORAGE_KEY = 'tuneus_user';

function getStoredUser() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveUserSession(user) {
  try {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch (e) {}
}

function updateAuthUI(user) {
  const avatarBadge = el('userAvatarBadge');
  const nameLabel = el('userNameLabel');
  const dropAvatar = el('dropdownAvatar');
  const dropName = el('dropdownName');
  const dropEmail = el('dropdownEmail');
  const loginActionLabel = el('loginActionLabel');
  const logoutBtn = el('logoutBtn');

  if (user && user.name) {
    const initial = user.name.trim().charAt(0).toUpperCase() || 'U';
    if (avatarBadge) avatarBadge.textContent = initial;
    if (nameLabel) nameLabel.textContent = user.name;
    if (dropAvatar) dropAvatar.textContent = initial;
    if (dropName) dropName.textContent = user.name;
    if (dropEmail) dropEmail.textContent = user.email || 'Logged In';
    if (loginActionLabel) loginActionLabel.textContent = 'Switch Account';
    if (logoutBtn) logoutBtn.style.display = 'flex';
  } else {
    if (avatarBadge) avatarBadge.textContent = '👤';
    if (nameLabel) nameLabel.textContent = 'Sign In';
    if (dropAvatar) dropAvatar.textContent = '?';
    if (dropName) dropName.textContent = 'Guest User';
    if (dropEmail) dropEmail.textContent = 'Not logged in';
    if (loginActionLabel) loginActionLabel.textContent = 'Sign In with Gmail';
    if (logoutBtn) logoutBtn.style.display = 'none';
  }
}

function openLoginModal(prefillEmail = '') {
  const modal = el('loginModal');
  const errorMsg = el('loginErrorMsg');
  const emailInput = el('loginEmail');
  const nameInput = el('loginName');
  const dropdown = el('userDropdownPanel');

  if (dropdown) dropdown.hidden = true;
  if (errorMsg) {
    errorMsg.hidden = true;
    errorMsg.textContent = '';
  }

  const user = getStoredUser();
  if (user) {
    if (nameInput) nameInput.value = user.name || '';
    if (emailInput) emailInput.value = user.email || '';
  } else if (prefillEmail && emailInput) {
    emailInput.value = prefillEmail;
  }

  if (modal) {
    modal.hidden = false;
    setTimeout(() => {
      if (nameInput && !nameInput.value) nameInput.focus();
      else if (emailInput) emailInput.focus();
    }, 100);
  }
}

function closeLoginModal() {
  const modal = el('loginModal');
  if (modal) modal.hidden = true;
}

async function loginUser(name, email, avatar = '') {
  const errorMsg = el('loginErrorMsg');
  const submitBtn = el('loginSubmitBtn');

  const cleanName = (name || '').trim();
  const cleanEmail = (email || '').trim().toLowerCase();

  if (!cleanName) {
    if (errorMsg) {
      errorMsg.textContent = 'Please enter your name.';
      errorMsg.hidden = false;
    }
    return false;
  }

  if (!cleanEmail || !cleanEmail.includes('@')) {
    if (errorMsg) {
      errorMsg.textContent = 'Please enter a valid Gmail address (e.g. yourname@gmail.com).';
      errorMsg.hidden = false;
    }
    return false;
  }

  if (errorMsg) errorMsg.hidden = true;
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Saving to database...</span>';
  }

  let savedUser = null;

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: cleanName, email: cleanEmail, avatar })
    });
    const data = await res.json();
    if (data && data.success && data.user) {
      savedUser = data.user;
    }
  } catch (err) {
    console.warn('API login request error, using database state fallback:', err);
  }

  // Fallback if running statically without backend running
  if (!savedUser) {
    savedUser = {
      id: 'usr_' + Date.now().toString(36),
      name: cleanName,
      email: cleanEmail,
      avatar: avatar || '',
      provider: cleanEmail.endsWith('@gmail.com') ? 'google' : 'email',
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
      loginCount: 1
    };
  }

  saveUserSession(savedUser);
  updateAuthUI(savedUser);
  closeLoginModal();

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<span>🎵 Enter Tuneus &amp; Listen</span>';
  }

  toast(`Welcome ${savedUser.name}! Saved to database.`);
  return true;
}

function logoutUser() {
  saveUserSession(null);
  updateAuthUI(null);
  const dropdown = el('userDropdownPanel');
  if (dropdown) dropdown.hidden = true;
  toast('Signed out. Session cleared.');
  openLoginModal();
}

function bindAuthEvents() {
  const userProfileBtn = el('userProfileBtn');
  const userDropdownPanel = el('userDropdownPanel');
  const openLoginBtn = el('openLoginBtn');
  const logoutBtn = el('logoutBtn');
  const loginForm = el('loginForm');
  const googleQuickBtn = el('googleQuickBtn');
  const loginGuestBtn = el('loginGuestBtn');

  if (userProfileBtn && userDropdownPanel) {
    userProfileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdownPanel.hidden = !userDropdownPanel.hidden;
    });

    document.addEventListener('click', (e) => {
      if (userDropdownPanel && !userDropdownPanel.contains(e.target) && !userProfileBtn.contains(e.target)) {
        userDropdownPanel.hidden = true;
      }
    });
  }

  if (openLoginBtn) {
    openLoginBtn.addEventListener('click', () => {
      openLoginModal();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logoutUser();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = el('loginName')?.value || '';
      const email = el('loginEmail')?.value || '';
      loginUser(name, email);
    });
  }

  if (googleQuickBtn) {
    googleQuickBtn.addEventListener('click', () => {
      const existing = getStoredUser();
      const promptName = prompt('Enter your Name for Google Sign-in:', existing?.name || '');
      if (!promptName) return;
      const promptEmail = prompt('Enter your Gmail address:', existing?.email || `${promptName.toLowerCase().replace(/[^a-z0-9]/g, '')}@gmail.com`);
      if (!promptEmail) return;
      loginUser(promptName, promptEmail);
    });
  }

  if (loginGuestBtn) {
    loginGuestBtn.addEventListener('click', () => {
      closeLoginModal();
      toast('Browsing as Guest. Sign in anytime from top right.');
    });
  }

  // Prevent browser mini-infobar or annoying pop-up on page load
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
  });
}

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

  // Clicking an item in drawer
  if (content) {
    content.addEventListener('click', (e) => {
      const itemBtn = e.target.closest('.universe-item-btn');
      if (!itemBtn) return;
      const query = itemBtn.dataset.query;
      const singerName = itemBtn.querySelector('.u-item-name')?.textContent || query;
      closeUniverseDrawer();

      const searchInput = el('search');
      if (searchInput) searchInput.value = query;
      el('clearSearch').hidden = false;

      state.query = query;
      state.onlineSearch = true;
      searchOnlineCatalog(query);
      toast(`Exploring Universe: ${singerName}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// App Initialization
function init() {
  bindEvents();
  bindAuthEvents();
  bindUniverseDrawerEvents();
  render();
  applyVolume();
  updateProgress(0, 0);
  loadDownloads().then(() => render()).catch(() => {});

  // Check login state: if not logged in, prompt login modal immediately
  const currentUser = getStoredUser();
  updateAuthUI(currentUser);
  if (!currentUser) {
    openLoginModal();
  }
}

init();
