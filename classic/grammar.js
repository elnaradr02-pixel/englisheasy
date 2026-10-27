// Курс грамматики A2 → B2: уроки по порядку, задания с автопроверкой, письменное ДЗ.
const LESSONS = [
 {
  "n": 1,
  "level": "A2",
  "title": "to be и Present Simple: утверждения",
  "emoji": "🦸‍♀️",
  "hook": "«I am Iron Man» — самая знаменитая фраза Marvel, и в ней как раз глагол to be: без него Тони не смог бы даже представиться.",
  "rules": [
   "По-русски мы говорим «Я — Железный человек» и пропускаем «есть». В английском так нельзя: связка <b>to be</b> нужна всегда. <b>I am</b>, <b>he / she / it is</b>, <b>we / you / they are</b>.",
   "Сокращения в разговоре: <b>I'm, he's, she's, it's, we're, you're, they're</b>.",
   "<b>Present Simple</b> — для привычек, фактов и расписаний: <b>I / you / we / they + глагол</b> (I watch, they work).",
   "<b>he / she / it + глагол + -s</b>: she works, he lives. После -sh, -ch, -s, -x, -o добавляем <b>-es</b>: watches, goes. Согласная + y → <b>-ies</b>: study → studies. Особый случай: have → <b>has</b>.",
   "Маркеры: <i>always, usually, often, sometimes, never, every day, on Fridays</i>. Слова частоты (always, usually, never…) ставим <u>перед</u> обычным глаголом (She <b>always drinks</b> coffee), но <u>после</u> am / is / are (She <b>is always</b> late).",
   "Никогда не ставь am / is / are рядом с обычным глаголом: <b>I work</b>, а не «I am work»."
  ],
  "examples": [
   {
    "en": "I am Iron Man.",
    "ru": "Я — Железный человек."
   },
   {
    "en": "Wednesday is weird, and she loves it.",
    "ru": "Уэнсдей странная, и ей это нравится."
   },
   {
    "en": "Joey eats everybody's food.",
    "ru": "Джоуи съедает еду у всех подряд."
   },
   {
    "en": "Emily works in Paris and posts on Instagram every day.",
    "ru": "Эмили работает в Париже и каждый день постит в Инстаграм."
   },
   {
    "en": "Loki always lies. He is always in trouble.",
    "ru": "Локи всегда врёт. Он вечно в неприятностях."
   },
   {
    "en": "My friends and I watch Stranger Things on Fridays.",
    "ru": "Мы с друзьями смотрим «Очень странные дела» по пятницам."
   }
  ],
  "trap": "Две главные ошибки: «я есть работаю» (am / is / are вместе с обычным глаголом) и потерянная -s у he / she / it. ❌ I am work in a café. → ✅ I work in a café. ❌ She work in an office. → ✅ She works in an office.",
  "exercises": [
   {
    "type": "choice",
    "q": "Thor ___ from Asgard.",
    "options": [
     "is",
     "are",
     "am"
    ],
    "answer": [
     "is"
    ],
    "explain": "Thor — это he, а с he / she / it всегда is."
   },
   {
    "type": "input",
    "q": "Wednesday and Enid ___ (be) roommates.",
    "options": [],
    "answer": [
     "are"
    ],
    "explain": "Подлежащих двое (они — they), поэтому are."
   },
   {
    "type": "choice",
    "q": "Emily ___ for a marketing agency in Paris.",
    "options": [
     "work",
     "works",
     "are work"
    ],
    "answer": [
     "works"
    ],
    "explain": "Emily — это she, поэтому к глаголу добавляем -s, а am / is / are тут не нужны."
   },
   {
    "type": "input",
    "q": "I ___ (watch) Friends every evening.",
    "options": [],
    "answer": [
     "watch"
    ],
    "explain": "С I глагол остаётся без изменений, -s добавляем только для he / she / it."
   },
   {
    "type": "choice",
    "q": "My boss ___ coffee every morning.",
    "options": [
     "drinks",
     "drink",
     "is drink"
    ],
    "answer": [
     "drinks"
    ],
    "explain": "My boss — это he или she, а every morning — привычка, поэтому drinks."
   },
   {
    "type": "order",
    "q": "Я — большая фанатка Marvel.",
    "options": [],
    "answer": [
     "I am a big Marvel fan.",
     "I'm a big Marvel fan."
    ],
    "explain": "В английском «есть» не пропускаем: I am + кто ты."
   },
   {
    "type": "input",
    "q": "Steve Rogers ___ (go) to the gym every day.",
    "options": [],
    "answer": [
     "goes"
    ],
    "explain": "Глагол на -o с he получает -es: go → goes."
   },
   {
    "type": "choice",
    "q": "Loki ___ late for meetings.",
    "options": [
     "is always",
     "always is",
     "always are"
    ],
    "answer": [
     "is always"
    ],
    "explain": "Слово частоты идёт ПОСЛЕ am / is / are, а Loki — это he, значит is."
   },
   {
    "type": "input",
    "q": "Peter Parker ___ (study) science at school.",
    "options": [],
    "answer": [
     "studies"
    ],
    "explain": "Согласная + y → -ies: study → studies."
   },
   {
    "type": "choice",
    "q": "Eleven ___ telekinetic powers.",
    "options": [
     "has",
     "have",
     "is have"
    ],
    "answer": [
     "has"
    ],
    "explain": "С he / she / it have превращается в has."
   },
   {
    "type": "input",
    "q": "Monica ___ (wash) the dishes three times a day.",
    "options": [],
    "answer": [
     "washes"
    ],
    "explain": "Monica — это she, а после -sh добавляем -es: wash → washes."
   },
   {
    "type": "order",
    "q": "Тони Старк обычно работает в своей лаборатории ночью.",
    "options": [],
    "answer": [
     "Tony Stark usually works in his lab at night.",
     "Tony Stark usually works at night in his lab.",
     "Usually Tony Stark works in his lab at night."
    ],
    "explain": "usually ставим перед глаголом, а works пишем с -s, потому что Tony — это he."
   }
  ],
  "homework": "Ты — Уэнсдей Аддамс, и это твой первый день в академии Невермор. Напиши в дневник 7 предложений о себе и своих соседях: кто ты и кто они (am / is / are), что ты обычно делаешь, что делает Энид, что делает Вещь (Thing). Обязательно: минимум 3 глагола с -s / -es / -ies (watches, goes, studies…) и 2 слова частоты (always, never, usually…), причём одно из них поставь после is (Enid is always…). Потом добавь 3 предложения уже о себе настоящей: кем работаешь, какой сериал смотришь и какая у тебя странная привычка."
 },
 {
  "n": 2,
  "level": "A2",
  "title": "Present Simple: вопросы и отрицания (do / does)",
  "emoji": "🕵️‍♀️",
  "hook": "«Do you know who I am?» — любимая фраза любого злодея из сериалов, и без do в английском даже такой простой вопрос не задашь.",
  "rules": [
   "Отрицание: <b>I / you / we / they + don't + глагол</b>, <b>he / she / it + doesn't + глагол</b>. Глагол после doesn't идёт <u>без -s</u>: she doesn't like.",
   "Вопрос: <b>Do / Does + подлежащее + глагол?</b> Does she work? Буква -s «переезжает» в does, глагол остаётся голым.",
   "Вопросительное слово ставим в самое начало: <b>Where do you live? What does he want? Why don't you…?</b>",
   "В русском вопрос можно задать одной интонацией («Ты любишь Marvel?»). В английском нужен помощник: <b>Do you like Marvel?</b>",
   "С <b>to be</b> do / does НЕ нужны: просто переставляем или добавляем not. <b>Is he Loki? She isn't here. They aren't ready.</b>",
   "Короткие ответы: <b>Yes, I do. / No, she doesn't. / Yes, he is.</b>"
  ],
  "examples": [
   {
    "en": "Wednesday doesn't smile.",
    "ru": "Уэнсдей не улыбается."
   },
   {
    "en": "Do you like Friends? — Yes, I do!",
    "ru": "Тебе нравятся «Друзья»? — Да!"
   },
   {
    "en": "Does Loki tell the truth? — No, he doesn't.",
    "ru": "Локи говорит правду? — Нет."
   },
   {
    "en": "Where does Emily work? — In Paris.",
    "ru": "Где работает Эмили? — В Париже."
   },
   {
    "en": "Groot doesn't speak English. He only says «I am Groot».",
    "ru": "Грут не говорит по-английски. Он только повторяет «Я есть Грут»."
   },
   {
    "en": "I don't drink coffee after 6 p.m.",
    "ru": "Я не пью кофе после шести вечера."
   }
  ],
  "trap": "Оставляют -s у глагола после does / doesn't или задают вопрос одной интонацией, как в русском. ❌ She doesn't likes horror. → ✅ She doesn't like horror. ❌ Does he works here? → ✅ Does he work here? ❌ You like Marvel? → ✅ Do you like Marvel?",
  "exercises": [
   {
    "type": "choice",
    "q": "Groot ___ speak much.",
    "options": [
     "doesn't",
     "don't",
     "isn't"
    ],
    "answer": [
     "doesn't"
    ],
    "explain": "Groot — это he, а с обычным глаголом в отрицании нужен doesn't."
   },
   {
    "type": "input",
    "q": "I ___ (not / like) horror movies.",
    "options": [],
    "answer": [
     "don't like",
     "do not like"
    ],
    "explain": "С I отрицание строим через don't + глагол."
   },
   {
    "type": "choice",
    "q": "___ you watch Netflix every day?",
    "options": [
     "Do",
     "Does",
     "Are"
    ],
    "answer": [
     "Do"
    ],
    "explain": "С you вопрос с обычным глаголом начинается с Do."
   },
   {
    "type": "input",
    "q": "Joey ___ (not / share) food. Never!",
    "options": [],
    "answer": [
     "doesn't share",
     "does not share"
    ],
    "explain": "Joey — это he, значит doesn't, а глагол после него без -s."
   },
   {
    "type": "choice",
    "q": "Does Emily ___ French?",
    "options": [
     "speak",
     "speaks",
     "speaking"
    ],
    "answer": [
     "speak"
    ],
    "explain": "После does глагол всегда в начальной форме, -s уже ушла в does."
   },
   {
    "type": "order",
    "q": "Ты смотришь сериалы без субтитров?",
    "options": [],
    "answer": [
     "Do you watch TV series without subtitles?",
     "Do you watch TV shows without subtitles?"
    ],
    "explain": "Вопрос строим по схеме: Do + you + глагол."
   },
   {
    "type": "input",
    "q": "___ (do) Thor live in Asgard? — Yes, he does.",
    "options": [],
    "answer": [
     "Does",
     "does"
    ],
    "explain": "Thor — это he, поэтому вопрос начинается с Does."
   },
   {
    "type": "choice",
    "q": "Loki ___ a good brother. He always lies.",
    "options": [
     "isn't",
     "doesn't",
     "don't"
    ],
    "answer": [
     "isn't"
    ],
    "explain": "Здесь нет действия, только «быть кем-то», поэтому нужен to be: isn't."
   },
   {
    "type": "input",
    "q": "My colleagues ___ (not / work) on Saturdays.",
    "options": [],
    "answer": [
     "don't work",
     "do not work"
    ],
    "explain": "My colleagues — это they, а с they отрицание через don't."
   },
   {
    "type": "choice",
    "q": "Where ___ Spider-Man live?",
    "options": [
     "does",
     "do",
     "is"
    ],
    "answer": [
     "does"
    ],
    "explain": "После вопросительного слова идёт помощник, а для he это does."
   },
   {
    "type": "input",
    "q": "Hopper ___ (not / be) happy in the morning. He needs coffee.",
    "options": [],
    "answer": [
     "isn't",
     "is not",
     "'s not"
    ],
    "explain": "С to be do / does не нужен, просто is + not."
   },
   {
    "type": "order",
    "q": "Почему Локи не говорит правду?",
    "options": [],
    "answer": [
     "Why doesn't Loki tell the truth?",
     "Why does Loki not tell the truth?"
    ],
    "explain": "Схема: Why + doesn't + подлежащее + глагол без -s."
   }
  ],
  "homework": "Ты проходишь собеседование в Marvel Studios (или в агентство Эмили в Париже). Напиши диалог из 8–10 реплик: HR задаёт тебе минимум 4 вопроса (Do you…? Where do you…? Does your…? Are you…?), а ты отвечаешь честно, но смешно. Обязательно: минимум 3 отрицания с don't / doesn't и одно с isn't / aren't, а также хотя бы 2 коротких ответа (Yes, I do. / No, I don't.). Бонус: задай 2 вопроса Уэнсдей про её привычки и ответь за неё в её мрачном стиле."
 },
 {
  "n": 3,
  "level": "A2",
  "title": "Present Continuous и разница с Present Simple",
  "emoji": "🎬",
  "hook": "«What are you doing?!» — так в каждом сериале кричат тому, кого застали врасплох, и это Present Continuous.",
  "rules": [
   "<b>Present Continuous</b> — то, что происходит <u>прямо сейчас</u> или в этот период: <b>am / is / are + глагол-ing</b>. I'm watching, she is working.",
   "Отрицание: <b>I'm not / she isn't / they aren't + -ing</b>. Вопрос: <b>Are you watching…? What is he doing?</b>",
   "Маркеры: <i>now, right now, at the moment, today, this week, Look! Listen!</i>",
   "В русском одно слово «смотрю» — и сейчас, и всегда. В английском их два: <b>I watch</b> (обычно, привычка) и <b>I'm watching</b> (прямо сейчас).",
   "Правописание: make → <b>making</b> (немая -e отпадает), sit → <b>sitting</b> (короткий слог: последняя согласная удваивается), lie → <b>lying</b> (ie → y).",
   "Глаголы-состояния (<i>know, like, love, want, need, understand</i>) обычно в -ing не ставим: <b>I know</b>, а не «I'm knowing»."
  ],
  "examples": [
   {
    "en": "Look! Hulk is smashing the car again!",
    "ru": "Смотри! Халк опять крушит машину!"
   },
   {
    "en": "Eleven usually eats waffles, but today she's eating pizza.",
    "ru": "Одиннадцать обычно ест вафли, но сегодня она ест пиццу."
   },
   {
    "en": "Shh! I'm watching Loki right now.",
    "ru": "Тсс! Я сейчас смотрю «Локи»."
   },
   {
    "en": "Emily is working on a new campaign this week.",
    "ru": "На этой неделе Эмили работает над новой кампанией."
   },
   {
    "en": "What are you doing? — I'm packing for my trip!",
    "ru": "Что ты делаешь? — Собираю чемодан в поездку!"
   },
   {
    "en": "I know the answer.",
    "ru": "Я знаю ответ. (а не «I'm knowing»)"
   }
  ],
  "trap": "Забывают am / is / are перед -ing или говорят о «прямо сейчас» в Present Simple, потому что в русском время одно. ❌ Look! Thor flying! → ✅ Look! Thor is flying! ❌ I watch TV now. → ✅ I'm watching TV now.",
  "exercises": [
   {
    "type": "choice",
    "q": "Look! Spider-Man ___ up the wall!",
    "options": [
     "is climbing",
     "climbs",
     "climbing"
    ],
    "answer": [
     "is climbing"
    ],
    "explain": "Look! значит «прямо сейчас», нужен is + -ing, и без is нельзя."
   },
   {
    "type": "input",
    "q": "Shh! I ___ (watch) Loki right now.",
    "options": [],
    "answer": [
     "am watching",
     "'m watching"
    ],
    "explain": "right now — это действие в процессе, поэтому am + watching."
   },
   {
    "type": "choice",
    "q": "Wednesday ___ the cello every evening.",
    "options": [
     "plays",
     "is playing",
     "play"
    ],
    "answer": [
     "plays"
    ],
    "explain": "every evening — это привычка, значит Present Simple с -s."
   },
   {
    "type": "input",
    "q": "Emily and Mindy ___ (sit) in a café at the moment.",
    "options": [],
    "answer": [
     "are sitting"
    ],
    "explain": "at the moment — это сейчас, а в sit согласная удваивается: sitting."
   },
   {
    "type": "choice",
    "q": "What ___ you doing now?",
    "options": [
     "are",
     "do",
     "is"
    ],
    "answer": [
     "are"
    ],
    "explain": "doing — это Continuous, с you помощник are."
   },
   {
    "type": "order",
    "q": "Мы прямо сейчас летим в Париж.",
    "options": [],
    "answer": [
     "We are flying to Paris right now.",
     "We're flying to Paris right now.",
     "Right now we are flying to Paris."
    ],
    "explain": "Действие в процессе: we are + flying."
   },
   {
    "type": "input",
    "q": "Hulk usually ___ (not / talk) much, but today he is very chatty.",
    "options": [],
    "answer": [
     "doesn't talk",
     "does not talk"
    ],
    "explain": "usually — привычка, поэтому Present Simple: doesn't talk."
   },
   {
    "type": "choice",
    "q": "I ___ what you mean.",
    "options": [
     "understand",
     "am understanding",
     "understanding"
    ],
    "answer": [
     "understand"
    ],
    "explain": "understand — глагол-состояние, его не ставят в -ing."
   },
   {
    "type": "input",
    "q": "Steve ___ (not / train) right now. He is having lunch.",
    "options": [],
    "answer": [
     "isn't training",
     "is not training",
     "'s not training"
    ],
    "explain": "right now — значит отрицание в Continuous: isn't + -ing."
   },
   {
    "type": "choice",
    "q": "___ Loki telling the truth this time?",
    "options": [
     "Is",
     "Does",
     "Are"
    ],
    "answer": [
     "Is"
    ],
    "explain": "telling — это Continuous, а Loki — это he, значит Is."
   },
   {
    "type": "input",
    "q": "Look! Your cat ___ (lie) on my laptop!",
    "options": [],
    "answer": [
     "is lying",
     "'s lying"
    ],
    "explain": "Look! — значит сейчас, а lie превращается в lying (ie → y)."
   },
   {
    "type": "order",
    "q": "Что Тони сейчас делает в своей лаборатории?",
    "options": [],
    "answer": [
     "What is Tony doing in his lab now?",
     "What is Tony doing now in his lab?",
     "What's Tony doing in his lab now?"
    ],
    "explain": "Схема вопроса: What + is + подлежащее + -ing."
   }
  ],
  "homework": "Ты — репортёр в прямом эфире с поля битвы Мстителей (или со съёмочной площадки «Очень странных дел»). Напиши репортаж из 8 предложений: 5 о том, что происходит ПРЯМО СЕЙЧАС (Captain America is running…, Hulk isn't listening…), и 3 сравнения «обычно / а сейчас» по схеме «Usually Thor drinks…, but now he is…». Обязательно: минимум одно отрицание в Present Continuous, один вопрос (What is … doing?) и один глагол-состояние (know, want, love), который ты НЕ ставишь в -ing. Бонус: одно предложение о том, что ты сама делаешь прямо сейчас, пока пишешь это."
 },
 {
  "n": 4,
  "level": "A2",
  "title": "There is / there are; some / any; much / many / a lot of",
  "emoji": "🧳",
  "hook": "«Is there a pharmacy near here?» — первая фраза, которая спасает в любой поездке, и это there is.",
  "rules": [
   "<b>There is</b> + один предмет или что-то неисчисляемое (There's a café near my hotel). <b>There are</b> + много предметов (There are two cats on my bed).",
   "Отрицание и вопрос: <b>There isn't / There aren't</b>, <b>Is there…? / Are there…?</b>",
   "По-русски начинаем с места: «В комнате есть кровать». По-английски начинаем с there, а место ставим в конец: <b>There is a bed in the room.</b>",
   "<b>some</b> — в утверждениях (There are some croissants). <b>any</b> — в вопросах и отрицаниях (Is there any milk? There aren't any cups).",
   "<b>many</b> — с тем, что можно посчитать (many friends). <b>much</b> — с тем, что нельзя посчитать (much time, much money), чаще в вопросах и отрицаниях. <b>a lot of</b> — подходит ко всему, особенно в утверждениях.",
   "Вопросы: <b>How many</b> + исчисляемые (How many episodes?), <b>How much</b> + неисчисляемые (How much money?). Внимание: money неисчисляемое, хотя «деньги» по-русски во множественном числе!"
  ],
  "examples": [
   {
    "en": "There's a secret lab in the town of Hawkins.",
    "ru": "В городе Хокинс есть секретная лаборатория."
   },
   {
    "en": "There are six friends and only one coffee shop.",
    "ru": "Друзей шестеро, а кофейня всего одна."
   },
   {
    "en": "Is there a metro station near the hotel?",
    "ru": "Рядом с отелем есть станция метро?"
   },
   {
    "en": "There isn't any milk in the fridge. Joey drinks it all.",
    "ru": "В холодильнике нет молока. Джоуи его всё выпивает."
   },
   {
    "en": "Loki has a lot of variants, but he doesn't have much time.",
    "ru": "У Локи много вариантов, но времени у него мало."
   },
   {
    "en": "How many Infinity Stones are there? — Six.",
    "ru": "Сколько всего Камней Бесконечности? — Шесть."
   }
  ],
  "trap": "Строят фразу по-русски, начиная с места и без there, а ещё говорят much с исчисляемыми. ❌ In my room is a big TV. → ✅ There is a big TV in my room. ❌ There are much people in Paris. → ✅ There are a lot of people in Paris.",
  "exercises": [
   {
    "type": "choice",
    "q": "There ___ a Starbucks near my hotel.",
    "options": [
     "is",
     "are",
     "am"
    ],
    "answer": [
     "is"
    ],
    "explain": "a Starbucks — один предмет, поэтому there is."
   },
   {
    "type": "input",
    "q": "There ___ (be) six Infinity Stones.",
    "options": [],
    "answer": [
     "are"
    ],
    "explain": "Камней шесть, то есть много, поэтому there are."
   },
   {
    "type": "choice",
    "q": "Look, there are ___ new episodes of Wednesday!",
    "options": [
     "some",
     "any",
     "much"
    ],
    "answer": [
     "some"
    ],
    "explain": "В утверждении нужен some, а much с исчисляемыми episodes не используется."
   },
   {
    "type": "input",
    "q": "There ___ (not / be) any milk in the fridge. Joey drinks everything!",
    "options": [],
    "answer": [
     "isn't",
     "is not"
    ],
    "explain": "milk неисчисляемое, поэтому there isn't."
   },
   {
    "type": "choice",
    "q": "Thor doesn't have ___ patience.",
    "options": [
     "much",
     "many",
     "a"
    ],
    "answer": [
     "much"
    ],
    "explain": "patience нельзя посчитать, а с неисчисляемым в отрицании нужен much."
   },
   {
    "type": "order",
    "q": "В Хокинсе есть секретная лаборатория.",
    "options": [],
    "answer": [
     "There is a secret lab in Hawkins.",
     "There's a secret lab in Hawkins.",
     "In Hawkins there is a secret lab."
    ],
    "explain": "Начинаем с There is, а место ставим в конец."
   },
   {
    "type": "input",
    "q": "Wednesday doesn't have ___ (much / many) friends.",
    "options": [],
    "answer": [
     "many"
    ],
    "explain": "Друзей можно посчитать, поэтому many."
   },
   {
    "type": "choice",
    "q": "There ___ some croissants on the table.",
    "options": [
     "are",
     "is",
     "be"
    ],
    "answer": [
     "are"
    ],
    "explain": "croissants во множественном числе, поэтому there are."
   },
   {
    "type": "input",
    "q": "There aren't ___ (some / any) clean cups in the office.",
    "options": [],
    "answer": [
     "any"
    ],
    "explain": "В отрицании используем any, а не some."
   },
   {
    "type": "choice",
    "q": "Emily has ___ followers on Instagram.",
    "options": [
     "a lot of",
     "much",
     "any"
    ],
    "answer": [
     "a lot of"
    ],
    "explain": "В утверждении с исчисляемыми followers подходит a lot of, а much с ними не используется."
   },
   {
    "type": "input",
    "q": "How ___ (much / many) money do you need for a trip to Paris?",
    "options": [],
    "answer": [
     "much"
    ],
    "explain": "money по-английски неисчисляемое, поэтому How much."
   },
   {
    "type": "order",
    "q": "В твоём городе есть хорошие кафе?",
    "options": [],
    "answer": [
     "Are there any good cafes in your city?"
    ],
    "explain": "Вопрос: Are there + any + множественное число + место в конце."
   }
  ],
  "homework": "Ты — тревел-блогер, как Эмили в Париже, и снимаешь рум-тур по номеру в отеле мечты (или по базе Мстителей). Напиши текст для видео из 8–10 предложений: что там есть и чего нет. Обязательно: there is / there are минимум 4 раза, хотя бы одно there isn't / there aren't, один вопрос к зрителям (Is there…? / Are there…?), слова some и any и по одному разу much, many и a lot of. Бонус: добавь 2 предложения о том, что кто-то делает в этом номере прямо сейчас (Present Continuous), например: Right now Thor is sleeping on my sofa."
 },
 {
  "n": 5,
  "level": "A2",
  "title": "Past Simple: правильные и неправильные глаголы",
  "emoji": "⏪",
  "hook": "Все флешбэки и пересказы в сериалах идут в прошлом: «Thanos snapped his fingers» — без Past Simple ты не поймёшь ни одну историю.",
  "rules": [
   "Past Simple — это <b>законченное действие в прошлом</b>. Маркеры: <i>yesterday, last week, two days ago, in 2019</i>.",
   "<b>Правильные глаголы: глагол + -ed</b>: work → worked, watch → watched.",
   "Орфография: like → lik<b>ed</b> (глагол на -e — добавляем только -d), study → stud<b>ied</b> (согласная + y → ied), play → play<b>ed</b> (гласная + y — без изменений), stop → sto<b>pp</b>ed, plan → pla<b>nn</b>ed (короткий глагол «согласная + гласная + согласная» — удваиваем последнюю букву).",
   "<b>Неправильные глаголы</b> — у них своя 2-я форма, её просто запоминаешь: go → <b>went</b>, eat → <b>ate</b>, buy → <b>bought</b>, find → <b>found</b>, make → <b>made</b>, come → <b>came</b>, send → <b>sent</b>, drink → <b>drank</b>.",
   "Форма <u>одна для всех лиц</u>: I went, she went, they went. <b>Никакого -s</b> для he/she/it в прошедшем времени.",
   "Произношение -ed: /t/ после глухих звуков — watch<b>ed</b>, lik<b>ed</b>; /d/ после звонких и гласных — play<b>ed</b>, mov<b>ed</b>; /ɪd/ только после t и d — want<b>ed</b>, need<b>ed</b>."
  ],
  "examples": [
   {
    "en": "Thanos snapped his fingers, and half the universe disappeared.",
    "ru": "Танос щёлкнул пальцами, и половина вселенной исчезла."
   },
   {
    "en": "Wednesday played the cello at night and scared the neighbours.",
    "ru": "Уэнсдей играла на виолончели ночью и пугала соседей."
   },
   {
    "en": "Emily moved to Paris and bought a lot of berets.",
    "ru": "Эмили переехала в Париж и купила кучу беретов."
   },
   {
    "en": "Eleven found a way to the Upside Down.",
    "ru": "Одиннадцать нашла путь в Изнанку."
   },
   {
    "en": "Yesterday I watched three episodes of Loki and went to bed at 2 a.m.",
    "ru": "Вчера я посмотрела три серии «Локи» и легла спать в 2 часа ночи."
   }
  ],
  "trap": "Русские часто оставляют глагол в настоящем, потому что «yesterday» уже есть в предложении, или добавляют -ed к неправильному глаголу: ❌ Yesterday I go to the cinema. / ❌ She goed home. → ✅ Yesterday I went to the cinema. / ✅ She went home.",
  "exercises": [
   {
    "type": "choice",
    "q": "Yesterday Thor ___ a huge pizza.",
    "options": [
     "eats",
     "ate",
     "eated"
    ],
    "answer": [
     "ate"
    ],
    "explain": "Eat — неправильный глагол, его 2-я форма ate, а yesterday требует прошедшего времени."
   },
   {
    "type": "input",
    "q": "Last night I ___ (watch) two episodes of Wednesday.",
    "options": [],
    "answer": [
     "watched"
    ],
    "explain": "Last night — прошлое, watch правильный глагол: добавляем -ed."
   },
   {
    "type": "choice",
    "q": "Last summer Emily ___ to Paris.",
    "options": [
     "move",
     "moved",
     "moves"
    ],
    "answer": [
     "moved"
    ],
    "explain": "Last summer — прошлое; move заканчивается на -e, поэтому добавляем только -d."
   },
   {
    "type": "input",
    "q": "Spider-Man ___ (stop) the train with his webs yesterday.",
    "options": [],
    "answer": [
     "stopped"
    ],
    "explain": "Stop — короткий глагол «согласная + гласная + согласная», поэтому удваиваем p: stopped."
   },
   {
    "type": "order",
    "q": "Вчера я посмотрела новый фильм Marvel.",
    "options": [],
    "answer": [
     "Yesterday I watched a new Marvel film.",
     "I watched a new Marvel film yesterday.",
     "Yesterday I watched a new Marvel movie.",
     "I watched a new Marvel movie yesterday."
    ],
    "explain": "Подлежащее + глагол в Past Simple + дополнение; yesterday можно поставить в начало или в конец."
   },
   {
    "type": "choice",
    "q": "Two years ago Monica ___ a new job in a restaurant.",
    "options": [
     "find",
     "found",
     "finded"
    ],
    "answer": [
     "found"
    ],
    "explain": "Find — неправильный глагол: find → found, формы finded не существует."
   },
   {
    "type": "input",
    "q": "Joey ___ (make) a giant sandwich at midnight yesterday.",
    "options": [],
    "answer": [
     "made"
    ],
    "explain": "Make — неправильный глагол: make → made, формы maked не существует."
   },
   {
    "type": "choice",
    "q": "Last week Eleven ___ for a math test.",
    "options": [
     "studied",
     "studyed",
     "studies"
    ],
    "answer": [
     "studied"
    ],
    "explain": "Согласная + y → ied: study → studied; studies — это настоящее время."
   },
   {
    "type": "input",
    "q": "In 2008 Tony Stark ___ (build) his first suit in a cave.",
    "options": [],
    "answer": [
     "built"
    ],
    "explain": "Build — неправильный глагол: build → built."
   },
   {
    "type": "choice",
    "q": "Yesterday my boss ___ me an email at 11 p.m.",
    "options": [
     "sent",
     "sended",
     "sends"
    ],
    "answer": [
     "sent"
    ],
    "explain": "Send — неправильный глагол (send → sent); sends — настоящее время, а yesterday требует прошедшего."
   },
   {
    "type": "input",
    "q": "Last Friday Chandler ___ (plan) a surprise party for Monica.",
    "options": [],
    "answer": [
     "planned"
    ],
    "explain": "Plan — короткий глагол «согласная + гласная + согласная», поэтому удваиваем n: planned."
   },
   {
    "type": "order",
    "q": "Тор пришёл домой и выпил весь кофе.",
    "options": [],
    "answer": [
     "Thor came home and drank all the coffee."
    ],
    "explain": "Оба глагола неправильные: come → came, drink → drank."
   }
  ],
  "homework": "Ты — Локи. Напиши 7 предложений о том, что ты делал вчера, пока Тор спал. Используй минимум 4 неправильных глагола (went, took, ate, made, found, bought...) и минимум 3 правильных с -ed (changed, painted, ordered, hid... — стоп, hid неправильный!). Каждое предложение — в Past Simple, только утверждения. Пока не используй was/were, вопросы и отрицания — это следующий урок. Пример: Yesterday I took Thor's hammer and put it in the fridge. Then I ordered ten pizzas on his card. В конце подчеркни все неправильные глаголы одним цветом, правильные — другим, и проверь их по таблице неправильных глаголов."
 },
 {
  "n": 6,
  "level": "A2",
  "title": "Past Simple: вопросы и отрицания; was / were",
  "emoji": "❓",
  "hook": "«We were on a break!» — самая знаменитая фраза Росса из Friends, и в ней как раз were.",
  "rules": [
   "<b>Отрицание: didn't + глагол в 1-й форме</b>: I didn't go, she didn't call. Did уже «забрал» прошлое — глагол возвращается в начальную форму (как с does в Present Simple).",
   "<b>Вопрос: Did + подлежащее + глагол в 1-й форме?</b> Did you see Loki? — Yes, I did. / No, I didn't.",
   "С вопросительным словом: <b>Where / What / Why + did + подлежащее + глагол?</b> Where did you go?",
   "<b>was / were</b> — это прошлое от to be («был»): I / he / she / it <b>was</b>; you / we / they <b>were</b>.",
   "С was/were <u>did не нужен</u>: Were you tired? (не Did you be tired?). Отрицание: <b>wasn't / weren't</b>.",
   "Запомни разницу: <i>действие</i> → did (Did you sleep?), <i>состояние или «был где-то»</i> → was/were (Were you at home?)."
  ],
  "examples": [
   {
    "en": "We were on a break!",
    "ru": "У нас был перерыв! (Росс, Friends)"
   },
   {
    "en": "Did you see the last episode of Stranger Things? — Yes, I did!",
    "ru": "Ты видела последнюю серию «Очень странных дел»? — Да!"
   },
   {
    "en": "Wednesday didn't smile. Not once.",
    "ru": "Уэнсдей не улыбнулась. Ни разу."
   },
   {
    "en": "Where were you last night, Loki?",
    "ru": "Где ты был прошлой ночью, Локи?"
   },
   {
    "en": "The hotel wasn't cheap, but the view was amazing.",
    "ru": "Отель был недешёвый, но вид был потрясающий."
   },
   {
    "en": "What did Thanos want?",
    "ru": "Чего хотел Танос?"
   }
  ],
  "trap": "После didn't и did ставят вторую форму глагола — получается «двойное прошлое»: ❌ I didn't saw it. / ❌ Did you went there? → ✅ I didn't see it. / ✅ Did you go there?",
  "exercises": [
   {
    "type": "choice",
    "q": "Ross and Rachel ___ on a break.",
    "options": [
     "was",
     "were",
     "did"
    ],
    "answer": [
     "were"
    ],
    "explain": "Ross and Rachel = они (they), а с they используется were."
   },
   {
    "type": "input",
    "q": "I ___ (not / see) the new episode yesterday.",
    "options": [],
    "answer": [
     "didn't see",
     "did not see"
    ],
    "explain": "Отрицание в Past Simple: didn't + глагол в начальной форме."
   },
   {
    "type": "choice",
    "q": "___ you watch Loki last weekend?",
    "options": [
     "Do",
     "Did",
     "Were"
    ],
    "answer": [
     "Did"
    ],
    "explain": "Last weekend — прошлое, а с обычным глаголом watch вопрос строится через Did."
   },
   {
    "type": "input",
    "q": "Wednesday ___ (be) very angry at the school dance last Friday.",
    "options": [],
    "answer": [
     "was"
    ],
    "explain": "Wednesday = she, а прошлое от to be для she — was."
   },
   {
    "type": "choice",
    "q": "She didn't ___ the email from her boss.",
    "options": [
     "answer",
     "answered",
     "answers"
    ],
    "answer": [
     "answer"
    ],
    "explain": "После didn't глагол всегда в начальной форме, без -ed и -s."
   },
   {
    "type": "order",
    "q": "Ты была в Париже в прошлом году?",
    "options": [],
    "answer": [
     "Were you in Paris last year?"
    ],
    "explain": "«Была где-то» — это to be, поэтому вопрос начинается с Were, без did."
   },
   {
    "type": "input",
    "q": "___ (you / like) the hotel in Rome last summer?",
    "options": [],
    "answer": [
     "Did you like",
     "did you like"
    ],
    "explain": "Вопрос с обычным глаголом: Did + подлежащее + глагол в начальной форме."
   },
   {
    "type": "choice",
    "q": "Where ___ Eleven go after the fight last night?",
    "options": [
     "did",
     "was",
     "were"
    ],
    "answer": [
     "did"
    ],
    "explain": "Go — обычный глагол, поэтому вопрос строится с did + начальная форма: Where did Eleven go? «Where was Eleven go» — ошибка."
   },
   {
    "type": "input",
    "q": "The Avengers ___ (not / be) ready for Thanos in 2018.",
    "options": [],
    "answer": [
     "weren't",
     "were not"
    ],
    "explain": "The Avengers = they, отрицание от were — weren't."
   },
   {
    "type": "choice",
    "q": "Why ___ you angry at the meeting yesterday?",
    "options": [
     "did",
     "were",
     "was"
    ],
    "answer": [
     "were"
    ],
    "explain": "Angry — это состояние (to be), а с you всегда were."
   },
   {
    "type": "input",
    "q": "Tony ___ (not / know) the answer, so he called Bruce.",
    "options": [],
    "answer": [
     "didn't know",
     "did not know"
    ],
    "explain": "Called показывает прошлое, а отрицание строится через didn't + know."
   },
   {
    "type": "order",
    "q": "Почему ты не позвонила мне вчера вечером?",
    "options": [],
    "answer": [
     "Why didn't you call me last night?",
     "Why didn't you call me yesterday evening?"
    ],
    "explain": "Вопросительное слово + didn't + подлежащее + глагол в начальной форме."
   }
  ],
  "homework": "Ты — детектив Уэнсдей Аддамс. Прошлой ночью из академии Nevermore пропал огромный шоколадный торт. Напиши допрос подозреваемого (например, Энид или Вещи) — 10 предложений: 5 вопросов от тебя и 5 ответов подозреваемого. Обязательно: минимум 3 вопроса с Did...? (Did you eat...?), минимум 2 вопроса с was/were (Where were you at midnight? Was the kitchen open?) и минимум 3 отрицания в ответах (I didn't..., I wasn't..., We weren't...). Последнее предложение — твой вывод: кто съел торт и почему. Проверь себя: после did/didn't — глагол без -ed!"
 },
 {
  "n": 7,
  "level": "A2",
  "title": "Артикли a / an / the / без артикля",
  "emoji": "🅰️",
  "hook": "В русском артиклей нет, поэтому «I'm designer» сразу выдаёт русскоговорящего. Носитель так не скажет никогда — только «I'm a designer».",
  "rules": [
   "<b>a / an</b> = «один, какой-то», говорим впервые. Только с исчисляемыми в <u>единственном числе</u>: a hero, a plan.",
   "<b>an</b> — перед гласным <u>звуком</u>, а не буквой: an apple, an hour (h не читается), но a university (звучит «ю»), a unique bag.",
   "<b>the</b> = «тот самый»: уже говорили о нём или и так понятно, о чём речь. Loki has <b>a</b> plan. <b>The</b> plan is crazy. Единственное в своём роде: the sun, the moon.",
   "<b>Без артикля</b>: множественное число и неисчисляемые в общем смысле (I love cats. Coffee is life.), имена, города и большинство стран (Paris, Italy), языки, breakfast / lunch / dinner, at home, go to work.",
   "<b>Профессия в единственном числе — всегда с a/an</b>: She is <b>a</b> chef. He is <b>an</b> actor. В русском просто «Она повар» — отсюда главная ошибка.",
   "Исключения со странами: <b>the</b> USA, <b>the</b> UK — когда в названии есть «Штаты», «Королевство» или «Республика»."
  ],
  "examples": [
   {
    "en": "Loki has a plan. The plan is terrible.",
    "ru": "У Локи есть план. План ужасный."
   },
   {
    "en": "Wednesday has a strange friend. The friend is a hand.",
    "ru": "У Уэнсдей есть странный друг. Этот друг — рука."
   },
   {
    "en": "Monica is a chef, and Joey is an actor.",
    "ru": "Моника — повар, а Джоуи — актёр."
   },
   {
    "en": "Emily lives in Paris and loves croissants.",
    "ru": "Эмили живёт в Париже и обожает круассаны."
   },
   {
    "en": "I want an iced latte and a cookie.",
    "ru": "Я хочу айс-латте и печеньку."
   },
   {
    "en": "Look at the sun! It's so hot today.",
    "ru": "Посмотри на солнце! Сегодня так жарко."
   }
  ],
  "trap": "Пропускают артикль перед профессией и вообще перед исчисляемым в единственном числе: ❌ I am designer. / ❌ I have cat. → ✅ I am a designer. / ✅ I have a cat.",
  "exercises": [
   {
    "type": "choice",
    "q": "Monica is ___ chef.",
    "options": [
     "a",
     "an",
     "— (без артикля)"
    ],
    "answer": [
     "a"
    ],
    "explain": "Перед профессией в единственном числе нужен a, а chef начинается с согласного звука."
   },
   {
    "type": "input",
    "q": "I ate ___ (a / an) apple and a banana for breakfast.",
    "options": [],
    "answer": [
     "an"
    ],
    "explain": "Apple начинается с гласного звука, поэтому an."
   },
   {
    "type": "choice",
    "q": "Look at ___ moon! It's so big tonight.",
    "options": [
     "a",
     "the",
     "an"
    ],
    "answer": [
     "the"
    ],
    "explain": "Луна у нас одна — единственное в своём роде всегда с the."
   },
   {
    "type": "input",
    "q": "Loki has a plan. ___ (a / an / the) plan is crazy.",
    "options": [],
    "answer": [
     "The",
     "the"
    ],
    "explain": "План уже упомянули, теперь это «тот самый» план — the."
   },
   {
    "type": "order",
    "q": "Мой брат — пилот, и он любит кошек.",
    "options": [],
    "answer": [
     "My brother is a pilot and he loves cats."
    ],
    "explain": "Профессия с a, а кошки во множественном числе в общем смысле — без артикля."
   },
   {
    "type": "choice",
    "q": "Steve Rogers doesn't like ___ lies.",
    "options": [
     "a",
     "an",
     "— (без артикля)"
    ],
    "answer": [
     "— (без артикля)"
    ],
    "explain": "Lies — множественное число в общем смысле, a/an с ним невозможны."
   },
   {
    "type": "input",
    "q": "It took ___ (a / an) hour to get to the airport.",
    "options": [],
    "answer": [
     "an"
    ],
    "explain": "В слове hour буква h не читается, оно начинается с гласного звука — значит an."
   },
   {
    "type": "choice",
    "q": "Emily's friend Mindy teaches at ___ university in Paris.",
    "options": [
     "a",
     "an",
     "— (без артикля)"
    ],
    "answer": [
     "a"
    ],
    "explain": "Университет упоминается впервые и он один из многих — нужен a/an. University звучит как «юниверсити» — первый звук согласный [j], поэтому a, а не an."
   },
   {
    "type": "input",
    "q": "Yesterday I saw a cute dog in the park. ___ (a / an / the) dog wore a tiny Spider-Man costume.",
    "options": [],
    "answer": [
     "The",
     "the"
    ],
    "explain": "Собаку уже упомянули в первом предложении, теперь это та самая собака — the."
   },
   {
    "type": "choice",
    "q": "We went to ___ Italy last summer.",
    "options": [
     "the",
     "a",
     "— (без артикля)"
    ],
    "answer": [
     "— (без артикля)"
    ],
    "explain": "Названия большинства стран и городов идут без артикля."
   },
   {
    "type": "input",
    "q": "Emily wants to buy ___ (a / an) unique bag in Paris.",
    "options": [],
    "answer": [
     "a"
    ],
    "explain": "Unique начинается со звука «ю» [j] — это согласный звук, поэтому a, хотя буква u гласная."
   },
   {
    "type": "order",
    "q": "Я купила платье и туфли в Милане.",
    "options": [],
    "answer": [
     "I bought a dress and shoes in Milan.",
     "I bought shoes and a dress in Milan.",
     "In Milan I bought a dress and shoes."
    ],
    "explain": "Платье одно — a dress, туфли во множественном числе и город Милан — без артикля."
   }
  ],
  "homework": "Ты — Эмили в Париже. Напиши пост для Instagram (7–8 предложений) о вчерашнем дне: что ты купила, где была, кого встретила. Обязательно: минимум 3 раза a/an (что-то новое: a tiny café, an old man), минимум 3 раза the (то же самое, уже упомянутое: The café had pink chairs) и минимум 3 слова без артикля (Paris, coffee, croissants, Gabriel). Пиши в Past Simple, добавь хотя бы одно отрицание (I didn't buy...). Пример: Yesterday I found a tiny café. The café had pink chairs and amazing croissants. После текста обведи все артикли разными цветами: a/an — одним, the — другим."
 },
 {
  "n": 8,
  "level": "A2",
  "title": "Предлоги времени и места: in / on / at",
  "emoji": "📍",
  "hook": "В русском везде «в»: в Париже, в пятницу, в 5 часов — а в английском это три разных предлога, и они нужны в каждой поездке и на работе: «Meet me at 5 on Friday in Paris».",
  "rules": [
   "<b>Время — пирамида от большого к маленькому:</b> <b>IN</b> — годы, месяцы, сезоны, части дня (in 2020, in May, in summer, in the morning); <b>ON</b> — дни и даты (on Monday, on 5 May, on my birthday); <b>AT</b> — точное время (at 7 o'clock, at midnight).",
   "Запомни: in the morning / in the afternoon / in the evening, но <b>at night</b>. А если часть дня привязана к конкретному дню — <b>on</b>: on Saturday evening, on Monday morning.",
   "<b>Место: IN</b> — внутри (in the box, in a car, in Paris, in bed); <b>ON</b> — на поверхности (on the table, on the wall) и в соцсетях/на ТВ (on Instagram, on TV); <b>AT</b> — точка или событие (at the bus stop, at work, at home, at a party).",
   "<b>Без предлога</b>: перед last, next, this, every, а также с yesterday, tomorrow, today: last Monday (не on last Monday), every day.",
   "Лайфхак: если можно сказать «внутри» — скорее всего in; если «на поверхности» — on; если просто «у точки / на мероприятии» — at."
  ],
  "examples": [
   {
    "en": "Wednesday's birthday is on Friday the 13th.",
    "ru": "День рождения Уэнсдей — в пятницу, 13-го."
   },
   {
    "en": "Eleven lives in Hawkins, in a small house in the woods.",
    "ru": "Одиннадцать живёт в Хокинсе, в маленьком доме в лесу."
   },
   {
    "en": "The friends drink coffee at Central Perk in the evening.",
    "ru": "Вечером друзья пьют кофе в Central Perk."
   },
   {
    "en": "There is a photo of Loki on the wall.",
    "ru": "На стене висит фото Локи."
   },
   {
    "en": "My flight to Rome is at 6 a.m. on Saturday.",
    "ru": "Мой рейс в Рим — в 6 утра в субботу."
   },
   {
    "en": "I watch series in bed at night.",
    "ru": "Я смотрю сериалы в кровати ночью."
   }
  ],
  "trap": "Переводят русское «в» одним и тем же предлогом in: ❌ We met in Monday in 5 o'clock. → ✅ We met on Monday at 5 o'clock.",
  "exercises": [
   {
    "type": "choice",
    "q": "My English lesson is ___ Monday.",
    "options": [
     "in",
     "on",
     "at"
    ],
    "answer": [
     "on"
    ],
    "explain": "С днями недели всегда on."
   },
   {
    "type": "input",
    "q": "Emily moved to Paris ___ (in / on / at) 2020.",
    "options": [],
    "answer": [
     "in"
    ],
    "explain": "Год — это большой период, поэтому in."
   },
   {
    "type": "choice",
    "q": "The movie starts ___ 8 o'clock.",
    "options": [
     "in",
     "on",
     "at"
    ],
    "answer": [
     "at"
    ],
    "explain": "Точное время — at."
   },
   {
    "type": "input",
    "q": "Your phone is ___ (in / on / at) the table, next to the pizza.",
    "options": [],
    "answer": [
     "on"
    ],
    "explain": "Телефон лежит на поверхности стола — on."
   },
   {
    "type": "choice",
    "q": "Joey always waits for his friends ___ the bus stop.",
    "options": [
     "in",
     "on",
     "at"
    ],
    "answer": [
     "at"
    ],
    "explain": "Остановка — это точка на карте, поэтому at."
   },
   {
    "type": "order",
    "q": "Я пью кофе на работе утром.",
    "options": [],
    "answer": [
     "I drink coffee at work in the morning.",
     "I drink coffee in the morning at work.",
     "In the morning I drink coffee at work.",
     "At work I drink coffee in the morning."
    ],
    "explain": "At work — точка (место), in the morning — часть дня."
   },
   {
    "type": "input",
    "q": "In Stranger Things the monsters usually attack ___ (in / on / at) night.",
    "options": [],
    "answer": [
     "at"
    ],
    "explain": "Исключение: in the morning, но at night."
   },
   {
    "type": "choice",
    "q": "Wednesday never posts photos ___ Instagram.",
    "options": [
     "in",
     "on",
     "at"
    ],
    "answer": [
     "on"
    ],
    "explain": "Соцсети, ТВ, сайты — on: on Instagram, on TV."
   },
   {
    "type": "input",
    "q": "We met ___ (in / on / at) my birthday party last Saturday.",
    "options": [],
    "answer": [
     "at"
    ],
    "explain": "Вечеринка — это событие, а для событий используется at (at a party, at a concert)."
   },
   {
    "type": "choice",
    "q": "I met Loki ___ last Friday.",
    "options": [
     "on",
     "at",
     "— (без предлога)"
    ],
    "answer": [
     "— (без предлога)"
    ],
    "explain": "Перед last, next, this, every предлог не ставится."
   },
   {
    "type": "input",
    "q": "Monica's restaurant is closed ___ (in / on / at) Christmas Day.",
    "options": [],
    "answer": [
     "on"
    ],
    "explain": "Christmas Day — это конкретный день, а с днями используется on."
   },
   {
    "type": "order",
    "q": "Мы были в Риме в субботу вечером.",
    "options": [],
    "answer": [
     "We were in Rome on Saturday evening.",
     "On Saturday evening we were in Rome."
    ],
    "explain": "Город — in, а вечер конкретного дня — on (on Saturday evening)."
   }
  ],
  "homework": "Ты — агент TVA. Вчера ты поймал(а) трёх вариантов Локи в разных местах и временах. Напиши отчёт из 8–9 предложений в Past Simple. Для каждого Локи укажи: год (in 1985), день или дату (on Friday, on 1 April), точное время (at 3 a.m.) и место (in Paris, on a train, at a party). Добавь минимум одно предложение без предлога (last night, yesterday) и одно отрицание (He didn't..., He wasn't...). Пример: I caught the first Loki in New York in 2012. It was on Monday at 6 p.m. He was at a café and he didn't pay for his coffee. В конце подчеркни все in / on / at и проверь их по пирамиде из правил."
 },
 {
  "n": 9,
  "level": "A2",
  "title": "Будущее: will / going to / Present Continuous для планов",
  "emoji": "🔮",
  "hook": "«I'll be back!» Терминатор говорит will, Тони Старк мог бы сказать «I'm going to build a new suit», а Эмили в Париже — «I'm meeting Gabriel tonight». Три способа сказать о будущем, и у каждого своя работа.",
  "rules": [
   "<b>will + глагол</b> — решение прямо сейчас, обещание или прогноз-мнение: <i>I'll help you! I think it will rain.</i> Отрицание: <b>won't</b> = will not.",
   "<b>am/is/are going to + глагол</b> — план, который ты уже придумала заранее: <i>I'm going to learn Spanish.</i> Также прогноз, когда <u>видно по признакам</u>: <i>Look at the clouds! It's going to rain.</i>",
   "<b>Present Continuous</b> (am/is/are + -ing) — договорённость: уже есть время, место, билеты: <i>I'm flying to Rome on Friday.</i>",
   "После <b>will</b> глагол голый: без <b>to</b> и без <b>-s</b>: <i>She will call</i> (не will calls, не will to call).",
   "Вопросы: <b>Will you...?</b> / <b>Are you going to...?</b> / <b>What are you doing tonight?</b>",
   "По-русски «Завтра я иду в кино» звучит как настоящее время, но в английском тут нужен <b>I'm going to the cinema tomorrow</b> (Present Continuous), а не Present Simple."
  ],
  "examples": [
   {
    "en": "Don't worry, Thor. I'll find your hammer.",
    "ru": "Не волнуйся, Тор. Я найду твой молот."
   },
   {
    "en": "I'm going to watch all the seasons of Stranger Things this month.",
    "ru": "Я собираюсь посмотреть все сезоны «Очень странных дел» в этом месяце."
   },
   {
    "en": "Emily is meeting her boss at 9 tomorrow.",
    "ru": "Эмили встречается с начальницей завтра в 9."
   },
   {
    "en": "Look at Hulk! He's going to smash the car.",
    "ru": "Посмотри на Халка! Он сейчас разобьёт машину."
   },
   {
    "en": "I don't think Loki will change. He loves chaos.",
    "ru": "Думаю, Локи не изменится. Он обожает хаос."
   }
  ],
  "trap": "Русское «Завтра я лечу в Париж» хочется перевести настоящим временем. ❌ Tomorrow I fly to Paris. → ✅ I'm flying to Paris tomorrow. (И ещё: ❌ I will to call you → ✅ I will call you.)",
  "exercises": [
   {
    "type": "choice",
    "q": "I think Loki ___ trick Thor again.",
    "options": [
     "will",
     "is",
     "are going"
    ],
    "answer": [
     "will"
    ],
    "explain": "Прогноз-мнение после I think — will + глагол без to."
   },
   {
    "type": "input",
    "q": "Look at Joey's face! He ___ (going to / eat) Ross's sandwich.",
    "options": [],
    "answer": [
     "is going to eat"
    ],
    "explain": "Видно по признакам, что сейчас случится, — is going to + глагол."
   },
   {
    "type": "choice",
    "q": "Emily ___ Gabriel at 8 tonight — they booked a table.",
    "options": [
     "is meeting",
     "meets",
     "meet"
    ],
    "answer": [
     "is meeting"
    ],
    "explain": "Договорённость с временем и местом — Present Continuous, а не Present Simple."
   },
   {
    "type": "input",
    "q": "Thor: «Relax, it ___ (will / not / rain) tomorrow. I'm the god of thunder!»",
    "options": [],
    "answer": [
     "won't rain",
     "will not rain"
    ],
    "explain": "Отрицание с will — won't (will not) + глагол без -s."
   },
   {
    "type": "order",
    "q": "Я собираюсь посмотреть «Локи» сегодня вечером.",
    "options": [],
    "answer": [
     "I am going to watch Loki tonight.",
     "Tonight I am going to watch Loki.",
     "I'm going to watch Loki tonight.",
     "Tonight I'm going to watch Loki."
    ],
    "explain": "План заранее — am going to + глагол."
   },
   {
    "type": "choice",
    "q": "___ you help me with my suitcase? It's so heavy!",
    "options": [
     "Will",
     "Are",
     "Does"
    ],
    "answer": [
     "Will"
    ],
    "explain": "Просьба о будущем: Will you + глагол; «Are you help» и «Does you» неграмматичны."
   },
   {
    "type": "input",
    "q": "We ___ (fly) to Paris on Friday — the tickets are already in my bag! (Present Continuous)",
    "options": [],
    "answer": [
     "are flying"
    ],
    "explain": "Билеты куплены — договорённость, поэтому are + -ing."
   },
   {
    "type": "choice",
    "q": "Eleven: «Hopper ___ going to be angry. Look at this mess!»",
    "options": [
     "is",
     "will",
     "are"
    ],
    "answer": [
     "is"
    ],
    "explain": "Hopper = he, поэтому is going to; «will going» не бывает, а are — для you/we/they."
   },
   {
    "type": "input",
    "q": "What ___ (you / do) this weekend? I'm visiting my mom — and you? (Present Continuous)",
    "options": [],
    "answer": [
     "are you doing"
    ],
    "explain": "В вопросе are ставится перед подлежащим: are you doing."
   },
   {
    "type": "choice",
    "q": "Peter Parker ___ be late again — he promised Aunt May!",
    "options": [
     "won't",
     "doesn't",
     "isn't"
    ],
    "answer": [
     "won't"
    ],
    "explain": "Обещание о будущем — won't + be; «doesn't be» и «isn't be» не существуют."
   },
   {
    "type": "input",
    "q": "How ___ (you / going to / get) to the airport tomorrow?",
    "options": [],
    "answer": [
     "are you going to get"
    ],
    "explain": "В вопросе are выходит вперёд: are you going to + глагол."
   },
   {
    "type": "order",
    "q": "Мы встречаемся с Моникой в кафе в субботу.",
    "options": [],
    "answer": [
     "We are meeting Monica at the cafe on Saturday.",
     "On Saturday we are meeting Monica at the cafe.",
     "We're meeting Monica at the cafe on Saturday.",
     "On Saturday we're meeting Monica at the cafe.",
     "We are meeting Monica on Saturday at the cafe.",
     "We're meeting Monica on Saturday at the cafe."
    ],
    "explain": "Договорённость — Present Continuous, плюс at the cafe и on Saturday из урока 8."
   }
  ],
  "homework": "Ты — Эмили в Париже, и впереди безумные выходные. Напиши 8 предложений в своём дневнике: 3 предложения о планах с going to (что ты собираешься сделать), 3 договорённости в Present Continuous с точным временем или местом (I'm meeting... at 7, on Saturday...), и 2 спонтанных решения или обещания с will / won't (например, твоя начальница звонит в субботу утром — что ты ответишь?). Бонус: добавь один прогноз по признакам: «Look! ... is going to ...»."
 },
 {
  "n": 10,
  "level": "A2",
  "title": "Сравнение: -er / more / the most, as ... as",
  "emoji": "🏆",
  "hook": "Кто сильнее, Тор или Халк? Какой сезон «Очень странных дел» страшнее всех? Без сравнений не поспоришь ни о сериалах, ни о ценах в Париже.",
  "rules": [
   "<b>Короткие</b> прилагательные (1 слог): <b>+er</b> / <b>the + -est</b>: <i>tall → taller → the tallest</i>. «Чем» = <b>than</b>.",
   "На <b>-y</b> (даже если 2 слога): y → i: <i>funny → funnier → the funniest</i>. Если слово кончается на одну гласную + одну согласную, согласная удваивается: <i>big → bigger, hot → hotter</i>.",
   "<b>Длинные</b> (2 слога не на -y, а также 3 и больше): <b>more</b> / <b>the most</b>: <i>interesting → more interesting → the most interesting</i>.",
   "Исключения выучи наизусть: <b>good → better → the best</b>, <b>bad → worse → the worst</b>.",
   "<b>as + прилагательное + as</b> = такой же, как: <i>Loki is as clever as Thor.</i> <b>not as ... as</b> = не такой, как.",
   "Никогда не смешивай: либо -er, либо more. Двух сразу не бывает."
  ],
  "examples": [
   {
    "en": "Hulk is bigger than Iron Man.",
    "ru": "Халк больше, чем Железный человек."
   },
   {
    "en": "Paris is more expensive than my city.",
    "ru": "Париж дороже, чем мой город."
   },
   {
    "en": "Chandler is the funniest friend in Friends.",
    "ru": "Чендлер самый смешной друг в «Друзьях»."
   },
   {
    "en": "This is the best episode of the season!",
    "ru": "Это лучшая серия сезона!"
   },
   {
    "en": "My French is not as good as Emily's.",
    "ru": "Мой французский не такой хороший, как у Эмили."
   }
  ],
  "trap": "В русском «более сильный» звучит нормально, поэтому хочется добавить more к -er. ❌ Thor is more stronger than Loki. → ✅ Thor is stronger than Loki. (И ❌ more good → ✅ better.)",
  "exercises": [
   {
    "type": "choice",
    "q": "Hulk is ___ than Black Widow.",
    "options": [
     "bigger",
     "more big",
     "biggest"
    ],
    "answer": [
     "bigger"
    ],
    "explain": "Короткое слово big: удваиваем g и добавляем -er, плюс than."
   },
   {
    "type": "input",
    "q": "Friends is ___ (funny) than my boss's jokes.",
    "options": [],
    "answer": [
     "funnier"
    ],
    "explain": "Funny на -y: y меняется на i и добавляется -er."
   },
   {
    "type": "choice",
    "q": "Emily in Paris is ___ than my real life.",
    "options": [
     "more exciting",
     "excitinger",
     "most exciting"
    ],
    "answer": [
     "more exciting"
    ],
    "explain": "Exciting длинное, поэтому more + than; most без the и с than не работает."
   },
   {
    "type": "input",
    "q": "Paris is ___ (expensive) than my hometown.",
    "options": [],
    "answer": [
     "more expensive"
    ],
    "explain": "Длинное прилагательное сравниваем через more."
   },
   {
    "type": "order",
    "q": "Тор сильнее, чем Локи.",
    "options": [],
    "answer": [
     "Thor is stronger than Loki."
    ],
    "explain": "Strong короткое: stronger + than."
   },
   {
    "type": "choice",
    "q": "This is the ___ day of my life!",
    "options": [
     "best",
     "goodest",
     "better"
    ],
    "answer": [
     "best"
    ],
    "explain": "Good — исключение: good → better → the best."
   },
   {
    "type": "input",
    "q": "Thor is the ___ (old) Avenger — he is 1500 years old!",
    "options": [],
    "answer": [
     "oldest"
    ],
    "explain": "Превосходная степень короткого слова: the + -est."
   },
   {
    "type": "choice",
    "q": "Joey is not as smart ___ Ross.",
    "options": [
     "as",
     "than",
     "that"
    ],
    "answer": [
     "as"
    ],
    "explain": "Конструкция всегда парная: as ... as, а than нужен только после -er/more."
   },
   {
    "type": "input",
    "q": "Today is ___ (hot) than yesterday — 35 degrees!",
    "options": [],
    "answer": [
     "hotter"
    ],
    "explain": "Hot заканчивается на одну гласную + одну согласную, поэтому t удваивается: hotter."
   },
   {
    "type": "choice",
    "q": "That was ___ episode of the season — so boring!",
    "options": [
     "the worst",
     "the baddest",
     "worse"
    ],
    "answer": [
     "the worst"
    ],
    "explain": "Bad — исключение: bad → worse → the worst; «the baddest» неправильно, а worse без than здесь не подходит."
   },
   {
    "type": "input",
    "q": "Sorry, Ross, but your jokes are not ___ (funny) as Chandler's.",
    "options": [],
    "answer": [
     "as funny",
     "so funny"
    ],
    "explain": "Not as + прилагательное в обычной форме + as, без -er. После not можно сказать и not so ... as."
   },
   {
    "type": "order",
    "q": "Это самый интересный сериал на Netflix.",
    "options": [],
    "answer": [
     "This is the most interesting series on Netflix."
    ],
    "explain": "Длинное прилагательное в превосходной степени: the most + interesting."
   }
  ],
  "homework": "Устрой битву: «Марвел против реальной жизни». Напиши 8 предложений: 3 сравнения двух героев (например, Тора и Локи) с -er или more ... than; 2 предложения с the -est / the most о самом лучшем и самом худшем сериале, который ты смотрела; 2 предложения с as ... as / not as ... as о себе и любимой героине (My English is not as good as..., but I am as brave as...); 1 предложение с better или worse о своём городе и Париже. Хотя бы одно сравнение сделай смешным!"
 },
 {
  "n": 11,
  "level": "A2",
  "title": "Модальные: can / could / should / must / have to",
  "emoji": "🦸‍♀️",
  "hook": "Человек-паук can лазить по стенам, Мстители must спасать мир, а тебе don't have to вставать рано в субботу. Модальные глаголы нужны везде: в путешествиях, на работе и в каждой серии.",
  "rules": [
   "<b>can</b> = могу/умею, <b>can't</b> = не могу. <b>could</b> = мог/умел в прошлом: <i>I could swim at five.</i> А ещё вежливая просьба: <i>Could you help me?</i>",
   "<b>should</b> = стоит, следует (совет): <i>You should see this show.</i> <b>shouldn't</b> = не стоит.",
   "<b>must</b> = должен, строго (правило или моё решение). <b>mustn't</b> = НЕЛЬЗЯ: <i>You mustn't smoke here.</i>",
   "<b>have to / has to</b> = приходится, так требуют обстоятельства. <b>don't have to</b> = НЕ ОБЯЗАТЕЛЬНО. В прошлом: <b>had to</b> (у must прошедшей формы нет).",
   "Формула: <b>модальный + голый глагол</b>, без to и без -s: <i>She can swim</i> (не cans, не can to swim). Исключение: <b>have to</b> — там to нужно, и с he/she/it он меняется на <b>has to</b>.",
   "Вопрос: модальный выходит вперёд: <i>Can you...? Should I...?</i> Но с have to нужен do/does: <i>Do I have to pay?</i>"
  ],
  "examples": [
   {
    "en": "Spider-Man can climb walls, but he can't fly.",
    "ru": "Человек-паук умеет лазить по стенам, но не умеет летать."
   },
   {
    "en": "Could you tell me the way to the Eiffel Tower?",
    "ru": "Не могли бы вы подсказать дорогу к Эйфелевой башне?"
   },
   {
    "en": "You should watch Wednesday. It's amazing!",
    "ru": "Тебе стоит посмотреть «Уэнсдей». Сериал потрясающий!"
   },
   {
    "en": "You mustn't touch the Tesseract!",
    "ru": "Тессеракт трогать нельзя!"
   },
   {
    "en": "It's Sunday, so I don't have to work.",
    "ru": "Сегодня воскресенье, так что мне не нужно работать."
   }
  ],
  "trap": "Русское «тебе не надо приходить» легко перевести через mustn't, но mustn't значит «запрещено». ❌ You mustn't come tomorrow, it's a holiday. → ✅ You don't have to come tomorrow, it's a holiday.",
  "exercises": [
   {
    "type": "choice",
    "q": "Spider-Man ___ climb walls.",
    "options": [
     "can",
     "cans",
     "can to"
    ],
    "answer": [
     "can"
    ],
    "explain": "После can глагол без to, а сам can не получает -s."
   },
   {
    "type": "input",
    "q": "Spider-Man ___ (can / not) fly — he just swings on his webs.",
    "options": [],
    "answer": [
     "can't",
     "cannot"
    ],
    "explain": "Отрицание от can — can't (cannot), пишется слитно."
   },
   {
    "type": "choice",
    "q": "You look tired. You ___ go to bed.",
    "options": [
     "should",
     "should to",
     "shoulds"
    ],
    "answer": [
     "should"
    ],
    "explain": "Совет — should + голый глагол, без to и -s."
   },
   {
    "type": "input",
    "q": "When Peter was five, he ___ (can / not) ride a bike. Now he swings on webs!",
    "options": [],
    "answer": [
     "couldn't",
     "could not"
    ],
    "explain": "Не умел в прошлом (when he was five) — couldn't."
   },
   {
    "type": "order",
    "q": "Тебе стоит посмотреть «Очень странные дела».",
    "options": [],
    "answer": [
     "You should watch Stranger Things."
    ],
    "explain": "Совет — should + глагол."
   },
   {
    "type": "choice",
    "q": "At the airport you ___ show your passport. It's the rule.",
    "options": [
     "must",
     "mustn't",
     "don't have to"
    ],
    "answer": [
     "must"
    ],
    "explain": "Строгое правило «обязан» — must; mustn't значит «нельзя», а don't have to — «не обязательно»."
   },
   {
    "type": "input",
    "q": "Tomorrow is Saturday, so I ___ (not / have to) get up early!",
    "options": [],
    "answer": [
     "don't have to",
     "do not have to"
    ],
    "explain": "«Не обязательно» — don't have to, а не mustn't."
   },
   {
    "type": "choice",
    "q": "Steve ___ to wear his uniform every day.",
    "options": [
     "has",
     "have",
     "must"
    ],
    "answer": [
     "has"
    ],
    "explain": "Steve = he, поэтому has to; «must to» не бывает."
   },
   {
    "type": "input",
    "q": "You ___ (must / not) touch the Infinity Stones — they are very dangerous!",
    "options": [],
    "answer": [
     "mustn't",
     "must not"
    ],
    "explain": "Запрет «нельзя» — mustn't."
   },
   {
    "type": "choice",
    "q": "___ you help me with my CV, please?",
    "options": [
     "Could",
     "Should to",
     "Must to"
    ],
    "answer": [
     "Could"
    ],
    "explain": "Вежливая просьба — Could you...?; после should и must нет to."
   },
   {
    "type": "input",
    "q": "Yesterday Emily ___ (have to) work until 10 pm. Poor Emily!",
    "options": [],
    "answer": [
     "had to"
    ],
    "explain": "Прошлое от have to — had to (must в прошлом не используется)."
   },
   {
    "type": "order",
    "q": "Тебе не нужно платить за этот кофе.",
    "options": [],
    "answer": [
     "You don't have to pay for this coffee.",
     "You do not have to pay for this coffee."
    ],
    "explain": "«Не нужно, не обязательно» — don't have to."
   }
  ],
  "homework": "Ты — новенькая в команде Мстителей, и Ник Фьюри просит тебя написать «Правила для новичков». Напиши 8 предложений: 2 с can / can't (что ты умеешь как супергерой и чего не умеешь), 1 с could / couldn't (что ты умела или не умела в детстве), 2 с should / shouldn't (советы новичкам, например про Халка), 2 с must / mustn't (строгие правила базы), 1 с don't have to (что делать не обязательно, например носить костюм по пятницам). Бонус: в конце напиши вежливую просьбу к Тони Старку с Could you...?"
 },
 {
  "n": 12,
  "level": "A2",
  "title": "Вопросы: порядок слов и вопросительные слова, вопрос к подлежащему",
  "emoji": "❓",
  "hook": "«Who ate my sandwich?!» — мог бы закричать Росс, и в этой фразе вся хитрость: вопрос к подлежащему обходится без did. Научишься задавать вопросы — сможешь болтать с кем угодно в путешествии и на собеседовании.",
  "rules": [
   "Формула: <b>(вопр. слово) + помощник + подлежащее + глагол</b>. Помощник — do/does/did, am/is/are, was/were, will, can: <i>Where do you live? What did she say? When will you come?</i>",
   "Вопросительные слова: <b>what</b> (что), <b>where</b> (где/куда), <b>when</b> (когда), <b>why</b> (почему), <b>who</b> (кто), <b>how</b> (как), <b>which</b> (который), <b>whose</b> (чей), <b>how much / how many</b> (сколько), <b>how often</b> (как часто).",
   "<b>Вопрос к подлежащему</b> (КТО сделал? ЧТО случилось?): <b>Who/What + глагол</b>, как в утверждении, БЕЗ do/does/did: <i>Who ate my pizza? Who lives here?</i> (lives с -s!)",
   "Сравни: <i>Who loves Ross?</i> (кто любит Росса) vs <i>Who does Ross love?</i> (кого любит Росс — Росс тут подлежащее).",
   "Предлог часто уходит в конец: <i>Where are you from? Who are you talking to?</i>",
   "В русском вопрос можно сделать одной интонацией («Ты живёшь здесь?»), а в английском без помощника никак: <i>Do you live here?</i>"
  ],
  "examples": [
   {
    "en": "Where are you from? — I'm from Kazan.",
    "ru": "Откуда ты? — Я из Казани."
   },
   {
    "en": "What did Wednesday find in the forest?",
    "ru": "Что Уэнсдей нашла в лесу?"
   },
   {
    "en": "Who took my sandwich?! — Joey did.",
    "ru": "Кто взял мой сэндвич?! — Джоуи."
   },
   {
    "en": "How often do you watch Netflix?",
    "ru": "Как часто ты смотришь Netflix?"
   },
   {
    "en": "Who does Loki trust? — Nobody!",
    "ru": "Кому доверяет Локи? — Никому!"
   }
  ],
  "trap": "Две главные ошибки: забыть помощника и, наоборот, добавить его в вопрос к подлежащему. ❌ Where you work? → ✅ Where do you work? ❌ Who did take my sandwich? → ✅ Who took my sandwich?",
  "exercises": [
   {
    "type": "choice",
    "q": "Where ___ you from?",
    "options": [
     "are",
     "do",
     "is"
    ],
    "answer": [
     "are"
    ],
    "explain": "Where are you from? — с from нужен глагол be, а для you это are."
   },
   {
    "type": "input",
    "q": "___ (как?) do you get to work? — By metro.",
    "options": [],
    "answer": [
     "How",
     "how"
    ],
    "explain": "«Как, каким способом» — how."
   },
   {
    "type": "choice",
    "q": "What ___ Joey usually eat for breakfast?",
    "options": [
     "does",
     "do",
     "is"
    ],
    "answer": [
     "does"
    ],
    "explain": "Present Simple, Joey = he, поэтому помощник does."
   },
   {
    "type": "input",
    "q": "___ (сколько) cups of coffee do you drink every day? — Too many!",
    "options": [],
    "answer": [
     "How many",
     "how many"
    ],
    "explain": "Cups можно посчитать, поэтому how many."
   },
   {
    "type": "order",
    "q": "Где ты была вчера вечером?",
    "options": [],
    "answer": [
     "Where were you yesterday evening?"
    ],
    "explain": "В прошлом с you — were, и он стоит перед подлежащим."
   },
   {
    "type": "choice",
    "q": "___ lives in the Upside Down? — The Demogorgon!",
    "options": [
     "Who",
     "Who do",
     "Who does"
    ],
    "answer": [
     "Who"
    ],
    "explain": "Вопрос к подлежащему (кто живёт?) — без do/does, глагол сразу с -s."
   },
   {
    "type": "input",
    "q": "What time ___ (the film / start)? — At 8.",
    "options": [],
    "answer": [
     "does the film start"
    ],
    "explain": "The film = it, помощник does перед подлежащим, а глагол без -s."
   },
   {
    "type": "choice",
    "q": "Who ___ lift Thor's hammer? — Only Thor... and Captain America!",
    "options": [
     "can",
     "does can",
     "can to"
    ],
    "answer": [
     "can"
    ],
    "explain": "Can сам работает помощником, do не нужен, а после can нет to."
   },
   {
    "type": "input",
    "q": "Who ___ (break) the window yesterday? — Not me, I promise!",
    "options": [],
    "answer": [
     "broke"
    ],
    "explain": "Вопрос к подлежащему в прошлом: без did, сразу вторая форма break — broke."
   },
   {
    "type": "choice",
    "q": "Who ___ Ross love? — Rachel, of course!",
    "options": [
     "does",
     "do",
     "loves"
    ],
    "answer": [
     "does"
    ],
    "explain": "Здесь Росс подлежащее (кого любит Росс?), поэтому нужен помощник does."
   },
   {
    "type": "input",
    "q": "Why ___ (Loki / steal) the Tesseract? — Because he wanted power!",
    "options": [],
    "answer": [
     "did Loki steal"
    ],
    "explain": "Loki — подлежащее, вопрос «почему» о прошлом (ответ: wanted), поэтому did + Loki + глагол в первой форме."
   },
   {
    "type": "order",
    "q": "Кто рассказал тебе о вечеринке Моники?",
    "options": [],
    "answer": [
     "Who told you about Monica's party?"
    ],
    "explain": "Вопрос к подлежащему (кто рассказал?) — без did, сразу told."
   }
  ],
  "homework": "Ты — журналистка, и у тебя 10 минут на интервью с Уэнсдей Аддамс (или с любым героем Marvel). Напиши 10 вопросов: используй минимум 5 разных вопросительных слов (where, why, how often, whose, how many...); 2 вопроса к подлежащему без do/does/did (Who helps you...? What happened...?); 1 вопрос в прошлом с did; 1 вопрос с will или going to о её планах; 1 вопрос с can. Потом напиши короткие ответы героини в её мрачном стиле. Бонус: один вопрос с предлогом в конце (Who are you afraid of?)."
 },
 {
  "n": 13,
  "level": "B1",
  "title": "Present Perfect: опыт (ever / never) и результат",
  "emoji": "🌍",
  "hook": "«Have you ever been to Paris?» — этот вопрос ты услышишь и на собеседовании, и в каждом втором сериале: так спрашивают про опыт за всю жизнь.",
  "rules": [
   "Формула: <b>have/has + 3-я форма глагола</b> (V3): I <b>have seen</b>, she <b>has eaten</b>. Коротко: I've, she's, haven't, hasn't.",
   "<b>Опыт за жизнь</b>, когда неважно, КОГДА это было: I <b>have been</b> to Rome. (Когда? Неважно — главное, что была!)",
   "<b>ever</b> = «когда-нибудь» (в вопросах): <i>Have you ever...?</i> <b>never</b> = «ни разу» — это уже отрицание, <u>not</u> не нужен: I have never tried sushi.",
   "<b>Результат сейчас</b>: I <b>have lost</b> my keys = ключей нет прямо сейчас. Важно не прошлое, а «что теперь».",
   "Вопрос: <b>Have/Has + кто + V3?</b> Ответ коротко: <i>Yes, I have / No, I haven't</i>.",
   "<b>been</b> vs <b>gone</b>: She has <b>been</b> to Paris (съездила и вернулась) / She has <b>gone</b> to Paris (уехала и сейчас там)."
  ],
  "examples": [
   {
    "en": "Have you ever watched Stranger Things in English?",
    "ru": "Ты когда-нибудь смотрела «Очень странные дела» на английском?"
   },
   {
    "en": "Wednesday has never smiled at a party.",
    "ru": "Уэнсдей ни разу не улыбнулась на вечеринке."
   },
   {
    "en": "Thor has lost his hammer again!",
    "ru": "Тор опять потерял свой молот! (и сейчас его нет)"
   },
   {
    "en": "I've been to Paris, but I haven't met Emily.",
    "ru": "Я была в Париже, но Эмили не встречала."
   },
   {
    "en": "Loki has gone to another timeline.",
    "ru": "Локи ушёл в другую временную линию (и он всё ещё там)."
   }
  ],
  "trap": "В русском «я никогда не была» — прошедшее время, поэтому хочется сказать was. ❌ I never was in London. → ✅ I have never been to London. И не добавляй not к never: ❌ I haven't never seen it → ✅ I have never seen it.",
  "exercises": [
   {
    "type": "choice",
    "q": "I ___ seen all the Marvel films.",
    "options": [
     "have",
     "has",
     "am",
     "did"
    ],
    "answer": [
     "have"
    ],
    "explain": "С I, you, we, they — have + V3."
   },
   {
    "type": "input",
    "q": "Wednesday has never ___ (smile) at a school party.",
    "options": [],
    "answer": [
     "smiled"
    ],
    "explain": "После has нужна 3-я форма: smile → smiled."
   },
   {
    "type": "choice",
    "q": "___ you ever been to London?",
    "options": [
     "Have",
     "Has",
     "Did",
     "Are"
    ],
    "answer": [
     "Have"
    ],
    "explain": "been — 3-я форма, значит вопрос строится с Have (для you)."
   },
   {
    "type": "input",
    "q": "Thor has ___ (lose) his hammer again!",
    "options": [],
    "answer": [
     "lost"
    ],
    "explain": "lose — неправильный глагол: lose → lost → lost."
   },
   {
    "type": "choice",
    "q": "My sister ___ never tried sushi.",
    "options": [
     "has",
     "have",
     "is",
     "does"
    ],
    "answer": [
     "has"
    ],
    "explain": "С he/she/it (my sister = she) — has + V3."
   },
   {
    "type": "input",
    "q": "Has she ever ___ (drive) a car in the USA?",
    "options": [],
    "answer": [
     "driven"
    ],
    "explain": "drive — неправильный: drive → drove → driven, после has нужна 3-я форма."
   },
   {
    "type": "order",
    "q": "Ты когда-нибудь была в Нью-Йорке?",
    "options": [],
    "answer": [
     "Have you ever been to New York?"
    ],
    "explain": "Опыт за жизнь: Have + you + ever + been to."
   },
   {
    "type": "choice",
    "q": "Emily isn't here. She ___ to Paris — she lives there now.",
    "options": [
     "has been",
     "has gone",
     "have gone",
     "has go"
    ],
    "answer": [
     "has gone"
    ],
    "explain": "gone — уехала и сейчас там; been значило бы, что она уже вернулась."
   },
   {
    "type": "input",
    "q": "Hulk ___ (never / be) to a yoga class.",
    "options": [],
    "answer": [
     "has never been",
     "'s never been"
    ],
    "explain": "Опыт «ни разу в жизни»: has + never + been (3-я форма от be)."
   },
   {
    "type": "choice",
    "q": "— Have you ever met a celebrity? — Yes, I ___.",
    "options": [
     "have",
     "did",
     "met",
     "am"
    ],
    "answer": [
     "have"
    ],
    "explain": "Вопрос с Have — и короткий ответ тоже с have."
   },
   {
    "type": "order",
    "q": "Мой босс ни разу не опоздал на работу.",
    "options": [],
    "answer": [
     "My boss has never been late for work.",
     "My boss has never been late to work."
    ],
    "explain": "Опыт за всё время: has never been late — never уже заменяет not."
   },
   {
    "type": "input",
    "q": "She's never ___ (fly) on a plane, so she's really nervous.",
    "options": [],
    "answer": [
     "flown"
    ],
    "explain": "Здесь She's = She has, а fly → flew → flown."
   }
  ],
  "homework": "Ты — участница шоу «Never Have I Ever» (как в сериале на Netflix). Напиши 8 предложений о себе: 4 предложения «I have never...» и 4 предложения «I have...» — про путешествия, еду, сериалы и работу (например: I have never been to Japan. I have watched Friends three times.). Затем задай 3 вопроса «Have you ever...?» Тору, Уэнсдей и Эмили и придумай их ответы (Yes, I have / No, I haven't + одна фраза от героя). Используй минимум 5 неправильных глаголов в 3-й форме (been, seen, eaten, flown, met...)."
 },
 {
  "n": 14,
  "level": "B1",
  "title": "Present Perfect vs Past Simple; just / already / yet; for / since",
  "emoji": "⏳",
  "hook": "«Have you watched it yet?» vs «I watched it last night» — один и тот же сериал, но разные времена, и без этой разницы в разговоре о спойлерах не обойтись.",
  "rules": [
   "<b>Past Simple</b> — есть точное время в прошлом: <i>yesterday, last week, in 2020, two days ago</i>: I <b>saw</b> it yesterday.",
   "<b>Present Perfect</b> — время не названо, важно «сейчас»: I <b>have seen</b> it (и могу обсуждать!). С вопросом <b>When...?</b> — только Past Simple: <i>When did you see it?</i>",
   "<b>just</b> (только что) и <b>already</b> (уже) — стоят между have и V3: I've <b>just</b> finished. She has <b>already</b> left.",
   "<b>yet</b> — в конце, только в вопросах и отрицаниях: <i>Have you finished <b>yet</b>?</i> (уже?) / <i>I haven't finished <b>yet</b>.</i> (ещё нет)",
   "<b>for</b> + отрезок времени (for two years, for a week); <b>since</b> + точка старта (since 2020, since Monday, since school).",
   "Русское «я знаю её 5 лет» (настоящее!) = <b>I have known</b> her for five years. Не I know!"
  ],
  "examples": [
   {
    "en": "I've just finished the last episode of Wednesday!",
    "ru": "Я только что досмотрела последнюю серию «Уэнсдей»!"
   },
   {
    "en": "Have you watched the new Marvel film yet? — No, not yet.",
    "ru": "Ты уже посмотрела новый фильм Marvel? — Нет, ещё нет."
   },
   {
    "en": "Loki has already changed the timeline three times.",
    "ru": "Локи уже трижды изменил временную линию."
   },
   {
    "en": "I saw Friends for the first time in 2019.",
    "ru": "Я впервые посмотрела «Друзей» в 2019 году. (точное время → Past Simple)"
   },
   {
    "en": "Emily has lived in Paris for two years.",
    "ru": "Эмили живёт в Париже два года."
   },
   {
    "en": "Steve Rogers has known Bucky since childhood.",
    "ru": "Стив Роджерс знает Баки с детства."
   }
  ],
  "trap": "Русские говорят «живу здесь 5 лет» в настоящем времени — и переносят это в английский. ❌ I live in Moscow for five years. → ✅ I have lived in Moscow for five years. И обратная ошибка: ❌ I have seen it yesterday → ✅ I saw it yesterday (с yesterday — только Past Simple).",
  "exercises": [
   {
    "type": "choice",
    "q": "I ___ Stranger Things last week.",
    "options": [
     "watched",
     "have watched",
     "have watch",
     "watching"
    ],
    "answer": [
     "watched"
    ],
    "explain": "last week — точное время в прошлом, значит Past Simple."
   },
   {
    "type": "input",
    "q": "We have been friends ___ (for / since) 2019.",
    "options": [],
    "answer": [
     "since"
    ],
    "explain": "2019 — точка старта, поэтому since."
   },
   {
    "type": "choice",
    "q": "Have you finished your report ___?",
    "options": [
     "yet",
     "just",
     "since",
     "ago"
    ],
    "answer": [
     "yet"
    ],
    "explain": "yet ставится в конце вопроса и значит «уже?»."
   },
   {
    "type": "input",
    "q": "Thor ___ (be) in New York since Monday.",
    "options": [],
    "answer": [
     "has been",
     "'s been"
    ],
    "explain": "since + точка старта — значит Present Perfect: has been."
   },
   {
    "type": "choice",
    "q": "When ___ the last episode of Loki?",
    "options": [
     "did you watch",
     "have you watched",
     "you watched",
     "have you watch"
    ],
    "answer": [
     "did you watch"
    ],
    "explain": "С When спрашивают о точном времени — только Past Simple."
   },
   {
    "type": "order",
    "q": "Я только что съела весь торт.",
    "options": [],
    "answer": [
     "I have just eaten the whole cake."
    ],
    "explain": "just стоит между have и 3-й формой глагола."
   },
   {
    "type": "input",
    "q": "It's only Monday, but Tony has ___ (already / build) two new suits!",
    "options": [],
    "answer": [
     "already built"
    ],
    "explain": "already идёт перед V3, а build → built → built."
   },
   {
    "type": "choice",
    "q": "Emily has worked in Paris ___ two years.",
    "options": [
     "for",
     "since",
     "ago",
     "from"
    ],
    "answer": [
     "for"
    ],
    "explain": "two years — отрезок времени, поэтому for."
   },
   {
    "type": "input",
    "q": "I ___ (meet) Chris Hemsworth two years ago!",
    "options": [],
    "answer": [
     "met"
    ],
    "explain": "ago — точное время в прошлом, значит Past Simple: meet → met."
   },
   {
    "type": "choice",
    "q": "— Has Wednesday called you yet? — No, she ___.",
    "options": [
     "hasn't called yet",
     "hasn't call yet",
     "doesn't call yet",
     "hasn't called already"
    ],
    "answer": [
     "hasn't called yet"
    ],
    "explain": "В отрицании «ещё не» — hasn't + V3 + yet; already в отрицаниях не используют."
   },
   {
    "type": "order",
    "q": "Как долго ты знаешь Монику?",
    "options": [],
    "answer": [
     "How long have you known Monica?"
    ],
    "explain": "«Как долго ты знаешь» = How long have you known — Present Perfect, а не know."
   },
   {
    "type": "input",
    "q": "Ross and Rachel ___ (know) each other since school.",
    "options": [],
    "answer": [
     "have known",
     "'ve known"
    ],
    "explain": "Знают с тех пор и до сих пор + since — значит have known, а не know."
   }
  ],
  "homework": "Ты — Эмили в Париже. Напиши пост для Instagram (8–10 предложений) о своём первом годе в Париже. Обязательно: 3 предложения в Past Simple с точным временем (last month, in May, two weeks ago — например: I met Gabriel in a café last spring.), 3 предложения с just / already / yet (I have already learned ten French words. I haven't found a good croissant yet.), 2 предложения с for и 2 с since (I have lived here since..., I have known Mindy for...). В конце задай подписчикам вопрос «Have you ever...?»."
 },
 {
  "n": 15,
  "level": "B1",
  "title": "Past Continuous vs Past Simple: рассказываем истории",
  "emoji": "🎬",
  "hook": "Любая история из сериала начинается так: «I was walking home when suddenly...» — это и есть Past Continuous плюс Past Simple, главный дуэт для рассказов.",
  "rules": [
   "<b>Past Continuous</b>: <b>was/were + глагол-ing</b> — действие было в процессе в какой-то момент прошлого: At 9 pm I <b>was watching</b> Wednesday.",
   "<b>was</b> — с I / he / she / it; <b>were</b> — с you / we / they. Вопрос: <i>Were you sleeping?</i> Отрицание: <i>He wasn't listening.</i>",
   "Короткое действие (Past Simple) прерывает длинное фоновое (Past Continuous): I <b>was sleeping</b> when the phone <b>rang</b>.",
   "<b>while</b> + длинное действие (Past Continuous): <i>While Thor was sleeping, Loki stole the hammer.</i> <b>when</b> чаще стоит перед коротким действием (Past Simple), но может стоять и перед фоном: <i>When I was watching TV, the phone rang.</i>",
   "Два длинных действия одновременно — оба в Past Continuous: <i>While I was cooking, he was watching TV.</i>",
   "Глаголы состояния (<b>know, want, like, love, understand</b>) не ставят в -ing: I <b>knew</b>, а не I was knowing."
  ],
  "examples": [
   {
    "en": "I was watching Stranger Things when the lights went out.",
    "ru": "Я смотрела «Очень странные дела», когда погас свет."
   },
   {
    "en": "While Thor was sleeping, Loki stole his hammer.",
    "ru": "Пока Тор спал, Локи украл его молот."
   },
   {
    "en": "What were you doing at ten last night?",
    "ru": "Что ты делала вчера в десять вечера?"
   },
   {
    "en": "Emily was taking a selfie when she dropped her phone.",
    "ru": "Эмили делала селфи и вдруг уронила телефон."
   },
   {
    "en": "We weren't listening, so we didn't understand the plan.",
    "ru": "Мы не слушали, поэтому не поняли план."
   }
  ],
  "trap": "В русском и процесс, и короткое действие звучат одинаково («смотрела», «звонил»), поэтому их путают. ❌ When I watched TV, the phone was ringing. → ✅ When I was watching TV, the phone rang. Фон — was/were + -ing, а внезапное событие — Past Simple.",
  "exercises": [
   {
    "type": "choice",
    "q": "At 9 pm yesterday I ___ Loki.",
    "options": [
     "was watching",
     "were watching",
     "am watching",
     "watching"
    ],
    "answer": [
     "was watching"
    ],
    "explain": "Процесс в конкретный момент прошлого + I — значит was + -ing."
   },
   {
    "type": "input",
    "q": "You ___ (was / were) sleeping when I called.",
    "options": [],
    "answer": [
     "were"
    ],
    "explain": "С you всегда were, даже если «ты» одна."
   },
   {
    "type": "choice",
    "q": "I was sleeping when the phone ___.",
    "options": [
     "rang",
     "ringed",
     "rings",
     "was ring"
    ],
    "answer": [
     "rang"
    ],
    "explain": "Короткое действие прерывает сон — Past Simple, а ring неправильный: ring → rang."
   },
   {
    "type": "input",
    "q": "At that moment Thor ___ (sleep), so he didn't see Loki with the hammer.",
    "options": [],
    "answer": [
     "was sleeping"
    ],
    "explain": "«В тот момент» был процесс — значит Past Continuous: was sleeping."
   },
   {
    "type": "order",
    "q": "Что ты делала вчера в восемь?",
    "options": [],
    "answer": [
     "What were you doing at eight yesterday?",
     "What were you doing yesterday at eight?"
    ],
    "explain": "Процесс в конкретный момент: What + were + you + doing."
   },
   {
    "type": "choice",
    "q": "While I ___ dinner, my cat ate my sandwich.",
    "options": [
     "was cooking",
     "were cooking",
     "am cooking",
     "cooking"
    ],
    "answer": [
     "was cooking"
    ],
    "explain": "После while — длинное действие, а с I используется was."
   },
   {
    "type": "input",
    "q": "Emily was taking a selfie when she ___ (drop) her phone into the river.",
    "options": [],
    "answer": [
     "dropped"
    ],
    "explain": "Внезапное короткое действие — Past Simple: drop → dropped (удваиваем p)."
   },
   {
    "type": "choice",
    "q": "I ___ the answer, but I was too shy to say it.",
    "options": [
     "knew",
     "was knowing",
     "were knowing",
     "know"
    ],
    "answer": [
     "knew"
    ],
    "explain": "know — глагол состояния, его не ставят в -ing."
   },
   {
    "type": "input",
    "q": "___ (you / sleep) when I called you last night?",
    "options": [],
    "answer": [
     "Were you sleeping",
     "were you sleeping"
    ],
    "explain": "Вопрос в Past Continuous: Were + you + -ing."
   },
   {
    "type": "order",
    "q": "Тор писал мне, пока я была за рулём.",
    "options": [],
    "answer": [
     "Thor was texting me while I was driving.",
     "While I was driving Thor was texting me."
    ],
    "explain": "Два длинных действия одновременно — оба в Past Continuous, связка while."
   },
   {
    "type": "choice",
    "q": "The lights ___ out while we were watching Stranger Things.",
    "options": [
     "went",
     "have gone",
     "gone",
     "go"
    ],
    "answer": [
     "went"
    ],
    "explain": "Внезапное событие в прошлом — Past Simple: go → went; Present Perfect с прошлой ситуацией не подходит."
   },
   {
    "type": "input",
    "q": "Ross ___ (not / listen) at that moment — he was looking at his phone.",
    "options": [],
    "answer": [
     "wasn't listening",
     "was not listening"
    ],
    "explain": "Процесс в тот момент + отрицание — wasn't + -ing."
   }
  ],
  "homework": "Ты — детектив из «Очень странных дел». Вчера в 21:00 в Хокинсе внезапно погас свет во всём городе. 1) Опроси 4 героев (Одиннадцать, Дастин, Стив, Робин): напиши 4 вопроса «What were you doing when the lights went out?» и придумай их ответы (I was eating waffles when...). 2) Напиши мини-историю из 6–8 предложений: что происходило в тот вечер (Past Continuous) и что вдруг случилось (Past Simple). Используй when минимум 2 раза и while минимум 2 раза, и хотя бы одно отрицание (wasn't / weren't + -ing)."
 },
 {
  "n": 16,
  "level": "B1",
  "title": "Исчисляемые / неисчисляемые; a few / a little / few / little",
  "emoji": "🧳",
  "hook": "В путешествии ты постоянно просишь «a little milk», «a few minutes» или «some information» — и если перепутать, бариста в Париже точно удивится.",
  "rules": [
   "<b>Исчисляемые</b> — можно посчитать, есть мн. число: a hero → two heroes. <b>Неисчисляемые</b> — без мн. числа и без a/an: <i>water, money, time, advice, information, news, luggage, furniture, homework</i>.",
   "Ловушка: <b>advice, information, news, money, hair</b> — в русском бывают во мн. числе («советы», «новости», «деньги», «волосы»), а в английском — неисчисляемые, и глагол в ед. числе: <i>The news <b>is</b> good. Money <b>doesn't</b> grow on trees.</i>",
   "<b>a few</b> + исчисляемые мн. ч. = несколько (и это нормально): a few friends. <b>a little</b> + неисчисляемые = немного: a little time.",
   "<b>few / little</b> без a = мало, почти нет (грустно): few friends, little time. Часто с very: <i>very few, very little</i>.",
   "Посчитать неисчисляемое помогают «упаковки»: <b>a piece of</b> advice, <b>a cup of</b> coffee, <b>a bottle of</b> water, two <b>cups</b> of tea."
  ],
  "examples": [
   {
    "en": "I have a few friends in London, so the trip will be fun.",
    "ru": "У меня есть несколько друзей в Лондоне, так что поездка будет весёлой."
   },
   {
    "en": "Can I have a little milk in my coffee?",
    "ru": "Можно мне немного молока в кофе?"
   },
   {
    "en": "Loki has little patience and very few friends.",
    "ru": "У Локи мало терпения и очень мало друзей."
   },
   {
    "en": "Can you give me a piece of advice?",
    "ru": "Можешь дать мне совет?"
   },
   {
    "en": "The news is shocking: Ross and Rachel are on a break!",
    "ru": "Новость шокирующая: Росс и Рейчел взяли перерыв!"
   },
   {
    "en": "Wednesday drinks three cups of black coffee every morning.",
    "ru": "Уэнсдей каждое утро пьёт три чашки чёрного кофе."
   }
  ],
  "trap": "В русском «советы» и «новости» во множественном числе, вот и хочется добавить -s. ❌ She gave me many advices. → ✅ She gave me a lot of advice / some advice. И так же: ❌ The news are good → ✅ The news is good.",
  "exercises": [
   {
    "type": "choice",
    "q": "Can I have ___ water, please?",
    "options": [
     "a little",
     "a few",
     "many",
     "an"
    ],
    "answer": [
     "a little"
    ],
    "explain": "water неисчисляемое, поэтому a little, а не a few, many или an."
   },
   {
    "type": "input",
    "q": "I need some ___ (information / informations) about the hotel.",
    "options": [],
    "answer": [
     "information"
    ],
    "explain": "information неисчисляемое, у него нет формы с -s."
   },
   {
    "type": "choice",
    "q": "I have ___ friends in Paris, so I'm not alone there.",
    "options": [
     "a few",
     "a little",
     "much",
     "little"
    ],
    "answer": [
     "a few"
    ],
    "explain": "friends исчисляемое во мн. ч., и смысл позитивный — a few."
   },
   {
    "type": "input",
    "q": "Money ___ (not / grow) on trees!",
    "options": [],
    "answer": [
     "doesn't grow",
     "does not grow"
    ],
    "explain": "money неисчисляемое, глагол как с it — doesn't."
   },
   {
    "type": "choice",
    "q": "She gave me some great ___.",
    "options": [
     "advice",
     "advices",
     "an advice",
     "advise"
    ],
    "answer": [
     "advice"
    ],
    "explain": "advice неисчисляемое: без -s и без an; advise — это глагол."
   },
   {
    "type": "order",
    "q": "У меня есть немного времени перед встречей.",
    "options": [],
    "answer": [
     "I have a little time before the meeting.",
     "Before the meeting I have a little time."
    ],
    "explain": "time неисчисляемое, а «немного, но есть» — a little."
   },
   {
    "type": "input",
    "q": "Loki has very ___ (few / little) friends — nobody trusts him.",
    "options": [],
    "answer": [
     "few"
    ],
    "explain": "friends исчисляемое, поэтому few (а very few = очень мало)."
   },
   {
    "type": "choice",
    "q": "How ___ luggage do you have?",
    "options": [
     "much",
     "many",
     "few",
     "a few"
    ],
    "answer": [
     "much"
    ],
    "explain": "luggage неисчисляемое, поэтому How much."
   },
   {
    "type": "input",
    "q": "Wednesday drank three ___ (cup) of black coffee this morning.",
    "options": [],
    "answer": [
     "cups"
    ],
    "explain": "Кофе не считаем, а вот чашки считаем: three cups."
   },
   {
    "type": "choice",
    "q": "The film was boring, and very ___ people came to see it.",
    "options": [
     "few",
     "a few",
     "little",
     "a little"
    ],
    "answer": [
     "few"
    ],
    "explain": "people исчисляемое, смысл «почти никто», а very a few не бывает — значит few."
   },
   {
    "type": "order",
    "q": "Можешь дать мне один совет?",
    "options": [],
    "answer": [
     "Can you give me a piece of advice?"
    ],
    "explain": "Один совет нельзя сказать an advice — нужно a piece of advice."
   },
   {
    "type": "input",
    "q": "Don't worry, we still have ___ (little / a little) time — let's grab a coffee before the train!",
    "options": [],
    "answer": [
     "a little"
    ],
    "explain": "Время ещё есть и хватает на кофе — позитивное «немного», значит a little."
   }
  ],
  "homework": "Ты собираешь чемодан в путешествие с Мстителями в Нью-Йорк. Напиши 8–10 предложений: что ты берёшь и сколько. Обязательно используй a few, a little, few и little (каждое хотя бы один раз), минимум 3 неисчисляемых слова (luggage, money, advice, information, food, coffee) и 2 «счётных» выражения (a bottle of..., a piece of..., two cups of...). Пример: I'm taking a few T-shirts and a little money, because Tony pays for everything. В конце напиши, какой совет тебе дал Капитан Америка: Captain America gave me a piece of advice: ..."
 },
 {
  "n": 17,
  "level": "B1",
  "title": "First Conditional и придаточные времени (when / as soon as / unless)",
  "emoji": "🔮",
  "hook": "Каждый злодей в Marvel говорит что-то вроде «If you touch her, I will destroy you». Это First Conditional, реальное «если… то…» про будущее, и в сериалах он звучит постоянно.",
  "rules": [
   "Формула: <b>If + Present Simple, will + глагол</b>. <i>If it rains, I will stay home.</i> = Если пойдёт дождь, я останусь дома.",
   "Главная фишка: после <b>if / when / as soon as / before / after / until / unless</b> НЕ ставим will, хотя по-русски там будущее («если <u>пойдёт</u>», «когда <u>закончу</u>»). Пишем Present Simple: <i>When I finish, I'll call you.</i>",
   "<b>if</b> = если (может случиться, а может и нет). <b>when</b> = когда (точно случится). <b>as soon as</b> = как только. <b>until</b> = пока не / до тех пор, пока.",
   "<b>unless</b> = <b>if … not</b> (если не). <i>Unless you hurry = If you don't hurry.</i> После unless глагол стоит в утвердительной форме, отрицание уже внутри слова.",
   "Части можно менять местами. Запятая нужна, только когда if стоит первым: <i>If you come, I'll be happy. / I'll be happy if you come.</i>"
  ],
  "examples": [
   {
    "en": "If Wednesday finds the monster, she won't tell anyone.",
    "ru": "Если Уэнсдэй найдёт монстра, она никому не скажет."
   },
   {
    "en": "I'll text you as soon as I land in Paris.",
    "ru": "Я напишу тебе, как только приземлюсь в Париже."
   },
   {
    "en": "When Thor comes back, Loki will be in big trouble.",
    "ru": "Когда Тор вернётся, у Локи будут большие проблемы."
   },
   {
    "en": "Unless you watch Friends in English, you won't get the jokes.",
    "ru": "Если не будешь смотреть «Друзей» на английском, не поймёшь шуток."
   },
   {
    "en": "We won't start the next episode until you come home.",
    "ru": "Мы не начнём следующую серию, пока ты не придёшь домой."
   }
  ],
  "trap": "Русское «если ты придёшь» тянет поставить will и после if. ❌ If you will come, I will be happy. → ✅ If you come, I will be happy. То же с when: ❌ When I will finish, I'll call you. → ✅ When I finish, I'll call you.",
  "exercises": [
   {
    "type": "choice",
    "q": "If it ___ tomorrow, we will stay home and watch Stranger Things.",
    "options": [
     "rains",
     "will rain",
     "rained"
    ],
    "answer": [
     "rains"
    ],
    "explain": "После if про будущее ставим Present Simple, а will идёт только во вторую часть."
   },
   {
    "type": "input",
    "q": "\"If anyone ___ (eat) my sandwich again, I will go crazy!\" says Ross.",
    "options": [],
    "answer": [
     "eats"
    ],
    "explain": "После if нужен Present Simple. Anyone согласуется как he / she, поэтому добавляем -s: eats."
   },
   {
    "type": "choice",
    "q": "If Loki lies again, Thor ___ him.",
    "options": [
     "won't trust",
     "don't trust",
     "not trust"
    ],
    "answer": [
     "won't trust"
    ],
    "explain": "Во второй части First Conditional стоит will / won't + глагол."
   },
   {
    "type": "input",
    "q": "When I ___ (finish) this episode, I will go to bed. I promise!",
    "options": [],
    "answer": [
     "finish",
     "have finished"
    ],
    "explain": "После when про будущее ставим Present Simple (finish), will туда не ставим. Вариант have finished тоже правильный: «когда уже закончу»."
   },
   {
    "type": "order",
    "q": "Я позвоню тебе, как только приземлюсь.",
    "options": [],
    "answer": [
     "I will call you as soon as I land.",
     "As soon as I land I will call you."
    ],
    "explain": "После as soon as идёт Present Simple (I land), а will стоит в главной части."
   },
   {
    "type": "choice",
    "q": "Unless you ___, we will miss the plane!",
    "options": [
     "hurry",
     "don't hurry",
     "will hurry"
    ],
    "answer": [
     "hurry"
    ],
    "explain": "В unless уже есть «не», поэтому глагол утвердительный и без will."
   },
   {
    "type": "input",
    "q": "We won't start the next episode of Wednesday until Kate ___ (come) home.",
    "options": [],
    "answer": [
     "comes",
     "has come"
    ],
    "explain": "После until ставим Present Simple, Kate = she, поэтому comes. Has come тоже возможно, но comes звучит естественнее."
   },
   {
    "type": "choice",
    "q": "If Emily ___ French, she won't understand her boss.",
    "options": [
     "doesn't learn",
     "won't learn",
     "don't learn"
    ],
    "answer": [
     "doesn't learn"
    ],
    "explain": "После if отрицание строим через doesn't (она), will здесь нельзя."
   },
   {
    "type": "input",
    "q": "Thanos will win unless the Avengers ___ (stop) him.",
    "options": [],
    "answer": [
     "stop"
    ],
    "explain": "После unless идёт утвердительный Present Simple, Avengers = they, поэтому без -s."
   },
   {
    "type": "order",
    "q": "Ты не поймёшь шутку, если не посмотришь «Друзей».",
    "options": [],
    "answer": [
     "You won't understand the joke unless you watch Friends.",
     "Unless you watch Friends you won't understand the joke."
    ],
    "explain": "Unless = «если не», поэтому после него глагол стоит без отрицания: unless you watch."
   },
   {
    "type": "choice",
    "q": "___ the boss be angry if I come late?",
    "options": [
     "Will",
     "Does",
     "Is"
    ],
    "answer": [
     "Will"
    ],
    "explain": "Вопрос к главной части строим с will: Will + подлежащее + глагол."
   },
   {
    "type": "input",
    "q": "Tomorrow at the comedy show I ___ (not / understand) a single joke unless you translate them for me.",
    "options": [],
    "answer": [
     "won't understand",
     "will not understand",
     "am not going to understand"
    ],
    "explain": "В главной части про будущее нужен will not / won't + глагол, а после unless идёт Present Simple (translate)."
   }
  ],
  "homework": "Ты — Эмили из «Эмили в Париже», и завтра у тебя огромная презентация для капризного клиента. Напиши 7–8 предложений о том, что будет завтра и «что будет, если…». Нужно минимум 3 предложения с if, 2 с when или as soon as, 1 с unless и 1 с until. Например: If the client hates my idea, I will cry in a café. Проверь себя: после if / when / unless / until не должно быть will! Бонус: напиши одну угрозу в стиле Marvel, например «If you touch my croissant, I will…»."
 },
 {
  "n": 18,
  "level": "B1",
  "title": "Герундий или инфинитив: enjoy doing / want to do",
  "emoji": "🎭",
  "hook": "«I enjoy watching you suffer», — вполне мог бы сказать Локи. Но точно не «enjoy to watch»: если ты чувствуешь эту разницу, твой английский сразу звучит естественно.",
  "rules": [
   "После <b>enjoy, finish, mind, avoid, keep, miss, can't stand</b> идёт глагол + <b>-ing</b>: <i>I enjoy watching Loki.</i> <i>Would you mind closing the door?</i>",
   "После <b>want, would like, decide, plan, hope, need, learn, forget, promise, agree</b> идёт <b>to + глагол</b>: <i>I want to visit London.</i> <i>She decided to stay.</i>",
   "После <b>предлога</b> (at, in, about, of, for, without) всегда ставим <b>-ing</b>: <i>good at cooking, thanks for helping, thinking about moving.</i>",
   "«Чтобы» = <b>to + глагол</b>: <i>I watch series <b>to learn</b> English.</i> (Не for learn!)",
   "После <b>like / love / hate</b> можно и -ing, и to: <i>I love watching / to watch cartoons.</i> Но <b>would like / would love</b> — только to. <b>stop doing</b> = перестать делать, <b>stop to do</b> = остановиться, чтобы что-то сделать."
  ],
  "examples": [
   {
    "en": "Wednesday enjoys scaring her classmates.",
    "ru": "Уэнсдэй нравится пугать одноклассников."
   },
   {
    "en": "Emily wants to stay in Paris forever.",
    "ru": "Эмили хочет остаться в Париже навсегда."
   },
   {
    "en": "Joey can't stand sharing his food.",
    "ru": "Джоуи терпеть не может делиться едой."
   },
   {
    "en": "Loki decided to change his destiny.",
    "ru": "Локи решил изменить свою судьбу."
   },
   {
    "en": "I'm really good at guessing plot twists.",
    "ru": "Я отлично угадываю сюжетные повороты."
   },
   {
    "en": "I watch series without subtitles to train my ear.",
    "ru": "Я смотрю сериалы без субтитров, чтобы тренировать слух."
   }
  ],
  "trap": "В русском после любого глагола идёт инфинитив («люблю смотреть», «хочу смотреть», «закончила смотреть»), поэтому хочется везде ставить to. ❌ I enjoy to watch Netflix. → ✅ I enjoy watching Netflix. ❌ I finished to work. → ✅ I finished working.",
  "exercises": [
   {
    "type": "choice",
    "q": "Joey enjoys ___ pizza more than anything in the world.",
    "options": [
     "eating",
     "to eat",
     "eat"
    ],
    "answer": [
     "eating"
    ],
    "explain": "После enjoy всегда идёт глагол с -ing."
   },
   {
    "type": "input",
    "q": "Emily wants ___ (stay) in Paris for one more year.",
    "options": [],
    "answer": [
     "to stay"
    ],
    "explain": "После want идёт to + глагол."
   },
   {
    "type": "choice",
    "q": "Loki decided ___ the timeline.",
    "options": [
     "to change",
     "changing",
     "change"
    ],
    "answer": [
     "to change"
    ],
    "explain": "После decide нужен инфинитив с to."
   },
   {
    "type": "input",
    "q": "Have you finished ___ (watch) Stranger Things yet?",
    "options": [],
    "answer": [
     "watching"
    ],
    "explain": "После finish идёт -ing: закончить что-то делать = finish doing."
   },
   {
    "type": "order",
    "q": "Я хочу посмотреть «Локи» без субтитров.",
    "options": [],
    "answer": [
     "I want to watch Loki without subtitles."
    ],
    "explain": "После want ставим to + глагол: want to watch."
   },
   {
    "type": "choice",
    "q": "Wednesday is really good at ___ secrets.",
    "options": [
     "finding",
     "to find",
     "find"
    ],
    "answer": [
     "finding"
    ],
    "explain": "После предлога at глагол всегда с -ing."
   },
   {
    "type": "input",
    "q": "Would you mind ___ (open) the window? It's so hot in this office!",
    "options": [],
    "answer": [
     "opening"
    ],
    "explain": "После mind идёт -ing. Would you mind…? — вежливая просьба «не могли бы вы…»."
   },
   {
    "type": "choice",
    "q": "Rachel promised ___ late again.",
    "options": [
     "not to be",
     "not being",
     "to not being"
    ],
    "answer": [
     "not to be"
    ],
    "explain": "После promise идёт to + глагол, а not ставим перед to."
   },
   {
    "type": "input",
    "q": "I'm thinking about ___ (go) to London next summer.",
    "options": [],
    "answer": [
     "going"
    ],
    "explain": "После предлога about глагол стоит с -ing."
   },
   {
    "type": "order",
    "q": "Я смотрю сериалы, чтобы улучшить свой английский.",
    "options": [],
    "answer": [
     "I watch series to improve my English."
    ],
    "explain": "«Чтобы» по-английски передаём через to + глагол."
   },
   {
    "type": "choice",
    "q": "Eleven kept ___ about Mike, so Hopper decided ___ some new rules.",
    "options": [
     "talking / to make",
     "to talk / making",
     "talking / making",
     "to talk / to make"
    ],
    "answer": [
     "talking / to make"
    ],
    "explain": "После keep идёт -ing, а после decide идёт to + глагол."
   },
   {
    "type": "input",
    "q": "I forgot ___ (buy) milk, so there's no milk for my coffee this morning.",
    "options": [],
    "answer": [
     "to buy"
    ],
    "explain": "Забыть что-то сделать (и не сделать) = forget to do. Forget doing значит «забыть, как уже что-то делал»: I'll never forget meeting you."
   }
  ],
  "homework": "Составь анкету для свидания вслепую от лица Уэнсдэй Аддамс (или от своего лица). Напиши 8 предложений. В 4 предложениях расскажи, что она любит, ненавидит и чего избегает: enjoy, hate, can't stand, avoid + -ing (например: I can't stand smiling). Ещё в 4 предложениях опиши её планы и желания: want, decide, hope, plan + to. Бонус: добавь одно предложение с «чтобы» (to + глагол) и одно с предлогом + -ing (good at…, afraid of…)."
 },
 {
  "n": 19,
  "level": "B1",
  "title": "Second Conditional: If I were... I would...",
  "emoji": "🦸‍♀️",
  "hook": "«If I were you, I would…» звучит в каждом сериале, когда подруга даёт совет. А ещё это главная фраза для мечтаний вроде «если бы у меня был молот Тора…».",
  "rules": [
   "Формула: <b>If + Past Simple, would + глагол</b>. <i>If I had a million, I would travel the world.</i> Это нереальная или воображаемая ситуация сейчас или в будущем.",
   "Прошедшая форма здесь не про прошлое! Это наше «если бы». <i>If I knew = если бы я знала (сейчас).</i>",
   "С to be пишем <b>were</b> для всех лиц: <i>If I were / she were / he were…</i> (в разговоре иногда говорят was, но were — правильнее). Фраза <b>If I were you…</b> = «на твоём месте…» — готовый шаблон совета, тут только were.",
   "<b>would</b> никогда не ставим в часть с if! Только во вторую часть. <b>could</b> = мог бы: <i>If I had wings, I could fly.</i>",
   "First или Second? <i>If I win</i> (вполне реально) → will. <i>If I won</i> (мечта, маловероятно) → would."
  ],
  "examples": [
   {
    "en": "If I were Wednesday, I would never smile.",
    "ru": "Если бы я была Уэнсдэй, я бы никогда не улыбалась."
   },
   {
    "en": "If I had Thor's hammer, I would fly to work.",
    "ru": "Если бы у меня был молот Тора, я бы летала на работу."
   },
   {
    "en": "If Joey had more money, he would buy a giant TV.",
    "ru": "Если бы у Джоуи было больше денег, он бы купил огромный телевизор."
   },
   {
    "en": "If I were you, I would watch Loki in English.",
    "ru": "На твоём месте я бы смотрела «Локи» на английском."
   },
   {
    "en": "If Emily spoke French, her life would be much easier.",
    "ru": "Если бы Эмили говорила по-французски, её жизнь была бы гораздо проще."
   },
   {
    "en": "What would you do if you met Spider-Man?",
    "ru": "Что бы ты сделала, если бы встретила Человека-паука?"
   }
  ],
  "trap": "В русском «бы» стоит в обеих частях («если бы у меня БЫЛИ деньги, я БЫ купила»), поэтому хочется поставить would дважды. ❌ If I would have money, I would buy a car. → ✅ If I had money, I would buy a car.",
  "exercises": [
   {
    "type": "choice",
    "q": "If I ___ a superpower, I would choose invisibility.",
    "options": [
     "had",
     "have",
     "would have"
    ],
    "answer": [
     "had"
    ],
    "explain": "В части с if ставим Past Simple, а would там не бывает."
   },
   {
    "type": "input",
    "q": "If I ___ (be) you, I would call him right now.",
    "options": [],
    "answer": [
     "were"
    ],
    "explain": "В выражении If I were you ставим were даже с I."
   },
   {
    "type": "choice",
    "q": "If Loki were honest, Thor ___ him.",
    "options": [
     "would trust",
     "will trust",
     "trusts"
    ],
    "answer": [
     "would trust"
    ],
    "explain": "Ситуация нереальная (Локи честный?!), поэтому во второй части would + глагол."
   },
   {
    "type": "input",
    "q": "If Joey ___ (have) a bigger fridge, he would fill it with pizza.",
    "options": [],
    "answer": [
     "had"
    ],
    "explain": "После if во Second Conditional ставим Past Simple: have → had."
   },
   {
    "type": "order",
    "q": "Если бы я была тобой, я бы ему позвонила.",
    "options": [],
    "answer": [
     "I would call him if I were you.",
     "If I were you I would call him."
    ],
    "explain": "would идёт в главную часть, а в части с if стоит were."
   },
   {
    "type": "choice",
    "q": "What would you do if you ___ Spider-Man on the subway?",
    "options": [
     "met",
     "meet",
     "would meet"
    ],
    "answer": [
     "met"
    ],
    "explain": "Встреча воображаемая, поэтому после if нужен Past Simple: meet → met."
   },
   {
    "type": "input",
    "q": "If I lived in Paris, I ___ (eat) croissants every single day.",
    "options": [],
    "answer": [
     "would eat",
     "'d eat",
     "could eat"
    ],
    "explain": "Во второй части нереального условия ставим would + глагол (could eat = могла бы есть — тоже правильно)."
   },
   {
    "type": "choice",
    "q": "I know it's just a dream, but if I ___ the lottery, I would buy a house in Bali.",
    "options": [
     "won",
     "win",
     "will win"
    ],
    "answer": [
     "won"
    ],
    "explain": "Во второй части стоит would, значит это Second Conditional, и после if нужен Past Simple."
   },
   {
    "type": "input",
    "q": "If Eleven ___ (not / have) her powers, she would be a normal girl.",
    "options": [],
    "answer": [
     "didn't have",
     "did not have"
    ],
    "explain": "Отрицание в части с if строим через didn't + глагол."
   },
   {
    "type": "order",
    "q": "Я бы путешествовала больше, если бы у меня было больше денег.",
    "options": [],
    "answer": [
     "I would travel more if I had more money.",
     "If I had more money I would travel more."
    ],
    "explain": "Русское «было бы» после if превращается в had, а «путешествовала бы» становится would travel."
   },
   {
    "type": "choice",
    "q": "If I had wings, I ___ fly to work every morning.",
    "options": [
     "could",
     "can",
     "will can"
    ],
    "answer": [
     "could"
    ],
    "explain": "«Мог бы» в нереальном условии передаём через could, а can и will can здесь не подходят."
   },
   {
    "type": "input",
    "q": "Wednesday ___ (not / smile) even if she won a million dollars.",
    "options": [],
    "answer": [
     "wouldn't smile",
     "would not smile"
    ],
    "explain": "Главная часть нереального условия строится с would not / wouldn't + глагол."
   }
  ],
  "homework": "Задание «Супергероиня на один день». Выбери героя Marvel и представь, что сегодня ты — это он или она. Напиши 8 предложений. Нужно минимум 2 предложения с If I were…, 1 с could (что ты могла бы делать), 1 отрицание с wouldn't и 1 вопрос What would you do if…? к подруге. Например: If I were Scarlet Witch, I would change my boss's mood with magic. В конце дай подруге 2 совета на тему работы или путешествий, начиная с If I were you, I would… Проверь, что в части с if нигде нет would!"
 },
 {
  "n": 20,
  "level": "B1",
  "title": "Страдательный залог: Present / Past Simple Passive",
  "emoji": "🎬",
  "hook": "«Wednesday was filmed in Romania», «Friends is watched all over the world»: все факты о сериалах в интервью и на IMDb написаны пассивом, так что без него никуда.",
  "rules": [
   "Пассив нужен, когда важно, <b>что сделали</b>, а не кто. Формула: <b>be + 3-я форма глагола</b> (V3).",
   "Present: <b>am / is / are + V3</b>. <i>English <b>is spoken</b> everywhere.</i> = На английском говорят везде.",
   "Past: <b>was / were + V3</b>. <i>Loki <b>was released</b> in 2021.</i> = «Локи» вышел в 2021 году.",
   "Кто сделал — через <b>by</b>: <i>The Mona Lisa was painted <b>by</b> Leonardo da Vinci.</i>",
   "Вопросы и отрицания строим через be, а не через do / did: <i><b>Was</b> it filmed in Paris? It <b>wasn't</b> stolen.</i>",
   "По-русски часто говорим без подлежащего («сериал сняли», «здесь продают кофе»), а в английском это пассив."
  ],
  "examples": [
   {
    "en": "Wednesday was filmed in Romania.",
    "ru": "«Уэнсдэй» снимали в Румынии."
   },
   {
    "en": "Captain America's shield is made of vibranium.",
    "ru": "Щит Капитана Америки сделан из вибраниума."
   },
   {
    "en": "Friends was watched by millions of people.",
    "ru": "«Друзей» смотрели миллионы людей."
   },
   {
    "en": "In Paris, croissants are sold on every corner.",
    "ru": "В Париже круассаны продают на каждом углу."
   },
   {
    "en": "Peter Parker was bitten by a radioactive spider.",
    "ru": "Питера Паркера укусил радиоактивный паук."
   },
   {
    "en": "Was your bag stolen at the airport?",
    "ru": "У тебя украли сумку в аэропорту?"
   }
  ],
  "trap": "По-русски «сериал снимали в Атланте» звучит без всякого «был», поэтому be часто теряется, а вопрос строят через did. ❌ Stranger Things filmed in Atlanta. → ✅ Stranger Things was filmed in Atlanta. ❌ Where did it filmed? → ✅ Where was it filmed?",
  "exercises": [
   {
    "type": "choice",
    "q": "Wednesday ___ filmed in Romania.",
    "options": [
     "was",
     "did",
     "is been"
    ],
    "answer": [
     "was"
    ],
    "explain": "Пассив в прошлом = was / were + V3, did с пассивом не используется."
   },
   {
    "type": "input",
    "q": "English ___ (speak) in many countries around the world.",
    "options": [],
    "answer": [
     "is spoken"
    ],
    "explain": "Факт в настоящем: is + третья форма, speak → spoken."
   },
   {
    "type": "choice",
    "q": "Croissants ___ in every bakery in Paris.",
    "options": [
     "are sold",
     "is sold",
     "are sell"
    ],
    "answer": [
     "are sold"
    ],
    "explain": "Croissants во множественном числе, поэтому are, а дальше третья форма sold."
   },
   {
    "type": "input",
    "q": "Peter Parker ___ (bite) by a radioactive spider.",
    "options": [],
    "answer": [
     "was bitten"
    ],
    "explain": "Событие в прошлом: was + третья форма неправильного глагола bite → bitten."
   },
   {
    "type": "order",
    "q": "Этот сериал снимали в Румынии.",
    "options": [],
    "answer": [
     "This series was filmed in Romania."
    ],
    "explain": "«Снимали» без указания, кто снимал, — это пассив: was + filmed."
   },
   {
    "type": "choice",
    "q": "Thor's hammer was made ___ dwarves.",
    "options": [
     "by",
     "with",
     "from"
    ],
    "answer": [
     "by"
    ],
    "explain": "Того, кто совершил действие, в пассиве вводим через by."
   },
   {
    "type": "input",
    "q": "The first episode of Friends ___ (watch) by millions of people in 1994.",
    "options": [],
    "answer": [
     "was watched"
    ],
    "explain": "1994 — это прошлое, поэтому was + watched."
   },
   {
    "type": "choice",
    "q": "___ the first season of Stranger Things filmed in 2015?",
    "options": [
     "Was",
     "Did",
     "Were"
    ],
    "answer": [
     "Was"
    ],
    "explain": "Вопрос в пассиве начинается с be, а season — единственное число, поэтому was."
   },
   {
    "type": "input",
    "q": "Good news: my suitcase ___ (not / steal) yesterday, thank God! I just forgot it at the hotel.",
    "options": [],
    "answer": [
     "wasn't stolen",
     "was not stolen"
    ],
    "explain": "Отрицание в пассиве в прошлом: was not + V3, steal → stolen."
   },
   {
    "type": "order",
    "q": "Где снимали этот фильм?",
    "options": [],
    "answer": [
     "Where was this movie filmed?"
    ],
    "explain": "В пассивном вопросе после вопросительного слова идёт was, а V3 стоит в конце."
   },
   {
    "type": "choice",
    "q": "Today, millions of photos ___ on Instagram every hour.",
    "options": [
     "are posted",
     "is posted",
     "posted"
    ],
    "answer": [
     "are posted"
    ],
    "explain": "Фото сами себя не публикуют, значит нужен пассив, а photos во множественном числе, поэтому are + V3."
   },
   {
    "type": "input",
    "q": "Hundreds of emails ___ (send) to my boss every week, but he never reads them.",
    "options": [],
    "answer": [
     "are sent"
    ],
    "explain": "Регулярное действие в настоящем с множественным числом: are + sent (send → sent)."
   }
  ],
  "homework": "Ты — гид на экскурсии по местам съёмок любимых сериалов и фильмов. Напиши 7 предложений-фактов для туристов. 4 предложения в Past Passive (was / were + V3): где снимали, кем написано, когда показали. 2 предложения в Present Passive (is / are + V3): где продают, на каком языке говорят, из чего сделано. И ещё 1 вопрос в пассиве для туристов-угадаек (например: Where was Emily in Paris filmed?). Используй by минимум 2 раза. Пример: Wednesday was filmed in Romania. The shield is made of vibranium."
 },
 {
  "n": 21,
  "level": "B1",
  "title": "Придаточные определительные: who / which / that / where / whose",
  "emoji": "🕵️",
  "hook": "Как описать человека, вещь или место одним предложением: «Это та девушка, которая...», «Это город, где...». Так говорят в каждом эпизоде, например: «Wednesday is a girl who never smiles».",
  "rules": [
   "<b>who</b> — для людей: <i>the girl <b>who</b> lives next door</i> (девушка, которая...)",
   "<b>which</b> — для вещей и животных: <i>the hammer <b>which</b> Thor uses</i>",
   "<b>that</b> — подходит и для людей, и для вещей, но <u>не ставится после запятой</u>: <i>the series <b>that</b> I love</i>",
   "<b>where</b> — для места (= в котором): <i>the café <b>where</b> we met</i>",
   "<b>whose</b> — «чей / у которого»: <i>the hero <b>whose</b> brother is Loki</i>",
   "После «который/которая» местоимение НЕ повторяем: <i>the film which I watched <s>it</s></i>. Если информация дополнительная и стоит в запятых, that нельзя — только who / which / whose / where: <i>Tony, <b>who</b> is a genius, ...</i>"
  ],
  "examples": [
   {
    "en": "Wednesday is a girl who never smiles.",
    "ru": "Уэнсдэй — девушка, которая никогда не улыбается."
   },
   {
    "en": "Mjolnir is a hammer which only worthy people can lift.",
    "ru": "Мьёльнир — молот, который могут поднять только достойные."
   },
   {
    "en": "Central Perk is the café where the six friends meet every day.",
    "ru": "Central Perk — кафе, где шестеро друзей встречаются каждый день."
   },
   {
    "en": "Thor is the hero whose brother is Loki.",
    "ru": "Тор — герой, чей брат — Локи."
   },
   {
    "en": "I need a job that I really enjoy.",
    "ru": "Мне нужна работа, которая мне правда нравится."
   }
  ],
  "trap": "Русское «который / что» хочется перевести как what. ❌ The series what I watch is Loki. → ✅ The series that/which I watch is Loki. Ещё одна частая ошибка — повторить местоимение: ❌ The man who I saw him → ✅ The man who I saw.",
  "exercises": [
   {
    "type": "choice",
    "q": "Wednesday is a girl ___ loves dark things.",
    "options": [
     "who",
     "which",
     "where",
     "whose"
    ],
    "answer": [
     "who"
    ],
    "explain": "Уэнсдэй — человек, поэтому who."
   },
   {
    "type": "input",
    "q": "Mjolnir is a hammer ___ only worthy people can lift. (про вещь)",
    "options": [],
    "answer": [
     "which",
     "that"
    ],
    "explain": "Для вещей подходит which или that."
   },
   {
    "type": "choice",
    "q": "Paris is the city ___ Emily works.",
    "options": [
     "where",
     "which",
     "who",
     "whose"
    ],
    "answer": [
     "where"
    ],
    "explain": "Речь о месте (в котором она работает), поэтому where; which без предлога in здесь не подходит."
   },
   {
    "type": "input",
    "q": "Thor is the hero ___ brother is Loki. (чей)",
    "options": [],
    "answer": [
     "whose"
    ],
    "explain": "«Чей брат» — это whose + существительное."
   },
   {
    "type": "order",
    "q": "Это сериал, который я смотрю каждый вечер.",
    "options": [],
    "answer": [
     "This is the series that I watch every evening.",
     "This is the series which I watch every evening."
    ],
    "explain": "That вводит описание сериала, а слово «его» (it) после него не повторяем."
   },
   {
    "type": "choice",
    "q": "Do you know the girl ___ phone is ringing?",
    "options": [
     "whose",
     "who's",
     "who",
     "which"
    ],
    "answer": [
     "whose"
    ],
    "explain": "«Чей телефон» — whose; who's = who is, а это здесь не подходит по смыслу."
   },
   {
    "type": "input",
    "q": "Hawkins is the town ___ strange things happen. (место)",
    "options": [],
    "answer": [
     "where",
     "in which"
    ],
    "explain": "Хокинс — место, в котором всё происходит, поэтому where (более формально — in which)."
   },
   {
    "type": "choice",
    "q": "Loki is a god ___ nobody trusts.",
    "options": [
     "who",
     "what",
     "where",
     "whose"
    ],
    "answer": [
     "who"
    ],
    "explain": "Про человека (бога) говорим who; what никогда не значит «который»."
   },
   {
    "type": "input",
    "q": "The actor ___ played Iron Man is Robert Downey Jr. (про человека)",
    "options": [],
    "answer": [
     "who",
     "that"
    ],
    "explain": "Про людей говорим who или that."
   },
   {
    "type": "choice",
    "q": "Tony Stark, ___ is a genius, builds amazing suits.",
    "options": [
     "who",
     "that",
     "what",
     "which"
    ],
    "answer": [
     "who"
    ],
    "explain": "После запятой that ставить нельзя, а which не используем для людей, поэтому who."
   },
   {
    "type": "input",
    "q": "I want a hotel ___ rooms have a view of the sea. (у которого)",
    "options": [],
    "answer": [
     "whose"
    ],
    "explain": "Whose можно использовать и с вещами: отель, у которого номера с видом на море."
   },
   {
    "type": "order",
    "q": "Я знаю девушку, чей брат работает в Лондоне.",
    "options": [],
    "answer": [
     "I know a girl whose brother works in London."
    ],
    "explain": "«Чей брат» — whose brother, дальше обычный порядок слов."
   }
  ],
  "homework": "Ты сценарист нового сезона «Уэнсдэй». Напиши 8 предложений-«карточек» для актёров, где описываешь героев, вещи и места. Например: «Thing is a hand which helps Wednesday», «Nevermore is the school where...», «Enid is a girl whose room is very pink». Используй who, which, where и whose минимум по 2 раза каждое. Бонус: в одном предложении поставь дополнительную информацию в запятые (Enid, who..., is...)."
 },
 {
  "n": 22,
  "level": "B1",
  "title": "used to / be used to / get used to",
  "emoji": "⏳",
  "hook": "Три похожие фразы с тремя разными смыслами: «раньше было», «я привыкла» и «привыкаю». Стив Роджерс после 70 лет во льду прошёл все три стадии.",
  "rules": [
   "<b>used to + глагол</b> — «раньше (было, а теперь нет)»: <i>I <b>used to</b> live in Moscow.</i> = Раньше я жила в Москве.",
   "Вопрос и отрицание — с did, и тогда пишем <b>use</b> без -d: <i><b>Did</b> you <b>use to</b>...? I <b>didn't use to</b>...</i>",
   "<b>be used to + -ing / существительное</b> — «привык(ла), мне это нормально»: <i>I'<b>m used to</b> getting up early.</i>",
   "<b>get used to + -ing / существительное</b> — «привыкать / привыкнуть» (процесс): <i>You'll <b>get used to</b> it.</i>",
   "Формулы: used to <b>do</b> 🆚 be/get used to <b>doing</b>. После be/get used to глагол всегда с -ing!"
  ],
  "examples": [
   {
    "en": "I used to watch cartoons every morning.",
    "ru": "Раньше я смотрела мультики каждое утро."
   },
   {
    "en": "Loki used to be a villain.",
    "ru": "Раньше Локи был злодеем."
   },
   {
    "en": "Did you use to have long hair?",
    "ru": "У тебя раньше были длинные волосы?"
   },
   {
    "en": "Emily isn't used to French breakfasts.",
    "ru": "Эмили не привыкла к французским завтракам."
   },
   {
    "en": "Steve slowly got used to modern life.",
    "ru": "Стив постепенно привык к современной жизни."
   }
  ],
  "trap": "После be used to хочется поставить глагол без -ing, как после used to. ❌ I'm used to get up early. → ✅ I'm used to getting up early. И не путай: ❌ I used to cold weather. → ✅ I'm used to cold weather.",
  "exercises": [
   {
    "type": "choice",
    "q": "When I was a kid, I ___ watch cartoons every morning.",
    "options": [
     "used to",
     "am used to",
     "use to",
     "was used to"
    ],
    "answer": [
     "used to"
    ],
    "explain": "Привычка в прошлом, которой сейчас нет, — used to + глагол."
   },
   {
    "type": "input",
    "q": "Loki ___ (use) to be a villain, but now he helps the TVA.",
    "options": [],
    "answer": [
     "used"
    ],
    "explain": "«Раньше был» в утвердительном предложении — used to, с -d."
   },
   {
    "type": "choice",
    "q": "I'm used to ___ up early for work.",
    "options": [
     "getting",
     "get",
     "got",
     "gets"
    ],
    "answer": [
     "getting"
    ],
    "explain": "После be used to глагол всегда с -ing."
   },
   {
    "type": "input",
    "q": "Did you ___ (use) to have long hair at school?",
    "options": [],
    "answer": [
     "use"
    ],
    "explain": "В вопросе с did пишем use без -d."
   },
   {
    "type": "choice",
    "q": "Steve Rogers slept for 70 years. At first, life was hard, but slowly he ___ used to it.",
    "options": [
     "got",
     "is",
     "use",
     "does"
    ],
    "answer": [
     "got"
    ],
    "explain": "Процесс привыкания в прошлом — got used to."
   },
   {
    "type": "input",
    "q": "I didn't ___ (use) to like coffee, but now I drink three cups a day.",
    "options": [],
    "answer": [
     "use"
    ],
    "explain": "После didn't ставим use без -d."
   },
   {
    "type": "order",
    "q": "Раньше я жила в маленьком городе.",
    "options": [],
    "answer": [
     "I used to live in a small town."
    ],
    "explain": "«Раньше жила, а теперь нет» — used to + live."
   },
   {
    "type": "choice",
    "q": "Wednesday ___ used to people who smile all the time. It's strange for her.",
    "options": [
     "isn't",
     "doesn't",
     "didn't use",
     "not"
    ],
    "answer": [
     "isn't"
    ],
    "explain": "«Не привыкла» — это be used to, а отрицание делаем через isn't."
   },
   {
    "type": "input",
    "q": "Joey can't get used to ___ (share) his food.",
    "options": [],
    "answer": [
     "sharing"
    ],
    "explain": "После get used to глагол с -ing."
   },
   {
    "type": "choice",
    "q": "I'm from Siberia, so I ___ cold winters.",
    "options": [
     "am used to",
     "used to",
     "use to",
     "am used"
    ],
    "answer": [
     "am used to"
    ],
    "explain": "«Привыкла к» + существительное — be used to; просто used to требует глагол."
   },
   {
    "type": "input",
    "q": "When Peter Parker was a new Avenger, he wasn't used to ___ (fight) aliens.",
    "options": [],
    "answer": [
     "fighting"
    ],
    "explain": "Wasn't used to = не привык, поэтому дальше глагол с -ing."
   },
   {
    "type": "order",
    "q": "Ты привыкнешь к новой работе.",
    "options": [],
    "answer": [
     "You will get used to the new job.",
     "You'll get used to the new job."
    ],
    "explain": "Процесс привыкания в будущем — will get used to."
   }
  ],
  "homework": "Ты Стив Роджерс, ты только что проснулся в XXI веке после 70 лет во льду. Напиши дневник из 8 предложений: 3 предложения о том, какой была жизнь в 1940-х (used to / didn't use to), 2 предложения о том, к чему ты уже привык (I'm used to...), и 3 предложения о том, к чему никак не можешь привыкнуть или пытаешься привыкнуть (I can't get used to... / I'm getting used to...). Потом напиши 3 предложения о себе: что ты раньше делала и к чему привыкла сейчас."
 },
 {
  "n": 23,
  "level": "B1",
  "title": "Косвенная речь: said / told / asked",
  "emoji": "🗣️",
  "hook": "Пересказать сплетню из «Друзей» или то, что сказал босс на созвоне: «Он сказал, что...», «Она спросила, где...». Без этого не обойтись ни в сериалах, ни на работе.",
  "rules": [
   "<b>say</b> — без человека: <i>She <b>said</b> (that) she was tired.</i> <b>tell</b> — всегда с человеком: <i>She <b>told me</b> (that)...</i>",
   "После said/told/asked время «отступает» на шаг назад: am/is → <b>was</b>, are → <b>were</b>, will → <b>would</b>, can → <b>could</b>, love → <b>loved</b>, am doing → <b>was doing</b>. (Если сказанное всё ещё правда, носители иногда не сдвигают время, но в упражнениях всегда сдвигаем.)",
   "Меняем местоимения по смыслу: <i>«I love you» → He said that <b>he</b> loved <b>me</b>.</i>",
   "Вопросы: <b>asked + if/whether</b> (для да/нет) или <b>asked + where/what...</b>, и дальше <u>обычный порядок слов</u>, без do/did: <i>She asked where I <b>lived</b>.</i>",
   "Просьбы и приказы: <b>told / asked + человек + to do</b>, а запрет — <b>not to do</b>: <i>He told me <b>not to go</b>.</i>"
  ],
  "examples": [
   {
    "en": "Monica said that she was tired.",
    "ru": "Моника сказала, что устала."
   },
   {
    "en": "Loki told Thor that he was sorry.",
    "ru": "Локи сказал Тору, что ему жаль."
   },
   {
    "en": "Thor said that he would come back.",
    "ru": "Тор сказал, что вернётся."
   },
   {
    "en": "Emily's boss asked her where she was.",
    "ru": "Начальница Эмили спросила, где она."
   },
   {
    "en": "Nick Fury told Tony to join the Avengers.",
    "ru": "Ник Фьюри велел Тони вступить в команду Мстителей."
   }
  ],
  "trap": "Русское «сказал мне» хочется перевести через said. ❌ He said me that he was busy. → ✅ He told me that he was busy (или He said that he was busy). И в вопросах не оставляй вопросительный порядок слов: ❌ She asked where do I live. → ✅ She asked where I lived.",
  "exercises": [
   {
    "type": "choice",
    "q": "Loki ___ me that he was a god.",
    "options": [
     "told",
     "said",
     "asked",
     "spoke"
    ],
    "answer": [
     "told"
    ],
    "explain": "Если дальше идёт человек (me), нужен told; said me сказать нельзя."
   },
   {
    "type": "input",
    "q": "Monica: \"I am tired.\" → Monica said that she ___ tired. (be)",
    "options": [],
    "answer": [
     "was"
    ],
    "explain": "Am в косвенной речи становится was."
   },
   {
    "type": "choice",
    "q": "Emily ___ that she loved Paris.",
    "options": [
     "said",
     "told",
     "asked",
     "talked"
    ],
    "answer": [
     "said"
    ],
    "explain": "Человека после глагола нет, поэтому said; told требует, кому именно сказали."
   },
   {
    "type": "input",
    "q": "Thor: \"I will come back.\" → Thor said that he ___ come back. (will)",
    "options": [],
    "answer": [
     "would"
    ],
    "explain": "Will в косвенной речи становится would."
   },
   {
    "type": "choice",
    "q": "She asked me where I ___.",
    "options": [
     "lived",
     "did I live",
     "do I live",
     "lives"
    ],
    "answer": [
     "lived"
    ],
    "explain": "В косвенном вопросе порядок слов обычный и без do/did, а время сдвигается в прошлое."
   },
   {
    "type": "input",
    "q": "Wednesday: \"I can't dance.\" → Wednesday said that she ___ dance. (can't)",
    "options": [],
    "answer": [
     "couldn't",
     "could not"
    ],
    "explain": "Can't в косвенной речи становится couldn't."
   },
   {
    "type": "order",
    "q": "Он сказал мне, что любит пиццу.",
    "options": [],
    "answer": [
     "He told me that he loved pizza.",
     "He told me he loved pizza."
    ],
    "explain": "Told + me, а loves сдвигается в loved."
   },
   {
    "type": "choice",
    "q": "Nick Fury told Tony ___ the Avengers.",
    "options": [
     "to join",
     "join",
     "joining",
     "that join"
    ],
    "answer": [
     "to join"
    ],
    "explain": "Приказ или просьба передаётся так: told + человек + to + глагол."
   },
   {
    "type": "input",
    "q": "Joey: \"Are you hungry?\" → Joey asked me ___ I was hungry. (вопрос да/нет)",
    "options": [],
    "answer": [
     "if",
     "whether"
    ],
    "explain": "Вопрос «да/нет» пересказываем через if или whether."
   },
   {
    "type": "choice",
    "q": "Mike: \"We are looking for Will.\" → Mike said that they ___ for Will.",
    "options": [
     "were looking",
     "was looking",
     "have looked",
     "look"
    ],
    "answer": [
     "were looking"
    ],
    "explain": "Are looking сдвигается в were looking, и с they нужен were."
   },
   {
    "type": "input",
    "q": "Dustin's mom: \"Don't go out at night!\" → She told Dustin ___ go out at night. (запрет, 2 слова)",
    "options": [],
    "answer": [
     "not to"
    ],
    "explain": "Запрет пересказываем так: told + человек + not to + глагол."
   },
   {
    "type": "order",
    "q": "Она спросила меня, где я работаю.",
    "options": [],
    "answer": [
     "She asked me where I worked."
    ],
    "explain": "После where идёт обычный порядок слов (I worked), без do."
   }
  ],
  "homework": "Ты вчера посмотрела серию «Друзей» и пересказываешь её подруге, которая её пропустила. Напиши 8 предложений в косвенной речи: минимум 2 с said, 2 с told + человек, 2 с asked (одно с if, одно с where/what/why) и 1 с told someone (not) to do. Например: Rachel told Ross that she was busy. Joey asked Chandler if he was hungry. Бонус: перескажи так же 2 фразы, которые тебе сегодня сказали на работе или дома."
 },
 {
  "n": 24,
  "level": "B1",
  "title": "Present Perfect Continuous: How long have you been...?",
  "emoji": "⌛",
  "hook": "«Я жду тебя уже час!», «Как долго ты учишь английский?» По-русски тут настоящее время, а по-английски нужно Present Perfect Continuous. Эмили в Париже без него не пережила бы ни одного свидания.",
  "rules": [
   "Формула: <b>have/has + been + глагол-ing</b>: <i>I <b>have been waiting</b>, she <b>has been watching</b></i>",
   "Действие началось в прошлом и <u>идёт до сих пор</u>: «Я жду уже час» → <i>I'<b>ve been waiting</b> for an hour.</i> (не am waiting!)",
   "Или только что закончилось, и видны следы: <i>Your eyes are red. Have you <b>been crying</b>?</i>",
   "<b>How long have you been...?</b> = Как долго ты...? <b>for</b> + отрезок (for two hours), <b>since</b> + точка начала (since Monday)",
   "Глаголы состояния (know, love, like, have = иметь, be) в -ing не ставим, для них обычный Present Perfect: <i>I'<b>ve known</b> her for years.</i>",
   "Сколько штук сделано (результат) → Present Perfect: <i>I've watched <b>three episodes</b>.</i> Как долго идёт процесс → Continuous: <i>I've been watching <b>for three hours</b>.</i>"
  ],
  "examples": [
   {
    "en": "I've been learning English for three months.",
    "ru": "Я учу английский уже три месяца."
   },
   {
    "en": "How long have you been waiting for me?",
    "ru": "Как долго ты меня ждёшь?"
   },
   {
    "en": "Wednesday has been playing the cello since she was six.",
    "ru": "Уэнсдэй играет на виолончели с шести лет."
   },
   {
    "en": "Thor is tired because he has been fighting all day.",
    "ru": "Тор устал, потому что весь день сражался."
   },
   {
    "en": "I've known Monica since school.",
    "ru": "Я знаю Монику со школы."
   }
  ],
  "trap": "По-русски говорим в настоящем времени, поэтому хочется сказать am waiting. ❌ I am waiting for you for an hour. → ✅ I have been waiting for you for an hour. А с know: ❌ I am knowing him for 5 years. → ✅ I have known him for 5 years.",
  "exercises": [
   {
    "type": "choice",
    "q": "I ___ English for three months.",
    "options": [
     "have been learning",
     "am learning",
     "has been learning",
     "learn"
    ],
    "answer": [
     "have been learning"
    ],
    "explain": "Процесс идёт с прошлого до сейчас (for three months), поэтому have been + -ing; с I нужен have."
   },
   {
    "type": "input",
    "q": "She has been ___ (watch) Stranger Things since 8 p.m. — and she still can't stop!",
    "options": [],
    "answer": [
     "watching"
    ],
    "explain": "После has been глагол всегда с -ing."
   },
   {
    "type": "choice",
    "q": "Wednesday has been playing the cello ___ she was six.",
    "options": [
     "since",
     "for",
     "from",
     "during"
    ],
    "answer": [
     "since"
    ],
    "explain": "«С шести лет» — это точка начала, поэтому since."
   },
   {
    "type": "input",
    "q": "Emily has been living in Paris ___ a year. (уже год)",
    "options": [],
    "answer": [
     "for"
    ],
    "explain": "«Уже год» — это отрезок времени, поэтому for."
   },
   {
    "type": "choice",
    "q": "I ___ Loki for ten years. I know all his tricks!",
    "options": [
     "have known",
     "have been knowing",
     "am knowing",
     "know"
    ],
    "answer": [
     "have known"
    ],
    "explain": "Know — глагол состояния, его не ставят в -ing, поэтому обычный Present Perfect."
   },
   {
    "type": "input",
    "q": "Tony's lab is a mess. How long ___ (have) Tony been working on this suit?",
    "options": [],
    "answer": [
     "has"
    ],
    "explain": "Tony = he, поэтому has been working."
   },
   {
    "type": "order",
    "q": "Как долго ты учишь английский?",
    "options": [],
    "answer": [
     "How long have you been learning English?"
    ],
    "explain": "How long + have + you + been + -ing: процесс ещё идёт."
   },
   {
    "type": "choice",
    "q": "Your eyes are red! ___ you been crying?",
    "options": [
     "Have",
     "Did",
     "Are",
     "Were"
    ],
    "answer": [
     "Have"
    ],
    "explain": "Вопрос в Present Perfect Continuous начинается с have/has + been."
   },
   {
    "type": "input",
    "q": "I've ___ (have) this phone since 2020, and it still works.",
    "options": [],
    "answer": [
     "had"
    ],
    "explain": "Have в значении «иметь» — глагол состояния, поэтому have had, а не have been having."
   },
   {
    "type": "choice",
    "q": "I've ___ three episodes of Loki today.",
    "options": [
     "watched",
     "been watching",
     "watching",
     "watch"
    ],
    "answer": [
     "watched"
    ],
    "explain": "Когда считаем результат (сколько серий), нужен Present Perfect, а не Continuous."
   },
   {
    "type": "input",
    "q": "Emily, how long have you ___ (be) in Paris?",
    "options": [],
    "answer": [
     "been"
    ],
    "explain": "Be — глагол состояния, поэтому «How long have you been...?» без -ing."
   },
   {
    "type": "order",
    "q": "Она смотрит этот сериал с понедельника.",
    "options": [],
    "answer": [
     "She has been watching this series since Monday.",
     "She's been watching this series since Monday."
    ],
    "explain": "Процесс идёт с понедельника до сих пор: has been watching + since."
   }
  ],
  "homework": "Ты Эмили, и твоя мама из Чикаго звонит тебе по видео. Напиши диалог из 8–10 реплик. Мама задаёт минимум 4 вопроса с How long have you been...? (living in Paris, working at Savoir, dating..., learning French), а ты отвечаешь с for и since. Добавь 2 предложения с глаголами состояния (I've known..., I've had...) и 1 предложение про результат (I've visited five museums). Бонус: напиши 3 правдивых предложения о себе: что ты делаешь уже давно и с какого времени."
 },
 {
  "n": 25,
  "level": "B2",
  "title": "Past Perfect: что случилось раньше",
  "emoji": "⏪",
  "hook": "Тор прилетает, а Локи УЖЕ сбежал: это Past Perfect. С его помощью в каждом флешбэке сериалов рассказывают, что было «до».",
  "rules": [
   "Формула: <b>had + 3-я форма (V3)</b>. Одна форма для всех: I/you/she/they <b>had seen</b>.",
   "Нужен, когда в прошлом <b>два действия</b> и надо показать, какое было <u>раньше</u>: When I arrived, the film <b>had started</b>. (сначала начался фильм, потом пришла я)",
   "Отрицание: <b>hadn't + V3</b>. Вопрос: <b>Had</b> you <b>seen</b>...? Сокращение: I'd, she'd = I had, she had (не путай с I'd = I would: после 'd had идёт V3, а would идёт с V1).",
   "Слова-подсказки: <b>by the time</b> (к тому моменту, как), <b>already, just, never ... before</b>, <b>since / for</b> (до какого-то момента в прошлом).",
   "Если действия идут по порядку, одно за другим, хватит Past Simple: I woke up, <i>took</i> a shower and <i>left</i>.",
   "В косвенной речи (урок 23) Past Simple и Present Perfect часто превращаются в Past Perfect: «I lost it» → She said she <b>had lost</b> it."
  ],
  "examples": [
   {
    "en": "When Thor arrived, Loki had already escaped.",
    "ru": "Когда Тор прибыл, Локи уже сбежал."
   },
   {
    "en": "By the time the police came, Wednesday had solved the mystery.",
    "ru": "К тому времени, как приехала полиция, Уэнсдей уже раскрыла тайну."
   },
   {
    "en": "I had never seen snow before I went to Finland.",
    "ru": "Я никогда не видела снег, пока не поехала в Финляндию."
   },
   {
    "en": "Monica screamed: someone had eaten her cake!",
    "ru": "Моника закричала: кто-то съел её торт!"
   },
   {
    "en": "Emily said she had never tried real French croissants.",
    "ru": "Эмили сказала, что никогда не пробовала настоящие французские круассаны."
   }
  ],
  "trap": "В русском нет отдельного «предпрошедшего» времени, поэтому его заменяют на Past Simple. ❌ When I came home, my sister already left. → ✅ When I came home, my sister had already left.",
  "exercises": [
   {
    "type": "choice",
    "q": "When Thor arrived, Loki ___ already escaped.",
    "options": [
     "had",
     "has",
     "was"
    ],
    "answer": [
     "had"
    ],
    "explain": "Побег был раньше прихода Тора, значит нужен Past Perfect: had + V3."
   },
   {
    "type": "input",
    "q": "By the time Rachel got to the airport, Ross ___ (already / leave).",
    "options": [],
    "answer": [
     "had already left",
     "had left already"
    ],
    "explain": "By the time в прошлом требует Past Perfect: had + already + V3 (leave → left)."
   },
   {
    "type": "choice",
    "q": "I ___ never been to Paris before I moved there for work.",
    "options": [
     "had",
     "have",
     "was"
    ],
    "answer": [
     "had"
    ],
    "explain": "«Никогда до переезда» говорит о периоде до момента в прошлом, поэтому had been."
   },
   {
    "type": "input",
    "q": "Monica was furious: someone had ___ (eat) her birthday cake!",
    "options": [],
    "answer": [
     "eaten"
    ],
    "explain": "После had нужна 3-я форма: eat → ate → eaten."
   },
   {
    "type": "choice",
    "q": "After she ___ the email to her boss, Emily went to a party.",
    "options": [
     "had sent",
     "has sent",
     "had send",
     "have sent"
    ],
    "answer": [
     "had sent"
    ],
    "explain": "Had + 3-я форма (sent); has/have про прошлое не подходят, а send не 3-я форма."
   },
   {
    "type": "input",
    "q": "Joey was starving because he ___ (not / eat) anything since breakfast.",
    "options": [],
    "answer": [
     "hadn't eaten",
     "had not eaten"
    ],
    "explain": "Since до момента в прошлом требует Past Perfect, отрицание: hadn't + V3."
   },
   {
    "type": "order",
    "q": "Когда я проснулась, поезд уже ушёл.",
    "options": [],
    "answer": [
     "When I woke up the train had already left.",
     "The train had already left when I woke up."
    ],
    "explain": "Поезд ушёл раньше, чем я проснулась, поэтому had left, а woke up в Past Simple."
   },
   {
    "type": "choice",
    "q": "___ you ever flown on a plane before your trip to Bali?",
    "options": [
     "Had",
     "Did",
     "Were",
     "Was"
    ],
    "answer": [
     "Had"
    ],
    "explain": "Flown — это 3-я форма. Из вариантов с ней сочетается только had: после did нужен V1, а were/was + V3 — это пассив."
   },
   {
    "type": "input",
    "q": "By the time the police arrived, Wednesday ___ (already / solve) the mystery.",
    "options": [],
    "answer": [
     "had already solved"
    ],
    "explain": "Тайна раскрыта ДО приезда полиции, и by the time требует had + V3."
   },
   {
    "type": "choice",
    "q": "First I had breakfast, and then I ___ the bus to work.",
    "options": [
     "caught",
     "had caught",
     "have caught",
     "catch"
    ],
    "answer": [
     "caught"
    ],
    "explain": "Действия идут по порядку (first ... then), так что хватает Past Simple."
   },
   {
    "type": "input",
    "q": "By that night, Hopper ___ (not / sleep) for two days.",
    "options": [],
    "answer": [
     "hadn't slept",
     "had not slept",
     "hadn't been sleeping",
     "had not been sleeping"
    ],
    "explain": "By that night — момент в прошлом, до которого длилось действие, отсюда hadn't + V3."
   },
   {
    "type": "order",
    "q": "Она сказала, что никогда не видела Лондон.",
    "options": [],
    "answer": [
     "She said she had never seen London.",
     "She said that she had never seen London."
    ],
    "explain": "В косвенной речи время «сдвигается» назад: «I have never seen London» → she had never seen London."
   }
  ],
  "homework": "Ты — детектив Уэнсдей Аддамс. Ночью в Неверморе что-то случилось, но когда ты вошла в оранжерею, всё уже произошло. Напиши 7–8 предложений о том, что ты увидела и что произошло ДО твоего прихода (например: When I came in, the monster had already left... Someone had broken...). Обязательно: минимум 5 раз had + V3, 2 отрицания с hadn't, одно предложение с by the time и одно с never ... before. Бонус: добавь одно предложение в косвенной речи: Enid said she had heard..."
 },
 {
  "n": 26,
  "level": "B2",
  "title": "Third Conditional и смешанные условные",
  "emoji": "🔀",
  "hook": "Сериал «Локи» и «Что, если...?» от Marvel построены на одной идее «если бы тогда всё пошло иначе», а по-английски это звучит так: If I had known...",
  "rules": [
   "<b>Third Conditional</b> — нереальное прошлое, сожаление «если бы тогда...»: <b>If + had + V3, would have + V3</b>. If I <b>had known</b>, I <b>would have come</b>.",
   "Сокращения: would have = <b>would've</b>, had = <b>'d</b>. Вместо would можно could have / might have (смог бы / может быть).",
   "Отрицания: If I <b>hadn't</b> missed the bus, I <b>wouldn't have been</b> late.",
   "<b>Смешанный 1</b> (прошлое → сейчас): <b>If + had + V3, would + V1 ... now</b>. If I <b>had learned</b> English at school, I <b>would watch</b> series without subtitles <u>now</u>.",
   "<b>Смешанный 2</b> (характер/факт сейчас → прошлое): <b>If + Past Simple (were), would have + V3</b>. If I <b>were</b> braver, I <b>would have asked</b> him out.",
   "В русском одно «если бы» для всех случаев, а в английском смотри на время: сейчас → Second (урок 19), тогда → Third. И <b>никогда не ставь would в часть с if</b>!"
  ],
  "examples": [
   {
    "en": "If Loki hadn't stolen the Tesseract, the TVA wouldn't have arrested him.",
    "ru": "Если бы Локи не украл Тессеракт, TVA бы его не арестовало."
   },
   {
    "en": "If Rachel had stayed on the plane, she would have gone to Paris.",
    "ru": "Если бы Рэйчел осталась в самолёте, она бы улетела в Париж."
   },
   {
    "en": "If Tony hadn't built the suit, he would have died in that cave.",
    "ru": "Если бы Тони не построил костюм, он бы погиб в той пещере."
   },
   {
    "en": "If I had gone to bed earlier, I wouldn't be so tired now.",
    "ru": "Если бы я легла спать раньше, я бы сейчас не была такой уставшей."
   },
   {
    "en": "If Wednesday were friendlier, she would have made friends on her first day.",
    "ru": "Если бы Уэнсдей была дружелюбнее, она бы нашла друзей в первый же день."
   }
  ],
  "trap": "Русские ставят «бы» в обе части, поэтому лепят would и после if. ❌ If I would have known, I would have come. → ✅ If I had known, I would have come.",
  "exercises": [
   {
    "type": "choice",
    "q": "If Rachel had stayed on the plane, she ___ to Paris.",
    "options": [
     "would have gone",
     "would go",
     "will go",
     "had gone"
    ],
    "answer": [
     "would have gone"
    ],
    "explain": "Нереальное прошлое: if + had + V3, а во второй части would have + V3."
   },
   {
    "type": "input",
    "q": "If I ___ (know) about the party, I would have come.",
    "options": [],
    "answer": [
     "had known",
     "'d known"
    ],
    "explain": "В части с if в Third Conditional стоит had + V3, без would."
   },
   {
    "type": "choice",
    "q": "If Loki ___ the Tesseract, the TVA wouldn't have caught him.",
    "options": [
     "hadn't taken",
     "didn't take",
     "wouldn't take",
     "hasn't taken"
    ],
    "answer": [
     "hadn't taken"
    ],
    "explain": "Это прошлое, которое уже не изменить, поэтому hadn't + V3; would в часть с if не ставят."
   },
   {
    "type": "input",
    "q": "If Tony hadn't built the suit, he ___ (die) in that cave.",
    "options": [],
    "answer": [
     "would have died",
     "would've died",
     "might have died",
     "might've died",
     "could have died",
     "could've died"
    ],
    "explain": "Результат в нереальном прошлом: would have + V3 (died)."
   },
   {
    "type": "choice",
    "q": "If you ___ the alarm, you would have caught the train.",
    "options": [
     "had set",
     "would have set",
     "will set",
     "have set"
    ],
    "answer": [
     "had set"
    ],
    "explain": "Вторая часть would have caught, значит в if-части нужен had + V3; would и will в if-часть не ставят."
   },
   {
    "type": "input",
    "q": "If Ross's boss ___ (not / eat) his sandwich, Ross wouldn't have shouted at work.",
    "options": [],
    "answer": [
     "hadn't eaten",
     "had not eaten"
    ],
    "explain": "Отрицание в if-части Third Conditional: hadn't + V3."
   },
   {
    "type": "order",
    "q": "Если бы я знала, я бы пришла.",
    "options": [],
    "answer": [
     "If I had known I would have come.",
     "I would have come if I had known."
    ],
    "explain": "Нереальное прошлое: if + had known, would have come."
   },
   {
    "type": "choice",
    "q": "If I had learned English at school, I ___ series without subtitles now.",
    "options": [
     "would watch",
     "would have watched",
     "will watch",
     "had watched"
    ],
    "answer": [
     "would watch"
    ],
    "explain": "Результат относится к «сейчас» (now), поэтому смешанный тип: would + V1."
   },
   {
    "type": "input",
    "q": "If Steve hadn't gone into the ice, he ___ (be) a very old man now.",
    "options": [],
    "answer": [
     "would be",
     "might be",
     "could be"
    ],
    "explain": "Причина в прошлом, результат сейчас (now), поэтому would + V1."
   },
   {
    "type": "choice",
    "q": "Wednesday isn't a friendly person. If she were friendlier, she ___ friends on her first day at Nevermore last year.",
    "options": [
     "would have made",
     "would make",
     "will make",
     "had made"
    ],
    "answer": [
     "would have made"
    ],
    "explain": "Первый день был в прошлом (last year), поэтому результат в прошлом: would have + V3, а причина — характер сейчас (were)."
   },
   {
    "type": "input",
    "q": "I'm so sleepy today. If I ___ (go) to bed earlier last night, I wouldn't be so tired now.",
    "options": [],
    "answer": [
     "had gone",
     "'d gone"
    ],
    "explain": "Last night — это прошлое, поэтому в if-части had + V3, хотя результат сейчас."
   },
   {
    "type": "order",
    "q": "Если бы я не уволилась, я бы сейчас была богатой.",
    "options": [],
    "answer": [
     "If I hadn't quit I would be rich now.",
     "I would be rich now if I hadn't quit.",
     "If I hadn't quit I would now be rich."
    ],
    "explain": "Причина в прошлом (hadn't quit), результат сейчас (would be ... now): это смешанный тип."
   }
  ],
  "homework": "Мультивселенная сожалений! Выбери героя: Локи, Тони Старка или Рэйчел Грин. Напиши 8 предложений «если бы...»: 4 предложения Third Conditional про его прошлое (If Loki hadn't..., he wouldn't have...), 2 смешанных о том, как это изменило бы его жизнь СЕЙЧАС (If Rachel had gone to Paris, she would be ... now), и 2 про твою жизнь: одно настоящее сожаление и одно «к счастью» (If I hadn't ..., I wouldn't have met ...). Проверь себя: в части с if не должно быть ни одного would!"
 },
 {
  "n": 27,
  "level": "B2",
  "title": "Модальные глаголы догадки: must / might / can’t (have done)",
  "emoji": "🕵️",
  "hook": "Уэнсдей и Шерлок говорят так в каждой серии: «He must have been here» значит «Он, должно быть, был здесь». Это язык детективов.",
  "rules": [
   "Догадка про <b>сейчас</b>: <b>must + V1</b> (почти уверена, на 90%), <b>might / may / could + V1</b> (может быть), <b>can't + V1</b> (точно нет, невозможно).",
   "Про то, что происходит прямо сейчас: <b>must / might + be + -ing</b>. He <b>must be sleeping</b>.",
   "Догадка про <b>прошлое</b>: <b>must have + V3</b> (наверняка сделал), <b>might / could have + V3</b> (возможно, сделал), <b>can't / couldn't have + V3</b> (не может быть, чтобы сделал).",
   "Противоположность must-догадки — <b>can't</b>, а НЕ mustn't. <b>Mustn't</b> = запрет (урок 11): You mustn't smoke here.",
   "После must / might / can't никогда не бывает Past Simple и to: ❌ must went, ❌ must to be → ✅ <b>must have gone</b>, <b>must be</b>.",
   "По-русски это «наверное / должно быть / может, / не может быть, чтобы...»."
  ],
  "examples": [
   {
    "en": "Loki is smiling. He must be planning something.",
    "ru": "Локи улыбается. Он, должно быть, что-то замышляет."
   },
   {
    "en": "Eleven's nose is bleeding. She must have used her powers.",
    "ru": "У Одиннадцать идёт кровь из носа. Наверное, она использовала свои силы."
   },
   {
    "en": "That can't be Thor. He's in Asgard.",
    "ru": "Это не может быть Тор. Он в Асгарде."
   },
   {
    "en": "Joey isn't here. He might be at the restaurant.",
    "ru": "Джоуи здесь нет. Может, он в ресторане."
   },
   {
    "en": "I can't find my passport. I might have left it at the hotel.",
    "ru": "Не могу найти паспорт. Возможно, я оставила его в отеле."
   },
   {
    "en": "Wednesday can't have smiled. She never smiles!",
    "ru": "Не может быть, чтобы Уэнсдей улыбнулась. Она никогда не улыбается!"
   }
  ],
  "trap": "Русские думают «must = должен, значит mustn't = не должен (наверное, нет)». ❌ He mustn't be at home, the lights are off. → ✅ He can't be at home, the lights are off. И про прошлое: ❌ She must went home. → ✅ She must have gone home.",
  "exercises": [
   {
    "type": "choice",
    "q": "Loki is smiling and hiding a knife behind his back. He ___ be planning something evil.",
    "options": [
     "must",
     "mustn't",
     "must to",
     "has"
    ],
    "answer": [
     "must"
    ],
    "explain": "Уверенная догадка: must + V1 без to; mustn't означает запрет."
   },
   {
    "type": "input",
    "q": "Eleven's nose is bleeding. She ___ (must / use) her powers a minute ago.",
    "options": [],
    "answer": [
     "must have used",
     "must've used"
    ],
    "explain": "Уверенная догадка про прошлое (a minute ago): must have + V3."
   },
   {
    "type": "choice",
    "q": "That ___ be Thor! He's in Asgard right now.",
    "options": [
     "can't",
     "mustn't",
     "must",
     "doesn't"
    ],
    "answer": [
     "can't"
    ],
    "explain": "«Точно нет» при догадке выражается через can't, а mustn't означает запрет."
   },
   {
    "type": "input",
    "q": "Joey isn't answering his phone. He ___ (might / sleep) right now.",
    "options": [],
    "answer": [
     "might be sleeping"
    ],
    "explain": "Догадка про то, что происходит прямо сейчас: might + be + -ing."
   },
   {
    "type": "choice",
    "q": "The cake is gone and Joey has chocolate all over his face. He ___ eaten it.",
    "options": [
     "must have",
     "must",
     "can't have",
     "must has"
    ],
    "answer": [
     "must have"
    ],
    "explain": "Улики говорят «точно съел», а с V3 (eaten) нужно must have."
   },
   {
    "type": "input",
    "q": "Enid says Wednesday smiled at the party yesterday. No way! She ___ (can't / smile) — she never smiles!",
    "options": [],
    "answer": [
     "can't have smiled",
     "cannot have smiled",
     "couldn't have smiled",
     "could not have smiled"
    ],
    "explain": "«Не может быть, чтобы сделала» в прошлом: can't have + V3."
   },
   {
    "type": "order",
    "q": "Он, должно быть, забыл ключи.",
    "options": [],
    "answer": [
     "He must have forgotten his keys."
    ],
    "explain": "Уверенная догадка о прошлом: must have + V3 (forgotten)."
   },
   {
    "type": "choice",
    "q": "I'm not sure where Emily is. She ___ be at the office or at a party.",
    "options": [
     "might",
     "must",
     "can't",
     "mights"
    ],
    "answer": [
     "might"
    ],
    "explain": "«Не уверена» означает «может быть», то есть might; у модальных нет окончания -s."
   },
   {
    "type": "input",
    "q": "I can't find my passport. I ___ (might / leave) it at the hotel yesterday.",
    "options": [],
    "answer": [
     "might have left",
     "might've left"
    ],
    "explain": "Неуверенная догадка о прошлом (yesterday): might have + V3."
   },
   {
    "type": "choice",
    "q": "Steve's shield is still warm. He ___ gone far.",
    "options": [
     "can't have",
     "mustn't have",
     "can't",
     "must"
    ],
    "answer": [
     "can't have"
    ],
    "explain": "«Не мог уйти далеко» в прошлом: can't have + V3; mustn't означает запрет."
   },
   {
    "type": "input",
    "q": "Monica's apartment is perfectly clean this morning. She ___ (must / clean) all night.",
    "options": [],
    "answer": [
     "must have cleaned",
     "must've cleaned",
     "must have been cleaning",
     "must've been cleaning"
    ],
    "explain": "Уверенная догадка о том, что было ночью: must have + V3."
   },
   {
    "type": "order",
    "q": "Тор не мог проиграть эту битву.",
    "options": [],
    "answer": [
     "Thor can't have lost this battle.",
     "Thor couldn't have lost this battle."
    ],
    "explain": "«Не может быть, чтобы проиграл» — это can't have + V3 (lost)."
   }
  ],
  "homework": "Ты — Шерлок в мире «Очень странных дел». Утро в Хокинсе: дверь в доме Байерсов открыта, лампочки мигают, на полу лежат вафли Eggo, а велосипеда Уилла нет. Напиши 8 предложений-догадок: 3 про настоящее (must / might / can't + V1 или be + -ing, например: Will might be hiding...), 4 про прошлое (must have / might have / can't have + V3) и 1 с could have. Начни так: Someone must have opened the door... В конце напиши одно предложение-вывод с can't, чтобы исключить подозреваемого."
 },
 {
  "n": 28,
  "level": "B2",
  "title": "I wish / If only: сожаления и мечты",
  "emoji": "🌠",
  "hook": "Рэйчел, Росс и половина героев сериалов вздыхают «I wish I had...»: это главная фраза в английском для сожалений и мечтаний.",
  "rules": [
   "Сожаление о <b>настоящем</b>: <b>wish + Past Simple</b>. I wish I <b>had</b> a car. (= сейчас машины нет). С to be часто <b>were</b> для всех: I wish I <b>were</b> in Paris.",
   "Сожаление о <b>прошлом</b>: <b>wish + had + V3</b>. I wish I <b>had studied</b> harder. (= жаль, что не училась) Это как Third Conditional.",
   "Умение: <b>wish + could + V1</b>. I wish I <b>could</b> speak French.",
   "Раздражает чужое поведение или ситуация, которую хочется изменить: <b>wish + кто-то/что-то + would + V1</b>. I wish my boss <b>would</b> stop calling me! I wish it <b>would</b> stop raining! Про себя would не говорят: ❌ I wish I would.",
   "<b>If only...</b> = то же самое, только эмоциональнее: <b>If only</b> I had bought that ticket!",
   "Лайфхак: «Жаль, что я <u>не</u> умею» → в английском без not: I wish I <b>could</b>. «Жаль, что я пошла» → I wish I <b>hadn't gone</b>. Отрицание меняется на противоположное, а время сдвигается на шаг в прошлое."
  ],
  "examples": [
   {
    "en": "I wish I were Wednesday's roommate.",
    "ru": "Жаль, что я не соседка Уэнсдей по комнате."
   },
   {
    "en": "If only I had bought that ticket to Paris!",
    "ru": "Если бы только я купила тот билет в Париж!"
   },
   {
    "en": "Ross wishes he hadn't said the wrong name at his wedding.",
    "ru": "Росс жалеет, что назвал не то имя на своей свадьбе."
   },
   {
    "en": "I wish my boss would stop sending emails at midnight.",
    "ru": "Вот бы мой начальник перестал присылать письма в полночь."
   },
   {
    "en": "Loki wishes he could trust someone.",
    "ru": "Локи хотел бы кому-нибудь доверять."
   }
  ],
  "trap": "По-русски «жаль, что не умею» стоит в настоящем, и время переносят как есть. ❌ I wish I can speak English fluently. → ✅ I wish I could speak English fluently. И про прошлое: ❌ I wish I didn't go there yesterday. → ✅ I wish I hadn't gone there yesterday.",
  "exercises": [
   {
    "type": "choice",
    "q": "I don't have a car. I wish I ___ a car.",
    "options": [
     "had",
     "have",
     "will have",
     "would had"
    ],
    "answer": [
     "had"
    ],
    "explain": "Сожаление о настоящем: wish + Past Simple (have → had)."
   },
   {
    "type": "input",
    "q": "I'm not in Paris right now. I wish I ___ (be) in Paris with Emily.",
    "options": [],
    "answer": [
     "were",
     "was"
    ],
    "explain": "Wish про настоящее требует Past Simple, а для be обычно берут were."
   },
   {
    "type": "choice",
    "q": "Ross said the wrong name at his wedding. Now he wishes he ___ it.",
    "options": [
     "hadn't said",
     "didn't say",
     "doesn't say",
     "wouldn't say"
    ],
    "answer": [
     "hadn't said"
    ],
    "explain": "Сожаление о прошлом: wish + had + V3."
   },
   {
    "type": "input",
    "q": "I can't play the cello. I wish I ___ (can) play it like Wednesday.",
    "options": [],
    "answer": [
     "could"
    ],
    "explain": "Мечта об умении: wish + could + V1."
   },
   {
    "type": "choice",
    "q": "My neighbour plays loud music every night. I wish he ___ stop!",
    "options": [
     "would",
     "will",
     "had",
     "wishes"
    ],
    "answer": [
     "would"
    ],
    "explain": "Нас раздражает чужое поведение, поэтому wish + кто-то + would + V1."
   },
   {
    "type": "input",
    "q": "I missed the concert last week. If only I ___ (buy) the tickets earlier!",
    "options": [],
    "answer": [
     "had bought",
     "'d bought"
    ],
    "explain": "If only про прошлое (last week): had + V3."
   },
   {
    "type": "order",
    "q": "Жаль, что я не умею говорить по-французски.",
    "options": [],
    "answer": [
     "I wish I could speak French.",
     "If only I could speak French."
    ],
    "explain": "«Не умею» превращается в wish + could, без not."
   },
   {
    "type": "choice",
    "q": "I wish I ___ so much pizza last night. Now I feel terrible.",
    "options": [
     "hadn't eaten",
     "didn't eat",
     "wouldn't eat",
     "haven't eaten"
    ],
    "answer": [
     "hadn't eaten"
    ],
    "explain": "Last night — прошлое, поэтому wish + hadn't + V3."
   },
   {
    "type": "input",
    "q": "Loki is always alone. He wishes he ___ (have) a real friend.",
    "options": [],
    "answer": [
     "had"
    ],
    "explain": "Сожаление о настоящем: wish + Past Simple (had)."
   },
   {
    "type": "choice",
    "q": "I'm not a morning person. I wish I ___ get up early easily.",
    "options": [
     "could",
     "would",
     "can",
     "will"
    ],
    "answer": [
     "could"
    ],
    "explain": "Про своё умение говорят I wish I could; I wish I would про себя не используют."
   },
   {
    "type": "input",
    "q": "It's raining again and I'm stuck at home. I wish it ___ (stop) raining!",
    "options": [],
    "answer": [
     "would stop"
    ],
    "explain": "Хотим, чтобы ситуация изменилась (дождь перестал), поэтому wish + would + V1."
   },
   {
    "type": "order",
    "q": "Жаль, что я не посмотрела этот сериал раньше.",
    "options": [],
    "answer": [
     "I wish I had watched this series earlier.",
     "If only I had watched this series earlier."
    ],
    "explain": "Сожаление о прошлом: wish + had + V3, и «не» исчезает."
   }
  ],
  "homework": "Напиши «Дневник сожалений и мечтаний» от лица Рэйчел Грин или от своего лица через 6 месяцев учёбы. 8 предложений: 2 × I wish + Past Simple (про сейчас: I wish I were...), 2 × I wish + had + V3 (про прошлое), 1 × I wish I could..., 2 × I wish + кто-то + would (про тех, кто бесит: Росса, начальника, соседа), 1 × If only... Затем переделай 2 своих предложения в условные из прошлых уроков: I wish I were in Paris → If I were in Paris, I would...; I wish I had studied → If I had studied, I would have..."
 },
 {
  "n": 29,
  "level": "B2",
  "title": "Пассив продвинутый: have something done; it is said that...",
  "emoji": "💇‍♀️",
  "hook": "После салона в Париже ты скажешь не «I cut my hair», а «I had my hair done», как Эмили. А «It is said that...» постоянно звучит в новостях и в сериалах про слухи и легенды.",
  "rules": [
   "<b>have + предмет + 3-я форма</b>: работу делаешь не ты, а кто-то для тебя. <i>I had my hair cut.</i> = Меня подстригли (в салоне).",
   "Порядок слов строгий: <b>have → ЧТО → 3-я форма</b>. <i>I had my phone repaired</i>, а не <i>I had repaired my phone</i> (так выйдет, что чинила ты сама).",
   "Глагол <b>have</b> меняется по временам, остальное нет: <i>I'm having my nails done</i> / <i>I had it fixed</i> / <i>I'll have it cleaned</i>. В разговоре вместо have часто говорят <b>get</b>: <i>I got my nails done.</i>",
   "<b>It is said / believed / known / reported that</b> + целое предложение = «Говорят / считается / известно, что...». <i>It is said that Loki can't be trusted.</i>",
   "Вариант с человеком в начале: <b>He is said to + глагол</b> (сейчас) или <b>to have + 3-я форма</b> (про прошлое). <i>Thanos is believed to be strong. Steve is said to have slept for 70 years.</i>"
  ],
  "examples": [
   {
    "en": "Emily had her photos taken by a professional photographer.",
    "ru": "Эмили сделала фотосессию у профессионального фотографа."
   },
   {
    "en": "Wednesday is having her portrait painted, and she hates every second of it.",
    "ru": "С Уэнсдей сейчас пишут портрет, и ей противна каждая секунда."
   },
   {
    "en": "Tony Stark never has his suits made. He builds them himself.",
    "ru": "Тони Старк никогда не заказывает костюмы. Он собирает их сам."
   },
   {
    "en": "It is said that Loki can't be trusted.",
    "ru": "Говорят, что Локи нельзя доверять."
   },
   {
    "en": "Thanos is believed to be the strongest villain in the universe.",
    "ru": "Таноса считают самым сильным злодеем во вселенной."
   },
   {
    "en": "Steve Rogers is said to have slept in the ice for almost 70 years.",
    "ru": "Говорят, что Стив Роджерс проспал во льду почти 70 лет."
   }
  ],
  "trap": "По-русски ты говоришь «я подстриглась», хотя стригла тебя не ты, и в английском путаешь порядок слов. ❌ I had cut my hair at the salon. → ✅ I had my hair cut at the salon.",
  "exercises": [
   {
    "type": "choice",
    "q": "I don't cut my hair myself. I ___ at a salon every month.",
    "options": [
     "have it cut",
     "have cut it",
     "am cut it"
    ],
    "answer": [
     "have it cut"
    ],
    "explain": "Стрижёт мастер, а не ты, поэтому have + что + 3-я форма."
   },
   {
    "type": "input",
    "q": "Tony's car was broken, so yesterday he ___ (have) it repaired.",
    "options": [],
    "answer": [
     "had"
    ],
    "explain": "Есть «yesterday», значит have ставим в Past Simple: had."
   },
   {
    "type": "choice",
    "q": "It ___ that Wakanda is the richest country in the world.",
    "options": [
     "is said",
     "is saying",
     "is say"
    ],
    "answer": [
     "is said"
    ],
    "explain": "«Говорят, что» = пассив: is + 3-я форма (said)."
   },
   {
    "type": "input",
    "q": "Monica never ___ (have) her flat cleaned by anyone. She does it herself!",
    "options": [],
    "answer": [
     "has"
    ],
    "explain": "never + Present Simple, а Monica — это she, поэтому has."
   },
   {
    "type": "order",
    "q": "Я делаю маникюр каждую неделю.",
    "options": [],
    "answer": [
     "I have my nails done every week.",
     "Every week I have my nails done."
    ],
    "explain": "Маникюр делает мастер, поэтому have + my nails + done."
   },
   {
    "type": "input",
    "q": "Look! Wednesday ___ (have) her portrait painted right now, and she has to sit still for three hours.",
    "options": [],
    "answer": [
     "is having"
    ],
    "explain": "Есть «right now», поэтому have ставим в Present Continuous: is having."
   },
   {
    "type": "choice",
    "q": "Thanos is believed ___ the strongest villain in the universe.",
    "options": [
     "to be",
     "being",
     "be",
     "that he is"
    ],
    "answer": [
     "to be"
    ],
    "explain": "После is believed идёт to + глагол: to be."
   },
   {
    "type": "input",
    "q": "It ___ (know) that cats hate water.",
    "options": [],
    "answer": [
     "is known"
    ],
    "explain": "«Известно, что» = It is known that: is + 3-я форма от know."
   },
   {
    "type": "choice",
    "q": "Loki ___ to have stolen the Tesseract again.",
    "options": [
     "is reported",
     "reports",
     "is reporting",
     "has reported"
    ],
    "answer": [
     "is reported"
    ],
    "explain": "Сообщает кто-то другой, не Локи, поэтому нужен пассив: is reported to..."
   },
   {
    "type": "input",
    "q": "Steve Rogers is said ___ (sleep) in the ice for almost 70 years.",
    "options": [],
    "answer": [
     "to have slept",
     "to have been sleeping"
    ],
    "explain": "Спал он в прошлом, поэтому to have + 3-я форма: to have slept."
   },
   {
    "type": "choice",
    "q": "In Paris, Emily got ___ by a famous photographer.",
    "options": [
     "her photos taken",
     "taken her photos",
     "her photos take",
     "her photos to take"
    ],
    "answer": [
     "her photos taken"
    ],
    "explain": "get + что + 3-я форма: сначала her photos, потом taken."
   },
   {
    "type": "order",
    "q": "Говорят, что Хоукай никогда не промахивается.",
    "options": [],
    "answer": [
     "It is said that Hawkeye never misses."
    ],
    "explain": "«Говорят, что» = It is said that + обычное предложение."
   }
  ],
  "homework": "Ты — Тони Старк и устраиваешь вечеринку в Башне Мстителей. Напиши 8 предложений. В 3 предложениях напиши, что ты уже сделал не своими руками (I've had the hall decorated... I had the food delivered...). В 2 — что тебе сделают завтра (I'm having my suit cleaned tomorrow...). В 3 — слухи о гостях: It is said that... / Loki is believed to... / Thor is said to have... (про прошлое)."
 },
 {
  "n": 30,
  "level": "B2",
  "title": "Future Continuous и Future Perfect",
  "emoji": "⏳",
  "hook": "«This time tomorrow I'll be flying to Bali» — после этой фразы тебе все завидуют. А «By Friday I'll have watched the whole season» — это главный план любого фаната сериалов.",
  "rules": [
   "<b>Future Continuous: will be + -ing</b> — ты будешь <u>в процессе</u> в конкретный момент будущего. <i>At 9 tomorrow I'll be watching Loki.</i> = Завтра в 9 я как раз буду смотреть «Локи».",
   "Слова-подсказки для Continuous: <b>this time tomorrow / at 8 p.m. tomorrow / all evening / all day tomorrow</b>.",
   "<b>Future Perfect: will have + 3-я форма</b> — дело <u>уже будет закончено</u> к какому-то моменту. <i>By Friday I'll have finished the series.</i> = К пятнице я уже досмотрю сериал.",
   "Слова-подсказки для Perfect: <b>by Friday / by the end of the year / by the time...</b> (к пятнице, к концу года, к тому времени как...).",
   "После <b>by the time</b> и <b>when</b> ставь настоящее время, а не will (как в уроке 17): <i>By the time you arrive, I'll have left.</i>",
   "Вежливо спросить о планах: <b>Will you be using...?</b> <i>Will you be using the car tonight?</i> Так звучит мягче, без давления."
  ],
  "examples": [
   {
    "en": "This time next week, I'll be walking around Paris like Emily.",
    "ru": "Через неделю в это время я буду гулять по Парижу, как Эмили."
   },
   {
    "en": "Don't call me at 9. I'll be watching the new episode of Wednesday.",
    "ru": "Не звони мне в 9: я буду смотреть новую серию «Уэнсдей»."
   },
   {
    "en": "By the end of the year, I'll have watched all the Marvel movies.",
    "ru": "К концу года я уже посмотрю все фильмы Marvel."
   },
   {
    "en": "By the time Thor arrives, Loki will have escaped again.",
    "ru": "К тому времени, как Тор прибудет, Локи уже снова сбежит."
   },
   {
    "en": "Will you be using your Netflix account tonight?",
    "ru": "Ты будешь сегодня вечером пользоваться своим аккаунтом Netflix?"
   }
  ],
  "trap": "По-русски говорят «к тому времени, как ты придёшь», и в английском хочется поставить will в обе части. ❌ By the time you will come, I'll have left. → ✅ By the time you come, I'll have left.",
  "exercises": [
   {
    "type": "choice",
    "q": "Don't call me at 9 tonight. I ___ the new episode of Stranger Things.",
    "options": [
     "will be watching",
     "will have watched",
     "will watching",
     "be watching"
    ],
    "answer": [
     "will be watching"
    ],
    "explain": "В 9 ты будешь в процессе просмотра, а это will be + -ing."
   },
   {
    "type": "input",
    "q": "Don't worry, by the time you get home, I ___ (cook) dinner, so we can eat right away.",
    "options": [],
    "answer": [
     "will have cooked",
     "'ll have cooked"
    ],
    "explain": "by the time и «сразу поедим» значат, что ужин уже будет готов: will have + 3-я форма."
   },
   {
    "type": "choice",
    "q": "This time tomorrow, Emily ___ croissants in a café in Paris.",
    "options": [
     "will be eating",
     "will have eaten",
     "eats",
     "is eat"
    ],
    "answer": [
     "will be eating"
    ],
    "explain": "«Завтра в это время» — процесс в будущем: will be + -ing."
   },
   {
    "type": "input",
    "q": "At 10 a.m. tomorrow, Thor will ___ (fly) over the ocean on his way to Asgard, so he can't answer your call.",
    "options": [],
    "answer": [
     "be flying"
    ],
    "explain": "В 10 утра Тор будет в процессе полёта, поэтому после will идёт be + -ing."
   },
   {
    "type": "order",
    "q": "Завтра в это время я буду лететь в Рим.",
    "options": [],
    "answer": [
     "This time tomorrow I will be flying to Rome.",
     "I will be flying to Rome this time tomorrow."
    ],
    "explain": "this time tomorrow + процесс = will be flying."
   },
   {
    "type": "choice",
    "q": "By the time Thor arrives, Loki ___.",
    "options": [
     "will have escaped",
     "will has escaped",
     "will escaped",
     "escaped"
    ],
    "answer": [
     "will have escaped"
    ],
    "explain": "После will всегда have (не has), а за ним 3-я форма."
   },
   {
    "type": "input",
    "q": "By the time you ___ (arrive), I'll have left the office.",
    "options": [],
    "answer": [
     "arrive"
    ],
    "explain": "После by the time идёт настоящее время, а не will."
   },
   {
    "type": "choice",
    "q": "___ you be using your Netflix account tonight? I want to watch Loki.",
    "options": [
     "Will",
     "Are",
     "Do",
     "Have"
    ],
    "answer": [
     "Will"
    ],
    "explain": "В вопросе Future Continuous will встаёт перед подлежащим: Will you be using...?"
   },
   {
    "type": "input",
    "q": "By the end of this year, Hawkeye ___ (shoot) 10,000 arrows.",
    "options": [],
    "answer": [
     "will have shot"
    ],
    "explain": "К концу года стрелы уже будут выпущены: will have + shot (3-я форма от shoot)."
   },
   {
    "type": "choice",
    "q": "Sorry, I can't meet you at 7 tomorrow. I ___ my English homework all evening.",
    "options": [
     "will be doing",
     "will have done",
     "will doing",
     "am do"
    ],
    "answer": [
     "will be doing"
    ],
    "explain": "all evening значит процесс весь вечер: will be + -ing."
   },
   {
    "type": "input",
    "q": "Don't call me at 8. I ___ (not / finish) work by then.",
    "options": [],
    "answer": [
     "won't have finished",
     "will not have finished"
    ],
    "explain": "К 8 работа ещё не будет закончена, поэтому won't have + 3-я форма."
   },
   {
    "type": "order",
    "q": "К пятнице я уже посмотрю весь сериал.",
    "options": [],
    "answer": [
     "By Friday I will have watched the whole series.",
     "I will have watched the whole series by Friday."
    ],
    "explain": "«К пятнице уже» = by Friday + will have watched."
   }
  ],
  "homework": "На дворе октябрь 2027 года, и ты путешествуешь по миру. Напиши 8 предложений о своём будущем. В 4 предложениях опиши, что ты будешь делать в конкретные моменты (This time next year I'll be living in... / At 8 a.m. on Monday I'll be...). В 3 — чего ты уже добьёшься к определённому сроку (By June I'll have visited... / By the end of the year I'll have reached B2...). Ещё одно предложение составь с by the time + настоящее время."
 },
 {
  "n": 31,
  "level": "B2",
  "title": "Связки противопоставления: although / even though / despite / in spite of / however / whereas",
  "emoji": "⚖️",
  "hook": "«Although he's a villain, everyone loves Loki» — на таких «хотя» и «несмотря на» держатся все любимые антигерои. Без этих слов речь на B2 не получится.",
  "rules": [
   "<b>although / even though + подлежащее + глагол</b> = «хотя». <i>Although it was raining, we went out.</i> Even though звучит сильнее: «даже несмотря на то что».",
   "<b>despite / in spite of + существительное или -ing</b> = «несмотря на». <i>Despite the rain... / Despite being tired...</i> После despite <u>нет</u> of: ❌ despite of.",
   "Хочешь после despite целое предложение? Добавь <b>the fact that</b>: <i>Despite the fact that it was late, we watched one more episode.</i>",
   "<b>However</b> начинает новое предложение, после него ставится запятая: <i>It was expensive. However, we bought it.</i> = Тем не менее / однако.",
   "<b>whereas / while</b> = «а, в то время как»: сравниваешь двух разных людей или вещи. <i>Thor is loud, whereas Loki is sneaky.</i>",
   "По-русски говорят «хотя..., но...», а в английском <b>although и but вместе не ставят</b>: оставь только одно из них."
  ],
  "examples": [
   {
    "en": "Although Wednesday hates people, she saved the whole school.",
    "ru": "Хотя Уэнсдей ненавидит людей, она спасла всю школу."
   },
   {
    "en": "Despite the rain, Emily went to the party in her new shoes.",
    "ru": "Несмотря на дождь, Эмили пошла на вечеринку в новых туфлях."
   },
   {
    "en": "In spite of being tired, I watched three more episodes.",
    "ru": "Несмотря на усталость, я посмотрела ещё три серии."
   },
   {
    "en": "Loki is a liar. However, everyone loves him.",
    "ru": "Локи врун. Тем не менее его все любят."
   },
   {
    "en": "Joey loves food, whereas Monica loves cleaning.",
    "ru": "Джоуи обожает еду, а Моника обожает уборку."
   }
  ],
  "trap": "Это калька с русского «Хотя она устала, но...». ❌ Although she was tired, but she watched another episode. → ✅ Although she was tired, she watched another episode.",
  "exercises": [
   {
    "type": "choice",
    "q": "___ the rain, Emily went to the party in her new shoes.",
    "options": [
     "Despite",
     "Although",
     "However"
    ],
    "answer": [
     "Despite"
    ],
    "explain": "Дальше идёт существительное (the rain), значит нужно despite."
   },
   {
    "type": "input",
    "q": "Despite ___ (be) tired, Steve kept fighting.",
    "options": [],
    "answer": [
     "being"
    ],
    "explain": "После despite глагол ставится в форме -ing."
   },
   {
    "type": "choice",
    "q": "Loki is a liar. ___, everyone loves him.",
    "options": [
     "However",
     "Although",
     "Despite",
     "Even though"
    ],
    "answer": [
     "However"
    ],
    "explain": "Новое предложение с запятой после связки начинается с However."
   },
   {
    "type": "input",
    "q": "In spite ___ (предлог) the bad reviews, I loved the last season of Stranger Things.",
    "options": [],
    "answer": [
     "of"
    ],
    "explain": "Выражение пишется целиком: in spite of + существительное."
   },
   {
    "type": "order",
    "q": "Я пошла гулять, несмотря на дождь.",
    "options": [],
    "answer": [
     "I went for a walk despite the rain.",
     "Despite the rain I went for a walk."
    ],
    "explain": "despite + существительное, без of."
   },
   {
    "type": "choice",
    "q": "___ Wednesday hates people, she helped her classmates.",
    "options": [
     "Although",
     "Despite",
     "In spite of",
     "However"
    ],
    "answer": [
     "Although"
    ],
    "explain": "Дальше идёт целое предложение (Wednesday hates), значит нужно although."
   },
   {
    "type": "input",
    "q": "Thor eats a lot, ___ Loki hardly eats anything. (одно слово на w: «в то время как»)",
    "options": [],
    "answer": [
     "whereas",
     "while",
     "whilst"
    ],
    "explain": "Сравниваешь двух разных героев, поэтому нужно whereas (или while)."
   },
   {
    "type": "choice",
    "q": "Despite ___ a lot of money, Tony Stark isn't always happy.",
    "options": [
     "having",
     "he has",
     "have",
     "of having"
    ],
    "answer": [
     "having"
    ],
    "explain": "После despite идёт -ing, а не подлежащее с глаголом и не of."
   },
   {
    "type": "input",
    "q": "Despite the fact ___ (союз «что») it was expensive, we booked the hotel in Paris.",
    "options": [],
    "answer": [
     "that"
    ],
    "explain": "Чтобы после despite шло целое предложение, нужно the fact that."
   },
   {
    "type": "choice",
    "q": "Although Peter Parker is only a teenager, ___ saved the city many times.",
    "options": [
     "he has",
     "but he has",
     "however he has",
     "despite he has"
    ],
    "answer": [
     "he has"
    ],
    "explain": "Раз в начале стоит although, во второй части ни but, ни however не нужны."
   },
   {
    "type": "input",
    "q": "We missed our flight. ___, the airline gave us a free hotel room. (связка «однако» в начале нового предложения)",
    "options": [],
    "answer": [
     "However",
     "however"
    ],
    "explain": "However начинает новое предложение, после него ставится запятая."
   },
   {
    "type": "order",
    "q": "Она смотрит «Друзей» на английском, хотя это сложно.",
    "options": [],
    "answer": [
     "She watches Friends in English although it is hard.",
     "Although it is hard she watches Friends in English."
    ],
    "explain": "although + целое предложение (it is hard), без but."
   }
  ],
  "homework": "Ты пишешь сценарий нового сезона «Уэнсдей». Напиши 8 предложений про героев. Каждая связка должна встретиться хотя бы один раз: although, even though, despite + -ing, in spite of + существительное, however (в начале нового предложения), whereas. Пример: Although Enid is scared of everything, she always helps Wednesday. Ни в одном предложении не ставь although и but вместе!"
 },
 {
  "n": 32,
  "level": "B2",
  "title": "Косвенные вопросы и вежливые формулировки: Could you tell me where...? Do you know if...?",
  "emoji": "🙋‍♀️",
  "hook": "Если спросить незнакомца в лоб «Where is the toilet?», это звучит резко. А «Could you tell me where the toilet is?» вежливо откроет тебе дверь в любом отеле, аэропорту и офисе.",
  "rules": [
   "После вежливого начала (<b>Could you tell me / Do you know / I wonder / I'd like to know</b>) порядок слов как в утверждении: <b>вопросительное слово + подлежащее + глагол</b>.",
   "<i>Where is the station?</i> → <i>Could you tell me where <b>the station is</b>?</i> Is уходит в конец, за подлежащее.",
   "<b>do / does / did исчезают</b>, а глагол принимает нужную форму: <i>Where does she live?</i> → <i>Do you know where she <b>lives</b>?</i> / <i>When did they meet?</i> → <i>...when they <b>met</b>?</i>",
   "Если вопрос «да/нет», добавь <b>if</b> или <b>whether</b> (= «ли»): <i>Is it open?</i> → <i>Do you know <b>if</b> it's open?</i>",
   "Совсем вежливо: <b>Would you mind telling me...?</b> (после mind идёт -ing, как в уроке 18).",
   "Знак вопроса ставь, только если само начало — вопрос: <i>Do you know where he is?</i> Но: <i>I wonder where he is.</i> (с точкой)."
  ],
  "examples": [
   {
    "en": "Excuse me, could you tell me where the Eiffel Tower is?",
    "ru": "Извините, не подскажете, где Эйфелева башня?"
   },
   {
    "en": "Do you know if this café has vegan croissants?",
    "ru": "Не знаете, есть ли в этом кафе веганские круассаны?"
   },
   {
    "en": "I wonder why Loki tells so many lies.",
    "ru": "Интересно, почему Локи столько врёт."
   },
   {
    "en": "Would you mind telling me what time the meeting starts?",
    "ru": "Не могли бы вы сказать, во сколько начинается встреча?"
   },
   {
    "en": "Do you know when the new season of Wednesday comes out?",
    "ru": "Не знаешь, когда выходит новый сезон «Уэнсдей»?"
   }
  ],
  "trap": "По-русски порядок слов в обоих вопросах одинаковый, поэтому в английский переносят обычный прямой вопрос. ❌ Could you tell me where is the station? → ✅ Could you tell me where the station is?",
  "exercises": [
   {
    "type": "choice",
    "q": "Excuse me, could you tell me where ___?",
    "options": [
     "the station is",
     "is the station",
     "does the station",
     "the station does"
    ],
    "answer": [
     "the station is"
    ],
    "explain": "После could you tell me порядок как в утверждении: подлежащее + глагол."
   },
   {
    "type": "input",
    "q": "Do you know ___ the museum is open on Mondays? (вопрос «да/нет», «ли»)",
    "options": [],
    "answer": [
     "if",
     "whether"
    ],
    "explain": "В косвенном вопросе «да/нет» «ли» передаётся через if или whether."
   },
   {
    "type": "choice",
    "q": "Do you know what time ___?",
    "options": [
     "the film starts",
     "does the film start",
     "starts the film",
     "does start the film"
    ],
    "answer": [
     "the film starts"
    ],
    "explain": "does исчезает, а у глагола появляется -s: the film starts."
   },
   {
    "type": "input",
    "q": "Where does Wednesday live? → Do you know where Wednesday ___ (live)?",
    "options": [],
    "answer": [
     "lives"
    ],
    "explain": "does пропадает, и его -s переходит на глагол: lives."
   },
   {
    "type": "order",
    "q": "Вы не подскажете, где туалет?",
    "options": [],
    "answer": [
     "Could you tell me where the toilet is?"
    ],
    "explain": "is ставится в конец, после подлежащего the toilet."
   },
   {
    "type": "choice",
    "q": "I wonder ___.",
    "options": [
     "why Loki tells so many lies",
     "why does Loki tell so many lies",
     "why Loki does tells so many lies"
    ],
    "answer": [
     "why Loki tells so many lies"
    ],
    "explain": "После I wonder нет does, порядок прямой: Loki tells."
   },
   {
    "type": "input",
    "q": "When did the Avengers meet? → Do you know when the Avengers ___ (meet)?",
    "options": [],
    "answer": [
     "met"
    ],
    "explain": "did пропадает, поэтому глагол сам встаёт в прошедшее время: met."
   },
   {
    "type": "choice",
    "q": "Would you mind ___ me how to get to the Eiffel Tower?",
    "options": [
     "telling",
     "to tell",
     "tell",
     "told"
    ],
    "answer": [
     "telling"
    ],
    "explain": "После mind глагол ставится в форме -ing."
   },
   {
    "type": "input",
    "q": "How much is this ticket? → Could you tell me how much this ticket ___ (be)?",
    "options": [],
    "answer": [
     "is"
    ],
    "explain": "is переезжает в конец, после подлежащего this ticket."
   },
   {
    "type": "choice",
    "q": "Can you tell me ___ the hotel has free Wi-Fi?",
    "options": [
     "if",
     "does",
     "is",
     "has"
    ],
    "answer": [
     "if"
    ],
    "explain": "Вопрос «да/нет», поэтому нужно if, а does пропадает."
   },
   {
    "type": "input",
    "q": "Have you seen my keys? → I'd like to know if you ___ (see; время то же) my keys.",
    "options": [],
    "answer": [
     "have seen",
     "'ve seen"
    ],
    "explain": "Время остаётся Present Perfect, только have встаёт после подлежащего you: if you have seen."
   },
   {
    "type": "order",
    "q": "Не подскажете, есть ли поблизости аптека?",
    "options": [],
    "answer": [
     "Do you know if there is a pharmacy nearby?",
     "Do you know if there is a nearby pharmacy?"
    ],
    "explain": "«есть ли» = if there is, порядок прямой."
   }
  ],
  "homework": "Ты прилетела в Нью-Йорк и ищешь места, где снимали «Друзей». Напиши 8 вежливых вопросов прохожим, администратору отеля и гиду. Используй Could you tell me..., Do you know..., I wonder... (с точкой!) и Would you mind telling me...? Минимум 2 вопроса должны быть с if и минимум 1 — про прошлое (Do you know when this café opened?). Для проверки рядом с каждым напиши обычный прямой вопрос и сравни порядок слов."
 }
];
