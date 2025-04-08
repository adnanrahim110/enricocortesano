import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa6";
import { blogs_banana_bread_1, blogs_banana_bread_2, blogs_banana_bread_3, blogs_come_fare_una_pizza_napoletana_1, blogs_come_fare_una_pizza_napoletana_10, blogs_come_fare_una_pizza_napoletana_11, blogs_come_fare_una_pizza_napoletana_12, blogs_come_fare_una_pizza_napoletana_13, blogs_come_fare_una_pizza_napoletana_14, blogs_come_fare_una_pizza_napoletana_15, blogs_come_fare_una_pizza_napoletana_16, blogs_come_fare_una_pizza_napoletana_17, blogs_come_fare_una_pizza_napoletana_2, blogs_come_fare_una_pizza_napoletana_3, blogs_come_fare_una_pizza_napoletana_4, blogs_come_fare_una_pizza_napoletana_5, blogs_come_fare_una_pizza_napoletana_6, blogs_come_fare_una_pizza_napoletana_7, blogs_come_fare_una_pizza_napoletana_8, blogs_come_fare_una_pizza_napoletana_9, blogs_french_baguette_1, blogs_french_baguette_2, blogs_french_baguette_3, blogs_french_baguette_4, blogs_french_baguette_5, blogs_french_baguette_6, blogs_french_baguette_7, blogs_french_baguette_8, blogs_frittata_di_maccheroni_1, blogs_frittata_di_maccheroni_2, blogs_frittata_di_maccheroni_3, blogs_genovese_1, blogs_genovese_2, blogs_genovese_3, blogs_l_arte_del_pane_1, blogs_l_arte_del_pane_10, blogs_l_arte_del_pane_11, blogs_l_arte_del_pane_2, blogs_l_arte_del_pane_3, blogs_l_arte_del_pane_4, blogs_l_arte_del_pane_5, blogs_l_arte_del_pane_6, blogs_l_arte_del_pane_7, blogs_l_arte_del_pane_8, blogs_l_arte_del_pane_9, blogs_la_pastiera_napoletana_1, blogs_la_pastiera_napoletana_2, blogs_la_pastiera_napoletana_3, blogs_la_pastiera_napoletana_4, blogs_la_pastiera_napoletana_5, blogs_la_pastiera_napoletana_6, blogs_la_pastiera_napoletana_7, blogs_la_pastiera_napoletana_8, blogs_pane_rustico_in_dutch_oven_1, blogs_pane_rustico_in_dutch_oven_2, blogs_panzarotti_napoletani_1, blogs_panzarotti_napoletani_2, blogs_panzarotti_napoletani_3, blogs_panzarotti_napoletani_4, blogs_pasta_e_patate_napoletana_1, blogs_pasta_e_patate_napoletana_2, blogs_spaghetti_alla_puttanesca_1, blogs_spaghetti_alla_puttanesca_2, blogs_spaghetti_alla_puttanesca_3, blogs_spaghetti_pomodoro_e_basilico_1, blogs_spaghetti_pomodoro_e_basilico_2, blogs_spaghetti_pomodoro_e_basilico_3, blogs_spaghetti_pomodoro_e_basilico_4, blogs_tortano_napoletano_1, blogs_tortano_napoletano_10, blogs_tortano_napoletano_11, blogs_tortano_napoletano_2, blogs_tortano_napoletano_3, blogs_tortano_napoletano_4, blogs_tortano_napoletano_5, blogs_tortano_napoletano_6, blogs_tortano_napoletano_7, blogs_tortano_napoletano_8, blogs_tortano_napoletano_9, blogs_trenette_funghi_e_piselli_1, blogs_trenette_funghi_e_piselli_2, blogs_trenette_funghi_e_piselli_3, blogs_trenette_funghi_e_piselli_4, categories_dolci_1, categories_fritto_1, categories_riflessioni_1, categories_riflessioni_3, categories_riflessioni_4 } from "../assets";

export const socials = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCjInAmYlkSpi2qx-DxCgCHw',
    icon: FaYoutube,
    color: '#FF0000'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/baccotabaccoepasta',
    icon: FaFacebookF,
    color: '#4267B2'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/baccotabaccoepasta',
    icon: FaInstagram,
    color: '#E4405F'
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com/enricocortesano',
    icon: FaPinterestP,
    color: '#E60023'
  }
];

export const navigation = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Enrico',
    url: '/about'
  },
  {
    title: 'Book',
    url: '/book'
  },
  {
    title: 'Videos',
    url: '/videos'
  },
  {
    title: 'Blogs / Press Release',
    url: '/blogs-pressreleases'
  },
  {
    title: 'Contact',
    url: '/contact'
  },
  {
    title: 'Categories',
    url: "/categories",
    category: [
      {
        title: 'Sauces',
        url: '/sauces'
      },
      {
        title: 'Pasta',
        url: '/pasta'
      },
      {
        title: 'Pizza and Bread',
        url: '/pizza-and-bread'
      },
      {
        title: 'Piza Calculator',
        url: '/pizza-calculator'
      },
      {
        title: 'Fried',
        url: '/fried'
      },
      {
        title: 'Sweets',
        url: '/sweets'
      },
      {
        title: 'Reflections',
        url: '/reflections'
      }
    ]
  },
];

export const pressreleases = [
  {
    img: "",
    url: "",
  },
  {
    img: "",
    url: "",
  },
  {
    img: "",
    url: "",
  },
  {
    img: "",
    url: "",
  },
  {
    img: "",
    url: "",
  },
  {
    img: "",
    url: "",
  },
  {
    img: "",
    url: "",
  },
  {
    img: "",
    url: "",
  },
];

export const categoriesList = [
  {
    title: 'Sauces',
    url: '/sauces',
    img: blogs_spaghetti_alla_puttanesca_1,
    rows: [
      {
        title: "spaghetti alla puttanesca",
        url: "/blogs/spaghetti-alla-puttanesca",
        bgColor: "#4bd1a0",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_spaghetti_alla_puttanesca_1],
        text: "This sauce is one of the oldest in Neapolitan cuisine. It is said that its name derives from the fact that the prostitutes of the time used to cook it while waiting for their clients.",
      },
      {
        title: "Neapolitan pasta and potatoes",
        url: "/blogs/neapolitan-pasta-and-potatoes",
        bgColor: "#FCF8ED",
        titleColor: "#90B679",
        textcolor: "#000",
        imgs: [blogs_pasta_e_patate_napoletana_1, blogs_pasta_e_patate_napoletana_2],
        text: "This is a recipe that has been passed down from Grandma to Mother in all Neapolitan families, so each family has its own version with small changes; this is my family's recipe."
      },
      {
        title: "genovese",
        url: "/blogs/genovese",
        bgColor: "#DEB940",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_genovese_1],
        text: "Yes, the name is Genovese, mail piatto and Neapolitan. This is my favorite dish."
      },
      {
        title: "Trenette Mushrooms and Peas",
        url: "/blogs/trenette-mushrooms-and-peas",
        bgColor: "#FCF8ED",
        titleColor: "#90B679",
        textcolor: "#000",
        imgs: [blogs_trenette_funghi_e_piselli_1, blogs_trenette_funghi_e_piselli_2],
        text: "Extremely flavorful recipe, with a perfect combination of flavors."
      },
      {
        title: "Spaghetti with tomato sauce and basil",
        url: "/blogs/spaghette-with-tomato-sauce-and-basil",
        bgColor: "#C73F12",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_spaghetti_pomodoro_e_basilico_1],
        text: "This is the classic dish of Neapolitan cuisine."
      }
    ]
  },
  {
    title: 'Pasta',
    url: '/pasta',
    img: blogs_spaghetti_pomodoro_e_basilico_1,
    rows: [
      {
        title: "spaghetti alla puttanesca",
        url: "/blogs/spaghetti-alla-puttanesca",
        bgColor: "#DEB940",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_spaghetti_alla_puttanesca_1],
        text: "This sauce is one of the oldest in Neapolitan cuisine. It is said that its name derives from the fact that the prostitutes of the time used to cook it while waiting for their clients.",
      },
      {
        title: "Neapolitan pasta and potatoes",
        url: "/blogs/neapolitan-pasta-and-potatoes",
        bgColor: "#FCF8ED",
        titleColor: "#90B679",
        textcolor: "#000",
        imgs: [blogs_pasta_e_patate_napoletana_1, blogs_pasta_e_patate_napoletana_2],
        text: "This is a recipe that has been passed down from Grandma to Mother in all Neapolitan families, so each family has its own version with small changes; this is my family's recipe."
      },
      {
        title: "Trenette Mushrooms and Peas",
        url: "/blogs/trenette-mushrooms-and-peas",
        bgColor: "#4BD1A0",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_trenette_funghi_e_piselli_1],
        text: "Extremely flavorful recipe, with a perfect combination of flavors."
      },
      {
        title: "genovese",
        url: "/blogs/genovese",
        bgColor: "#E4B185",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_genovese_1, blogs_genovese_2],
        text: "Yes, the name is Genovese, mail piatto and Neapolitan. This is my favorite dish."
      },
      {
        title: "MACARONI OMELETTE",
        url: "/blogs/macaroni-omelette",
        bgColor: "#DEB940",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_frittata_di_maccheroni_1],
        text: "This is one of the many Neapolitan recipes that was also used to empty the fridge of small leftovers, and this gives it a different flavor every time."
      },
      {
        title: "Spaghetti with tomato sauce and basil",
        url: "/blogs/spaghette-with-tomato-sauce-and-basil",
        bgColor: "#C73F12",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_spaghetti_pomodoro_e_basilico_1, blogs_spaghetti_pomodoro_e_basilico_2],
        text: "This is the classic dish of Neapolitan cuisine."
      }
    ]
  },
  {
    title: 'Pizza e Pane',
    url: '/pizza-and-bread',
    img: blogs_come_fare_una_pizza_napoletana_6,
    rows: [
      {
        title: "How to make a Neapolitan pizza",
        url: "/blogs/how-to-make-a-neapolitan-pizza",
        bgColor: "#FCF8ED",
        titleColor: "#FF4040",
        textcolor: "#000",
        imgs: [blogs_come_fare_una_pizza_napoletana_1, blogs_come_fare_una_pizza_napoletana_2],
        text: "To make an original Neapolitan pizza you need a few things, first of all the oven, logically the ideal would be a wood-fired oven."
      },
      {
        title: "Rustic Bread in Dutch Oven",
        url: "/blogs/rustic-bread-in-dutch-oven",
        bgColor: "#4BD1A0",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_l_arte_del_pane_6],
        text: "Recipe for fragrant bread and a crunchy crust every day."
      },
      {
        title: "FRENCH BAGUETTE",
        url: "/blogs/french-baguette",
        bgColor: "#FCF8ED",
        titleColor: "#852A0C",
        textcolor: "#000",
        imgs: [blogs_french_baguette_1, blogs_french_baguette_2],
        text: "Very tasty French Baguette, crunchy crust and soft and tasty crumb."
      },
      {
        title: "Neapolitan Tortano",
        subtitle: "Tortano is a typical Neapolitan traditional donut for Easter holidays.",
        url: "/blogs/neapolitan-tortano",
        bgColor: "#DEB940",
        titleColor: "#852A0C",
        textcolor: "#000",
        imgs: [blogs_tortano_napoletano_1],
        text: "First of all we need to make some clarifications to be able to differentiate Tortano from Casatiello, it is useless to tell you that in every Neapolitan family there is their own recipe passed down from mother to daughter, with small variations, but the base is the same, for both rustic cakes there are the same ingredients, but in the casatiello usually the cracklings are placed between the various ingredients and raw eggs are inserted chained with a cross of pasta on the surface."
      }
    ]
  },
  {
    title: 'Fried',
    url: '/fried',
    img: categories_fritto_1,
    rows: [
      {
        title: "Neapolitan panzarotti",
        url: "/blogs/neapolitan-panzarotti",
        bgColor: "#FCF8ED",
        titleColor: "#852A0C",
        textcolor: "#000",
        imgs: [blogs_panzarotti_napoletani_1, blogs_panzarotti_napoletani_2],
        text: "This is my recipe for Neapolitan panzarotti, remember it will be very difficult to find a unique recipe for Neapolitan panzarotti, this is because it is one of those recipes that our mothers and grandmothers used to use up the small leftovers in the fridge and clean it out, plus every family has its own recipe, in any case this is the base."
      },
      {
        title: "MACARONI OMELETTE",
        url: "/blogs/macaroni-omelette",
        bgColor: "#4BD1A0",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_frittata_di_maccheroni_1],
        text: "This is one of the many Neapolitan recipes that was also used to empty the fridge of small leftovers, and this gives it a different flavor every time."
      }
    ]
  },
  {
    title: 'Sweets',
    url: '/sweets',
    img: categories_dolci_1,
    rows: [
      {
        title: "Banana Bread",
        url: "/blogs/banana-bread",
        bgColor: "#4BD1A0",
        titleColor: "#ffffff",
        textcolor: "#000",
        imgs: [blogs_banana_bread_1],
        text: "Recipe for a typical American dessert good for breakfast in the morning."
      },
      {
        title: "The Neapolitan Pastiera",
        url: "/blogs/the-neapolitan-pastiera",
        bgColor: "#FCF8ED",
        titleColor: "#BC9B5D",
        textcolor: "#000",
        imgs: [blogs_la_pastiera_napoletana_1, blogs_la_pastiera_napoletana_2],
        text: "Pastiera is the Neapolitan dessert par excellence and despite being typical of Easter. Its origins are very ancient, and date back to Roman times, when the priestesses carried in procession to the temple of Ceres, the offerings of the farmers, ricotta, wheat, eggs .... Subsequently to these elements combined together, the scent of orange blossoms was added, which the trees are full of in spring, an essence that characterizes the pastiera and makes it unmistakable."
      }
    ]
  },
  {
    title: 'Reflections',
    url: '/reflections',
    img: categories_riflessioni_1,
  }
];

export const riflessioniContent = [
  {
    title: "FRESH",
    img: categories_riflessioni_3,
    text: [
      "Fresh in the United States is a strange definition, a fresh fish in Italy is a precise definition, in Italy a fish when it moves is fresh, or you can deduce it from the eye, it must be very alive, shiny, rounded, turgid and not hollow.",
      "In the United States fresh perhaps means that it is preserved in ice so it is fresh, also most of the time it is without a head so you can't even imagine its freshness.",
      "Let's not talk about seafood, clams and mussels sold frozen, so the internal fruit is dead and the most absurd thing, for those who cook it is very difficult to clean them from the sand in order to cook them.",
    ],
  },
  {
    title: "BREAD",
    img: blogs_l_arte_del_pane_4,
    text: [
      "What a wonderful feeling we Italians have in the vicinity or inside a bakery, that smell of baked bread, the many varieties of fragrant bread.",
      "In the United States this does not happen: the bread is odorless, closed in plastic bags and stays soft for days, who knows why!",
      "Here in the United States there are no bakeries, so bread is bought in supermarkets; lately you can also find European breads like ciabatta, Tuscan bread etc. etc. They have different shapes but the flavor is always the same: if you ask someone for explanations, their answer is that they do it like this and, if you ask them if they use sourdough, they laugh in your face because they don't understand what you're talking about. If you see this bread, it is not leavened, it has no alveoli inside, but the most imitated and mistreated bread is the French baguette: it is a long flaccid roll, not crunchy and with the flavor of other bread.",
      "I understand that most Americans are ignorant in food matter, so no one will ever complain because the poor things have no yardstick; how can they say that a bread is not good if they don't know what to compare it to?"
    ],
  },
  {
    title: "PIZZA DOUGH",
    img: categories_riflessioni_4,
    text: [
      "As I have already told you, I am not a chef and I have never taken any cooking courses, but my school was my home kitchen.",
      "So I started cooking after I turned thirty, but in recent years I have begun to delve deeper and study with the help of ancient texts, to find original recipes and also contemporary chefs, such as the great Gualtiero Marchesi, whose cuisine has produced many students who have become famous chefs.",
      'As for Neapolitan pizza, I want to make a premise regarding the doses: the doses you see in the recipe are the original ones of the Disciplinary of the "Associazione Verace Pizza Napoletana", but the doses depend on many things, the type of flour, the humidity of the room where you will work the dough; furthermore, each yeast from brand to brand gives different results. So arm yourself with a lot of patience and do a lot of tests until you have the right recipe, this is the beauty of cooking.',
      "As for pizza, the great help I had were the videos posted on YouTube by great pizza chefs, but also by lesser-known people like me, who with advice and various experiences helped me not only with the doses but also with the manipulation, which is perhaps the most difficult thing to understand without direct experience. For this reason I decided to make a video so that it summarizes all the little tricks to make a PERFECT pizza to enchant your guests.",
    ],
  },
];

export const blogs = [
  {
    title: "The Neapolitan Pastiera",
    url: "/blogs/the-neapolitan-pastiera",
    date: "12 April, 2020",
    category: "sweets",
    imgTop: [blogs_la_pastiera_napoletana_1],
    imgR2: [blogs_la_pastiera_napoletana_2, blogs_la_pastiera_napoletana_3],
    imgs: [
      blogs_la_pastiera_napoletana_4, blogs_la_pastiera_napoletana_5, blogs_la_pastiera_napoletana_6, blogs_la_pastiera_napoletana_7, blogs_la_pastiera_napoletana_8
    ],
    imgLast: [blogs_la_pastiera_napoletana_1],
    text:
      [
        [
          "Pastiera is the Neapolitan dessert par excellence it is typically  prepared for the  Easter holidays. \n Its origins are very ancient, and can be traced back to Roman times, when the priestesses carried the offerings of the peasants, the ricotta, the wheat, the eggs in procession to the temple of Ceres. \n To those ingredients is added orange blossoms water, flowers which the trees are laden with in spring,  and which is an essence that characterizes the pastiera and makes it unmistakable.",
          "Rich in flavor and ingredients, it requires a long preparation and has a very strong historical and social value, not only because it has become a symbol of rebirth during Easter but also because its preparation is an important ritual for many Neapolitan women.  They often bake many at a time, for all the people they love. \n Its special scent floods the houses and streets of Naples, from Holy Thursday onwards and is a staple found on everyone's tables. The ingredients are: ricotta, wheat, candied fruit, flour, butter, sugar, eggs, orange blossom water. The pastiera can be kept at room temperature in a cool house for about a week, but also in the refrigerator it remains intact and fragrant.",
          "I advise you to eat it two or three days after its preparation."
        ],
        [
          "To prepare the Neapolitan pastiera, start with the handmade crust. In a bowl pour the flour and sugar, then add the lard and start kneading by hand.",
          "As soon as you have obtained a sandy textured mixture add the yolks. Work again with your hands and as soon as you have obtained a uniform mixture transfer it to a work surface.\n Continue to knead the dough, just long enough to compact the ingredients, until you have obtained a smooth and uniform dough.Wrap in plastic wrap and leave to rest for an hour in the refrigerator.",
          "Meanwhile, pour the milk into a saucepan, add the precooked wheat, lard and grated lemon zest."
        ],
        [
          "Turn on the heat and stirring often, cook for about 20 minutes over medium heat until a creamy mixture is obtained and let cool. Only when it is cold start to prepare the cream. In a bowl sift the ricotta.",
          "Add the sugar and mix with a whisk or spatula. Then add the eggs and the cold wheat. Add also the  seeds from the vanilla bean, then cut the candied orange peels into cubes and insert them in the mixture, together with a pinch of cinnamon and orange blossom water."
        ],
        [
          "At this point combine everything to mix all the ingredients and move on to the composition of the pastiera. Grease with lard and flour an aluminum baking dish. Then pick up the shortcrust pastry and start rolling it out with a rolling pin until you get the size of your wheel. At this point, transfer it into the mold gently so that it adheres well over the entire surface."
        ],
        [
          "Then remove the excess pastry with a knife and knead it again, it will be used to make the latticed top. Then pour the cream into the pastry shell and level it. Then roll out the rest of the dough, always until it is half a cm thick and make the lattices for the top about 1 and a half cm wide with a pasta cutter wheel."
        ],
        [
          "Then place them on the pastiera first in one direction and then in the other, taking care to make the ends coincide with the edges of the mold. At this point bake in a preheated  oven at 180 ° for about 80 minutes, taking care to move the pastiera to the lowest shelf in the last 20 minutes of cooking. If the lattices become too dark, cover the pastiera with aluminum foil. Then take the Neapolitan pastiera out of the oven and let it cool completely. Before serving, you can sprinkle the surface with confectioners to taste."
        ]
      ],
    ings: [
      {
        title: "Ingredients:",
        items:
          [
            "Shortcrust pastry:",
            "Fresh butter 300g | Eggs 50g | Yolks 60g | Salt 10g | Flour 500g | Granulated sugar 200g | Vanilla bean 1 | Lemon peel to taste"
          ],
      },
      {
        title: "Cake interior:",
        items: [
          "Fresh ricotta 360g | Granulated sugar 230g | Vanilla bean 1 | Cooked wheat 310g | Salt 3g | Candied orange peel 155g | Whole eggs 155g | Fresh milk 180g | Cinnamon essence to taste | Orange essence to taste | Orange and lemon peel to taste",
        ]
      }
    ],
  },
  {
    title: "Banana Bread",
    url: "/blogs/banana-bread",
    date: "27 Feb, 2020",
    category: "sweets",
    imgTop: [blogs_banana_bread_1],
    imgR2: [blogs_banana_bread_2],
    imgs: [blogs_banana_bread_3],
    text:
      [
        [
          "Recipe of a typical American sweet good with breakfast in the morning."
        ],
        [
          ":Method:",
          "This recipe is as simple as it is delicious. Coarsely chop the nuts and keep them aside. Peel the bananas and puree them, keep these too. In a large bowl, break the whole eggs. \n Add the inner seeds of the vanilla bean, the honey, mix well and add the crushed bananas to the eggs. Melt the butter over low heat and, as soon as it has cooled a little, pour it into the egg and banana mixture (or add the seed oil). Mix well. Now, combine the dry ingredients in a bowl: flour, baking powder, sugar, baking soda, salt and cinnamon. \n Add the powders to the previous mixture, mixing first with a spatula and adding a few at a time to avoid the formation of lumps. Also add the chopped walnuts and mix well. Grease the mold with the peeling spray or brush it with softened butter and flour it."
        ],
        [
          ":Cook::",
          "Pour the mixture into the mold, to then level the surface well then take care of the garnish: cut two slices of banana as thin as possible, freshly cut with lemon juice and then grease, using your fingertips, with apricot jam or spray jelly * . \n At this point, place them on the surface of the plumcake by staggering each other and then bake the cake. Bake the banana bread in a static oven preheated to 175 ° for about 50-60 minutes. \n Before turning it out, do a toothpick test."
        ],
        [
          ":Storage::",
          "You can store banana bread for 2-3 days at room temperature and under a glass bell; you can also freeze it, whole or better still sliced to always have the necessary quantity available."
        ]
      ],
    ings: [
      {
        title: "INGREDIENTS FOR A 30 CM X 10 CM MOLD",
        items:
          [
            "ripe bananas 3 (600 g with the peel, 400 g of pulp) | flour 260 g | sugar 150 g | honey 20 g | yeast 16 g | baking soda 1 g | salt up to 1 g | ground cinnamon 1 teaspoon (approx. 1 g) | walnuts (also pecans) coarsely chopped 100 g | medium eggs 3 | melted butter 115 g (or same weight as sunflower oil) | vanilla 1 berry | chocolate chips (optional) 100 g *"
          ]
      },
      {
        title: "FOR GARNISH:",
        items: [
          "not overripe bananas 2 very thin slices | lemon juice to taste | apricot jam 1 tsp"
        ]
      }
    ]
  },
  {
    title: "Neapolitan Panzarotti",
    url: "/blogs/neapolitan-panzarotti",
    date: "27 Feb, 2020",
    category: "fried",
    imgTop: [blogs_panzarotti_napoletani_1],
    imgR2: [blogs_panzarotti_napoletani_2],
    imgs: [blogs_panzarotti_napoletani_3],
    imgLast: [blogs_panzarotti_napoletani_4],
    text:
      [
        [
          "This is my recipe for Neapolitan panzarotti,"
        ],
        [
          "Remember it will be very difficult to find a unique recipe for the Neapolitan panzarotti, this is because it is one of those recipes that our mothers and grandmothers used to use small leftovers in the fridge and clean it up, in addition each family has its own recipe, in any case this is the base."
        ],
        [
          ":Method::",
          "Wash the potatoes, put them in a large enough pot with plenty of water and let them cook. When a fork will easily enter the potatoes, the potatoes are cooked, drain and peel and mash with the potato masher. At this point add the potatoes with all the ingredients, putting aside the egg white that is left over."
        ],
        [
          "Mix everything well. Take a small amount of potatoes and put the mozzarella and salami that you previously cut into pieces in the center, close giving the shape of the panzarotto."
        ],
        [
          "Finish all the potatoes and place the panzarotti on a plate. \n Let it sit for a few hours.When frying, pass the panzarotti in the breadcrumbs and dip them in the pan with the hot oil. \n Pass the panzarotti on absorbent paper and serve immediately and hot."
        ]
      ],
    ings: [
      {
        title: "Ingredients:",
        items:
          [
            "1 kl of old type potatoes | 2 whole eggs + 1 yolk | 1 sprig of chopped parsley | 60 gr of grated Parmesan | 60 gr of grated pecorino romano | Salt to taste. | pepper as needed. | peanut oil for frying"
          ]
      },
      {
        title: "For the stuffing:",
        items: [
          "250 gr of mozzarella or provola | 100 gr of Napoli salami"
        ]
      },
      {
        title: "For breading:",
        items: [
          "Bread crumbs"
        ]
      }
    ]
  },
  {
    title: "Macaroni omelette",
    url: "/blogs/macaroni-omelette",
    date: "27 Feb, 2020",
    category: "pasta, fried",
    imgTop: [blogs_frittata_di_maccheroni_1],
    imgR2: [blogs_frittata_di_maccheroni_2],
    imgs: [blogs_frittata_di_maccheroni_3],
    text:
      [
        [
          "This recipe is for making a very thin macaroni omelette so it is crispy. \n  Usually like many Neapolitan recipes, this can also be useful for emptying the fridge from small leftovers and in this case with any leftover pasta. \n But in this case I will give you the basic recipe for making this dish from scratch."
        ],
        [
          "The very simple preparation, if you do not have pasta that is not left then drop the pasta and drain it al dente, pour the pasta in a bowl in order to let it cool down a bit, this to avoid that when you pour the grapes they do not cook , then after adding the eggs and all the other ingredients to the pasta."
        ],
        [
          "In a large and possibly non-adherent pan, heat the oil and when it is hot pour everything, with a wooden spoon, distribute everything well so that it is well distributed. Cook it well on one side and when it is golden brown turn it over, I suggest you help yourself with a plate, cook the other side and enjoy!"
        ],
      ],
    ings: [
      {
        title: "Ingredients:",
        items:
          [
            "150 g of spaghetti | 4 eggs | Neapolitan salami | Mozzarella or provola | Parmesan | Basil | 4 spoons of olive oil | Ground pepper to taste | Salt to taste."
          ]
      },
      {
        title: "For the stuffing:",
        items: [
          "250 gr of mozzarella or provola | 100 gr of Napoli salami"
        ]
      },
      {
        title: "For breading:",
        items: [
          "Bread crumbs"
        ]
      }
    ]
  },
  {
    title: "Neapolitan Tortano",
    url: "/blogs/neapolitan-tortano",
    date: "9 April, 2020",
    category: "pizza and bread",
    imgTop: [blogs_tortano_napoletano_1],
    imgR2: [blogs_tortano_napoletano_2, blogs_tortano_napoletano_3, blogs_tortano_napoletano_4],
    imgs: [blogs_tortano_napoletano_5, blogs_tortano_napoletano_6, blogs_tortano_napoletano_7, blogs_tortano_napoletano_8],
    imgLast: [blogs_tortano_napoletano_9, blogs_tortano_napoletano_10, blogs_tortano_napoletano_11],
    text:
      [
        [
          "The typical Tortano of the Neapolitan tradition for the Easter holidays.",
          "First of all we have to make some clarifications in order to differentiate Tortano from Casatiello.  -Needless to say,  every Neapolitan family has its own recipe passed on from mother to daughter, with small variations.  The basis however remains the same, for both the rustic pies and the ingredients are the same.  For the casatiello the ciccioli (small crunchy bits of lard) are usually put among the various ingredients and raw eggs are put on the surface  with a cross made of the dough to hold them in place."
        ],
        [
          "We begin by combining the same ingredients that we use to make bread, because the tortano is really a stuffed bread.  We add the flour to the water, we add the yeast and then when the first three ingredients are mixed we add the salt. \n After mixing the four ingredients well, leave to rest for 20 minutes, covered with a damp cloth or plastic wrap. \n Now create a rectangle with a thickness of about 1 centimeter, spread all the ingredients on it."
        ],
        [
          "Start to roll the pasta with all the ingredients in it, to create a big donut roll and put it in a bundt cake pan or specific ones for Tortani and and Casatielli."
        ],
        [
          "Covered with a cloth, let it rise for a minimum of 2 hours, then bake at 180 ° C  for 40 minutes, but check it and remove it when it becomes golden brown on the surface."
        ]
      ],
    ings: [
      {
        title: "Ingredients:",
        items:
          [
            "1.5 kg of flour (double 00 preferably) | 10 g of dry yeast | 100 g of grated Parmesan | 100 g of grated pecorino romano | 30 g of salt | Pepper as needed. | 1 l water | 200 g suet (or lard) | 300 g of Neapolitan salami | 100 g of pancetta (or bacon) | 200 g of mortadella in a single slice | 200 g of provolone"
          ]
      },
    ]
  },
  {
    title: "Calzone, Neapolitan stuffed pizza",
    url: "/blogs/calzone-neapolitan-stuffed-pizza",
    date: "5 April, 2020",
    category: "pizza and bread",
    imgTop: false,
    embedLink: "https://www.youtube.com/embed/FfKzZ81U6rQ",
    embedTitle: "Calzone Napoletano",
    text:
      [
        [
          "The Neapolitan calzone is a gastronomic specialty of Campania cuisine, It is basically a pizza that can be stuffed with a variety of different things according to your tastes and then folded in two, giving it the characteristic half-moon shape."
        ],
      ],
  },
  {
    title: "French Baguette",
    url: "/blogs/french-baguette",
    date: "10 March, 2020",
    category: "pizza and bread",
    imgTop: [blogs_french_baguette_1],
    imgR2: [blogs_french_baguette_2, blogs_french_baguette_3],
    imgs: [blogs_french_baguette_4, blogs_french_baguette_5, blogs_french_baguette_6, blogs_french_baguette_7, blogs_french_baguette_8],
    text:
      [
        [
          "Tasty French Baguette, crispy crust and soft and tasty interior."
        ],
        [
          ":Procedure::",
          "Add the flour, baking powder, salt in a bowl, mix together. \ Add the water and mix everything to a sticky dough as shown. \ Cover the bowl and set the timer for 45 minutes. \ After 45 minutes, remove the dough from the bowl and with wet hands work the dough by giving it 5 or 6 turns. Repeat this procedure 3 more times \ After the last 45 minutes of leavening, spread the dough on a well floured surface and divide the dough into 4 equal pieces, cover them with plastic wrap and let them rest for 15 minutes. \ After 15 minutes, fill the preforms of the baguettes and place them on the well floured baker's Couche cloth, set the timer for 20 minutes. \ After 20 minutes, reset the timer for another 10-12 minutes while the oven heats up to 220 ° C / 420 ° F / Gas mark 7 to 8, also place a tray of hot water on the lower shelf of the oven. \ Place the baguettes on lightly greased baking trays, sprinkle with a little water and mark the baguettes as shown below. \ Put the baguettes in the hot oven, spray inside the oven with water, and cook for 16-20 minutes, remove from the oven and place them on a wire rack until they cool."
        ],
        [
          "And enjoy!"
        ],
        [
          "Everything seems very simple, but it takes precise movements of the pasta to incorporate the air well, this will give the alveoli you see in the photos and a lightness to the baguette.  I am preparing videos with which you will be able to understand what the essential techniques are to make good bread in general, I will warn you."
        ],
        [
          "`Life is like bread: as time goes by it becomes harder, but the less of it remains the more you appreciate it.`"
        ],
        ["'Indro Montanelli'"]
      ],
    ings: [
      {
        title: "Ingredients:",
        items:
          [
            "700 g / 25 ounces of  white bread flour | 520g / 19 ounces of cold water | 1 teaspoon / 8 g of salt | ½ teaspoon / 2g of instant or active dry yeast | If using fresh yeast: 8g"
          ]
      },
    ]
  },
  {
    title: "The Art of Bread!",
    url: "/blogs/the-art-of-bread",
    date: "10 March, 2020",
    category: "pizza and bread",
    imgTop: [
      blogs_l_arte_del_pane_1, blogs_l_arte_del_pane_2, blogs_l_arte_del_pane_3, blogs_l_arte_del_pane_4, blogs_l_arte_del_pane_5, blogs_l_arte_del_pane_6, blogs_l_arte_del_pane_7, blogs_l_arte_del_pane_8, blogs_l_arte_del_pane_9
    ],
    imgR2: [blogs_l_arte_del_pane_10,],
    imgs: [blogs_l_arte_del_pane_11],
    text:
      [
        [
          "When bread becomes art! It turns out beautiful crunchy and magnificently risen and riddled with air pockets.   The delightful aroma of freshly baked bread invades the entire kitchen and provides a sight for sore eyes!"
        ],
        [
          "Bread is one of the most popular and most consumed foods in Italy and around the world.  However, it is also one of the foods with the most variations, in the ingredients and their quantities, in the preparation and  form. Using the basic ingredients, consisting of flour, water, salt and yeast (some of which can be replaced with others), yields a series of different combinations and possibilities with an almost infinite  number of different processing times.  The different varieties of bread are a reflection of the resources and traditions of the places where it is prepared and enjoyed."
        ],
        [
          "The first traces of the preparation of a food similar to bread date back to prehistory, when man discovered that he could cook a dough of acorn powder crushed with water on hot plates, obtaining a hard but nutritious product, similar to a focaccia. Subsequently, the flour obtained from ground cereals such as barley and spelt successfully replaced the acorn powder. The early practice of leavening is attributed to the Babylonians, then it was perfected by the Egyptians who also created the first tools for bread-making. The Greeks then added other ingredients to the flour and water mixture and established the first public ovens, while the Romans refined the recipe and made it popular. In the Middle Ages, wheat became a luxury so that the people had to be content with preparing bread with barley or rye. The Renaissance renewed its popularity, and introduced high-quality beer yeast and flour. The next turning point in the preparation of bread occurred in the late eighteenth century with the invention of mechanical mixers and the production of artificial yeasts."
        ],
        [
          "Here are some tools that I use to prepare excellent homemade bread.  These along with a good oven, love, passion and lots of research give the desired results. To make good bread at home  takes no more than 15 minutes of preparation and about 45 minutes  of cooking time The longest part is the leavening time which is about 12 hours, depending on the temperature and humidity in the place where you are located. The pleasure and satisfaction that you get from baking your own bread is priceless."
        ]
      ],
  },
  {
    title: "How to make a Neapolitan pizza",
    url: "/blogs/how-to-make-a-neapolitan-pizza",
    date: "28 Feb, 2020",
    category: "pizza and bread",
    imgTop: [blogs_come_fare_una_pizza_napoletana_1,],
    imgR2: [blogs_come_fare_una_pizza_napoletana_2,],
    imgs: [blogs_come_fare_una_pizza_napoletana_3, blogs_come_fare_una_pizza_napoletana_4, blogs_come_fare_una_pizza_napoletana_5],
    imgLast: [
      blogs_come_fare_una_pizza_napoletana_6, blogs_come_fare_una_pizza_napoletana_7, blogs_come_fare_una_pizza_napoletana_8, blogs_come_fare_una_pizza_napoletana_9, blogs_come_fare_una_pizza_napoletana_10, blogs_come_fare_una_pizza_napoletana_11, blogs_come_fare_una_pizza_napoletana_12, blogs_come_fare_una_pizza_napoletana_13, blogs_come_fare_una_pizza_napoletana_14, blogs_come_fare_una_pizza_napoletana_15, blogs_come_fare_una_pizza_napoletana_16, blogs_come_fare_una_pizza_napoletana_17
    ],
    text:
      [
        [
          "To make an original Neapolitan pizza some things are necessary, first of all the oven, logically the ideal would be a wood-burning oven that can reach very high temperatures, so that the pizza does not have to cook more than about 55-60 seconds. I know there are many alternatives, but they will all  yield imitations and will not turn out a perfect pizza.",
          "I am not a chef or a pizza chef but I love Italian cuisine, so with study and practice and using the right tools I try to get as close as possible to the standards of the the professionals.  My  guinea pigs are my wife and my friends who all seem very happy to have that role."
        ],
        [
          "Logically, I follow the original recipe used by Neapolitan pizza chefs, using the four basic ingredients: flour, water, yeast and salt.   The amounts will vary based on certain factors: type of flour, humidity and characteristics of the room or area where you prepare your pizza, this is where experimentation, experience, and trial and error will lead you to the right formula for your perfect pizza.",
          "The ingredients to prepare the dough of the real Neapolitan pizza. \n Here are the quantities of the various ingredients using 1 liter of water:",
          "!water:! 1 liter \n !salt:! 40-60 gr \n !yeast:! of fresh beer 0.1 - 3 gr \n mother 5 - 20 % of the flour used \n of dry beer ratio 1 to 3 compared to fresh \n !flour:! 1.6-1.8 kg (00 or 0 flour)",
        ],
        [
          "{Let me premise the amounts with the following: the amounts that  you see in the recipe are the original ones from the specifications set by the \"Associazione Verace Pizza Napoletana\" but the amounts will depend as I said above, on many things, on the type of flour, on the humidity of the place where you will work the dough, furthermore, each brand of yeast gives different results, so arm yourself with lots of patience and do many tests until you have the right recipe, that part of the beauty of cooking.}"
        ],
        [
          ":Preparation::",
          "'Mix the flour, water, salt and yeast'  starting from the water and making sure that direct contact between the  salt and the yeast does not last for more than 5 minutes, otherwise the salt would damage the yeast cells. One liter of water is poured into the mixer, a quantity of sea salt between 40 and 60 g is dissolved in the water, 10% of the  total amount of flour is added, then the yeast is diluted, start the mixer and gradually add the rest of the flour until the desired consistency of dough is reached. The dough must be worked using a fork, spiral attachment in a mixer(all with a beveled and rotating basket) until a single compact mass is obtained. To obtain an optimal consistency of  dough, the quantity of water that a flour is able to absorb(hydration) is very important."
        ],
        [
          ":Leavening and maturation:",
          "Remove the dough from the mixer, and let it rest 'covered by a damp cloth' so that the surface of the dough does not harden and form a sort of crust caused by the evaporation of the humidity released by the dough itself. \n After the time deemed necessary for the dough to settle and rest, the 'dough is then molded', which is traditionally done by hand. \n In the Neapolitan technique, in the traditional handmade staglio, the dough is shaped(staglio) in the form of balls with a technique that recalls the preparation of mozzarella(mozzarella). \n For the \"true Neapolitan pizza\" the rolls must have a weight between 200 and 280 g, to obtain a pizza with a 'diameter between 22 - 35 cm'.Once the loaves have been formed(staglio), a second leavening takes place in food boxes of variable duration, depending on the temperature and humidity characteristics of the environment and the absorption of the flour used. \n Maturation consists of a series of biochemical and enzymatic processes that split the most complex structures, proteins and starches into simpler elements.Total fermentation times: min 8 - max 24 hours(with the possible addition of processing hours - max 4 hours)."
        ],
        [
          "The condiments",
          "The products used must preferably be of Campania origin. \n 'The hand - crushed peeled tomato' must not be dense and with pieces of tomato still present. \n The 'fresh tomato' must be cut into slices \n The 'buffalo mozzarella' (cut into slices) or the fior di latte (cut into strips) must be evenly distributed. \n The 'grated cheese' (if used) must be spread on the pizza with a rotating and uniform movement. \n The fresh 'basil leaves' are placed on the other ingredients \n The 'extra virgin olive oil' is added with a spiral movement.",
          "These toppings are the basis for Margherita pizza, then you can indulge yourself in a thousand ways with many products such as vegetables, cheeses, meats and so on."
        ],
        [
          ":Cooking:",
          "The cooking must take place inside the 'wood oven' which must have reached a temperature of about 430-480 C ° between the floor and the vault. With these temperatures, simply insert the pizza for '60-90 seconds', during which time the pizza will cook evenly over its entire circumference."
        ]
      ],
  },
  {
    title: "Rustic Bread in Dutch Oven",
    url: "/blogs/rustic-bread-in-dutch-oven",
    date: "27 Feb, 2020",
    category: "pizza and bread",
    imgTop: [blogs_l_arte_del_pane_10],
    imgR2: [blogs_l_arte_del_pane_1],
    imgs: [blogs_pane_rustico_in_dutch_oven_1, blogs_pane_rustico_in_dutch_oven_2],
    text:
      [
        [
          "'Ricetta semplice per fare il pane in casa'",
          "Basta fornirsi di una pentola di ghisa che di solito viene chiamata\"Dutch oven\""
        ],
        [
          "Aggiungi farina, sale, lievito e acqua al contenitore di plastica. \n Mescolare fino a quando ben mischiato. \n Coprire e lasciare riposare 20 minuti Piegare l'impasto raggiungendo sotto il contenitore, allungando e piegando l'impasto per 5 volte. \n Coprire e lasciare riposare 20 minuti. \n Ripeti fino a quando non hai completato 4 volte le pieghe. \n Coprire l'impasto e lasciare riposare per 12 ore a temperatura ambiente. \n Separare l'impasto dai lati del contenitore con una mano infarinata. \n Trasferire l'impasto sulla superficie infarinata. \n Tagliare in due pezzi uguali."
        ],
        [
          "Formare i panetti e posizionarli nei cestini con la mozzatura rivolta verso il basso. Mettere in cestini infarinati in un sacchetto di plastica e far riposare per 50 minuti. Metti la pentola di ghisa nel forno e preriscaldalo a 480 ° F Capovolgere i cestini su una superficie infarinata."
        ],
        [
          "Posizionare con cura l'impasto nella pentola di ghisa con la parte mozzata nel forno rivolta verso l'alto. \n Coprire e cuocere per 30 minuti. \n Scoprire e cuocere per altri 10 minuti. \n Posizionare il tutto finito sulla griglia per raffreddare per almeno 2 ore",
          "Affetta, servi e divertiti!"
        ]
      ],
    ings: [
      {
        title: "Ingredienti:",
        items:
          [
            "1000 g. Farina | 800 ml. Acqua tiepida | 20 g sale marino | 0.5 g Lievito istantaneo o 1.5 g Lievito di birra | 4 l. Pentola di ghisa | 12 l Contenitore di plastica | 2 Cestini da 23 cm"
          ]
      },
    ]
  },
  {
    title: "Spaghetti alla Puttanesca",
    url: "/blogs/spaghetti-alla-puttanesca",
    date: "29 Feb, 2020",
    category: "pasta, sauces",
    imgTop: [blogs_spaghetti_alla_puttanesca_1],
    imgLast: [blogs_spaghetti_alla_puttanesca_2, blogs_spaghetti_alla_puttanesca_3],
    text:
      [
        [
          "To make spaghetti alla puttanesca, first rinse the capers under running water to remove the excess salt, then dry them and place them on a cutting board to chop them roughly with a knife. Take the pitted Gaeta olives and mash them with the knife blade. \n Wash, dry the parsley and mince it.Put a pot full of water on the stove and bring it to a boil(add salt to the water once  it boils) this is where you will cook the pasta as per the package instructions for al dente.Meanwhile, in a large pan, pour the oil, the peeled garlic cloves and leave them whole and add the chopped dry chili peppers.Add the anchovy fillets and the desalted capers.Brown over medium heat for 5 minutes stirring often, so that the anchovies will melt and release their aroma.Next, pour the lightly crushed peeled tomatoes and stir with a spoon and cook the sauce for another 10 minutes on medium heat.Meanwhile, boil the spaghetti al dente."
        ],
        [
          "When the sauce is ready, remove the whole garlic cloves and add the crushed olives. Flavor the sauce with chopped fresh parsley.",
          "In the meantime, the spaghetti will have finished cooking, remove it from the pot and directly into the pan bringing along some of the cooking water with it and sauté it for half a minute, just enough time to mix all the flavors. Serve the spaghetti puttanesca hot."
        ]
      ],
    ings: [
      {
        title: "INGREDIENTS:",
        items:
          [
            "Spaghetti 320 g | Peeled tomatoes 800 g | Capers in salt 10 g | Parsley to mince 1 bunch | Anchovies in oil 25 g | Gaeta olives 100 g | Garlic 3 cloves | Dry chili peppers 2 | Extra virgin olive oil 30 g | Salt to taste"
          ]
      },
    ]
  },
  {
    title: "Neapolitan pasta and potatoes",
    url: "/blogs/neapolitan-pasta-and-potatoes",
    date: "27 Feb, 2020",
    category: "pasta, sauces",
    imgTop: [blogs_pasta_e_patate_napoletana_1],
    imgR2: [blogs_pasta_e_patate_napoletana_2],
    text:
      [
        [
          "Before putting the water on the fire, wait before starting the sauce because it will take some time. Start to put the EVO oil in a pan, add the bacon cut into strips, then pour the potatoes that will not have to fry in the fat, but immediately add the salt, pepper and parsley to the water, turn and cook until when the pieces of potatoes will not be easily crushed with a wooden spoon and the water is consumed leaving a velvety sauce."
        ],
        [
          "To this put the salted water on the fire, and drop the pasta at the moment of boiling after about ten minutes, do not pour the pasta but directly from the pan pass it with the help of a ladle and leave a little cooking water that thanks to the starch released by the pasta it will flavor the sauce even more, add the parmesan peel and turn until the cooking water has evaporated, at this point do the dishes and enjoy."
        ]
      ],
    ings: [
      {
        title: "Ingredients for four people:",
        items:
          [
            "200 grams of mixed pasta | 4 medium potatoes | 1 celery stick | 1 red onion | 2 or 4 ripe tomatoes | 1 sprig of parsley | 1 slice of bacon in strips | 2 parmesan rinds | grated pecorino | freshly ground pepper | 4 spoons of extra virgin olive oil."
          ]
      },
    ]
  },
  {
    title: "Genovese",
    url: "/blogs/genovese",
    date: "27 Feb, 2020",
    category: "pasta, sauces",
    imgTop: [blogs_genovese_1],
    imgR2: [blogs_genovese_2],
    imgLast: [blogs_genovese_3],
    text:
      [
        [
          "One of the best Neapolitan sauces, even if it is called Genovese."
        ],
        [
          "There is a recipe from the Campania tradition that is widespread and appreciated by all, it bears the name of Genovese although it is unlikely to be unknown in the Ligurian capital. It is a substantial ragù in bianco prepared with many onions. During the long cooking these turn into a delicious puree, very tasty and with a strong sweet note. For this reason the sauce must first be balanced through the acidity of the wine and finally left to \"pull\" ie dry."
        ],
        [
          "Someone then sacrifices a piece of meat to enrich the seasoning to put on the pasta, others prefer to enjoy it only as a second course. Finally, the debate opens about who decides to do without or add some grated cheese and pepper to the ziti dish, we are for the latter. As you may have guessed, Genoese is a classic recipe that makes everyone agree, giving the opportunity to choose the version that over time best suits the family's tastes."
        ]
      ],
    ings: [
      {
        title: "Ingredients:",
        items: [
          "Ziti 320 g | Beef (girello, magatello or lacerto) 600 g | Golden onions 1 kg | Celery 60 g | Carrots 60 g | Parsley 1 sprig | White wine 100 g | Extra virgin olive oil to taste | Salt to taste | Black pepper to taste | Parmigiano Reggiano DOP to taste"
        ]
      },
    ]
  },
  {
    title: "Trenette Mushrooms and Peas",
    url: "/blogs/trenette-mushrooms-and-peas",
    date: "27 Feb, 2020",
    category: "pasta, sauces",
    imgTop: [blogs_trenette_funghi_e_piselli_1],
    imgLast: [blogs_trenette_funghi_e_piselli_2, blogs_trenette_funghi_e_piselli_3, blogs_trenette_funghi_e_piselli_4],
    text:
      [
        [
          "Simple but very tasty recipe."
        ],
      ],
    ings: [
      {
        title: "Ingredients:",
        items: [
          "Trenette 400 g | Porcini mushrooms 200 g | Peas 300 g | Speck 150 g | Onion 1 medium | Parsley | Dry white wine half a glass | Oil | salt | pepper | Parmesan Cheese"
        ]
      },
    ]
  },
  {
    title: "Spaghetti with tomato sauce and basil",
    url: "/blogs/spaghette-with-tomato-sauce-and-basil",
    date: "27 Feb, 2020",
    category: "pasta, sauces",
    imgTop: [blogs_spaghetti_pomodoro_e_basilico_1],
    imgR2: [blogs_spaghetti_pomodoro_e_basilico_2],
    imgs: [blogs_spaghetti_pomodoro_e_basilico_3],
    imgLast: [blogs_spaghetti_pomodoro_e_basilico_4],
    text:
      [
        [
          "This is the classic dish of Neapolitan cuisine"
        ],
        [
          ":Method:",
          "Put the pot with the water on the fire, pour the tomatoes in a pan, fry, with the garlic, to which you will have removed the soul, in abundant extra virgin olive oil and cook, lower the flame and cook for 10 minutes salt to taste and if you want put a little chilli pepper when the water for the pasta reaches the boil add the salt cook the pasta leaving it al dente,"
        ],
        [
          "Throw the pasta into the sauce, mix it well with the sauce, for a few munuti and serve with a nice sprinkling of Parmigiano."
        ]
      ],
    ings: [
      {
        title: "Ingredients:",
        items: [
          "360 g spaghetti | 500 g peeled San Marzano tomatoes | basil | 2 cloves of garlic | extra virgin olive oil to taste | chili pepper (optional) | Salt to taste | grated pecorino romano cheese to taste"
        ]
      },
    ]
  },
];
