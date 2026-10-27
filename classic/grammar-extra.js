// Доп. задания для повторения: по ~18 свежих заданий на каждый урок.
const LESSON_EXTRA = {
 "1": [
  {
   "type": "choice",
   "q": "I ___ a huge fan of The Office.",
   "options": [
    "am",
    "is",
    "are"
   ],
   "answer": [
    "am"
   ],
   "explain": "С I всегда используется am."
  },
  {
   "type": "choice",
   "q": "Shuri and T'Challa ___ from Wakanda.",
   "options": [
    "is",
    "are",
    "am"
   ],
   "answer": [
    "are"
   ],
   "explain": "Подлежащих двое (они — they), поэтому are."
  },
  {
   "type": "choice",
   "q": "Doctor Strange ___ in New York.",
   "options": [
    "lives",
    "live",
    "is live"
   ],
   "answer": [
    "lives"
   ],
   "explain": "Doctor Strange — это he, поэтому глагол с -s, а is рядом с обычным глаголом не ставим."
  },
  {
   "type": "choice",
   "q": "I ___ in a bank, and I love my job.",
   "options": [
    "work",
    "am work",
    "works"
   ],
   "answer": [
    "work"
   ],
   "explain": "am не ставим рядом с обычным глаголом, а с I глагол без -s."
  },
  {
   "type": "choice",
   "q": "My manager ___ every problem in five minutes.",
   "options": [
    "fixes",
    "fixs",
    "fix"
   ],
   "answer": [
    "fixes"
   ],
   "explain": "My manager — это he или she, а после -x добавляем -es: fix → fixes."
  },
  {
   "type": "choice",
   "q": "My sister ___ on Friday nights.",
   "options": [
    "never cooks",
    "cooks never",
    "is never cook"
   ],
   "answer": [
    "never cooks"
   ],
   "explain": "Слово частоты ставим перед обычным глаголом, а sister — это she, значит cooks."
  },
  {
   "type": "choice",
   "q": "Natasha and Clint ___ together on missions.",
   "options": [
    "are always",
    "always are",
    "is always"
   ],
   "answer": [
    "are always"
   ],
   "explain": "Подлежащих двое, значит are, а always стоит после am / is / are."
  },
  {
   "type": "input",
   "q": "My new colleague ___ (be) from Brazil.",
   "options": [],
   "answer": [
    "is",
    "'s"
   ],
   "explain": "Один коллега — это he или she, поэтому is."
  },
  {
   "type": "input",
   "q": "We ___ (be) on holiday in Istanbul.",
   "options": [],
   "answer": [
    "are",
    "'re"
   ],
   "explain": "С we всегда are."
  },
  {
   "type": "input",
   "q": "Captain Marvel ___ (fly) faster than a plane.",
   "options": [],
   "answer": [
    "flies"
   ],
   "explain": "Captain Marvel — это she, а согласная + y → -ies: fly → flies."
  },
  {
   "type": "input",
   "q": "Ted Mosby ___ (teach) architecture at a university.",
   "options": [],
   "answer": [
    "teaches"
   ],
   "explain": "Ted — это he, а после -ch добавляем -es: teach → teaches."
  },
  {
   "type": "input",
   "q": "The museum ___ (close) at 6 p.m. on Mondays.",
   "options": [],
   "answer": [
    "closes"
   ],
   "explain": "The museum — это it, а расписание выражаем через Present Simple: close → closes."
  },
  {
   "type": "input",
   "q": "Groot ___ (say) only three words: I am Groot.",
   "options": [],
   "answer": [
    "says"
   ],
   "explain": "Перед y стоит гласная, поэтому просто -s: say → says, а не saies."
  },
  {
   "type": "input",
   "q": "My mom ___ (worry) when I travel alone.",
   "options": [],
   "answer": [
    "worries"
   ],
   "explain": "My mom — это she, а согласная + y → -ies: worry → worries."
  },
  {
   "type": "order",
   "q": "Она работает в отеле в Дубае.",
   "options": [],
   "answer": [
    "She works in a hotel in Dubai.",
    "In Dubai she works in a hotel."
   ],
   "explain": "Am / is не нужны: she + глагол с -s."
  },
  {
   "type": "order",
   "q": "Человек-паук живёт в Нью-Йорке с тётей Мэй.",
   "options": [],
   "answer": [
    "Spider-Man lives in New York with Aunt May.",
    "Spider-Man lives with Aunt May in New York."
   ],
   "explain": "Spider-Man — это he, поэтому lives с -s."
  },
  {
   "type": "order",
   "q": "Мы с подругой всегда смотрим «Бриджертонов» вместе.",
   "options": [],
   "answer": [
    "My friend and I always watch Bridgerton together."
   ],
   "explain": "My friend and I — это we, поэтому watch без -s, а always стоит перед глаголом."
  },
  {
   "type": "order",
   "q": "Мой начальник никогда не опаздывает на работу.",
   "options": [],
   "answer": [
    "My boss is never late for work."
   ],
   "explain": "«Опаздывать» — это be late. never ставим после is, и второе «не» не нужно: is never, а не isn't never."
  }
 ],
 "2": [
  {
   "type": "choice",
   "q": "Mike and Eleven ___ live in a big city.",
   "options": [
    "don't",
    "doesn't",
    "aren't"
   ],
   "answer": [
    "don't"
   ],
   "explain": "Mike and Eleven — это they, а с обычным глаголом в отрицании нужен don't."
  },
  {
   "type": "choice",
   "q": "___ your sister like Bridgerton?",
   "options": [
    "Does",
    "Do",
    "Is"
   ],
   "answer": [
    "Does"
   ],
   "explain": "your sister — это she, а с обычным глаголом вопрос начинается с Does."
  },
  {
   "type": "choice",
   "q": "___ the hotel near the beach?",
   "options": [
    "Is",
    "Does",
    "Do"
   ],
   "answer": [
    "Is"
   ],
   "explain": "Здесь нет обычного глагола, только «быть», поэтому вопрос с to be: Is."
  },
  {
   "type": "choice",
   "q": "Sherlock ___ need help. He solves every case alone.",
   "options": [
    "doesn't",
    "don't",
    "isn't"
   ],
   "answer": [
    "doesn't"
   ],
   "explain": "need — обычный глагол, а Sherlock — это he, поэтому doesn't."
  },
  {
   "type": "choice",
   "q": "What time ___ the museum open on Sundays?",
   "options": [
    "does",
    "do",
    "are"
   ],
   "answer": [
    "does"
   ],
   "explain": "open здесь — обычный глагол «открывается», после What time нужен помощник, а the museum — это it, значит does."
  },
  {
   "type": "choice",
   "q": "My boss doesn't ___ emails at the weekend.",
   "options": [
    "answer",
    "answers",
    "answering"
   ],
   "answer": [
    "answer"
   ],
   "explain": "После doesn't глагол без -s: -s уже ушла в does."
  },
  {
   "type": "choice",
   "q": "Is Wanda from Sokovia? — Yes, she ___.",
   "options": [
    "is",
    "does",
    "do"
   ],
   "answer": [
    "is"
   ],
   "explain": "Вопрос задан с is, поэтому и короткий ответ с is."
  },
  {
   "type": "input",
   "q": "___ (do) you speak Spanish? — Yes, a little.",
   "options": [],
   "answer": [
    "Do",
    "do"
   ],
   "explain": "С you вопрос с обычным глаголом начинается с Do."
  },
  {
   "type": "input",
   "q": "Where ___ (do) your parents live?",
   "options": [],
   "answer": [
    "do"
   ],
   "explain": "your parents — это they, поэтому do."
  },
  {
   "type": "input",
   "q": "___ (be) Ted and Robin friends? — Yes, they are.",
   "options": [],
   "answer": [
    "Are",
    "are"
   ],
   "explain": "С to be do не нужен: просто ставим Are в начало."
  },
  {
   "type": "input",
   "q": "We ___ (not / be) late. The film starts at eight.",
   "options": [],
   "answer": [
    "aren't",
    "are not",
    "'re not"
   ],
   "explain": "С to be отрицание без don't: are + not."
  },
  {
   "type": "input",
   "q": "Daredevil ___ (not / see) with his eyes, but he hears everything.",
   "options": [],
   "answer": [
    "doesn't see",
    "does not see"
   ],
   "explain": "Daredevil — это he: doesn't + глагол без -s."
  },
  {
   "type": "input",
   "q": "What ___ (Loki / want) from Thor this time?",
   "options": [],
   "answer": [
    "does Loki want"
   ],
   "explain": "Схема: What + does + подлежащее + глагол без -s."
  },
  {
   "type": "input",
   "q": "Why ___ (you / not / eat) meat? Are you vegetarian?",
   "options": [],
   "answer": [
    "don't you eat",
    "do you not eat"
   ],
   "explain": "Речь о привычке, поэтому Present Simple. Схема: Why + don't + you + глагол."
  },
  {
   "type": "order",
   "q": "Твоя подруга говорит по-английски?",
   "options": [],
   "answer": [
    "Does your friend speak English?"
   ],
   "explain": "Вопрос одной интонацией нельзя: Does + подлежащее + глагол без -s."
  },
  {
   "type": "order",
   "q": "Этот рейс не останавливается в Дубае.",
   "options": [],
   "answer": [
    "This flight doesn't stop in Dubai."
   ],
   "explain": "This flight — это it, поэтому doesn't + stop без -s."
  },
  {
   "type": "order",
   "q": "Во сколько начинается твоя смена?",
   "options": [],
   "answer": [
    "What time does your shift start?"
   ],
   "explain": "После What time идёт does, а глагол start остаётся без -s."
  },
  {
   "type": "order",
   "q": "Уэнсдей не боится темноты.",
   "options": [],
   "answer": [
    "Wednesday isn't afraid of the dark."
   ],
   "explain": "«Бояться» здесь — be afraid, поэтому отрицание через isn't, а не doesn't."
  }
 ],
 "3": [
  {
   "type": "choice",
   "q": "Listen! Someone ___ in the next room.",
   "options": [
    "is singing",
    "sings",
    "singing"
   ],
   "answer": [
    "is singing"
   ],
   "explain": "Listen! значит прямо сейчас: is + -ing, и без is нельзя."
  },
  {
   "type": "choice",
   "q": "I usually ___ from home on Fridays.",
   "options": [
    "work",
    "am working",
    "working"
   ],
   "answer": [
    "work"
   ],
   "explain": "usually и on Fridays — привычка, поэтому Present Simple."
  },
  {
   "type": "choice",
   "q": "___ Wanda and Vision watching an old sitcom?",
   "options": [
    "Are",
    "Is",
    "Do"
   ],
   "answer": [
    "Are"
   ],
   "explain": "watching — это Continuous, а подлежащих двое, поэтому Are."
  },
  {
   "type": "choice",
   "q": "Why ___ Rachel crying? What's wrong?",
   "options": [
    "is",
    "does",
    "are"
   ],
   "answer": [
    "is"
   ],
   "explain": "crying — это Continuous, а Rachel — это she, значит is."
  },
  {
   "type": "choice",
   "q": "Tony ___ a new suit this week.",
   "options": [
    "is building",
    "builds",
    "build"
   ],
   "answer": [
    "is building"
   ],
   "explain": "this week — действие в процессе в этот период, поэтому is + -ing."
  },
  {
   "type": "choice",
   "q": "I ___ this song! Let's sing it together.",
   "options": [
    "know",
    "am knowing",
    "knowing"
   ],
   "answer": [
    "know"
   ],
   "explain": "know — глагол-состояние, его не ставят в -ing, даже когда речь о «прямо сейчас»."
  },
  {
   "type": "choice",
   "q": "Peter ___ a new phone. His old phone is broken.",
   "options": [
    "needs",
    "is needing",
    "need"
   ],
   "answer": [
    "needs"
   ],
   "explain": "need — глагол-состояние, поэтому Present Simple с -s."
  },
  {
   "type": "input",
   "q": "Hurry up! Our taxi ___ (wait) outside.",
   "options": [],
   "answer": [
    "is waiting",
    "'s waiting"
   ],
   "explain": "Hurry up! — значит прямо сейчас, поэтому is + waiting."
  },
  {
   "type": "input",
   "q": "Emily ___ (write) a post for Instagram at the moment.",
   "options": [],
   "answer": [
    "is writing",
    "'s writing"
   ],
   "explain": "at the moment — сейчас, а немая -e отпадает: write → writing."
  },
  {
   "type": "input",
   "q": "Look! Thor ___ (swim) in the hotel pool!",
   "options": [],
   "answer": [
    "is swimming",
    "'s swimming"
   ],
   "explain": "Look! — сейчас, а в коротком swim согласная удваивается: swimming."
  },
  {
   "type": "input",
   "q": "My friends ___ (have) a party right now, and I'm at work.",
   "options": [],
   "answer": [
    "are having",
    "'re having"
   ],
   "explain": "have a party — действие, а не владение, поэтому можно в -ing: are having."
  },
  {
   "type": "input",
   "q": "___ (you / work) on anything interesting this week?",
   "options": [],
   "answer": [
    "Are you working",
    "are you working"
   ],
   "explain": "this week — процесс в этот период: Are + you + -ing."
  },
  {
   "type": "input",
   "q": "Monica usually cooks dinner, but tonight Chandler ___ (cook) pasta.",
   "options": [],
   "answer": [
    "is cooking",
    "'s cooking"
   ],
   "explain": "usually — привычка, а tonight — то, что происходит сейчас: is cooking."
  },
  {
   "type": "input",
   "q": "I ___ (not / want) pizza tonight. Let's order sushi.",
   "options": [],
   "answer": [
    "don't want",
    "do not want"
   ],
   "explain": "want — глагол-состояние, поэтому don't want, а не am not wanting, даже если речь о сегодняшнем вечере."
  },
  {
   "type": "order",
   "q": "Ты сейчас смотришь «Очень странные дела»?",
   "options": [],
   "answer": [
    "Are you watching Stranger Things now?"
   ],
   "explain": "Вопрос в Continuous: Are + you + -ing."
  },
  {
   "type": "order",
   "q": "Капитан Америка сейчас не слушает Тони.",
   "options": [],
   "answer": [
    "Captain America isn't listening to Tony now.",
    "Now Captain America isn't listening to Tony."
   ],
   "explain": "now — действие в процессе, поэтому отрицание в Continuous: isn't + -ing. После listen нужен to."
  },
  {
   "type": "order",
   "q": "Сейчас я учу английский с помощью Netflix.",
   "options": [],
   "answer": [
    "I am learning English with Netflix now.",
    "Now I am learning English with Netflix.",
    "I am now learning English with Netflix."
   ],
   "explain": "Процесс в этот период: I am + learning."
  },
  {
   "type": "order",
   "q": "Тор обычно не пьёт кофе по утрам.",
   "options": [],
   "answer": [
    "Thor doesn't usually drink coffee in the morning.",
    "Thor usually doesn't drink coffee in the morning."
   ],
   "explain": "usually — привычка, поэтому Present Simple: doesn't drink, а не isn't drinking. usually можно поставить до или после doesn't."
  }
 ],
 "4": [
  {
   "type": "choice",
   "q": "There ___ two beds in our hotel room.",
   "options": [
    "are",
    "is",
    "am"
   ],
   "answer": [
    "are"
   ],
   "explain": "Кроватей две, то есть много, поэтому there are."
  },
  {
   "type": "choice",
   "q": "___ there a gym in this hotel?",
   "options": [
    "Is",
    "Are",
    "Do"
   ],
   "answer": [
    "Is"
   ],
   "explain": "a gym — один предмет, поэтому вопрос Is there."
  },
  {
   "type": "choice",
   "q": "There aren't ___ free seats on the train.",
   "options": [
    "any",
    "some",
    "much"
   ],
   "answer": [
    "any"
   ],
   "explain": "В отрицании используем any, а much не ставим с исчисляемыми seats."
  },
  {
   "type": "choice",
   "q": "How ___ coffee do you drink every day?",
   "options": [
    "much",
    "many",
    "a lot"
   ],
   "answer": [
    "much"
   ],
   "explain": "coffee неисчисляемое, поэтому How much."
  },
  {
   "type": "choice",
   "q": "There ___ a lot of people at Comic-Con today.",
   "options": [
    "are",
    "is",
    "be"
   ],
   "answer": [
    "are"
   ],
   "explain": "people — это множественное число, поэтому there are, хотя впереди стоит a lot."
  },
  {
   "type": "choice",
   "q": "We have ___ time before the flight, so let's get a coffee.",
   "options": [
    "some",
    "any",
    "many"
   ],
   "answer": [
    "some"
   ],
   "explain": "В утверждении нужен some, а many с неисчисляемым time не используется."
  },
  {
   "type": "choice",
   "q": "There ___ any information about the new Avengers movie.",
   "options": [
    "isn't",
    "aren't",
    "don't"
   ],
   "answer": [
    "isn't"
   ],
   "explain": "information по-английски неисчисляемое, поэтому there isn't, хотя по-русски бывает «сведения»."
  },
  {
   "type": "input",
   "q": "There ___ (be) a washing machine in our Airbnb.",
   "options": [],
   "answer": [
    "is",
    "'s"
   ],
   "explain": "a washing machine — один предмет, поэтому there is."
  },
  {
   "type": "input",
   "q": "There ___ (not / be) any good restaurants near the airport.",
   "options": [],
   "answer": [
    "aren't",
    "are not"
   ],
   "explain": "restaurants во множественном числе, поэтому there aren't."
  },
  {
   "type": "input",
   "q": "___ (be) there any snacks for our movie night?",
   "options": [],
   "answer": [
    "Are",
    "are"
   ],
   "explain": "snacks во множественном числе, поэтому вопрос Are there."
  },
  {
   "type": "input",
   "q": "I need ___ (some / any) advice about my job interview.",
   "options": [],
   "answer": [
    "some"
   ],
   "explain": "Это утверждение, поэтому some. advice неисчисляемое, хотя по-русски «советы»."
  },
  {
   "type": "input",
   "q": "Are there ___ (some / any) vegan options on the menu?",
   "options": [],
   "answer": [
    "any"
   ],
   "explain": "В обычном вопросе используем any."
  },
  {
   "type": "input",
   "q": "There isn't ___ (much / many) traffic in my town on Sundays.",
   "options": [],
   "answer": [
    "much"
   ],
   "explain": "traffic неисчисляемое, поэтому much."
  },
  {
   "type": "input",
   "q": "How ___ (much / many) people work in your office?",
   "options": [],
   "answer": [
    "many"
   ],
   "explain": "people можно посчитать (это множественное от person), поэтому How many."
  },
  {
   "type": "order",
   "q": "В нашем номере есть балкон.",
   "options": [],
   "answer": [
    "There is a balcony in our room.",
    "There's a balcony in our room.",
    "In our room there is a balcony."
   ],
   "explain": "Начинаем с There is, а место ставим в конец."
  },
  {
   "type": "order",
   "q": "В Риме много музеев.",
   "options": [],
   "answer": [
    "There are a lot of museums in Rome.",
    "In Rome there are a lot of museums."
   ],
   "explain": "museums во множественном числе: There are + a lot of, а место в конце."
  },
  {
   "type": "order",
   "q": "В офисе нет кофемашины.",
   "options": [],
   "answer": [
    "There isn't a coffee machine in the office.",
    "In the office there isn't a coffee machine."
   ],
   "explain": "Не «In the office is…», а There isn't + предмет + место в конце."
  },
  {
   "type": "order",
   "q": "Сколько серий в этом сезоне?",
   "options": [],
   "answer": [
    "How many episodes are there in this season?"
   ],
   "explain": "episodes можно посчитать, поэтому How many, а дальше are there + место в конце."
  }
 ],
 "5": [
  {
   "type": "choice",
   "q": "Yesterday Peter Parker ___ Aunt May in Queens.",
   "options": [
    "visits",
    "visited",
    "visit"
   ],
   "answer": [
    "visited"
   ],
   "explain": "Yesterday — прошлое, visit правильный глагол: добавляем -ed."
  },
  {
   "type": "choice",
   "q": "Last weekend Nancy and Jonathan ___ at home and played video games.",
   "options": [
    "stayed",
    "staied",
    "stay"
   ],
   "answer": [
    "stayed"
   ],
   "explain": "Гласная + y — просто добавляем -ed: stay → stayed, как play → played."
  },
  {
   "type": "choice",
   "q": "Last month Doctor Strange ___ to Kathmandu.",
   "options": [
    "flies",
    "flied",
    "flew"
   ],
   "answer": [
    "flew"
   ],
   "explain": "Fly — неправильный глагол: fly → flew, формы flied не существует."
  },
  {
   "type": "choice",
   "q": "In 1997 Rachel ___ Ross an eighteen-page letter.",
   "options": [
    "writes",
    "wrote",
    "writed"
   ],
   "answer": [
    "wrote"
   ],
   "explain": "Write — неправильный глагол (write → wrote), к нему нельзя добавлять -ed."
  },
  {
   "type": "choice",
   "q": "Yesterday I ___ to the gym before work.",
   "options": [
    "go",
    "went",
    "goes"
   ],
   "answer": [
    "went"
   ],
   "explain": "Раз есть yesterday, глагол обязан стоять в прошлом: go → went."
  },
  {
   "type": "choice",
   "q": "Two days ago my sister ___ her phone in a taxi.",
   "options": [
    "loses",
    "losed",
    "lost"
   ],
   "answer": [
    "lost"
   ],
   "explain": "Lose — неправильный глагол: lose → lost; losed — ошибка, loses — настоящее время."
  },
  {
   "type": "choice",
   "q": "Yesterday Rachel ___ for a new dress for three hours.",
   "options": [
    "shoped",
    "shopped",
    "shops"
   ],
   "answer": [
    "shopped"
   ],
   "explain": "Shop — короткий глагол «согласная + гласная + согласная», поэтому удваиваем p: shopped."
  },
  {
   "type": "input",
   "q": "Yesterday Steve Rogers ___ (help) an old lady with her bags.",
   "options": [],
   "answer": [
    "helped"
   ],
   "explain": "Yesterday — прошлое, help правильный глагол: helped."
  },
  {
   "type": "input",
   "q": "Last night Enid ___ (cry) at the end of the movie.",
   "options": [],
   "answer": [
    "cried"
   ],
   "explain": "Согласная + y → ied: cry → cried."
  },
  {
   "type": "input",
   "q": "Two weeks ago I ___ (take) a hundred photos of the Colosseum in Rome.",
   "options": [],
   "answer": [
    "took"
   ],
   "explain": "Take — неправильный глагол: take → took, формы taked не существует."
  },
  {
   "type": "input",
   "q": "At the party last Friday Chandler ___ (meet) a girl from Brazil.",
   "options": [],
   "answer": [
    "met"
   ],
   "explain": "Meet — неправильный глагол: meet → met, не meeted."
  },
  {
   "type": "input",
   "q": "I'm so tired today because yesterday I ___ (sleep) only four hours.",
   "options": [],
   "answer": [
    "slept"
   ],
   "explain": "Yesterday требует прошедшего времени, а sleep неправильный: sleep → slept."
  },
  {
   "type": "input",
   "q": "Yesterday Wanda ___ (drop) her coffee on her new white dress.",
   "options": [],
   "answer": [
    "dropped"
   ],
   "explain": "Drop — короткий глагол «согласная + гласная + согласная», удваиваем p: dropped."
  },
  {
   "type": "input",
   "q": "Last week my manager ___ (pay) for lunch for the whole team.",
   "options": [],
   "answer": [
    "paid"
   ],
   "explain": "Pay — неправильный глагол: pay → paid, форма payed — ошибка."
  },
  {
   "type": "order",
   "q": "Вчера Человек-паук спас кота в Бруклине.",
   "options": [],
   "answer": [
    "Yesterday Spider-Man saved a cat in Brooklyn.",
    "Spider-Man saved a cat in Brooklyn yesterday."
   ],
   "explain": "Save заканчивается на -e, добавляем только -d; yesterday — в начало или в конец."
  },
  {
   "type": "order",
   "q": "Два года назад Ванда переехала в Лондон.",
   "options": [],
   "answer": [
    "Two years ago Wanda moved to London.",
    "Wanda moved to London two years ago."
   ],
   "explain": "Ago ставится после срока (two years ago), глагол move → moved."
  },
  {
   "type": "order",
   "q": "Мы взяли такси и поехали в отель.",
   "options": [],
   "answer": [
    "We took a taxi and went to the hotel."
   ],
   "explain": "Оба глагола неправильные: take → took, go → went."
  },
  {
   "type": "order",
   "q": "Вчера Наташа увидела Локи и позвонила Тору.",
   "options": [],
   "answer": [
    "Yesterday Natasha saw Loki and called Thor.",
    "Natasha saw Loki and called Thor yesterday."
   ],
   "explain": "See — неправильный (saw), call — правильный (called); оба в Past Simple, без -s."
  }
 ],
 "6": [
  {
   "type": "choice",
   "q": "The pizza ___ cold, but Joey ate it.",
   "options": [
    "was",
    "were",
    "did"
   ],
   "answer": [
    "was"
   ],
   "explain": "Pizza — это it, а прошлое от to be для it — was."
  },
  {
   "type": "choice",
   "q": "___ Rachel at work yesterday?",
   "options": [
    "Did",
    "Was",
    "Were"
   ],
   "answer": [
    "Was"
   ],
   "explain": "«Быть где-то» — это to be, поэтому вопрос с Was, без did; Rachel = she."
  },
  {
   "type": "choice",
   "q": "We ___ at the party last night — we stayed at home.",
   "options": [
    "weren't",
    "wasn't",
    "didn't"
   ],
   "answer": [
    "weren't"
   ],
   "explain": "«Не были где-то» — это to be; с we — were, отрицание — weren't."
  },
  {
   "type": "choice",
   "q": "Did Spider-Man ___ the thief last night?",
   "options": [
    "catch",
    "caught",
    "catches"
   ],
   "answer": [
    "catch"
   ],
   "explain": "После did глагол в начальной форме: did уже показывает прошлое."
  },
  {
   "type": "choice",
   "q": "How ___ your flight to Barcelona? — It was great!",
   "options": [
    "did",
    "was",
    "were"
   ],
   "answer": [
    "was"
   ],
   "explain": "Спрашиваем, каким был перелёт, — это to be; flight = it → was."
  },
  {
   "type": "choice",
   "q": "Yesterday Groot ___ say anything except \"I am Groot\".",
   "options": [
    "didn't",
    "wasn't",
    "don't"
   ],
   "answer": [
    "didn't"
   ],
   "explain": "Say — обычный глагол, отрицание в прошлом через didn't; wasn't с глаголами действия не работает, don't — настоящее время."
  },
  {
   "type": "choice",
   "q": "Sorry, I ___ your message yesterday — my phone was dead.",
   "options": [
    "didn't saw",
    "didn't see",
    "not saw"
   ],
   "answer": [
    "didn't see"
   ],
   "explain": "После didn't — глагол в 1-й форме: didn't see, а не «двойное прошлое» didn't saw."
  },
  {
   "type": "input",
   "q": "Loki ___ (not / be) at home last night.",
   "options": [],
   "answer": [
    "wasn't",
    "was not"
   ],
   "explain": "Loki = he, отрицание от was — wasn't."
  },
  {
   "type": "input",
   "q": "___ (you / be) nervous before the interview yesterday?",
   "options": [],
   "answer": [
    "Were you",
    "were you"
   ],
   "explain": "Nervous — состояние, значит to be; с you всегда were, did не нужен."
  },
  {
   "type": "input",
   "q": "Wanda ___ (not / sleep) well last night because of bad dreams.",
   "options": [],
   "answer": [
    "didn't sleep",
    "did not sleep"
   ],
   "explain": "Sleep — обычный глагол: didn't + начальная форма."
  },
  {
   "type": "input",
   "q": "What ___ (Peter / buy) for MJ's birthday last week?",
   "options": [],
   "answer": [
    "did Peter buy"
   ],
   "explain": "Вопросительное слово + did + подлежащее + глагол в начальной форме (buy, не bought)."
  },
  {
   "type": "input",
   "q": "My friends ___ (not / be) at the airport, so I took a bus to the city.",
   "options": [],
   "answer": [
    "weren't",
    "were not"
   ],
   "explain": "My friends = they, отрицание от were — weren't."
  },
  {
   "type": "input",
   "q": "___ (Monica / cook) dinner for everyone last Thanksgiving?",
   "options": [],
   "answer": [
    "Did Monica cook",
    "did Monica cook"
   ],
   "explain": "Вопрос с обычным глаголом: Did + подлежащее + cook без -ed."
  },
  {
   "type": "input",
   "q": "Why ___ (Thor / not / come) to the party last Saturday?",
   "options": [],
   "answer": [
    "didn't Thor come",
    "did Thor not come"
   ],
   "explain": "Why + didn't + подлежащее + глагол в начальной форме: come, не came."
  },
  {
   "type": "order",
   "q": "Вчера Энид не было в школе.",
   "options": [],
   "answer": [
    "Enid wasn't at school yesterday.",
    "Yesterday Enid wasn't at school."
   ],
   "explain": "«Не было где-то» — это to be: wasn't, без didn't."
  },
  {
   "type": "order",
   "q": "Ты посмотрела новую серию «Уэнсдей»?",
   "options": [],
   "answer": [
    "Did you watch the new episode of Wednesday?"
   ],
   "explain": "Вопрос с обычным глаголом: Did + you + watch в начальной форме."
  },
  {
   "type": "order",
   "q": "Сколько стоили билеты в Лондон?",
   "options": [],
   "answer": [
    "How much were the tickets to London?",
    "How much did the tickets to London cost?"
   ],
   "explain": "Tickets — множественное число, поэтому were. Так тоже можно: How much did the tickets cost?"
  },
  {
   "type": "order",
   "q": "Тебе понравился фильм или он был скучным?",
   "options": [],
   "answer": [
    "Did you like the film or was it boring?",
    "Did you like the movie or was it boring?"
   ],
   "explain": "Like — действие (Did you like), boring — состояние (was it), в одном вопросе нужны оба."
  }
 ],
 "7": [
  {
   "type": "choice",
   "q": "Groot needs ___ water every day.",
   "options": [
    "a",
    "an",
    "— (без артикля)"
   ],
   "answer": [
    "— (без артикля)"
   ],
   "explain": "Water — неисчисляемое слово в общем смысле, a/an с ним невозможны."
  },
  {
   "type": "choice",
   "q": "My friend Kate is ___ engineer at Google.",
   "options": [
    "a",
    "an",
    "— (без артикля)"
   ],
   "answer": [
    "an"
   ],
   "explain": "Профессия в единственном числе всегда с артиклем, а engineer начинается с гласного звука — an."
  },
  {
   "type": "choice",
   "q": "Joey ordered a pizza and a salad. He ate ___ pizza in five minutes.",
   "options": [
    "a",
    "the",
    "— (без артикля)"
   ],
   "answer": [
    "the"
   ],
   "explain": "Пиццу уже упомянули — теперь это «та самая» пицца, поэтому the."
  },
  {
   "type": "choice",
   "q": "Natasha speaks ___ Russian and English.",
   "options": [
    "the",
    "a",
    "— (без артикля)"
   ],
   "answer": [
    "— (без артикля)"
   ],
   "explain": "Названия языков идут без артикля."
  },
  {
   "type": "choice",
   "q": "Last year we went to ___ UK for a month.",
   "options": [
    "the",
    "a",
    "— (без артикля)"
   ],
   "answer": [
    "the"
   ],
   "explain": "UK = United Kingdom, в названии есть «Королевство» (Kingdom) — поэтому the UK."
  },
  {
   "type": "choice",
   "q": "Steve is ___ honest guy, so everyone trusts him.",
   "options": [
    "a",
    "an",
    "— (без артикля)"
   ],
   "answer": [
    "an"
   ],
   "explain": "В honest буква h не читается, слово начинается с гласного звука — an."
  },
  {
   "type": "choice",
   "q": "Prague is ___ European city, and Kyoto is an Asian city.",
   "options": [
    "a",
    "an",
    "the"
   ],
   "answer": [
    "a"
   ],
   "explain": "European звучит как «юропиан» — первый звук согласный [j], как в university, поэтому a."
  },
  {
   "type": "input",
   "q": "For his birthday Loki gave Thor ___ (a / an) ugly sweater.",
   "options": [],
   "answer": [
    "an"
   ],
   "explain": "Ugly начинается с гласного звука [ʌ], поэтому an."
  },
  {
   "type": "input",
   "q": "My dad is ___ (a / an) architect, and my mom is a teacher.",
   "options": [],
   "answer": [
    "an"
   ],
   "explain": "Перед профессией нужен артикль; architect начинается с гласного звука — an."
  },
  {
   "type": "input",
   "q": "We stayed in a small hotel in Rome. ___ (a / an / the) hotel had a beautiful garden.",
   "options": [],
   "answer": [
    "The",
    "the"
   ],
   "explain": "Отель уже упомянули — это «тот самый» отель, поэтому the."
  },
  {
   "type": "input",
   "q": "Please close ___ (a / an / the) door — it's so cold in here!",
   "options": [],
   "answer": [
    "the"
   ],
   "explain": "Обоим понятно, о какой двери речь (дверь в этой комнате), — the."
  },
  {
   "type": "input",
   "q": "At Nevermore Academy Wednesday wears ___ (a / an) uniform in black and white.",
   "options": [],
   "answer": [
    "a"
   ],
   "explain": "Uniform начинается со звука «ю» [j] — это согласный звук, поэтому a, хотя буква u гласная."
  },
  {
   "type": "input",
   "q": "Joey bought ___ (a / an) one-way ticket to Los Angeles.",
   "options": [],
   "answer": [
    "a"
   ],
   "explain": "One читается «уан» — первый звук согласный [w], поэтому a, хотя буква o гласная."
  },
  {
   "type": "input",
   "q": "Shang-Chi is ___ (a / an) MCU hero with amazing kung fu.",
   "options": [],
   "answer": [
    "an"
   ],
   "explain": "MCU читается «эм-си-ю» — первый звук гласный [e], поэтому an, хотя буква M согласная."
  },
  {
   "type": "order",
   "q": "Тони — изобретатель, а Брюс — учёный.",
   "options": [],
   "answer": [
    "Tony is an inventor and Bruce is a scientist."
   ],
   "explain": "Профессия в единственном числе — всегда с артиклем: an inventor (гласный звук), a scientist (согласный)."
  },
  {
   "type": "order",
   "q": "Я завтракаю в маленьком кафе.",
   "options": [],
   "answer": [
    "I have breakfast in a small café.",
    "I have breakfast in a small cafe."
   ],
   "explain": "Breakfast — без артикля, а кафе одно из многих и упоминается впервые — a."
  },
  {
   "type": "order",
   "q": "Энид прочитала интересную книгу о вампирах.",
   "options": [],
   "answer": [
    "Enid read an interesting book about vampires."
   ],
   "explain": "Interesting начинается с гласного звука — an; vampires во множественном числе в общем смысле — без артикля."
  },
  {
   "type": "order",
   "q": "Мы живём в США и любим пиццу.",
   "options": [],
   "answer": [
    "We live in the USA and love pizza.",
    "We live in the USA and we love pizza."
   ],
   "explain": "The USA — исключение со «Штатами», а pizza в общем смысле — без артикля."
  }
 ],
 "8": [
  {
   "type": "choice",
   "q": "Tony Stark's birthday is ___ May.",
   "options": [
    "in",
    "on",
    "at"
   ],
   "answer": [
    "in"
   ],
   "explain": "Месяц — большой период, поэтому in."
  },
  {
   "type": "choice",
   "q": "The meeting is ___ 9:30 tomorrow.",
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
   "type": "choice",
   "q": "Eleven's waffles are ___ the fridge.",
   "options": [
    "in",
    "on",
    "at"
   ],
   "answer": [
    "in"
   ],
   "explain": "Вафли лежат внутри холодильника — in."
  },
  {
   "type": "choice",
   "q": "I saw a funny Loki video ___ YouTube yesterday.",
   "options": [
    "in",
    "on",
    "at"
   ],
   "answer": [
    "on"
   ],
   "explain": "Сайты, соцсети и ТВ — on: on YouTube."
  },
  {
   "type": "choice",
   "q": "My flight to Bali is ___ 14 July.",
   "options": [
    "in",
    "on",
    "at"
   ],
   "answer": [
    "on"
   ],
   "explain": "Это конкретная дата, а с датами используется on, хотя месяц отдельно — in (in July)."
  },
  {
   "type": "choice",
   "q": "We have a team call ___ Friday morning.",
   "options": [
    "in",
    "on",
    "at"
   ],
   "answer": [
    "on"
   ],
   "explain": "Утро конкретного дня — on (on Friday morning), хотя просто «утром» — in the morning."
  },
  {
   "type": "choice",
   "q": "We go to the cinema ___ every Saturday.",
   "options": [
    "on",
    "at",
    "— (без предлога)"
   ],
   "answer": [
    "— (без предлога)"
   ],
   "explain": "Перед every предлог не ставится: every Saturday, а не on every Saturday."
  },
  {
   "type": "input",
   "q": "Rocket and Groot arrived in London ___ (in / on / at) midnight.",
   "options": [],
   "answer": [
    "at"
   ],
   "explain": "Midnight — точный момент, поэтому at."
  },
  {
   "type": "input",
   "q": "There is a cute sticker of Groot ___ (in / on / at) my laptop.",
   "options": [],
   "answer": [
    "on"
   ],
   "explain": "Наклейка на поверхности ноутбука — on."
  },
  {
   "type": "input",
   "q": "It's always very cold in Hawkins ___ (in / on / at) winter.",
   "options": [],
   "answer": [
    "in"
   ],
   "explain": "Сезоны — in: in winter, in summer."
  },
  {
   "type": "input",
   "q": "Ross waited for Rachel ___ (in / on / at) the entrance for an hour.",
   "options": [],
   "answer": [
    "at"
   ],
   "explain": "Вход — это точка, у которой ждут, поэтому at."
  },
  {
   "type": "input",
   "q": "Thor always eats a huge chocolate cake ___ (in / on / at) his birthday.",
   "options": [],
   "answer": [
    "on"
   ],
   "explain": "День рождения — это конкретный день, а с днями используется on: on my birthday."
  },
  {
   "type": "input",
   "q": "Peter does his homework ___ (in / on / at) the evening and fights crime at night.",
   "options": [],
   "answer": [
    "in"
   ],
   "explain": "In the evening, но at night — запомни это исключение."
  },
  {
   "type": "input",
   "q": "Natasha hid the secret files ___ (in / on / at) her car.",
   "options": [],
   "answer": [
    "in"
   ],
   "explain": "Внутри машины — in (in a car, in a taxi)."
  },
  {
   "type": "order",
   "q": "Я смотрю новые серии по пятницам.",
   "options": [],
   "answer": [
    "I watch new episodes on Fridays.",
    "On Fridays I watch new episodes."
   ],
   "explain": "Дни недели — on, даже во множественном числе: on Fridays."
  },
  {
   "type": "order",
   "q": "Тор оставил свой молот на диване.",
   "options": [],
   "answer": [
    "Thor left his hammer on the sofa.",
    "Thor left his hammer on the couch."
   ],
   "explain": "Молот лежит на поверхности дивана — on."
  },
  {
   "type": "order",
   "q": "Давай встретимся на вокзале в полдень.",
   "options": [],
   "answer": [
    "Let's meet at the station at noon.",
    "Let's meet at noon at the station."
   ],
   "explain": "Вокзал — точка встречи (at), полдень — точное время (at)."
  },
  {
   "type": "order",
   "q": "Ночью Уэнсдей пишет роман в своей комнате.",
   "options": [],
   "answer": [
    "At night Wednesday writes a novel in her room.",
    "Wednesday writes a novel in her room at night.",
    "Wednesday writes a novel at night in her room."
   ],
   "explain": "Ночью — at night, внутри комнаты — in her room."
  }
 ],
 "9": [
  {
   "type": "choice",
   "q": "My sister ___ call me tonight. She promised!",
   "options": [
    "will",
    "wills",
    "will to"
   ],
   "answer": [
    "will"
   ],
   "explain": "После will глагол голый: без -s у will и без to."
  },
  {
   "type": "choice",
   "q": "Oh no, I forgot my wallet! — Don't worry, I ___ pay for your coffee.",
   "options": [
    "will",
    "am pay",
    "pay"
   ],
   "answer": [
    "will"
   ],
   "explain": "Решение принято прямо сейчас — will + глагол; «am pay» не бывает, а голое pay о будущем не работает."
  },
  {
   "type": "input",
   "q": "Don't worry, Pepper. ___ (I / will / call) you after the meeting, I promise!",
   "options": [],
   "answer": [
    "I'll call",
    "I will call",
    "i'll call",
    "i will call"
   ],
   "explain": "Обещание — will (I'll) + глагол без to."
  },
  {
   "type": "choice",
   "q": "Look at those dark clouds over the beach! It's ___ rain.",
   "options": [
    "going to",
    "will",
    "go to"
   ],
   "answer": [
    "going to"
   ],
   "explain": "Прогноз по признакам (видно тучи) — is going to + глагол."
  },
  {
   "type": "input",
   "q": "My friend Anna ___ (start) her new job on Monday — she signed the contract yesterday. (Present Continuous)",
   "options": [],
   "answer": [
    "is starting",
    "'s starting"
   ],
   "explain": "Контракт подписан — это договорённость, поэтому is + -ing."
  },
  {
   "type": "order",
   "q": "Я позвоню тебе после работы.",
   "options": [],
   "answer": [
    "I will call you after work.",
    "I'll call you after work.",
    "After work I will call you.",
    "After work I'll call you."
   ],
   "explain": "Обещание или решение в момент речи — will + call без to."
  },
  {
   "type": "choice",
   "q": "I ___ the dentist at 10 tomorrow — the appointment is in my calendar.",
   "options": [
    "am seeing",
    "see",
    "sees"
   ],
   "answer": [
    "am seeing"
   ],
   "explain": "Договорённость с точным временем — Present Continuous, а не Present Simple, как хочется по-русски."
  },
  {
   "type": "input",
   "q": "Rachel ___ (not / go) to work tomorrow. Her plan is to sleep all day! (going to)",
   "options": [],
   "answer": [
    "isn't going to go",
    "is not going to go",
    "'s not going to go"
   ],
   "explain": "План заранее в отрицании — isn't going to + глагол."
  },
  {
   "type": "input",
   "q": "Natasha and Clint ___ (meet) Fury at the base at 6 pm tonight. It's all arranged. (Present Continuous)",
   "options": [],
   "answer": [
    "are meeting",
    "'re meeting"
   ],
   "explain": "Договорённость на точное время — are + -ing."
  },
  {
   "type": "choice",
   "q": "___ Wednesday Addams going to join the fencing club?",
   "options": [
    "Is",
    "Will",
    "Does"
   ],
   "answer": [
    "Is"
   ],
   "explain": "Вопрос с going to: is выходит перед подлежащим; «Will Wednesday going» и «Does ... going» неграмматичны."
  },
  {
   "type": "order",
   "q": "Она собирается купить билет в Лондон.",
   "options": [],
   "answer": [
    "She is going to buy a ticket to London.",
    "She's going to buy a ticket to London."
   ],
   "explain": "План заранее — is going to + глагол."
  },
  {
   "type": "input",
   "q": "I think you ___ (love) this series — it's so funny! (will)",
   "options": [],
   "answer": [
    "will love",
    "'ll love"
   ],
   "explain": "Мнение-прогноз после I think — will + глагол без to и без -s."
  },
  {
   "type": "choice",
   "q": "I'm sure Captain America ___ say no to the mission.",
   "options": [
    "won't",
    "doesn't",
    "isn't going"
   ],
   "answer": [
    "won't"
   ],
   "explain": "Уверенный прогноз — won't + глагол; isn't going без to не работает."
  },
  {
   "type": "input",
   "q": "___ (you / going to / watch) the new season of Squid Game this weekend?",
   "options": [],
   "answer": [
    "Are you going to watch",
    "are you going to watch"
   ],
   "explain": "В вопросе are выходит перед you: Are you going to + глагол."
  },
  {
   "type": "order",
   "q": "Завтра мы летим в Нью-Йорк.",
   "options": [],
   "answer": [
    "We are flying to New York tomorrow.",
    "We're flying to New York tomorrow.",
    "Tomorrow we are flying to New York.",
    "Tomorrow we're flying to New York."
   ],
   "explain": "Русское настоящее время о плане = Present Continuous, а не Present Simple."
  },
  {
   "type": "choice",
   "q": "Where ___ you staying in Rome next month? — At a small hotel near the Colosseum.",
   "options": [
    "are",
    "do",
    "will"
   ],
   "answer": [
    "are"
   ],
   "explain": "Вопрос в Present Continuous о договорённости: are + you + staying."
  },
  {
   "type": "input",
   "q": "Why ___ (you / not / come) to Monica's party tonight? Everybody is going! (Present Continuous)",
   "options": [],
   "answer": [
    "aren't you coming",
    "are you not coming"
   ],
   "explain": "Отрицательный вопрос в Present Continuous: aren't you + -ing."
  },
  {
   "type": "order",
   "q": "Что ты делаешь в пятницу вечером?",
   "options": [],
   "answer": [
    "What are you doing on Friday evening?",
    "What are you doing on Friday night?"
   ],
   "explain": "Вопрос о планах — What are you doing + on Friday (предлог on с днями)."
  }
 ],
 "10": [
  {
   "type": "choice",
   "q": "My new office is ___ than my old one.",
   "options": [
    "nicer",
    "more nice",
    "nicest"
   ],
   "answer": [
    "nicer"
   ],
   "explain": "Nice короткое — добавляем -r и than."
  },
  {
   "type": "input",
   "q": "A taxi is ___ (fast) than the bus, but it's more expensive.",
   "options": [],
   "answer": [
    "faster"
   ],
   "explain": "Fast короткое — fast + er."
  },
  {
   "type": "choice",
   "q": "Spider-Man is ___ than Thor — he's only a teenager!",
   "options": [
    "younger",
    "more young",
    "youngest"
   ],
   "answer": [
    "younger"
   ],
   "explain": "Young короткое — younger than; more с -er не смешиваем."
  },
  {
   "type": "order",
   "q": "Мой кот толще, чем твоя собака.",
   "options": [],
   "answer": [
    "My cat is fatter than your dog."
   ],
   "explain": "Fat: одна гласная + одна согласная, t удваивается — fatter."
  },
  {
   "type": "input",
   "q": "Moscow is the ___ (big) city in Russia.",
   "options": [],
   "answer": [
    "biggest"
   ],
   "explain": "Превосходная степень: the + big с удвоенной g + est."
  },
  {
   "type": "choice",
   "q": "This is ___ beautiful beach in Turkey!",
   "options": [
    "the most",
    "most",
    "more"
   ],
   "answer": [
    "the most"
   ],
   "explain": "Превосходная степень длинного слова — обязательно the most."
  },
  {
   "type": "input",
   "q": "Working from home is ___ (comfortable) than working in an office.",
   "options": [],
   "answer": [
    "more comfortable"
   ],
   "explain": "Comfortable длинное — more + than."
  },
  {
   "type": "choice",
   "q": "Iron Man is ___ than Captain America.",
   "options": [
    "richer",
    "more richer",
    "more rich"
   ],
   "answer": [
    "richer"
   ],
   "explain": "Rich короткое: только richer, двойное сравнение more richer — ошибка."
  },
  {
   "type": "order",
   "q": "Венеция красивее, чем Милан.",
   "options": [],
   "answer": [
    "Venice is more beautiful than Milan."
   ],
   "explain": "Beautiful длинное — more beautiful than."
  },
  {
   "type": "input",
   "q": "Sheldon thinks he is the ___ (intelligent) person in the world.",
   "options": [],
   "answer": [
    "most intelligent"
   ],
   "explain": "Длинное прилагательное в превосходной степени — the most."
  },
  {
   "type": "choice",
   "q": "My English is ___ now than last year.",
   "options": [
    "better",
    "more good",
    "gooder"
   ],
   "answer": [
    "better"
   ],
   "explain": "Good — исключение: good → better, а не more good."
  },
  {
   "type": "input",
   "q": "Avengers: Endgame is the ___ (good) Marvel film ever!",
   "options": [],
   "answer": [
    "best"
   ],
   "explain": "Good — исключение: good → better → the best."
  },
  {
   "type": "choice",
   "q": "Wanda is ___ powerful as Doctor Strange.",
   "options": [
    "as",
    "more",
    "than"
   ],
   "answer": [
    "as"
   ],
   "explain": "После прилагательного стоит as, значит нужна пара as ... as — «такая же сильная, как»."
  },
  {
   "type": "order",
   "q": "Моя сестра такая же высокая, как я.",
   "options": [],
   "answer": [
    "My sister is as tall as me.",
    "My sister is as tall as I am."
   ],
   "explain": "«Такой же, как» — as + прилагательное + as."
  },
  {
   "type": "input",
   "q": "This week was ___ (bad) than last week — I lost my keys twice!",
   "options": [],
   "answer": [
    "worse"
   ],
   "explain": "Bad — исключение: bad → worse → the worst."
  },
  {
   "type": "choice",
   "q": "Hawkeye's arrows are fast, but Quicksilver is ___ of all.",
   "options": [
    "the fastest",
    "faster",
    "the most fast"
   ],
   "answer": [
    "the fastest"
   ],
   "explain": "«Самый ... из всех» — the + -est; fast короткое, поэтому не the most."
  },
  {
   "type": "input",
   "q": "My suitcase is as ___ (heavy) as yours — they are both 20 kilos!",
   "options": [],
   "answer": [
    "heavy"
   ],
   "explain": "В as ... as прилагательное стоит в обычной форме, без -er."
  },
  {
   "type": "order",
   "q": "Лондон не такой дорогой, как Париж.",
   "options": [],
   "answer": [
    "London is not as expensive as Paris.",
    "London isn't as expensive as Paris.",
    "London is not so expensive as Paris."
   ],
   "explain": "«Не такой, как» — not as + прилагательное + as, без more."
  }
 ],
 "11": [
  {
   "type": "choice",
   "q": "Wanda ___ move things with her mind.",
   "options": [
    "can",
    "cans",
    "is can"
   ],
   "answer": [
    "can"
   ],
   "explain": "Can не меняется и не нужен помощник is: can + глагол."
  },
  {
   "type": "input",
   "q": "Groot ___ (can / not) say many words — only \"I am Groot\".",
   "options": [],
   "answer": [
    "can't",
    "cannot"
   ],
   "explain": "«Не может» — can't (cannot, пишется слитно)."
  },
  {
   "type": "choice",
   "q": "It's very cold in Norway in January. You ___ take a warm jacket.",
   "options": [
    "should",
    "shouldn't",
    "don't have to"
   ],
   "answer": [
    "should"
   ],
   "explain": "Совет «стоит взять» — should + глагол."
  },
  {
   "type": "order",
   "q": "Она умеет играть на гитаре.",
   "options": [],
   "answer": [
    "She can play the guitar.",
    "She can play guitar."
   ],
   "explain": "Умение — can + голый глагол."
  },
  {
   "type": "input",
   "q": "When I was a child, I ___ (can) sleep for twelve hours. Now I can't!",
   "options": [],
   "answer": [
    "could"
   ],
   "explain": "Умела в прошлом — could."
  },
  {
   "type": "choice",
   "q": "___ I pay by card here? — Yes, of course.",
   "options": [
    "Can",
    "Does",
    "Am"
   ],
   "answer": [
    "Can"
   ],
   "explain": "Вопрос с модальным: can выходит вперёд, do/does и am не нужны."
  },
  {
   "type": "input",
   "q": "Shuri is the head of the lab, so she ___ (have to) work there every day.",
   "options": [],
   "answer": [
    "has to"
   ],
   "explain": "Shuri = she, и речь о настоящем (is), поэтому has to."
  },
  {
   "type": "input",
   "q": "You ___ (should / not) watch horror films before bed. You will have bad dreams!",
   "options": [],
   "answer": [
    "shouldn't",
    "should not"
   ],
   "explain": "Совет «не стоит» — shouldn't + глагол."
  },
  {
   "type": "order",
   "q": "Мне нужно работать в эту субботу.",
   "options": [],
   "answer": [
    "I have to work this Saturday.",
    "This Saturday I have to work."
   ],
   "explain": "Обязанность по обстоятельствам — have to + глагол."
  },
  {
   "type": "choice",
   "q": "Monica: \"You ___ put your shoes on my sofa! Never!\"",
   "options": [
    "mustn't",
    "don't have to",
    "can"
   ],
   "answer": [
    "mustn't"
   ],
   "explain": "Строгий запрет «нельзя» — mustn't."
  },
  {
   "type": "input",
   "q": "Pepper is the boss, so she ___ (not / have to) ask anyone for a day off.",
   "options": [],
   "answer": [
    "doesn't have to",
    "does not have to"
   ],
   "explain": "Pepper = she: «не обязана» — doesn't have to (не mustn't и не hasn't to)."
  },
  {
   "type": "choice",
   "q": "The museum is free on Sundays, so you ___ buy a ticket.",
   "options": [
    "don't have to",
    "mustn't",
    "must"
   ],
   "answer": [
    "don't have to"
   ],
   "explain": "«Не обязательно» — don't have to; mustn't означало бы «запрещено»."
  },
  {
   "type": "input",
   "q": "___ (you / have to) work on Saturdays? — Yes, sometimes.",
   "options": [],
   "answer": [
    "Do you have to",
    "do you have to"
   ],
   "explain": "С have to вопрос строится через do: Do you have to...?"
  },
  {
   "type": "choice",
   "q": "___ Peter have to go to school tomorrow? — No, it's Saturday!",
   "options": [
    "Does",
    "Do",
    "Has"
   ],
   "answer": [
    "Does"
   ],
   "explain": "Peter = he, а вопрос с have to строится через does (не has): Does Peter have to...?"
  },
  {
   "type": "order",
   "q": "Нельзя пользоваться телефонами на экзамене.",
   "options": [],
   "answer": [
    "You mustn't use phones in the exam.",
    "In the exam you mustn't use phones.",
    "In the exam, you mustn't use phones.",
    "You mustn't use phones during the exam.",
    "During the exam you mustn't use phones.",
    "During the exam, you mustn't use phones.",
    "You must not use phones in the exam.",
    "In the exam you must not use phones.",
    "In the exam, you must not use phones.",
    "You must not use phones during the exam.",
    "During the exam you must not use phones.",
    "During the exam, you must not use phones."
   ],
   "explain": "«Нельзя» — mustn't (must not), а не don't have to. Обстоятельство «in the exam» можно поставить в конец или в начало предложения."
  },
  {
   "type": "choice",
   "q": "Last night the metro didn't work, so Ross ___ walk home.",
   "options": [
    "had to",
    "must",
    "has to"
   ],
   "answer": [
    "had to"
   ],
   "explain": "В прошлом — had to: у must нет формы прошедшего времени."
  },
  {
   "type": "input",
   "q": "Last month Tony ___ (not / have to) go to the office — he worked from his lab.",
   "options": [],
   "answer": [
    "didn't have to",
    "did not have to"
   ],
   "explain": "«Не нужно было» в прошлом — didn't have to."
  },
  {
   "type": "order",
   "q": "Мне пришлось ждать автобус целый час.",
   "options": [],
   "answer": [
    "I had to wait an hour for the bus.",
    "I had to wait for the bus for an hour.",
    "I had to wait for an hour for the bus."
   ],
   "explain": "«Пришлось» — had to + глагол."
  }
 ],
 "12": [
  {
   "type": "input",
   "q": "___ (где) did you buy that dress? — In Milan!",
   "options": [],
   "answer": [
    "Where",
    "where"
   ],
   "explain": "«Где» — where."
  },
  {
   "type": "choice",
   "q": "Where ___ Spider-Man live? — In New York, with Aunt May.",
   "options": [
    "does",
    "do",
    "is"
   ],
   "answer": [
    "does"
   ],
   "explain": "Present Simple, Spider-Man = he — помощник does."
  },
  {
   "type": "input",
   "q": "___ (почему) are you laughing? — Look at Joey's face!",
   "options": [],
   "answer": [
    "Why",
    "why"
   ],
   "explain": "«Почему» — why."
  },
  {
   "type": "choice",
   "q": "___ do you go to the gym? — Three times a week.",
   "options": [
    "How often",
    "How much",
    "When"
   ],
   "answer": [
    "How often"
   ],
   "explain": "Ответ «три раза в неделю» отвечает на how often."
  },
  {
   "type": "order",
   "q": "Откуда твой новый парень?",
   "options": [],
   "answer": [
    "Where is your new boyfriend from?",
    "Where's your new boyfriend from?"
   ],
   "explain": "С from нужен глагол be, а предлог уходит в конец."
  },
  {
   "type": "input",
   "q": "Where ___ (you / go) last summer? — To Turkey.",
   "options": [],
   "answer": [
    "did you go"
   ],
   "explain": "Прошлое — did + you + глагол в первой форме."
  },
  {
   "type": "choice",
   "q": "___ jacket is this? — It's Joey's!",
   "options": [
    "Whose",
    "Who",
    "Who's"
   ],
   "answer": [
    "Whose"
   ],
   "explain": "«Чей» — whose; who's = who is."
  },
  {
   "type": "input",
   "q": "How much ___ (this coffee / cost)? — Five euros.",
   "options": [],
   "answer": [
    "does this coffee cost"
   ],
   "explain": "Coffee = it: does перед подлежащим, глагол без -s."
  },
  {
   "type": "input",
   "q": "What ___ (you / watch) right now? — The new episode of Wednesday!",
   "options": [],
   "answer": [
    "are you watching"
   ],
   "explain": "Right now — Present Continuous: are + you + -ing."
  },
  {
   "type": "order",
   "q": "Во сколько ты начинаешь работать?",
   "options": [],
   "answer": [
    "What time do you start work?",
    "What time do you start working?",
    "When do you start work?",
    "When do you start working?"
   ],
   "explain": "В Present Simple нужен помощник do перед you."
  },
  {
   "type": "choice",
   "q": "Who ___ the last cookie? — Not me!",
   "options": [
    "ate",
    "did eat",
    "did ate"
   ],
   "answer": [
    "ate"
   ],
   "explain": "Вопрос к подлежащему (кто съел?) — без did, сразу ate."
  },
  {
   "type": "input",
   "q": "Who ___ (live) next door to you? — A very strange man with three cats.",
   "options": [],
   "answer": [
    "lives"
   ],
   "explain": "Вопрос к подлежащему — без does, но глагол получает -s, как в утверждении."
  },
  {
   "type": "choice",
   "q": "What ___ in Hawkins last night? Everybody is talking about it!",
   "options": [
    "happened",
    "did happen",
    "did it happen"
   ],
   "answer": [
    "happened"
   ],
   "explain": "«Что случилось?» — вопрос к подлежащему, did не нужен."
  },
  {
   "type": "order",
   "q": "Кто украл щит Капитана Америки?",
   "options": [],
   "answer": [
    "Who stole Captain America's shield?",
    "Who stole the shield of Captain America?"
   ],
   "explain": "Вопрос к подлежащему — без did, сразу stole."
  },
  {
   "type": "choice",
   "q": "Who ___ Jim Hopper call last night? — Joyce, of course.",
   "options": [
    "did",
    "does",
    "called"
   ],
   "answer": [
    "did"
   ],
   "explain": "Hopper — подлежащее (кому звонил Хоппер?), поэтому нужен did."
  },
  {
   "type": "input",
   "q": "Who ___ (Thor / fight) in Thor: Ragnarok? — His sister Hela.",
   "options": [],
   "answer": [
    "did Thor fight"
   ],
   "explain": "Thor — подлежащее, вопрос «с кем» о прошлом: did + Thor + глагол в первой форме."
  },
  {
   "type": "choice",
   "q": "Who are you waiting ___? — My sister. She's always late!",
   "options": [
    "for",
    "to",
    "at"
   ],
   "answer": [
    "for"
   ],
   "explain": "Wait for — предлог уходит в конец вопроса."
  },
  {
   "type": "order",
   "q": "С кем ты идёшь на вечеринку?",
   "options": [],
   "answer": [
    "Who are you going to the party with?"
   ],
   "explain": "Предлог with уходит в конец вопроса."
  }
 ],
 "13": [
  {
   "type": "choice",
   "q": "Peter Parker ___ visited Avengers Tower many times.",
   "options": [
    "has",
    "have",
    "is",
    "was"
   ],
   "answer": [
    "has"
   ],
   "explain": "Peter Parker = he, поэтому has + V3."
  },
  {
   "type": "input",
   "q": "I have ___ (eat) real pizza in Naples — nothing tastes better!",
   "options": [],
   "answer": [
    "eaten"
   ],
   "explain": "После have нужна 3-я форма: eat → ate → eaten."
  },
  {
   "type": "choice",
   "q": "We have never ___ a horror film at the cinema.",
   "options": [
    "seen",
    "saw",
    "see",
    "seeing"
   ],
   "answer": [
    "seen"
   ],
   "explain": "have + never + V3: see → saw → seen."
  },
  {
   "type": "input",
   "q": "Oh no! I've ___ (forget) the password for my work laptop!",
   "options": [],
   "answer": [
    "forgotten"
   ],
   "explain": "Результат сейчас (войти не получается): have + V3, forget → forgot → forgotten."
  },
  {
   "type": "order",
   "q": "Мы ни разу не смотрели «Друзей» на английском.",
   "options": [],
   "answer": [
    "We have never watched Friends in English."
   ],
   "explain": "Опыт за жизнь: have + never + V3, never уже заменяет not."
  },
  {
   "type": "choice",
   "q": "___ your brother ever worked in a café?",
   "options": [
    "Has",
    "Have",
    "Does",
    "Is"
   ],
   "answer": [
    "Has"
   ],
   "explain": "your brother = he, а worked тут 3-я форма, поэтому вопрос с Has."
  },
  {
   "type": "input",
   "q": "Jessica Jones has ___ (never / ask) anyone for help.",
   "options": [],
   "answer": [
    "never asked"
   ],
   "explain": "never стоит между has и V3: has never asked."
  },
  {
   "type": "choice",
   "q": "— Have you ever been to Iceland? — No, I ___.",
   "options": [
    "haven't",
    "didn't",
    "don't",
    "wasn't"
   ],
   "answer": [
    "haven't"
   ],
   "explain": "Вопрос с Have, значит и короткий ответ с have: No, I haven't."
  },
  {
   "type": "input",
   "q": "My best friend has ___ (be) to Japan three times — she's our sushi expert.",
   "options": [],
   "answer": [
    "been"
   ],
   "explain": "Опыт поездок (съездила и вернулась): has been, 3-я форма от be."
  },
  {
   "type": "order",
   "q": "Ты когда-нибудь пробовала тайскую еду?",
   "options": [],
   "answer": [
    "Have you ever tried Thai food?"
   ],
   "explain": "Вопрос об опыте: Have + you + ever + V3."
  },
  {
   "type": "choice",
   "q": "I ___ to Australia, but I want to go there one day!",
   "options": [
    "have never been",
    "was never",
    "haven't never been",
    "never been"
   ],
   "answer": [
    "have never been"
   ],
   "explain": "«Никогда не была» про опыт — have never been; was не подходит, а not вместе с never не ставят."
  },
  {
   "type": "input",
   "q": "___ (you / ever / sleep) in a tent in the mountains?",
   "options": [],
   "answer": [
    "Have you ever slept",
    "have you ever slept"
   ],
   "explain": "Вопрос об опыте: Have + you + ever + V3, sleep → slept → slept."
  },
  {
   "type": "choice",
   "q": "Oh no! Somebody ___ my sandwich — my lunch box is empty!",
   "options": [
    "has eaten",
    "have eaten",
    "has ate",
    "eats"
   ],
   "answer": [
    "has eaten"
   ],
   "explain": "Результат сейчас (бутерброда нет), somebody = he/she, поэтому has + eaten (а не ate)."
  },
  {
   "type": "order",
   "q": "Капитан Марвел ни разу не проиграла бой.",
   "options": [],
   "answer": [
    "Captain Marvel has never lost a fight."
   ],
   "explain": "Опыт за всё время: has never + V3, lose → lost → lost."
  },
  {
   "type": "input",
   "q": "Where's Bucky? He's ___ (go) to Wakanda, and he's still there.",
   "options": [],
   "answer": [
    "gone"
   ],
   "explain": "Здесь He's = He has. Уехал и сейчас там — has gone; been значило бы, что он уже вернулся."
  },
  {
   "type": "choice",
   "q": "My mum knows Rome really well. She ___ there five times.",
   "options": [
    "has been",
    "has gone",
    "have been",
    "was being"
   ],
   "answer": [
    "has been"
   ],
   "explain": "Съездила и вернулась (опыт) — has been, а has gone значило бы, что она сейчас там."
  },
  {
   "type": "input",
   "q": "___ (Wanda / ever / lose) control of her powers?",
   "options": [],
   "answer": [
    "Has Wanda ever lost",
    "has Wanda ever lost"
   ],
   "explain": "Wanda = she: Has + Wanda + ever + V3, lose → lost."
  },
  {
   "type": "order",
   "q": "Твои родители когда-нибудь летали в Америку?",
   "options": [],
   "answer": [
    "Have your parents ever flown to America?"
   ],
   "explain": "Опыт за жизнь: Have + your parents + ever + flown (fly → flew → flown)."
  }
 ],
 "14": [
  {
   "type": "choice",
   "q": "I ___ my ticket to Barcelona two days ago.",
   "options": [
    "bought",
    "have bought",
    "have buy",
    "buyed"
   ],
   "answer": [
    "bought"
   ],
   "explain": "ago — точное время в прошлом, поэтому Past Simple: buy → bought."
  },
  {
   "type": "input",
   "q": "My boss has been on holiday ___ (for / since) Tuesday, so the office is very quiet.",
   "options": [],
   "answer": [
    "since"
   ],
   "explain": "Tuesday — точка старта, поэтому since."
  },
  {
   "type": "choice",
   "q": "Hurry up! The film has ___ started!",
   "options": [
    "already",
    "yet",
    "ago",
    "for"
   ],
   "answer": [
    "already"
   ],
   "explain": "already (уже) стоит между has и V3 в утверждении; yet в утверждениях не используют."
  },
  {
   "type": "input",
   "q": "Mindy ___ (sing) three songs in a Paris club last night.",
   "options": [],
   "answer": [
    "sang"
   ],
   "explain": "last night — законченное действие в прошлом (спела три песни), значит Past Simple: sing → sang."
  },
  {
   "type": "order",
   "q": "Я уже забронировала отель в Риме.",
   "options": [],
   "answer": [
    "I have already booked a hotel in Rome.",
    "I have booked a hotel in Rome already."
   ],
   "explain": "Время не названо, важен результат: have + already + V3."
  },
  {
   "type": "choice",
   "q": "I haven't packed my suitcase ___, and my flight is in three hours!",
   "options": [
    "yet",
    "already",
    "just",
    "since"
   ],
   "answer": [
    "yet"
   ],
   "explain": "В отрицании «ещё не» — yet в конце; already и just в отрицаниях так не ставят."
  },
  {
   "type": "input",
   "q": "I've ___ (just / wake) up — give me five minutes!",
   "options": [],
   "answer": [
    "just woken"
   ],
   "explain": "just стоит перед V3, а wake → woke → woken."
  },
  {
   "type": "choice",
   "q": "Peter and Ned have been best friends ___ they were kids.",
   "options": [
    "since",
    "for",
    "ago",
    "from"
   ],
   "answer": [
    "since"
   ],
   "explain": "they were kids — точка старта (с детства), поэтому since."
  },
  {
   "type": "input",
   "q": "Have you ___ (read) my message yet? I sent it an hour ago.",
   "options": [],
   "answer": [
    "read"
   ],
   "explain": "После have нужна V3: read → read → read (пишется так же, читается [red])."
  },
  {
   "type": "order",
   "q": "Ты уже посмотрела новый сезон?",
   "options": [],
   "answer": [
    "Have you watched the new season yet?"
   ],
   "explain": "«Уже?» в вопросе — Present Perfect и yet в конце."
  },
  {
   "type": "choice",
   "q": "Wanda ___ in Westview since last spring.",
   "options": [
    "has lived",
    "lives",
    "lived",
    "is living"
   ],
   "answer": [
    "has lived"
   ],
   "explain": "since + точка старта и до сих пор — Present Perfect: has lived."
  },
  {
   "type": "input",
   "q": "I ___ (have) this phone for four years, and it still works perfectly.",
   "options": [],
   "answer": [
    "have had",
    "'ve had"
   ],
   "explain": "Русское «у меня этот телефон 4 года» = have had for four years (have → had → had), а не have."
  },
  {
   "type": "choice",
   "q": "I ___ Natasha for ten years — she's my best friend.",
   "options": [
    "have known",
    "know",
    "knew",
    "am knowing"
   ],
   "answer": [
    "have known"
   ],
   "explain": "«Знаю 10 лет» и до сих пор + for — have known, а не know."
  },
  {
   "type": "order",
   "q": "Мы знакомы с Питером с 2018 года.",
   "options": [],
   "answer": [
    "We have known Peter since 2018."
   ],
   "explain": "Знаем с тех пор и до сих пор: have known + since + точка старта."
  },
  {
   "type": "input",
   "q": "When ___ (you / start) your new job — last month or in May?",
   "options": [],
   "answer": [
    "did you start"
   ],
   "explain": "Вопрос When о прошлом — только Past Simple: When did you start...?"
  },
  {
   "type": "choice",
   "q": "— Have you seen the new season of Squid Game? — Yes, I ___ it last weekend.",
   "options": [
    "watched",
    "have watched",
    "have watch",
    "watch"
   ],
   "answer": [
    "watched"
   ],
   "explain": "Появилось точное время (last weekend) — переходим на Past Simple."
  },
  {
   "type": "input",
   "q": "Doctor Strange ___ (not / open) the portal yet, so we're still waiting.",
   "options": [],
   "answer": [
    "hasn't opened",
    "has not opened"
   ],
   "explain": "«Ещё не» + yet — hasn't + V3."
  },
  {
   "type": "order",
   "q": "Когда ты вернулась из Лондона?",
   "options": [],
   "answer": [
    "When did you come back from London?"
   ],
   "explain": "Вопрос When о точном времени — только Past Simple: When did you...?"
  }
 ],
 "15": [
  {
   "type": "choice",
   "q": "My friends ___ volleyball on the beach at 6 pm yesterday.",
   "options": [
    "were playing",
    "was playing",
    "are playing",
    "playing"
   ],
   "answer": [
    "were playing"
   ],
   "explain": "Процесс в момент прошлого, а my friends = they, поэтому were + -ing."
  },
  {
   "type": "input",
   "q": "I ___ (cut) my finger while I was making a salad.",
   "options": [],
   "answer": [
    "cut"
   ],
   "explain": "Короткое внезапное действие — Past Simple, а cut не меняется: cut → cut → cut."
  },
  {
   "type": "choice",
   "q": "Peter ___ to school when he saw the bank robbers.",
   "options": [
    "was walking",
    "were walking",
    "walks",
    "is walking"
   ],
   "answer": [
    "was walking"
   ],
   "explain": "Фоновое действие в процессе — Past Continuous, с he — was."
  },
  {
   "type": "input",
   "q": "At 3 am last night Eleven ___ (not / sleep) — she was looking out of the window.",
   "options": [],
   "answer": [
    "wasn't sleeping",
    "was not sleeping"
   ],
   "explain": "Процесс в конкретный момент прошлого + отрицание: wasn't + -ing."
  },
  {
   "type": "order",
   "q": "Я спала, когда пришёл курьер.",
   "options": [],
   "answer": [
    "I was sleeping when the courier came.",
    "When the courier came I was sleeping."
   ],
   "explain": "Длинный фон — was sleeping, короткое событие — came (Past Simple)."
  },
  {
   "type": "choice",
   "q": "I was buying coffee at the airport when I ___ my old boss.",
   "options": [
    "met",
    "was meeting",
    "meet",
    "have met"
   ],
   "answer": [
    "met"
   ],
   "explain": "Короткое событие прерывает процесс — Past Simple: meet → met."
  },
  {
   "type": "input",
   "q": "While Joey ___ (eat) Rachel's pizza, she walked into the kitchen.",
   "options": [],
   "answer": [
    "was eating"
   ],
   "explain": "После while — длинное действие в процессе: was eating."
  },
  {
   "type": "choice",
   "q": "While Nairobi ___ the money, the police arrived.",
   "options": [
    "was counting",
    "were counting",
    "is counting",
    "counts"
   ],
   "answer": [
    "was counting"
   ],
   "explain": "while + длинное действие в прошлом, Nairobi = she — was counting."
  },
  {
   "type": "input",
   "q": "We ___ (drive) through the mountains when our car broke down.",
   "options": [],
   "answer": [
    "were driving"
   ],
   "explain": "Фон, который прервала поломка, — Past Continuous, с we — were."
  },
  {
   "type": "order",
   "q": "Пока Тони работал, Пеппер готовила ужин.",
   "options": [],
   "answer": [
    "Tony was working while Pepper was cooking dinner.",
    "While Tony was working Pepper was cooking dinner.",
    "Pepper was cooking dinner while Tony was working."
   ],
   "explain": "Два длинных действия одновременно — оба в Past Continuous, связка while."
  },
  {
   "type": "choice",
   "q": "When the boss ___ into the room, we were watching cat videos.",
   "options": [
    "came",
    "were coming",
    "comes",
    "has come"
   ],
   "answer": [
    "came"
   ],
   "explain": "Босс вошёл — короткое внезапное событие, поэтому Past Simple: come → came."
  },
  {
   "type": "input",
   "q": "When I ___ (open) the door, my cat was sitting on my laptop.",
   "options": [],
   "answer": [
    "opened"
   ],
   "explain": "Открыла дверь — короткое действие (Past Simple), а кот сидел — фон."
  },
  {
   "type": "choice",
   "q": "Wanda ___ a normal life, so she created Westview.",
   "options": [
    "wanted",
    "was wanting",
    "were wanting",
    "wants"
   ],
   "answer": [
    "wanted"
   ],
   "explain": "want — глагол состояния, его не ставят в -ing; речь о прошлом — wanted."
  },
  {
   "type": "order",
   "q": "Ты работала, когда приехало такси?",
   "options": [],
   "answer": [
    "Were you working when the taxi arrived?"
   ],
   "explain": "Вопрос о процессе: Were + you + -ing, а приезд такси — Past Simple."
  },
  {
   "type": "input",
   "q": "Captain America ___ (understand) the plan, but he didn't like it.",
   "options": [],
   "answer": [
    "understood"
   ],
   "explain": "understand — глагол состояния, только Past Simple: understood."
  },
  {
   "type": "choice",
   "q": "While I ___ on the beach, my brother was surfing.",
   "options": [
    "was lying",
    "were lying",
    "am lying",
    "lying"
   ],
   "answer": [
    "was lying"
   ],
   "explain": "Два длинных действия одновременно — оба Past Continuous, с I — was; lie → lying (ie меняется на y)."
  },
  {
   "type": "input",
   "q": "___ (they / work) on the report when the internet went down?",
   "options": [],
   "answer": [
    "Were they working",
    "were they working"
   ],
   "explain": "Вопрос о процессе в прошлом: Were + they + -ing."
  },
  {
   "type": "order",
   "q": "Я не слушала, потому что читала сообщения.",
   "options": [],
   "answer": [
    "I wasn't listening because I was reading messages.",
    "Because I was reading messages I wasn't listening."
   ],
   "explain": "Оба действия — процессы в тот момент: wasn't listening и was reading."
  }
 ],
 "16": [
  {
   "type": "choice",
   "q": "There ___ always a lot of traffic in Rome.",
   "options": [
    "is",
    "are",
    "be",
    "am"
   ],
   "answer": [
    "is"
   ],
   "explain": "traffic неисчисляемое, поэтому глагол в ед. числе: there is."
  },
  {
   "type": "input",
   "q": "Can I have two ___ (bottle) of water for the trip?",
   "options": [],
   "answer": [
    "bottles"
   ],
   "explain": "Воду не считаем, а бутылки считаем: two bottles of water."
  },
  {
   "type": "choice",
   "q": "I bought ___ souvenirs for my colleagues in Rome.",
   "options": [
    "a few",
    "a little",
    "much",
    "a"
   ],
   "answer": [
    "a few"
   ],
   "explain": "souvenirs исчисляемое во мн. ч., смысл «несколько» — a few; a little и much — для неисчисляемых, a — только с ед. числом."
  },
  {
   "type": "input",
   "q": "We need some new ___ (furniture / furnitures) for our office.",
   "options": [],
   "answer": [
    "furniture"
   ],
   "explain": "furniture неисчисляемое, формы с -s у него нет."
  },
  {
   "type": "order",
   "q": "У меня очень мало свободного времени.",
   "options": [],
   "answer": [
    "I have very little free time."
   ],
   "explain": "time неисчисляемое, «очень мало» (почти нет) — very little."
  },
  {
   "type": "choice",
   "q": "Add ___ salt to the soup, but not too much!",
   "options": [
    "a little",
    "a few",
    "many",
    "few"
   ],
   "answer": [
    "a little"
   ],
   "explain": "salt неисчисляемое, «немного» — a little; a few, many и few — для исчисляемых."
  },
  {
   "type": "input",
   "q": "There are only a ___ (few / little) tickets left — buy them now!",
   "options": [],
   "answer": [
    "few"
   ],
   "explain": "tickets исчисляемое во мн. ч., поэтому a few."
  },
  {
   "type": "choice",
   "q": "How ___ episodes of The Witcher have you watched?",
   "options": [
    "many",
    "much",
    "little",
    "a little"
   ],
   "answer": [
    "many"
   ],
   "explain": "episodes исчисляемое во мн. ч., поэтому How many."
  },
  {
   "type": "input",
   "q": "My ___ (luggage / luggages) is too heavy for this flight.",
   "options": [],
   "answer": [
    "luggage"
   ],
   "explain": "luggage неисчисляемое: без -s и с глаголом is."
  },
  {
   "type": "order",
   "q": "Сегодня здесь всего несколько туристов.",
   "options": [],
   "answer": [
    "There are only a few tourists here today.",
    "Today there are only a few tourists here."
   ],
   "explain": "tourists исчисляемое, «несколько» — a few, а «всего» — only."
  },
  {
   "type": "choice",
   "q": "The information on this website ___ wrong!",
   "options": [
    "is",
    "are",
    "were",
    "have"
   ],
   "answer": [
    "is"
   ],
   "explain": "information неисчисляемое, глагол в ед. числе — is."
  },
  {
   "type": "input",
   "q": "Rapunzel's hair ___ (be) twenty metres long!",
   "options": [],
   "answer": [
    "is",
    "was"
   ],
   "explain": "hair (волосы) в английском неисчисляемое, поэтому глагол в ед. числе: hair is (или was в сказке), а не are/were."
  },
  {
   "type": "choice",
   "q": "I can't buy the concert tickets — I have very ___ money left.",
   "options": [
    "little",
    "few",
    "a little",
    "a few"
   ],
   "answer": [
    "little"
   ],
   "explain": "money неисчисляемое, смысл «почти нет» — very little; very a little не бывает."
  },
  {
   "type": "order",
   "q": "Сколько денег ты взяла в поездку?",
   "options": [],
   "answer": [
    "How much money did you take on the trip?",
    "How much money did you take for the trip?"
   ],
   "explain": "money неисчисляемое, поэтому How much, а не How many."
  },
  {
   "type": "input",
   "q": "Wednesday has very ___ (few / little) interest in school parties.",
   "options": [],
   "answer": [
    "little"
   ],
   "explain": "interest (интерес) здесь неисчисляемое, поэтому little."
  },
  {
   "type": "choice",
   "q": "We don't have ___ time — the train leaves in five minutes!",
   "options": [
    "much",
    "many",
    "a few",
    "few"
   ],
   "answer": [
    "much"
   ],
   "explain": "time неисчисляемое, поэтому much (в отрицании: not much = немного); many, a few и few — для исчисляемых."
  },
  {
   "type": "input",
   "q": "Don't worry, I have ___ (few / a few) dollars — I can pay for the taxi.",
   "options": [],
   "answer": [
    "a few"
   ],
   "explain": "dollars исчисляемое, и денег хватает — позитивное «несколько», значит a few."
  },
  {
   "type": "order",
   "q": "Новости сегодня очень хорошие.",
   "options": [],
   "answer": [
    "The news is very good today.",
    "Today the news is very good.",
    "The news today is very good."
   ],
   "explain": "news неисчисляемое, хоть и на -s, поэтому The news is, а не are."
  }
 ],
 "17": [
  {
   "type": "choice",
   "q": "If Peter ___ late for school again, Aunt May will be really angry.",
   "options": [
    "is",
    "will be",
    "was"
   ],
   "answer": [
    "is"
   ],
   "explain": "После if про будущее ставим Present Simple (is), will идёт только в главную часть."
  },
  {
   "type": "input",
   "q": "If Groot ___ (get) enough water, he will grow very fast.",
   "options": [],
   "answer": [
    "gets"
   ],
   "explain": "После if нужен Present Simple, Groot = he, поэтому gets."
  },
  {
   "type": "choice",
   "q": "If you finish the report by five today, the boss ___ you leave early.",
   "options": [
    "will let",
    "lets",
    "let"
   ],
   "answer": [
    "will let"
   ],
   "explain": "Речь о конкретном сегодняшнем дне, то есть о будущем, поэтому в главной части First Conditional стоит will + глагол."
  },
  {
   "type": "input",
   "q": "If you ___ (not / sleep) tonight, you will be tired at the meeting tomorrow.",
   "options": [],
   "answer": [
    "don't sleep",
    "do not sleep"
   ],
   "explain": "Отрицание после if строим через don't + глагол, will туда не ставим."
  },
  {
   "type": "order",
   "q": "Начальник рассердится, если ты опоздаешь.",
   "options": [],
   "answer": [
    "The boss will be angry if you are late.",
    "If you are late the boss will be angry."
   ],
   "explain": "Русское «опоздаешь» после if превращается в Present Simple: if you are late."
  },
  {
   "type": "choice",
   "q": "I'll book a hotel in Rome as soon as my boss ___ my vacation.",
   "options": [
    "approves",
    "will approve",
    "approve"
   ],
   "answer": [
    "approves"
   ],
   "explain": "После as soon as ставим Present Simple, boss = he, поэтому approves."
  },
  {
   "type": "input",
   "q": "I'll make dinner after the kids ___ (go) to bed.",
   "options": [],
   "answer": [
    "go",
    "have gone"
   ],
   "explain": "После after про будущее ставим Present Simple: kids = they, поэтому go без -s. Have gone тоже возможно, а will нельзя."
  },
  {
   "type": "choice",
   "q": "We will wait at the airport until your plane ___.",
   "options": [
    "lands",
    "will land",
    "landed"
   ],
   "answer": [
    "lands"
   ],
   "explain": "После until ставим Present Simple, хотя по-русски «пока не приземлится» звучит как будущее."
  },
  {
   "type": "input",
   "q": "When the new season of Stranger Things ___ (come) out, my friends and I will watch it in one night.",
   "options": [],
   "answer": [
    "comes"
   ],
   "explain": "После when про будущее нужен Present Simple, season = it, поэтому comes."
  },
  {
   "type": "order",
   "q": "Я куплю билеты, когда получу зарплату.",
   "options": [],
   "answer": [
    "I will buy the tickets when I get paid.",
    "When I get paid I will buy the tickets."
   ],
   "explain": "«Получу зарплату» по-английски естественно звучит как get paid. После when ставим Present Simple (I get paid), а will только в главной части."
  },
  {
   "type": "choice",
   "q": "Rachel won't forgive Ross unless he ___ sorry.",
   "options": [
    "says",
    "doesn't say",
    "will say"
   ],
   "answer": [
    "says"
   ],
   "explain": "Unless уже значит «если не», поэтому глагол утвердительный и без will."
  },
  {
   "type": "input",
   "q": "As soon as Tony ___ (fix) the suit, he will fly to New York.",
   "options": [],
   "answer": [
    "fixes",
    "has fixed"
   ],
   "explain": "После as soon as ставим Present Simple: Tony = he, fix → fixes. Has fixed («как только уже починит») тоже правильно, а will нельзя."
  },
  {
   "type": "choice",
   "q": "Nick Fury won't call the Avengers ___ there is a real emergency.",
   "options": [
    "unless",
    "if",
    "when"
   ],
   "answer": [
    "unless"
   ],
   "explain": "Смысл «не позвонит, если НЕ будет реальной угрозы», поэтому нужен unless."
  },
  {
   "type": "input",
   "q": "Dustin ___ (not / tell) anyone the secret unless Steve asks him.",
   "options": [],
   "answer": [
    "won't tell",
    "will not tell"
   ],
   "explain": "Главная часть про будущее строится с won't + глагол, а после unless идёт Present Simple."
  },
  {
   "type": "order",
   "q": "Мы не уедем, пока не придёт Моника.",
   "options": [],
   "answer": [
    "We won't leave until Monica comes.",
    "Until Monica comes we won't leave."
   ],
   "explain": "После until ставим Present Simple без отрицания: until Monica comes."
  },
  {
   "type": "input",
   "q": "The manager won't sign the contract until he ___ (read) every page.",
   "options": [],
   "answer": [
    "reads",
    "has read"
   ],
   "explain": "После until ставим Present Simple (reads) или has read («пока не прочитает до конца»), а will здесь не бывает."
  },
  {
   "type": "order",
   "q": "Я не пойду на вечеринку, если ты не пойдёшь.",
   "options": [],
   "answer": [
    "I won't go to the party unless you go.",
    "Unless you go I won't go to the party."
   ],
   "explain": "Unless = «если не», поэтому после него глагол без отрицания: unless you go."
  },
  {
   "type": "choice",
   "q": "If the Wi-Fi ___ working at the hotel tomorrow, I ___ my boss from a café.",
   "options": [
    "isn't / will call",
    "won't be / call",
    "isn't / call",
    "won't be / will call"
   ],
   "answer": [
    "isn't / will call"
   ],
   "explain": "Речь о завтрашнем дне: в части с if стоит настоящее время (isn't), а в главной части will + глагол."
  }
 ],
 "18": [
  {
   "type": "choice",
   "q": "Steve Rogers misses ___ in the 1940s.",
   "options": [
    "living",
    "to live",
    "live"
   ],
   "answer": [
    "living"
   ],
   "explain": "После miss глагол идёт с -ing."
  },
  {
   "type": "input",
   "q": "Chandler can't stand ___ (wait) in long lines.",
   "options": [],
   "answer": [
    "waiting"
   ],
   "explain": "После can't stand всегда ставим -ing."
  },
  {
   "type": "choice",
   "q": "I need ___ my passport before the trip to Rome.",
   "options": [
    "to renew",
    "renewing",
    "renew"
   ],
   "answer": [
    "to renew"
   ],
   "explain": "После need идёт to + глагол."
  },
  {
   "type": "input",
   "q": "We hope ___ (visit) Japan next spring.",
   "options": [],
   "answer": [
    "to visit"
   ],
   "explain": "После hope идёт to + глагол."
  },
  {
   "type": "order",
   "q": "Я терпеть не могу вставать рано.",
   "options": [],
   "answer": [
    "I can't stand getting up early."
   ],
   "explain": "После can't stand идёт -ing, хотя по-русски тут инфинитив «вставать»."
  },
  {
   "type": "choice",
   "q": "Peter Parker avoids ___ about Spider-Man at school.",
   "options": [
    "talking",
    "to talk",
    "talk"
   ],
   "answer": [
    "talking"
   ],
   "explain": "После avoid глагол стоит с -ing."
  },
  {
   "type": "input",
   "q": "Mike is afraid of ___ (lose) his friends.",
   "options": [],
   "answer": [
    "losing"
   ],
   "explain": "После предлога of глагол всегда с -ing."
  },
  {
   "type": "choice",
   "q": "Thank you so much for ___ me with my CV!",
   "options": [
    "helping",
    "to help",
    "help"
   ],
   "answer": [
    "helping"
   ],
   "explain": "После предлога for ставим -ing."
  },
  {
   "type": "input",
   "q": "Wanda agreed ___ (help) the Avengers.",
   "options": [],
   "answer": [
    "to help"
   ],
   "explain": "После agree идёт to + глагол."
  },
  {
   "type": "order",
   "q": "Она решила выучить французский.",
   "options": [],
   "answer": [
    "She decided to learn French."
   ],
   "explain": "После decide ставим to + глагол."
  },
  {
   "type": "choice",
   "q": "I'm learning English ___ series without subtitles.",
   "options": [
    "to watch",
    "for watch",
    "for watching"
   ],
   "answer": [
    "to watch"
   ],
   "explain": "«Чтобы» передаём через to + глагол, а не через for."
  },
  {
   "type": "input",
   "q": "My boss keeps ___ (send) me emails at midnight!",
   "options": [],
   "answer": [
    "sending"
   ],
   "explain": "После keep (продолжать, всё время) идёт -ing."
  },
  {
   "type": "choice",
   "q": "I want to sleep better, so I stopped ___ coffee after 6 pm.",
   "options": [
    "drinking",
    "to drink",
    "drink"
   ],
   "answer": [
    "drinking"
   ],
   "explain": "Stop doing = перестать что-то делать, а stop to do значит «остановиться, чтобы сделать»."
  },
  {
   "type": "input",
   "q": "Every morning I go to the café near my office ___ (practice) English with the barista.",
   "options": [],
   "answer": [
    "to practice",
    "to practise"
   ],
   "explain": "Цель «чтобы» передаём через to + глагол."
  },
  {
   "type": "order",
   "q": "Он ушёл, не попрощавшись.",
   "options": [],
   "answer": [
    "He left without saying goodbye."
   ],
   "explain": "После предлога without глагол стоит с -ing: without saying."
  },
  {
   "type": "input",
   "q": "Joey would love ___ (be) in a Marvel movie.",
   "options": [],
   "answer": [
    "to be"
   ],
   "explain": "После would love ставим только to + глагол, -ing здесь нельзя."
  },
  {
   "type": "order",
   "q": "Мы планируем посетить Лондон, чтобы посмотреть мюзикл.",
   "options": [],
   "answer": [
    "We plan to visit London to see a musical."
   ],
   "explain": "После plan идёт to + глагол (to visit), и «чтобы» тоже передаём через to (to see)."
  },
  {
   "type": "choice",
   "q": "Would you like ___ the new Marvel movie tonight, or are you worried about ___ to bed late?",
   "options": [
    "to watch / going",
    "watching / to go",
    "to watch / to go",
    "watching / going"
   ],
   "answer": [
    "to watch / going"
   ],
   "explain": "После would like идёт to + глагол, а после предлога about нужен -ing."
  }
 ],
 "19": [
  {
   "type": "choice",
   "q": "If I ___ in New York, I would visit Avengers Tower every day.",
   "options": [
    "lived",
    "live",
    "would live"
   ],
   "answer": [
    "lived"
   ],
   "explain": "В части с if во Second Conditional ставим Past Simple, would туда не ставим."
  },
  {
   "type": "input",
   "q": "If my boss ___ (give) me a day off, I would go to the beach.",
   "options": [],
   "answer": [
    "gave"
   ],
   "explain": "После if в нереальном условии нужен Past Simple: give → gave."
  },
  {
   "type": "choice",
   "q": "If Tony Stark were here, he ___ this computer in a second.",
   "options": [
    "would fix",
    "will fix",
    "fixes"
   ],
   "answer": [
    "would fix"
   ],
   "explain": "Ситуация воображаемая, поэтому в главной части would + глагол."
  },
  {
   "type": "input",
   "q": "If I spoke perfect English, I ___ (apply) for a job in London.",
   "options": [],
   "answer": [
    "would apply",
    "'d apply",
    "could apply"
   ],
   "explain": "Главная часть нереального условия строится с would + глагол (could apply = могла бы подать заявку — тоже правильно)."
  },
  {
   "type": "order",
   "q": "Я была бы счастливее, если бы у меня была собака.",
   "options": [],
   "answer": [
    "I would be happier if I had a dog.",
    "If I had a dog I would be happier."
   ],
   "explain": "«Была бы счастливее» становится would be happier, а «была бы» после if превращается в had."
  },
  {
   "type": "choice",
   "q": "If my sister ___ more patient, she would be a great teacher.",
   "options": [
    "were",
    "is",
    "would be"
   ],
   "answer": [
    "were"
   ],
   "explain": "С to be в части с if ставим were для всех лиц, would там не бывает."
  },
  {
   "type": "input",
   "q": "If Hulk ___ (be) calmer, he wouldn't break so many things.",
   "options": [],
   "answer": [
    "were",
    "was"
   ],
   "explain": "В нереальном условии с to be ставим were (в разговоре можно was)."
  },
  {
   "type": "choice",
   "q": "If I ___ how to cook, I wouldn't order pizza every night.",
   "options": [
    "knew",
    "know",
    "would know"
   ],
   "answer": [
    "knew"
   ],
   "explain": "После if нужен Past Simple: know → knew, хотя речь о настоящем."
  },
  {
   "type": "input",
   "q": "If we ___ (not / work) on Saturdays, we would travel much more.",
   "options": [],
   "answer": [
    "didn't work",
    "did not work"
   ],
   "explain": "Отрицание в части с if строим через didn't + глагол."
  },
  {
   "type": "order",
   "q": "Куда бы ты поехала, если бы могла?",
   "options": [],
   "answer": [
    "Where would you go if you could?",
    "If you could where would you go?"
   ],
   "explain": "Would ставим в вопросе главной части, а «могла бы» после if передаём через could."
  },
  {
   "type": "choice",
   "q": "If you could have any superpower, which one ___ you choose?",
   "options": [
    "would",
    "will",
    "did"
   ],
   "answer": [
    "would"
   ],
   "explain": "Вопрос к нереальной ситуации строим с would + подлежащее + глагол."
  },
  {
   "type": "input",
   "q": "If I were Black Widow, I ___ (not / be) afraid of anything.",
   "options": [],
   "answer": [
    "wouldn't be",
    "would not be"
   ],
   "explain": "Отрицание в главной части: wouldn't + глагол."
  },
  {
   "type": "choice",
   "q": "I'm sure I'll pass the exam. If I ___ it, I'll celebrate with my friends.",
   "options": [
    "pass",
    "passed",
    "would pass"
   ],
   "answer": [
    "pass"
   ],
   "explain": "Ситуация реальная и в главной части will, значит это First Conditional с Present Simple после if."
  },
  {
   "type": "input",
   "q": "What ___ (you / do) if you lost your passport in Rome?",
   "options": [],
   "answer": [
    "would you do"
   ],
   "explain": "Вопрос в главной части нереального условия: would + you + глагол."
  },
  {
   "type": "order",
   "q": "Он бы пришёл сегодня, если бы не был так занят.",
   "options": [],
   "answer": [
    "He would come today if he weren't so busy.",
    "If he weren't so busy he would come today.",
    "He would come today if he wasn't so busy.",
    "If he wasn't so busy he would come today.",
    "He would come if he weren't so busy today.",
    "He would come if he wasn't so busy today.",
    "If he weren't so busy today he would come.",
    "If he wasn't so busy today he would come."
   ],
   "explain": "«Пришёл бы сегодня» = would come today, а в части с if отрицание с to be = weren't (в разговоре можно wasn't). Today можно поставить и в конец: …if he weren't so busy today — смысл тот же."
  },
  {
   "type": "input",
   "q": "If I ___ (can) fly, I would never take the subway again.",
   "options": [],
   "answer": [
    "could"
   ],
   "explain": "В части с if can превращается в прошедшую форму could."
  },
  {
   "type": "order",
   "q": "Я бы не работала здесь, если бы мне здесь не нравилось.",
   "options": [],
   "answer": [
    "I wouldn't work here if I didn't like it.",
    "If I didn't like it I wouldn't work here."
   ],
   "explain": "«Бы» в обеих частях русского предложения, но would только в главной, а после if — Past Simple: didn't like."
  },
  {
   "type": "choice",
   "q": "If Chandler ___ so many jokes, people ___ him more seriously.",
   "options": [
    "didn't make / would take",
    "wouldn't make / would take",
    "didn't make / will take",
    "doesn't make / would take"
   ],
   "answer": [
    "didn't make / would take"
   ],
   "explain": "После if ставим Past Simple (didn't make), а would только в главной части."
  }
 ],
 "20": [
  {
   "type": "choice",
   "q": "These T-shirts ___ in Turkey.",
   "options": [
    "are made",
    "make",
    "is made"
   ],
   "answer": [
    "are made"
   ],
   "explain": "Футболки сами не делают, значит пассив: are (их много) + V3."
  },
  {
   "type": "input",
   "q": "Pizza ___ (invent) in Italy.",
   "options": [],
   "answer": [
    "was invented"
   ],
   "explain": "Событие в прошлом в пассиве: was + V3."
  },
  {
   "type": "choice",
   "q": "The Harry Potter books ___ by J.K. Rowling.",
   "options": [
    "were written",
    "was written",
    "wrote"
   ],
   "answer": [
    "were written"
   ],
   "explain": "Books во множественном числе, поэтому were + третья форма written."
  },
  {
   "type": "input",
   "q": "The new Spider-Man movie ___ (show) in cinemas last month.",
   "options": [],
   "answer": [
    "was shown"
   ],
   "explain": "Last month — прошлое, поэтому was + V3 (show → shown)."
  },
  {
   "type": "order",
   "q": "Этот торт испекла моя мама.",
   "options": [],
   "answer": [
    "This cake was baked by my mom.",
    "This cake was baked by my mum."
   ],
   "explain": "Важен торт, поэтому пассив: was baked, а того, кто сделал, вводим через by."
  },
  {
   "type": "choice",
   "q": "Tony Stark's first suit ___ in a cave. He made it from old weapons.",
   "options": [
    "was built",
    "built",
    "is built"
   ],
   "answer": [
    "was built"
   ],
   "explain": "Костюм сам себя не строил — его построили, и это было в прошлом (He made it): was + V3."
  },
  {
   "type": "input",
   "q": "Even today, these old cartoons ___ (love) by kids all over the world.",
   "options": [],
   "answer": [
    "are loved"
   ],
   "explain": "Факт в настоящем (even today), cartoons во множественном числе: are + loved."
  },
  {
   "type": "choice",
   "q": "The rooms in this hotel ___ every day.",
   "options": [
    "are cleaned",
    "is cleaned",
    "clean"
   ],
   "answer": [
    "are cleaned"
   ],
   "explain": "Комнаты убирают (пассив), rooms во множественном числе, поэтому are + V3."
  },
  {
   "type": "input",
   "q": "Millions of cups of coffee ___ (drink) in offices every day.",
   "options": [],
   "answer": [
    "are drunk"
   ],
   "explain": "Регулярное действие, cups во множественном числе: are + V3 (drink → drunk)."
  },
  {
   "type": "order",
   "q": "Здесь продают билеты в кино.",
   "options": [],
   "answer": [
    "Movie tickets are sold here.",
    "Cinema tickets are sold here."
   ],
   "explain": "Русское безличное «продают» по-английски передаём пассивом: are sold."
  },
  {
   "type": "choice",
   "q": "___ your flight cancelled because of the storm?",
   "options": [
    "Was",
    "Did",
    "Were"
   ],
   "answer": [
    "Was"
   ],
   "explain": "Вопрос в пассиве начинаем с be, а не с did, flight в единственном числе, поэтому was."
  },
  {
   "type": "input",
   "q": "My laptop ___ (not / repair) yesterday, so I can't work today.",
   "options": [],
   "answer": [
    "wasn't repaired",
    "was not repaired"
   ],
   "explain": "Отрицание в пассиве в прошлом: wasn't + V3, а не didn't."
  },
  {
   "type": "choice",
   "q": "Where ___ The Lord of the Rings movies filmed?",
   "options": [
    "were",
    "did",
    "was"
   ],
   "answer": [
    "were"
   ],
   "explain": "Пассивный вопрос строим через be, movies во множественном числе, поэтому were. (Ответ: в Новой Зеландии!)"
  },
  {
   "type": "input",
   "q": "When ___ (the Eiffel Tower / build)?",
   "options": [],
   "answer": [
    "was the Eiffel Tower built"
   ],
   "explain": "В пассивном вопросе: вопросительное слово + was + подлежащее + V3."
  },
  {
   "type": "order",
   "q": "Когда был написан этот роман?",
   "options": [],
   "answer": [
    "When was this novel written?"
   ],
   "explain": "Пассивный вопрос: When + was + подлежащее + V3 в конце."
  },
  {
   "type": "input",
   "q": "At my company, meetings ___ (not / record), so please take notes!",
   "options": [],
   "answer": [
    "aren't recorded",
    "are not recorded"
   ],
   "explain": "Регулярный факт в настоящем, отрицание в пассиве: aren't + V3."
  },
  {
   "type": "order",
   "q": "Нас не пригласили на вечеринку.",
   "options": [],
   "answer": [
    "We weren't invited to the party.",
    "We were not invited to the party."
   ],
   "explain": "Русское «нас не пригласили» = пассив: we weren't invited, без did."
  },
  {
   "type": "choice",
   "q": "The thief ___ by the police, but the money ___ never found.",
   "options": [
    "was caught / was",
    "caught / was",
    "was caught / did",
    "is caught / were"
   ],
   "answer": [
    "was caught / was"
   ],
   "explain": "Обе части в Past Passive: was + V3, а did с пассивом не используется."
  }
 ],
 "21": [
  {
   "type": "choice",
   "q": "The Tesseract is a cube ___ has unlimited power.",
   "options": [
    "which",
    "who",
    "where",
    "whose"
   ],
   "answer": [
    "which"
   ],
   "explain": "Тессеракт — это вещь, поэтому which."
  },
  {
   "type": "choice",
   "q": "I have a friend ___ works at Netflix.",
   "options": [
    "who",
    "which",
    "where",
    "whose"
   ],
   "answer": [
    "who"
   ],
   "explain": "Друг — человек, поэтому who."
  },
  {
   "type": "choice",
   "q": "This is the hotel ___ we stayed in Rome.",
   "options": [
    "where",
    "which",
    "who",
    "whose"
   ],
   "answer": [
    "where"
   ],
   "explain": "Отель — место, в котором мы жили, поэтому where; с which понадобился бы предлог (the hotel which we stayed in)."
  },
  {
   "type": "choice",
   "q": "Peter Parker has an aunt ___ name is May.",
   "options": [
    "whose",
    "who",
    "who's",
    "which"
   ],
   "answer": [
    "whose"
   ],
   "explain": "«Чьё имя / у которой имя» — whose + существительное; who's = who is."
  },
  {
   "type": "choice",
   "q": "The jacket ___ I bought in Milan was very expensive.",
   "options": [
    "that",
    "what",
    "who",
    "where"
   ],
   "answer": [
    "that"
   ],
   "explain": "«Которую» про вещь — that или which, но никогда не what."
  },
  {
   "type": "choice",
   "q": "My boss, ___ is from London, speaks very fast.",
   "options": [
    "who",
    "that",
    "which",
    "what"
   ],
   "answer": [
    "who"
   ],
   "explain": "После запятой that нельзя, а which не для людей, поэтому who."
  },
  {
   "type": "choice",
   "q": "Venice, ___ is my favourite city, has no cars.",
   "options": [
    "which",
    "that",
    "where",
    "what"
   ],
   "answer": [
    "which"
   ],
   "explain": "Слово-связка само стоит на месте подлежащего (Venice is my favourite city), поэтому which; после where нужно своё подлежащее, а that не ставится после запятой."
  },
  {
   "type": "input",
   "q": "Spider-Man is a hero ___ swings between buildings. (про человека)",
   "options": [],
   "answer": [
    "who",
    "that"
   ],
   "explain": "Про людей говорим who или that."
  },
  {
   "type": "input",
   "q": "The ring ___ Frodo carries is very dangerous. (про вещь)",
   "options": [],
   "answer": [
    "which",
    "that"
   ],
   "explain": "Для вещей подходит which или that."
  },
  {
   "type": "input",
   "q": "Do you remember the beach ___ we swam with turtles? (место)",
   "options": [],
   "answer": [
    "where",
    "at which"
   ],
   "explain": "Пляж — место, где мы плавали, поэтому where (более формально — at which)."
  },
  {
   "type": "input",
   "q": "I met a guy ___ dog can open doors! (чья собака)",
   "options": [],
   "answer": [
    "whose"
   ],
   "explain": "«Чья собака» — whose + существительное."
  },
  {
   "type": "input",
   "q": "The Netflix show ___ everyone is talking about is Squid Game. (про вещь, не what!)",
   "options": [],
   "answer": [
    "which",
    "that"
   ],
   "explain": "«Шоу, о котором» — which или that; what в значении «который» не используется."
  },
  {
   "type": "input",
   "q": "Black Widow, ___ real name is Natasha Romanoff, is a spy. (чьё)",
   "options": [],
   "answer": [
    "whose"
   ],
   "explain": "«Чьё настоящее имя» — whose, и в запятых это тоже работает."
  },
  {
   "type": "input",
   "q": "Wakanda, ___ T'Challa is king, is hidden from the world. (место)",
   "options": [],
   "answer": [
    "where",
    "in which"
   ],
   "explain": "Ваканда — место, в котором Т'Чалла король, поэтому where; that после запятой нельзя."
  },
  {
   "type": "order",
   "q": "Мне нравятся люди, которые много смеются.",
   "options": [],
   "answer": [
    "I like people who laugh a lot.",
    "I like people that laugh a lot."
   ],
   "explain": "Про людей — who/that, сразу после него идёт глагол."
  },
  {
   "type": "order",
   "q": "Это офис, где работает моя сестра.",
   "options": [],
   "answer": [
    "This is the office where my sister works."
   ],
   "explain": "Место — where, дальше обычный порядок: подлежащее + глагол."
  },
  {
   "type": "order",
   "q": "Ты видела фильм, который я посоветовала?",
   "options": [],
   "answer": [
    "Have you seen the film that I recommended?",
    "Have you seen the film which I recommended?",
    "Did you see the film that I recommended?",
    "Did you see the film which I recommended?"
   ],
   "explain": "После that/which местоимение it не повторяем: the film that I recommended."
  },
  {
   "type": "order",
   "q": "Он актёр, чья жена тоже знаменита.",
   "options": [],
   "answer": [
    "He is an actor whose wife is also famous.",
    "He's an actor whose wife is also famous.",
    "He is an actor whose wife is famous too.",
    "He's an actor whose wife is famous too."
   ],
   "explain": "«Чья жена» — whose wife, без артикля после whose."
  }
 ],
 "22": [
  {
   "type": "choice",
   "q": "Tony Stark ___ be a weapons dealer before he became Iron Man.",
   "options": [
    "used to",
    "is used to",
    "uses to",
    "gets used to"
   ],
   "answer": [
    "used to"
   ],
   "explain": "«Раньше был, а теперь нет» — used to + глагол."
  },
  {
   "type": "choice",
   "q": "Natasha is a spy, so she ___ working at night.",
   "options": [
    "is used to",
    "used to",
    "use to",
    "is use to"
   ],
   "answer": [
    "is used to"
   ],
   "explain": "«Привыкла» + -ing — be used to; просто used to working неверно."
  },
  {
   "type": "choice",
   "q": "___ you use to play video games as a kid?",
   "options": [
    "Did",
    "Were",
    "Do",
    "Are"
   ],
   "answer": [
    "Did"
   ],
   "explain": "Вопрос про прошлую привычку — Did you use to...?"
  },
  {
   "type": "choice",
   "q": "I'm slowly getting used to ___ in a big city.",
   "options": [
    "living",
    "live",
    "lived",
    "to live"
   ],
   "answer": [
    "living"
   ],
   "explain": "После get used to глагол всегда с -ing."
  },
  {
   "type": "choice",
   "q": "We ___ go to the cinema every Friday, but now we just watch Netflix.",
   "options": [
    "used to",
    "are used to",
    "got used to",
    "use to"
   ],
   "answer": [
    "used to"
   ],
   "explain": "Привычка в прошлом, которой сейчас нет, — used to + глагол."
  },
  {
   "type": "choice",
   "q": "It took me two months to ___ used to driving on the left in London.",
   "options": [
    "get",
    "be",
    "use",
    "am"
   ],
   "answer": [
    "get"
   ],
   "explain": "Процесс привыкания (заняло два месяца) — get used to."
  },
  {
   "type": "choice",
   "q": "Joey ___ to eating huge sandwiches for lunch.",
   "options": [
    "is used",
    "used",
    "uses",
    "use"
   ],
   "answer": [
    "is used"
   ],
   "explain": "Used to + -ing без be не бывает: «привык есть» — is used to eating."
  },
  {
   "type": "input",
   "q": "Wanda ___ (use) to live in Sokovia, but now she lives in Westview.",
   "options": [],
   "answer": [
    "used"
   ],
   "explain": "«Раньше жила» в утверждении — used to, с -d."
  },
  {
   "type": "input",
   "q": "Where did you ___ (use) to work before this job?",
   "options": [],
   "answer": [
    "use"
   ],
   "explain": "В вопросе с did пишем use без -d."
  },
  {
   "type": "input",
   "q": "I'm not used to ___ (wear) high heels at work.",
   "options": [],
   "answer": [
    "wearing"
   ],
   "explain": "После be used to глагол с -ing."
  },
  {
   "type": "input",
   "q": "Eleven slowly got used to ___ (live) with a normal family.",
   "options": [],
   "answer": [
    "living"
   ],
   "explain": "После got used to глагол с -ing."
  },
  {
   "type": "input",
   "q": "Rachel ___ (be) used to expensive shops, so working as a waitress was hard for her.",
   "options": [],
   "answer": [
    "was"
   ],
   "explain": "«Была привыкшей» в прошлом — was used to + существительное."
  },
  {
   "type": "input",
   "q": "Don't worry, you'll soon ___ (get) used to the time difference in New York.",
   "options": [],
   "answer": [
    "get"
   ],
   "explain": "Процесс привыкания в будущем — will get used to."
  },
  {
   "type": "input",
   "q": "My grandma never got used to ___ (use) a smartphone.",
   "options": [],
   "answer": [
    "using"
   ],
   "explain": "После got used to глагол с -ing, даже если это сам глагол use."
  },
  {
   "type": "order",
   "q": "Раньше я ненавидела брокколи.",
   "options": [],
   "answer": [
    "I used to hate broccoli."
   ],
   "explain": "«Раньше, а теперь нет» — used to + hate."
  },
  {
   "type": "order",
   "q": "Ты раньше жила в Казани?",
   "options": [],
   "answer": [
    "Did you use to live in Kazan?"
   ],
   "explain": "Вопрос с did, поэтому use без -d."
  },
  {
   "type": "order",
   "q": "Я не привыкла работать по выходным.",
   "options": [],
   "answer": [
    "I am not used to working at weekends.",
    "I'm not used to working at weekends.",
    "I am not used to working on weekends.",
    "I'm not used to working on weekends."
   ],
   "explain": "«Не привыкла» — am not used to + глагол с -ing."
  },
  {
   "type": "order",
   "q": "Она привыкает к жизни в Париже.",
   "options": [],
   "answer": [
    "She is getting used to life in Paris.",
    "She's getting used to life in Paris.",
    "She is getting used to living in Paris.",
    "She's getting used to living in Paris."
   ],
   "explain": "Процесс «привыкает» прямо сейчас — is getting used to + существительное (или глагол с -ing)."
  }
 ],
 "23": [
  {
   "type": "choice",
   "q": "My boss ___ us that the meeting was at ten.",
   "options": [
    "told",
    "said",
    "asked",
    "spoke"
   ],
   "answer": [
    "told"
   ],
   "explain": "После глагола стоит человек (us), поэтому told."
  },
  {
   "type": "choice",
   "q": "Peter: \"I need a new suit.\" → Peter said that he ___ a new suit. (сдвиг времён)",
   "options": [
    "needed",
    "has needed",
    "need",
    "is needing"
   ],
   "answer": [
    "needed"
   ],
   "explain": "Present Simple в косвенной речи сдвигается в Past Simple: need → needed. Has needed и is needing здесь не подходят."
  },
  {
   "type": "choice",
   "q": "Monica: \"We are getting married!\" → Monica said that they ___ getting married. (сдвиг времён)",
   "options": [
    "were",
    "be",
    "was",
    "have been"
   ],
   "answer": [
    "were"
   ],
   "explain": "Are сдвигается в were, а с they нужен were, а не was."
  },
  {
   "type": "choice",
   "q": "The waiter asked us ___ we wanted dessert.",
   "options": [
    "if",
    "that",
    "what if",
    "do"
   ],
   "answer": [
    "if"
   ],
   "explain": "Вопрос «да/нет» пересказываем через if (или whether)."
  },
  {
   "type": "choice",
   "q": "My friend asked me ___.",
   "options": [
    "what time it was",
    "what time was it",
    "what time is it",
    "what time did it be"
   ],
   "answer": [
    "what time it was"
   ],
   "explain": "В косвенном вопросе обычный порядок слов (it was), а время сдвигается в прошлое."
  },
  {
   "type": "choice",
   "q": "The doctor told me ___ so much coffee.",
   "options": [
    "not to drink",
    "don't drink",
    "to not drinking",
    "no drink"
   ],
   "answer": [
    "not to drink"
   ],
   "explain": "Запрет пересказываем так: told + человек + not to + глагол."
  },
  {
   "type": "choice",
   "q": "Rachel ___ that she wanted to work in fashion.",
   "options": [
    "said",
    "told",
    "said me",
    "asked"
   ],
   "answer": [
    "said"
   ],
   "explain": "Человека после глагола нет, поэтому said; said me — ошибка, а told требует человека."
  },
  {
   "type": "input",
   "q": "Chandler: \"I hate Thanksgiving.\" → Chandler said that he ___ Thanksgiving. (hate; сдвиг времён)",
   "options": [],
   "answer": [
    "hated"
   ],
   "explain": "Hate в косвенной речи становится hated. В живой речи можно сказать и hates, если он до сих пор не любит этот праздник, но правило сдвига даёт hated."
  },
  {
   "type": "input",
   "q": "Groot: \"I am Groot.\" → Groot said that he ___ Groot. (be; сдвиг времён)",
   "options": [],
   "answer": [
    "was"
   ],
   "explain": "Am в косвенной речи становится was. Is без сдвига тоже возможно (он и сейчас Грут), но по правилу сдвига — was."
  },
  {
   "type": "input",
   "q": "Wednesday: \"I won't wear pink.\" → Wednesday said that she ___ wear pink. (won't; сдвиг времён)",
   "options": [],
   "answer": [
    "wouldn't",
    "would not"
   ],
   "explain": "Won't в косвенной речи становится wouldn't (would not)."
  },
  {
   "type": "input",
   "q": "Emily: \"I am working on a new campaign.\" → Emily said that she ___ on a new campaign. (work; сдвиг времён)",
   "options": [],
   "answer": [
    "was working"
   ],
   "explain": "Am working сдвигается в was working. Нужны два слова: was + -ing."
  },
  {
   "type": "input",
   "q": "My new boss asked me when I ___ start. (can; сдвиг времён)",
   "options": [],
   "answer": [
    "could"
   ],
   "explain": "После when обычный порядок слов, а can сдвигается в could. В разговоре иногда оставляют can, но по правилу — could."
  },
  {
   "type": "input",
   "q": "Phoebe: \"Where are my keys?\" → Phoebe asked where her keys ___. (be; сдвиг времён)",
   "options": [],
   "answer": [
    "were"
   ],
   "explain": "В косвенном вопросе глагол стоит после подлежащего, а are становится were."
  },
  {
   "type": "input",
   "q": "Rachel: \"Ross, help me with the boxes, please!\" → Rachel asked Ross ___ (help) her with the boxes.",
   "options": [],
   "answer": [
    "to help"
   ],
   "explain": "Просьба передаётся так: asked + человек + to + глагол."
  },
  {
   "type": "order",
   "q": "Она сказала, что голодна.",
   "options": [],
   "answer": [
    "She said that she was hungry.",
    "She said she was hungry."
   ],
   "explain": "Said без человека, а is сдвигается в was."
  },
  {
   "type": "order",
   "q": "Мой друг сказал мне, что он в Риме.",
   "options": [],
   "answer": [
    "My friend told me that he was in Rome.",
    "My friend told me he was in Rome."
   ],
   "explain": "«Сказал мне» — told me (не said me), а is становится was."
  },
  {
   "type": "order",
   "q": "Он спросил, люблю ли я Marvel.",
   "options": [],
   "answer": [
    "He asked if I liked Marvel.",
    "He asked whether I liked Marvel.",
    "He asked me if I liked Marvel.",
    "He asked me whether I liked Marvel.",
    "He asked if I loved Marvel.",
    "He asked me if I loved Marvel.",
    "He asked whether I loved Marvel.",
    "He asked me whether I loved Marvel."
   ],
   "explain": "«Ли» в вопросе — if/whether, дальше обычный порядок без do, и время в прошлом: like → liked."
  },
  {
   "type": "order",
   "q": "Мама попросила меня не опаздывать.",
   "options": [],
   "answer": [
    "Mom asked me not to be late.",
    "Mum asked me not to be late.",
    "My mom asked me not to be late.",
    "My mum asked me not to be late."
   ],
   "explain": "Просьба «не делать» — asked + человек + not to + глагол."
  }
 ],
 "24": [
  {
   "type": "choice",
   "q": "Peter ___ been training with Tony since spring.",
   "options": [
    "has",
    "have",
    "is",
    "was"
   ],
   "answer": [
    "has"
   ],
   "explain": "Peter = he, поэтому has been + -ing."
  },
  {
   "type": "choice",
   "q": "We have been waiting for the bus ___ twenty minutes.",
   "options": [
    "for",
    "since",
    "during",
    "from"
   ],
   "answer": [
    "for"
   ],
   "explain": "«Двадцать минут» — это отрезок времени, поэтому for."
  },
  {
   "type": "choice",
   "q": "Sorry, I'm all wet. I ___ in the rain.",
   "options": [
    "have been running",
    "has been running",
    "am running",
    "run"
   ],
   "answer": [
    "have been running"
   ],
   "explain": "Действие только что закончилось и видны следы (мокрая), поэтому have been + -ing; с I нужен have."
  },
  {
   "type": "choice",
   "q": "I ___ here since 9 a.m.! Where are you?",
   "options": [
    "have been waiting",
    "am waiting",
    "wait",
    "was waiting"
   ],
   "answer": [
    "have been waiting"
   ],
   "explain": "С since процесс тянется с прошлого до сейчас, поэтому не am waiting, а have been waiting."
  },
  {
   "type": "choice",
   "q": "Ross ___ Rachel since school.",
   "options": [
    "has loved",
    "has been loving",
    "is loving",
    "loved"
   ],
   "answer": [
    "has loved"
   ],
   "explain": "Love — глагол состояния, его не ставят в -ing, поэтому обычный Present Perfect."
  },
  {
   "type": "choice",
   "q": "Tony has ___ five new suits this year.",
   "options": [
    "built",
    "been building",
    "building",
    "build"
   ],
   "answer": [
    "built"
   ],
   "explain": "Считаем результат (пять костюмов), поэтому Present Perfect, а не Continuous."
  },
  {
   "type": "choice",
   "q": "I've been learning to drive ___ last summer.",
   "options": [
    "since",
    "for",
    "from",
    "ago"
   ],
   "answer": [
    "since"
   ],
   "explain": "«С прошлого лета» — точка начала, поэтому since."
  },
  {
   "type": "input",
   "q": "We have ___ (wait) for the new season of Stranger Things for two years! (процесс, 2 слова)",
   "options": [],
   "answer": [
    "been waiting"
   ],
   "explain": "Процесс идёт два года до сих пор: have been + -ing."
  },
  {
   "type": "input",
   "q": "How long have you been ___ (work) at this company?",
   "options": [],
   "answer": [
    "working"
   ],
   "explain": "После have been глагол всегда с -ing."
  },
  {
   "type": "input",
   "q": "Thor ___ (play) video games all day, so now his eyes are red. (процесс)",
   "options": [],
   "answer": [
    "has been playing",
    "'s been playing"
   ],
   "explain": "Долгий процесс с видимым результатом сейчас (now, глаза красные): has been + -ing."
  },
  {
   "type": "input",
   "q": "It ___ (rain) since Monday, so we can't go to the beach. (процесс ещё идёт)",
   "options": [],
   "answer": [
    "has been raining",
    "'s been raining"
   ],
   "explain": "Дождь начался в понедельник и идёт до сих пор: has been raining, а не is raining."
  },
  {
   "type": "input",
   "q": "I've ___ (know) my best friend since we were five.",
   "options": [],
   "answer": [
    "known"
   ],
   "explain": "Know — глагол состояния, поэтому have known, а не have been knowing."
  },
  {
   "type": "input",
   "q": "Your hands are all blue! How long ___ (you / paint)? (процесс)",
   "options": [],
   "answer": [
    "have you been painting"
   ],
   "explain": "Вопрос о длительности процесса, следы которого видны (синие руки): How long + have + you + been + -ing."
  },
  {
   "type": "input",
   "q": "I ___ (drink) four coffees since this morning, so no more for me!",
   "options": [],
   "answer": [
    "have drunk",
    "'ve drunk"
   ],
   "explain": "Since требует Present Perfect, а раз считаем результат (четыре кофе), нужен простой Present Perfect: have drunk, а не have been drinking."
  },
  {
   "type": "order",
   "q": "Мы живём здесь с 2022 года.",
   "options": [],
   "answer": [
    "We have been living here since 2022.",
    "We've been living here since 2022.",
    "We have lived here since 2022.",
    "We've lived here since 2022."
   ],
   "explain": "Живём с прошлого до сих пор — have been living (или have lived) + since, а не настоящее время."
  },
  {
   "type": "order",
   "q": "Как долго она работает в Google?",
   "options": [],
   "answer": [
    "How long has she been working at Google?",
    "How long has she been working for Google?",
    "How long has she worked at Google?",
    "How long has she worked for Google?"
   ],
   "explain": "How long + has + she + been + -ing: процесс ещё идёт."
  },
  {
   "type": "order",
   "q": "Он играет в эту игру с утра.",
   "options": [],
   "answer": [
    "He has been playing this game since this morning.",
    "He's been playing this game since this morning."
   ],
   "explain": "Играет с утра и до сих пор — has been playing + since; «с утра» = since this morning."
  },
  {
   "type": "order",
   "q": "Я знаю Тома три года.",
   "options": [],
   "answer": [
    "I have known Tom for three years.",
    "I've known Tom for three years."
   ],
   "explain": "Know — глагол состояния: have known + for, не am knowing."
  }
 ],
 "25": [
  {
   "type": "choice",
   "q": "When Peter Parker ran out of the house, the school bus ___ already left.",
   "options": [
    "had",
    "has",
    "did"
   ],
   "answer": [
    "had"
   ],
   "explain": "Автобус уехал раньше, чем Питер выбежал, поэтому нужен Past Perfect: had + V3."
  },
  {
   "type": "choice",
   "q": "By the time Spider-Man arrived, the bank robbers ___.",
   "options": [
    "had run away",
    "have run away",
    "had ran away",
    "run away"
   ],
   "answer": [
    "had run away"
   ],
   "explain": "By the time в прошлом требует had + V3, а 3-я форма run — это run, не ran."
  },
  {
   "type": "choice",
   "q": "Sheldon felt nervous at the party because he ___ anyone there before.",
   "options": [
    "had never met",
    "has never met",
    "never meets",
    "had never meet"
   ],
   "answer": [
    "had never met"
   ],
   "explain": "«Никогда до той вечеринки» означает период до момента в прошлом, поэтому had never + V3 (met)."
  },
  {
   "type": "choice",
   "q": "When I got to the cinema, the film ___, so I missed the first ten minutes.",
   "options": [
    "had already started",
    "has already started",
    "already starts",
    "had already start"
   ],
   "answer": [
    "had already started"
   ],
   "explain": "Фильм начался раньше, чем я пришла, поэтому had already + V3 (started); has — не про прошлое, а start — не 3-я форма."
  },
  {
   "type": "choice",
   "q": "Rachel opened the fridge, took out the milk and ___ a coffee.",
   "options": [
    "made",
    "had made",
    "has made",
    "makes"
   ],
   "answer": [
    "made"
   ],
   "explain": "Действия идут одно за другим по порядку, поэтому хватает Past Simple."
  },
  {
   "type": "choice",
   "q": "___ Harry finished his homework before the Quidditch match started?",
   "options": [
    "Had",
    "Did",
    "Has",
    "Was"
   ],
   "answer": [
    "Had"
   ],
   "explain": "Домашка была раньше матча в прошлом, поэтому вопрос Had + V3; после did нужен V1, а has не про прошлое."
  },
  {
   "type": "choice",
   "q": "When I called Kate, she said she'd already ___ the tickets for our trip.",
   "options": [
    "bought",
    "buy",
    "buying",
    "buys"
   ],
   "answer": [
    "bought"
   ],
   "explain": "Здесь she'd = she had (стоит already), а после had идёт 3-я форма: bought."
  },
  {
   "type": "input",
   "q": "When Natasha broke into the room, the spy ___ (already / disappear).",
   "options": [],
   "answer": [
    "had already disappeared",
    "had disappeared already"
   ],
   "explain": "Шпион исчез раньше, чем Наташа ворвалась, поэтому had + already + V3."
  },
  {
   "type": "input",
   "q": "When Tom reached the café, he realised he ___ (lose) his wallet.",
   "options": [],
   "answer": [
    "had lost",
    "'d lost"
   ],
   "explain": "Кошелёк потерялся раньше, чем Том это понял, поэтому had + V3 (lose → lost)."
  },
  {
   "type": "input",
   "q": "When Captain America woke up in 2011, the world ___ (change) a lot.",
   "options": [],
   "answer": [
    "had changed"
   ],
   "explain": "Мир изменился до того, как Кэп проснулся, поэтому Past Perfect: had changed."
  },
  {
   "type": "input",
   "q": "Eleven was so excited at the airport: she ___ (not / see) Mike for six months.",
   "options": [],
   "answer": [
    "hadn't seen",
    "had not seen"
   ],
   "explain": "For до момента в прошлом требует Past Perfect, отрицание: hadn't + V3."
  },
  {
   "type": "input",
   "q": "Jake was nervous at the job interview because he ___ (never / have) an interview before.",
   "options": [],
   "answer": [
    "had never had",
    "'d never had"
   ],
   "explain": "Never ... before до момента в прошлом: had never + V3, а 3-я форма have — had, отсюда had had."
  },
  {
   "type": "input",
   "q": "By the time I finished work, all the shops ___ (already / close) their doors.",
   "options": [],
   "answer": [
    "had already closed",
    "had closed already"
   ],
   "explain": "By the time в прошлом требует had + V3: магазины закрылись раньше, чем я освободилась."
  },
  {
   "type": "input",
   "q": "Yesterday I came home, ___ (cook) dinner and then watched two episodes of The Crown.",
   "options": [],
   "answer": [
    "cooked"
   ],
   "explain": "Действия идут по порядку одно за другим, поэтому Past Simple, а не Past Perfect."
  },
  {
   "type": "order",
   "q": "Когда мы приехали, вечеринка уже закончилась.",
   "options": [],
   "answer": [
    "When we arrived the party had already finished.",
    "The party had already finished when we arrived.",
    "When we arrived the party had already ended.",
    "The party had already ended when we arrived."
   ],
   "explain": "Вечеринка закончилась раньше нашего приезда, поэтому had finished, а arrived в Past Simple."
  },
  {
   "type": "order",
   "q": "До этой поездки я никогда не была в Риме.",
   "options": [],
   "answer": [
    "I had never been to Rome before this trip.",
    "Before this trip I had never been to Rome."
   ],
   "explain": "«Никогда до момента в прошлом» передаётся через had never been."
  },
  {
   "type": "order",
   "q": "Он сказал, что потерял паспорт.",
   "options": [],
   "answer": [
    "He said he had lost his passport.",
    "He said that he had lost his passport."
   ],
   "explain": "В косвенной речи после said прошлое сдвигается назад: lost → had lost."
  },
  {
   "type": "order",
   "q": "Ты уже поела, когда он позвонил?",
   "options": [],
   "answer": [
    "Had you already eaten when he called?",
    "Had you eaten already when he called?"
   ],
   "explain": "Еда была раньше звонка, поэтому вопрос в Past Perfect: Had you eaten...?"
  }
 ],
 "26": [
  {
   "type": "choice",
   "q": "If Peter Parker ___ his web-shooters, he would have caught the thief.",
   "options": [
    "hadn't forgotten",
    "didn't forget",
    "wouldn't have forgotten",
    "hasn't forgotten"
   ],
   "answer": [
    "hadn't forgotten"
   ],
   "explain": "Нереальное прошлое: в части с if стоит hadn't + V3, без would."
  },
  {
   "type": "choice",
   "q": "We paid 200 euros a night in Rome last summer. If we had booked earlier, we ___ less.",
   "options": [
    "would have paid",
    "would pay",
    "will pay",
    "had paid"
   ],
   "answer": [
    "would have paid"
   ],
   "explain": "Результат тоже в прошлом (last summer), поэтому would have + V3."
  },
  {
   "type": "choice",
   "q": "If Thanos ___ the Avengers' plan, he would have stopped them.",
   "options": [
    "had known",
    "would have known",
    "will know",
    "has known"
   ],
   "answer": [
    "had known"
   ],
   "explain": "В части с if никогда не ставят would или will: Third Conditional — if + had + V3."
  },
  {
   "type": "choice",
   "q": "If Eleven hadn't escaped from the lab, she ___ a prisoner there now.",
   "options": [
    "would be",
    "would have been",
    "will be",
    "had been"
   ],
   "answer": [
    "would be"
   ],
   "explain": "Причина в прошлом, а результат сейчас (now), поэтому смешанный тип: would + V1."
  },
  {
   "type": "choice",
   "q": "Joey doesn't speak French. If he spoke French, he ___ the audition last week.",
   "options": [
    "would have passed",
    "would pass",
    "will pass",
    "had passed"
   ],
   "answer": [
    "would have passed"
   ],
   "explain": "Причина — факт сейчас (spoke), а прослушивание было в прошлом (last week), поэтому would have + V3."
  },
  {
   "type": "choice",
   "q": "Nobody told me about the job opening, and now it's closed. If someone had told me, I ___ for it.",
   "options": [
    "could have applied",
    "can apply",
    "could apply",
    "had applied"
   ],
   "answer": [
    "could have applied"
   ],
   "explain": "Вакансия уже закрыта, значит возможность была в прошлом: could have + V3."
  },
  {
   "type": "choice",
   "q": "It's sunny today, but yesterday it rained all day. If it ___ yesterday, we would have gone to the beach.",
   "options": [
    "hadn't rained",
    "didn't rain",
    "wouldn't rain",
    "doesn't rain"
   ],
   "answer": [
    "hadn't rained"
   ],
   "explain": "Речь о вчера, а не о сейчас, поэтому Third Conditional: hadn't + V3, а не Second."
  },
  {
   "type": "input",
   "q": "If Rocket ___ (not / steal) the batteries, the Sovereign wouldn't have attacked the Guardians.",
   "options": [],
   "answer": [
    "hadn't stolen",
    "had not stolen"
   ],
   "explain": "Отрицание в if-части Third Conditional: hadn't + V3 (steal → stolen)."
  },
  {
   "type": "input",
   "q": "If Chandler had arrived on time for dinner yesterday, Monica ___ (not / be) so angry with him all evening.",
   "options": [],
   "answer": [
    "wouldn't have been",
    "would not have been"
   ],
   "explain": "Ужин был вчера, и злилась Моника весь тот вечер (all evening) — результат тоже в прошлом, поэтому третий тип: wouldn't have + V3 (been). Смешанный вариант wouldn't be подошёл бы, только если бы она злилась до сих пор (now)."
  },
  {
   "type": "input",
   "q": "If you ___ (tell) me about the problem earlier, I would have helped you.",
   "options": [],
   "answer": [
    "had told",
    "'d told"
   ],
   "explain": "Во второй части would have helped, значит в if-части had + V3, без would."
  },
  {
   "type": "input",
   "q": "If my friend hadn't shown me Friends, I ___ (never / start) watching series in English.",
   "options": [],
   "answer": [
    "would never have started",
    "would have never started",
    "would've never started",
    "'d never have started",
    "might never have started"
   ],
   "explain": "Результат в нереальном прошлом: would never have + V3 (started); never ставят сразу после would."
  },
  {
   "type": "input",
   "q": "I spent all my money last year. If I had saved some, I ___ (be) in Bali right now.",
   "options": [],
   "answer": [
    "would be",
    "'d be",
    "could be",
    "might be"
   ],
   "explain": "Причина в прошлом, результат прямо сейчас (right now), поэтому would + V1."
  },
  {
   "type": "input",
   "q": "Thor isn't a patient guy. If he were more patient, he ___ (not / break) the TV yesterday.",
   "options": [],
   "answer": [
    "wouldn't have broken",
    "would not have broken"
   ],
   "explain": "Причина — характер сейчас (were), а результат вчера, поэтому wouldn't have + V3."
  },
  {
   "type": "input",
   "q": "If we ___ (take) a taxi, we wouldn't have missed the start of the concert.",
   "options": [],
   "answer": [
    "had taken",
    "'d taken"
   ],
   "explain": "Русское «бы» не переносим в if-часть: там had + V3, без would."
  },
  {
   "type": "order",
   "q": "Если бы ты позвонила вчера, я бы ответила.",
   "options": [],
   "answer": [
    "If you had called yesterday I would have answered.",
    "I would have answered if you had called yesterday.",
    "If you'd called yesterday I would have answered.",
    "If you had called yesterday I would've answered."
   ],
   "explain": "Вчера — это прошлое, поэтому Third Conditional: if + had called, а результат would have answered."
  },
  {
   "type": "order",
   "q": "Если бы она тогда не помогла, мы бы проиграли.",
   "options": [],
   "answer": [
    "If she hadn't helped we would have lost.",
    "We would have lost if she hadn't helped.",
    "If she had not helped we would have lost."
   ],
   "explain": "«Тогда» — значит прошлое: отрицание в if-части hadn't helped, а результат would have lost."
  },
  {
   "type": "order",
   "q": "Если бы он не ушёл, он бы сейчас был здесь.",
   "options": [],
   "answer": [
    "If he hadn't left he would be here now.",
    "He would be here now if he hadn't left.",
    "If he had not left he would be here now."
   ],
   "explain": "Причина в прошлом (hadn't left), результат сейчас (would be ... now): смешанный тип."
  },
  {
   "type": "order",
   "q": "Что бы ты тогда сделала, если бы проиграла?",
   "options": [],
   "answer": [
    "What would you have done if you had lost?",
    "If you had lost what would you have done?"
   ],
   "explain": "Речь о прошлом («тогда»), поэтому вопрос в Third Conditional: What would you have done + if you had lost."
  }
 ],
 "27": [
  {
   "type": "choice",
   "q": "Tony has three Ferraris and a private jet. He ___ be very rich.",
   "options": [
    "must",
    "can't",
    "mustn't",
    "must to"
   ],
   "answer": [
    "must"
   ],
   "explain": "Уверенная догадка про сейчас: must + V1, без to."
  },
  {
   "type": "choice",
   "q": "Sam ___ be hungry — he has just eaten two big burgers.",
   "options": [
    "can't",
    "mustn't",
    "must",
    "can"
   ],
   "answer": [
    "can't"
   ],
   "explain": "«Точно нет» в догадке — это can't; mustn't означает запрет."
  },
  {
   "type": "choice",
   "q": "Listen to that loud music from Dustin's room! He ___ a party.",
   "options": [
    "must be having",
    "must have",
    "must having",
    "must to have"
   ],
   "answer": [
    "must be having"
   ],
   "explain": "Догадка о том, что происходит прямо сейчас: must + be + -ing."
  },
  {
   "type": "choice",
   "q": "The streets are all wet this morning. It ___ last night.",
   "options": [
    "must have rained",
    "must rained",
    "must rain",
    "must has rained"
   ],
   "answer": [
    "must have rained"
   ],
   "explain": "Уверенная догадка о прошлом: must have + V3, никогда не must + Past Simple."
  },
  {
   "type": "choice",
   "q": "I'm not sure why Natasha didn't come to the meeting. She ___ been busy.",
   "options": [
    "might have",
    "must",
    "can't",
    "might"
   ],
   "answer": [
    "might have"
   ],
   "explain": "«Не уверена» про прошлое — might have + V3; после must/can't/might без have форма been невозможна."
  },
  {
   "type": "choice",
   "q": "Peter ___ stolen the money — he was with me all evening.",
   "options": [
    "can't have",
    "mustn't have",
    "must have",
    "can't"
   ],
   "answer": [
    "can't have"
   ],
   "explain": "«Не может быть, чтобы украл» в прошлом: can't have + V3; mustn't — это запрет."
  },
  {
   "type": "choice",
   "q": "Wanda's car isn't in the garage. She ___ to the shop, but I'm not sure.",
   "options": [
    "might have gone",
    "must have gone",
    "can't have gone",
    "might go"
   ],
   "answer": [
    "might have gone"
   ],
   "explain": "Машины уже нет, значит действие в прошлом, а «не уверена» даёт might have + V3."
  },
  {
   "type": "input",
   "q": "Look at that huge queue outside the Apple Store! The new iPhone ___ (must / be) really popular.",
   "options": [],
   "answer": [
    "must be"
   ],
   "explain": "Уверенная догадка про сейчас: must + V1 (be), без to."
  },
  {
   "type": "input",
   "q": "Kate can't find her keys anywhere. They ___ (could / be) in her other bag.",
   "options": [],
   "answer": [
    "could be"
   ],
   "explain": "Возможный вариант про сейчас: could + V1."
  },
  {
   "type": "input",
   "q": "Don't call Jim now — he ___ (might / drive) home at the moment.",
   "options": [],
   "answer": [
    "might be driving"
   ],
   "explain": "Догадка о том, что происходит в этот момент: might + be + -ing."
  },
  {
   "type": "input",
   "q": "The window is broken and there's a football on the floor. The kids next door ___ (must / break) it.",
   "options": [],
   "answer": [
    "must have broken",
    "must've broken"
   ],
   "explain": "Улики говорят «точно разбили», и это уже в прошлом: must have + V3 (broken)."
  },
  {
   "type": "input",
   "q": "You ___ (can't / see) Spider-Man in the park yesterday. He was in Europe!",
   "options": [],
   "answer": [
    "can't have seen",
    "cannot have seen",
    "couldn't have seen",
    "could not have seen"
   ],
   "explain": "«Не может быть, чтобы видела» в прошлом: can't have + V3 (seen)."
  },
  {
   "type": "input",
   "q": "Eddie isn't answering my messages. He ___ (might / lose) his phone.",
   "options": [],
   "answer": [
    "might have lost",
    "might've lost"
   ],
   "explain": "Неуверенная догадка о том, что уже случилось: might have + V3 (lost)."
  },
  {
   "type": "input",
   "q": "Nick spent four hours at the gym yesterday. He ___ (must / be) exhausted last night.",
   "options": [],
   "answer": [
    "must have been",
    "must've been"
   ],
   "explain": "Догадка про прошлое (last night): must have been, а не must be и не must was."
  },
  {
   "type": "order",
   "q": "Она, должно быть, сейчас спит.",
   "options": [],
   "answer": [
    "She must be sleeping now.",
    "She must be sleeping right now.",
    "She must be asleep now."
   ],
   "explain": "Уверенная догадка о том, что происходит сейчас: must + be + -ing."
  },
  {
   "type": "order",
   "q": "Эта история не может быть правдой.",
   "options": [],
   "answer": [
    "This story can't be true.",
    "This story cannot be true.",
    "That story can't be true."
   ],
   "explain": "«Не может быть» в догадке — это can't + V1, а не mustn't."
  },
  {
   "type": "order",
   "q": "Возможно, они опоздали на самолёт.",
   "options": [],
   "answer": [
    "They might have missed the plane.",
    "They may have missed the plane.",
    "They could have missed the plane.",
    "They might have missed their flight."
   ],
   "explain": "Неуверенная догадка о прошлом: might have + V3 (missed)."
  },
  {
   "type": "order",
   "q": "Тони, должно быть, работал всю ночь.",
   "options": [],
   "answer": [
    "Tony must have worked all night.",
    "Tony must have been working all night."
   ],
   "explain": "«Должно быть, сделал» про прошлое: must have + V3, а не must worked."
  }
 ],
 "28": [
  {
   "type": "choice",
   "q": "I'm so short! I wish I ___ taller.",
   "options": [
    "were",
    "am",
    "will be",
    "would be"
   ],
   "answer": [
    "were"
   ],
   "explain": "Сожаление о настоящем: wish + Past Simple, для be обычно were."
  },
  {
   "type": "choice",
   "q": "Peter Parker has to keep his secret. He wishes he ___ tell MJ the truth.",
   "options": [
    "could",
    "can",
    "will",
    "would"
   ],
   "answer": [
    "could"
   ],
   "explain": "Мечта о возможности: wish + could + V1; would про себя не говорят."
  },
  {
   "type": "choice",
   "q": "I didn't take my umbrella this morning, and now I'm wet. I wish I ___ it.",
   "options": [
    "had taken",
    "took",
    "would take",
    "have taken"
   ],
   "answer": [
    "had taken"
   ],
   "explain": "Сожаление о прошлом (this morning): wish + had + V3."
  },
  {
   "type": "choice",
   "q": "My roommate never washes the dishes. I wish she ___ them sometimes!",
   "options": [
    "would wash",
    "washes",
    "will wash",
    "is washing"
   ],
   "answer": [
    "would wash"
   ],
   "explain": "Раздражает чужое поведение, поэтому wish + кто-то + would + V1; Present Simple, Continuous и will после wish не ставят."
  },
  {
   "type": "choice",
   "q": "Bucky lives in a noisy city, but he misses the mountains. He wishes he ___ in the countryside.",
   "options": [
    "lived",
    "lives",
    "will live",
    "has lived"
   ],
   "answer": [
    "lived"
   ],
   "explain": "Сожаление о настоящем: wish + Past Simple (lived), а не Present Simple."
  },
  {
   "type": "choice",
   "q": "Ugh, it's only Monday morning. I wish it ___ Friday!",
   "options": [
    "were",
    "is",
    "will be",
    "had been"
   ],
   "answer": [
    "were"
   ],
   "explain": "Мечта о настоящем моменте: wish + were; had been было бы про прошлое."
  },
  {
   "type": "choice",
   "q": "Now I can't pay my rent. If only I ___ so much money on clothes last month!",
   "options": [
    "hadn't spent",
    "didn't spend",
    "haven't spent",
    "wouldn't spend"
   ],
   "answer": [
    "hadn't spent"
   ],
   "explain": "If only про прошлое (last month): hadn't + V3."
  },
  {
   "type": "input",
   "q": "Dory forgets everything all the time. She wishes she ___ (can) remember things better.",
   "options": [],
   "answer": [
    "could"
   ],
   "explain": "Мечта об умении: wish + could + V1, а не can."
  },
  {
   "type": "input",
   "q": "Lisa's job at the bank is so boring. She wishes she ___ (work) for Marvel Studios.",
   "options": [],
   "answer": [
    "worked",
    "were working",
    "was working"
   ],
   "explain": "Сожаление о настоящем: wish + Past Simple (worked); were working тоже возможно."
  },
  {
   "type": "input",
   "q": "I told my best friend's secret to everyone at the party. I wish I ___ (not / tell) anyone.",
   "options": [],
   "answer": [
    "hadn't told",
    "had not told"
   ],
   "explain": "Сожаление о прошлом: wish + hadn't + V3 (told)."
  },
  {
   "type": "input",
   "q": "My little brother always takes my clothes without asking. I wish he ___ (ask) me first!",
   "options": [],
   "answer": [
    "would ask",
    "'d ask",
    "asked"
   ],
   "explain": "Хотим, чтобы другой человек изменил поведение: wish + he + would + V1 (would ask); asked тоже возможно, но для жалобы естественнее would."
  },
  {
   "type": "input",
   "q": "I'm stuck at the office right now. If only I ___ (be) on a beach in Thailand!",
   "options": [],
   "answer": [
    "were",
    "was"
   ],
   "explain": "If only про настоящее требует Past Simple, для be чаще were."
  },
  {
   "type": "input",
   "q": "Jon Snow learned the truth about his parents too late. He wishes he ___ (know) it earlier.",
   "options": [],
   "answer": [
    "had known",
    "'d known"
   ],
   "explain": "Сожаление о прошлом: wish + had + V3 (know → known)."
  },
  {
   "type": "input",
   "q": "I didn't go to the party yesterday, and everyone says it was amazing. I wish I ___ (go).",
   "options": [],
   "answer": [
    "had gone",
    "'d gone"
   ],
   "explain": "«Жаль, что не пошла» про прошлое: wish + had gone, и «не» исчезает."
  },
  {
   "type": "order",
   "q": "Жаль, что я не живу у моря.",
   "options": [],
   "answer": [
    "I wish I lived by the sea.",
    "If only I lived by the sea.",
    "I wish I lived near the sea.",
    "If only I lived near the sea."
   ],
   "explain": "«Жаль, что не живу» про сейчас: wish + Past Simple без not."
  },
  {
   "type": "order",
   "q": "Жаль, что я купила это платье.",
   "options": [],
   "answer": [
    "I wish I hadn't bought this dress.",
    "If only I hadn't bought this dress.",
    "I wish I had not bought this dress."
   ],
   "explain": "«Жаль, что купила» про прошлое: wish + hadn't + V3, отрицание появляется."
  },
  {
   "type": "order",
   "q": "Вот бы мой брат перестал кричать.",
   "options": [],
   "answer": [
    "I wish my brother would stop shouting.",
    "If only my brother would stop shouting.",
    "I wish my brother would stop yelling.",
    "If only my brother would stop yelling."
   ],
   "explain": "Хотим изменить чужое поведение: wish + кто-то + would + V1."
  },
  {
   "type": "order",
   "q": "Жаль, что сейчас не лето.",
   "options": [],
   "answer": [
    "I wish it were summer now.",
    "I wish it was summer now.",
    "If only it were summer now.",
    "If only it was summer now."
   ],
   "explain": "Сожаление о настоящем: wish + were, без not."
  }
 ],
 "29": [
  {
   "type": "choice",
   "q": "I can't fix my laptop myself, so I'm going to ___ at a repair shop.",
   "options": [
    "have it fixed",
    "have fixed it",
    "have it fix",
    "fix it have"
   ],
   "answer": [
    "have it fixed"
   ],
   "explain": "Чинит мастер, а не ты, поэтому have + что + 3-я форма: have it fixed."
  },
  {
   "type": "input",
   "q": "Wednesday never does her own hair. She has it ___ (braid) by Enid.",
   "options": [],
   "answer": [
    "braided"
   ],
   "explain": "Косы ей плетёт Энид, поэтому после has + it нужна 3-я форма: braided."
  },
  {
   "type": "choice",
   "q": "Natasha got her hair ___ blonde before the mission.",
   "options": [
    "dyed",
    "dye",
    "dyeing",
    "to dye"
   ],
   "answer": [
    "dyed"
   ],
   "explain": "Красил её кто-то другой: get + что + 3-я форма, то есть got her hair dyed."
  },
  {
   "type": "input",
   "q": "Thor's hammer is broken. He needs to get it ___ (fix) before the battle.",
   "options": [],
   "answer": [
    "fixed"
   ],
   "explain": "Чинить будет кто-то другой, поэтому get it + 3-я форма: fixed."
  },
  {
   "type": "choice",
   "q": "Rachel didn't do her nails herself. She ___ at the salon yesterday.",
   "options": [
    "had them done",
    "had done them",
    "did them",
    "has them do"
   ],
   "answer": [
    "had them done"
   ],
   "explain": "Ногти ей делал мастер, поэтому порядок такой: had + them + done. А had done them значит, что делала она сама."
  },
  {
   "type": "input",
   "q": "Shh! Ross ___ (get) his teeth cleaned right now, so he can't talk.",
   "options": [],
   "answer": [
    "is getting",
    "'s getting"
   ],
   "explain": "Есть right now, поэтому get ставим в Present Continuous: is getting."
  },
  {
   "type": "choice",
   "q": "We're ___ our kitchen painted this week, so the whole flat smells awful.",
   "options": [
    "having",
    "have",
    "had",
    "has"
   ],
   "answer": [
    "having"
   ],
   "explain": "После we're нужна форма -ing: having. Кухню красят мастера, и это идёт всю эту неделю."
  },
  {
   "type": "order",
   "q": "Я покрасила волосы в салоне.",
   "options": [],
   "answer": [
    "I had my hair dyed at the salon.",
    "At the salon I had my hair dyed."
   ],
   "explain": "Красил мастер, поэтому have + my hair + dyed, а не I dyed my hair."
  },
  {
   "type": "input",
   "q": "Even today, it ___ (believe) that Atlantis was a real city.",
   "options": [],
   "answer": [
    "is believed",
    "'s believed"
   ],
   "explain": "Even today — считают сейчас, поэтому It is believed that: is + 3-я форма."
  },
  {
   "type": "choice",
   "q": "It ___ that the new Avengers movie will break all box office records.",
   "options": [
    "is believed",
    "believes",
    "is believing",
    "believed"
   ],
   "answer": [
    "is believed"
   ],
   "explain": "Считают люди, а не it, поэтому нужен пассив: is believed."
  },
  {
   "type": "input",
   "q": "Groot is believed ___ (be) the last of his kind.",
   "options": [],
   "answer": [
    "to be"
   ],
   "explain": "Речь о настоящем, поэтому после is believed идёт to + глагол: to be."
  },
  {
   "type": "choice",
   "q": "Doctor Strange is said ___ every spell in the old book.",
   "options": [
    "to know",
    "knowing",
    "that he knows",
    "knows"
   ],
   "answer": [
    "to know"
   ],
   "explain": "После is said идёт to + глагол, а не -ing и не that."
  },
  {
   "type": "order",
   "q": "Говорят, что этот отель очень дорогой.",
   "options": [],
   "answer": [
    "It is said that this hotel is very expensive."
   ],
   "explain": "«Говорят, что» = It is said that + обычное предложение."
  },
  {
   "type": "input",
   "q": "The new Spider-Man movie ___ (say) to be the best Marvel film ever.",
   "options": [],
   "answer": [
    "is said",
    "'s said"
   ],
   "explain": "Говорит не фильм, а люди о нём, поэтому пассив: is said to be."
  },
  {
   "type": "choice",
   "q": "Loki is believed ___ the Infinity Stones from the TVA last night.",
   "options": [
    "to have stolen",
    "to steal",
    "to be stealing",
    "stealing"
   ],
   "answer": [
    "to have stolen"
   ],
   "explain": "Есть last night, значит действие в прошлом: to have + 3-я форма."
  },
  {
   "type": "order",
   "q": "Мне завтра чинят ноутбук.",
   "options": [],
   "answer": [
    "I am having my laptop repaired tomorrow.",
    "Tomorrow I am having my laptop repaired."
   ],
   "explain": "Чинит мастер, а план на завтра выражаем через am having + my laptop + repaired."
  },
  {
   "type": "input",
   "q": "Black Widow is said ___ (work) for the KGB many years ago.",
   "options": [],
   "answer": [
    "to have worked",
    "to have been working"
   ],
   "explain": "Работала она в прошлом (many years ago), поэтому to have + 3-я форма: to have worked."
  },
  {
   "type": "order",
   "q": "Считается, что Ванда сильнее Тора.",
   "options": [],
   "answer": [
    "Wanda is believed to be stronger than Thor."
   ],
   "explain": "Начинаем с героя: Wanda is believed + to be, а дальше сравнение stronger than."
  }
 ],
 "30": [
  {
   "type": "choice",
   "q": "At midnight tonight, I ___ on the sofa with popcorn and Netflix.",
   "options": [
    "will be sitting",
    "will have sat",
    "sit",
    "will sitting"
   ],
   "answer": [
    "will be sitting"
   ],
   "explain": "В полночь ты будешь в процессе, поэтому will be + -ing."
  },
  {
   "type": "input",
   "q": "This time next month, I ___ (lie) on a beach in Bali.",
   "options": [],
   "answer": [
    "will be lying",
    "'ll be lying"
   ],
   "explain": "This time next month — процесс в момент будущего: will be lying (lie → lying)."
  },
  {
   "type": "choice",
   "q": "By the end of this month, I ___ 20 episodes of Friends in English.",
   "options": [
    "will have watched",
    "will be watching",
    "have watched",
    "watched"
   ],
   "answer": [
    "will have watched"
   ],
   "explain": "By the end of this month = к моменту в будущем всё будет сделано: will have + 3-я форма."
  },
  {
   "type": "input",
   "q": "By 2030, Marvel ___ (release) ten more movies.",
   "options": [],
   "answer": [
    "will have released",
    "'ll have released"
   ],
   "explain": "By 2030 = к этому году фильмы уже выйдут: will have released."
  },
  {
   "type": "choice",
   "q": "Will you ___ the meeting room at 3? I need it for a call.",
   "options": [
    "be using",
    "been using",
    "using",
    "to use"
   ],
   "answer": [
    "be using"
   ],
   "explain": "Вежливый вопрос о планах: Will you + be + -ing."
  },
  {
   "type": "input",
   "q": "Call me after 10. At 9 I'll ___ (have) dinner with my boss, so I can't answer.",
   "options": [],
   "answer": [
    "be having"
   ],
   "explain": "В 9 ты будешь в процессе ужина, поэтому после I'll идёт be + -ing: be having."
  },
  {
   "type": "order",
   "q": "Завтра в восемь я буду работать.",
   "options": [],
   "answer": [
    "I will be working at eight tomorrow.",
    "At eight tomorrow I will be working.",
    "Tomorrow at eight I will be working.",
    "I will be working tomorrow at eight."
   ],
   "explain": "В конкретный момент будущего ты будешь в процессе: will be working."
  },
  {
   "type": "choice",
   "q": "I can't come to the party on Saturday. I ___ at the hotel all weekend.",
   "options": [
    "will be working",
    "will have worked",
    "work",
    "will working"
   ],
   "answer": [
    "will be working"
   ],
   "explain": "All weekend значит процесс все выходные: will be + -ing."
  },
  {
   "type": "input",
   "q": "By the time Rachel ___ (get) to the airport, Ross will have left.",
   "options": [],
   "answer": [
    "gets"
   ],
   "explain": "После by the time ставим настоящее время, а не will: Rachel gets."
  },
  {
   "type": "choice",
   "q": "By the time the plane ___ in Rome, Peter will have finished his book.",
   "options": [
    "lands",
    "will land",
    "will have landed",
    "landed"
   ],
   "answer": [
    "lands"
   ],
   "explain": "После by the time will не ставится, нужно настоящее время: lands."
  },
  {
   "type": "input",
   "q": "Doctor Strange will ___ (see) all the possible futures by morning.",
   "options": [],
   "answer": [
    "have seen"
   ],
   "explain": "By morning = к утру уже сделает: will + have + 3-я форма (seen)."
  },
  {
   "type": "order",
   "q": "К июлю я уже сдам экзамен по английскому.",
   "options": [],
   "answer": [
    "I will have passed my English exam by July.",
    "By July I will have passed my English exam."
   ],
   "explain": "«К июлю уже» = by July + will have passed."
  },
  {
   "type": "choice",
   "q": "Hurry up! By the time we get to the cinema, the film ___.",
   "options": [
    "will have started",
    "will be starting",
    "starts",
    "will start"
   ],
   "answer": [
    "will have started"
   ],
   "explain": "К нашему приходу фильм уже начнётся: will have + 3-я форма."
  },
  {
   "type": "input",
   "q": "When you get to the office tomorrow, I ___ (already / wait) for you at reception.",
   "options": [],
   "answer": [
    "will already be waiting",
    "'ll already be waiting"
   ],
   "explain": "В момент твоего прихода я уже буду в процессе ожидания: will already be waiting (already стоит после will)."
  },
  {
   "type": "order",
   "q": "Ты будешь сегодня вечером пользоваться своим ноутбуком?",
   "options": [],
   "answer": [
    "Will you be using your laptop tonight?"
   ],
   "explain": "Вежливый вопрос о планах (например, чтобы попросить ноутбук): Will you be using...?"
  },
  {
   "type": "choice",
   "q": "Wanda can't help us at 6. She ___ her spell by then. She needs another hour.",
   "options": [
    "won't have finished",
    "won't has finished",
    "haven't finished",
    "not will have finished"
   ],
   "answer": [
    "won't have finished"
   ],
   "explain": "К 6 заклинание ещё не будет закончено: won't have + 3-я форма (после will всегда have, не has)."
  },
  {
   "type": "input",
   "q": "Don't worry about waking Eleven up at 3 a.m. She ___ (not / sleep). She'll be fighting the Demogorgon.",
   "options": [],
   "answer": [
    "won't be sleeping",
    "will not be sleeping"
   ],
   "explain": "В 3 ночи она не будет в процессе сна: won't be + -ing."
  },
  {
   "type": "order",
   "q": "Когда ты проснёшься, я уже уеду.",
   "options": [],
   "answer": [
    "When you wake up I will have left.",
    "I will have left when you wake up."
   ],
   "explain": "После when настоящее время (wake up), а «уже уеду» = will have left."
  }
 ],
 "31": [
  {
   "type": "choice",
   "q": "___ being on a diet, Joey ate the whole pizza.",
   "options": [
    "Despite",
    "Although",
    "However",
    "Even though"
   ],
   "answer": [
    "Despite"
   ],
   "explain": "Дальше идёт -ing (being), а из этих слов с ним работает только despite."
  },
  {
   "type": "input",
   "q": "The queue for the Mona Lisa was huge. ___, we waited two hours to see her. (одно слово: «тем не менее»)",
   "options": [],
   "answer": [
    "Nevertheless",
    "nevertheless",
    "Nonetheless",
    "nonetheless",
    "However",
    "however",
    "Still",
    "still"
   ],
   "explain": "«Тем не менее» точнее всего передают Nevertheless / Nonetheless; However и Still здесь тоже подходят. Такое слово начинает новое предложение, и после него ставится запятая."
  },
  {
   "type": "choice",
   "q": "___ she was scared, Eleven closed the gate.",
   "options": [
    "Even though",
    "Despite",
    "In spite of",
    "However"
   ],
   "answer": [
    "Even though"
   ],
   "explain": "Дальше целое предложение (she was scared), поэтому even though."
  },
  {
   "type": "input",
   "q": "Despite ___ (work) all day, Monica cleaned the whole flat in the evening.",
   "options": [],
   "answer": [
    "working",
    "having worked"
   ],
   "explain": "После despite глагол ставится в форме -ing: working."
  },
  {
   "type": "choice",
   "q": "My sister loves horror films, ___ I prefer cartoons.",
   "options": [
    "whereas",
    "despite",
    "however",
    "in spite of"
   ],
   "answer": [
    "whereas"
   ],
   "explain": "Сравниваешь двух разных людей внутри одного предложения, поэтому whereas. However здесь не подходит: оно начинает новое предложение."
  },
  {
   "type": "order",
   "q": "Несмотря на пробки, я пришла вовремя.",
   "options": [],
   "answer": [
    "In spite of the traffic I arrived on time.",
    "I arrived on time in spite of the traffic."
   ],
   "explain": "in spite of + существительное (the traffic). Of здесь обязателен."
  },
  {
   "type": "input",
   "q": "___ it was 2 a.m., we watched one more episode. (одно слово: «хотя»)",
   "options": [],
   "answer": [
    "Although",
    "although",
    "Though",
    "though"
   ],
   "explain": "Дальше целое предложение (it was 2 a.m.), поэтому although."
  },
  {
   "type": "choice",
   "q": "I watched the whole season ___ the boring first episode.",
   "options": [
    "despite",
    "despite of",
    "in spite",
    "although"
   ],
   "answer": [
    "despite"
   ],
   "explain": "Despite of не бывает, in spite без of тоже, а although требует целого предложения."
  },
  {
   "type": "input",
   "q": "In spite of ___ (lose) the match, the team celebrated all night.",
   "options": [],
   "answer": [
    "losing",
    "having lost"
   ],
   "explain": "После in spite of глагол ставится в форме -ing: losing."
  },
  {
   "type": "choice",
   "q": "Even though I was exhausted, ___ to the gym.",
   "options": [
    "I went",
    "but I went",
    "so I went",
    "despite I went"
   ],
   "answer": [
    "I went"
   ],
   "explain": "Раз в начале стоит even though, but или so во второй части не нужны."
  },
  {
   "type": "order",
   "q": "Хотя было холодно, мы пошли на пляж.",
   "options": [],
   "answer": [
    "Although it was cold we went to the beach.",
    "We went to the beach although it was cold."
   ],
   "explain": "although + целое предложение, а «но» во второй части не ставим."
  },
  {
   "type": "choice",
   "q": "In spite of ___, Doctor Strange made a deal with Dormammu.",
   "options": [
    "the danger",
    "it was dangerous",
    "dangerous",
    "of the danger"
   ],
   "answer": [
    "the danger"
   ],
   "explain": "После in spite of идёт существительное, а не целое предложение."
  },
  {
   "type": "input",
   "q": "Although Emily ___ (not / speak) a word of French when she arrived, she loved Paris from day one.",
   "options": [],
   "answer": [
    "didn't speak",
    "did not speak"
   ],
   "explain": "Речь о прошлом (when she arrived), поэтому отрицание в Past Simple: didn't speak."
  },
  {
   "type": "order",
   "q": "Я люблю кофе, а мой парень любит чай.",
   "options": [],
   "answer": [
    "I love coffee whereas my boyfriend loves tea.",
    "Whereas my boyfriend loves tea I love coffee.",
    "My boyfriend loves tea whereas I love coffee."
   ],
   "explain": "«а» при сравнении двух людей = whereas."
  },
  {
   "type": "choice",
   "q": "___ the fact that Loki lied to him, Thor forgave his brother.",
   "options": [
    "Despite",
    "Although",
    "However",
    "Even though"
   ],
   "answer": [
    "Despite"
   ],
   "explain": "Устойчивая связка: despite the fact that + целое предложение."
  },
  {
   "type": "input",
   "q": "Despite the fact that Chandler ___ (hate) his job, he worked there for years.",
   "options": [],
   "answer": [
    "hated"
   ],
   "explain": "После the fact that идёт целое предложение в прошлом: Chandler hated."
  },
  {
   "type": "order",
   "q": "Несмотря на усталость, она пошла на работу.",
   "options": [],
   "answer": [
    "Despite being tired she went to work.",
    "She went to work despite being tired."
   ],
   "explain": "despite + -ing (being tired), а не despite she was tired."
  },
  {
   "type": "input",
   "q": "Wednesday ___ (never / smile), whereas Enid smiles all the time.",
   "options": [],
   "answer": [
    "never smiles"
   ],
   "explain": "Привычка в настоящем: she → -s, а never ставится перед глаголом."
  }
 ],
 "32": [
  {
   "type": "choice",
   "q": "Excuse me, do you know how far ___?",
   "options": [
    "the airport is",
    "is the airport",
    "the airport does",
    "does the airport be"
   ],
   "answer": [
    "the airport is"
   ],
   "explain": "После do you know порядок как в утверждении: подлежащее + is."
  },
  {
   "type": "input",
   "q": "Where are my glasses? → Do you know where my glasses ___ (be)?",
   "options": [],
   "answer": [
    "are"
   ],
   "explain": "are уходит в конец, после подлежащего, а glasses — множественное число."
  },
  {
   "type": "choice",
   "q": "Could you tell me when ___?",
   "options": [
    "the next train leaves",
    "does the next train leave",
    "leaves the next train",
    "the next train does leave"
   ],
   "answer": [
    "the next train leaves"
   ],
   "explain": "does исчезает, а у глагола появляется -s: the next train leaves."
  },
  {
   "type": "input",
   "q": "What does this word mean? → Could you tell me what this word ___ (mean)?",
   "options": [],
   "answer": [
    "means"
   ],
   "explain": "does пропадает, и его -s переходит на глагол: means."
  },
  {
   "type": "choice",
   "q": "I wonder ___ Thor is coming to the party.",
   "options": [
    "if",
    "does",
    "is",
    "that"
   ],
   "answer": [
    "if"
   ],
   "explain": "Вопрос «да/нет» внутри фразы, поэтому «ли» = if."
  },
  {
   "type": "order",
   "q": "Интересно, почему Тор всегда опаздывает.",
   "options": [],
   "answer": [
    "I wonder why Thor is always late."
   ],
   "explain": "После I wonder прямой порядок (Thor is) и точка в конце."
  },
  {
   "type": "input",
   "q": "Why did Loki betray Thor? → I wonder why Loki ___ (betray) Thor.",
   "options": [],
   "answer": [
    "betrayed"
   ],
   "explain": "did пропадает, поэтому глагол сам встаёт в прошедшее время: betrayed."
  },
  {
   "type": "choice",
   "q": "Do you know how many episodes ___?",
   "options": [
    "Stranger Things has",
    "does Stranger Things have",
    "has Stranger Things",
    "Stranger Things does have"
   ],
   "answer": [
    "Stranger Things has"
   ],
   "explain": "does исчезает, порядок прямой, а глагол получает форму has (have + -s)."
  },
  {
   "type": "input",
   "q": "Will Wanda come back? → Do you know if Wanda ___ (come) back?",
   "options": [],
   "answer": [
    "will come",
    "'ll come"
   ],
   "explain": "Время то же, только will встаёт после подлежащего: Wanda will come."
  },
  {
   "type": "choice",
   "q": "I'd like to know why ___ late yesterday.",
   "options": [
    "you were",
    "were you",
    "did you be",
    "you did"
   ],
   "answer": [
    "you were"
   ],
   "explain": "В косвенном вопросе подлежащее идёт перед глаголом: you were."
  },
  {
   "type": "order",
   "q": "Не подскажете, во сколько закрывается музей?",
   "options": [],
   "answer": [
    "Could you tell me what time the museum closes?"
   ],
   "explain": "does пропадает, порядок прямой: the museum closes."
  },
  {
   "type": "input",
   "q": "What time do the shops close? → Do you know what time the shops ___ (close)?",
   "options": [],
   "answer": [
    "close"
   ],
   "explain": "do пропадает, а shops — множественное число, поэтому close без -s."
  },
  {
   "type": "choice",
   "q": "Do you know who ___ the last cookie? Monica is really angry.",
   "options": [
    "ate",
    "did eat",
    "did ate",
    "eat"
   ],
   "answer": [
    "ate"
   ],
   "explain": "who здесь подлежащее (вопрос к подлежащему, урок 12), поэтому did не нужен: who ate."
  },
  {
   "type": "input",
   "q": "Where has Emily gone? → Do you know where Emily ___ (go; время то же)?",
   "options": [],
   "answer": [
    "has gone",
    "'s gone"
   ],
   "explain": "Время остаётся Present Perfect, только has встаёт после подлежащего: Emily has gone."
  },
  {
   "type": "order",
   "q": "Ты не знаешь, придёт ли Рэйчел?",
   "options": [],
   "answer": [
    "Do you know if Rachel is coming?"
   ],
   "explain": "«ли» = if, и дальше прямой порядок: Rachel is coming."
  },
  {
   "type": "choice",
   "q": "Would you mind telling me ___ the hotel offers airport transfers?",
   "options": [
    "whether",
    "does",
    "that",
    "what"
   ],
   "answer": [
    "whether"
   ],
   "explain": "Вопрос «да/нет», поэтому нужно whether (или if), а does пропадает."
  },
  {
   "type": "input",
   "q": "How long does the flight take? → Would you mind telling me how long the flight ___ (take)?",
   "options": [],
   "answer": [
    "takes"
   ],
   "explain": "does пропадает, и его -s переходит на глагол: takes."
  },
  {
   "type": "order",
   "q": "Не могли бы вы сказать, где вы купили эту сумку?",
   "options": [],
   "answer": [
    "Could you tell me where you bought this bag?"
   ],
   "explain": "did пропадает, порядок прямой, а глагол в прошедшем: you bought."
  }
 ]
};
