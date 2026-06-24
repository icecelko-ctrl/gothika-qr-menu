const img = {
  interior: "images/menu-webp/img-7212.webp",
  cheese: "images/menu-webp/20240821-233416.webp",
  meat: "images/menu-webp/20240821-232549.webp",
  snacks: "images/menu-webp/20240821-233421.webp",
  shrimp: "images/menu-webp/20240822-000052.webp",
  caesar: "images/menu-webp/20240821-234712.webp",
  salad: "images/menu-webp/20240821-232756.webp",
  soup: "images/menu-webp/img-7248.webp",
  pumpkin: "images/menu-webp/img-7250.webp",
  pasta: "images/menu-webp/20240822-000121.webp",
  burger: "images/menu-webp/20240822-000138.webp",
  chicken: "images/menu-webp/img-7260.webp",
  pizzaCheese: "images/menu-webp/img-7269.webp",
  pizzaMeat: "images/menu-webp/img-7278.webp",
  poke: "images/menu-webp/img-7256.webp",
  cocktailRed: "images/menu-webp/img-7228.webp",
  cocktailBlue: "images/menu-webp/img-7234.webp",
  cocktailDark: "images/menu-webp/img-7239.webp",
  cocktailCream: "images/menu-webp/img-7244.webp",
  lemonade: "images/menu-webp/img-7231.webp",
  tea: "images/menu-webp/img-7225.webp",
  hookah: "images/menu-webp/img-2672.webp",
  beer: "images/beer.svg",
  wine: "images/cocktail-red.svg",
  dessert: "images/cocktail-dark.svg"
};

window.menuData = [
  {
    id: "popular",
    name: "Популярное",
    subcategories: [
      {
        id: "hits",
        name: "Популярные блюда",
        items: [
          {
            name: "Том ям с морепродуктами",
            description: "Мидии, креветки, кальмар, шампиньоны, томаты черри, специи, зелень, кунжут, кокосовое молоко и рис.",
            price: 500,
            size: "530 г",
            image: img.shrimp,
            tags: ["Хит", "Острый"]
          },
          {
            name: "Бургер от шефа",
            description: "Котлета, айсберг, соленый огурец, томаты, красный лук, фирменный соус, бекон, яйцо и картофель фри.",
            price: 650,
            size: "640 г",
            image: img.burger,
            tags: ["Хит"]
          },
          {
            name: "Сырная тарелка",
            description: "Камамбер, грецкий орех, маасдам, чеддер, фета, маслины, мед и зелень.",
            price: 650,
            size: "294 г",
            image: img.cheese,
            tags: ["Хит"]
          },
          {
            name: "Лонг-Айленд",
            description: "Ром, текила, джин, водка, апельсиновый ликер и кола.",
            price: 700,
            size: "250 мл",
            image: img.cocktailDark,
            tags: ["Хит"]
          },
          {
            name: "Кальян",
            description: "Классическая подача кальяна. Вкус и крепость подбирает мастер под настроение вечера.",
            price: 1000,
            size: "1 шт",
            image: img.hookah,
            tags: ["Хит"]
          }
        ]
      },
      {
        id: "hookah-pairing",
        name: "Рекомендуем к кальяну",
        items: [
          {
            name: "Фри тарелка большая",
            description: "Наггетсы, картофель фри, картофельные дольки, луковые кольца, стрипсы и соус на выбор.",
            price: 950,
            size: "850 г",
            image: img.snacks,
            tags: ["Хит"]
          },
          {
            name: "Мясная тарелка",
            description: "Сервелат, грудинка, бекон, буженина, томаты черри и зелень.",
            price: 650,
            size: "230 г",
            image: img.meat,
            tags: ["Хит"]
          },
          {
            name: "Жареные креветки с чесноком",
            description: "Горячая закуска к бару и кальяну: креветки, чеснок, специи и зелень.",
            price: 500,
            size: "120 г",
            image: img.shrimp,
            tags: ["Хит"]
          },
          {
            name: "Сыр косичка с лимоном",
            description: "Легкая соленая закуска к напиткам и дымному вечеру.",
            price: 250,
            size: "100 г",
            image: img.cheese,
            tags: []
          },
          {
            name: "Мята-лаванда",
            description: "Фирменный лимонад с мягким цветочным послевкусием.",
            price: 350,
            size: "1 л",
            image: img.lemonade,
            tags: ["Новинка"]
          }
        ]
      },
      {
        id: "signature-cocktails",
        name: "Авторские коктейли",
        items: [
          {
            name: "Искра",
            description: "Джин, трипл сек, сахарный сироп, спрайт и еловый акцент.",
            price: 450,
            size: "300 мл",
            image: img.cocktailBlue,
            tags: ["Новинка"]
          },
          {
            name: "Буря",
            description: "Апероль, джин, клюквенный морс и виноградный сок.",
            price: 450,
            size: "300 мл",
            image: img.cocktailRed,
            tags: ["Хит"]
          },
          {
            name: "Безумие",
            description: "Джин, лимонный сок, грушевый сироп, ананасовый и апельсиновый сок.",
            price: 450,
            size: "300 мл",
            image: img.cocktailCream,
            tags: ["Новинка"]
          },
          {
            name: "Притяжение",
            description: "Джин, трипл сек, лавандовый сироп, яблочный и виноградный сок.",
            price: 450,
            size: "300 мл",
            image: img.cocktailRed,
            tags: ["Хит"]
          }
        ]
      }
    ]
  },
  {
    id: "kitchen",
    name: "Кухня",
    subcategories: [
      {
        id: "spring",
        name: "Весеннее спецпредложение",
        items: [
          {
            name: "Салат с фунчозой и курицей",
            description: "Фунчоза, курица, морковь, стручковая фасоль, маринованный имбирь, огурец, терияки, кунжут и зелень.",
            price: 400,
            size: "220 г",
            image: img.poke,
            tags: ["Новинка"]
          },
          {
            name: "Салат с креветками и мидиями",
            description: "Айсберг, креветки, мидии, огурец, салатная заправка, лимонная долька, специи и зелень.",
            price: 550,
            size: "225 г",
            image: img.shrimp,
            tags: ["Хит"]
          },
          {
            name: "Салат с баклажанами и томатами",
            description: "Айсберг, баклажан, сладкий чили, томаты, терияки, кунжут, специи, грецкий орех и зелень.",
            price: 350,
            size: "225 г",
            image: img.salad,
            tags: ["Острый"]
          },
          {
            name: "Том ям с курицей",
            description: "Курица, грибы, кукуруза, томаты черри, специи, зелень, кунжут, кокосовое молоко и рис.",
            price: 450,
            size: "490 г",
            image: img.soup,
            tags: ["Острый"]
          },
          {
            name: "Том ям с морепродуктами",
            description: "Мидии, креветки, кальмар, шампиньоны, томаты черри, специи, зелень, кунжут, кокосовое молоко и рис.",
            price: 500,
            size: "530 г",
            image: img.shrimp,
            tags: ["Хит", "Острый"]
          },
          {
            name: "Пицца с беконом и грибами",
            description: "Тесто, чесночный соус, моцарелла, шампиньоны, бекон и пармезан.",
            price: 550,
            size: "500 г",
            image: img.pizzaMeat,
            tags: ["Хит"]
          },
          {
            name: "Удон с курицей",
            description: "Лапша удон, курица, болгарский перец, морковь, фасоль, лук, терияки, сладкий чили, специи, зелень и кунжут.",
            price: 450,
            size: "300 г",
            image: img.pasta,
            tags: ["Острый"]
          },
          {
            name: "Удон со свининой",
            description: "Лапша удон, свинина, болгарский перец, морковь, фасоль, лук, терияки, сладкий чили, специи, зелень и кунжут.",
            price: 450,
            size: "300 г",
            image: img.pasta,
            tags: ["Острый"]
          }
        ]
      },
      {
        id: "snacks",
        name: "Закуски",
        items: [
          {
            name: "Сырная тарелка",
            description: "Камамбер, грецкий орех, маасдам, чеддер, фета, маслины, мед и зелень.",
            price: 650,
            size: "294 г",
            image: img.cheese,
            tags: ["Хит"]
          },
          {
            name: "Мясная тарелка",
            description: "Сервелат, грудинка, бекон, буженина, томаты черри и зелень.",
            price: 650,
            size: "230 г",
            image: img.meat,
            tags: ["Хит"]
          },
          {
            name: "Снеки",
            description: "Снеки к бару на выбор.",
            price: 150,
            size: "100 г",
            image: img.snacks,
            tags: []
          },
          {
            name: "Фисташки",
            description: "Классическая закуска к пиву и кальяну.",
            price: 350,
            size: "100 г",
            image: img.snacks,
            tags: []
          },
          {
            name: "Сыр косичка с лимоном",
            description: "Соленая сырная закуска с лимоном.",
            price: 250,
            size: "100 г",
            image: img.cheese,
            tags: []
          }
        ]
      },
      {
        id: "hot-snacks",
        name: "Горячие закуски",
        items: [
          {
            name: "Сырные палочки",
            description: "Горячие сырные палочки к соусу на выбор.",
            price: 350,
            size: "150 г",
            image: img.snacks,
            tags: ["Хит"]
          },
          {
            name: "Луковые кольца",
            description: "Хрустящие луковые кольца к бару.",
            price: 240,
            size: "150 г",
            image: img.snacks,
            tags: []
          },
          {
            name: "Картофель фри",
            description: "Классический картофель фри.",
            price: 240,
            size: "150 г",
            image: img.snacks,
            tags: []
          },
          {
            name: "Картофель по-деревенски",
            description: "Картофельные дольки со специями.",
            price: 240,
            size: "150 г",
            image: img.snacks,
            tags: []
          },
          {
            name: "Жареные креветки с чесноком",
            description: "Креветки, чеснок, специи и зелень.",
            price: 500,
            size: "120 г",
            image: img.shrimp,
            tags: ["Хит"]
          },
          {
            name: "Куриные наггетсы",
            description: "Куриные наггетсы к соусу на выбор.",
            price: 290,
            size: "150 г",
            image: img.snacks,
            tags: []
          },
          {
            name: "Куриные стрипсы",
            description: "Куриные стрипсы к соусу на выбор.",
            price: 340,
            size: "150 г",
            image: img.snacks,
            tags: []
          },
          {
            name: "Фри тарелка маленькая",
            description: "Наггетсы, луковые кольца, картофель фри и соус на выбор.",
            price: 600,
            size: "500 г",
            image: img.snacks,
            tags: ["Хит"]
          },
          {
            name: "Фри тарелка большая",
            description: "Наггетсы, картофель фри, картофельные дольки, луковые кольца, стрипсы и соус на выбор.",
            price: 950,
            size: "850 г",
            image: img.snacks,
            tags: ["Хит"]
          }
        ]
      },
      {
        id: "salads",
        name: "Салаты",
        items: [
          {
            name: "Цезарь с курицей",
            description: "Айсберг, курица, перепелиное яйцо, томаты черри, сухари и пармезан.",
            price: 500,
            size: "310 г",
            image: img.caesar,
            tags: ["Хит"]
          },
          {
            name: "Цезарь с лососем",
            description: "Айсберг, лосось, пармезан, черри, перепелиное яйцо, соус цезарь и сухари.",
            price: 550,
            size: "290 г",
            image: img.caesar,
            tags: ["Хит"]
          },
          {
            name: "Греческий",
            description: "Помидоры, огурцы, болгарский перец, айсберг, маслины, масляная заправка, фета, красный лук и зелень.",
            price: 350,
            size: "290 г",
            image: img.salad,
            tags: []
          },
          {
            name: "Салат с уткой и апельсинами",
            description: "Айсберг, томаты, апельсин, филе утки, заправка, специи и зелень.",
            price: 475,
            size: "295 г",
            image: img.meat,
            tags: ["Новинка"]
          },
          {
            name: "Теплый азиатский с курицей",
            description: "Красный лук, баклажан, морковь, болгарский перец, курица, свежий огурец, терияки, сладкий чили, кунжут и зелень.",
            price: 400,
            size: "410 г",
            image: img.poke,
            tags: ["Острый"]
          }
        ]
      },
      {
        id: "soups",
        name: "Супы",
        items: [
          {
            name: "Солянка",
            description: "Солянка, маслины, лимон, зелень, сметана и бородинский хлеб.",
            price: 350,
            size: "300 г",
            image: img.soup,
            tags: ["Хит"]
          },
          {
            name: "Тыквенный крем-суп",
            description: "База тыква, сливки, тыквенные семечки, красное масло, зелень и сухари цезарь.",
            price: 300,
            size: "300 г",
            image: img.pumpkin,
            tags: ["Новинка"]
          },
          {
            name: "Крем-суп из белых грибов",
            description: "Белые грибы, шампиньоны, лук, картофель, морковь, специи, сливки, пармезан и сухари.",
            price: 300,
            size: "300 г",
            image: img.pumpkin,
            tags: []
          }
        ]
      },
      {
        id: "hot",
        name: "Горячие блюда",
        items: [
          {
            name: "Паста Карбонара",
            description: "Спагетти, бекон, сливки, сыр пармезан и куриное яйцо.",
            price: 450,
            size: "300 г",
            image: img.pasta,
            tags: ["Хит"]
          },
          {
            name: "Паста с курицей и овощами",
            description: "Спагетти, курица, красный соус, болгарский перец, морковь, томаты черри, пармезан и зелень.",
            price: 450,
            size: "340 г",
            image: img.pasta,
            tags: []
          },
          {
            name: "Паста с грибами и беконом",
            description: "Спагетти, шампиньоны, бекон, сливки, сыр пармезан и зелень.",
            price: 450,
            size: "320 г",
            image: img.pasta,
            tags: []
          },
          {
            name: "Бургер",
            description: "Котлета, айсберг, соленый огурец, помидоры, красный лук, соус гамбургер, сыр и булочка.",
            price: 550,
            size: "580 г",
            image: img.burger,
            tags: ["Хит"]
          },
          {
            name: "Бургер от шефа",
            description: "Котлета, айсберг, соленый огурец, томаты, красный лук, фирменный соус, бекон, яйцо, картофель фри и соус.",
            price: 650,
            size: "640 г",
            image: img.burger,
            tags: ["Хит"]
          },
          {
            name: "Драник с лососем и яйцом пашот",
            description: "Драник, творожный сыр, слабосоленый лосось, яйцо пашот и зелень.",
            price: 500,
            size: "250 г",
            image: img.poke,
            tags: ["Новинка"]
          },
          {
            name: "Филе курицы с рисом басмати",
            description: "Филе курицы, рис басмати, сливочное масло, апельсиновый соус и зелень.",
            price: 500,
            size: "300 г",
            image: img.chicken,
            tags: []
          },
          {
            name: "Мясная скоблянка",
            description: "Говядина, курица, буженина, картофель айдахо, красный соус, красный лук, соленый огурец, зелень и халапеньо.",
            price: 450,
            size: "340 г",
            image: img.meat,
            tags: ["Острый"]
          },
          {
            name: "Говяжья вырезка с овощным салатом",
            description: "Говяжий стейк, айсберг, томаты, огурец, болгарский перец, маслины и медовая заправка.",
            price: 650,
            size: "240 г",
            image: img.meat,
            tags: ["Хит"]
          },
          {
            name: "Филе курицы с цветной капустой",
            description: "Курица, цветная капуста, чесночный соус, зелень и специи.",
            price: 400,
            size: "200 г",
            image: img.chicken,
            tags: []
          }
        ]
      },
      {
        id: "pizza-poke",
        name: "Пицца, шаурма и поке",
        items: [
          {
            name: "Пицца сырная 25 см",
            description: "Тесто, чесночный соус, моцарелла, маасдам, пармезан, фета и зелень.",
            price: 400,
            size: "470 г",
            image: img.pizzaCheese,
            tags: ["Хит"]
          },
          {
            name: "Пицца сыр и груша 25 см",
            description: "Тесто, чесночный соус, моцарелла, камамбер, груша и зелень.",
            price: 450,
            size: "480 г",
            image: img.pizzaCheese,
            tags: ["Новинка"]
          },
          {
            name: "Пицца мясная 25 см",
            description: "Тесто, красный соус, моцарелла, бекон, маринованные корнишоны, маслины и красный лук.",
            price: 450,
            size: "560 г",
            image: img.pizzaMeat,
            tags: ["Хит"]
          },
          {
            name: "Пицца МясоМикс 25 см",
            description: "Тесто, красный соус, моцарелла, сервелат, курица, бекон, маслины и пармезан.",
            price: 450,
            size: "600 г",
            image: img.pizzaMeat,
            tags: ["Хит"]
          },
          {
            name: "Шаурма от шефа",
            description: "Лепешка, чесночный соус, красный лук, томаты, огурец, курица и айсберг.",
            price: 290,
            size: "140 г",
            image: img.chicken,
            tags: ["Новинка"]
          },
          {
            name: "Поке с курицей",
            description: "Рис басмати, курица, огурец, авокадо, томаты черри, кунжут и соус терияки.",
            price: 400,
            size: "360 г",
            image: img.poke,
            tags: []
          },
          {
            name: "Поке с лососем",
            description: "Рис басмати, слабосоленый лосось, огурец, авокадо, черри, маринованный имбирь, кунжут, терияки и сладкий чили.",
            price: 500,
            size: "370 г",
            image: img.poke,
            tags: ["Острый"]
          },
          {
            name: "Соус в ассортименте",
            description: "Сырный, барбекю, кисло-сладкий, сладкий чили, чесночный или горчичный.",
            price: 40,
            size: "1 порция",
            image: img.snacks,
            tags: []
          }
        ]
      }
    ]
  },
  {
    id: "bar",
    name: "Бар",
    subcategories: [
      {
        id: "signature",
        name: "Авторские коктейли",
        items: [
          {
            name: "Искра",
            description: "Джин, трипл сек, сахарный сироп, спрайт и еловый акцент.",
            price: 450,
            size: "300 мл",
            image: img.cocktailBlue,
            tags: ["Новинка"]
          },
          {
            name: "Буря",
            description: "Апероль, джин, клюквенный морс и виноградный сок.",
            price: 450,
            size: "300 мл",
            image: img.cocktailRed,
            tags: ["Хит"]
          },
          {
            name: "Безумие",
            description: "Джин, лимонный сок, грушевый сироп, ананасовый и апельсиновый сок.",
            price: 450,
            size: "300 мл",
            image: img.cocktailCream,
            tags: ["Новинка"]
          },
          {
            name: "Притяжение",
            description: "Джин, трипл сек, лавандовый сироп, яблочный и виноградный сок.",
            price: 450,
            size: "300 мл",
            image: img.cocktailRed,
            tags: ["Хит"]
          }
        ]
      },
      {
        id: "cocktails",
        name: "Коктейли",
        items: [
          {
            name: "Пина-колада",
            description: "Ром, кокосовый ликер, кокосовый сироп и ананасовый сок.",
            price: 425,
            size: "250 мл",
            image: img.cocktailCream,
            tags: ["Хит"]
          },
          {
            name: "Дайкири-маракуйя",
            description: "Ром, лимонный сок и сироп маракуйя.",
            price: 300,
            size: "100 мл",
            image: img.cocktailCream,
            tags: []
          },
          {
            name: "Голубая лагуна",
            description: "Водка, спрайт и блю курасао.",
            price: 300,
            size: "200 мл",
            image: img.cocktailBlue,
            tags: []
          },
          {
            name: "Лонг-Айленд",
            description: "Ром, текила, джин, водка, апельсиновый ликер и кола.",
            price: 700,
            size: "250 мл",
            image: img.cocktailDark,
            tags: ["Хит"]
          },
          {
            name: "Цирилла",
            description: "Ром, апельсиновый ликер, сироп ежевика, вишневый сок и лимонный сок.",
            price: 350,
            size: "200 мл",
            image: img.cocktailRed,
            tags: []
          },
          {
            name: "Текила Санрайз",
            description: "Текила, апельсиновый сок и гренадин.",
            price: 400,
            size: "200 мл",
            image: img.cocktailRed,
            tags: []
          },
          {
            name: "Мохито",
            description: "Ром, мятный сироп, сок лайма и спрайт.",
            price: 350,
            size: "200 мл",
            image: img.cocktailRed,
            tags: []
          },
          {
            name: "Sex на пляже",
            description: "Водка, ананасовый сок, персиковый сок и клюквенный морс.",
            price: 300,
            size: "200 мл",
            image: img.cocktailCream,
            tags: []
          },
          {
            name: "Упокоение",
            description: "Ром, сироп смородина, лимонный сок и спрайт.",
            price: 350,
            size: "220 мл",
            image: img.cocktailDark,
            tags: []
          },
          {
            name: "Аид",
            description: "Джин, ром, блю курасао, сироп ежевика и спрайт.",
            price: 350,
            size: "250 мл",
            image: img.cocktailBlue,
            tags: ["Новинка"]
          },
          {
            name: "Белый русский",
            description: "Водка, кофейный ликер и сливки.",
            price: 400,
            size: "150 мл",
            image: img.cocktailCream,
            tags: []
          },
          {
            name: "Крестный отец",
            description: "Амаретто, виски и лимонный сок.",
            price: 350,
            size: "120 мл",
            image: img.cocktailDark,
            tags: []
          },
          {
            name: "Вишневое пиво",
            description: "Темное пиво, ром, вишневый сок, вишневый сироп и лимонный сок.",
            price: 500,
            size: "460 мл",
            image: img.cocktailDark,
            tags: ["Новинка"]
          },
          {
            name: "Стригой",
            description: "Егермейстер, джин, лимонный сок и газированная вода.",
            price: 400,
            size: "220 мл",
            image: img.cocktailDark,
            tags: []
          }
        ]
      },
      {
        id: "tea",
        name: "Чай и кофе",
        items: [
          {
            name: "Зеленый чай с лимоном и имбирем",
            description: "Авторский чай из старого меню.",
            price: 450,
            size: "800 мл",
            image: img.tea,
            tags: ["Новинка"]
          },
          {
            name: "Черный чай с мятой и апельсинами",
            description: "Черный чай с цитрусом и мятным ароматом.",
            price: 450,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Черный чай с малиной и медом",
            description: "Согревающий ягодный чай.",
            price: 450,
            size: "800 мл",
            image: img.tea,
            tags: ["Хит"]
          },
          {
            name: "С жасмином",
            description: "Зеленый крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Малина-мята",
            description: "Зеленый крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: ["Хит"]
          },
          {
            name: "Клубника-сливки",
            description: "Зеленый крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Мао фен",
            description: "Зеленый крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "С мелиссой и мятой",
            description: "Зеленый крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "С чабрецом",
            description: "Черный крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Екатерина Великая",
            description: "Черный крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Эрл Грей",
            description: "Черный крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Рухуна",
            description: "Черный крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Сяо Джун",
            description: "Черный крафтовый чай.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Клитория тройчатая",
            description: "Синий чай из раздела прочих чаев.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: ["Новинка"]
          },
          {
            name: "Молочный улун",
            description: "Прочий чай из старой карты.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Глинтвейн",
            description: "Горячий напиток из раздела прочих чаев.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: ["Хит"]
          },
          {
            name: "Пуэр",
            description: "Прочий чай из старой карты.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Грушевый эль",
            description: "Прочий чай из старой карты.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Яблоко с корицей",
            description: "Прочий чай из старой карты.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Гречишный",
            description: "Прочий чай из старой карты.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Облепиховый",
            description: "Авторский чай.",
            price: 450,
            size: "800 мл",
            image: img.tea,
            tags: ["Новинка"]
          },
          {
            name: "Цитрусовый",
            description: "Авторский чай.",
            price: 450,
            size: "800 мл",
            image: img.tea,
            tags: []
          },
          {
            name: "Черный кленовый чай с медом",
            description: "Авторский чай.",
            price: 450,
            size: "800 мл",
            image: img.tea,
            tags: ["Хит"]
          },
          {
            name: "Зеленый чай с хвоей и клюквой",
            description: "Авторский чай.",
            price: 450,
            size: "800 мл",
            image: img.tea,
            tags: ["Новинка"]
          },
          {
            name: "Эспрессо",
            description: "Классический крепкий кофе.",
            price: 80,
            size: "40 мл",
            image: img.cocktailDark,
            tags: []
          },
          {
            name: "Американо",
            description: "Черный кофе.",
            price: 100,
            size: "150 мл",
            image: img.cocktailDark,
            tags: []
          },
          {
            name: "Латте",
            description: "Кофе с молоком.",
            price: 150,
            size: "200 мл",
            image: img.cocktailDark,
            tags: []
          },
          {
            name: "Капучино",
            description: "Эспрессо с молочной пеной.",
            price: 150,
            size: "200 мл",
            image: img.cocktailDark,
            tags: []
          }
        ]
      },
      {
        id: "soft",
        name: "Безалкогольные",
        items: [
          {
            name: "Лимонад вишня-гранат",
            description: "Фирменный лимонад.",
            price: 350,
            size: "1 л",
            image: img.lemonade,
            tags: ["Хит"]
          },
          {
            name: "Лимонад яблоко-малина",
            description: "Фирменный лимонад.",
            price: 350,
            size: "1 л",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Лимонад мята-лаванда",
            description: "Фирменный лимонад с цветочным акцентом.",
            price: 350,
            size: "1 л",
            image: img.lemonade,
            tags: ["Новинка"]
          },
          {
            name: "Лимонад маракуйя-груша",
            description: "Авторский лимонад.",
            price: 350,
            size: "1 л",
            image: img.lemonade,
            tags: ["Новинка"]
          },
          {
            name: "Лимонад смородина-клюква-облепиха",
            description: "Авторский лимонад.",
            price: 350,
            size: "1 л",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Лимонад дыня-клубника",
            description: "Авторский лимонад.",
            price: 350,
            size: "1 л",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Сок",
            description: "Сок на выбор.",
            price: 75,
            size: "250 мл",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Сок 1 литр",
            description: "Сок на компанию.",
            price: 250,
            size: "1 л",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Добрый кола",
            description: "Газированный напиток.",
            price: 150,
            size: "0,33 л",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Добрый апельсин",
            description: "Газированный напиток.",
            price: 150,
            size: "0,33 л",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Добрый лимон-лайм",
            description: "Газированный напиток.",
            price: 150,
            size: "0,33 л",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Энергетик",
            description: "Охлажденный энергетический напиток.",
            price: 150,
            size: "0,5 л",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Вода газ/негаз",
            description: "Питьевая вода.",
            price: 150,
            size: "0,5 л",
            image: img.lemonade,
            tags: []
          },
          {
            name: "Вода в стекле",
            description: "Вода в стеклянной бутылке.",
            price: 250,
            size: "0,5 л",
            image: img.lemonade,
            tags: []
          }
        ]
      },
      {
        id: "beer-wine",
        name: "Пиво и вино",
        items: [
          {
            name: "Козел светлое",
            description: "Светлое пиво.",
            price: 200,
            size: "450 мл",
            image: img.beer,
            tags: []
          },
          {
            name: "Козел темное",
            description: "Темное пиво.",
            price: 200,
            size: "450 мл",
            image: img.beer,
            tags: ["Хит"]
          },
          {
            name: "Bud",
            description: "Лагер.",
            price: 200,
            size: "450 мл",
            image: img.beer,
            tags: []
          },
          {
            name: "Stella Artois",
            description: "Лагер.",
            price: 250,
            size: "450 мл",
            image: img.beer,
            tags: []
          },
          {
            name: "Hoegarden",
            description: "Пшеничное пиво.",
            price: 200,
            size: "450 мл",
            image: img.beer,
            tags: []
          },
          {
            name: "Garage",
            description: "Пивной напиток.",
            price: 200,
            size: "450 мл",
            image: img.beer,
            tags: []
          },
          {
            name: "Blanc 1664",
            description: "Пшеничное пиво.",
            price: 200,
            size: "450 мл",
            image: img.beer,
            tags: []
          },
          {
            name: "Пиво б/а",
            description: "Безалкогольное пиво.",
            price: 200,
            size: "450 мл",
            image: img.beer,
            tags: []
          },
          {
            name: "Крафтовое «Дед с веслом»",
            description: "Крафтовое пиво.",
            price: 300,
            size: "450 мл",
            image: img.beer,
            tags: ["Новинка"]
          },
          {
            name: "Chester's",
            description: "Сидр.",
            price: 250,
            size: "450 мл",
            image: img.beer,
            tags: []
          },
          {
            name: "Вино красное",
            description: "Красное сухое или полусладкое.",
            price: 250,
            size: "150 мл",
            image: img.wine,
            tags: []
          },
          {
            name: "Вино белое",
            description: "Белое сухое или полусладкое.",
            price: 250,
            size: "150 мл",
            image: img.wine,
            tags: []
          },
          {
            name: "Игристое бутылка",
            description: "Игристое вино бутылкой.",
            price: 1500,
            size: "750 мл",
            image: img.wine,
            tags: ["Новинка"]
          },
          {
            name: "Вино бутылка",
            description: "Вино бутылкой.",
            price: 1500,
            size: "750 мл",
            image: img.wine,
            tags: []
          }
        ]
      },
      {
        id: "desserts",
        name: "Десерты",
        items: [
          {
            name: "Чизкейк",
            description: "Классический, шоколадный или ягодный.",
            price: 250,
            size: "100 г",
            image: img.dessert,
            tags: ["Хит"]
          },
          {
            name: "Шоколад",
            description: "Плитка шоколада.",
            price: 150,
            size: "80 г",
            image: img.dessert,
            tags: []
          },
          {
            name: "Choco Pie",
            description: "Сладкий десерт к чаю.",
            price: 50,
            size: "30 г",
            image: img.dessert,
            tags: []
          }
        ]
      }
    ]
  },
  {
    id: "hookah",
    name: "Кальяны",
    subcategories: [
      {
        id: "hookah",
        name: "Кальянная карта",
        items: [
          {
            name: "Кальян",
            description: "Классическая подача кальяна. Вкус и крепость подбирает мастер под настроение вечера.",
            price: 1000,
            size: "1 шт",
            image: img.hookah,
            tags: ["Хит"]
          }
        ]
      },
      {
        id: "recommended",
        name: "Рекомендуем к кальяну",
        items: [
          {
            name: "Фри тарелка большая",
            description: "Наггетсы, картофель фри, картофельные дольки, луковые кольца, стрипсы и соус на выбор.",
            price: 950,
            size: "850 г",
            image: img.snacks,
            tags: ["Хит"]
          },
          {
            name: "Мясная тарелка",
            description: "Сервелат, грудинка, бекон, буженина, томаты черри и зелень.",
            price: 650,
            size: "230 г",
            image: img.meat,
            tags: ["Хит"]
          },
          {
            name: "Крафтовый чай",
            description: "Большой чайник на компанию: зеленый, черный, прочие и авторские вкусы.",
            price: 350,
            size: "800 мл",
            image: img.tea,
            tags: ["Хит"]
          },
          {
            name: "Авторский лимонад",
            description: "Маракуйя-груша, смородина-клюква-облепиха или дыня-клубника.",
            price: 350,
            size: "1 л",
            image: img.lemonade,
            tags: ["Новинка"]
          }
        ]
      }
    ]
  },
  {
    id: "promo",
    name: "Акции",
    subcategories: [
      {
        id: "spring",
        name: "Весеннее спецпредложение",
        items: [
          {
            name: "Салат с фунчозой и курицей",
            description: "Фунчоза, курица, морковь, стручковая фасоль, имбирь, огурец, терияки, кунжут и зелень.",
            price: 400,
            size: "220 г",
            image: img.poke,
            tags: ["Новинка"]
          },
          {
            name: "Том ям с курицей",
            description: "Курица, грибы, кукуруза, томаты черри, специи, зелень, кунжут, кокосовое молоко и рис.",
            price: 450,
            size: "490 г",
            image: img.soup,
            tags: ["Острый"]
          },
          {
            name: "Пицца с беконом и грибами",
            description: "Тесто, чесночный соус, моцарелла, шампиньоны, бекон и пармезан.",
            price: 550,
            size: "500 г",
            image: img.pizzaMeat,
            tags: ["Хит"]
          },
          {
            name: "Удон с курицей",
            description: "Лапша удон, курица, овощи, терияки, сладкий чили, специи, зелень и кунжут.",
            price: 450,
            size: "300 г",
            image: img.pasta,
            tags: ["Острый"]
          }
        ]
      }
    ]
  }
];


