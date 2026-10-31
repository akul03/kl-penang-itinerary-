export interface Dish {
  id: string
  name: string
  aka: string
  meat: string
  description: string
  looksLike: string
  taste: string
  orderTip: string
  wikimediaQuery: string
  searchQuery: string
}

export const dishes: Dish[] = [
  {
    "id": "char-koay-teow",
    "name": "Char Koay Teow",
    "aka": "CKT, fried flat rice noodles",
    "meat": "chicken/seafood (ask no cockles/pork)",
    "description": "Flat rice noodles stir-fried over high flame with egg, prawns, cockles, bean sprouts and chives in a smoky soy-chilli sauce.",
    "looksLike": "Glossy dark-brown wok-fried noodles with pink prawns and green chives.",
    "taste": "Smoky 'wok hei', savoury-sweet, mild heat.",
    "orderTip": "Ask for 'no cockles, no lap cheong (pork sausage)' — still great with just prawn + egg.",
    "wikimediaQuery": "Char kway teow",
    "searchQuery": "Penang char koay teow"
  },
  {
    "id": "assam-laksa",
    "name": "Assam Laksa",
    "aka": "Penang sour fish noodle soup",
    "meat": "fish-based (no beef/pork)",
    "description": "Thick rice noodles in a tangy mackerel-and-tamarind broth topped with mint, pineapple, onion, cucumber and a dab of shrimp paste.",
    "looksLike": "Cloudy pink-brown soup, chunky noodles, bright veg garnish.",
    "taste": "Sour, fishy-umami, refreshing, mildly spicy.",
    "orderTip": "Naturally no beef/pork — good pick. Say less shrimp paste if you want it milder.",
    "wikimediaQuery": "Assam laksa",
    "searchQuery": "Penang assam laksa"
  },
  {
    "id": "nasi-lemak",
    "name": "Nasi Lemak",
    "aka": "coconut rice plate",
    "meat": "pick chicken",
    "description": "Fragrant coconut rice with sambal, fried anchovies, peanuts, cucumber and a boiled/fried egg; add fried chicken (ayam goreng) or rendang.",
    "looksLike": "Mound of white rice, red sambal, crispy anchovies, egg.",
    "taste": "Creamy rice + sweet-spicy sambal + crunchy sides.",
    "orderTip": "Order 'nasi lemak ayam goreng' (fried chicken) + extra egg.",
    "wikimediaQuery": "Nasi lemak",
    "searchQuery": "nasi lemak ayam goreng"
  },
  {
    "id": "shawarma",
    "name": "Shawarma",
    "aka": "Arab wrap",
    "meat": "pick chicken",
    "description": "Spit-roasted meat shaved into a flatbread with garlic sauce, pickles and salad, rolled and often toasted.",
    "looksLike": "Grilled wrap cut in half, meat + white sauce inside.",
    "taste": "Savoury, garlicky, juicy.",
    "orderTip": "Order the chicken shawarma (skip beef). Add extra garlic sauce.",
    "wikimediaQuery": "Shawarma",
    "searchQuery": "chicken shawarma wrap"
  },
  {
    "id": "ramly-burger",
    "name": "Ramly Burger",
    "aka": "Malaysian street burger",
    "meat": "pick chicken",
    "description": "Griddled patty wrapped in a thin fried egg 'blanket', slathered with sauces and margarine, in a toasted bun — a Malaysian street-stall icon.",
    "looksLike": "Egg-wrapped patty bulging out of a squashed toasted bun.",
    "taste": "Rich, eggy, saucy, messy-good.",
    "orderTip": "Ask for the 'chicken special' (egg-wrapped). Cash.",
    "wikimediaQuery": "Ramly burger",
    "searchQuery": "Ramly burger special chicken"
  },
  {
    "id": "roti-canai",
    "name": "Roti Canai",
    "aka": "flaky flatbread + curry",
    "meat": "veg (dhal) / chicken curry",
    "description": "Flaky, stretched-and-folded griddled flatbread served with dhal and curry dips.",
    "looksLike": "Golden crispy folded bread with little bowls of curry.",
    "taste": "Buttery, crisp outside, soft inside; curry adds spice.",
    "orderTip": "Get it with dhal (veg) or chicken curry — skip beef gravy.",
    "wikimediaQuery": "Roti canai",
    "searchQuery": "roti canai dhal curry"
  },
  {
    "id": "mon-roti",
    "name": "Chinese Beef Roti (chicken option)",
    "aka": "fried stuffed roti",
    "meat": "pick chicken",
    "description": "Crisp pan-fried spiral roti stuffed with spiced minced filling and scallion — the Jalan Bukit Bintang specialty.",
    "looksLike": "Golden flaky coil, crisp edges.",
    "taste": "Crunchy, savoury, cumin-scented.",
    "orderTip": "Order the chicken roti (RM5.50) instead of the beef one.",
    "wikimediaQuery": "Chinese meat pie bing",
    "searchQuery": "Mon Chinese beef roti KL"
  },
  {
    "id": "curry-laksa",
    "name": "Curry Laksa (Curry Mee)",
    "aka": "coconut curry noodle soup",
    "meat": "pick chicken, ask no pork",
    "description": "Noodles in a rich coconut-curry broth with tofu puffs, bean sprouts, and your choice of toppings.",
    "looksLike": "Orange creamy soup, tofu puffs, noodles.",
    "taste": "Creamy, spiced, comforting (different from sour assam laksa).",
    "orderTip": "Choose chicken + tofu; ask no pork/pig-blood.",
    "wikimediaQuery": "Curry laksa",
    "searchQuery": "curry mee Penang"
  },
  {
    "id": "hokkien-mee",
    "name": "Penang Hokkien Mee (Prawn Mee)",
    "aka": "har mee",
    "meat": "prawn/pork broth (ask)",
    "description": "Noodles in a deep prawn-and-pork-bone broth topped with prawns, egg and fried shallots.",
    "looksLike": "Reddish-brown broth, prawns on top.",
    "taste": "Intense prawn umami, peppery.",
    "orderTip": "It's prawn+pork stock by default — if you avoid pork, this one's hard to modify; pick CKT or wan tan mee instead.",
    "wikimediaQuery": "Hokkien mee",
    "searchQuery": "Penang prawn mee hokkien mee"
  },
  {
    "id": "wan-tan-mee",
    "name": "Wan Tan Mee",
    "aka": "wonton noodles",
    "meat": "pick chicken/shrimp wonton",
    "description": "Springy egg noodles tossed in a light sauce with wontons and greens (dry or soup).",
    "looksLike": "Glossy thin noodles, dumplings, leafy greens.",
    "taste": "Savoury, springy, light.",
    "orderTip": "Ask for chicken/shrimp wontons, 'no char siew (pork)'.",
    "wikimediaQuery": "Wonton noodles",
    "searchQuery": "wan tan mee Malaysia"
  },
  {
    "id": "chicken-rice",
    "name": "Hainanese Chicken Rice",
    "aka": "nasi ayam",
    "meat": "chicken",
    "description": "Poached/roast chicken with fragrant rice cooked in chicken stock, chilli-ginger sauce on the side.",
    "looksLike": "Sliced chicken + glossy rice + dipping sauces.",
    "taste": "Clean, savoury, comforting.",
    "orderTip": "Safe no-beef/no-pork pick. Roast version if you like crispy skin.",
    "wikimediaQuery": "Hainanese chicken rice",
    "searchQuery": "Hainanese chicken rice"
  },
  {
    "id": "claypot-chicken-rice",
    "name": "Claypot Chicken Rice",
    "aka": "",
    "meat": "chicken",
    "description": "Rice cooked in a clay pot with chicken, soy and (usually) sausage until a crispy crust forms at the bottom.",
    "looksLike": "Dark clay pot, rice with chicken + dark soy glaze.",
    "taste": "Smoky, caramelised, savoury.",
    "orderTip": "Ask 'no lap cheong (pork sausage)' if you want chicken only.",
    "wikimediaQuery": "Claypot chicken rice",
    "searchQuery": "claypot chicken rice"
  },
  {
    "id": "ban-mee",
    "name": "Ban Mee",
    "aka": "pan mee, handmade noodle soup",
    "meat": "light / chicken",
    "description": "Handmade wheat noodles in a clear anchovy broth with minced meat, mushrooms, veg and a poached egg.",
    "looksLike": "Clear soup, flat noodles, egg, greens.",
    "taste": "Light, savoury, homey.",
    "orderTip": "Light and soupy — ask chicken mince / no pork.",
    "wikimediaQuery": "Pan mee",
    "searchQuery": "ban mee pan mee soup"
  },
  {
    "id": "rojak",
    "name": "Penang Rojak",
    "aka": "fruit & veg salad",
    "meat": "veg (has shrimp paste)",
    "description": "Crunchy fruit and veg tossed in a thick sweet-savoury prawn-paste sauce with peanuts.",
    "looksLike": "Dark glossy fruit chunks, peanut sprinkle.",
    "taste": "Sweet, tangy, funky, crunchy.",
    "orderTip": "Veg but contains shrimp-paste sauce — skip if you want strictly no seafood.",
    "wikimediaQuery": "Rojak",
    "searchQuery": "Penang rojak"
  },
  {
    "id": "pasembur",
    "name": "Pasembur",
    "aka": "Indian rojak",
    "meat": "veg + fritters",
    "description": "Shredded veg, tofu, boiled egg and crispy fritters doused in a sweet-spicy nutty sauce.",
    "looksLike": "Plate of fritters + veg under orange sauce.",
    "taste": "Sweet-spicy, crunchy.",
    "orderTip": "Mostly veg/fritters — easy light pick.",
    "wikimediaQuery": "Pasembur",
    "searchQuery": "pasembur Indian rojak Penang"
  },
  {
    "id": "chee-cheong-fun",
    "name": "Chee Cheong Fun",
    "aka": "rice noodle rolls",
    "meat": "veg (shrimp-paste sauce in Penang)",
    "description": "Steamed silky rice-noodle rolls; Penang-style is served with sweet prawn-paste sauce and sesame.",
    "looksLike": "White rolled noodles under dark sauce + sesame.",
    "taste": "Soft, savoury-sweet.",
    "orderTip": "Light and mostly meatless (sauce has shrimp paste).",
    "wikimediaQuery": "Chee cheong fun",
    "searchQuery": "Penang chee cheong fun"
  },
  {
    "id": "cendol",
    "name": "Cendol",
    "aka": "",
    "meat": "veg/dessert",
    "description": "Shaved ice with coconut milk, palm-sugar syrup, green rice-flour jelly and red beans.",
    "looksLike": "Ice mound, green jelly worms, brown syrup.",
    "taste": "Sweet, creamy, cooling.",
    "orderTip": "Perfect hot-day dessert. Veg.",
    "wikimediaQuery": "Cendol",
    "searchQuery": "Penang cendol"
  },
  {
    "id": "ice-kacang",
    "name": "Ice Kacang (ABC)",
    "aka": "air batu campur",
    "meat": "veg/dessert",
    "description": "Mountain of shaved ice over beans, jelly and corn, drizzled with colourful syrups and condensed milk.",
    "looksLike": "Rainbow syrup over a big ice mound.",
    "taste": "Sweet, icy, fun.",
    "orderTip": "Veg dessert, great to share.",
    "wikimediaQuery": "Ais kacang",
    "searchQuery": "ice kacang ABC Malaysia"
  },
  {
    "id": "kaya-toast",
    "name": "Kaya Toast + Soft-Boiled Eggs",
    "aka": "kopitiam breakfast set",
    "meat": "veg",
    "description": "Toasted bread with coconut-egg jam (kaya) and butter, served with runny soft-boiled eggs and kopi.",
    "looksLike": "Toast halves + two runny eggs in a saucer.",
    "taste": "Sweet, buttery, with savoury eggs (add soy + pepper).",
    "orderTip": "Classic cheap breakfast, veg.",
    "wikimediaQuery": "Kaya toast",
    "searchQuery": "kaya toast soft boiled eggs kopitiam"
  },
  {
    "id": "oyster-omelette",
    "name": "Oyster Omelette (O-Chien)",
    "aka": "",
    "meat": "seafood",
    "description": "Starchy egg omelette fried with small oysters until crisp-edged.",
    "looksLike": "Gooey-crisp egg pancake with oysters.",
    "taste": "Savoury, eggy, briny.",
    "orderTip": "Seafood — skip if avoiding shellfish.",
    "wikimediaQuery": "Oyster omelette",
    "searchQuery": "Penang oyster omelette o chien"
  }
]

export const getDish = (id: string): Dish | undefined => dishes.find(d => d.id === id)
