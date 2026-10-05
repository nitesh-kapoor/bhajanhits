const categories=[
['🙏','Lord Ganesha','गणेश जी'],['🔱','Lord Shiva','शिव जी'],['🏹','Lord Rama','राम जी'],['🚩','Lord Hanuman','हनुमान जी'],['🪈','Lord Krishna','कृष्ण जी'],['🌸','Radha Rani','राधा रानी'],['🪷','Durga Maa','दुर्गा माँ'],['🪔','Lakshmi Maa','लक्ष्मी माँ'],['🦚','Saraswati Maa','सरस्वती माँ'],['📿','Sai Baba','साईं बाबा'],['☀️','Surya Dev','सूर्य देव'],['🛕','Khatu Shyam Ji','खाटू श्याम जी']];

// Every song, in permanent-number order (numbers never change or get reused; 67, 90 and 94 were
// duplicates and are retired). lyrics: "full" = traditional / folk text shown in full;
// "partial" = copyrighted song, only the opening lines are kept here and the reader links to the
// full lyrics elsewhere. yt = YouTube video id embedded in the reader ("" = none).
// New songs added by hand need the next free number above the highest one in use.
const bhajans=[
{id:142,no:1,titleEn:"Aarti Kunj Bihari Ki",titleHi:"आरती कुंजबिहारी की",god:"Lord Krishna",godHi:"",type:"Aarti",lyrics:"full",yt:"EMO1AT1UQf0",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 22–23 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`आरती कुंजबिहारी की,
श्री गिरिधर कृष्णमुरारी की ॥
गले में बैजंती माला,
बजावै मुरली मधुर बाला।
श्रवण में कुंडल झलकाला,
नंद के आनंद नंदलाला।
गगन सम अंग कांति काली,
राधिका चमक रही आली ।
लतन में ठाढ़े बनमाली;
भ्रमर सी अलक, कस्तूरी तिलक,
चंद्र सी झलक; ललित छवि श्यामा प्यारी की ॥
श्री गिरिधर कृष्णमुरारी की

आरती कुंजबिहारी की,
श्री गिरिधर कृष्णमुरारी की ॥

कनकमय मोर मुकुट बिलसै,
देवता दरसन को तरसैं ।
गगन सों सुमन रासि बरसै;
बजे मुरचंग, मधुर मिरदंग, ग्वालिन संग;
अतुल रति गोप कुमारी की ॥
श्री गिरिधर कृष्णमुरारी की
आरती कुंजबिहारी की,
श्री गिरिधर कृष्णमुरारी की ॥

जहां ते प्रकट भई गंगा,
कलुष कलि हारिणि श्रीगंगा ।
स्मरन ते होत मोह भंगा; बसी शिव शीश,
जटा के बीच, हरै अघ कीच;
चरन छवि श्रीबनवारी की ॥
श्री गिरिधर कृष्णमुरारी की

आरती कुंजबिहारी की,
श्री गिरिधर कृष्णमुरारी की ॥

चमकती उज्ज्वल तट रेनू,
बज रही वृंदावन बेनू ।
चहुं दिसि गोपि ग्वाल धेनु; हंसत मृदु मंद,
चांदनी चंद, कटत भव फंद;
टेर सुन दीन भिखारी की।।
श्री गिरिधर कृष्णमुरारी की

आरती कुंजबिहारी की,
श्री गिरिधर कृष्णमुरारी की ॥`,
roman:`Aarti kunj-bihari ki,
Shri giridhar krishnamuraaree ki ||
Gale mein baijantee maalaa,
Bajaavai murlee madhur baalaa|
Shravan mein kundal jhalkaala,
Nand ke aanand nandalaalaa|
Gagan sam ang kaanti kaalee,
Raadhikaa chamak rahee aalee |
Latan mein thaadhe banmaalee;
Bhramar see alak, kastooree tilak,
Chandra see jhalak; lalit chhavi shyaamaa pyaaree ki ||
Shri giridhar krishnamuraaree ki

Aarti kunj-bihari ki,
Shri giridhar krishnamuraaree ki ||

Kanakmay mor mukut bilsai,
Devtaa darsan ko tarsain |
Gagan son suman raasi barsai;
Baje murchang, madhur mirdang, gwaalin sang;
Atul rati gop kumaaree ki ||
Shri giridhar krishnamuraaree ki
Aarti kunj-bihari ki,
Shri giridhar krishnamuraaree ki ||

Jahaan te prakat bhaee gangaa,
Kalush kali haarini shreegangaa |
Smaran te hot moh bhangaa; basee shiv sheesh,
Jataa ke beech, harai agh keech;
Charan chhavi shreebanvaaree ki ||
Shri giridhar krishnamuraaree ki

Aarti kunj-bihari ki,
Shri giridhar krishnamuraaree ki ||

Chamaktee ujjval tat renoo,
Baj rahee vrindavan benoo |
Chahun disi gopi gwal dhenu; hansat mridu mand,
Chaandanee chand, katat bhav phand;
Ter sun deen bhikhaaree ki||
Shri giridhar krishnamuraaree ki

Aarti kunj-bihari ki,
Shri giridhar krishnamuraaree ki ||`},

{id:150,no:2,titleEn:"Aayi Hai Meri Maiya Solah Shringar Karke",titleHi:"आई है मेरी मैया सोलह श्रृंगार करके",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"full",yt:"JWZK1eUJoQ4",desc:"Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.25.00 AM (4)",
hindi:`आई है मेरी मैया सोलह श्रृंगार करके…2
जी भर के उसे देखो नैना हजार करके
आई है मेरी मैया सोलह श्रृंगार करके

पैरों में सजी पायल पायल में लगे घुंघरू…2
पैरों में लगे महावर जो लाल लाल दमके
आई है मेरी मैया सोलह श्रृंगार करके

अंगों में सजा चोला अंगों में सजी साड़ी…2
सिर पर है लाल चुनरी जो लाल लाल दमके
आई है मेरी मैया सोलह श्रृंगार करके

हाथों में सजा चूड़ा हाथों में सजा कंगना…2
हाथों में लगी मेहँदी जो लाल लाल दमके
आई है मेरी मैया सोलह श्रृंगार करके

गले में सजा हरवा गले में सजा पेंडल…2
गले में फूल में माला जो लाल लाल दमके
आई है मेरी मैया सोलह श्रृंगार करके

कानों में सजे झुमके नाक में सजी नथनी…2
होठों में लगी लाली जो लाल लाल दमके
आई है मेरी मैया सोलह श्रृंगार करके

माथे में सजा टीका माथे में सजी बिन्दिया…2
माथे में सजा सिन्दूर जो लाल लाल दमके
आई है मेरी मैया सोलह श्रृंगार करके`,
roman:`Aayi hai meri maiya solah shringar karke…2
Ji bhar ke use dekho nainaa hazaar karke
Aayi hai meri maiya solah shringar karke

Pairon mein sajee paayal paayal mein lage ghunghroo…2
Pairon mein lage mahavar jo laal laal damke
Aayi hai meri maiya solah shringar karke

Angon mein sajaa cholaa angon mein sajee saadi…2
Sir par hai laal chunari jo laal laal damke
Aayi hai meri maiya solah shringar karke

Haathon mein sajaa chooda haathon mein sajaa kanganaa…2
Haathon mein lagee mehndi jo laal laal damke
Aayi hai meri maiya solah shringar karke

Gale mein sajaa harvaa gale mein sajaa pendal…2
Gale mein phool mein maalaa jo laal laal damke
Aayi hai meri maiya solah shringar karke

Kaanon mein saje jhumke naak mein sajee nathnee…2
Hothon mein lagee laalee jo laal laal damke
Aayi hai meri maiya solah shringar karke

Maathe mein sajaa teekaa maathe mein sajee bindiyaa…2
Maathe mein sajaa sindoor jo laal laal damke
Aayi hai meri maiya solah shringar karke`},

{id:115,no:3,titleEn:"Achyutam Keshavam",titleHi:"",god:"Lord Krishna",godHi:"",type:"Bhajan",lyrics:"partial",yt:"yk-Y2jJeBqk",desc:"Romanized lyrics from the supplied PDF. Columns read top to bottom, then left to right. Source spelling and repetition cues preserved. No Hindi lyrics were supplied.",source:"Your collection • bahajans-lyrcis.pdf, page 1",
hindi:``,
roman:`Achyutam Keshavam Krishna Damodaram`},

{id:117,no:4,titleEn:"Aisi Lagi Lagan",titleHi:"ऐसी लागी लगन",god:"Lord Krishna",godHi:"",type:"Bhajan",lyrics:"partial",yt:"dnCE-kSHES0",desc:"Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text.",source:"Your collection • bahajans-lyrcis.pdf, page 3",
hindi:`है आँख वो जो श्याम का दर्शन किया करे
है शीश, जो प्रभु चरण में वंदन किया करे
बेकार वो मुख है जो रहे व्यर्थ बातों में
मुख वो है जो हरि नाम का सुमिरन किया करे`,
roman:`Hai aankh vo jo shyaam ka darshan kiyaa kare
Hai sheesh, jo prabhu charan mein vandan kiyaa kare
Bekaar vo mukh hai jo rahe vyarth baaton mein
Mukh vo hai jo hari naam ka sumiran kiyaa kare`},

{id:157,no:5,titleEn:"Ambe Maa Aisa Var Dijiye",titleHi:"अंबे मां ऐसा वर दीजिए",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"full",yt:"GQJx1AzJPyE",desc:"Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.24.59 AM (3)",
hindi:`अंबे मां — ३ ऐसा वर दीजिए
मैं सुहागन रहूं उम्र भर के लिए

मेरे माथे की बिंदिया चमकती रहे
यह चमकती रहे उम्र भर के लिए

मेरे हाथों की चूड़ी खनकती रहे
यह खनकती रहे उम्र भर के लिए

मेरे हाथों की मेहंदी चमकती रहे
यह चमकती रहे उम्र भर के लिए

मेरे पैरों की पायल छनकती रहे
यह छनकती रहे उम्र भर के लिए`,
roman:`Ambe maa — 3 aisaa var deejiye
Main suhaagan rahoon umr bhar ke liye

Mere maathe ki bindiyaa chamaktee rahe
Yah chamaktee rahe umr bhar ke liye

Mere haathon ki choodi khanaktee rahe
Yah khanaktee rahe umr bhar ke liye

Mere haathon ki mehndi chamaktee rahe
Yah chamaktee rahe umr bhar ke liye

Mere pairon ki paayal chhanaktee rahe
Yah chhanaktee rahe umr bhar ke liye`},

{id:127,no:6,titleEn:"Ambe Rani Ke Bhawan Mein Nache Languriya",titleHi:"अम्बे रानी के भवन में नाचे लांगुरिया",god:"Durga Maa",godHi:"दुर्गा माँ",type:"Bhajan",lyrics:"full",yt:"KB5lfQY0HEI",desc:"Hindi lyrics transcribed from the supplied two-column poster, reading the left column before the right. Original wording and repetitions retained. Romanized pronunciation added from the Hindi text.",source:"Your collection • Supplied green lyrics poster",
hindi:`अम्बे रानी के भवन में नाचे लांगुरिया,
नाचे लांगुरिया हाँ नाचे लांगुरिया,
शेरावाली के भवन में नाचे लांगुरिया,

लांगुर गया बाजार को टीका लाया मोल,
अरे ना पहले मेरी मैया रानी को भवन में शोर,
शेरावाली के भवन में नाचे लांगुरिया,
अम्बे रानी के भवन में नाचे लांगुरिया,

लांगुर गया बाजार को चूड़ी लाया मोल,
अरे ना पहले मेरी मैया रानी को भवन में शोर,
शेरावाली के भवन में नाचे लांगुरिया,
अम्बे रानी के भवन में नाचे लांगुरिया,

लांगुर गया बाजार को माला लाया मोल,
अरे ना पहले मेरी मैया रानी को भवन में शोर,
शेरावाली के भवन में नाचे लांगुरिया,
अम्बे रानी के भवन में नाचे लांगुरिया,

लांगुर गया बाजार को साड़ी लाया मोल,
अरे ना पहले मेरी मैया रानी को भवन में शोर,
शेरावाली के भवन में नाचे लांगुरिया,
अम्बे रानी के भवन में नाचे लांगुरिया,

लांगुर गया बाजार को पायल लाया मोल,
अरे ना पहले मेरी मैया रानी को भवन में शोर,
शेरावाली के भवन में नाचे लांगुरिया,
अम्बे रानी के भवन में नाचे लांगुरिया,`,
roman:`Ambe raanee ke bhawan mein naache laanguriyaa,
Naache laanguriyaa haan naache laanguriyaa,
Sheraavaalee ke bhawan mein naache laanguriyaa,

Laangur gayaa baajaar ko teekaa laayaa mol,
Are naa pahle meri maiya raanee ko bhawan mein shor,
Sheraavaalee ke bhawan mein naache laanguriyaa,
Ambe raanee ke bhawan mein naache laanguriyaa,

Laangur gayaa baajaar ko choodi laayaa mol,
Are naa pahle meri maiya raanee ko bhawan mein shor,
Sheraavaalee ke bhawan mein naache laanguriyaa,
Ambe raanee ke bhawan mein naache laanguriyaa,

Laangur gayaa baajaar ko maalaa laayaa mol,
Are naa pahle meri maiya raanee ko bhawan mein shor,
Sheraavaalee ke bhawan mein naache laanguriyaa,
Ambe raanee ke bhawan mein naache laanguriyaa,

Laangur gayaa baajaar ko saadi laayaa mol,
Are naa pahle meri maiya raanee ko bhawan mein shor,
Sheraavaalee ke bhawan mein naache laanguriyaa,
Ambe raanee ke bhawan mein naache laanguriyaa,

Laangur gayaa baajaar ko paayal laayaa mol,
Are naa pahle meri maiya raanee ko bhawan mein shor,
Sheraavaalee ke bhawan mein naache laanguriyaa,
Ambe raanee ke bhawan mein naache laanguriyaa,`},

{id:129,no:7,titleEn:"Ambe Tu Hai Jagdambe Kali",titleHi:"अम्बे तू है जगदम्बे काली",god:"Durga Maa",godHi:"दुर्गा माँ",type:"Aarti",lyrics:"full",yt:"dVTUUtOHUCA",desc:"Hindi aarti supplied by the collection owner. Original wording, verses and repetitions retained; line breaks added for singing. Romanized pronunciation added from the Hindi text.",source:"Your collection • Lyrics supplied directly",
hindi:`अम्बे तू है जगदम्बे काली,
जय दुर्गे खप्पर वाली,
तेरे ही गुण गावें भारती,
ओ मैया हम सब उतारे तेरी आरती।

अम्बे तू है जगदम्बे काली,
जय दुर्गे खप्पर वाली,
तेरे ही गुण गावें भारती,
ओ मैया हम सब उतारे तेरी आरती।

तेरे भक्त जनो पर माता भीड़ पड़ी है भारी।
दानव दल पर टूट पडो माँ करके सिंह सवारी॥
तेरे भक्त जनो पर माता भीड़ पड़ी है भारी।
दानव दल पर टूट पडो माँ करके सिंह सवारी॥
सौ-सौ सिहों से बलशाली, है अष्ट भुजाओं वाली,
दुष्टों को तू ही ललकारती।
ओ मैया हम सब उतारे तेरी आरती॥

अम्बे तू है जगदम्बे काली,
जय दुर्गे खप्पर वाली,
तेरे ही गुण गावें भारती,
ओ मैया हम सब उतारे तेरी आरती।

माँ-बेटे का है इस जग मे बडा ही निर्मल नाता।
पूत-कपूत सुने है पर ना माता सुनी कुमाता॥
माँ-बेटे का है इस जग मे बडा ही निर्मल नाता।
पूत-कपूत सुने है पर ना माता सुनी कुमाता॥
सब पे करूणा दर्शाने वाली, अमृत बरसाने वाली,
दुखियों के दुखडे निवारती।
ओ मैया हम सब उतारे तेरी आरती॥

अम्बे तू है जगदम्बे काली,
जय दुर्गे खप्पर वाली,
तेरे ही गुण गावें भारती,
ओ मैया हम सब उतारे तेरी आरती।

नहीं मांगते धन और दौलत, न चांदी न सोना।
हम तो मांगें तेरे मन में छोटा सा कोना॥
नहीं मांगते धन और दौलत, न चांदी न सोना।
हम तो मांगें तेरे मन में छोटा सा कोना॥
सबकी बिगड़ी बनाने वाली, लाज बचाने वाली,
सतियों के सत को सवांरती।
ओ मैया हम सब उतारे तेरी आरती॥

अम्बे तू है जगदम्बे काली,
जय दुर्गे खप्पर वाली,
तेरे ही गुण गावें भारती,
ओ मैया हम सब उतारे तेरी आरती।

चरण शरण में खड़े तुम्हारी, ले पूजा की थाली।
वरद हस्त सर पर रख दो माँ संकट हरने वाली॥
चरण शरण में खड़े तुम्हारी, ले पूजा की थाली।
वरद हस्त सर पर रख दो माँ संकट हरने वाली॥
माँ भर दो भक्ति रस प्याली, अष्ट भुजाओं वाली,
भक्तों के कारज तू ही सारती।।
ओ मैया हम सब उतारे तेरी आरती।

अम्बे तू है जगदम्बे काली,
जय दुर्गे खप्पर वाली,
तेरे ही गुण गावें भारती,
ओ मैया हम सब उतारे तेरी आरती।`,
roman:`Ambe tu hai jagdambe kaalee,
Jai durge khappar waali,
Tere hi gun gaaven bharati,
O maiya hum sab utaare teri aarti|

Ambe tu hai jagdambe kaalee,
Jai durge khappar waali,
Tere hi gun gaaven bharati,
O maiya hum sab utaare teri aarti|

Tere bhakt jano par maataa bheed padee hai bhaaree|
Daanav dal par toot pado maa karke singh savaaree||
Tere bhakt jano par maataa bheed padee hai bhaaree|
Daanav dal par toot pado maa karke singh savaaree||
Sau-sau sihon se balshaalee, hai asht bhujaaon waali,
Dushton ko tu hi lalkaartee|
O maiya hum sab utaare teri aarti||

Ambe tu hai jagdambe kaalee,
Jai durge khappar waali,
Tere hi gun gaaven bharati,
O maiya hum sab utaare teri aarti|

Maa-bete ka hai is jag me badaa hi nirmal naataa|
Poot-kapoot sune hai par naa maataa sunee kumaataa||
Maa-bete ka hai is jag me badaa hi nirmal naataa|
Poot-kapoot sune hai par naa maataa sunee kumaataa||
Sab pe karoonaa darshaane waali, amrit barsaane waali,
Dukhiyon ke dukhde nivaartee|
O maiya hum sab utaare teri aarti||

Ambe tu hai jagdambe kaalee,
Jai durge khappar waali,
Tere hi gun gaaven bharati,
O maiya hum sab utaare teri aarti|

Nahin maangate dhan aur daulat, na chaandee na sonaa|
Hum to maangen tere man mein chhotaa saa konaa||
Nahin maangate dhan aur daulat, na chaandee na sonaa|
Hum to maangen tere man mein chhotaa saa konaa||
Sabkee bigdi banaane waali, laaj bachaane waali,
Satiyon ke sat ko savaanratee|
O maiya hum sab utaare teri aarti||

Ambe tu hai jagdambe kaalee,
Jai durge khappar waali,
Tere hi gun gaaven bharati,
O maiya hum sab utaare teri aarti|

Charan sharan mein khade tumhari, le poojaa ki thaalee|
Varad hast sar par rakh do maa sankat harne waali||
Charan sharan mein khade tumhari, le poojaa ki thaalee|
Varad hast sar par rakh do maa sankat harne waali||
Maa bhar do bhakti ras pyaalee, asht bhujaaon waali,
Bhakton ke kaaraj tu hi saartee||
O maiya hum sab utaare teri aarti|

Ambe tu hai jagdambe kaalee,
Jai durge khappar waali,
Tere hi gun gaaven bharati,
O maiya hum sab utaare teri aarti|`},

{id:148,no:8,titleEn:"Bada Pyara Saja Hai Tera Dwar Bhawani",titleHi:"बड़ा प्यारा सजा है तेरा द्वार भवानी",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"partial",yt:"ebWlUm0FmvU",desc:"Visible song verses transcribed. The unrelated blue quotation above the song and page credits are excluded. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.25.00 AM (7)",
hindi:`बड़ा प्यारा सजा है तेरा द्वार भवानी
जहाँ भक्तों की लगी है कतार भवानी`,
roman:`Bada pyaaraa sajaa hai teraa dwaar bhawani
Jahaan bhakton ki lagee hai kataar bhawani`},

{id:109,no:9,titleEn:"Bhajan Medley",titleHi:"",god:"Multiple Deities",godHi:"",type:"Bhajan",deities:["Lord Rama","Lord Krishna","Lord Hanuman","Radha Rani","Sai Baba","Lord Shiva"],lyrics:"full",yt:"IOxa17VWzDc",desc:"A continuous singing medley, in the original sequence. Includes short devotional excerpts and repeated Ram refrains; these are not complete standalone versions. Original spellings and repetition cues are preserved.",source:"Your collection • Bhajan-Medley (2).pdf, pages 1–3",
hindi:``,
roman:`Ram ram jai raja ram, ram ram jia sita ram -3

Shri Krishna Govinda Hare Murari He Nath Narayan Vasudeva-2
Tumse hain dharti tumse hain ambar-2
Agni pawan aur saare samundar -2
He Nath Narayan Vasudeva

Ram ram jai raja ram, ram ram jia sita ram -3

Krishan Govind-2 Gopala
Krishna murli manohar nand lala
Krishan Govind-2 Gopala

Ram ram jai raja ram, ram ram jia sita ram -3

Veer Hanumana Ati Balwana-2
Ram Naam Rasiyo Re, Prabhu Man Basiyo Re-2
Veer Hanumana Ati Balwana-2
Ram Naam Rasiyo Re,Prabhu Man Basiyo Re
Jo Koi Aave, Araj Lagave-2
Sabaki Suniyo Re, Prabhu Man Basiyo Re -2
Jo Koi Aave, Araj Lagave,
Sabaki Suniyo Re,
Prabhu Man Basiyo Re ।

Ram ram jai raja ram, ram ram jia sita ram -3

Sankat kate mite sab peera,Jo sumirai Hanumat Balbeera
Jai Jai Jai Hanuman Gosahin ,Kripa Karahu Gurudev ki nyahin
Jo sat bar path kare kohi,Chutehi bandhi maha sukh hohi
Jo yah padhe Hanuman Chalisa,Hoye siddhi sakhi Gaureesa
Tulsidas sada hari chera,Keejai Das Hrdaye mein dera
Mangal bhavan amangal haari, Drabahu su Dasharath achar Bihari

Ram ram jai raja ram, ram ram jia sita ram -3

Yamunaji To Kaadi Kaadi, Raadha Gori Gori-2
Vrindavan Mein Dhoom Machave, Barsane Ki Chori-2
Vraj Dhaam Raadhajuki, Vraj Dhaani Laage, Vraj Dhaani Laage
Mane Pyaaro Pyaaro, Yamunaji-no Paani Laage
Mithe Ras Se Bharori, Raadha Raani Laage, Raadha Raani Laage
Mane Kaaro Kaaro, Yamunaji-no Paani Laage
Mithe Ras Se Bharori, Raadha Raani Laage, Raadha Raani Laage
Mane Kaaro Kaaro, Yamunaji-no Paani Laage

Ram ram jai raja ram, ram ram jia sita ram -3

Ram Aayenge to, Angana Sajaunga
Deep Jalake, Diwali Main Manaungi,
Mere Janmo Ke Saare, Paap Mit Jayenge~
Ram Aayenge.
Meri jhopdi ke bhaag aaj khul jayenge, Ram ayenge
Meri jhopdi ke bhaag aaj khul jayenge, Ram ayenge
Ram ayenge-ayenge, Ram ayenge
Ram ayenge-ayenge, Ram ayenge

Ram ram jai raja ram, ram ram jia sita ram -3

Kaun kehta hai Bhagvan aate nahi
Tum Meera ke jaise bulate nahi
Achyutam Keshavam Krishna Damodaram
Rama naraynam Janaki vallabham
Kaun kehta hai Bhagvan Nachthe nahi
Gopiyo ki tarah tum Nachathae nahi
Achyutam Keshavam Krishna Damodaram
Rama naraynam Janaki vallabham

Ram ram jai raja ram, ram ram jia sita ram -3

Jab khidki kholun toh Tera darshan hojaye -
Jab khidki kholun toh Tera darshan hojaye -
Mere ghar ke -2
Mere ghar ke aage sai nath Tera mandir banjaye …
Aate jaate baba Tumko main pranaam karun -2
Jo mere laayak ho Kuch aisa kaam karun -2
Teri Sewa karne se Meri kismat khuljaye -2
Jab khidki kholun toh Tera darshan hojaye -
Jab khidki kholun toh Tera darshan hojaye -
Mere ghar ke -2

Ram ram jai raja ram, ram ram jia sita ram -3

Lal jhule lal, jhule lal jhele lal -4
O Laal Meri Pat
Rakhio Bala Jhoole Laalan
O Laal Meri…
O Laal Meri Pat
Rakhio Bala Jhoole Laalan
Sindri Da.. Sehvan Da
Sakhi Shabaaz Kalandar
Dama Dam Mast Kalandar
Ali Dam Dam De Aandar
Dama Dam Mast Kalandar
Ali Da Pehla Number
O Laal Meri
O O O O Laal Meri
Chaar Charaag Tere Baran Hamesha
Chaar Charaag Tere Baran Hamesha
Panjwa Mein Baaran,
Aayi Bala Jhoole Laalan
Sindri Da, Sehvan Da
Sakhi Shabaaz Qalandar
Dama Dam Mast Qalandar
Ali Dam Dam De Andar
Dama Dam Mast Qalandar
Ali Da Pehla Number
O Laal Meri
O O O O Laal Meri

Ram ram jai raja ram, ram ram jia sita ram -3

Jai Jai shiv shambhoo-2, maha dev shambhoo-2

Ram ram jai raja ram, ram ram jia sita ram -3

Hare Rama, hare rama
Rama rama hare hare
Hare krishna, hare krishan
Krishna krishna hare hare`},

{id:158,no:10,titleEn:"Dekh Kar Shringar Maa Ka Dil Deewana Ho Gaya",titleHi:"देख कर श्रृंगार मां का दिल दीवाना हो गया",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"full",yt:"fIIL_5zIu5E",desc:"Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.24.59 AM (2)",
hindi:`देख कर श्रृंगार मां का दिल दीवाना हो गया,
दिल दीवाना हो गया मेरा दिल दीवाना हो गया,
देख कर श्रृंगार मां का दिल दीवाना हो गया…

चांद से मुखड़े पे मां के लाल बिंदिया है लगी,
नैनो में कजरा है डाला दिल दीवाना हो गया,
देख कर श्रृंगार मां का दिल दीवाना हो गया…

सर पर गोटेदार चुनरी चांद तारों से सजी,
नौलखा यह हार प्यारा दिल दीवाना हो गया,
देख कर श्रृंगार मां का दिल दीवाना हो गया…

हाथ में सोने के कंगन लाल चूड़ी साथ है,
जिसपे है मेहंदी की लाली दिल दीवाना हो गया,
देख कर श्रृंगार मां का दिल दीवाना हो गया…

पैरों में पायल के घुंघरू छम छमा छम छम बजे,
मन लुभाये तो कहूं मैं दिल दीवाना हो गया,
देख कर श्रृंगार मां का दिल दीवाना हो गया…`,
roman:`Dekh kar shringar maa ka dil deewana ho gayaa,
Dil deewana ho gayaa mera dil deewana ho gayaa,
Dekh kar shringar maa ka dil deewana ho gayaa…

Chaand se mukhde pe maa ke laal bindiyaa hai lagee,
Naino mein kajraa hai daalaa dil deewana ho gayaa,
Dekh kar shringar maa ka dil deewana ho gayaa…

Sar par gotedaar chunari chaand taaron se sajee,
Naulakha yah haar pyaaraa dil deewana ho gayaa,
Dekh kar shringar maa ka dil deewana ho gayaa…

Haath mein sone ke kangan laal choodi saath hai,
Jispe hai mehndi ki laalee dil deewana ho gayaa,
Dekh kar shringar maa ka dil deewana ho gayaa…

Pairon mein paayal ke ghunghroo chham chhamaa chham chham baje,
Man lubhaaye to kahoon main dil deewana ho gayaa,
Dekh kar shringar maa ka dil deewana ho gayaa…`},

{id:102,no:11,titleEn:"Duniya Chale Na Shri Ram Ke Bina",titleHi:"दुनिया चले ना श्री राम के बिना",god:"Lord Hanuman",godHi:"हनुमान जी",type:"Bhajan",lyrics:"partial",yt:"sDhrWWWBQLI",desc:"A Ram–Hanuman bhajan from your personal collection.",source:"Your Bhajan Collection • PDF pp. 5–6",
hindi:``,
roman:`Duniya chale na Shri Ram ke bina
Ramji chale na Hanuman ke bina`},

{id:161,no:12,titleEn:"Duniya Rachne Wale Ko Bhagwan Kehte Hain",titleHi:"दुनिया रचने वाले को भगवान कहते हैं",god:"Lord Hanuman",godHi:"",type:"Bhajan",lyrics:"partial",yt:"KHseWZW92U0",desc:"Supplied wording and all chorus responses retained. Romanized pronunciation added from the Hindi text.",source:"Lyrics supplied directly by the collection owner",
hindi:`दुनिया रचने वाले को भगवान कहते हैं
(दुनिया रचने वाले को भगवान कहते हैं)
और संकट हरने वाले को हनुमान कहते हैं
(संकट हरने वाले को हनुमान कहते हैं)`,
roman:`Duniya rachne waale ko bhagwan kehte hain
(duniya rachne waale ko bhagwan kehte hain)
Aur sankat harne waale ko hanuman kehte hain
(sankat harne waale ko hanuman kehte hain)`},

{id:111,no:13,titleEn:"Ganpati Ki Jai Jaikar",titleHi:"गणपति की जय जयकार",god:"Lord Ganesha",godHi:"गणेश जी",type:"Bhajan",lyrics:"partial",yt:"e2qcwS2lSww",desc:"Counting bhajan (1–20), transcribed from the supplied screenshot. The Hindi line for 9–12 includes two alternatives; the supplied Romanized version includes only “sabse pyaare”.",source:"Your collection • Supplied Ganpati counting-bhajan screenshot",
hindi:`1, 2, 3, 4 – गणपति की जय जयकार`,
roman:`Ek, do, teen, char – Ganpati ki jai jaikar`},

{id:130,no:14,titleEn:"Hanuman Ji Ki Aarti",titleHi:"हनुमान आरती",god:"Lord Hanuman",godHi:"हनुमान जी",type:"Aarti",lyrics:"full",yt:"DUNYVi_YOq8",desc:"Supplied Hindi wording and repetitions retained. Citation markers and Markdown formatting removed from singing text. Romanized pronunciation added from the Hindi text.",source:"Lyrics supplied directly by the collection owner • References supplied: Navbharat Times and Bhakti Bharat",
hindi:`आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥

जाके बल से गिरिवर कांपे।
रोग दोष जाके निकट न झांके॥
अंजनि पुत्र महाबलदायी।
संतान के प्रभु सदा सहाई॥
आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥

दे बीरा रघुनाथ पठाए।
लंका जारी सिया सुध लाए॥
लंका सो कोट समुद्र सी खाई।
जात पवनसुत बार न लाई॥
लंका जारी असुर संहारे।
सियारामजी के काज संवारे॥
आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥

लक्ष्मण मूर्छित पड़े सकारे।
आणि संजीवन प्राण उबारे॥
पैठि पताल तोरि जमकारे।
अहिरावण की भुजा उखारे॥
बाईं भुजा असुर दल मारे।
दाहिने भुजा संतजन तारे॥
आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥

सुर-नर-मुनि जन आरती उतारें।
जय जय जय हनुमान उचारें॥
कंचन थार कपूर ल्यू छाई।
आरती करत अंजना माई॥
जो हनुमान जी की आरती गावे।
बसी बैकुठ परम पद पावे॥
आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥`,
roman:`Aarti keejai hanuman lalaa ki|
Dusht dalan raghunaath kalaa ki||

Jaake bal se girivar kaanpe|
Rog dosh jaake nikat na jhaanke||
Anjani putra mahaabaldaayee|
Santaan ke prabhu sadaa sahaaee||
Aarti keejai hanuman lalaa ki|
Dusht dalan raghunaath kalaa ki||

De beeraa raghunaath pathaae|
Lankaa jaaree siyaa sudh laae||
Lankaa so kot samudra see khaaee|
Jaat pavansut baar na laaee||
Lankaa jaaree asur sanhaare|
Siyaaraamjee ke kaaj sanwaare||
Aarti keejai hanuman lalaa ki|
Dusht dalan raghunaath kalaa ki||

Lakshman moorchhit pade sakaare|
Aani sanjeevan praan ubaare||
Paithi pataal tori jamkaare|
Ahiraavan ki bhujaa ukhaare||
Baaeen bhujaa asur dal maare|
Daahine bhujaa santjan taare||
Aarti keejai hanuman lalaa ki|
Dusht dalan raghunaath kalaa ki||

Sur-nar-muni jan aarti utaaren|
Jai jai jai hanuman uchaaren||
Kanchan thaar kapoor lyoo chhaaee|
Aarti karat anjanaa maaee||
Jo hanuman ji ki aarti gaave|
Basee baikuth param pad paave||
Aarti keejai hanuman lalaa ki|
Dusht dalan raghunaath kalaa ki||`},

{id:135,no:15,titleEn:"Hanuman Ji Ki Aarti Sangrah Version",titleHi:"हनुमान जी की आरती (संग्रह संस्करण)",god:"Lord Hanuman",godHi:"",type:"Aarti",lyrics:"full",yt:"DUNYVi_YOq8",desc:"A separate version from Aarti Sangrah, including its opening shloka and printed repetitions. Your earlier Hanuman Aarti remains unchanged. Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 8–9 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`श्लोक
मनोजवं मारुत तुल्यवेगं, जितेन्द्रियं, बुद्धिमतां वरिष्ठम् ।
वातात्मजं वानरयुथ मुख्यं, श्रीरामदुतं शरणम प्रपद्ये ।।

आरती
आरती कीजै हनुमान लला की, दुष्ट दलन रघुनाथ कला की।
जाके बल से गिरिवर काँपे, रोग दोष जाके निकट न झाँके।।
आरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।

अंजनि पुत्र महा बलदायी, संतन के प्रभु सदा सहायी।
दे बीरा रघुनाथ पठाये, लंका जारि सिया सुधि लाये ।।
आरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।

लंका सौ कोटि समुद्र सी खाई, जात पवनसुत बार न लाई ।
लंका जारि असुर संहारे, सिया रामजी के काज संवारे ।।
आरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।

लक्ष्मण मूर्छित पड़े सकारे, आनि संजीवन प्राण उबारे ।
पैठि पाताल तोरि जम कारे, अहिरावन की भुजा उखारे ।।
आरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।

बाँये भुजा असुरदल मारे, दाहिने भुजा संत जन तारे ।
सुर नर मुनि आरति उतारें, जय जय जय हनुमान उचारें ।।
आरती कीजै हनुमान लला की दुष्ट दलन रघुनाथ कला की।

कंचन थार कपूर लौ छाई, आरती करती अंजना माई ।
जो हनुमान जी की आरती गावे, बसि बैकुण्ठ परम पद पावे ।।
आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की।।`,
roman:`Shlok
Manojavam maaruta tulyavegam, jitendriyam, buddhimataam varishtham |
Vaataatmajam vaanarayutha mukhyam, shreeraamadutam sharanam prapadye ||

Aarti
Aarti keejai hanuman lalaa ki, dusht dalan raghunaath kalaa ki|
Jaake bal se girivar kaanpe, rog dosh jaake nikat na jhaanke||
Aarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|

Anjani putra maha baldaayee, santan ke prabhu sadaa sahaayee|
De beeraa raghunaath pathaaye, lankaa jaari siyaa sudhi laaye ||
Aarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|

Lankaa sau koti samudra see khaaee, jaat pavansut baar na laaee |
Lankaa jaari asur sanhaare, siyaa raamjee ke kaaj sanwaare ||
Aarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|

Lakshman moorchhit pade sakaare, aani sanjeevan praan ubaare |
Paithi paataal tori jam kaare, ahiraavan ki bhujaa ukhaare ||
Aarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|

Baanye bhujaa asurdal maare, daahine bhujaa sant jan taare |
Sur nar muni aarti utaaren, jai jai jai hanuman uchaaren ||
Aarti keejai hanuman lalaa ki dusht dalan raghunaath kalaa ki|

Kanchan thaar kapoor lau chhaaee, aarti kartee anjanaa maaee |
Jo hanuman ji ki aarti gaave, basi baikunth param pad paave ||
Aarti keejai hanuman lalaa ki| dusht dalan raghunaath kalaa ki||`},

{id:104,no:16,titleEn:"Hey Dukh Bhanjan Maruti Nandan",titleHi:"हे दुःख भंजन मारुति नंदन",god:"Lord Hanuman",godHi:"हनुमान जी",type:"Bhajan",lyrics:"partial",yt:"Av7u2f0uDyk",desc:"A prayerful appeal to Maruti Nandan from your collection.",source:"Your Bhajan Collection • PDF pp. 10–11",
hindi:``,
roman:`Hey dukh bhanjan Maruti Nandan,
Sun lo meri pukar,
Pawansut vinti baarambaar.`},

{id:159,no:17,titleEn:"Hum To Chale Aaye Deva Tumko Manane",titleHi:"हम तो चले आये देवा तुमको मनाने",god:"Lord Ganesha",godHi:"",type:"Bhajan",lyrics:"full",yt:"_6ej_Z-Kelo",desc:"Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.24.59 AM (1) and 1.24.59 AM",
hindi:`हम तो चले आये देवा तुमको मनाने
चाहे तू माने चाहे ना माने

रिद्धि भी आई देवा सिद्धि भी आयी
सारा संसार आया तुमको मनाने

ब्रह्मा भी आये देवा ब्रह्माणी भी आयी
सारा ब्रह्माण्ड आया तुमको मनाने

विष्णु भी आये देवा लक्ष्मी भी आयी
सारा बैकुण्ठ आया तुमको मनाने

शंकर भी आये देवा गौरा भी आयी
सारा कैलाश आया तुमको मनाने

रामा भी आये देवा सीता भी आयी
सारा अयोध्या आया तुमको मनाने

कृष्णा भी आये देवा राधा भी आयी
सारा गोकुल आया तुमको मनाने।`,
roman:`Hum to chale aaye devaa tumko manaane
Chahe tu maane chahe naa maane

Riddhi bhi aayi devaa siddhi bhi aayi
Saaraa sansaar aayaa tumko manaane

Brahma bhi aaye devaa brahmani bhi aayi
Saaraa brahmand aayaa tumko manaane

Vishnu bhi aaye devaa lakshmi bhi aayi
Saaraa baikunth aayaa tumko manaane

Shankar bhi aaye devaa gauraa bhi aayi
Saaraa kailaash aayaa tumko manaane

Raamaa bhi aaye devaa seetaa bhi aayi
Saaraa ayodhyaa aayaa tumko manaane

Krishna bhi aaye devaa raadhaa bhi aayi
Saaraa gokul aayaa tumko manaane|`},

{id:134,no:18,titleEn:"Jai Ganesh Deva",titleHi:"जय गणेश देवा",god:"Lord Ganesha",godHi:"",type:"Aarti",lyrics:"full",yt:"Yuex2EnsGiY",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 7 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`श्लोक
वक्रतुंड महाकाय, सूर्यकोटी समप्रभाः ।
निर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा ।।

आरती
जय गणेश जय गणेश जय गणेश देवा।
माता जाकी पार्वती पिता महादेवा।।
एकदन्त दयावन्त चार भुजाधारी।
माथे पर तिलक सोहे मूसे की सवारी।।

पान चढ़े फूल चढ़े और चढ़े मेवा।
लड्डू अन का भोग लगे सन्त करे सेवा।।

अन्धे को आँख देत कोढिन को काया।
बांझन को पुत्र देत निर्धन को माया।।

हार चढ़े फूल चढ़े और चढ़े मेवा।
सूरश्याम शरण आए सुफल कीजे सेवा।
जय गणेश जय गणेश जय गणेश देवा।
माता जाकी पार्वती पिता महादेवा।।`,
roman:`Shlok
Vakratunda mahaakaaya, sooryakotee samaprabhaah |
Nirvighnam kuru me deva, sarvakaaryeshu sarvadaa ||

Aarti
Jai ganesh jai ganesh jai ganesh devaa|
Maataa jaakee paarvatee pitaa mahaadevaa||
Ekdant dayaavant chaar bhujaadhaaree|
Maathe par tilak sohe moose ki savaaree||

Paan chadhe phool chadhe aur chadhe mevaa|
Laddoo an ka bhog lage sant kare sevaa||

Andhe ko aankh det kodhin ko kaayaa|
Baanjhan ko putra det nirdhan ko maayaa||

Haar chadhe phool chadhe aur chadhe mevaa|
Soorashyaam sharan aaye suphal keeje sevaa|
Jai ganesh jai ganesh jai ganesh devaa|
Maataa jaakee paarvatee pitaa mahaadevaa||`},

{id:137,no:19,titleEn:"Jai Saraswati Mata",titleHi:"जय सरस्वती माता",god:"Saraswati Maa",godHi:"",type:"Aarti",lyrics:"full",yt:"TTVAyS9wOV4",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 12–13 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`श्लोक
कज्जल पूरित लोचन भारे, स्तन युग शोभित मुक्त हारे।
वीणा पुस्तक रंजित हस्ते, भगवती भारती देवी नमस्ते।।

आरती
जय सरस्वती माता, जय जय हे सरस्वती माता।
सद्गुण वैभव शालिनी, त्रिभुवन विख्याता।।
जय सरस्वती माता।

चंद्रवदनि पद्मासिनी, धुति मंगलकारी।
सोहें शुभ हंस सवारी, अतुल तेजधारी ॥
जय सरस्वती माता।

बायें कर में वीणा, दायें कर में माला।
शीश मुकुट मणी सोहें, गल मोतियन माला ॥
जय सरस्वती माता।

देवी शरण जो आयें उनका उद्धार किया।
पैठी मंथरा दासी, रावण संहार किया ॥
जय सरस्वती माता।

विद्या ज्ञान प्रदायिनी, ज्ञान प्रकाश भरो।
मोह और अज्ञान तिमिर का जग से नाश करो ॥
जय सरस्वती माता।

धूप, दिप फल मेवा माँ स्वीकार करो।
ज्ञानचक्षु दे माता, भव से उद्धार करो ॥
जय सरस्वती माता।

माँ सरस्वती जी की आरती जो कोई नर गावें।
हितकारी, सुखकारी ग्यान भक्ती पावें ॥
जय सरस्वती माता।

जय सरस्वती माता, जय जय हे सरस्वती माता।
सद्गुण वैभव शालिनी, त्रिभुवन विख्याता।।
जय सरस्वती माता।

बिन मांगे मोती मिले मांगे मिले ना भीख।
जय सरस्वती माता।`,
roman:`Shlok
Kajjala poorita lochana bhaare, stana yuga shobhita mukta haare|
Veenaa pustaka ranjita haste, bhagwati bharati devee namaste||

Aarti
Jai saraswati maataa, jai jai he saraswati maataa|
Sadgun vaibhav shaalinee, tribhuvan vikhyaataa||
Jai saraswati maataa|

Chandravadan padmaasinee, dhuti mangalkaaree|
Sohen shubh hans savaaree, atul tejdhaaree ||
Jai saraswati maataa|

Baayen kar mein veenaa, daayen kar mein maalaa|
Sheesh mukut manee sohen, gal motiyan maalaa ||
Jai saraswati maataa|

Devee sharan jo aayen unkaa uddhaar kiyaa|
Paithee mantharaa daasee, raavan sanhaar kiyaa ||
Jai saraswati maataa|

Vidyaa gyaan pradaayinee, gyaan prakaash bharo|
Moh aur agyaan timir ka jag se naash karo ||
Jai saraswati maataa|

Dhoop, dip phal mevaa maa sweekaar karo|
Gyaanchakshu de maataa, bhav se uddhaar karo ||
Jai saraswati maataa|

Maa saraswati ji ki aarti jo koi nar gaaven|
Hitkaaree, sukhkaaree gyaan bhakti paaven ||
Jai saraswati maataa|

Jai saraswati maataa, jai jai he saraswati maataa|
Sadgun vaibhav shaalinee, tribhuvan vikhyaataa||
Jai saraswati maataa|

Bin maange motee mile maange mile naa bheekh|
Jai saraswati maataa|`},

{id:132,no:20,titleEn:"Jai Shiv Omkara",titleHi:"जय शिव ओंकारा",god:"Lord Shiva",godHi:"",type:"Aarti",lyrics:"full",yt:"BhwOproElxU",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 3–4 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`श्लोक
कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारं
सदा वसन्तं ह्रदयाविन्दे भवं भवानी सहितं नमामि ॥

आरती
जय शिव ओंकारा हर ॐ शिव ओंकारा।
ब्रह्मा विष्णु सदाशिव अर्द्धांगी धारा ॥
ॐ जय शिव ओंकारा

एकानन चतुरानन पंचांनन राजे ।
हंसासंन, गरुडासन, वृषवाहन साजे॥
ॐ जय शिव ओंकारा

दो भुज चारु चतुर्भुज दस भुज अति सोहें ।
तीनों रूप निरखता त्रिभुवन जन मोहें॥
ॐ जय शिव ओंकारा

अक्षमाला, वनमाला, मुण्डमालाधारी।
चंदन, मृगमद सोहें, भाले शशिधारी ॥
ॐ जय शिव ओंकारा

श्वेताम्बर, पीताम्बर, बाघाम्बर अंगें ।
सनकादिक, ब्रह्मादिक, भूतादिक संगें॥
ॐ जय शिव ओंकारा

कर के मध्य कमंडल चक्रे, त्रिशूल धरता ।
जगकर्ता, दुःखहर्ता, जगपालनकर्ता ॥
ॐ जय शिव ओंकारा

ब्रह्मा विष्णु सदाशिव जानत अविवेका ।
प्रवणाक्षर मध्यें ये तीनों एका॥
ॐ जय शिव ओंकारा

काशी में विश्वनाथ विराजत नन्दी ब्रम्हचारी ।
नित उठी भोग लगावत महिमा अति भारी ॥
ॐ जय शिव ओंकारा

त्रिगुण शिवजी की आरती जो कोई नर गावें ।
कहत शिवानंद स्वामी मनवांछित फल पावें ॥
ॐ जय शिव ओंकारा

जय शिव ओंकारा हर ॐ शिव ओंकारा।
ब्रह्मा विष्णु सदाशिव अर्द्धांगी धारा॥
ॐ जय शिव ओंकारा`,
roman:`Shlok
Karpooragauram karunaavataaram sansaarasaaram bhujagendrahaaram
Sadaa vasantam hridayaavinde bhavam bhawani sahitam namaami ||

Aarti
Jai shiv omkara har Om shiv omkara|
Brahma vishnu sadaashiv arddhaangee dhaaraa ||
Om jai shiv omkara

Ekaanan chaturaanan panchaannan raaje |
Hansaasann, garudaasan, vrishvaahan saaje||
Om jai shiv omkara

Do bhuj chaaru chaturbhuj das bhuj ati sohen |
Teenon roop nirakhtaa tribhuvan jan mohen||
Om jai shiv omkara

Akshamaalaa, vanmaalaa, mundamaalaadhaaree|
Chandan, mrigamad sohen, bhaale shashidhaaree ||
Om jai shiv omkara

Shvetaambar, peetaambar, baaghaambar angen |
Sanakaadik, brahmaadik, bhootaadik sangen||
Om jai shiv omkara

Kar ke madhya kamandal chakre, trishool dhartaa |
Jagkartaa, duhkhahartaa, jagpaalankartaa ||
Om jai shiv omkara

Brahma vishnu sadaashiv jaanat avivekaa |
Pravanakshar madhyen ye teenon ekaa||
Om jai shiv omkara

Kaashee mein vishvanaath viraajat nandee bramhachaaree |
Nit uthee bhog lagaavat mahimaa ati bhaaree ||
Om jai shiv omkara

Trigun shivjee ki aarti jo koi nar gaaven |
Kahat shivaanand swami manvaanchhit phal paaven ||
Om jai shiv omkara

Jai shiv omkara har Om shiv omkara|
Brahma vishnu sadaashiv arddhaangee dhaaraa||
Om jai shiv omkara`},

{id:146,no:21,titleEn:"Jatadhari Banke Tripurari Banke",titleHi:"जटाधारी बनके त्रिपुरारी बनके",god:"Lord Shiva",godHi:"",type:"Bhajan",lyrics:"partial",yt:"FOrmYdz95CI",desc:"Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.25.00 AM (10) and (9)",
hindi:`जटाधारी बनके, त्रिपुरारी बनके
चले आना भोले जी चले आना।`,
roman:`Jataadhaaree banke, tripuraaree banke
Chale aanaa bhole ji chale aanaa|`},

{id:164,no:22,titleEn:"Jhoom Jhoom Nache Dekho Bhakt Hanumana",titleHi:"झूम झूम नाचे देखो भक्त हनुमाना",god:"Lord Hanuman",godHi:"",type:"Bhajan",lyrics:"partial",yt:"KnXKOQWJ03k",desc:"Both supplied lyric versions preserved; Markdown formatting removed.",source:"Hindi and English transliteration supplied directly by the collection owner",
hindi:`झूम झूम नाचे देखो भक्त हनुमाना,
बाजे खड़ताल करे राम गुण गाना,
झूम झूम नाचे देखो वीर हनुमाना ॥`,
roman:`Jhoom jhoom nache dekho bhakt hanumana,
Baje khadtal kare ram gun gana,
Jhoom jhoom nache dekho veer hanumana.`},

{id:120,no:23,titleEn:"Kabhi Pyase Ko Pani Pilaya Nahin",titleHi:"कभी प्यासे को पानी पिलाया नहीं",god:"Guru & Family",godHi:"",type:"Bhajan",lyrics:"partial",yt:"OeMGwKQNhWs",desc:"Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text.",source:"Your collection • bahajans-lyrcis.pdf, page 7",
hindi:`कभी प्यासे को पानी पिलाया नहीं, बाद अमृत पिलाने से क्या फायदा।
कभी गिरते हुए को उठाया नहीं, बाद आंसू बहाने से क्या फायदा॥`,
roman:`Kabhee pyaase ko paanee pilaayaa nahin, baad amrit pilaane se kyaa faayda|
Kabhee girte hue ko uthaayaa nahin, baad aansoo bahaane se kyaa faayda||`},

{id:145,no:24,titleEn:"Kal Raat Mata Ka Mujhe Email Aaya Hai",titleHi:"कल रात माता का मुझे ईमेल आया है",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"partial",yt:"YDVBvR_5EJU",desc:"Romanized lyrics supplied by the collection owner; repetitions and performance cues preserved. No Hindi lyrics supplied.",source:"Lyrics supplied directly by the collection owner",
hindi:``,
roman:`Kal raat mata ka mujhe email aaya hai
Kal raat mata ka mujhe email aaya hai
Mata ne mujhko..
Mata ne mujhko Facebook pe bulaya hai`},

{id:160,no:25,titleEn:"Keejo Kesari Ke Lal",titleHi:"कीजो केसरी के लाल",god:"Lord Hanuman",godHi:"",type:"Bhajan",lyrics:"partial",yt:"b5FUADElUC8",desc:"Supplied wording, chorus responses and repetitions preserved. Romanized pronunciation added from the Hindi text.",source:"Lyrics supplied directly by the collection owner",
hindi:`हो, कीजो, केसरी के लाल, मेरा छोटा सा ये काम
कीजो, केसरी के लाल, मेरा छोटा सा ये काम
हो, मेरी राम जी कह देना, जय सिया-राम (जय श्री राम)`,
roman:`Ho, keejo, kesari ke laal, mera chhotaa saa ye kaam
Keejo, kesari ke laal, mera chhotaa saa ye kaam
Ho, meri raam ji keh denaa, jai siyaa-raam (jai shri raam)`},

{id:113,no:26,titleEn:"Kitni Sundar Hai Maa Teri Nagri",titleHi:"कितनी सुंदर है मां तेरी नगरी",god:"Lord Shiva",godHi:"शिव जी",type:"Bhajan",deities:["Lord Shiva","Durga Maa"],lyrics:"full",yt:"vIAci-RsMWw",desc:"Visible Hindi verses from the supplied screenshot. The final repeated refrain is partly covered by social-media controls and is omitted. No missing text or Romanized version has been invented. Romanized pronunciation added from the Hindi text.",source:"Your collection • Supplied screenshot shared by Poonam Devi",
hindi:`कितनी सुंदर है मां तेरी नगरी
भोले पैदल चले आ रहे।

उनकी जटा में गंगा विराजे
वो बहाते चले आ रहे हैं।

उनके माथे पे चन्दा विराजे
वो चमकाते चले आ रहे हैं।

उनके कानों में बिच्छू विराजे
वो लटकाते चले आ रहे हैं।

उनके गले में नाग विराजे
वो लहराते चले आ रहे हैं।

उनके हाथों में डमरू विराजे
वो बजाते चले आ रहे हैं।

उनके अंगों में बाघछाला
वो पहनकर चले आ रहे हैं।`,
roman:`Kitnee sundar hai maa teri nagree
Bhole paidal chale aa rahe|

Unkee jataa mein gangaa viraaje
Vo bahaate chale aa rahe hain|

Unke maathe pe chandaa viraaje
Vo chamkaate chale aa rahe hain|

Unke kaanon mein bichchhoo viraaje
Vo latkaate chale aa rahe hain|

Unke gale mein naag viraaje
Vo lahraate chale aa rahe hain|

Unke haathon mein damroo viraaje
Vo bajaate chale aa rahe hain|

Unke angon mein baaghchhaalaa
Vo pahankar chale aa rahe hain|`},

{id:156,no:27,titleEn:"Lal Phoolon Ki Aayi Hai Bahar",titleHi:"लाल फूलों की आई है बहार",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"full",yt:"jCX0C_AtUSA",desc:"The final repeated refrain is obscured by social-media controls and is marked, not reconstructed. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.24.59 AM (4)",
hindi:`लाल फूलों की आई है बहार
मैया तेरे मन्दिर में

फूल चढ़ाने को गणपति आए
संग में अपने रिद्धि सिद्धि लाए
होके मूषक सवार मैया तेरे मन्दिर में
लाल फूलों की…

फूल चढ़ाने को ब्रह्मा जी आए
संग में अपने ब्रमाणी को लाए
होके हंस पे सवार मैया तेरे मन्दिर में
लाल फूलों की…

फूल चढ़ाने को विष्णु जी आए
संग में अपने लक्ष्मी माँ को लाए
होके गरुड़ सवार मैया तेरे मन्दिर में
लाल फूलों की…

फूल चढ़ाने को शंकर जी आए
संग में अपने गौरा माँ को लाए
होके नंदी सवार मैया तेरे मन्दिर में
[अंतिम दोहराव चित्र में ढका हुआ है]`,
roman:`Laal phoolon ki aayi hai bahaar
Maiya tere mandir mein

Phool chadhaane ko ganpati aaye
Sang mein apne riddhi siddhi laae
Hoke mooshak savaar maiya tere mandir mein
Laal phoolon ki…

Phool chadhaane ko brahma ji aaye
Sang mein apne bramani ko laae
Hoke hans pe savaar maiya tere mandir mein
Laal phoolon ki…

Phool chadhaane ko vishnu ji aaye
Sang mein apne lakshmi maa ko laae
Hoke garud savaar maiya tere mandir mein
Laal phoolon ki…

Phool chadhaane ko shankar ji aaye
Sang mein apne gauraa maa ko laae
Hoke nandee savaar maiya tere mandir mein
[Source image: line unclear or covered]`},

{id:131,no:28,titleEn:"Maa Murade Puri Karde Halwa Batungi",titleHi:"माँ मुरादे पूरी करदे हलवा बाटूंगी",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"partial",yt:"HkzOl-eZu54",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Lyrics supplied directly by the collection owner",
hindi:`माँ मुरादे पूरी करदे हलवा बाटूंगी।
ज्योत जगा के, सर को झुका के,
मैं मनाऊंगी, दर पे आउंगी, मनाऊंगी, मैं आउंगी॥`,
roman:`Maa muraade pooree karde halvaa baatoongee|
Jyot jagaa ke, sar ko jhukaa ke,
Main manaaoongee, dar pe aaungi, manaaoongee, main aaungi||`},

{id:121,no:29,titleEn:"Maat Pita Guru Charnon Mein",titleHi:"मात पिता गुरु चरणों में",god:"Guru & Family",godHi:"",type:"Bhajan",lyrics:"full",yt:"O1tP7dO9nu0",desc:"Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text.",source:"Your collection • bahajans-lyrcis.pdf, page 8",
hindi:`मात पिता गुरु चरणों में प्रणवत बारम्बार,
हम पर किया बड़ा उपकार, हम पर किया बड़ा उपकार,

माता ने जो कस्ट उठाया, वह ऋण कभी ना जाय चुकाया,
अंगुली पकड़कर चलना सिखाया, ममता की दी सीतल छाया,
जिनकी गोद में पलकर हम, कहलाते हुसियार,
हम पर किया बड़ा उपकार,

पिता ने हमको योग्य बनाया, कमा कमाकर अन्न खिलाया
पढ़ा लिखा गुणवान बनाया, जीवन पथ पर चलना सिखाया
जोड़ जोड़ अपनी सम्पति का, बना दिया हरक़दर
हम पर किया बड़ा उपकार,

तत्व ज्ञान गुरु ने दर्शाया, अंधकार सब दूर भगाया
ह्रदय में भक्ति दिप जलाकर, हरी दर्शन का मार्ग बताया
बिन स्वार्थ ही कृपा करे, कितने बड़े हे उदार
हम पर किया बड़ा उपकार,

प्रभु कृपा से नर तन पाया, संत मिलन का साज सजाया
बल बुद्धि और विद्या, देकर सब जीवो में श्रेष्ठ बनाया
जो भी इनकी सरन में आता, कर देते उद्धार
हम पर किया बड़ा उपकार,`,
roman:`Maat pitaa guru charnon mein pranavat baarambaar,
Hum par kiyaa bada upkaar, hum par kiyaa bada upkaar,

Maataa ne jo kast uthaayaa, vah rin kabhee naa jaay chukaayaa,
Angulee pakadkar chalnaa sikhaayaa, mamtaa ki dee seetal chhaayaa,
Jinkee god mein palkar hum, kahlaate husiyaar,
Hum par kiyaa bada upkaar,

Pitaa ne humko yogya banaayaa, kamaa kamaakar ann khilaayaa
Padhaa likhaa gunvaan banaayaa, jeevan path par chalnaa sikhaayaa
Jod jod apnee sampati ka, banaa diyaa haraqdar
Hum par kiyaa bada upkaar,

Tatv gyaan guru ne darshaayaa, andhakaar sab door bhagaayaa
Hriday mein bhakti dip jalaakar, haree darshan ka maarg bataayaa
Bin swaarth hi kripaa kare, kitne bade he udaar
Hum par kiyaa bada upkaar,

Prabhu kripaa se nar tan paayaa, sant milan ka saaj sajaayaa
Bal buddhi aur vidyaa, dekar sab jeevo mein shreshth banaayaa
Jo bhi inkee saran mein aataa, kar dete uddhaar
Hum par kiyaa bada upkaar,`},

{id:153,no:30,titleEn:"Main Bani Patang Meri Maiya Ban Gayi Dor",titleHi:"मैं बनी पतंग मेरी मैया बन गई डोर",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"full",yt:"iRyadoSFG6A",desc:"Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.25.00 AM (1)",
hindi:`आ गई है मैया गली गली में शोर,
मैं बनी पतंग मेरी मैया बन गई डोर…

इधर घुमाए चाहे उधर घुमाए,
जिस ओर चाहे मैया मुझको नचाए,
नाच रही मैं ऐसे जैसे बन में नाचे मोर,
मैं बनी पतंग मेरी मैया बन गई डोर…

जिससे भी चाहे मैया पेच लड़ाए,
पास बुलाए चाहे दूर भगाएं,
कटु या वापस आऊ मेरा चले ना कोई जोर,
मैं बनी पतंग मेरी मैया बन गई डोर…

रंग बिरंगी मां ने मुझको बनाया,
सुख और दुख का है मेल कराया,
मां के हाथ में डोरी वह ले ले जिसकी ओर,
मैं बनी पतंग मेरी मैया बन गई डोर…

दूर गगन में मैं तो उड़ती ही जाऊं,
डर लगता है कहीं कट नहीं जाऊं,
रास्ता नहीं सूझे चहू नीला घनघोर,
मैं बनी पतंग मेरी मैया बन गई डोर…`,
roman:`Aa gayi hai maiya galee galee mein shor,
Main banee patang meri maiya ban gayi dor…

Idhar ghumaae chahe udhar ghumaae,
Jis or chahe maiya mujhko nachaae,
Naach rahee main aise jaise ban mein naache mor,
Main banee patang meri maiya ban gayi dor…

Jisse bhi chahe maiya pech ladaaye,
Paas bulaae chahe door bhagaaen,
Katu yaa vaapas aaoo mera chale naa koi jor,
Main banee patang meri maiya ban gayi dor…

Rang birangee maa ne mujhko banaayaa,
Sukh aur dukh ka hai mel karaayaa,
Maa ke haath mein doree vah le le jiskee or,
Main banee patang meri maiya ban gayi dor…

Door gagan mein main to udti hi jaaoon,
Dar lagtaa hai kaheen kat nahin jaaoon,
Raastaa nahin soojhe chahoo neelaa ghanghor,
Main banee patang meri maiya ban gayi dor…`},

{id:155,no:31,titleEn:"Maiya Ka Mukhda Suhana Lagta Hai",titleHi:"मैया का मुखड़ा सुहाना लगता है",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"partial",yt:"rtXMxUOW440",desc:"Handwritten source. Several words in verses 2 and 4 are difficult to read; transcription needs confirmation against a clearer image. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.24.59 AM (5)",
hindi:`मैया का मुखड़ा सुहाना लगता है
भक्तों का तो दिल दिवाना लगता है
पल भर में हर लेती है [अंतिम शब्द अस्पष्ट]
इनसे तो रिश्ता पुराना लगता है।`,
roman:`Maiya ka mukhda suhaanaa lagtaa hai
Bhakton ka to dil diwana lagtaa hai
Pal bhar mein har letee hai [Source image: line unclear or covered]
Inse to rishtaa puraanaa lagtaa hai|`},

{id:154,no:32,titleEn:"Maiya Navratron Mein Jab Dharti Par Aati Hai",titleHi:"मैया नवरात्रों में जब धरती पर आती है",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"full",yt:"SPbed_yM-Ww",desc:"Visible screenshot text retained. The image ends after the final visible line; no unseen continuation has been added. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.25.00 AM",
hindi:`मैया नवरात्रों में जब धरती पर आती है,
किसको क्या देना है ये सोच के आती है,

पहले नवरात्रे में माँ सब की खबर लेती है,
दूजे नवरात्रे में अपने खाते में लिख लेती है,
तिजे नवरात्रे में बात आगे बढ़ती है
मैया नवरातो…

चौथे नवरात्रे में माँ आसान लगाती है,
पाचवे नवरात्रे में मैं आ गई हु बताती हैं,
छटवे नवरात्रे में सबको दर्शन करवाती है,
मैया नेवरातो…

सते नवरात्रे में खोल देती खजाने है,
अठे नवरात्रे में लग जाती लुटाने है,
नोवी नवरात्रे में दोनो हाथो से लुटाती है,
मैया नवराते…

दसवे दिन माता की विदाई जब आती है,
सारे धरती के लोगो की आंखे भर आती है,
सामा फिर आउंगी वादा करके चली जाती है,`,
roman:`Maiya navraatron mein jab dhartee par aatee hai,
Kisko kyaa denaa hai ye soch ke aatee hai,

Pahle navraatre mein maa sab ki khabar letee hai,
Dooje navraatre mein apne khaate mein likh letee hai,
Tije navraatre mein baat aage badhti hai
Maiya navraato…

Chauthe navraatre mein maa aasaan lagaatee hai,
Paachve navraatre mein main aa gayi hu bataatee hain,
Chhatve navraatre mein sabko darshan karvaatee hai,
Maiya nevraato…

Sate navraatre mein khol detee khajaane hai,
Athe navraatre mein lag jaatee lutaane hai,
Novee navraatre mein dono haatho se lutaatee hai,
Maiya navraate…

Dasve din maataa ki vidaaee jab aatee hai,
Saare dhartee ke logo ki aankhe bhar aatee hai,
Saamaa phir aaungi vaadaa karke chalee jaatee hai,`},

{id:151,no:33,titleEn:"Maiya Rani Ke Bhawan Mein Hum Deewane Ho Gaye",titleHi:"मैया रानी के भवन में हम दीवाने हो गए",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"full",yt:"IAceHCcXTCo",desc:"Partial source: the last verse is covered by the screenshot banner. Only visible lines are included; the missing portion is marked. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.25.00 AM (3)",
hindi:`मैया रानी के भवन में हम दीवाने हो गए,
हम दीवाने हो गए माँ हम दीवाने हो गए…

एक तो माँ के पैर सुंदर दूसरी पायल सजी,
तीसरा महावर लगा है हम दीवाने हो गए,
मैया रानी के भवन में हम दीवाने हो गए…

एक तो माँ का रूप सुंदर दूसरी साड़ी सजी,
तीसरा गोटा लगा है हम दीवाने हो गए,
मैया रानी के भवन में हम दीवाने हो गए…

एक तो माँ के हाथ सुंदर दूसरी चूड़ी सजी,
तीसरा मेहँदी लगी है हम दीवाने हो गए,
मैया रानी के भवन में हम दीवाने हो गए…

एक तो माँ का गला है दूसरी माला सजी,
तीसरा माँ का मुस्कुराना हम दीवाने हो गए,
मैया रानी के भवन में हम दीवाने हो गए…

एक तो माँ के कान सुंदर दूसरी झुमके सजे,
तीसरा नथनी सजी है हम दीवाने हो गए,
मैया रानी के भवन में हम दीवाने हो गए…

एक तो माँ का माथा सुंदर दूसरी बिंदिया लगी,
[आगे की पंक्तियाँ चित्र में ढकी हुई हैं]`,
roman:`Maiya raanee ke bhawan mein hum deewane ho gaye,
Hum deewane ho gaye maa hum deewane ho gaye…

Ek to maa ke pair sundar doosree paayal sajee,
Teesraa mahavar lagaa hai hum deewane ho gaye,
Maiya raanee ke bhawan mein hum deewane ho gaye…

Ek to maa ka roop sundar doosree saadi sajee,
Teesraa gotaa lagaa hai hum deewane ho gaye,
Maiya raanee ke bhawan mein hum deewane ho gaye…

Ek to maa ke haath sundar doosree choodi sajee,
Teesraa mehndi lagee hai hum deewane ho gaye,
Maiya raanee ke bhawan mein hum deewane ho gaye…

Ek to maa ka galaa hai doosree maalaa sajee,
Teesraa maa ka muskuraanaa hum deewane ho gaye,
Maiya raanee ke bhawan mein hum deewane ho gaye…

Ek to maa ke kaan sundar doosree jhumke saje,
Teesraa nathnee sajee hai hum deewane ho gaye,
Maiya raanee ke bhawan mein hum deewane ho gaye…

Ek to maa ka maathaa sundar doosree bindiyaa lagee,
[Source image: line unclear or covered]`},

{id:110,no:34,titleEn:"Mandir Mein Baithi Maiya Ji Aasan Lagai Ke",titleHi:"मंदिर में बैठी मैया जी आसन लगाई के",god:"Durga Maa",godHi:"दुर्गा माँ",type:"Bhajan",lyrics:"full",yt:"VK3cm19jW1I",desc:"Navratri bhajan transcribed from the supplied Hindi poster. Romanized pronunciation added from the Hindi text.",source:"Your collection • Navratri poster credited to Tanu Negi",
hindi:`मंदिर में बैठी मैया जी आसन लगाई के
हम सब मनाए मैया को ताली बजाई के

ओ हो शंकर मनाए मैया को डमरू बजाए के
हम सब मनाए मैया को ताली बजाई के

ओ कान्हा मनाए राधा को मुरली बजाए के
हम सब मनाए मैया को ताली बजाई के

ओ विष्णु मनाए लक्ष्मी को चक्र चलाए के
हम सब मनाए मैया को ताली बजाई के

ओ राम जी मनाए सीता को धनुष चलाए के
हम सब मनाए मैया को ताली बजाई के

ओ श्रवण मनाए मैया को ढोलक बजाई के
हम सब मनाए मैया को ताली बजाई के`,
roman:`Mandir mein baithee maiya ji aasan lagaaee ke
Hum sab manaae maiya ko taalee bajaaee ke

O ho shankar manaae maiya ko damroo bajaae ke
Hum sab manaae maiya ko taalee bajaaee ke

O kaanhaa manaae raadhaa ko murlee bajaae ke
Hum sab manaae maiya ko taalee bajaaee ke

O vishnu manaae lakshmi ko chakra chalaae ke
Hum sab manaae maiya ko taalee bajaaee ke

O raam ji manaae seetaa ko dhanush chalaae ke
Hum sab manaae maiya ko taalee bajaaee ke

O shravan manaae maiya ko dholak bajaaee ke
Hum sab manaae maiya ko taalee bajaaee ke`},

{id:149,no:35,titleEn:"Mandir Saja Ke Rakhna",titleHi:"मन्दिर सजा के रखना",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"partial",yt:"x5sGDIcFLmU",desc:"Tune note in the poster: Mehndi Laga Ke Rakhna. Duplicate screenshots combined into one entry. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.25.00 AM (6) and (5)",
hindi:`मन्दिर सजा के रखना, दीपक जला के रखना
आएंगी मेरी मैया चुनरी मंगा के रखना`,
roman:`Mandir sajaa ke rakhnaa, deepak jalaa ke rakhnaa
Aayengi meri maiya chunari mangaa ke rakhnaa`},

{id:108,no:36,titleEn:"Mangalwar Tera Hai Shanivar Tera Hai",titleHi:"मंगलवार तेरा है शनिवार तेरा है",god:"Lord Hanuman",godHi:"हनुमान जी",type:"Bhajan",lyrics:"partial",yt:"b9KZ40cDyDA",desc:"A Balaji/Hanuman bhajan from your personal collection.",source:"Your Bhajan Collection • PDF pp. 27–28",
hindi:`मंगलवार तेरा है शनिवार तेरा है,
बजरंगी संभालो परिवार तेरा है।`,
roman:`Mangalwar tera hai, Shanivar tera hai,
Bajrangi sambhalo, parivar tera hai.`},

{id:116,no:37,titleEn:"Mera Aapki Kripa Se",titleHi:"",god:"Lord Krishna",godHi:"",type:"Bhajan",lyrics:"full",yt:"NvOqY_ku5UY",desc:"Romanized lyrics from the supplied PDF. Columns read top to bottom, then left to right. Source spelling and repetition cues preserved. No Hindi lyrics were supplied.",source:"Your collection • bahajans-lyrcis.pdf, page 2",
hindi:``,
roman:`Mera Aapki Kripa Se
Sab Kaam Ho Raha Hai
Mera Aapki Kripa
Se Sab Kaam Ho Raha
Hai

Karte Ho Tum Kanhaiya
Mera Naam Ho Raha Hai
Karte Ho Tum Kanhaiya
Mera Naam Ho Raha Hai

Mera Aapki Kripa Se
Sab Kaam Ho Raha Hai
Mera Aapki Kripa Se
Sab Kaam Ho Raha Hai

Patwaar Ke Bina Hi
Meri Naav Yeh Chal Rahi
Hai
Hairan Hai Zamana

Manzil Bhi Mil Rahi Hai
Hairan Hai Zamana
Manzil Bhi Mil Rahi Hai

Karta Nahi Main Kuch Bhi
Sab Kaam Ho Raha Hai
Karta Nahi Main Kuch Bhi
Sab Kaam Ho Raha Hai
Karte Ho Tum Kanhaiya

Mera Naam Ho Raha Hai
Karte Ho Tum Kanhaiya
Mera Naam Ho Raha Hai
Mera Aapki Kripa Se
Sab Kaam Ho Raha Hai
Mera Aapki Kripa Se
Sab Kaam Ho Raha Hai

Tum Saath Ho Jo Mere
Kis Cheez Ki Kami Hai
Tum Saath Ho Jo Mere

Kis Cheez Ki Kami Hai
Kisi Aur Cheez Ki Ab
Darkaar Hi Nahi Hai
Kisi Aur Cheez Ki Ab
Darkaar Hi Nahi Hai

Tere Saath Ghulam Ab
Gulfaam Ho Raha Hai
Tere Saath Ghulam Ab
Gulfaam Ho Raha Hai

Karte Ho Tum Kanhaiya
Mera Naam Ho Raha Hai
Karte Ho Tum Kanhaiya
Mera Naam Ho Raha Hai

Mera Aapki Kripa Se
Sab Kaam Ho Raha Hai
Mera Aapki Kripa Se
Sab Kaam Ho Raha Hai

Main Toh Nahin Hoon
Kaabil
Tera Paar Kaise Paau
Main Toh Nahin Hoon
Kaabil
Tera Paar Kaise Paau

Tuti Hui Vaani Se
Gungun Kaise Gaau
Tuti Hui Vaani Se
Gungun Kaise Gaau

Teri Prerna Se Hi
Yeh Kamaal Ho Raha Hai
Teri Prerna Se Hi
Yeh Kamaal Ho Raha Hai

Karte Ho Tum Kanhaiya
Mera Naam Ho Raha Hai
Karte Ho Tum Kanhaiya
Mera Naam Ho Raha Hai

Mera Aapki Kripa Se
Sab Kaam Ho Raha Hai
Mera Aapki Kripa Se
Sab Kaam Ho Raha Hai`},

{id:126,no:38,titleEn:"Mere Banke Bihari Lal",titleHi:"मेरे बांके बिहारी लाल",god:"Lord Krishna",godHi:"कृष्ण जी",type:"Bhajan",lyrics:"full",yt:"Cm0MZ5WfTzw",desc:"Hindi lyrics supplied by the collection owner. Wording and repetitions preserved; line breaks added for singing. Romanized pronunciation added from the Hindi text.",source:"Your collection • Lyrics supplied directly",
hindi:`मेरे बांके बिहारी लाल
बांके बिहारी लाल
मेरे बांके बिहारी लाल
तू इतना ना करिओ श्रृंगार
नजर लग जाएगी
नजर लग जाएगी

मेरे बांके बिहारी लाल
तू इतना ना करिओ श्रृंगार
नजर लग जाएगी
नजर लग जाएगी

मेरे बांके बिहारी लाल

तोरी सुरतिया पे मन मोरा अटका
प्यारा लागे तेरा पीला पटका

तेरी सुरतिया पे मन मोरा अटका
प्यारा लागे तेरा पीला पटका
तेरी सुरतिया पे मन मोरा अटका
प्यारा लागे तेरा पीला
तेरी टेढ़ी मेढ़ी चाल
तेरी टेढ़ी मेढ़ी चाल, तू इतना ना करिओ श्रृंगार
नजर लग जाएगी
नजर लग जाएगी
मेरे बांके बिहारी लाल

तोरी मुरलिया पे मन मेरा अटका
प्यारा लागे तेरा नीला पटका
तोरी मुरलिया पे मन मेरा अटका
प्यारा लागे तेरा नीला पटका
तोरी मुरलिया पे मन मेरा अटका
प्यारा लागे तेरा नीला पटका
तोरे गुंगार वाले बाल, तू इतना ना करिओ श्रृंगार
नजर लग जाएगी
नजर लग जाएगी
मेरे बांके बिहारी लाल

तोरी कमरिया पे मन मोरा अटका
प्यारा लागे तेरा काला पटका
तोरी कमरिया पे मन मोरा अटका
प्यारा लागे तेरा काला पटका
तोरी कमरिया पे मन मोरा अटका
प्यारा लागे तेरा काला पटका
तेरे गल में वैजयंती माल, तू इतना ना करिओ श्रृंगार
नजर लग जाएगी
नजर लग जाएगी

मेरे बांके बिहारी लाल, तू इतना ना करिओ श्रृंगार
नजर लग जाएगी`,
roman:`Mere baanke bihaaree laal
Baanke bihaaree laal
Mere baanke bihaaree laal
Tu itnaa naa kario shringar
Nazar lag jaayegi
Nazar lag jaayegi

Mere baanke bihaaree laal
Tu itnaa naa kario shringar
Nazar lag jaayegi
Nazar lag jaayegi

Mere baanke bihaaree laal

Tori suratiya pe man moraa atkaa
Pyaaraa laage teraa peelaa patkaa

Teri suratiya pe man moraa atkaa
Pyaaraa laage teraa peelaa patkaa
Teri suratiya pe man moraa atkaa
Pyaaraa laage teraa peelaa
Teri tedhi medhi chaal
Teri tedhi medhi chaal, tu itnaa naa kario shringar
Nazar lag jaayegi
Nazar lag jaayegi
Mere baanke bihaaree laal

Tori murliyaa pe man mera atkaa
Pyaaraa laage teraa neelaa patkaa
Tori murliyaa pe man mera atkaa
Pyaaraa laage teraa neelaa patkaa
Tori murliyaa pe man mera atkaa
Pyaaraa laage teraa neelaa patkaa
Tore gungaar waale baal, tu itnaa naa kario shringar
Nazar lag jaayegi
Nazar lag jaayegi
Mere baanke bihaaree laal

Tori kamriyaa pe man moraa atkaa
Pyaaraa laage teraa kaalaa patkaa
Tori kamriyaa pe man moraa atkaa
Pyaaraa laage teraa kaalaa patkaa
Tori kamriyaa pe man moraa atkaa
Pyaaraa laage teraa kaalaa patkaa
Tere gal mein vaijayanti maal, tu itnaa naa kario shringar
Nazar lag jaayegi
Nazar lag jaayegi

Mere baanke bihaaree laal, tu itnaa naa kario shringar
Nazar lag jaayegi`},

{id:123,no:39,titleEn:"Mere Ghar Ke Aage Sainath",titleHi:"मेरे घर के आगे साईनाथ",god:"Sai Baba",godHi:"",type:"Bhajan",lyrics:"partial",yt:"Nt-5PbCWqyc",desc:"Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text.",source:"Your collection • bahajans-lyrcis.pdf, page 10",
hindi:`मेरे घर के आगे साईनाथ तेरा मन्दिर बन जाए
जब खिड़की खोलूँ तो तेरा दर्शन हो जाए`,
roman:`Mere ghar ke aage sainath teraa mandir ban jaaye
Jab khidkee kholoon to teraa darshan ho jaaye`},

{id:105,no:40,titleEn:"Mere Ghar Ram Aaye Hain",titleHi:"मेरे घर राम आए हैं",god:"Lord Rama",godHi:"राम जी",type:"Bhajan",lyrics:"partial",yt:"vBJ5HSs-N9o",desc:"A welcoming Lord Rama bhajan from your personal collection.",source:"Your Bhajan Collection • PDF pp. 12–15",
hindi:``,
roman:`Meri chaukhat pe chal ke aaj
Charo dham aaye hain
Bajao dhol swagat mein
Mere ghar Ram aaye hain`},

{id:128,no:41,titleEn:"Mere Kirtan Mein Rang Barsao",titleHi:"मेरे कीर्तन में रंग बरसाओ",god:"Lord Ganesha",godHi:"गणेश जी",type:"Bhajan",lyrics:"full",yt:"Y9PeM3g4ge4",desc:"Hindi lyrics supplied by the collection owner, preserving wording and repetitions. Romanized pronunciation added from the Hindi text.",source:"Your collection • Lyrics supplied directly",
hindi:`मेरे कीर्तन में रंग बरसाओ,
आओ जी गजानन आओ.....

ब्रह्मा तुम भी पधारो,
विष्णु तुम भी पधारो,
भोले शंकर को साथ ले आओ,
आओ जी गजानन आओ,
मेरे कीर्तन में रंग बरसाओ,
आओ जी गजानन आओ.....

लक्ष्मी तुम भी पधारो,
गौरा तुम भी पधारो,
सरस्वती को साथ ले आओ
आओ जी गजानन आओ,
मेरे कीर्तन में रंग बरसाओ,
आओ जी गजानन आओ......

राम तुम भी पधारो,
लक्ष्मण तुम भी पधारो,
सीता मैया को साथ ले आओ,
मेरे कीर्तन में रंग बरसाओ,
आओ जी गजानन आओ......

श्याम तुम भी पधारो,
राम तुम भी पधारो,
राधा रानी को साथ ले आओ,
मेरे कीर्तन में रंग बरसाओ,
आओ जी गजानन आओ......

हनुमत तुम भी पधारो,
नारद तुम भी पधारो,
मैया रानी को साथ ले आओ,
मेरे कीर्तन में रंग बरसाओ,
आओ जी गजानन आओ`,
roman:`Mere keertan mein rang barsaao,
Aao ji gajaanan aao.....

Brahma tum bhi padhaaro,
Vishnu tum bhi padhaaro,
Bhole shankar ko saath le aao,
Aao ji gajaanan aao,
Mere keertan mein rang barsaao,
Aao ji gajaanan aao.....

Lakshmi tum bhi padhaaro,
Gauraa tum bhi padhaaro,
Saraswati ko saath le aao
Aao ji gajaanan aao,
Mere keertan mein rang barsaao,
Aao ji gajaanan aao......

Raam tum bhi padhaaro,
Lakshman tum bhi padhaaro,
Seetaa maiya ko saath le aao,
Mere keertan mein rang barsaao,
Aao ji gajaanan aao......

Shyaam tum bhi padhaaro,
Raam tum bhi padhaaro,
Raadhaa raanee ko saath le aao,
Mere keertan mein rang barsaao,
Aao ji gajaanan aao......

Hanumat tum bhi padhaaro,
Naarad tum bhi padhaaro,
Maiya raanee ko saath le aao,
Mere keertan mein rang barsaao,
Aao ji gajaanan aao`},

{id:147,no:42,titleEn:"Meri Ankhiyon Ke Samne Hi Rehna",titleHi:"मेरी अंखियों के सामने ही रहना",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"partial",yt:"0diZqEfx6_A",desc:"Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.25.00 AM (8)",
hindi:`मेरी अंखियों के सामने ही रहना
ओ शेरों वाली जगदम्बे`,
roman:`Meri ankhiyon ke saamne hi rahnaa
O sheron waali jagdambe`},

{id:107,no:43,titleEn:"Meri Jhopdi Ke Bhaag",titleHi:"मेरी झोपड़ी के भाग",god:"Lord Rama",godHi:"राम जी",type:"Bhajan",lyrics:"partial",yt:"wncNcu6jEgs",desc:"A joyful bhajan celebrating the arrival of Lord Rama.",source:"Your Bhajan Collection • PDF pp. 18–21 (Ram version)",
hindi:`मेरी झोपड़ी के भाग,
आज खुल जाएंगे,
राम आएँगे,
राम आएँगे आएँगे,`,
roman:`Meri jhopdi ke bhaag,
Aaj khul jayenge,
Ram aayenge,
Ram aayenge aayenge,`},

{id:106,no:44,titleEn:"Nagri Ho Ayodhya Si",titleHi:"नगरी हो अयोध्या सी",god:"Lord Rama",godHi:"राम जी",type:"Bhajan",lyrics:"partial",yt:"WGat6jaSs5k",desc:"A prayer envisioning a home filled with the virtues of Ramayana.",source:"Your Bhajan Collection • PDF pp. 16–17",
hindi:`लक्ष्मण सा भाई हो, कौशल्या माई हो,
स्वामी तुम जैसा मेरा रघुराई हो।`,
roman:`Lakshman sa bhai ho, Kausalya mai ho,
Swami tum jaisa mera Raghurai ho.`},

{id:152,no:45,titleEn:"Odhi Odhi Re Maiya Ji Ne Lal Chunari",titleHi:"ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी",god:"Durga Maa",godHi:"",type:"Bhajan",lyrics:"full",yt:"L1TvqgwjGuU",desc:"Transcribed from the supplied image; repetition cues retained. Romanized pronunciation added from the Hindi text.",source:"Your WhatsApp image collection • 1.25.00 AM (2)",
hindi:`ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी,
हो लाल चुनरी, घोटेदार चुनरी,
ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।

सतयुग में माँ जन्म लियो है, शक्ति माँ कहलाई,
भोले संग में ब्याह रचाया, हवन में गई समाई,
ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।

त्रेता में माँ जन्म लियो है, सीता माँ कहलाई,
राम के संग में ब्याह रचाया, वन में गई चुराई,
रोये रोये दोनों भाई, देख लाल चुनरी
ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।

द्वापर में माँ जन्म लियो है, द्रोपदी माँ कहलाई,
पाण्डव संग में ब्याह रचाया, जुए में गई समाई,
रोये रोये पांचो भाई, देख लाल चुनरी,
ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।

कलयुग में माँ जन्म लियो है, वैष्णो माँ कहलाई,
भैरव बाबा पीछे पड़ गए, गुफा में गई समाई,
रोये रोये लांगुर भैरव, देख लाल चुनरी,
ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी,
हो लाल चुनरी, घोटेदार चुनरी,
ओढ़ी ओढ़ी रे मईया जी ने लाल चुनरी।।`,
roman:`Odhi odhi re maiya ji ne laal chunari,
Ho laal chunari, ghotedaar chunari,
Odhi odhi re maiya ji ne laal chunari||

Satyug mein maa janm liyo hai, shakti maa kehlaayi,
Bhole sang mein byaah rachaayaa, havan mein gayi samaaee,
Odhi odhi re maiya ji ne laal chunari||

Tretaa mein maa janm liyo hai, seetaa maa kehlaayi,
Raam ke sang mein byaah rachaayaa, van mein gayi churaaee,
Roye roye donon bhaaee, dekh laal chunari
Odhi odhi re maiya ji ne laal chunari||

Dwaapar mein maa janm liyo hai, dropadi maa kehlaayi,
Paandav sang mein byaah rachaayaa, jue mein gayi samaaee,
Roye roye paancho bhaaee, dekh laal chunari,
Odhi odhi re maiya ji ne laal chunari||

Kalyug mein maa janm liyo hai, vaishno maa kehlaayi,
Bhairav baabaa peechhe pad gaye, gufa mein gayi samaaee,
Roye roye laangur bhairav, dekh laal chunari,
Odhi odhi re maiya ji ne laal chunari,
Ho laal chunari, ghotedaar chunari,
Odhi odhi re maiya ji ne laal chunari||`},

{id:141,no:46,titleEn:"Om Jai Ambe Gauri",titleHi:"ॐ जय अम्बे गौरी",god:"Durga Maa",godHi:"",type:"Aarti",lyrics:"full",yt:"3o4eQugO7zk",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 19–21 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`श्लोक
सर्वमंगल मांगल्ये, शिवे सर्वार्थसाधिके ।
शरण्ये त्र्यंबिके गौरी, नारायणी नमोऽस्तुते ।।

आरती
ॐ जय अम्बे गौरी, मैया जय श्यामा गौरी
तुम को निस दिन ध्यावत, मैयाजी को निस दिन ध्यावत,
हरि ब्रह्मा शिव री ॥ ॐ जय अम्बे गौरी।।

माँग सिन्दूर विराजत, टीको मृग मद को।
मैया टीको मृगमद को,
उज्ज्वल से दोउ नैना चंद्रवदन नीको ॥
ॐ जय अम्बे गौरी

कनक समान कलेवर, रक्ताम्बर साजे।
मैया रक्ताम्बर साजे
रक्त पुष्प गल माला, कण्ठन पर साजे।।
ॐ जय अम्बे गौरी

केहरि वाहन राजत, खड्ग खपर धारी।
मैया खड्ग खपर धारी
सुर-नर-मुनि-जन सेवत, तिनके दुख हारी।।
ॐ जय अम्बे गौरी

कानन कुण्डल शोभित, नासाग्रे मोती।
मैया नासाग्रे मोती
कोटिक चन्द्र दिवाकर, सम राजत ज्योति।।
ॐ जय अम्बे गौरी

शुम्भ निशुम्भ बिदारे, महिषासुर घाती।
मैया महिषासुर घाती
धूम्र विलोचन नैना, निशिदिन मदमाती।।
ॐ जय अम्बे गौरी

चण्ड मुण्ड संहारे, शोणित बीज हरे। मैया शोणित बीज हरे
मधु कैटभ दोउ मारे, सुर भयहीन करें।।
ॐ जय अम्बे गौरी

ब्रह्माणी रुद्राणी, तुम कमला रानी। मैया तुम कमला रानी
आगम निगम बखानी, तुम शिव पटरानी।।
ॐ जय अम्बे गौरी

चौंसठ योगिनि गावत, नृत्य करत भैरों। मैया नृत्य करत भैरों
बाजत ताल मृदंग और बाजत डमरू।।
ॐ जय अम्बे गौरी

तुम हो जग की माता, तुम ही हो भर्ता। मैया तुम ही हो भर्ता
भक्तन की दुख हर्ता, सुख सम्पति कर्ता।।
ॐ जय अम्बे गौरी ॥

भुजा चार अति शोभित, वर मुद्रा धारी। मैया वर मुद्रा धारी
मन वांछित फल पावत, सेवत नर नारी।।
ॐ जय अम्बे गौरी

कंचन थाल विराजत, अगर कपूर बाती। मैया अगर कपूर बाती
माल केतु में राजत, कोटि रतन ज्योति।।
ॐ जय अम्बे गौरी

माँ अम्बे की आरती, जो कोई नर गावे।
मैया जो कोई नर गावे
कहत शिवानन्द स्वामी, सुख सम्पति पावे।।
ॐ जय अम्बे गौरी।

देवी वन्दना
या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।
नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥`,
roman:`Shlok
Sarvamangala maangalye, shive sarvaarthasaadhike |
Sharanye tryambike gauree, narayani namo'stute ||

Aarti
Om jai ambe gauree, maiya jai shyaamaa gauree
Tum ko nis din dhyaavat, maiyaajee ko nis din dhyaavat,
Hari brahma shiv ree || Om jai ambe gauree||

Maang sindoor viraajat, teeko mrig mad ko|
Maiya teeko mrigamad ko,
Ujjval se dou nainaa chandravadan neeko ||
Om jai ambe gauree

Kanak samaan kalevar, raktaambar saaje|
Maiya raktaambar saaje
Rakt pushp gal maalaa, kanthan par saaje||
Om jai ambe gauree

Kehari vaahan raajat, khadg khapar dhaaree|
Maiya khadg khapar dhaaree
Sur-nar-muni-jan sevat, tinke dukh haaree||
Om jai ambe gauree

Kaanan kundal shobhit, naasaagre motee|
Maiya naasaagre motee
Kotik chandra divaakar, sam raajat jyoti||
Om jai ambe gauree

Shumbh nishumbh bidaare, mahishaasur ghaatee|
Maiya mahishaasur ghaatee
Dhoomra vilochan nainaa, nishidin madmaatee||
Om jai ambe gauree

Chand mund sanhaare, shonit beej hare| maiya shonit beej hare
Madhu kaitabh dou maare, sur bhayheen karen||
Om jai ambe gauree

Brahmani rudraanee, tum kamala raanee| maiya tum kamala raanee
Aagam nigam bakhaanee, tum shiv patraanee||
Om jai ambe gauree

Chaunsath yogini gaavat, nritya karat bhairon| maiya nritya karat bhairon
Baajat taal mridang aur baajat damroo||
Om jai ambe gauree

Tum ho jag ki maataa, tum hi ho bhartaa| maiya tum hi ho bhartaa
Bhaktan ki dukh hartaa, sukh sampati kartaa||
Om jai ambe gauree ||

Bhujaa chaar ati shobhit, var mudraa dhaaree| maiya var mudraa dhaaree
Man vaanchhit phal paavat, sevat nar naaree||
Om jai ambe gauree

Kanchan thaal viraajat, agar kapoor baatee| maiya agar kapoor baatee
Maal ketu mein raajat, koti ratan jyoti||
Om jai ambe gauree

Maa ambe ki aarti, jo koi nar gaave|
Maiya jo koi nar gaave
Kahat shivaanand swami, sukh sampati paave||
Om jai ambe gauree|

Devee vandanaa
Yaa devee sarvabhooteshu shaktiroopena sansthitaa|
Namastasyai namastasyai namastasyai namo namah||`},

{id:133,no:47,titleEn:"Om Jai Gangadhar",titleHi:"ॐ जय गंगाधर",god:"Lord Shiva",godHi:"",type:"Aarti",lyrics:"full",yt:"iRxxfJwyxzs",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 4–6 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`ॐ जय गंगाधर जय हर जय गिरिजाधीशा।
त्वं मां पालय नित्यं कृपया जगदीशा॥
हर जय गिरिजाधीशा।

कैलासे गिरिशिखरे कल्पद्रुमविपिने।
गुंजति मधुकरपुंजे कुंजवने गहने॥
कोकिलकूजित खेलत हंसावन ललिता।
रचयति कलाकलापं नृत्यति मुदसहिता ॥
हर जय गिरिजाधीशा।

तस्मिंल्ललितसुदेशे शाला मणिरचिता।
तन्मध्ये हरनिकटे गौरी मुदसहिता॥
क्रीडा रचयति भूषारंचित निजमीशम्।
इंद्रादिक सुर सेवत नामयते शीशम् ॥
हर जय गिरिजाधीशा।

विबुधवधू बहु नृत्यत नामयते मुदसहिता।
किन्नर गायन कुरुते सप्त स्वर सहिता॥
धिनकत थै थै धिनकत मृदंग वादयते।
क्वण क्वण ललिता वेणुं मधुरं नाटयते॥
हर जय गिरिजाधीशा।

रुण रुण चरणे रचयति नूपुरमुज्ज्वलिता।
चक्रावर्ते भ्रमयति कुरुते तां धिक तां॥
तां तां लुप चुप तां तां डमरू वादयते।
अंगुष्ठांगुलिनादं लासकतां कुरुते ॥
हर जय गिरिजाधीशा।

कर्पूरद्युतिगौरं पंचाननसहितम्।
त्रिनयनशशिधरमौलिं विषधरकण्ठयुतम्॥
सुन्दरजटायकलापं पावकयुतभालम्।
डमरुत्रिशूलपिनाकं करधृतनृकपालम् ॥
हर जय गिरिजाधीशा।

मुण्डै रचयति माला पन्नगमुपवीतम्।
वामविभागे गिरिजारूपं अतिललितम्॥
सुन्दरसकलशरीरे कृतभस्माभरणम्।
इति वृषभध्वजरूपं तापत्रयहरणं ॥
हर जय गिरिजाधीशा।

शंखनिनादं कृत्वा झल्लरि नादयते।
नीराजयते ब्रह्मा वेदऋचां पठते॥
अतिमृदुचरणसरोजं हृत्कमले धृत्वा।
अवलोकयति महेशं ईशं अभिनत्वा॥
हर जय गिरिजाधीशा।

ध्यानं आरति समये हृदये अति कृत्वा।
रामस्त्रिजटानाथं ईशं अभिनत्वा॥
संगतिमेवं प्रतिदिन पठनं यः कुरुते।
शिवसायुज्यं गच्छति भक्त्या यः शृणुते ॥
हर जय गिरिजाधीशा।`,
roman:`Om jai gangaadhara jai hara jai girijaadheeshaa|
Tvam maam paalaya nityam kripaya jagadisha||
Hara jai girijaadheeshaa|

Kailaase girishikhare kalpadrumavipine|
Gunjati madhukarapunje kunjavane gahane||
Kokilakoojita khelata hansaavana lalitaa|
Rachayati kalaakalaapam nrityati mudasahita ||
Hara jai girijaadheeshaa|

Tasminllalitasudeshe shaalaa manirachitaa|
Tanmadhye haranikate gauree mudasahita||
Kreedaa rachayati bhooshaaranchita nijameesham|
Indraadika sura sevata naamayate sheesham ||
Hara jai girijaadheeshaa|

Vibudhavadhoo bahu nrityata naamayate mudasahita|
Kinnara gaayana kurute sapta swar sahitaa||
Dhinakat thai thai dhinakat mridanga vaadayate|
Kvana kvana lalitaa venum madhuram naatayate||
Hara jai girijaadheeshaa|

Runa runa charane rachayati noopuramujjvalitaa|
Chakraavarte bhramayati kurute taam dhika taam||
Taam taam lupa chupa taam taam damaroo vaadayate|
Angushthaangulinaadam laasakataam kurute ||
Hara jai girijaadheeshaa|

Karpooradyutigauram panchaananasahitam|
Trinayanashashidharamaulim vishadharakanthayutam||
Sundarajataayakalaapam paavakayutabhaalam|
Damarutrishoolapinaakam karadhritanrikapaalam ||
Hara jai girijaadheeshaa|

Mundai rachayati maalaa pannagamupaveetam|
Vaamavibhaage girijaaroopam atilalitam||
Sundarasakalashareere kritabhasmaabharanam|
Iti vrishabhadhvajaroopam taapatrayaharanam ||
Hara jai girijaadheeshaa|

Shankhaninaadam kritvaa jhallari naadayate|
Neeraajayate brahma vedarichaam pathate||
Atimriducharanasarojam hritkamale dhritvaa|
Avalokayati mahesham eesham abhinatvaa||
Hara jai girijaadheeshaa|

Dhyaanam aarti samaye hridaye ati kritvaa|
Raamastrijataanaatham eesham abhinatvaa||
Sangatimevam pratidina pathanam yah kurute|
Shivasaayujyam gachchhati bhaktyaa yah shrinute ||
Hara jai girijaadheeshaa|`},

{id:136,no:48,titleEn:"Om Jai Jagdish Hare",titleHi:"ॐ जय जगदीश हरे",god:"Lord Krishna",godHi:"",type:"Aarti",lyrics:"full",yt:"3ucCEjXS9n8",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 10–11 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे,
भक्त जनों के संकट, दास जनों के संकट,
क्षण में दूर करे, ॐ जय जगदीश हरे

जो ध्यावे फल पावे,
दुख बिनसे मन का, स्वामी दुख बिनसे मन का
सुख सम्पति घर आवे, सुख सम्पति घर आवे,
कष्ट मिटे तन का, ॐ जय जगदीश हरे

मात पिता तुम मेरे,
शरण गहूं मैं किसकी, स्वामी शरण गहूं मैं किसकी।
तुम बिन और न दूजा, तुम बिन और न दूजा,
आस करूं मैं जिसकी, ॐ जय जगदीश हरे

तुम पूरण परमात्मा,
तुम अंतर्यामी, स्वामी तुम अंतर्यामी,
पारब्रह्म परमेश्वर, पारब्रह्म परमेश्वर,
तुम सब के स्वामी, ॐ जय जगदीश हरे

तुम करुणा के सागर,
तुम पालनकर्ता, स्वामी तुम पालनकर्ता,
मैं मूरख खल कामी, मैं सेवक तुम स्वामी,
कृपा करो भर्ता, ॐ जय जगदीश हरे

तुम हो एक अगोचर,
सबके प्राणपति, स्वामी सबके प्राणपति,
किस विधि मिलूं दयामय, किस विधि मिलूं दयामय,
तुमको मैं कुमति, ॐ जय जगदीश हरे

दीनबंधु दुखहर्ता,
ठाकुर तुम मेरे, स्वामी ठाकुर तुम मेरे,
अपने हाथ उठाओ, अपने शरण लगाओ,
द्वार पड़ा तेरे, ॐ जय जगदीश हरे

विषय विकार मिटाओ,
पाप हरो देवा, स्वामी पाप हरो देवा,
श्रद्धा भक्ति बढ़ाओ, श्रद्धा भक्ति बढ़ाओ,
संतन की सेवा, ॐ जय जगदीश हरे

तन-मन-धन प्रभु,
सब कुछ है तेरा, स्वामी सब कुछ है तेरा,
तेरा तुझको अर्पण, क्या लागे मेरा, स्वामी क्या लागे मेरा,
ॐ जय जगदीश हरे

श्याम-सुन्दर जी की आरती,
जो कोई नर गावे, स्वामी जो कोई नर गावे,
भाव भक्ति श्रद्धा से, मनवांछित फल पावे,
स्वामी मनवांछित फल पावे,
ॐ जय जगदीश हरे`,
roman:`Om jai jagdish hare, swami jai jagdish hare,
Bhakt janon ke sankat, daas janon ke sankat,
Kshan mein door kare, Om jai jagdish hare

Jo dhyaave phal paave,
Dukh binse man ka, swami dukh binse man ka
Sukh sampati ghar aave, sukh sampati ghar aave,
Kasht mite tan ka, Om jai jagdish hare

Maat pitaa tum mere,
Sharan gahoon main kiskee, swami sharan gahoon main kiskee|
Tum bin aur na doojaa, tum bin aur na doojaa,
Aas karoon main jiskee, Om jai jagdish hare

Tum pooran paramaatma,
Tum antaryaami, swami tum antaryaami,
Paarabrahm parameshwar, paarabrahm parameshwar,
Tum sab ke swami, Om jai jagdish hare

Tum karunaa ke saagar,
Tum paalankartaa, swami tum paalankartaa,
Main moorakh khal kaamee, main sevak tum swami,
Kripaa karo bhartaa, Om jai jagdish hare

Tum ho ek agochar,
Sabke praanpati, swami sabke praanpati,
Kis vidhi miloon dayaamay, kis vidhi miloon dayaamay,
Tumko main kumati, Om jai jagdish hare

Deenbandhu dukhhartaa,
Thaakur tum mere, swami thaakur tum mere,
Apne haath uthaao, apne sharan lagaao,
Dwaar padaa tere, Om jai jagdish hare

Vishay vikaar mitaao,
Paap haro devaa, swami paap haro devaa,
Shraddha bhakti badhao, shraddha bhakti badhao,
Santan ki sevaa, Om jai jagdish hare

Tan-man-dhan prabhu,
Sab kuchh hai teraa, swami sab kuchh hai teraa,
Teraa tujhko arpan, kyaa laage mera, swami kyaa laage mera,
Om jai jagdish hare

Shyaam-sundar ji ki aarti,
Jo koi nar gaave, swami jo koi nar gaave,
Bhaav bhakti shraddha se, manvaanchhit phal paave,
Swami manvaanchhit phal paave,
Om jai jagdish hare`},

{id:139,no:49,titleEn:"Om Jai Lakshmi Mata",titleHi:"ॐ जय लक्ष्मी माता",god:"Lakshmi Maa",godHi:"",type:"Aarti",lyrics:"full",yt:"0J1aNK16sFM",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 15–16 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।
तुम को निस दिन सेवत, मैयाजी को निस दिन सेवत
हर विष्णु धाता ॥ ॐ जय लक्ष्मी माता

उमा रमा ब्रह्माणी, तुम ही जग माता।
मैया तुम ही जग माता, सूर्य चन्द्र माँ ध्यावत,
नारद ऋषि गाता।। ॐ जय लक्ष्मी माता

दुर्गा रूप निरंजनि, सुख सम्पति दाता।
मैया सुख सम्पति दाता, जो कोई तुम को ध्यावत,
ऋद्धि सिद्धि धन पाता।। ॐ जय लक्ष्मी माता

तुम पाताल निवासिनि, तुम ही शुभ दाता।
मैया तुम ही शुभ दाता, कर्म प्रभाव प्रकाशिनि,
भव निधि की त्राता। ॐ जय लक्ष्मी माता

जिस घर तुम रहती, तहँ सब सद्गुण आता।
मैया सब सद्गुण आता, सब संभव हो जाता,
मन नहीं घबराता।। ॐ जय लक्ष्मी माता

तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।
मैया वस्त्र न कोई पाता, खान पान का वैभव,
सब तुम से आता।। ॐ जय लक्ष्मी माता

शुभ गुण मंदिर सुंदर, क्षीरोदधि जाता।
ओ मैया क्षीरोदधि जाता, रत्न चतुर्दश तुम बिन,
कोई नहीं पाता।। ॐ जय लक्ष्मी माता

महा लक्ष्मीजी की आरती, जो कोई जन गाता।
मैया जो कोई जन गाता, उर आनंद समाता,
पाप उतर जाता।। ॐ जय लक्ष्मी माता`,
roman:`Om jai lakshmi maataa, maiya jai lakshmi maataa|
Tum ko nis din sevat, maiyaajee ko nis din sevat
Har vishnu dhaataa || Om jai lakshmi maataa

Umaa ramaa brahmani, tum hi jag maataa|
Maiya tum hi jag maataa, surya chandra maa dhyaavat,
Naarad rishi gaataa|| Om jai lakshmi maataa

Durga roop niranjani, sukh sampati daataa|
Maiya sukh sampati daataa, jo koi tum ko dhyaavat,
Riddhi siddhi dhan paataa|| Om jai lakshmi maataa

Tum paataal nivaasini, tum hi shubh daataa|
Maiya tum hi shubh daataa, karm prabhaav prakaashini,
Bhav nidhi ki traataa| Om jai lakshmi maataa

Jis ghar tum rahtee, tahan sab sadgun aataa|
Maiya sab sadgun aataa, sab sambhav ho jaataa,
Man nahin ghabraataa|| Om jai lakshmi maataa

Tum bin yagya na hote, vastra na koi paataa|
Maiya vastra na koi paataa, khaan paan ka vaibhav,
Sab tum se aataa|| Om jai lakshmi maataa

Shubh gun mandir sundar, ksheerodadhi jaataa|
O maiya ksheerodadhi jaataa, ratna chaturdash tum bin,
Koi nahin paataa|| Om jai lakshmi maataa

Maha lakshmeejee ki aarti, jo koi jan gaataa|
Maiya jo koi jan gaataa, ur aanand samaataa,
Paap utar jaataa|| Om jai lakshmi maataa`},

{id:140,no:50,titleEn:"Om Jai Lakshmi Ramana Satyanarayan Aarti",titleHi:"ॐ जय लक्ष्मी रमणा — सत्यनारायण आरती",god:"Lord Vishnu",godHi:"",type:"Aarti",lyrics:"full",yt:"DKE-QUJEkJk",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 17–18 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`ॐ जय लक्ष्मी रमणा, श्री लक्ष्मी रमणा।
सत्यनारायण स्वामी जन-पातक-हरणा।।
ॐ जय लक्ष्मी रमणा

रत्नजड़ित सिंहासन अद्भुत छवि राजे।
नारद करत निराजन घंटा ध्वनि बाजे।।
ॐ जय लक्ष्मी रमणा

प्रकट भये कलि कारण, द्विज को दरस दियो।
बूढ़े ब्राह्मण बनकर कंचन-महल कियो।।
ॐ जय लक्ष्मी रमणा

दुर्बल भील कठारो, जिनपर कृपा करी।
चन्द्रचूड़ एक राजा, जिनकी बिपति हरी।।
ॐ जय लक्ष्मी रमणा

वैश्य मनोरथ पायो श्रद्धा तज दीन्हीं।
सो फल भोग्यो प्रभुजी फिर अस्तुति कीन्हीं।।
ॐ जय लक्ष्मी रमणा

भाव-भक्ति के कारण छिन-छिन रूप धरयो।
श्रद्धा धारण कीनी, तिनको काज सरयो।।
ॐ जय लक्ष्मी रमणा

ग्वाल-बाल सँग राजा वन में भक्ति करी।
मनवांछित फल दीन्हों दीनदयाल हरी।।
ॐ जय लक्ष्मी रमणा

चढ़त प्रसाद सवायो कदलीफल, मेवा।
धूप-दीप-तुलसी से राजी सत्यदेवा।।
ॐ जय लक्ष्मी रमणा

श्री सत्यनारायण जी की आरती जो कोई नर गावे।
तन-मन-सुख-सम्पति मन-वांछित फल पावे।।
ॐ जय लक्ष्मी रमणा`,
roman:`Om jai lakshmi ramana, shri lakshmi ramana|
Satyanarayan swami jan-paatak-harana||
Om jai lakshmi ramana

Ratnajadit sinhaasan adbhut chhavi raaje|
Naarad karat niraajan ghantaa dhwani baaje||
Om jai lakshmi ramana

Prakat bhaye kali kaaran, dwij ko daras diyo|
Boodhe braahman bankar kanchan-mahal kiyo||
Om jai lakshmi ramana

Durbal bheel kathaaro, jinpar kripaa karee|
Chandrachood ek raajaa, jinkee bipati haree||
Om jai lakshmi ramana

Vaishya manorath paayo shraddha taj deenheen|
So phal bhogyo prabhujee phir astuti keenheen||
Om jai lakshmi ramana

Bhaav-bhakti ke kaaran chhin-chhin roop dharyo|
Shraddha dhaaran keenee, tinko kaaj sarayo||
Om jai lakshmi ramana

Gwal-baal sang raajaa van mein bhakti karee|
Manvaanchhit phal deenhon deendayaal haree||
Om jai lakshmi ramana

Chadhat prasaad savaayo kadaliphal, mevaa|
Dhoop-deep-tulsee se raajee satyadevaa||
Om jai lakshmi ramana

Shri satyanarayan ji ki aarti jo koi nar gaave|
Tan-man-sukh-sampati man-vaanchhit phal paave||
Om jai lakshmi ramana`},

{id:143,no:51,titleEn:"Om Jai Santoshi Mata",titleHi:"ॐ जय संतोषी माता",god:"Santoshi Maa",godHi:"",type:"Aarti",lyrics:"full",yt:"wsk1JSwchdc",desc:"Transcribed from the supplied collection. Printed wording and repetitions retained; Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 24–25 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`ॐ जय संतोषी माता, मैया जय संतोषी माता ।
अपने सेवक जन को, सुख संपति दाता ॥
ॐ जय संतोषी माता

सुंदर चीर सुनहरी, मां धारण कीन्हो ।
हीरा पन्ना दमके, तन शृंगार लीन्हो ॥
ॐ जय संतोषी माता

गेरू लाल छटा छवि, बदन कमल सोहे ।
मंद हँसत करुणामयी, त्रिभुवन जन मोहे ॥
ॐ जय संतोषी माता

स्वर्ण सिंहासन बैठी, चंवर दुरे प्यारे ।
धूप, दीप, मधुमेवा, भोग धरे न्यारे ॥
ॐ जय संतोषी माता

गुड़ अरु चना परमप्रिय, तामें संतोष कियो।
संतोषी कहलाई, भक्तन वैभव दियो ॥
ॐ जय संतोषी माता

शुक्रवार प्रिय मानत, आज दिवस सोही ।
भक्त मण्डली छाई, कथा सुनत मोही ॥
ॐ जय संतोषी माता

मंदिर जगमग ज्योति, मंगल ध्वनि छाई ।
विनय करें हम बालक, चरनन सिर नाई ॥
ॐ जय संतोषी माता

भक्ति भावमय पूजा, अंगीकृत कीजै ।
जो मन बसे हमारे, इच्छ फल दीजै ॥
ॐ जय संतोषी माता

दुखी, दरिद्री, रोगी, संकटमुक्त किए ।
बहु धन-धान्य भरे घर, सुख सौभाग्य दिए ॥
ॐ जय संतोषी माता

ध्यान धर्यो जिस जन ने, मनवांछित फल पायो ।
पूजा कथा श्रवण कर, घर आनंद आयो ॥
ॐ जय संतोषी माता

शरण गहे की लज्जा, राखियो जगदंबे ।
संकट तू ही निवारे, दयामयी अंबे ॥
ॐ जय संतोषी माता

संतोषी मां की आरती, जो कोई नर गावे ।
ऋद्धि-सिद्धि सुख संपति, जी भरकर पावे ॥
ॐ जय संतोषी माता`,
roman:`Om jai santoshi maataa, maiya jai santoshi maataa |
Apne sevak jan ko, sukh sampati daataa ||
Om jai santoshi maataa

Sundar cheer sunahree, maa dhaaran keenho |
Heeraa pannaa damke, tan shringar leenho ||
Om jai santoshi maataa

Geroo laal chhataa chhavi, badan kamal sohe |
Mand hansat karunamayi, tribhuvan jan mohe ||
Om jai santoshi maataa

Svarn sinhaasan baithee, chanwar dure pyaare |
Dhoop, deep, madhumevaa, bhog dhare nyaare ||
Om jai santoshi maataa

Gud aru chanaa parampriya, taamen santosh kiyo|
Santoshi kehlaayi, bhaktan vaibhav diyo ||
Om jai santoshi maataa

Shukravaar priya maanat, aaj divas sohee |
Bhakt mandalee chhaaee, kathaa sunat mohee ||
Om jai santoshi maataa

Mandir jagmag jyoti, mangal dhwani chhaaee |
Vinay karen hum baalak, charnan sir naaee ||
Om jai santoshi maataa

Bhakti bhaavmay poojaa, angeekrit keejai |
Jo man base humaare, ichchh phal deejai ||
Om jai santoshi maataa

Dukhee, daridree, rogee, sankatmukt kiye |
Bahu dhan-dhaany bhare ghar, sukh saubhagya diye ||
Om jai santoshi maataa

Dhyan dharyo jis jan ne, manvaanchhit phal paayo |
Poojaa kathaa shravan kar, ghar aanand aayo ||
Om jai santoshi maataa

Sharan gahe ki lajjaa, raakhiyo jagdambe |
Sankat tu hi nivaare, dayamayi ambe ||
Om jai santoshi maataa

Santoshi maa ki aarti, jo koi nar gaave |
Riddhi-siddhi sukh sampati, ji bharkar paave ||
Om jai santoshi maataa`},

{id:162,no:52,titleEn:"Paar Na Lagoge Shri Ram Ke Bina",titleHi:"पार ना लगोगे श्री राम के बिना",god:"Lord Hanuman",godHi:"",type:"Bhajan",lyrics:"partial",yt:"fdD4_lexi7s",desc:"Supplied song version with spoken interludes and repeated lines retained. Romanized pronunciation added from the Hindi text.",source:"Lyrics supplied directly by the collection owner",
hindi:`ओये पार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना
पार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना
सुनो पार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना
पार ना लगोगे श्री राम के बिना, राम ना मिलेंगे हनुमान के बिना`,
roman:`Oye paar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa
Paar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa
Suno paar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa
Paar naa lagoge shri raam ke binaa, raam naa milenge hanuman ke binaa`},

{id:114,no:53,titleEn:"Palki Mein Hoke Sawar Chali Re",titleHi:"पालकी में होके सवार चली रे",god:"Durga Maa",godHi:"दुर्गा माँ",type:"Bhajan",lyrics:"full",yt:"",desc:"Hindi lyrics transcribed from the supplied Maa poster. Source wording and refrain shortcuts are retained. Romanized pronunciation added from the Hindi text.",source:"Your collection • Supplied poster watermarked Beats of Serenity, shared by Ranjana Bhargava",
hindi:`पालकी में होके सवार चली रे,
में तो अपनी मैया के द्वार चली रे
कोई रोक सके तो रौक ले
में नाच उठी छम छम छम,
पालकी में होके सवार चली,

बागों से जोके फूल ले आई,
चुन चुन कलियों में हार बनाई
मैया को हार पहनाने चली रे,
में तो अपनी मैया के द्वार चली रे
पालकी में हो के सवार ...

जयपुर शहर से चुनरी मंगाई,
प्यारा सा उसमे गोटा लगाई
मैया को चुनरी ओढ़ाने चली रे,
में तो अपनी मैया के द्वार चली रे
पालकी में होके सवार..

ऊंची चढ़ाइयां में तो चढ़ गई
में तो अपनी मैया के भवन पर आ गई
मैया जी का दर्शन पाने चली रे
में तो अपनी मैया के द्वार चली रे,
पालकी में होके सवार..`,
roman:`Paalkee mein hoke savaar chalee re,
Mein to apnee maiya ke dwaar chalee re
Koi rok sake to rauk le
Mein naach uthee chham chham chham,
Paalkee mein hoke savaar chalee,

Baagon se joke phool le aayi,
Chun chun kaliyon mein haar banaaee
Maiya ko haar pahnaane chalee re,
Mein to apnee maiya ke dwaar chalee re
Paalkee mein ho ke savaar ...

Jaipur shahar se chunari mangaaee,
Pyaaraa saa usme gotaa lagaaee
Maiya ko chunari odhaane chalee re,
Mein to apnee maiya ke dwaar chalee re
Paalkee mein hoke savaar..

Oonchee chadhaiyaan mein to chadh gayi
Mein to apnee maiya ke bhawan par aa gayi
Maiya ji ka darshan paane chalee re
Mein to apnee maiya ke dwaar chalee re,
Paalkee mein hoke savaar..`},

{id:163,no:54,titleEn:"Ram Bhi Milenge Tujhe Shyam Bhi Milenge",titleHi:"राम भी मिलेंगे तुझे श्याम भी मिलेंगे",god:"Lord Hanuman",godHi:"",type:"Bhajan",lyrics:"partial",yt:"GApGMssxELQ",desc:"Supplied wording and repetitions preserved. Romanized pronunciation added.",source:"Lyrics supplied directly by the collection owner",
hindi:`राम भी मिलेंगे तुझे,
श्याम भी मिलेंगे,
जब तुझे श्री हनुमान,
जी मिलेंगे,`,
roman:`Ram bhi milenge tujhe,
Shyam bhi milenge,
Jab tujhe Shri Hanuman,
Ji milenge,`},

{id:118,no:55,titleEn:"Rang De Chunaria",titleHi:"",god:"Lord Krishna",godHi:"",type:"Bhajan",lyrics:"full",yt:"jYEMHatanl0",desc:"Romanized lyrics from the supplied PDF. Columns read top to bottom, then left to right. Source spelling and repetition cues preserved. No Hindi lyrics were supplied.",source:"Your collection • bahajans-lyrcis.pdf, page 4",
hindi:``,
roman:`Rang de chunaria... (3)
Rang de (6)
Rang de chunaria...
Rang de (8)
Rang de chunaria
Rang de chunaria...
Rang de chunaria...
Rang de chunaria (2)
Shyam Piya More Rang de Chunaria
(2)
Rang de chunaria(2)
Shyam Piya more Rang de Chunaria
(2)

Aisi rang de ke rang nahi choote
Aisi rang de rang de rang de ke rang
nahi choote
Dhobiya dooye chahe ye sari umariya
(2)

Oh shyam piya more rang de chunaria
Shyam piya more rang de chunaria
Rang de (5)
Rang de chunaria

Lal na rangavu mei
Hari na rangavu
Apne hi rang me rang de chunaria (2)

Oh shyam piya more rang de chunaria
Shyam piya more rang de (chunaria)
(6)
Rang de (9)
Rang de chunaria
Bina rangaye mai to ghar nahi javongi
Bina... Rangaye mai to ghar nahi...
Javongi
Pa pa da nida dapa
Pa da ma pa gama pa

Pa da ma pa ga ma ri
Ga ma riga sa ni sa

Shyam piya more rang de chunaria
Mira ke prabhu giridhar nagar

Jal se patla koun hai
Koun bhumi se bhari
Koun agn se tej hai
Koun kajal se kali

Jal se patla... Patla (3)
Jal se patla jnan hai
Aur paap bhumi se bhari
Krodh agn se tej hai
Aur kalank kajal se kali

Mira k prabhu giridhar nagar
Prabhu charanan me hari charanan
me
Shyam charanan me lagi nazariya
Oh Sham piya more
Rang de Chunariya
Rang de Chunariya oh Rang de
Chunariya (2)
Rang de Chunariya (10)
Rang de (8)
Rang de Chunariya
Rang de Chunariya... Ah... (2)
Rang de Chunariya`},

{id:125,no:56,titleEn:"Sai Aapki Kripa Se Sab Kaam Ho Raha Hai",titleHi:"साईं आपकी कृपा से सब काम हो रहा है",god:"Sai Baba",godHi:"",type:"Bhajan",lyrics:"full",yt:"Ar73P4tDfKs",desc:"Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text.",source:"Your collection • bahajans-lyrcis.pdf, page 12–13",
hindi:`साईं आपकी कृपा से,
सब काम हो रहा है,
करते हो तुम ओ बाबा,
करते हो तुम ओ बाबा,
मेरा नाम हो रहा है,
साईं आपकी कृपा से,
सब काम हो रहा है॥

जो कुछ है पास मेरे,
सबकुछ दिया है तूने,
मुझे दे के सारी खुशियाँ,
हर गम लिया है तूने,
चिंता नहीं है कुछ भी,
आराम हो रहा है,
करते हो तुम ओ बाबा,
करते हो तुम ओ बाबा,
मेरा नाम हो रहा है,
साईं आपकी कृपा से,
सब काम हो रहा है॥

निर्धन भी बनते राजा,
तेरी कृपा जो होती,
आके तेरी शरण में,
कंकड़ भी बनते मोती,
सुमिरण को करके तन मन,
बलवान हो रहा है,
करते हो तुम ओ बाबा,
करते हो तुम ओ बाबा,
मेरा नाम हो रहा है,
साईं आपकी कृपा से,
सब काम हो रहा है॥

अपने कृपा सदा तुम,
बाबा बनाए रखना,
भक्ति की ज्योत दिल में,
साईं जलाए रखना,
आठो पहर तेरा ही,
गुणगान हो रहा है,
करते हो तुम ओ बाबा,
करते हो तुम ओ बाबा,
मेरा नाम हो रहा है,
साईं आपकी कृपा से,
सब काम हो रहा है॥

साईं आपकी कृपा से,
सब काम हो रहा है,
करते हो तुम ओ बाबा,
करते हो तुम ओ बाबा,
मेरा नाम हो रहा है,
साईं आपकी कृपा से,
सब काम हो रहा है॥`,
roman:`Sai aapkee kripaa se,
Sab kaam ho rahaa hai,
Karte ho tum o baabaa,
Karte ho tum o baabaa,
Mera naam ho rahaa hai,
Sai aapkee kripaa se,
Sab kaam ho rahaa hai||

Jo kuchh hai paas mere,
Sabkuchh diyaa hai toone,
Mujhe de ke saaree khushiyaan,
Har gam liyaa hai toone,
Chintaa nahin hai kuchh bhi,
Aaraam ho rahaa hai,
Karte ho tum o baabaa,
Karte ho tum o baabaa,
Mera naam ho rahaa hai,
Sai aapkee kripaa se,
Sab kaam ho rahaa hai||

Nirdhan bhi bante raajaa,
Teri kripaa jo hotee,
Aake teri sharan mein,
Kankad bhi bante motee,
Sumiran ko karke tan man,
Balvaan ho rahaa hai,
Karte ho tum o baabaa,
Karte ho tum o baabaa,
Mera naam ho rahaa hai,
Sai aapkee kripaa se,
Sab kaam ho rahaa hai||

Apne kripaa sadaa tum,
Baabaa banaae rakhnaa,
Bhakti ki jyot dil mein,
Sai jalaae rakhnaa,
Aatho pahar teraa hi,
Gungaan ho rahaa hai,
Karte ho tum o baabaa,
Karte ho tum o baabaa,
Mera naam ho rahaa hai,
Sai aapkee kripaa se,
Sab kaam ho rahaa hai||

Sai aapkee kripaa se,
Sab kaam ho rahaa hai,
Karte ho tum o baabaa,
Karte ho tum o baabaa,
Mera naam ho rahaa hai,
Sai aapkee kripaa se,
Sab kaam ho rahaa hai||`},

{id:119,no:57,titleEn:"Sai Tere Charnon Ki Thodi Dhul Jo Mil Jay",titleHi:"साईं तेरे चरणों की",god:"Sai Baba",godHi:"",type:"Bhajan",lyrics:"full",yt:"",desc:"Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text.",source:"Your collection • bahajans-lyrcis.pdf, page 6",
hindi:`साईं तेरे चरणों की, साईं तेरे चरणों की।
थोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥
ये मन बड़ा चंचल है इसे कैसे तेरा ध्यान धरु
जितना इसे समझाऊं उतना ही मचल जाए॥

साईं तेरे चरणों की, साईं तेरे चरणों की।
थोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥

नजरो से गिरना नहीं, चाहे जो भी सजा देना।
नजरो से जो गिर जाऊं मुश्किल वो संभल पाना॥

साईं तेरे चरणों की, साईं तेरे चरणों की।
थोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥

सुनते हैं दया तेरी दिन रात बरसती हैं।
इस दया के सागर से एक बूंद जो मिल जाए॥

साईं तेरे चरणों की, साईं तेरे चरणों की।
थोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥

मेरे इस जीवन की बस एक तमना है तुम सामने हो मेरे।
तुम सामने हो मेरे, मेरा दम ही निकल जाए॥

साईं तेरे चरणों की, साईं तेरे चरणों की।
थोड़ी धुल जो मिल जाए, सच कहती हू बस अपनी तक़दीर बदल जाए॥`,
roman:`Sai tere charnon ki, sai tere charnon ki|
Thodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||
Ye man bada chanchal hai ise kaise teraa dhyan dharu
Jitnaa ise samjhaaoon utnaa hi machal jaaye||

Sai tere charnon ki, sai tere charnon ki|
Thodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||

Najro se girnaa nahin, chahe jo bhi sajaa denaa|
Najro se jo gir jaaoon mushkil vo sambhal paanaa||

Sai tere charnon ki, sai tere charnon ki|
Thodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||

Sunte hain dayaa teri din raat barastee hain|
Is dayaa ke saagar se ek boond jo mil jaaye||

Sai tere charnon ki, sai tere charnon ki|
Thodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||

Mere is jeevan ki bas ek tamnaa hai tum saamne ho mere|
Tum saamne ho mere, mera dam hi nikal jaaye||

Sai tere charnon ki, sai tere charnon ki|
Thodi dhul jo mil jaaye, sach kahtee hoo bas apnee taqdeer badal jaaye||`},

{id:124,no:58,titleEn:"Shirdi Wale Sai Baba",titleHi:"शिरडी वाले साईं बाबा",god:"Sai Baba",godHi:"",type:"Bhajan",lyrics:"partial",yt:"aPKNPvtw4-I",desc:"Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text.",source:"Your collection • bahajans-lyrcis.pdf, page 11",
hindi:`ज़माने में कहाँ टूटी हुई तस्वीर बनती है
तेरे दरबार में बिगड़ी हुई तकदीर बनती है`,
roman:`Zamaane mein kahaan tootee huee tasveer bantee hai
Tere darbaar mein bigdi huee takdeer bantee hai`},

{id:103,no:59,titleEn:"Shri Ram Janki Baithe Hain Mere Seene Mein",titleHi:"श्री राम जानकी बैठे हैं मेरे सीने में",god:"Lord Hanuman",godHi:"हनुमान जी",type:"Bhajan",lyrics:"partial",yt:"6CBD3NlxaQA",desc:"A devotional Hanuman bhajan centered on Siya-Ram bhakti.",source:"Your Bhajan Collection • PDF pp. 7–9",
hindi:``,
roman:`Nahin chalao baan vyang ke, ai Vibhishan
Tana na seh paoon, kyon todi hai yah mala
Tujhe ai Lankapati batlaoon
Mujh mein bhi hai, tujh mein bhi hai, sab mein hai samjhaoon`},

{id:165,no:60,titleEn:"Shri Ram Ki Gali Mein Tum Jaana",titleHi:"श्री राम की गली में तुम आना (जाना)",god:"Lord Hanuman",godHi:"",type:"Bhajan",lyrics:"partial",yt:"2XUO7QjNFqU",desc:"Both supplied versions retained, including the alternate opening word in Hindi.",source:"Hindi and English transliteration supplied directly by the collection owner",
hindi:`श्री राम की गली में तुम आना (जाना),
वहाँ नाचते मिलेंगे हनुमाना।
उनके तन में है राम, उनके मन में है राम,
अपनी आंखों से देखे कण-कण में राम।`,
roman:`Shri Ram Ki Gali Mein Tum Jaana,
Wahan Naachte Milenge Hanumana.
Unke Tan Mein Hai Ram, Unke Mann Mein Hai Ram,
Apni Aankhon Se Dekhe Kan Kan Mein Ram.`},

{id:144,no:61,titleEn:"Shri Ramchandra Kripalu Bhaj Man",titleHi:"श्री रामचन्द्र कृपालु भजु मन",god:"Lord Rama",godHi:"",type:"Bhajan",lyrics:"full",yt:"7vYETaIA7SU",desc:"Shri Ramchandra stuti from the supplied Aarti Sangrah, including its closing doha. Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 26 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`श्री रामचन्द्र कृपालु भजु मन हरण भव भय दारुणं ।
नव कंजलोचन, कंज - मुख, कर - कंज, पद कंजारुणं ॥

कंदर्प अगणित अमित छबि नवनील - नीरद सुन्दरं।
पटपीत मानहु तड़ित रुचि शुचि नौमि जनक सुतावरं ।

भजु दीनबंधु दिनेश दानव - दैत्यवंश - निकन्दनं।
रघुनन्द आनंदकंद कौशलचन्द दशरथ - नन्दनं ॥

सिर मुकुट कुंडल तिलक चारु उदारु अंग विभूषणं ।
आजानुभुज शर - चाप - धर संग्राम - जित - खरदूषणं ॥

इति वदति तुलसीदास शंकर - शेष - मुनि - मन रंजनं ।
मम हृदय - कंज निवास कुरु कामादि खलदल - गंजनं ॥

मनु जाहिं राचेउ मिलिहि सो बरु सहज सुन्दर साँवरो।
करुना निधान सुजान सिलु सनेहु जानत रावरो ॥

एही भाँति गौरि असीस सुनि सिय सहित हियँ हरषीं अली।
तुलसी भवानिहि पूजी पुनिपुनि मुदित मन मन्दिरचली ॥

दोहा
जानि गौरी अनुकूल सिय हिय हरषु न जाइ कहि ।
मंजुल मंगल मूल बाम अंग फरकन लगे ॥`,
roman:`Shri ramchandra kripaalu bhaju man haran bhav bhay daarunan |
Nav kanjalochan, kanj - mukh, kar - kanj, pad kanjaarunan ||

Kandarp aganit amit chhabi navneel - neerad sundaran|
Patpeet maanahu tadit ruchi shuchi naumi janak sutaavaram |

Bhaju deenbandhu dinesh daanav - daityavansh - nikandanan|
Raghunand aanandakand kaushalchand dasharath - nandanan ||

Sir mukut kundal tilak chaaru udaaru ang vibhooshnan |
Aajaanubhuj shar - chaap - dhar sangraam - jit - khardooshnan ||

Iti vadati tulseedaas shankar - shesh - muni - man ranjanan |
Mam hriday - kanj nivaas kuru kaamaadi khaldal - ganjanan ||

Manu jaahin raacheu milihi so baru sahaj sundar saanvaro|
Karunaa nidhaan sujaan silu sanehu jaanat raavaro ||

Ehee bhaanti gauri asees suni siy sahit hiyan harasheen alee|
Tulsee bhavaanihi poojee punipuni mudit man mandir-chali ||

Dohaa
Jaani gauree anukool siy hiy harshu na jaai kahi |
Manjul mangal mool baam ang pharkan lage ||`},

{id:138,no:62,titleEn:"Shri Saraswati Prarthana",titleHi:"श्री सरस्वती प्रार्थना",god:"Saraswati Maa",godHi:"",type:"Mantra",lyrics:"full",yt:"DySzqHwNCxU",desc:"Saraswati prayer with the Hindi meanings printed in the supplied PDF. Source wording retained. Romanized pronunciation added from the Hindi text.",source:"Your collection • Aarti-Sangrah.pdf, pages 13–14 • Shri Hindu Dharma Vedic Education Foundation, www.shdvef.com",
hindi:`या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता या
वीणावरदण्डमण्डितकरा या श्वेतपद्मासना।
या ब्रह्माच्युत शंकरप्रभृतिभि देवैः सदा
वन्दिता सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा ॥१॥

अर्थ
जो विद्या की देवी भगवती सरस्वती कुन्द के फूल, चंद्रमा, हिमराशि और मोती के हार की तरह धवल वर्ण की हैं और जो श्वेत वस्त्र धारण करती हैं, जिनके हाथ में वीणादण्ड शोभायमान है, जिन्होंने श्वेत कमलों पर आसन ग्रहण किया है तथा ब्रह्मा, विष्णु एवं शंकर आदि देवताओं द्वारा जो सदा पूजित हैं, वही संपूर्ण जड़ता और अज्ञान को दूर कर देने वाली माँ सरस्वती हमारी रक्षा करें ॥१॥

शुक्लां ब्रह्मविचार सार परमामाद्यां जगद्व्यापिनीं
वीणापुस्तकधारिणीमभयदां जाड्यान्धकारापहाहस्ते
स्फटिकमालिकां विदधतीं पद्मासने संस्थिताम्बन्दे
तां परमेश्वरीं भगवतीं बुद्धिप्रदां शारदाम्॥२॥

अर्थ
शुक्लवर्ण वाली, संपूर्ण चराचर जगत् में व्याप्त, आदिशक्ति, परब्रह्म के विषय में किए गए विचार एवं चिंतन के सार रूप परम उत्कर्ष को धारण करने वाली, सभी भयों से भयदान देने वाली, अज्ञान के अँधेरे को मिटाने वाली, हाथों में वीणा, पुस्तक और स्फटिक की माला धारण करने वाली और पद्मासन पर विराजमान बुद्धि प्रदान करने वाली, सर्वोच्च ऐश्वर्य से अलंकृत, भगवती शारदा (सरस्वती देवी) की मैं वंदना करता हूँ ॥२॥`,
roman:`Yaa kundendutushaarahaaradhavalaa yaa shubhravastraavritaa yaa
Veenaavaradandamanditakaraa yaa shvetapadmaasanaa|
Yaa brahmaachyuta shankaraprabhritibhi devaih sadaa
Vanditaa saa maam paatu saraswati bhagwati nihsheshajaadyaapahaa ||1||

Arth
Jo vidyaa ki devee bhagwati saraswati kund ke phool, chandramaa, himraashi aur motee ke haar ki tarah dhaval varn ki hain aur jo shwet vastra dhaaran kartee hain, jinke haath mein veenaadand shobhaayamaan hai, jinhonne shwet kamlon par aasan grahan kiyaa hai tathaa brahma, vishnu evam shankar aadi devtaaon dwaara jo sadaa poojit hain, vahee sampoorna jadta aur agyaan ko door kar dene waali maa saraswati humaari rakshaa karen ||1||

Shuklaam brahmavichaara saara paramaamaadyaam jagadvyaapineem
Veenaapustakadhaarineemabhayadaam jaadyaandhakaaraapahaahaste
Sphatikamaalikaam vidadhateem padmaasane sansthitaambande
Taam parameshvareem bhagavateem buddhipradaam sharadaam||2||

Arth
Shuklavarn waali, sampoorna charaachar jagat mein vyaapt, aadishakti, parabrahm ke vishay mein kiye gaye vichaar evam chintan ke saar roop param utkarsh ko dhaaran karne waali, sabhee bhayon se bhaydaan dene waali, agyaan ke andhere ko mitaane waali, haathon mein veenaa, pustak aur sphatik ki maalaa dhaaran karne waali aur padmaasan par viraajmaan buddhi pradaan karne waali, sarvochch aishvary se alankrit, bhagwati sharada (saraswati devee) ki main vandanaa kartaa hoon ||2||`},

{id:112,no:63,titleEn:"Sone Ka Mandir Tera Chandi Ki Deewar",titleHi:"सोने का मंदिर तेरा चाँदी की दीवार",god:"Durga Maa",godHi:"दुर्गा माँ",type:"Bhajan",lyrics:"full",yt:"4DUkr5jKd0I",desc:"Hindi lyrics from the supplied Mata Rani poster. Printed refrain shortcuts are preserved; Romanized pronunciation added from the Hindi text.",source:"Your collection • Supplied poster credited to Chanchal Sharma",
hindi:`सोने का मंदिर तेरा चाँदी की दीवार है,
रंग तेरा देख के रूप तेरा देख के सब भक्त हैरान हैं,
माथे पे तेरे मुकुट विराजे, बिंदिया का रंग लाल है,
रंग तेरा देख के रूप तेरा देख के सब भक्त हैरान हैं,
सोने का मंदिर......

कानों में तेरे कुण्डल विराजे, नथिया का रंग लाल है,
रंग तेरा देख के रूप तेरा देख के सब भक्त हैरान हैं,
सोने का मंदिर......

गले में तेरे हार विराजे माला का रंग लाल है,
रंग तेरा देख के रूप तेरा....
सोने का मंदिर......

हाथों में तेरे कंगन विराजे मेहंदी का रंग लाल है,
रंग तेरा देख के रूप तेरा....
सोने का मंदिर......`,
roman:`Sone ka mandir teraa chaandi ki deevaar hai,
Rang teraa dekh ke roop teraa dekh ke sab bhakt hairaan hain,
Maathe pe tere mukut viraaje, bindiyaa ka rang laal hai,
Rang teraa dekh ke roop teraa dekh ke sab bhakt hairaan hain,
Sone ka mandir......

Kaanon mein tere kundal viraaje, nathiyaa ka rang laal hai,
Rang teraa dekh ke roop teraa dekh ke sab bhakt hairaan hain,
Sone ka mandir......

Gale mein tere haar viraaje maalaa ka rang laal hai,
Rang teraa dekh ke roop teraa....
Sone ka mandir......

Haathon mein tere kangan viraaje mehndi ka rang laal hai,
Rang teraa dekh ke roop teraa....
Sone ka mandir......`},

{id:122,no:64,titleEn:"Thoda Dhyan Laga Sai Daude Daude Aayenge",titleHi:"थोड़ा ध्यान लगा साईं दौड़े दौड़े आएंगे",god:"Sai Baba",godHi:"",type:"Bhajan",lyrics:"partial",yt:"fnhyt14IDTY",desc:"Transcribed from the supplied PDF, preserving its wording and repeated lines. Romanized pronunciation added from the Hindi text.",source:"Your collection • bahajans-lyrcis.pdf, page 9",
hindi:`थोड़ा ध्यान लगा, साईं दौड़े दौड़े आएंगे,
थोड़ा ध्यान लगा, साईं दौड़े दौड़े आएंगे, तुझे गले से लगाएंगे।
अखियाँ मन की खोल, तुझको दर्शन वो कराएंगे,
अखियाँ मन की खोल, तुझको दर्शन वो कराएंगे, तुझे गले से लगाएंगे॥`,
roman:`Thoda dhyan lagaa, sai daude daude aayenge,
Thoda dhyan lagaa, sai daude daude aayenge, tujhe gale se lagaaenge|
Akhiyaan man ki khol, tujhko darshan vo karaaenge,
Akhiyaan man ki khol, tujhko darshan vo karaaenge, tujhe gale se lagaaenge||`},

{id:101,no:65,titleEn:"Veer Hanumana Ati Balwana",titleHi:"वीर हनुमाना अति बलवाना",god:"Lord Hanuman",godHi:"हनुमान जी",type:"Bhajan",lyrics:"partial",yt:"fLqhhWJaj6c",desc:"A Hanuman bhajan from your personal collection.",source:"Your Bhajan Collection • PDF pp. 1–4",
hindi:`वीर हनुमाना अति बलवाना,
राम नाम रसियो रे,
प्रभु मन बसियो रे।`,
roman:`Veer Hanumana ati balwana,
Ram naam rasiyo re,
Prabhu man basiyo re.`},

{id:1790584118402,no:66,titleEn:"Maine Tere Hi Bharose Hanuman",titleHi:"मैंने तेरे ही भरोसे हनुमान",god:"Lord Hanuman",godHi:"श्री हनुमान",type:"Bhajan",lyrics:"partial",yt:"29HZ0hhDqjE",desc:"A traditional devotional bhajan expressing complete faith and surrender in Lord Hanuman to safely ferry life's boat across the ocean of worldly existence.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-28T08:28:38.402Z",
hindi:`मैंने तेरे ही भरोसे हनुमान,
सागर में नैया डाल दई॥`,
roman:`Maine tere hi bharose Hanuman,
Saagar mein naiya daal dayi.`},

{id:1790589408431,no:68,titleEn:"Hey Ram Hey Ram",titleHi:"हे राम हे राम",god:"Lord Rama",godHi:"श्री राम",type:"Bhajan",lyrics:"partial",yt:"RFgomiaQLj0",desc:"A deeply soul-stirring prayer revering the divine presence and supreme grace of Lord Rama.",source:"Contributed with devotion by Shilpi (Temecula, USA)",community:true,submittedAt:"2026-09-28T09:56:48.431Z",contributorName:"Shilpi",contributorLocation:"Temecula, USA",
hindi:`हे राम, हे राम
जग में साचो तेरो नाम
तू ही माता, तू ही पिता है
तू ही तो है राधा का श्याम`,
roman:`Hey Ram, Hey Ram
Jag Mein Sachu Tera Naam
Tu Hi Mata, Tu Hi Pita Hai
Tu Hi To Hai Radha Ka Shyam`},

{id:1790629307075,no:69,titleEn:"Jab Zid Pe Aa Gayi Parvati",titleHi:"जब जिद पे आ गई पार्वती",god:"Lord Shiva",godHi:"भगवान शिव",type:"Bhajan",lyrics:"partial",yt:"rjfxLq3OQ0w",desc:"A traditional devotional folk bhajan depicting the dialogue where the Saptarishis test Mata Parvati's unwavering resolve to marry Lord Shiva.",source:"Contributed with devotion by Shilpi (Temecual USA)",community:true,submittedAt:"2026-09-28T21:01:47.075Z",contributorName:"Shilpi",contributorLocation:"Temecual USA",
hindi:`जब जिद पे आ गई पार्वती,
पार्वती पार्वती ।
समझाने पहुँचे सप्तऋषि ।
काय जिद कर रही,`,
roman:`Jab zid pe aa gayi Parvati,
Parvati Parvati.
Samjhane pahunche Saptarishi.
Kaay zid kar rahi,`},

{id:1790643374503,no:70,titleEn:"Jai Siya Ram Bolo Jai Siya Ram",titleHi:"जय सिया राम बोलो जय सिया राम",god:"Lord Hanuman",godHi:"श्री हनुमान",type:"Bhajan",lyrics:"partial",yt:"Z_lRwK1JHiA",desc:"A heartfelt bhajan praising the divine attributes and grace of Lord Hanuman through the chanting of Shri Ram's holy name.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T00:56:14.503Z",
hindi:`जय सिया राम बोलो जय सिया राम`,
roman:`Jai Siya Ram Bolo Jai Siya Ram`},

{id:1790658967021,no:71,titleEn:"Kaise Bani Maiya Ki Lal Chunari",titleHi:"कैसे बनी मैया की लाल चुनरी",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"wGlPfM4_UgM",desc:"A joyful traditional Mata bhajan celebrating the divine adornment of Maa Durga's sacred red chunari.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:16:07.021Z",
hindi:`कैसे बनी कैसे बनी मैया की लाल चुनरी कैसी बनी (२)

ये चुनरी विष्णु ने बनाई, गोटा किनारी लक्ष्मी ने लगाई,
ऐसे बनी हो रामा ऐसे बनी
मैया की लाल चुनरी ऐसे बनी...

ये चुनरी राम ने बनाई, गोटा किनारी सीता ने लगाई,
ऐसे बनी हो रामा ऐसे बनी
मैया की लाल चुनरी ऐसे बनी...

ये चुनरी भोले ने बनाई, गोटा किनारी गौरा ने लगाई,
ऐसे बनी हो रामा ऐसे बनी
मैया की लाल चुनरी ऐसे बनी...

ये चुनरी कान्हा ने बनाई, गोटा किनारी राधा ने लगाई,
ऐसे बनी हो रामा ऐसे बनी
मैया की लाल चुनरी ऐसे बनी...

ये चुनरी लांगुर ने बनाई, गोटा किनारी भक्तों ने लगाई,
ऐसे बनी हो रामा ऐसे बनी`,
roman:`Kaise bani kaise bani maiya ki laal chunari kaisi bani (2)

Ye chunari Vishnu ne banayi, gota kinari Lakshmi ne lagayi,
Aise bani ho rama aise bani
Maiya ki laal chunari aise bani...

Ye chunari Ram ne banayi, gota kinari Sita ne lagayi,
Aise bani ho rama aise bani
Maiya ki laal chunari aise bani...

Ye chunari Bhole ne banayi, gota kinari Gaura ne lagayi,
Aise bani ho rama aise bani
Maiya ki laal chunari aise bani...

Ye chunari Kanha ne banayi, gota kinari Radha ne lagayi,
Aise bani ho rama aise bani
Maiya ki laal chunari aise bani...

Ye chunari langur ne banayi, gota kinari bhakton ne lagayi,
Aise bani ho rama aise bani`},

{id:1790659042406,no:72,titleEn:"Radha Dhoondh Rahi Kisi Ne Mera Shyam Dekha",titleHi:"राधा ढूंढ रही किसी ने मेरा श्याम देखा",god:"Lord Krishna",godHi:"श्री कृष्ण",type:"Bhajan",lyrics:"partial",yt:"Ww_4XwWJsEU",desc:"A sweet traditional Krishna bhajan depicting Radha Rani's divine search for her beloved Shyam across the sacred lands of Brij.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:17:22.406Z",
hindi:`राधा ढूंढ रही किसी ने मेरा श्याम देखा
श्याम देखा, घनश्याम देखा
राधा ढूंढ रही किसी ने मेरा श्याम देखा`,
roman:`Radha dhoondh rahi kisi ne mera Shyam dekha
Shyam dekha, Ghanshyam dekha
Radha dhoondh rahi kisi ne mera Shyam dekha`},

{id:1790659254877,no:73,titleEn:"O Maa Meri Pat Rakhio Sada",titleHi:"ओ माँ मेरी पत् रखिओ सदा",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"dy2hKmedmnQ",desc:"A heartfelt prayer and devotional bhajan surrendering completely to Maa Jwala Ji (Lataan Waliye) for shelter and grace.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:20:54.877Z",
hindi:`ओ माँ मेरी पत्, रखिओ सदा लाटां वालीए
दुखीआ को, पापन को, दे दे सहारा
तेरा मंदिर है न्यारा, मुझे भी दे उजिआरा
मिटे मन का अँधिआरा,
ओ माँ मेरी, ओ माँ मेरी

मोह माया के तोड़ के बंधन,
तेरे द्वारे आ गई जोगण
कोई नहीं ऐ मेरा, तेरे सिवा लाटां वालीए,
कोई नहीं ऐ मेरा
कोई नहीं ऐ मेरा, तेरे सिवा लाटां वालीए,
मैं दुखिआरी, शरण तिहारी, झोली है ख़ाली
मैं आई बनके सवाली, ओ माता लाटां वाली,
ओ ऊंचे मंदिरा वाली, ओ माँ मेरी पत्

सूनी सूनी गोद भरे तू,
माता सब के कष्ट हरे तू
कोई नहीं ऐ मेरा, तेरे सिवा लाटां वालीए
कोई नहीं ऐ मेरा`,
roman:`O Maa Meri Pat, Rakhio Sada Lataan Waliye
Dukhiya Ko, Paapan Ko, De De Sahara
Tera Mandir Hai Nyaara, Mujhe Bhi De Ujiyaara
Mite Man Ka Andhiyaara,
O Maa Meri, O Maa Meri

Moh Maaya Ke Tod Ke Bandhan,
Tere Dwaare Aa Gayi Jogan
Koi Nahin Ae Mera, Tere Siva Lataan Waliye,
Koi Nahin Ae Mera
Koi Nahin Ae Mera, Tere Siva Lataan Waliye,
Main Dukhiyaari, Sharan Tihaari, Jholi Hai Khaali
Main Aayi Banke Sawaali, O Mata Lataan Waali,
O Oonche Mandiraan Waali, O Maa Meri Pat

Sooni Sooni God Bhare Tu,
Mata Sab Ke Kasht Hare Tu
Koi Nahin Ae Mera, Tere Siva Lataan Waliye
Koi Nahin Ae Mera`},

{id:1790659323619,no:74,titleEn:"Maa Gufa Mein Baithi Ho Badi Sundar Lagti Ho",titleHi:"माँ गुफा में बैठी हो बड़ी सुंदर लगती हो",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"ln1DzE0qbB0",desc:"A heartfelt Navratri devotional bhajan expressing unending love and lifelong surrender at the divine feet of Maa Durga.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:22:03.619Z",
hindi:`माँ गुफा में बैठी हो बड़ी सुंदर लगती हो,
जब शेर पे आती हो महारानी लगती हो।

मेरे दर पे आओगे कब तक बोलो कब तक,
मेरे पैरों में जान रहेगी जब तक।
माँ गुफा में बैठी हो बड़ी सुंदर लगती हो,
जब शेर पे आती हो महारानी लगती हो।

मेरी जोत जलाओगे कब तक बोलो कब तक,
हाथों में जान रहेगी जब तक।
माँ गुफा में बैठी हो बड़ी सुंदर लगती हो,
जब शेर पे आती हो महारानी लगती हो।

मुझे दरश दोगे कब तक बोलो कब तक,
मेरी सांसों में सांस रहेगी जब तक।
माँ गुफा में बैठी हो बड़ी सुंदर लगती हो,
जब शेर पे आती हो महारानी लगती हो।

तेरा नाम जपेंगे कब तक बोलो कब तक,
मेरी जीवा में जान रहेगी जब तक।
माँ गुफा में बैठी हो बड़ी सुंदर लगती हो,
जब शेर पे आती हो महारानी लगती हो।

मेरा साथ निभाओगे कब तक बोलो कब तक,
मेरे सिर पर माँ तेरा हाथ रहेगा जब तक।
माँ गुफा में बैठी हो बड़ी सुंदर लगती हो,
जब शेर पे आती हो महारानी लगती हो।`,
roman:`Maa gufa mein baithi ho badi sundar lagti ho,
Jab sher pe aati ho maharani lagti ho.

Mere dar pe aaoge kab tak bolo kab tak,
Mere pairon mein jaan rahegi jab tak.
Maa gufa mein baithi ho badi sundar lagti ho,
Jab sher pe aati ho maharani lagti ho.

Meri jot jalaoge kab tak bolo kab tak,
Haathon mein jaan rahegi jab tak.
Maa gufa mein baithi ho badi sundar lagti ho,
Jab sher pe aati ho maharani lagti ho.

Mujhe darash doge kab tak bolo kab tak,
Meri saanson mein saans rahegi jab tak.
Maa gufa mein baithi ho badi sundar lagti ho,
Jab sher pe aati ho maharani lagti ho.

Tera naam japenge kab tak bolo kab tak,
Meri jeeva mein jaan rahegi jab tak.
Maa gufa mein baithi ho badi sundar lagti ho,
Jab sher pe aati ho maharani lagti ho.

Mera saath nibhaoge kab tak bolo kab tak,
Mere sir par maa tera haath rahega jab tak.
Maa gufa mein baithi ho badi sundar lagti ho,
Jab sher pe aati ho maharani lagti ho.`},

{id:1790659408396,no:75,titleEn:"De De Thoda Pyar Maiya",titleHi:"दे दे थोड़ा प्यार मैया",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"partial",yt:"m4Nw7jSRpEQ",desc:"A touching prayer to Durga Maa seeking her divine love and sheltering grace to cross the ocean of life.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:23:28.396Z",
hindi:`दे दे थोड़ा प्यार...
दे दे थोड़ा प्यार मैया तेरा क्या घट जायेगा
ये बालक भव तर जायेगा
छोड़ तेरा दरबार..`,
roman:`De de thoda pyar...
De de thoda pyar maiya tera kya ghat jaayega
Ye baalak bhav tar jaayega
Chhod tera darbaar..`},

{id:1790659448236,no:76,titleEn:"Bolte Chalo Bolte Chalo Sherawali Ke Jaykaare",titleHi:"बोलते चलो बोलते चलो शेरावाली के जयकारे",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"partial",yt:"npnK-EDjQA0",desc:"A joyful devotional bhajan chanting praises and glorious adornments of Maa Sherawali.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:24:08.236Z",
hindi:`बोलते चलो बोलते चलो
शेरावाली के जयकारे बोलते चलो
बोलते चलो बोलते चलो
महारानी के जयकारे बोलते चलो`,
roman:`Bolte chalo bolte chalo
Sherawali ke jaykaare bolte chalo
Bolte chalo bolte chalo
Maharani ke jaykaare bolte chalo`},

{id:1790659481171,no:77,titleEn:"Jaykara Jaykara Sherawali Ka Bolo Jaykara",titleHi:"जयकारा जयकारा शेरावाली का बोलो जयकारा",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"onQ5oVUxl4A",desc:"A vibrant Mata bhajan praising Maa Sherawali and celebrating the divine feminine manifesting across sacred forms.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:24:41.171Z",
hindi:`जयकारा जयकारा जयकारा
शेरावाली का बोलो जयकारा..

मां तेरे अंग अंग में शिव शक्ति मां शिव शक्ति
ले डाला ले डाला ले डाला मां ने गोरा का रूप ले डाला
जयकारा जयकारा..

मां तेरे अंग अंग में ब्रह्मा शक्ति मां ब्रह्मा शक्ति
ले डाल ले डाल ले डाला मां ने ब्राह्मणी का रूप ले डाला
जयकारा जयकारा..

मां तेरे अंग अंग में विष्णु शक्ति मां विष्णु शक्ति
ले डाल ले डाला ले डाला मां ने लक्ष्मी का रूप ले डाला
जयकारा जयकारा...

मां तेरे अंग अंग में राम शक्ति मां राम शक्ति
ले डाल ले डाल ले डाला मां ने सीता का रूप ले डाला
जयकारा जयकारा जयकारा...

मां तेरे अंग अंग में कृष्ण शक्ति मां कृष्णा शक्ति
ले डाल ले डाल ले डाला मां ने राधा का रूप ले डाला
जयकारा जयकारा...

मां तेरे अंग अंग में वैष्णो मां वैष्णो शक्ति
ले डाल ले डाल ले डाला मां ने कन्या का रूप ले डाला..`,
roman:`Jaykara jaykara jaykara
Sherawali ka bolo jaykara..

Maa tere ang ang mein Shiv shakti maa Shiv shakti
Le daala le daala le daala maa ne Gora ka roop le daala
Jaykara jaykara..

Maa tere ang ang mein Brahma shakti maa Brahma shakti
Le daal le daal le daala maa ne Brahmani ka roop le daala
Jaykara jaykara..

Maa tere ang ang mein Vishnu shakti maa Vishnu shakti
Le daal le daala le daala maa ne Lakshmi ka roop le daala
Jaykara jaykara...

Maa तेरे ang ang mein Ram shakti maa Ram shakti
Le daal le daal le daala maa ne Sita ka roop le daala
Jaykara jaykara jaykara...

Maa tere ang ang mein Krishna shakti maa Krishna shakti
Le daal le daal le daala maa ne Radha ka roop le daala
Jaykara jaykara...

Maa tere ang ang mein Vaishno maa Vaishno shakti
Le daal le daal le daala maa ne kanya ka roop le daala..`},

{id:1790659517991,no:78,titleEn:"Leke Maiya Ka Shringar Karti Maa Ki Jai Jai Kar",titleHi:"लेके मैया का श्रृंगार करती माँ की जय जय कार",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"6BvJwP_cKs0",desc:"A sweet devotional bhajan offering adornments and heartfelt service at the divine court of Maa Durga.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:25:17.991Z",
hindi:`लेके मैया का श्रृंगार करती माँ की जय जय कार,
चल के आयी मैं आयी मैया के दरबार.........

लाल लाल चोला माँ का लाल लाल चुनरी,
माथे की बिंदिया लायी हाथों की मुंदरी,
गले का लायी हार करती माँ की जय जय कार,
चल के आयी मैं आयी मैया के दरबार.........

चुन चुन फूलों की माला बनाई,
प्यार से मैंने माँ के गले में पहनाई,
लायी चूड़ी मीनेदार करती माँ की जय जय कार,
चल के आयी मैं आयी मैया के दरबार.........

सोने का मैया मैं तो छत्र चढाऊँ,
कानों में माँ के झुमकी खूब सजाऊँ,
लायी चोली गोटेदार करती माँ की जय जय कार,
चल के आयी मैं आयी मैया के दरबार.........

पैरों की मैं पायल लायी हाथों का कंगना,
रोज बुहारूं मैं तो मैया तेरा अंगना,
आयी छोड़ के घर बार करती माँ की जय जय कार,
चल के आयी मैं आयी मैया के दरबार.........

हलवा पुड़ी का भोग लगाऊं,
पान सुपारी माँ की भेट चढ़ाऊँ,
मैया चाहूँ तेरा प्यार करती माँ की जय जय कार,
चल के आयी मैं आयी मैया के दरबार.........`,
roman:`Leke maiya ka shringar karti maa ki jai jai kar,
Chal ke aayi main aayi maiya ke darbar.........

Laal laal chola maa ka laal laal chunari,
Maathe ki bindiya laayi haathon ki mundari,
Gale ka laayi haar karti maa ki jai jai kar,
Chal ke aayi main aayi maiya ke darbar.........

Chun chun phoolon ki maala banayi,
Pyaar se maine maa ke gale mein pehnayi,
Laayi choodi meenedaar karti maa ki jai jai kar,
Chal ke aayi main aayi maiya ke darbar.........

Sone ka maiya main to chhatra chadhaun,
Kaanon mein maa ke jhumki khoob sajaun,
Laayi choli gotedaar karti maa ki jai jai kar,
Chal ke aayi main aayi maiya ke darbar.........

Pairo ki main paayal laayi haathon ka kangana,
Roz buhaarun main to maiya tera angana,
Aayi chhod ke ghar baar karti maa ki jai jai kar,
Chal ke aayi main aayi maiya ke darbar.........

Halwa puri ka bhog lagaun,
Paan supari maa ki bhet chadhaun,
Maiya chaahun tera pyaar karti maa ki jai jai kar,
Chal ke aayi main aayi maiya ke darbar.........`},

{id:1790659548825,no:79,titleEn:"Chhum Chhum Chhanan Baje Maiya Pao Paijaniya",titleHi:"छुम छुम छनन बाजे मैया पाओ पैजनिया",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"partial",yt:"IifUjmww7NQ",desc:"A joyous folk bhajan celebrating the divine anklets and offerings made to Mata Rani.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:25:48.825Z",
hindi:`छुम छुम छनन बाजे मैया पाओ पैजनिया,
पाव पैजनिया मैया पाव पैजनिया मैया,`,
roman:`Chhum Chhum Chhanan Baje Maiya Pao Paijaniya,
Paav Paijaniya Maiya Paav Paijaniya Maiya,`},

{id:1790659572750,no:80,titleEn:"Maat Ang Chola Saaje",titleHi:"मात अंग चोला साजे",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"partial",yt:"eZmsLrEmHk8",desc:"A heartfelt devotional bhajan in praise of Mata Rani's divine adornment, majestic form, and benevolent grace.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:26:12.750Z",
hindi:`मात अंग चोला साजे,
हर रंग चोला साजे
मात की महिमा देखो,
ज्योत दिन रैना जागे`,
roman:`Maat ang chola saaje,
Har rang chola saaje
Maat ki mahima dekho,
Jyot din raina jaage`},

{id:1790659639079,no:81,titleEn:"Chola Maine Pehna Hai Tere Naam Ka",titleHi:"चोला मैंने पहना है तेरे नाम का",god:"Lord Hanuman",godHi:"श्री हनुमान",type:"Bhajan",lyrics:"full",yt:"pJ_pNxWz0Ko",desc:"A heartfelt devotional bhajan expressing Lord Hanuman's unswerving love, dedication, and surrender to Lord Rama.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:27:19.079Z",
hindi:`चोला मैंने, पहना है, तेरे नाम का ॥
बन गया, दीवाना मैं तो, राम नाम का ॥

तुम्हें, मेरे भगवन, भूल नहीं पाऊँगा,
बिना, भजन तेरे, रह नहीं पाऊँगा ॥
हृदय में, दिखा दूँ फोटो, सियाराम का ।
बन गया, दीवाना मैं तो, राम नाम का ॥
चोला मैंने, पहना है, तेरे नाम...

सीता, माता का, पता ले आऊँगा,
लक्ष्मण, भईया के, प्राण बचाऊँगा ॥
मिल जाए, मुझे बस, आदेश आपका ।
बन गया, दीवाना मैं तो, राम नाम का ॥
चोला मैंने, पहना है, तेरे नाम...

रावण, को मार, सिया राम से मिलाएंगे,
लंका का, राज्य, विभीषण को दे आएंगे ॥
बजा देंगे, डंका जब, सिया राम का ।
बन गया, दीवाना मैं तो, राम नाम का ॥
चोला मैंने, पहना है, तेरे नाम...

राम से, मुक्ति शक्ति, लक्ष्मण से मिलेगी,
हनुमान, से भक्ति, भक्तों को मिलेगी ॥
मिल जाए, ख़ज़ाना प्रभु, तेरे नाम का ।
बन गया, दीवाना मैं तो, राम नाम का ॥
चोला मैंने, पहना है, तेरे नाम...`,
roman:`Chola maine, pahna hai, tere naam ka ||
Ban gaya, deewana main to, ram naam ka ||

Tumhein, mere bhagwan, bhool nahin paoonga,
Bina, bhajan tere, rah nahin paoonga ||
Hriday mein, dikha doon photo, siyaram ka |
Ban gaya, deewana main to, ram naam ka ||
Chola maine, pahna hai, tere naam...

Seeta, mata ka, pata le aaoonga,
Lakshman, bhaiya ke, praan bachaoonga ||
Mil jaye, mujhe bas, aadesh aapka |
Ban gaya, deewana main to, ram naam ka ||
Chola maine, pahna hai, tere naam...

Ravan, ko maar, siya ram se milayenge,
Lanka ka, rajya, vibhishan ko de aayenge ||
Baja denge, danka jab, siya ram ka |
Ban gaya, deewana main to, ram naam ka ||
Chola maine, pahna hai, tere naam...

Ram se, mukti shakti, lakshman se milegi,
Hanuman, se bhakti, bhakton ko milegi ||
Mil jaye, khazana prabhu, tere naam ka |
Ban gaya, deewana main to, ram naam ka ||
Chola maine, pahna hai, tere naam...`},

{id:1790659759174,no:82,titleEn:"Mandir Mein Maiya Hanumat Se Jhagdi",titleHi:"मंदिर में मैया हनुमत से झगड़ी",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"fZgpnHbqFUE",desc:"A sweet and playful devotional bhajan depicting a dialogue between Mata Rani and Hanuman Ji during Navratri.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:29:19.174Z",
hindi:`मंदिर में मैया हनुमत से झगड़ी,
तू लाया क्यों ना रे, मेरी लाल चुनरी
मंदिर में मैया हनुमत...

ओ मैया धीरे-धीरे बोल, ओ मैया होले होले बोल
ब्रह्मा जी सुन लेंगे ब्राह्मणी सुन लेगी
ब्रह्मलोक से ला दूंगा, तेरा लाल चुनरी, मंदिर में...

ओ मैया धीरे-धीरे बोल, ओ मैया होले होले बोल
विष्णु जी सुन लेंगे, लक्ष्मी जी सुन लेगी
बैकुंठ से ला दूंगा, तेरा लाल चुनरी,

ओ मैया धीरे-धीरे बोल, ओ मैया होले होले बोल
कहीं शिवजी सुन लेंगे, गौरा जी सुन लेगी
कैलाश से ला दूंगा तेरा लाल चुनरी, मंदिर में...

ओ मैया धीरे-धीरे बोल, ओ मैया होले होले बोल
राम जी सुन लेंगे, सीता मां सुन लेगी
अयोध्या से ला दूंगा तेरा लाल चुनरी, मंदिर में...`,
roman:`Mandir mein maiya Hanumat se jhagdi,
Tu laaya kyon na re, meri laal chunari
Mandir mein maiya Hanumat...

O maiya dheere-dheere bol, o maiya hole-hole bol
Brahma ji sun lenge Brahmani sun legi
Brahmalok se la doonga, tera laal chunari, mandir mein...

O maiya dheere-dheere bol, o maiya hole-hole bol
Vishnu ji sun lenge, Lakshmi ji sun legi
Vaikuntha se la doonga, tera laal chunari,

O maiya dheere-dheere bol, o maiya hole-hole bol
Kahin Shivji sun lenge, Gaura ji sun legi
Kailash se la doonga tera laal chunari, mandir mein...

O maiya dheere-dheere bol, o maiya hole-hole bol
Ram ji sun lenge, Sita maa sun legi
Ayodhya se la doonga tera laal chunari, mandir mein...`},

{id:1790659785060,no:83,titleEn:"Meri Sherawali Maiya Ne Kamaal Kar Diya",titleHi:"मेरी शेरावाली मैया ने कमाल कर दिया",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"partial",yt:"KZKfIYLOVXI",desc:"A joyful Mata Rani bhajan celebrating the divine blessings and grace bestowed by Maa Sherawali upon Her devotees.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:29:45.060Z",
hindi:`मेरी शेरावाली मैया ने कमाल कर दिया
कमाल कर दिया, मालामाल कर दिया
मेरी जोतावाली मैया ने कमाल कर दिया॥`,
roman:`Meri Sherawali Maiya Ne Kamaal Kar Diya
Kamaal Kar Diya, Maalamaal Kar Diya
Meri Jotawali Maiya Ne Kamaal Kar Diya..`},

{id:1790659814607,no:84,titleEn:"Meri Sherawali Maa Tum Itna Na Kariyo Singaar",titleHi:"मेरी शेरावाली मां तुम इतना ना करियो सिंगार",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"E-q2aZYWjyY",desc:"A loving devotional bhajan dedicated to Maa Sherawali admiring Her divine beauty and adornments.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:30:14.607Z",
hindi:`मेरी शेरावाली मां तुम इतना ना करियो सिंगार
नजर तुम्हें लग जाएगी मैया रानी नजर तुम्हें
लग जाएगी मेरी शेरावाली मां...

तेरी बिंदिया पर मन मेरा अटका प्यारा लगे
तेरे कानों का झुमका तेरे लंबे लंबे बाल तुम
इतना ना करियो सिंगार... मेरी मैया शेरावाली..

तेरी नथनिया पे मन मेरा अटका प्यारा लगे तेरे
गले का हरवा तेरी प्यारी प्यारी मुस्कान तू इतना
ना करियो.. मेरी शेरावाली...

तेरी चूड़ियों पर मन मेरा अटका प्यारा लगे तेरे
हाथों का कंगना तेरी मेहंदी वाले हाथ तू इतना
ना करियो... मेरी शेरावाली...

तेरी तगड़ी पर मन मेरा अटका प्यारा लगे तेरे
कमर का गुच्छा तुम करो 16 श्रृंगार तुम इतना
ना करियो... मेरी शेरावाली...

तेरी साड़ी पर मन मेरा अटका प्यारा लागे तेरा
लाल लाल लहंगा मैया चुनर ओढ़ो गोटेदार तुम
इतना ना करियो.. मेरी शेरावाली...`,
roman:`Meri sherawali maa tum itna na kariyo singaar
Najar tumhe lag jaayegi maiya rani najar tumhe
Lag jaayegi meri sherawali maa...

Teri bindiya par man mera atka pyara lage
Tere kaano ka jhumka tere lambe lambe baal tum
Itna na kariyo singaar... meri maiya sherawali..

Teri nathaniya pe man mera atka pyara lage tere
Gale ka harwa teri pyaari pyaari muskaan tu itna
Na kariyo.. meri sherawali...

Teri chudiyon par man mera atka pyara lage tere
Haathon ka kangana teri mehndi wale haath tu itna
Na kariyo... meri sherawali...

Teri tagdi par man mera atka pyara lage tere
Kamar ka guchha tum karo 16 shringaar tum itna
Na kariyo... meri sherawali...

Teri saadi par man mera atka pyara laage tera
Laal laal lehanga maiya chunar odho gotedaar tum
Itna na kariyo.. meri sherawali...`},

{id:1790661254023,no:85,titleEn:"Mere Sapno Mein Shankar Ji Aane Lage",titleHi:"मेरे सपनों में शंकर जी आने लगे",god:"Lord Shiva",godHi:"भगवान शिव",type:"Bhajan",lyrics:"full",yt:"eiCXExgDaUg",desc:"भगवान शिव के दिव्य स्वरूप, आभूषणों और लीलाओं का मनोहर वर्णन करता एक पारंपरिक शिव भजन।",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:54:14.023Z",
hindi:`मेरे सपनों में शंकर जी आने लगे,
वो तो रह रह के जलवे दिखाने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारे जटा में है क्या,
वो तो गंगा की धारा बहाने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारे माथे पे है क्या,
वो तो चंदा की किरने चमकाने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारे गले में है क्या,
वो तो नागों की माला फिराने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारे अंगों में है क्या,
वो तो बाघम्बर छाला दिखाने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारे हाथों में है क्या,
वो तो डम डम डमरू बजाने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारे पैरों में है क्या,
वो तो छम छम घुँघरू बजाने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारे गोदी में है क्या,
वो तो गणपति लाला दिखाने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारे संग में है क्या,
वो तो गौरा मैया बताने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारे खाने में है क्या,
वो तो भांग धतूरा बताने लगे,
मेरे सपनों में शंकर जी आने लगे...

मैंने पूछा तुम्हारी सवारी है क्या,
वो तो नंदी का वाहन बताने लगे,
मेरे सपनों में शंकर जी आने लगे...`,
roman:`Mere sapno mein Shankar ji aane lage,
Vo to rah rah ke jalve dikhane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhare jata mein hai kya,
Vo to Ganga ki dhara bahane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhare mathe pe hai kya,
Vo to chanda ki kirne chamkane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhare gale mein hai kya,
Vo to naagon ki maala phirane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhare ango mein hai kya,
Vo to baghambar chhaala dikhane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhare haathon mein hai kya,
Vo to dam dam damroo bajaane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhare pairon mein hai kya,
Vo to chham chham ghunghroo bajaane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhare godi mein hai kya,
Vo to Ganpati lala dikhane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhare sang mein hai kya,
Vo to Gaura maiya batane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhare khaane mein hai kya,
Vo to bhaang dhatoora batane lage,
Mere sapno mein Shankar ji aane lage...

Maine poochha tumhari sawari hai kya,
Vo to Nandi ka vaahan batane lage,
Mere sapno mein Shankar ji aane lage...`},

{id:1790661486412,no:86,titleEn:"Mandir Ke Upar Hawa Dole",titleHi:"मंदिर के ऊपर हवा डोले",god:"Lord Shiva",godHi:"भगवान शिव",type:"Bhajan",lyrics:"full",yt:"1nwTTRDubsw",desc:"A charming and beloved Sawan Shiv bhajan affectionately expressing a devotee's longing for Lord Shiva's divine attention.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-29T05:58:06.412Z",
hindi:`मंदिर के ऊपर हवा डोले,
हमारे भोले हमसे ना बोले...
हमसे ना बोले भोले हमसे ना बोले,
मंदिर के ऊपर हवा डोले,
हमारे भोले हमसे ना बोले...

रिद्धि से बोले, सिद्धि से बोले,
गणपत से हँस-हँस बोले,
हमार भोले हमसे ना बोले, मंदिर के ऊपर...

ब्रह्मा से बोले, विष्णु से बोले,
नारद से हँसी-हँसी बोले,
हमार भोले हमसे ना बोले, मंदिर के ऊपर...

राम से बोले, लक्ष्मण से बोले,
हनुमत से हँसी-हँसी बोले,
हमार भोले हमसे ना बोले, मंदिर के ऊपर....

कार्तिक से बोले, नंदी से बोले,
गौरा से हँसी-हँसी बोले,
हमार भोले हमसे ना बोले, मंदिर के ऊपर....

कान्हा से बोले, खाटू से बोले,
ग्वालों से हँसी-हँसी बोले,
हमार भोले हमसे ना बोले, मंदिर के ऊपर...`,
roman:`Mandir ke oopar hawa dole,
Hamare bhole hamse na bole...
Hamse na bole bhole hamse na bole,
Mandir ke oopar hawa dole,
Hamare bhole hamse na bole...

Riddhi se bole, siddhi se bole,
Ganpat se hans-hans bole,
Hamaar bhole hamse na bole, mandir ke oopar...

Brahma se bole, Vishnu se bole,
Narad se hansi-hansi bole,
Hamaar bhole hamse na bole, mandir ke oopar...

Ram se bole, Lakshman se bole,
Hanumat se hansi-hansi bole,
Hamaar bhole hamse na bole, mandir ke oopar....

Kartik se bole, Nandi se bole,
Gaura se hansi-hansi bole,
Hamaar bhole hamse na bole, mandir ke oopar....

Kanha se bole, Khatu se bole,
Gwaalon se hansi-hansi bole,
Hamaar bhole hamse na bole, mandir ke oopar...`},

{id:1790740365968,no:87,titleEn:"Main To Aata Raha Tere Dar Pe Sada",titleHi:"मैं तो आता रहा तेरे दर पे सदा",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"partial",yt:"MisiGhKCETY",desc:"A heartfelt devotional bhajan inviting Maa Vaishno Devi to visit and bless the devotee's humble home.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-30T03:52:45.968Z",
hindi:`मैं तो आता रहा तेरे दर पे सदा,
मैया तुझको भुलाने को,
आओ गई कब भला मेरे घर पे बता,
घर को मंदिर बनाने को,`,
roman:`Main to aata raha tere dar pe sada,
Maiya tujhko bhulane ko,
Aao gayi kab bhala mere ghar pe bata,
Ghar ko mandir banane ko,`},

{id:1790798958826,no:88,titleEn:"Nav Durge Pooch Rahi Kisi Ne Mera Sher Dekha",titleHi:"नव दुर्गे पूछ रही किसी ने मेरा शेर देखा",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"3OAUL0t48xk",desc:"A joyful devotional bhajan celebrating the divine lion vehicle and sacred abodes of Maa Durga.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-30T20:09:18.826Z",
hindi:`नव दुर्गे पूछ रही किसी ने मेरा शेर देखा,
शेर देखा मेरा शेर देखा...

मैया तेरा शेर हमने जम्मू में देखा,
जम्मू में देखा मैया जम्मू में देखा,
माँ वैष्णो को घुमाते हुए,
ओ मैया तेरा शेर देखा,
नव दुर्गे पूछ रही किसी ने मेरा शेर देखा...

मैया तेरा शेर हमने कलकत्ता में देखा,
कलकत्ता में देखा मैया कलकत्ता में देखा,
माँ काली को घुमाते हुए,
ओ मैया तेरा शेर देखा,
नव दुर्गे पूछ रही किसी ने मेरा शेर देखा...

मैया तेरा शेर हमने विन्ध्याचल में देखा,
विन्ध्याचल में देखा मैया विन्ध्याचल में देखा,
विन्ध्याचल घुमाते हुए,
ओ मैया तेरा शेर देखा,
नव दुर्गे पूछ रही किसी ने मेरा शेर देखा...

मैया तेरा शेर हमने मंदिर में देखा,
मंदिर में देखा मैया मंदिर में देखा,
शेरावाली को घुमाते हुए,
ओ मैया तेरा शेर देखा,
नव दुर्गे पूछ रही किसी ने मेरा शेर देखा...

नव दुर्गे पूछ रही किसी ने मेरा शेर देखा,
शेर देखा मेरा शेर देखा...`,
roman:`Nav Durge pooch rahi kisi ne mera sher dekha,
Sher dekha mera sher dekha...

Maiya tera sher humne Jammu mein dekha,
Jammu mein dekha maiya Jammu mein dekha,
Maa Vaishno ko ghumate hue,
O maiya tera sher dekha,
Nav Durge pooch rahi kisi ne mera sher dekha...

Maiya tera sher humne Kalkatta mein dekha,
Kalkatta mein dekha maiya Kalkatta mein dekha,
Maa Kaali ko ghumate hue,
O maiya tera sher dekha,
Nav Durge pooch rahi kisi ne mera sher dekha...

Maiya tera sher humne Vindhyachal mein dekha,
Vindhyachal mein dekha maiya Vindhyachal mein dekha,
Vindhyachal ghumate hue,
O maiya tera sher dekha,
Nav Durge pooch rahi kisi ne mera sher dekha...

Maiya tera sher humne mandir mein dekha,
Mandir mein dekha maiya mandir mein dekha,
Sherawali ko ghumate hue,
O maiya tera sher dekha,
Nav Durge pooch rahi kisi ne mera sher dekha...

Nav Durge pooch rahi kisi ne mera sher dekha,
Sher dekha mera sher dekha...`},

{id:1790798992357,no:89,titleEn:"Kothe Upar Kothri Maiya Ka Bhavan Saja Dungi",titleHi:"कोठे ऊपर कोठरी मैया का भवन सजा दूंगी",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"Xs_stkvZpvE",desc:"A traditional and joyful Mata bhajan describing the loving shringar and preparation of the divine mother's abode.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-30T20:09:52.357Z",
hindi:`जो मेरी मैया टिका माँगे बिंदी और लगा दूंगी
जो मेरी मैया पैहर के निकलै जयकारा लगा दूंगी
कोठे ऊपर कोठडी मैया का भवन सजा दूंगी

जो मेरी मैया कुंडल माँगे नथनी भी पैहरा दूंगी
जो मेरी मैया पैहर के निकलै जयकारा लगा दूंगी
कोठे ऊपर कोठडी मैया का भवन सजा दूंगी

जो मेरी मैया पैंडल माँगे माला भी पैहरा दूंगी
जो मेरी मैया पैहर के निकलै जयकारा लगा दूंगी
कोठे ऊपर कोठडी मैया का भवन सजा दूंगी

जो मेरी मैया चूड़ी माँगे मेहंदी भी लगवा दूंगी
जो मेरी मैया पैहर के निकलै जयकारा लगा दूंगी
कोठे ऊपर कोठडी मैया का भवन सजा दूंगी

जो मेरी मैया चोला माँगे चुनर भी ओढा दूंगी
जो मेरी मैया पैहर के निकलै जयकारा लगा दूंगी
कोठे ऊपर कोठडी मैया का भवन सजा दूंगी

जो मेरी मैया पायल माँगे बुछुये भी मंगा दूंगी
जो मेरी मैया पैहर के निकलै जयकारा लगा दूंगी
कोठे ऊपर कोठडी मैया का भवन सजा दूंगी`,
roman:`Jo Meri Maiya Tika Mange Bindi Aur Laga Dungi
Jo Meri Maiya Paihar Ke Nikle Jaykara Laga Dungi
Kothe Upar Kothdi Maiya Ka Bhavan Saja Dungi

Jo Meri Maiya Kundal Mange Nathni Bhi Paihra Dungi
Jo Meri Maiya Paihar Ke Nikle Jaykara Laga Dungi
Kothe Upar Kothdi Maiya Ka Bhavan Saja Dungi

Jo Meri Maiya Pandal Mange Mala Bhi Paihra Dungi
Jo Meri Maiya Paihar Ke Nikle Jaykara Laga Dungi
Kothe Upar Kothdi Maiya Ka Bhavan Saja Dungi

Jo Meri Maiya Chudi Mange Mehandi Bhi Lagwa Dungi
Jo Meri Maiya Paihar Ke Nikle Jaykara Laga Dungi
Kothe Upar Kothdi Maiya Ka Bhavan Saja Dungi

Jo Meri Maiya Chola Mange Chunar Bhi Odha Dungi
Jo Meri Maiya Paihar Ke Nikle Jaykara Laga Dungi
Kothe Upar Kothdi Maiya Ka Bhavan Saja Dungi

Jo Meri Maiya Payal Mange Bichhuye Bhi Manga Dungi
Jo Meri Maiya Paihar Ke Nikle Jaykara Laga Dungi
Kothe Upar Kothdi Maiya Ka Bhavan Saja Dungi`},

{id:1790799129925,no:91,titleEn:"Mujhe Tune Data Bahut Kuch Diya",titleHi:"मुझे तूने दाता बहुत कुछ दिया",god:"Lord Vishnu",godHi:"भगवान विष्णु",type:"Bhajan",lyrics:"partial",yt:"hAfTqv4XOGY",desc:"A soulful prayer expressing heartfelt gratitude and devotion to the Divine for countless blessings in life.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-30T20:12:09.925Z",
hindi:`मुझे तूने दाता बहुत कुछ दिया तेरा शुक्रिया है
मुझे तूने भगवन बहुत कुछ दिया तेरा शुक्रिया है`,
roman:`Mujhe tune data bahut kuch diya tera shukriya hai
Mujhe tune bhagwan bahut kuch diya tera shukriya hai`},

{id:1790799267780,no:92,titleEn:"Tum Sajti Raho Hum Sajate Rahe",titleHi:"तुम सजती रहो हम सजाते रहे",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"3AvBEaQuMzk",desc:"A loving devotional bhajan expressing pure joy and devotion in adorning and worshipping Mata Rani.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-30T20:14:27.780Z",
hindi:`तुम सजती रहो हम सजाते रहे
माँ सजाने में आनंद आता है

तुम चंदन बनो हम पानी बने
घुल जाने में आनंद आता है
तुम सजती रहो हम सजाते रहे
माँ सजाने में आनंद आता है

तुम दीपक बनो हम बाती बने
लौ लगाने में आनंद आता है
तुम सजती रहो हम सजाते रहे
माँ सजाने में आनंद आता है

तुम सागर बनो हम लहरे बने
डूब जाने में आनंद आता है
तुम सजती रहो हम सजाते रहे
माँ सजाने में आनंद आता है

तुम मिश्री बनो हम माखन बने
मिल जाने में आनंद आता है
तुम सजती रहो हम सजाते रहे
माँ सजाने में आनंद आता है

तुम चंदा बनो हम चकोरी बने
दिल लगाने में आनंद आता है
तुम सजती रहो हम सजाते रहे
माँ सजाने में आनंद आता है

तुम सुनती रहो हम सुनाते रहे
मैया गाने में आनंद आता है
तुम सजती रहो हम सजाते रहे
माँ सजाने में आनंद आता है

तुम बनो हम धागा बने
गुथ जाने में आनंद आता है
तुम सजती रहो हम सजाते रहे
माँ सजाने में आनंद आता है`,
roman:`Tum sajti raho hum sajate rahe
Maa sajane mein aanand aata hai

Tum chandan bano hum paani bane
Ghul jaane mein aanand aata hai
Tum sajti raho hum sajate rahe
Maa sajane mein aanand aata hai

Tum deepak bano hum baati bane
Lau lagane mein aanand aata hai
Tum sajti raho hum sajate rahe
Maa sajane mein aanand aata hai

Tum saagar bano hum lahare bane
Doob jaane mein aanand aata hai
Tum sajti raho hum sajate rahe
Maa sajane mein aanand aata hai

Tum mishri bano hum maakhan bane
Mil jaane mein aanand aata hai
Tum sajti raho hum sajate rahe
Maa sajane mein aanand aata hai

Tum chanda bano hum chakori bane
Dil lagane mein aanand aata hai
Tum sajti raho hum sajate rahe
Maa sajane mein aanand aata hai

Tum sunti raho hum sunate rahe
Maiya gaane mein aanand aata hai
Tum sajti raho hum sajate rahe
Maa sajane mein aanand aata hai

Tum bano hum dhaaga bane
Guth jaane mein aanand aata hai
Tum sajti raho hum sajate rahe
Maa sajane mein aanand aata hai`},

{id:1790799550668,no:93,titleEn:"Do Do Joganiya Ke Beech Akelo Languriya",titleHi:"दो दो जोगनिया के बीच अकेलो लांगुरिया",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"rMgyJti1PHg",desc:"A vibrant traditional Languriya folk bhajan celebrating devotion to Mata Kaila Devi.",source:"Contributed with devotion",community:true,submittedAt:"2026-09-30T20:19:10.668Z",
hindi:`दो दो जोगनिया के बीच
अकेलो लांगुरिया
अकेलो लांगुरिया
अरे
अकेलो लांगुरिया
अकेलो खेले लांगुरिया
अकेलो खेले लांगुरिया
दो दो जोगनिया के बीच
अकेलो लांगुरिया

बड़ी जोगनी यो कहे
नथली लाज्यो मोय
बड़ी जोगनी यो कहे
नथली लाज्यो मोय
छोटी जोगनी यो कहे रे
कुंडल लाइजो मोय
अरे दो दो...
दो दो जोगनिया के बीच
अकेलो लांगुरिया
अकेलो लांगुरिया
अरे अकेलो लांगुरिया
अकेलो खेले लांगुरिया
अकेलो खेले लांगुरिया
दो दो जोगनिया के बीच
अकेलो लांगुरिया

बड़ी जोगनी यो कहे
कोई फरिया लाइज्यो मोय
बड़ी जोगनी यो कहे
कोई फरिया लाइज्यो मोय
छोटी जोगनी यो कहे रे
साड़ी लायीओ मोय
अरे दो दो...
दो दो जोगनिया के बीच
अकेलो लांगुरिया`,
roman:`Do do joganiya ke beech
Akelo languriya
Akelo languriya
Are
Akelo languriya
Akelo khele languriya
Akelo khele languriya
Do do joganiya ke beech
Akelo languriya

Badi jogani yo kahe
Nathali laajyo moy
Badi jogani yo kahe
Nathali laajyo moy
Chhoti jogani yo kahe re
Kundal laijo moy
Are do do...
Do do joganiya ke beech
Akelo languriya
Akelo languriya
Are akelo languriya
Akelo khele languriya
Akelo khele languriya
Do do joganiya ke beech
Akelo languriya

Badi jogani yo kahe
Koi fariya laijyo moy
Badi jogani yo kahe
Koi fariya laijyo moy
Chhoti jogani yo kahe re
Saadi laayio moy
Are do do...
Do do joganiya ke beech
Akelo languriya`},

{id:1790883862316,no:95,titleEn:"Aa Gaye Aa Gaye Tumhare Darbar",titleHi:"आ गए आ गए तुम्हारे दरबार",god:"Lord Rama",godHi:"श्री राम",type:"Bhajan",lyrics:"full",yt:"wYrp7ieFrH4",desc:"A heartfelt devotional bhajan expressing a devotee's longing for the divine darshan of Lord Rama in Ayodhya.",source:"Contributed with devotion",community:true,submittedAt:"2026-10-01T19:44:22.316Z",
hindi:`आ गए आ गए तुम्हारे दरबार,
दरस दे दो रघुनंदन,
आ गए आ गए तुम्हारे दरबार,
दरस दे दो रघुनंदन,
अरे बड़ी दूर से आए हैं चल के,
तुमरी अवध नगरिया,
अवध बिहारी अब तो मोपे,
डारो कृपा नजरिया।
होते होते जन्म में साकार,
दरस दे दो रघुनंदन,
आ गए आ गए तुम्हारे दरबार,
दरस दे दो रघुनंदन॥

धन्य भाग्य भारत भूमि के,
राम लला जी पधारे,
झूठे बेर खाए सबरी के,
केवट चरण पखारे,
झूठे बेर खाए सबरी के,
केवट चरण पखारे,
मैं भी दर पे खड़ा हूँ लाचार,
दरस दे दो रघुनंदन,
आ गए आ गए तुम्हारे दरबार,
दरस दे दो रघुनंदन,

माथे मुकुट कान में कुंडल
गले में माला सोहे,
सिया रघुवर की प्यारी जोड़ी,
सबके मन को मोहे,
सिया रघुवर की प्यारी जोड़ी,
सबके मन को मोहे,`,
roman:`Aa gaye aa gaye tumhare darbar,
Daras de do Raghunandan,
Aa gaye aa gaye tumhare darbar,
Daras de do Raghunandan,
Are badi door se aaye hain chal ke,
Tumri Awadh nagariya,
Awadh Bihari ab to mope,
Daaro kripa nazariya.
Hote hote janm mein saakaar,
Daras de do Raghunandan,
Aa gaye aa gaye tumhare darbar,
Daras de do Raghunandan.

Dhanya bhaagya Bharat bhoomi ke,
Ram Lala ji padhaare,
Jhoothe ber khaaye Sabari ke,
Kewat charan pakhaare,
Jhoothe ber khaaye Sabari ke,
Kewat charan pakhaare,
Main bhi dar pe khada hoon laachaar,
Daras de do Raghunandan,
Aa gaye aa gaye tumhare darbar,
Daras de do Raghunandan,

Maathe mukut kaan mein kundal
Gale mein maala sohe,
Siya Raghuvar ki pyaari jodi,
Sabke man ko mohe,
Siya Raghuvar ki pyaari jodi,
Sabke man ko mohe,`},

{id:1790895785065,no:96,titleEn:"Ram Naam Ke Heere Moti",titleHi:"राम नाम के हीरे-मोती",god:"Lord Rama",godHi:"श्री राम",type:"Bhajan",lyrics:"partial",yt:"ox1RT8tLL9g",desc:"A soul-stirring devotional bhajan inspiring devotees to renounce materialistic illusions and embrace the priceless treasure of Ram Naam.",source:"Contributed with devotion",community:true,submittedAt:"2026-10-01T23:03:05.065Z",
hindi:`राम नाम के हीरे-मोती, मैं बिखराऊँ गली गली,
कृष्ण नाम के हीरे-मोती, मैं बिखराऊँ गली गली,
ले लो रे कोई राम का प्यारा, शोर मचाऊँ गली गली॥
राम नाम के हीरे-मोती...`,
roman:`Ram naam ke heere-moti, main bikhraun gali gali,
Krishna naam ke heere-moti, main bikhraun gali gali,
Le lo re koi Ram ka pyaara, shor machaun gali gali.
Ram naam ke heere-moti...`},

{id:1790998473080,no:97,titleEn:"Mohe Pagal Kar Gayo Ri Maiya Ji Tero Languriya",titleHi:"मोहे पागल कर गयो री मैया जी तेरो लांगुरिया",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"full",yt:"hYK4FBa9n5k",desc:"A traditional folk Languriya bhajan sung with joyful devotion in praise of Maa Durga.",source:"Contributed with devotion",community:true,submittedAt:"2026-10-03T03:34:33.080Z",
hindi:`मोहे पागल कर गयो री,
मैया जी तेरो लांगुरिया

पनिया भरन को जाऊँ,
पीछे पीछे आये मटकी से लिपट गयो री,
मैया जी तेरो लांगुरिया...

फुलवा तोडन को जाऊँ,
पीछे पीछे आये कलियों से लिपट गयो री,
मैया जी तेरो लांगुरिया...

खाना बनाने जाऊँ,
पीछे पीछे आये बेलन से लिपट गयो री,
मैया जी तेरो लांगुरिया....

पूजा करन को जाऊँ,
पीछे पीछे आये घंटे से लिपट गयो री,
मैया जी तेरो लांगुरिया....`,
roman:`Mohe pagal kar gayo ree,
Maiya ji tero languriya

Paniya bharan ko jaaoon,
Peechhe peechhe aaye matki se lipat gayo ree,
Maiya ji tero languriya...

Phulwa todan ko jaaoon,
Peechhe peechhe aaye kaliyon se lipat gayo ree,
Maiya ji tero languriya...

Khana banane jaaoon,
Peechhe peechhe aaye belan se lipat gayo ree,
Maiya ji tero languriya....

Pooja karan ko jaaoon,
Peechhe peechhe aaye ghante se lipat gayo ree,
Maiya ji tero languriya....`},

{id:1791045103391,no:98,titleEn:"Angana Padharo Maharani",titleHi:"अंगना पधारो महारानी",god:"Durga Maa",godHi:"माँ दुर्गा",type:"Bhajan",lyrics:"partial",yt:"oklHjHqPaCs",desc:"A beautiful regional devotional bhajan inviting Maa Sharda Bhavani to grace one's home and life.",source:"Contributed with devotion",community:true,submittedAt:"2026-10-03T16:31:43.391Z",
hindi:`अंगना पधारो महारानी मोरी शारदा भवानी
शारदा भवानी मोरी शारदा भवानी
करदो कृपा महारानी.. मोरी शारदा भवानी, अंगना.....`,
roman:`Angana padharo maharani mori sharada bhavani
Sharada bhavani mori sharada bhavani
Kardo kripa maharani.. mori sharada bhavani, angana.....`}
];
