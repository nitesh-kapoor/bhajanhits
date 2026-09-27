const categories=[
['🙏','Lord Ganesha','गणेश जी'],['🔱','Lord Shiva','शिव जी'],['🏹','Lord Rama','राम जी'],['🚩','Lord Hanuman','हनुमान जी'],['🪈','Lord Krishna','कृष्ण जी'],['🌸','Radha Rani','राधा रानी'],['🪷','Durga Maa','दुर्गा माँ'],['🪔','Lakshmi Maa','लक्ष्मी माँ'],['🦚','Saraswati Maa','सरस्वती माँ'],['📿','Sai Baba','साईं बाबा'],['☀️','Surya Dev','सूर्य देव'],['🛕','Khatu Shyam Ji','खाटू श्याम जी']];

const bhajans=[
{id:101,titleEn:'Veer Hanumana Ati Balwana',titleHi:'वीर हनुमाना अति बलवाना',god:'Lord Hanuman',godHi:'हनुमान जी',type:'Bhajan',desc:'A Hanuman bhajan from your personal collection.',source:'Your Bhajan Collection • PDF pp. 1–4',hindi:`वीर हनुमाना अति बलवाना,
राम नाम रसियो रे,
प्रभु मन बसियो रे।

जो कोई आवे, अरज लगावे,
सबकी सुनियो रे,
प्रभु मन बसियो रे।

बजरंग बाला फेरूँ थारी माला,
संकट हरियो रे,
प्रभु मन बसियो रे।

ना कोई संगी, हाथ की तंगी,
जल्दी हरियो रे,
प्रभु मन बसियो रे।

अर्जी हमारी, मर्जी तुम्हारी,
कृपा करियो रे,
प्रभु मन बसियो रे।

रामजी का प्यारा, सिया का दुलारा,
संकट हरियो रे,
प्रभु मन बसियो रे।

वीर हनुमाना अति बलवाना,
राम नाम रसियो रे,
प्रभु मन बसियो रे।`,roman:`Veer Hanumana ati balwana,
Ram naam rasiyo re,
Prabhu man basiyo re.

Jo koi aave, araj lagaave,
Sabki suniyo re,
Prabhu man basiyo re.

Bajrang Bala pherun thari mala,
Sankat hariyo re,
Prabhu man basiyo re.

Na koi sangi, haath ki tangi,
Jaldi hariyo re,
Prabhu man basiyo re.

Arji hamari, marzi tumhari,
Kripa kariyo re,
Prabhu man basiyo re.

Ramji ka pyara, Siya ka dulara,
Sankat hariyo re,
Prabhu man basiyo re.

Veer Hanumana ati balwana,
Ram naam rasiyo re,
Prabhu man basiyo re.`},

{id:102,titleEn:'Duniya Chale Na Shri Ram Ke Bina',titleHi:'दुनिया चले ना श्री राम के बिना',god:'Lord Hanuman',godHi:'हनुमान जी',type:'Bhajan',desc:'A Ram–Hanuman bhajan from your personal collection.',source:'Your Bhajan Collection • PDF pp. 5–6',hindi:`इस भजन का हिंदी (देवनागरी) पाठ आपके PDF में उपलब्ध नहीं है।

English / Romanized टैब में आपके संग्रह का मूल पाठ उपलब्ध है।`,roman:`Duniya chale na Shri Ram ke bina
Ramji chale na Hanuman ke bina

Jab se Ramayan padh li hai
Ek baat maine samajh li hai
Ravan mare na Shri Ram ke bina
Lanka jale na Hanuman ke bina

Duniya chale na Shri Ram ke bina
Ramji chale na Hanuman ke bina

Lakshman ka bachna mushkil tha
Kaun booti lane ke kabil tha
Lakshman bache na Shri Ram ke bina
Booti mile na Hanuman ke bina

Sita haran ki kahani suno
Banwari meri jubani suno
Duniya chale na Shri Ram ke bina
Ramji chale na Hanuman ke bina

Bhakti mile na Hanuman ke bina
Duniya chale na Shri Ram ke bina
Ramji chale na Hanuman ke bina`},

{id:103,titleEn:'Shri Ram Janki Baithe Hain Mere Seene Mein',titleHi:'श्री राम जानकी बैठे हैं मेरे सीने में',god:'Lord Hanuman',godHi:'हनुमान जी',type:'Bhajan',desc:'A devotional Hanuman bhajan centered on Siya-Ram bhakti.',source:'Your Bhajan Collection • PDF pp. 7–9',hindi:`इस भजन का हिंदी (देवनागरी) पाठ आपके PDF में उपलब्ध नहीं है।

English / Romanized टैब में आपके संग्रह का मूल पाठ उपलब्ध है।`,roman:`Nahin chalao baan vyang ke, ai Vibhishan
Tana na seh paoon, kyon todi hai yah mala
Tujhe ai Lankapati batlaoon
Mujh mein bhi hai, tujh mein bhi hai, sab mein hai samjhaoon
Ai Lankapati Vibhishan, le dekh main tujhko aaj dikhaoon
Jai Shri Ram...

Shri Ram Janki baithe hain mere seene mein,
Dekh lo mere man ke nagine mein.

Mujhko kirti na vaibhav na yash chahiye,
Ram ke naam ka mujhko ras chahiye.
Sukh mile aise amrit ko peene mein,
Shri Ram Janki baithe hain mere seene mein.

Anmol koi bhi cheez mere kaam ki nahin,
Dikhti agar usme chhavi Siya Ram ki nahin.
Ram rasiya hoon main, Ram sumiran karun,
Siya Ram ka sada hi main chintan karun.
Sachcha anand hai aise jeene mein,
Shri Ram Janki baithe hain mere seene mein.

Phaad seena sabko yah dikhla diya,
Bhakti mein hai masti, bedhadak dikhla diya.
Shri Ram Janki baithe hain mere seene mein,
Dekh lo mere man ke nagine mein.`},

{id:104,titleEn:'Hey Dukh Bhanjan Maruti Nandan',titleHi:'हे दुःख भंजन मारुति नंदन',god:'Lord Hanuman',godHi:'हनुमान जी',type:'Bhajan',desc:'A prayerful appeal to Maruti Nandan from your collection.',source:'Your Bhajan Collection • PDF pp. 10–11',hindi:`इस भजन का हिंदी (देवनागरी) पाठ आपके PDF में उपलब्ध नहीं है।

English / Romanized टैब में आपके संग्रह का मूल पाठ उपलब्ध है।`,roman:`Hey dukh bhanjan Maruti Nandan,
Sun lo meri pukar,
Pawansut vinti baarambaar.

Asht siddhi nav nidhi ke data,
Dukhiyon ke tum bhagya vidhata,
Siya Ram ke kaaj sanwaren,
Mera kar uddhar,
Pawansut vinti baarambaar.

Aprampar hai shakti tumhari,
Tum par reejhe Awadh Bihari,
Bhakti bhav se dhyaoon tohe,
Kar dukhon se paar,
Pawansut vinti baarambaar.

Japu nirantar naam tihara,
Ab nahin chhodun tera dwar,
Ram bhakt mohe sharan mein lije,
Bhav sagar se taar,
Pawansut vinti baarambaar.`},

{id:105,titleEn:'Mere Ghar Ram Aaye Hain',titleHi:'मेरे घर राम आए हैं',god:'Lord Rama',godHi:'राम जी',type:'Bhajan',desc:'A welcoming Lord Rama bhajan from your personal collection.',source:'Your Bhajan Collection • PDF pp. 12–15',hindi:`इस भजन का हिंदी (देवनागरी) पाठ आपके PDF में उपलब्ध नहीं है।

English / Romanized टैब में आपके संग्रह का मूल पाठ उपलब्ध है।`,roman:`Meri chaukhat pe chal ke aaj
Charo dham aaye hain
Bajao dhol swagat mein
Mere ghar Ram aaye hain

Katha Shabri ki jaise
Judd gayi meri kahani se
Na roko aaj dhone do charan
Aankhon ke paani se

Bahut khush hain mere aansu
Ke Prabhu ke kaam aaye hain
Bajao dhol swagat mein
Mere ghar Ram aaye hain

Tumko paa ke kya paya hai
Srishti ke kan-kan se puchho
Tumko khone ka dukh kya hai
Kausalya ke man se puchho

Dwaar mere ye abhage
Aaj inke bhaag jaage
Badi lambi intezaari hui
Raghuvar tumhari tab aayi hai sawaari

Darshan paa ke hey Avtaari
Dhani hue hain nain pujaari
Jeevan naiya tumne taari
Mangal Bhawan Amangal Haari

Nirdhan ka tum dhan ho Raghav
Tum hi Ramayan ho Raghav
Sab dukh harna Awadh Bihari
Mangal Bhawan Amangal Haari

Charan ki dhool le loon main
Mere Bhagwan aaye hain
Bajao dhol swagat mein
Mere ghar Ram aaye hain.`},

{id:106,titleEn:'Nagri Ho Ayodhya Si',titleHi:'नगरी हो अयोध्या सी',god:'Lord Rama',godHi:'राम जी',type:'Bhajan',desc:'A prayer envisioning a home filled with the virtues of Ramayana.',source:'Your Bhajan Collection • PDF pp. 16–17',hindi:`लक्ष्मण सा भाई हो, कौशल्या माई हो,
स्वामी तुम जैसा मेरा रघुराई हो।

नगरी हो अयोध्या सी, रघुकुल सा घराना हो,
चरण हो राघव के, जहाँ मेरा ठिकाना हो।

हो त्याग भरत जैसा, सीता सी नारी हो,
लव कुश के जैसी संतान हमारी हो।
श्रद्धा हो श्रवण जैसी, शबरी सी भक्ति हो,
हनुमान के जैसी निष्ठा और शक्ति हो।

मेरी जीवन नैया हो,
प्रभु राम खेवैया हो,
राम कृपा की सदा मेरे सिर पर छैयाँ हो।

सरयू का किनारा हो,
निर्मल जल धारा हो,
दर्श मुझे भगवान जिस घड़ी तुम्हारा हो।

नगरी हो अयोध्या सी, रघुकुल सा घराना हो,
चरण हो राघव के, जहाँ मेरा ठिकाना हो।`,roman:`Lakshman sa bhai ho, Kausalya mai ho,
Swami tum jaisa mera Raghurai ho.

Nagri ho Ayodhya si, Raghukul sa gharana ho,
Charan ho Raghav ke, jahan mera thikana ho.

Ho tyag Bharat jaisa, Sita si nari ho,
Lav Kush ke jaisi santan hamari ho.
Shraddha ho Shravan jaisi, Shabri si bhakti ho,
Hanuman ke jaisi nishtha aur shakti ho.

Meri jeevan naiya ho,
Prabhu Ram khevaiya ho,
Ram kripa ki sada mere sir par chhaiya ho.

Saryu ka kinara ho,
Nirmal jal dhara ho,
Darsh mujhe Bhagwan jis ghadi tumhara ho.

Nagri ho Ayodhya si, Raghukul sa gharana ho,
Charan ho Raghav ke, jahan mera thikana ho.`},

{id:107,titleEn:'Meri Jhopdi Ke Bhaag',titleHi:'मेरी झोपड़ी के भाग',god:'Lord Rama',godHi:'राम जी',type:'Bhajan',desc:'A joyful bhajan celebrating the arrival of Lord Rama.',source:'Your Bhajan Collection • PDF pp. 18–21 (Ram version)',hindi:`मेरी झोपड़ी के भाग,
आज खुल जाएंगे,
राम आएँगे,
राम आएँगे आएँगे,
राम आएँगे।

राम आएँगे तो,
आँगना सजाऊँगी,
दीप जलाके,
दिवाली मनाऊँगी,
मेरे जन्मों के सारे,
पाप मिट जाएंगे,
राम आएँगे।

राम झूलेंगे तो,
पालना झुलाऊँगी,
मीठे मीठे मैं,
भजन सुनाऊँगी,
मेरी जिंदगी के,
सारे दुःख मिट जाएँगे,
राम आएँगे।

मैं तो रुचि रुचि,
भोग लगाऊँगी,
माखन मिश्री मैं,
राम को खिलाऊँगी।

मेरा जनम सफल हो जाएगा,
तन झूमेगा और मन गीत गाएगा,
राम सुंदर मेरी किस्मत चमकाएंगे,
राम आएँगे।`,roman:`Meri jhopdi ke bhaag,
Aaj khul jayenge,
Ram aayenge,
Ram aayenge aayenge,
Ram aayenge.

Ram aayenge to,
Aangana sajaungi,
Deep jalake,
Diwali manaungi,
Mere janmon ke saare,
Paap mit jayenge,
Ram aayenge.

Ram jhoolenge to,
Palna jhulaungi,
Meethe meethe main,
Bhajan sunaungi,
Meri zindagi ke,
Saare dukh mit jayenge,
Ram aayenge.

Main to ruchi ruchi,
Bhog lagaungi,
Makhan mishri main,
Ram ko khilaungi.

Mera janam safal ho jayega,
Tan jhoomega aur man geet gayega,
Ram Sundar meri kismat chamkayenge,
Ram aayenge.`},

{id:108,titleEn:'Mangalwar Tera Hai Shanivar Tera Hai',titleHi:'मंगलवार तेरा है शनिवार तेरा है',god:'Lord Hanuman',godHi:'हनुमान जी',type:'Bhajan',desc:'A Balaji/Hanuman bhajan from your personal collection.',source:'Your Bhajan Collection • PDF pp. 27–28',hindi:`मंगलवार तेरा है शनिवार तेरा है,
बजरंगी संभालो परिवार तेरा है।

मंगलवार को मंदिर में आऊँगा मैं,
शनिवार सिंदूर चढ़ाऊँगा मैं।
मंगलवार तेरा है शनिवार तेरा है,
हम गरीबों पे बाबा उपकार तेरा है॥

यह नैया छोड़ी है तेरे सहारे,
अब लगाने पड़ेगी किनारे।
मंगलवार तेरा है शनिवार तेरा है,
साँचा साँचा बालाजी परिवार तेरा है॥

तूने संकट में साथ निभाया,
और मुसीबत से हमको बचाया।
मंगलवार तेरा है शनिवार तेरा है,
बजरंगी हमें तो आधार तेरा है॥

हम गरीबों का तू है सहारा,
सच्चा साथी समझ के पुकारा।
मंगलवार तेरा है शनिवार तेरा है,
बनवारी बता दो क्या विचार तेरा है॥`,roman:`Mangalwar tera hai, Shanivar tera hai,
Bajrangi sambhalo, parivar tera hai.

Mangalwar ko mandir mein aaunga main,
Shanivar sindoor chadhaunga main.
Mangalwar tera hai, Shanivar tera hai,
Hum gareebon pe Baba upkar tera hai.

Yeh naiya chhodi hai tere sahare,
Ab lagane padegi kinare.
Mangalwar tera hai, Shanivar tera hai,
Sancha Sancha Balaji parivar tera hai.

Tune sankat mein saath nibhaya,
Aur museebat se humko bachaya.
Mangalwar tera hai, Shanivar tera hai,
Bajrangi hamein to aadhar tera hai.

Hum gareebon ka tu hai sahara,
Sachcha saathi samajh ke pukara.
Mangalwar tera hai, Shanivar tera hai,
Banwari bata do kya vichar tera hai.`}
];

// Collection additions: supplied PDF and images, September 26, 2026.
bhajans.push(...[
  {
    "id": 109,
    "titleEn": "Bhajan Medley",
    "titleHi": "",
    "god": "Multiple Deities",
    "deities": [
      "Lord Rama",
      "Lord Krishna",
      "Lord Hanuman",
      "Radha Rani",
      "Sai Baba",
      "Lord Shiva"
    ],
    "type": "Bhajan",
    "desc": "A continuous singing medley, in the original sequence. Includes short devotional excerpts and repeated Ram refrains; these are not complete standalone versions. Original spellings and repetition cues are preserved.",
    "source": "Your collection • Bhajan-Medley (2).pdf, pages 1–3",
    "hindi": "",
    "roman": "Ram ram jai raja ram, ram ram jia sita ram -3\n\nShri Krishna Govinda Hare Murari He Nath Narayan Vasudeva-2\nTumse hain dharti tumse hain ambar-2\nAgni pawan aur saare samundar -2\nHe Nath Narayan Vasudeva\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nKrishan Govind-2 Gopala\nKrishna murli manohar nand lala\nKrishan Govind-2 Gopala\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nVeer Hanumana Ati Balwana-2\nRam Naam Rasiyo Re, Prabhu Man Basiyo Re-2\nVeer Hanumana Ati Balwana-2\nRam Naam Rasiyo Re,Prabhu Man Basiyo Re\nJo Koi Aave, Araj Lagave-2\nSabaki Suniyo Re, Prabhu Man Basiyo Re -2\nJo Koi Aave, Araj Lagave,\nSabaki Suniyo Re,\nPrabhu Man Basiyo Re ।\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nSankat kate mite sab peera,Jo sumirai Hanumat Balbeera\nJai Jai Jai Hanuman Gosahin ,Kripa Karahu Gurudev ki nyahin\nJo sat bar path kare kohi,Chutehi bandhi maha sukh hohi\nJo yah padhe Hanuman Chalisa,Hoye siddhi sakhi Gaureesa\nTulsidas sada hari chera,Keejai Das Hrdaye mein dera\nMangal bhavan amangal haari, Drabahu su Dasharath achar Bihari\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nYamunaji To Kaadi Kaadi, Raadha Gori Gori-2\nVrindavan Mein Dhoom Machave, Barsane Ki Chori-2\nVraj Dhaam Raadhajuki, Vraj Dhaani Laage, Vraj Dhaani Laage\nMane Pyaaro Pyaaro, Yamunaji-no Paani Laage\nMithe Ras Se Bharori, Raadha Raani Laage, Raadha Raani Laage\nMane Kaaro Kaaro, Yamunaji-no Paani Laage\nMithe Ras Se Bharori, Raadha Raani Laage, Raadha Raani Laage\nMane Kaaro Kaaro, Yamunaji-no Paani Laage\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nRam Aayenge to, Angana Sajaunga\nDeep Jalake, Diwali Main Manaungi,\nMere Janmo Ke Saare, Paap Mit Jayenge~\nRam Aayenge.\nMeri jhopdi ke bhaag aaj khul jayenge, Ram ayenge\nMeri jhopdi ke bhaag aaj khul jayenge, Ram ayenge\nRam ayenge-ayenge, Ram ayenge\nRam ayenge-ayenge, Ram ayenge\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nKaun kehta hai Bhagvan aate nahi\nTum Meera ke jaise bulate nahi\nAchyutam Keshavam Krishna Damodaram\nRama naraynam Janaki vallabham\nKaun kehta hai Bhagvan Nachthe nahi\nGopiyo ki tarah tum Nachathae nahi\nAchyutam Keshavam Krishna Damodaram\nRama naraynam Janaki vallabham\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nJab khidki kholun toh Tera darshan hojaye -\nJab khidki kholun toh Tera darshan hojaye -\nMere ghar ke -2\nMere ghar ke aage sai nath Tera mandir banjaye …\nAate jaate baba Tumko main pranaam karun -2\nJo mere laayak ho Kuch aisa kaam karun -2\nTeri Sewa karne se Meri kismat khuljaye -2\nJab khidki kholun toh Tera darshan hojaye -\nJab khidki kholun toh Tera darshan hojaye -\nMere ghar ke -2\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nLal jhule lal, jhule lal jhele lal -4\nO Laal Meri Pat\nRakhio Bala Jhoole Laalan\nO Laal Meri…\nO Laal Meri Pat\nRakhio Bala Jhoole Laalan\nSindri Da.. Sehvan Da\nSakhi Shabaaz Kalandar\nDama Dam Mast Kalandar\nAli Dam Dam De Aandar\nDama Dam Mast Kalandar\nAli Da Pehla Number\nO Laal Meri\nO O O O Laal Meri\nChaar Charaag Tere Baran Hamesha\nChaar Charaag Tere Baran Hamesha\nPanjwa Mein Baaran,\nAayi Bala Jhoole Laalan\nSindri Da, Sehvan Da\nSakhi Shabaaz Qalandar\nDama Dam Mast Qalandar\nAli Dam Dam De Andar\nDama Dam Mast Qalandar\nAli Da Pehla Number\nO Laal Meri\nO O O O Laal Meri\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nJai Jai shiv shambhoo-2, maha dev shambhoo-2\n\nRam ram jai raja ram, ram ram jia sita ram -3\n\nHare Rama, hare rama\nRama rama hare hare\nHare krishna, hare krishan\nKrishna krishna hare hare"
  },
  {
    "id": 110,
    "titleEn": "Mandir Mein Baithi Maiya Ji Aasan Lagai Ke",
    "titleHi": "मंदिर में बैठी मैया जी आसन लगाई के",
    "god": "Durga Maa",
    "godHi": "दुर्गा माँ",
    "type": "Bhajan",
    "desc": "Navratri bhajan transcribed from the supplied Hindi poster. No Romanized lyrics were supplied.",
    "source": "Your collection • Navratri poster credited to Tanu Negi",
    "hindi": "मंदिर में बैठी मैया जी आसन लगाई के\nहम सब मनाए मैया को ताली बजाई के\n\nओ हो शंकर मनाए मैया को डमरू बजाए के\nहम सब मनाए मैया को ताली बजाई के\n\nओ कान्हा मनाए राधा को मुरली बजाए के\nहम सब मनाए मैया को ताली बजाई के\n\nओ विष्णु मनाए लक्ष्मी को चक्र चलाए के\nहम सब मनाए मैया को ताली बजाई के\n\nओ राम जी मनाए सीता को धनुष चलाए के\nहम सब मनाए मैया को ताली बजाई के\n\nओ श्रवण मनाए मैया को ढोलक बजाई के\nहम सब मनाए मैया को ताली बजाई के",
    "roman": ""
  },
  {
    "id": 111,
    "titleEn": "Ganpati Ki Jai Jaikar",
    "titleHi": "गणपति की जय जयकार",
    "god": "Lord Ganesha",
    "godHi": "गणेश जी",
    "type": "Bhajan",
    "desc": "Counting bhajan (1–20), transcribed from the supplied screenshot. The Hindi line for 9–12 includes two alternatives; the supplied Romanized version includes only “sabse pyaare”.",
    "source": "Your collection • Supplied Ganpati counting-bhajan screenshot",
    "hindi": "1, 2, 3, 4 – गणपति की जय जयकार\n\n5, 6, 7, 8 – गणपति हमारे साथ\n\n9, 10, 11, 12 – गणपति हैं सबसे प्यारे / सब से न्यारे\n\n13, 14, 15, 16 – गणपति सबसे भोला\n\n17, 18, 19, 20 – आओ मिलकर बोलो बप्पा की जय",
    "roman": "Ek, do, teen, char – Ganpati ki jai jaikar\n\nPaanch, chey, saat, aath – Ganpati hamare saath\n\nNau, das, gyarah, barah – Ganpati hain sabse pyaare\n\nTerah, choudah, pandrah, solah – Ganpati sabse bhola\n\nSatrah, athrah, unnis, bees – Aao milkar bolo Bappa ki jai"
  }
]);

// Additions from the user-supplied WhatsApp ZIP.
bhajans.push(...[
  {
    "id": 112,
    "titleEn": "Sone Ka Mandir Tera Chandi Ki Deewar",
    "titleHi": "सोने का मंदिर तेरा चाँदी की दीवार",
    "god": "Durga Maa",
    "godHi": "दुर्गा माँ",
    "type": "Bhajan",
    "source": "Your collection • Supplied poster credited to Chanchal Sharma",
    "desc": "Hindi lyrics from the supplied Mata Rani poster. Printed refrain shortcuts are preserved; no Romanized lyrics were supplied.",
    "hindi": "सोने का मंदिर तेरा चाँदी की दीवार है,\nरंग तेरा देख के रूप तेरा देख के सब भक्त हैरान हैं,\nमाथे पे तेरे मुकुट विराजे, बिंदिया का रंग लाल है,\nरंग तेरा देख के रूप तेरा देख के सब भक्त हैरान हैं,\nसोने का मंदिर......\n\nकानों में तेरे कुण्डल विराजे, नथिया का रंग लाल है,\nरंग तेरा देख के रूप तेरा देख के सब भक्त हैरान हैं,\nसोने का मंदिर......\n\nगले में तेरे हार विराजे माला का रंग लाल है,\nरंग तेरा देख के रूप तेरा....\nसोने का मंदिर......\n\nहाथों में तेरे कंगन विराजे मेहंदी का रंग लाल है,\nरंग तेरा देख के रूप तेरा....\nसोने का मंदिर......",
    "roman": ""
  },
  {
    "id": 113,
    "titleEn": "Kitni Sundar Hai Maa Teri Nagri",
    "titleHi": "कितनी सुंदर है मां तेरी नगरी",
    "god": "Lord Shiva",
    "godHi": "शिव जी",
    "deities": [
      "Lord Shiva",
      "Durga Maa"
    ],
    "type": "Bhajan",
    "source": "Your collection • Supplied screenshot shared by Poonam Devi",
    "desc": "Visible Hindi verses from the supplied screenshot. The final repeated refrain is partly covered by social-media controls and is omitted. No missing text or Romanized version has been invented.",
    "hindi": "कितनी सुंदर है मां तेरी नगरी\nभोले पैदल चले आ रहे।\n\nउनकी जटा में गंगा विराजे\nवो बहाते चले आ रहे हैं।\n\nउनके माथे पे चन्दा विराजे\nवो चमकाते चले आ रहे हैं।\n\nउनके कानों में बिच्छू विराजे\nवो लटकाते चले आ रहे हैं।\n\nउनके गले में नाग विराजे\nवो लहराते चले आ रहे हैं।\n\nउनके हाथों में डमरू विराजे\nवो बजाते चले आ रहे हैं।\n\nउनके अंगों में बाघछाला\nवो पहनकर चले आ रहे हैं।",
    "roman": ""
  },
  {
    "id": 114,
    "titleEn": "Palki Mein Hoke Sawar Chali Re",
    "titleHi": "पालकी में होके सवार चली रे",
    "god": "Durga Maa",
    "godHi": "दुर्गा माँ",
    "type": "Bhajan",
    "source": "Your collection • Supplied poster watermarked Beats of Serenity, shared by Ranjana Bhargava",
    "desc": "Hindi lyrics transcribed from the supplied Maa poster. Source wording and refrain shortcuts are retained. No Romanized lyrics were supplied.",
    "hindi": "पालकी में होके सवार चली रे,\nमें तो अपनी मैया के द्वार चली रे\nकोई रोक सके तो रौक ले\nमें नाच उठी छम छम छम,\nपालकी में होके सवार चली,\n\nबागों से जोके फूल ले आई,\nचुन चुन कलियों में हार बनाई\nमैया को हार पहनाने चली रे,\nमें तो अपनी मैया के द्वार चली रे\nपालकी में हो के सवार ...\n\nजयपुर शहर से चुनरी मंगाई,\nप्यारा सा उसमे गोटा लगाई\nमैया को चुनरी ओढ़ाने चली रे,\nमें तो अपनी मैया के द्वार चली रे\nपालकी में होके सवार..\n\nऊंची चढ़ाइयां में तो चढ़ गई\nमें तो अपनी मैया के भवन पर आ गई\nमैया जी का दर्शन पाने चली रे\nमें तो अपनी मैया के द्वार चली रे,\nपालकी में होके सवार..",
    "roman": ""
  }
]);
// Supplied bahajans-lyrcis.pdf: 11 entries; pages 5 and 14 are blank.
categories.push(["🙏","Guru & Family","मात पिता गुरु"]);
bhajans.push(...[
  {
    "id": 115,
    "titleEn": "Achyutam Keshavam",
    "titleHi": "",
    "god": "Lord Krishna",
    "type": "Bhajan",
    "hindi": "",
    "roman": "Achyutam Keshavam Krishna Damodaram\n\nRama Naraynam Janaki Vallabham\n\nKaun Kehta Hai Bhagvan Aate Nahi\n\nTum Meera Ke Jaise Bulate Nahi\n\nAchyutam Keshavam Krishna Damodaram\n\nRama Naraynam Janakivallabham\n\nKaun Kehta Hai Bhagvan Khaate Nahi\n\nBer Shabri Ke Jaise Khilate Nahi\n\nAchyutam Keshavam Krishna Damodaram\n\nRama Naraynam Janaki Vallabham\n\nKaun Kehta Hai Bhagvan Sote Nahi\n\nMaa Yashoda Ke Jaise Sulate Nahin\n\nAchyutam Keshavam Krishna Damodaram\n\nRama Naraynam Janaki Vallabham\n\nKaun Kehta Hai Bhagvan Nachthe Nahi\n\nGopiyo Ki Tarah Tum Nachathae Nahi\n\nAchyutam Keshavam Krishna Damodaram,\n\nRama Naraynam Janaki Vallabham,\n\nAchyutam Keshavam Krishna Damodaram,\n\nRama Naraynam Janaki Vallabham,\n\nRama Naraynam Janaki Vallabham",
    "source": "Your collection • bahajans-lyrcis.pdf, page 1",
    "desc": "Romanized lyrics from the supplied PDF. Columns read top to bottom, then left to right. Source spelling and repetition cues preserved. No Hindi lyrics were supplied."
  },
  {
    "id": 116,
    "titleEn": "Mera Aapki Kripa Se",
    "titleHi": "",
    "god": "Lord Krishna",
    "type": "Bhajan",
    "hindi": "",
    "roman": "Mera Aapki Kripa Se\nSab Kaam Ho Raha Hai\nMera Aapki Kripa\nSe Sab Kaam Ho Raha\nHai\n\nKarte Ho Tum Kanhaiya\nMera Naam Ho Raha Hai\nKarte Ho Tum Kanhaiya\nMera Naam Ho Raha Hai\n\nMera Aapki Kripa Se\nSab Kaam Ho Raha Hai\nMera Aapki Kripa Se\nSab Kaam Ho Raha Hai\n\nPatwaar Ke Bina Hi\nMeri Naav Yeh Chal Rahi\nHai\nHairan Hai Zamana\n\nManzil Bhi Mil Rahi Hai\nHairan Hai Zamana\nManzil Bhi Mil Rahi Hai\n\nKarta Nahi Main Kuch Bhi\nSab Kaam Ho Raha Hai\nKarta Nahi Main Kuch Bhi\nSab Kaam Ho Raha Hai\nKarte Ho Tum Kanhaiya\n\nMera Naam Ho Raha Hai\nKarte Ho Tum Kanhaiya\nMera Naam Ho Raha Hai\nMera Aapki Kripa Se\nSab Kaam Ho Raha Hai\nMera Aapki Kripa Se\nSab Kaam Ho Raha Hai\n\nTum Saath Ho Jo Mere\nKis Cheez Ki Kami Hai\nTum Saath Ho Jo Mere\n\nKis Cheez Ki Kami Hai\nKisi Aur Cheez Ki Ab\nDarkaar Hi Nahi Hai\nKisi Aur Cheez Ki Ab\nDarkaar Hi Nahi Hai\n\nTere Saath Ghulam Ab\nGulfaam Ho Raha Hai\nTere Saath Ghulam Ab\nGulfaam Ho Raha Hai\n\nKarte Ho Tum Kanhaiya\nMera Naam Ho Raha Hai\nKarte Ho Tum Kanhaiya\nMera Naam Ho Raha Hai\n\nMera Aapki Kripa Se\nSab Kaam Ho Raha Hai\nMera Aapki Kripa Se\nSab Kaam Ho Raha Hai\n\nMain Toh Nahin Hoon\nKaabil\nTera Paar Kaise Paau\nMain Toh Nahin Hoon\nKaabil\nTera Paar Kaise Paau\n\nTuti Hui Vaani Se\nGungun Kaise Gaau\nTuti Hui Vaani Se\nGungun Kaise Gaau\n\nTeri Prerna Se Hi\nYeh Kamaal Ho Raha Hai\nTeri Prerna Se Hi\nYeh Kamaal Ho Raha Hai\n\nKarte Ho Tum Kanhaiya\nMera Naam Ho Raha Hai\nKarte Ho Tum Kanhaiya\nMera Naam Ho Raha Hai\n\nMera Aapki Kripa Se\nSab Kaam Ho Raha Hai\nMera Aapki Kripa Se\nSab Kaam Ho Raha Hai",
    "source": "Your collection • bahajans-lyrcis.pdf, page 2",
    "desc": "Romanized lyrics from the supplied PDF. Columns read top to bottom, then left to right. Source spelling and repetition cues preserved. No Hindi lyrics were supplied."
  },
  {
    "id": 117,
    "titleEn": "Aisi Lagi Lagan",
    "titleHi": "ऐसी लागी लगन",
    "god": "Lord Krishna",
    "type": "Bhajan",
    "hindi": "है आँख वो जो श्याम का दर्शन किया करे\nहै शीश, जो प्रभु चरण में वंदन किया करे\nबेकार वो मुख है जो रहे व्यर्थ बातों में\nमुख वो है जो हरि नाम का सुमिरन किया करे\nहीरे-मोती से नहीं शोभा है हाथ की\nहै हाथ, जो भगवान का पूजन किया करे\nमर कर भी अमर नाम है उस जीव का जग में\nप्रभु प्रेम में बलिदान जो जीवन किया करे\n\nऐसी लागी लगन मीरा हो गई मगन\nवो तो गली-गली हरि गुन गाने लगी\nऐसी लागी लगन मीरा हो गई मगन\nवो तो गली-गली हरि गुन गाने लगी\n\nमहलों में पली, बन के जोगन चली\nमीरा रानी दीवानी कहाने लगी\nऐसी लागी लगन मीरा हो गई मगन\nकोई रोके नहीं, कोई टोके नहीं\nमीरा गोविंद-गोपाल गाने लगी\nकोई रोके नहीं, कोई टोके नहीं\nमीरा गोविंद-गोपाल गाने लगी\nबैठी संतों के संग, रंगी मोहन के रंग\nमीरा प्रेमी-प्रीतम को मनाने लगी\nवो तो गली-गली हरि गुन लगी\n\nऐसी लागी लगन मीरा हो गई मगन\nवो तो गली-गली हरि गुन गाने लगी\nमहलों में पली, बन के जोगन चली\nमीरा रानी दीवानी कहाने लगी\nऐसी लागी लगन मीरा हो गई मगन\n\nराणा ने विष दिया, मानो अमृत पिया\nमीरा सागर में सरिता समाने लगी\nराणा ने विष दिया, मानो अमृत पिया\nमीरा सागर में सरिता समाने लगी\nदुख लाखों सहे, मुख से \"गोविंद\" कहे\nमीरा गोविंद-गोपाल गाने लगी\nवो तो गली-गली हरि गुन गाने लगी\n\nऐसी लागी लगन मीरा हो गई मगन\nवो तो गली-गली हरि गुन गाने लगी\nमहलों में पली, बन के जोगन चली\nमीरा रानी दीवानी कहाने लगी\nऐसी लागी लगन मीरा हो गई मगन\nऐसी लागी लगन मीरा हो गई मगन\nऐसी लागी लगन मीरा हो गई मगन",
    "roman": "",
    "source": "Your collection • bahajans-lyrcis.pdf, page 3",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. No Romanized lyrics were supplied."
  },
  {
    "id": 118,
    "titleEn": "Rang De Chunaria",
    "titleHi": "",
    "god": "Lord Krishna",
    "type": "Bhajan",
    "hindi": "",
    "roman": "Rang de chunaria... (3)\nRang de (6)\nRang de chunaria...\nRang de (8)\nRang de chunaria\nRang de chunaria...\nRang de chunaria...\nRang de chunaria (2)\nShyam Piya More Rang de Chunaria\n(2)\nRang de chunaria(2)\nShyam Piya more Rang de Chunaria\n(2)\n\nAisi rang de ke rang nahi choote\nAisi rang de rang de rang de ke rang\nnahi choote\nDhobiya dooye chahe ye sari umariya\n(2)\n\nOh shyam piya more rang de chunaria\nShyam piya more rang de chunaria\nRang de (5)\nRang de chunaria\n\nLal na rangavu mei\nHari na rangavu\nApne hi rang me rang de chunaria (2)\n\nOh shyam piya more rang de chunaria\nShyam piya more rang de (chunaria)\n(6)\nRang de (9)\nRang de chunaria\nBina rangaye mai to ghar nahi javongi\nBina... Rangaye mai to ghar nahi...\nJavongi\nPa pa da nida dapa\nPa da ma pa gama pa\n\nPa da ma pa ga ma ri\nGa ma riga sa ni sa\n\nShyam piya more rang de chunaria\nMira ke prabhu giridhar nagar\n\nJal se patla koun hai\nKoun bhumi se bhari\nKoun agn se tej hai\nKoun kajal se kali\n\nJal se patla... Patla (3)\nJal se patla jnan hai\nAur paap bhumi se bhari\nKrodh agn se tej hai\nAur kalank kajal se kali\n\nMira k prabhu giridhar nagar\nPrabhu charanan me hari charanan\nme\nShyam charanan me lagi nazariya\nOh Sham piya more\nRang de Chunariya\nRang de Chunariya oh Rang de\nChunariya (2)\nRang de Chunariya (10)\nRang de (8)\nRang de Chunariya\nRang de Chunariya... Ah... (2)\nRang de Chunariya",
    "source": "Your collection • bahajans-lyrcis.pdf, page 4",
    "desc": "Romanized lyrics from the supplied PDF. Columns read top to bottom, then left to right. Source spelling and repetition cues preserved. No Hindi lyrics were supplied."
  },
  {
    "id": 119,
    "titleEn": "Sai Tere Charnon Ki Thodi Dhul Jo Mil Jay",
    "titleHi": "साईं तेरे चरणों की",
    "god": "Sai Baba",
    "type": "Bhajan",
    "hindi": "साईं तेरे चरणों की, साईं तेरे चरणों की।\nथोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥\nये मन बड़ा चंचल है इसे कैसे तेरा ध्यान धरु\nजितना इसे समझाऊं उतना ही मचल जाए॥\n\nसाईं तेरे चरणों की, साईं तेरे चरणों की।\nथोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥\n\nनजरो से गिरना नहीं, चाहे जो भी सजा देना।\nनजरो से जो गिर जाऊं मुश्किल वो संभल पाना॥\n\nसाईं तेरे चरणों की, साईं तेरे चरणों की।\nथोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥\n\nसुनते हैं दया तेरी दिन रात बरसती हैं।\nइस दया के सागर से एक बूंद जो मिल जाए॥\n\nसाईं तेरे चरणों की, साईं तेरे चरणों की।\nथोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥\n\nमेरे इस जीवन की बस एक तमना है तुम सामने हो मेरे।\nतुम सामने हो मेरे, मेरा दम ही निकल जाए॥\n\nसाईं तेरे चरणों की, साईं तेरे चरणों की।\nथोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥",
    "roman": "",
    "source": "Your collection • bahajans-lyrcis.pdf, page 6",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. No Romanized lyrics were supplied."
  },
  {
    "id": 120,
    "titleEn": "Kabhi Pyase Ko Pani Pilaya Nahin",
    "titleHi": "कभी प्यासे को पानी पिलाया नहीं",
    "god": "Guru & Family",
    "type": "Bhajan",
    "hindi": "कभी प्यासे को पानी पिलाया नहीं, बाद अमृत पिलाने से क्या फायदा।\nकभी गिरते हुए को उठाया नहीं, बाद आंसू बहाने से क्या फायदा॥\n\nमैं तो मंदिर गया, पूजा आरती की, पूजा करते हुए यह ख़याल आ गया।\nकभी माँ बाप की सेवा की ही नहीं, सिर्फ पूजा के करने से क्या फायदा॥\n\nमैं तो सतसंग गया, गुरु वाणी सुनी, गुरु वाणी को सुन कर ख्याल आ गया।\nजनम मानव का ले के दया ना करी, फिर मानव कहलाने से क्या फायदा॥\n\nमैंने दान किया मैंने जप तप किया दान करते हुए यह ख्याल आ गया।\nकभी भूखे को भोजन खिलाया नहीं दान लाखों का करने से क्या फायदा॥\nगंगा नहाने हरिद्वार काशी गया, गंगा नहाते ही मन में ख्याल आ गया।\nतन को धोया मगर मन को धोया नहीं फिर गंगा नहाने से क्या फायदा॥\nमैंने वेद पढ़े मैंने शास्त्र पढ़े, शास्त्र पढ़ते हुए यह ख़याल आ गया।\nमैंने ज्ञान किसी को बांटा नहीं, फिर ग्यानी कहलाने से क्या फायदा॥\nमाँ पिता के ही चरणों में ही चार धाम है, आजा आजा यही मुक्ति का धाम है।\nपिता माता की सेवा की ही नहीं फिर तीर्थों में जाने का क्या फायदा॥",
    "roman": "",
    "source": "Your collection • bahajans-lyrcis.pdf, page 7",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. No Romanized lyrics were supplied."
  },
  {
    "id": 121,
    "titleEn": "Maat Pita Guru Charnon Mein",
    "titleHi": "मात पिता गुरु चरणों में",
    "god": "Guru & Family",
    "type": "Bhajan",
    "hindi": "मात पिता गुरु चरणों में प्रणवत बारम्बार,\nहम पर किया बड़ा उपकार, हम पर किया बड़ा उपकार,\n\nमाता ने जो कस्ट उठाया, वह ऋण कभी ना जाय चुकाया,\nअंगुली पकड़कर चलना सिखाया, ममता की दी सीतल छाया,\nजिनकी गोद में पलकर हम, कहलाते हुसियार,\nहम पर किया बड़ा उपकार,\n\nपिता ने हमको योग्य बनाया, कमा कमाकर अन्न खिलाया\nपढ़ा लिखा गुणवान बनाया, जीवन पथ पर चलना सिखाया\nजोड़ जोड़ अपनी सम्पति का, बना दिया हरक़दर\nहम पर किया बड़ा उपकार,\n\nतत्व ज्ञान गुरु ने दर्शाया, अंधकार सब दूर भगाया\nह्रदय में भक्ति दिप जलाकर, हरी दर्शन का मार्ग बताया\nबिन स्वार्थ ही कृपा करे, कितने बड़े हे उदार\nहम पर किया बड़ा उपकार,\n\nप्रभु कृपा से नर तन पाया, संत मिलन का साज सजाया\nबल बुद्धि और विद्या, देकर सब जीवो में श्रेष्ठ बनाया\nजो भी इनकी सरन में आता, कर देते उद्धार\nहम पर किया बड़ा उपकार,",
    "roman": "",
    "source": "Your collection • bahajans-lyrcis.pdf, page 8",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. No Romanized lyrics were supplied."
  },
  {
    "id": 122,
    "titleEn": "Thoda Dhyan Laga Sai Daude Daude Aayenge",
    "titleHi": "थोड़ा ध्यान लगा साईं दौड़े दौड़े आएंगे",
    "god": "Sai Baba",
    "type": "Bhajan",
    "hindi": "थोड़ा ध्यान लगा, साईं दौड़े दौड़े आएंगे,\nथोड़ा ध्यान लगा, साईं दौड़े दौड़े आएंगे, तुझे गले से लगाएंगे।\nअखियाँ मन की खोल, तुझको दर्शन वो कराएंगे,\nअखियाँ मन की खोल, तुझको दर्शन वो कराएंगे, तुझे गले से लगाएंगे॥\n\nहैं राम रमिया वो, हैं कृष्ण कन्हैया वो, वही मेरा साईं है।\nसत्कर्म राहों पे चलना सीखते वो, वही जगदीश हैं।\nप्रेम से पुकार तेरे पाप को जलाएंगे, तुझे गले से लगाएंगे॥\nथोड़ा ध्यान लगा...\n\nकिरपा की छाया में बिठाएंगे तुझको, कहाँ तुम जावोगे।\nउनकी दया दृष्टि जब जब पड़ेगी तुम यह भव तर जावोगे।\nऐसा है विश्वास मन में ज्योत जगायेंगे, तुझे गले से लगाएंगे॥\nथोड़ा ध्यान लगा...\n\nमुनिओं ने ऋषिओं ने, गुरु शिष्य महिमा का, किया गुणगान है।\nसाईं के चरण में, झुकती सकल सृष्टि, झुके भगवान है।\nमहिमा है अपार, सत्य की राह वो दिखलाएंगे, तुझे गले से लगाएंगे॥\nथोड़ा ध्यान लगा...",
    "roman": "",
    "source": "Your collection • bahajans-lyrcis.pdf, page 9",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. No Romanized lyrics were supplied."
  },
  {
    "id": 123,
    "titleEn": "Mere Ghar Ke Aage Sainath",
    "titleHi": "मेरे घर के आगे साईनाथ",
    "god": "Sai Baba",
    "type": "Bhajan",
    "hindi": "मेरे घर के आगे साईनाथ तेरा मन्दिर बन जाए\nजब खिड़की खोलूँ तो तेरा दर्शन हो जाए\n\nजब आरती हो तेरी मुझे घंटी सुनाई दे\nमुझे रोज़ सवेरे साईनाथ तेरी सूरत दिखाई दे\nजब भजन करे मिलकर रास कानों में घुलजाये\nजब खिड़की खोलूँ तो...\n\nआते जाते बाबा तुमको मै प्रणाम करूँ\nजो मेरे लायक हो कुछ ऐसा काम करूँ\nतेरी सेवा करने से मेरी किस्मत खुल जाए\nजब खिड़की खोलूँ तो...\n\nनज़दीक रहेंगे तो आना जाना होगा\nहम भक्तो का बाबा मिलना जुलना होगा\nसब साथ रहे बाबा, जल्दी वो दिन आये\nजब खिड़की खोलूँ तो...",
    "roman": "",
    "source": "Your collection • bahajans-lyrcis.pdf, page 10",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. No Romanized lyrics were supplied."
  },
  {
    "id": 124,
    "titleEn": "Shirdi Wale Sai Baba",
    "titleHi": "शिरडी वाले साईं बाबा",
    "god": "Sai Baba",
    "type": "Bhajan",
    "hindi": "ज़माने में कहाँ टूटी हुई तस्वीर बनती है\nतेरे दरबार में बिगड़ी हुई तकदीर बनती है\n\nतारीफ़ तेरी निकली है दिल से\nआई है लब पे बनके कव्वाली\n\nशिरडी वाले साईं बाबा, आया है तेरे दर पे सवाली\nलब पे दुआएँ, आँखों में आँसू, दिल में उम्मीदें, पर झोली खाली\n\nओ मेरे साईं देवा, तेरे सब नाम लेवा\nजुदा इन्सान सारे, सभी तुझको हैं प्यारे\nसुने फ़रियाद सबकी, तुझे है याद सबकी\nबड़ा या कोई छोटा, नहीं मायूस लौटा\nअमीरों का सहारा, ग़रीबों का गुज़ारा\nतेरी रहमत का किस्सा बयाँ, अकबर करे क्या\nदो दिन की दुनिया, दुनिया है गुलशन\nसब फूल काँटे, तू सबका माली\n\nखुदा की शान तुझमें, दिखे भगवान तुझमें\nतुझे सब मानते हैं, तेरा घर जानते हैं\nचले आते हैं दौड़े, जो खुश-किस्मत हैं थोड़े\nये हर राही की मंज़िल, ये हर कश्ती का साहिल\nजिसे सबने निकाला, उसे तूने संभाला\nतू बिछड़ों को मिलाए, बुझे दीपक जलाए\nये ग़म की रातें, रातें ये काली\nइनको बना दे, ईद और दीवाली",
    "roman": "",
    "source": "Your collection • bahajans-lyrcis.pdf, page 11",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. No Romanized lyrics were supplied."
  },
  {
    "id": 125,
    "titleEn": "Sai Aapki Kripa Se Sab Kaam Ho Raha Hai",
    "titleHi": "साईं आपकी कृपा से सब काम हो रहा है",
    "god": "Sai Baba",
    "type": "Bhajan",
    "hindi": "साईं आपकी कृपा से,\nसब काम हो रहा है,\nकरते हो तुम ओ बाबा,\nकरते हो तुम ओ बाबा,\nमेरा नाम हो रहा है,\nसाईं आपकी कृपा से,\nसब काम हो रहा है॥\n\nजो कुछ है पास मेरे,\nसबकुछ दिया है तूने,\nमुझे दे के सारी खुशियाँ,\nहर गम लिया है तूने,\nचिंता नहीं है कुछ भी,\nआराम हो रहा है,\nकरते हो तुम ओ बाबा,\nकरते हो तुम ओ बाबा,\nमेरा नाम हो रहा है,\nसाईं आपकी कृपा से,\nसब काम हो रहा है॥\n\nनिर्धन भी बनते राजा,\nतेरी कृपा जो होती,\nआके तेरी शरण में,\nकंकड़ भी बनते मोती,\nसुमिरण को करके तन मन,\nबलवान हो रहा है,\nकरते हो तुम ओ बाबा,\nकरते हो तुम ओ बाबा,\nमेरा नाम हो रहा है,\nसाईं आपकी कृपा से,\nसब काम हो रहा है॥\n\nअपने कृपा सदा तुम,\nबाबा बनाए रखना,\nभक्ति की ज्योत दिल में,\nसाईं जलाए रखना,\nआठो पहर तेरा ही,\nगुणगान हो रहा है,\nकरते हो तुम ओ बाबा,\nकरते हो तुम ओ बाबा,\nमेरा नाम हो रहा है,\nसाईं आपकी कृपा से,\nसब काम हो रहा है॥\n\nसाईं आपकी कृपा से,\nसब काम हो रहा है,\nकरते हो तुम ओ बाबा,\nकरते हो तुम ओ बाबा,\nमेरा नाम हो रहा है,\nसाईं आपकी कृपा से,\nसब काम हो रहा है॥",
    "roman": "",
    "source": "Your collection • bahajans-lyrcis.pdf, page 12–13",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. No Romanized lyrics were supplied."
  }
]);

bhajans.push({
  "id": 126,
  "titleEn": "Mere Banke Bihari Lal",
  "titleHi": "मेरे बांके बिहारी लाल",
  "god": "Lord Krishna",
  "godHi": "कृष्ण जी",
  "type": "Bhajan",
  "hindi": "मेरे बांके बिहारी लाल\nबांके बिहारी लाल\nमेरे बांके बिहारी लाल\nतू इतना ना करिओ श्रृंगार\nनजर लग जाएगी\nनजर लग जाएगी\n\nमेरे बांके बिहारी लाल\nतू इतना ना करिओ श्रृंगार\nनजर लग जाएगी\nनजर लग जाएगी\n\nमेरे बांके बिहारी लाल\n\nतोरी सुरतिया पे मन मोरा अटका\nप्यारा लागे तेरा पीला पटका\n\nतेरी सुरतिया पे मन मोरा अटका\nप्यारा लागे तेरा पीला पटका\nतेरी सुरतिया पे मन मोरा अटका\nप्यारा लागे तेरा पीला\nतेरी टेढ़ी मेढ़ी चाल\nतेरी टेढ़ी मेढ़ी चाल, तू इतना ना करिओ श्रृंगार\nनजर लग जाएगी\nनजर लग जाएगी\nमेरे बांके बिहारी लाल\n\nतोरी मुरलिया पे मन मेरा अटका\nप्यारा लागे तेरा नीला पटका\nतोरी मुरलिया पे मन मेरा अटका\nप्यारा लागे तेरा नीला पटका\nतोरी मुरलिया पे मन मेरा अटका\nप्यारा लागे तेरा नीला पटका\nतोरे गुंगार वाले बाल, तू इतना ना करिओ श्रृंगार\nनजर लग जाएगी\nनजर लग जाएगी\nमेरे बांके बिहारी लाल\n\nतोरी कमरिया पे मन मोरा अटका\nप्यारा लागे तेरा काला पटका\nतोरी कमरिया पे मन मोरा अटका\nप्यारा लागे तेरा काला पटका\nतोरी कमरिया पे मन मोरा अटका\nप्यारा लागे तेरा काला पटका\nतेरे गल में वैजयंती माल, तू इतना ना करिओ श्रृंगार\nनजर लग जाएगी\nनजर लग जाएगी\n\nमेरे बांके बिहारी लाल, तू इतना ना करिओ श्रृंगार\nनजर लग जाएगी",
  "roman": "",
  "source": "Your collection • Lyrics supplied directly",
  "desc": "Hindi lyrics supplied by the collection owner. Wording and repetitions preserved; line breaks added for singing. No Romanized lyrics were supplied."
});
bhajans.push({
  "id": 127,
  "titleEn": "Ambe Rani Ke Bhawan Mein Nache Languriya",
  "titleHi": "अम्बे रानी के भवन में नाचे लांगुरिया",
  "god": "Durga Maa",
  "godHi": "दुर्गा माँ",
  "type": "Bhajan",
  "source": "Your collection • Supplied green lyrics poster",
  "desc": "Hindi lyrics transcribed from the supplied two-column poster, reading the left column before the right. Original wording and repetitions retained. No Romanized lyrics were supplied.",
  "roman": "",
  "hindi": "अम्बे रानी के भवन में नाचे लांगुरिया,\nनाचे लांगुरिया हाँ नाचे लांगुरिया,\nशेरावाली के भवन में नाचे लांगुरिया,\n\nलांगुर गया बाजार को टीका लाया मोल,\nअरे ना पहले मेरी मैया रानी को भवन में शोर,\nशेरावाली के भवन में नाचे लांगुरिया,\nअम्बे रानी के भवन में नाचे लांगुरिया,\n\nलांगुर गया बाजार को चूड़ी लाया मोल,\nअरे ना पहले मेरी मैया रानी को भवन में शोर,\nशेरावाली के भवन में नाचे लांगुरिया,\nअम्बे रानी के भवन में नाचे लांगुरिया,\n\nलांगुर गया बाजार को माला लाया मोल,\nअरे ना पहले मेरी मैया रानी को भवन में शोर,\nशेरावाली के भवन में नाचे लांगुरिया,\nअम्बे रानी के भवन में नाचे लांगुरिया,\n\nलांगुर गया बाजार को साड़ी लाया मोल,\nअरे ना पहले मेरी मैया रानी को भवन में शोर,\nशेरावाली के भवन में नाचे लांगुरिया,\nअम्बे रानी के भवन में नाचे लांगुरिया,\n\nलांगुर गया बाजार को पायल लाया मोल,\nअरे ना पहले मेरी मैया रानी को भवन में शोर,\nशेरावाली के भवन में नाचे लांगुरिया,\nअम्बे रानी के भवन में नाचे लांगुरिया,"
});
bhajans.push({
  "id": 128,
  "titleEn": "Mere Kirtan Mein Rang Barsao",
  "titleHi": "मेरे कीर्तन में रंग बरसाओ",
  "god": "Lord Ganesha",
  "godHi": "गणेश जी",
  "type": "Bhajan",
  "source": "Your collection • Lyrics supplied directly",
  "desc": "Hindi lyrics supplied by the collection owner, preserving wording and repetitions. No Romanized lyrics were supplied.",
  "roman": "",
  "hindi": "मेरे कीर्तन में रंग बरसाओ,\nआओ जी गजानन आओ.....\n\nब्रह्मा तुम भी पधारो,\nविष्णु तुम भी पधारो,\nभोले शंकर को साथ ले आओ,\nआओ जी गजानन आओ,\nमेरे कीर्तन में रंग बरसाओ,\nआओ जी गजानन आओ.....\n\nलक्ष्मी तुम भी पधारो,\nगौरा तुम भी पधारो,\nसरस्वती को साथ ले आओ\nआओ जी गजानन आओ,\nमेरे कीर्तन में रंग बरसाओ,\nआओ जी गजानन आओ......\n\nराम तुम भी पधारो,\nलक्ष्मण तुम भी पधारो,\nसीता मैया को साथ ले आओ,\nमेरे कीर्तन में रंग बरसाओ,\nआओ जी गजानन आओ......\n\nश्याम तुम भी पधारो,\nराम तुम भी पधारो,\nराधा रानी को साथ ले आओ,\nमेरे कीर्तन में रंग बरसाओ,\nआओ जी गजानन आओ......\n\nहनुमत तुम भी पधारो,\nनारद तुम भी पधारो,\nमैया रानी को साथ ले आओ,\nमेरे कीर्तन में रंग बरसाओ,\nआओ जी गजानन आओ"
});
bhajans.push({
  "id": 129,
  "titleEn": "Ambe Tu Hai Jagdambe Kali",
  "titleHi": "अम्बे तू है जगदम्बे काली",
  "god": "Durga Maa",
  "godHi": "दुर्गा माँ",
  "type": "Aarti",
  "source": "Your collection • Lyrics supplied directly",
  "desc": "Hindi aarti supplied by the collection owner. Original wording, verses and repetitions retained; line breaks added for singing. No Romanized lyrics were supplied.",
  "roman": "",
  "hindi": "अम्बे तू है जगदम्बे काली,\nजय दुर्गे खप्पर वाली,\nतेरे ही गुण गावें भारती,\nओ मैया हम सब उतारे तेरी आरती।\n\nअम्बे तू है जगदम्बे काली,\nजय दुर्गे खप्पर वाली,\nतेरे ही गुण गावें भारती,\nओ मैया हम सब उतारे तेरी आरती।\n\nतेरे भक्त जनो पर माता भीड़ पड़ी है भारी।\nदानव दल पर टूट पडो माँ करके सिंह सवारी॥\nतेरे भक्त जनो पर माता भीड़ पड़ी है भारी।\nदानव दल पर टूट पडो माँ करके सिंह सवारी॥\nसौ-सौ सिहों से बलशाली, है अष्ट भुजाओं वाली,\nदुष्टों को तू ही ललकारती।\nओ मैया हम सब उतारे तेरी आरती॥\n\nअम्बे तू है जगदम्बे काली,\nजय दुर्गे खप्पर वाली,\nतेरे ही गुण गावें भारती,\nओ मैया हम सब उतारे तेरी आरती।\n\nमाँ-बेटे का है इस जग मे बडा ही निर्मल नाता।\nपूत-कपूत सुने है पर ना माता सुनी कुमाता॥\nमाँ-बेटे का है इस जग मे बडा ही निर्मल नाता।\nपूत-कपूत सुने है पर ना माता सुनी कुमाता॥\nसब पे करूणा दर्शाने वाली, अमृत बरसाने वाली,\nदुखियों के दुखडे निवारती।\nओ मैया हम सब उतारे तेरी आरती॥\n\nअम्बे तू है जगदम्बे काली,\nजय दुर्गे खप्पर वाली,\nतेरे ही गुण गावें भारती,\nओ मैया हम सब उतारे तेरी आरती।\n\nनहीं मांगते धन और दौलत, न चांदी न सोना।\nहम तो मांगें तेरे मन में छोटा सा कोना॥\nनहीं मांगते धन और दौलत, न चांदी न सोना।\nहम तो मांगें तेरे मन में छोटा सा कोना॥\nसबकी बिगड़ी बनाने वाली, लाज बचाने वाली,\nसतियों के सत को सवांरती।\nओ मैया हम सब उतारे तेरी आरती॥\n\nअम्बे तू है जगदम्बे काली,\nजय दुर्गे खप्पर वाली,\nतेरे ही गुण गावें भारती,\nओ मैया हम सब उतारे तेरी आरती।\n\nचरण शरण में खड़े तुम्हारी, ले पूजा की थाली।\nवरद हस्त सर पर रख दो माँ संकट हरने वाली॥\nचरण शरण में खड़े तुम्हारी, ले पूजा की थाली।\nवरद हस्त सर पर रख दो माँ संकट हरने वाली॥\nमाँ भर दो भक्ति रस प्याली, अष्ट भुजाओं वाली,\nभक्तों के कारज तू ही सारती।।\nओ मैया हम सब उतारे तेरी आरती।\n\nअम्बे तू है जगदम्बे काली,\nजय दुर्गे खप्पर वाली,\nतेरे ही गुण गावें भारती,\nओ मैया हम सब उतारे तेरी आरती।"
});
bhajans.push({
  "id": 130,
  "titleEn": "Hanuman Ji Ki Aarti",
  "titleHi": "हनुमान आरती",
  "god": "Lord Hanuman",
  "godHi": "हनुमान जी",
  "type": "Aarti",
  "source": "Lyrics supplied directly by the collection owner • References supplied: Navbharat Times and Bhakti Bharat",
  "desc": "Supplied Hindi wording and repetitions retained. Citation markers and Markdown formatting removed from singing text. No Romanized lyrics were supplied.",
  "roman": "",
  "hindi": "आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥\n\nजाके बल से गिरिवर कांपे।\nरोग दोष जाके निकट न झांके॥\nअंजनि पुत्र महाबलदायी।\nसंतान के प्रभु सदा सहाई॥\nआरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥\n\nदे बीरा रघुनाथ पठाए।\nलंका जारी सिया सुध लाए॥\nलंका सो कोट समुद्र सी खाई।\nजात पवनसुत बार न लाई॥\nलंका जारी असुर संहारे।\nसियारामजी के काज संवारे॥\nआरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥\n\nलक्ष्मण मूर्छित पड़े सकारे।\nआणि संजीवन प्राण उबारे॥\nपैठि पताल तोरि जमकारे।\nअहिरावण की भुजा उखारे॥\nबाईं भुजा असुर दल मारे।\nदाहिने भुजा संतजन तारे॥\nआरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥\n\nसुर-नर-मुनि जन आरती उतारें।\nजय जय जय हनुमान उचारें॥\nकंचन थार कपूर ल्यू छाई।\nआरती करत अंजना माई॥\nजो हनुमान जी की आरती गावे।\nबसी बैकुठ परम पद पावे॥\nआरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥"
});
categories.push(["🪷","Lord Vishnu","विष्णु जी"],["🌺","Santoshi Maa","संतोषी माँ"]);
bhajans.push(...[
  {
    "id": 131,
    "titleEn": "Maa Murade Puri Karde Halwa Batungi",
    "titleHi": "माँ मुरादे पूरी करदे हलवा बाटूंगी",
    "god": "Durga Maa",
    "type": "Bhajan",
    "source": "Lyrics supplied directly by the collection owner",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "माँ मुरादे पूरी करदे हलवा बाटूंगी।\nज्योत जगा के, सर को झुका के,\nमैं मनाऊंगी, दर पे आउंगी, मनाऊंगी, मैं आउंगी॥\n\nसंतो महंतो को बुला के घर में कराऊं जगराता।\nसुनती है सब की फ़रिआदे, मेरी भी सुन लेगी माता।\nझोली भरेगी, संकट हरेगी, भेटा गाऊँगी,\nमैं मनाऊंगी, भेटें गाऊँगी, मनाऊंगी, मैं आउंगी॥\n\nदिल से सुनो शेरा वाली माँ, खड़ी मैं बन के सवाली।\nझोली भरो मेरी रानी वाली माँ, गोदी है लाल से खाली।\nकृपा करो, गोदी भरो, मैं दर पे आउंगी, मैं भेटें गाऊँगी,\nमैं आउंगी, मैं गाऊँगी, मैं आउंगी॥\n\nभवन तेरा है सब से ऊँचा माँ, और गुफा तेरी नयारी।\nभाग्य विदाता ज्योता वाली माँ, कहती है दुनिया सारी।\nदाति तुम्हारा, ले के सहारा, मैं दर पे आउंगी, मैं भेटे गाऊँगी,\nमैं आउंगी, मैं गाऊँगी, मैं आउंगी॥\n\nकृपा करो वरदानी माँ, छाया है गम का अँधेरा।\nतेरे बिना मेरा कोई ना, मुझ को भरोसा है तेरा।\nदाति तुम्हारा, ले के सहारा, दर पे आउंगी, मैं भेटे गाऊँगी,\nमैं आउंगी, मैं गाऊँगी, मैं आउंगी॥"
  },
  {
    "id": 132,
    "titleEn": "Jai Shiv Omkara",
    "titleHi": "जय शिव ओंकारा",
    "god": "Lord Shiva",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 3–4 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "श्लोक\nकर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारं\nसदा वसन्तं ह्रदयाविन्दे भवं भवानी सहितं नमामि ॥\n\nआरती\nजय शिव ओंकारा हर ॐ शिव ओंकारा।\nब्रह्मा विष्णु सदाशिव अर्द्धांगी धारा ॥\nॐ जय शिव ओंकारा\n\nएकानन चतुरानन पंचांनन राजे ।\nहंसासंन, गरुडासन, वृषवाहन साजे॥\nॐ जय शिव ओंकारा\n\nदो भुज चारु चतुर्भुज दस भुज अति सोहें ।\nतीनों रूप निरखता त्रिभुवन जन मोहें॥\nॐ जय शिव ओंकारा\n\nअक्षमाला, वनमाला, मुण्डमालाधारी।\nचंदन, मृगमद सोहें, भाले शशिधारी ॥\nॐ जय शिव ओंकारा\n\nश्वेताम्बर, पीताम्बर, बाघाम्बर अंगें ।\nसनकादिक, ब्रह्मादिक, भूतादिक संगें॥\nॐ जय शिव ओंकारा\n\nकर के मध्य कमंडल चक्रे, त्रिशूल धरता ।\nजगकर्ता, दुःखहर्ता, जगपालनकर्ता ॥\nॐ जय शिव ओंकारा\n\nब्रह्मा विष्णु सदाशिव जानत अविवेका ।\nप्रवणाक्षर मध्यें ये तीनों एका॥\nॐ जय शिव ओंकारा\n\nकाशी में विश्वनाथ विराजत नन्दी ब्रम्हचारी ।\nनित उठी भोग लगावत महिमा अति भारी ॥\nॐ जय शिव ओंकारा\n\nत्रिगुण शिवजी की आरती जो कोई नर गावें ।\nकहत शिवानंद स्वामी मनवांछित फल पावें ॥\nॐ जय शिव ओंकारा\n\nजय शिव ओंकारा हर ॐ शिव ओंकारा।\nब्रह्मा विष्णु सदाशिव अर्द्धांगी धारा॥\nॐ जय शिव ओंकारा"
  },
  {
    "id": 133,
    "titleEn": "Om Jai Gangadhar",
    "titleHi": "ॐ जय गंगाधर",
    "god": "Lord Shiva",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 4–6 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "ॐ जय गंगाधर जय हर जय गिरिजाधीशा।\nत्वं मां पालय नित्यं कृपया जगदीशा॥\nहर जय गिरिजाधीशा।\n\nकैलासे गिरिशिखरे कल्पद्रुमविपिने।\nगुंजति मधुकरपुंजे कुंजवने गहने॥\nकोकिलकूजित खेलत हंसावन ललिता।\nरचयति कलाकलापं नृत्यति मुदसहिता ॥\nहर जय गिरिजाधीशा।\n\nतस्मिंल्ललितसुदेशे शाला मणिरचिता।\nतन्मध्ये हरनिकटे गौरी मुदसहिता॥\nक्रीडा रचयति भूषारंचित निजमीशम्।\nइंद्रादिक सुर सेवत नामयते शीशम् ॥\nहर जय गिरिजाधीशा।\n\nविबुधवधू बहु नृत्यत नामयते मुदसहिता।\nकिन्नर गायन कुरुते सप्त स्वर सहिता॥\nधिनकत थै थै धिनकत मृदंग वादयते।\nक्वण क्वण ललिता वेणुं मधुरं नाटयते॥\nहर जय गिरिजाधीशा।\n\nरुण रुण चरणे रचयति नूपुरमुज्ज्वलिता।\nचक्रावर्ते भ्रमयति कुरुते तां धिक तां॥\nतां तां लुप चुप तां तां डमरू वादयते।\nअंगुष्ठांगुलिनादं लासकतां कुरुते ॥\nहर जय गिरिजाधीशा।\n\nकर्पूरद्युतिगौरं पंचाननसहितम्।\nत्रिनयनशशिधरमौलिं विषधरकण्ठयुतम्॥\nसुन्दरजटायकलापं पावकयुतभालम्।\nडमरुत्रिशूलपिनाकं करधृतनृकपालम् ॥\nहर जय गिरिजाधीशा।\n\nमुण्डै रचयति माला पन्नगमुपवीतम्।\nवामविभागे गिरिजारूपं अतिललितम्॥\nसुन्दरसकलशरीरे कृतभस्माभरणम्।\nइति वृषभध्वजरूपं तापत्रयहरणं ॥\nहर जय गिरिजाधीशा।\n\nशंखनिनादं कृत्वा झल्लरि नादयते।\nनीराजयते ब्रह्मा वेदऋचां पठते॥\nअतिमृदुचरणसरोजं हृत्कमले धृत्वा।\nअवलोकयति महेशं ईशं अभिनत्वा॥\nहर जय गिरिजाधीशा।\n\nध्यानं आरति समये हृदये अति कृत्वा।\nरामस्त्रिजटानाथं ईशं अभिनत्वा॥\nसंगतिमेवं प्रतिदिन पठनं यः कुरुते।\nशिवसायुज्यं गच्छति भक्त्या यः शृणुते ॥\nहर जय गिरिजाधीशा।"
  },
  {
    "id": 134,
    "titleEn": "Jai Ganesh Deva",
    "titleHi": "जय गणेश देवा",
    "god": "Lord Ganesha",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 7 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "श्लोक\nवक्रतुंड महाकाय, सूर्यकोटी समप्रभाः ।\nनिर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा ।।\n\nआरती\nजय गणेश जय गणेश जय गणेश देवा।\nमाता जाकी पार्वती पिता महादेवा।।\nएकदन्त दयावन्त चार भुजाधारी।\nमाथे पर तिलक सोहे मूसे की सवारी।।\n\nपान चढ़े फूल चढ़े और चढ़े मेवा।\nलड्डू अन का भोग लगे सन्त करे सेवा।।\n\nअन्धे को आँख देत कोढिन को काया।\nबांझन को पुत्र देत निर्धन को माया।।\n\nहार चढ़े फूल चढ़े और चढ़े मेवा।\nसूरश्याम शरण आए सुफल कीजे सेवा।\nजय गणेश जय गणेश जय गणेश देवा।\nमाता जाकी पार्वती पिता महादेवा।।"
  },
  {
    "id": 135,
    "titleEn": "Hanuman Ji Ki Aarti Sangrah Version",
    "titleHi": "हनुमान जी की आरती (संग्रह संस्करण)",
    "god": "Lord Hanuman",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 8–9 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "A separate version from Aarti Sangrah, including its opening shloka and printed repetitions. Your earlier Hanuman Aarti remains unchanged.",
    "roman": "",
    "hindi": "श्लोक\nमनोजवं मारुत तुल्यवेगं, जितेन्द्रियं, बुद्धिमतां वरिष्ठम् ।\nवातात्मजं वानरयुथ मुख्यं, श्रीरामदुतं शरणम प्रपद्ये ।।\n\nआरती\nआरती कीजै हनुमान लला की, दुष्ट दलन रघुनाथ कला की।\nजाके बल से गिरिवर काँपे, रोग दोष जाके निकट न झाँके।।\nआरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।\n\nअंजनि पुत्र महा बलदायी, संतन के प्रभु सदा सहायी।\nदे बीरा रघुनाथ पठाये, लंका जारि सिया सुधि लाये ।।\nआरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।\n\nलंका सौ कोटि समुद्र सी खाई, जात पवनसुत बार न लाई ।\nलंका जारि असुर संहारे, सिया रामजी के काज संवारे ।।\nआरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।\n\nलक्ष्मण मूर्छित पड़े सकारे, आनि संजीवन प्राण उबारे ।\nपैठि पाताल तोरि जम कारे, अहिरावन की भुजा उखारे ।।\nआरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।\n\nबाँये भुजा असुरदल मारे, दाहिने भुजा संत जन तारे ।\nसुर नर मुनि आरति उतारें, जय जय जय हनुमान उचारें ।।\nआरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।\n\nकंचन थार कपूर लौ छाई, आरती करती अंजना माई ।\nजो हनुमान जी की आरती गावे, बसि बैकुण्ठ परम पद पावे ।।\nआरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की।।"
  },
  {
    "id": 136,
    "titleEn": "Om Jai Jagdish Hare",
    "titleHi": "ॐ जय जगदीश हरे",
    "god": "Lord Krishna",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 10–11 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे,\nभक्त जनों के संकट, दास जनों के संकट,\nक्षण में दूर करे, ॐ जय जगदीश हरे\n\nजो ध्यावे फल पावे,\nदुख बिनसे मन का, स्वामी दुख बिनसे मन का\nसुख सम्पति घर आवे, सुख सम्पति घर आवे,\nकष्ट मिटे तन का, ॐ जय जगदीश हरे\n\nमात पिता तुम मेरे,\nशरण गहूं मैं किसकी, स्वामी शरण गहूं मैं किसकी।\nतुम बिन और न दूजा, तुम बिन और न दूजा,\nआस करूं मैं जिसकी, ॐ जय जगदीश हरे\n\nतुम पूरण परमात्मा,\nतुम अंतर्यामी, स्वामी तुम अंतर्यामी,\nपारब्रह्म परमेश्वर, पारब्रह्म परमेश्वर,\nतुम सब के स्वामी, ॐ जय जगदीश हरे\n\nतुम करुणा के सागर,\nतुम पालनकर्ता, स्वामी तुम पालनकर्ता,\nमैं मूरख खल कामी, मैं सेवक तुम स्वामी,\nकृपा करो भर्ता, ॐ जय जगदीश हरे\n\nतुम हो एक अगोचर,\nसबके प्राणपति, स्वामी सबके प्राणपति,\nकिस विधि मिलूं दयामय, किस विधि मिलूं दयामय,\nतुमको मैं कुमति, ॐ जय जगदीश हरे\n\nदीनबंधु दुखहर्ता,\nठाकुर तुम मेरे, स्वामी ठाकुर तुम मेरे,\nअपने हाथ उठाओ, अपने शरण लगाओ,\nद्वार पड़ा तेरे, ॐ जय जगदीश हरे\n\nविषय विकार मिटाओ,\nपाप हरो देवा, स्वामी पाप हरो देवा,\nश्रद्धा भक्ति बढ़ाओ, श्रद्धा भक्ति बढ़ाओ,\nसंतन की सेवा, ॐ जय जगदीश हरे\n\nतन-मन-धन प्रभु,\nसब कुछ है तेरा, स्वामी सब कुछ है तेरा,\nतेरा तुझको अर्पण, क्या लागे मेरा, स्वामी क्या लागे मेरा,\nॐ जय जगदीश हरे\n\nश्याम-सुन्दर जी की आरती,\nजो कोई नर गावे, स्वामी जो कोई नर गावे,\nभाव भक्ति श्रद्धा से, मनवांछित फल पावे,\nस्वामी मनवांछित फल पावे,\nॐ जय जगदीश हरे"
  },
  {
    "id": 137,
    "titleEn": "Jai Saraswati Mata",
    "titleHi": "जय सरस्वती माता",
    "god": "Saraswati Maa",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 12–13 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "श्लोक\nकज्जल पूरित लोचन भारे, स्तन युग शोभित मुक्त हारे।\nवीणा पुस्तक रंजित हस्ते, भगवती भारती देवी नमस्ते।।\n\nआरती\nजय सरस्वती माता, जय जय हे सरस्वती माता।\nसद्गुण वैभव शालिनी, त्रिभुवन विख्याता।।\nजय सरस्वती माता।\n\nचंद्रवदनि पद्मासिनी, धुति मंगलकारी।\nसोहें शुभ हंस सवारी, अतुल तेजधारी ॥\nजय सरस्वती माता।\n\nबायें कर में वीणा, दायें कर में माला।\nशीश मुकुट मणी सोहें, गल मोतियन माला ॥\nजय सरस्वती माता।\n\nदेवी शरण जो आयें उनका उद्धार किया।\nपैठी मंथरा दासी, रावण संहार किया ॥\nजय सरस्वती माता।\n\nविद्या ज्ञान प्रदायिनी, ज्ञान प्रकाश भरो।\nमोह और अज्ञान तिमिर का जग से नाश करो ॥\nजय सरस्वती माता।\n\nधूप, दिप फल मेवा माँ स्वीकार करो।\nज्ञानचक्षु दे माता, भव से उद्धार करो ॥\nजय सरस्वती माता।\n\nमाँ सरस्वती जी की आरती जो कोई नर गावें।\nहितकारी, सुखकारी ग्यान भक्ती पावें ॥\nजय सरस्वती माता।\n\nजय सरस्वती माता, जय जय हे सरस्वती माता।\nसद्गुण वैभव शालिनी, त्रिभुवन विख्याता।।\nजय सरस्वती माता।\n\nबिन मांगे मोती मिले मांगे मिले ना भीख।\nजय सरस्वती माता।"
  },
  {
    "id": 138,
    "titleEn": "Shri Saraswati Prarthana",
    "titleHi": "श्री सरस्वती प्रार्थना",
    "god": "Saraswati Maa",
    "type": "Mantra",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 13–14 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Saraswati prayer with the Hindi meanings printed in the supplied PDF. Source wording retained.",
    "roman": "",
    "hindi": "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता या\nवीणावरदण्डमण्डितकरा या श्वेतपद्मासना।\nया ब्रह्माच्युत शंकरप्रभृतिभि देवैः सदा\nवन्दिता सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा ॥१॥\n\nअर्थ\nजो विद्या की देवी भगवती सरस्वती कुन्द के फूल, चंद्रमा, हिमराशि और मोती के हार की तरह धवल वर्ण की हैं और जो श्वेत वस्त्र धारण करती हैं, जिनके हाथ में वीणादण्ड शोभायमान है, जिन्होंने श्वेत कमलों पर आसन ग्रहण किया है तथा ब्रह्मा, विष्णु एवं शंकर आदि देवताओं द्वारा जो सदा पूजित हैं, वही संपूर्ण जड़ता और अज्ञान को दूर कर देने वाली माँ सरस्वती हमारी रक्षा करें ॥१॥\n\nशुक्लां ब्रह्मविचार सार परमामाद्यां जगद्व्यापिनीं\nवीणापुस्तकधारिणीमभयदां जाड्यान्धकारापहाहस्ते\nस्फटिकमालिकां विदधतीं पद्मासने संस्थिताम्बन्दे\nतां परमेश्वरीं भगवतीं बुद्धिप्रदां शारदाम्॥२॥\n\nअर्थ\nशुक्लवर्ण वाली, संपूर्ण चराचर जगत् में व्याप्त, आदिशक्ति, परब्रह्म के विषय में किए गए विचार एवं चिंतन के सार रूप परम उत्कर्ष को धारण करने वाली, सभी भयों से भयदान देने वाली, अज्ञान के अँधेरे को मिटाने वाली, हाथों में वीणा, पुस्तक और स्फटिक की माला धारण करने वाली और पद्मासन पर विराजमान बुद्धि प्रदान करने वाली, सर्वोच्च ऐश्वर्य से अलंकृत, भगवती शारदा (सरस्वती देवी) की मैं वंदना करता हूँ ॥२॥"
  },
  {
    "id": 139,
    "titleEn": "Om Jai Lakshmi Mata",
    "titleHi": "ॐ जय लक्ष्मी माता",
    "god": "Lakshmi Maa",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 15–16 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।\nतुम को निस दिन सेवत, मैयाजी को निस दिन सेवत\nहर विष्णु धाता ॥ ॐ जय लक्ष्मी माता\n\nउमा रमा ब्रह्माणी, तुम ही जग माता।\nमैया तुम ही जग माता, सूर्य चन्द्र माँ ध्यावत,\nनारद ऋषि गाता।। ॐ जय लक्ष्मी माता\n\nदुर्गा रूप निरंजनि, सुख सम्पति दाता।\nमैया सुख सम्पति दाता, जो कोई तुम को ध्यावत,\nऋद्धि सिद्धि धन पाता।। ॐ जय लक्ष्मी माता\n\nतुम पाताल निवासिनि, तुम ही शुभ दाता।\nमैया तुम ही शुभ दाता, कर्म प्रभाव प्रकाशिनि,\nभव निधि की त्राता। ॐ जय लक्ष्मी माता\n\nजिस घर तुम रहती, तहँ सब सद्गुण आता।\nमैया सब सद्गुण आता, सब संभव हो जाता,\nमन नहीं घबराता।। ॐ जय लक्ष्मी माता\n\nतुम बिन यज्ञ न होते, वस्त्र न कोई पाता।\nमैया वस्त्र न कोई पाता, खान पान का वैभव,\nसब तुम से आता।। ॐ जय लक्ष्मी माता\n\nशुभ गुण मंदिर सुंदर, क्षीरोदधि जाता।\nओ मैया क्षीरोदधि जाता, रत्न चतुर्दश तुम बिन,\nकोई नहीं पाता।। ॐ जय लक्ष्मी माता\n\nमहा लक्ष्मीजी की आरती, जो कोई जन गाता।\nमैया जो कोई जन गाता, उर आनंद समाता,\nपाप उतर जाता।। ॐ जय लक्ष्मी माता"
  },
  {
    "id": 140,
    "titleEn": "Om Jai Lakshmi Ramana Satyanarayan Aarti",
    "titleHi": "ॐ जय लक्ष्मी रमणा — सत्यनारायण आरती",
    "god": "Lord Vishnu",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 17–18 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "ॐ जय लक्ष्मी रमणा, श्री लक्ष्मी रमणा।\nसत्यनारायण स्वामी जन-पातक-हरणा।।\nॐ जय लक्ष्मी रमणा\n\nरत्नजड़ित सिंहासन अद्भुत छवि राजे।\nनारद करत निराजन घंटा ध्वनि बाजे।।\nॐ जय लक्ष्मी रमणा\n\nप्रकट भये कलि कारण, द्विज को दरस दियो।\nबूढ़े ब्राह्मण बनकर कंचन-महल कियो।।\nॐ जय लक्ष्मी रमणा\n\nदुर्बल भील कठारो, जिनपर कृपा करी।\nचन्द्रचूड़ एक राजा, जिनकी बिपति हरी।।\nॐ जय लक्ष्मी रमणा\n\nवैश्य मनोरथ पायो श्रद्धा तज दीन्हीं।\nसो फल भोग्यो प्रभुजी फिर अस्तुति कीन्हीं।।\nॐ जय लक्ष्मी रमणा\n\nभाव-भक्ति के कारण छिन-छिन रूप धरयो।\nश्रद्धा धारण कीनी, तिनको काज सरयो।।\nॐ जय लक्ष्मी रमणा\n\nग्वाल-बाल सँग राजा वन में भक्ति करी।\nमनवांछित फल दीन्हों दीनदयाल हरी।।\nॐ जय लक्ष्मी रमणा\n\nचढ़त प्रसाद सवायो कदलीफल, मेवा।\nधूप-दीप-तुलसी से राजी सत्यदेवा।।\nॐ जय लक्ष्मी रमणा\n\nश्री सत्यनारायण जी की आरती जो कोई नर गावे।\nतन-मन-सुख-सम्पति मन-वांछित फल पावे।।\nॐ जय लक्ष्मी रमणा"
  },
  {
    "id": 141,
    "titleEn": "Om Jai Ambe Gauri",
    "titleHi": "ॐ जय अम्बे गौरी",
    "god": "Durga Maa",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 19–21 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "श्लोक\nसर्वमंगल मांगल्ये, शिवे सर्वार्थसाधिके ।\nशरण्ये त्र्यंबिके गौरी, नारायणी नमोऽस्तुते ।।\n\nआरती\nॐ जय अम्बे गौरी, मैया जय श्यामा गौरी\nतुम को निस दिन ध्यावत, मैयाजी को निस दिन ध्यावत,\nहरि ब्रह्मा शिव री ॥ ॐ जय अम्बे गौरी।।\n\nमाँग सिन्दूर विराजत, टीको मृग मद को।\nमैया टीको मृगमद को,\nउज्ज्वल से दोउ नैना चंद्रवदन नीको ॥\nॐ जय अम्बे गौरी\n\nकनक समान कलेवर, रक्ताम्बर साजे।\nमैया रक्ताम्बर साजे\nरक्त पुष्प गल माला, कण्ठन पर साजे।।\nॐ जय अम्बे गौरी\n\nकेहरि वाहन राजत, खड्ग खपर धारी।\nमैया खड्ग खपर धारी\nसुर-नर-मुनि-जन सेवत, तिनके दुख हारी।।\nॐ जय अम्बे गौरी\n\nकानन कुण्डल शोभित, नासाग्रे मोती।\nमैया नासाग्रे मोती\nकोटिक चन्द्र दिवाकर, सम राजत ज्योति।।\nॐ जय अम्बे गौरी\n\nशुम्भ निशुम्भ बिदारे, महिषासुर घाती।\nमैया महिषासुर घाती\nधूम्र विलोचन नैना, निशिदिन मदमाती।।\nॐ जय अम्बे गौरी\n\nचण्ड मुण्ड संहारे, शोणित बीज हरे। मैया शोणित बीज हरे\nमधु कैटभ दोउ मारे, सुर भयहीन करें।।\nॐ जय अम्बे गौरी\n\nब्रह्माणी रुद्राणी, तुम कमला रानी। मैया तुम कमला रानी\nआगम निगम बखानी, तुम शिव पटरानी।।\nॐ जय अम्बे गौरी\n\nचौंसठ योगिनि गावत, नृत्य करत भैरों। मैया नृत्य करत भैरों\nबाजत ताल मृदंग और बाजत डमरू।।\nॐ जय अम्बे गौरी\n\nतुम हो जग की माता, तुम ही हो भर्ता। मैया तुम ही हो भर्ता\nभक्तन की दुख हर्ता, सुख सम्पति कर्ता।।\nॐ जय अम्बे गौरी ॥\n\nभुजा चार अति शोभित, वर मुद्रा धारी। मैया वर मुद्रा धारी\nमन वांछित फल पावत, सेवत नर नारी।।\nॐ जय अम्बे गौरी\n\nकंचन थाल विराजत, अगर कपूर बाती। मैया अगर कपूर बाती\nमाल केतु में राजत, कोटि रतन ज्योति।।\nॐ जय अम्बे गौरी\n\nमाँ अम्बे की आरती, जो कोई नर गावे।\nमैया जो कोई नर गावे\nकहत शिवानन्द स्वामी, सुख सम्पति पावे।।\nॐ जय अम्बे गौरी।\n\nदेवी वन्दना\nया देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥"
  },
  {
    "id": 142,
    "titleEn": "Aarti Kunj Bihari Ki",
    "titleHi": "आरती कुंजबिहारी की",
    "god": "Lord Krishna",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 22–23 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "आरती कुंजबिहारी की,\nश्री गिरिधर कृष्णमुरारी की ॥\nगले में बैजंती माला,\nबजावै मुरली मधुर बाला।\nश्रवण में कुंडल झलकाला,\nनंद के आनंद नंदलाला।\nगगन सम अंग कांति काली,\nराधिका चमक रही आली ।\nलतन में ठाढ़े बनमाली;\nभ्रमर सी अलक, कस्तूरी तिलक,\nचंद्र सी झलक; ललित छवि श्यामा प्यारी की ॥\nश्री गिरिधर कृष्णमुरारी की\n\nआरती कुंजबिहारी की,\nश्री गिरिधर कृष्णमुरारी की ॥\n\nकनकमय मोर मुकुट बिलसै,\nदेवता दरसन को तरसैं ।\nगगन सों सुमन रासि बरसै;\nबजे मुरचंग, मधुर मिरदंग, ग्वालिन संग;\nअतुल रति गोप कुमारी की ॥\nश्री गिरिधर कृष्णमुरारी की\nआरती कुंजबिहारी की,\nश्री गिरिधर कृष्णमुरारी की ॥\n\nजहां ते प्रकट भई गंगा,\nकलुष कलि हारिणि श्रीगंगा ।\nस्मरन ते होत मोह भंगा; बसी शिव शीश,\nजटा के बीच, हरै अघ कीच;\nचरन छवि श्रीबनवारी की ॥\nश्री गिरिधर कृष्णमुरारी की\n\nआरती कुंजबिहारी की,\nश्री गिरिधर कृष्णमुरारी की ॥\n\nचमकती उज्ज्वल तट रेनू,\nबज रही वृंदावन बेनू ।\nचहुं दिसि गोपि ग्वाल धेनु; हंसत मृदु मंद,\nचांदनी चंद, कटत भव फंद;\nटेर सुन दीन भिखारी की।।\nश्री गिरिधर कृष्णमुरारी की\n\nआरती कुंजबिहारी की,\nश्री गिरिधर कृष्णमुरारी की ॥"
  },
  {
    "id": 143,
    "titleEn": "Om Jai Santoshi Mata",
    "titleHi": "ॐ जय संतोषी माता",
    "god": "Santoshi Maa",
    "type": "Aarti",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 24–25 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; no Romanized lyrics supplied.",
    "roman": "",
    "hindi": "ॐ जय संतोषी माता, मैया जय संतोषी माता ।\nअपने सेवक जन को, सुख संपति दाता ॥\nॐ जय संतोषी माता\n\nसुंदर चीर सुनहरी, मां धारण कीन्हो ।\nहीरा पन्ना दमके, तन शृंगार लीन्हो ॥\nॐ जय संतोषी माता\n\nगेरू लाल छटा छवि, बदन कमल सोहे ।\nमंद हँसत करुणामयी, त्रिभुवन जन मोहे ॥\nॐ जय संतोषी माता\n\nस्वर्ण सिंहासन बैठी, चंवर दुरे प्यारे ।\nधूप, दीप, मधुमेवा, भोग धरे न्यारे ॥\nॐ जय संतोषी माता\n\nगुड़ अरु चना परमप्रिय, तामें संतोष कियो।\nसंतोषी कहलाई, भक्तन वैभव दियो ॥\nॐ जय संतोषी माता\n\nशुक्रवार प्रिय मानत, आज दिवस सोही ।\nभक्त मण्डली छाई, कथा सुनत मोही ॥\nॐ जय संतोषी माता\n\nमंदिर जगमग ज्योति, मंगल ध्वनि छाई ।\nविनय करें हम बालक, चरनन सिर नाई ॥\nॐ जय संतोषी माता\n\nभक्ति भावमय पूजा, अंगीकृत कीजै ।\nजो मन बसे हमारे, इच्छ फल दीजै ॥\nॐ जय संतोषी माता\n\nदुखी, दरिद्री, रोगी, संकटमुक्त किए ।\nबहु धन-धान्य भरे घर, सुख सौभाग्य दिए ॥\nॐ जय संतोषी माता\n\nध्यान धर्यो जिस जन ने, मनवांछित फल पायो ।\nपूजा कथा श्रवण कर, घर आनंद आयो ॥\nॐ जय संतोषी माता\n\nशरण गहे की लज्जा, राखियो जगदंबे ।\nसंकट तू ही निवारे, दयामयी अंबे ॥\nॐ जय संतोषी माता\n\nसंतोषी मां की आरती, जो कोई नर गावे ।\nऋद्धि-सिद्धि सुख संपति, जी भरकर पावे ॥\nॐ जय संतोषी माता"
  },
  {
    "id": 144,
    "titleEn": "Shri Ramchandra Kripalu Bhaj Man",
    "titleHi": "श्री रामचन्द्र कृपालु भजु मन",
    "god": "Lord Rama",
    "type": "Bhajan",
    "source": "Your collection • Aarti-Sangrah.pdf, pages 26 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
    "desc": "Shri Ramchandra stuti from the supplied Aarti Sangrah, including its closing doha.",
    "roman": "",
    "hindi": "श्री रामचन्द्र कृपालु भजु मन हरण भव भय दारुणं ।\nनव कंजलोचन, कंज - मुख, कर - कंज, पद कंजारुणं ॥\n\nकंदर्प अगणित अमित छबि नवनील - नीरद सुन्दरं।\nपटपीत मानहु तड़ित रुचि शुचि नौमि जनक सुतावरं ।\n\nभजु दीनबंधु दिनेश दानव - दैत्यवंश - निकन्दनं।\nरघुनन्द आनंदकंद कौशलचन्द दशरथ - नन्दनं ॥\n\nसिर मुकुट कुंडल तिलक चारु उदारु अंग विभूषणं ।\nआजानुभुज शर - चाप - धर संग्राम - जित - खरदूषणं ॥\n\nइति वदति तुलसीदास शंकर - शेष - मुनि - मन रंजनं ।\nमम हृदय - कंज निवास कुरु कामादि खलदल - गंजनं ॥\n\nमनु जाहिं राचेउ मिलिहि सो बरु सहज सुन्दर साँवरो।\nकरुना निधान सुजान सिलु सनेहु जानत रावरो ॥\n\nएही भाँति गौरि असीस सुनि सिय सहित हियँ हरषीं अली।\nतुलसी भवानिहि पूजी पुनिपुनि मुदित मन मन्दिरचली ॥\n\nदोहा\nजानि गौरी अनुकूल सिय हिय हरषु न जाइ कहि ।\nमंजुल मंगल मूल बाम अंग फरकन लगे ॥"
  },
  {
    "id": 145,
    "titleEn": "Kal Raat Mata Ka Mujhe Email Aaya Hai",
    "titleHi": "कल रात माता का मुझे ईमेल आया है",
    "god": "Durga Maa",
    "type": "Bhajan",
    "source": "Lyrics supplied directly by the collection owner",
    "desc": "Romanized lyrics supplied by the collection owner; repetitions and performance cues preserved. No Hindi lyrics supplied.",
    "roman": "Kal raat mata ka mujhe email aaya hai\nKal raat mata ka mujhe email aaya hai\nMata ne mujhko..\nMata ne mujhko Facebook pe bulaya hai\nKal raat mata ka mujhe Email aaya hai\nKal raat mata ka mujhe Email aaya hai\n\nChatting shatting karenge\nMata se photo share karenge\n(Chatting shatting karenge\nMata se photo share karenge)\nProfile picture mein mata ne sher lagaya hai..\nKal raat mata ka mujhe Email aaya hai\n\nAa ha aa ha aa ha… (jai ho!)\nAa ha aa ha…\nWWW ho.. WWW\nHo saare bolo\nWWW ho.. WWW ho.. WWW\nMata dot com mata ki website hai\nWWW ho… WWW\n\nHai dushton se bachne ko\nDushton se bachne ko\nAntivirus lagaya hai\nKal raat mata ka mujhe Email aaya hai\nKal raat mata ka mujhe Email aaya hai\nMata ne mujhko Facebook pe bulaya hai\nMata ne mujhko Facebook pe bulaya hai\nKal raat mata ka mujhe Email aaya hai (x3)\nJai ho..",
    "hindi": ""
  }
]);

// Romanized pronunciation for the existing Hindi collection.
const romanizedUpdates={
  "110": {
    "roman": "Mandir mein baithee maiya ji aasan lagaaee ke\nHum sab manaae maiya ko taalee bajaaee ke\n\nO ho shankar manaae maiya ko damroo bajaae ke\nHum sab manaae maiya ko taalee bajaaee ke\n\nO kaanhaa manaae raadhaa ko murlee bajaae ke\nHum sab manaae maiya ko taalee bajaaee ke\n\nO vishnu manaae lakshmi ko chakra chalaae ke\nHum sab manaae maiya ko taalee bajaaee ke\n\nO raam ji manaae seetaa ko dhanush chalaae ke\nHum sab manaae maiya ko taalee bajaaee ke\n\nO shravan manaae maiya ko dholak bajaaee ke\nHum sab manaae maiya ko taalee bajaaee ke",
    "desc": "Navratri bhajan transcribed from the supplied Hindi poster. Romanized pronunciation added from the Hindi text."
  },
  "112": {
    "roman": "Sone ka mandir teraa chaandi ki deevaar hai,\nRang teraa dekh ke roop teraa dekh ke sab bhakt hairaan hain,\nMaathe pe tere mukut viraaje, bindiyaa ka rang laal hai,\nRang teraa dekh ke roop teraa dekh ke sab bhakt hairaan hain,\nSone ka mandir......\n\nKaanon mein tere kundal viraaje, nathiyaa ka rang laal hai,\nRang teraa dekh ke roop teraa dekh ke sab bhakt hairaan hain,\nSone ka mandir......\n\nGale mein tere haar viraaje maalaa ka rang laal hai,\nRang teraa dekh ke roop teraa....\nSone ka mandir......\n\nHaathon mein tere kangan viraaje mehndi ka rang laal hai,\nRang teraa dekh ke roop teraa....\nSone ka mandir......",
    "desc": "Hindi lyrics from the supplied Mata Rani poster. Printed refrain shortcuts are preserved; Romanized pronunciation added from the Hindi text."
  },
  "113": {
    "roman": "Kitnee sundar hai maa teri nagree\nBhole paidal chale aa rahe|\n\nUnkee jataa mein gangaa viraaje\nVo bahaate chale aa rahe hain|\n\nUnke maathe pe chandaa viraaje\nVo chamkaate chale aa rahe hain|\n\nUnke kaanon mein bichchhoo viraaje\nVo latkaate chale aa rahe hain|\n\nUnke gale mein naag viraaje\nVo lahraate chale aa rahe hain|\n\nUnke haathon mein damroo viraaje\nVo bajaate chale aa rahe hain|\n\nUnke angon mein baaghchhaalaa\nVo pahankar chale aa rahe hain|",
    "desc": "Visible Hindi verses from the supplied screenshot. The final repeated refrain is partly covered by social-media controls and is omitted. No missing text or Romanized version has been invented. Romanized pronunciation added from the Hindi text."
  },
  "114": {
    "roman": "Paalkee mein hoke savaar chalee re,\nMein to apnee maiya ke dwaar chalee re\nKoi rok sake to rauk le\nMein naach uthee chham chham chham,\nPaalkee mein hoke savaar chalee,\n\nBaagon se joke phool le aayi,\nChun chun kaliyon mein haar banaaee\nMaiya ko haar pahnaane chalee re,\nMein to apnee maiya ke dwaar chalee re\nPaalkee mein ho ke savaar ...\n\nJaipur shahar se chunari mangaaee,\nPyaaraa saa usme gotaa lagaaee\nMaiya ko chunari odhaane chalee re,\nMein to apnee maiya ke dwaar chalee re\nPaalkee mein hoke savaar..\n\nOonchee chadhaiyaan mein to chadh gayi\nMein to apnee maiya ke bhawan par aa gayi\nMaiya ji ka darshan paane chalee re\nMein to apnee maiya ke dwaar chalee re,\nPaalkee mein hoke savaar..",
    "desc": "Hindi lyrics transcribed from the supplied Maa poster. Source wording and refrain shortcuts are retained. Romanized pronunciation added from the Hindi text."
  },
  "117": {
    "roman": "Hai aankh vo jo shyaam ka darshan kiyaa kare\nHai sheesh, jo prabhu charan mein vandan kiyaa kare\nBekaar vo mukh hai jo rahe vyarth baaton mein\nMukh vo hai jo hari naam ka sumiran kiyaa kare\nHeere-motee se nahin shobhaa hai haath ki\nHai haath, jo bhagwan ka poojan kiyaa kare\nMar kar bhi amar naam hai us jeev ka jag mein\nPrabhu prem mein balidaan jo jeevan kiyaa kare\n\nAisee laagee lagan meeraa ho gayi magan\nVo to galee-galee hari gun gaane lagee\nAisee laagee lagan meeraa ho gayi magan\nVo to galee-galee hari gun gaane lagee\n\nMahlon mein palee, ban ke jogan chalee\nMeeraa raanee deevaanee kahaane lagee\nAisee laagee lagan meeraa ho gayi magan\nKoi roke nahin, koi toke nahin\nMeeraa govind-gopaal gaane lagee\nKoi roke nahin, koi toke nahin\nMeeraa govind-gopaal gaane lagee\nBaithee santon ke sang, rangee mohan ke rang\nMeeraa premee-preetam ko manaane lagee\nVo to galee-galee hari gun lagee\n\nAisee laagee lagan meeraa ho gayi magan\nVo to galee-galee hari gun gaane lagee\nMahlon mein palee, ban ke jogan chalee\nMeeraa raanee deevaanee kahaane lagee\nAisee laagee lagan meeraa ho gayi magan\n\nRaanaa ne vish diyaa, maano amrit piyaa\nMeeraa saagar mein saritaa samaane lagee\nRaanaa ne vish diyaa, maano amrit piyaa\nMeeraa saagar mein saritaa samaane lagee\nDukh laakhon sahe, mukh se \"govind\" kahe\nMeeraa govind-gopaal gaane lagee\nVo to galee-galee hari gun gaane lagee\n\nAisee laagee lagan meeraa ho gayi magan\nVo to galee-galee hari gun gaane lagee\nMahlon mein palee, ban ke jogan chalee\nMeeraa raanee deevaanee kahaane lagee\nAisee laagee lagan meeraa ho gayi magan\nAisee laagee lagan meeraa ho gayi magan\nAisee laagee lagan meeraa ho gayi magan",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text."
  },
  "119": {
    "roman": "Sai tere charnon ki, sai tere charnon ki|\nThodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||\nYe man bada chanchal hai ise kaise teraa dhyan dharu\nJitnaa ise samjhaaoon utnaa hi machal jaaye||\n\nSai tere charnon ki, sai tere charnon ki|\nThodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||\n\nNajro se girnaa nahin, chahe jo bhi sajaa denaa|\nNajro se jo gir jaaoon mushkil vo sambhal paanaa||\n\nSai tere charnon ki, sai tere charnon ki|\nThodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||\n\nSunte hain dayaa teri din raat barastee hain|\nIs dayaa ke saagar se ek boond jo mil jaaye||\n\nSai tere charnon ki, sai tere charnon ki|\nThodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||\n\nMere is jeevan ki bas ek tamnaa hai tum saamne ho mere|\nTum saamne ho mere, mera dam hi nikal jaaye||\n\nSai tere charnon ki, sai tere charnon ki|\nThodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text."
  },
  "120": {
    "roman": "Kabhee pyaase ko paanee pilaayaa nahin, baad amrit pilaane se kyaa faayda|\nKabhee girte hue ko uthaayaa nahin, baad aansoo bahaane se kyaa faayda||\n\nMain to mandir gayaa, poojaa aarti ki, poojaa karte hue yah khayaal aa gayaa|\nKabhee maa baap ki sevaa ki hi nahin, sirf poojaa ke karne se kyaa faayda||\n\nMain to satsang gayaa, guru vaanee sunee, guru vaanee ko sun kar khyaal aa gayaa|\nJanam maanav ka le ke dayaa naa karee, phir maanav kahlaane se kyaa faayda||\n\nMaine daan kiyaa maine jap tap kiyaa daan karte hue yah khyaal aa gayaa|\nKabhee bhookhe ko bhojan khilaayaa nahin daan laakhon ka karne se kyaa faayda||\nGangaa nahaane haridvaar kaashee gayaa, gangaa nahaate hi man mein khyaal aa gayaa|\nTan ko dhoyaa magar man ko dhoyaa nahin phir gangaa nahaane se kyaa faayda||\nMaine ved padhe maine shaastr padhe, shaastr padhte hue yah khayaal aa gayaa|\nMaine gyaan kisee ko baantaa nahin, phir gyaanee kahlaane se kyaa faayda||\nMaa pitaa ke hi charnon mein hi chaar dhaam hai, aajaa aajaa yahee mukti ka dhaam hai|\nPitaa maataa ki sevaa ki hi nahin phir teerthon mein jaane ka kyaa faayda||",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text."
  },
  "121": {
    "roman": "Maat pitaa guru charnon mein pranavat baarambaar,\nHum par kiyaa bada upkaar, hum par kiyaa bada upkaar,\n\nMaataa ne jo kast uthaayaa, vah rin kabhee naa jaay chukaayaa,\nAngulee pakadkar chalnaa sikhaayaa, mamtaa ki dee seetal chhaayaa,\nJinkee god mein palkar hum, kahlaate husiyaar,\nHum par kiyaa bada upkaar,\n\nPitaa ne humko yogya banaayaa, kamaa kamaakar ann khilaayaa\nPadhaa likhaa gunvaan banaayaa, jeevan path par chalnaa sikhaayaa\nJod jod apnee sampati ka, banaa diyaa haraqdar\nHum par kiyaa bada upkaar,\n\nTatv gyaan guru ne darshaayaa, andhakaar sab door bhagaayaa\nHriday mein bhakti dip jalaakar, haree darshan ka maarg bataayaa\nBin swaarth hi kripaa kare, kitne bade he udaar\nHum par kiyaa bada upkaar,\n\nPrabhu kripaa se nar tan paayaa, sant milan ka saaj sajaayaa\nBal buddhi aur vidyaa, dekar sab jeevo mein shreshth banaayaa\nJo bhi inkee saran mein aataa, kar dete uddhaar\nHum par kiyaa bada upkaar,",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text."
  },
  "122": {
    "roman": "Thoda dhyan lagaa, sai daude daude aayenge,\nThoda dhyan lagaa, sai daude daude aayenge, tujhe gale se lagaaenge|\nAkhiyaan man ki khol, tujhko darshan vo karaaenge,\nAkhiyaan man ki khol, tujhko darshan vo karaaenge, tujhe gale se lagaaenge||\n\nHain raam ramiyaa vo, hain krishna kanhaiyaa vo, vahee mera sai hai|\nSatkarm raahon pe chalnaa seekhte vo, vahee jagdish hain|\nPrem se pukaar tere paap ko jalaaenge, tujhe gale se lagaaenge||\nThoda dhyan lagaa...\n\nKirpaa ki chhaayaa mein bithaaenge tujhko, kahaan tum jaavoge|\nUnkee dayaa drishti jab jab padegee tum yah bhav tar jaavoge|\nAisaa hai vishvaas man mein jyot jagaayenge, tujhe gale se lagaaenge||\nThoda dhyan lagaa...\n\nMunion ne rishion ne, guru shishya mahimaa ka, kiyaa gungaan hai|\nSai ke charan mein, jhuktee sakal srishti, jhuke bhagwan hai|\nMahimaa hai apaar, satya ki raah vo dikhlaaenge, tujhe gale se lagaaenge||\nThoda dhyan lagaa...",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text."
  },
  "123": {
    "roman": "Mere ghar ke aage sainath teraa mandir ban jaaye\nJab khidkee kholoon to teraa darshan ho jaaye\n\nJab aarti ho teri mujhe ghantee sunaaee de\nMujhe roz savere sainath teri soorat dikhaaee de\nJab bhajan kare milkar raas kaanon mein ghuljaaye\nJab khidkee kholoon to...\n\nAate jaate baabaa tumko mai pranaam karoon\nJo mere laayak ho kuchh aisaa kaam karoon\nTeri sevaa karne se meri kismat khul jaaye\nJab khidkee kholoon to...\n\nNazdeek rahenge to aanaa jaanaa hogaa\nHum bhakto ka baabaa milnaa julnaa hogaa\nSab saath rahe baabaa, jaldee vo din aaye\nJab khidkee kholoon to...",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text."
  },
  "124": {
    "roman": "Zamaane mein kahaan tootee huee tasveer bantee hai\nTere darbaar mein bigdi huee takdeer bantee hai\n\nTaareef teri niklee hai dil se\nAayi hai lab pe banke kavvaalee\n\nShirdee waale sai baabaa, aayaa hai tere dar pe savaalee\nLab pe duaaen, aankhon mein aansoo, dil mein ummeeden, par jholee khaalee\n\nO mere sai devaa, tere sab naam levaa\nJudaa insaan saare, sabhee tujhko hain pyaare\nSune fariyaad sabkee, tujhe hai yaad sabkee\nBada yaa koi chhotaa, nahin maayoos lautaa\nAmeeron ka sahaaraa, ghareebon ka guzaaraa\nTeri rahmat ka kissaa bayaan, akbar kare kyaa\nDo din ki duniya, duniya hai gulshan\nSab phool kaante, tu sabkaa maalee\n\nKhudaa ki shaan tujhmein, dikhe bhagwan tujhmein\nTujhe sab maante hain, teraa ghar jaante hain\nChale aate hain daude, jo khush-kismat hain thode\nYe har raahee ki manzil, ye har kashtee ka saahil\nJise sabne nikaalaa, use toone sambhaala\nTu bichhadon ko milaae, bujhe deepak jalaae\nYe gham ki raaten, raaten ye kaalee\nInko banaa de, eed aur deevaalee",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text."
  },
  "125": {
    "roman": "Sai aapkee kripaa se,\nSab kaam ho rahaa hai,\nKarte ho tum o baabaa,\nKarte ho tum o baabaa,\nMera naam ho rahaa hai,\nSai aapkee kripaa se,\nSab kaam ho rahaa hai||\n\nJo kuchh hai paas mere,\nSabkuchh diyaa hai toone,\nMujhe de ke saaree khushiyaan,\nHar gam liyaa hai toone,\nChintaa nahin hai kuchh bhi,\nAaraam ho rahaa hai,\nKarte ho tum o baabaa,\nKarte ho tum o baabaa,\nMera naam ho rahaa hai,\nSai aapkee kripaa se,\nSab kaam ho rahaa hai||\n\nNirdhan bhi bante raajaa,\nTeri kripaa jo hotee,\nAake teri sharan mein,\nKankad bhi bante motee,\nSumiran ko karke tan man,\nBalvaan ho rahaa hai,\nKarte ho tum o baabaa,\nKarte ho tum o baabaa,\nMera naam ho rahaa hai,\nSai aapkee kripaa se,\nSab kaam ho rahaa hai||\n\nApne kripaa sadaa tum,\nBaabaa banaae rakhnaa,\nBhakti ki jyot dil mein,\nSai jalaae rakhnaa,\nAatho pahar teraa hi,\nGungaan ho rahaa hai,\nKarte ho tum o baabaa,\nKarte ho tum o baabaa,\nMera naam ho rahaa hai,\nSai aapkee kripaa se,\nSab kaam ho rahaa hai||\n\nSai aapkee kripaa se,\nSab kaam ho rahaa hai,\nKarte ho tum o baabaa,\nKarte ho tum o baabaa,\nMera naam ho rahaa hai,\nSai aapkee kripaa se,\nSab kaam ho rahaa hai||",
    "desc": "Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text."
  },
  "126": {
    "roman": "Mere baanke bihaaree laal\nBaanke bihaaree laal\nMere baanke bihaaree laal\nTu itnaa naa kario shringar\nNazar lag jaayegi\nNazar lag jaayegi\n\nMere baanke bihaaree laal\nTu itnaa naa kario shringar\nNazar lag jaayegi\nNazar lag jaayegi\n\nMere baanke bihaaree laal\n\nTori suratiya pe man moraa atkaa\nPyaaraa laage teraa peelaa patkaa\n\nTeri suratiya pe man moraa atkaa\nPyaaraa laage teraa peelaa patkaa\nTeri suratiya pe man moraa atkaa\nPyaaraa laage teraa peelaa\nTeri tedhi medhi chaal\nTeri tedhi medhi chaal, tu itnaa naa kario shringar\nNazar lag jaayegi\nNazar lag jaayegi\nMere baanke bihaaree laal\n\nTori murliyaa pe man mera atkaa\nPyaaraa laage teraa neelaa patkaa\nTori murliyaa pe man mera atkaa\nPyaaraa laage teraa neelaa patkaa\nTori murliyaa pe man mera atkaa\nPyaaraa laage teraa neelaa patkaa\nTore gungaar waale baal, tu itnaa naa kario shringar\nNazar lag jaayegi\nNazar lag jaayegi\nMere baanke bihaaree laal\n\nTori kamriyaa pe man moraa atkaa\nPyaaraa laage teraa kaalaa patkaa\nTori kamriyaa pe man moraa atkaa\nPyaaraa laage teraa kaalaa patkaa\nTori kamriyaa pe man moraa atkaa\nPyaaraa laage teraa kaalaa patkaa\nTere gal mein vaijayanti maal, tu itnaa naa kario shringar\nNazar lag jaayegi\nNazar lag jaayegi\n\nMere baanke bihaaree laal, tu itnaa naa kario shringar\nNazar lag jaayegi",
    "desc": "Hindi lyrics supplied by the collection owner. Wording and repetitions preserved; line breaks added for singing. Romanized pronunciation added from the Hindi text."
  },
  "127": {
    "roman": "Ambe raanee ke bhawan mein naache laanguriyaa,\nNaache laanguriyaa haan naache laanguriyaa,\nSheraavaalee ke bhawan mein naache laanguriyaa,\n\nLaangur gayaa baajaar ko teekaa laayaa mol,\nAre naa pahle meri maiya raanee ko bhawan mein shor,\nSheraavaalee ke bhawan mein naache laanguriyaa,\nAmbe raanee ke bhawan mein naache laanguriyaa,\n\nLaangur gayaa baajaar ko choodi laayaa mol,\nAre naa pahle meri maiya raanee ko bhawan mein shor,\nSheraavaalee ke bhawan mein naache laanguriyaa,\nAmbe raanee ke bhawan mein naache laanguriyaa,\n\nLaangur gayaa baajaar ko maalaa laayaa mol,\nAre naa pahle meri maiya raanee ko bhawan mein shor,\nSheraavaalee ke bhawan mein naache laanguriyaa,\nAmbe raanee ke bhawan mein naache laanguriyaa,\n\nLaangur gayaa baajaar ko saadi laayaa mol,\nAre naa pahle meri maiya raanee ko bhawan mein shor,\nSheraavaalee ke bhawan mein naache laanguriyaa,\nAmbe raanee ke bhawan mein naache laanguriyaa,\n\nLaangur gayaa baajaar ko paayal laayaa mol,\nAre naa pahle meri maiya raanee ko bhawan mein shor,\nSheraavaalee ke bhawan mein naache laanguriyaa,\nAmbe raanee ke bhawan mein naache laanguriyaa,",
    "desc": "Hindi lyrics transcribed from the supplied two-column poster, reading the left column before the right. Original wording and repetitions retained. Romanized pronunciation added from the Hindi text."
  },
  "128": {
    "roman": "Mere keertan mein rang barsaao,\nAao ji gajaanan aao.....\n\nBrahma tum bhi padhaaro,\nVishnu tum bhi padhaaro,\nBhole shankar ko saath le aao,\nAao ji gajaanan aao,\nMere keertan mein rang barsaao,\nAao ji gajaanan aao.....\n\nLakshmi tum bhi padhaaro,\nGauraa tum bhi padhaaro,\nSaraswati ko saath le aao\nAao ji gajaanan aao,\nMere keertan mein rang barsaao,\nAao ji gajaanan aao......\n\nRaam tum bhi padhaaro,\nLakshman tum bhi padhaaro,\nSeetaa maiya ko saath le aao,\nMere keertan mein rang barsaao,\nAao ji gajaanan aao......\n\nShyaam tum bhi padhaaro,\nRaam tum bhi padhaaro,\nRaadhaa raanee ko saath le aao,\nMere keertan mein rang barsaao,\nAao ji gajaanan aao......\n\nHanumat tum bhi padhaaro,\nNaarad tum bhi padhaaro,\nMaiya raanee ko saath le aao,\nMere keertan mein rang barsaao,\nAao ji gajaanan aao",
    "desc": "Hindi lyrics supplied by the collection owner, preserving wording and repetitions. Romanized pronunciation added from the Hindi text."
  },
  "129": {
    "roman": "Ambe tu hai jagdambe kaalee,\nJai durge khappar waali,\nTere hi gun gaaven bharati,\nO maiya hum sab utaare teri aarti|\n\nAmbe tu hai jagdambe kaalee,\nJai durge khappar waali,\nTere hi gun gaaven bharati,\nO maiya hum sab utaare teri aarti|\n\nTere bhakt jano par maataa bheed padee hai bhaaree|\nDaanav dal par toot pado maa karke singh savaaree||\nTere bhakt jano par maataa bheed padee hai bhaaree|\nDaanav dal par toot pado maa karke singh savaaree||\nSau-sau sihon se balshaalee, hai asht bhujaaon waali,\nDushton ko tu hi lalkaartee|\nO maiya hum sab utaare teri aarti||\n\nAmbe tu hai jagdambe kaalee,\nJai durge khappar waali,\nTere hi gun gaaven bharati,\nO maiya hum sab utaare teri aarti|\n\nMaa-bete ka hai is jag me badaa hi nirmal naataa|\nPoot-kapoot sune hai par naa maataa sunee kumaataa||\nMaa-bete ka hai is jag me badaa hi nirmal naataa|\nPoot-kapoot sune hai par naa maataa sunee kumaataa||\nSab pe karoonaa darshaane waali, amrit barsaane waali,\nDukhiyon ke dukhde nivaartee|\nO maiya hum sab utaare teri aarti||\n\nAmbe tu hai jagdambe kaalee,\nJai durge khappar waali,\nTere hi gun gaaven bharati,\nO maiya hum sab utaare teri aarti|\n\nNahin maangate dhan aur daulat, na chaandee na sonaa|\nHum to maangen tere man mein chhotaa saa konaa||\nNahin maangate dhan aur daulat, na chaandee na sonaa|\nHum to maangen tere man mein chhotaa saa konaa||\nSabkee bigdi banaane waali, laaj bachaane waali,\nSatiyon ke sat ko savaanratee|\nO maiya hum sab utaare teri aarti||\n\nAmbe tu hai jagdambe kaalee,\nJai durge khappar waali,\nTere hi gun gaaven bharati,\nO maiya hum sab utaare teri aarti|\n\nCharan sharan mein khade tumhari, le poojaa ki thaalee|\nVarad hast sar par rakh do maa sankat harne waali||\nCharan sharan mein khade tumhari, le poojaa ki thaalee|\nVarad hast sar par rakh do maa sankat harne waali||\nMaa bhar do bhakti ras pyaalee, asht bhujaaon waali,\nBhakton ke kaaraj tu hi saartee||\nO maiya hum sab utaare teri aarti|\n\nAmbe tu hai jagdambe kaalee,\nJai durge khappar waali,\nTere hi gun gaaven bharati,\nO maiya hum sab utaare teri aarti|",
    "desc": "Hindi aarti supplied by the collection owner. Original wording, verses and repetitions retained; line breaks added for singing. Romanized pronunciation added from the Hindi text."
  },
  "130": {
    "roman": "Aarti keejai hanuman lalaa ki|\nDusht dalan raghunaath kalaa ki||\n\nJaake bal se girivar kaanpe|\nRog dosh jaake nikat na jhaanke||\nAnjani putra mahaabaldaayee|\nSantaan ke prabhu sadaa sahaaee||\nAarti keejai hanuman lalaa ki|\nDusht dalan raghunaath kalaa ki||\n\nDe beeraa raghunaath pathaae|\nLankaa jaaree siyaa sudh laae||\nLankaa so kot samudra see khaaee|\nJaat pavansut baar na laaee||\nLankaa jaaree asur sanhaare|\nSiyaaraamjee ke kaaj sanwaare||\nAarti keejai hanuman lalaa ki|\nDusht dalan raghunaath kalaa ki||\n\nLakshman moorchhit pade sakaare|\nAani sanjeevan praan ubaare||\nPaithi pataal tori jamkaare|\nAhiraavan ki bhujaa ukhaare||\nBaaeen bhujaa asur dal maare|\nDaahine bhujaa santjan taare||\nAarti keejai hanuman lalaa ki|\nDusht dalan raghunaath kalaa ki||\n\nSur-nar-muni jan aarti utaaren|\nJai jai jai hanuman uchaaren||\nKanchan thaar kapoor lyoo chhaaee|\nAarti karat anjanaa maaee||\nJo hanuman ji ki aarti gaave|\nBasee baikuth param pad paave||\nAarti keejai hanuman lalaa ki|\nDusht dalan raghunaath kalaa ki||",
    "desc": "Supplied Hindi wording and repetitions retained. Citation markers and Markdown formatting removed from singing text. Romanized pronunciation added from the Hindi text."
  },
  "131": {
    "roman": "Maa muraade pooree karde halvaa baatoongee|\nJyot jagaa ke, sar ko jhukaa ke,\nMain manaaoongee, dar pe aaungi, manaaoongee, main aaungi||\n\nSanto mahanto ko bulaa ke ghar mein karaaoon jagraataa|\nSuntee hai sab ki fariaade, meri bhi sun legee maataa|\nJholee bharegee, sankat haregee, bhetaa gaaoongee,\nMain manaaoongee, bheten gaaoongee, manaaoongee, main aaungi||\n\nDil se suno sheraa waali maa, khadee main ban ke savaalee|\nJholee bharo meri raanee waali maa, godee hai laal se khaalee|\nKripaa karo, godee bharo, main dar pe aaungi, main bheten gaaoongee,\nMain aaungi, main gaaoongee, main aaungi||\n\nBhawan teraa hai sab se oonchaa maa, aur gufa teri nayaaree|\nBhaagya vidaataa jyotaa waali maa, kahtee hai duniya saaree|\nDaati tumhara, le ke sahaaraa, main dar pe aaungi, main bhete gaaoongee,\nMain aaungi, main gaaoongee, main aaungi||\n\nKripaa karo vardaanee maa, chhaayaa hai gam ka andheraa|\nTere binaa mera koi naa, mujh ko bharosaa hai teraa|\nDaati tumhara, le ke sahaaraa, dar pe aaungi, main bhete gaaoongee,\nMain aaungi, main gaaoongee, main aaungi||",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "132": {
    "roman": "Shlok\nKarpooragauram karunaavataaram sansaarasaaram bhujagendrahaaram\nSadaa vasantam hridayaavinde bhavam bhawani sahitam namaami ||\n\nAarti\nJai shiv omkara har Om shiv omkara|\nBrahma vishnu sadaashiv arddhaangee dhaaraa ||\nOm jai shiv omkara\n\nEkaanan chaturaanan panchaannan raaje |\nHansaasann, garudaasan, vrishvaahan saaje||\nOm jai shiv omkara\n\nDo bhuj chaaru chaturbhuj das bhuj ati sohen |\nTeenon roop nirakhtaa tribhuvan jan mohen||\nOm jai shiv omkara\n\nAkshamaalaa, vanmaalaa, mundamaalaadhaaree|\nChandan, mrigamad sohen, bhaale shashidhaaree ||\nOm jai shiv omkara\n\nShvetaambar, peetaambar, baaghaambar angen |\nSanakaadik, brahmaadik, bhootaadik sangen||\nOm jai shiv omkara\n\nKar ke madhya kamandal chakre, trishool dhartaa |\nJagkartaa, duhkhahartaa, jagpaalankartaa ||\nOm jai shiv omkara\n\nBrahma vishnu sadaashiv jaanat avivekaa |\nPravanakshar madhyen ye teenon ekaa||\nOm jai shiv omkara\n\nKaashee mein vishvanaath viraajat nandee bramhachaaree |\nNit uthee bhog lagaavat mahimaa ati bhaaree ||\nOm jai shiv omkara\n\nTrigun shivjee ki aarti jo koi nar gaaven |\nKahat shivaanand swami manvaanchhit phal paaven ||\nOm jai shiv omkara\n\nJai shiv omkara har Om shiv omkara|\nBrahma vishnu sadaashiv arddhaangee dhaaraa||\nOm jai shiv omkara",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "133": {
    "roman": "Om jai gangaadhara jai hara jai girijaadheeshaa|\nTvam maam paalaya nityam kripaya jagadisha||\nHara jai girijaadheeshaa|\n\nKailaase girishikhare kalpadrumavipine|\nGunjati madhukarapunje kunjavane gahane||\nKokilakoojita khelata hansaavana lalitaa|\nRachayati kalaakalaapam nrityati mudasahita ||\nHara jai girijaadheeshaa|\n\nTasminllalitasudeshe shaalaa manirachitaa|\nTanmadhye haranikate gauree mudasahita||\nKreedaa rachayati bhooshaaranchita nijameesham|\nIndraadika sura sevata naamayate sheesham ||\nHara jai girijaadheeshaa|\n\nVibudhavadhoo bahu nrityata naamayate mudasahita|\nKinnara gaayana kurute sapta swar sahitaa||\nDhinakat thai thai dhinakat mridanga vaadayate|\nKvana kvana lalitaa venum madhuram naatayate||\nHara jai girijaadheeshaa|\n\nRuna runa charane rachayati noopuramujjvalitaa|\nChakraavarte bhramayati kurute taam dhika taam||\nTaam taam lupa chupa taam taam damaroo vaadayate|\nAngushthaangulinaadam laasakataam kurute ||\nHara jai girijaadheeshaa|\n\nKarpooradyutigauram panchaananasahitam|\nTrinayanashashidharamaulim vishadharakanthayutam||\nSundarajataayakalaapam paavakayutabhaalam|\nDamarutrishoolapinaakam karadhritanrikapaalam ||\nHara jai girijaadheeshaa|\n\nMundai rachayati maalaa pannagamupaveetam|\nVaamavibhaage girijaaroopam atilalitam||\nSundarasakalashareere kritabhasmaabharanam|\nIti vrishabhadhvajaroopam taapatrayaharanam ||\nHara jai girijaadheeshaa|\n\nShankhaninaadam kritvaa jhallari naadayate|\nNeeraajayate brahma vedarichaam pathate||\nAtimriducharanasarojam hritkamale dhritvaa|\nAvalokayati mahesham eesham abhinatvaa||\nHara jai girijaadheeshaa|\n\nDhyaanam aarti samaye hridaye ati kritvaa|\nRaamastrijataanaatham eesham abhinatvaa||\nSangatimevam pratidina pathanam yah kurute|\nShivasaayujyam gachchhati bhaktyaa yah shrinute ||\nHara jai girijaadheeshaa|",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "134": {
    "roman": "Shlok\nVakratunda mahaakaaya, sooryakotee samaprabhaah |\nNirvighnam kuru me deva, sarvakaaryeshu sarvadaa ||\n\nAarti\nJai ganesh jai ganesh jai ganesh devaa|\nMaataa jaakee paarvatee pitaa mahaadevaa||\nEkdant dayaavant chaar bhujaadhaaree|\nMaathe par tilak sohe moose ki savaaree||\n\nPaan chadhe phool chadhe aur chadhe mevaa|\nLaddoo an ka bhog lage sant kare sevaa||\n\nAndhe ko aankh det kodhin ko kaayaa|\nBaanjhan ko putra det nirdhan ko maayaa||\n\nHaar chadhe phool chadhe aur chadhe mevaa|\nSoorashyaam sharan aaye suphal keeje sevaa|\nJai ganesh jai ganesh jai ganesh devaa|\nMaataa jaakee paarvatee pitaa mahaadevaa||",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "135": {
    "roman": "Shlok\nManojavam maaruta tulyavegam, jitendriyam, buddhimataam varishtham |\nVaataatmajam vaanarayutha mukhyam, shreeraamadutam sharanam prapadye ||\n\nAarti\nAarti keejai hanuman lalaa ki, dusht dalan raghunaath kalaa ki|\nJaake bal se girivar kaanpe, rog dosh jaake nikat na jhaanke||\nAarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|\n\nAnjani putra maha baldaayee, santan ke prabhu sadaa sahaayee|\nDe beeraa raghunaath pathaaye, lankaa jaari siyaa sudhi laaye ||\nAarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|\n\nLankaa sau koti samudra see khaaee, jaat pavansut baar na laaee |\nLankaa jaari asur sanhaare, siyaa raamjee ke kaaj sanwaare ||\nAarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|\n\nLakshman moorchhit pade sakaare, aani sanjeevan praan ubaare |\nPaithi paataal tori jam kaare, ahiraavan ki bhujaa ukhaare ||\nAarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|\n\nBaanye bhujaa asurdal maare, daahine bhujaa sant jan taare |\nSur nar muni aarti utaaren, jai jai jai hanuman uchaaren ||\nAarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|\n\nKanchan thaar kapoor lau chhaaee, aarti kartee anjanaa maaee |\nJo hanuman ji ki aarti gaave, basi baikunth param pad paave ||\nAarti keejai hanuman lalaa ki| dusht dalan raghunaath kalaa ki||",
    "desc": "A separate version from Aarti Sangrah, including its opening shloka and printed repetitions. Your earlier Hanuman Aarti remains unchanged. Romanized pronunciation added from the Hindi text."
  },
  "136": {
    "roman": "Om jai jagdish hare, swami jai jagdish hare,\nBhakt janon ke sankat, daas janon ke sankat,\nKshan mein door kare, Om jai jagdish hare\n\nJo dhyaave phal paave,\nDukh binse man ka, swami dukh binse man ka\nSukh sampati ghar aave, sukh sampati ghar aave,\nKasht mite tan ka, Om jai jagdish hare\n\nMaat pitaa tum mere,\nSharan gahoon main kiskee, swami sharan gahoon main kiskee|\nTum bin aur na doojaa, tum bin aur na doojaa,\nAas karoon main jiskee, Om jai jagdish hare\n\nTum pooran paramaatma,\nTum antaryaami, swami tum antaryaami,\nPaarabrahm parameshwar, paarabrahm parameshwar,\nTum sab ke swami, Om jai jagdish hare\n\nTum karunaa ke saagar,\nTum paalankartaa, swami tum paalankartaa,\nMain moorakh khal kaamee, main sevak tum swami,\nKripaa karo bhartaa, Om jai jagdish hare\n\nTum ho ek agochar,\nSabke praanpati, swami sabke praanpati,\nKis vidhi miloon dayaamay, kis vidhi miloon dayaamay,\nTumko main kumati, Om jai jagdish hare\n\nDeenbandhu dukhhartaa,\nThaakur tum mere, swami thaakur tum mere,\nApne haath uthaao, apne sharan lagaao,\nDwaar padaa tere, Om jai jagdish hare\n\nVishay vikaar mitaao,\nPaap haro devaa, swami paap haro devaa,\nShraddha bhakti badhao, shraddha bhakti badhao,\nSantan ki sevaa, Om jai jagdish hare\n\nTan-man-dhan prabhu,\nSab kuchh hai teraa, swami sab kuchh hai teraa,\nTeraa tujhko arpan, kyaa laage mera, swami kyaa laage mera,\nOm jai jagdish hare\n\nShyaam-sundar ji ki aarti,\nJo koi nar gaave, swami jo koi nar gaave,\nBhaav bhakti shraddha se, manvaanchhit phal paave,\nSwami manvaanchhit phal paave,\nOm jai jagdish hare",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "137": {
    "roman": "Shlok\nKajjala poorita lochana bhaare, stana yuga shobhita mukta haare|\nVeenaa pustaka ranjita haste, bhagwati bharati devee namaste||\n\nAarti\nJai saraswati maataa, jai jai he saraswati maataa|\nSadgun vaibhav shaalinee, tribhuvan vikhyaataa||\nJai saraswati maataa|\n\nChandravadan padmaasinee, dhuti mangalkaaree|\nSohen shubh hans savaaree, atul tejdhaaree ||\nJai saraswati maataa|\n\nBaayen kar mein veenaa, daayen kar mein maalaa|\nSheesh mukut manee sohen, gal motiyan maalaa ||\nJai saraswati maataa|\n\nDevee sharan jo aayen unkaa uddhaar kiyaa|\nPaithee mantharaa daasee, raavan sanhaar kiyaa ||\nJai saraswati maataa|\n\nVidyaa gyaan pradaayinee, gyaan prakaash bharo|\nMoh aur agyaan timir ka jag se naash karo ||\nJai saraswati maataa|\n\nDhoop, dip phal mevaa maa sweekaar karo|\nGyaanchakshu de maataa, bhav se uddhaar karo ||\nJai saraswati maataa|\n\nMaa saraswati ji ki aarti jo koi nar gaaven|\nHitkaaree, sukhkaaree gyaan bhakti paaven ||\nJai saraswati maataa|\n\nJai saraswati maataa, jai jai he saraswati maataa|\nSadgun vaibhav shaalinee, tribhuvan vikhyaataa||\nJai saraswati maataa|\n\nBin maange motee mile maange mile naa bheekh|\nJai saraswati maataa|",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "138": {
    "roman": "Yaa kundendutushaarahaaradhavalaa yaa shubhravastraavritaa yaa\nVeenaavaradandamanditakaraa yaa shvetapadmaasanaa|\nYaa brahmaachyuta shankaraprabhritibhi devaih sadaa\nVanditaa saa maam paatu saraswati bhagwati nihsheshajaadyaapahaa ||1||\n\nArth\nJo vidyaa ki devee bhagwati saraswati kund ke phool, chandramaa, himraashi aur motee ke haar ki tarah dhaval varn ki hain aur jo shwet vastra dhaaran kartee hain, jinke haath mein veenaadand shobhaayamaan hai, jinhonne shwet kamlon par aasan grahan kiyaa hai tathaa brahma, vishnu evam shankar aadi devtaaon dwaara jo sadaa poojit hain, vahee sampoorna jadta aur agyaan ko door kar dene waali maa saraswati humaari rakshaa karen ||1||\n\nShuklaam brahmavichaara saara paramaamaadyaam jagadvyaapineem\nVeenaapustakadhaarineemabhayadaam jaadyaandhakaaraapahaahaste\nSphatikamaalikaam vidadhateem padmaasane sansthitaambande\nTaam parameshvareem bhagavateem buddhipradaam sharadaam||2||\n\nArth\nShuklavarn waali, sampoorna charaachar jagat mein vyaapt, aadishakti, parabrahm ke vishay mein kiye gaye vichaar evam chintan ke saar roop param utkarsh ko dhaaran karne waali, sabhee bhayon se bhaydaan dene waali, agyaan ke andhere ko mitaane waali, haathon mein veenaa, pustak aur sphatik ki maalaa dhaaran karne waali aur padmaasan par viraajmaan buddhi pradaan karne waali, sarvochch aishvary se alankrit, bhagwati sharada (saraswati devee) ki main vandanaa kartaa hoon ||2||",
    "desc": "Saraswati prayer with the Hindi meanings printed in the supplied PDF. Source wording retained. Romanized pronunciation added from the Hindi text."
  },
  "139": {
    "roman": "Om jai lakshmi maataa, maiya jai lakshmi maataa|\nTum ko nis din sevat, maiyaajee ko nis din sevat\nHar vishnu dhaataa || Om jai lakshmi maataa\n\nUmaa ramaa brahmani, tum hi jag maataa|\nMaiya tum hi jag maataa, surya chandra maa dhyaavat,\nNaarad rishi gaataa|| Om jai lakshmi maataa\n\nDurga roop niranjani, sukh sampati daataa|\nMaiya sukh sampati daataa, jo koi tum ko dhyaavat,\nRiddhi siddhi dhan paataa|| Om jai lakshmi maataa\n\nTum paataal nivaasini, tum hi shubh daataa|\nMaiya tum hi shubh daataa, karm prabhaav prakaashini,\nBhav nidhi ki traataa| Om jai lakshmi maataa\n\nJis ghar tum rahtee, tahan sab sadgun aataa|\nMaiya sab sadgun aataa, sab sambhav ho jaataa,\nMan nahin ghabraataa|| Om jai lakshmi maataa\n\nTum bin yagya na hote, vastra na koi paataa|\nMaiya vastra na koi paataa, khaan paan ka vaibhav,\nSab tum se aataa|| Om jai lakshmi maataa\n\nShubh gun mandir sundar, ksheerodadhi jaataa|\nO maiya ksheerodadhi jaataa, ratna chaturdash tum bin,\nKoi nahin paataa|| Om jai lakshmi maataa\n\nMaha lakshmeejee ki aarti, jo koi jan gaataa|\nMaiya jo koi jan gaataa, ur aanand samaataa,\nPaap utar jaataa|| Om jai lakshmi maataa",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "140": {
    "roman": "Om jai lakshmi ramana, shri lakshmi ramana|\nSatyanarayan swami jan-paatak-harana||\nOm jai lakshmi ramana\n\nRatnajadit sinhaasan adbhut chhavi raaje|\nNaarad karat niraajan ghantaa dhwani baaje||\nOm jai lakshmi ramana\n\nPrakat bhaye kali kaaran, dwij ko daras diyo|\nBoodhe braahman bankar kanchan-mahal kiyo||\nOm jai lakshmi ramana\n\nDurbal bheel kathaaro, jinpar kripaa karee|\nChandrachood ek raajaa, jinkee bipati haree||\nOm jai lakshmi ramana\n\nVaishya manorath paayo shraddha taj deenheen|\nSo phal bhogyo prabhujee phir astuti keenheen||\nOm jai lakshmi ramana\n\nBhaav-bhakti ke kaaran chhin-chhin roop dharyo|\nShraddha dhaaran keenee, tinko kaaj sarayo||\nOm jai lakshmi ramana\n\nGwal-baal sang raajaa van mein bhakti karee|\nManvaanchhit phal deenhon deendayaal haree||\nOm jai lakshmi ramana\n\nChadhat prasaad savaayo kadaliphal, mevaa|\nDhoop-deep-tulsee se raajee satyadevaa||\nOm jai lakshmi ramana\n\nShri satyanarayan ji ki aarti jo koi nar gaave|\nTan-man-sukh-sampati man-vaanchhit phal paave||\nOm jai lakshmi ramana",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "141": {
    "roman": "Shlok\nSarvamangala maangalye, shive sarvaarthasaadhike |\nSharanye tryambike gauree, narayani namo'stute ||\n\nAarti\nOm jai ambe gauree, maiya jai shyaamaa gauree\nTum ko nis din dhyaavat, maiyaajee ko nis din dhyaavat,\nHari brahma shiv ree || Om jai ambe gauree||\n\nMaang sindoor viraajat, teeko mrig mad ko|\nMaiya teeko mrigamad ko,\nUjjval se dou nainaa chandravadan neeko ||\nOm jai ambe gauree\n\nKanak samaan kalevar, raktaambar saaje|\nMaiya raktaambar saaje\nRakt pushp gal maalaa, kanthan par saaje||\nOm jai ambe gauree\n\nKehari vaahan raajat, khadg khapar dhaaree|\nMaiya khadg khapar dhaaree\nSur-nar-muni-jan sevat, tinke dukh haaree||\nOm jai ambe gauree\n\nKaanan kundal shobhit, naasaagre motee|\nMaiya naasaagre motee\nKotik chandra divaakar, sam raajat jyoti||\nOm jai ambe gauree\n\nShumbh nishumbh bidaare, mahishaasur ghaatee|\nMaiya mahishaasur ghaatee\nDhoomra vilochan nainaa, nishidin madmaatee||\nOm jai ambe gauree\n\nChand mund sanhaare, shonit beej hare| maiya shonit beej hare\nMadhu kaitabh dou maare, sur bhayheen karen||\nOm jai ambe gauree\n\nBrahmani rudraanee, tum kamala raanee| maiya tum kamala raanee\nAagam nigam bakhaanee, tum shiv patraanee||\nOm jai ambe gauree\n\nChaunsath yogini gaavat, nritya karat bhairon| maiya nritya karat bhairon\nBaajat taal mridang aur baajat damroo||\nOm jai ambe gauree\n\nTum ho jag ki maataa, tum hi ho bhartaa| maiya tum hi ho bhartaa\nBhaktan ki dukh hartaa, sukh sampati kartaa||\nOm jai ambe gauree ||\n\nBhujaa chaar ati shobhit, var mudraa dhaaree| maiya var mudraa dhaaree\nMan vaanchhit phal paavat, sevat nar naaree||\nOm jai ambe gauree\n\nKanchan thaal viraajat, agar kapoor baatee| maiya agar kapoor baatee\nMaal ketu mein raajat, koti ratan jyoti||\nOm jai ambe gauree\n\nMaa ambe ki aarti, jo koi nar gaave|\nMaiya jo koi nar gaave\nKahat shivaanand swami, sukh sampati paave||\nOm jai ambe gauree|\n\nDevee vandanaa\nYaa devee sarvabhooteshu shaktiroopena sansthitaa|\nNamastasyai namastasyai namastasyai namo namah||",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "142": {
    "roman": "Aarti kunj-bihari ki,\nShri giridhar krishnamuraaree ki ||\nGale mein baijantee maalaa,\nBajaavai murlee madhur baalaa|\nShravan mein kundal jhalkaala,\nNand ke aanand nandalaalaa|\nGagan sam ang kaanti kaalee,\nRaadhikaa chamak rahee aalee |\nLatan mein thaadhe banmaalee;\nBhramar see alak, kastooree tilak,\nChandra see jhalak; lalit chhavi shyaamaa pyaaree ki ||\nShri giridhar krishnamuraaree ki\n\nAarti kunj-bihari ki,\nShri giridhar krishnamuraaree ki ||\n\nKanakmay mor mukut bilsai,\nDevtaa darsan ko tarsain |\nGagan son suman raasi barsai;\nBaje murchang, madhur mirdang, gwaalin sang;\nAtul rati gop kumaaree ki ||\nShri giridhar krishnamuraaree ki\nAarti kunj-bihari ki,\nShri giridhar krishnamuraaree ki ||\n\nJahaan te prakat bhaee gangaa,\nKalush kali haarini shreegangaa |\nSmaran te hot moh bhangaa; basee shiv sheesh,\nJataa ke beech, harai agh keech;\nCharan chhavi shreebanvaaree ki ||\nShri giridhar krishnamuraaree ki\n\nAarti kunj-bihari ki,\nShri giridhar krishnamuraaree ki ||\n\nChamaktee ujjval tat renoo,\nBaj rahee vrindavan benoo |\nChahun disi gopi gwal dhenu; hansat mridu mand,\nChaandanee chand, katat bhav phand;\nTer sun deen bhikhaaree ki||\nShri giridhar krishnamuraaree ki\n\nAarti kunj-bihari ki,\nShri giridhar krishnamuraaree ki ||",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "143": {
    "roman": "Om jai santoshi maataa, maiya jai santoshi maataa |\nApne sevak jan ko, sukh sampati daataa ||\nOm jai santoshi maataa\n\nSundar cheer sunahree, maa dhaaran keenho |\nHeeraa pannaa damke, tan shringar leenho ||\nOm jai santoshi maataa\n\nGeroo laal chhataa chhavi, badan kamal sohe |\nMand hansat karunamayi, tribhuvan jan mohe ||\nOm jai santoshi maataa\n\nSvarn sinhaasan baithee, chanwar dure pyaare |\nDhoop, deep, madhumevaa, bhog dhare nyaare ||\nOm jai santoshi maataa\n\nGud aru chanaa parampriya, taamen santosh kiyo|\nSantoshi kehlaayi, bhaktan vaibhav diyo ||\nOm jai santoshi maataa\n\nShukravaar priya maanat, aaj divas sohee |\nBhakt mandalee chhaaee, kathaa sunat mohee ||\nOm jai santoshi maataa\n\nMandir jagmag jyoti, mangal dhwani chhaaee |\nVinay karen hum baalak, charnan sir naaee ||\nOm jai santoshi maataa\n\nBhakti bhaavmay poojaa, angeekrit keejai |\nJo man base humaare, ichchh phal deejai ||\nOm jai santoshi maataa\n\nDukhee, daridree, rogee, sankatmukt kiye |\nBahu dhan-dhaany bhare ghar, sukh saubhagya diye ||\nOm jai santoshi maataa\n\nDhyan dharyo jis jan ne, manvaanchhit phal paayo |\nPoojaa kathaa shravan kar, ghar aanand aayo ||\nOm jai santoshi maataa\n\nSharan gahe ki lajjaa, raakhiyo jagdambe |\nSankat tu hi nivaare, dayamayi ambe ||\nOm jai santoshi maataa\n\nSantoshi maa ki aarti, jo koi nar gaave |\nRiddhi-siddhi sukh sampati, ji bharkar paave ||\nOm jai santoshi maataa",
    "desc": "Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text."
  },
  "144": {
    "roman": "Shri ramchandra kripaalu bhaju man haran bhav bhay daarunan |\nNav kanjalochan, kanj - mukh, kar - kanj, pad kanjaarunan ||\n\nKandarp aganit amit chhabi navneel - neerad sundaran|\nPatpeet maanahu tadit ruchi shuchi naumi janak sutaavaram |\n\nBhaju deenbandhu dinesh daanav - daityavansh - nikandanan|\nRaghunand aanandakand kaushalchand dasharath - nandanan ||\n\nSir mukut kundal tilak chaaru udaaru ang vibhooshnan |\nAajaanubhuj shar - chaap - dhar sangraam - jit - khardooshnan ||\n\nIti vadati tulseedaas shankar - shesh - muni - man ranjanan |\nMam hriday - kanj nivaas kuru kaamaadi khaldal - ganjanan ||\n\nManu jaahin raacheu milihi so baru sahaj sundar saanvaro|\nKarunaa nidhaan sujaan silu sanehu jaanat raavaro ||\n\nEhee bhaanti gauri asees suni siy sahit hiyan harasheen alee|\nTulsee bhavaanihi poojee punipuni mudit man mandir-chali ||\n\nDohaa\nJaani gauree anukool siy hiy harshu na jaai kahi |\nManjul mangal mool baam ang pharkan lage ||",
    "desc": "Shri Ramchandra stuti from the supplied Aarti Sangrah, including its closing doha. Romanized pronunciation added from the Hindi text."
  }
};
for (const b of bhajans) if (romanizedUpdates[b.id]) Object.assign(b, romanizedUpdates[b.id]);
bhajans.push(...[
  {
    "id": 146,
    "titleEn": "Jatadhari Banke Tripurari Banke",
    "titleHi": "जटाधारी बनके त्रिपुरारी बनके",
    "god": "Lord Shiva",
    "type": "Bhajan",
    "hindi": "जटाधारी बनके, त्रिपुरारी बनके\nचले आना भोले जी चले आना।\n\nतुम जोगिया रूप में आना\nनंदी साथ लेके\nडमरू हाथ लेके, चले आना…\n\nतुम मोहिनी रूप में आना\nगंगा साथ लेके,\nचंदा माथ लेके, चले आना…\n\nतुम औघड़ रूप में आना\nभूत साथ लेके,\nमुंड साथ लेके, चले आना…\n\nतुम भोले रूप में आना,\nगौरा साथ लेके,\nगणपत गोद लेके, चले आना…",
    "roman": "Jataadhaaree banke, tripuraaree banke\nChale aanaa bhole ji chale aanaa|\n\nTum jogiyaa roop mein aanaa\nNandee saath leke\nDamroo haath leke, chale aanaa…\n\nTum mohinee roop mein aanaa\nGangaa saath leke,\nChandaa maath leke, chale aanaa…\n\nTum aughad roop mein aanaa\nBhoot saath leke,\nMund saath leke, chale aanaa…\n\nTum bhole roop mein aanaa,\nGauraa saath leke,\nGanpat god leke, chale aanaa…",
    "source": "Your WhatsApp image collection • 1.25.00 AM (10) and (9)",
    "desc": "Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 147,
    "titleEn": "Meri Ankhiyon Ke Samne Hi Rehna",
    "titleHi": "मेरी अंखियों के सामने ही रहना",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "मेरी अंखियों के सामने ही रहना\nओ शेरों वाली जगदम्बे\n\nहम तो चाकर मैया\nतेरे दरबार के\nहो भूखे हैं हम तो मैया\nहो भूखे हैं हम तो मैया\nबस तेरे प्यार के\nमेरी अंखियों के सामने…\n\nविनती हमारी भी\nअब करो मंज़ूर माँ\nहो चरणों से हमको कभी\nचरणों से हमको कभी\nकरना ना दूर माँ\nमेरी अंखियों के सामने…\n\nमुझे जान के अपना बालक\nसब भूल तू मेरी भुला देना\nओ शेरों वाली जगदम्बे\nओ शेरों वाली जगदम्बे\nआँचल में मुझे छिपा लेना\nमेरी अंखियों के सामने…\n\nतुम हो शिव जी की शक्ति\nमैया शेरों वाली\nतुम हो दुर्गा हो अम्बे मैया\nतुम हो काली\nबन के अमृत की\nहो बनके अमृत की धार सदा बहना\nओ शेरों वाली जगदम्बे\nमेरी अंखियों के सामने…\n\nतेरे बालक को तभी माँ सबर आए\nजहाँ देखूँ माँ तू ही तू नज़र आये\nहो जहाँ देखूँ माँ तू ही तू नज़र आये\nमुझे इसके सीवे कुछ ना कहना\nओ शेरों वाली जगदम्बे\nमेरी अंखियों के सामने…",
    "roman": "Meri ankhiyon ke saamne hi rahnaa\nO sheron waali jagdambe\n\nHum to chaakar maiya\nTere darbaar ke\nHo bhookhe hain hum to maiya\nHo bhookhe hain hum to maiya\nBas tere pyaar ke\nMeri ankhiyon ke saamne…\n\nVinati humaari bhi\nAb karo manzoor maa\nHo charnon se humko kabhee\nCharnon se humko kabhee\nKarnaa naa door maa\nMeri ankhiyon ke saamne…\n\nMujhe jaan ke apnaa baalak\nSab bhool tu meri bhulaa denaa\nO sheron waali jagdambe\nO sheron waali jagdambe\nAanchal mein mujhe chhipaa lenaa\nMeri ankhiyon ke saamne…\n\nTum ho shiv ji ki shakti\nMaiya sheron waali\nTum ho durga ho ambe maiya\nTum ho kaalee\nBan ke amrit ki\nHo banke amrit ki dhaar sadaa bahnaa\nO sheron waali jagdambe\nMeri ankhiyon ke saamne…\n\nTere baalak ko tabhee maa sabar aaye\nJahaan dekhoon maa tu hi tu nazar aaye\nHo jahaan dekhoon maa tu hi tu nazar aaye\nMujhe iske seeve kuchh naa kahnaa\nO sheron waali jagdambe\nMeri ankhiyon ke saamne…",
    "source": "Your WhatsApp image collection • 1.25.00 AM (8)",
    "desc": "Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 148,
    "titleEn": "Bada Pyara Saja Hai Tera Dwar Bhawani",
    "titleHi": "बड़ा प्यारा सजा है तेरा द्वार भवानी",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "बड़ा प्यारा सजा है तेरा द्वार भवानी\nजहाँ भक्तों की लगी है कतार भवानी\n\nऊँचे पर्वत भवन निराला\nआ के शीश निवाये संसार भवानी\nप्यारा सजा है तेरा द्वार भवानी\n\nजगमग जगमग ज्योत जगे है\nतेरे चरणों में गंगा की धार भवानी\nतेरे भक्तों की लगी है कतार भवानी\n\nलाल चुनरिया लाल लाल चूड़ा\nगले लाल फूलों के सोहे हार भवानी\nप्यारा सजा है तेरा द्वार भवानी\n\nसावन महीना मैया झूला झूले\nदेखो रूप कंजको का धार भवानी\nप्यारा सजा है तेरा द्वार भवानी\n\nपल में भरती झोली खाली\nतेरे खुले दया के भण्डार भवानी\nतेरे भक्तों की लगी है कतार भवानी\n\nलख्खा को है तेरा सहारा माँ\nकरदे अपने सरल का बेड़ा पार भवानी\nप्यारा सजा है द्वार भवानी\n\nबड़ा प्यारा सजा है तेरा द्वार भवानी\nजहाँ भक्तों की लगी है कतार भवानी",
    "roman": "Bada pyaaraa sajaa hai teraa dwaar bhawani\nJahaan bhakton ki lagee hai kataar bhawani\n\nOonche parvat bhawan niraalaa\nAa ke sheesh nivaaye sansaar bhawani\nPyaaraa sajaa hai teraa dwaar bhawani\n\nJagmag jagmag jyot jage hai\nTere charnon mein gangaa ki dhaar bhawani\nTere bhakton ki lagee hai kataar bhawani\n\nLaal chunariya laal laal chooda\nGale laal phoolon ke sohe haar bhawani\nPyaaraa sajaa hai teraa dwaar bhawani\n\nSaavan maheenaa maiya jhoolaa jhoole\nDekho roop kanjako ka dhaar bhawani\nPyaaraa sajaa hai teraa dwaar bhawani\n\nPal mein bhartee jholee khaalee\nTere khule dayaa ke bhandaar bhawani\nTere bhakton ki lagee hai kataar bhawani\n\nLakkha ko hai teraa sahaaraa maa\nKarde apne saral ka beda paar bhawani\nPyaaraa sajaa hai dwaar bhawani\n\nBada pyaaraa sajaa hai teraa dwaar bhawani\nJahaan bhakton ki lagee hai kataar bhawani",
    "source": "Your WhatsApp image collection • 1.25.00 AM (7)",
    "desc": "Visible song verses transcribed. The unrelated blue quotation above the song and page credits are excluded. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 149,
    "titleEn": "Mandir Saja Ke Rakhna",
    "titleHi": "मन्दिर सजा के रखना",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "मन्दिर सजा के रखना, दीपक जला के रखना\nआएंगी मेरी मैया चुनरी मंगा के रखना\n\nदेखो भवानी मैया करे सिंह की सवारी\nडरना नहीं है भक्तों मैया मेरी है प्यारी\nसिर को झुका के रखना अर्जी लगा के रखना\nदर्शन को देने मैया आएंगी तेरे अंगना\nमन्दिर सजा के…\n\nऊंचे पहाड़ों वाली मेरी मैया भद्र काली\nघर में बुलाना भक्तों मेरी मैया मेहरावाली\nघंटी बजाते रहना, कीर्तन भी गाते रहना\nदर्शन को देने मैया आएंगी तेरे अंगना\nमन्दिर सजा के…\n\nमेरी मईया भोली भाली भरती है झोली खाली\nदरबार में मनाओ रखती ना झोली खाली\nविश्वास मन में रखना श्रद्धा से भक्ति करना\nदर्शन…\nमन्दिर सजा के…",
    "roman": "Mandir sajaa ke rakhnaa, deepak jalaa ke rakhnaa\nAayengi meri maiya chunari mangaa ke rakhnaa\n\nDekho bhawani maiya kare singh ki savaaree\nDarnaa nahin hai bhakton maiya meri hai pyaaree\nSir ko jhukaa ke rakhnaa arjee lagaa ke rakhnaa\nDarshan ko dene maiya aayengi tere angana\nMandir sajaa ke…\n\nOonche pahaadon waali meri maiya bhadr kaalee\nGhar mein bulaanaa bhakton meri maiya mehraavaalee\nGhantee bajaate rahnaa, keertan bhi gaate rahnaa\nDarshan ko dene maiya aayengi tere angana\nMandir sajaa ke…\n\nMeri maiya bholee bhaalee bhartee hai jholee khaalee\nDarbaar mein manaao rakhtee naa jholee khaalee\nVishvaas man mein rakhnaa shraddha se bhakti karnaa\nDarshan…\nMandir sajaa ke…",
    "source": "Your WhatsApp image collection • 1.25.00 AM (6) and (5)",
    "desc": "Tune note in the poster: Mehndi Laga Ke Rakhna. Duplicate screenshots combined into one entry. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 150,
    "titleEn": "Aayi Hai Meri Maiya Solah Shringar Karke",
    "titleHi": "आई है मेरी मैया सोलह श्रृंगार करके",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "आई है मेरी मैया सोलह श्रृंगार करके…2\nजी भर के उसे देखो नैना हजार करके\nआई है मेरी मैया सोलह श्रृंगार करके\n\nपैरों में सजी पायल पायल में लगे घुंघरू…2\nपैरों में लगे महावर जो लाल लाल दमके\nआई है मेरी मैया सोलह श्रृंगार करके\n\nअंगों में सजा चोला अंगों में सजी साड़ी…2\nसिर पर है लाल चुनरी जो लाल लाल दमके\nआई है मेरी मैया सोलह श्रृंगार करके\n\nहाथों में सजा चूड़ा हाथों में सजा कंगना…2\nहाथों में लगी मेहँदी जो लाल लाल दमके\nआई है मेरी मैया सोलह श्रृंगार करके\n\nगले में सजा हरवा गले में सजा पेंडल…2\nगले में फूल में माला जो लाल लाल दमके\nआई है मेरी मैया सोलह श्रृंगार करके\n\nकानों में सजे झुमके नाक में सजी नथनी…2\nहोठों में लगी लाली जो लाल लाल दमके\nआई है मेरी मैया सोलह श्रृंगार करके\n\nमाथे में सजा टीका माथे में सजी बिन्दिया…2\nमाथे में सजा सिन्दूर जो लाल लाल दमके\nआई है मेरी मैया सोलह श्रृंगार करके",
    "roman": "Aayi hai meri maiya solah shringar karke…2\nJi bhar ke use dekho nainaa hazaar karke\nAayi hai meri maiya solah shringar karke\n\nPairon mein sajee paayal paayal mein lage ghunghroo…2\nPairon mein lage mahavar jo laal laal damke\nAayi hai meri maiya solah shringar karke\n\nAngon mein sajaa cholaa angon mein sajee saadi…2\nSir par hai laal chunari jo laal laal damke\nAayi hai meri maiya solah shringar karke\n\nHaathon mein sajaa chooda haathon mein sajaa kanganaa…2\nHaathon mein lagee mehndi jo laal laal damke\nAayi hai meri maiya solah shringar karke\n\nGale mein sajaa harvaa gale mein sajaa pendal…2\nGale mein phool mein maalaa jo laal laal damke\nAayi hai meri maiya solah shringar karke\n\nKaanon mein saje jhumke naak mein sajee nathnee…2\nHothon mein lagee laalee jo laal laal damke\nAayi hai meri maiya solah shringar karke\n\nMaathe mein sajaa teekaa maathe mein sajee bindiyaa…2\nMaathe mein sajaa sindoor jo laal laal damke\nAayi hai meri maiya solah shringar karke",
    "source": "Your WhatsApp image collection • 1.25.00 AM (4)",
    "desc": "Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 151,
    "titleEn": "Maiya Rani Ke Bhawan Mein Hum Deewane Ho Gaye",
    "titleHi": "मैया रानी के भवन में हम दीवाने हो गए",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "मैया रानी के भवन में हम दीवाने हो गए,\nहम दीवाने हो गए माँ हम दीवाने हो गए…\n\nएक तो माँ के पैर सुंदर दूसरी पायल सजी,\nतीसरा महावर लगा है हम दीवाने हो गए,\nमैया रानी के भवन में हम दीवाने हो गए…\n\nएक तो माँ का रूप सुंदर दूसरी साड़ी सजी,\nतीसरा गोटा लगा है हम दीवाने हो गए,\nमैया रानी के भवन में हम दीवाने हो गए…\n\nएक तो माँ के हाथ सुंदर दूसरी चूड़ी सजी,\nतीसरा मेहँदी लगी है हम दीवाने हो गए,\nमैया रानी के भवन में हम दीवाने हो गए…\n\nएक तो माँ का गला है दूसरी माला सजी,\nतीसरा माँ का मुस्कुराना हम दीवाने हो गए,\nमैया रानी के भवन में हम दीवाने हो गए…\n\nएक तो माँ के कान सुंदर दूसरी झुमके सजे,\nतीसरा नथनी सजी है हम दीवाने हो गए,\nमैया रानी के भवन में हम दीवाने हो गए…\n\nएक तो माँ का माथा सुंदर दूसरी बिंदिया लगी,\n[आगे की पंक्तियाँ चित्र में ढकी हुई हैं]",
    "roman": "Maiya raanee ke bhawan mein hum deewane ho gaye,\nHum deewane ho gaye maa hum deewane ho gaye…\n\nEk to maa ke pair sundar doosree paayal sajee,\nTeesraa mahavar lagaa hai hum deewane ho gaye,\nMaiya raanee ke bhawan mein hum deewane ho gaye…\n\nEk to maa ka roop sundar doosree saadi sajee,\nTeesraa gotaa lagaa hai hum deewane ho gaye,\nMaiya raanee ke bhawan mein hum deewane ho gaye…\n\nEk to maa ke haath sundar doosree choodi sajee,\nTeesraa mehndi lagee hai hum deewane ho gaye,\nMaiya raanee ke bhawan mein hum deewane ho gaye…\n\nEk to maa ka galaa hai doosree maalaa sajee,\nTeesraa maa ka muskuraanaa hum deewane ho gaye,\nMaiya raanee ke bhawan mein hum deewane ho gaye…\n\nEk to maa ke kaan sundar doosree jhumke saje,\nTeesraa nathnee sajee hai hum deewane ho gaye,\nMaiya raanee ke bhawan mein hum deewane ho gaye…\n\nEk to maa ka maathaa sundar doosree bindiyaa lagee,\n[Source image: line unclear or covered]",
    "source": "Your WhatsApp image collection • 1.25.00 AM (3)",
    "desc": "Partial source: the last verse is covered by the screenshot banner. Only visible lines are included; the missing portion is marked. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 152,
    "titleEn": "Odhi Odhi Re Maiya Ji Ne Lal Chunari",
    "titleHi": "ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी,\nहो लाल चुनरी, घोटेदार चुनरी,\nओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।\n\nसतयुग में माँ जन्म लियो है, शक्ति माँ कहलाई,\nभोले संग में ब्याह रचाया, हवन में गई समाई,\nओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।\n\nत्रेता में माँ जन्म लियो है, सीता माँ कहलाई,\nराम के संग में ब्याह रचाया, वन में गई चुराई,\nरोये रोये दोनों भाई, देख लाल चुनरी\nओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।\n\nद्वापर में माँ जन्म लियो है, द्रोपदी माँ कहलाई,\nपाण्डव संग में ब्याह रचाया, जुए में गई समाई,\nरोये रोये पांचो भाई, देख लाल चुनरी,\nओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।\n\nकलयुग में माँ जन्म लियो है, वैष्णो माँ कहलाई,\nभैरव बाबा पीछे पड़ गए, गुफा में गई समाई,\nरोये रोये लांगुर भैरव, देख लाल चुनरी,\nओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी,\nहो लाल चुनरी, घोटेदार चुनरी,\nओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।",
    "roman": "Odhi odhi re maiya ji ne laal chunari,\nHo laal chunari, ghotedaar chunari,\nOdhi odhi re maiya ji ne laal chunari||\n\nSatyug mein maa janm liyo hai, shakti maa kehlaayi,\nBhole sang mein byaah rachaayaa, havan mein gayi samaaee,\nOdhi odhi re maiya ji ne laal chunari||\n\nTretaa mein maa janm liyo hai, seetaa maa kehlaayi,\nRaam ke sang mein byaah rachaayaa, van mein gayi churaaee,\nRoye roye donon bhaaee, dekh laal chunari\nOdhi odhi re maiya ji ne laal chunari||\n\nDwaapar mein maa janm liyo hai, dropadi maa kehlaayi,\nPaandav sang mein byaah rachaayaa, jue mein gayi samaaee,\nRoye roye paancho bhaaee, dekh laal chunari,\nOdhi odhi re maiya ji ne laal chunari||\n\nKalyug mein maa janm liyo hai, vaishno maa kehlaayi,\nBhairav baabaa peechhe pad gaye, gufa mein gayi samaaee,\nRoye roye laangur bhairav, dekh laal chunari,\nOdhi odhi re maiya ji ne laal chunari,\nHo laal chunari, ghotedaar chunari,\nOdhi odhi re maiya ji ne laal chunari||",
    "source": "Your WhatsApp image collection • 1.25.00 AM (2)",
    "desc": "Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 153,
    "titleEn": "Main Bani Patang Meri Maiya Ban Gayi Dor",
    "titleHi": "मैं बनी पतंग मेरी मैया बन गई डोर",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "आ गई है मैया गली गली में शोर,\nमैं बनी पतंग मेरी मैया बन गई डोर…\n\nइधर घुमाए चाहे उधर घुमाए,\nजिस ओर चाहे मैया मुझको नचाए,\nनाच रही मैं ऐसे जैसे बन में नाचे मोर,\nमैं बनी पतंग मेरी मैया बन गई डोर…\n\nजिससे भी चाहे मैया पेच लड़ाए,\nपास बुलाए चाहे दूर भगाएं,\nकटु या वापस आऊ मेरा चले ना कोई जोर,\nमैं बनी पतंग मेरी मैया बन गई डोर…\n\nरंग बिरंगी मां ने मुझको बनाया,\nसुख और दुख का है मेल कराया,\nमां के हाथ में डोरी वह ले ले जिसकी ओर,\nमैं बनी पतंग मेरी मैया बन गई डोर…\n\nदूर गगन में मैं तो उड़ती ही जाऊं,\nडर लगता है कहीं कट नहीं जाऊं,\nरास्ता नहीं सूझे चहू नीला घनघोर,\nमैं बनी पतंग मेरी मैया बन गई डोर…",
    "roman": "Aa gayi hai maiya galee galee mein shor,\nMain banee patang meri maiya ban gayi dor…\n\nIdhar ghumaae chahe udhar ghumaae,\nJis or chahe maiya mujhko nachaae,\nNaach rahee main aise jaise ban mein naache mor,\nMain banee patang meri maiya ban gayi dor…\n\nJisse bhi chahe maiya pech ladaaye,\nPaas bulaae chahe door bhagaaen,\nKatu yaa vaapas aaoo mera chale naa koi jor,\nMain banee patang meri maiya ban gayi dor…\n\nRang birangee maa ne mujhko banaayaa,\nSukh aur dukh ka hai mel karaayaa,\nMaa ke haath mein doree vah le le jiskee or,\nMain banee patang meri maiya ban gayi dor…\n\nDoor gagan mein main to udti hi jaaoon,\nDar lagtaa hai kaheen kat nahin jaaoon,\nRaastaa nahin soojhe chahoo neelaa ghanghor,\nMain banee patang meri maiya ban gayi dor…",
    "source": "Your WhatsApp image collection • 1.25.00 AM (1)",
    "desc": "Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 154,
    "titleEn": "Maiya Navratron Mein Jab Dharti Par Aati Hai",
    "titleHi": "मैया नवरात्रों में जब धरती पर आती है",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "मैया नवरात्रों में जब धरती पर आती है,\nकिसको क्या देना है ये सोच के आती है,\n\nपहले नवरात्रे में माँ सब की खबर लेती है,\nदूजे नवरात्रे में अपने खाते में लिख लेती है,\nतिजे नवरात्रे में बात आगे बढ़ती है\nमैया नवरातो…\n\nचौथे नवरात्रे में माँ आसान लगाती है,\nपाचवे नवरात्रे में मैं आ गई हु बताती हैं,\nछटवे नवरात्रे में सबको दर्शन करवाती है,\nमैया नेवरातो…\n\nसते नवरात्रे में खोल देती खजाने है,\nअठे नवरात्रे में लग जाती लुटाने है,\nनोवी नवरात्रे में दोनो हाथो से लुटाती है,\nमैया नवराते…\n\nदसवे दिन माता की विदाई जब आती है,\nसारे धरती के लोगो की आंखे भर आती है,\nसामा फिर आउंगी वादा करके चली जाती है,",
    "roman": "Maiya navraatron mein jab dhartee par aatee hai,\nKisko kyaa denaa hai ye soch ke aatee hai,\n\nPahle navraatre mein maa sab ki khabar letee hai,\nDooje navraatre mein apne khaate mein likh letee hai,\nTije navraatre mein baat aage badhti hai\nMaiya navraato…\n\nChauthe navraatre mein maa aasaan lagaatee hai,\nPaachve navraatre mein main aa gayi hu bataatee hain,\nChhatve navraatre mein sabko darshan karvaatee hai,\nMaiya nevraato…\n\nSate navraatre mein khol detee khajaane hai,\nAthe navraatre mein lag jaatee lutaane hai,\nNovee navraatre mein dono haatho se lutaatee hai,\nMaiya navraate…\n\nDasve din maataa ki vidaaee jab aatee hai,\nSaare dhartee ke logo ki aankhe bhar aatee hai,\nSaamaa phir aaungi vaadaa karke chalee jaatee hai,",
    "source": "Your WhatsApp image collection • 1.25.00 AM",
    "desc": "Visible screenshot text retained. The image ends after the final visible line; no unseen continuation has been added. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 155,
    "titleEn": "Maiya Ka Mukhda Suhana Lagta Hai",
    "titleHi": "मैया का मुखड़ा सुहाना लगता है",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "मैया का मुखड़ा सुहाना लगता है\nभक्तों का तो दिल दिवाना लगता है\nपल भर में हर लेती है [अंतिम शब्द अस्पष्ट]\nइनसे तो रिश्ता पुराना लगता है।\n\nलाल जोड़े में सजी है प्यारी सी मैया\nसब भक्तों को लगी है प्यारी सी मैया\nइनका तो मुखड़ा सलोना लगता है\nभक्तों का तो…\n\n[इस पंक्ति के कुछ शब्द अस्पष्ट हैं]\nतीखे तीखे नयनों में है सुरमा सजा हुआ\nहाथों का कंगना सुहाना लगता है\nभक्तों का…\n\nपीले पीले शेर पर बैठी मेरी मईया\nपार करने आई है सबकी ये नैया\nइनका तो दरबार सुहाना लगता है\nभक्तों का…\n\nएक तरफ लांगुर चले है एक तरफ भैरों\nबीच में मेरी माँ चले है\n[अगली पंक्ति अस्पष्ट है]\nमईया का चोला सुहाना लगता है\nभक्तों का दिल दिवाना…",
    "roman": "Maiya ka mukhda suhaanaa lagtaa hai\nBhakton ka to dil diwana lagtaa hai\nPal bhar mein har letee hai [Source image: line unclear or covered]\nInse to rishtaa puraanaa lagtaa hai|\n\nLaal jode mein sajee hai pyaaree see maiya\nSab bhakton ko lagee hai pyaaree see maiya\nInkaa to mukhda salonaa lagtaa hai\nBhakton ka to…\n\n[Source image: line unclear or covered]\nTeekhe teekhe naynon mein hai surmaa sajaa huaa\nHaathon ka kanganaa suhaanaa lagtaa hai\nBhakton ka…\n\nPeele peele sher par baithee meri maiya\nPaar karne aayi hai sabkee ye naiyaa\nInkaa to darbaar suhaanaa lagtaa hai\nBhakton ka…\n\nEk taraf laangur chale hai ek taraf bhairon\nBeech mein meri maa chale hai\n[Source image: line unclear or covered]\nMaiya ka cholaa suhaanaa lagtaa hai\nBhakton ka dil diwana…",
    "source": "Your WhatsApp image collection • 1.24.59 AM (5)",
    "desc": "Handwritten source. Several words in verses 2 and 4 are difficult to read; transcription needs confirmation against a clearer image. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 156,
    "titleEn": "Lal Phoolon Ki Aayi Hai Bahar",
    "titleHi": "लाल फूलों की आई है बहार",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "लाल फूलों की आई है बहार\nमैया तेरे मन्दिर में\n\nफूल चढ़ाने को गणपति आए\nसंग में अपने रिद्धि सिद्धि लाए\nहोके मूषक सवार मैया तेरे मन्दिर में\nलाल फूलों की…\n\nफूल चढ़ाने को ब्रह्मा जी आए\nसंग में अपने ब्रमाणी को लाए\nहोके हंस पे सवार मैया तेरे मन्दिर में\nलाल फूलों की…\n\nफूल चढ़ाने को विष्णु जी आए\nसंग में अपने लक्ष्मी माँ को लाए\nहोके गरुड़ सवार मैया तेरे मन्दिर में\nलाल फूलों की…\n\nफूल चढ़ाने को शंकर जी आए\nसंग में अपने गौरा माँ को लाए\nहोके नंदी सवार मैया तेरे मन्दिर में\n[अंतिम दोहराव चित्र में ढका हुआ है]",
    "roman": "Laal phoolon ki aayi hai bahaar\nMaiya tere mandir mein\n\nPhool chadhaane ko ganpati aaye\nSang mein apne riddhi siddhi laae\nHoke mooshak savaar maiya tere mandir mein\nLaal phoolon ki…\n\nPhool chadhaane ko brahma ji aaye\nSang mein apne bramani ko laae\nHoke hans pe savaar maiya tere mandir mein\nLaal phoolon ki…\n\nPhool chadhaane ko vishnu ji aaye\nSang mein apne lakshmi maa ko laae\nHoke garud savaar maiya tere mandir mein\nLaal phoolon ki…\n\nPhool chadhaane ko shankar ji aaye\nSang mein apne gauraa maa ko laae\nHoke nandee savaar maiya tere mandir mein\n[Source image: line unclear or covered]",
    "source": "Your WhatsApp image collection • 1.24.59 AM (4)",
    "desc": "The final repeated refrain is obscured by social-media controls and is marked, not reconstructed. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 157,
    "titleEn": "Ambe Maa Aisa Var Dijiye",
    "titleHi": "अंबे मां ऐसा वर दीजिए",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "अंबे मां — ३ ऐसा वर दीजिए\nमैं सुहागन रहूं उम्र भर के लिए\n\nमेरे माथे की बिंदिया चमकती रहे\nयह चमकती रहे उम्र भर के लिए\n\nमेरे हाथों की चूड़ी खनकती रहे\nयह खनकती रहे उम्र भर के लिए\n\nमेरे हाथों की मेहंदी चमकती रहे\nयह चमकती रहे उम्र भर के लिए\n\nमेरे पैरों की पायल छनकती रहे\nयह छनकती रहे उम्र भर के लिए",
    "roman": "Ambe maa — 3 aisaa var deejiye\nMain suhaagan rahoon umr bhar ke liye\n\nMere maathe ki bindiyaa chamaktee rahe\nYah chamaktee rahe umr bhar ke liye\n\nMere haathon ki choodi khanaktee rahe\nYah khanaktee rahe umr bhar ke liye\n\nMere haathon ki mehndi chamaktee rahe\nYah chamaktee rahe umr bhar ke liye\n\nMere pairon ki paayal chhanaktee rahe\nYah chhanaktee rahe umr bhar ke liye",
    "source": "Your WhatsApp image collection • 1.24.59 AM (3)",
    "desc": "Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 158,
    "titleEn": "Dekh Kar Shringar Maa Ka Dil Deewana Ho Gaya",
    "titleHi": "देख कर श्रृंगार मां का दिल दीवाना हो गया",
    "god": "Durga Maa",
    "type": "Bhajan",
    "hindi": "देख कर श्रृंगार मां का दिल दीवाना हो गया,\nदिल दीवाना हो गया मेरा दिल दीवाना हो गया,\nदेख कर श्रृंगार मां का दिल दीवाना हो गया…\n\nचांद से मुखड़े पे मां के लाल बिंदिया है लगी,\nनैनो में कजरा है डाला दिल दीवाना हो गया,\nदेख कर श्रृंगार मां का दिल दीवाना हो गया…\n\nसर पर गोटेदार चुनरी चांद तारों से सजी,\nनौलखा यह हार प्यारा दिल दीवाना हो गया,\nदेख कर श्रृंगार मां का दिल दीवाना हो गया…\n\nहाथ में सोने के कंगन लाल चूड़ी साथ है,\nजिसपे है मेहंदी की लाली दिल दीवाना हो गया,\nदेख कर श्रृंगार मां का दिल दीवाना हो गया…\n\nपैरों में पायल के घुंघरू छम छमा छम छम बजे,\nमन लुभाये तो कहूं मैं दिल दीवाना हो गया,\nदेख कर श्रृंगार मां का दिल दीवाना हो गया…",
    "roman": "Dekh kar shringar maa ka dil deewana ho gayaa,\nDil deewana ho gayaa mera dil deewana ho gayaa,\nDekh kar shringar maa ka dil deewana ho gayaa…\n\nChaand se mukhde pe maa ke laal bindiyaa hai lagee,\nNaino mein kajraa hai daalaa dil deewana ho gayaa,\nDekh kar shringar maa ka dil deewana ho gayaa…\n\nSar par gotedaar chunari chaand taaron se sajee,\nNaulakha yah haar pyaaraa dil deewana ho gayaa,\nDekh kar shringar maa ka dil deewana ho gayaa…\n\nHaath mein sone ke kangan laal choodi saath hai,\nJispe hai mehndi ki laalee dil deewana ho gayaa,\nDekh kar shringar maa ka dil deewana ho gayaa…\n\nPairon mein paayal ke ghunghroo chham chhamaa chham chham baje,\nMan lubhaaye to kahoon main dil deewana ho gayaa,\nDekh kar shringar maa ka dil deewana ho gayaa…",
    "source": "Your WhatsApp image collection • 1.24.59 AM (2)",
    "desc": "Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 159,
    "titleEn": "Hum To Chale Aaye Deva Tumko Manane",
    "titleHi": "हम तो चले आये देवा तुमको मनाने",
    "god": "Lord Ganesha",
    "type": "Bhajan",
    "hindi": "हम तो चले आये देवा तुमको मनाने\nचाहे तू माने चाहे ना माने\n\nरिद्धि भी आई देवा सिद्धि भी आयी\nसारा संसार आया तुमको मनाने\n\nब्रह्मा भी आये देवा ब्रह्माणी भी आयी\nसारा ब्रह्माण्ड आया तुमको मनाने\n\nविष्णु भी आये देवा लक्ष्मी भी आयी\nसारा बैकुण्ठ आया तुमको मनाने\n\nशंकर भी आये देवा गौरा भी आयी\nसारा कैलाश आया तुमको मनाने\n\nरामा भी आये देवा सीता भी आयी\nसारा अयोध्या आया तुमको मनाने\n\nकृष्णा भी आये देवा राधा भी आयी\nसारा गोकुल आया तुमको मनाने।",
    "roman": "Hum to chale aaye devaa tumko manaane\nChahe tu maane chahe naa maane\n\nRiddhi bhi aayi devaa siddhi bhi aayi\nSaaraa sansaar aayaa tumko manaane\n\nBrahma bhi aaye devaa brahmani bhi aayi\nSaaraa brahmand aayaa tumko manaane\n\nVishnu bhi aaye devaa lakshmi bhi aayi\nSaaraa baikunth aayaa tumko manaane\n\nShankar bhi aaye devaa gauraa bhi aayi\nSaaraa kailaash aayaa tumko manaane\n\nRaamaa bhi aaye devaa seetaa bhi aayi\nSaaraa ayodhyaa aayaa tumko manaane\n\nKrishna bhi aaye devaa raadhaa bhi aayi\nSaaraa gokul aayaa tumko manaane|",
    "source": "Your WhatsApp image collection • 1.24.59 AM (1) and 1.24.59 AM",
    "desc": "Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text."
  },
  {
    "id": 160,
    "titleEn": "Keejo Kesari Ke Lal",
    "titleHi": "कीजो केसरी के लाल",
    "god": "Lord Hanuman",
    "type": "Bhajan",
    "source": "Lyrics supplied directly by the collection owner",
    "desc": "Supplied wording, chorus responses and repetitions preserved. Romanized pronunciation added from the Hindi text.",
    "roman": "Ho, keejo, kesari ke laal, mera chhotaa saa ye kaam\nKeejo, kesari ke laal, mera chhotaa saa ye kaam\nHo, meri raam ji keh denaa, jai siyaa-raam (jai shri raam)\n\nKeejo, kesari ke laal, mera chhotaa saa ye kaam\nHo, meri raam ji keh denaa, jai siyaa-raam\n(meri raam ji keh denaa, jai siyaa-raam)\n\nMain raam sang japtaa tumhara sadaa naam\n(main raam sang japtaa tumhara sadaa naam)\nO, apne raam ji se keh denaa, jai siyaa-raam\n(apne raam ji se keh denaa, jai siyaa-raam)\n\nHo, kar do, kesari ke laal, mera chhotaa saa ye kaam\n(kar do, kesari ke laal, mera chhotaa saa ye kaam)\nHo, meri raam ji keh denaa, jai siyaa-raam\n(meri raam ji keh denaa, jai siyaa-raam)\n\nDeen-heen ke sahaare, mahaaveer, tum ho\n(deen-heen ke sahaare, mahaaveer, tum ho)\nApne bhakton ki jagaate taqdeer tum ho\n(apne bhakton ki jagaate taqdeer tum ho) jai shri raam\nApne bhakton ki jagaate taqdeer tum ho\n\nHar dukhiyaa ka haath tum lete ho thaam\n(har dukhiyaa ka haath tum lete ho thaam)\nHo, meri raam ji keh denaa, jai siyaa-raam\n(meri raam ji keh denaa, jai siyaa-raam)\n\nHo, main raam sang japtaa tumhara sadaa naam\n(main raam sang japtaa tumhara sadaa naam)\nO, apne raam ji se keh denaa, jai siyaa-raam\n(apne raam ji se keh denaa, jai siyaa-raam)\n\nO, mahaabali, mahaayoddha, mahaasant tum ho\n(mahaabali, mahaayoddha, mahaasant tum ho)\nLaate sookhe hue baagon mein basant tum ho\n(laate sookhe hue baagon mein basant tum ho)\nHo, laate sookhe hue baagon mein basant tum ho\n\nTeri bhakti se aatma ko miltaa aaraam\n(teri bhakti se aatma ko miltaa aaraam)\nHo, meri raam ji keh denaa, jai siyaa-raam\n(meri raam ji keh denaa, jai siyaa-raam)\n\nHo, kar do, kesari ke laal, mera chhotaa saa ye kaam\n(kar do, kesari ke laal, mera chhotaa saa ye kaam)\nO, apne raam ji se keh denaa, jai siyaa-raam\n(apne raam ji se keh denaa, jai siyaa-raam)",
    "hindi": "हो, कीजो, केसरी के लाल, मेरा छोटा सा ये काम\nकीजो, केसरी के लाल, मेरा छोटा सा ये काम\nहो, मेरी राम जी कह देना, जय सिया-राम (जय श्री राम)\n\nकीजो, केसरी के लाल, मेरा छोटा सा ये काम\nहो, मेरी राम जी कह देना, जय सिया-राम\n(मेरी राम जी कह देना, जय सिया-राम)\n\nमैं राम संग जपता तुम्हारा सदा नाम\n(मैं राम संग जपता तुम्हारा सदा नाम)\nओ, अपने राम जी से कह देना, जय सिया-राम\n(अपने राम जी से कह देना, जय सिया-राम)\n\nहो, कर दो, केसरी के लाल, मेरा छोटा सा ये काम\n(कर दो, केसरी के लाल, मेरा छोटा सा ये काम)\nहो, मेरी राम जी कह देना, जय सिया-राम\n(मेरी राम जी कह देना, जय सिया-राम)\n\nदीन-हीन के सहारे, महावीर, तुम हो\n(दीन-हीन के सहारे, महावीर, तुम हो)\nअपने भक्तों की जगाते तक़दीर तुम हो\n(अपने भक्तों की जगाते तक़दीर तुम हो) जय श्री राम\nअपने भक्तों की जगाते तक़दीर तुम हो\n\nहर दुखिया का हाथ तुम लेते हो थाम\n(हर दुखिया का हाथ तुम लेते हो थाम)\nहो, मेरी राम जी कह देना, जय सिया-राम\n(मेरी राम जी कह देना, जय सिया-राम)\n\nहो, मैं राम संग जपता तुम्हारा सदा नाम\n(मैं राम संग जपता तुम्हारा सदा नाम)\nओ, अपने राम जी से कह देना, जय सिया-राम\n(अपने राम जी से कह देना, जय सिया-राम)\n\nओ, महाबली, महायोद्धा, महासंत तुम हो\n(महाबली, महायोद्धा, महासंत तुम हो)\nलाते सूखे हुए बागों में बसंत तुम हो\n(लाते सूखे हुए बागों में बसंत तुम हो)\nहो, लाते सूखे हुए बागों में बसंत तुम हो\n\nतेरी भक्ति से आत्मा को मिलता आराम\n(तेरी भक्ति से आत्मा को मिलता आराम)\nहो, मेरी राम जी कह देना, जय सिया-राम\n(मेरी राम जी कह देना, जय सिया-राम)\n\nहो, कर दो, केसरी के लाल, मेरा छोटा सा ये काम\n(कर दो, केसरी के लाल, मेरा छोटा सा ये काम)\nओ, अपने राम जी से कह देना, जय सिया-राम\n(अपने राम जी से कह देना, जय सिया-राम)"
  },
  {
    "id": 161,
    "titleEn": "Duniya Rachne Wale Ko Bhagwan Kehte Hain",
    "titleHi": "दुनिया रचने वाले को भगवान कहते हैं",
    "god": "Lord Hanuman",
    "type": "Bhajan",
    "source": "Lyrics supplied directly by the collection owner",
    "desc": "Supplied wording and all chorus responses retained. Romanized pronunciation added from the Hindi text.",
    "roman": "Duniya rachne waale ko bhagwan kehte hain\n(duniya rachne waale ko bhagwan kehte hain)\nAur sankat harne waale ko hanuman kehte hain\n(sankat harne waale ko hanuman kehte hain)\nDuniya rachne waale ko bhagwan kehte hain\n(duniya rachne waale ko bhagwan kehte hain)\nAur sankat harne waale ko hanuman kehte hain\n(sankat harne waale ko hanuman kehte hain)\nO, sankat harne waale ko hanuman kehte hain\n(sankat harne waale ko hanuman kehte hain)\n\nO, ho jaate hain jiske apne paraae\nHanuman usko kanth lagaae\n(hanuman usko kanth lagaae)\n(hanuman usko kanth lagaae)\nO, jab rooth jaaye sansaar saaraa\nBajrangbali tab dete sahaaraa\n(bajrangbali tab dete sahaaraa)\n(bajrangbali tab dete sahaaraa)\nAur apne bhakton…\nApne bhakton ka bajrangi maan karte hain\n(apne bhakton ka bajrangi maan karte hain)\nAur sankat harne waale ko hanuman kehte hain\n(sankat harne waale ko hanuman kehte hain)\nOye, duniya rachne waale ko bhagwan kehte hain\n(duniya rachne waale ko bhagwan kehte hain)\nAur sankat harne waale ko hanuman kehte hain\n(sankat harne waale ko hanuman kehte hain)\n\nHoye, duniya mein kaam koi aisaa nahin hai\nHanuman ke jo bas mein nahin hai\n(hanuman ke jo bas mein nahin hai)\n(hanuman ke jo bas mein nahin hai)\nJo cheez maangon pal mein milegee\nJholee ye khaalee khushiyon se bharegee\n(jholee ye khaalee khushiyon se bharegee)\n(jholee ye khaalee khushiyon se bharegee)\nAur sachche man se…\nSachche man se jo bhi inkaa dhyan karte hain\n(sachche man se jo bhi inkaa dhyan karte hain)\nAur sankat harne waale ko hanuman kehte hain, kehte hain\n(sankat harne waale ko hanuman kehte hain)\nDuniya rachne waale ko bhagwan kehte hain\n(duniya rachne waale ko bhagwan kehte hain)\nAur sankat harne waale ko hanuman kehte hain, kehte hain\n(sankat harne waale ko hanuman kehte hain)\n\nHo, kat jaaye sankat inkee sharan mein\nBaith ke dekho bajrang ke charan mein\n(baith ke dekho bajrang ke charan mein)\n(baith ke dekho bajrang ke charan mein)\nO, lakkha ki baaton ko jhooth mat maano\nPhir naa phansoge jeevan-maran mein\n(phir naa phansoge jeevan-maran mein)\n(phir naa phansoge jeevan-maran mein)\nAur devtaa chitt naa dharahi\nHanumant se sarv sukh karahi\nInke seene mein hardam siyaa-raam rahte hain\n(inke seene mein hardam siyaa-raam rahte hain)\nOye, sankat harne waale ko hanuman kehte hain, kehte hain\n(sankat harne waale ko hanuman kehte hain)\nDuniya rachne waale ko bhagwan kehte hain\n(duniya rachne waale ko bhagwan kehte hain)\nAur sankat harne waale ko hanuman kehte hain, kehte hain\n(sankat harne waale ko hanuman kehte hain)\nOye, sankat harne waale ko hanuman kehte hain, kehte hain\n(sankat harne waale ko hanuman kehte hain)\nO, sankat kate mite sab peeraa\nJo sumirai hanumat bal beeraa",
    "hindi": "दुनिया रचने वाले को भगवान कहते हैं\n(दुनिया रचने वाले को भगवान कहते हैं)\nऔर संकट हरने वाले को हनुमान कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\nदुनिया रचने वाले को भगवान कहते हैं\n(दुनिया रचने वाले को भगवान कहते हैं)\nऔर संकट हरने वाले को हनुमान कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\nओ, संकट हरने वाले को हनुमान कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\n\nओ, हो जाते हैं जिसके अपने पराए\nहनुमान उसको कंठ लगाए\n(हनुमान उसको कंठ लगाए)\n(हनुमान उसको कंठ लगाए)\nओ, जब रूठ जाए संसार सारा\nबजरंगबली तब देते सहारा\n(बजरंगबली तब देते सहारा)\n(बजरंगबली तब देते सहारा)\nऔर अपने भक्तों…\nअपने भक्तों का बजरंगी मान करते हैं\n(अपने भक्तों का बजरंगी मान करते हैं)\nऔर संकट हरने वाले को हनुमान कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\nओए, दुनिया रचने वाले को भगवान कहते हैं\n(दुनिया रचने वाले को भगवान कहते हैं)\nऔर संकट हरने वाले को हनुमान कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\n\nहोए, दुनिया में काम कोई ऐसा नहीं है\nहनुमान के जो बस में नहीं है\n(हनुमान के जो बस में नहीं है)\n(हनुमान के जो बस में नहीं है)\nजो चीज़ माँगों पल में मिलेगी\nझोली ये खाली ख़ुशियों से भरेगी\n(झोली ये खाली ख़ुशियों से भरेगी)\n(झोली ये खाली ख़ुशियों से भरेगी)\nऔर सच्चे मन से…\nसच्चे मन से जो भी इनका ध्यान करते हैं\n(सच्चे मन से जो भी इनका ध्यान करते हैं)\nऔर संकट हरने वाले को हनुमान कहते हैं, कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\nदुनिया रचने वाले को भगवान कहते हैं\n(दुनिया रचने वाले को भगवान कहते हैं)\nऔर संकट हरने वाले को हनुमान कहते हैं, कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\n\nहो, कट जाए संकट इनकी शरण में\nबैठ के देखो बजरंग के चरण में\n(बैठ के देखो बजरंग के चरण में)\n(बैठ के देखो बजरंग के चरण में)\nओ, लख्खा की बातों को झूठ मत मानो\nफिर ना फँसोगे जीवन-मरण में\n(फिर ना फँसोगे जीवन-मरण में)\n(फिर ना फँसोगे जीवन-मरण में)\nऔर देवता चित्त ना धरही\nहनुमंत से सर्व सुख करही\nइनके सीने में हरदम सिया-राम रहते हैं\n(इनके सीने में हरदम सिया-राम रहते हैं)\nओए, संकट हरने वाले को हनुमान कहते हैं, कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\nदुनिया रचने वाले को भगवान कहते हैं\n(दुनिया रचने वाले को भगवान कहते हैं)\nऔर संकट हरने वाले को हनुमान कहते हैं, कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\nओए, संकट हरने वाले को हनुमान कहते हैं, कहते हैं\n(संकट हरने वाले को हनुमान कहते हैं)\nओ, संकट कटे मिटे सब पीरा\nजो सुमिरै हनुमत बल बीरा"
  },
  {
    "id": 162,
    "titleEn": "Paar Na Lagoge Shri Ram Ke Bina",
    "titleHi": "पार ना लगोगे श्री राम के बिना",
    "god": "Lord Hanuman",
    "type": "Bhajan",
    "source": "Lyrics supplied directly by the collection owner",
    "desc": "Supplied song version with spoken interludes and repeated lines retained. Romanized pronunciation added from the Hindi text.",
    "roman": "Oye paar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa\nPaar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa\nSuno paar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa\nPaar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa\nOye raam naa milenge hanuman ke binaa, shri raam naa milenge hanuman ke binaa\nRaam naa milenge hanuman ke binaa, shri raam naa milenge hanuman ke binaa\nBolo paar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa\nPaar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa\n\nVedon ne, puraanon ne keh daalaa, raam ji ka saathee bajrang vaalaa\nVedon ne, puraanon ne keh daalaa, raam ji ka saathee bajrang vaalaa\nOye vedon ne, puraanon ne keh daalaa, raam ji ka saathee bajrang vaalaa\nVedon ne, puraanon ne keh daalaa, raam ji ka saathee bajrang vaalaa\n\nBol jiye hanuman shri raam ke binaa hanuman ji nahi sakte aur hanuman ke binaa shri raam bhi nahi\nJiye hanuman nahin raam ke binaa, raam ji rahe naa hanuman ke binaa\nJiye hanuman nahin raam ke binaa, raam ji rahe naa hanuman ke binaa\nJiye hanuman nahin raam ke binaa, raam ji rahe naa hanuman ke binaa\nJiye hanuman nahin raam ke binaa, raam ji rahe naa hanuman ke binaa\nShri raam bhi rahe na hanuman ke binaa, raam bhi rahe na hanuman ke binaa\nRaam bhi rahe na hanuman ke binaa, shri raam bhi rahe na hanuman ke binaa\nOye paar naa lagoge shri raam ke binaa raam naa milenge hanuman ke binaa\nPaar naa lagoge shri raam ke binaa raam naa milenge hanuman ke binaa\n\nJag ke jo taaranhaare hain, unhen hanuman bade pyaare hain\nJag ke jo taaranhaare hain, unhen hanuman bade pyaare hain\nHaan ji jag ke jo taaranhaare hain, unhen hanuman bade pyaare hain\nJag ke jo taaranhaare hain, unhen hanuman bade pyaare hain\nKar lo sifaaris shri raam ko agar paanaa ho to hanuman ji se sifaarish karo\nKar lo sifaaris daam ke binaa\nRastaa naa milegaa hanuman ke binaa\nKar lo sifaaris daam ke binaa\nRastaa naa milegaa hanuman ke binaa\nKar lo kar lo\nKar lo sifaaris daam ke binaa\nRastaa naa milegaa hanuman ke binaa\nKar lo sifaaris daam ke binaa\nRastaa naa milegaa hanuman ke binaa\nOye rastaa naa milegaa hanuman ke binaa rastaa naa milegaa hanuman ke binaa\nRastaa naa milegaa hanuman ke binaa rastaa naa milegaa hanuman ke binaa\nBolo paar naa lagoge shri raam ke binaa raam naa milenge hanuman ke binaa\nPaar naa lagoge shri raam ke binaa raam naa milenge hanuman ke binaa\n\nJinkaa bharosaa veer hanuman, unkaa bigadta nahin koi kaam\nJinkaa bharosaa veer hanuman, unkaa bigadta nahin koi kaam\nOye jinkaa bharosaa veer hanuman, unkaa bigadta nahin koi kaam\nJinkaa bharosaa veer hanuman, unkaa bigadta nahin koi kaam\nLakkha kahe suno jinko bharosaa hanuman ji ka unke shri raam ka swaarth hai\nLakkha kahe suno hanuman ke binaa kuchh naa milegaa gungaan ke binaa\nLakkha kahe suno hanuman ke binaa kuchh naa milegaa gungaan ke binaa\nOye kuchh naa milegaa gungaan ke binaa kuchh naa milegaa gungaan ke binaa\nKuchh naa milegaa gungaan ke binaa kuchh naa milegaa gungaan ke binaa\nPaar naa lagoge shri raam ke binaa raam naa milenge hanuman ke binaa\nPaar naa lagoge shri raam ke binaa raam naa milenge hanuman ke binaa (sunlon sunlon)\nPaar naa lagoge shri raam ke binaa raam naa milenge hanuman ke binaa\nPaar naa lagoge shri raam ke binaa raam naa milenge hanuman ke binaa (hanuman ke binaa)",
    "hindi": "ओये पार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना\nपार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना\nसुनो पार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना\nपार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना\nओये राम ना मिलेंगे हनुमान के बिना, श्री राम ना मिलेंगे हनुमान के बिना\nराम ना मिलेंगे हनुमान के बिना, श्री राम ना मिलेंगे हनुमान के बिना\nबोलो पार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना\nपार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना\n\nवेदों ने, पुराणों ने कह डाला, राम जी का साथी बजरंग वाला\nवेदों ने, पुराणों ने कह डाला, राम जी का साथी बजरंग वाला\nओये वेदों ने, पुराणों ने कह डाला, राम जी का साथी बजरंग वाला\nवेदों ने, पुराणों ने कह डाला, राम जी का साथी बजरंग वाला\n\nबोल जिए हनुमान श्री राम के बिना हनुमान जी नही सकते और हनुमान के बिना श्री राम भी नही\nजिए हनुमान नहीं राम के बिना, राम जी रहे ना हनुमान के बिना\nजिए हनुमान नहीं राम के बिना, राम जी रहे ना हनुमान के बिना\nजिए हनुमान नहीं राम के बिना, राम जी रहे ना हनुमान के बिना\nजिए हनुमान नहीं राम के बिना, राम जी रहे ना हनुमान के बिना\nश्री राम भी रहे न हनुमान के बिना, राम भी रहे न हनुमान के बिना\nराम भी रहे न हनुमान के बिना, श्री राम भी रहे न हनुमान के बिना\nओये पार ना लगोगे श्री राम के बिना राम ना मिलेंगे हनुमान के बिना\nपार ना लगोगे श्री राम के बिना राम ना मिलेंगे हनुमान के बिना\n\nजग के जो तारनहारे हैं, उन्हें हनुमान बड़े प्यारे हैं\nजग के जो तारनहारे हैं, उन्हें हनुमान बड़े प्यारे हैं\nहाँ जी जग के जो तारनहारे हैं, उन्हें हनुमान बड़े प्यारे हैं\nजग के जो तारनहारे हैं, उन्हें हनुमान बड़े प्यारे हैं\nकर लो सिफारिस श्री राम को अगर पाना हो तो हनुमान जी से सिफारिश करो\nकर लो सिफारिस दाम के बिना\nरस्ता ना मिलेगा हनुमान के बिना\nकर लो सिफारिस दाम के बिना\nरस्ता ना मिलेगा हनुमान के बिना\nकर लो कर लो\nकर लो सिफारिस दाम के बिना\nरस्ता ना मिलेगा हनुमान के बिना\nकर लो सिफारिस दाम के बिना\nरस्ता ना मिलेगा हनुमान के बिना\nओये रस्ता ना मिलेगा हनुमान के बिना रस्ता ना मिलेगा हनुमान के बिना\nरस्ता ना मिलेगा हनुमान के बिना रस्ता ना मिलेगा हनुमान के बिना\nबोलो पार ना लगोगे श्री राम के बिना राम ना मिलेंगे हनुमान के बिना\nपार ना लगोगे श्री राम के बिना राम ना मिलेंगे हनुमान के बिना\n\nजिनका भरोसा वीर हनुमान, उनका बिगड़ता नहीं कोई काम\nजिनका भरोसा वीर हनुमान, उनका बिगड़ता नहीं कोई काम\nओये जिनका भरोसा वीर हनुमान, उनका बिगड़ता नहीं कोई काम\nजिनका भरोसा वीर हनुमान, उनका बिगड़ता नहीं कोई काम\nलक्खा कहे सुनो जिनको भरोसा हनुमान जी का उनके श्री राम का स्वार्थ है\nलक्खा कहे सुनो हनुमान के बिना कुछ ना मिलेगा गुणगान के बिना\nलक्खा कहे सुनो हनुमान के बिना कुछ ना मिलेगा गुणगान के बिना\nओये कुछ ना मिलेगा गुणगान के बिना कुछ ना मिलेगा गुणगान के बिना\nकुछ ना मिलेगा गुणगान के बिना कुछ ना मिलेगा गुणगान के बिना\nपार ना लगोगे श्री राम के बिना राम ना मिलेंगे हनुमान के बिना\nपार ना लगोगे श्री राम के बिना राम ना मिलेंगे हनुमान के बिना (सुनलों सुनलों)\nपार ना लगोगे श्री राम के बिना राम ना मिलेंगे हनुमान के बिना\nपार ना लगोगे श्री राम के बिना राम ना मिलेंगे हनुमान के बिना (हनुमान के बिना)"
  }
]);

bhajans.push({
  "id": 163,
  "titleEn": "Ram Bhi Milenge Tujhe Shyam Bhi Milenge",
  "titleHi": "राम भी मिलेंगे तुझे श्याम भी मिलेंगे",
  "god": "Lord Hanuman",
  "type": "Bhajan",
  "source": "Lyrics supplied directly by the collection owner",
  "desc": "Supplied wording and repetitions preserved. Romanized pronunciation added.",
  "hindi": "राम भी मिलेंगे तुझे,\nश्याम भी मिलेंगे,\nजब तुझे श्री हनुमान,\nजी मिलेंगे,\nराम भी मिलेंगे तुझें,\nश्याम भी मिलेंगे ॥\n\nराम और श्याम को,\nबजरंगी बड़े प्यारे,\nयोद्धा है कन्हैया के,\nराम के दुलारे,\nचाहे जो बजरंगी,\nराम श्याम जी मिलेंगे,\nचाहे जो बजरंगी,\nराम श्याम जी मिलेंगे,\nराम भी मिलेंगे तुझें,\nश्याम भी मिलेंगे ॥\n\nनिर्बल के बल मेरे,\nवीर बजरंगी,\nदुःख में हमेशा बने,\nदुखियों के संगी,\nप्रेम से पुकारो उस,\nपल ही मिलेंगे,\nप्रेम से पुकारो उस,\nपल ही मिलेंगे,\nराम भी मिलेंगे तुझें,\nश्याम भी मिलेंगे ॥\n\nराम को पुकारो चाहे,\nश्याम को निहारो,\nदोनों के लिए तो,\nहनुमान को पुकारो,\n‘लख्खा’ तेरे सारे सकंट,\nपल में टलेंगे,\n‘लख्खा’ तेरे सारे सकंट,\nपल में टलेंगे,\nजब तुझे श्री,\nहनुमान जी मिलेंगे,\nराम भी मिलेंगे तुझें,\nश्याम भी मिलेंगे ॥\n\nराम भी मिलेंगे तुझे,\nश्याम भी मिलेंगे,\nजब तुझे श्री हनुमान,\nजी मिलेंगे,\nराम भी मिलेंगे तुझे,\nश्याम भी मिलेंगे ॥",
  "roman": "Ram bhi milenge tujhe,\nShyam bhi milenge,\nJab tujhe Shri Hanuman,\nJi milenge,\nRam bhi milenge tujhen,\nShyam bhi milenge ||\n\nRam aur Shyam ko,\nBajrangi bade pyaare,\nYoddha hai Kanhaiya ke,\nRam ke dulaare,\nChaahe jo Bajrangi,\nRam Shyam ji milenge,\nChaahe jo Bajrangi,\nRam Shyam ji milenge,\nRam bhi milenge tujhen,\nShyam bhi milenge ||\n\nNirbal ke bal mere,\nVeer Bajrangi,\nDukh mein hamesha bane,\nDukhiyon ke sangi,\nPrem se pukaaro us,\nPal hi milenge,\nPrem se pukaaro us,\nPal hi milenge,\nRam bhi milenge tujhen,\nShyam bhi milenge ||\n\nRam ko pukaaro chaahe,\nShyam ko nihaaro,\nDonon ke liye to,\nHanuman ko pukaaro,\n‘Lakkha’ tere saare sakant,\nPal mein talenge,\n‘Lakkha’ tere saare sakant,\nPal mein talenge,\nJab tujhe Shri,\nHanuman ji milenge,\nRam bhi milenge tujhen,\nShyam bhi milenge ||\n\nRam bhi milenge tujhe,\nShyam bhi milenge,\nJab tujhe Shri Hanuman,\nJi milenge,\nRam bhi milenge tujhe,\nShyam bhi milenge ||"
});

bhajans.push({
  "id": 164,
  "titleEn": "Jhoom Jhoom Nache Dekho Bhakt Hanumana",
  "titleHi": "झूम झूम नाचे देखो भक्त हनुमाना",
  "god": "Lord Hanuman",
  "type": "Bhajan",
  "source": "Hindi and English transliteration supplied directly by the collection owner",
  "desc": "Both supplied lyric versions preserved; Markdown formatting removed.",
  "hindi": "झूम झूम नाचे देखो भक्त हनुमाना,\nबाजे खड़ताल करे राम गुण गाना,\nझूम झूम नाचे देखो वीर हनुमाना ॥\n\nराम धुन में मस्त मगन है,\nराम से लागी लागी इनकी लगन है,\nरामजी के लिए हनुमान है दीवाना,\nझूम झूम नाचे देखो भक्त हनुमाना ॥\n\nजहाँ सत्संग गुणगान श्री राम का,\nवही पर ध्यान होगा भक्त हनुमान का,\nनाम हनुमान जी का भक्ति का खजाना,\nझूम झूम नाचे देखो भक्त हनुमाना ॥\n\nहनुमान लगते है रामजी को प्यारे,\nबजरंगी लगते है रामजी को प्यारे,\nअंजनी के लाला सीता मैय्या के दुलारे,\nरामजी के चरनो में इनका ठिकाना,\nझूम झूम नाचे देखो भक्त हनुमाना ॥",
  "roman": "Jhoom jhoom nache dekho bhakt hanumana,\nBaje khadtal kare ram gun gana,\nJhoom jhoom nache dekho veer hanumana.\n\nRam dhun me mast magan hai,\nRam se lagi lagi inki lagan hai,\nRamji ke liye hanuman hai deewana,\nJhoom jhoom nache dekho bhakt hanumana.\n\nJahan satsang gungaan shri ram ka,\nWahi par dhyan hoga bhakt hanuman ka,\nNaam hanuman ji ka bhakti ka khazana,\nJhoom jhoom nache dekho bhakt hanumana.\n\nHanuman lagte hai ramji ko pyare,\nBajrangi lagte hai ramji ko pyare,\nAnjani ke lala sita maiyya ke dulare,\nRamji ke charno me inka thikana,\nJhoom jhoom nache dekho bhakt hanumana."
});

bhajans.push({
  "id": 165,
  "titleEn": "Shri Ram Ki Gali Mein Tum Jaana",
  "titleHi": "श्री राम की गली में तुम आना (जाना)",
  "god": "Lord Hanuman",
  "type": "Bhajan",
  "source": "Hindi and English transliteration supplied directly by the collection owner",
  "desc": "Both supplied versions retained, including the alternate opening word in Hindi.",
  "hindi": "श्री राम की गली में तुम आना (जाना),\nवहाँ नाचते मिलेंगे हनुमाना।\nउनके तन में है राम, उनके मन में है राम,\nअपनी आंखों से देखे कण-कण में राम।\nश्री राम का है वो दीवाना,\nवहाँ नाचते मिलेंगे हनुमाना।।\n\nऐसा राम जी से जोड़ लिया नाता,\nजब भी देखो उन्हीं के गुण गाता।\nश्री राम के चरणों में ठिकाना,\nवहाँ नाचते मिलेंगे हनुमाना।।\n\nउनसे कहना राम-राम, वो कहेंगे राम-राम,\nकुछ भी सुनते नहीं बस सुनेंगे राम-राम।\nमहामंत्र है भूल ना जाना,\nवहाँ नाचते मिलेंगे हनुमाना।।",
  "roman": "Shri Ram Ki Gali Mein Tum Jaana,\nWahan Naachte Milenge Hanumana.\nUnke Tan Mein Hai Ram, Unke Mann Mein Hai Ram,\nApni Aankhon Se Dekhe Kan Kan Mein Ram.\nShri Ram Ka Hai Wo Deewana,\nWahan Naachte Milenge Hanumana..\n\nAisa Ram Ji Se Jod Liya Naata,\nJab Bhi Dekho Unhi Ke Gun Gaata.\nShri Ram Ke Charano Mein Thikaana,\nWahan Naachte Milenge Hanumana..\n\nUnse Kehna Ram Ram, Wo Kahenge Ram Ram,\nKuch Bhi Sunte Nahi Bas Sunenge Ram Ram.\nMahamantra Hai Bhool Na Jaana,\nWahan Naachte Milenge Hanumana.."
});
