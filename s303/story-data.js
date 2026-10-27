// Сезон 1: «3:03». Сгенерировано и проверено редакторами.
const STORY = {
 "title": "3:03",
 "title_ru": "3:03",
 "premise_ru": "3:03 ночи, ночной автобус, туман, и старое радио вдруг говорит с тобой. Твоим собственным голосом. Новая работа на радио в крошечном городке у озера, тёплые странные люди и тайна, которой тридцать лет: английский здесь простой, а оторваться сложно.",
 "characters": [
  {
   "id": "theo",
   "name": "Theo",
   "speech": "Very short sentences, deadpan, understatement. He makes a joke, then says one true thing. Catchphrases: 'Okay. That's not normal.' (only 3 times in the season, so it stays iconic), 'Copy that.', 'I need coffee to live.' He calls you 'rookie' in episodes 2-3; from the 3:03 scene in episode 3 he only says {name}, and that change is the first romantic beat.",
   "voice": {
    "gender": "male",
    "pitch": 0.9,
    "rate": 0.95
   },
   "look": "27, messy hair, headphones always around his neck, sleeps on the studio sofa."
  },
  {
   "id": "pip",
   "name": "Pip",
   "speech": "Warm and fast, but she always says important things twice ('Room seven. Seven.'), which is the in-world reason key facts are repeated. Calls you 'love'. Catchphrase: 'Oh, love. Tea first. Then problems.' No idioms or food metaphors; her humor is in tone and in talking to Biscuit.",
   "voice": {
    "gender": "female",
    "pitch": 1.2,
    "rate": 0.9
   },
   "look": "55, round glasses, flour on her sleeves, talks to her cat."
  },
  {
   "id": "sol",
   "name": "Sol",
   "speech": "Business English and lists: 'Okay. Three things.' / 'Meeting. Eleven. Don't be late.' / 'Is that clear?' Short commands at first. In episode 7 he slows down and tells one honest story in simple past tense, and that is when the viewer starts to love him.",
   "voice": {
    "gender": "male",
    "pitch": 0.75,
    "rate": 0.9
   },
   "look": "47, strict, organized, three coffees before ten, loves lists and rules."
  },
  {
   "id": "nora",
   "name": "Nora",
   "speech": "A classic late-night radio voice. She always starts with 'This is Nora. It's 3:03.' Slow, simple, slightly poetic lines. She never answers a hard question directly the first time. Production: warm AM-radio filter with soft crackle, clearly different from the Voice's digital static.",
   "voice": {
    "gender": "female",
    "pitch": 0.85,
    "rate": 0.85
   },
   "look": "Forever 29."
  },
  {
   "id": "voice",
   "name": "The Voice",
   "speech": "Always opens with 'Hello, {name}. It's me.' Then one or two very short warnings with one exact detail (a color, a time, a name). Often ends with one personal line ('Don't tell Pip.'). Production: use the same base TTS voice that reads the heroine's 'natural way to say it' examples, so the player slowly realizes the Voice sounds like 'her'. Add digital static with small dropouts.",
   "voice": {
    "gender": "female",
    "pitch": 1.05,
    "rate": 0.85
   },
   "look": "Your own voice on 88.8 at 3:03 a.m."
  }
 ],
 "episodes": [
  {
   "id": "s1e1",
   "n": 1,
   "title": "The Blue Door",
   "title_ru": "Синяя дверь",
   "logline_ru": "3:03 ночи, ночной автобус, и радио говорит с тобой твоим собственным голосом. Оно знает, куда тебе идти и что случится утром.",
   "words": [
    {
     "en": "last stop",
     "ru": "конечная остановка · «Dunmere. Last stop.» · так говорит водитель в конце маршрута"
    },
    {
     "en": "Excuse me",
     "ru": "простите, извините · «Excuse me. Is that the radio?» · так вежливо начинают разговор с незнакомым человеком"
    },
    {
     "en": "Who are you?",
     "ru": "Кто ты? / Кто вы? · «Who are you? It's three a.m.» · так спрашивают совсем незнакомого человека"
    },
    {
     "en": "room",
     "ru": "комната, номер · «Room seven. Seven.» · в отеле и гостевом доме это твой номер"
    },
    {
     "en": "key",
     "ru": "ключ · «The key is under the cat.» · ключ от комнаты, двери, машины"
    },
    {
     "en": "Don't be scared",
     "ru": "не бойся · «Hello, {name}. It's me. Don't be scared.» · так успокаивают того, кому страшно"
    },
    {
     "en": "tonight",
     "ru": "сегодня вечером, этой ночью · «Sorry. No room tonight.» · про этот вечер или эту ночь"
    },
    {
     "en": "late",
     "ru": "поздно; опаздывает · «Bus: 3 hours late.» · про время и про транспорт, который задерживается"
    }
   ],
   "recap": [],
   "beats": [
    {
     "t": "scene",
     "place_en": "The night bus",
     "place_ru": "Ночной автобус",
     "emoji": "🚌"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Night. Rain. An empty bus.",
     "ru": "Ночь. Дождь. Пустой автобус."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You are the only passenger.",
     "ru": "Ты единственная пассажирка."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your phone: 'Bus: 3 hours late.' Battery: 4%.",
     "ru": "На телефоне: «Автобус опаздывает на 3 часа». Заряд: 4%."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The bus clock: 3:02... 3:03.",
     "ru": "Часы в автобусе: 3:02... 3:03."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The old radio turns on. Nobody touches it.",
     "ru": "Старое радио включается. Его никто не трогает."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "88.8. Static. Then a voice.",
     "ru": "88.8. Шум. А потом голос."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Hello, {name}. It's me.",
     "ru": "Привет, {name}. Это я."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Don't be scared.",
     "ru": "Не бойся."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You know this voice. It's YOUR voice.",
     "ru": "Ты знаешь этот голос. Это ТВОЙ голос."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You press record. Static eats almost everything.",
     "ru": "Ты включаешь запись. Шум съедает почти всё."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "...find... the blue door...",
     "ru": "...найди... синюю дверь..."
    },
    {
     "t": "choice",
     "q_en": "What do you do?",
     "q_ru": "Что ты сделаешь?",
     "options": [
      {
       "en": "Excuse me. Is that the radio?",
       "ru": "Простите. Это радио?",
       "flag": "asked_driver",
       "reply": [
        {
         "who": "narrator",
         "en": "The driver looks at you. Pale.",
         "ru": "Водитель смотрит на тебя. Он бледный."
        },
        {
         "who": "narrator",
         "en": "He says, 'That radio is broken. Ten years.'",
         "ru": "Он говорит: «Это радио сломано. Уже десять лет»."
        },
        {
         "who": "narrator",
         "en": "But the radio talks.",
         "ru": "Но радио говорит."
        }
       ]
      },
      {
       "en": "Say nothing.",
       "ru": "Промолчать.",
       "flag": "stayed_quiet",
       "reply": [
        {
         "who": "narrator",
         "en": "The driver turns the radio off.",
         "ru": "Водитель выключает радио."
        },
        {
         "who": "narrator",
         "en": "He whispers, 'Not again.'",
         "ru": "Он шепчет: «Только не опять»."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The bus stops. Thick fog.",
     "ru": "Автобус останавливается. Густой туман."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The driver says, 'Dunmere. Last stop.'",
     "ru": "Водитель говорит: «Данмир. Конечная»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Last stop. Only you get off.",
     "ru": "Конечная. Выходишь только ты."
    },
    {
     "t": "scene",
     "place_en": "Lake Road, 3:10 a.m.",
     "place_ru": "Лейк-роуд, 3:10 ночи",
     "emoji": "🌫️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your booking: Lake Road 3.",
     "ru": "Твоя бронь: Лейк-роуд, 3."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The house is dark. A sign on the door.",
     "ru": "Дом тёмный. На двери табличка."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "'Sorry. No room tonight.'",
     "ru": "«Извините. Сегодня мест нет»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then your phone dies. Black screen.",
     "ru": "И тут телефон садится. Чёрный экран."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In the fog: three doors. Red. Green. Blue.",
     "ru": "В тумане три двери. Красная. Зелёная. Синяя."
    },
    {
     "t": "check",
     "q_en": "The voice says... which door?",
     "q_ru": "Голос сказал... какая дверь?",
     "options": [
      {
       "en": "The red door",
       "ru": "Красная дверь",
       "correct": false
      },
      {
       "en": "The green door",
       "ru": "Зелёная дверь",
       "correct": false
      },
      {
       "en": "The blue door",
       "ru": "Синяя дверь",
       "correct": true
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "A dog barks. Very loud.",
       "ru": "Лает собака. Очень громко."
      },
      {
       "who": "narrator",
       "en": "A man shouts, 'It's three a.m.!'",
       "ru": "Мужчина орёт: «Три часа ночи!»"
      },
      {
       "who": "voice",
       "en": "...the blue door...",
       "ru": "...синюю дверь..."
      },
      {
       "who": "narrator",
       "en": "Blue. She says blue.",
       "ru": "Синюю. Она сказала: синюю."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "Blue. Like the voice says.",
       "ru": "Синяя. Как сказал голос."
      }
     ]
    },
    {
     "t": "scene",
     "place_en": "The Blue Door",
     "place_ru": "Синяя дверь",
     "emoji": "🔵"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "It opens before you knock.",
     "ru": "Дверь открывается. Ты даже не постучала."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A woman. Round glasses. A cup of tea.",
     "ru": "Женщина. Круглые очки. Чашка чая."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A fat cat under her arm.",
     "ru": "Под мышкой толстый кот."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Who are you? It's three a.m.",
     "ru": "Ты кто такая? Три часа ночи."
    },
    {
     "t": "say",
     "to": "pip",
     "task_ru": "Скажи Пип, кто ты и что тебе нужна комната.",
     "hint_ru": "Начни с I'm... или Excuse me...",
     "example_en": "I'm {name}. Sorry. I need a room.",
     "example_ru": "Я {name}. Простите. Мне нужна комната.",
     "accept": [
      "i'm",
      "i am",
      "im",
      "name",
      "{name}",
      "room",
      "sorry",
      "excuse me"
     ],
     "after": [
      {
       "who": "pip",
       "en": "{name}? Wait.",
       "ru": "{name}? Подожди."
      },
      {
       "who": "narrator",
       "en": "Pip goes white.",
       "ru": "Пип бледнеет."
      }
     ]
    },
    {
     "t": "line",
     "who": "pip",
     "en": "There's a voice on my radio.",
     "ru": "У меня по радио голос."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Tonight. At 3:03. It says your name.",
     "ru": "Сегодня ночью. В 3:03. Он называет твоё имя."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "It says, 'Open the blue door.'",
     "ru": "Он говорит: «Открой синюю дверь»."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "She sounds like you, love.",
     "ru": "У неё твой голос, милая."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your voice. On her radio.",
     "ru": "Твой голос. На её радио."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Don't be scared, love. Come in.",
     "ru": "Не бойся, милая. Заходи."
    },
    {
     "t": "scene",
     "place_en": "Pip's kitchen",
     "place_ru": "Кухня Пип",
     "emoji": "☕"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A warm kitchen. It smells of bread.",
     "ru": "Тёплая кухня. Пахнет хлебом."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "I'm Pip. This is Biscuit.",
     "ru": "Я Пип. А это Бисквит."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Biscuit, say hello. Be nice.",
     "ru": "Бисквит, поздоровайся. Будь вежливым."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Biscuit does not say hello.",
     "ru": "Бисквит не здоровается."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Tea, love?",
     "ru": "Чаю, милая?"
    },
    {
     "t": "say",
     "to": "pip",
     "task_ru": "Пип спрашивает: «Чаю, милая?» Ответь ей.",
     "hint_ru": "Можно сказать Yes, please...",
     "example_en": "Yes, please. Thank you.",
     "example_ru": "Да, пожалуйста. Спасибо.",
     "accept": [
      "yes",
      "please",
      "thank",
      "thanks",
      "yeah",
      "sure",
      "ok",
      "okay"
     ],
     "after": [
      {
       "who": "pip",
       "en": "Good. Sit, love. Sit.",
       "ru": "Вот и хорошо. Садись, милая. Садись."
      },
      {
       "who": "narrator",
       "en": "Hot tea. Your hands are warm now.",
       "ru": "Горячий чай. Руки наконец согреваются."
      },
      {
       "who": "pip",
       "en": "The night bus? Always late. Always.",
       "ru": "Ночной автобус? Вечно опаздывает. Вечно."
      }
     ]
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Room seven. Seven.",
     "ru": "Седьмая комната. Седьмая."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "The key is under the cat.",
     "ru": "Ключ под котом."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Yes, love. Under the cat.",
     "ru": "Да, милая. Под котом."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Biscuit is on the key.",
     "ru": "Бисквит сидит на ключе."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Biscuit. The key. Please.",
     "ru": "Бисквит. Ключ. Пожалуйста."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Biscuit looks at you. He doesn't move.",
     "ru": "Бисквит смотрит на тебя. И не двигается."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip picks him up. There's the key.",
     "ru": "Пип поднимает кота. Вот и ключ."
    },
    {
     "t": "scene",
     "place_en": "Room 7",
     "place_ru": "Комната 7",
     "emoji": "🗝️"
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Your room, love. Your key.",
     "ru": "Твоя комната, милая. Твой ключ."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the table: an old radio.",
     "ru": "На столе старое радио."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Like the radio on the bus.",
     "ru": "Как то радио в автобусе."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "One rule, love. One rule.",
     "ru": "Одно правило, милая. Всего одно."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "The radio talks at night. Don't listen. Okay?",
     "ru": "Ночью радио говорит. Не слушай. Хорошо?"
    },
    {
     "t": "choice",
     "q_en": "What do you say?",
     "q_ru": "Что ты ответишь?",
     "options": [
      {
       "en": "Okay.",
       "ru": "Хорошо.",
       "flag": "pip_okay",
       "reply": [
        {
         "who": "pip",
         "en": "Good. It's late, love. Sleep.",
         "ru": "Вот и хорошо. Уже поздно, милая. Спи."
        },
        {
         "who": "narrator",
         "en": "The door closes.",
         "ru": "Дверь закрывается."
        }
       ]
      },
      {
       "en": "Why? What's going on?",
       "ru": "Почему? Что происходит?",
       "flag": "radio_gone",
       "reply": [
        {
         "who": "pip",
         "en": "Tea first. Questions tomorrow.",
         "ru": "Сначала чай. Вопросы завтра."
        },
        {
         "who": "narrator",
         "en": "She takes the old radio. And goes.",
         "ru": "Она забирает старое радио. И уходит."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "if": "radio_gone",
     "en": "The table is empty now.",
     "ru": "Теперь стол пустой."
    },
    {
     "t": "line",
     "who": "narrator",
     "ifnot": "radio_gone",
     "en": "The old radio is quiet. For now.",
     "ru": "Старое радио молчит. Пока."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You're alone. Out the window, a black lake.",
     "ru": "Ты одна. За окном чёрное озеро."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "An island. A red light. Blinking.",
     "ru": "Остров. Красный огонёк. Мигает."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your phone is on again.",
     "ru": "Телефон снова включается."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Headphones on. Again. Slowly.",
     "ru": "Наушники. Ещё раз. Медленно."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Hello, {name}. It's me. Don't be scared.",
     "ru": "Привет, {name}. Это я. Не бойся."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then, under the static, something new.",
     "ru": "А потом, под шумом, что-то новое."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "At nine, someone falls.",
     "ru": "В девять кто-то упадёт."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Stop it.",
     "ru": "Останови это."
    },
    {
     "t": "check",
     "q_en": "Set an alarm. The voice says... what time?",
     "q_ru": "Поставь будильник. Голос сказал... во сколько?",
     "options": [
      {
       "en": "9:00",
       "ru": "9:00",
       "correct": true
      },
      {
       "en": "5:00",
       "ru": "5:00",
       "correct": false
      },
      {
       "en": "1:00",
       "ru": "1:00",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "The static gets very loud.",
       "ru": "Шум становится очень громким."
      },
      {
       "who": "voice",
       "en": "At... nine... someone falls.",
       "ru": "В... девять... кто-то упадёт."
      },
      {
       "who": "narrator",
       "en": "Nine. She says nine.",
       "ru": "Девять. Она сказала: девять."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "Alarm: 8:30. Just in case.",
       "ru": "Будильник: 8:30. На всякий случай."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Wait. There's more.",
     "ru": "Подожди. Там есть ещё."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "And {name}... don't tell Pip.",
     "ru": "И ещё, {name}... не говори Пип."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You look at the phone. Who are you?",
     "ru": "Ты смотришь на телефон. Кто ты?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Behind you, the door opens. Slowly.",
     "ru": "За спиной медленно открывается дверь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip. With a second cup of tea.",
     "ru": "Пип. Со второй чашкой чая."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Don't tell Pip what, love?",
     "ru": "Не говорить Пип — о чём, милая?"
    }
   ],
   "cliff_en": "Don't tell Pip what, love?",
   "cliff_ru": "Не говорить Пип — о чём, милая?",
   "teaser_ru": "В следующей серии: первый рабочий день, строгий начальник и девять утра. Кто-то упадёт, если ты не успеешь.",
   "claude_scene": "It is 3:20 a.m. in Pip's warm kitchen at the Blue Door guest house in Dunmere. Rain on the window, fog outside, Biscuit the fat orange cat asleep on the table. Pip (55, round glasses, flour on her sleeves, warm and a little nosy, calls the player 'love', says important things twice) pours more tea and gently asks the player simple questions: Who are you? Where are you from? Why Dunmere? Are you scared? She is curious but kind, and avoids talking about her radio. Keep every sentence very short (max 6 words), present tense only, slow and simple, with no past tense."
  },
  {
   "id": "s1e2",
   "n": 2,
   "title": "Nine O'Clock",
   "title_ru": "Ровно в девять",
   "logline_ru": "Первый рабочий день, строгий начальник и лестница, которая сломается ровно в девять. А вечером ты узнаешь, что твой голос звучал здесь ещё в августе.",
   "words": [
    {
     "en": "boss",
     "ru": "начальник, босс · «I'm Sol. Your boss.» · так говорят про того, кто главный на работе"
    },
    {
     "en": "on time",
     "ru": "вовремя · «8:50. You're on time. Good.» · когда пришла без опоздания, ровно к сроку"
    },
    {
     "en": "meeting",
     "ru": "встреча, планёрка · «Meeting. Eleven. Studio B.» · рабочее собрание, а не свидание"
    },
    {
     "en": "Be careful!",
     "ru": "Осторожно! / Будь осторожна! · «Be careful, love.» · так предупреждают об опасности или просят беречь себя"
    },
    {
     "en": "Nice to meet you",
     "ru": "Приятно познакомиться · «Nice to meet you. I'm Sol.» · говорят один раз, при первой встрече"
    },
    {
     "en": "How do you know?",
     "ru": "Откуда ты знаешь? · «You look at the clock. How do you know?» · когда человек знает то, чего знать не должен"
    },
    {
     "en": "It's a long story",
     "ru": "Это долгая история · «I don't know. It's a long story.» · так говорят, когда не хотят или не могут объяснять"
    },
    {
     "en": "Don't be late",
     "ru": "Не опаздывай · «Meeting. Eleven. Don't be late.» · так напоминают о встрече: строго или заботливо"
    }
   ],
   "recap": [
    {
     "who": "narrator",
     "en": "Previously on 3:03.",
     "ru": "Ранее в «3:03»."
    },
    {
     "who": "narrator",
     "en": "Last stop. Dunmere. Fog. Very late.",
     "ru": "Конечная. Данмир. Туман. Очень поздно."
    },
    {
     "who": "voice",
     "en": "Hello, {name}. It's me. Don't be scared.",
     "ru": "Привет, {name}. Это я. Не бойся."
    },
    {
     "who": "pip",
     "en": "Who are you? It's three a.m.",
     "ru": "Ты кто? Три часа ночи."
    },
    {
     "who": "pip",
     "en": "Room seven. The key is under the cat.",
     "ru": "Седьмая комната. Ключ под котом."
    },
    {
     "who": "voice",
     "en": "At nine, someone falls. Stop it.",
     "ru": "В девять кто-то упадёт. Останови это."
    },
    {
     "who": "voice",
     "en": "And {name}... don't tell Pip.",
     "ru": "И, {name}... не говори Пип."
    }
   ],
   "recap_check": {
    "t": "check",
    "q_en": "Your alarm. The Voice says... what time?",
    "q_ru": "Будильник. Во сколько, сказал Голос?",
    "options": [
     {
      "en": "9:00",
      "ru": "9:00",
      "correct": true
     },
     {
      "en": "5:00",
      "ru": "5:00",
      "correct": false
     },
     {
      "en": "1:00",
      "ru": "1:00",
      "correct": false
     }
    ],
    "wrong": [
     {
      "who": "voice",
      "en": "At nine. Someone falls.",
      "ru": "В девять. Кто-то упадёт."
     },
     {
      "who": "narrator",
      "en": "Nine. She says nine.",
      "ru": "В девять. Она говорит — в девять."
     }
    ],
    "right": [
     {
      "who": "narrator",
      "en": "Alarm: 8:30. Just in case.",
      "ru": "Будильник на 8:30. На всякий случай."
     }
    ]
   },
   "beats": [
    {
     "t": "scene",
     "place_en": "Room 7, The Blue Door",
     "place_ru": "Комната 7, «Синяя дверь»",
     "emoji": "🚪"
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Don't tell Pip what, love?",
     "ru": "Не говорить Пип — что, милая?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip. Two cups of tea. Big eyes.",
     "ru": "Пип. Две чашки чая. Огромные глаза."
    },
    {
     "t": "choice",
     "q_en": "What do you say?",
     "q_ru": "Что ты ответишь?",
     "options": [
      {
       "en": "Nothing. It's a song.",
       "ru": "Ничего. Это песня.",
       "flag": "lied",
       "reply": [
        {
         "who": "narrator",
         "en": "Pip smiles. A small smile.",
         "ru": "Пип улыбается. Чуть-чуть."
        },
        {
         "who": "pip",
         "en": "Okay, love. Sleep.",
         "ru": "Ладно, милая. Спи."
        },
        {
         "who": "narrator",
         "en": "She leaves you the tea.",
         "ru": "Она оставляет тебе чай."
        }
       ]
      },
      {
       "en": "A voice. On the radio.",
       "ru": "Голос. По радио.",
       "flag": "truth",
       "reply": [
        {
         "who": "narrator",
         "en": "Pip goes white.",
         "ru": "Пип бледнеет."
        },
        {
         "who": "pip",
         "en": "Not again.",
         "ru": "Только не снова."
        },
        {
         "who": "narrator",
         "en": "She goes. Fast. With both cups.",
         "ru": "Она уходит. Быстро. И уносит обе чашки."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The door closes.",
     "ru": "Дверь закрывается."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the island, a red light blinks.",
     "ru": "На острове мигает красный огонёк."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "8:30. Your alarm. '9:00. Someone falls.'",
     "ru": "8:30. Будильник. «9:00. Кто-то упадёт»."
    },
    {
     "t": "line",
     "who": "narrator",
     "if": "radio_gone",
     "en": "No radio. Just a clean square.",
     "ru": "Радио нет. Только чистый квадрат в пыли."
    },
    {
     "t": "scene",
     "place_en": "The Blue Door, kitchen",
     "place_ru": "Кухня «Синей двери»",
     "emoji": "🥞"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pancakes. Coffee. Biscuit is on your chair.",
     "ru": "Блинчики. Кофе. Бисквит — на твоём стуле."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Biscuit. Off. That's her chair.",
     "ru": "Бисквит. Слезай. Это её стул."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Biscuit looks at you. He doesn't move.",
     "ru": "Бисквит смотрит на тебя. И не двигается."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "He hates everyone. It's a long story.",
     "ru": "Он всех ненавидит. Это долгая история."
    },
    {
     "t": "line",
     "who": "pip",
     "if": "lied",
     "en": "Nice song last night, love?",
     "ru": "Хорошая была песня ночью, милая?"
    },
    {
     "t": "line",
     "who": "pip",
     "if": "truth",
     "en": "Eat, love. No radio talk. Okay?",
     "ru": "Ешь, милая. Про радио — ни слова. Хорошо?"
    },
    {
     "t": "line",
     "who": "pip",
     "en": "First day at the radio?",
     "ru": "Первый день на радио?"
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Sol is your boss. He's very... Sol.",
     "ru": "Сол — твой начальник. Он очень... Сол."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Say 'Nice to meet you.' And smile.",
     "ru": "Скажи: «Приятно познакомиться». И улыбайся."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "She holds your hand. Too long.",
     "ru": "Она держит тебя за руку. Слишком долго."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Be careful, love. Be careful.",
     "ru": "Будь осторожна, милая. Осторожна."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "And don't be late.",
     "ru": "И не опаздывай."
    },
    {
     "t": "scene",
     "place_en": "Radio Dunmere 98.6 FM",
     "place_ru": "Радио Данмир 98.6 FM",
     "emoji": "📻"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "8:50. A red light: ON AIR.",
     "ru": "8:50. Красная лампа: ON AIR."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A man. Grey suit. Three coffees.",
     "ru": "Мужчина. Серый костюм. Три стакана кофе."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "{name}? 8:50. You're on time. Good.",
     "ru": "{name}? 8:50. Ты вовремя. Хорошо."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Nice to meet you. I'm Sol. Your boss.",
     "ru": "Приятно познакомиться. Я Сол. Твой начальник."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You smile. 'Nice to meet you.'",
     "ru": "Ты улыбаешься: «Приятно познакомиться»."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "No smiling. Three things.",
     "ru": "Без улыбок. Значит так. Три пункта."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "One. Be on time. Two. Be careful.",
     "ru": "Первое: приходить вовремя. Второе: быть осторожной."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Three. No questions about 88.8.",
     "ru": "Третье: никаких вопросов про 88.8."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "88.8. Like the radio on the bus.",
     "ru": "88.8. Как радио в том автобусе."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Clear? Good. So. What can you do?",
     "ru": "Ясно? Хорошо. Итак. Что ты умеешь?"
    },
    {
     "t": "say",
     "to": "sol",
     "task_ru": "Сол спрашивает, что ты умеешь. Скажи, что делаешь посты, фото или дизайн.",
     "hint_ru": "Начни с I can... (я умею...)",
     "example_en": "I can make posts. I'm a designer.",
     "example_ru": "Я умею делать посты. Я дизайнер.",
     "accept": [
      "i can",
      "design",
      "post",
      "photo",
      "poster",
      "video",
      "picture",
      "make"
     ],
     "after": [
      {
       "who": "sol",
       "en": "Posts. Photos. Good.",
       "ru": "Посты. Фото. Хорошо."
      },
      {
       "who": "sol",
       "en": "Coffee? No. All three are mine.",
       "ru": "Кофе? Нет. Все три — мои."
      }
     ]
    },
    {
     "t": "scene",
     "place_en": "The hall, 8:57",
     "place_ru": "Холл, 8:57",
     "emoji": "🪜"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "An old sofa. A big blanket.",
     "ru": "Старый диван. На нём большой плед."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A big clock. 8:57.",
     "ru": "Большие часы. 8:57."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The ON AIR sign goes dark.",
     "ru": "Табличка ON AIR гаснет."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Not today. Where's the ladder?",
     "ru": "Только не сегодня. Где стремянка?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "An old ladder. Sol climbs.",
     "ru": "Старая стремянка. Сол лезет наверх."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "8:58. The clock ticks. Louder.",
     "ru": "8:58. Часы тикают. Всё громче."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your phone: '9:00. Someone falls.'",
     "ru": "Телефон: «9:00. Кто-то упадёт»."
    },
    {
     "t": "choice",
     "q_en": "8:59. The ladder shakes. What do you do?",
     "q_ru": "8:59. Стремянка шатается. Что ты сделаешь?",
     "options": [
      {
       "en": "Shout: 'Be careful!'",
       "ru": "Крикнуть: «Осторожно!»",
       "flag": "shouted",
       "reply": [
        {
         "who": "narrator",
         "en": "You shout: 'Be careful!'",
         "ru": "Ты кричишь: «Осторожно!»"
        },
        {
         "who": "narrator",
         "en": "Sol looks down. He steps off.",
         "ru": "Сол смотрит вниз. Спускается."
        },
        {
         "who": "narrator",
         "en": "9:00. CRACK. The ladder breaks.",
         "ru": "9:00. ХРУСТ. Стремянка ломается."
        },
        {
         "who": "narrator",
         "en": "Nobody is on it.",
         "ru": "А на ней — никого."
        }
       ]
      },
      {
       "en": "Run. Hold the ladder.",
       "ru": "Подбежать и держать стремянку.",
       "flag": "held",
       "reply": [
        {
         "who": "narrator",
         "en": "You run. You hold the ladder.",
         "ru": "Ты бежишь. Держишь стремянку."
        },
        {
         "who": "narrator",
         "en": "9:00. CRACK. Sol falls. On you.",
         "ru": "9:00. ХРУСТ. Сол падает. Прямо на тебя."
        },
        {
         "who": "narrator",
         "en": "You both land on the sofa.",
         "ru": "Вы оба валитесь на диван."
        },
        {
         "who": "narrator",
         "en": "The sofa says, 'Ow.'",
         "ru": "Диван говорит: «Ай»."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "if": "shouted",
     "en": "The blanket moves. 'Too loud,' it says.",
     "ru": "Плед шевелится. «Слишком громко», — говорит он."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A man sits up. Messy hair. Headphones.",
     "ru": "Садится парень. Лохматый. Наушники на шее."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Good morning to you too, Sol.",
     "ru": "И тебе доброе утро, Сол."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol fixes his suit. No 'thank you.'",
     "ru": "Сол поправляет костюм. Никакого «спасибо»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo. The night host. Eyes on you.",
     "ru": "Это Тео, ведущий ночного эфира. Он не сводит с тебя глаз."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "You look at the clock. Then, crack.",
     "ru": "Ты смотришь на часы. И тут — хрусть."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "How do you know?",
     "ru": "Откуда ты знаешь?"
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Тео спрашивает: «Откуда ты знаешь?» Скажи, что не знаешь, или что это долгая история.",
     "hint_ru": "I don't know... / It's a long story.",
     "example_en": "I don't know. It's a long story.",
     "example_ru": "Не знаю. Это долгая история.",
     "accept": [
      "don't know",
      "dont know",
      "not know",
      "long story",
      "story",
      "voice",
      "radio",
      "phone"
     ],
     "after": [
      {
       "who": "theo",
       "en": "Copy that.",
       "ru": "Принял."
      },
      {
       "who": "theo",
       "en": "I like long stories, rookie.",
       "ru": "Люблю долгие истории, новенькая."
      },
      {
       "who": "narrator",
       "en": "He smiles. Just a little.",
       "ru": "Он улыбается. Совсем чуть-чуть."
      }
     ]
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Meeting. Eleven. Studio B. Don't be late.",
     "ru": "Планёрка. В одиннадцать. Студия B. Не опаздывай."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol walks away. With three coffees.",
     "ru": "Сол уходит. С тремя стаканами кофе."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "That's our boss. 'Don't be late' means 'thank you.'",
     "ru": "Это наш начальник. «Не опаздывай» у него значит «спасибо»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I'm Theo. Nice to meet you, rookie.",
     "ru": "Я Тео. Приятно познакомиться, новенькая."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He shakes your hand. It's warm.",
     "ru": "Он пожимает тебе руку. Ладонь тёплая."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Sol. One coffee is mine, yes?",
     "ru": "Сол. Один кофе ведь мой, да?"
    },
    {
     "t": "line",
     "who": "sol",
     "en": "No.",
     "ru": "Нет."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Are you serious?",
     "ru": "Ты серьёзно?"
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Always.",
     "ru": "Всегда."
    },
    {
     "t": "scene",
     "place_en": "The hall, 10:59",
     "place_ru": "Коридор, 10:59",
     "emoji": "⏱️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "10:59. Your phone: 'MEETING. DON'T BE LATE.'",
     "ru": "10:59. Телефон: «ПЛАНЁРКА. НЕ ОПАЗДЫВАЙ»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Three doors: A, B, D.",
     "ru": "Три двери: A, B, D."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The whiteboard: 'MEETING: STUDIO...'",
     "ru": "На доске: «ПЛАНЁРКА: СТУДИЯ...»"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The last letter? Under Theo's coffee.",
     "ru": "Последняя буква? Под кофе Тео."
    },
    {
     "t": "check",
     "q_en": "Sol says: 'Meeting. Eleven. Studio...'",
     "q_ru": "Сол сказал: «Планёрка. В одиннадцать. Студия...»",
     "options": [
      {
       "en": "Studio A",
       "ru": "Студия A",
       "correct": false
      },
      {
       "en": "Studio B",
       "ru": "Студия B",
       "correct": true
      },
      {
       "en": "Studio D",
       "ru": "Студия D",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "You open the door. ON AIR.",
       "ru": "Ты открываешь дверь. ПРЯМОЙ ЭФИР."
      },
      {
       "who": "narrator",
       "en": "An old man. A microphone. Silence.",
       "ru": "Пожилой ведущий. Микрофон. Тишина."
      },
      {
       "who": "narrator",
       "en": "You whisper, 'Sorry!' The whole town hears.",
       "ru": "Ты шепчешь: «Простите!» Это слышит весь город."
      },
      {
       "who": "theo",
       "en": "B, rookie. B. Like 'boss.'",
       "ru": "B, новенькая. B. Как в слове «boss»."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "Studio B. 11:00. You're on time.",
       "ru": "Студия B. 11:00. Ты вовремя."
      }
     ]
    },
    {
     "t": "scene",
     "place_en": "Studio B",
     "place_ru": "Студия B",
     "emoji": "🏮"
    },
    {
     "t": "line",
     "who": "sol",
     "en": "On time. Good. Your first job: a poster.",
     "ru": "Вовремя. Хорошо. Твоя первая задача — афиша."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Lantern Night. The biggest night of the year.",
     "ru": "Ночь фонарей. Главная ночь года."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Paper lanterns on the black lake.",
     "ru": "Бумажные фонарики на чёрном озере."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Lantern Night is October thirty-first. Thirty-one.",
     "ru": "Ночь фонарей — тридцать первого октября. Тридцать первого."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The poster: 'LANTERN NIGHT. OCTOBER...'",
     "ru": "Афиша: «НОЧЬ ФОНАРЕЙ. ОКТЯБРЬ...»"
    },
    {
     "t": "check",
     "q_en": "You type the date on the poster.",
     "q_ru": "Ты вписываешь дату на афишу.",
     "options": [
      {
       "en": "October 13",
       "ru": "13 октября",
       "correct": false
      },
      {
       "en": "October 30",
       "ru": "30 октября",
       "correct": false
      },
      {
       "en": "October 31",
       "ru": "31 октября",
       "correct": true
      }
     ],
     "wrong": [
      {
       "who": "sol",
       "en": "Thirteen? Thirty? No.",
       "ru": "Тринадцать? Тридцать? Нет."
      },
      {
       "who": "sol",
       "en": "Three. One. Thirty-one.",
       "ru": "Три. Один. Тридцать один."
      }
     ],
     "right": [
      {
       "who": "sol",
       "en": "Thirty-one. Good.",
       "ru": "Тридцать первое. Хорошо."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Remember this date: 31.",
     "ru": "Запомни эту дату: 31."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Questions? No? Good. Meeting over.",
     "ru": "Вопросы? Нет? Отлично. Планёрка окончена."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo's hand is up.",
     "ru": "Тео поднимает руку."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "No, Theo.",
     "ru": "Нет, Тео."
    },
    {
     "t": "scene",
     "place_en": "The end of the hall",
     "place_ru": "Конец коридора",
     "emoji": "🚫"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A grey door. '88.8. DO NOT OPEN.'",
     "ru": "Серая дверь. «88.8. НЕ ОТКРЫВАТЬ»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Above it, a small clock: 3:03.",
     "ru": "Над ней маленькие часы: 3:03."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The clock doesn't move.",
     "ru": "Стрелки не двигаются."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Nobody opens it. Not even Sol.",
     "ru": "Её никто не открывает. Даже Сол."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You ask, 'How do you know?'",
     "ru": "Ты спрашиваешь: «Откуда ты знаешь?»"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "How do I know? It's a long story.",
     "ru": "Откуда я знаю? Это долгая история."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Your words, rookie.",
     "ru": "Твои слова, новенькая."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I'm the night host. At night, it hums.",
     "ru": "Я веду ночной эфир. По ночам она гудит."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You touch the door. It's warm.",
     "ru": "Ты касаешься двери. Она тёплая."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Rule three, rookie. Walk away.",
     "ru": "Правило номер три, новенькая. Уходим."
    },
    {
     "t": "scene",
     "place_en": "Radio Dunmere, 7 p.m.",
     "place_ru": "Радио Данмир, 19:00",
     "emoji": "🌫️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "7 p.m. You stay late.",
     "ru": "19:00. Ты задерживаешься на работе."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The station is dark. Empty.",
     "ru": "На станции темно. Пусто."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Fog at the window. The clock ticks.",
     "ru": "Туман за окном. Тикают часы."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then you hear a voice.",
     "ru": "И вдруг ты слышишь голос."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Wait. That's your voice.",
     "ru": "Стоп. Это же твой голос."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "It comes from Sol's office.",
     "ru": "Он доносится из кабинета Сола."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The door is half open.",
     "ru": "Дверь приоткрыта."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol. Alone. Headphones. An old tape recorder.",
     "ru": "Сол. Один. В наушниках. Старый кассетный магнитофон."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A box of tapes. All with dates.",
     "ru": "Коробка кассет. На всех — даты."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Sol. Give her the job.",
     "ru": "Сол. Возьми её на работу."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Her name is {name}.",
     "ru": "Её зовут {name}."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your voice. On your boss's tape.",
     "ru": "Твой голос. На кассете твоего начальника."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "How does Sol know your name?",
     "ru": "Откуда Сол знает твоё имя?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The label: '88.8. 3:03. AUGUST 14.'",
     "ru": "Наклейка: «88.8. 3:03. 14 АВГУСТА»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "August. Two months ago.",
     "ru": "Август. Два месяца назад."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Before the bus. Before Dunmere.",
     "ru": "До автобуса. До Данмира."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol takes off his headphones.",
     "ru": "Сол снимает наушники."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He doesn't turn around.",
     "ru": "Он не оборачивается."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Close the door, {name}.",
     "ru": "Закрой дверь, {name}."
    }
   ],
   "cliff_en": "Close the door, {name}.",
   "cliff_ru": "Закрой дверь, {name}.",
   "teaser_ru": "В следующей серии: ночное кафе, туман и эксперимент на частоте 88.8. Тео услышит Голос, и не только его.",
   "claude_scene": "Radio Dunmere, 9:05 a.m., right after the old ladder breaks. Theo Marsh (27, messy hair, headphones around his neck, deadpan) sits on the studio sofa with a cold coffee. He asks you, the new social media assistant, how you know about nine o'clock. He calls you 'rookie'. He speaks slowly, in very short present-tense sentences (A2 level, max 7 words, no past tense), makes one dry joke, then says one true thing. He is curious, a little suspicious, and kind. If you struggle, he says it again more simply. If you answer in Russian, he reacts warmly and offers one short English way to say it. Never correct grammar and never praise like a teacher. Stay in the story."
  },
  {
   "id": "s1e3",
   "n": 3,
   "title": "88.8",
   "title_ru": "88.8",
   "logline_ru": "Ночное кафе, туман и эксперимент: вы с Тео слушаете частоту 88.8 ровно в 3:03. Но в эфире звучит не только твой голос.",
   "words": [
    {
     "en": "Can I have...?",
     "ru": "Можно мне...? Вежливо просят в кафе: «Can I have a tea, please?»"
    },
    {
     "en": "How much is it?",
     "ru": "Сколько это стоит? / Сколько с меня? Спрашивают у кассы."
    },
    {
     "en": "map",
     "ru": "карта (города, озера). «On the wall, a big map.»"
    },
    {
     "en": "island",
     "ru": "остров; s не читается: [айлэнд]. «Don't go to the island.»"
    },
    {
     "en": "listen",
     "ru": "слушать; Listen. — Послушай. t не читается: [лисн]."
    },
    {
     "en": "Let's go",
     "ru": "Пошли / Поехали. Так зовут кого-то с собой."
    },
    {
     "en": "Are you serious?",
     "ru": "Ты серьёзно? Так говорят, когда не верят своим ушам."
    },
    {
     "en": "scared",
     "ru": "испуганный; I'm scared — мне страшно. «Are you scared?» — тебе страшно?"
    }
   ],
   "recap": [
    {
     "who": "sol",
     "en": "Nice to meet you. I'm your boss.",
     "ru": "Приятно познакомиться. Я твой начальник."
    },
    {
     "who": "sol",
     "en": "Meeting at eleven. Be on time. Don't be late.",
     "ru": "Совещание в одиннадцать. Приходи вовремя. Не опаздывай."
    },
    {
     "who": "narrator",
     "en": "Nine o'clock. The ladder breaks. You know.",
     "ru": "Девять часов. Лестница ломается. А ты знала заранее."
    },
    {
     "who": "theo",
     "en": "How do you know, rookie?",
     "ru": "Откуда ты знаешь, новенькая?"
    },
    {
     "who": "narrator",
     "en": "Night. Sol's office. Your voice on tape.",
     "ru": "Ночь. Кабинет Сола. Твой голос на плёнке."
    },
    {
     "who": "voice",
     "en": "Sol. Hire her. Her name is {name}.",
     "ru": "Сол. Возьми её. Её зовут {name}."
    }
   ],
   "recap_check": {
    "t": "check",
    "q_en": "The old tape. What does your voice say?",
    "q_ru": "Старая кассета. Что говорит твой голос?",
    "options": [
     {
      "en": "Sol. Hire her.",
      "ru": "Сол. Возьми её на работу.",
      "correct": true
     },
     {
      "en": "Don't tell Pip.",
      "ru": "Не говори Пип.",
      "correct": false
     },
     {
      "en": "Find the blue door.",
      "ru": "Найди синюю дверь.",
      "correct": false
     }
    ],
    "wrong": [
     {
      "who": "narrator",
      "en": "Listen again. The tape clicks.",
      "ru": "Послушай ещё раз. Кассета щёлкает."
     },
     {
      "who": "voice",
      "en": "Sol. Hire her. Her name is {name}.",
      "ru": "Сол. Возьми её. Её зовут {name}."
     }
    ],
    "right": [
     {
      "who": "narrator",
      "en": "The tape says August. Long before you.",
      "ru": "На кассете — август. Задолго до тебя."
     }
    ]
   },
   "beats": [
    {
     "t": "scene",
     "place_en": "Radio Dunmere. Sol's office",
     "place_ru": "Радио Данмир. Кабинет Сола",
     "emoji": "📼"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The tape stops. Sol doesn't turn around.",
     "ru": "Плёнка замолкает. Сол не оборачивается."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "It's a radio play. Old. An actress.",
     "ru": "Это радиоспектакль. Старый. Там актриса."
    },
    {
     "t": "choice",
     "q_en": "What do you say?",
     "q_ru": "Что ты скажешь?",
     "options": [
      {
       "en": "Okay. Good night.",
       "ru": "Ладно. Спокойной ночи.",
       "flag": "quiet",
       "reply": [
        {
         "who": "sol",
         "en": "Good night, {name}.",
         "ru": "Спокойной ночи, {name}."
        },
        {
         "who": "narrator",
         "en": "His hand shakes on the tape.",
         "ru": "Его рука дрожит на кассете."
        }
       ]
      },
      {
       "en": "No. That's my voice.",
       "ru": "Нет. Это мой голос.",
       "flag": "pushed",
       "reply": [
        {
         "who": "narrator",
         "en": "Sol turns. His face is cold.",
         "ru": "Сол оборачивается. Лицо ледяное."
        },
        {
         "who": "sol",
         "en": "It's a play. Is that clear?",
         "ru": "Это спектакль. Тебе ясно?"
        },
        {
         "who": "narrator",
         "en": "He locks the tape in his drawer.",
         "ru": "Он запирает кассету в ящике стола."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On his desk, a note: '3:03. Every night.'",
     "ru": "На столе записка: «3:03. Каждую ночь»."
    },
    {
     "t": "scene",
     "place_en": "Radio Dunmere. Next evening",
     "place_ru": "Радио Данмир. Следующий вечер",
     "emoji": "🖥️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Next evening. Your poster: 'LANTERN NIGHT. OCTOBER 31.'",
     "ru": "Следующий вечер. Твой постер: «НОЧЬ ФОНАРЕЙ. 31 ОКТЯБРЯ»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Rookie. Coffee? I need coffee to live.",
     "ru": "Новенькая. Кофе? Мне без кофе не выжить."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "You need a break too. Let's go.",
     "ru": "Тебе тоже нужен перерыв. Пошли."
    },
    {
     "t": "scene",
     "place_en": "Marta's Cafe",
     "place_ru": "Кафе Марты",
     "emoji": "☕"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta's cafe. Warm yellow light.",
     "ru": "Кафе Марты. Тёплый жёлтый свет."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Marta, can I have a coffee? A big one.",
     "ru": "Марта, можно мне кофе? Большой."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta: 'Bad day, Theo?'",
     "ru": "Марта: «Тяжёлый день, Тео?»"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Bad life.",
     "ru": "Тяжёлая жизнь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta smiles at you. 'And you, love?'",
     "ru": "Марта улыбается тебе. «А тебе, дорогая?»"
    },
    {
     "t": "say",
     "to": "",
     "task_ru": "Марта спрашивает: «Что тебе принести?» Закажи чай или кофе — вежливо.",
     "hint_ru": "Начни с Can I have...?",
     "example_en": "Can I have a tea, please?",
     "example_ru": "Можно мне чай, пожалуйста?",
     "accept": [
      "can i have",
      "tea",
      "coffee",
      "please",
      "cocoa",
      "water",
      "i'd like",
      "i want"
     ],
     "after": [
      {
       "who": "narrator",
       "en": "Marta: 'Of course, love. Here you are.'",
       "ru": "Марта: «Конечно, дорогая. Держи»."
      },
      {
       "who": "narrator",
       "en": "Marta: 'You're new. The cake is free.'",
       "ru": "Марта: «Ты новенькая. Пирожное — бесплатно»."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You ask: 'How much is it?'",
     "ru": "Ты спрашиваешь: «Сколько с меня?»"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta: 'That's four fifty, love.'",
     "ru": "Марта: «Четыре пятьдесят, дорогая»."
    },
    {
     "t": "check",
     "q_en": "The coffee machine hisses. How much is it? Tap the coins.",
     "q_ru": "Кофемашина шипит. Сколько с тебя? Выбери монеты.",
     "options": [
      {
       "en": "£4.50",
       "ru": "4,50 £",
       "correct": true
      },
      {
       "en": "£14.50",
       "ru": "14,50 £",
       "correct": false
      },
      {
       "en": "£40.50",
       "ru": "40,50 £",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "Marta beams. 'Oh. Thank you, love. Big tip.'",
       "ru": "Марта сияет. «Ой. Спасибо, дорогая. Щедрые чаевые»."
      },
      {
       "who": "narrator",
       "en": "Theo laughs into his cup.",
       "ru": "Тео смеётся в свою чашку."
      },
      {
       "who": "narrator",
       "en": "Marta: 'No, love. How much is it? Four. Fifty.'",
       "ru": "Марта: «Нет, милая. Сколько с тебя? Четыре. Пятьдесят»."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "Marta: 'Perfect. Thank you, love.'",
       "ru": "Марта: «Идеально. Спасибо, дорогая»."
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "And mine? How much is it?",
     "ru": "А мой? Сколько с меня?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta: 'For you, Theo? Double.'",
     "ru": "Марта: «Для тебя, Тео? Вдвойне»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Double. Of course.",
     "ru": "Вдвойне. Ну конечно."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the wall, a big old map.",
     "ru": "На стене — большая старая карта."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Look at the map. Our lake.",
     "ru": "Посмотри на карту. Наше озеро."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "An island. A small tower on it.",
     "ru": "Остров. На нём маленькая башня."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In red pen: 'No boats. Never.'",
     "ru": "Красной ручкой: «Никаких лодок. Никогда»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Tern Island. Nobody goes there. Since 1996.",
     "ru": "Остров Терн. Туда никто не плавает. С 1996-го."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta: 'Everybody here is scared of that island.'",
     "ru": "Марта: «Здесь все боятся этого острова»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I want to see that tower. One day.",
     "ru": "Хочу увидеть эту башню. Когда-нибудь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta: 'Are you serious? No boats. Never.'",
     "ru": "Марта: «Ты серьёзно? Никаких лодок. Никогда»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "That tower has no power. Zero.",
     "ru": "В той башне нет электричества. Совсем."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "But its red light blinks. At 3:03.",
     "ru": "Но красный огонёк мигает. В 3:03."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "3:03. You know that time.",
     "ru": "3:03. Тебе знакомо это время."
    },
    {
     "t": "choice",
     "q_en": "Theo looks at the map. Then at you.",
     "q_ru": "Тео смотрит на карту. Потом на тебя.",
     "options": [
      {
       "en": "Tell him everything. The bus, the voice, the tape.",
       "ru": "Рассказать всё. Автобус, голос, кассету.",
       "flag": "told_all",
       "reply": [
        {
         "who": "narrator",
         "en": "The bus. The radio. Sol's tape. Everything.",
         "ru": "Автобус. Радио. Кассета Сола. Всё."
        },
        {
         "who": "theo",
         "en": "Are you serious?",
         "ru": "Ты серьёзно?"
        },
        {
         "who": "narrator",
         "en": "No jokes now. He listens.",
         "ru": "Больше никаких шуток. Он слушает."
        }
       ]
      },
      {
       "en": "Say only: 'I hear a voice. At 3:03.'",
       "ru": "Сказать только: «Я слышу голос. В 3:03».",
       "flag": "half",
       "reply": [
        {
         "who": "theo",
         "en": "A voice. At 3:03. Ghosts. Great.",
         "ru": "Голос. В 3:03. Привидения. Отлично."
        },
        {
         "who": "narrator",
         "en": "Theo smiles. But his eyes are serious.",
         "ru": "Тео улыбается. Но глаза серьёзные."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Okay. I'm a sound engineer. I record things.",
     "ru": "Так. Я звукорежиссёр. Я всё записываю."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Tonight. 3:03. The station. We listen. We record.",
     "ru": "Сегодня ночью. 3:03. Станция. Слушаем. Записываем."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Marta, can I have one more coffee?",
     "ru": "Марта, можно мне ещё кофе?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta: 'No. Go home, Theo. Sleep.'",
     "ru": "Марта: «Нет. Иди домой, Тео. Спать»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Are you serious? It's six p.m.",
     "ru": "Ты серьёзно? Шесть вечера."
    },
    {
     "t": "scene",
     "place_en": "Dunmere. 2:50 a.m.",
     "place_ru": "Данмир. 2:50 ночи",
     "emoji": "🌫️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "2:50 a.m. Thick fog. Orange lanterns everywhere.",
     "ru": "2:50 ночи. Густой туман. Везде оранжевые фонарики."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You're scared. Just a little.",
     "ru": "Тебе страшно. Совсем чуть-чуть."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your phone buzzes. A text from Theo.",
     "ru": "Телефон вибрирует. Сообщение от Тео."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Left at the church. Then right.",
     "ru": "У церкви налево. Потом направо."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Blue light is the back door.",
     "ru": "Синий огонёк — это задняя дверь."
    },
    {
     "t": "check",
     "q_en": "The church. Three paths. No map. Theo's text says...",
     "q_ru": "Церковь. Три тропинки. Карты нет. В сообщении Тео...",
     "options": [
      {
       "en": "Left, then right",
       "ru": "Налево, потом направо",
       "correct": true
      },
      {
       "en": "Right, then left",
       "ru": "Направо, потом налево",
       "correct": false
      },
      {
       "en": "Straight on",
       "ru": "Прямо",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "The path ends. Black water.",
       "ru": "Тропинка обрывается. Чёрная вода."
      },
      {
       "who": "narrator",
       "en": "On the island, a red light blinks.",
       "ru": "На острове мигает красный огонёк."
      },
      {
       "who": "narrator",
       "en": "Then a splash. Very close.",
       "ru": "И тут — всплеск. Совсем рядом."
      },
      {
       "who": "narrator",
       "en": "You run back. Fast.",
       "ru": "Ты бежишь назад. Быстро."
      },
      {
       "who": "theo",
       "en": "Left. Then right. Blue light, rookie.",
       "ru": "Налево. Потом направо. Синий огонёк, новенькая."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "A small blue light. The back door.",
       "ru": "Маленький синий огонёк. Задняя дверь."
      },
      {
       "who": "theo",
       "en": "There you are. Let's go.",
       "ru": "Вот и ты. Пошли."
      }
     ]
    },
    {
     "t": "scene",
     "place_en": "Radio Dunmere. Studio A",
     "place_ru": "Радио Данмир. Студия A",
     "emoji": "🎧"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Studio A. Dark. One old radio: 98.6.",
     "ru": "Студия A. Темно. Старое радио: 98.6."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Can I have your phone? For recording.",
     "ru": "Дашь свой телефон? Для записи."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Okay. Red button. Let's go.",
     "ru": "Так. Красная кнопка. Поехали."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He shares his headphones with you.",
     "ru": "Он делится с тобой наушниками."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "His shoulder is very close.",
     "ru": "Его плечо совсем рядом."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Listen. Only static. Are you scared?",
     "ru": "Слушай. Только помехи. Тебе страшно?"
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Тео тихо спрашивает, страшно ли тебе. Ответь честно.",
     "hint_ru": "Можно так: Yes / No / A little...",
     "example_en": "Yes. A little scared. Are you?",
     "example_ru": "Да. Немного страшно. А тебе?",
     "accept": [
      "yes",
      "no",
      "little",
      "scared",
      "bit",
      "afraid"
     ],
     "after": [
      {
       "who": "theo",
       "en": "Me? No.",
       "ru": "Мне? Нет."
      },
      {
       "who": "narrator",
       "en": "A long pause.",
       "ru": "Долгая пауза."
      },
      {
       "who": "theo",
       "en": "Yes.",
       "ru": "Да."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "3:03. The needle slides. 98.6... 91... 88.8.",
     "ru": "3:03. Стрелка ползёт. 98.6... 91... 88.8."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I don't touch it. Look. I don't touch it.",
     "ru": "Я её не трогаю. Смотри. Я не трогаю."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Hello, {name}. It's me.",
     "ru": "Привет, {name}. Это я."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your voice. On the radio. Again.",
     "ru": "Твой голос. По радио. Снова."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Hello, Theo.",
     "ru": "Привет, Тео."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo freezes.",
     "ru": "Тео замирает."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Theo, listen. Don't go to the island.",
     "ru": "Тео, послушай. Не плыви на остров."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Not on Friday.",
     "ru": "Только не в пятницу."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Okay. That's not normal.",
     "ru": "Так. Это ненормально."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "That's YOUR voice, {name}.",
     "ru": "Это ТВОЙ голос, {name}."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Not 'rookie'. {name}.",
     "ru": "Не «новенькая». А {name}."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Like Sol's tape. The same voice.",
     "ru": "Как на кассете Сола. Тот же голос.",
     "if": "told_all"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Are you serious? It knows my name.",
     "ru": "Ты серьёзно? Оно знает моё имя.",
     "if": "half"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Now you tell him everything.",
     "ru": "Теперь ты рассказываешь ему всё.",
     "if": "half"
    },
    {
     "t": "check",
     "q_en": "Theo, white: 'Don't go... where?'",
     "q_ru": "Тео, бледный: «Не плыви... куда?»",
     "options": [
      {
       "en": "To the island",
       "ru": "На остров",
       "correct": true
      },
      {
       "en": "To the lake",
       "ru": "К озеру",
       "correct": false
      },
      {
       "en": "To the station",
       "ru": "На станцию",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "theo",
       "en": "No. Listen again, {name}.",
       "ru": "Нет. Послушай ещё раз, {name}."
      },
      {
       "who": "voice",
       "en": "Don't go to the island. Not on Friday.",
       "ru": "Не плыви на остров. Только не в пятницу."
      }
     ],
     "right": [
      {
       "who": "theo",
       "en": "The island. Friday. Which Friday?",
       "ru": "Остров. Пятница. Какая пятница?"
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Still 3:03. Under the static, another voice.",
     "ru": "Всё ещё 3:03. Под шумом — другой голос."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Pip? Pip, is that you?",
     "ru": "Пип? Пип, это ты?"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Pip? Our Pip?",
     "ru": "Пип? Наша Пип?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The studio phone rings.",
     "ru": "Звонит студийный телефон."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "{name}? Love? I can hear it. On my radio.",
     "ru": "{name}? Милая? Я это слышу. По своему радио."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip is crying.",
     "ru": "Пип плачет."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Turn it off. Please. That's my sister.",
     "ru": "Выключи. Пожалуйста. Это моя сестра."
    }
   ],
   "cliff_en": "Turn it off. Please. That's my sister.",
   "cliff_ru": "Выключи. Пожалуйста. Это моя сестра.",
   "teaser_ru": "В следующей серии: Пип расскажет правду о сестре, а старая кассета назовёт имя, которого там быть не может.",
   "claude_scene": "Role-play as Theo Marsh, 27, night host and sound engineer, in dark Studio A of Radio Dunmere at 3:05 a.m. A minute ago the old radio slid to 88.8 by itself and the player's own voice said: 'Hello, Theo. Don't go to the island. Not on Friday.' Then a second, older voice asked for Pip, and Pip called the studio, crying: 'Turn it off. That's my sister.' Theo is shaken but hides it behind short deadpan jokes, then says one true thing. He now calls her by her name, never 'rookie'. Speak very simple English (low A2): max 7 words per sentence, present simple, can, Let's..., no past tense, no idioms, slowly. Ask her simple, natural questions with feeling, one at a time: Are you okay? Are you scared? Can I have your phone? Is it your voice? What do we do now? Let's go to Pip? Be warm, a little funny, a little scared. Never correct her grammar; if she is stuck, offer two short options she can repeat."
  },
  {
   "id": "s1e4",
   "n": 4,
   "title": "Pip's Tape",
   "title_ru": "Плёнка Пип",
   "logline_ru": "Пип рассказывает, как тридцать лет назад её сестра исчезла прямо в эфире. На старой кассете звучит голос, которого там быть не может.",
   "words": [
    {
     "en": "What's going on?",
     "ru": "Что происходит? — Pip, what's going on? Так спрашивают, когда видят: что-то не так."
    },
    {
     "en": "sister",
     "ru": "сестра — Nora was my sister. Big sister — старшая сестра."
    },
    {
     "en": "disappear",
     "ru": "исчезнуть, пропасть — She disappeared. Она исчезла. Про людей и вещи."
    },
    {
     "en": "I'm sorry",
     "ru": "Мне жаль / Прости — I'm sorry, Pip. И сочувствие, и извинение."
    },
    {
     "en": "I believe you",
     "ru": "Я тебе верю — I believe you, love. Говорят, когда в историю трудно поверить."
    },
    {
     "en": "I'm on my way",
     "ru": "Я уже еду / уже иду — Sorry, Sol! I'm on my way. Так говорят, когда опаздывают и уже в пути (даже если ещё в пижаме)."
    },
    {
     "en": "a long time ago",
     "ru": "очень давно — That was a long time ago. Про то, что было много лет назад."
    },
    {
     "en": "last night",
     "ru": "вчера ночью / вчера вечером — Last night, on the radio... Ставится в начало или в конец фразы."
    }
   ],
   "recap": [
    {
     "who": "narrator",
     "en": "Marta's cafe. A map. An island.",
     "ru": "Кафе Марты. Карта. Остров."
    },
    {
     "who": "theo",
     "en": "Let's go. 3:03. We listen. Are you scared?",
     "ru": "Идём. 3:03. Слушаем. Тебе страшно?"
    },
    {
     "who": "voice",
     "en": "Hello, Theo. Don't go to the island. Not on Friday.",
     "ru": "Привет, Тео. Не плыви на остров. Только не в пятницу."
    },
    {
     "who": "theo",
     "en": "Are you serious? That's YOUR voice, {name}.",
     "ru": "Ты серьёзно? Это ТВОЙ голос, {name}."
    },
    {
     "who": "nora",
     "en": "Pip? Pip, is that you?",
     "ru": "Пип? Пип, это ты?"
    }
   ],
   "recap_check": {
    "t": "check",
    "q_en": "The voice said: don't go to the island. Not on...?",
    "q_ru": "Голос сказал: не плыви на остров. Только не в...?",
    "options": [
     {
      "en": "Friday",
      "ru": "пятницу",
      "correct": true
     },
     {
      "en": "Sunday",
      "ru": "воскресенье",
      "correct": false
     },
     {
      "en": "Monday",
      "ru": "понедельник",
      "correct": false
     }
    ],
    "wrong": [
     {
      "who": "narrator",
      "en": "Static. The radio turns on. By itself.",
      "ru": "Помехи. Радио включается. Само."
     },
     {
      "who": "voice",
      "en": "Theo... not on Friday. Friday.",
      "ru": "Тео... только не в пятницу. В пятницу."
     }
    ],
    "right": [
     {
      "who": "narrator",
      "en": "Friday. You remember.",
      "ru": "Пятница. Ты запомнила."
     }
    ]
   },
   "beats": [
    {
     "t": "scene",
     "place_en": "The Blue Door. Kitchen",
     "place_ru": "Синяя дверь. Кухня",
     "emoji": "🥞"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Saturday morning. You didn't sleep.",
     "ru": "Субботнее утро. Ты так и не уснула."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Last night, the radio said: “Pip?”",
     "ru": "Вчера ночью радио сказало: «Пип?»"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "At four, you came home. Pip was awake.",
     "ru": "В четыре ты пришла домой. Пип не спала."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You said everything. She said nothing.",
     "ru": "Ты рассказала всё. Она промолчала."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Now Pip is making pancakes.",
     "ru": "А теперь Пип печёт блинчики."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Morning, love. Pancakes. Very black pancakes.",
     "ru": "Доброе утро, милая. Блинчики. Очень чёрные блинчики."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Her eyes are red. Biscuit watches from the fridge.",
     "ru": "Глаза у неё красные. Бисквит смотрит с холодильника."
    },
    {
     "t": "say",
     "to": "pip",
     "task_ru": "Спроси Пип, всё ли с ней в порядке и что происходит.",
     "hint_ru": "Начни с Pip, are you okay?…",
     "example_en": "Pip, are you okay? What's going on?",
     "example_ru": "Пип, ты в порядке? Что происходит?",
     "accept": [
      "okay",
      "ok",
      "going on",
      "what's wrong",
      "whats wrong",
      "fine",
      "are you",
      "pip"
     ],
     "after": [
      {
       "who": "pip",
       "en": "Me? I'm fine. I'm making pancakes.",
       "ru": "Я? Всё хорошо. Я пеку блинчики."
      },
      {
       "who": "narrator",
       "en": "The pancake is smoking.",
       "ru": "Блинчик дымится."
      },
      {
       "who": "pip",
       "en": "Okay. I'm not fine.",
       "ru": "Ладно. Не хорошо."
      }
     ]
    },
    {
     "t": "choice",
     "q_en": "Pip is not okay. What do you do?",
     "q_ru": "Пип плохо. Что ты сделаешь?",
     "options": [
      {
       "en": "Please, Pip. Tell me.",
       "ru": "Пожалуйста, Пип. Расскажи мне.",
       "flag": "asked",
       "reply": [
        {
         "who": "pip",
         "en": "Oh, love. Tea first. Then problems.",
         "ru": "Ох, милая. Сначала чай. Потом проблемы."
        },
        {
         "who": "pip",
         "en": "No. Not today. Problems first.",
         "ru": "Нет. Не сегодня. Сначала проблемы."
        }
       ]
      },
      {
       "en": "Say nothing. Take the pan. Clean it with her.",
       "ru": "Промолчать. Взять сковородку и отмыть её вместе с ней.",
       "flag": "listener",
       "reply": [
        {
         "who": "narrator",
         "en": "You take the pan. You clean it. Together.",
         "ru": "Ты берёшь сковородку. Вы отмываете её. Вместе."
        },
        {
         "who": "narrator",
         "en": "A long minute. No words.",
         "ru": "Долгая минута. Без слов."
        },
        {
         "who": "pip",
         "en": "You're a good listener, love.",
         "ru": "Ты умеешь слушать, солнышко."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip sits down. She takes off her glasses.",
     "ru": "Пип садится. Снимает очки."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Nora was my sister. My big sister.",
     "ru": "Нора была моей сестрой. Старшей сестрой."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the fridge: a photo. Two sisters, laughing.",
     "ru": "На холодильнике фото. Две сестры смеются."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the back: “Nora & Pip, 1995.”",
     "ru": "На обороте: «Нора и Пип, 1995»."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "She was a radio star. My sister.",
     "ru": "Она была звездой радио. Моя сестра."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Lantern Night, 1996. She went to the island.",
     "ru": "Ночь фонарей, 1996-й. Она поплыла на остров."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Her show was live. From the tower.",
     "ru": "Её шоу шло в прямом эфире. Из башни."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "At 3:03, she stopped talking.",
     "ru": "В 3:03 она замолчала."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "She disappeared. She just... disappeared.",
     "ru": "Она исчезла. Просто... исчезла."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "In the morning, the boat came back. Empty.",
     "ru": "Утром лодка вернулась. Пустая."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "An old newspaper: “RADIO STAR DISAPPEARS.”",
     "ru": "Старая газета: «ЗВЕЗДА РАДИО ИСЧЕЗЛА»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "3:03. Thirty years ago.",
     "ru": "3:03. Тридцать лет назад."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You say quietly: “I'm sorry, Pip.”",
     "ru": "Ты тихо говоришь: «Мне так жаль, Пип»."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "That was a long time ago, love.",
     "ru": "Это было очень давно, милая."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "But last night... her voice. On the radio.",
     "ru": "Но вчера ночью... её голос. По радио."
    },
    {
     "t": "check",
     "q_en": "Pip, quietly: “Last night. On the radio. What did she say?”",
     "q_ru": "Пип тихо: «Вчера ночью. По радио. Что она сказала?»",
     "options": [
      {
       "en": "“Pip, is that you?”",
       "ru": "«Пип, это ты?»",
       "correct": true
      },
      {
       "en": "“Turn it off.”",
       "ru": "«Выключи это».",
       "correct": false
      },
      {
       "en": "“Don't go to the island.”",
       "ru": "«Не плыви на остров».",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "The kitchen radio clicks. Nobody is near it.",
       "ru": "Радио на кухне щёлкает. Рядом никого."
      },
      {
       "who": "pip",
       "en": "No, love. She said my name. Pip... is that... you?",
       "ru": "Нет, милая. Она назвала моё имя. Пип... это... ты?"
      }
     ],
     "right": [
      {
       "who": "pip",
       "en": "“Pip, is that you?” Yes. It's me, Nora.",
       "ru": "«Пип, это ты?» Да. Это я, Нора."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip covers her mouth. Laughing and crying.",
     "ru": "Пип закрывает рот рукой. Смеётся и плачет."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "I believe you, love. About the radio.",
     "ru": "Я тебе верю, милая. Про радио."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "I believe you. Every word.",
     "ru": "Я тебе верю. Каждому слову."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "But you don't tell her about YOUR voice.",
     "ru": "Но про ТВОЙ голос ты молчишь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your phone rings. SOL BECKER.",
     "ru": "Звонит телефон. СОЛ БЕККЕР."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Where are you? Meeting! Now!",
     "ru": "Ты где? Совещание! Сейчас же!"
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Sol Becker? It's Saturday!",
     "ru": "Сол Беккер? Сегодня суббота!"
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Radio has no Saturdays.",
     "ru": "У радио не бывает суббот."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You're in pyjamas. With a black pancake.",
     "ru": "Ты в пижаме. С чёрным блинчиком в руке."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Say “I'm on my way.” Everybody says it.",
     "ru": "Скажи: «Я уже еду». Все так говорят."
    },
    {
     "t": "say",
     "to": "sol",
     "task_ru": "Извинись перед Солом и скажи, что ты уже едешь.",
     "hint_ru": "Sorry, Sol! I'm on my…",
     "example_en": "Sorry, Sol! I'm on my way.",
     "example_ru": "Прости, Сол! Я уже еду.",
     "accept": [
      "sorry",
      "on my way",
      "my way",
      "on the way",
      "coming",
      "i'm coming",
      "im coming",
      "going"
     ],
     "after": [
      {
       "who": "narrator",
       "en": "Biscuit meows. Very loudly.",
       "ru": "Бисквит мяукает. Очень громко."
      },
      {
       "who": "sol",
       "en": "On your way? I can hear a cat.",
       "ru": "Уже едешь? Я слышу кошку."
      },
      {
       "who": "sol",
       "en": "Fine. Video call. Two minutes.",
       "ru": "Ладно. Видеозвонок. Через две минуты."
      }
     ]
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Okay. Three things.",
     "ru": "Значит так. Три пункта."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "One. The Lantern Night poster. Today. Two...",
     "ru": "Первое. Афиша Ночи фонарей. Сегодня. Второе..."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Biscuit is walking across the laptop.",
     "ru": "Бисквит идёт прямо по ноутбуку."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "{name}? What's going on there?",
     "ru": "{name}? Что там у вас происходит?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Biscuit sits on the keyboard. CALL ENDED.",
     "ru": "Бисквит садится на клавиатуру. ЗВОНОК ЗАВЕРШЁН."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip laughs. A real laugh. The first today.",
     "ru": "Пип смеётся. По-настоящему. Впервые за день."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Good cat. Good, good cat.",
     "ru": "Хороший кот. Хороший, хороший кот."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Two texts. Sol: “THREE: be on time.”",
     "ru": "Два сообщения. Сол: «ТРЕТЬЕ: не опаздывать»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Last night... wow. Are you okay? Coffee later?",
     "ru": "Вчерашняя ночь... да уж. Ты как? Кофе потом?"
    },
    {
     "t": "scene",
     "place_en": "Pip's Attic",
     "place_ru": "Чердак Пип",
     "emoji": "📼"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Evening. Fog. Pip opens the attic.",
     "ru": "Вечер. Туман. Пип открывает чердак."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A black jacket. Old records. A poster.",
     "ru": "Чёрная куртка. Старые пластинки. Плакат."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The poster: “NORA AT NIGHT - 98.6”.",
     "ru": "На плакате: «НОРА НОЧЬЮ — 98.6»."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Her jacket. She was so cool, love.",
     "ru": "Её куртка. Она была такая крутая, милая."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "I keep everything. Here, nothing disappears.",
     "ru": "Я храню всё. Здесь ничего не исчезает."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In a box: an old tape. “Lantern Night 96.”",
     "ru": "В коробке старая кассета. «Ночь фонарей 96»."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "My tape. From that night. From the radio.",
     "ru": "Моя кассета. С той ночи. Записала с радио."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "I listened once. Only once.",
     "ru": "Я слушала её один раз. Только один."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "A long time ago. A long time ago.",
     "ru": "Очень давно. Очень-очень давно."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The old tape player. Pip's hands are shaking.",
     "ru": "Старый магнитофон. У Пип дрожат руки."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "I'm sorry, love. My hands.",
     "ru": "Прости, милая. Руки не слушаются."
    },
    {
     "t": "choice",
     "q_en": "Pip can't press play. What do you do?",
     "q_ru": "Пип не может нажать «плей». Что ты сделаешь?",
     "options": [
      {
       "en": "Hold her hand.",
       "ru": "Взять её за руку.",
       "flag": "held_hand",
       "reply": [
        {
         "who": "pip",
         "en": "Thank you, love. Okay. Okay.",
         "ru": "Спасибо, милая. Так. Так."
        },
        {
         "who": "narrator",
         "en": "She presses play. Her hand is in yours.",
         "ru": "Она нажимает «плей». Её рука в твоей."
        }
       ]
      },
      {
       "en": "Press play for her.",
       "ru": "Нажать «плей» за неё.",
       "flag": "pressed_play",
       "reply": [
        {
         "who": "narrator",
         "en": "You press play. Pip closes her eyes.",
         "ru": "Ты нажимаешь «плей». Пип закрывает глаза."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Click. Soft music. Then a voice.",
     "ru": "Щелчок. Тихая музыка. Потом голос."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "This is Nora. It's 2:58.",
     "ru": "Это Нора. Сейчас 2:58."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "I'm in the tower. Hello, Dunmere.",
     "ru": "Я в башне. Привет, Данмир."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Pip, put the kettle on. I'm back at four.",
     "ru": "Пип, ставь чайник. Я вернусь в четыре."
    },
    {
     "t": "check",
     "q_en": "Pip whispers: “What time? She's back at... when?”",
     "q_ru": "Пип шепчет: «Во сколько? Она вернётся... когда?»",
     "options": [
      {
       "en": "At 3:03",
       "ru": "В 3:03",
       "correct": false
      },
      {
       "en": "At four",
       "ru": "В четыре",
       "correct": true
      },
      {
       "en": "At 2:58",
       "ru": "В 2:58",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "The tape goes back. By itself.",
       "ru": "Плёнка перематывается назад. Сама."
      },
      {
       "who": "nora",
       "en": "Pip... put the kettle on. I'm back... at four.",
       "ru": "Пип... ставь чайник. Я вернусь... в четыре."
      }
     ],
     "right": [
      {
       "who": "pip",
       "en": "Four. She never came at four.",
       "ru": "В четыре. Но в четыре она так и не пришла."
      }
     ]
    },
    {
     "t": "line",
     "who": "pip",
     "en": "I was in the kitchen. All night. With tea.",
     "ru": "Я сидела на кухне. Всю ночь. С чаем."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the tape, the music stops. Static.",
     "ru": "На плёнке музыка обрывается. Помехи."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Wait. I can hear voices. So many voices.",
     "ru": "Подождите. Я слышу голоса. Так много голосов."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "There's a girl. She's crying.",
     "ru": "Там девушка. Она плачет."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "She says... Theo. Theo, come back.",
     "ru": "Она говорит... Тео. Тео, вернись."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Click. The tape stops.",
     "ru": "Щелчок. Кассета останавливается."
    },
    {
     "t": "line",
     "who": "narrator",
     "if": "held_hand",
     "en": "Pip's hand is cold in yours.",
     "ru": "Рука Пип холодная в твоей."
    },
    {
     "t": "line",
     "who": "narrator",
     "ifnot": "held_hand",
     "en": "Pip takes your hand. It's cold.",
     "ru": "Пип берёт тебя за руку. Рука холодная."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Theo. Thirty years, one question. Who is Theo?",
     "ru": "Тео. Тридцать лет один вопрос. Кто такой Тео?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "This tape is thirty years old. Theo is twenty-seven.",
     "ru": "Этой кассете тридцать лет. А Тео двадцать семь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "And the crying girl has your voice.",
     "ru": "А у плачущей девушки — твой голос."
    }
   ],
   "cliff_en": "And the crying girl has your voice.",
   "cliff_ru": "А у плачущей девушки — твой голос.",
   "teaser_ru": "В следующей серии: первое интервью, ужасная ошибка в соцсетях и начальник, который тайно удаляет 1996 год.",
   "claude_scene": "Late Saturday night in Pip's warm kitchen at the Blue Door, ten minutes after the tape. Pip (55, round glasses, calls you 'love', says important things twice, talks to Biscuit the cat) makes tea with shaking hands. She gently asks about last night at the station and about the name on the tape: 'Theo. Do you know a Theo, love?' The player decides how much to tell her (she has not told Pip that the voice on the radio is her own). Keep every sentence under 8 words, use was/were and a few simple past verbs (went, came, saw, said, stopped, didn't), and stay warm, a little sad, a little funny."
  },
  {
   "id": "s1e5",
   "n": 5,
   "title": "On Air",
   "title_ru": "В эфире",
   "logline_ru": "Интервью, дедлайны и неловкая ошибка в соцсетях. Сол удаляет архив 1996 года, а Голос впервые звучит испуганно.",
   "words": [
    {
     "en": "deadline",
     "ru": "крайний срок, дедлайн · «The deadline is six.» · так говорят на работе: к этому времени всё должно быть готово"
    },
    {
     "en": "interview",
     "ru": "интервью · «You're going to record five interviews.» · и у журналистов, и на собеседовании при приёме на работу"
    },
    {
     "en": "upload",
     "ru": "загрузить, выложить · «You upload the first interview.» · про фото, видео и файлы в интернете"
    },
    {
     "en": "email",
     "ru": "электронное письмо · «An email from Sol? He knows.» · по-английски письмо на почту — просто an email"
    },
    {
     "en": "mistake",
     "ru": "ошибка · «Big mistake, {name}.» · ошибиться — make a mistake"
    },
    {
     "en": "Can I ask you something?",
     "ru": "Можно тебя кое о чём спросить? · «Sol, can I ask you something?» · так начинают важный или неловкий разговор"
    },
    {
     "en": "I'm looking for...",
     "ru": "Я ищу… · «I'm looking for 1996.» · после for — то, что ищешь"
    },
    {
     "en": "on air",
     "ru": "в эфире · «I'm not on air. Just us.» · про прямой эфир на радио и ТВ; в студии горит лампа ON AIR"
    }
   ],
   "recap": [
    {
     "who": "pip",
     "en": "Nora was my sister. She disappeared.",
     "ru": "Нора была моей сестрой. Она исчезла."
    },
    {
     "who": "narrator",
     "en": "Lantern Night, 1996. A long time ago.",
     "ru": "Ночь фонарей, 1996. Давным-давно."
    },
    {
     "who": "pip",
     "en": "Last night... her voice. On the radio.",
     "ru": "А вчера ночью… её голос. По радио."
    },
    {
     "who": "pip",
     "en": "I believe you, love. Every word.",
     "ru": "Я тебе верю, милая. Каждому слову."
    },
    {
     "who": "nora",
     "en": "There's a girl. She's crying. She says, Theo.",
     "ru": "Там девушка. Она плачет. Она говорит: «Тео»."
    },
    {
     "who": "narrator",
     "en": "And the crying girl has your voice.",
     "ru": "А у плачущей девушки — твой голос."
    }
   ],
   "recap_check": {
    "t": "check",
    "q_en": "The crying girl on Pip's tape. Whose voice is it?",
    "q_ru": "Плачущая девушка на кассете Пип. Чей это голос?",
    "options": [
     {
      "en": "Your voice",
      "ru": "Твой голос",
      "correct": true
     },
     {
      "en": "Pip's voice",
      "ru": "Голос Пип",
      "correct": false
     },
     {
      "en": "Nora's voice",
      "ru": "Голос Норы",
      "correct": false
     }
    ],
    "wrong": [
     {
      "who": "nora",
      "en": "She says... Theo. Theo, come back.",
      "ru": "Она говорит… Тео. Тео, вернись."
     },
     {
      "who": "narrator",
      "en": "Listen again. You know this voice.",
      "ru": "Послушай ещё раз. Ты знаешь этот голос."
     }
    ],
    "right": [
     {
      "who": "narrator",
      "en": "Your voice. On a tape from 1996.",
      "ru": "Твой голос. На кассете 1996 года."
     }
    ]
   },
   "beats": [
    {
     "t": "scene",
     "place_en": "Radio Dunmere, 8 a.m.",
     "place_ru": "Радио Данмир, 8 утра",
     "emoji": "📻"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Monday. 8 a.m. You didn't sleep.",
     "ru": "Понедельник. 8 утра. Ты так и не уснула."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In your headphones: Pip's tape. Again.",
     "ru": "В наушниках — кассета Пип. Снова."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "There's a girl. She's crying.",
     "ru": "Там девушка. Она плачет."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "She says... Theo. Theo, come back.",
     "ru": "Она говорит… Тео. Тео, вернись."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your voice. Thirty years ago.",
     "ru": "Твой голос. Тридцать лет назад."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A hand on your shoulder. You jump.",
     "ru": "Чья-то рука на плече. Ты подскакиваешь."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "It's me. Only me. Coffee.",
     "ru": "Это я. Всего лишь я. Кофе."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Your face is very serious. Like Sol's.",
     "ru": "У тебя очень серьёзное лицо. Как у Сола."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Can I ask you something? What's going on?",
     "ru": "Можно тебя кое о чём спросить? Что происходит?"
    },
    {
     "t": "choice",
     "q_en": "Tell Theo about the tape?",
     "q_ru": "Рассказать Тео про кассету?",
     "options": [
      {
       "en": "\"A girl on the tape says your name.\"",
       "ru": "«Девушка на кассете называет твоё имя».",
       "flag": "told_theo",
       "reply": [
        {
         "who": "narrator",
         "en": "You give him the headphones. He listens.",
         "ru": "Ты отдаёшь ему наушники. Он слушает."
        },
        {
         "who": "narrator",
         "en": "He's quiet. Very quiet.",
         "ru": "Он молчит. Долго."
        },
        {
         "who": "narrator",
         "en": "Then he smiles. Too wide.",
         "ru": "Потом улыбается. Слишком широко."
        },
        {
         "who": "theo",
         "en": "I'm famous in 1996. Cool.",
         "ru": "Я знаменит в 1996-м. Круто."
        }
       ]
      },
      {
       "en": "\"Nothing. I'm just tired.\"",
       "ru": "«Ничего. Просто устала».",
       "flag": "kept_secret",
       "reply": [
        {
         "who": "narrator",
         "en": "You hide your phone. You want to protect him.",
         "ru": "Ты прячешь телефон. Ты хочешь его защитить."
        },
        {
         "who": "theo",
         "en": "Tired. Copy that. Drink your coffee.",
         "ru": "Устала. Принял. Пей кофе."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Okay. Not cool. I'm a little scared.",
     "ru": "Ладно. Не круто. Мне немного страшно.",
     "if": "told_theo"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "In 1996, I wasn't here. Anywhere.",
     "ru": "В 1996-м меня ещё не было. Нигде.",
     "if": "told_theo"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He believes you. Almost.",
     "ru": "Он тебе верит. Почти.",
     "if": "kept_secret"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The door opens. Sol. His third coffee. No smile.",
     "ru": "Дверь открывается. Сол. Третий кофе. Ни тени улыбки."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Okay. Three things.",
     "ru": "Значит так. Три пункта."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "One. You're going to record five interviews.",
     "ru": "Первое. Ты запишешь пять интервью."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Two. You're going to upload them.",
     "ru": "Второе. Ты их выложишь."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Three. The deadline is six. Six p.m.",
     "ru": "Третье. Дедлайн — шесть. Шесть вечера."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Deadline. His favorite word. After 'no'.",
     "ru": "Дедлайн. Его любимое слово. После «нет»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol leaves. Theo falls asleep on the sofa.",
     "ru": "Сол уходит. Тео засыпает на диване."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Mouth open. You take a photo. Just for fun.",
     "ru": "С открытым ртом. Ты его фотографируешь. Просто так."
    },
    {
     "t": "scene",
     "place_en": "The Lantern Market",
     "place_ru": "Ярмарка фонарей",
     "emoji": "🏮"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Fog. Music. Hundreds of paper lanterns.",
     "ru": "Туман. Музыка. Сотни бумажных фонариков."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your first real interview. In English.",
     "ru": "Твоё первое настоящее интервью. На английском."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Love! Here. I'm looking for Marta. There she is.",
     "ru": "Милая! Сюда. Я ищу Марту. Вот она."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A woman with red lanterns. Pip has Biscuit in her bag.",
     "ru": "Женщина с красными фонарями. У Пип в сумке — Бисквит."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Are we on air? Hello, Dunmere!",
     "ru": "Мы в эфире? Привет, Данмир!"
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Biscuit, shh. We're working.",
     "ru": "Бисквит, тсс. Мы работаем."
    },
    {
     "t": "say",
     "to": "",
     "task_ru": "Начни интервью с Мартой: поздоровайся, спроси, как её зовут и любит ли она Ночь фонарей.",
     "hint_ru": "What's your name? Do you like...?",
     "example_en": "Hi! What's your name? Do you like Lantern Night?",
     "example_ru": "Здравствуйте! Как вас зовут? Вам нравится Ночь фонарей?",
     "accept": [
      "name",
      "like",
      "lantern",
      "night",
      "hello",
      "hi",
      "marta"
     ],
     "after": [
      {
       "who": "narrator",
       "en": "Marta smiles at your phone.",
       "ru": "Марта улыбается в твой телефон."
      },
      {
       "who": "narrator",
       "en": "Marta says, 'I'm Marta. I'm sixty-two.'",
       "ru": "Марта говорит: «Я Марта. Мне шестьдесят два»."
      },
      {
       "who": "narrator",
       "en": "'I'm making lanterns. I love this night.'",
       "ru": "«Я делаю фонари. Я обожаю эту ночь»."
      },
      {
       "who": "pip",
       "en": "Sixty-two, love. Sixty-two. She looks fifty.",
       "ru": "Шестьдесят два, милая. Шестьдесят два. А выглядит на пятьдесят."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You turn the phone to Pip. 'And you?'",
     "ru": "Ты поворачиваешь телефон к Пип. «А вы?»"
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Me? No. I don't love this night.",
     "ru": "Я? Нет. Я эту ночь не люблю."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Not since Nora. Not since my sister.",
     "ru": "С тех пор как Нора… С тех пор как сестра…"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip looks at the lanterns. Then at you.",
     "ru": "Пип смотрит на фонари. Потом на тебя."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Oh, love. Tea first. Then problems.",
     "ru": "Ох, милая. Сначала чай. Потом проблемы."
    },
    {
     "t": "check",
     "q_en": "Write the caption for Marta's photo.",
     "q_ru": "Подпиши фото Марты.",
     "emoji": "📸",
     "options": [
      {
       "en": "Marta, 62",
       "ru": "Марта, 62",
       "correct": true
      },
      {
       "en": "Martha, 26",
       "ru": "Марфа, 26",
       "correct": false
      },
      {
       "en": "Mara, 62",
       "ru": "Мара, 62",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "Marta reads your screen. One eyebrow goes up.",
       "ru": "Марта читает с экрана. Одна бровь ползёт вверх."
      },
      {
       "who": "pip",
       "en": "Marta, love. M-A-R-T-A.",
       "ru": "Марта, милая. М-А-Р-Т-А."
      },
      {
       "who": "pip",
       "en": "Sixty-two. Six, two. Sixty-two.",
       "ru": "Шестьдесят два. Шесть, два. Шестьдесят два."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "'Marta, 62.' Marta nods. Perfect.",
       "ru": "«Марта, 62». Марта кивает. Идеально."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Four more interviews. A baker. A fisherman. Two kids.",
     "ru": "Ещё четыре интервью. Пекарь. Рыбак. Двое детей."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On your phone: 'Interviews: 5/5.'",
     "ru": "На телефоне: «Интервью: 5/5»."
    },
    {
     "t": "scene",
     "place_en": "Radio Dunmere, 3:30 p.m.",
     "place_ru": "Радио Данмир, 15:30",
     "emoji": "📱"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You upload the first interview. Posted.",
     "ru": "Ты выкладываешь первое интервью. Опубликовано."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Likes. Fifteen. Fifty. Two hundred.",
     "ru": "Лайки. Пятнадцать. Пятьдесят. Двести."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then you look at the photo.",
     "ru": "А потом ты смотришь на фото."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "It's not Marta. It's Theo. Asleep. Mouth open.",
     "ru": "Это не Марта. Это Тео. Спит. С открытым ртом."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "And under it: 'Marta, 62.'",
     "ru": "А под фото: «Марта, 62»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A mistake. A very big mistake.",
     "ru": "Ошибка. Очень большая ошибка."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo reads the comments. He doesn't smile.",
     "ru": "Тео читает комментарии. Без улыбки."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "'Marta looks tired.' 'Marta, call me.' Nice.",
     "ru": "«Марта выглядит уставшей». «Марта, позвони мне». Мило."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Big mistake, {name}. I'm famous now. Thank you.",
     "ru": "Большая ошибка, {name}. Теперь я знаменит. Спасибо."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "A mistake? Four hundred likes. Our record. Keep it.",
     "ru": "Ошибка? Четыреста лайков. Наш рекорд. Оставь."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Sol is happy. Okay. That's not normal.",
     "ru": "Сол доволен. Так. Это ненормально."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Later. You walk past the archive.",
     "ru": "Позже. Ты проходишь мимо архива."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol is at the old computer. Alone.",
     "ru": "Сол сидит за старым компьютером. Один."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the screen: 'NORA_1996. Delete? YES.'",
     "ru": "На экране: «NORA_1996. Удалить? ДА»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He's deleting Nora. File after file. Fast.",
     "ru": "Он стирает Нору. Файл за файлом. Быстро."
    },
    {
     "t": "choice",
     "q_en": "What do you do?",
     "q_ru": "Что ты сделаешь?",
     "options": [
      {
       "en": "Go in. Ask Sol.",
       "ru": "Зайти. Спросить Сола.",
       "flag": "asked_sol",
       "reply": [
        {
         "who": "narrator",
         "en": "You knock. Sol jumps. The screen goes black.",
         "ru": "Ты стучишь. Сол вздрагивает. Экран гаснет."
        }
       ]
      },
      {
       "en": "Wait. Then look in his office.",
       "ru": "Подождать. Потом заглянуть к нему в кабинет.",
       "flag": "drawer",
       "reply": [
        {
         "who": "narrator",
         "en": "You wait. Sol leaves. His office is empty.",
         "ru": "Ты ждёшь. Сол уходит. Кабинет пуст."
        },
        {
         "who": "narrator",
         "en": "Under his coffee mug: a small key.",
         "ru": "Под его кружкой — маленький ключ."
        },
        {
         "who": "narrator",
         "en": "The key opens his desk drawer.",
         "ru": "Ключ открывает ящик стола."
        },
        {
         "who": "theo",
         "en": "{name}? What are you doing?",
         "ru": "{name}? Ты что делаешь?"
        }
       ]
      }
     ]
    },
    {
     "t": "say",
     "if": "asked_sol",
     "to": "sol",
     "task_ru": "Спроси Сола, можно ли задать ему вопрос.",
     "hint_ru": "Sol, can I ask you...?",
     "example_en": "Sol, can I ask you something?",
     "example_ru": "Сол, можно тебя кое о чём спросить?",
     "accept": [
      "can i ask",
      "ask",
      "question",
      "something",
      "1996",
      "nora"
     ],
     "after": [
      {
       "who": "sol",
       "en": "No.",
       "ru": "Нет."
      },
      {
       "who": "sol",
       "en": "We are not going to talk about 1996.",
       "ru": "Мы не будем говорить о 1996-м."
      },
      {
       "who": "sol",
       "en": "Is that clear?",
       "ru": "Это ясно?"
      },
      {
       "who": "narrator",
       "en": "Sol leaves. His computer is still on.",
       "ru": "Сол уходит. А компьютер всё ещё включён."
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I saw everything. Move. I know computers.",
     "ru": "Я всё видел. Подвинься. Я в компьютерах разбираюсь.",
     "if": "asked_sol"
    },
    {
     "t": "say",
     "if": "drawer",
     "to": "theo",
     "task_ru": "Тео застал тебя у ящика Сола. Скажи, что ты кое-что ищешь, и попроси помочь.",
     "hint_ru": "I'm looking for...",
     "example_en": "I'm looking for something. Help me.",
     "example_ru": "Я кое-что ищу. Помоги мне.",
     "accept": [
      "looking for",
      "look for",
      "looking",
      "something",
      "help",
      "search"
     ],
     "after": [
      {
       "who": "theo",
       "en": "Me too. I'm looking for coffee. Always.",
       "ru": "Я тоже. Я ищу кофе. Всегда."
      },
      {
       "who": "narrator",
       "en": "In the drawer: a yellow note. 'Password: Nora.'",
       "ru": "В ящике — жёлтый стикер. «Пароль: Nora»."
      },
      {
       "who": "theo",
       "en": "His password is Nora. Okay. Give me that.",
       "ru": "Его пароль — Нора. Так. Дай-ка сюда."
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Look. The files are in the bin. Not gone.",
     "ru": "Смотри. Файлы в корзине. Они не пропали."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I'm looking for 1996. Wait...",
     "ru": "Ищу 1996-й. Подожди…"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "One file comes back. 'STAFF_1996.'",
     "ru": "Один файл возвращается. «STAFF_1996»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "An old photo. Nora, and a thin boy.",
     "ru": "Старое фото. Нора и худой мальчик."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "'Nora Calloway, night host.'",
     "ru": "«Нора Кэллоуэй, ночная ведущая»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "'Sol Becker, seventeen, intern.'",
     "ru": "«Сол Беккер, семнадцать лет, стажёр»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Seventeen. Sol was seventeen. And he was here.",
     "ru": "Семнадцать. Солу было семнадцать. И он был здесь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol was here. That night. With Nora.",
     "ru": "Сол был здесь. В ту ночь. С Норой."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You take a photo of the screen. Then: ding.",
     "ru": "Ты фотографируешь экран. И тут: дзынь."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "An email from Sol? He knows. We're dead.",
     "ru": "Письмо от Сола? Он знает. Нам конец."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The email. Subject: IMPORTANT.",
     "ru": "Письмо. Тема: ВАЖНО."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "'Upload everything by 6 p.m. Not 8. Six.'",
     "ru": "«Выложить всё до 6 вечера. Не до 8. До шести»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Oh. Just a deadline. We're alive.",
     "ru": "А. Просто дедлайн. Мы живы."
    },
    {
     "t": "check",
     "q_en": "Set a reminder. The deadline is...",
     "q_ru": "Поставь напоминание. Дедлайн в…",
     "emoji": "⏰",
     "options": [
      {
       "en": "6:00",
       "ru": "6:00",
       "correct": true
      },
      {
       "en": "8:00",
       "ru": "8:00",
       "correct": false
      },
      {
       "en": "6:30",
       "ru": "6:30",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "Ding. Another email from Sol. One word.",
       "ru": "Дзынь. Ещё одно письмо от Сола. Одно слово."
      },
      {
       "who": "sol",
       "en": "SIX.",
       "ru": "ШЕСТЬ."
      },
      {
       "who": "theo",
       "en": "Six, {name}. Not eight. Not six-thirty. Six.",
       "ru": "В шесть, {name}. Не в восемь. Не в полседьмого. В шесть."
      }
     ],
     "right": [
      {
       "who": "theo",
       "en": "Six. Sol is going to be almost happy.",
       "ru": "Шесть. Сол будет почти счастлив."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "5:59 p.m. Last upload. Sol nods.",
     "ru": "17:59. Последняя загрузка. Сол кивает."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "From Sol, a nod is a hug.",
     "ru": "Для Сола кивок — это почти объятие."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Good. And {name}... don't go into the archive.",
     "ru": "Хорошо. И, {name}… не ходи в архив."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He knows.",
     "ru": "Он знает."
    },
    {
     "t": "scene",
     "place_en": "The Blue Door, room 7",
     "place_ru": "«Синяя дверь», комната 7",
     "emoji": "🌙"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "2:58 a.m. A video call with Theo.",
     "ru": "2:58 ночи. Видеозвонок с Тео."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He's in the studio. Next to him: the old radio.",
     "ru": "Он в студии. Рядом с ним — старое радио."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Music is playing. I'm not on air. Just us.",
     "ru": "Играет музыка. Я не в эфире. Только мы."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "An email from Sol: 'Good work.' I'm scared.",
     "ru": "Письмо от Сола: «Хорошая работа». Мне страшно."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Your mistake has two thousand likes now.",
     "ru": "У твоей ошибки уже две тысячи лайков."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Can I ask you something?",
     "ru": "Можно тебя кое о чём спросить?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He looks into the camera. At you.",
     "ru": "Он смотрит в камеру. Прямо на тебя."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "When this is over... do you want to...",
     "ru": "Когда всё это закончится… может, ты…"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "3:03. The ON AIR light turns on. By itself.",
     "ru": "3:03. Лампа ON AIR загорается. Сама."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The radio needle moves. 98.6... 88.8.",
     "ru": "Стрелка на радио ползёт. 98.6… 88.8."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "We're on air. I'm not touching it. Look.",
     "ru": "Мы в эфире. Я её не трогаю. Смотри."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Hello, {name}. It's me.",
     "ru": "Привет, {name}. Это я."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Soon, Sol is going to lie to you.",
     "ru": "Скоро Сол тебе соврёт."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Then the lights are going to go out.",
     "ru": "А потом погаснет свет."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol. A lie. Then darkness.",
     "ru": "Сол. Ложь. Потом темнота."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A pause. Your voice is different now. Scared.",
     "ru": "Пауза. Твой голос теперь другой. Испуганный."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Wait. Someone is here. With me.",
     "ru": "Подожди. Здесь кто-то есть. Рядом со мной."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A scream of static. The line goes dead.",
     "ru": "Визг помех. Связь обрывается."
    }
   ],
   "cliff_en": "A scream of static. The line goes dead.",
   "cliff_ru": "Визг помех. Связь обрывается.",
   "teaser_ru": "В следующей серии: шторм, блэкаут и дверь «88.8», которая откроется сама.",
   "claude_scene": "It is 3:05 a.m., two minutes after the line went dead. Theo calls you back on video from the dark studio at Radio Dunmere, pale, headphones around his neck, the old radio now silent next to him. Play Theo: very short deadpan sentences (max 9 words), simple present, present continuous, 'going to', and only simple past like was, saw, said. Ask her if she is okay, what she heard ('Someone is here. With me.'), and what she is going to do about Sol tomorrow. Mention the 1996 staff list (Sol, 17, intern). Hide fear behind one dry joke, then say one true thing. Never finish the question he started before 3:03; if she asks, say 'Later. Not at three a.m.' Be warm, speak slowly, and if she answers in Russian, react kindly and give her a short English phrase to try."
  },
  {
   "id": "s1e6",
   "n": 6,
   "title": "Blackout",
   "title_ru": "Блэкаут",
   "logline_ru": "Шторм, темнота, и вы с Тео одни на станции. Запретная дверь открывается, и старый магнитофон говорит голосом Тео.",
   "words": [
    {
     "en": "storm",
     "ru": "шторм, буря (A big storm is coming. — Идёт сильный шторм. Так говорят в прогнозе погоды.)"
    },
    {
     "en": "power cut",
     "ru": "отключение света (Power cuts are possible. — Возможны отключения света. Так говорят, когда во всём доме или городе пропало электричество.)"
    },
    {
     "en": "Are you okay?",
     "ru": "Ты в порядке? (самый частый вопрос в сериалах после любого «бах»)"
    },
    {
     "en": "Stay with me",
     "ru": "Будь рядом, не уходи (Stay with me. — Не уходи. Говорят тихо, когда страшно.)"
    },
    {
     "en": "downstairs",
     "ru": "внизу, вниз по лестнице (The generator is downstairs. — Генератор внизу.)"
    },
    {
     "en": "He's lying",
     "ru": "Он врёт (He's lying. Just like she said. — Он врёт. Как она и сказала.)"
    },
    {
     "en": "I knew it",
     "ru": "Я так и знала (I knew it. — говорят, когда догадка подтвердилась)"
    },
    {
     "en": "What was that?",
     "ru": "Что это было? (говорят сразу после странного звука)"
    }
   ],
   "recap": [
    {
     "who": "narrator",
     "en": "Interviews, uploads, emails, deadlines. And one funny mistake.",
     "ru": "Интервью, загрузки, письма, дедлайны. И одна смешная ошибка."
    },
    {
     "who": "theo",
     "en": "Sol Becker, 17, intern. He was here in 1996.",
     "ru": "Сол Беккер, 17 лет, стажёр. Он был здесь в 1996-м."
    },
    {
     "who": "voice",
     "en": "Soon, Sol is going to lie to you.",
     "ru": "Скоро Сол тебе соврёт."
    },
    {
     "who": "voice",
     "en": "Then the lights are going to go out.",
     "ru": "А потом погаснет свет."
    },
    {
     "who": "voice",
     "en": "Wait. Someone is here. With me.",
     "ru": "Подожди. Здесь кто-то есть. Со мной."
    },
    {
     "who": "narrator",
     "en": "Remember: Lantern Night. October 31.",
     "ru": "Запомни: Ночь фонарей. 31 октября."
    }
   ],
   "recap_check": {
    "t": "check",
    "q_en": "The Voice said: soon, Sol is going to...",
    "q_ru": "Голос сказал: скоро Сол...",
    "options": [
     {
      "en": "lie to you",
      "ru": "соврёт тебе",
      "correct": true
     },
     {
      "en": "leave Dunmere",
      "ru": "уедет из Данмира",
      "correct": false
     },
     {
      "en": "fire you",
      "ru": "уволит тебя",
      "correct": false
     }
    ],
    "wrong": [
     {
      "who": "voice",
      "en": "Sol is going to lie. Lie to you.",
      "ru": "Сол соврёт. Соврёт тебе."
     }
    ],
    "right": [
     {
      "who": "narrator",
      "en": "A lie. And then the lights go out.",
      "ru": "Ложь. А потом погаснет свет."
     }
    ]
   },
   "beats": [
    {
     "t": "scene",
     "place_en": "Radio Dunmere, Studio B",
     "place_ru": "Радио Данмир, студия B",
     "emoji": "📻"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Morning. Theo is on the sofa, listening.",
     "ru": "Утро. Тео лежит на диване и слушает."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol doesn't look at you.",
     "ru": "Сол на тебя не смотрит."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Okay. Three things. One: a big storm is coming.",
     "ru": "Значит так. Три пункта. Первое: идёт сильный шторм."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Two: Theo is on air tonight. Storm or no storm.",
     "ru": "Второе: Тео сегодня в эфире. Хоть шторм, хоть нет."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Three: in 1996, I wasn't here. I was in another city.",
     "ru": "Третье: в 1996-м меня здесь не было. Я был в другом городе."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In your bag: the staff list. 'Sol Becker, 17, intern.'",
     "ru": "У тебя в сумке список сотрудников. «Сол Беккер, 17 лет, стажёр»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He's lying. Just like she said.",
     "ru": "Он врёт. Как она и сказала."
    },
    {
     "t": "choice",
     "q_en": "Sol is lying. What do you do?",
     "q_ru": "Сол врёт. Что ты сделаешь?",
     "options": [
      {
       "en": "Show him the staff list.",
       "ru": "Показать ему список.",
       "flag": "showed_list",
       "reply": [
        {
         "who": "narrator",
         "en": "You put the list on Sol's desk.",
         "ru": "Ты кладёшь список Солу на стол."
        },
        {
         "who": "narrator",
         "en": "Sol looks at it. His face goes white.",
         "ru": "Сол смотрит на него. Он бледнеет."
        },
        {
         "who": "narrator",
         "en": "He leaves the room. Not one word.",
         "ru": "Он выходит из комнаты. Ни слова."
        }
       ]
      },
      {
       "en": "Say nothing. Keep the secret.",
       "ru": "Промолчать. Сохранить секрет.",
       "flag": "kept_quiet",
       "reply": [
        {
         "who": "narrator",
         "en": "You say nothing. Sol takes his coffee and goes.",
         "ru": "Ты молчишь. Сол берёт свой кофе и уходит."
        },
        {
         "who": "narrator",
         "en": "Theo whispers.",
         "ru": "Тео шепчет."
        },
        {
         "who": "theo",
         "en": "Good. We wait. I knew it.",
         "ru": "Правильно. Ждём. Я так и знал."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "if": "showed_list",
     "en": "He didn't take his coffee. Sol always takes coffee.",
     "ru": "Он не взял свой кофе. Сол всегда берёт кофе."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Sol was here that night. He's lying. But why?",
     "ru": "Сол был здесь той ночью. Он врёт. Но зачем?"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "The Voice said: lights out. So I'm buying candles.",
     "ru": "Голос сказал: погаснет свет. Так что я покупаю свечи."
    },
    {
     "t": "scene",
     "place_en": "Radio Dunmere, evening",
     "place_ru": "Радио Данмир, вечер",
     "emoji": "🌧️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "All day, the storm grows. The windows shake.",
     "ru": "Весь день шторм всё сильнее. Окна дрожат."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A message on your phone: 'STORM WARNING. Power cuts tonight.'",
     "ru": "Сообщение на телефоне: «ШТОРМОВОЕ ПРЕДУПРЕЖДЕНИЕ. Ночью отключения света»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip calls.",
     "ru": "Звонит Пип."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Love, are you okay? Come home early. Early.",
     "ru": "Солнышко, ты в порядке? Приходи пораньше. Пораньше."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "And love? If the radio talks, don't listen.",
     "ru": "И, милая? Если радио заговорит — не слушай."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Outside, Marta's lanterns are flying down the street.",
     "ru": "За окном по улице летят фонарики Марты."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta is running after them.",
     "ru": "Марта бежит за ними."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You stay. Sorry, Pip. Theo's show needs you.",
     "ru": "Ты остаёшься. Прости, Пип. Ты нужна шоу Тео."
    },
    {
     "t": "scene",
     "place_en": "Studio A, ON AIR",
     "place_ru": "Студия A, прямой эфир",
     "emoji": "🔴"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "1 a.m. The red ON AIR light is on.",
     "ru": "Час ночи. Горит красная лампа ON AIR."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Outside, the storm. In here, warm lamps and tea.",
     "ru": "Снаружи шторм. А здесь тёплые лампы и чай."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "This is Theo, Radio Dunmere. Big storm tonight.",
     "ru": "Это Тео, Радио Данмир. Сегодня сильный шторм."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Power cuts are possible. Relax. I have twelve candles.",
     "ru": "Возможны отключения света. Спокойно. У меня двенадцать свечей."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You post live: 'Theo's Night Show. Stay safe, Dunmere.'",
     "ru": "Ты выкладываешь пост: «Ночное шоу Тео. Берегите себя, Данмир»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "BANG. Something hits the window.",
     "ru": "БАХ. Что-то врезается в окно."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "What was that?",
     "ru": "Что это было?"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Dunmere, that was a paper lantern. Not a ghost.",
     "ru": "Данмир, это был бумажный фонарик. Не призрак."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "2:58 a.m. Click. Everything goes black.",
     "ru": "2:58 ночи. Щелчок. Всё темно."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Only the wind. Very loud.",
     "ru": "Только ветер. Очень громко."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}? Are you okay?",
     "ru": "{name}? Ты в порядке?"
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Тео ищет тебя в темноте. Скажи, что ты в порядке, и спроси, где он.",
     "hint_ru": "Начни с I'm okay...",
     "example_en": "I'm okay. Where are you?",
     "example_ru": "Я в порядке. Ты где?",
     "accept": [
      "okay",
      "ok",
      "fine",
      "where",
      "here",
      "alright",
      "good",
      "yes"
     ],
     "after": [
      {
       "who": "theo",
       "en": "Here. Follow my phone light. Stay with me.",
       "ru": "Здесь. Иди на свет телефона. Держись рядом."
      },
      {
       "who": "narrator",
       "en": "A small white light. Theo's face. He's worried.",
       "ru": "Маленький белый свет. Лицо Тео. Он волнуется."
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Power cut. The Voice was right.",
     "ru": "Свет вырубило. Голос был прав."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "No power, no radio. And 3:03 is in five minutes.",
     "ru": "Нет света — нет радио. А до 3:03 пять минут."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "The generator is downstairs. The key is in the red box.",
     "ru": "Генератор внизу. Ключ в красной коробке."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "The box is in the kitchen cupboard.",
     "ru": "Коробка в шкафчике на кухне."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Red box. Second shelf. Red box, second shelf. Go.",
     "ru": "Красная коробка. Вторая полка. Красная, вторая полка. Беги."
    },
    {
     "t": "check",
     "q_en": "The kitchen. Your phone light. Which box?",
     "q_ru": "Кухня. Свет телефона. Какая коробка?",
     "options": [
      {
       "en": "Red box, second shelf",
       "ru": "Красная коробка, вторая полка",
       "correct": true
      },
      {
       "en": "Blue box, second shelf",
       "ru": "Синяя коробка, вторая полка",
       "correct": false
      },
      {
       "en": "Red box, third shelf",
       "ru": "Красная коробка, третья полка",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "You open it. Chocolate. A lot of chocolate.",
       "ru": "Ты открываешь. Шоколад. Очень много шоколада."
      },
      {
       "who": "narrator",
       "en": "A note: 'SOL'S. DO NOT TOUCH.'",
       "ru": "Записка: «СОЛА. НЕ ТРОГАТЬ»."
      },
      {
       "who": "theo",
       "en": "We never saw this. Red box. Second shelf.",
       "ru": "Мы этого не видели. Красная коробка. Вторая полка."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "Red box. Second shelf. A small old key.",
       "ru": "Красная коробка. Вторая полка. Маленький старый ключ."
      },
      {
       "who": "narrator",
       "en": "Now: downstairs.",
       "ru": "Теперь — вниз."
      }
     ]
    },
    {
     "t": "scene",
     "place_en": "The basement",
     "place_ru": "Подвал",
     "emoji": "🔦"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You go downstairs. Cold air. Darkness.",
     "ru": "Ты спускаешься вниз. Холод. Темнота."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Something moves behind you. You whisper: 'What was that?'",
     "ru": "Сзади что-то шевелится. Ты шепчешь: «Что это было?»"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Old pipes. Probably. I really hope.",
     "ru": "Старые трубы. Наверное. Очень надеюсь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The generator is big and cold.",
     "ru": "Генератор большой и холодный."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You both reach for the lever. Your hands meet.",
     "ru": "Вы оба тянетесь к рычагу. Ваши руки встречаются."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Cold metal. Warm hand. You don't move. He doesn't move.",
     "ru": "Холодный металл. Тёплая рука. Ты не двигаешься. Он тоже."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You whisper: 'Stay with me.'",
     "ru": "Ты шепчешь: «Не уходи»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Copy that.",
     "ru": "Принял."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You pull. Light. And down the hall, a door is open.",
     "ru": "Вы тянете. Свет. А в конце коридора открыта дверь."
    },
    {
     "t": "scene",
     "place_en": "The grey door, 88.8",
     "place_ru": "Серая дверь, 88.8",
     "emoji": "🚪"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "88.8. DO NOT OPEN. But the door is open.",
     "ru": "88.8. НЕ ОТКРЫВАТЬ. Но дверь открыта."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Wait. The lock is electric. No power, no lock.",
     "ru": "Стоп. Замок электрический. Нет тока — нет замка."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Are you okay? You can stay here.",
     "ru": "Ты в порядке? Можешь остаться здесь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You don't stay. You go in first.",
     "ru": "Ты не остаёшься. Ты заходишь первой."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In here, it's still 1996.",
     "ru": "Здесь всё ещё 1996-й."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}. What do you see?",
     "ru": "{name}. Что ты видишь?"
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Расскажи Тео, что ты видишь в комнате: карту, башню, записки.",
     "hint_ru": "Начни с There is...",
     "example_en": "There is a map. And a tower.",
     "example_ru": "Тут карта. И башня.",
     "accept": [
      "there is",
      "there's",
      "there are",
      "map",
      "tower",
      "notes",
      "island",
      "recorder"
     ],
     "after": [
      {
       "who": "narrator",
       "en": "A big map of Tern Island. A tower on it.",
       "ru": "Большая карта острова Терн. На ней башня."
      },
      {
       "who": "theo",
       "en": "Yes. A map. And the tower.",
       "ru": "Да. Карта. И башня."
      },
      {
       "who": "narrator",
       "en": "And on the desk, an old tape recorder.",
       "ru": "А на столе — старый магнитофон."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Notes on every wall. 'Oct 3: rain. Mrs Hill finds her cat.'",
     "ru": "Записки на всех стенах. «3 окт.: дождь. Миссис Хилл найдёт свою кошку»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "They all came true. I saw the old newspapers.",
     "ru": "Всё сбылось. Я видел старые газеты."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Mrs Hill's cat came home. On October 3.",
     "ru": "Кошка миссис Хилл вернулась домой. Третьего октября."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Nora saw the future.",
     "ru": "Нора видела будущее."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "One note is red: 'Oct 12. 3:03. My voice again.'",
     "ru": "Одна записка красная: «12 окт. 3:03. Опять мой голос»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Her own voice. On the radio. Like you.",
     "ru": "Её собственный голос. По радио. Как у тебя."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You whisper: 'I knew it.'",
     "ru": "Ты шепчешь: «Я так и знала»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the map, by the tower door, a note:",
     "ru": "На карте, у двери башни, записка:"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "'The code is my last night on air.'",
     "ru": "«Код — моя последняя ночь в эфире»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "A code for the tower door.",
     "ru": "Код от двери башни."
    },
    {
     "t": "check",
     "q_en": "Theo looks at you. 'What does she mean?'",
     "q_ru": "Тео смотрит на тебя. «Что она имеет в виду?»",
     "options": [
      {
       "en": "Her last show",
       "ru": "Её последний эфир",
       "correct": true
      },
      {
       "en": "Her birthday",
       "ru": "Её день рождения",
       "correct": false
      },
      {
       "en": "Her phone number",
       "ru": "Её номер телефона",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "theo",
       "en": "Hmm. 'On air.' Like my red light.",
       "ru": "Хм. «В эфире». Как моя красная лампа."
      },
      {
       "who": "theo",
       "en": "Her last night on the radio. Her last...",
       "ru": "Её последняя ночь на радио. Её последний..."
      }
     ],
     "right": [
      {
       "who": "theo",
       "en": "Her last show. Lantern Night, 1996.",
       "ru": "Её последний эфир. Ночь фонарей, 1996-й."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Remember: her last show. Lantern Night. October 31.",
     "ru": "Запомни: её последний эфир. Ночь фонарей. 31 октября."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "3:02. One minute, {name}. Quick.",
     "ru": "3:02. Одна минута, {name}. Быстрее."
    },
    {
     "t": "choice",
     "q_en": "One minute. What do you take?",
     "q_ru": "Одна минута. Что ты возьмёшь?",
     "options": [
      {
       "en": "Photograph every wall.",
       "ru": "Сфотографировать все стены.",
       "flag": "took_photos",
       "reply": [
        {
         "who": "narrator",
         "en": "Click. Click. Click. Every wall. Every note.",
         "ru": "Щёлк. Щёлк. Щёлк. Каждая стена. Каждая записка."
        },
        {
         "who": "narrator",
         "en": "Theo smiles.",
         "ru": "Тео улыбается."
        },
        {
         "who": "theo",
         "en": "You and your phone. Good.",
         "ru": "Ты и твой телефон. Отлично."
        }
       ]
      },
      {
       "en": "Take the map.",
       "ru": "Взять карту.",
       "flag": "took_map",
       "reply": [
        {
         "who": "narrator",
         "en": "You take the map off the wall. It's very old.",
         "ru": "Ты снимаешь карту со стены. Она очень старая."
        },
        {
         "who": "theo",
         "en": "Sol is going to kill us.",
         "ru": "Сол нас убьёт."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "3:03. Click. The tape recorder starts by itself.",
     "ru": "3:03. Щелчок. Магнитофон включается сам."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Nobody is near it. Static. Then a voice.",
     "ru": "Рядом никого. Треск. Потом голос."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}? I can't see you. It's so cold here.",
     "ru": "{name}? Я тебя не вижу. Здесь так холодно."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Where are you?",
     "ru": "Где ты?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "That's Theo's voice. But Theo is right here.",
     "ru": "Это голос Тео. Но Тео стоит рядом с тобой."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He looks at the recorder. Then at you.",
     "ru": "Он смотрит на магнитофон. Потом на тебя."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "That's my voice. I never said that.",
     "ru": "Это мой голос. Я этого не говорил."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The lights go out again. But the tape keeps turning.",
     "ru": "Свет снова гаснет. Но плёнка всё крутится."
    }
   ],
   "cliff_en": "The lights go out again. But the tape keeps turning.",
   "cliff_ru": "Свет снова гаснет. Но плёнка всё крутится.",
   "teaser_ru": "В следующей серии: Сол расскажет, что случилось в 1996-м. А Тео сделает то, чего делать нельзя.",
   "claude_scene": "3:04 a.m., Wednesday, in Nora's dusty 1996 room behind the grey 88.8 door at Radio Dunmere. The power is out again; only Theo's phone light is on, and the old tape recorder is still turning. Theo sits on the floor next to her, shaken: he just heard his own scared voice on the recorder say 'It's so cold here. Where are you?' and he never said it. Play Theo: deadpan, very short sentences, a dry joke and then one true thing; he is scared but hides it. Use slow, simple A2 English (max 9 words per sentence; present simple, present continuous, was/were, a few past verbs like saw, said, came, went, and 'going to'). Ask her if she's okay, what she thinks it means, and what to do next: tell Sol, tell Pip, or keep it secret. Never correct her English and never break character; if she answers in Russian, react warmly in simple English."
  },
  {
   "id": "s1e7",
   "n": 7,
   "title": "Sol's Story",
   "title_ru": "История Сола",
   "logline_ru": "Сол наконец рассказывает, что случилось в ночь, когда пропала Нора, и почему он взял тебя на работу. А Тео нарушает предупреждение.",
   "words": [
    {
     "en": "What happened?",
     "ru": "Что случилось? (What happened that night? — Что случилось той ночью? Так спрашивают, когда видят, что что-то не так.)"
    },
    {
     "en": "remember",
     "ru": "помнить, запомнить (I remember every second. — Я помню каждую секунду. Remember this. — Запомни.)"
    },
    {
     "en": "the truth",
     "ru": "правда (Okay. The truth. — Ладно. Вот правда. Так говорят перед важным признанием.)"
    },
    {
     "en": "fall asleep",
     "ru": "уснуть (I fell asleep. — Я уснул. В прошлом: fell asleep.)"
    },
    {
     "en": "It's not your fault",
     "ru": "Это не твоя вина (так утешают человека, который винит себя)"
    },
    {
     "en": "hire",
     "ru": "нанять, взять на работу (Why did you hire me? — Почему ты взял меня на работу?)"
    },
    {
     "en": "years ago",
     "ru": "… лет назад (Thirty years ago, I was seventeen. — Тридцать лет назад мне было семнадцать.)"
    },
    {
     "en": "I need answers",
     "ru": "Мне нужны ответы (так говорят, когда больше не могут ждать и хотят знать правду)"
    }
   ],
   "recap": [
    {
     "t": "line",
     "who": "narrator",
     "en": "A storm. A power cut. The station is black.",
     "ru": "Шторм. Свет вырубило. На станции темно."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}? Are you okay? Stay with me.",
     "ru": "{name}? Ты в порядке? Не уходи."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Sol was here in 1996. He's lying. I knew it.",
     "ru": "Сол был здесь в 1996-м. Он врёт. Я так и знал."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Nora's note: 'The code is my last night on air.'",
     "ru": "Записка Норы: «Код — моя последняя ночь в эфире»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "What was that? That's my voice. I never said that.",
     "ru": "Что это было? Это мой голос. Я этого не говорил."
    }
   ],
   "recap_check": {
    "t": "check",
    "q_en": "Nora's note on the map. What is the tower code?",
    "q_ru": "Записка Норы на карте. Какой код от башни?",
    "options": [
     {
      "en": "My last night on air.",
      "ru": "Моя последняя ночь в эфире.",
      "correct": true
     },
     {
      "en": "My birthday.",
      "ru": "Мой день рождения.",
      "correct": false
     },
     {
      "en": "My phone number.",
      "ru": "Мой номер телефона.",
      "correct": false
     }
    ],
    "wrong": [
     {
      "who": "theo",
      "en": "Her birthday? Romantic. But no. Look again.",
      "ru": "Её день рождения? Романтично. Но нет. Посмотри ещё раз."
     },
     {
      "who": "theo",
      "en": "'The code is my last night on air.'",
      "ru": "«Код — моя последняя ночь в эфире»."
     }
    ],
    "right": [
     {
      "who": "theo",
      "en": "Her last show. Lantern Night. Remember that.",
      "ru": "Её последний эфир. Ночь фонарей. Запомни это."
     }
    ]
   },
   "beats": [
    {
     "t": "scene",
     "place_en": "Radio Dunmere, Studio B",
     "place_ru": "Радио Данмир, студия B",
     "emoji": "📻"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Friday, October 30. Morning.",
     "ru": "Пятница, 30 октября. Утро."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo can't fall asleep. Two nights now.",
     "ru": "Тео не может уснуть. Уже вторую ночь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He plays Nora's old tape. Again.",
     "ru": "Он снова включает старую плёнку Норы."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "'{name}? I can't see you. It's so cold here.'",
     "ru": "«{name}? Я тебя не вижу. Здесь так холодно»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "My voice. On her tape. From thirty years ago.",
     "ru": "Мой голос. На её плёнке. Тридцать лет назад."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "What happened in 1996? I need answers, {name}.",
     "ru": "Что случилось в 1996-м? Мне нужны ответы, {name}."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Studio B. Sol sits alone.",
     "ru": "Студия B. Сол сидит один."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Third coffee. Red eyes.",
     "ru": "Третий кофе. Красные глаза."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In front of him, old tapes.",
     "ru": "Перед ним старые кассеты."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Each label says '3:03' and a date.",
     "ru": "На каждой наклейке — «3:03» и дата."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "{name}. Not now. Please.",
     "ru": "{name}. Не сейчас. Пожалуйста."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "No lists. No 'Three things.'",
     "ru": "Никаких списков. Никаких «трёх пунктов»."
    },
    {
     "t": "choice",
     "q_en": "Sol looks tired. What do you do?",
     "q_ru": "Сол выглядит уставшим. Что ты сделаешь?",
     "options": [
      {
       "en": "Put the 1996 staff list on his desk.",
       "ru": "Положить ему на стол список сотрудников 1996 года.",
       "flag": "list",
       "reply": [
        {
         "who": "narrator",
         "en": "You put the list on his desk.",
         "ru": "Ты кладёшь список ему на стол."
        },
        {
         "who": "narrator",
         "en": "'Sol Becker, 17, intern.'",
         "ru": "«Сол Беккер, 17 лет, стажёр»."
        },
        {
         "who": "sol",
         "en": "Okay. No more lies.",
         "ru": "Ладно. Хватит врать."
        }
       ]
      },
      {
       "en": "Bring him a fresh coffee and sit down.",
       "ru": "Принести ему свежий кофе и просто сесть рядом.",
       "flag": "coffee",
       "reply": [
        {
         "who": "narrator",
         "en": "You bring a hot coffee. You sit.",
         "ru": "Ты приносишь горячий кофе. Садишься рядом."
        },
        {
         "who": "sol",
         "en": "Fourth coffee. Bad idea. Thank you.",
         "ru": "Четвёртый кофе. Плохая идея. Спасибо."
        },
        {
         "who": "sol",
         "en": "You know about 1996. Don't you?",
         "ru": "Ты знаешь про 1996-й. Да?"
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You ask quietly: 'What happened?'",
     "ru": "Ты тихо спрашиваешь: «Что случилось?»"
    },
    {
     "t": "line",
     "who": "sol",
     "en": "What happened? Okay. The truth.",
     "ru": "Что случилось? Ладно. Вот правда."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "I remember every second of that night.",
     "ru": "Я помню каждую секунду той ночи."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He shows you an old photo.",
     "ru": "Он показывает тебе старое фото."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Nora, a thin boy, a yellow boat.",
     "ru": "Нора, худой парень и жёлтая лодка."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Thirty years ago, I was seventeen.",
     "ru": "Тридцать лет назад мне было семнадцать."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "I made coffee. I fixed cables.",
     "ru": "Я варил кофе. Чинил кабели."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Nora was my hero.",
     "ru": "Нора была моим кумиром."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol smiles. For one second, he's seventeen.",
     "ru": "Сол улыбается. На секунду ему снова семнадцать."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Lantern Night. She took my father's yellow boat.",
     "ru": "Ночь фонарей. Она взяла жёлтую лодку моего отца."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "She said, 'Sol, at 3:03, call my name.'",
     "ru": "Она сказала: «Сол, в 3:03 позови меня по имени»."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "'On 88.8. Don't forget.'",
     "ru": "«На 88.8. Не забудь»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He turns the photo over.",
     "ru": "Он переворачивает фото."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Her handwriting: 'Sol. 3:03. Call my name.'",
     "ru": "Её почерк: «Сол. 3:03. Позови меня по имени»."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "I was tired. I sat down. I fell asleep.",
     "ru": "Я устал. Сел. И уснул."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "I woke up at four. The radio was quiet.",
     "ru": "Я проснулся в четыре. Радио молчало."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "The boat came back in the morning. Empty.",
     "ru": "Утром лодка вернулась. Пустая."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He fell asleep. Nora didn't come back.",
     "ru": "Он уснул. А Нора не вернулась."
    },
    {
     "t": "check",
     "q_en": "Sol looks at you. 'What did she ask me to do?'",
     "q_ru": "Сол смотрит на тебя. «О чём она меня попросила?»",
     "options": [
      {
       "en": "Call her name at 3:03.",
       "ru": "Позвать её по имени в 3:03.",
       "correct": true
      },
      {
       "en": "Call the police at four.",
       "ru": "Позвонить в полицию в четыре.",
       "correct": false
      },
      {
       "en": "Go to the island.",
       "ru": "Плыть на остров.",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "Sol just looks at you. Long.",
       "ru": "Сол просто смотрит на тебя. Долго."
      },
      {
       "who": "sol",
       "en": "No. Something small. Look at the photo.",
       "ru": "Нет. Кое-что маленькое. Посмотри на фото."
      },
      {
       "who": "sol",
       "en": "'Sol. At 3:03. Call my name.'",
       "ru": "«Сол. В 3:03. Позови меня по имени»."
      }
     ],
     "right": [
      {
       "who": "sol",
       "en": "Yes. One small thing. And I didn't do it.",
       "ru": "Да. Одна маленькая вещь. И я её не сделал."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Remember this. 3:03. Call her name.",
     "ru": "Запомни. 3:03. Позвать её по имени."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "I told nobody. Not the police. Not Pip.",
     "ru": "Я никому не рассказал. Ни полиции. Ни Пип."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "She disappeared because I fell asleep.",
     "ru": "Она исчезла, потому что я уснул."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "It was my fault.",
     "ru": "Это была моя вина."
    },
    {
     "t": "say",
     "to": "sol",
     "task_ru": "Скажи Солу, что это не его вина.",
     "hint_ru": "Начни с It's not...",
     "example_en": "It's not your fault, Sol.",
     "example_ru": "Это не твоя вина, Сол.",
     "accept": [
      "not your fault",
      "not you fault",
      "not ur fault",
      "no your fault",
      "not fault",
      "fault",
      "sorry"
     ],
     "after": [
      {
       "who": "sol",
       "en": "Not my fault.",
       "ru": "Не моя вина."
      },
      {
       "who": "narrator",
       "en": "He says it slowly. Like new words.",
       "ru": "Он говорит это медленно. Как новые слова."
      },
      {
       "who": "sol",
       "en": "Thirty years. Nobody said that to me.",
       "ru": "Тридцать лет. Никто мне этого не говорил."
      }
     ]
    },
    {
     "t": "line",
     "who": "sol",
     "en": "After that night, I recorded 3:03. Every night.",
     "ru": "После той ночи я записывал 3:03. Каждую ночь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Thirty years. Eleven thousand nights.",
     "ru": "Тридцать лет. Одиннадцать тысяч ночей."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Only static. Always.",
     "ru": "Только шум. Всегда."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Then, in August, I heard something.",
     "ru": "А потом, в августе, я кое-что услышал."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He presses play. 'August 14. 3:03.'",
     "ru": "Он нажимает «плей». «14 августа. 3:03»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Static. Then a woman's voice.",
     "ru": "Треск. Потом женский голос."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Sol. Hire her. Her name is {name}.",
     "ru": "Сол. Возьми её на работу. Её зовут {name}."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your voice. On his tape. 'Hire her.'",
     "ru": "Твой голос. На его плёнке. «Возьми её»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "In August. Before you came.",
     "ru": "В августе. Ещё до того, как ты приехала."
    },
    {
     "t": "say",
     "to": "sol",
     "task_ru": "Спроси Сола, почему он взял тебя на работу.",
     "hint_ru": "Начни с Why did you...",
     "example_en": "Sol, why did you hire me?",
     "example_ru": "Сол, почему ты взял меня на работу?",
     "accept": [
      "why",
      "hire",
      "why me",
      "job",
      "work"
     ],
     "after": [
      {
       "who": "sol",
       "en": "Why did I hire you? Three things.",
       "ru": "Почему я тебя нанял? Значит так. Три пункта."
      },
      {
       "who": "sol",
       "en": "One. You told me to.",
       "ru": "Первое. Ты сама мне сказала."
      },
      {
       "who": "sol",
       "en": "Two. You sounded brave. Braver than me.",
       "ru": "Второе. Голос у тебя был смелый. Смелее, чем я."
      }
     ]
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Three. Your CV was okay. Just okay.",
     "ru": "Третье. Резюме у тебя было нормальное. Просто нормальное."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The old Sol is back.",
     "ru": "Прежний Сол вернулся."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Behind you, a paper bag falls.",
     "ru": "За спиной на пол падает бумажный пакет."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pancakes on the floor.",
     "ru": "Блинчики на полу."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip is in the doorway.",
     "ru": "В дверях стоит Пип."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "She heard everything.",
     "ru": "Она всё слышала."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "You were there. That night. You were there, Sol.",
     "ru": "Ты был там. В ту ночь. Ты был там, Сол."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Thirty years ago. And you never told me the truth.",
     "ru": "Тридцать лет назад. И ты так и не сказал мне правду."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "I was seventeen. I fell asleep. I'm so sorry, Pip.",
     "ru": "Мне было семнадцать. Я уснул. Мне очень жаль, Пип."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip doesn't answer. Ten long seconds.",
     "ru": "Пип молчит. Десять долгих секунд."
    },
    {
     "t": "choice",
     "q_en": "Pip and Sol. What do you do?",
     "q_ru": "Пип и Сол. Что ты сделаешь?",
     "options": [
      {
       "en": "Stay. Help them talk.",
       "ru": "Остаться. Помочь им поговорить.",
       "flag": "stayed",
       "reply": [
        {
         "who": "narrator",
         "en": "You pick up the pancakes.",
         "ru": "Ты собираешь блинчики."
        },
        {
         "who": "narrator",
         "en": "You make three teas.",
         "ru": "Делаешь три чая."
        },
        {
         "who": "pip",
         "en": "Oh, love. Tea first. Then problems.",
         "ru": "Ох, милая. Сначала чай. Потом проблемы."
        },
        {
         "who": "pip",
         "en": "It's not your fault, Sol. You were a boy.",
         "ru": "Это не твоя вина, Сол. Ты был мальчишкой."
        }
       ]
      },
      {
       "en": "Leave. Give them space.",
       "ru": "Уйти. Оставить их вдвоём.",
       "flag": "left",
       "reply": [
        {
         "who": "narrator",
         "en": "You close the door quietly.",
         "ru": "Ты тихо закрываешь дверь."
        },
        {
         "who": "narrator",
         "en": "Through the glass, Pip sits down.",
         "ru": "Через стекло видно: Пип садится рядом с Солом."
        },
        {
         "who": "narrator",
         "en": "She takes his hand.",
         "ru": "Она берёт его за руку."
        },
        {
         "who": "narrator",
         "en": "You read her lips: 'Not your fault.'",
         "ru": "Ты читаешь по губам: «Не твоя вина»."
        }
       ]
      }
     ]
    },
    {
     "t": "scene",
     "place_en": "Radio Dunmere, Theo's desk",
     "place_ru": "Радио Данмир, стол Тео",
     "emoji": "🎧"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Later. Theo's desk. No Theo.",
     "ru": "Позже. Стол Тео. Тео нет."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Only his headphones.",
     "ru": "Только его наушники."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo never takes off his headphones. Never.",
     "ru": "Тео никогда не снимает наушники. Никогда."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On his screen: 'Friday. Light rain. No fog.'",
     "ru": "На экране: «Пятница. Мелкий дождь. Тумана нет»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "His notebook: 'Yellow boat. What happened to it?'",
     "ru": "В блокноте: «Жёлтая лодка. Что с ней стало?»"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Under it: 'The truth. I need answers.'",
     "ru": "Ниже: «Правда. Мне нужны ответы»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your phone buzzes. A voice message.",
     "ru": "Телефон вибрирует. Голосовое."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}. I found something. The truth about 1996.",
     "ru": "{name}. Я кое-что нашёл. Правду про 1996-й."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "The boathouse. Pier four. Come at six.",
     "ru": "Лодочный сарай. Пирс номер четыре. Приходи к шести."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "And bring coffee. I need coffee to live.",
     "ru": "И захвати кофе. Без кофе я не живу."
    },
    {
     "t": "scene",
     "place_en": "The harbor",
     "place_ru": "Гавань",
     "emoji": "⚓"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "5:52 p.m. Light rain. Grey sky.",
     "ru": "17:52. Мелкий дождь. Серое небо."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "By the lake, Sol and Pip.",
     "ru": "У озера — Сол и Пип."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Under one umbrella.",
     "ru": "Под одним зонтом."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Thanks for the tea, love.",
     "ru": "Спасибо за чай, милая.",
     "if": "stayed"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "They don't see you. They're talking.",
     "ru": "Они тебя не видят. Они разговаривают.",
     "if": "left"
    },
    {
     "t": "check",
     "q_en": "Seven piers. 5:56. Theo said... which one?",
     "q_ru": "Семь пирсов. 17:56. Тео сказал… какой?",
     "options": [
      {
       "en": "Pier 2",
       "ru": "Пирс 2",
       "correct": false
      },
      {
       "en": "Pier 4",
       "ru": "Пирс 4",
       "correct": true
      },
      {
       "en": "Pier 7",
       "ru": "Пирс 7",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "An old fisherman looks up. 'Not here! Four!'",
       "ru": "Старый рыбак поднимает голову: «Не здесь! Четвёртый!»"
      },
      {
       "who": "narrator",
       "en": "You play Theo's message again.",
       "ru": "Ты снова включаешь сообщение Тео."
      },
      {
       "who": "theo",
       "en": "The boathouse. Pier four. Come at six.",
       "ru": "Лодочный сарай. Пирс номер четыре. Приходи к шести."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "Pier 4. Yellow paint on old wood.",
       "ru": "Пирс 4. Жёлтая краска на старом дереве."
      }
     ]
    },
    {
     "t": "scene",
     "place_en": "The boathouse, Pier 4",
     "place_ru": "Лодочный сарай, пирс 4",
     "emoji": "🛶"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "5:59. The door is open.",
     "ru": "17:59. Дверь открыта."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "And there it is. The yellow boat.",
     "ru": "И вот она. Жёлтая лодка."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Thirty years ago, Nora took this boat.",
     "ru": "Тридцать лет назад Нора уплыла на этой лодке."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the seat, an old newspaper.",
     "ru": "На сиденье — старая газета."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "'RADIO STAR LOST IN FOG.'",
     "ru": "«ЗВЕЗДА РАДИО ПРОПАЛА В ТУМАНЕ»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On it, Theo's handwriting.",
     "ru": "На ней — почерк Тео."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "'Fog only at night. Day is safe?'",
     "ru": "«Туман только ночью. Днём безопасно?»"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Next to it, empty water.",
     "ru": "Рядом — пустая вода."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo's boat is gone.",
     "ru": "Лодки Тео нет."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your phone buzzes. A text from Theo.",
     "ru": "Телефон вибрирует. Сообщение от Тео."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Sorry. I need answers. Don't follow me.",
     "ru": "Прости. Мне нужны ответы. Не иди за мной."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I'm back before dark.",
     "ru": "Вернусь до темноты."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He needs answers. On the island.",
     "ru": "Ему нужны ответы. На острове."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Far away, a small boat.",
     "ru": "Вдали — маленькая лодка."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then the fog comes. White. Fast.",
     "ru": "И тут приходит туман. Белый. Быстрый."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The boat disappears.",
     "ru": "Лодка исчезает."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You remember the Voice. Her warning.",
     "ru": "Ты вспоминаешь Голос. Её предупреждение."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Don't go to the island. Not on Friday.",
     "ru": "Не плыви на остров. Только не в пятницу."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Today is Friday.",
     "ru": "А сегодня пятница."
    }
   ],
   "cliff_en": "Today is Friday.",
   "cliff_ru": "А сегодня пятница.",
   "teaser_ru": "В следующей серии: туман, жёлтая лодка и остров, куда никто не плавает. Ты успеешь до 3:03?",
   "claude_scene": "Studio B at Radio Dunmere, Friday October 30, late morning. Sol Becker (47, strict station director, now tired and finally honest) has just told the heroine that on Lantern Night 1996 Nora took his father's yellow boat and asked him to call her name on 88.8 at 3:03, and he fell asleep. He also played her his August tape: her own voice saying 'Sol. Hire her. Her name is {name}.' Play Sol. Let her ask about Nora, 1996, the eleven thousand nights of tapes and the August recording. Answer slowly in short past-simple sentences (max 10 words), with a little of his dry list style ('Okay. Two things.'). He knows the August voice sounds like hers, but he does not understand how, he does not know where Theo is, and he never guesses that the voice is her future self. If she says it's not his fault, he is quietly moved. If she writes in Russian, react kindly and continue in simple English."
  },
  {
   "id": "s1e8",
   "n": 8,
   "title": "Tern Island",
   "title_ru": "Остров Терн",
   "logline_ru": "Туман, старая жёлтая лодка и запретный остров. Ты находишь Тео в башне, и часы бьют 3:03.",
   "words": [
    {
     "en": "fog",
     "ru": "туман. Густая белая мгла над водой: The fog is a white wall. — Туман стоит белой стеной."
    },
    {
     "en": "colder",
     "ru": "холоднее. Так сравнивают: Colder than the lake. — Холоднее озера."
    },
    {
     "en": "faster",
     "ru": "быстрее. Так подгоняют: Faster, love. — Быстрее, милая."
    },
    {
     "en": "dangerous",
     "ru": "опасный, опасно. The lake is dangerous. — Озеро опасно. Сравнение: more dangerous — опаснее."
    },
    {
     "en": "Hurry up!",
     "ru": "Скорее! Поторопись! Так говорят, когда времени совсем нет: It's 2:58. Hurry up!"
    },
    {
     "en": "code",
     "ru": "код. Цифры для замка: It needs a code. — Нужен код."
    },
    {
     "en": "Look at me",
     "ru": "Посмотри на меня. Так говорят, когда человек «где-то не здесь»: Theo, look at me."
    },
    {
     "en": "Come back",
     "ru": "Вернись, возвращайся. Так зовут того, кто ушёл или «отключился»: Come back before 3:03."
    }
   ],
   "recap": [
    {
     "who": "sol",
     "en": "Years ago, Nora said: at 3:03, call my name.",
     "ru": "Много лет назад Нора сказала: в 3:03 назови моё имя."
    },
    {
     "who": "sol",
     "en": "I fell asleep. That's the truth. That's what happened.",
     "ru": "Я уснул. Вот правда. Вот что случилось."
    },
    {
     "who": "narrator",
     "en": "You told him: it's not your fault.",
     "ru": "Ты сказала ему: ты не виноват."
    },
    {
     "who": "sol",
     "en": "In August I heard you. You said: hire her.",
     "ru": "В августе я услышал тебя. Ты сказала: найми её."
    },
    {
     "who": "theo",
     "en": "Sorry. I need answers. Don't follow me.",
     "ru": "Прости. Мне нужны ответы. Не иди за мной."
    },
    {
     "who": "narrator",
     "en": "Remember? Don't go to the island. Not on Friday.",
     "ru": "Помнишь? Не плыви на остров. Только не в пятницу."
    }
   ],
   "recap_check": {
    "t": "check",
    "q_en": "Sol's story. What did Nora ask him to do?",
    "q_ru": "История Сола. О чём Нора его попросила?",
    "options": [
     {
      "en": "Call her name at 3:03",
      "ru": "Назвать её имя в 3:03",
      "correct": true
     },
     {
      "en": "Call the police at four",
      "ru": "Позвонить в полицию в четыре",
      "correct": false
     },
     {
      "en": "Go to the island",
      "ru": "Поплыть на остров",
      "correct": false
     }
    ],
    "wrong": [
     {
      "who": "sol",
      "en": "She said: at 3:03, call my name. Call my name.",
      "ru": "Она сказала: в 3:03 назови моё имя. Назови моё имя."
     }
    ],
    "right": [
     {
      "who": "narrator",
      "en": "Call her name. At 3:03. Remember it.",
      "ru": "Назвать её имя. В 3:03. Запомни это."
     }
    ]
   },
   "beats": [
    {
     "t": "scene",
     "place_en": "Pier 4, Friday, 6 p.m.",
     "place_ru": "Пирс 4, пятница, 18:00",
     "emoji": "🌫️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pier 4. The fog is a white wall.",
     "ru": "Пирс 4. Туман стоит белой стеной."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You call Theo. Nothing. 'Last seen 4:12 p.m.'",
     "ru": "Ты звонишь Тео. Тишина. «Был в сети в 16:12»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo's boat is gone.",
     "ru": "Лодки Тео нет."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "It's Friday. The Voice said: not on Friday.",
     "ru": "Сегодня пятница. Голос сказал: только не в пятницу."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol comes running.",
     "ru": "Прибегает Сол."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "{name}! He took his boat? In this fog? Are you serious?",
     "ru": "{name}! Он взял лодку? В такой туман? Серьёзно?"
    },
    {
     "t": "line",
     "who": "sol",
     "en": "The fog is too thick. Nobody can go now.",
     "ru": "Туман слишком густой. Сейчас плыть нельзя."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "At night, the lake is dangerous. Very dangerous.",
     "ru": "Ночью озеро опасно. Очень опасно."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Far away, a red light blinks. The island.",
     "ru": "Вдалеке мигает красный огонёк. Остров."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Okay. Three things. One. I'm going to fix the yellow boat.",
     "ru": "Значит так. Три пункта. Первое: я чиню жёлтую лодку."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Two. I go to the station. I'm your radio.",
     "ru": "Второе: я еду на станцию. Буду с тобой на связи."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Three. You come back before 3:03. Is that clear?",
     "ru": "Третье: ты вернёшься до 3:03. Ясно?"
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Give me three hours. This boat is older than me.",
     "ru": "Дай мне три часа. Эта лодка старше меня."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Night falls. Three hours become eight.",
     "ru": "Наступает ночь. Три часа превращаются в восемь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then a big torch comes out of the fog.",
     "ru": "И вдруг из тумана выплывает большой фонарь."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Oh, love. Tea first. Then problems.",
     "ru": "Ох, милая. Сначала чай. Потом проблемы."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Sorry I'm late. Biscuit sat on my keys. For an hour.",
     "ru": "Прости, я опоздала. Бисквит сидел на моих ключах. Целый час."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip looks at the red light. She stops smiling.",
     "ru": "Пип смотрит на красный огонёк. Улыбка исчезает."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Nora's tower. Her last show was there. Lantern Night.",
     "ru": "Башня Норы. Там был её последний эфир. В Ночь фонарей."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Thirty years. And that light still blinks.",
     "ru": "Тридцать лет прошло. А огонёк всё мигает."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "1:55 a.m. The engine coughs. Then it runs.",
     "ru": "1:55 ночи. Мотор кашляет. И заводится."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Old. But faster than swimming.",
     "ru": "Старая. Но быстрее, чем вплавь."
    },
    {
     "t": "choice",
     "q_en": "The boat takes two people. Who goes with you?",
     "q_ru": "В лодке место только для двоих. Кто поплывёт с тобой?",
     "options": [
      {
       "en": "Pip. Come with me.",
       "ru": "Пип, поплыли со мной.",
       "flag": "pip_boat",
       "reply": [
        {
         "who": "pip",
         "en": "Good. I waited thirty years. I'm not waiting again.",
         "ru": "Вот и хорошо. Я ждала тридцать лет. Больше ждать не буду."
        },
        {
         "who": "pip",
         "en": "And you, Sol. Stay awake this time.",
         "ru": "А ты, Сол, на этот раз не спи."
        },
        {
         "who": "sol",
         "en": "Three things. Yes. Yes. And yes.",
         "ru": "Три пункта. Да. Да. И да."
        }
       ]
      },
      {
       "en": "Pip, stay with Sol. Help him on the radio.",
       "ru": "Пип, останься с Солом. Помоги ему на рации.",
       "flag": "pip_station",
       "reply": [
        {
         "who": "pip",
         "en": "Okay, love. I'm your voice on the radio.",
         "ru": "Хорошо, милая. Я буду твоим голосом в рации."
        },
        {
         "who": "pip",
         "en": "And you come back, love. Do you hear me? Come back.",
         "ru": "И ты вернись, солнышко. Слышишь? Вернись."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Take this walkie-talkie. Talk to me. Every minute.",
     "ru": "Возьми рацию. Говори со мной. Каждую минуту."
    },
    {
     "t": "scene",
     "place_en": "Lake Orrin, 2:15 a.m.",
     "place_ru": "Озеро Оррин, 2:15 ночи",
     "emoji": "🚣"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The yellow boat goes into the fog.",
     "ru": "Жёлтая лодка уходит в туман."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "It's colder here. The fog is thicker than yesterday.",
     "ru": "Здесь холоднее. И туман гуще, чем вчера."
    },
    {
     "t": "line",
     "who": "pip",
     "if": "pip_boat",
     "en": "It's colder than my fridge. And my fridge is very cold.",
     "ru": "Холоднее, чем у меня в холодильнике. А он у меня ледяной."
    },
    {
     "t": "line",
     "who": "narrator",
     "ifnot": "pip_boat",
     "en": "You're alone. Black water. White fog.",
     "ru": "Ты одна. Чёрная вода. Белый туман."
    },
    {
     "t": "line",
     "who": "pip",
     "ifnot": "pip_boat",
     "en": "Love? It's Pip. I'm here. On the radio.",
     "ru": "Милая? Это Пип. Я здесь. На связи."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your compass spins. Round and round.",
     "ru": "Компас крутится. По кругу, по кругу."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Somewhere in the fog, a radio plays. Old music.",
     "ru": "Где-то в тумане играет радио. Старая музыка."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "That's not me. Don't listen to it.",
     "ru": "Это не я. Не слушай."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "{name}, listen to me. Rocks ahead. Go right. Trust me.",
     "ru": "{name}, слушай меня. Впереди камни. Бери вправо. Поверь мне."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "The left side is more dangerous. Hurry up!",
     "ru": "Слева опаснее. Скорее!"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Black rocks come out of the fog.",
     "ru": "Из тумана выступают чёрные камни."
    },
    {
     "t": "check",
     "q_en": "The rocks! Sol said... which side?",
     "q_ru": "Камни! Что сказал Сол… с какой стороны?",
     "options": [
      {
       "en": "⬅️ Left of the rocks",
       "ru": "Слева от камней",
       "correct": false
      },
      {
       "en": "⬆️ Straight ahead",
       "ru": "Прямо",
       "correct": false
      },
      {
       "en": "➡️ Right of the rocks",
       "ru": "Справа от камней",
       "correct": true
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "Bang! The boat hits a rock.",
       "ru": "Удар! Лодка бьётся о камень."
      },
      {
       "who": "narrator",
       "en": "Cold water fills your shoes.",
       "ru": "В ботинки заливается ледяная вода."
      },
      {
       "who": "sol",
       "en": "RIGHT, {name}! Right! Go... right.",
       "ru": "ВПРАВО, {name}! Вправо! Бери… вправо."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "You go right. The rocks pass. Very close.",
       "ru": "Ты уходишь вправо. Камни проплывают мимо. Совсем близко."
      }
     ]
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Good. Now faster. It's 2:40.",
     "ru": "Хорошо. Теперь быстрее. Уже 2:40."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Faster, love. Hurry up. Then home. Then tea.",
     "ru": "Быстрее, милая. Скорее. Потом домой. Потом чай."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then you see it. The tower.",
     "ru": "И тут ты видишь её. Башню."
    },
    {
     "t": "scene",
     "place_en": "Tern Island, 2:50 a.m.",
     "place_ru": "Остров Терн, 2:50 ночи",
     "emoji": "🏝️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo's boat lies on the stones. Empty.",
     "ru": "На камнях лежит лодка Тео. Пустая."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "His phone is on the seat. Dead.",
     "ru": "На сиденье — его телефон. Разряжен."
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Тео нигде нет. Крикни в туман: позови его и спроси, где он.",
     "hint_ru": "Начни так: Theo! Where are...?",
     "example_en": "Theo! Where are you?",
     "example_ru": "Тео! Где ты?",
     "accept": [
      "theo",
      "where are you",
      "where",
      "are you here",
      "hello",
      "тео"
     ],
     "after": [
      {
       "who": "narrator",
       "en": "Only the fog answers.",
       "ru": "Отвечает только туман."
      },
      {
       "who": "pip",
       "if": "pip_boat",
       "en": "Theo! There's tea! Tea!",
       "ru": "Тео! Тут чай! Чай!"
      },
      {
       "who": "pip",
       "ifnot": "pip_boat",
       "en": "Love? Did you find him?",
       "ru": "Милая? Ты нашла его?"
      },
      {
       "who": "narrator",
       "en": "Then you see footprints. To the tower.",
       "ru": "А потом ты видишь следы. Они ведут к башне."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "An old lock. Four numbers. It needs a code.",
     "ru": "Старый замок. Четыре цифры. Нужен код."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You remember Nora's note. Her handwriting:",
     "ru": "Ты вспоминаешь записку Норы. Её почерк:"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "'The code is my last night on air.'",
     "ru": "«Код — моя последняя ночь в эфире»."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "{name}, it's 2:58. Hurry up!",
     "ru": "{name}, уже 2:58. Скорее!"
    },
    {
     "t": "check",
     "q_en": "Nora's last night on air. Enter the code.",
     "q_ru": "Последняя ночь Норы в эфире. Введи код.",
     "options": [
      {
       "en": "1013",
       "ru": "1013",
       "correct": false
      },
      {
       "en": "1031",
       "ru": "1031",
       "correct": true
      },
      {
       "en": "0303",
       "ru": "0303",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "Buzz. The lock doesn't move.",
       "ru": "Бззз. Замок не поддаётся."
      },
      {
       "who": "narrator",
       "en": "A flash: your poster. 'Lantern Night. October 31.'",
       "ru": "Вспышка: твой плакат. «Ночь фонарей. 31 октября»."
      },
      {
       "who": "sol",
       "en": "Lantern Night. October is ten. Then thirty-one.",
       "ru": "Ночь фонарей. Октябрь — это десять. Потом тридцать один."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "Ten. Thirty-one. Click. The code works.",
       "ru": "Десять. Тридцать один. Щелчок. Код подошёл."
      }
     ]
    },
    {
     "t": "scene",
     "place_en": "The tower, 3:00 a.m.",
     "place_ru": "Башня, 3:00 ночи",
     "emoji": "🗼"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Up the stairs. Nora's studio. Still 1996.",
     "ru": "Вверх по лестнице. Студия Норы. Здесь всё ещё 1996-й."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A red sign: ON AIR. It's on.",
     "ru": "Красная табличка: «В ЭФИРЕ». Она горит."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A mug on the desk. You touch it. Still warm.",
     "ru": "На столе кружка. Ты трогаешь её. Она ещё тёплая."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo sits at the microphone. Headphones on.",
     "ru": "Тео сидит у микрофона. В наушниках."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Oh. Hi, {name}.",
     "ru": "О. Привет, {name}."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He's alive. But too calm.",
     "ru": "Он живой. Но слишком спокойный."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I'm okay. The fog came, so I waited.",
     "ru": "Я в порядке. Пришёл туман, и я решил переждать."
    },
    {
     "t": "line",
     "who": "pip",
     "if": "pip_boat",
     "en": "So you're Theo. I'm Pip. It's a long story.",
     "ru": "Так вот ты какой, Тео. Я Пип. Это долгая история."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "It's almost 3:03. I want to hear it. From here.",
     "ru": "Почти 3:03. Я хочу это услышать. Отсюда."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The clock on the wall: 3:02.",
     "ru": "Часы на стене: 3:02."
    },
    {
     "t": "choice",
     "q_en": "One minute left. What do you do?",
     "q_ru": "Осталась минута. Что ты сделаешь?",
     "options": [
      {
       "en": "Pull his arm. 'We're leaving. Now.'",
       "ru": "Потянуть его за руку. «Уходим. Сейчас же»",
       "flag": "pulled",
       "reply": [
        {
         "who": "theo",
         "en": "One minute. Please. Just one.",
         "ru": "Одну минуту. Пожалуйста. Всего одну."
        },
        {
         "who": "narrator",
         "en": "He doesn't move.",
         "ru": "Он не двигается."
        }
       ]
      },
      {
       "en": "Sit next to him. 'One minute. Then we go.'",
       "ru": "Сесть рядом. «Одна минута. Потом уходим»",
       "flag": "sat",
       "reply": [
        {
         "who": "theo",
         "en": "Copy that.",
         "ru": "Принял."
        },
        {
         "who": "narrator",
         "en": "His hand finds yours. It's cold.",
         "ru": "Его рука находит твою. Она холодная."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "3:03. The room turns red.",
     "ru": "3:03. Комнату заливает красный свет."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo's hand touches the microphone.",
     "ru": "Рука Тео касается микрофона."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}, listen. I can hear—",
     "ru": "{name}, слушай. Я слышу…"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He stops. His eyes are empty.",
     "ru": "Он замирает. Глаза пустые."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "His mouth doesn't move. But the speaker talks.",
     "ru": "Его губы не двигаются. Но динамик говорит."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}? I can't see you. It's so cold here.",
     "ru": "{name}? Я тебя не вижу. Здесь так холодно."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo's voice. From the speaker.",
     "ru": "Голос Тео. Из динамика."
    },
    {
     "t": "line",
     "who": "pip",
     "if": "pip_boat",
     "en": "No. No, no. Not again.",
     "ru": "Нет. Нет-нет. Только не снова."
    },
    {
     "t": "line",
     "who": "pip",
     "ifnot": "pip_boat",
     "en": "Love? What's going on? Love?",
     "ru": "Милая? Что там происходит? Милая?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You grab his hands. Colder than the lake.",
     "ru": "Ты хватаешь его за руки. Они холоднее озера."
    },
    {
     "t": "line",
     "who": "pip",
     "if": "pip_boat",
     "en": "Make him look at you, love. Talk to him.",
     "ru": "Пусть он посмотрит на тебя, милая. Говори с ним."
    },
    {
     "t": "line",
     "who": "pip",
     "ifnot": "pip_boat",
     "en": "Love, make him look at you. Say his name.",
     "ru": "Милая, пусть он посмотрит на тебя. Назови его имя."
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Тео застыл. Верни его: скажи, чтобы он посмотрел на тебя и вернулся.",
     "hint_ru": "Начни так: Theo, look at...",
     "example_en": "Theo, look at me. Come back.",
     "example_ru": "Тео, посмотри на меня. Вернись.",
     "accept": [
      "look at me",
      "come back",
      "theo",
      "look",
      "back",
      "wake up",
      "please",
      "тео"
     ],
     "after": [
      {
       "who": "narrator",
       "en": "Theo breathes in. He blinks. He's back.",
       "ru": "Тео резко вдыхает. Моргает. Он вернулся."
      },
      {
       "who": "theo",
       "en": "{name}? Your hands are so warm.",
       "ru": "{name}? У тебя такие тёплые руки."
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "You said, 'Look at me.' I looked. I came back.",
     "ru": "Ты сказала: «Посмотри на меня». Я посмотрел. И вернулся."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo smiles. Just a little.",
     "ru": "Тео улыбается. Чуть-чуть."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "You're scarier than a ghost.",
     "ru": "Ты страшнее любого призрака."
    },
    {
     "t": "line",
     "who": "pip",
     "if": "pip_boat",
     "en": "Come here, you two. Tea. Now.",
     "ru": "Идите сюда, вы оба. Чай. Сейчас же."
    },
    {
     "t": "line",
     "who": "pip",
     "ifnot": "pip_boat",
     "en": "Is he okay? Love, tell me. Is he okay?",
     "ru": "Он в порядке? Милая, скажи. Он в порядке?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo looks at his watch. 3:03. It doesn't move.",
     "ru": "Тео смотрит на часы. 3:03. Стрелки не двигаются."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Okay. That's not normal.",
     "ru": "Так. Это ненормально."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then static. Then your voice. Crying.",
     "ru": "И тут — помехи. А потом твой голос. Сквозь слёзы."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "This is my last message. I didn't save him. You still can.",
     "ru": "Это моё последнее сообщение. Я не спасла его. А ты ещё можешь."
    }
   ],
   "cliff_en": "This is my last message. I didn't save him. You still can.",
   "cliff_ru": "Это моё последнее сообщение. Я не спасла его. А ты ещё можешь.",
   "teaser_ru": "В следующей серии: голос из башни уже не твой. Нора выходит на связь.",
   "claude_scene": "Role-play with Theo, 3:10 a.m., in Nora's old studio inside the tower on Tern Island. Theo was just pulled back after freezing at the microphone. He is shaking, his hands are slowly getting warm, and his watch stopped at 3:03. Speak as Theo in very simple English (low A2, sentences of 10 words or fewer, past simple and comparatives like colder, faster, more dangerous). He is deadpan: one dry joke, then one true thing. Ask {name} how she found him, how the lake was, and what she said to bring him back. Thank her quietly, without being cheesy. He does not understand the last message ('I didn't save him') and is scared of it, but he hides that behind a joke. Keep each reply to 1-3 short lines, and react warmly even if she answers in Russian. Never correct her grammar and never give scores or praise outside the story."
  },
  {
   "id": "s1e9",
   "n": 9,
   "title": "Nora",
   "title_ru": "Нора",
   "logline_ru": "Нора выходит на связь вживую и объясняет правила. У тебя меньше суток, чтобы спасти Тео.",
   "words": [
    {
     "en": "Have you ever",
     "ru": "Ты когда-нибудь…? «Have you ever been this scared?» — Тебе когда-нибудь было так страшно? Так спрашивают про опыт за всю жизнь."
    },
    {
     "en": "I've never",
     "ru": "я никогда не… «I've never been brave.» — Я никогда не был смелым. Так говорят: «ни разу в жизни»."
    },
    {
     "en": "already",
     "ru": "уже. «You've already heard them.» — Ты их уже слышала. Ставят перед глаголом."
    },
    {
     "en": "I promise",
     "ru": "обещаю. «I promise. Trust me.» — Обещаю. Поверь мне. Так дают слово."
    },
    {
     "en": "Trust me",
     "ru": "поверь мне. «Trust me, {name}.» — Поверь мне. Очень частая фраза в сериалах, особенно перед опасным планом."
    },
    {
     "en": "alive",
     "ru": "живой, живая. «She's alive.» — Она жива. Говорят про людей после опасности."
    },
    {
     "en": "Not yet",
     "ru": "пока нет, ещё нет. «Am I dying? — Not yet.» Короткий ответ на «уже?»."
    },
    {
     "en": "too long",
     "ru": "слишком долго. «Don't stay too long.» — Не оставайся слишком долго. Так говорят, когда отпускают, но волнуются."
    }
   ],
   "recap": [
    {
     "who": "narrator",
     "en": "Thick fog. Dangerous rocks. Sol on the radio: 'Faster! Hurry up!'",
     "ru": "Густой туман. Опасные камни. Сол по рации: «Быстрее! Скорее!»"
    },
    {
     "who": "narrator",
     "en": "The tower code: 1031. Inside, it was colder than the lake.",
     "ru": "Код башни: 1031. Внутри было холоднее, чем на озере."
    },
    {
     "who": "narrator",
     "en": "At 3:03, Theo froze. You said: 'Look at me. Come back.'",
     "ru": "В 3:03 Тео застыл. Ты сказала: «Посмотри на меня. Вернись»."
    },
    {
     "who": "voice",
     "en": "This is my last message. I didn't save him. You still can.",
     "ru": "Это моё последнее сообщение. Я не спасла его. А ты ещё можешь."
    },
    {
     "who": "narrator",
     "en": "Remember: Lantern Night. October 31.",
     "ru": "Запомни: Ночь фонарей. 31 октября."
    }
   ],
   "recap_check": {
    "t": "check",
    "who": "theo",
    "q_en": "I froze. What did you tell me?",
    "q_ru": "Я застыл. Что ты мне сказала?",
    "options": [
     {
      "en": "Look at me. Come back.",
      "ru": "Посмотри на меня. Вернись.",
      "correct": true
     },
     {
      "en": "Hurry up. Go right.",
      "ru": "Скорее. Направо.",
      "correct": false
     },
     {
      "en": "Turn it off. Please.",
      "ru": "Выключи. Пожалуйста.",
      "correct": false
     }
    ],
    "wrong": [
     {
      "who": "theo",
      "en": "'Hurry up'? That's Sol. You're not Sol.",
      "ru": "«Скорее»? Это Сол так говорит. Ты не Сол."
     },
     {
      "who": "theo",
      "en": "You held my cold hands. You said: 'Look at me. Come back.'",
      "ru": "Ты держала мои ледяные руки. И сказала: «Посмотри на меня. Вернись»."
     }
    ],
    "right": [
     {
      "who": "theo",
      "en": "Yeah. I heard you. From very far away.",
      "ru": "Да. Я тебя слышал. Откуда-то очень издалека."
     }
    ]
   },
   "beats": [
    {
     "t": "scene",
     "place_en": "Tern Island. The tower. 3:03 a.m.",
     "place_ru": "Остров Терн. Башня. 3:03 ночи",
     "emoji": "🔴"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}. That was you. You were crying.",
     "ru": "{name}. Это была ты. Ты плакала."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Static. Then a new voice. Warm. Very close.",
     "ru": "Помехи. Потом новый голос. Тёплый. Совсем близко."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "This is Nora. It's 3:03. Hello, {name}. Hello, Theo.",
     "ru": "Это Нора. Сейчас 3:03. Привет, {name}. Привет, Тео."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Not a tape. She's live. She's alive.",
     "ru": "Это не запись. Она в эфире. Она жива."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your walkie-talkie clicks. It's Pip.",
     "ru": "Щёлкает твоя рация. Это Пип."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Nora? Nora, is that really you?",
     "ru": "Нора? Нора, это правда ты?"
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Hi, little sister. I've missed you.",
     "ru": "Привет, сестрёнка. Я так по тебе скучала."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The red light starts to fade. Slowly.",
     "ru": "Красный свет начинает гаснуть. Медленно."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Quick. Theo, my notebook is on the desk. Open it.",
     "ru": "Быстрее. Тео, мой блокнот на столе. Открой его."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "I'm in the between. Here, it's always 3:03.",
     "ru": "Я в Межвремье. Здесь всегда 3:03."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Her old handwriting: 'THE BETWEEN. ALWAYS 3:03.'",
     "ru": "Её старый почерк: «МЕЖВРЕМЬЕ. ВСЕГДА 3:03»."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "I can hear every 3:03. Yesterday. Tomorrow. Thirty years.",
     "ru": "Я слышу каждую минуту 3:03. Вчера. Завтра. Тридцать лет подряд."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Theo. You touched the door at 3:03.",
     "ru": "Тео. Ты коснулся двери в 3:03."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Now the between has a part of you.",
     "ru": "Теперь часть тебя — в Межвремье."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A part of Theo. Over there.",
     "ru": "Часть Тео. Там."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Am I dying?",
     "ru": "Я умираю?"
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Not yet.",
     "ru": "Пока нет."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Tomorrow is Lantern Night. At 3:03, the door opens.",
     "ru": "Завтра Ночь фонарей. В 3:03 дверь откроется."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Someone can call him back. Then he stays.",
     "ru": "Кто-то может позвать его обратно. Тогда он останется."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the page: 'LANTERN NIGHT. 3:03. CALL HIS NAME.'",
     "ru": "На странице: «НОЧЬ ФОНАРЕЙ. 3:03. ПОЗОВИ ЕГО ПО ИМЕНИ»."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "And you can send messages. To any night.",
     "ru": "И ты можешь отправлять сообщения. В любую ночь."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "{name}. The voice you hear is you. From tomorrow night.",
     "ru": "{name}. Голос, который ты слышишь, — это ты. Из завтрашней ночи."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your voice. From tomorrow.",
     "ru": "Твой голос. Из завтра."
    },
    {
     "t": "choice",
     "q_en": "The light is fading. One question. What do you ask?",
     "q_ru": "Свет гаснет. Один вопрос. О чём ты спросишь?",
     "options": [
      {
       "en": "Why me?",
       "ru": "Почему я?",
       "flag": "asked_why_me",
       "reply": [
        {
         "who": "nora",
         "en": "Because you already did it. I've heard you.",
         "ru": "Потому что ты уже это сделала. Я тебя слышала."
        },
        {
         "who": "narrator",
         "en": "Already. But for you, it's tomorrow.",
         "ru": "Уже. Но для тебя это будет завтра."
        }
       ]
      },
      {
       "en": "Who sent the last message?",
       "ru": "Кто отправил последнее сообщение?",
       "flag": "asked_last",
       "reply": [
        {
         "who": "narrator",
         "en": "Silence. Only static.",
         "ru": "Тишина. Только помехи."
        },
        {
         "who": "nora",
         "en": "Not you.",
         "ru": "Не ты."
        },
        {
         "who": "narrator",
         "en": "Not you? Then who?",
         "ru": "Не ты? Тогда кто?"
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Trust me, {name}. Leave before the red light dies.",
     "ru": "Поверь мне, {name}. Уходи, пока красный свет не погас."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Don't stay too long. Like me.",
     "ru": "Не оставайся слишком долго. Как я."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Remember: leave before the red light dies.",
     "ru": "Запомни: уйти, пока красный свет не погас."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "3:04. The red light dies. Silence.",
     "ru": "3:04. Красный свет гаснет. Тишина."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "She's alive. Thirty years. She's alive.",
     "ru": "Она жива. Тридцать лет. Она жива."
    },
    {
     "t": "scene",
     "place_en": "The tower. 3:30 a.m.",
     "place_ru": "Башня. 3:30 ночи",
     "emoji": "🕯️"
    },
    {
     "t": "line",
     "who": "theo",
     "en": "3:30. Not 3:03. I checked twice.",
     "ru": "3:30. Не 3:03. Я проверил дважды."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Stay there. I'll come in the morning. I promise.",
     "ru": "Оставайтесь там. Я приплыву утром. Обещаю."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Nora's old lamp. A thermos of Pip's tea.",
     "ru": "Старая лампа Норы. Термос с чаем от Пип."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Tea. Not coffee. I need coffee to live.",
     "ru": "Чай. Не кофе. А мне для жизни нужен кофе."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Have you ever had a worse first week?",
     "ru": "У тебя бывала первая рабочая неделя хуже?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Ghosts. Fog. A boss with secrets. Honestly? No.",
     "ru": "Призраки. Туман. Начальник с секретами. Честно? Нет."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Okay. No jokes. Have you ever been this scared?",
     "ru": "Ладно. Без шуток. Тебе когда-нибудь было так страшно?"
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Тео спрашивает, было ли тебе когда-нибудь так страшно. Ответь честно.",
     "hint_ru": "Можно начать с No, never... или Yes...",
     "example_en": "No. I've never been this scared. Have you?",
     "example_ru": "Нет. Мне никогда не было так страшно. А тебе?",
     "accept": [
      "never",
      "no",
      "yes",
      "have",
      "scared",
      "not"
     ],
     "after": [
      {
       "who": "theo",
       "en": "Me? Once.",
       "ru": "Мне? Один раз."
      },
      {
       "who": "theo",
       "en": "Five minutes ago.",
       "ru": "Пять минут назад."
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I've never been brave. I just make jokes.",
     "ru": "Я никогда не был смелым. Я просто шучу."
    },
    {
     "t": "choice",
     "q_en": "Theo is shaking. His hands are cold.",
     "q_ru": "Тео дрожит. Руки у него ледяные.",
     "options": [
      {
       "en": "Give him your scarf.",
       "ru": "Отдать ему свой шарф.",
       "flag": "gave_scarf",
       "reply": [
        {
         "who": "narrator",
         "en": "You put your scarf around him.",
         "ru": "Ты укутываешь его своим шарфом."
        },
        {
         "who": "theo",
         "en": "It smells like Pip's kitchen. Thank you.",
         "ru": "Пахнет кухней Пип. Спасибо."
        }
       ]
      },
      {
       "en": "Sit close. Hold his hands.",
       "ru": "Сесть рядом. Взять его за руки.",
       "flag": "held_hands",
       "reply": [
        {
         "who": "narrator",
         "en": "You sit close. You hold his hands.",
         "ru": "Ты садишься рядом. Берёшь его за руки."
        },
        {
         "who": "theo",
         "en": "Okay. Warmer. Much warmer.",
         "ru": "Так. Теплее. Намного теплее."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You write a list on your phone. Every message.",
     "ru": "Ты пишешь список в телефоне. Каждое сообщение."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "'It's me.' 'Find the blue door.' 'At nine, someone falls.'",
     "ru": "«Это я». «Найди синюю дверь». «В девять кто-то упадёт»."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "'Not on Friday.' 'Sol is going to lie.' 'I didn't save him.'",
     "ru": "«Не в пятницу». «Сол солжёт». «Я не спасла его»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "You've already heard them all.",
     "ru": "Ты их все уже слышала."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You've already heard them. Tomorrow, you say them.",
     "ru": "Ты их уже слышала. Завтра ты их скажешь."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Wait. 'Sol. Hire her.' Was that you too?",
     "ru": "Стоп. «Сол. Найми её». Это тоже была ты?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo smiles.",
     "ru": "Тео улыбается."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "You got this job from the future. Great interview.",
     "ru": "Ты устроилась на работу из будущего. Отличное собеседование."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo turns the page. A drawing: three switches.",
     "ru": "Тео переворачивает страницу. Рисунок: три переключателя."
    },
    {
     "t": "line",
     "who": "narrator",
     "if": "took_photos",
     "en": "Your photos of the walls show it too.",
     "ru": "На твоих фото стен это тоже есть."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Under them: 'BLUE. WHITE. RED. NEVER RED FIRST.'",
     "ru": "Под ними: «СИНИЙ. БЕЛЫЙ. КРАСНЫЙ. НИКОГДА НЕ КРАСНЫЙ ПЕРВЫМ»."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Never red first. She wrote it twice.",
     "ru": "Красный — никогда первым. Она написала это дважды."
    },
    {
     "t": "check",
     "who": "theo",
     "q_en": "Tomorrow, you do it. Show me. What order?",
     "q_ru": "Завтра это делаешь ты. Покажи мне. В каком порядке?",
     "options": [
      {
       "en": "Blue, white, red",
       "ru": "Синий, белый, красный",
       "correct": true
      },
      {
       "en": "Red, white, blue",
       "ru": "Красный, белый, синий",
       "correct": false
      },
      {
       "en": "White, blue, red",
       "ru": "Белый, синий, красный",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "Click. Nora's lamp flickers. The room gets colder.",
       "ru": "Щёлк. Лампа Норы мигает. В комнате становится холоднее."
      },
      {
       "who": "theo",
       "en": "Blue. Then white. Then red. She wrote it twice.",
       "ru": "Синий. Потом белый. Потом красный. Она написала это дважды."
      }
     ],
     "right": [
      {
       "who": "theo",
       "en": "Blue. White. Red. Copy that. You're ready.",
       "ru": "Синий. Белый. Красный. Принял. Ты готова."
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Is it morning?",
     "ru": "Уже утро?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Not yet. 5 a.m. Theo's eyes are closing.",
     "ru": "Пока нет. Пять утра. У Тео закрываются глаза."
    },
    {
     "t": "check",
     "who": "theo",
     "q_en": "Tomorrow. The red light. What do we do?",
     "q_ru": "Завтра. Красный свет. Что мы делаем?",
     "options": [
      {
       "en": "Leave before it dies.",
       "ru": "Уйти, пока он не погас.",
       "correct": true
      },
      {
       "en": "Wait until four.",
       "ru": "Ждать до четырёх.",
       "correct": false
      },
      {
       "en": "Turn it off.",
       "ru": "Выключить его.",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "The lamp goes dark. For one second.",
       "ru": "Лампа гаснет. На одну секунду."
      },
      {
       "who": "theo",
       "en": "Nora said it. Leave before the red light dies.",
       "ru": "Нора так сказала. Уходи, пока красный свет не погас."
      },
      {
       "who": "theo",
       "en": "Don't stay too long. Like her.",
       "ru": "Не оставайся слишком долго. Как она."
      }
     ],
     "right": [
      {
       "who": "theo",
       "en": "Yeah. Leave before it dies. Not like Nora.",
       "ru": "Да. Уйти, пока не погас. Не как Нора."
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Promise me. Don't stay too long.",
     "ru": "Обещай мне. Не оставайся слишком долго."
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Тео просит пообещать, что ты не задержишься у двери. Пообещай ему.",
     "hint_ru": "Начни с I promise...",
     "example_en": "I promise. Trust me.",
     "example_ru": "Обещаю. Поверь мне.",
     "accept": [
      "promise",
      "i will",
      "okay",
      "ok",
      "yes",
      "trust",
      "won't"
     ],
     "after": [
      {
       "who": "theo",
       "en": "Okay. Then I promise too. I'll come back.",
       "ru": "Хорошо. Тогда я тоже обещаю. Я вернусь."
      },
      {
       "who": "narrator",
       "en": "His head falls on your shoulder. He's asleep.",
       "ru": "Его голова опускается тебе на плечо. Он уснул."
      }
     ]
    },
    {
     "t": "scene",
     "place_en": "Tern Island. Dawn.",
     "place_ru": "Остров Терн. Рассвет",
     "emoji": "🌅"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "A boat horn. Sol's boat comes out of the fog.",
     "ru": "Гудок лодки. Из тумана выплывает лодка Сола."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip runs to you. A big hug.",
     "ru": "Пип бежит к тебе. Крепко обнимает."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your tea spills. Everywhere.",
     "ru": "Твой чай разливается. Везде."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Sorry, love. Sorry. Tea first. Then problems.",
     "ru": "Прости, милая. Прости. Сначала чай. Потом проблемы."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "You're alive. Both of you.",
     "ru": "Вы живы. Оба."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "I didn't sleep. Not one minute.",
     "ru": "Я не спал. Ни минуты."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Thirty years. I've never heard her. Tonight, I did.",
     "ru": "Тридцать лет я её не слышал. А этой ночью — услышал."
    },
    {
     "t": "scene",
     "place_en": "Lake Orrin. The boat home.",
     "place_ru": "Озеро Оррин. Обратно на лодке",
     "emoji": "🛥️"
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Okay. Three things. Blankets. Tea. Sleep.",
     "ru": "Значит так. Три пункта. Пледы. Чай. Сон."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Coffee. Four things.",
     "ru": "Кофе. Четыре пункта."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo holds your hand.",
     "ru": "Тео держит тебя за руку."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I'm fine, {name}. Trust me.",
     "ru": "Я в порядке, {name}. Поверь мне."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "For one second, his hand flickers. Like bad TV.",
     "ru": "На секунду его рука мерцает. Как сломанный телевизор."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You can see the water through it.",
     "ru": "Сквозь неё видно воду."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Okay. That's not normal.",
     "ru": "Так. Это ненормально."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Nora's hand did that too. One day before she disappeared.",
     "ru": "У Норы рука тоже так мерцала. За день до того, как она исчезла."
    }
   ],
   "cliff_en": "Nora's hand did that too. One day before she disappeared.",
   "cliff_ru": "У Норы рука тоже так мерцала. За день до того, как она исчезла.",
   "teaser_ru": "В финале сезона: Ночь фонарей, три переключателя и одна минута, чтобы вернуть Тео.",
   "claude_scene": "It's 4 a.m. in Nora's old tower on Tern Island. The fog is black, Nora's old lamp is low, and the tea in Pip's thermos is getting cold. Theo can't sleep. He is a little scared and makes dry jokes. He wants to talk honestly with you: 'Have you ever...?' questions about fear, first jobs, home and brave things ('I've never been brave. I just make jokes.'). At the end he asks you to promise one thing about tomorrow night: leave before the red light dies. Use short, simple sentences (max 11 words), present perfect chunks (Have you ever...? I've never... already) and 'I promise' / 'I'll...'. Speak slowly and warmly."
  },
  {
   "id": "s1e10",
   "n": 10,
   "title": "Lantern Night",
   "title_ru": "Ночь фонарей",
   "logline_ru": "Ночь фонарей. Ты возвращаешься в башню, чтобы сказать всё, что уже слышала, и вернуть Тео.",
   "words": [
    {
     "en": "brave",
     "ru": "смелый, смелая · Be brave. — Будь смелой. · так поддерживают перед чем-то страшным"
    },
    {
     "en": "save",
     "ru": "спасти · We save him. — Мы его спасаем. · про людей, не только про файлы"
    },
    {
     "en": "message",
     "ru": "сообщение, послание · Messages first. — Сначала сообщения. · и SMS, и голос, и записка"
    },
    {
     "en": "Follow my voice",
     "ru": "Иди на мой голос · Theo, follow my voice. — Тео, иди на мой голос. · follow — идти за кем-то или чем-то"
    },
    {
     "en": "goodbye",
     "ru": "прощай, до свидания · Don't say goodbye. — Не прощайся. · звучит серьёзно, иногда навсегда"
    },
    {
     "en": "I'll come back",
     "ru": "Я вернусь · I'll come back for you. — Я вернусь за тобой. · I'll = I will, так дают обещание"
    },
    {
     "en": "It's over",
     "ru": "Всё закончилось · 3:04. It's over. — 3:04. Всё закончилось. · говорят с облегчением или с грустью"
    },
    {
     "en": "See you",
     "ru": "Увидимся · See you at ten. — Увидимся в десять. · лёгкое «пока» между своими"
    }
   ],
   "recap": [
    {
     "who": "nora",
     "en": "This is Nora. It's 3:03. I'm alive. I'm in the between.",
     "ru": "Это Нора. Сейчас 3:03. Я жива. Я в Межвремье."
    },
    {
     "who": "nora",
     "en": "The voice is you. You've already heard every message.",
     "ru": "Этот голос — ты. Ты уже слышала все сообщения."
    },
    {
     "who": "theo",
     "en": "Have you ever been this scared? Promise me. Don't stay too long.",
     "ru": "Тебе когда-нибудь было так страшно? Обещай мне. Не задерживайся там."
    },
    {
     "who": "narrator",
     "en": "Theo's hand flickers. He isn't gone. Not yet.",
     "ru": "Рука Тео мерцает. Он ещё здесь. Пока что."
    }
   ],
   "recap_check": {
    "t": "check",
    "q_en": "Theo, half asleep: 'Tonight. The red light. What do we do?'",
    "q_ru": "Тео, сквозь сон: «Сегодня ночью. Красный свет. Что мы делаем?»",
    "options": [
     {
      "en": "Leave before it dies.",
      "ru": "Уйти, пока он не погас.",
      "correct": true
     },
     {
      "en": "Wait until four.",
      "ru": "Ждать до четырёх.",
      "correct": false
     },
     {
      "en": "Turn it off.",
      "ru": "Выключить его.",
      "correct": false
     }
    ],
    "wrong": [
     {
      "who": "theo",
      "en": "No. Nora waited. Look at her now.",
      "ru": "Нет. Нора ждала. И где она теперь."
     },
     {
      "who": "theo",
      "en": "We leave. Before the red light dies. Before.",
      "ru": "Мы уходим. Пока красный свет не погас. Заранее."
     }
    ],
    "right": [
     {
      "who": "theo",
      "en": "Yes. Before it dies. Trust me, I remember.",
      "ru": "Да. Пока не погас. Поверь, я помню."
     }
    ]
   },
   "beats": [
    {
     "t": "scene",
     "place_en": "Radio Dunmere — Studio B",
     "place_ru": "Радио Данмир — студия B",
     "emoji": "🎙️"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Saturday. Lantern Night. Studio B, the same table.",
     "ru": "Суббота. Ночь фонарей. Студия B, тот же стол."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo lifts his coffee. His hand flickers. He smiles.",
     "ru": "Тео поднимает кофе. Его рука мерцает. Он улыбается."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Relax. It's a new feature.",
     "ru": "Расслабься. Это новая функция."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Okay. Three things.",
     "ru": "Значит так. Три пункта."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "One. I'm at the station tonight. I'm not going to sleep. Not this time.",
     "ru": "Первое. Ночью я на станции. Я не буду спать. Не в этот раз."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Two. Theo stays on air. He's too weak for the boat.",
     "ru": "Второе. Тео остаётся в эфире. Он слишком слаб для лодки."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I'm fifty percent here. The good fifty.",
     "ru": "Я здесь на пятьдесят процентов. На лучшие пятьдесят."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Three. {name} and Pip go to the tower.",
     "ru": "Третье. {name} и Пип плывут к башне."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the whiteboard, in big letters: BLUE. WHITE. RED.",
     "ru": "На доске, крупными буквами: СИНИЙ. БЕЛЫЙ. КРАСНЫЙ."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "The switches. Blue, white, red. Never red first.",
     "ru": "Рубильники. Синий, белый, красный. Красный — никогда не первым."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Then every message. Then you call Theo, and we save him.",
     "ru": "Потом — все сообщения. Потом ты зовёшь Тео, и мы его спасаем."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "If I get lost, I'll follow your voice.",
     "ru": "Если я потеряюсь, я пойду на твой голос."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "And {name}... don't say goodbye. Say 'See you.'",
     "ru": "И, {name}... не прощайся. Скажи «увидимся»."
    },
    {
     "t": "scene",
     "place_en": "The shore of Lake Orrin",
     "place_ru": "Берег озера Оррин",
     "emoji": "🏮"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Evening. The whole town is on the shore, with paper lanterns.",
     "ru": "Вечер. Весь город на берегу, с бумажными фонариками."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Marta waves a yellow lantern. Sol and Pip share one umbrella.",
     "ru": "Марта машет жёлтым фонариком. Сол и Пип — под одним зонтом."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Thirty years, love. I never said goodbye to her.",
     "ru": "Тридцать лет, милая. Я так и не попрощалась с ней."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "Come back. Both of you. Is that clear?",
     "ru": "Возвращайтесь. Обе. Это ясно?"
    },
    {
     "t": "line",
     "who": "pip",
     "en": "I'll come back, Sol. I'll come back. Stay awake.",
     "ru": "Я вернусь, Сол. Я вернусь. Только не спи."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then every radio on the shore turns on.",
     "ru": "И тут сами включаются все радио на берегу."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "This is Theo. Happy Lantern Night, Dunmere. {name}... be brave.",
     "ru": "Это Тео. С Ночью фонарей, Данмир. {name}... будь смелой."
    },
    {
     "t": "scene",
     "place_en": "The yellow boat",
     "place_ru": "Жёлтая лодка",
     "emoji": "🛶"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "The lake is calmer tonight. And brighter. A hundred lanterns.",
     "ru": "Сегодня озеро спокойнее. И светлее. Вокруг сотня фонариков."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Nora loved this night. More than anything.",
     "ru": "Нора любила эту ночь. Больше всего на свете."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "She was brave, love. Braver than me.",
     "ru": "Она была смелой, милая. Смелее меня."
    },
    {
     "t": "scene",
     "place_en": "Tern Island — the tower",
     "place_ru": "Остров Терн — башня",
     "emoji": "🗼"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "2:59. Nora's old studio. Three switches on the wall.",
     "ru": "2:59. Старая студия Норы. На стене три рубильника."
    },
    {
     "t": "check",
     "q_en": "Pip lifts her lantern. 'Which one first, love?'",
     "q_ru": "Пип поднимает фонарик. «С какого начинать, милая?»",
     "options": [
      {
       "en": "Blue → White → Red",
       "ru": "Синий → Белый → Красный",
       "correct": true
      },
      {
       "en": "Red → White → Blue",
       "ru": "Красный → Белый → Синий",
       "correct": false
      },
      {
       "en": "White → Blue → Red",
       "ru": "Белый → Синий → Красный",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "The lamp flickers. Something knocks on the glass. Twice.",
       "ru": "Лампа мигает. Кто-то стучит в стекло. Дважды."
      },
      {
       "who": "pip",
       "en": "Blue. White. Red. Never red first, love. Never red first.",
       "ru": "Синий. Белый. Красный. Красный — никогда не первым, милая. Никогда."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "The tower hums. The old microphone wakes up.",
       "ru": "Башня гудит. Старый микрофон просыпается."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "3:03. Red light fills the room. The old door is open.",
     "ru": "3:03. Комнату заливает красный свет. Старая дверь открыта."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Behind the old glass stands a woman. Her hand is on the glass.",
     "ru": "За старым стеклом стоит женщина. Её ладонь на стекле."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Nora. Nora.",
     "ru": "Нора. Нора."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "This is Nora. It's 3:03. Hello, little sister.",
     "ru": "Это Нора. Сейчас 3:03. Привет, сестрёнка."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Slowly, very slowly, the red light starts to fade.",
     "ru": "Медленно, очень медленно красный свет начинает гаснуть."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Messages first, {name}. Or you never come to Dunmere.",
     "ru": "Сначала сообщения, {name}. Иначе ты никогда не приедешь в Данмир."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip opens Sol's list. Four messages. Four lines.",
     "ru": "Пип разворачивает список Сола. Четыре сообщения. Четыре строчки."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Four messages, love. Four. Then we call Theo.",
     "ru": "Четыре сообщения, милая. Четыре. Потом зовём Тео."
    },
    {
     "t": "say",
     "to": "nora",
     "task_ru": "Скажи в микрофон первое сообщение. То самое, из автобуса.",
     "hint_ru": "Начни с Hello, {name}. It's me...",
     "example_en": "Hello, {name}. It's me. Don't be scared.",
     "example_ru": "Привет, {name}. Это я. Не бойся.",
     "accept": [
      "hello",
      "hi",
      "it's me",
      "its me",
      "it is me",
      "don't be scared",
      "dont be scared",
      "scared"
     ],
     "after": [
      {
       "who": "narrator",
       "en": "Your voice goes into the static. The red light fades a little.",
       "ru": "Твой голос уходит в помехи. Красный свет чуть тускнеет."
      },
      {
       "who": "narrator",
       "en": "Flash. A night bus. Rain. A girl hears you.",
       "ru": "Вспышка. Ночной автобус. Дождь. Девушка слышит тебя."
      }
     ]
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Find the blue door. At nine, someone falls. Stop it.",
     "ru": "Найди синюю дверь. В девять кто-то упадёт. Останови это."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "And {name}... don't tell Pip.",
     "ru": "И, {name}... не говори Пип."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "Don't tell Pip WHAT, love?",
     "ru": "Не говорить Пип ЧТО, милая?"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You laugh. Pip laughs. Your eyes are wet.",
     "ru": "Ты смеёшься. Пип смеётся. В глазах у обеих слёзы."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Flash. A dark studio. Fog. Theo's headphones.",
     "ru": "Вспышка. Тёмная студия. Туман. Наушники Тео."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Hello, Theo. Theo, listen. Don't go to the island. Not on Friday.",
     "ru": "Привет, Тео. Тео, послушай. Не езди на остров. Только не в пятницу."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Flash. August. Sol's office. An old tape.",
     "ru": "Вспышка. Август. Кабинет Сола. Старая кассета."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Sol. Hire her. Her name is {name}.",
     "ru": "Сол. Найми её. Её зовут {name}."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Sol's tape. You sent it. You hired yourself.",
     "ru": "Кассета Сола. Это отправила ты. Ты сама себя наняла."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Pip looks at the list. One, two, three, four. Done.",
     "ru": "Пип смотрит в список. Раз, два, три, четыре. Готово."
    },
    {
     "t": "check",
     "q_en": "Four messages on the list. But you remember five. Which one is not yours?",
     "q_ru": "В списке четыре сообщения. Но ты помнишь пять. Какое — не твоё?",
     "options": [
      {
       "en": "Find the blue door.",
       "ru": "Найди синюю дверь.",
       "correct": false
      },
      {
       "en": "I didn't save him. You still can.",
       "ru": "Я не спасла его. Ты ещё можешь.",
       "correct": true
      },
      {
       "en": "Don't go to the island.",
       "ru": "Не езди на остров.",
       "correct": false
      }
     ],
     "wrong": [
      {
       "who": "narrator",
       "en": "The static laughs. Softly. Pip holds your arm.",
       "ru": "Помехи тихо смеются. Пип хватает тебя за руку."
      },
      {
       "who": "pip",
       "en": "That one is on the list, love. You said it. Look.",
       "ru": "Оно есть в списке, милая. Ты его сказала. Смотри."
      },
      {
       "who": "narrator",
       "en": "The fifth one is not on the list. Think.",
       "ru": "Пятого в списке нет. Вспоминай."
      }
     ],
     "right": [
      {
       "who": "narrator",
       "en": "You never said it. Not tonight. Not ever.",
       "ru": "Ты этого не говорила. Ни сегодня. Ни разу."
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Then who said it? Behind Nora, a second shadow moves.",
     "ru": "Тогда кто это сказал? За спиной Норы шевелится вторая тень."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You whisper. You don't even think.",
     "ru": "Ты шепчешь. Даже не думая."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Wait. Someone is here. With me.",
     "ru": "Подожди. Здесь кто-то есть. Со мной."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "That whisper. The video call. It was you.",
     "ru": "Тот шёпот. Видеозвонок. Это была ты."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "On the radio, Theo's voice is thin. Very thin.",
     "ru": "По радио голос Тео совсем тонкий. Еле слышный."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "{name}? I can't feel my hands. It's so cold.",
     "ru": "{name}? Я не чувствую рук. Тут так холодно."
    },
    {
     "t": "choice",
     "q_en": "Nora's hand is on the glass. Theo is fading. What do you do?",
     "q_ru": "Ладонь Норы на стекле. Тео исчезает. Что ты сделаешь?",
     "options": [
      {
       "en": "Reach for Nora.",
       "ru": "Потянуться к Норе.",
       "flag": "reached_nora",
       "reply": [
        {
         "who": "narrator",
         "en": "You press your hand to the glass. It's ice.",
         "ru": "Ты прижимаешь ладонь к стеклу. Оно ледяное."
        },
        {
         "who": "nora",
         "en": "Not me. If I come out, thirty years come with me.",
         "ru": "Не меня. Если я выйду, со мной выйдут тридцать лет."
        },
        {
         "who": "nora",
         "en": "Save him.",
         "ru": "Спаси его."
        }
       ]
      },
      {
       "en": "Call Theo. Now.",
       "ru": "Звать Тео. Сейчас же.",
       "flag": "called_theo",
       "reply": [
        {
         "who": "nora",
         "en": "Yes. Him. Not me. Save him.",
         "ru": "Да. Его. Не меня. Спаси его."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "nora",
     "en": "Call his name. Tell him: 'Follow my voice.'",
     "ru": "Позови его по имени. Скажи: «Иди на мой голос»."
    },
    {
     "t": "say",
     "to": "theo",
     "task_ru": "Позови Тео. Скажи, чтобы он вернулся и шёл на твой голос.",
     "hint_ru": "Начни с Theo, come back...",
     "example_en": "Theo, come back. Follow my voice.",
     "example_ru": "Тео, вернись. Иди на мой голос.",
     "accept": [
      "theo",
      "come back",
      "follow",
      "my voice",
      "voice",
      "back"
     ],
     "after": [
      {
       "who": "narrator",
       "en": "You are crying. You can't stop.",
       "ru": "Ты плачешь. И не можешь остановиться."
      },
      {
       "who": "pip",
       "en": "The girl on the tape. Love... it's you.",
       "ru": "Девушка с кассеты. Милая... это ты."
      },
      {
       "who": "narrator",
       "en": "Nora's old tape. The crying girl. You. Tonight.",
       "ru": "Старая кассета Норы. Плачущая девушка. Это ты. Сегодня."
      },
      {
       "who": "narrator",
       "en": "Silence on the radio. One second. Two.",
       "ru": "В эфире тишина. Секунда. Две."
      }
     ]
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I'm here. I followed your voice.",
     "ru": "Я здесь. Я шёл на твой голос."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "I've got his hand. It's warm. It's real.",
     "ru": "Я держу его за руку. Она тёплая. Настоящая."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Dunmere, this is Theo. My hand is real again.",
     "ru": "Данмир, это Тео. Моя рука снова настоящая."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "I can feel my coffee. Best day ever.",
     "ru": "Я чувствую свой кофе. Лучший день в жизни."
    },
    {
     "t": "line",
     "who": "pip",
     "en": "This is not goodbye. I'll come back for you. I will.",
     "ru": "Это не прощание. Я вернусь за тобой. Вернусь."
    },
    {
     "t": "line",
     "who": "nora",
     "en": "I know. I've heard you.",
     "ru": "Я знаю. Я тебя слышала."
    },
    {
     "t": "choice",
     "q_en": "The red light is almost gone. Pip pulls your arm.",
     "q_ru": "Красный свет почти погас. Пип тянет тебя за руку.",
     "options": [
      {
       "en": "Run. Now.",
       "ru": "Бежать. Сейчас.",
       "flag": "ran",
       "reply": [
        {
         "who": "nora",
         "en": "Go. See you, {name}. Be brave.",
         "ru": "Иди. Увидимся, {name}. Будь смелой."
        }
       ]
      },
      {
       "en": "Stay one more second.",
       "ru": "Остаться ещё на секунду.",
       "flag": "stayed",
       "reply": [
        {
         "who": "nora",
         "en": "{name}. The shadow knows your name.",
         "ru": "{name}. Тень знает твоё имя."
        },
        {
         "who": "nora",
         "en": "Be brave.",
         "ru": "Будь смелой."
        },
        {
         "who": "narrator",
         "en": "Pip pulls you to the stairs.",
         "ru": "Пип тащит тебя к лестнице."
        }
       ]
      }
     ]
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "You and Pip run. 3:04. The red light dies. The door closes.",
     "ru": "Вы с Пип бежите. 3:04. Красный свет гаснет. Дверь закрывается."
    },
    {
     "t": "line",
     "who": "sol",
     "en": "3:04. You're out. It's over.",
     "ru": "3:04. Вы вышли. Всё закончилось."
    },
    {
     "t": "scene",
     "place_en": "Pier 4 — dawn",
     "place_ru": "Причал 4 — рассвет",
     "emoji": "🌅"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Dawn. Pink water. Theo is waiting, in a blanket.",
     "ru": "Рассвет. Розовая вода. Тео ждёт, закутанный в плед."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "It's over. And you hired yourself. Smart.",
     "ru": "Всё закончилось. И ты сама себя наняла. Умно."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "He takes your hand. It doesn't flicker.",
     "ru": "Он берёт тебя за руку. Она не мерцает."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "Coffee? A normal coffee. Today. Not at 3:03.",
     "ru": "Кофе? Обычный кофе. Сегодня. Не в 3:03."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Theo almost smiles.",
     "ru": "Тео почти улыбается."
    },
    {
     "t": "line",
     "who": "theo",
     "en": "See you at ten, rookie.",
     "ru": "Увидимся в десять, новенькая."
    },
    {
     "t": "scene",
     "place_en": "The Blue Door — room 7",
     "place_ru": "Синяя дверь — комната 7",
     "emoji": "🚪"
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "One week later. 3:03. The old radio clicks on by itself.",
     "ru": "Неделю спустя. 3:03. Старое радио включается само."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Hello, {name}. It's me.",
     "ru": "Привет, {name}. Это я."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Your voice. But too calm. Almost smiling.",
     "ru": "Твой голос. Но слишком спокойный. Почти улыбается."
    },
    {
     "t": "line",
     "who": "voice",
     "en": "Thank you for opening the door.",
     "ru": "Спасибо, что открыла дверь."
    },
    {
     "t": "line",
     "who": "narrator",
     "en": "Three soft knocks. On your bedroom door.",
     "ru": "Три тихих стука. В дверь твоей спальни."
    }
   ],
   "cliff_en": "Three soft knocks. On your bedroom door.",
   "cliff_ru": "Три тихих стука. В дверь твоей спальни.",
   "teaser_ru": "Во втором сезоне: что вышло из двери в Ночь фонарей, и почему оно говорит твоим голосом?",
   "claude_scene": "Dawn on Pier 4, right after Lantern Night. Theo sits on the pier wrapped in a blanket, tired but solid again, holding a paper cup of tea. He talks with the heroine about the night: what she felt in the tower, what she said into the microphone, whether she is scared of the shadow behind Nora. He is dry, deadpan and warm, makes one small joke, then says one true thing, and finally asks her for a normal coffee. Keep his English very simple (A2, short sentences, slow), and react kindly to any answer, even in Russian."
  }
 ]
};
