// Сезон 1: «Paper & Tea on Kettle Island». Сгенерировано и проверено редакторами.
const COURSE = {
 "title": "Paper & Tea on Kettle Island",
 "title_ru": "Бумага и чай на острове Чайник",
 "premise_ru": "Тебе 24, ты создаёшь онлайн-курсы с помощью ИИ, и вдруг тебе в наследство достаётся крошечная лавка бумаги и чая на зелёном острове, где старый холм каждое утро выпускает облачко тёплого пара, как чайник. Ты приезжаешь, чтобы быстро её продать, но против этого, кажется, ворчливый кот-«управляющий», старая тетрадь, которая оживает от твоих слов, и голубые письма без подписи.",
 "characters": [
  {
   "id": "narrator",
   "name": "Narrator",
   "look": "Never seen; only a warm voice, like someone reading a bedtime story by a rainy window.",
   "speech": "Second-person present simple ('You open the door. The bell rings.'), used receptively from Day 1; always within the day's word limit; repeats the day's words naturally.",
   "voice": {
    "gender": "female",
    "pitch": 1,
    "rate": 0.85
   }
  },
  {
   "id": "you",
   "name": "You",
   "look": "A young woman in a big knitted scarf with a laptop bag, a suitcase with travel stickers and a brass key on a red ribbon around her wrist.",
   "speech": "Short, simple sentences at her current level, using only taught grammar. Her lines are deliberately reusable in her real life (job, AI tools, travel, series). In 'say' moments the app pauses so she can speak aloud.",
   "voice": {
    "gender": "female",
    "pitch": 1.1,
    "rate": 0.85
   }
  },
  {
   "id": "pepper",
   "name": "Pepper",
   "look": "A big fluffy smoke-grey cat with a white bib, one white sock, a slightly bent ear and very serious amber eyes.",
   "speech": "Very short dry lines ('You are late.' 'Humans.'). Once a day he corrects the day's typical Russian-speaker mistake with a funny image and always ends with his catchphrase 'Write it down.', which sends her to the notebook step. Never uses grammar above the day.",
   "voice": {
    "gender": "male",
    "pitch": 0.65,
    "rate": 0.9
   }
  },
  {
   "id": "bram",
   "name": "Bram",
   "look": "A huge man with a grey beard, rolled-up sleeves, a striped apron and a wooden spoon always in his hand.",
   "speech": "Simple loud statements and friendly questions ('Eat first. Talk later.' 'I don't have deadlines. I have soup.'); uses the day's words often; the app keeps his lines short.",
   "voice": {
    "gender": "male",
    "pitch": 0.9,
    "rate": 0.88
   }
  },
  {
   "id": "theo",
   "name": "Theo",
   "look": "A tall young man with sun-bleached hair, yellow rubber boots, oil on his hands and a canvas mail bag over his shoulder.",
   "speech": "Casual friendly small talk with many questions ('Do you often watch series?' 'Really? Me too!'); gentle humor; never pushy.",
   "voice": {
    "gender": "male",
    "pitch": 1.05,
    "rate": 0.9
   }
  },
  {
   "id": "mira",
   "name": "Mira",
   "look": "A woman in her thirties in a bright yellow raincoat, with a backpack full of cables and two phones.",
   "speech": "Clear international-office English: travel phrases, interview-style questions ('Can you design a whole course?' 'What was the result?') and video-call phrases; always simple and polite.",
   "voice": {
    "gender": "female",
    "pitch": 1.1,
    "rate": 0.9
   }
  },
  {
   "id": "ansel",
   "name": "Mr. Ansel",
   "look": "An old man in a thick knitted sweater and a flat cap, with round glasses and a brass pocket barometer on a chain.",
   "speech": "Slow, short, thoughtful sentences with pauses; mostly was/were and past forms from Day 7 ('Vera was my friend. We were young.').",
   "voice": {
    "gender": "male",
    "pitch": 0.8,
    "rate": 0.78
   }
  },
  {
   "id": "vera",
   "name": "Great-Aunt Vera",
   "look": "Seen only as looping handwriting, a faded photo of a hand holding a teacup, and a green silk scarf still on its hook.",
   "speech": "Short warm letters with a small instruction or riddle at the end, signed with a paper-boat drawing; grammar always matches the day.",
   "voice": {
    "gender": "female",
    "pitch": 0.9,
    "rate": 0.8
   }
  }
 ],
 "locations": [
  {
   "id": "ferry-pier-morning",
   "name_en": "Kettleby pier, early morning",
   "name_ru": "Пристань Кеттлби, раннее утро"
  },
  {
   "id": "shop-dusty-day",
   "name_en": "The closed shop, dusty daylight",
   "name_ru": "Закрытая лавка, пыльный день"
  },
  {
   "id": "steam-garden-morning",
   "name_en": "The Steam Garden greenhouse café, morning",
   "name_ru": "Кафе-оранжерея «Паровой сад», утро"
  },
  {
   "id": "harbor-noon",
   "name_en": "The harbor at noon",
   "name_ru": "Гавань в полдень"
  },
  {
   "id": "lane-windy-dusk",
   "name_en": "Stair-lane in wind and rain, dusk",
   "name_ru": "Улица-лестница в ветер и дождь, сумерки"
  },
  {
   "id": "shop-night-lamp",
   "name_en": "The shop at night, lamplight and magic",
   "name_ru": "Лавка ночью, свет лампы и волшебство"
  },
  {
   "id": "shop-bright-morning",
   "name_en": "The reopened shop, bright morning",
   "name_ru": "Обновлённая лавка, светлое утро"
  },
  {
   "id": "stair-lane-afternoon",
   "name_en": "Stair-lane, golden afternoon",
   "name_ru": "Улица-лестница, золотой день"
  },
  {
   "id": "cable-car-afternoon",
   "name_en": "Red cable car over the island, afternoon",
   "name_ru": "Красная канатная кабинка над островом, день"
  },
  {
   "id": "weather-station-golden",
   "name_en": "The weather station on the Kettle, golden hour",
   "name_ru": "Метеостанция на вершине Чайника, золотой час"
  },
  {
   "id": "paper-boat-night",
   "name_en": "Paper Boat Night on the bay",
   "name_ru": "Ночь бумажных корабликов в бухте"
  }
 ],
 "days": [
  {
   "day": 1,
   "title": "A Key on a Red Ribbon",
   "title_ru": "Ключ на красной ленте",
   "logline_ru": "Белый паром привозит тебя на остров, где холм пыхтит, как чайник, а в пыльной лавке тебя ждёт очень строгий кот.",
   "cover": "ferry-pier-morning",
   "beats": [
    {
     "t": "scene",
     "art": "ferry-pier-morning",
     "place_en": "Kettleby pier, early morning",
     "place_ru": "Пристань Кеттлби, раннее утро",
     "emoji": "🌅"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The white ferry is at the pier.",
     "ru": "Белый паром стоит у пристани."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You're on the pier with one suitcase.",
     "ru": "Ты на пристани с одним чемоданом."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "This is your first trip here.",
     "ru": "Ты здесь впервые."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A brass key is on your wrist.",
     "ru": "На запястье у тебя латунный ключ."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The key is on a red ribbon.",
     "ru": "Ключ висит на красной ленте."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your plan: sell Great-Aunt Vera's shop.",
     "ru": "Твой план — продать лавку двоюродной бабушки Веры."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The hill puffs steam like a kettle.",
     "ru": "Зелёный холм пыхтит паром, как чайник."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A wooden sign: Welcome to Kettleby!",
     "ru": "Деревянная табличка: «Добро пожаловать в Кеттлби!»"
    },
    {
     "t": "line",
     "who": "you",
     "en": "I'm a learning designer, not a shopkeeper.",
     "ru": "Я методист, а не лавочница."
    },
    {
     "t": "line",
     "who": "you",
     "en": "I'm a bit tired, but I'm excited.",
     "ru": "Я немного устала, но я в предвкушении."
    },
    {
     "t": "scene",
     "art": "shop-dusty-day",
     "place_en": "Vera's Paper & Tea, dusty daylight",
     "place_ru": "Лавка «Бумага и чай» Веры, пыльный дневной свет",
     "emoji": "🗝️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The stair-lane is full of wind chimes.",
     "ru": "Улочка-лестница полна ветряных колокольчиков."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You're at a green door.",
     "ru": "Ты стоишь у зелёной двери."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The key turns, and the bell rings.",
     "ru": "Ключ поворачивается, и звенит колокольчик."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Inside, the shop is dusty and golden.",
     "ru": "Внутри лавка пыльная и вся в золотом свете."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A grey cat opens one amber eye.",
     "ru": "Серый кот приоткрывает один янтарный глаз."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "You are late.",
     "ru": "Ты опоздала."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Wait. A talking cat?",
     "ru": "Стоп. Говорящий кот?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "And you're a bit slow.",
     "ru": "А ты немного тормозишь."
    },
    {
     "t": "choice",
     "q_en": "What do you say?",
     "q_ru": "Что ты скажешь?",
     "options": [
      {
       "en": "Hello! I'm {name}. Nice to meet you.",
       "ru": "Привет! Я {name}. Приятно познакомиться.",
       "flag": "polite",
       "reply": [
        {
         "who": "pepper",
         "en": "Yes, yes, {name}. I'm Pepper.",
         "ru": "Да-да, {name}. Я Пеппер."
        },
        {
         "who": "pepper",
         "en": "I'm the shop manager.",
         "ru": "Я управляющий лавкой."
        }
       ]
      },
      {
       "en": "Who are you?",
       "ru": "А ты кто такой?",
       "flag": "direct",
       "reply": [
        {
         "who": "pepper",
         "en": "Rude. I'm Pepper.",
         "ru": "Грубо. Я Пеппер."
        },
        {
         "who": "pepper",
         "en": "I'm the shop manager.",
         "ru": "Я управляющий лавкой."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Welcome to Vera's shop, human.",
     "ru": "Добро пожаловать в лавку Веры, человек."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Now, questions.",
     "ru": "А теперь — вопросы."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Are you a tourist?",
     "ru": "Ты туристка?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "No, I'm not a tourist.",
     "ru": "Нет, я не туристка."
    },
    {
     "t": "line",
     "who": "you",
     "en": "But it's my first trip here.",
     "ru": "Но я здесь впервые."
    },
    {
     "t": "line",
     "who": "you",
     "en": "I'm Vera's great-niece.",
     "ru": "Я внучатая племянница Веры."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "So the key is yours now.",
     "ru": "Значит, ключ теперь твой."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Where are you from?",
     "ru": "Откуда ты?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "What's your job?",
     "ru": "Кем работаешь?"
    },
    {
     "t": "say",
     "to": "pepper",
     "task_ru": "Представься Пепперу, как при настоящем знакомстве: имя, откуда ты, где живёшь и работаешь сейчас, кем работаешь. Бонус: скажи, как ты себя чувствуешь. Говори вслух и подставь свои данные.",
     "hint_ru": "I'm + имя. / I'm from + город. / I'm based in + город. / I'm a learning designer. / Бонус: I'm a bit …, but I'm … . Города замени на свои.",
     "example_en": "I'm {name}. I'm from Kazan. I'm based in Moscow. I'm a learning designer. I'm a bit tired, but I'm excited.",
     "example_ru": "Я {name}. Я из Казани. Живу и работаю в Москве. Я методист. Я немного устала, но я в предвкушении.",
     "accept": [
      "i'm",
      "i am",
      "from",
      "based in",
      "designer"
     ],
     "after": [
      {
       "who": "pepper",
       "en": "A learning designer. Hm. Fancy.",
       "ru": "Методист. Хм. Солидно."
      },
      {
       "who": "pepper",
       "en": "Now you're based in a dusty shop.",
       "ru": "А теперь твоя база — пыльная лавка."
      },
      {
       "who": "pepper",
       "en": "Are you from a big city?",
       "ru": "Ты из большого города?"
      },
      {
       "who": "narrator",
       "en": "You are nervous now.",
       "ru": "Ты уже волнуешься."
      },
      {
       "who": "you",
       "en": "Er... yes. I from a big city.",
       "ru": "Э-э... да. Я из большого города."
      },
      {
       "who": "pepper",
       "en": "Not I from. I AM from.",
       "ru": "Не «I from». «I AM from»."
      },
      {
       "who": "pepper",
       "en": "No AM, no legs.",
       "ru": "Нет AM — нет ног."
      },
      {
       "who": "pepper",
       "en": "Your sentence is on the floor.",
       "ru": "Твоё предложение валяется на полу."
      },
      {
       "who": "you",
       "en": "OK. I'm from a big city.",
       "ru": "Ладно. Я из большого города."
      },
      {
       "who": "pepper",
       "en": "Better. Write it down.",
       "ru": "Уже лучше. Запиши."
      }
     ]
    },
    {
     "t": "check",
     "q_en": "Who is Pepper?",
     "q_ru": "Кто такой Пеппер?",
     "options": [
      {
       "en": "The shop cat and manager",
       "ru": "Кот и управляющий лавкой",
       "correct": true
      },
      {
       "en": "A ferry pilot",
       "ru": "Капитан парома",
       "correct": false
      },
      {
       "en": "A café owner",
       "ru": "Хозяин кафе",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "pepper",
       "en": "Look at my paws.",
       "ru": "Посмотри на мои лапы."
      },
      {
       "who": "pepper",
       "en": "I'm the shop cat. And the manager.",
       "ru": "Я кот этой лавки. И управляющий."
      }
     ],
     "right": [
      {
       "who": "pepper",
       "en": "Correct. I'm the cat and the manager.",
       "ru": "Верно. Я и кот, и управляющий."
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "Nice to meet you, Pepper.",
     "ru": "Приятно познакомиться, Пеппер."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Hm. Nice to meet you too... maybe.",
     "ru": "Хм. Мне тоже приятно... наверное."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A leather notebook is on the counter.",
     "ru": "На прилавке лежит кожаная тетрадь."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "That's Vera's notebook.",
     "ru": "Это тетрадь Веры."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Is it a guest book?",
     "ru": "Это книга для гостей?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "No, it isn't. Write your name.",
     "ru": "Нет. Напиши своё имя."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You write your name: {name}.",
     "ru": "Ты пишешь своё имя: {name}."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The letters glow gold.",
     "ru": "Буквы вспыхивают золотом."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A tiny ink boat sails away!",
     "ru": "Крошечный чернильный кораблик уплывает со страницы!"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Pepper! Is this normal?",
     "ru": "Пеппер! Это нормально?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Oh no. The notebook is awake.",
     "ru": "О нет. Тетрадь проснулась."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "And this shop isn't for sale, human.",
     "ru": "И эта лавка не продаётся, человек."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Paper Boat Night is in ten days.",
     "ru": "До Ночи бумажных корабликов — десять дней."
    }
   ],
   "hook_ru": "Кот будит тебя в шесть утра, а в тёплой оранжерее ждут суп, бородатый великан и очень неловкая тишина.",
   "notebook": {
    "words": [
     {
      "en": "learning designer",
      "ru": "методист, дизайнер обучения",
      "emoji": "💻",
      "story_ex": "I'm a learning designer, not a shopkeeper.",
      "my_ex": "I'm a learning designer at an EdTech company.",
      "my_ex_ru": "Я методист в EdTech-компании."
     },
     {
      "en": "based in",
      "ru": "живу и работаю в… (I'm based in + город)",
      "emoji": "📍",
      "story_ex": "Now you're based in a dusty shop.",
      "my_ex": "I'm based in Moscow, but my team is international.",
      "my_ex_ru": "Я живу и работаю в Москве, но команда у меня международная."
     },
     {
      "en": "nice to meet you",
      "ru": "приятно познакомиться",
      "emoji": "🤝",
      "story_ex": "Nice to meet you, Pepper.",
      "my_ex": "Hi, team! I'm {name}. Nice to meet you!",
      "my_ex_ru": "Всем привет! Я {name}. Приятно познакомиться!"
     },
     {
      "en": "first trip",
      "ru": "первая поездка",
      "emoji": "⛴️",
      "story_ex": "But it's my first trip here.",
      "my_ex": "My first trip to Italy is in May.",
      "my_ex_ru": "Моя первая поездка в Италию — в мае."
     },
     {
      "en": "a bit",
      "ru": "немного, чуть-чуть",
      "emoji": "🤏",
      "story_ex": "I'm a bit tired, but I'm excited.",
      "my_ex": "My English is a bit slow, but it's OK.",
      "my_ex_ru": "Я говорю по-английски немного медленно, но это ничего."
     },
     {
      "en": "excited",
      "ru": "в предвкушении, радостно взволнована",
      "emoji": "✨",
      "story_ex": "I'm a bit tired, but I'm excited.",
      "my_ex": "I'm excited about my new AI project.",
      "my_ex_ru": "Я в восторге от своего нового ИИ-проекта."
     },
     {
      "en": "key",
      "ru": "ключ",
      "emoji": "🗝️",
      "story_ex": "The key is on a red ribbon.",
      "my_ex": "My laptop is my key to remote work.",
      "my_ex_ru": "Мой ноутбук — мой ключ к удалённой работе."
     },
     {
      "en": "welcome",
      "ru": "добро пожаловать",
      "emoji": "🪧",
      "story_ex": "Welcome to Vera's shop, human.",
      "my_ex": "Welcome to my online course!",
      "my_ex_ru": "Добро пожаловать на мой онлайн-курс!"
     }
    ],
    "phrases": [
     {
      "en": "Hi! I'm {name}. I'm from ___.",
      "ru": "Привет! Я {name}. Я из ___.",
      "when_ru": "Первое знакомство в поездке: в хостеле, на экскурсии, в начале видеозвонка. Подставь свой город или страну."
     },
     {
      "en": "I'm based in ___. I'm a learning designer in EdTech.",
      "ru": "Я живу и работаю в ___. Я методист в EdTech.",
      "when_ru": "Когда спрашивают What's your job? или Where are you based? — в дороге, в кафе, на собеседовании."
     },
     {
      "en": "I'm a bit tired, but I'm really excited!",
      "ru": "Я немного устала, но я в восторге!",
      "when_ru": "Когда спрашивают How are you? после перелёта или в первый день на новом месте."
     }
    ],
    "rule": {
     "title_ru": "Глагол to be: am / is / are — без него предложение «без ног»",
     "rows": [
      [
       "I",
       "am ('m)",
       "a learning designer."
      ],
      [
       "he / she / it",
       "is ('s)",
       "the shop manager."
      ],
      [
       "you / we / they",
       "are ('re)",
       "excited."
      ],
      [
       "−",
       "I'm not / she isn't / they aren't",
       "tired."
      ],
      [
       "?",
       "Am I / Is she / Are you",
       "late?"
      ],
      [
       "Wh-?",
       "Where are you",
       "from?"
      ],
      [
       "Wh-?",
       "What's (what is)",
       "your job?"
      ]
     ],
     "examples": [
      {
       "en": "I'm a learning designer. I'm not a tourist.",
       "ru": "Я методист. Я не туристка."
      },
      {
       "en": "I'm from Kazan, but I'm based in Moscow.",
       "ru": "Я из Казани, но живу и работаю в Москве."
      },
      {
       "en": "My team is international. We aren't in the same city.",
       "ru": "У меня международная команда. Мы не в одном городе."
      }
     ],
     "tip_ru": "По-русски можно сказать «Я методист», «Я из Москвы», «Я устала» — без глагола. По-английски так нельзя: после I / you / he / she / it / we / they всегда нужен am / is / are. Нет глагола — у предложения нет ног, и оно падает на пол.",
     "mistake": "❌ I from Moscow. I tired. → ✅ I'm from Moscow. I'm tired."
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Выбери правильную форму. Зачем: узнавать am / is / are в предложении и выбирать нужную. Подсказка: team — это одна команда, в английском это it.",
     "q": "I ___ (am / is / are) a learning designer, and my team ___ (am / is / are) international.",
     "answer": "am, is",
     "alt": [
      "am is",
      "am / is",
      "am; is",
      "I am a learning designer, and my team is international.",
      "I'm a learning designer, and my team is international."
     ],
     "note_ru": "С I всегда am. Team — одна команда, то есть it, значит is."
    },
    {
     "kind": "gap",
     "task_ru": "Вставь выражения дня: based in / first trip / a bit. Зачем: закрепить новые выражения в готовой фразе для знакомства.",
     "q": "Hi! I'm {name}. I'm from Kazan, but I'm ___ Moscow. It's my ___ here. I'm ___ tired.",
     "answer": "based in, first trip, a bit",
     "alt": [
      "based in first trip a bit",
      "based in / first trip / a bit",
      "Hi! I'm {name}. I'm from Kazan, but I'm based in Moscow. It's my first trip here. I'm a bit tired."
     ],
     "note_ru": "I'm based in + город — где ты живёшь и работаешь сейчас. It's my first trip here — я здесь впервые. A bit — «немного» перед прилагательным: a bit tired."
    },
    {
     "kind": "order",
     "task_ru": "Расставь слова по порядку. Зачем: запомнить порядок «я + am + кто», он нужен при любом знакомстве.",
     "q": "a / I'm / designer / learning / EdTech / in",
     "answer": "I'm a learning designer in EdTech.",
     "alt": [
      "I'm a learning designer in EdTech",
      "I am a learning designer in EdTech.",
      "In EdTech, I'm a learning designer."
     ],
     "note_ru": "Сначала I'm, потом a + кто (learning designer), в конце где (in EdTech)."
    },
    {
     "kind": "fix",
     "task_ru": "Найди и исправь две ошибки, как Пеппер. Зачем: поймать самую частую ошибку русскоговорящих — пропущенный глагол.",
     "q": "I from Moscow and I very excited.",
     "answer": "I'm from Moscow and I'm very excited.",
     "alt": [
      "I am from Moscow and I am very excited.",
      "I'm from Moscow, and I'm very excited.",
      "I am from Moscow, and I am very excited.",
      "I'm from Moscow and I am very excited.",
      "I am from Moscow and I'm very excited.",
      "I'm from Moscow and very excited.",
      "I'm from Moscow, and very excited."
     ],
     "note_ru": "Нет AM — нет ног. Перед from и перед прилагательным (very excited) нужен am."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Зачем: научиться говорить, как ты себя чувствуешь.",
     "q": "Я немного устала, но я в предвкушении.",
     "answer": "I'm a bit tired, but I'm excited.",
     "alt": [
      "I'm a bit tired but I'm excited.",
      "I am a bit tired, but I am excited.",
      "I am a bit tired but I am excited.",
      "I'm a bit tired, but excited.",
      "I'm a bit tired but excited.",
      "I am a bit tired, but excited."
     ],
     "note_ru": "«Устала» и «в предвкушении» — состояния, поэтому I'm + tired / excited. Глагол не пропускаем."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Зачем: отрицание с to be — вежливо поправить, если тебя приняли не за ту.",
     "q": "Я здесь впервые. Я не туристка, я методист.",
     "answer": "It's my first trip here. I'm not a tourist, I'm a learning designer.",
     "alt": [
      "It's my first trip here. I'm not a tourist. I'm a learning designer.",
      "It is my first trip here. I am not a tourist, I am a learning designer.",
      "It is my first trip here. I am not a tourist. I am a learning designer.",
      "This is my first trip here. I'm not a tourist, I'm a learning designer.",
      "This is my first trip here. I'm not a tourist. I'm a learning designer.",
      "It's my first time here. I'm not a tourist, I'm a learning designer.",
      "It's my first time here. I'm not a tourist. I'm a learning designer.",
      "It's my first trip here. I'm not a tourist. I'm a methodologist."
     ],
     "note_ru": "«Я здесь впервые» естественно звучит как It's my first trip here. Отрицание: I'm not + кто."
    },
    {
     "kind": "question",
     "task_ru": "Задай вопрос, на который это ответ. Зачем: эти два вопроса тебе зададут в поездке и на собеседовании, а ты сможешь задать их сама.",
     "q": "1) «Yes, I'm excited.» → ___? 2) «I'm a learning designer.» → What ___?",
     "answer": "1) Are you excited? 2) What's your job?",
     "alt": [
      "Are you excited? What's your job?",
      "Are you excited? What is your job?",
      "1) Are you excited? 2) What is your job?",
      "Are you excited? / What's your job?",
      "Are you excited? / What is your job?"
     ],
     "note_ru": "В вопросе are встаёт перед you: Are you…? Вопрос о работе — готовая фраза What's your job? (what + is)."
    },
    {
     "kind": "write",
     "task_ru": "Напиши 3–4 предложения о себе для первого видеозвонка с международной командой: имя, откуда ты и где живёшь, кем работаешь, как себя чувствуешь. Зачем: это твоя готовая речь для знакомства — выучи её и говори вслух.",
     "q": "Hi, I'm ... I'm from ..., but I'm based in ... I'm a ... I'm a bit ..., but I'm ...",
     "answer": "Hi, I'm {name}. I'm from Kazan, but I'm based in Moscow. I'm a learning designer in EdTech. I'm a bit nervous, but I'm really excited!",
     "alt": [],
     "note_ru": "Проверь себя: в каждом предложении есть am / is / are, после I стоит am ('m). Города и чувства — твои собственные."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Как в сцене с Пеппером: представься новому человеку в поездке — скажи имя, откуда ты и где живёшь сейчас. Бонус: добавь ещё одно предложение.",
     "template_en": "I'm ___. I'm from ___, but I'm based in ___. Nice to meet you!",
     "sample_en": "I'm {name}. I'm from Kazan, but I'm based in Moscow. Nice to meet you!",
     "sample_ru": "Я {name}. Я из Казани, но живу и работаю в Москве. Приятно познакомиться!"
    },
    {
     "prompt_ru": "Ты на первом видеозвонке с международной командой или на собеседовании. Скажи, кем ты работаешь и какая у тебя команда. Бонус: добавь ещё одно предложение.",
     "template_en": "I'm a learning designer in ___. My team is ___. I'm excited about ___.",
     "sample_en": "I'm a learning designer in EdTech. My team is international. I'm excited about AI tools.",
     "sample_ru": "Я методист в EdTech. У меня международная команда. Меня очень вдохновляют ИИ-инструменты."
    },
    {
     "prompt_ru": "Первый день в путешествии, ты в хостеле. Скажи, куда ты приехала впервые и как себя чувствуешь. Бонус: добавь ещё одно предложение.",
     "template_en": "It's my first trip to ___. I'm a bit ___, but I'm ___.",
     "sample_en": "It's my first trip to Georgia. I'm a bit tired, but I'm really excited!",
     "sample_ru": "Я впервые в Грузии. Я немного устала, но я в полном восторге!"
    }
   ]
  },
  {
   "day": 2,
   "title": "Soup, Steam and Deadlines",
   "title_ru": "Суп, пар и дедлайны",
   "logline_ru": "Утро в тёплой оранжерее: великан Брам рассказывает о своей работе, спрашивает о твоей и узнаёт, что ты собираешься продать лавку. А дома тебя ждёт письмо без подписи.",
   "cover": "steam-garden-morning",
   "beats": [
    {
     "t": "scene",
     "art": "steam-garden-morning",
     "place_en": "The Steam Garden, morning",
     "place_ru": "Паровой сад, утро",
     "emoji": "🍲"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "At six, a heavy cat sits on you.",
     "ru": "В шесть утра на тебя садится тяжёлый кот."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Breakfast. Now.",
     "ru": "Завтрак. Немедленно."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You walk down the stair-lane, a bit sleepy.",
     "ru": "Ты спускаешься по лестничной улочке, немного сонная."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Warm steam rises over a glass roof.",
     "ru": "Над стеклянной крышей поднимается тёплый пар."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Welcome to the Steam Garden! I'm Bram.",
     "ru": "Добро пожаловать в Паровой сад! Я Брам."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Bram is a giant with a soft beard.",
     "ru": "Брам — великан с мягкой бородой."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Nice to meet you, Bram.",
     "ru": "Приятно познакомиться, Брам."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "I usually start at five.",
     "ru": "Обычно я начинаю в пять."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "I work here every day.",
     "ru": "Я работаю здесь каждый день."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "I don't have deadlines.",
     "ru": "У меня нет дедлайнов."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "I have soup.",
     "ru": "У меня есть суп."
    },
    {
     "t": "line",
     "who": "you",
     "en": "I usually have three deadlines a week!",
     "ru": "А у меня обычно три дедлайна в неделю!"
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Ha! So, what would you like?",
     "ru": "Ха! Ну, что будешь?"
    },
    {
     "t": "choice",
     "q_en": "Your order?",
     "q_ru": "Что закажешь?",
     "options": [
      {
       "en": "I'd like tea and bread, please.",
       "ru": "Я бы хотела чай и хлеб, пожалуйста.",
       "reply": [
        {
         "who": "bram",
         "en": "Tea and bread. Good choice.",
         "ru": "Чай и хлеб. Хороший выбор."
        }
       ]
      },
      {
       "en": "I'd like a coffee, please.",
       "ru": "Я бы хотела кофе, пожалуйста.",
       "reply": [
        {
         "who": "bram",
         "en": "Just coffee? Hm. Okay.",
         "ru": "Просто кофе? Хм. Ладно."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Bram puts a big bowl on your table.",
     "ru": "Брам ставит перед тобой большую миску."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Everyone eats soup here.",
     "ru": "Здесь все едят суп."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "So, {name}, what's your job?",
     "ru": "Итак, {name}, кем ты работаешь?"
    },
    {
     "t": "say",
     "to": "bram",
     "task_ru": "Расскажи Браму о своей работе: кем ты работаешь, что создаёшь и как обычно работаешь. Подставь свои детали.",
     "hint_ru": "I work as… / I create… / I usually work…",
     "example_en": "I work as a learning designer. I create online courses. I usually work remotely with a team.",
     "example_ru": "Я работаю методистом. Я создаю онлайн-курсы. Обычно я работаю удалённо с командой.",
     "accept": [
      "work as",
      "i work",
      "designer",
      "methodologist",
      "create",
      "course",
      "usually",
      "remotely",
      "team",
      "edtech",
      "help"
     ],
     "after": [
      {
       "who": "bram",
       "en": "You work as a... what?",
       "ru": "Ты работаешь... кем-кем?"
      },
      {
       "who": "narrator",
       "en": "Bram scratches his beard with a wooden spoon.",
       "ru": "Брам чешет бороду деревянной ложкой."
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "Basically, I help people learn.",
     "ru": "Если коротко, я помогаю людям учиться."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Ah! My soup helps people too!",
     "ru": "А! Мой суп тоже помогает людям!"
    },
    {
     "t": "line",
     "who": "you",
     "en": "I create online courses on my laptop.",
     "ru": "Я создаю онлайн-курсы на ноутбуке."
    },
    {
     "t": "line",
     "who": "you",
     "en": "My team works in three countries.",
     "ru": "Моя команда работает в трёх странах."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Three countries! And you work remotely?",
     "ru": "Три страны! И ты работаешь удалённо?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes, I usually work remotely from home.",
     "ru": "Да, обычно я работаю удалённо из дома."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "My kitchen doesn't work remotely.",
     "ru": "А моя кухня удалённо не работает."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Look, Pepper, he work every day.",
     "ru": "Смотри, Пеппер, он «работать» каждый день."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "He workS. Not \"he work\".",
     "ru": "Он workS. Не «he work»."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "With he, she, it, add a tail: S.",
     "ru": "С he, she, it добавляй хвостик: S."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Like my tail, only smaller.",
     "ru": "Как мой хвост, только поменьше."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "And not \"he don't\". He doesn't.",
     "ru": "И никаких «he don't». Только he doesn't."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Write it down.",
     "ru": "Запиши."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In your bag, Vera's notebook glows softly.",
     "ru": "В сумке мягко светится тетрадь Веры."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "An ink cat with an S-tail appears.",
     "ru": "В тетради появляется чернильный котик с хвостом в форме S."
    },
    {
     "t": "check",
     "q_en": "Bram works…",
     "q_ru": "Брам работает…",
     "options": [
      {
       "en": "in the Steam Garden.",
       "ru": "в Паровом саду.",
       "correct": true
      },
      {
       "en": "on the mail boat.",
       "ru": "на почтовом катере.",
       "correct": false
      },
      {
       "en": "in the paper shop.",
       "ru": "в бумажной лавке.",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "pepper",
       "en": "No. Smell the air. Soup.",
       "ru": "Нет. Понюхай воздух. Суп."
      }
     ],
     "right": [
      {
       "who": "bram",
       "en": "Yes! I work here, in the Steam Garden.",
       "ru": "Да! Я работаю здесь, в Паровом саду."
      }
     ]
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Paper Boat Night is in nine days.",
     "ru": "Ночь бумажных лодок через девять дней."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Vera's paper boats don't sink.",
     "ru": "Бумажные лодочки Веры не тонут."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Newspaper boats always sink. Glub.",
     "ru": "А лодки из газеты всегда тонут. Буль."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Is the shop open again?",
     "ru": "Лавка снова открыта?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "No. I'm here to sell it.",
     "ru": "Нет. Я здесь, чтобы её продать."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The whole café goes quiet.",
     "ru": "Всё кафе затихает."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Hm. Eat your soup first, {name}.",
     "ru": "Хм. Сначала съешь суп, {name}."
    },
    {
     "t": "scene",
     "art": "stair-lane-afternoon",
     "place_en": "Stair-lane, golden afternoon",
     "place_ru": "Лестничная улочка, золотой день",
     "emoji": "✉️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You climb back up, key in hand.",
     "ru": "Ты поднимаешься обратно наверх с ключом в руке."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A blue envelope waits under the green door.",
     "ru": "Под зелёной дверью ждёт синий конверт."
    },
    {
     "t": "line",
     "who": "you",
     "en": "\"To the person with the key\"?",
     "ru": "«Тому, у кого ключ»?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "No name. Just a tiny paper boat.",
     "ru": "Без имени. Только крошечная бумажная лодочка."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Hm. Somebody knows you are here.",
     "ru": "Хм. Кто-то знает, что ты здесь."
    }
   ],
   "hook_ru": "Синее письмо без подписи: кто на острове уже знает о тебе и что оно попросит сделать?",
   "notebook": {
    "words": [
     {
      "en": "work as",
      "ru": "работать кем-то (в должности)",
      "emoji": "👩‍💼",
      "story_ex": "I work as a learning designer.",
      "my_ex": "I work as a learning designer in EdTech.",
      "my_ex_ru": "Я работаю методистом в EdTech."
     },
     {
      "en": "work remotely",
      "ru": "работать удалённо",
      "emoji": "🏡",
      "story_ex": "I usually work remotely from home.",
      "my_ex": "I work remotely and travel with my laptop.",
      "my_ex_ru": "Я работаю удалённо и путешествую с ноутбуком."
     },
     {
      "en": "online course",
      "ru": "онлайн-курс",
      "emoji": "🎓",
      "story_ex": "I create online courses on my laptop.",
      "my_ex": "My online courses teach adults new skills.",
      "my_ex_ru": "Мои онлайн-курсы учат взрослых новым навыкам."
     },
     {
      "en": "create",
      "ru": "создавать",
      "emoji": "✨",
      "story_ex": "I create online courses.",
      "my_ex": "I create course prototypes with AI tools.",
      "my_ex_ru": "Я создаю прототипы курсов с помощью ИИ-инструментов."
     },
     {
      "en": "team",
      "ru": "команда",
      "emoji": "🌍",
      "story_ex": "My team works in three countries.",
      "my_ex": "My team doesn't work in one office.",
      "my_ex_ru": "Моя команда не работает в одном офисе."
     },
     {
      "en": "usually",
      "ru": "обычно (ставим перед глаголом)",
      "emoji": "⏰",
      "story_ex": "Bram usually starts at five.",
      "my_ex": "I usually start work at ten.",
      "my_ex_ru": "Обычно я начинаю работать в десять."
     },
     {
      "en": "deadline",
      "ru": "дедлайн, крайний срок (meet a deadline — уложиться в срок)",
      "emoji": "📅",
      "story_ex": "Bram doesn't have deadlines. He has soup.",
      "my_ex": "I don't like deadlines, but I meet them.",
      "my_ex_ru": "Я не люблю дедлайны, но укладываюсь в сроки."
     },
     {
      "en": "help",
      "ru": "помогать",
      "emoji": "🤝",
      "story_ex": "My soup helps people too!",
      "my_ex": "AI tools help me with my work.",
      "my_ex_ru": "ИИ-инструменты помогают мне в работе."
     }
    ],
    "phrases": [
     {
      "en": "I create online courses. Basically, I help people learn.",
      "ru": "Я создаю онлайн-курсы. Если коротко, я помогаю людям учиться.",
      "when_ru": "Ответ на «What do you do?»: в small talk, в поездке, на собеседовании — особенно если собеседник не понял слово «learning designer»."
     },
     {
      "en": "I work remotely with an international team.",
      "ru": "Я работаю удалённо с международной командой.",
      "when_ru": "Когда рассказываешь, как и с кем ты работаешь: на созвоне, на собеседовании, при знакомстве."
     },
     {
      "en": "I'd like a coffee, please.",
      "ru": "Я бы хотела кофе, пожалуйста.",
      "when_ru": "Заказ в кафе в поездке. Готовая фраза (chunk): I'd like = я бы хотела. Меняй только конец: I'd like tea and bread, please. Грамматику не разбираем, запоминаем целиком."
     }
    ],
    "rule": {
     "title_ru": "Present Simple: я работаю / он работает / я не работаю",
     "rows": [
      [
       "I / you / we / they",
       "work",
       "I work remotely."
      ],
      [
       "he / she / it",
       "work + s → works",
       "She works remotely."
      ],
      [
       "he / she / it",
       "have → has",
       "He has soup."
      ],
      [
       "I / you / we / they",
       "don't + глагол",
       "I don't work on Sundays."
      ],
      [
       "he / she / it",
       "doesn't + глагол (без -s!)",
       "He doesn't work remotely."
      ],
      [
       "usually / always",
       "перед глаголом",
       "I usually work from home."
      ]
     ],
     "examples": [
      {
       "en": "I usually work remotely.",
       "ru": "Обычно я работаю удалённо."
      },
      {
       "en": "My team works in three countries.",
       "ru": "Моя команда работает в трёх странах."
      },
      {
       "en": "Bram doesn't have deadlines.",
       "ru": "У Брама нет дедлайнов."
      }
     ],
     "tip_ru": "У he / she / it глагол получает хвостик -s (вспомни чернильного котика с хвостом-S). Have превращается в has. В отрицании хвостик переезжает в doesn't, а глагол остаётся голым: he doesn't work (не doesn't works). Usually и always ставим перед глаголом: I usually work.",
     "mistake": "❌ He work every day. He don't have deadlines. → ✅ He works every day. He doesn't have deadlines."
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Выбери правильную форму. Цель: научиться различать don't и doesn't.",
     "q": "My team leader ___ (don't / doesn't) work on Fridays.",
     "answer": "doesn't",
     "alt": [
      "does not",
      "My team leader doesn't work on Fridays.",
      "My team leader doesn't work on Fridays",
      "My team leader does not work on Fridays."
     ],
     "note_ru": "Team leader = he/she, поэтому doesn't. Don't — для I / you / we / they."
    },
    {
     "kind": "gap",
     "task_ru": "Вставь слово дня. Цель: запомнить место usually в предложении.",
     "q": "I ___ (обычно) work remotely. Sometimes I go to the office.",
     "answer": "usually",
     "alt": [
      "I usually work remotely.",
      "I usually work remotely",
      "I usually work remotely. Sometimes I go to the office."
     ],
     "note_ru": "Usually = обычно; стоит перед глаголом: I usually work."
    },
    {
     "kind": "order",
     "task_ru": "Составь предложение из слов. Цель: закрепить порядок слов: кто → как часто → действие.",
     "q": "usually / I / online courses / create / with AI tools",
     "answer": "I usually create online courses with AI tools.",
     "alt": [
      "I usually create online courses with AI tools"
     ],
     "note_ru": "Схема: I + usually + create + что + с чем. Usually перед глаголом."
    },
    {
     "kind": "fix",
     "task_ru": "Найди и исправь ошибку. Цель: заметить свою типичную ошибку с -s.",
     "q": "My colleague work remotely from Spain.",
     "answer": "My colleague works remotely from Spain.",
     "alt": [
      "My colleague works remotely from Spain",
      "works"
     ],
     "note_ru": "My colleague = he/she, нужен хвостик -s: works."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: уметь коротко сказать, кем ты работаешь и что делаешь.",
     "q": "Я работаю методистом. Я создаю онлайн-курсы.",
     "answer": "I work as a learning designer. I create online courses.",
     "alt": [
      "I work as a learning designer. I create online courses",
      "I work as an instructional designer. I create online courses.",
      "I work as a methodologist. I create online courses.",
      "I'm a learning designer. I create online courses.",
      "I am a learning designer. I create online courses.",
      "I'm an instructional designer. I create online courses.",
      "I'm a methodologist. I create online courses.",
      "I work as a learning designer and create online courses.",
      "I work as a learning designer and I create online courses.",
      "I work as an instructional designer and create online courses.",
      "I work as a methodologist and create online courses."
     ],
     "note_ru": "Работать кем-то = work as + должность (или I'm a… из Дня 1). Методист в EdTech по-английски обычно learning designer или instructional designer; слово methodologist понятно, но в международных компаниях звучит реже. Перед instructional — an (гласный звук)."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: построить отрицание с he/she и не добавить лишнюю -s.",
     "q": "Мой менеджер не работает удалённо.",
     "answer": "My manager doesn't work remotely.",
     "alt": [
      "My manager doesn't work remotely",
      "My manager does not work remotely.",
      "My manager does not work remotely"
     ],
     "note_ru": "Doesn't уже «забрал» -s, поэтому work без -s. Не пиши doesn't works."
    },
    {
     "kind": "question",
     "task_ru": "Преврати утверждение в вопрос (to be из Дня 1). Цель: повторить вопросы с is и слово team.",
     "q": "Your team is international.",
     "answer": "Is your team international?",
     "alt": [
      "Is your team international"
     ],
     "note_ru": "С to be вопрос строится перестановкой: is выходит вперёд. Вопросы с do/does будут завтра."
    },
    {
     "kind": "write",
     "task_ru": "Напиши 3–4 коротких предложения о своей работе: кем работаешь, что создаёшь, как обычно работаешь и чего не любишь. Цель: собрать свой рассказ для собеседования.",
     "q": "My job: work as / create / usually / don't like",
     "answer": "I work as a learning designer in EdTech. I create online courses with AI tools. I usually work remotely with a team. I don't like deadlines, but I meet them.",
     "alt": [],
     "note_ru": "Проверь себя: есть ли work as, usually перед глаголом и don't в отрицании? Если пишешь о ком-то (he/she) — не забудь -s."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Как в кафе с Брамом: скажи вслух, кем ты работаешь, что создаёшь и как обычно работаешь. Потом добавь ещё одно предложение о себе.",
     "template_en": "I work as ___. I create ___. I usually work ___ with ___.",
     "sample_en": "I work as a learning designer. I create online courses. I usually work remotely with a team.",
     "sample_ru": "Я работаю методистом. Я создаю онлайн-курсы. Обычно я работаю удалённо с командой."
    },
    {
     "prompt_ru": "Собеседование или созвон с международной командой: расскажи, как ты обычно работаешь — где, с кем и чем тебе помогает ИИ. Добавь ещё одно предложение.",
     "template_en": "I usually work ___. My team works in ___. AI tools help me ___.",
     "sample_en": "I usually work remotely from home. My team works in three countries. AI tools help me create prototypes fast.",
     "sample_ru": "Обычно я работаю удалённо из дома. Моя команда работает в трёх странах. ИИ-инструменты помогают мне быстро создавать прототипы."
    },
    {
     "prompt_ru": "Small talk в поездке, как у Брама («I don't have deadlines. I have soup.»): скажи, чего ты не любишь и что обычно делаешь, чтобы отдохнуть. Добавь ещё одно предложение.",
     "template_en": "I don't like ___. After a deadline, I usually ___.",
     "sample_en": "I don't like deadlines. After a deadline, I usually watch a cozy series.",
     "sample_ru": "Я не люблю дедлайны. После дедлайна я обычно смотрю уютный сериал."
    }
   ]
  },
  {
   "day": 3,
   "title": "Questions at the Harbor",
   "title_ru": "Вопросы в гавани",
   "logline_ru": "Первое голубое письмо отправляет тебя в гавань, где весёлый капитан почтового катера знает о письмах меньше, чем ты думала.",
   "cover": "harbor-noon",
   "beats": [
    {
     "t": "scene",
     "art": "harbor-noon",
     "place_en": "Kettleby harbor, noon",
     "place_ru": "Гавань Кеттлби, полдень",
     "emoji": "⚓"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The sun is high over the harbor.",
     "ru": "Солнце стоит высоко над гаванью."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The wind chimes sing, and boats rock softly.",
     "ru": "Поют колокольчики, тихо качаются лодки."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You read the blue letter again.",
     "ru": "Ты снова читаешь голубое письмо."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Welcome home, my dear.",
     "ru": "Добро пожаловать домой, дорогая."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Do you like tea? I do.",
     "ru": "Ты любишь чай? Я — да."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Ask questions. Start at the harbor.",
     "ru": "Задавай вопросы. Начни с гавани."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A young man fixes a tiny blue boat.",
     "ru": "Молодой человек чинит крошечный синий катер."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pepper sleeps in the man's mail bag.",
     "ru": "А Пеппер спит в его почтовой сумке."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Hi there! Sorry about my oily hands!",
     "ru": "Привет! Прости, у меня руки в масле."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I'm Theo, and this is the Teaspoon.",
     "ru": "Я Тео, а это мой катер «Чайная ложка»."
    },
    {
     "t": "line",
     "who": "you",
     "en": "I'm {name}. Nice to meet you.",
     "ru": "Я {name}. Приятно познакомиться."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Is this your first trip to Kettleby?",
     "ru": "Ты впервые в Кеттлби?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes, it is. I'm a bit excited.",
     "ru": "Да, впервые. Я немного взволнована."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Theo, do you know about this letter?",
     "ru": "Тео, ты что-нибудь знаешь об этом письме?"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Blue letters? No, I don't. Sorry!",
     "ru": "Голубые письма? Нет, не знаю. Извини!"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "They just appear in my bag.",
     "ru": "Они просто появляются у меня в сумке."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I often find them near the hill pier.",
     "ru": "Я часто нахожу их у причала под холмом."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo smiles and wipes his hands.",
     "ru": "Тео улыбается и вытирает руки."
    },
    {
     "t": "line",
     "who": "you",
     "en": "What do you do in your free time?",
     "ru": "Что ты делаешь в свободное время?"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I fix engines and watch series.",
     "ru": "Чиню моторы и смотрю сериалы."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "How about you?",
     "ru": "А ты?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "In my free time I usually work.",
     "ru": "В свободное время я обычно работаю."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Really? Oh no, {name}!",
     "ru": "Правда? Ох, {name}!"
    },
    {
     "t": "line",
     "who": "you",
     "en": "You like series?",
     "ru": "Ты любишь сериалы?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pepper opens one amber eye.",
     "ru": "Пеппер открывает один янтарный глаз."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "DO you like series?",
     "ru": "Не «You like…», а «DO you like series?»."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "DO stands at the door, like a doorman.",
     "ru": "DO стоит у двери вопроса, как швейцар."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Write it down.",
     "ru": "Запиши."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Do you often watch series, Theo?",
     "ru": "Тео, ты часто смотришь сериалы?"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Yes, I do. Almost every night.",
     "ru": "Да, смотрю. Почти каждый вечер."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "What's your favorite series or cartoon?",
     "ru": "А какой у тебя любимый сериал или мультфильм?"
    },
    {
     "t": "choice",
     "q_en": "What is your favorite?",
     "q_ru": "Что тебе нравится больше всего?",
     "options": [
      {
       "en": "My favorite is a superhero series.",
       "ru": "Мой любимый — сериал про супергероев.",
       "flag": "hero",
       "reply": [
        {
         "who": "theo",
         "en": "Really? Me too!",
         "ru": "Правда? У меня тоже!"
        },
        {
         "who": "narrator",
         "en": "Theo's ears turn red.",
         "ru": "Уши Тео краснеют."
        }
       ]
      },
      {
       "en": "My favorite is a cozy cartoon.",
       "ru": "Мой любимый — уютный мультфильм.",
       "flag": "cartoon",
       "reply": [
        {
         "who": "theo",
         "en": "Really? I love cozy cartoons too!",
         "ru": "Правда? Я тоже обожаю уютные мультфильмы!"
        },
        {
         "who": "narrator",
         "en": "Theo turns red like a tomato.",
         "ru": "Тео краснеет, как помидор."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "What do you recommend?",
     "ru": "Что посоветуешь?"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I recommend 'The Moon Mechanic', season one.",
     "ru": "Советую «Лунного механика», первый сезон."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "So, what do you do at the weekend?",
     "ru": "Ну а что ты делаешь на выходных?"
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Ответь Тео про свои настоящие выходные и любимый сериал или мультфильм. В конце верни вопрос: How about you?",
     "hint_ru": "At the weekend I usually… · In my free time I often… · My favorite series is… · How about you?",
     "example_en": "At the weekend I usually watch series. My favorite is a cozy cartoon. How about you?",
     "example_ru": "На выходных я обычно смотрю сериалы. Мой любимый — уютный мультфильм. А ты?",
     "accept": [
      "weekend",
      "usually",
      "often",
      "favorite",
      "favourite",
      "series",
      "cartoon",
      "free time",
      "how about you",
      "what about you",
      "watch",
      "like"
     ],
     "after": [
      {
       "who": "theo",
       "en": "At the weekend I usually fix this engine.",
       "ru": "А я на выходных обычно чиню этот мотор."
      },
      {
       "who": "theo",
       "en": "Thanks for the chat, {name}!",
       "ru": "Спасибо за разговор, {name}!"
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Paper Boat Night is in eight days.",
     "ru": "Через восемь дней — Ночь бумажных корабликов."
    },
    {
     "t": "check",
     "q_en": "Where does Theo find the blue letters?",
     "q_ru": "Где Тео находит голубые письма?",
     "options": [
      {
       "en": "In his mail bag",
       "ru": "В своей почтовой сумке",
       "correct": true
      },
      {
       "en": "In Bram's café",
       "ru": "В кафе у Брама",
       "correct": false
      },
      {
       "en": "On the Teaspoon's engine",
       "ru": "На моторе «Чайной ложки»",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "pepper",
       "en": "No. Look at the mail bag, human.",
       "ru": "Нет. Посмотри на почтовую сумку, человек."
      }
     ],
     "right": [
      {
       "who": "pepper",
       "en": "Yes. But Theo doesn't know the sender.",
       "ru": "Да. Но Тео не знает, кто отправитель."
      }
     ]
    },
    {
     "t": "scene",
     "art": "shop-night-lamp",
     "place_en": "Vera's shop at night",
     "place_ru": "Лавка Веры ночью",
     "emoji": "🕯️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "At night the old lamp glows gold.",
     "ru": "Ночью старая лампа светится золотом."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In your notebook, an ink teapot pours questions.",
     "ru": "В твоей тетради чернильный чайник наливает вопросы."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then new gold words appear on the letter.",
     "ru": "А потом на письме проступают новые золотые слова."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Look under the stairs.",
     "ru": "Загляни под лестницу."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Spiders live under the stairs. Really.",
     "ru": "Под лестницей живут пауки. Правда."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The brass key on your wrist feels warm.",
     "ru": "Латунный ключ на твоём запястье становится тёплым."
    }
   ],
   "hook_ru": "Что прячется под лестницей и почему крошечный ключ не подходит ни к одному замку в лавке?",
   "notebook": {
    "words": [
     {
      "en": "letter",
      "ru": "письмо",
      "emoji": "✉️",
      "story_ex": "Theo, do you know about this letter?",
      "my_ex": "I write cover letters to international companies.",
      "my_ex_ru": "Я пишу сопроводительные письма в международные компании."
     },
     {
      "en": "free time",
      "ru": "свободное время",
      "emoji": "🔧",
      "story_ex": "What do you do in your free time?",
      "my_ex": "In my free time I watch Marvel series.",
      "my_ex_ru": "В свободное время я смотрю сериалы Marvel."
     },
     {
      "en": "often",
      "ru": "часто",
      "emoji": "🔁",
      "story_ex": "Do you often watch series, Theo?",
      "my_ex": "I often use AI tools for my courses.",
      "my_ex_ru": "Я часто использую ИИ-инструменты для своих курсов."
     },
     {
      "en": "favorite",
      "ru": "любимый",
      "emoji": "🦸‍♀️",
      "story_ex": "My favorite is a superhero series.",
      "my_ex": "My favorite AI tool helps me create courses.",
      "my_ex_ru": "Мой любимый ИИ-инструмент помогает мне создавать курсы."
     },
     {
      "en": "at the weekend",
      "ru": "на выходных",
      "emoji": "🛋️",
      "story_ex": "So, what do you do at the weekend?",
      "my_ex": "At the weekend I don't open my laptop.",
      "my_ex_ru": "На выходных я не открываю ноутбук."
     },
     {
      "en": "recommend",
      "ru": "советовать, рекомендовать",
      "emoji": "🌙",
      "story_ex": "I recommend 'The Moon Mechanic', season one.",
      "my_ex": "What AI tools do you recommend for course design?",
      "my_ex_ru": "Какие ИИ-инструменты ты посоветуешь для разработки курсов?"
     },
     {
      "en": "How about you?",
      "ru": "А ты? / А у тебя?",
      "emoji": "🏓",
      "story_ex": "I fix engines and watch series. How about you?",
      "my_ex": "I work remotely. How about you?",
      "my_ex_ru": "Я работаю удалённо. А ты?"
     },
     {
      "en": "really",
      "ru": "правда?; действительно, очень",
      "emoji": "🍅",
      "story_ex": "Really? Me too!",
      "my_ex": "Really? I work in EdTech too!",
      "my_ex_ru": "Правда? Я тоже работаю в EdTech!"
     }
    ],
    "phrases": [
     {
      "en": "What do you do in your free time?",
      "ru": "Чем ты занимаешься в свободное время?",
      "when_ru": "Первый разговор с новым человеком: попутчик, хостел, кофе-брейк с новым коллегой на созвоне."
     },
     {
      "en": "Any good series to recommend?",
      "ru": "Посоветуешь хороший сериал?",
      "when_ru": "Лёгкая тема для small talk в путешествии или с иностранными коллегами: про сериалы говорят все. Готовая фраза-блок (chunk), без do."
     },
     {
      "en": "I love Marvel. What about you?",
      "ru": "Я обожаю Marvel. А ты?",
      "when_ru": "Как вернуть вопрос: сначала коротко о себе, потом What about you? (= How about you?). Так разговор не обрывается."
     }
    ],
    "rule": {
     "title_ru": "Вопросы в Present Simple: DO стоит у двери",
     "rows": [
      [
       "Do",
       "I / you / we / they",
       "work?"
      ],
      [
       "Does",
       "he / she / it",
       "work? (без -s!)"
      ],
      [
       "What / Where / When",
       "do / does",
       "+ кто + глагол?"
      ],
      [
       "Короткий ответ",
       "Yes, I do. / No, I don't.",
       "Yes, she does. / No, he doesn't."
      ]
     ],
     "examples": [
      {
       "en": "Do you work remotely? — Yes, I do.",
       "ru": "Ты работаешь удалённо? — Да."
      },
      {
       "en": "Does your manager live in Berlin? — No, he doesn't.",
       "ru": "Твой менеджер живёт в Берлине? — Нет."
      },
      {
       "en": "What do you do in your free time?",
       "ru": "Что ты делаешь в свободное время?"
      }
     ],
     "tip_ru": "Вопрос открывает DO (для he/she/it — DOES), как швейцар у двери. Если пришёл DOES, хвостик -s уходит с глагола: Does she work?",
     "mistake": "❌ You like series? · Where you work? · Where does she works? → ✅ Do you like series? · Where do you work? · Where does she work?"
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Выбери правильное слово. Цель: научиться отличать вопрос с действием (DO/DOES) от вопроса с to be.",
     "q": "___ Theo watch series in his free time? (Do / Does / Is)",
     "answer": "Does",
     "alt": [
      "does",
      "Does Theo watch series in his free time?"
     ],
     "note_ru": "Theo = he, поэтому Does. Is не подходит: watch — это действие, а не состояние (сравни: Is Theo tired?)."
    },
    {
     "kind": "gap",
     "task_ru": "Вставь выражение дня (3 слова). Цель: закрепить готовые блоки для small talk.",
     "q": "What do you do ___ ___ ___? — I usually travel.",
     "answer": "at the weekend",
     "alt": [
      "on the weekend",
      "in your free time"
     ],
     "note_ru": "At the weekend — «на выходных», запоминай целиком, с предлогом at. Американцы чаще говорят on the weekend — тоже верно."
    },
    {
     "kind": "order",
     "task_ru": "Составь вопрос из слов. Цель: запомнить порядок Do + кто + often + глагол.",
     "q": "often / you / do / AI tools / use / ?",
     "answer": "Do you often use AI tools?",
     "alt": [
      "Do you use AI tools often?"
     ],
     "note_ru": "Do открывает вопрос, often стоит перед основным глаголом, как в утверждении (I often use…)."
    },
    {
     "kind": "fix",
     "task_ru": "Найди и исправь ошибку. Цель: поймать типичную ошибку русскоговорящих — вопрос без DO.",
     "q": "Where she works?",
     "answer": "Where does she work?",
     "alt": [],
     "note_ru": "Две ошибки: нет DOES и лишняя -s. Когда в вопросе есть does, -s у глагола исчезает."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: задать вопрос о работе, который пригодится на собеседовании.",
     "q": "Ты часто работаешь удалённо?",
     "answer": "Do you often work remotely?",
     "alt": [
      "Do you work remotely often?"
     ],
     "note_ru": "Do + you + often + work remotely. Слово remotely — из Дня 2."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: рассказать о себе и вернуть вопрос собеседнику.",
     "q": "Мой любимый сериал — про супергероев. А ты?",
     "answer": "My favorite series is about superheroes. How about you?",
     "alt": [
      "My favourite series is about superheroes. How about you?",
      "My favorite series is about superheroes. What about you?",
      "My favourite series is about superheroes. What about you?",
      "My favorite series is a superhero series. How about you?",
      "My favorite series is about superheroes. And you?"
     ],
     "note_ru": "«А ты?» — это How about you? или What about you? Дословное And you? тоже верно, но звучит суше."
    },
    {
     "kind": "question",
     "task_ru": "Задай вопрос к части fixes engines (что он делает?). Начни с What. Цель: построить Wh-вопрос с DOES и DO.",
     "q": "Theo fixes engines in his free time. (What…?)",
     "answer": "What does Theo do in his free time?",
     "alt": [
      "What does he do in his free time?"
     ],
     "note_ru": "What + does + Theo + do. Первое does — помощник вопроса, второе do — само действие «делать». -s с fixes уходит в does."
    },
    {
     "kind": "write",
     "task_ru": "Напиши 3 предложения о своём свободном времени и выходных и 1 вопрос собеседнику. Цель: подготовить свой рассказ для живого small talk.",
     "q": "Free time, weekend, favorite series + a question",
     "answer": "In my free time I watch series. At the weekend I often travel. My favorite cartoon is very cozy. How about you?",
     "alt": [
      "In my free time I draw. At the weekend I usually sleep a lot. My favorite series is about superheroes. Do you often watch series?"
     ],
     "note_ru": "Используй usually/often перед глаголом и закончи вопросом: так разговор не обрывается."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Расскажи о своих выходных и свободном времени и в конце верни вопрос, как в сцене с Тео. Хочешь больше — добавь перед вопросом ещё одно предложение о себе.",
     "template_en": "At the weekend I usually ___. In my free time I often ___. My favorite series is ___. How about you?",
     "sample_en": "At the weekend I usually sleep late. In my free time I often watch cartoons. My favorite series is about superheroes. How about you?",
     "sample_ru": "На выходных я обычно долго сплю. В свободное время я часто смотрю мультфильмы. Мой любимый сериал — про супергероев. А ты?"
    },
    {
     "prompt_ru": "Первый день в международной команде, у тебя видеозвонок с новым коллегой. Задай ему 3 вопроса. Хочешь больше — добавь одно предложение о своей работе.",
     "template_en": "Where do you ___? Do you often ___? What ___ do you recommend?",
     "sample_en": "Where do you live? Do you often work remotely? What AI tools do you recommend?",
     "sample_ru": "Где ты живёшь? Ты часто работаешь удалённо? Какие ИИ-инструменты ты посоветуешь?"
    },
    {
     "prompt_ru": "Посоветуй свой любимый сериал или мультфильм новому знакомому в путешествии и задай ему вопрос в ответ.",
     "template_en": "My favorite ___ is about ___. I really like ___. I recommend it for ___. Do you ___?",
     "sample_en": "My favorite cartoon is about a little dragon. I really like the cozy art. I recommend it for rainy evenings. Do you like cartoons?",
     "sample_ru": "Мой любимый мультфильм — про маленького дракона. Мне очень нравится уютная рисовка. Советую его для дождливых вечеров. А ты любишь мультфильмы?"
    }
   ]
  },
  {
   "day": 4,
   "title": "The Ferry Is Cancelled",
   "title_ru": "Паром отменили",
   "logline_ru": "Ты готовишь лавку к продаже, а вечером ветер приносит к двери гостью из-за границы, которой негде ночевать.",
   "cover": "lane-windy-dusk",
   "beats": [
    {
     "t": "scene",
     "art": "shop-dusty-day",
     "place_en": "Vera's shop, dusty daylight",
     "place_ru": "Лавка Веры, пыльный дневной свет",
     "emoji": "🧹"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Morning light falls through the round windows.",
     "ru": "Утренний свет льётся сквозь круглые окна."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You look under the old wooden stairs.",
     "ru": "Ты заглядываешь под старую деревянную лестницу."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "There is a small blue tin there.",
     "ru": "Там стоит маленькая синяя жестянка."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "There is a tiny brass key inside.",
     "ru": "Внутри лежит крошечный латунный ключик."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Is there a lock for this key?",
     "ru": "А для этого ключа есть замок?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "There are many boxes and doors here.",
     "ru": "Тут полно коробок и дверей."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You try every lock. The key doesn't fit.",
     "ru": "Ты пробуешь каждый замок. Ключик не подходит."
    },
    {
     "t": "line",
     "who": "you",
     "en": "OK, I usually start with a list.",
     "ru": "Ладно, я обычно начинаю со списка."
    },
    {
     "t": "line",
     "who": "you",
     "en": "There are three hundred notebooks here.",
     "ru": "Здесь триста блокнотов."
    },
    {
     "t": "line",
     "who": "you",
     "en": "There's a kettle, but there isn't a clock.",
     "ru": "Чайник есть, а часов нет."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "No clock, because I am the clock.",
     "ru": "Часов нет, потому что часы здесь — я."
    },
    {
     "t": "choice",
     "q_en": "What do you do first?",
     "q_ru": "С чего начнёшь?",
     "options": [
      {
       "en": "Let's open the window first.",
       "ru": "Давай сначала откроем окно.",
       "flag": "window",
       "reply": [
        {
         "who": "narrator",
         "en": "Sea wind comes in. The chimes sing.",
         "ru": "Влетает морской ветер. Поют колокольчики."
        },
        {
         "who": "pepper",
         "en": "Fresh air. Not bad, human.",
         "ru": "Свежий воздух. Неплохо, человек."
        }
       ]
      },
      {
       "en": "Let's dust the shelves first.",
       "ru": "Давай сначала протрём пыль на полках.",
       "flag": "dust",
       "reply": [
        {
         "who": "narrator",
         "en": "Gold dust dances in the sunlight.",
         "ru": "Золотая пыль танцует в солнечном луче."
        },
        {
         "who": "pepper",
         "en": "Achoo. There is dust in my nose.",
         "ru": "Апчхи. У меня пыль в носу."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Suddenly, the old lamp turns on by itself.",
     "ru": "Вдруг старая лампа сама собой загорается."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Hm, the shop likes you.",
     "ru": "Хм, ты нравишься лавке."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A tiny ink lamp glows in the notebook.",
     "ru": "В блокноте светится крошечная чернильная лампа."
    },
    {
     "t": "scene",
     "art": "lane-windy-dusk",
     "place_en": "The stair-lane in wind and rain, dusk",
     "place_ru": "Улица-лестница под ветром и дождём, сумерки",
     "emoji": "🌬️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "At dusk, the wind sings in the chimes.",
     "ru": "В сумерках ветер поёт в колокольчиках."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A woman in a yellow raincoat knocks.",
     "ru": "В дверь стучит женщина в жёлтом дождевике."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Hello, I'm Mira. I'm a traveler.",
     "ru": "Здравствуйте, я Мира. Я путешественница."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Hi, I'm {name}. Nice to meet you.",
     "ru": "Привет, я {name}. Приятно познакомиться."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "My ferry is cancelled because of the wind.",
     "ru": "Мой паром отменили из-за ветра."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "The guesthouse is full, and I'm really tired.",
     "ru": "В гостевом доме нет мест, а я ужасно устала."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Is there a room available near here?",
     "ru": "Здесь поблизости есть свободная комната?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes, there is a room available upstairs.",
     "ru": "Да, наверху есть свободная комната."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "I work remotely. Is there wifi here?",
     "ru": "Я работаю удалённо. Здесь есть вайфай?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes, there is. It's fast.",
     "ru": "Да, есть. И быстрый."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Great! What's the wifi password?",
     "ru": "Отлично! А какой пароль от вайфая?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "The password is Pepper, of course.",
     "ru": "Пароль — Пеппер, разумеется."
    },
    {
     "t": "line",
     "who": "you",
     "en": "It's pepper, with a small p.",
     "ru": "Пароль — pepper, с маленькой буквы."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Is there a pharmacy near here?",
     "ru": "А аптека тут рядом есть?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes, there's a pharmacy near the harbor.",
     "ru": "Да, возле гавани есть аптека."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "So, what's in the room?",
     "ru": "А что есть в комнате?"
    },
    {
     "t": "say",
     "to": "mira",
     "task_ru": "Опиши комнату наверху, как администратор отеля: что там есть, какая она и какой вид.",
     "hint_ru": "Начни с There's a… / There are… Потом скажи It's quiet. В конце — вид: There's a view of…",
     "example_en": "There's a big bed and a desk. It's quiet. There's a great view of the bay.",
     "example_ru": "Там есть большая кровать и стол. Там тихо. Из окна прекрасный вид на залив.",
     "accept": [
      "there's",
      "there is",
      "there are",
      "bed",
      "desk",
      "quiet",
      "view"
     ],
     "after": [
      {
       "who": "mira",
       "en": "A view of the bay? Perfect!",
       "ru": "Вид на залив? Идеально!"
      },
      {
       "who": "mira",
       "en": "I really need a quiet room.",
       "ru": "Мне очень нужна тихая комната."
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "And in the room is a big lamp.",
     "ru": "И в комнате стоит большая лампа."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "'In the room is'... a ghost story?",
     "ru": "«В комнате находится»… это что, страшилка?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "THERE IS a lamp in the room.",
     "ru": "THERE IS a lamp in the room — вот так правильно."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "THERE opens the sentence, like a door.",
     "ru": "THERE открывает предложение, как дверь."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Write it down.",
     "ru": "Запиши."
    },
    {
     "t": "check",
     "q_en": "Why does Mira need a room?",
     "q_ru": "Почему Мире нужна комната?",
     "options": [
      {
       "en": "Her ferry is cancelled.",
       "ru": "Её паром отменили.",
       "correct": true
      },
      {
       "en": "She loves cats.",
       "ru": "Она любит котов.",
       "correct": false
      },
      {
       "en": "She works in the café.",
       "ru": "Она работает в кафе.",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "pepper",
       "en": "No. Think about the ferry, human.",
       "ru": "Нет. Вспомни про паром, человек."
      }
     ],
     "right": [
      {
       "who": "mira",
       "en": "Yes, my ferry is cancelled. Thank you!",
       "ru": "Да, мой паром отменили. Спасибо тебе!"
      }
     ]
    },
    {
     "t": "scene",
     "art": "shop-night-lamp",
     "place_en": "Vera's shop at night, lamp light",
     "place_ru": "Лавка Веры ночью, свет лампы",
     "emoji": "🕯️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Later, the whole house is quiet.",
     "ru": "Позже весь дом затихает."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "There is a blue letter under the door.",
     "ru": "Под дверью лежит синее письмо."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Please don't sell the shop.",
     "ru": "Пожалуйста, не продавай лавку."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Not before Paper Boat Night.",
     "ru": "Не раньше Ночи бумажных корабликов."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Paper Boat Night is in seven days.",
     "ru": "Ночь бумажных корабликов — через семь дней."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The tiny brass key is warm now.",
     "ru": "Крошечный латунный ключик теперь тёплый."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Who sends these letters, and why?",
     "ru": "Кто присылает эти письма — и зачем?"
    }
   ],
   "hook_ru": "Ночью ты не можешь уснуть и собираешь маленький ИИ-прототип, а утром Мира начинает задавать вопросы как на собеседовании.",
   "notebook": {
    "words": [
     {
      "en": "cancelled",
      "ru": "отменён, отменили",
      "emoji": "⛴️",
      "story_ex": "My ferry is cancelled because of the wind.",
      "my_ex": "My call with the team is cancelled.",
      "my_ex_ru": "Мой созвон с командой отменили."
     },
     {
      "en": "available",
      "ru": "свободный, доступный",
      "emoji": "🛎️",
      "story_ex": "Is there a room available near here?",
      "my_ex": "Is there a slot available for an interview?",
      "my_ex_ru": "Есть свободное окно для собеседования?"
     },
     {
      "en": "upstairs",
      "ru": "наверху, наверх",
      "emoji": "🪜",
      "story_ex": "Yes, there is a room available upstairs.",
      "my_ex": "There's a quiet coworking space upstairs.",
      "my_ex_ru": "Наверху есть тихий коворкинг."
     },
     {
      "en": "wifi password",
      "ru": "пароль от вайфая",
      "emoji": "📶",
      "story_ex": "Great! What's the wifi password?",
      "my_ex": "What's the wifi password? I have a call.",
      "my_ex_ru": "Какой пароль от вайфая? У меня созвон."
     },
     {
      "en": "view",
      "ru": "вид (из окна)",
      "emoji": "🌊",
      "story_ex": "There's a great view of the bay.",
      "my_ex": "There's a sea view from my hotel.",
      "my_ex_ru": "Из моего отеля открывается вид на море."
     },
     {
      "en": "near here",
      "ru": "поблизости, где-то рядом",
      "emoji": "📍",
      "story_ex": "Is there a pharmacy near here?",
      "my_ex": "Is there a quiet café near here? I have a deadline.",
      "my_ex_ru": "Тут рядом есть тихое кафе? У меня дедлайн."
     },
     {
      "en": "quiet",
      "ru": "тихий",
      "emoji": "🤫",
      "story_ex": "I really need a quiet room.",
      "my_ex": "I need a quiet room for team calls.",
      "my_ex_ru": "Мне нужна тихая комната для созвонов с командой."
     },
     {
      "en": "pharmacy",
      "ru": "аптека",
      "emoji": "💊",
      "story_ex": "Yes, there's a pharmacy near the harbor.",
      "my_ex": "On trips, I always look for a pharmacy.",
      "my_ex_ru": "В поездках я всегда ищу аптеку."
     }
    ],
    "phrases": [
     {
      "en": "Hi, I have a booking. My name is ___.",
      "ru": "Здравствуйте, у меня бронь. Меня зовут ___.",
      "when_ru": "На ресепшене отеля при заселении (check-in)."
     },
     {
      "en": "My flight is cancelled. Is there a room available tonight?",
      "ru": "Мой рейс отменили. У вас есть свободный номер на сегодня?",
      "when_ru": "Когда поездка сорвалась и срочно нужен ночлег."
     },
     {
      "en": "What's the wifi password? Is there a café near here?",
      "ru": "Какой пароль от вайфая? Здесь рядом есть кафе?",
      "when_ru": "Сразу после заселения: вайфай и что есть рядом с отелем. Вместо café подставь pharmacy, supermarket, metro station."
     }
    ],
    "rule": {
     "title_ru": "There is / There are — «есть, находится» (что-то где-то есть)",
     "rows": [
      [
       "There is (There's)",
       "a / an + один предмет",
       "+ место"
      ],
      [
       "There are",
       "two / many + предметы",
       "+ место"
      ],
      [
       "There isn't a ...",
       "There aren't any ...",
       "+ место"
      ],
      [
       "Is there a ...?",
       "Are there any ...?",
       "+ место?"
      ],
      [
       "Yes, there is. / No, there isn't.",
       "Yes, there are. / No, there aren't.",
       "краткий ответ"
      ]
     ],
     "examples": [
      {
       "en": "There's a desk and a lamp in my home office.",
       "ru": "В моём домашнем офисе есть стол и лампа."
      },
      {
       "en": "There aren't any quiet cafés near my office.",
       "ru": "Рядом с моим офисом нет тихих кафе."
      },
      {
       "en": "Is there a pharmacy near the hotel?",
       "ru": "Рядом с отелем есть аптека?"
      }
     ],
     "tip_ru": "По-русски мы начинаем с места («В комнате есть…»), а по-английски — с There is / There are, место уходит в конец. Is — для одного предмета, are — для нескольких. Если перечисляешь, смотри на первый предмет: There's a desk and a lamp.",
     "mistake": "❌ In the room is a desk. → ✅ There is a desk in the room."
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Цель: узнать нужную форму. Выбери is или are.",
     "q": "There ___ (is / are) three hundred notebooks in the shop.",
     "answer": "are",
     "alt": [
      "There are",
      "There are three hundred notebooks in the shop."
     ],
     "note_ru": "Notebooks — много предметов, поэтому are."
    },
    {
     "kind": "gap",
     "task_ru": "Цель: вспомнить слово дня. Вставь пропущенные слова (два слова).",
     "q": "I'm at the hotel. Is there a pharmacy ___ ___? (поблизости)",
     "answer": "near here",
     "alt": [
      "near here?",
      "around here",
      "close by"
     ],
     "note_ru": "near here = поблизости; ставится в конце вопроса."
    },
    {
     "kind": "order",
     "task_ru": "Цель: почувствовать порядок слов — There в начале. Составь предложение.",
     "q": "a / there / great / view / is / of / the bay",
     "answer": "There is a great view of the bay.",
     "alt": [
      "There's a great view of the bay.",
      "Is there a great view of the bay?"
     ],
     "note_ru": "Сначала There is, потом что (a great view), потом чего (of the bay). Если поставить is первым, получится вопрос — это тоже верно."
    },
    {
     "kind": "fix",
     "task_ru": "Цель: поймать типичную ошибку. Исправь предложение.",
     "q": "In my home office is a big desk.",
     "answer": "There is a big desk in my home office.",
     "alt": [
      "There's a big desk in my home office."
     ],
     "note_ru": "Не начинай с места, как в русском: сначала There is, место — в конец."
    },
    {
     "kind": "translate",
     "task_ru": "Цель: сказать о месте своими словами. Переведи на английский.",
     "q": "Наверху есть тихая комната.",
     "answer": "There is a quiet room upstairs.",
     "alt": [
      "There's a quiet room upstairs.",
      "Upstairs, there is a quiet room.",
      "Upstairs, there's a quiet room.",
      "Upstairs there is a quiet room.",
      "Upstairs there's a quiet room."
     ],
     "note_ru": "«Есть» = there is; quiet стоит перед room; upstairs удобнее всего поставить в конец."
    },
    {
     "kind": "translate",
     "task_ru": "Цель: повторить present simple (день 2) вместе с новыми словами. Переведи.",
     "q": "Я обычно работаю удалённо. Мне нужен пароль от вайфая.",
     "answer": "I usually work remotely. I need the wifi password.",
     "alt": [
      "I usually work remotely. I need a wifi password.",
      "I usually work remotely, so I need the wifi password.",
      "I usually work remotely. I need the Wi-Fi password.",
      "I usually work remotely. I need the wi-fi password.",
      "I usually work remotely. I need the password for the wifi."
     ],
     "note_ru": "usually стоит перед глаголом; «мне нужен» = I need, без to be."
    },
    {
     "kind": "question",
     "task_ru": "Цель: научиться спрашивать в отеле. Сделай из утверждения вопрос.",
     "q": "There are cafés near here.",
     "answer": "Are there any cafés near here?",
     "alt": [
      "Are there cafés near here?",
      "Are there any cafes near here?",
      "Are there cafes near here?"
     ],
     "note_ru": "В вопросе are и there меняются местами; с множественным числом удобно добавить any."
    },
    {
     "kind": "write",
     "task_ru": "Цель: описать своё реальное место. Напиши 3–4 предложения о своей комнате или домашнем офисе: что там есть, чего нет, какой вид.",
     "q": "My room / my home office",
     "answer": "There's a desk and a laptop in my room. There are two plants by the window. There isn't a TV. There's a view of the park.",
     "alt": [],
     "note_ru": "Используй There is / There are / There isn't и слово view; проверь is/are по количеству."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Как в сцене: опиши свою комнату или домашний офис, как администратор отеля. Потом добавь ещё одно предложение — чего там нет (There isn't a…).",
     "template_en": "There's a ___ and a ___ in my room. It's ___. There's a view of ___.",
     "sample_en": "There's a desk and a lamp in my room. It's quiet. There's a view of the park. There isn't a TV.",
     "sample_ru": "В моей комнате есть стол и лампа. Там тихо. Из окна вид на парк. Телевизора нет."
    },
    {
     "prompt_ru": "Ты в командировке от международной компании, вечером созвон с командой. Задай на ресепшене три вопроса. Добавь ещё одно предложение о своей работе.",
     "template_en": "Hi, is there a ___ room available? What's the ___? Is there a ___ near here?",
     "sample_en": "Hi, is there a quiet room available? What's the wifi password? Is there a coworking space near here? I have a team call tonight.",
     "sample_ru": "Здравствуйте, есть свободный тихий номер? Какой пароль от вайфая? Здесь рядом есть коворкинг? Сегодня вечером у меня созвон с командой."
    },
    {
     "prompt_ru": "Small talk с новым знакомым: расскажи, что есть рядом с твоим домом. Добавь ещё одно предложение о сериалах или свободном времени.",
     "template_en": "There's a ___ near my home. There are ___. There isn't a ___. I ___.",
     "sample_en": "There's a small park near my home. There are two cafés and a pharmacy. There isn't a cinema. I watch series at home.",
     "sample_ru": "Рядом с моим домом есть маленький парк. Там два кафе и аптека. Кинотеатра нет. Я смотрю сериалы дома."
    }
   ]
  },
  {
   "day": 5,
   "title": "What Can You Do?",
   "title_ru": "Что ты умеешь?",
   "logline_ru": "За завтраком Мира видит твой маленький ИИ-прототип и начинает задавать вопросы, как на настоящем собеседовании.",
   "cover": "steam-garden-morning",
   "beats": [
    {
     "t": "scene",
     "art": "steam-garden-morning",
     "place_en": "The Steam Garden, morning",
     "place_ru": "Паровой сад, утро",
     "emoji": "🍋"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Warm steam rises between the lemon trees.",
     "ru": "Между лимонными деревьями поднимается тёплый пар."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pepper sleeps on a warm windowsill near the tomatoes.",
     "ru": "Пеппер спит на тёплом подоконнике возле помидоров."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You open your laptop next to the soup.",
     "ru": "Ты открываешь ноутбук рядом с тарелкой супа."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "There is a small AI prototype on your screen.",
     "ru": "На экране — твой маленький ИИ-прототип."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "It photographs the notebooks and makes a catalog.",
     "ru": "Он фотографирует тетради и составляет каталог."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "What is that? A new kind of soup?",
     "ru": "Это что такое? Новый вид супа?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "No, Bram. It's a prototype for the sale.",
     "ru": "Нет, Брам. Это прототип для продажи лавки."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Mira sits down with two phones and a coffee.",
     "ru": "Рядом садится Мира — с двумя телефонами и кофе."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Wow. Is this an AI tool? Can I see?",
     "ru": "Ого. Это ИИ-инструмент? Можно посмотреть?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes. I build small prototypes with AI tools.",
     "ru": "Да. Я делаю маленькие прототипы с помощью ИИ-инструментов."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "I'm a product lead at an international EdTech company.",
     "ru": "Я продакт-лид в международной EdTech-компании."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "And you're a learning designer, right?",
     "ru": "А ты методист, верно?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes. I create online courses and work remotely.",
     "ru": "Да. Я создаю онлайн-курсы и работаю удалённо."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "We usually hire people with real skills.",
     "ru": "Мы обычно нанимаем людей с настоящими навыками."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "So, a question. Can you design a whole course?",
     "ru": "Итак, вопрос. Ты можешь разработать целый курс?"
    },
    {
     "t": "choice",
     "q_en": "How do you answer Mira?",
     "q_ru": "Как ты ответишь Мире?",
     "options": [
      {
       "en": "Yes, I can. A little.",
       "ru": "Да, могу. Немного.",
       "flag": "modest",
       "reply": [
        {
         "who": "mira",
         "en": "A little is a good start. Don't be shy.",
         "ru": "Немного — это хорошее начало. Не скромничай."
        },
        {
         "who": "mira",
         "en": "Show me.",
         "ru": "Покажи."
        }
       ]
      },
      {
       "en": "Yes, I can. I'm good at it.",
       "ru": "Да, могу. У меня это хорошо получается.",
       "flag": "confident",
       "reply": [
        {
         "who": "mira",
         "en": "I like that answer.",
         "ru": "Мне нравится такой ответ."
        },
        {
         "who": "mira",
         "en": "Show me.",
         "ru": "Покажи."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Can you explain AI tools to a team?",
     "ru": "А можешь объяснить команде, как работать с ИИ-инструментами?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes, I can. I explain them very simply.",
     "ru": "Да, могу. Я объясняю это очень просто."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Can you explain soup to a team?",
     "ru": "А суп команде объяснить сможешь?"
    },
    {
     "t": "line",
     "who": "mira",
     "en": "So, {name}, what are your skills?",
     "ru": "Итак, {name}, какие у тебя навыки?"
    },
    {
     "t": "say",
     "to": "mira",
     "task_ru": "Расскажи Мире о своих навыках: две вещи, которые ты умеешь, и одну, которую пока не умеешь. Подставь свои реальные навыки.",
     "hint_ru": "I can + глагол… I can + глагол… I can't + глагол… But I learn fast.",
     "example_en": "I can design online courses. I can build prototypes with AI tools. I can't speak English perfectly yet. But I learn fast.",
     "example_ru": "Я умею разрабатывать онлайн-курсы. Я умею делать прототипы с ИИ-инструментами. Я пока не говорю по-английски идеально. Но я быстро учусь.",
     "accept": [
      "i can",
      "can't",
      "cannot",
      "can not",
      "design",
      "build",
      "course",
      "prototype",
      "ai",
      "explain",
      "learn"
     ],
     "after": [
      {
       "who": "mira",
       "en": "Honest and clear. I like it.",
       "ru": "Честно и понятно. Мне нравится."
      },
      {
       "who": "mira",
       "en": "You can design and build. That's rare.",
       "ru": "Ты умеешь и проектировать, и собирать. Это редкость."
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "And I can to explain it to your team.",
     "ru": "И я могу объяснить это твоей команде. (В английской фразе ошибка — заметишь?)"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pepper opens one amber eye on the windowsill.",
     "ru": "Пеппер приоткрывает на подоконнике один янтарный глаз."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "CAN and the verb share one warm windowsill.",
     "ru": "CAN и глагол лежат на одном тёплом подоконнике."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "There is no room for TO. Push it off.",
     "ru": "Места для TO там нет. Столкни его."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Oops. I can explain it to your team.",
     "ru": "Ой. Я могу объяснить это твоей команде."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Better. You can explain. You can't make good tea.",
     "ru": "Так лучше. Объяснять ты умеешь. А вот хороший чай заваривать — нет."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "CAN plus verb. No TO. Never. Write it down.",
     "ru": "CAN плюс глагол. Без TO. Никогда. Запиши."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In your bag, Vera's notebook glows a little.",
     "ru": "В твоей сумке тетрадь Веры начинает тихонько светиться."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A tiny ink cat kicks TO off the page.",
     "ru": "Крошечный чернильный кот сталкивает TO со страницы."
    },
    {
     "t": "check",
     "q_en": "What is Mira's job?",
     "q_ru": "Кем работает Мира?",
     "options": [
      {
       "en": "She's a product lead in EdTech.",
       "ru": "Она продакт-лид в EdTech.",
       "correct": true
      },
      {
       "en": "She's a ferry pilot.",
       "ru": "Она капитан парома.",
       "correct": false
      },
      {
       "en": "She's a weather keeper.",
       "ru": "Она смотритель метеостанции.",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "mira",
       "en": "No, no! I'm a product lead in EdTech.",
       "ru": "Нет-нет! Я продакт-лид в EdTech."
      }
     ],
     "right": [
      {
       "who": "mira",
       "en": "Yes. I build learning products with my team.",
       "ru": "Да. Мы с командой создаём обучающие продукты."
      }
     ]
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Paper Boat Night is in six days.",
     "ru": "До Ночи бумажных корабликов осталось шесть дней."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Good skills need good soup. Eat!",
     "ru": "Хорошим навыкам нужен хороший суп. Ешь!"
    },
    {
     "t": "scene",
     "art": "harbor-noon",
     "place_en": "The harbor at noon",
     "place_ru": "Гавань в полдень",
     "emoji": "⛵"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "At noon the harbor smells of salt and fish.",
     "ru": "В полдень в гавани пахнет солью и рыбой."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Hi, {name}! Can you help me with this rope?",
     "ru": "Привет, {name}! Поможешь мне с этой верёвкой?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "I can try. But I'm not good at ropes.",
     "ru": "Могу попробовать. Но с верёвками у меня не очень."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "That's OK. I'm good at engines, not ropes.",
     "ru": "Ничего страшного. Я сам силён в моторах, а не в верёвках."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Oh! And there is a letter for you.",
     "ru": "О! И для тебя есть письмо."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "It's a blue envelope with a tiny paper boat.",
     "ru": "Это синий конверт с крошечным бумажным корабликом."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I don't know who sends them. Sorry!",
     "ru": "Не знаю, кто их присылает. Прости!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Inside, there is one line in Vera's handwriting.",
     "ru": "Внутри — одна строчка почерком Веры."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Go up the Kettle. Someone there remembers.",
     "ru": "Поднимись на Чайник. Там кое-кто помнит."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On a bench, Mira closes her laptop.",
     "ru": "На скамейке Мира закрывает ноутбук."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "My team has a video call tomorrow.",
     "ru": "Завтра у моей команды видеозвонок."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Can you join? Bring the prototype.",
     "ru": "Присоединишься? Возьми с собой прототип."
    }
   ],
   "hook_ru": "Видеозвонок с командой из четырёх стран — и кот, который очень хочет попасть в кадр.",
   "notebook": {
    "words": [
     {
      "en": "skill",
      "ru": "навык",
      "emoji": "🧰",
      "story_ex": "Good skills need good soup.",
      "my_ex": "My main skill is online course design.",
      "my_ex_ru": "Мой главный навык — разработка онлайн-курсов."
     },
     {
      "en": "be good at",
      "ru": "хорошо уметь, быть сильной в чём-то",
      "emoji": "⚙️",
      "story_ex": "I'm good at engines, not ropes.",
      "my_ex": "I'm good at course design, but not at cooking.",
      "my_ex_ru": "Я сильна в дизайне курсов, но не в готовке."
     },
     {
      "en": "AI tool",
      "ru": "ИИ-инструмент",
      "emoji": "🤖",
      "story_ex": "Wow. Is this an AI tool?",
      "my_ex": "I use AI tools every day at work.",
      "my_ex_ru": "Я каждый день пользуюсь ИИ-инструментами на работе."
     },
     {
      "en": "prototype",
      "ru": "прототип",
      "emoji": "💻",
      "story_ex": "It's a prototype for the sale.",
      "my_ex": "I can build a prototype in one day.",
      "my_ex_ru": "Я могу сделать прототип за один день."
     },
     {
      "en": "design",
      "ru": "разрабатывать, проектировать",
      "emoji": "✏️",
      "story_ex": "Can you design a whole course?",
      "my_ex": "I design online courses for adults.",
      "my_ex_ru": "Я разрабатываю онлайн-курсы для взрослых."
     },
     {
      "en": "build",
      "ru": "создавать, собирать",
      "emoji": "🧱",
      "story_ex": "I build small prototypes with AI tools.",
      "my_ex": "I can build a chatbot for my students.",
      "my_ex_ru": "Я могу собрать чат-бота для своих студентов."
     },
     {
      "en": "explain",
      "ru": "объяснять",
      "emoji": "💡",
      "story_ex": "Can you explain AI tools to a team?",
      "my_ex": "I can explain hard topics very simply.",
      "my_ex_ru": "Я умею очень просто объяснять сложные темы."
     },
     {
      "en": "a little",
      "ru": "немного",
      "emoji": "🤏",
      "story_ex": "Yes, I can. A little.",
      "my_ex": "I can speak English a little.",
      "my_ex_ru": "Я немного говорю по-английски."
     }
    ],
    "phrases": [
     {
      "en": "Yes, I can. Let me show you an example.",
      "ru": "Да, могу. Давайте я покажу пример.",
      "when_ru": "Уверенный ответ на собеседовании, когда можно показать портфолио или экран. «Let me show you» — готовый блок (chunk), правило пока не нужно."
     },
     {
      "en": "I'm not an expert yet, but I learn fast.",
      "ru": "Я пока не эксперт, но быстро учусь.",
      "when_ru": "Скромный, но сильный ответ: про английский или новый инструмент, которым ты ещё не владеешь."
     },
     {
      "en": "I use AI tools to build quick prototypes.",
      "ru": "Я использую ИИ-инструменты, чтобы быстро делать прототипы.",
      "when_ru": "Когда спрашивают про твой опыт с ИИ: на собеседовании или в звонке с иностранной командой. «to build» = «чтобы делать» — готовый блок (chunk)."
     }
    ],
    "rule": {
     "title_ru": "CAN / CAN'T — умею, могу",
     "rows": [
      [
       "I / you / he / she / we / they",
       "can",
       "+ глагол (design, build, explain)"
      ],
      [
       "I / you / he / she / we / they",
       "can't",
       "+ глагол"
      ],
      [
       "Can + you / she / they",
       "+ глагол … ?",
       "Yes, I can. / No, I can't."
      ]
     ],
     "examples": [
      {
       "en": "I can design a whole course.",
       "ru": "Я могу разработать целый курс."
      },
      {
       "en": "I can't code, but I can use AI tools.",
       "ru": "Я не умею программировать, но умею пользоваться ИИ-инструментами."
      },
      {
       "en": "Can you explain it to the team? — Yes, I can.",
       "ru": "Можешь объяснить это команде? — Да, могу."
      }
     ],
     "tip_ru": "После can идёт глагол в чистом виде: без to и без -s, даже с he/she. Сам can одинаковый для всех лиц. В вопросе can просто встаёт в начало — do не нужен.",
     "mistake": "❌ I can to explain. / She can speaks. → ✅ I can explain. / She can speak."
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Выбери правильную форму. Цель: увидеть, что после can глагол не меняется даже с she.",
     "q": "Mira can ___ (speak / speaks / to speak) three languages.",
     "answer": "speak",
     "alt": [
      "Mira can speak three languages.",
      "Mira can speak three languages"
     ],
     "note_ru": "После can — глагол без -s и без to, даже с he/she/it."
    },
    {
     "kind": "gap",
     "task_ru": "Впиши пропущенные слова дня. Цель: закрепить «be good at» и «build» в контексте работы.",
     "q": "I'm good ___ course design, and I can ___ a prototype in one day.",
     "answer": "at / build",
     "alt": [
      "at, build",
      "at; build",
      "at build",
      "at / make",
      "at, make",
      "at / create",
      "at, create"
     ],
     "note_ru": "be good AT — предлог обязателен. build a prototype — естественное сочетание «собрать прототип»; make и create тоже подходят."
    },
    {
     "kind": "order",
     "task_ru": "Составь предложение из слов. Цель: запомнить порядок «кто + can + глагол + что».",
     "q": "build / I / with / can / prototypes / AI tools",
     "answer": "I can build prototypes with AI tools.",
     "alt": [
      "I can build prototypes with AI tools",
      "With AI tools I can build prototypes.",
      "With AI tools, I can build prototypes."
     ],
     "note_ru": "Сначала кто (I), потом can, сразу за ним глагол (build), потом всё остальное."
    },
    {
     "kind": "fix",
     "task_ru": "Найди и исправь ошибку. Цель: поймать типичную ошибку русскоговорящих (как в сцене с Пеппером).",
     "q": "I can to design online courses.",
     "answer": "I can design online courses.",
     "alt": [
      "I can design online courses"
     ],
     "note_ru": "Между can и глаголом нет to. Помнишь подоконник Пеппера? Для TO там нет места."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: сказать о своём реальном навыке.",
     "q": "Я умею делать прототипы с помощью ИИ-инструментов.",
     "answer": "I can build prototypes with AI tools.",
     "alt": [
      "I can build prototypes with AI tools",
      "I can make prototypes with AI tools.",
      "I can create prototypes with AI tools.",
      "I can build prototypes using AI tools.",
      "I can make prototypes using AI tools.",
      "I can create prototypes using AI tools."
     ],
     "note_ru": "«Умею» здесь = can. «Делать прототипы» естественнее всего сказать build prototypes."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: соединить can't с be good at (повторение to be из Дня 1).",
     "q": "Я не умею программировать, но я сильна в дизайне курсов.",
     "answer": "I can't code, but I'm good at course design.",
     "alt": [
      "I can't code, but I am good at course design.",
      "I can't code but I'm good at course design.",
      "I cannot code, but I'm good at course design.",
      "I can't program, but I'm good at course design.",
      "I can't code, but I'm good at designing courses."
     ],
     "note_ru": "can't + глагол без to. В «I'm good at» не теряй am (ошибка из Дня 1: «I good at»)."
    },
    {
     "kind": "question",
     "task_ru": "Ты — Мира на собеседовании. Сделай вопрос из утверждения. Цель: научиться задавать вопросы с can.",
     "q": "You can explain AI tools to a team. → ___?",
     "answer": "Can you explain AI tools to a team?",
     "alt": [
      "Can you explain AI tools to a team",
      "Can you explain AI tools to the team?",
      "Can you explain AI tools to your team?"
     ],
     "note_ru": "В вопросе can просто встаёт в начало. Do здесь не нужен: «Do you can…?» — ошибка."
    },
    {
     "kind": "write",
     "task_ru": "Напиши 3 предложения о себе для собеседования: 2 вещи, которые ты умеешь (I can…), и 1, которую пока не умеешь (I can't… but…). Цель: подготовить свой рассказ о навыках.",
     "q": "My skills: I can… / I can… / I can't…, but…",
     "answer": "I can design online courses. I can build prototypes with AI tools. I can't code, but I learn fast.",
     "alt": [],
     "note_ru": "Проверь себя: после can и can't нет to и нет -s. Пиши про свою реальную работу — это пригодится на настоящем собеседовании."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Как в сцене с Мирой: назови вслух две вещи, которые ты умеешь как методист, и одну, которую пока не умеешь. Затем добавь ещё одно своё предложение.",
     "template_en": "I can ___. I can ___. I can't ___ yet, but I learn fast.",
     "sample_en": "I can design online courses. I can explain hard topics simply. I can't code yet, but I learn fast.",
     "sample_ru": "Я умею разрабатывать онлайн-курсы. Я умею просто объяснять сложные темы. Я пока не умею программировать, но я быстро учусь."
    },
    {
     "prompt_ru": "Собеседование в иностранной компании: тебя спрашивают про ИИ. Скажи, какими ИИ-инструментами ты пользуешься и что с ними делаешь. Затем добавь ещё одно предложение.",
     "template_en": "I use AI tools every day. I can build ___ with AI tools. I'm good at ___.",
     "sample_en": "I use AI tools every day. I can build quiz prototypes with AI tools. I'm good at course design.",
     "sample_ru": "Я каждый день пользуюсь ИИ-инструментами. Я умею делать с ними прототипы квизов. Я сильна в дизайне курсов."
    },
    {
     "prompt_ru": "Small talk (например, с Тео): скажи, чего ты пока не умеешь и как этому учишься, например через сериалы. Затем добавь ещё одно предложение.",
     "template_en": "I can't ___ yet. I ___ every day. I can ___ a little.",
     "sample_en": "I can't speak English perfectly yet. I watch series in English every day. I can understand a little.",
     "sample_ru": "Я пока не говорю по-английски идеально. Я каждый день смотрю сериалы на английском. Я уже немного понимаю."
    }
   ]
  },
  {
   "day": 6,
   "title": "The Cat Is on the Call",
   "title_ru": "Кот на созвоне",
   "logline_ru": "Твой первый созвон с международной командой, и именно сейчас кот решает стать звездой.",
   "cover": "shop-bright-morning",
   "beats": [
    {
     "t": "scene",
     "art": "shop-bright-morning",
     "place_en": "Vera's Paper & Tea, bright morning",
     "place_ru": "«Бумага и чай» Веры, ясное утро",
     "emoji": "🌤️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Morning light floods the clean little shop.",
     "ru": "Утренний свет заливает чистую маленькую лавку."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The wind chimes are singing at the green door.",
     "ru": "У зелёной двери поют на ветру колокольчики."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Paper Boat Night is in five days.",
     "ru": "До Ночи бумажных корабликов осталось пять дней."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Good morning, {name}! Are you ready for the call?",
     "ru": "Доброе утро, {name}! Готова к созвону?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes, I'm ready, but I'm a bit nervous.",
     "ru": "Да, готова, но немного нервничаю."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "My team works remotely from four countries.",
     "ru": "Моя команда работает удалённо из четырёх стран."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Is the wifi good here?",
     "ru": "Здесь хороший вайфай?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "It's Vera's wifi. The best on the island.",
     "ru": "Это вайфай Веры. Лучший на острове."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Mira is sitting next to you with her laptop.",
     "ru": "Мира сидит рядом с тобой со своим ноутбуком."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Four faces are joining the call from four countries.",
     "ru": "К созвону подключаются четыре человека из четырёх стран."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Hello, everyone! Nice to meet you!",
     "ru": "Всем привет! Рада познакомиться!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The four faces are smiling, but they are confused.",
     "ru": "Четыре лица улыбаются, но выглядят растерянными."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "{name}, they can't hear you. You're on mute!",
     "ru": "{name}, тебя не слышно. У тебя выключен микрофон!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You quickly click the microphone button.",
     "ru": "Ты быстро нажимаешь на кнопку микрофона."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Sorry! Can you hear me now?",
     "ru": "Ой, извините! Теперь меня слышно?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Four faces nod. Yes, they can hear you!",
     "ru": "Четыре человека кивают. Да, теперь тебя слышно!"
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Great! Welcome to our team call!",
     "ru": "Отлично! Добро пожаловать на наш командный созвон!"
    },
    {
     "t": "choice",
     "q_en": "Your camera is still off. What do you say?",
     "q_ru": "Твоя камера всё ещё выключена. Что скажешь?",
     "options": [
      {
       "en": "I'm turning my camera on. Just a second.",
       "ru": "Включаю камеру. Секундочку.",
       "flag": "camera_on",
       "reply": [
        {
         "who": "narrator",
         "en": "Your face appears in a small square.",
         "ru": "В маленьком квадратике появляется твоё лицо."
        },
        {
         "who": "mira",
         "en": "Great, now they can see you too!",
         "ru": "Отлично, теперь тебя ещё и видно!"
        }
       ]
      },
      {
       "en": "Sorry, I'm keeping my camera off today.",
       "ru": "Извините, сегодня я без камеры.",
       "flag": "camera_off",
       "reply": [
        {
         "who": "mira",
         "en": "No problem! Your voice is enough.",
         "ru": "Без проблем! Твоего голоса достаточно."
        },
        {
         "who": "narrator",
         "en": "Four little hands wave hello on the screen.",
         "ru": "На экране тебе машут четыре маленькие ладошки."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Can you share your screen and show the prototype?",
     "ru": "Можешь расшарить экран и показать прототип?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Sure, I'm sharing my screen right now.",
     "ru": "Конечно, уже показываю экран."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your AI catalog is opening on everyone's screen.",
     "ru": "У всех на экранах открывается твой ИИ-каталог."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "So, {name}, what are you working on right now?",
     "ru": "Итак, {name}, над чем ты сейчас работаешь?"
    },
    {
     "t": "say",
     "to": "mira",
     "task_ru": "Мира спрашивает, над чем ты работаешь прямо сейчас. Послушай пример, а потом скажи 2–3 предложения о себе: твой проект, ИИ-эксперимент, учёба.",
     "hint_ru": "I'm working on... / I'm learning... / I'm building... — не теряй am!",
     "example_en": "I'm working on an AI catalog. I'm cleaning an old shop. I'm learning English every day.",
     "example_ru": "Я работаю над ИИ-каталогом. Я навожу порядок в старой лавке. Я каждый день учу английский.",
     "accept": [
      "working on",
      "i'm working",
      "i am working",
      "i'm learning",
      "i am learning",
      "i'm building",
      "i am building",
      "i'm creating",
      "i'm testing",
      "i'm making",
      "i am"
     ],
     "after": [
      {
       "who": "mira",
       "en": "Wow, you're working on a lot of things!",
       "ru": "Ого, у тебя столько всего сразу!"
      },
      {
       "who": "mira",
       "en": "And what about the AI catalog?",
       "ru": "А что с ИИ-каталогом?"
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "Right now I working on a search tool.",
     "ru": "Сейчас я… работаю над поиском. (Ой, тут что-то потерялось!)"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "At that moment, Pepper jumps onto the counter.",
     "ru": "И тут Пеппер запрыгивает на прилавок."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He is walking slowly across your keyboard.",
     "ru": "Он медленно идёт прямо по клавиатуре."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Now he is sitting in front of the camera.",
     "ru": "И вот он уже сидит прямо перед камерой."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Look, the cat is joining the call!",
     "ru": "Смотрите, к созвону подключается кот!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Everyone on the screen is laughing.",
     "ru": "Все на экране смеются."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Sorry, he usually sleeps all morning!",
     "ru": "Простите, обычно он спит всё утро!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pepper turns and whispers in your ear.",
     "ru": "Пеппер поворачивается и шепчет тебе на ухо."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Not 'I working'. It's 'I AM working'.",
     "ru": "Не «I working», а «I AM working»."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Without AM, ING is a balloon without a string.",
     "ru": "Без AM окончание -ING — как шарик без ниточки: улетает."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Am, is, are first, then ING.",
     "ru": "Сначала am, is, are, потом -ING."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Write it down.",
     "ru": "Запиши."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In Vera's notebook, a tiny ink cat is waving.",
     "ru": "В тетради Веры машет лапкой крошечный чернильный котик."
    },
    {
     "t": "check",
     "q_en": "What is Pepper doing during the call?",
     "q_ru": "Что делает Пеппер во время созвона?",
     "options": [
      {
       "en": "He is sitting in front of the camera.",
       "ru": "Сидит перед камерой.",
       "correct": true
      },
      {
       "en": "He is sleeping upstairs.",
       "ru": "Спит наверху.",
       "correct": false
      },
      {
       "en": "He is eating soup in the café.",
       "ru": "Ест суп в кафе.",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "pepper",
       "en": "No, no! Look again, please.",
       "ru": "Нет-нет! Посмотри ещё раз, пожалуйста."
      }
     ],
     "right": [
      {
       "who": "pepper",
       "en": "Correct! I'm the star of this call.",
       "ru": "Верно! Я звезда этого созвона."
      }
     ]
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Can you join our next call on Friday?",
     "ru": "Подключишься к нашему следующему созвону в пятницу?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes, I can! See you on Friday.",
     "ru": "Да, конечно! До встречи в пятницу."
    },
    {
     "t": "scene",
     "art": "stair-lane-afternoon",
     "place_en": "The stair-lane, late afternoon",
     "place_ru": "Лестничная улочка, ближе к вечеру",
     "emoji": "🌇"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Golden light is falling on the pastel houses.",
     "ru": "Золотой свет ложится на пастельные домики."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}! Look, Pepper is on the internet!",
     "ru": "{name}! Смотри, Пеппер в интернете!"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Someone on Mira's team is posting the video.",
     "ru": "Кто-то из команды Миры выкладывает видео."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Look, the likes are going up right now!",
     "ru": "Смотри, лайки растут прямо сейчас!"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Of course. I'm a natural star.",
     "ru": "Естественно. Я прирождённая звезда."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A small blue balloon is rising from the Kettle.",
     "ru": "С вершины Чайника поднимается маленький синий шарик."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "That's strange. Mr. Ansel only sends balloons in the morning.",
     "ru": "Странно. Мистер Энсел запускает шарики только по утрам."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Behind you, the lamp in Vera's window is shining.",
     "ru": "А за твоей спиной в окне лавки Веры горит лампа."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Who is that blue balloon for?",
     "ru": "Для кого же этот синий шарик?"
    }
   ],
   "hook_ru": "У Пеппера уже тысячи подписчиков, а ты впервые поднимаешься на Чайник к смотрителю, который что-то прячет в ящике стола.",
   "notebook": {
    "words": [
     {
      "en": "call",
      "ru": "звонок, созвон",
      "emoji": "📞",
      "story_ex": "Are you ready for the call?",
      "my_ex": "I have a call with my team every Monday.",
      "my_ex_ru": "Каждый понедельник у меня созвон с командой."
     },
     {
      "en": "hear",
      "ru": "слышать",
      "emoji": "👂",
      "story_ex": "Sorry! Can you hear me now?",
      "my_ex": "Students hear my voice in my video lessons.",
      "my_ex_ru": "В моих видеоуроках студенты слышат мой голос."
     },
     {
      "en": "on mute",
      "ru": "с выключенным микрофоном",
      "emoji": "🔇",
      "story_ex": "They can't hear you. You're on mute!",
      "my_ex": "I'm often on mute at the start of a call.",
      "my_ex_ru": "В начале созвона у меня часто выключен микрофон."
     },
     {
      "en": "share my screen",
      "ru": "показать (расшарить) свой экран",
      "emoji": "🖥️",
      "story_ex": "Sure, I'm sharing my screen right now.",
      "my_ex": "I usually share my screen and show the course.",
      "my_ex_ru": "Обычно я расшариваю экран и показываю курс."
     },
     {
      "en": "camera",
      "ru": "камера",
      "emoji": "📹",
      "story_ex": "Now he is sitting in front of the camera.",
      "my_ex": "I usually turn my camera on for team calls.",
      "my_ex_ru": "На командных созвонах я обычно включаю камеру."
     },
     {
      "en": "join",
      "ru": "присоединиться, подключиться",
      "emoji": "🤝",
      "story_ex": "Look, the cat is joining the call!",
      "my_ex": "I want to join an international EdTech team.",
      "my_ex_ru": "Я хочу присоединиться к международной EdTech-команде."
     },
     {
      "en": "right now",
      "ru": "прямо сейчас",
      "emoji": "⏱️",
      "story_ex": "Look, the likes are going up right now!",
      "my_ex": "Right now I'm learning English with a cozy story.",
      "my_ex_ru": "Прямо сейчас я учу английский по уютной истории."
     },
     {
      "en": "work on",
      "ru": "работать над",
      "emoji": "🛠️",
      "story_ex": "So, what are you working on right now?",
      "my_ex": "I'm working on a new online course with AI tools.",
      "my_ex_ru": "Я работаю над новым онлайн-курсом с ИИ-инструментами."
     }
    ],
    "phrases": [
     {
      "en": "Sorry, I can't hear you. Could you repeat that, please?",
      "ru": "Извините, я вас не слышу. Можете повторить, пожалуйста?",
      "when_ru": "Когда на созвоне пропал или прерывается звук. «Could you...?» — вежливый готовый блок, учи целиком. Если не работает камера: «Sorry, my camera isn't working.»"
     },
     {
      "en": "Let me share my screen. Can you see it?",
      "ru": "Сейчас покажу экран. Вам видно?",
      "when_ru": "Когда хочешь показать команде прототип, курс или презентацию. «Let me...» — готовый блок."
     },
     {
      "en": "At the moment I'm working on an AI course.",
      "ru": "Сейчас я работаю над курсом с ИИ.",
      "when_ru": "Ответ на «What are you working on?» на созвоне, нетворкинге или собеседовании; подставь свой проект."
     }
    ],
    "rule": {
     "title_ru": "Present Continuous: что происходит сейчас",
     "rows": [
      [
       "I",
       "am (I'm)",
       "work + ing"
      ],
      [
       "he / she / it",
       "is (he's)",
       "work + ing"
      ],
      [
       "you / we / they",
       "are (you're)",
       "work + ing"
      ],
      [
       "I",
       "am not (I'm not)",
       "work + ing"
      ],
      [
       "❓ Are you",
       "work + ing",
       "...?"
      ],
      [
       "обычно: usually / every day",
       "→ I work",
       "present simple"
      ],
      [
       "сейчас: right now / this week",
       "→ I'm working",
       "am / is / are + -ing"
      ]
     ],
     "examples": [
      {
       "en": "Right now I'm working on an AI prototype.",
       "ru": "Прямо сейчас я работаю над ИИ-прототипом."
      },
      {
       "en": "I usually work from home. Today I'm working in a café.",
       "ru": "Обычно я работаю из дома. А сегодня работаю в кафе."
      },
      {
       "en": "Is your team joining the call?",
       "ru": "Твоя команда подключается к созвону?"
      }
     ],
     "tip_ru": "Am / is / are — это ниточка, а -ing — воздушный шарик: без ниточки шарик улетает. Обычно и каждый день → present simple; прямо сейчас и на этой неделе → am/is/are + -ing.",
     "mistake": "❌ I working on a new course. → ✅ I'm (I am) working on a new course."
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Цель: узнать нужную форму. Выбери правильный вариант и перепиши предложение.",
     "q": "Right now Pepper ___ (is sitting / sits) in front of the camera.",
     "answer": "is sitting",
     "alt": [
      "Right now Pepper is sitting in front of the camera.",
      "Pepper is sitting"
     ],
     "note_ru": "«Right now» = прямо сейчас → is + -ing. Pepper = he → is."
    },
    {
     "kind": "gap",
     "task_ru": "Цель: закрепить слова дня. Вставь пропущенные слова.",
     "q": "Sorry, we can't ___ you. You're on ___!",
     "answer": "hear; mute",
     "alt": [
      "hear, mute",
      "hear / mute",
      "hear mute",
      "Sorry, we can't hear you. You're on mute!"
     ],
     "note_ru": "hear — слышать; on mute — с выключенным микрофоном. Это главная фраза любого созвона."
    },
    {
     "kind": "order",
     "task_ru": "Цель: почувствовать порядок слов. Составь предложение из слов.",
     "q": "am / my / sharing / I / screen / right now",
     "answer": "I am sharing my screen right now.",
     "alt": [
      "I'm sharing my screen right now.",
      "Right now I am sharing my screen.",
      "Right now I'm sharing my screen."
     ],
     "note_ru": "Кто → am/is/are → глагол + -ing → остальное. «Right now» можно поставить в начало или в конец."
    },
    {
     "kind": "fix",
     "task_ru": "Цель: поймать типичную ошибку. Найди и исправь ошибку.",
     "q": "I working on a new online course.",
     "answer": "I'm working on a new online course.",
     "alt": [
      "I am working on a new online course."
     ],
     "note_ru": "По-русски «я работаю» — одно слово, а в английском нужна «ниточка» am: I AM working."
    },
    {
     "kind": "translate",
     "task_ru": "Цель: сказать о своём проекте. Переведи на английский.",
     "q": "Прямо сейчас я работаю над ИИ-прототипом.",
     "answer": "Right now I'm working on an AI prototype.",
     "alt": [
      "Right now I am working on an AI prototype.",
      "I'm working on an AI prototype right now.",
      "I am working on an AI prototype right now."
     ],
     "note_ru": "«Работать над» = work on; предлог on обязателен. Перед AI — an (звук «эй»). Prototype — слово 5-го дня."
    },
    {
     "kind": "translate",
     "task_ru": "Цель: различать «обычно» и «сегодня» (повторяем present simple из Дня 2). Переведи на английский.",
     "q": "Обычно я работаю удалённо. А сегодня я работаю в кафе.",
     "answer": "I usually work remotely. Today I'm working in a café.",
     "alt": [
      "I usually work remotely. Today I'm working in a cafe.",
      "I usually work remotely. Today I am working in a café.",
      "I usually work remotely. Today I am working in a cafe.",
      "Usually I work remotely. Today I'm working in a café.",
      "Usually I work remotely. Today I'm working in a cafe.",
      "Usually I work remotely. Today I am working in a cafe.",
      "I usually work remotely. But today I'm working in a café.",
      "I usually work remotely. But today I'm working in a cafe.",
      "I usually work remotely. But today I am working in a cafe.",
      "I usually work remotely, but today I'm working in a café.",
      "I usually work remotely, but today I'm working in a cafe.",
      "I usually work remotely, but today I am working in a cafe."
     ],
     "note_ru": "Обычно (рутина) → I work. Сегодня, сейчас → I'm working. Usually ставим перед глаголом (I usually work) или в начало предложения."
    },
    {
     "kind": "question",
     "task_ru": "Цель: уметь спросить коллегу о проекте. Задай вопрос со словом What к предложению.",
     "q": "You are working on a new course. → What ...?",
     "answer": "What are you working on?",
     "alt": [
      "What are you working on right now?",
      "What are you working on now?",
      "What are you working on at the moment?"
     ],
     "note_ru": "В вопросе are встаёт перед you: What ARE you working on? Предлог on остаётся в конце."
    },
    {
     "kind": "write",
     "task_ru": "Цель: подготовить свой рассказ для настоящего созвона. Напиши 3 предложения о себе: над чем ты работаешь прямо сейчас, что ты обычно делаешь на работе и что нового на этой неделе.",
     "q": "Right now I'm working on ___. I usually ___. This week I'm ___.",
     "answer": "Right now I'm working on an online course. I usually design lessons with AI tools. This week I'm building a small prototype.",
     "alt": [],
     "note_ru": "Сейчас / на этой неделе → am/is/are + -ing; обычно → present simple без am. Проверь, что в каждом -ing-предложении есть am."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Как в сцене с Мирой: расскажи вслух, над чем ты работаешь прямо сейчас (проект, ИИ-эксперимент, учёба). Бонус: добавь ещё одно предложение.",
     "template_en": "Right now I'm working on ___. I'm also learning ___.",
     "sample_en": "Right now I'm working on an AI chatbot for students. I'm also learning English every day.",
     "sample_ru": "Прямо сейчас я работаю над ИИ-чат-ботом для студентов. А ещё я каждый день учу английский."
    },
    {
     "prompt_ru": "Созвон с международной командой: расскажи, что ты обычно делаешь на работе и чем занимаешься на этой неделе. Бонус: добавь ещё одно предложение.",
     "template_en": "I usually ___. But this week I'm ___.",
     "sample_en": "I usually create online courses. But this week I'm testing a new AI tool.",
     "sample_ru": "Обычно я создаю онлайн-курсы. Но на этой неделе я тестирую новый ИИ-инструмент."
    },
    {
     "prompt_ru": "На созвоне проблемы со звуком и экраном. Скажи вслух три фразы, чтобы всё исправить. Бонус: добавь ещё одно предложение.",
     "template_en": "Sorry, I can't ___ you. I think you're on ___. Can you see my ___?",
     "sample_en": "Sorry, I can't hear you. I think you're on mute. Can you see my screen now?",
     "sample_ru": "Извините, я вас не слышу. Кажется, у вас выключен микрофон. Теперь вам видно мой экран?"
    }
   ]
  },
  {
   "day": 7,
   "title": "Ten Thousand Followers",
   "title_ru": "Десять тысяч подписчиков",
   "logline_ru": "Кот стал звездой соцсетей, вы с Тео поднимаетесь на канатке к метеостанции, а старый смотритель вспоминает Веру и что-то прячет.",
   "cover": "cable-car-afternoon",
   "beats": [
    {
     "t": "scene",
     "art": "cable-car-afternoon",
     "place_en": "The cable car station, afternoon",
     "place_ru": "Станция канатной дороги, день",
     "emoji": "🚡"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You stand by the little red cable car.",
     "ru": "Ты стоишь у маленькой красной кабинки канатной дороги."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}, yesterday the post was in every feed!",
     "ru": "{name}, вчера этот пост был в каждой ленте!"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Pepper has ten thousand followers now!",
     "ru": "У Пеппера теперь десять тысяч подписчиков!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pepper sits on the bench with his tail up.",
     "ru": "Пеппер сидит на скамейке, гордо задрав хвост."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "One post. Ten thousand followers. I am a star.",
     "ru": "Один пост. Десять тысяч подписчиков. Я звезда."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yesterday it was my call, not your show!",
     "ru": "Вчера это был мой созвон, а не твоё шоу!"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "The call was boring, and I was amazing.",
     "ru": "Созвон был скучным, а я был потрясающим."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You and Theo get into the cable car without Pepper.",
     "ru": "Вы с Тео садитесь в кабинку — без Пеппера."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "It rises slowly over red roofs and green grass.",
     "ru": "Она медленно поднимается над красными крышами и зелёной травой."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "What is your favorite series now?",
     "ru": "Какой у тебя сейчас любимый сериал?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "A superhero series. I'm on season two.",
     "ru": "Супергеройский. Я на втором сезоне."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Was the last episode good?",
     "ru": "Последняя серия была хорошая?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "It was amazing, but the first season was boring.",
     "ru": "Она была потрясающей, а вот первый сезон был скучным."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Really? The first season was my favorite!",
     "ru": "Правда? А мне первый сезон нравился больше всего!"
    },
    {
     "t": "line",
     "who": "you",
     "en": "The first episodes were slow, like meetings at work!",
     "ru": "Первые серии были медленные, как совещания на работе!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Below you, the whole island is green and gold.",
     "ru": "Под тобой весь остров — зелёный и золотой."
    },
    {
     "t": "choice",
     "q_en": "The view is amazing. What do you do?",
     "q_ru": "Вид потрясающий. Что ты сделаешь?",
     "options": [
      {
       "en": "Photo time! It's for my post.",
       "ru": "Время для фото! Это для моего поста.",
       "flag": "photo",
       "reply": [
        {
         "who": "theo",
         "en": "Good choice. Pepper isn't the only star here.",
         "ru": "Хороший выбор. Пеппер тут не единственная звезда."
        }
       ]
      },
      {
       "en": "No phone. I just want to look.",
       "ru": "Без телефона. Я просто хочу посмотреть.",
       "flag": "look",
       "reply": [
        {
         "who": "theo",
         "en": "Good choice. Some views aren't for followers.",
         "ru": "Хороший выбор. Некоторые виды — не для подписчиков."
        }
       ]
      }
     ]
    },
    {
     "t": "scene",
     "art": "weather-station-golden",
     "place_en": "The weather station on the Kettle, golden hour",
     "place_ru": "Метеостанция на вершине Чайника, золотой час",
     "emoji": "🌄"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "An old man in a flat cap opens the door.",
     "ru": "Дверь открывает старик в плоской кепке."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "Welcome, {name}. You have Vera's key.",
     "ru": "Добро пожаловать, {name}. У тебя ключ Веры."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He gives you hot tea in a blue cup.",
     "ru": "Он даёт тебе горячий чай в синей чашке."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "Vera was my friend.",
     "ru": "Вера была моей подругой."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "The shop was full of light.",
     "ru": "Лавка была полна света."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "We were young.",
     "ru": "Мы были молоды."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Were you friends for a long time?",
     "ru": "Вы долго дружили?"
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "Yes. For fifty years.",
     "ru": "Да. Пятьдесят лет."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "Tell me, {name}, where were you last weekend?",
     "ru": "Скажи-ка, {name}, где ты была в прошлые выходные?"
    },
    {
     "t": "say",
     "to": "ansel",
     "task_ru": "Ансел спрашивает, где ты была в прошлые выходные. Скажи 2–3 предложения о себе: где ты была, с кем и какими были выходные. Подставь свои настоящие детали.",
     "hint_ru": "Last weekend I was in/at ___. I was with ___. It was amazing / quiet / a bit boring.",
     "example_en": "Last weekend I was at home. I was with my sister. It was quiet, but not boring.",
     "example_ru": "В прошлые выходные я была дома. Я была с сестрой. Было тихо, но не скучно.",
     "accept": [
      "last weekend",
      "weekend",
      "i was",
      "it was",
      "was",
      "were",
      "wasn't"
     ],
     "after": [
      {
       "who": "ansel",
       "en": "Thank you. Every weekend is a good story.",
       "ru": "Спасибо. Каждые выходные — хорошая история."
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "And where you were last weekend, Mr. Ansel?",
     "ru": "А где вы были в прошлые выходные, мистер Ансел?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Suddenly, Theo's mail bag moves, and a grey head appears.",
     "ru": "Вдруг почтовая сумка Тео шевелится, и из неё появляется серая голова."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Not \"where you were\". Where WERE you?",
     "ru": "Не «where you were». Where WERE you?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "In questions, WERE jumps to the front, like a cat.",
     "ru": "В вопросе WERE запрыгивает вперёд — как кот."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Write it down.",
     "ru": "Запиши."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Pepper! Were you in my bag the whole time?",
     "ru": "Пеппер! Ты что, всё это время сидел у меня в сумке?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Yes. It was boring.",
     "ru": "Да. Было скучно."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "Last weekend I was here, with my clouds.",
     "ru": "В прошлые выходные я был здесь, со своими облаками."
    },
    {
     "t": "check",
     "q_en": "Who was Vera for Mr. Ansel?",
     "q_ru": "Кем была Вера для мистера Ансела?",
     "options": [
      {
       "en": "an old friend",
       "ru": "старой подругой",
       "correct": true
      },
      {
       "en": "his sister",
       "ru": "его сестрой",
       "correct": false
      },
      {
       "en": "his teacher",
       "ru": "его учительницей",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "pepper",
       "en": "No. Listen to the old man, human.",
       "ru": "Нет. Слушай старика, человек."
      }
     ],
     "right": [
      {
       "who": "ansel",
       "en": "Yes. An old friend. A very dear friend.",
       "ru": "Да. Старая подруга. Очень дорогая подруга."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Ansel goes to the kitchen for more tea.",
     "ru": "Ансел уходит на кухню за чаем."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On his desk, there are blue envelopes and blue balloons.",
     "ru": "На его столе лежат синие конверты и синие шарики."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Theo, look, this paper is like my letters!",
     "ru": "Тео, смотри, эта бумага как у моих писем!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The floor creaks, and Ansel is in the doorway.",
     "ru": "Скрипит пол — в дверях стоит Ансел."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Quietly, he puts the envelopes in a drawer.",
     "ru": "Он тихо убирает конверты в ящик."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In your bag, Vera's notebook draws a tiny ink balloon.",
     "ru": "В твоей сумке тетрадь Веры рисует крошечный чернильный шарик."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Three days to Paper Boat Night, and secrets everywhere.",
     "ru": "До Ночи бумажных корабликов три дня, а кругом одни секреты."
    }
   ],
   "hook_ru": "Поздно вечером, уже в лавке, ты находишь под прилавком крошечную замочную скважину — и маленький латунный ключик из синей жестянки наконец подходит.",
   "notebook": {
    "words": [
     {
      "en": "yesterday",
      "ru": "вчера",
      "emoji": "📅",
      "story_ex": "Yesterday the post was in every feed!",
      "my_ex": "Yesterday I was on three calls with my team.",
      "my_ex_ru": "Вчера у меня было три созвона с командой."
     },
     {
      "en": "last weekend",
      "ru": "в прошлые выходные",
      "emoji": "🧺",
      "story_ex": "Where were you last weekend?",
      "my_ex": "Last weekend I was at home with tea and my laptop.",
      "my_ex_ru": "В прошлые выходные я была дома с чаем и ноутбуком."
     },
     {
      "en": "episode",
      "ru": "серия, эпизод",
      "emoji": "📺",
      "story_ex": "Was the last episode good?",
      "my_ex": "The last episode of my favorite series was amazing.",
      "my_ex_ru": "Последняя серия моего любимого сериала была потрясающей."
     },
     {
      "en": "season",
      "ru": "сезон (сериала)",
      "emoji": "🍿",
      "story_ex": "The first season was my favorite!",
      "my_ex": "The first season was slow, but season two is my favorite.",
      "my_ex_ru": "Первый сезон был медленным, но второй — мой любимый."
     },
     {
      "en": "post",
      "ru": "пост, публикация",
      "emoji": "📱",
      "story_ex": "One post. Ten thousand followers.",
      "my_ex": "My post about AI tools for teachers was popular.",
      "my_ex_ru": "Мой пост об ИИ-инструментах для учителей был популярным."
     },
     {
      "en": "followers",
      "ru": "подписчики",
      "emoji": "👥",
      "story_ex": "Pepper has ten thousand followers now!",
      "my_ex": "My page about AI in education has 300 followers.",
      "my_ex_ru": "У моей страницы про ИИ в образовании 300 подписчиков."
     },
     {
      "en": "amazing",
      "ru": "потрясающий, невероятный",
      "emoji": "🤩",
      "story_ex": "It was amazing, but the first season was boring.",
      "my_ex": "The view from the plane was amazing.",
      "my_ex_ru": "Вид из самолёта был потрясающий."
     },
     {
      "en": "boring",
      "ru": "скучный",
      "emoji": "🥱",
      "story_ex": "The call was boring, and I was amazing.",
      "my_ex": "Yesterday's webinar was long and boring.",
      "my_ex_ru": "Вчерашний вебинар был длинным и скучным."
     }
    ],
    "phrases": [
     {
      "en": "What was your weekend like?",
      "ru": "Как прошли твои выходные?",
      "when_ru": "В начале созвона или разговора в понедельник — классический small talk в международной команде. Готовый блок (chunk), запомни целиком."
     },
     {
      "en": "No spoilers, please! I'm on episode three.",
      "ru": "Только без спойлеров! Я на третьей серии.",
      "when_ru": "Когда коллеги или новые знакомые обсуждают сериал, который ты ещё досматриваешь."
     },
     {
      "en": "Have you seen this post? It's everywhere!",
      "ru": "Ты видел(а) этот пост? Он повсюду!",
      "when_ru": "Чтобы начать разговор о соцсетях. «Have you seen…?» — готовый блок (chunk), правило пока не учим."
     }
    ],
    "rule": {
     "title_ru": "Прошедшее время to be: was / were",
     "rows": [
      [
       "I / he / she / it",
       "was",
       "I was at home."
      ],
      [
       "you / we / they",
       "were",
       "They were on a call."
      ],
      [
       "I / he / she / it",
       "wasn't (= was not)",
       "It wasn't boring."
      ],
      [
       "you / we / they",
       "weren't (= were not)",
       "We weren't at work."
      ],
      [
       "Вопрос: Was / Were + кто…?",
       "Was it good?",
       "Were you at home?"
      ],
      [
       "Вопрос: Where / How + was / were + кто…?",
       "Where were you?",
       "How was the call?"
      ]
     ],
     "examples": [
      {
       "en": "Last weekend I was at home. I wasn't at work.",
       "ru": "В прошлые выходные я была дома. Я не была на работе."
      },
      {
       "en": "The call was long, but it wasn't boring.",
       "ru": "Созвон был долгим, но не скучным."
      },
      {
       "en": "Where were you yesterday? — I was on a call with my team.",
       "ru": "Где ты была вчера? — Я была на созвоне с командой."
      }
     ],
     "tip_ru": "Was — для I, he, she, it; were — для you, we, they. В вопросе was/were прыгает вперёд, перед тем, о ком спрашиваем: Where WERE you?",
     "mistake": "❌ Where you were? / They was busy. → ✅ Where were you? / They were busy."
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Выбери правильную форму. Цель: различать настоящее и прошедшее время to be (повтор Дня 1).",
     "q": "Yesterday the call ___ (is / was) long, but today it ___ (is / was) short.",
     "answer": "was, is",
     "alt": [
      "was / is",
      "was/is",
      "was; is",
      "was is",
      "was - is"
     ],
     "note_ru": "Yesterday → прошлое → was. Today → настоящее → is."
    },
    {
     "kind": "gap",
     "task_ru": "Вставь слово дня. Цель: закрепить лексику о сериалах.",
     "q": "The last ___ of season two was amazing: fifty minutes of action!",
     "answer": "episode",
     "alt": [],
     "note_ru": "Episode — одна серия; season — весь сезон, а «season two» в предложении уже есть."
    },
    {
     "kind": "order",
     "task_ru": "Расставь слова в правильном порядке. Цель: запомнить порядок слов в вопросе с were.",
     "q": "last weekend / you / where / were / ?",
     "answer": "Where were you last weekend?",
     "alt": [
      "Where were you last weekend"
     ],
     "note_ru": "Вопросительное слово → were → you → остальное."
    },
    {
     "kind": "fix",
     "task_ru": "Найди и исправь ошибку. Цель: поймать типичную ошибку «they was».",
     "q": "They was on a video call with the team yesterday.",
     "answer": "They were on a video call with the team yesterday.",
     "alt": [
      "They were on a video call with the team yesterday",
      "Yesterday they were on a video call with the team.",
      "were"
     ],
     "note_ru": "They — это много людей, поэтому were, а не was."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: сказать о своём рабочем дне в прошлом.",
     "q": "Вчера я была на созвоне с командой.",
     "answer": "Yesterday I was on a call with my team.",
     "alt": [
      "Yesterday, I was on a call with my team.",
      "I was on a call with my team yesterday.",
      "Yesterday I was on a call with the team.",
      "I was on a call with the team yesterday.",
      "Yesterday I was on a video call with my team.",
      "I was on a video call with my team yesterday."
     ],
     "note_ru": "«Я была» = I was. Yesterday можно поставить в начало или в конец."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: дать оценку сериалу словами дня.",
     "q": "Первый сезон был скучным, но последняя серия была потрясающей.",
     "answer": "The first season was boring, but the last episode was amazing.",
     "alt": [
      "The first season was boring but the last episode was amazing.",
      "The first season was boring, but the last episode was amazing!"
     ],
     "note_ru": "Season и episode — это it (одна вещь), поэтому was. Глагол «был/была» в английском нельзя пропускать."
    },
    {
     "kind": "question",
     "task_ru": "Коллега на созвоне говорит: «I wasn't at home last weekend!». Задай ей два вопроса: 1) где она была в прошлые выходные; 2) было ли там красиво (beautiful). Цель: научиться поддерживать small talk вопросами.",
     "q": "(1) где она была в прошлые выходные? (2) было ли там красиво?",
     "answer": "Where were you last weekend? Was it beautiful?",
     "alt": [
      "Where were you last weekend? Was it beautiful there?",
      "Where were you? Was it beautiful?",
      "Where were you? Was it beautiful there?",
      "Where were you last weekend? Was the place beautiful?"
     ],
     "note_ru": "Where + were + you…? и Was + it…? — was/were стоит перед подлежащим."
    },
    {
     "kind": "write",
     "task_ru": "Напиши 3 предложения о своих прошлых выходных: где ты была, с кем и как это было. Используй was/were, wasn't и хотя бы одно слово дня. Цель: подготовить свой рассказ для разговора.",
     "q": "Last weekend I was…",
     "answer": "Last weekend I was in Saint Petersburg with my friend. The weather wasn't great, but the museums were amazing. We were tired and happy.",
     "alt": [],
     "note_ru": "Проверь: I/he/she/it → was, we/they/you → were; отрицание — wasn't/weren't."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Ответь Анселу о себе: где ты была в прошлые выходные, с кем и какими они были. Затем добавь ещё одно предложение.",
     "template_en": "Last weekend I was ___. I was with ___. It was ___.",
     "sample_en": "Last weekend I was at home in my city. I was with my best friend. It was quiet, but not boring.",
     "sample_ru": "В прошлые выходные я была дома, в своём городе. Я была с лучшей подругой. Было тихо, но не скучно."
    },
    {
     "prompt_ru": "Начало созвона с международной командой, small talk. Расскажи о посте или видео про ИИ или EdTech, которое было популярным в твоей ленте. Затем добавь ещё одно предложение.",
     "template_en": "Yesterday a post about ___ was in my feed. It was ___. The author has ___ followers.",
     "sample_en": "Yesterday a post about AI tutors was in my feed. It was amazing. The author has fifty thousand followers. It was a good idea for my course.",
     "sample_ru": "Вчера у меня в ленте был пост про ИИ-репетиторов. Он был потрясающий. У автора пятьдесят тысяч подписчиков. Это была хорошая идея для моего курса."
    },
    {
     "prompt_ru": "Small talk с новым знакомым: расскажи о последней серии или сезоне, который ты смотрела. Было потрясающе или скучно, и почему? Затем добавь ещё одно предложение.",
     "template_en": "The last episode of ___ was ___. The first season was ___, because ___.",
     "sample_en": "The last episode of my superhero series was amazing. The first season was boring, because it was too slow. Season two is my favorite.",
     "sample_ru": "Последняя серия моего супергеройского сериала была потрясающей. Первый сезон был скучным, потому что был слишком медленным. Второй сезон — мой любимый."
    }
   ]
  },
  {
   "day": 8,
   "title": "The Locked Drawer",
   "title_ru": "Запертый ящик",
   "logline_ru": "Крошечный ключ наконец находит свой замок, и тетрадь показывает, что случилось двадцать лет назад, а Мира готовит тебя к собеседованию.",
   "cover": "shop-night-lamp",
   "beats": [
    {
     "t": "scene",
     "art": "shop-night-lamp",
     "place_en": "The shop at night, lamplight and magic",
     "place_ru": "Лавка ночью: свет лампы и немного волшебства",
     "emoji": "🕯️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The old lamp glows warm and gold tonight.",
     "ru": "Сегодня старая лампа светит тёплым золотом."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Outside, the wind sings softly in the chimes.",
     "ru": "Снаружи ветер тихо поёт в колокольчиках."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You drop a pencil, and it rolls under the counter.",
     "ru": "Ты роняешь карандаш, и он закатывается под прилавок."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Under the counter, you see a tiny keyhole.",
     "ru": "Под прилавком ты замечаешь крошечную замочную скважину."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Pepper! There's a keyhole here!",
     "ru": "Пеппер! Тут замочная скважина!"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "I know. I didn't want to tell you.",
     "ru": "Знаю. Просто не хотел тебе говорить."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You take the small brass key from the blue tin.",
     "ru": "Ты достаёшь маленький латунный ключ из синей жестянки."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Click. A hidden drawer slides open.",
     "ru": "Щёлк. Потайной ящик выдвигается сам."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Inside, there is an old blue diary.",
     "ru": "Внутри лежит старый синий дневник."
    },
    {
     "t": "line",
     "who": "you",
     "en": "It's Vera's diary! The same handwriting as the letters!",
     "ru": "Это дневник Веры! Тот же почерк, что в письмах!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You read aloud, and the leather notebook starts to glow.",
     "ru": "Ты читаешь вслух, и кожаная тетрадь начинает светиться."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "I opened this shop in 1979.",
     "ru": "Я открыла эту лавку в 1979 году."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Above the page, a tiny ink shop opens its door.",
     "ru": "Над страницей крошечная чернильная лавка открывает дверь."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "I met Ansel at the harbor. We were young.",
     "ru": "С Анселем я познакомилась в гавани. Мы были молодыми."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "The shop was my first project, and it was successful.",
     "ru": "Лавка была моим первым проектом, и он оказался успешным."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "In 2006, I closed the shop and decided to travel.",
     "ru": "В 2006 году я закрыла лавку и решила путешествовать."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "I moved from country to country and taught English.",
     "ru": "Я переезжала из страны в страну и преподавала английский."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A tiny ink boat sails across a world map.",
     "ru": "Крошечный чернильный кораблик плывёт по карте мира."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Vera got a lot of experience on those trips.",
     "ru": "В этих поездках Вера набралась много опыта."
    },
    {
     "t": "choice",
     "q_en": "There is one more page. What do you do?",
     "q_ru": "Осталась ещё одна страница. Что ты делаешь?",
     "options": [
      {
       "en": "I read the last page now.",
       "ru": "Сразу читаю последнюю страницу.",
       "flag": "read_now",
       "reply": [
        {
         "who": "narrator",
         "en": "You turn the page very slowly.",
         "ru": "Ты очень медленно переворачиваешь страницу."
        },
        {
         "who": "pepper",
         "en": "Careful. This page is important.",
         "ru": "Осторожно. Эта страница важная."
        }
       ]
      },
      {
       "en": "Pepper, did you know about this?",
       "ru": "Пеппер, ты знал об этом?",
       "flag": "ask_pepper",
       "reply": [
        {
         "who": "pepper",
         "en": "Read. I didn't see everything.",
         "ru": "Читай. Я видел не всё."
        },
        {
         "who": "pepper",
         "en": "I'm a cat. I sleep a lot.",
         "ru": "Я кот. Я много сплю."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The last page has only two short lines.",
     "ru": "На последней странице всего две короткие строчки."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Ansel, I'm sorry.",
     "ru": "Ансель, прости меня."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "I didn't say goodbye.",
     "ru": "Я не попрощалась."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The glow turns soft and blue, like the night bay.",
     "ru": "Свечение становится мягким и синим, как ночной залив."
    },
    {
     "t": "line",
     "who": "you",
     "en": "She didn't say goodbye to her oldest friend.",
     "ru": "Она не попрощалась со своим самым старым другом."
    },
    {
     "t": "check",
     "q_en": "Why did Vera close the shop?",
     "q_ru": "Почему Вера закрыла лавку?",
     "options": [
      {
       "en": "She decided to travel and teach.",
       "ru": "Она решила путешествовать и преподавать.",
       "correct": true
      },
      {
       "en": "She didn't like tea.",
       "ru": "Она не любила чай.",
       "correct": false
      },
      {
       "en": "The shop was too small.",
       "ru": "Лавка была слишком маленькой.",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "pepper",
       "en": "Hm. No. Read the diary again, slowly.",
       "ru": "Хм. Нет. Перечитай дневник, медленно."
      }
     ],
     "right": [
      {
       "who": "pepper",
       "en": "Yes. She decided to see the world.",
       "ru": "Да. Она решила увидеть мир."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You fall asleep at the counter, next to the diary.",
     "ru": "Ты засыпаешь за прилавком, рядом с дневником."
    },
    {
     "t": "scene",
     "art": "shop-bright-morning",
     "place_en": "The reopened shop, bright morning",
     "place_ru": "Лавка ярким утром",
     "emoji": "☀️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Morning sun and warm steam fill the round windows.",
     "ru": "Утреннее солнце и тёплый пар заполняют круглые окна."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Mira comes downstairs with her laptop and two phones.",
     "ru": "Мира спускается по лестнице с ноутбуком и двумя телефонами."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Yesterday my team really liked your prototype, {name}.",
     "ru": "{name}, вчера моей команде очень понравился твой прототип."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Let's practice for a job interview, OK?",
     "ru": "Давай потренируемся к собеседованию, хорошо?"
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Tell me about your experience.",
     "ru": "Расскажи мне о своём опыте."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "What project did you launch last year?",
     "ru": "Какой проект ты запустила в прошлом году?"
    },
    {
     "t": "line",
     "who": "mira",
     "en": "What did you do, and what was the result?",
     "ru": "Что ты сделала и какой был результат?"
    },
    {
     "t": "say",
     "to": "mira",
     "task_ru": "Расскажи Мире о реальном проекте из своего прошлого: что ты запустила, чем пользовалась и какой был отзыв. Подставь свои детали.",
     "hint_ru": "Last year I launched … / I used … / The feedback was …",
     "example_en": "Last year I launched an online course. I used AI tools. The feedback was great.",
     "example_ru": "В прошлом году я запустила онлайн-курс. Я пользовалась ИИ-инструментами. Отзывы были отличные.",
     "accept": [
      "launched",
      "used",
      "created",
      "made",
      "worked",
      "tried",
      "project",
      "course",
      "prototype",
      "feedback",
      "result"
     ],
     "after": [
      {
       "who": "mira",
       "en": "Great! Clear and short.",
       "ru": "Отлично! Чётко и коротко."
      },
      {
       "who": "mira",
       "en": "Did you get feedback from real users?",
       "ru": "А ты получила отзывы от настоящих пользователей?"
      },
      {
       "who": "you",
       "en": "Yes, the feedback was great, and the project was successful.",
       "ru": "Да, отзывы были отличные, и проект оказался успешным."
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "But I didn't went to design school.",
     "ru": "Но я не училась в школе дизайна."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Stop. Two pasts in one sentence?",
     "ru": "Стоп. Два прошедших времени в одном предложении?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "That's like two hats on one cat.",
     "ru": "Это как две шляпы на одном коте."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Didn't plus GO. The past already lives in DIDN'T.",
     "ru": "Didn't плюс GO. Прошлое уже живёт в DIDN'T."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Write it down.",
     "ru": "Запиши."
    },
    {
     "t": "line",
     "who": "you",
     "en": "I didn't go to design school, but I learned online.",
     "ru": "Я не училась в школе дизайна, но я училась онлайн."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Perfect. My team needs people with your experience.",
     "ru": "Идеально. Моей команде нужны люди с твоим опытом."
    },
    {
     "t": "scene",
     "art": "shop-night-lamp",
     "place_en": "The shop that evening",
     "place_ru": "Лавка вечером того же дня",
     "emoji": "🌙"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In the evening, the lamp switches on by itself.",
     "ru": "Вечером лампа включается сама."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Paper Boat Night is only two days away.",
     "ru": "До Ночи бумажных корабликов осталось всего два дня."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pepper sits on the windowsill and looks at the hill.",
     "ru": "Пеппер сидит на подоконнике и смотрит на холм."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the dark Kettle, one small light is on.",
     "ru": "На тёмном Чайнике горит один маленький огонёк."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Now you know. Almost.",
     "ru": "Теперь ты знаешь. Почти всё."
    }
   ],
   "hook_ru": "Утром Мира уплывает на пароме и задаёт тебе важный вопрос о работе, а Тео наконец спрашивает: «Ты останешься?»",
   "notebook": {
    "words": [
     {
      "en": "experience",
      "ru": "опыт",
      "emoji": "🗺️",
      "story_ex": "Vera got a lot of experience on those trips.",
      "my_ex": "I have three years of experience in EdTech.",
      "my_ex_ru": "У меня три года опыта в EdTech."
     },
     {
      "en": "project",
      "ru": "проект",
      "emoji": "🏪",
      "story_ex": "The shop was my first project.",
      "my_ex": "My last project was a course with an AI tutor.",
      "my_ex_ru": "Моим последним проектом был курс с ИИ-тьютором."
     },
     {
      "en": "launch",
      "ru": "запускать (проект, курс, продукт)",
      "emoji": "🚀",
      "story_ex": "What project did you launch last year?",
      "my_ex": "Last year I launched an online course for teachers.",
      "my_ex_ru": "В прошлом году я запустила онлайн-курс для учителей."
     },
     {
      "en": "result",
      "ru": "результат",
      "emoji": "📊",
      "story_ex": "What did you do, and what was the result?",
      "my_ex": "The result was great: more students finished the course.",
      "my_ex_ru": "Результат был отличный: больше студентов дошли до конца курса."
     },
     {
      "en": "feedback",
      "ru": "обратная связь, отзывы",
      "emoji": "💬",
      "story_ex": "Yes, the feedback was great.",
      "my_ex": "I got feedback from the team on our video call.",
      "my_ex_ru": "Я получила обратную связь от команды на видеозвонке."
     },
     {
      "en": "successful",
      "ru": "успешный",
      "emoji": "🏆",
      "story_ex": "The shop was my first project, and it was successful.",
      "my_ex": "My AI prototype was successful, so we made a real product.",
      "my_ex_ru": "Мой ИИ-прототип оказался успешным, и мы сделали настоящий продукт."
     },
     {
      "en": "decide (to)",
      "ru": "решать, решить (сделать что-то)",
      "emoji": "🔀",
      "story_ex": "In 2006, I closed the shop and decided to travel.",
      "my_ex": "Last year I decided to work for an international company.",
      "my_ex_ru": "В прошлом году я решила работать в международной компании."
     },
     {
      "en": "move (to)",
      "ru": "переезжать; двигаться",
      "emoji": "🧳",
      "story_ex": "I moved from country to country and taught English.",
      "my_ex": "One day I want to move to another country for work.",
      "my_ex_ru": "Когда-нибудь я хочу переехать в другую страну ради работы."
     }
    ],
    "phrases": [
     {
      "en": "My task was to create a course for new teachers.",
      "ru": "Моей задачей было создать курс для новых учителей.",
      "when_ru": "Собеседование, шаг 1 — задача проекта. Меняй конец: to build a prototype / to update an old course."
     },
     {
      "en": "I designed the lessons and used AI tools.",
      "ru": "Я разработала уроки и использовала ИИ-инструменты.",
      "when_ru": "Собеседование, шаг 2 — что ты сделала. Меняй глаголы в прошлом: I planned… / I tested… / I made…"
     },
     {
      "en": "As a result, the feedback was really positive.",
      "ru": "В итоге отзывы были очень положительными.",
      "when_ru": "Собеседование, шаг 3 — результат и отзывы. As a result — готовый блок (chunk), запомни целиком."
     }
    ],
    "rule": {
     "title_ru": "Past Simple: что я сделала в прошлом",
     "rows": [
      [
       "➕ правильные",
       "I / you / she / we / they",
       "глагол + ed",
       "launched, decided, moved, worked"
      ],
      [
       "➕ неправильные",
       "I / you / she / we / they",
       "особая форма",
       "went, had, made, did, got, met, wrote, taught"
      ],
      [
       "➖",
       "I / you / she / we / they",
       "didn't + глагол (простой)",
       "didn't launch, didn't go"
      ],
      [
       "❓",
       "Did",
       "you / she + глагол (простой)?",
       "Did you launch…? — Yes, I did. / No, I didn't."
      ]
     ],
     "examples": [
      {
       "en": "Last year I launched an online course.",
       "ru": "В прошлом году я запустила онлайн-курс."
      },
      {
       "en": "I didn't go to the office. I worked remotely.",
       "ru": "Я не ездила в офис. Я работала удалённо."
      },
      {
       "en": "Did you get feedback? — Yes, I did.",
       "ru": "Ты получила отзывы? — Да."
      }
     ],
     "tip_ru": "Прошлое живёт в одном месте: либо в самом глаголе (launched, went), либо в did / didn't. После did и didn't глагол простой — как после do / does из дня 3.",
     "mistake": "❌ I didn't went. Did you made? → ✅ I didn't go. Did you make? (Пеппер: две шляпы на одном коте)"
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Цель: узнать форму прошлого. Выбери правильный вариант.",
     "q": "Last month I ___ (move / moved) to a new team.",
     "answer": "moved",
     "alt": [],
     "note_ru": "Last month — прошлое, правильный глагол получает -ed: moved."
    },
    {
     "kind": "gap",
     "task_ru": "Цель: слова дня в контексте. Вставь слова: feedback, project, launch, successful (одно слово лишнее).",
     "q": "Our ___ was ___: we got great ___ from students.",
     "answer": "Our project was successful: we got great feedback from students.",
     "alt": [
      "project / successful / feedback",
      "project, successful, feedback",
      "project successful feedback"
     ],
     "note_ru": "project — проект, successful — успешный (после was нужно прилагательное), feedback — отзывы, обычно без a. Launch — лишнее: это глагол."
    },
    {
     "kind": "order",
     "task_ru": "Цель: порядок слов в отрицании. Собери предложение.",
     "q": "didn't / I / move / to / another country",
     "answer": "I didn't move to another country.",
     "alt": [
      "I did not move to another country."
     ],
     "note_ru": "Подлежащее + didn't + простой глагол. Прошлое уже в didn't, поэтому move без -ed."
    },
    {
     "kind": "fix",
     "task_ru": "Цель: поймать типичную ошибку «двойное прошлое». Исправь предложение.",
     "q": "Did you made the prototype with AI tools?",
     "answer": "Did you make the prototype with AI tools?",
     "alt": [],
     "note_ru": "После Did глагол простой: make, а не made. Прошлое уже живёт в Did."
    },
    {
     "kind": "translate",
     "task_ru": "Цель: рассказать о реальном проекте. Переведи на английский.",
     "q": "В прошлом году я запустила онлайн-курс.",
     "answer": "Last year I launched an online course.",
     "alt": [
      "I launched an online course last year.",
      "Last year, I launched an online course."
     ],
     "note_ru": "launch + ed = launched. Last year можно поставить в начало или в конец."
    },
    {
     "kind": "translate",
     "task_ru": "Цель: соединить новое прошлое и was из дня 7. Переведи на английский.",
     "q": "Я решила работать удалённо, и проект был успешным.",
     "answer": "I decided to work remotely, and the project was successful.",
     "alt": [
      "I decided to work remotely and the project was successful.",
      "I decided to work remotely. The project was successful."
     ],
     "note_ru": "decide + d = decided, после него to + глагол. Был успешным = was successful (день 7)."
    },
    {
     "kind": "question",
     "task_ru": "Цель: задавать вопрос, как интервьюер. Сделай вопрос с Did.",
     "q": "You got feedback from your team.",
     "answer": "Did you get feedback from your team?",
     "alt": [
      "Did you get feedback from the team?",
      "Did you get any feedback from your team?"
     ],
     "note_ru": "Схема как Do you…? из дня 3: Did + you + простой глагол. got превращается обратно в get."
    },
    {
     "kind": "write",
     "task_ru": "Цель: подготовить ответ для настоящего собеседования. Напиши 3–4 предложения о своём проекте: задача, что ты сделала, результат, отзыв.",
     "q": "Tell me about one project you launched.",
     "answer": "Last year I launched a course for new teachers. I designed the lessons and used AI tools. The result was great: many teachers finished it. The feedback was really positive.",
     "alt": [],
     "note_ru": "Структура как во фразах дня: задача → что сделала (глаголы в прошлом) → результат → отзыв. Проверь, что после didn't / did глагол простой."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Как в сцене с Мирой: расскажи о курсе или продукте, который ты запустила, что ты делала и какой был отзыв. Потом добавь ещё одно предложение о результате.",
     "template_en": "Last year I launched ___. I used ___. The feedback was ___.",
     "sample_en": "Last year I launched an online course for teachers. I used AI tools for the quizzes. The feedback was great. The result: more people finished the course.",
     "sample_ru": "В прошлом году я запустила онлайн-курс для учителей. Для тестов я пользовалась ИИ-инструментами. Отзывы были отличные. Итог: больше людей дошли до конца курса."
    },
    {
     "prompt_ru": "Собеседование: расскажи об ИИ-инструменте, который ты попробовала, что ты с ним сделала и чему научилась. Добавь ещё одно предложение: был ли проект успешным.",
     "template_en": "Last month I tried ___. I made ___ with it. I learned that ___.",
     "sample_en": "Last month I tried a new AI tool. I made a course prototype with it. I learned that clear prompts save time. The project was successful.",
     "sample_ru": "В прошлом месяце я попробовала новый ИИ-инструмент. Я сделала с ним прототип курса. Я поняла, что чёткие промпты экономят время. Проект оказался успешным."
    },
    {
     "prompt_ru": "Small talk: расскажи о поездке или переезде, который что-то изменил для тебя. Добавь ещё одно предложение: что ты решила после этого.",
     "template_en": "In ___, I went to ___. It was ___. After that, I decided to ___.",
     "sample_en": "In 2023, I went to Georgia. It was my first trip alone. It was amazing. After that, I decided to travel more.",
     "sample_ru": "В 2023 году я поехала в Грузию. Это была моя первая поездка одной. Было потрясающе. После этого я решила больше путешествовать."
    }
   ]
  },
  {
   "day": 9,
   "title": "The Morning Ferry",
   "title_ru": "Утренний паром",
   "logline_ru": "Мира уезжает и зовёт тебя на настоящее собеседование, а Тео задаёт тебе один очень важный вопрос.",
   "cover": "ferry-pier-morning",
   "beats": [
    {
     "t": "scene",
     "art": "ferry-pier-morning",
     "place_en": "Kettleby pier, early morning",
     "place_ru": "Пристань Кеттлби, раннее утро",
     "emoji": "🌅"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The wind is gone, and the bay is like glass.",
     "ru": "Ветер стих, и залив гладкий, как стекло."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The white ferry waits, and Pepper sleeps on a fish box.",
     "ru": "Белый паром ждёт, а Пеппер спит на рыбном ящике."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "{name}, good morning! I'm a bit nervous today.",
     "ru": "{name}, доброе утро! Я сегодня немного нервничаю."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "I'm going to take this ferry to the airport.",
     "ru": "Я поеду на этом пароме в аэропорт."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "My flight is at six this evening.",
     "ru": "Мой рейс сегодня в шесть вечера."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "I can never check in online. Can you help me?",
     "ru": "У меня никогда не получается зарегистрироваться онлайн. Поможешь?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Sure. Show me your ticket.",
     "ru": "Конечно. Покажи мне свой билет."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You open the app and type her ticket number.",
     "ru": "Ты открываешь приложение и вводишь номер её билета."
    },
    {
     "t": "line",
     "who": "you",
     "en": "OK. Window seat or aisle seat?",
     "ru": "Так. Место у окна или у прохода?"
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Window, please. I'm going to sleep all the way.",
     "ru": "У окна, пожалуйста. Я собираюсь проспать всю дорогу."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Check-in done! You're really good with apps.",
     "ru": "Регистрация готова! Ты правда здорово разбираешься в приложениях."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Airports. Flights. I'm going to stay on my warm windowsill.",
     "ru": "Аэропорты. Перелёты. А я останусь на своём тёплом подоконнике."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Next month my team is going to hire a learning designer.",
     "ru": "В следующем месяце моя команда будет нанимать методиста."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Are you going to apply for it?",
     "ru": "Ты собираешься откликнуться на эту вакансию?"
    },
    {
     "t": "choice",
     "q_en": "What do you say to Mira?",
     "q_ru": "Что ты ответишь Мире?",
     "options": [
      {
       "en": "Yes, I'm going to try.",
       "ru": "Да, я попробую.",
       "flag": "try",
       "reply": [
        {
         "who": "mira",
         "en": "Great! I like that answer.",
         "ru": "Отлично! Мне нравится такой ответ."
        }
       ]
      },
      {
       "en": "I'm not sure. I'm going to think about it.",
       "ru": "Я не уверена. Я подумаю об этом.",
       "flag": "think",
       "reply": [
        {
         "who": "mira",
         "en": "Good. Thinking is a plan too.",
         "ru": "Хорошо. Подумать — это тоже план."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Mira takes a small yellow card out of her raincoat.",
     "ru": "Мира достаёт из плаща маленькую жёлтую визитку."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Send me your CV this week. Interviews start next month.",
     "ru": "Пришли мне резюме на этой неделе. Собеседования начнутся в следующем месяце."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "So, {name}, what are your plans?",
     "ru": "Итак, {name}, какие у тебя планы?"
    },
    {
     "t": "say",
     "to": "mira",
     "task_ru": "Расскажи Мире о своих планах: работа, английский, жизнь за границей. Замени детали на свои.",
     "hint_ru": "I'm going to + глагол: apply for… / practice… / work abroad…",
     "example_en": "I'm going to apply for the job. I'm going to practice English every day. One day I'm going to work abroad.",
     "example_ru": "Я собираюсь откликнуться на эту вакансию. Я буду заниматься английским каждый день. Однажды я буду работать за границей.",
     "accept": [
      "going to",
      "gonna",
      "apply",
      "practice",
      "english",
      "abroad",
      "job",
      "plan",
      "work"
     ],
     "after": [
      {
       "who": "mira",
       "en": "That's a strong plan. I work abroad too, and I love it.",
       "ru": "Сильный план. Я тоже работаю за границей, и мне это нравится."
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "And one day I going to fly to your office!",
     "ru": "А однажды я прилечу к тебе в офис!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pepper jumps off the fish box and onto your bag.",
     "ru": "Пеппер спрыгивает с рыбного ящика прямо на твою сумку."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Not 'I going to fly'. I AM going to fly.",
     "ru": "Не «I going to fly». А «I AM going to fly»."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Don't lose AM. It's your ticket. No ticket, no flight.",
     "ru": "Не теряй AM. Это твой билет. Нет билета — нет полёта."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Write it down.",
     "ru": "Запиши."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In your bag, Vera's notebook feels warm.",
     "ru": "В сумке тетрадь Веры становится тёплой."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You write 'I'm going to', and a tiny ink plane flies.",
     "ru": "Ты пишешь «I'm going to», и по странице летит крошечный чернильный самолётик."
    },
    {
     "t": "check",
     "q_en": "What is Mira going to do today?",
     "q_ru": "Что Мира собирается сделать сегодня?",
     "options": [
      {
       "en": "Take the ferry to the airport",
       "ru": "Поехать на пароме в аэропорт",
       "correct": true
      },
      {
       "en": "Sell her shop",
       "ru": "Продать свою лавку",
       "correct": false
      },
      {
       "en": "Stay in Kettleby",
       "ru": "Остаться в Кеттлби",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "pepper",
       "en": "Look at her ticket. Humans.",
       "ru": "Посмотри на её билет. Люди..."
      }
     ],
     "right": [
      {
       "who": "mira",
       "en": "Yes! Ferry, airport, then home. I'm going to call you!",
       "ru": "Да! Паром, аэропорт, потом домой. Я тебе позвоню!"
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Mira waves from the deck, and her yellow raincoat gets smaller.",
     "ru": "Мира машет с палубы, и её жёлтый плащ становится всё меньше."
    },
    {
     "t": "scene",
     "art": "stair-lane-afternoon",
     "place_en": "Stair-lane, golden afternoon",
     "place_ru": "Лестничная улочка, золотой день",
     "emoji": "🌇"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The stair-lane is golden, and wind chimes sing softly.",
     "ru": "Улочка вся золотая, и тихо поют колокольчики."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo walks next to you with his old mail bag.",
     "ru": "Тео идёт рядом с тобой со своей старой почтовой сумкой."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Mira says you're going to apply for a job abroad.",
     "ru": "Мира говорит, что ты собираешься откликнуться на работу за границей."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Maybe. It's a big plan, and I'm a bit scared.",
     "ru": "Может быть. Это большой план, и мне немного страшно."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "And when is your flight back?",
     "ru": "А когда твой обратный рейс?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "I have a ticket for the day after Paper Boat Night.",
     "ru": "У меня билет на день после Ночи бумажных корабликов."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo stops on a mossy step, and his ears turn red.",
     "ru": "Тео останавливается на замшелой ступеньке, и у него краснеют уши."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Are you going to sell the shop?",
     "ru": "Ты собираешься продать лавку?"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Are you going to stay?",
     "ru": "Ты останешься?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "I don't know yet. I'm going to think about it tonight.",
     "ru": "Пока не знаю. Подумаю об этом сегодня вечером."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "OK. I'm not going to ask again. Promise.",
     "ru": "Ладно. Больше не буду спрашивать. Обещаю."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A blue envelope lies at the green door.",
     "ru": "У зелёной двери лежит синий конверт."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Tomorrow is Paper Boat Night.",
     "ru": "Завтра Ночь бумажных корабликов."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "Please put a light in the window. Bring one paper boat to the hill.",
     "ru": "Пожалуйста, зажги свет в окне. Принеси один бумажный кораблик на холм."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "You're going to need a lot of paper.",
     "ru": "Тебе понадобится очень много бумаги."
    }
   ],
   "hook_ru": "Ночь бумажных корабликов, золотой час на вершине Чайника, и мистер Ансель наконец говорит правду о синих письмах.",
   "notebook": {
    "words": [
     {
      "en": "plan",
      "ru": "план; планировать",
      "emoji": "📋",
      "story_ex": "That's a strong plan.",
      "my_ex": "My plan is to build a new course with AI.",
      "my_ex_ru": "Мой план — сделать новый курс с помощью ИИ."
     },
     {
      "en": "next month",
      "ru": "в следующем месяце",
      "emoji": "📅",
      "story_ex": "Next month my team is going to hire a learning designer.",
      "my_ex": "Next month I'm going to launch a new online course.",
      "my_ex_ru": "В следующем месяце я запущу новый онлайн-курс."
     },
     {
      "en": "abroad",
      "ru": "за границей; за границу",
      "emoji": "🌍",
      "story_ex": "Mira says you're going to apply for a job abroad.",
      "my_ex": "One day I'm going to work abroad for an EdTech company.",
      "my_ex_ru": "Однажды я буду работать за границей в EdTech-компании."
     },
     {
      "en": "apply for",
      "ru": "подать заявку на; откликнуться на (вакансию)",
      "emoji": "📝",
      "story_ex": "Are you going to apply for it?",
      "my_ex": "I'm going to apply for a learning designer job abroad.",
      "my_ex_ru": "Я собираюсь откликнуться на вакансию методиста за границей."
     },
     {
      "en": "check in",
      "ru": "зарегистрироваться (на рейс, в отеле)",
      "emoji": "✅",
      "story_ex": "I can never check in online. Can you help me?",
      "my_ex": "I usually check in online the day before my flight.",
      "my_ex_ru": "Обычно я регистрируюсь онлайн за день до рейса."
     },
     {
      "en": "flight",
      "ru": "рейс; перелёт",
      "emoji": "✈️",
      "story_ex": "My flight is at six this evening.",
      "my_ex": "On my next flight I'm going to watch my series.",
      "my_ex_ru": "Во время следующего перелёта я буду смотреть свой сериал."
     },
     {
      "en": "ticket",
      "ru": "билет",
      "emoji": "🎫",
      "story_ex": "Don't lose AM. It's your ticket.",
      "my_ex": "I'm going to buy a ticket to Lisbon for summer.",
      "my_ex_ru": "Я куплю билет в Лиссабон на лето."
     },
     {
      "en": "stay",
      "ru": "остаться; остановиться (жить где-то)",
      "emoji": "🏡",
      "story_ex": "Are you going to stay?",
      "my_ex": "In Lisbon I'm going to stay in a small quiet apartment.",
      "my_ex_ru": "В Лиссабоне я остановлюсь в маленькой тихой квартире."
     }
    ],
    "phrases": [
     {
      "en": "Could I have a window seat, please?",
      "ru": "Можно мне место у окна, пожалуйста?",
      "when_ru": "На стойке регистрации в аэропорту или при онлайн-регистрации. Это готовая фраза (chunk): учи целиком, правило не нужно."
     },
     {
      "en": "My plan is to work for an international company.",
      "ru": "Мой план — работать в международной компании.",
      "when_ru": "На собеседовании на вопрос «What are your plans?» и в small talk о карьере. «My plan is to + глагол» — готовая фраза."
     },
     {
      "en": "I'd like to apply for the learning designer position.",
      "ru": "Я бы хотела откликнуться на вакансию методиста.",
      "when_ru": "В письме или сообщении рекрутеру, в начале звонка. «I'd like to…» — вежливое «я бы хотела», учи целиком."
     }
    ],
    "rule": {
     "title_ru": "be going to + глагол: планы и намерения",
     "rows": [
      [
       "I",
       "am ('m)",
       "going to",
       "+ глагол"
      ],
      [
       "he / she / it",
       "is ('s)",
       "going to",
       "+ глагол"
      ],
      [
       "you / we / they",
       "are ('re)",
       "going to",
       "+ глагол"
      ],
      [
       "−",
       "I'm not / she isn't / you aren't",
       "going to",
       "+ глагол"
      ],
      [
       "?",
       "Am I / Is she / Are you",
       "going to",
       "+ глагол?"
      ]
     ],
     "examples": [
      {
       "en": "I'm going to apply for a job abroad.",
       "ru": "Я собираюсь откликнуться на работу за границей."
      },
      {
       "en": "I'm not going to work at night.",
       "ru": "Я не буду работать по ночам."
      },
      {
       "en": "Are you going to stay on the island?",
       "ru": "Ты собираешься остаться на острове?"
      }
     ],
     "tip_ru": "going to значит, что решение уже принято: ты решила и говоришь о плане. Без am / is / are конструкция не работает, это её «билет».",
     "mistake": "❌ I going to fly. → ✅ I'm going to fly."
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Выбери правильную форму.",
     "q": "Mira ___ (am / is / are) going to take the morning ferry.",
     "answer": "is",
     "alt": [
      "'s",
      "Mira is going to take the morning ferry.",
      "Mira's going to take the morning ferry."
     ],
     "note_ru": "Цель: узнать форму. Mira = she, поэтому is."
    },
    {
     "kind": "gap",
     "task_ru": "Вставь слова дня: flight, check in.",
     "q": "My ___ is at six, so I'm going to ___ online now.",
     "answer": "flight; check in",
     "alt": [
      "flight, check in",
      "flight / check in",
      "flight check in",
      "My flight is at six, so I'm going to check in online now."
     ],
     "note_ru": "Цель: слова дня в контексте путешествия. flight — рейс, check in — зарегистрироваться."
    },
    {
     "kind": "order",
     "task_ru": "Составь предложение из слов.",
     "q": "going / I'm / for / apply / to / the job",
     "answer": "I'm going to apply for the job.",
     "alt": [
      "I'm going to apply for the job",
      "I am going to apply for the job.",
      "I am going to apply for the job"
     ],
     "note_ru": "Цель: порядок слов. Кто + am + going to + глагол + остальное. apply for — одно целое."
    },
    {
     "kind": "fix",
     "task_ru": "Найди и исправь ошибку.",
     "q": "I going to stay on the island next month.",
     "answer": "I'm going to stay on the island next month.",
     "alt": [
      "I am going to stay on the island next month.",
      "I'm going to stay on the island next month",
      "I am going to stay on the island next month"
     ],
     "note_ru": "Цель: типичная ошибка дня. Без am нет «билета»: I'm going to."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский.",
     "q": "В следующем месяце я собираюсь откликнуться на вакансию методиста.",
     "answer": "Next month I'm going to apply for a learning designer job.",
     "alt": [
      "Next month I am going to apply for a learning designer job.",
      "I'm going to apply for a learning designer job next month.",
      "I am going to apply for a learning designer job next month.",
      "Next month I'm going to apply for a learning designer position.",
      "I'm going to apply for a learning designer position next month.",
      "Next month I'm going to apply for an instructional designer job.",
      "Next month I'm going to apply for a methodologist job.",
      "Next month, I'm going to apply for a learning designer job."
     ],
     "note_ru": "Цель: рассказать о карьерном плане. next month можно поставить в начало или в конец. Методист в EdTech — learning designer или instructional designer."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Подумай, где привычка, а где план.",
     "q": "Я обычно работаю из дома. В следующем году я собираюсь работать за границей.",
     "answer": "I usually work from home. Next year I'm going to work abroad.",
     "alt": [
      "I usually work from home. Next year I am going to work abroad.",
      "I usually work from home. I'm going to work abroad next year.",
      "I usually work from home. I am going to work abroad next year.",
      "I usually work remotely. Next year I'm going to work abroad.",
      "I usually work remotely. I'm going to work abroad next year."
     ],
     "note_ru": "Цель: повторить День 2. Привычка = present simple (I usually work), план = going to. abroad без предлога: work abroad."
    },
    {
     "kind": "question",
     "task_ru": "Задай вопрос со словом Where к части «to Berlin».",
     "q": "Mira is going to fly to Berlin. (Where…?)",
     "answer": "Where is Mira going to fly?",
     "alt": [
      "Where is she going to fly?",
      "Where is Mira going to fly to?",
      "Where is she going to fly to?",
      "Where's Mira going to fly?",
      "Where's she going to fly?"
     ],
     "note_ru": "Цель: вопрос с going to. Порядок: Where + is + кто + going to + глагол? Слово to Berlin в вопросе уже не нужно."
    },
    {
     "kind": "write",
     "task_ru": "Напиши 3 предложения о своих планах на следующий месяц или год: работа, поездка, английский. Одно предложение с I'm not going to.",
     "q": "My plans: ___",
     "answer": "Next month I'm going to apply for a job abroad. I'm going to practice English every day. I'm not going to work at night!",
     "alt": [],
     "note_ru": "Цель: собрать всё в свой рассказ. Проверь, что в каждом предложении есть am / is / are."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Видеозвонок с международной командой. Коллега спрашивает: «What are you going to do this week?» Расскажи о своих рабочих планах. Добавь ещё одно предложение.",
     "template_en": "This week I'm going to ___. I'm going to test it with ___. I'm not going to ___.",
     "sample_en": "This week I'm going to finish a new lesson. I'm going to test it with AI. I'm not going to work late.",
     "sample_ru": "На этой неделе я закончу новый урок. Я протестирую его с помощью ИИ. Я не буду работать допоздна."
    },
    {
     "prompt_ru": "На собеседовании тебя спрашивают: «What are your career plans?» Расскажи о своём плане работать в международной компании. Добавь ещё одно предложение.",
     "template_en": "My plan is to work for ___. Next year I'm going to ___. I'm going to use AI tools to ___.",
     "sample_en": "My plan is to work for an international EdTech company. Next year I'm going to apply for a learning designer role. I'm going to use AI tools to build better courses.",
     "sample_ru": "Мой план — работать в международной EdTech-компании. В следующем году я откликнусь на вакансию методиста. Я буду использовать ИИ-инструменты, чтобы делать курсы лучше."
    },
    {
     "prompt_ru": "Small talk: новый знакомый спрашивает «Are you going to travel this year?» Расскажи о поездке: куда летишь, где остановишься, чего делать не будешь. Добавь ещё одно предложение.",
     "template_en": "Next ___ I'm going to fly to ___. I'm going to stay ___. I'm not going to ___.",
     "sample_en": "Next month I'm going to fly to Lisbon. I'm going to stay in a small apartment near the sea. I'm not going to check my work email!",
     "sample_ru": "В следующем месяце я полечу в Лиссабон. Я остановлюсь в маленькой квартире у моря. Я не буду проверять рабочую почту!"
    }
   ]
  },
  {
   "day": 10,
   "title": "Paper Boat Night",
   "title_ru": "Ночь бумажных корабликов",
   "logline_ru": "Лавка снова открыта, бухта полна огоньков, и тайна голубых писем раскрывается, но не до конца.",
   "cover": "paper-boat-night",
   "beats": [
    {
     "t": "scene",
     "art": "weather-station-golden",
     "place_en": "The weather station on the Kettle, golden hour",
     "place_ru": "Метеостанция на вершине Чайника, золотой час",
     "emoji": "🌇"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "It's your tenth day. Golden hour on the Kettle.",
     "ru": "Твой десятый день. Над Чайником золотой час."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Warm wind moves the grass, and the brass vanes turn slowly.",
     "ru": "Тёплый ветер колышет траву, медленно поворачиваются медные флюгеры."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You hold a paper boat, because tonight is Paper Boat Night.",
     "ru": "В руках у тебя бумажный кораблик: сегодня Ночь бумажных корабликов."
    },
    {
     "t": "line",
     "who": "you",
     "en": "Mr. Ansel, this is Vera's diary, from the locked drawer.",
     "ru": "Мистер Ансел, это дневник Веры из запертого ящика."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He reads the last page, and the wind is quiet.",
     "ru": "Он читает последнюю страницу, и ветер затихает."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "Vera wrote the letters, {name}.",
     "ru": "Письма писала Вера, {name}."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "She wrote them last year, in a small town far away.",
     "ru": "Она написала их в прошлом году, в маленьком городке далеко отсюда."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "When the shop's lamp was on, I posted the next letter.",
     "ru": "Когда в лавке горела лампа, я отправлял следующее письмо."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "The blue balloon was for her. It said: \"I see the light.\"",
     "ru": "Голубой шарик был для неё. Он говорил: «Я вижу свет»."
    },
    {
     "t": "check",
     "q_en": "Who wrote the blue letters?",
     "q_ru": "Кто писал голубые письма?",
     "options": [
      {
       "en": "Vera",
       "ru": "Вера",
       "correct": true
      },
      {
       "en": "Theo",
       "ru": "Тео",
       "correct": false
      },
      {
       "en": "Mira",
       "ru": "Мира",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "ansel",
       "en": "No, {name}. Read the diary again: it was Vera.",
       "ru": "Нет, {name}. Прочитай дневник ещё раз: это была Вера."
      }
     ],
     "right": [
      {
       "who": "ansel",
       "en": "Yes, it was Vera, from the very first letter.",
       "ru": "Да, это была Вера, с самого первого письма."
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "I think she was a little sad, but very brave.",
     "ru": "Мне кажется, ей было немного грустно, но она была очень смелой."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "In my opinion, she was braver than me.",
     "ru": "По-моему, она была смелее меня."
    },
    {
     "t": "line",
     "who": "ansel",
     "en": "Can I write my goodbye to her on your boat?",
     "ru": "Можно я напишу ей прощание на твоём кораблике?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The notebook glows, and an ink boat sails to a star.",
     "ru": "Тетрадь светится, и чернильный кораблик плывёт к звезде."
    },
    {
     "t": "scene",
     "art": "paper-boat-night",
     "place_en": "Paper Boat Night on the bay",
     "place_ru": "Ночь бумажных корабликов в бухте",
     "emoji": "⛵"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In the evening the lamps switch on. You hang an OPEN sign.",
     "ru": "Вечером зажигаются лампы. Ты вешаешь табличку «ОТКРЫТО»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The shop is full of people, tea and warm cozy light.",
     "ru": "В лавке полно людей, чая и тёплого уютного света."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "I think this paper is better than newspaper for boats!",
     "ru": "Мне кажется, для корабликов эта бумага лучше газеты!"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "The island is quieter than the city, but more interesting.",
     "ru": "Остров тише города, но интереснее."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Do you agree, {name}?",
     "ru": "Согласна, {name}?"
    },
    {
     "t": "line",
     "who": "you",
     "en": "Yes, I agree, the island is more better!",
     "ru": "Да, согласна, остров более лучше!"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "More better is like a cat in two hats.",
     "ru": "«Более лучше» — это как кот в двух шапках."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "One hat is enough: just BETTER.",
     "ru": "Хватит одной шапки: просто BETTER."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "And EASIER, not more easy.",
     "ru": "И EASIER, а не more easy."
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "Write it down.",
     "ru": "Запиши."
    },
    {
     "t": "line",
     "who": "you",
     "en": "OK: the island is better, and it's cozier too.",
     "ru": "Ладно: остров лучше, и ещё уютнее."
    },
    {
     "t": "choice",
     "who": "bram",
     "q_en": "Books or series: which is better?",
     "q_ru": "Книги или сериалы: что лучше?",
     "options": [
      {
       "en": "I prefer series, because they're more interesting to me.",
       "ru": "Я предпочитаю сериалы: мне они интереснее.",
       "flag": "series",
       "reply": [
        {
         "who": "pepper",
         "en": "I don't agree, of course.",
         "ru": "Я, конечно, не согласен."
        },
        {
         "who": "pepper",
         "en": "Books are better: they're warm, and I can sleep on them.",
         "ru": "Книги лучше: они тёплые, и на них можно спать."
        }
       ]
      },
      {
       "en": "In my opinion, books are better, but series are easier.",
       "ru": "По-моему, книги лучше, но сериалы проще.",
       "flag": "books",
       "reply": [
        {
         "who": "pepper",
         "en": "I don't agree, of course.",
         "ru": "Я, конечно, не согласен."
        },
        {
         "who": "pepper",
         "en": "Series are better: you sit still, and I sleep on you.",
         "ru": "Сериалы лучше: ты сидишь неподвижно, а я сплю на тебе."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "Pepper, you never agree with me!",
     "ru": "Пеппер, ты никогда со мной не соглашаешься!"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "I agree with soup and warm windowsills.",
     "ru": "Я соглашаюсь с супом и тёплыми подоконниками."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "And you, {name}? Compare two places or two jobs.",
     "ru": "А ты, {name}? Сравни два места или две работы."
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Тео просит сравнить. Сравни большой город и маленькое тихое место или удалённую работу и офис. Скажи 2–3 предложения о себе.",
     "hint_ru": "In my opinion, ... is ...er than ... . I think ... is easier than ... . I prefer ..., because ...",
     "example_en": "In my opinion, a small town is quieter than a big city. I think remote work is easier than office work. I prefer remote work, because it's cozier.",
     "example_ru": "По-моему, в маленьком городе тише, чем в большом. Мне кажется, удалённая работа проще, чем офисная. Я предпочитаю удалёнку, потому что так уютнее.",
     "accept": [
      "i think",
      "in my opinion",
      "than",
      "better",
      "easier",
      "prefer",
      "more",
      "quieter",
      "cozier",
      "happier",
      "slower",
      "worse"
     ],
     "after": [
      {
       "who": "theo",
       "en": "Good point, {name}! I agree with you.",
       "ru": "Хорошая мысль, {name}! Я с тобой согласен."
      }
     ]
    },
    {
     "t": "line",
     "who": "you",
     "en": "And one more thing: I want to keep the shop.",
     "ru": "И ещё одно: я хочу оставить лавку себе."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "That's better than any episode!",
     "ru": "Это лучше любой серии!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Everyone walks down to the bay with little candles.",
     "ru": "Все спускаются к бухте с маленькими свечками."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your boat with Ansel's goodbye sails out among the lights.",
     "ru": "Твой кораблик с прощанием Ансела уплывает среди огоньков."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The bay looks cozy, like a cup of tea with candles.",
     "ru": "Бухта выглядит уютно, как чашка чая со свечками."
    },
    {
     "t": "line",
     "who": "bram",
     "en": "Look, not one boat is sinking this year!",
     "ru": "Смотрите, в этом году не тонет ни один кораблик!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the Kettle, one small blue balloon rises into the night.",
     "ru": "Над Чайником в ночное небо поднимается маленький голубой шарик."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In the shop, the last blue letter waits on the counter.",
     "ru": "В лавке на прилавке ждёт последнее голубое письмо."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Inside is an old ferry-and-train ticket and one line.",
     "ru": "Внутри старый билет на паром и поезд и одна строчка."
    },
    {
     "t": "line",
     "who": "vera",
     "en": "There is a second notebook in a shop across the sea.",
     "ru": "Есть вторая тетрадь — в лавке за морем."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "At that moment, your phone buzzes: an email from Mira.",
     "ru": "В этот момент вибрирует телефон: письмо от Миры."
    },
    {
     "t": "line",
     "who": "mira",
     "en": "Hi {name}! Are you free for an interview on Monday?",
     "ru": "Привет, {name}! Ты свободна в понедельник для собеседования?"
    },
    {
     "t": "line",
     "who": "pepper",
     "en": "I prefer the windowsill, but fine, I'm coming.",
     "ru": "Вообще-то я предпочитаю подоконник, но ладно, я с тобой."
    }
   ],
   "hook_ru": "Старый билет за море, вторая тетрадь в чужой лавке и письмо от Миры: собеседование в понедельник?",
   "notebook": {
    "words": [
     {
      "en": "I think",
      "ru": "я думаю, мне кажется",
      "emoji": "💭",
      "story_ex": "I think this paper is better than newspaper for boats!",
      "my_ex": "I think short videos are better than long lectures.",
      "my_ex_ru": "Мне кажется, короткие видео лучше длинных лекций."
     },
     {
      "en": "in my opinion",
      "ru": "по-моему, на мой взгляд",
      "emoji": "🗣️",
      "story_ex": "In my opinion, she was braver than me.",
      "my_ex": "In my opinion, a good course is short and clear.",
      "my_ex_ru": "По-моему, хороший курс — короткий и понятный."
     },
     {
      "en": "agree",
      "ru": "соглашаться (I agree — без am!)",
      "emoji": "🤝",
      "story_ex": "Do you agree, {name}? — Yes, I agree.",
      "my_ex": "I agree with my team: the first module is too long.",
      "my_ex_ru": "Я согласна с командой: первый модуль слишком длинный."
     },
     {
      "en": "prefer",
      "ru": "предпочитать",
      "emoji": "🪟",
      "story_ex": "I prefer the windowsill, but fine, I'm coming.",
      "my_ex": "I prefer remote work, but I like calls with my team.",
      "my_ex_ru": "Я предпочитаю удалённую работу, но люблю созвоны с командой."
     },
     {
      "en": "better",
      "ru": "лучше (good → better)",
      "emoji": "⛵",
      "story_ex": "I think this paper is better than newspaper for boats!",
      "my_ex": "My new AI prototype is better than the old one.",
      "my_ex_ru": "Мой новый ИИ-прототип лучше старого."
     },
     {
      "en": "easier",
      "ru": "легче, проще (easy → easier)",
      "emoji": "🪶",
      "story_ex": "In my opinion, books are better, but series are easier.",
      "my_ex": "For me, writing is easier than speaking.",
      "my_ex_ru": "Мне писать легче, чем говорить."
     },
     {
      "en": "more interesting",
      "ru": "интереснее (interesting → more interesting)",
      "emoji": "🏝️",
      "story_ex": "The island is quieter than the city, but more interesting.",
      "my_ex": "Interactive courses are more interesting than long PDF files.",
      "my_ex_ru": "Интерактивные курсы интереснее длинных PDF-файлов."
     },
     {
      "en": "cozy",
      "ru": "уютный (cozy → cozier)",
      "emoji": "🍵",
      "story_ex": "The bay looks cozy, like a cup of tea with candles.",
      "my_ex": "For me, a small café is cozier than a big office.",
      "my_ex_ru": "Для меня маленькое кафе уютнее большого офиса."
     }
    ],
    "phrases": [
     {
      "en": "That's a good point, but I see it differently.",
      "ru": "Хорошая мысль, но я смотрю на это иначе.",
      "when_ru": "Вежливо не согласиться на созвоне или в small talk (chunk — учи целиком). Согласиться: I agree (не I am agree!)."
     },
     {
      "en": "I think this tool is better for our learners.",
      "ru": "Мне кажется, этот инструмент лучше для наших учеников.",
      "when_ru": "Сравнить два ИИ-инструмента на встрече; добавь причину: because it's faster / easier."
     },
     {
      "en": "Nice talking to you! See you next time.",
      "ru": "Было приятно поговорить! До встречи.",
      "when_ru": "Красиво закончить разговор: small talk, созвон, нетворкинг (chunk — учи целиком)."
     }
    ],
    "rule": {
     "title_ru": "Сравнение: тише, проще, интереснее, лучше + своё мнение",
     "rows": [
      [
       "quiet / fast / slow (короткие)",
       "+ er + than",
       "quieter than"
      ],
      [
       "easy / cozy / happy (на -y)",
       "y → ier + than",
       "easier than"
      ],
      [
       "interesting / expensive (длинные)",
       "more + слово + than",
       "more interesting than"
      ],
      [
       "good / bad",
       "better / worse + than",
       "better than (НЕ more better)"
      ],
      [
       "I think / In my opinion",
       "+ обычное предложение",
       "In my opinion, X is better than Y."
      ]
     ],
     "examples": [
      {
       "en": "I think remote work is easier than office work.",
       "ru": "Мне кажется, удалённая работа проще офисной."
      },
      {
       "en": "In my opinion, interactive courses are more interesting than PDFs.",
       "ru": "По-моему, интерактивные курсы интереснее PDF."
      },
      {
       "en": "My new prototype is better than the old one.",
       "ru": "Мой новый прототип лучше старого."
      }
     ],
     "tip_ru": "Короткое слово получает хвостик -er (на -e — только -r: brave → braver), длинное — more впереди. Никогда не вместе: либо -er, либо more. «Чем» = than.",
     "mistake": "❌ more better, more easy → ✅ better, easier (кот в двух шапках: хватит одной)"
    }
   },
   "tasks": [
    {
     "kind": "choose",
     "task_ru": "Выбери правильную форму. Цель: сравнительная степень у короткого слова на -y.",
     "q": "Remote work is ___ (easier / more easy) than office work for me.",
     "answer": "easier",
     "alt": [
      "Remote work is easier than office work for me."
     ],
     "note_ru": "easy оканчивается на -y → easier; more с короткими словами не нужен."
    },
    {
     "kind": "gap",
     "task_ru": "Впиши слово из урока (agree / prefer / cozy). Цель: глагол согласия без лишнего am.",
     "q": "My team lead says the module is too long, and I ___.",
     "answer": "agree",
     "alt": [
      "I agree",
      "My team lead says the module is too long, and I agree."
     ],
     "note_ru": "I agree — это уже глагол. Не говори I am agree."
    },
    {
     "kind": "order",
     "task_ru": "Поставь слова по порядку. Цель: мнение + сравнение в одном предложении.",
     "q": "I think / is / better / this AI tool / for my course",
     "answer": "I think this AI tool is better for my course.",
     "alt": [
      "I think this AI tool is better for my course"
     ],
     "note_ru": "I think + обычное предложение: кто/что + is + better."
    },
    {
     "kind": "fix",
     "task_ru": "Найди и исправь две ошибки. Цель: убрать типичную ошибку «кот в двух шапках».",
     "q": "In my opinion, this tool is more better and more easy.",
     "answer": "In my opinion, this tool is better and easier.",
     "alt": [
      "In my opinion this tool is better and easier.",
      "In my opinion, this tool is better and easier",
      "In my opinion, this tool's better and easier."
     ],
     "note_ru": "better уже значит «более хороший», easier — «более лёгкий». More здесь лишний."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: мнение о сериале с длинным прилагательным.",
     "q": "Мне кажется, новый сезон интереснее.",
     "answer": "I think the new season is more interesting.",
     "alt": [
      "In my opinion, the new season is more interesting.",
      "I think the new season's more interesting.",
      "I think that the new season is more interesting.",
      "I think the new season is more interesting than the old one.",
      "I think the new season is more interesting than the first one.",
      "I think the new season is more interesting than the old season."
     ],
     "note_ru": "interesting — длинное слово → more interesting."
    },
    {
     "kind": "translate",
     "task_ru": "Переведи на английский. Цель: сказать о своих предпочтениях в работе.",
     "q": "Я предпочитаю удалённую работу: это проще и уютнее.",
     "answer": "I prefer remote work: it's easier and cozier.",
     "alt": [
      "I prefer remote work: it is easier and cozier.",
      "I prefer remote work, because it's easier and cozier.",
      "I prefer remote work because it's easier and cozier.",
      "I prefer remote work because it is easier and cozier.",
      "I prefer remote work. It's easier and cozier.",
      "I prefer remote work. It is easier and cozier.",
      "I prefer remote work, it's easier and cozier.",
      "I prefer remote work: it's easier and cosier.",
      "I prefer remote work. It's easier and cosier."
     ],
     "note_ru": "easy → easier, cozy → cozier: y меняется на ier. Британское написание — cosier."
    },
    {
     "kind": "question",
     "task_ru": "Составь вопрос Тео о сериале. Цель: повторить вопросы с was + сравнение.",
     "q": "the first season / better / the second season? → ___",
     "answer": "Was the first season better than the second season?",
     "alt": [
      "Was the first season better than the second?",
      "Was the first season better than the second one?"
     ],
     "note_ru": "В вопросе was прыгает вперёд: Was the first season...? Сравнение: better than."
    },
    {
     "kind": "write",
     "task_ru": "Напиши 3–4 предложения: сравни два ИИ-инструмента, которыми ты делаешь курсы. Используй I think / In my opinion, -er than, more ... than, prefer. Цель: высказать и обосновать мнение для собеседования.",
     "q": "Compare two AI tools you use for your courses.",
     "answer": "I use two AI tools for my courses. In my opinion, the first tool is faster than the second. The second tool is more interesting, but it's more expensive. I prefer the first one, because it's easier for my team.",
     "alt": [],
     "note_ru": "Схема: факт → мнение → сравнение → выбор с причиной (because). Это готовый ответ на вопрос интервьюера."
    }
   ],
   "speak": [
    {
     "prompt_ru": "Как в сцене: сравни большой город и маленькое тихое место или удалённую работу и офис. Скажи, что ты предпочитаешь и почему.",
     "template_en": "In my opinion, ___ is ___er than ___. I think ___ is easier than ___. I prefer ___, because ___.",
     "sample_en": "In my opinion, a small town is quieter than a big city. I think remote work is easier than office work. I prefer remote work, because it's cozier.",
     "sample_ru": "По-моему, в маленьком городе тише, чем в большом. Мне кажется, удалённая работа проще, чем офисная. Я предпочитаю удалёнку, потому что так уютнее."
    },
    {
     "prompt_ru": "Рабочая ситуация (созвон или собеседование): сравни два ИИ-инструмента, которыми ты делаешь курсы, и объясни выбор.",
     "template_en": "I use ___ and ___ for my courses. I think ___ is better for ___, because it's ___er. In my opinion, ___ is more ___, but it's ___er.",
     "sample_en": "I use two AI tools for my courses. I think the first tool is better for texts, because it's faster. In my opinion, the second tool is more creative, but it's slower.",
     "sample_ru": "Я использую два ИИ-инструмента для курсов. Мне кажется, первый лучше для текстов, потому что он быстрее. По-моему, второй более креативный, но медленнее."
    },
    {
     "prompt_ru": "Small talk о сериалах: сравни Marvel и уютные мультфильмы (или два своих любимых сериала) и скажи, что предпочитаешь.",
     "template_en": "I like ___ and ___. In my opinion, ___ are funnier than ___. But ___ are more interesting. I prefer ___, because ___.",
     "sample_en": "I like Marvel series and cozy cartoons. In my opinion, cartoons are funnier than Marvel series. But Marvel series are more interesting. I prefer cartoons, because they're cozier.",
     "sample_ru": "Я люблю сериалы Marvel и уютные мультфильмы. По-моему, мультфильмы смешнее сериалов Marvel. Но сериалы Marvel интереснее. Я предпочитаю мультфильмы, потому что они уютнее."
    }
   ]
  }
 ]
};
