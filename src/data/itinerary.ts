export type Category = 'travel' | 'food' | 'sight' | 'nightlife' | 'shopping' | 'stay'

export interface Stop {
  time: string
  title: string
  category: Category
  summary: string
  whatsGood?: string
  whatToEat?: string
  notes?: string
  warn?: string
  address?: string
  mapsUrl?: string
  dishes?: string[]
}

export interface Day {
  n: number
  date: string
  label: string
  stops: Stop[]
}

export interface Stay {
  name: string
  address: string
  mapsUrl: string
}

export interface Trip {
  title: string
  subtitle: string
  travellers: string
  stays: Stay[]
  bookings: string[]
}

export const trip: Trip = {
  title: 'KL + Penang',
  subtitle: 'Malaysia · 4–9 Nov 2026',
  travellers: 'Akul, Abhijna & Shivaarth (3)',
  stays: [
    { name: 'Legasi @ Kampung Bharu (KL, 4–6 Nov)', address: 'Jalan Raja Muda Musa, Kampung Baru, 50300 Kuala Lumpur', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Legasi%20Kampung%20Bharu%20Jalan%20Raja%20Muda%20Musa%20Kuala%20Lumpur' },
    { name: 'Seri Tanjung Pinang (Penang, 6–9 Nov) · 3 bed/3 bath', address: 'Jalan Seri Pinang A-33a-03, Tanjung Tokong, 10470 Penang', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Seri%20Tanjung%20Pinang%20Tanjung%20Tokong%20Penang&query_place_id=ChIJWXQ18CHDSjARrdEo3grstgY' }
  ],
  bookings: [
    'Flight BLR→KL · IndiGo 6E 1037 · Wed 4 Nov · lands KUL 20:45 · PNR WC16YJ',
    'Bus KL→Penang · KPB Ekspres · Fri 6 Nov · TBS 12:00 → Butterworth 17:12 · ref V1NNSBIO · seats 11A/10C/10B',
    'Train Penang→KL · ETS Platinum EP 9123 · Mon 9 Nov · Butterworth 06:30 → KL Sentral 10:35 · seats F/10A-B-C',
    'Flight KL→BLR · Mon 9 Nov · evening (~21:30)',
    'Concert · The Weeknd · Thu 5 Nov · TM Stadium Nasional, Bukit Jalil · Gate E · Sec 331 · show 8:30pm'
  ]
}

const m = 'https://www.google.com/maps/search/?api=1&query='
const LEGASI = m + 'Legasi%20Kampung%20Bharu%20Jalan%20Raja%20Muda%20Musa%20Kuala%20Lumpur'
const PENANG_STAY = m + 'Seri%20Tanjung%20Pinang%20Tanjung%20Tokong%20Penang&query_place_id=ChIJWXQ18CHDSjARrdEo3grstgY'
const KLIA = m + 'Kuala%20Lumpur%20International%20Airport%20Terminal%201'
const TBS = m + 'Terminal%20Bersepadu%20Selatan%20Kuala%20Lumpur'
const PENANG_SENTRAL = m + 'Penang%20Sentral%20Butterworth&query_place_id=ChIJjzrTkhvESjARS5b43gZcDUE'

export const days: Day[] = [
  {
    n: 1, date: 'Wed 4 Nov', label: 'Arrive KL',
    stops: [
      { time: '~20:45', title: 'Land at KLIA T1 + SIM card', category: 'travel', summary: 'IndiGo 6E 1037. Immigration + bags ~45–60 min, grab a tourist SIM at arrivals.', notes: 'Maxis/Hotlink, CelcomDigi or Yes booths after customs (~RM25–45). Then Grab to the stay.', address: 'Kuala Lumpur International Airport Terminal 1', mapsUrl: KLIA },
      { time: '~22:00', title: 'Check in — Kampung Baru stay', category: 'stay', summary: 'Drop bags, freshen up. Lockbox self-check-in.', address: 'Jalan Raja Muda Musa, Kampung Baru, 50300 Kuala Lumpur', mapsUrl: LEGASI },
      { time: '~22:45', title: 'Petronas Twin Towers (via Saloma Bridge)', category: 'sight', summary: 'Walk the colour-lit Saloma Link Bridge into KLCC, photos at the towers.', whatsGood: 'Best shot from KLCC Park / Symphony Lake looking up at the lit towers.', warn: '⚠️ Tower lights switch OFF at ~midnight — do this FIRST.', address: 'Petronas Twin Towers, KLCC, Kuala Lumpur', mapsUrl: m + 'Petronas%20Twin%20Towers' },
      { time: '~23:30', title: "Bukit Bintang 'Times Square' + shawarma", dishes: ['shawarma'], category: 'nightlife', summary: 'Grab to Bukit Bintang: LED-billboard junction photos + late-night shawarma.', whatToEat: 'Shawarma Damascus (viral, beef/chicken) OR Halab Gate (many say #1) — 3 min apart, both open till ~4–5am. Backup if one has a long line.', notes: 'Wed night = lighter queue than weekend.', address: '111 Jalan Sultan Ismail (cnr Jalan Bukit Bintang), Kuala Lumpur', mapsUrl: m + 'Shawarma%20Damascus%20Bukit%20Bintang' },
      { time: 'Late', title: 'Walk back over Saloma Bridge → home', category: 'travel', summary: 'Bridge is lit all night. Sleep — early Batu Caves tomorrow.', mapsUrl: m + 'Saloma%20Link%20Bridge%20Kuala%20Lumpur' }
    ]
  },
  {
    n: 2, date: 'Thu 5 Nov', label: 'Batu Caves + Apple Watch + The Weeknd',
    stops: [
      { time: '~6:45', title: 'Batu Caves (go early)', category: 'sight', summary: 'Grab ~25–35 min. Rainbow steps, Temple Cave, Ramayana Cave.', whatsGood: 'Early = cool, quiet, clean light. Dress modest, watch bags (monkeys).', address: 'Batu Caves, Selangor', mapsUrl: m + 'Batu%20Caves' },
      { time: '~9:30', title: 'Breakfast — Bukit Bintang strip', dishes: ['curry-laksa', 'kaya-toast', 'roti-canai', 'mon-roti'], category: 'food', summary: 'Back to Bukit Bintang. Finish by 11 sharp.', whatToEat: 'Kam Fatt (curry laksa, dim sum, kaya toast) or Capitol Cafe (kaya toast + soft eggs set); grab a chicken roti to-go at Mon Chinese Beef Roti.', address: 'Kam Fatt Restaurant, Tengkat Tong Shin, Bukit Bintang', mapsUrl: m + 'Kam%20Fatt%20Restaurant%20Tengkat%20Tong%20Shin&query_place_id=ChIJbex_7y03zDERqim_4tHvz98' },
      { time: '~11:00', title: 'Apple Watch — Plaza Low Yat', category: 'shopping', summary: "~3–5 min walk from breakfast. KL's biggest electronics mall.", whatsGood: 'Buy the watch at Switch (Apple Premium Reseller, Ground Floor, 4.9★) — genuine, warranty, Apple pricing. Browse Low Yat for other electronics/accessories. Pay zero-forex card, carry passport.', address: 'Plaza Low Yat, 7 Jalan Bintang, Bukit Bintang, 55100 Kuala Lumpur', mapsUrl: m + 'Plaza%20Low%20Yat&query_place_id=ChIJYYacASk2zDERh3Iqf0NTR1g' },
      { time: '~13:30', title: 'Lunch — fast food', category: 'food', summary: 'Quick & cheap, not nasi lemak again.', whatToEat: "KFC is inside Plaza Low Yat (Ground Floor) — easiest. Or McDonald's Bukit Bintang 2-min walk.", address: 'KFC Plaza Low Yat, Ground Floor', mapsUrl: m + 'KFC%20Plaza%20Low%20Yat&query_place_id=ChIJraC_ASk2zDER4NwjXafzvwk' },
      { time: '~14:30', title: 'Back to Airbnb — rest', category: 'stay', summary: "Rest ~2:30–5:30, get concert-ready, load Touch 'n Go cards, charge phones.", mapsUrl: LEGASI },
      { time: '~18:00', title: 'To the concert by LRT', category: 'travel', summary: 'Kampung Baru (Kelana Jaya → Putra Heights) → change at Masjid Jamek → Sri Petaling Line → Bukit Jalil → 5–8 min walk. ~40–50 min.', notes: 'Enter Gate E (on ticket). Reach ~7:30 → Creepy Nuts 7:30 → The Weeknd 8:30.', address: 'Stadium Nasional Bukit Jalil, Jalan Barat, 57000 Kuala Lumpur', mapsUrl: m + 'Stadium%20Nasional%20Bukit%20Jalil' },
      { time: '~20:30', title: 'The Weeknd — show', category: 'nightlife', summary: 'Gate E · Section 331 · 8:30pm. Phones only (pro cameras banned). Save e-ticket QR offline.', whatsGood: 'Upper tier = full stage + lighting production in frame.' },
      { time: 'After show', title: 'Photos → Gate E exit → Ramly burger', dishes: ['ramly-burger'], category: 'nightlife', summary: 'Stay at your seat for photos until the crowd thins, then one-way exit via Gate E (flows west/Endah Parade side).', whatToEat: 'Grab to Jalan Alor: BurgerBoss (south end, chicken special) or Ramly Burger Number 1 (backup). Then Grab home.', warn: "Don't book Grab at the gate — walk ~300–500m past Endah Parade to a calmer street, then book.", address: 'Endah Parade, Taman Sri Endah, Bandar Baru Sri Petaling', mapsUrl: m + 'Endah%20Parade%20Kuala%20Lumpur&query_place_id=ChIJg-Gw-o9KzDERlqNBQvsTb-Q' },
      { time: 'Night', title: 'BurgerBoss (Jalan Alor)', dishes: ['ramly-burger'], category: 'food', summary: 'Famous Ramly-style burger, south end of Jalan Alor. 6pm–3am (closed Sun; Thu ✓).', whatToEat: 'Chicken special with cheese. Cash.', address: '13A Jalan Tong Shin, Bukit Bintang, Kuala Lumpur', mapsUrl: m + 'BurgerBoss%20Jalan%20Tong%20Shin%20Bukit%20Bintang&query_place_id=ChIJo2UvfMA3zDERjzvE3JlwRsQ' }
    ]
  },
  {
    n: 3, date: 'Fri 6 Nov', label: 'KL → Penang',
    stops: [
      { time: '~9:30', title: 'Checkout + nasi lemak brunch', dishes: ['nasi-lemak'], category: 'food', summary: 'Lockbox checkout. Nasi lemak in Kampung Baru; buy 1–2 bungkus to carry for the bus.', whatToEat: 'Nasi Lemak Wanjo (or Pak Aji next door) — ayam goreng/rendang + egg. Cheap.', address: '8 Jalan Raja Muda Musa, Kampung Baru, Kuala Lumpur', mapsUrl: m + 'Nasi%20Lemak%20Wanjo%20Kg%20Baru&query_place_id=ChIJIX_PtydIzDERHS_1R1F40zU' },
      { time: '~11:00', title: 'Grab to TBS', category: 'travel', summary: '~20–30 min. Be there ~11:25 (counter closes 30 min before).', address: 'Terminal Bersepadu Selatan, Bandar Tasik Selatan, 57100 Kuala Lumpur', mapsUrl: TBS },
      { time: '12:00', title: 'Bus TBS → Butterworth', category: 'travel', summary: 'KPB Ekspres, arrives Butterworth 17:12. Ref V1NNSBIO, seats 11A/10C/10B. Mid-journey rest stop ~30–45 min.', mapsUrl: TBS },
      { time: '~17:12', title: 'Butterworth → Grab to stay', category: 'travel', summary: 'Drops at Penang Sentral (Butterworth). Grab across Penang Bridge to Tanjung Tokong (~35–45 min).', address: 'Penang Sentral, Jalan Pantai, 12000 Butterworth', mapsUrl: PENANG_SENTRAL },
      { time: '~19:00', title: 'Dinner — Gurney Drive Hawker Centre', dishes: ['char-koay-teow', 'hokkien-mee', 'rojak', 'pasembur', 'wan-tan-mee', 'chicken-rice', 'cendol'], category: 'food', summary: "~5 min from stay. Biggest famous seafront hawker centre; lots of stalls so everyone's covered.", whatToEat: 'Char Koay Teow, Hokkien/prawn mee, rojak, wan tan mee (chicken), chicken fried rice, cendol. Order-to-table by stall no. Cash.', address: 'Gurney Drive, George Town, Penang', mapsUrl: m + 'Gurney%20Drive%20Hawker%20Center&query_place_id=ChIJA8mqOQbDSjAR-EXxQ-Vvf44' },
      { time: '~20:30', title: 'Gurney Bay — night walk', category: 'sight', summary: 'Right beside the hawker centre. New seafront park, open 24h, breezy and lit. Chilled end to the travel day.', address: 'Gurney Bay, Tanjung Tokong, Penang', mapsUrl: m + 'Gurney%20Bay%20Park&query_place_id=ChIJoclSPwbDSjARZdmGZ8elxrU' }
    ]
  },
  {
    n: 4, date: 'Sat 7 Nov', label: 'National Park + beaches',
    stops: [
      { time: '~7:15', title: 'Light breakfast (cheap/local)', dishes: ['kaya-toast', 'roti-canai', 'nasi-lemak'], category: 'food', summary: 'Toast + coffee near the stay.', whatToEat: 'Ah Wang Cafe — Benggali roti kahwin (kaya+butter toast), half-boiled eggs, kopi. Or Desiran Tanjung Food Court (cheap hawker).', address: 'Ah Wang Cafe, J-6 Jalan Tanjung Bungah, Tanjung Tokong', mapsUrl: m + 'Ah%20Wang%20Cafe%20Tanjung%20Tokong&query_place_id=ChIJSS850yfDSjARRLXjXG1B38U' },
      { time: '~7:50', title: 'Grab 3 burgers for the bag', category: 'food', summary: "Walkable McDonald's (~5 min, open 7am). Carry burgers for a light beach lunch — keep sealed (monkeys!).", address: "McDonald's Tanjung Tokong DT, Jln Tanjong Tokong", mapsUrl: m + 'McDonald%27s%20Tanjung%20Tokong%20DT&query_place_id=ChIJhcnGdKDDSjARxRqcbtaHrA0' },
      { time: '~8:00', title: 'Penang National Park (Teluk Bahang)', category: 'sight', summary: 'Grab ~30–40 min. Pay entry (~RM5pp cash), book a RETURN boat at the jetty to the beaches.', whatsGood: 'Scenic boat ride (rock formations, sea eagles, macaques), secluded beaches, Muka Head lighthouse hike, turtle sanctuary. Monkey Beach ~RM100/boat return; Turtle Beach ~RM200.', warn: "⚠️ Confirm pickup time with the boatman before he leaves. No clear water → no snorkelling; it's a nature + beach day.", address: 'Penang National Park, Teluk Bahang', mapsUrl: m + 'Penang%20National%20Park%20Teluk%20Bahang' },
      { time: '~12:00', title: 'Light lunch on the beach', category: 'food', summary: 'Eat the carried burgers + water on the beach (Monkey Beach has a shaded beach-bar area). Saves appetite for a good dinner.' },
      { time: '~15:30', title: 'Batu Ferringhi — beach + sunset', category: 'sight', summary: 'Grab ~20–25 min. Beach walk, water sports, sunset ~7:10pm. No dinner here (save it).', notes: 'Leave by ~7:30–7:45pm to beat the coast-road jam.', address: 'Batu Ferringhi Beach, Penang', mapsUrl: m + 'Batu%20Ferringhi%20Beach%20Penang' },
      { time: '~19:45', title: 'Dinner — Viva Local Food Haven', dishes: ['claypot-chicken-rice', 'char-koay-teow', 'wan-tan-mee', 'ban-mee', 'chicken-rice'], category: 'food', summary: 'On the way home (Tanjung Tokong). Airy open-air hawker court, many stalls, cheap, open late.', whatToEat: 'Claypot chicken rice, char koay teow, prawn mee, wan tan mee (chicken), ban mee soup, grilled fish. Cash.', address: 'Viva Local Food Haven, Tanjung Tokong, Penang', mapsUrl: m + 'Viva%20Local%20Food%20Haven%20Tanjung%20Tokong&query_place_id=ChIJ6c3HHCjDSjARMFL2_VHVPKc' },
      { time: '~21:00', title: 'Short Grab home', category: 'stay', summary: '~5 min. Close the day.', mapsUrl: PENANG_STAY }
    ]
  },
  {
    n: 5, date: 'Sun 8 Nov', label: 'Penang Hill + George Town',
    stops: [
      { time: '~7:30', title: 'Breakfast — cook in the Airbnb', category: 'food', summary: "Omelette + bread + coffee. Buy eggs/bread/butter the night before at Lotus's Tanjung Pinang.", address: "Lotus's Tanjung Pinang, Jalan Seri Tanjung Pinang", mapsUrl: m + 'Lotus%27s%20Tanjung%20Pinang%20Penang' },
      { time: '~8:15', title: 'Penang Hill funicular (go early)', category: 'sight', summary: 'Grab ~25–30 min to the lower station, Air Itam. Funicular up (~5–10 min).', whatsGood: 'Panoramic George Town + island views, cool air, cafés, optional Habitat canopy walk. Early = clearer views + shorter queue; consider Fast Lane ticket.', address: 'Penang Hill Lower Station, Jalan Bukit Bendera, Air Itam', mapsUrl: m + 'Penang%20Hill%20Lower%20Station%20Air%20Itam' },
      { time: '~10:45', title: 'Kek Lok Si Temple', category: 'sight', summary: "~5–10 min from the hill base. Malaysia's largest Buddhist temple.", whatsGood: '7-tier Pagoda of 10,000 Buddhas, giant bronze Kuan Yin (incline train ~RM8pp return), turtle pond, views. Lots of stairs + heat — water + modest dress.', address: 'Kek Lok Si Temple, Jln Balik Pulau, Ayer Itam', mapsUrl: m + 'Kek%20Lok%20Si%20Temple&query_place_id=ChIJZYb8XRjCSjARxD5Df-qEkCw' },
      { time: '~12:30', title: 'Lunch — 2828 Assam Laksa', dishes: ['assam-laksa', 'cendol'], category: 'food', summary: 'Near Kek Lok Si. Famous Penang assam laksa — fish-based, light, ~RM7. 4.6★, daily 10am–5pm.', whatToEat: 'Assam laksa + cendol. Not into laksa? Kek Lok Si Vegetarian Restaurant (set meal ~RM39 for 3).', address: '613-G Jalan Pasar, Ayer Itam, Penang', mapsUrl: m + '2828%20Assam%20Laksa%20Kek%20Lok%20Si&query_place_id=ChIJx0qPZXTDSjARrLouagiJnGw' },
      { time: '~14:00', title: 'George Town — street art trail', category: 'sight', summary: 'Grab ~20–25 min. Walkable heritage core.', whatsGood: "'Kids on a Bicycle' mural (Armenian St) + mural/wire-art cluster, Chew Jetty (~8 min walk), Armenian/Chulia lanes. Optional: Pinang Peranakan Mansion.", address: 'Lebuh Armenian, George Town, Penang', mapsUrl: m + 'Kids%20on%20a%20Bicycle%20mural%20Armenian%20Street%20George%20Town' },
      { time: '~16:00', title: 'Café / AC break', category: 'food', summary: 'Cool off in the mural zone.', whatToEat: 'LUMA all-day eatery (healthy, AC, 4.8★) or Jo Kopitiam (cheap local, 4.8★).', address: '270 Lebuh Chulia, George Town, Penang', mapsUrl: m + 'LUMA%20all-day%20eatery%20Chulia&query_place_id=ChIJY73S5KzDSjAR8HJPgtqHhwk' },
      { time: '~18:30', title: 'Dinner — New Lane / Chulia hawkers', dishes: ['char-koay-teow', 'hokkien-mee', 'wan-tan-mee', 'chicken-rice', 'chee-cheong-fun', 'cendol', 'oyster-omelette'], category: 'food', summary: "You're already in George Town — the best night stalls are here.", whatToEat: 'New Lane (Lorong Baru) hawker street, or Chulia St night hawkers: char koay teow, Hokkien/prawn mee, wan tan mee (chicken), chicken rice, chee cheong fun, cendol. Cash.', address: 'Lorong Baru (New Lane), George Town, Penang', mapsUrl: m + 'New%20Lane%20Hawker%20Street%20Lorong%20Baru%20George%20Town' },
      { time: '~20:30', title: 'Grab home + pack', category: 'stay', summary: 'Pack tonight — early start tomorrow (05:15 Grab → 06:30 train). ~20 min to Tanjung Tokong.', mapsUrl: PENANG_STAY }
    ]
  },
  {
    n: 6, date: 'Mon 9 Nov', label: 'Penang → KL + fly home',
    stops: [
      { time: '~05:15', title: 'Pre-booked Grab → Butterworth', category: 'travel', summary: 'Across Penang Bridge to Penang Sentral (Butterworth), ~30–40 min. No ferry that early — pre-book the Grab the night before + keep a standby taxi number.', warn: '⚠️ Be on the platform by 06:25 — gate closes 5 min before departure.', address: 'Penang Sentral, Jalan Pantai, 12000 Butterworth', mapsUrl: PENANG_SENTRAL },
      { time: '06:30', title: 'Train → KL Sentral', category: 'travel', summary: 'ETS Platinum EP 9123, arrives KL Sentral 10:35. Seats F/10A-B-C.', mapsUrl: m + 'KL%20Sentral%20Kuala%20Lumpur' },
      { time: '~10:45', title: 'Grab → Mitsui Outlet Park KLIA', category: 'shopping', summary: 'Famous outlet mall near the airport; has free luggage storage. ~45–55 min from KL Sentral.', whatsGood: '~200 outlet stores (open 10am–10pm). A bit of shopping before the flight.', address: 'Mitsui Outlet Park KLIA Sepang', mapsUrl: m + 'Mitsui%20Outlet%20Park%20KLIA%20Sepang' },
      { time: '~16:45', title: 'Free shuttle → KLIA', category: 'travel', summary: 'Orange MOP shuttle, every ~20 min (8:20am–11pm), ~10–15 min to the airport. At KLIA ~5pm.', address: 'Kuala Lumpur International Airport Terminal 1', mapsUrl: KLIA },
      { time: '~21:30', title: 'Flight KL → Bengaluru', category: 'travel', summary: 'Evening departure home. ✈️' }
    ]
  }
]
