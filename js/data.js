// Történelem Érettségi Témakörök – Adatbázis
// Készítette: Banó Krisztián, Bárjákter Dominik, Borsos Levente, Csóka Péter

const TOPICS = [
  {
    id: "karoly",
    title: "Anjou (I.) Károly",
    subtitle: "A királyi hatalom újbóli megszilárdítása, a visegrádi királytalálkozó",
    era: "1301 – 1342",
    emoji: "👑",
    summary: "A kiskirályok legyőzése, gazdasági reformok (aranyforint, kapuadó, urbura) és az 1335-ös visegrádi királytalálkozó.",
    study: {
      dates: [
        "<strong>1301:</strong> III. András halála, az Árpád-ház kihalása",
        "<strong>1308:</strong> I. (Anjou) Károlyt elismerik magyar királynak",
        "<strong>1312:</strong> Rozgonyi csata – az Abák legyőzése",
        "<strong>1321:</strong> Csák Máté halála, birtokainak visszavétele",
        "<strong>1325:</strong> Értékálló aranyforint bevezetése",
        "<strong>1335:</strong> Visegrádi királytalálkozó (magyar–cseh–lengyel)",
        "<strong>1336:</strong> Kapuadó bevezetése"
      ],
      concepts: [
        "<strong>Kiskirályok (tartományurak):</strong> Hatalmas birtokokkal rendelkező főurak (pl. Csák Máté, Abák, Kőszegiek), akik önállóan uralkodtak.",
        "<strong>Honorbirtok:</strong> Hivatali méltósággal járó, nem örökölhető királyi birtok.",
        "<strong>Urbura (bányabér):</strong> A nemesfémbányák jövedelmének királyi része (a földesúr 1/3-ot megtarthatott).",
        "<strong>Regálé:</strong> Királyi felségjogon szedett jövedelem (pénzverés, vámok, sómonopólium).",
        "<strong>Kapuadó:</strong> Minden jobbágyporta (kapu) után fizetett egyenes adó (18 dénár)."
      ],
      connections: [
        "A nemesfém-monopólium feloldásával a földesurak érdekeltté váltak az új bányák feltárásában (Körmöcbánya).",
        "A visegrádi királytalálkozón (I. Károly, Luxemburgi János cseh, III. Kázmér lengyel király) új kereskedelmi útvonalat hoztak létre Brünnön át, kikerülve Bécs árumegállító jogát."
      ]
    },
    quiz: [
      {
        q: "Melyik 1312-es csatában aratott döntő győzelmet I. Károly az Abák és szövetségeseik felett?",
        options: ["Muhi csata", "Rozgonyi csata", "Kenyérmezei csata", "Pozsonyi csata"],
        answer: 1,
        exp: "Az 1312-es rozgonyi csatában I. Károly a szepességi szászok és a johanniták segítségével legyőzte az Aba nemzetséget."
      },
      {
        q: "Miért vezette be I. Károly 1325-ben az aranyforintot?",
        options: [
          "Hogy megszüntesse a kamara hasznát és stabil, értékálló pénzt teremtsen",
          "Mert elfogyott az ezüst az országban",
          "A pápa kötelezte rá az egyházi tized miatt",
          "Hogy megkönnyítse a jobbágyok terményadóját"
        ],
        answer: 0,
        exp: "Korábban a királyok évente rontották az ezüstpénzt (kamara haszna). A firenzei mintájú aranyforint stabilizálta a gazdaságot."
      },
      {
        q: "Milyen újítással ösztönözte I. Károly a nemesfémbányászatot?",
        options: [
          "Eltörölte az összes adót a bányavárosokban",
          "Átengedte az urbura (bányabér) egyharmadát a földesúrnak",
          "Külföldi zsoldosokat küldött a bányákba",
          "Betiltotta az arany kivitelét és elvette a főurak földjeit"
        ],
        answer: 1,
        exp: "Korábban a bányakincs 100%-a a királyé volt, így a földesurak eltitkolták a lelőhelyeket. Az 1/3-os részesedés robbanásszerű fellendülést hozott."
      },
      {
        q: "Kik vettek részt az 1335-ös visegrádi királytalálkozón I. Károly mellett?",
        options: [
          "Luxemburgi János cseh és III. Kázmér lengyel király",
          "IV. Károly német-római császár és Nagy Lajos",
          "Habsburg Rudolf és II. Ottokár",
          "V. István és IV. László"
        ],
        answer: 0,
        exp: "Visegrádon a magyar, a cseh (Luxemburgi János) és a lengyel (III. Kázmér) uralkodó kötött politikai és gazdasági szövetséget."
      },
      {
        q: "Mi volt a visegrádi királytalálkozó egyik legfontosabb gazdasági eredménye?",
        options: [
          "Közös hadsereg felállítása az Oszmán Birodalom ellen",
          "Bécs árumegállító jogának kikerülése új kereskedelmi útvonallal",
          "A kapuadó eltörlése Közép-Európában",
          "A cseh és magyar korona egyesítése"
        ],
        answer: 1,
        exp: "A szövetségesek új kereskedelmi utat nyitottak Brünnön keresztül, így a magyar és külföldi kereskedők elkerülhették Bécs kötelező lerakati jogát."
      }
    ],
    timeline: [
      { year: 1301, text: "III. András halála – az Árpád-ház férfiágon kihal" },
      { year: 1312, text: "Rozgonyi csata – győzelem az Abák felett" },
      { year: 1321, text: "Csák Máté halála, északnyugati területek visszaszerzése" },
      { year: 1325, text: "Az értékálló magyar aranyforint verésének kezdete" },
      { year: 1335, text: "Visegrádi királytalálkozó" }
    ],
    pairs: [
      { term: "Urbura", def: "Bányabér, amelynek 1/3-át a földesúr megtarthatta" },
      { term: "Honor", def: "Hivatali tisztséggel járó, nem örökölhető királyi birtok" },
      { term: "Kapuadó", def: "Jobbágyportánként szedett állandó egyenes adó" },
      { term: "Visegrád (1335)", def: "Bécs árumegállító jogát kikerülő kereskedelmi egyezmény" },
      { term: "Aranyforint", def: "Firenzei mintára vert, értékálló középkori magyar pénz" }
    ],
    story: [
      {
        role: "I. Károly király (1310-es évek)",
        situation: "A kincstárad üres, mert a tartományurak (Csák Máté, Abák) elfoglalták a királyi várakat és nem fizetnek adót. Mit teszel elsőként?",
        choices: [
          {
            text: "Megbékélsz velük és örökös birtokokat adsz nekik hűségükért.",
            correct: false,
            feedback: "Ez tovább gyengítené a királyi hatalmat – épp ettől váltak kiskirályokká."
          },
          {
            text: "Új, hűséges nemességet építesz (pl. Lackfiak, Drugethek), és fegyverrel töröd meg a tartományurakat (Rozgony).",
            correct: true,
            feedback: "Helyes! A királyi hatalom alapja a katonai győzelem és a megbízható új főúri réteg volt."
          }
        ]
      },
      {
        role: "Királyi kincstárnok (1320-as évek)",
        situation: "A földesurak eltitkolják a földjükön talált arany- és ezüstlelőhelyeket, mert eddig mindent a király vitt el. Hogyan növeled a bevételt?",
        choices: [
          {
            text: "Átengeded a bányabér (urbura) egyharmadát a földesúrnak, cserébe kötelező beváltani a nemesfémet.",
            correct: true,
            feedback: "Zseniális húzás! Magyarország Európa egyik vezető aranytermelőjévé vált."
          },
          {
            text: "Halálbüntetéssel fenyegeted azt, aki nem jelenti a bányát, de a részesedést nem adod oda.",
            correct: false,
            feedback: "Kényszerrel nem volt hatékony a kutatás – az anyagi érdekeltség hozta meg az áttörést."
          }
        ]
      }
    ]
  },
  {
    id: "ipari2",
    title: "A második ipari forradalom",
    subtitle: "Kutatás és fejlesztés, közlekedés, vegyipar, gépipar, elektronika",
    era: "1870-es évek – 1914",
    emoji: "⚡",
    summary: "Tudományos alapú K+F, acélgyártás, elektromosság, robbanómotor, vegyipar és a futószalagos tömegtermelés.",
    study: {
      dates: [
        "<strong>1856:</strong> Bessemer-eljárás (olcsó, minőségi acélgyártás)",
        "<strong>1876:</strong> Alexander Graham Bell szabadalmaztatja a telefont",
        "<strong>1879:</strong> Edison szénszálas izzólámpája",
        "<strong>1885:</strong> Bláthy–Déri–Zipernovszky transzformátora (Ganz-gyár)",
        "<strong>1886:</strong> Karl Benz első benzinmotoros automobilja",
        "<strong>1903:</strong> Wright fivérek első motoros repülése",
        "<strong>1913:</strong> Henry Ford futószalagos autógyártása (T-modell)"
      ],
      concepts: [
        "<strong>K+F (Kutatás és fejlesztés):</strong> A találmányok már nem barkácsolók műhelyeiből, hanem egyetemi és gyári kutatólaborokból kerültek ki.",
        "<strong>Vegyipar:</strong> Műtrágyák, szintetikus festékek, robbanóanyagok (dinamit – Nobel), gyógyszerek (Aszpirin).",
        "<strong>Futószalag & Taylorizmus:</strong> A munkafolyamatok részfeladatokra bontása a tömegtermelés és a hatékonyság növeléséért.",
        "<strong>Magyar sikerek:</strong> Puskás Tivadar (telefonközpont, Telefonhírmondó), Bánki Donát & Csonka János (porlasztó), Kandó Kálmán (villamos mozdony)."
      ],
      connections: [
        "Az elektromosság és a transzformátor lehetővé tette az energia nagy távolságra szállítását és a gyárak városokba települését.",
        "A belső égésű motor és a kőolaj-finomítás forradalmasította a közlekedést (autó, repülő) és a mezőgazdaságot."
      ]
    },
    quiz: [
      {
        q: "Mi volt a második ipari forradalom legfontosabb különbsége az elsőhöz képest a találmányok születésében?",
        options: [
          "Csak Angliában jelentek meg új gépek",
          "A tudomány és az ipar összekapcsolódott (szervezett K+F laboratóriumok)",
          "Visszatértek a vízi- és szélenergia kizárólagos használatához",
          "Megszűnt a gépipar szerepe"
        ],
        answer: 1,
        exp: "Míg az első ipari forradalomban gyakran gyakorlati mesterek kísérleteztek, a másodikban vegyészek, fizikusok és mérnöki kutatólaborok vitték a prímet."
      },
      {
        q: "Mely magyar mérnökök alkották meg 1885-ben a zárt vasmagú transzformátort a Ganz-gyárban?",
        options: [
          "Bánki Donát és Csonka János",
          "Bláthy Ottó Titusz, Déri Miksa és Zipernovszky Károly",
          "Jedlik Ányos és Eötvös Loránd",
          "Puskás Tivadar és Kandó Kálmán"
        ],
        answer: 1,
        exp: "A Bláthy–Déri–Zipernovszky hármas transzformátora tette lehetővé a váltakozó áram nagy távolságú, gazdaságos szállítását."
      },
      {
        q: "Melyik két új iparág vált a második ipari forradalom húzóágazatává a textíliák helyett?",
        options: [
          "Vegyipar és elektrotechnika/gépipar",
          "Bőripar és fafeldolgozás",
          "Gőzhajózás és szénégetés",
          "Manufakturális kézművesség és kerámia"
        ],
        answer: 0,
        exp: "A nehézipar (acél), a vegyipar (festék, műtrágya, gyógyszer), a gépipar (autó) és az elektronika adta a gazdasági növekedés motorját."
      },
      {
        q: "Mit jelentett Henry Ford 1913-as újítása a gépiparban?",
        options: [
          "Az első gőzgép megépítését",
          "A mozgó futószalagos tömegtermelést (Ford T-modell)",
          "Az elektromos vasút feltalálását",
          "A műanyag első előállítását"
        ],
        answer: 1,
        exp: "A futószalag drasztikusan csökkentette az összeszerelési időt és az árat, így az autó tömegcikké vált."
      },
      {
        q: "Milyen találmány fűződik Bánki Donát és Csonka János nevéhez (1893)?",
        options: [
          "A telefonközpont",
          "A porlasztó (karburátor)",
          "A dinamó",
          "A villamos mozdony"
        ],
        answer: 1,
        exp: "A porlasztó az üzemanyag és a levegő megfelelő keverésével tette igazán használhatóvá a benzinmotorokat."
      }
    ],
    timeline: [
      { year: 1856, text: "Bessemer-eljárás: az acélgyártás forradalma" },
      { year: 1879, text: "Thomas Edison bemutatja a szénszálas izzólámpát" },
      { year: 1885, text: "A Ganz-gyár mérnökei megalkotják a transzformátort" },
      { year: 1886, text: "Karl Benz szabadalmaztatja az első benzinmotoros autót" },
      { year: 1913, text: "Henry Ford bevezeti a futószalagos tömeggyártást" }
    ],
    pairs: [
      { term: "Bláthy–Déri–Zipernovszky", def: "Zárt vasmagú transzformátor (1885)" },
      { term: "Bánki Donát & Csonka János", def: "Porlasztó (karburátor) a benzinmotorhoz" },
      { term: "Puskás Tivadar", def: "Telefonközpont és Telefonhírmondó" },
      { term: "Vegyipar áttörése", def: "Műtrágya, szintetikus festék, dinamit, gyógyszer" },
      { term: "Taylorizmus & Fordizmus", def: "Munkamegosztás és futószalagos tömegtermelés" }
    ],
    story: [
      {
        role: "Gyárigazgató (1890-es évek)",
        situation: "A gyárad eddig gőzgépekkel működött, de a szén szállítása drága és a gépek túl sok helyet foglalnak. Mit választasz a korszerűsítéshez?",
        choices: [
          {
            text: "Átállsz váltakozó áramú villanymotorokra, amelyeket a távoli erőműből transzformátoron át látsz el.",
            correct: true,
            feedback: "Kiváló döntés! Az elektromosság tisztább, rugalmasabb és olcsóbb üzemet biztosított."
          },
          {
            text: "Még nagyobb gőzkazánt veszel és több fűtőt alkalmazol.",
            correct: false,
            feedback: "Ez az első ipari forradalom technológiája – lemaradsz a versenytársaktól!"
          }
        ]
      }
    ]
  },
  {
    id: "rakosi",
    title: "A Rákosi-diktatúra",
    subtitle: "Pártállam, terror, egyházüldözés, koncepciós perek",
    era: "1948/1949 – 1953/1956",
    emoji: "⛓️",
    summary: "Totális kommunista diktatúra, az MDP és az ÁVH uralma, személyi kultusz, egyházüldözés és koncepciós perek.",
    study: {
      dates: [
        "<strong>1948. június:</strong> Az MKP és az SZDP egyesülése → MDP (egypártrendszer)",
        "<strong>1948. dec.:</strong> Mindszenty József hercegprímás letartóztatása",
        "<strong>1949. aug. 20.:</strong> A szovjet mintájú alkotmány (Magyar Népköztársaság)",
        "<strong>1949. szept.:</strong> Rajk László koncepciós pere és kivégzése",
        "<strong>1950:</strong> A szerzetesrendek többségének feloszlatása",
        "<strong>1950–1953:</strong> A recski kényszermunkatábor működése"
      ],
      concepts: [
        "<strong>MDP (Magyar Dolgozók Pártja):</strong> A pártállam egyetlen hatalmi központja, élén Rákosi Mátyással („Sztálin legjobb magyar tanítványa”).",
        "<strong>ÁVH (Államvédelmi Hatóság):</strong> Péter Gábor vezette politikai rendőrség, a megfélemlítés és kínvallatások eszköze.",
        "<strong>Koncepciós per:</strong> Előre megírt forgatókönyv és koholt vádak alapján lefolytatott kirakatper (pl. Mindszenty, Rajk László).",
        "<strong>Kuláküldözés & Téeszesítés:</strong> A módosabb parasztok ellenséggé nyilvánítása, erőszakos termelőszövetkezetbe kényszerítés és beszolgáltatás („padlássöprés”)."
      ],
      connections: [
        "A gazdaságot erőltetett nehézipar-fejlesztésre állították át („a vas és acél országa” – Sztálinváros), miközben az életszínvonal meredeken zuhant.",
        "Az egyházak voltak az utolsó önálló társadalmi intézmények, ezért államosították iskoláikat és perekkel törték meg vezetőiket."
      ]
    },
    quiz: [
      {
        q: "Melyik szervezet volt a Rákosi-korszak rettegett politikai rendőrsége?",
        options: ["KISZ", "ÁVH (Államvédelmi Hatóság)", "MDP", "Népfront"],
        answer: 1,
        exp: "A Péter Gábor vezette ÁVH tartotta rettegésben az országot: letartóztatások, kínvallatások, internálások fűződnek a nevéhez."
      },
      {
        q: "Mit jelent a „koncepciós per” kifejezés?",
        options: [
          "Gyorsított bírósági eljárás közlekedési ügyekben",
          "Előre kitalált, koholt vádakra épülő, megrendezett politikai kirakatper",
          "Katonai bíróság előtti tárgyalás háború idején",
          "Az alkotmánybíróság döntése"
        ],
        answer: 1,
        exp: "A vádlottak ítélete már a tárgyalás előtt megszületett a pártközpontban; kínzással csikartak ki hamis vallomásokat (pl. Rajk-per, Mindszenty-per)."
      },
      {
        q: "Mi történt 1948 decemberében, majd 1949 februárjában Mindszenty József esztergomi érsekkel?",
        options: [
          "Szabadon távozhatott Rómába",
          "Letartóztatták és koncepciós perben életfogytiglani fegyházra ítélték",
          "Kinevezték a parlament elnökévé",
          "Aláírta a szerzetesrendek bővítéséről szóló egyezményt"
        ],
        answer: 1,
        exp: "Mindszenty határozottan ellenezte az egyházi iskolák államosítását és a diktatúrát, ezért koholt vádakkal elítélték."
      },
      {
        q: "Melyik város vált a Rákosi-korszak erőltetett nehézipari fejlesztésének jelképévé?",
        options: ["Debrecen", "Sztálinváros (ma Dunaújváros)", "Szeged", "Sopron"],
        answer: 1,
        exp: "Az I. ötéves terv során a Dunai Vasmű köré építették fel Sztálinvárost, hatalmas költséggel."
      },
      {
        q: "Hogyan sújtotta a diktatúra a vidéki parasztságot?",
        options: [
          "Ingyen földet adott nekik örökre",
          "Kuláklistázással, erőszakos téeszesítéssel és kötelező beszolgáltatással",
          "Adómentességgel",
          "Külföldi támogatással"
        ],
        answer: 1,
        exp: "A tehetősebb parasztokat (kulákokat) osztályellenségnek nyilvánították, a terményt pedig gyakran az utolsó szemig elvitték („padlássöprés”)."
      }
    ],
    timeline: [
      { year: 1948, text: "Az MDP létrejötte; Mindszenty József letartóztatása" },
      { year: 1949, text: "Szovjet mintájú alkotmány elfogadása; Rajk László pere" },
      { year: 1950, text: "A szerzetesrendek feloszlatása; a recski tábor megnyitása" },
      { year: 1951, text: "Tömeges kitelepítések („osztályidegenek” eltávolítása Budapestről)" },
      { year: 1953, text: "Sztálin halála után átmeneti enyhülés (Nagy Imre első kormánya)" }
    ],
    pairs: [
      { term: "ÁVH", def: "Péter Gábor vezette állambiztonsági terror-szervezet" },
      { term: "Recsk", def: "Hírhedt kényszermunkatábor a Mátrában (1950–1953)" },
      { term: "Mindszenty József", def: "Elítélt hercegprímás, az egyházüldözés jelképe" },
      { term: "Rajk László", def: "Kivégzett kommunista politikus, a párton belüli tisztogatás áldozata" },
      { term: "Kulák", def: "Osztályellenségnek bélyegzett módosabb paraszt" }
    ],
    story: [
      {
        role: "Történelmi elemző (1950)",
        situation: "Egy vidéki családnál megjelennek a begyűjtők, miután a családfőt kuláknak minősítették. Milyen következményekkel járt ez a rendszerben?",
        choices: [
          {
            text: "A család elveszítette a terményét, magas adókat kapott, és akár börtön vagy kitelepítés is várhatott rájuk.",
            correct: true,
            feedback: "Pontos látlelet: a beszolgáltatás és a kuláküldözés tönkretette a hagyományos magyar paraszti gazdálkodást."
          },
          {
            text: "A független bíróságon fellebbezhettek, és kártérítést kaptak.",
            correct: false,
            feedback: "A Rákosi-diktatúrában nem létezett független igazságszolgáltatás."
          }
        ]
      }
    ]
  },
  {
    id: "varos",
    title: "A középkori város és lakói",
    subtitle: "Városfejlődés, önkormányzat, céhek és polgárság",
    era: "11 – 15. század",
    emoji: "🏰",
    summary: "A kőfallal védett középkori városok kiváltságai, önkormányzata, a céhes ipar és a polgárság rétegei.",
    study: {
      dates: [
        "<strong>11–12. század:</strong> Nyugat-európai városfejlődés megindulása (távolsági kereskedelem)",
        "<strong>1244:</strong> Székesfehérvár kiváltságlevele (IV. Béla)",
        "<strong>1405:</strong> Zsigmond király városi dekrétuma (szabad királyi városok megerősítése)"
      ],
      concepts: [
        "<strong>„A városi levegő szabaddá tesz”:</strong> A városba szökött jobbágy egy év és egy nap után szabaddá vált.",
        "<strong>Önkormányzat:</strong> A város élén a választott <em>bíró</em> (vagy polgármester) és a <em>városi tanács</em> állt, saját bírósággal és falakkal.",
        "<strong>Kiváltságok:</strong> Árumegállító jog, vásártartási jog, egyösszegű adózás, szabad lelkész- és bíróválasztás.",
        "<strong>Céh:</strong> Az azonos mesterséget űző kézművesek érdekvédelmi szervezete (inas → legény → mester, aki <em>remekművet</em> készít; kívülállók: <em>kontárok</em>).",
        "<strong>Társadalmi rétegek:</strong> Patríciusok (gazdag kereskedők), közrendű polgárok (céhmesterek), plebejusok (szegényebb rétegek)."
      ],
      connections: [
        "Magyarországon a városi polgárság jelentős részét betelepült nyugati telepesek (<em>hospesek</em> – szászok, vallonok, olaszok) alkották.",
        "A városokban terjedtek el a koldulórendek (ferencesek, domonkosok) és születtek meg az első egyetemek."
      ]
    },
    quiz: [
      {
        q: "Mit jelentett a középkori mondás: „A városi levegő szabaddá tesz”?",
        options: [
          "A városokban tisztább volt a levegő, mint falun",
          "A városba menekült jobbágy 1 év és 1 nap után szabad emberré (polgárrá) vált",
          "A nemesek nem léphettek be a városba",
          "A városokban nem kellett adót fizetni"
        ],
        answer: 1,
        exp: "Ha egy jobbágy egy évig és egy napig háborítatlanul élt a városban, korábbi földesura már nem követelhette vissza."
      },
      {
        q: "Mi volt a céhek legfőbb célja a középkori városban?",
        options: [
          "A minőség biztosítása, a verseny korlátozása és a mesterek érdekeinek védelme",
          "A városfalak őrzése kizárólag éjszaka",
          "A földesurak adójának beszedése",
          "A jobbágyok visszaküldése a falvakba"
        ],
        answer: 0,
        exp: "A céh szabályozta az árakat, a nyersanyagot, a munkaidőt és a minőséget – a céhen kívüli kontárokat üldözték."
      },
      {
        q: "Kik tartoztak a városi társadalom leggazdagabb, vezető rétegébe?",
        options: ["Plebejusok", "Patríciusok", "Inasok", "Kontárok"],
        answer: 1,
        exp: "A patríciusok (gazdag távolsági kereskedők, bankárok, házbirtokosok) kezében összpontosult a városi tanács hatalma."
      },
      {
        q: "Mit jelentett az „árumegállító jog”?",
        options: [
          "A város megtilthatta a kereskedelmet télen",
          "Az áthaladó kereskedőknek kötelező volt kirakodni és áruba bocsátani portékájukat a városban",
          "A kereskedőknek ingyen kellett adniuk áruikat a bírónak",
          "Csak helyi céhmesterek árulhattak kenyeret"
        ],
        answer: 1,
        exp: "Ez hatalmas bevételt és árubőséget hozott a városnak (ilyen joga volt például Budának és Bécsnek is)."
      },
      {
        q: "Mi kellett ahhoz, hogy egy legényből teljes jogú céhmester lehessen?",
        options: [
          "Legalább 100 aranyforint befizetése a királynak",
          "Vándorút után egy hibátlan mestermű („remekmű”) elkészítése",
          "Nemeslevél megszerzése",
          "Városi bírói tisztség viselése"
        ],
        answer: 1,
        exp: "Az inasból legény lett, aki vándorútra ment, majd a mestervizsgán remekművet készített."
      }
    ],
    timeline: [
      { year: 1150, text: "Nyugat-európai városi kommunamozgalmak kibontakozása" },
      { year: 1244, text: "IV. Béla kiváltságlevele Székesfehérvár számára" },
      { year: 1276, text: "Buda fejlődése a királyi központ és kereskedelem révén" },
      { year: 1350, text: "A céhrendszer megerősödése a magyar városokban" },
      { year: 1405, text: "Zsigmond király városi dekrétuma (szabad királyi városok)" }
    ],
    pairs: [
      { term: "Patrícius", def: "Gazdag kereskedő, a városi tanács irányítója" },
      { term: "Kontár", def: "Céhen kívül dolgozó, üldözött kézműves" },
      { term: "Hospes", def: "Kiváltságokkal betelepített nyugati vendégtelepes" },
      { term: "Árumegállító jog", def: "Áthaladó kereskedők kötelező árukínálása" },
      { term: "Remekmű", def: "A céhmesteri cím elnyeréséhez készített vizsgamunka" }
    ],
    story: [
      {
        role: "Vándorló céhlegény (14. század)",
        situation: "Megérkeztél egy szabad királyi városba, és önálló műhelyt akarsz nyitni. A helyi szabócéhbe nem léptél be, hanem titokban varrsz ruhát. Mi történik?",
        choices: [
          {
            text: "A céh kontárnak minősít, elkobozza az árudat és elűz a városból.",
            correct: true,
            feedback: "Így van! A céhmonopólium szigorúan tiltotta a céhen kívüli iparűzést."
          },
          {
            text: "A városi tanács megdicsér a szabad versenyért és adómentességet ad.",
            correct: false,
            feedback: "A középkori városokban nem létezett szabad verseny – a céhrendszer védte a mestereket."
          }
        ]
      }
    ]
  },
  {
    id: "ujranepesules",
    title: "Magyarország újranépesülése",
    subtitle: "18. századi demográfiai átalakulás, vándorlás és betelepítések",
    era: "1711 – 1790",
    emoji: "🌾",
    summary: "A török háborúk utáni népességfogyás, spontán belső vándorlás, szervezett betelepítések és a nemzetiségi arányok megváltozása.",
    study: {
      dates: [
        "<strong>1699:</strong> Karlócai béke – a török kiűzése (Temesköz kivételével)",
        "<strong>1711:</strong> Szatmári béke – a Rákóczi-szabadságharc vége, békés korszak kezdete",
        "<strong>1720-as évektől:</strong> Szervezett német (sváb) betelepítések",
        "<strong>1784–1787:</strong> II. József népszámlálása (~8–9 millió fő)"
      ],
      concepts: [
        "<strong>Elnéptelenedés:</strong> A 150 éves háborúskodás és járványok miatt az Alföld és a Délvidék nagy része pusztává vált, a népesség ~3,5–4 millió főre esett.",
        "<strong>Újranépesülés (spontán):</strong> A sűrűbben lakott északi területekről (Felvidék, Erdély) belső vándorlás indult délre (magyarok, szlovákok, románok, szerbek).",
        "<strong>Újranépesítés (szervezett):</strong> A Habsburg udvar és a nagybirtokosok tudatosan telepítettek be főleg katolikus németeket (svábokat) adókedvezményekkel.",
        "<strong>Következmény:</strong> A magyarok aránya az országban 40% alá csökkent – soknemzetiségű és sokvallású ország jött létre (trianoni probléma gyökere)."
      ],
      connections: [
        "A betelepülők szaktudást, új mezőgazdasági módszereket és munkaerőt hoztak, ami gyors gazdasági fellendülést indított el.",
        "A szláv és román nemzetiségek számarányának növekedése a 19–20. századra súlyos nemzetiségi feszültségek alapja lett."
      ]
    },
    quiz: [
      {
        q: "Körülbelül mekkora volt Magyarország népessége a 18. század elején (a török kiűzése után)?",
        options: ["10 millió fő", "3,5–4 millió fő", "1 millió fő", "15 millió fő"],
        answer: 1,
        exp: "A hosszú háborúk, pusztítások és pestisjárványok miatt az ország lakossága 3,5–4 millió fő körülire csökkent, az Alföld pedig szinte kiürült."
      },
      {
        q: "Mi a különbség az „újranépesülés” és az „újranépesítés” között?",
        options: [
          "Nincs különbség, ugyanazt jelenti",
          "Az újranépesülés spontán belső vándorlás, az újranépesítés pedig szervezett, állami/földesúri betelepítés",
          "Az újranépesítés csak a városokra vonatkozott",
          "Az újranépesülés kizárólag a németeket jelentette"
        ],
        answer: 1,
        exp: "Spontán módon főleg északról (szlovákok, ruszinok) és keletről (románok) érkeztek, míg a szervezett betelepítés elsősorban német (sváb) telepeseket hozott."
      },
      {
        q: "Milyen arányt képviseltek a magyarok a 18. század végére az ország össznépességében?",
        options: ["75–80%", "Kb. 38–40% (kisebbségbe kerültek saját országukban)", "90%", "15%"],
        answer: 1,
        exp: "Míg Mátyás idején a magyarság ~75-80% volt, a török háborúk (főleg a magyarlakta Alföld pusztulása) és a bevándorlás miatt 40% alá esett."
      },
      {
        q: "Milyen kedvezményekkel csábították a földesurak a német (sváb) telepeseket?",
        options: [
          "Nemesi címmel minden telepesnek",
          "Többéves adómentességgel, épületfával, szerszámmal és szabad költözéssel",
          "Katonai ranggal",
          "Ingyen hajóúttal Amerikába"
        ],
        answer: 1,
        exp: "A 3-6 éves adómentesség és a jó minőségű föld vonzó volt a túlnépesedett német tartományokból érkezőknek."
      },
      {
        q: "Melyik két nagy régió maradt viszonylag sűrűn lakott a török kor után is, ahonnan a belső vándorlás megindult?",
        options: [
          "Alföld és Délvidék",
          "Felvidék (Észak) és a nyugati/erdélyi peremvidékek",
          "Bánság és Szerémség",
          "Csak Buda és Pest"
        ],
        answer: 1,
        exp: "A török hódoltságon kívüli Felvidék és a nyugati sáv megőrizte lakosságát, így onnan áramlottak délre a telepesek."
      }
    ],
    timeline: [
      { year: 1699, text: "Karlócai béke – a hódoltság nagy része felszabadul" },
      { year: 1711, text: "Szatmári béke – megkezdődik a békés újjáépítés" },
      { year: 1718, text: "Pozsareváci béke – a Temesköz is felszabadul" },
      { year: 1723, text: "Országgyűlési törvény a szervezett betelepítések támogatásáról" },
      { year: 1787, text: "II. József első népszámlálása (~8,5-9 millió lakos)" }
    ],
    pairs: [
      { term: "Svábok", def: "Dél-Németországból szervezetten betelepített katolikus telepesek" },
      { term: "Újranépesülés", def: "Spontán belső vándorlás (pl. szlovákok, románok délre)" },
      { term: "Újranépesítés", def: "Földesúri és udvari szervezett betelepítés adókedvezménnyel" },
      { term: "40% alatti arány", def: "A magyarság részaránya a 18. század végére" },
      { term: "Szatmári béke (1711)", def: "A békés demográfiai és gazdasági fellendülés kezdete" }
    ],
    story: [
      {
        role: "Délvidéki földesúr (1725)",
        situation: "A birtokod óriási, de a török háborúk után alig él rajta jobbágy, a földek parlagon hevernek. Hogyan teszed jövedelmezővé?",
        choices: [
          {
            text: "Ügynököket küldesz Dél-Németországba, és 3–5 év adómentességgel sváb családokat telepítesz be.",
            correct: true,
            feedback: "Helyes! A szervezett betelepítés gyorsan termővé tette a pusztákat és fellendítette a gazdaságot."
          },
          {
            text: "Megemeled a meglévő 5 jobbágycsalád adóját tízszeresére.",
            correct: false,
            feedback: "Ettől az utolsó családok is elszöknének – munkaerő nélkül nincs termelés!"
          }
        ]
      }
    ]
  }
];
