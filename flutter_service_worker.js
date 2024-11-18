'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3ab69459c1f50422f843aa5083958012",
"version.json": "565b624b2de56e1379d807ce8f97853c",
"index.html": "ee7c1612bbf2f6e0d31fcaa1aa3bcc70",
"/": "ee7c1612bbf2f6e0d31fcaa1aa3bcc70",
"main.dart.js": "e0c473ffd494f442fbcba30d89495c3e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5accaf8ec7f798468c1a0c9a914ac995",
"assets/AssetManifest.json": "7f105fef0b10365c2e5109a6d06ab235",
"assets/NOTICES": "26ce8c0bd5b0b377fd2141ff475baf40",
"assets/FontManifest.json": "b64dcc77c4dc5b6c91ca174607edaa7d",
"assets/AssetManifest.bin.json": "4798dc2ee760f4d96d8d42c2a602d890",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "65c1f0dbcec1ed80b3ac4822dabd6054",
"assets/fonts/MaterialIcons-Regular.otf": "ee59de93ee0a5bd04cd23570223b79e5",
"assets/assets/images/flags/CN.png": "39a822f702fab73a45065dbd96db5314",
"assets/assets/images/flags/US.png": "e0233bc918f508bdc2f02b06fe87c6ef",
"assets/assets/images/flags/KR.png": "26168cddf75348cc28299de4daddcb5b",
"assets/assets/images/flags/JP.png": "8359c3b0fe9dc06e7dd03db175585550",
"assets/assets/images/flags/ID.png": "b68badce256dd594bdda2afbe15ca4a1",
"assets/assets/images/kfc.webp": "a076437221cd55d199b252440060f5ad",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Brown_Sugar_Ristretto_Bianco.jpg": "ed08367e5f5c0b84760fe365defbb84e",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Greentea_Latte.jpg": "0a025476d7f565fa84a5a96ca0546df4",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Breakfast_Family_Set.jpg": "936551e4c0936e6db792e7f086dade23",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/BREAKFAST_(_Selected_food_+_Americano__Latte,_tall_size).jpg": "e21122997ae15146c33f0d5a333d867b",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Green_Tea_Oatmilk_Cream_Frappuccino.jpg": "50045ef72d34672dbd56332c5eb558bf",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Bundle_Tumbler_Bag_+_2_Beverages.jpg": "3813a282680907ec06db817189f303a1",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/COFFEE_BREAK_(_Selected_food_+_Americano__Latte,_tall%250A________________________size).jpg": "80887f11903781e5bee5ac82ed6a04b5",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Guatemala_Casi_Cielo_250GR.jpg": "7a2789f695f04dd22420f1a593d6c7c0",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Salted_Pretzel_Cocoa_Oatmilk_Latte.jpg": "2173aa74e13b0fee7aeb0facc67f9b38",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/New!_Starbucks_3_x_250_ml.jpg": "b2e53e2903d3d252a2b922609601e18e",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Special_2L_Hanya_129K!!.jpg": "d403499f03b504885924ae433fa6e077",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/New_York_Cheese_Cake.jpg": "02b0e3131b71d5e1dc88b205427ea6fb",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/1_Iced_Signature_Chocolate_+_1_Iced_Asian_Dolce_Latte.jpg": "e3df37507b7248d7a5e47edfb09a6763",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Toffee_Nut_Crunch_Coffee_Frappuccino.jpg": "9cca1b9f0ac97d8ea9590501bcae546d",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Bundles_Bertiga_A.jpg": "fccd67e444e103f31f95b82264bf68d4",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Vanilla_Latte.jpg": "4c0ec5611632b923704750c518088584",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Classic_Dark_Chocolate_Cake.jpg": "6d0e7e6e4c0dcb5c8500e6947bb320fc",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Smoked_Beef_Quiche.jpg": "aa21c0f5932d31494ea96bc9263e10cd",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Cold_Brew_Coffee_With_Lemonade.jpg": "2e8a1b5dcd279c7e855ba432b4c17184",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Hazelnut_Signature_Chocolate.jpg": "e83b7dfd2eb5f0317514f56f81bafee1",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Ovomaltine_Milk_Bun.jpg": "89a5b4ff7aadd94c7a54eeb3e19a862f",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Bundles_Bertiga_B.jpg": "f251968079ac6d96e7665cb77e23996c",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Cookies.jpg": "f713cc2947600a47bc67770313e48e60",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Double_Shot_Ice_Shaken_Espresso_(10oz).jpg": "763447feaa2cc91a35b73470d9535871",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Ovomaltine_Croissant_Twist.jpg": "5f4ae0435d3600de389477fe44889d48",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caramel_Chocochip_Affogato-Style_Frappuccino.jpg": "ff50736c512e2a01c90c9599616a2d13",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Iced_Choco-Nut_Delight_Latte.jpg": "c4711e140f0bb8db753a3bdd40715540",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Spunbond_Small_&_Large.jpg": "5c5f2daf485079de839c2e1eb823bcf0",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Peanut_Butter_Panini_Sandwich.jpg": "f633a40bcde9e764d50f8708f523e24a",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Butter_Croissant.jpg": "3f8f68852ee142dfaf6897c8abaad33c",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Disney_2024_Collection.jpg": "910ae391f2aacaf5d3aac0c566174177",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/VIA_Black_Coffee.jpg": "5351c7c53b4bcca6aa6e932003740309",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Bundles_Berempat_B.jpg": "1a904e19438a9f75e355d6a30594c7a6",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Ovomaltine_Cheesecake.jpg": "8239a5b5af7f847b56de8cc882068395",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Peppermint_Mocha_Coffee_Frappuccino.jpg": "9bff6ba761948b475b068ba8eb61812b",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caramel_Cream_Frappuccino.jpg": "3e9b4d2cc29fefa3f5d03f2c8f18d090",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/1_Iced_Salted_Caramel_Macchiato_+_1_Caramel_Cream_Frappuccino.jpg": "f1554b2ababe3f9cefab97f739303588",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/1_Liter_Bottled_Coffee_Beverage.jpg": "da96f287cb25f79b7271c740505360e9",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Iced_Salted_Pretzel_Cocoa_Oatmilk_Latte.jpg": "0468106135c36fb3edefdb8d2b1410b3",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Vanilla_Sweet_Cream_Cold_Brew.jpg": "b8612defae051443e48cdd88e5da282c",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Honduras_Marcala_250GR.jpg": "42d0f6f64a2d519e6b9f8f5a66406eb7",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Bundles_Berempat_A.jpg": "3d206dc6efaa64a59679144c4bb3f91c",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Dark_Mocha_Frappuccino.jpg": "4b8f9a0eccfc11e0eff9728166a3e048",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Salted_Caramel_Latte.jpg": "5953931e787e131b38f2ff736aa4fbb2",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Cold_Brew.jpg": "313c32e5aa4ee6d5221f2a2948cb4103",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Creamy_Earl_Grey_Tea_Latte.jpg": "af66df72eda9247410dd699f3418cb1f",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Teavana_Ice_Tea.jpg": "4da0031d2e66076f223a2e546ec689e7",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Toffee_Nut_Crunch_Latte.jpg": "85c21068f51ddf45a0517c31a0a30db5",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Mango_Passion_Frappuccino.jpg": "b20a77b8ca68af6bd886abd528bdf177",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Salted_Caramel_Macchiato.jpg": "36d7ba58c82e933a7b89244bdcda9152",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Starbucks_X_Purana.jpg": "3d73ea8f466ec053c4564b5a29f3db5c",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Packaged_Teas_(12_full-leaf_bags).jpg": "1a931334a3070a4570a16c29df1ad377",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/LUNCH_(_Selected_food_+_Iced_Shaken_Lemonade_Americano_%250A________________________Latte,_tall_size).jpg": "957055375663d93610909db45a536267",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Iced_Raspberry_Candy_Milk.jpg": "458646e4b9e16714b84d7d5cf4ea4ca0",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Signature_Chocolate.jpg": "e83b7dfd2eb5f0317514f56f81bafee1",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Almond_Croissant.jpg": "4d2ed2b2ebd38226823cb2aa083a7079",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caffe_Mocha.jpg": "904b544645bb2d69d708137d22694501",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Vanilla_Cream_Frappuccino.jpg": "722005f34d9e7e07d011639f1c49ad02",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Americano_+_VIA_Italian_Roast__Colombia.jpg": "89c10adcd4f17132a1cfe52572ee026f",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caramel_Java_Chip_Frappuccino.jpg": "c6cf4fb5b8779e40c8806cdba54a652f",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Espresso_Brownies.jpg": "872257bc7dee7aec2f0c508df53fd3f7",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Cinnamon_Rolls.jpg": "0bd88a04e95a3ae60da4602ba1182044",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Whole_Bean_Medium_Roast_250_gr.jpg": "b2eff604734af8c6019c417723383d90",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Chocolate_Croissant.jpg": "b0cc631f44d7f0a891cc3df177612c8a",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Raspberry_Blackcurrant_Frappuccino.jpg": "e2ba1397785064d8df7e68c5df8143ed",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Via_Red_Velvet.jpg": "3713df86da517c4c1894aee2defdc216",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Choco-Nut_Delight_Latte.jpg": "6539fbd47485aa52413a45a11caea47e",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Classic_Tuna_Toastie.jpg": "61d20ebaaf0975eeac0fee06c0c1d1bb",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Americano.jpg": "313c32e5aa4ee6d5221f2a2948cb4103",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Iced_Toffee_Nut_Crunch_Latte.jpg": "1e9940f1c598d8e24d9e461f10b7d2e0",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caramel_Macchiato.jpg": "274e8099676a0b366f3d568a6a42371b",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Translucent_&_Green_Collection.jpg": "01e23153271e277ae00b5172584cf48c",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Beef_Filone_Sandwich.jpg": "afb3a11d89577372db340e81d2942fbb",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Peppermint_Mocha_Cream_Frappuccino.jpg": "9bff6ba761948b475b068ba8eb61812b",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Peppermint_Mocha.jpg": "558d92bebd27b716fa7f76514a7dba97",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Java_Chip_Frappuccino.jpg": "2489af0fa362c5e770a8b8b4c9cef43b",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Mocha_Frappuccino.jpg": "9eee2f86cf77e6e8af9fb255fa6e941c",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Ice_Shaken_Lemonade_Tea.jpg": "4884aa38ecb07150cb9251e6fe375cb8",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Cappuccino.jpg": "ba99af70209883c4191d0fe5d1781e76",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/COFFEE_BREAK_(_Selected_food_+_Americano__Latte,_tall_size).jpg": "80887f11903781e5bee5ac82ed6a04b5",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caramel_Macchiato_Frappuccino.jpg": "53ad9640f7cd8556ec6ba4f9eee7a8a0",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Coffee_Frappuccino.jpg": "dcab992a0e7ede9ccb79fb9d5f1f6c40",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Bundles_Berdua.jpg": "8841530ab4c5ee91aca02a212435f9bb",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Iced_Peppermint_Mocha.jpg": "5a0a0b8dd12a90b736620d92276db549",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Salted_Pretzel_Cocoa_Oatmilk_Cream_Frappuccino.jpg": "1251cff2ff02f23c1158a8ed7f4e11b9",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Iced_Dolce_Caramel_Otr_Americano.jpg": "bffc2c0d5404e3de204e7c2e0f6af007",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/1_Liter_Bottled_Non_Coffee_Beverage.jpg": "aa153b5b73edf69cebbcba96cefc436b",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Toffen_Nut_Chrunch_Cream_Frappuccino.jpg": "84582f9b2806d5bd763610970fc60b0d",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Ovomaltine_Wassant_Bread.jpg": "60e95c520d61f16e96296450a399a8d7",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Tumbler_Bag_Charcoal_Daze.jpg": "606cca55e4ee5c83bba8f95d0ffa273a",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caramel_Latte.jpg": "4c0ec5611632b923704750c518088584",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/LUNCH_(_Selected_food_+_Iced_Shaken_Lemonade_Americano__Latte,_tall_size).jpg": "957055375663d93610909db45a536267",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Salted_Caramel_Javachip_Frappuccino.jpg": "5fef7b9ae9b9239476cec358f8f57381",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Asian_Dolce_Latte.jpg": "27bc1904bbe69dd92d720b7ae5c82681",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Iced_Nutty_Cinnamon_Oatmilk_Latte.jpg": "cd74d3e0dd92f9cd9aaa483e1b168428",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Ovomaltine_Cake_Pops.jpg": "4fec5abc164b5000cb4d46c7bddd5144",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/VIA_Flavored_Coffee.jpg": "e453f46bc928b254c366a2f563ebf955",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caramel_Signature_Chocolate.jpg": "e83b7dfd2eb5f0317514f56f81bafee1",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Charcoal_Daze_Edition.jpg": "253a21b33c5061b23fc4889589bd5f68",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Nutty_Cinnamon_Oatmilk_Latte.jpg": "be07a24a24f461a31af54f829921ac01",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Teavana_Tea_(Tea_Bag).jpg": "91e1fdfd28536d0c8449fdc1d2411325",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/1_Java_Chip_Frappuccino_+_1_Iced_Asian_Dolce_Latte.jpg": "960396e69ccd71881cd13ab5d3083478",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Grab_&_Go.jpg": "68e97dcd9b55400c82344a941a1916dc",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Starbucks_New_Greens_B.jpg": "b15710fc46664b9a83aa6f60f3c40616",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Greentea_Cream_Frappuccino.jpg": "20efa4892312535e509c2454b5be1406",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Salted_Pretzel_Cocoa_Oatmilk_Coffee_Frappuccino.jpg": "acf713cfb63a6794d5e8a435e9398713",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Brown_Sugar_Oatmilk_Iced_Shaken_Espresso.jpg": "06370b7d3a4f7586fc5743a37fbf647e",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Starbucks_New_Greens_A.jpg": "112bf522e1b4aafc6678dddab78db045",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Double_Chocolate_Cream_Frappuccino.jpg": "06be46f7bbded9db6d16d630935c86cd",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/1_Iced_Green_Tea_Latte_+_1_Caramel_Cream_Frappuccino.jpg": "4475054b1e3ca6072d3dfde885fe9abd",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Evening_Family_Set.jpg": "177b57eb475e6a5637e3d17f27d0004a",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Hazelnut_Latte.jpg": "4c0ec5611632b923704750c518088584",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caramel_Frappuccino.jpg": "3de2a98014c1a973054486e21824b131",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Tuna_Cheese_Oat_Panini.jpg": "3b0ddfa722b8ce7eab537942b701dfd4",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Smoked_Beef_Mushroom_&_Cheese_Panini.jpg": "b54a467a33b68eab29917ce322863554",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Caffe_Latte.jpg": "4c0ec5611632b923704750c518088584",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/1_Iced_Salted_Caramel_Macchiato_+_1_Caramel_Cream%250A________________________Frappuccino.jpg": "f1554b2ababe3f9cefab97f739303588",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Cheese_Quiche.jpg": "efdeda0c7fef8e1f66d7ec5f76118ee9",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Raisin_Oatmeal_Scones.jpg": "1d41dd1f6aabbe2b7b93421067314f8f",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Whole_Bean_Blonde___Golden_Roast_250gr.jpg": "b0d22ae9e446ce9cd4b4fb218a867fa5",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Iced_Creamy_Earl_Grey_Tea_Latte.jpg": "42b588f92fa17662625db1b21ce8d9b9",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/New!_Starbucks_6_x_250_ml.jpg": "31c5316c9e05780814297a6ad65d14dc",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Scarlet_Velvet_Cake.jpg": "ec12e00bab7131031b21fff7fa542064",
"assets/assets/images/Starbucks_Plaza_Sentral/foods/Whole_Bean_Dark_Roast_250_gr.jpg": "c5b8c3fb8cf30d333f105d6c50194a96",
"assets/assets/images/KFC_Teras_Benhil/foods/Mango_Float.jpg": "a8168e84ce86fc017cb2a0fe17000c4c",
"assets/assets/images/KFC_Teras_Benhil/foods/Add_On_Sambal_Bawang.jpg": "bdc4c8444b1772e538a8a5341a39cfea",
"assets/assets/images/KFC_Teras_Benhil/foods/Iced_Chocolate_Float_Nescafe.jpg": "8fbf9c1d2d7fdbf0ffd717351a37f18d",
"assets/assets/images/KFC_Teras_Benhil/foods/KFC_Noodle_Spicy.jpg": "7801956bd1955c57e289934c4a1f92bc",
"assets/assets/images/KFC_Teras_Benhil/foods/Oriental_Don.jpg": "9188f57543651d9ed9786ec27c58f20b",
"assets/assets/images/KFC_Teras_Benhil/foods/Cream_Soup.jpg": "da301c8f6cda4d62db7a282da810b78e",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Family_Special.jpg": "06ea9e7c6bb52ce9a16769d533d20d0e",
"assets/assets/images/KFC_Teras_Benhil/foods/Tote_Bag.jpg": "216920b399ecbd827c0005c760dea100",
"assets/assets/images/KFC_Teras_Benhil/foods/Cream_Puff_1_Pcs.jpg": "341b7d9471594bceaa520f512a3b4aae",
"assets/assets/images/KFC_Teras_Benhil/foods/Chick_Ball_BBQ.jpg": "d8c158ed279f86ed55e78a91202cf57f",
"assets/assets/images/KFC_Teras_Benhil/foods/Coca_Cola.jpg": "47302aaddab24984a9196ff10d363c11",
"assets/assets/images/KFC_Teras_Benhil/foods/Combo_Latte_1.jpg": "9166bb88e4ac60c2f382026a1e8b33ef",
"assets/assets/images/KFC_Teras_Benhil/foods/Ice_Latte_Nescafe.jpg": "5879aed81f7e7bc1d0e295a5a0020b49",
"assets/assets/images/KFC_Teras_Benhil/foods/Jagoan_Hemat_1.jpg": "77886a0878638c9a457e61eb659902dc",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Besar_New_1.jpg": "fd87e0cef33b1dc04cb05aa2970501fd",
"assets/assets/images/KFC_Teras_Benhil/foods/KFC_Noodle_Extra_Spicy.jpg": "1a59781cb1138264fd419e50477884e0",
"assets/assets/images/KFC_Teras_Benhil/foods/KFC_Noodle.jpg": "cb73fbcacc7fa8b0607d4b00ba08a5f0",
"assets/assets/images/KFC_Teras_Benhil/foods/Combo_Latte_2.jpg": "9120bebc39100bb8cd0411c526281668",
"assets/assets/images/KFC_Teras_Benhil/foods/Perkedel.jpg": "9a6348f097bdd8eb699948b055f5efcd",
"assets/assets/images/KFC_Teras_Benhil/foods/Jagoan_Hemat_2.jpg": "f8f3e5a2e9a97c685d7bb3899a816621",
"assets/assets/images/KFC_Teras_Benhil/foods/KFC_Soup.jpg": "4db3abcc84d5fc9209546cf7ecd78124",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Besar_New_2.jpg": "17ae6e067d3c826e49f5c040961de1ed",
"assets/assets/images/KFC_Teras_Benhil/foods/Kombo_OR_Burger_Single.jpg": "6bcc112b1ba772871c21dbb488f8a589",
"assets/assets/images/KFC_Teras_Benhil/foods/Triple_Treat.jpg": "41e99b1ea8703a1f469a92a3a141fcb7",
"assets/assets/images/KFC_Teras_Benhil/foods/Pudding.jpg": "58cb778bda91c5d9227817b786355267",
"assets/assets/images/KFC_Teras_Benhil/foods/Lovlychee_Float.jpg": "c0447722fff6ad92fe0c090bd9d628ed",
"assets/assets/images/KFC_Teras_Benhil/foods/Spaghetti_deluxe.jpg": "5fe44d6d6a200a2986a9d1881954aab4",
"assets/assets/images/KFC_Teras_Benhil/foods/French_Fries_Large.jpg": "1c0fc77baad3964f17c6c1c246b7e013",
"assets/assets/images/KFC_Teras_Benhil/foods/Kombo_Colonel_Burger.jpg": "33c827174cd4527e94ae6eec0cbde664",
"assets/assets/images/KFC_Teras_Benhil/foods/French_Fries_Reguler.jpg": "0f6c3a161709c1cb0431dc58b8f80f70",
"assets/assets/images/KFC_Teras_Benhil/foods/Fanta_Float.jpg": "0bf998004ca243c680739aec841a6f7e",
"assets/assets/images/KFC_Teras_Benhil/foods/KFC_Noodle_+_Egg.jpg": "bf7635c24cd12d3c68d3c6c4c1bd36cc",
"assets/assets/images/KFC_Teras_Benhil/foods/Zero_Rejection.jpg": "9efc5eb6615dd91efaaa7ffef0e7acb0",
"assets/assets/images/KFC_Teras_Benhil/foods/Twisty.jpg": "cc89de969b3b72e88e2f0321b3c1147f",
"assets/assets/images/KFC_Teras_Benhil/foods/5_Pcs_Cream_Puff.jpg": "e2280614a4810092d301d3dc5683df4b",
"assets/assets/images/KFC_Teras_Benhil/foods/LDR_Package.jpg": "e49ea5a794b1fcd418533e9a571ad441",
"assets/assets/images/KFC_Teras_Benhil/foods/1_Pc_Chicken.jpg": "ea16504300533f1a0287ba1059166ce3",
"assets/assets/images/KFC_Teras_Benhil/foods/Coca_Cola_Zero_Medium.jpg": "4041578803fdd8142b6c919f489468ac",
"assets/assets/images/KFC_Teras_Benhil/foods/Ice_Cappuccino_Float.jpg": "5c2491bb09d20414ab9fe524a3cc7327",
"assets/assets/images/KFC_Teras_Benhil/foods/Colonel_Burger.jpg": "8b9c9f9c7389ac1ad65ccce14b235332",
"assets/assets/images/KFC_Teras_Benhil/foods/OR_Burger_Single.jpg": "8799b83d41e4d8a71de1b1d7b94de557",
"assets/assets/images/KFC_Teras_Benhil/foods/Hot_Chocolate_Nescafe.jpg": "b5c3b0334c05f2edc124a0dab56d2952",
"assets/assets/images/KFC_Teras_Benhil/foods/Cream_Puff_2_Pcs.jpg": "dd9a89f55eb30217ce4dece1012e5f5a",
"assets/assets/images/KFC_Teras_Benhil/foods/Ice_Coffee_Nescafe.jpg": "82340ae4d3fea81af9a54df4f1657f43",
"assets/assets/images/KFC_Teras_Benhil/foods/9Pcs_Bucket_F_Voucher_VGZ.jpg": "5dfa9aa4bbc95d399376f5cbe04779ca",
"assets/assets/images/KFC_Teras_Benhil/foods/Float_Festive.jpg": "53feca3d8800ef7488a44006bedd6567",
"assets/assets/images/KFC_Teras_Benhil/foods/Cola_Float.jpg": "aa3934aaaa26a218af23d8c11723fc26",
"assets/assets/images/KFC_Teras_Benhil/foods/Snack_Bucket_BBQ_1.jpg": "e3efe4290770b5774e0745c0017f86e9",
"assets/assets/images/KFC_Teras_Benhil/foods/Don_Series_With_Egg.jpg": "9e2065b1526fd3278c5cc5e699537119",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Star_Combo_1.jpg": "5fb376c7354a0d745c124495f08726c3",
"assets/assets/images/KFC_Teras_Benhil/foods/Sprite.jpg": "5a1fbcb8a1acf58f1faa4aa602cf8174",
"assets/assets/images/KFC_Teras_Benhil/foods/OR_Burger_Double.jpg": "54c4a41776a224bbb67db8c5f2128f9c",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Star_Combo_3.jpg": "51cfeb9e7ba67e5a0740442c2d46dd10",
"assets/assets/images/KFC_Teras_Benhil/foods/Snack_Bucket_BBQ_2.jpg": "e3efe4290770b5774e0745c0017f86e9",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Star_Single.jpg": "baa19bde46e7daa3842219e4c388aba4",
"assets/assets/images/KFC_Teras_Benhil/foods/Fanta.jpg": "e172680c7df51ecbc6d43ae4538a7843",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Star_Combo_2.jpg": "d3bde8e1e839b376fe4941e3689c90bb",
"assets/assets/images/KFC_Teras_Benhil/foods/Yakiniku_Don.jpg": "b8d9379e51523de2502bbe6904bc28e0",
"assets/assets/images/KFC_Teras_Benhil/foods/Breakfast_Combo_2.jpg": "452348faa0f36d21cf8af1ac1aac576f",
"assets/assets/images/KFC_Teras_Benhil/foods/Winger_BBQ.jpg": "a5d39327f2b19bc0b8ae02de8d5daa27",
"assets/assets/images/KFC_Teras_Benhil/foods/Rice.jpg": "993a58d823cfbe2bf5b0f1ce19500c4b",
"assets/assets/images/KFC_Teras_Benhil/foods/Jagoan_Puas_1.jpg": "fc95dca72ce45c04ba1fd47fde88baac",
"assets/assets/images/KFC_Teras_Benhil/foods/Fun_Fries.jpg": "722f46508753134089bd349874575697",
"assets/assets/images/KFC_Teras_Benhil/foods/KFC_Winger.jpg": "7afedf139cfce4956643958b7e829c38",
"assets/assets/images/KFC_Teras_Benhil/foods/Mineral_Water.jpg": "c60faf02de148fba51864185a6160e95",
"assets/assets/images/KFC_Teras_Benhil/foods/Telur_Dadar.jpg": "fcf07950ef78dd35ef52469c90e37712",
"assets/assets/images/KFC_Teras_Benhil/foods/Mocha_Float.jpg": "d3e260bd1864ee45c359cffc9ea72178",
"assets/assets/images/KFC_Teras_Benhil/foods/Winger_Bucket_Promo.jpg": "6c021c966ba83c2b06ba66766141f23b",
"assets/assets/images/KFC_Teras_Benhil/foods/Breakfast_Combo_1.jpg": "f388af1962705c58e19b5490dfd1940d",
"assets/assets/images/KFC_Teras_Benhil/foods/Kombo_Fish_Burger.jpg": "ee790bd1cd59ae3b3ce0305c21bb8704",
"assets/assets/images/KFC_Teras_Benhil/foods/Jagoan_Puas_2.jpg": "0bd4344f6bcaa70fbe4e2d76704e5429",
"assets/assets/images/KFC_Teras_Benhil/foods/Kombo_OR_Burger_Double.jpg": "cb0208c166d17d7f60715f51fbdbe8f6",
"assets/assets/images/KFC_Teras_Benhil/foods/Spaghetti_Supreme.jpg": "bfdb2972115c6f2e6691178ed3111559",
"assets/assets/images/KFC_Teras_Benhil/foods/Kombo_Crispy_Burger.jpg": "9c851405cbddadbdbca669ca4a9284f0",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Komplit_4.jpg": "710a40c20cc58823a5d56f6335e85dfd",
"assets/assets/images/KFC_Teras_Benhil/foods/Crispy_Strips.jpg": "9c425a5ffab4234d12a116b5e48b8fc5",
"assets/assets/images/KFC_Teras_Benhil/foods/Sprite_Float.jpg": "9f13b6d88f8e1e94006748b4fd5a908c",
"assets/assets/images/KFC_Teras_Benhil/foods/IM_Sorry_IM_Wrong.jpg": "dde48682e5c72cd016563997e0cea05d",
"assets/assets/images/KFC_Teras_Benhil/foods/Crispy_Burger.jpg": "d9c347a7be772845ec095038cc5a877e",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Komplit_3.jpg": "2da2f90b62524fccec0e413ec282cc19",
"assets/assets/images/KFC_Teras_Benhil/foods/Ice_Cappucino_Nescafe.jpg": "c5132a6112ebc9541706f9cfa9b28b6d",
"assets/assets/images/KFC_Teras_Benhil/foods/Yubari_Float.jpg": "ca2f3d2d74dec4218c01035d82605f3e",
"assets/assets/images/KFC_Teras_Benhil/foods/Fish_Burger.jpg": "7e1c18bfa1d418a2121a7786bd59d7f0",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Komplit_2.jpg": "3f3b87aaffa6ca69bd35fa40c6982560",
"assets/assets/images/KFC_Teras_Benhil/foods/Super_Komplit_1.jpg": "8c2d6537d73a2df09b5cf9b977902d0a",
"assets/assets/images/adds/add_04.jpg": "9f0a4aafadc7a3230e61b837a1a86925",
"assets/assets/images/adds/add_01.jpg": "f239db906c4a34816816cbc656cf00f2",
"assets/assets/images/adds/add_03.jpg": "b48e9039a6352115509254dbe42280e9",
"assets/assets/images/adds/add_02.jpg": "e4199337734ca92640e3260b0c2f4144",
"assets/assets/images/starbucks.webp": "5ea1c079cb975d88366e5b86b9182c75",
"assets/assets/fonts/Inter_24pt-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/Inter_24pt-Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
