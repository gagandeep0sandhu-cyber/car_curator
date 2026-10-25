/**
 * CAR CURATOR — Digital Automotive Encyclopedia & Reference Archive
 * Inspired by the information architecture, browsing depth, and photography of NetCarShow.com.
 * 
 * Features:
 * 1. Comprehensive Vehicle Database with Production Cars, Concepts, and Regional Variants ([US], [EU], [UK])
 * 2. Detailed Technical Specifications (Engine, Transmission, Performance, Dimensions, Wheels, Fuel)
 * 3. Multi-Angle Photo Galleries with dedicated Exterior, Interior, and Engine categorizations
 * 4. Full-screen Lightbox with Next/Prev/Close, Keyboard navigation, and 4K/1080p/Mobile Wallpaper Download
 * 5. Grid View / List View switcher on Latest Cars
 * 6. Live Search, Multi-Filter Engine (Make, Body Style, Fuel, Year, Region), and Sorting
 * 7. Progressive "Show More" pagination
 * 8. "More from this Manufacturer" and "Curated Eye Candy" recommendation engines
 */

// ==========================================================================
// 1. AUTOMOTIVE ARCHIVE DATABASE
// ==========================================================================
const CARS_DATABASE = [
  // --- FERRARI ---
  {
    id: "ferrari-296-gtb",
    brand: "Ferrari",
    model: "296 GTB",
    year: 2024,
    region: "[EU]",
    body: "Supercar",
    bodySubtype: "Mid-Engine Berlinetta",
    fuel: "Hybrid",
    price: "$342,205",
    popularity: 98,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "3.0L Twin-Turbo 120° V6 + Electric Motor",
      displacement: "2,992 cc",
      power: "819 HP (610 kW) @ 8,000 rpm",
      torque: "546 lb-ft (740 Nm) @ 6,250 rpm",
      redline: "8,500 rpm",
      battery: "7.45 kWh Lithium-ion (25 km EV Range)"
    },
    transmission: {
      gearbox: "8-Speed Dual-Clutch F1",
      drivetrain: "Rear-Wheel Drive (RWD)",
      differential: "Electronic Differential (E-Diff)"
    },
    performance: {
      zeroToHundred: "2.9 sec",
      zeroToSixty: "2.8 sec",
      zeroToTwoHundred: "7.3 sec",
      topSpeed: "330 km/h (205 mph)",
      brakingHundredToZero: "107 ft (32.6 m)"
    },
    dimensions: {
      length: "4,565 mm (179.7 in)",
      width: "1,958 mm (77.1 in)",
      height: "1,187 mm (46.7 in)",
      wheelbase: "2,600 mm (102.4 in)",
      kerbWeight: "1,470 kg (3,241 lbs)"
    },
    wheels: {
      frontTyres: "245/35 ZR20",
      rearTyres: "305/35 ZR20",
      brakes: "Carbon-Ceramic Discs (398 mm Front / 360 mm Rear)"
    },
    editorial: {
      overview: "The Ferrari 296 GTB represents an epochal revolution for the Maranello company, introducing an all-new 120° wide-angle twin-turbo V6 engine coupled with an MGU-K plug-in electric motor. Nicknamed the 'piccolo V12' (little V12) for its intoxicating acoustic timbre, the 296 GTB delivers astonishing agility and class-leading throttle response.",
      design: "Styled by the Ferrari Styling Centre headed by Flavio Manzoni, the 296 GTB draws clean inspiration from the 1963 250 LM, featuring a muscular rear haunch, visor-style glasshouse, and an active mobile rear spoiler integrated flush into the rear bumper.",
      interior: "The cabin is built around a fully digital driver interface derived from the SF90 Stradale. An all-digital 16-inch curved instrument display is flanked by capacitive touch controls on the steering wheel, with classic Italian leather and carbon-fiber trim."
    },
    mainImage: "https://images.unsplash.com/photo-1708516893277-232fb2bfb198?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1708516893277-232fb2bfb198?auto=format&fit=crop&w=1600&q=85", caption: "Front 3/4 Dynamic Stance", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=85", caption: "Sculpted Side Profile & Air Intakes", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=85", caption: "Active Rear Diffuser & Center Exhaust", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Digital Cockpit & Steering Wheel", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Carbon Fiber Racing Seats", type: "interior" },
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85", caption: "Forged Alloy Wheels & Carbon Ceramic Brakes", type: "details" },
      { url: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=1600&q=85", caption: "LED Headlight Architecture", type: "details" },
      { url: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1600&q=85", caption: "Engine: 120° Twin-Turbo V6 Powertrain", type: "engine" }
    ]
  },
  {
    id: "ferrari-sf90-stradale",
    brand: "Ferrari",
    model: "SF90 Stradale",
    year: 2024,
    region: "[EU]",
    body: "Supercar",
    bodySubtype: "Plug-in Hybrid Flagship",
    fuel: "Hybrid",
    price: "$528,765",
    popularity: 99,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "4.0L Twin-Turbo 90° V8 + 3 Electric Motors",
      displacement: "3,990 cc",
      power: "986 HP (735 kW) Combined",
      torque: "590 lb-ft (800 Nm) @ 6,000 rpm",
      redline: "8,000 rpm",
      battery: "7.9 kWh Lithium-ion"
    },
    transmission: {
      gearbox: "8-Speed Dual-Clutch F1",
      drivetrain: "All-Wheel Drive (RAC-e Front Electric AWD)",
      differential: "Electronic Traction Control"
    },
    performance: {
      zeroToHundred: "2.5 sec",
      zeroToSixty: "2.3 sec",
      zeroToTwoHundred: "6.7 sec",
      topSpeed: "340 km/h (211 mph)",
      brakingHundredToZero: "96 ft (29.5 m)"
    },
    dimensions: {
      length: "4,710 mm (185.4 in)",
      width: "1,972 mm (77.6 in)",
      height: "1,186 mm (46.7 in)",
      wheelbase: "2,650 mm (104.3 in)",
      kerbWeight: "1,570 kg (3,461 lbs)"
    },
    wheels: {
      frontTyres: "255/35 ZR20",
      rearTyres: "315/30 ZR20",
      brakes: "Carbon-Ceramic Discs with Brake-By-Wire"
    },
    editorial: {
      overview: "The SF90 Stradale is Ferrari's most powerful series-production supercar, integrating Formula 1 hybrid expertise. A 780 cv twin-turbo V8 collaborates with three electric motors to generate an astonishing 1,000 metric horsepower.",
      design: "Compact overhangs, a forward-cab posture, and a low center of gravity characterize the exterior, enhanced by the patented shut-off Gurney active aerodynamic system at the rear.",
      interior: "Designed around the philosophy of 'eyes on the road, hands on the wheel', the SF90 features head-up display, touch-sensitive steering pads, and a 16-inch high-definition curved cluster."
    },
    mainImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85", caption: "Aerodynamic Front Low Stance", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=85", caption: "High-Downforce Rear Wing Assembly", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 16-inch Curved Digital Cluster", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Touchpad Steering Wheel Controls", type: "interior" },
      { url: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1600&q=85", caption: "Engine: Twin-Turbo Hot-V V8 Bay", type: "engine" }
    ]
  },
  {
    id: "ferrari-purosangue",
    brand: "Ferrari",
    model: "Purosangue V12",
    year: 2024,
    region: "[EU]",
    body: "SUVs",
    bodySubtype: "Luxury High-Performance SUV",
    fuel: "Petrol",
    price: "$398,350",
    popularity: 96,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "6.5L Naturally Aspirated 65° V12",
      displacement: "6,496 cc",
      power: "715 HP (533 kW) @ 7,750 rpm",
      torque: "528 lb-ft (716 Nm) @ 6,250 rpm",
      redline: "8,250 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "8-Speed Dual-Clutch Rear Transaxle",
      drivetrain: "All-Wheel Drive (4RM-S with Independent 4WS)",
      differential: "Torque Vectoring AWD"
    },
    performance: {
      zeroToHundred: "3.3 sec",
      zeroToSixty: "3.2 sec",
      zeroToTwoHundred: "10.6 sec",
      topSpeed: "310 km/h (193 mph)",
      brakingHundredToZero: "108 ft (32.8 m)"
    },
    dimensions: {
      length: "4,973 mm (195.8 in)",
      width: "2,028 mm (79.8 in)",
      height: "1,589 mm (62.6 in)",
      wheelbase: "3,018 mm (118.8 in)",
      kerbWeight: "2,033 kg (4,482 lbs)"
    },
    wheels: {
      frontTyres: "255/35 R22",
      rearTyres: "315/30 R23",
      brakes: "Carbon-Ceramic Rotors"
    },
    editorial: {
      overview: "Ferrari's first-ever four-door, four-seater vehicle encapsulates Maranello's DNA with a front-mid mounted naturally aspirated 6.5L V12, revolutionary active suspension system, and welcoming rear-hinged doors.",
      design: "An athletic, raised-profile GT silhouette without conventional SUV bulk. Aerodynamic air bridges channel airflow over the bonnet and through front wheel arch louvres.",
      interior: "Four individually adjustable, heated, and massaging leather bucket seats. The dual-cockpit dashboard offers the front passenger their own dedicated 10.2-inch display."
    },
    mainImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=85", caption: "Muscular Front Apron & Aerodynamic Ducts", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85", caption: "Fastback Silhouette with Raised Ride Height", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Dual-Cockpit Dashboard with Passenger Display", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Four Individual Heated Leather Seats", type: "interior" }
    ]
  },
  {
    id: "ferrari-roma",
    brand: "Ferrari",
    model: "Roma Coupe",
    year: 2024,
    region: "[EU]",
    body: "Coupes",
    bodySubtype: "Front-Engine 2+2 GT",
    fuel: "Petrol",
    price: "$247,310",
    popularity: 91,
    isLatest: false,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "3.9L Twin-Turbo 90° V8",
      displacement: "3,855 cc",
      power: "612 HP (456 kW) @ 5,750 rpm",
      torque: "561 lb-ft (760 Nm) @ 3,000 rpm",
      redline: "7,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "8-Speed Dual-Clutch",
      drivetrain: "Rear-Wheel Drive (RWD)",
      differential: "Electronic Differential (E-Diff3)"
    },
    performance: {
      zeroToHundred: "3.4 sec",
      zeroToSixty: "3.1 sec",
      zeroToTwoHundred: "9.3 sec",
      topSpeed: "320 km/h (199 mph)",
      brakingHundredToZero: "105 ft (32.0 m)"
    },
    dimensions: {
      length: "4,656 mm (183.3 in)",
      width: "1,974 mm (77.7 in)",
      height: "1,301 mm (51.2 in)",
      wheelbase: "2,670 mm (105.1 in)",
      kerbWeight: "1,570 kg (3,461 lbs)"
    },
    wheels: {
      frontTyres: "245/35 ZR20",
      rearTyres: "285/35 ZR20",
      brakes: "Carbon-Ceramic Discs"
    },
    editorial: {
      overview: "Inspired by the carefree lifestyle of 1950s and 60s Rome ('La Nuova Dolce Vita'), the Ferrari Roma is a contemporary grand tourer with timeless minimalist elegance and twin-turbo V8 power.",
      design: "Clean, sculptural proportions with a shark-nose front, perforated monolithic grille, and an active rear spoiler flush with the rear screen.",
      interior: "A symmetrical dual-cockpit cabin divides driver and passenger areas, centered around an 8.4-inch portrait touchscreen and a 16-inch digital instrument cluster."
    },
    mainImage: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=85", caption: "Monolithic Perforated Grille & Sharp Profile", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=85", caption: "Integrated Mobile Rear Spoiler", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Symmetrical Dual Cockpit Architecture", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Central 8.4-inch Touchscreen Console", type: "interior" }
    ]
  },
  {
    id: "ferrari-12cilindri",
    brand: "Ferrari",
    model: "12Cilindri",
    year: 2025,
    region: "[EU]",
    body: "Supercar",
    bodySubtype: "Front-Mid Engine V12 Berlinetta",
    fuel: "Petrol",
    price: "$423,000",
    popularity: 97,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "6.5L Naturally Aspirated 65° V12 (F140HD)",
      displacement: "6,496 cc",
      power: "819 HP (610 kW) @ 9,250 rpm",
      torque: "500 lb-ft (678 Nm) @ 7,250 rpm",
      redline: "9,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "8-Speed Dual-Clutch (F1 DCT)",
      drivetrain: "Rear-Wheel Drive (RWD)",
      differential: "Side Slip Control 8.0 & 4-Wheel Independent Steering"
    },
    performance: {
      zeroToHundred: "2.9 sec",
      zeroToSixty: "2.7 sec",
      zeroToTwoHundred: "7.9 sec",
      topSpeed: "340 km/h (211 mph)",
      brakingHundredToZero: "103 ft (31.4 m)"
    },
    dimensions: {
      length: "4,733 mm (186.3 in)",
      width: "2,176 mm (85.7 in)",
      height: "1,292 mm (50.9 in)",
      wheelbase: "2,700 mm (106.3 in)",
      kerbWeight: "1,560 kg (3,439 lbs)"
    },
    wheels: {
      frontTyres: "275/35 R21",
      rearTyres: "315/35 R21",
      brakes: "Carbon-Ceramic Discs (398 mm Front / 360 mm Rear)"
    },
    editorial: {
      overview: "Maranello's latest front-mid engine two-seater is an uncompromising tribute to Ferrari's legendary naturally aspirated V12 lineage, revving up to a soaring 9,500 RPM with retro-futuristic 365 GTB/4 Daytona styling cues.",
      design: "Clean architectural forms replace excessive scoops, highlighted by a front dark visor band integrating the headlights and active twin delta winglets at the rear.",
      interior: "A sophisticated tri-display dashboard featuring a 15.6-inch driver display, 10.25-inch central screen, and 8.8-inch passenger display with high-end sustainable Alcantara upholstery."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/d/dd/2025_Ferrari_12Cilindri_in_Rosso_Imola%2C_front_left.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/2025_Ferrari_12Cilindri_in_Rosso_Imola%2C_front_left.jpg", caption: "Ferrari 12Cilindri - Rosso Imola Front 3/4 Stance", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85", caption: "Active Delta Aerodynamic Flaps", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Tri-Screen Panoramic Dashboard", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Classic Metal Shift Gate Style Selector", type: "interior" }
    ]
  },

  // --- PORSCHE ---
  {
    id: "porsche-911-gt3-rs",
    brand: "Porsche",
    model: "911 GT3 RS",
    year: 2025,
    region: "[EU]",
    body: "Sports Cars",
    bodySubtype: "Track Special Coupe",
    fuel: "Petrol",
    price: "$241,300",
    popularity: 99,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "4.0L Naturally Aspirated Boxer-6",
      displacement: "3,996 cc",
      power: "518 HP (386 kW) @ 8,500 rpm",
      torque: "342 lb-ft (465 Nm) @ 6,300 rpm",
      redline: "9,000 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "7-Speed Dual-Clutch (PDK)",
      drivetrain: "Rear-Wheel Drive (RWD)",
      differential: "Porsche Torque Vectoring Plus (PTV Plus)"
    },
    performance: {
      zeroToHundred: "3.0 sec",
      zeroToSixty: "2.7 sec",
      zeroToTwoHundred: "10.6 sec",
      topSpeed: "296 km/h (184 mph)",
      brakingHundredToZero: "98 ft (29.9 m)"
    },
    dimensions: {
      length: "4,572 mm (180.0 in)",
      width: "1,900 mm (74.8 in)",
      height: "1,323 mm (52.1 in)",
      wheelbase: "2,457 mm (96.7 in)",
      kerbWeight: "1,450 kg (3,197 lbs)"
    },
    wheels: {
      frontTyres: "275/35 ZR20",
      rearTyres: "335/30 ZR21",
      brakes: "PCCB Ceramic Composite Discs (410 mm Front / 390 mm Rear)"
    },
    editorial: {
      overview: "The 911 GT3 RS is Porsche's road-legal motorsport weapon. Producing 860 kg of downforce at 285 km/h, it features Formula 1-style active DRS aerodynamics, lightweight CFRP construction, and double-wishbone front suspension.",
      design: "Dominated by a monumental swan-neck rear wing higher than the roofline, central radiator bonnet nostrils, and louvred front wheel arch ventilation.",
      interior: "Stripped of luxury in pursuit of lightness. Full carbon-fiber bucket seats, door pull loops, and four rotary knobs on the steering wheel allowing real-time adjustment of suspension rebound, compression, and differential locking."
    },
    mainImage: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85", caption: "Track Ready Front Splitter & Hood Vents", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85", caption: "Aggressive Aero Side Profile & Cutaways", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Swan-Neck Carbon Rear Wing with DRS", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Motorsport Steering Controls with 4 Rotary Knobs", type: "interior" },
      { url: "images/porsche_gt3rs_interior.jpg", caption: "Interior: Roll Cage, Carbon Full Bucket Seats & Track Cockpit", type: "interior" },
      { url: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1600&q=85", caption: "Engine: 4.0L High-Revving Boxer-6", type: "engine" }
    ]
  },
  {
    id: "porsche-mission-x",
    brand: "Porsche",
    model: "Mission X Concept",
    year: 2026,
    region: "[EU]",
    body: "Concepts",
    bodySubtype: "Hypercar Concept",
    fuel: "Electric",
    price: "Concept Vehicle",
    popularity: 98,
    isLatest: true,
    isConcept: true,
    isEyeCandy: true,
    engine: {
      type: "High-Performance Electric All-Wheel Drive (900V System)",
      displacement: "N/A",
      power: "1,500+ HP (Estimated)",
      torque: "Over 1,000 lb-ft",
      redline: "N/A",
      battery: "High-Density Centrally Mounted Mid-Battery"
    },
    transmission: {
      gearbox: "Multi-Speed Electric Drive",
      drivetrain: "All-Wheel Drive (AWD)",
      differential: "Torque Vectoring"
    },
    performance: {
      zeroToHundred: "Under 2.0 sec",
      zeroToSixty: "1.8 sec",
      zeroToTwoHundred: "Under 5.0 sec",
      topSpeed: "Over 350 km/h (217 mph)",
      brakingHundredToZero: "Extreme Downforce Braking"
    },
    dimensions: {
      length: "4,500 mm (177.2 in)",
      width: "2,000 mm (78.7 in)",
      height: "1,200 mm (47.2 in)",
      wheelbase: "2,730 mm (107.5 in)",
      kerbWeight: "1:1 Power-to-Weight (approx. 1,520 kg)"
    },
    wheels: {
      frontTyres: "255/35 R20",
      rearTyres: "315/30 R21",
      brakes: "Carbon-Ceramic Aeroblade Brakes"
    },
    editorial: {
      overview: "The Porsche Mission X is a spectacular technological beacon for the hypercar of the future. Built to commemorate 75 years of Porsche sports cars, it aims to be the fastest road-legal vehicle on the Nürburgring Nordschleife.",
      design: "Le Mans-style doors that open forwards and upwards like the Porsche 917, a lightweight glass dome with carbon-fiber exoskeleton, and sculpted Rocket Metallic paint finish.",
      interior: "Asymmetrical driver-focused cockpit: the driver seat is finished in Kalahari Grey while the passenger seat is Andalusia Brown. Features an open-top motorsport steering yoke with integrated record switches."
    },
    mainImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85", caption: "Sculpted Aerodynamic Front Fascia & Glass Canopy", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Transparent Roof Dome & Forward-Opening Doors", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Asymmetrical Two-Tone Racing Cockpit", type: "interior" }
    ]
  },
  {
    id: "porsche-taycan-turbo-s",
    brand: "Porsche",
    model: "Taycan Turbo S",
    year: 2025,
    region: "[EU]",
    body: "Sedans",
    bodySubtype: "Electric Performance Saloon",
    fuel: "Electric",
    price: "$209,000",
    popularity: 90,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "Dual Permanent-Magnet Synchronous Electric Motors",
      displacement: "N/A",
      power: "938 HP (700 kW) with Launch Control",
      torque: "818 lb-ft (1,110 Nm)",
      redline: "16,000 rpm",
      battery: "105 kWh Performance Battery Plus (800V Architecture)"
    },
    transmission: {
      gearbox: "2-Speed Rear Axle Transmission / 1-Speed Front",
      drivetrain: "All-Wheel Drive (AWD)",
      differential: "Porsche Torque Vectoring Plus"
    },
    performance: {
      zeroToHundred: "2.4 sec",
      zeroToSixty: "2.3 sec",
      zeroToTwoHundred: "7.7 sec",
      topSpeed: "260 km/h (162 mph)",
      brakingHundredToZero: "102 ft (31.1 m)"
    },
    dimensions: {
      length: "4,963 mm (195.4 in)",
      width: "1,966 mm (77.4 in)",
      height: "1,378 mm (54.3 in)",
      wheelbase: "2,900 mm (114.2 in)",
      kerbWeight: "2,295 kg (5,060 lbs)"
    },
    wheels: {
      frontTyres: "265/35 R21",
      rearTyres: "305/30 R21",
      brakes: "PCCB Ceramic Composite Discs (10-piston front)"
    },
    editorial: {
      overview: "The updated Porsche Taycan Turbo S sets new benchmarks for electric vehicle dynamics and charging efficiency, delivering up to 938 hp with Launch Control and 320 kW DC fast-charging capability.",
      design: "Sharpened front wings, flatter headlights with HD matrix technology, and an illuminated Porsche logo in the continuous rear light strip.",
      interior: "Porsche Active Ride suspension keeps the body horizontal even during heavy braking. The cabin features curved OLED displays and optional leather-free Race-Tex interiors."
    },
    mainImage: "images/porsche_taycan.jpg",
    gallery: [
      { url: "images/porsche_taycan.jpg", caption: "Porsche Taycan Turbo S - HD Matrix LED Front Stance", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85", caption: "Continuous 3D Rear Light Strip", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Curved Digital Cockpit Display", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Race-Tex Sustainable Sport Seats", type: "interior" }
    ]
  },

  // --- BMW ---
  {
    id: "bmw-m4-competition",
    brand: "BMW",
    model: "M4 Competition",
    year: 2025,
    region: "[EU]",
    body: "Coupes",
    bodySubtype: "Performance Sport Coupe",
    fuel: "Petrol",
    price: "$83,200",
    popularity: 94,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "3.0L BMW M TwinPower Turbo Inline-6 (S58)",
      displacement: "2,993 cc",
      power: "523 HP (390 kW) @ 6,250 rpm",
      torque: "479 lb-ft (650 Nm) @ 2,750 rpm",
      redline: "7,200 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "8-Speed M Steptronic with Drivelogic",
      drivetrain: "All-Wheel Drive (M xDrive) with 2WD Drift Mode",
      differential: "Active M Differential"
    },
    performance: {
      zeroToHundred: "3.4 sec",
      zeroToSixty: "3.2 sec",
      zeroToTwoHundred: "11.8 sec",
      topSpeed: "290 km/h (180 mph)",
      brakingHundredToZero: "106 ft (32.3 m)"
    },
    dimensions: {
      length: "4,801 mm (189.0 in)",
      width: "1,887 mm (74.3 in)",
      height: "1,397 mm (55.0 in)",
      wheelbase: "2,857 mm (112.5 in)",
      kerbWeight: "1,775 kg (3,913 lbs)"
    },
    wheels: {
      frontTyres: "275/35 ZR19",
      rearTyres: "285/30 ZR20",
      brakes: "M Compound Brakes (M Carbon Ceramic Optional)"
    },
    editorial: {
      overview: "The BMW M4 Competition Coupe delivers pure high-performance dynamics powered by the renowned S58 straight-six engine with track-ready cooling and selectable rear-wheel drive mode.",
      design: "Aggressive frameless vertical kidney grille, carbon-fiber reinforced plastic (CFRP) roof with aerodynamic fins, and sculpted side sills.",
      interior: "Equipped with the BMW Curved Display running Operating System 8.5, an Alcantara flat-bottom M steering wheel, and optional M Carbon bucket seats."
    },
    mainImage: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?auto=format&fit=crop&w=1600&q=85", caption: "Signature M Kidney Grille & Stance", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85", caption: "Sleek Coupe Roofline & Carbon Mirrors", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85", caption: "Quad M Exhaust & Aerodynamic Diffuser", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: M Carbon Bucket Seats & Curved Cockpit", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: M Leather Steering Wheel with Red M1/M2 Buttons", type: "interior" }
    ]
  },
  {
    id: "bmw-vision-neue-klasse",
    brand: "BMW",
    model: "Vision Neue Klasse",
    year: 2026,
    region: "[EU]",
    body: "Concepts",
    bodySubtype: "Future Electric Sedan Concept",
    fuel: "Electric",
    price: "Concept Vehicle",
    popularity: 95,
    isLatest: true,
    isConcept: true,
    isEyeCandy: true,
    engine: {
      type: "Sixth-Generation BMW eDrive Technology (800V)",
      displacement: "N/A",
      power: "Over 600 HP (Estimated)",
      torque: "Over 650 lb-ft",
      redline: "N/A",
      battery: "Gen-6 Cylindrical Lithium-ion Cells (+30% Range)"
    },
    transmission: {
      gearbox: "Single-Speed Electric Drive",
      drivetrain: "All-Wheel Drive (xDrive)",
      differential: "Intelligent Drive Distribution"
    },
    performance: {
      zeroToHundred: "Under 3.5 sec",
      zeroToSixty: "3.2 sec",
      zeroToTwoHundred: "Under 9.0 sec",
      topSpeed: "250 km/h (155 mph)",
      brakingHundredToZero: "Regenerative Braking"
    },
    dimensions: {
      length: "4,700 mm (185.0 in)",
      width: "1,890 mm (74.4 in)",
      height: "1,420 mm (55.9 in)",
      wheelbase: "2,880 mm (113.4 in)",
      kerbWeight: "Approx. 1,900 kg (4,188 lbs)"
    },
    wheels: {
      frontTyres: "245/40 R21",
      rearTyres: "275/35 R21",
      brakes: "Aerodynamically Shielded Discs"
    },
    editorial: {
      overview: "The BMW Vision Neue Klasse showcases how the future generation of BMW vehicles will look, feel, and drive. Centered on circular economy, digital intelligence, and electric propulsion, it heralds a new era for the brand.",
      design: "Clean, expansive surfaces with iconic BMW design cues: the forward-slanting 'shark nose' front, horizontal digital kidney grilles with 3D light animation, and the signature Hofmeister kink.",
      interior: "BMW Panoramic Vision projects information across the entire width of the windscreen. Bright cord fabrics, a floating center console, and warm, minimalist lounge seats create a welcoming digital space."
    },
    mainImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85", caption: "Monolithic Clean Electric Sedan Profile", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?auto=format&fit=crop&w=1600&q=85", caption: "Interactive Light Grille & Shark Nose", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: BMW Panoramic Vision Across Windscreen", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Minimalist Yellow Corduroy Lounge Cabin", type: "interior" }
    ]
  },

  // --- LAMBORGHINI ---
  {
    id: "lamborghini-revuelto",
    brand: "Lamborghini",
    model: "Revuelto V12",
    year: 2024,
    region: "[EU]",
    body: "Supercar",
    bodySubtype: "Mid-Engine V12 HPEV",
    fuel: "Hybrid",
    price: "$608,358",
    popularity: 99,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "6.5L Naturally Aspirated V12 + 3 Electric Motors (L545)",
      displacement: "6,498 cc",
      power: "1,001 HP (747 kW) @ 9,250 rpm",
      torque: "535 lb-ft (725 Nm) @ 6,750 rpm",
      redline: "9,500 rpm",
      battery: "3.8 kWh Structural Battery in Center Tunnel"
    },
    transmission: {
      gearbox: "8-Speed Transverse Dual-Clutch",
      drivetrain: "Electric All-Wheel Drive (e-AWD with Front Torque Vectoring)",
      differential: "Integrated Electronic Rear Differential"
    },
    performance: {
      zeroToHundred: "2.5 sec",
      zeroToSixty: "2.3 sec",
      zeroToTwoHundred: "Under 7.0 sec",
      topSpeed: "350 km/h (217 mph)",
      brakingHundredToZero: "98 ft (30.0 m)"
    },
    dimensions: {
      length: "4,947 mm (194.8 in)",
      width: "2,033 mm (80.0 in)",
      height: "1,160 mm (45.7 in)",
      wheelbase: "2,779 mm (109.4 in)",
      kerbWeight: "1,772 kg (3,907 lbs)"
    },
    wheels: {
      frontTyres: "265/35 ZR20",
      rearTyres: "345/30 ZR21",
      brakes: "Carbon-Ceramic Brakes Plus (CCB Plus - 10-piston front)"
    },
    editorial: {
      overview: "The Revuelto is Lamborghini's landmark High Performance Electrified Vehicle (HPEV). Combining an all-new 814 hp 6.5L naturally aspirated V12 with three electric motors, it unleashes 1,001 horsepower through carbon-fiber monofuselage architecture.",
      design: "Stealth fighter aerospace design language with signature Y-shaped LED light signatures, hexagonal exhaust pipes mounted high between the tail lights, and scissor doors.",
      interior: "Designed around the 'Feel Like a Pilot' philosophy with an aeronautical center bridge, three digital screens (12.3-inch cluster, 8.4-inch central, 9.1-inch passenger), and 13 selectable driving modes."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/1/13/Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg", caption: "Lamborghini Revuelto V12 - Stealth Aerodynamics & Y-Shape DRLs", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=85", caption: "Sharp Stealth Aerospace Aerodynamics", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85", caption: "Exposed V12 Engine Bay & High-Mounted Exhausts", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Carbon Monofuselage Fighter-Jet Cockpit", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Red Missile-Style Start Button & Center Screen", type: "interior" }
    ]
  },
  {
    id: "lamborghini-temerario",
    brand: "Lamborghini",
    model: "Temerario",
    year: 2025,
    region: "[EU]",
    body: "Supercar",
    bodySubtype: "Twin-Turbo V8 Hybrid Supercar",
    fuel: "Hybrid",
    price: "$360,000",
    popularity: 96,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "4.0L Twin-Turbo Flat-Plane V8 + 3 Electric Motors",
      displacement: "3,995 cc",
      power: "907 HP (677 kW) @ 9,000–9,750 rpm",
      torque: "538 lb-ft (730 Nm) @ 4,000–7,000 rpm",
      redline: "10,000 rpm",
      battery: "3.8 kWh Lithium-ion"
    },
    transmission: {
      gearbox: "8-Speed Dual-Clutch Transverse",
      drivetrain: "All-Wheel Drive (Electric Front Axle AWD)",
      differential: "Torque Vectoring"
    },
    performance: {
      zeroToHundred: "2.7 sec",
      zeroToSixty: "2.5 sec",
      zeroToTwoHundred: "7.4 sec",
      topSpeed: "343 km/h (213 mph)",
      brakingHundredToZero: "105 ft (32.0 m)"
    },
    dimensions: {
      length: "4,706 mm (185.3 in)",
      width: "1,996 mm (78.6 in)",
      height: "1,201 mm (47.3 in)",
      wheelbase: "2,658 mm (104.6 in)",
      kerbWeight: "1,690 kg (3,726 lbs)"
    },
    wheels: {
      frontTyres: "255/35 ZR20",
      rearTyres: "325/30 ZR21",
      brakes: "Carbon-Ceramic Discs (10-piston front)"
    },
    editorial: {
      overview: "The Lamborghini Temerario marks a revolutionary new chapter as the successor to the Huracán, featuring the world's first production supercar V8 engine capable of spinning to an extraordinary 10,000 RPM.",
      design: "Hexagonal signature lighting elements, an aggressive front shark nose, and exposed rear wheels with a massive functional aerodynamic diffuser.",
      interior: "Increased headroom and legroom over the Huracán with lightweight carbon-fiber sport seats, three interactive cockpit displays, and an integrated telemetry recording suite."
    },
    mainImage: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=1600&q=85", caption: "Hexagonal DRLs & Low Aerodynamic Nose", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85", caption: "Exposed Engine & High-Downforce Tail", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 10,000 RPM Digital Tachometer View", type: "interior" }
    ]
  },

  // --- BUGATTI ---
  {
    id: "bugatti-tourbillon",
    brand: "Bugatti",
    model: "Tourbillon",
    year: 2026,
    region: "[EU]",
    body: "Supercar",
    bodySubtype: "Hypercar",
    fuel: "Hybrid",
    price: "$4,100,000",
    popularity: 100,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "8.3L Naturally Aspirated 90° V16 + 3 Electric Motors",
      displacement: "8,355 cc",
      power: "1,775 HP (1,324 kW) Combined",
      torque: "Over 1,000 lb-ft + Electric",
      redline: "9,000 rpm",
      battery: "24.8 kWh 800V Oil-Cooled Battery"
    },
    transmission: {
      gearbox: "8-Speed Dual-Clutch Transaxle",
      drivetrain: "All-Wheel Drive (AWD with Front Electric Motors)",
      differential: "Mechanical LSD with e-Torque Vectoring"
    },
    performance: {
      zeroToHundred: "2.0 sec",
      zeroToSixty: "1.9 sec",
      zeroToTwoHundred: "Under 5.0 sec",
      topSpeed: "445 km/h (276 mph)",
      brakingHundredToZero: "Active Rear Airbrake & Carbon-Ceramic"
    },
    dimensions: {
      length: "4,671 mm (183.9 in)",
      width: "2,051 mm (80.7 in)",
      height: "1,189 mm (46.8 in)",
      wheelbase: "2,740 mm (107.9 in)",
      kerbWeight: "1,995 kg (4,398 lbs)"
    },
    wheels: {
      frontTyres: "285/35 R20",
      rearTyres: "345/30 R21",
      brakes: "Carbon-Carbon Matrix Brakes"
    },
    editorial: {
      overview: "The Bugatti Tourbillon represents timeless automotive high horology. Rejection of digital obsolescence in favor of an authentic Swiss watchmaker-crafted mechanical skeleton instrument cluster and an earth-shattering 8.3-liter naturally aspirated Cosworth V16 engine.",
      design: "Sculpted around the iconic Bugatti Horseshoe grille, Bugatti Line lateral c-curve, central spinal ridge, and electrically actuated dihedral butterfly doors.",
      interior: "Featuring a fixed-hub steering wheel where the mechanical gauge cluster remains completely stationary while the wheel turns. Over 600 individual titanium, sapphire crystal, and ruby parts comprise the gauges."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/5/51/Bugatti_Tourbillon.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Bugatti_Tourbillon.jpg", caption: "Bugatti Tourbillon - Front 3/4 Horseshoe Grille & Dihedral Doors", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85", caption: "Immense Rear Venturi Diffuser with Integrated Exhaust", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Swiss Horology Skeletonized Instrument Cluster", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Fixed-Hub Steering Wheel & Crystal Crystal Center Console", type: "interior" }
    ]
  },

  // --- CHEVROLET CORVETTE ---
  {
    id: "chevrolet-corvette-z06",
    brand: "Chevrolet",
    model: "Corvette Z06",
    year: 2024,
    region: "[US]",
    body: "Sports Cars",
    bodySubtype: "Mid-Engine American Supercar",
    fuel: "Petrol",
    price: "$114,395",
    popularity: 93,
    isLatest: false,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "5.5L Naturally Aspirated Flat-Plane Crank V8 (LT6)",
      displacement: "5,463 cc",
      power: "670 HP (500 kW) @ 8,400 rpm",
      torque: "460 lb-ft (624 Nm) @ 6,300 rpm",
      redline: "8,600 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "8-Speed Dual-Clutch Tremec",
      drivetrain: "Rear-Wheel Drive (RWD)",
      differential: "Electronic Limited-Slip Differential (eLSD)"
    },
    performance: {
      zeroToHundred: "2.7 sec",
      zeroToSixty: "2.6 sec",
      zeroToTwoHundred: "10.1 sec",
      topSpeed: "314 km/h (195 mph)",
      brakingHundredToZero: "95 ft (29.0 m)"
    },
    dimensions: {
      length: "4,688 mm (184.6 in)",
      width: "2,025 mm (79.7 in)",
      height: "1,235 mm (48.6 in)",
      wheelbase: "2,722 mm (107.2 in)",
      kerbWeight: "1,560 kg (3,439 lbs)"
    },
    wheels: {
      frontTyres: "275/30 ZR20",
      rearTyres: "345/25 ZR21",
      brakes: "Brembo 6-piston front / 4-piston rear"
    },
    editorial: {
      overview: "The C8 Corvette Z06 puts exotic mid-engine supercars on notice. Powered by the LT6—the most powerful naturally aspirated production V8 ever made—it screams to an 8,600 RPM redline with pure racing pedigree.",
      design: "3.6 inches wider than the standard Stingray with massive side air scoops, a floating carbon-fiber rear wing, and center-exit quad exhaust tips tuned for acoustic resonance.",
      interior: "Fighter-jet inspired cockpit with hand-wrapped leather, carbon-fiber steering wheel with carbon paddle shifters, and high-bolster GT2 bucket seats."
    },
    mainImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85", caption: "Widebody Front Splitter & Canards", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Carbon-Fiber Driver Wall & Squircle Steering Wheel", type: "interior" }
    ]
  },

  // --- FORD ---
  {
    id: "ford-mustang-gt",
    brand: "Ford",
    model: "Mustang GT V8",
    year: 2024,
    region: "[US]",
    body: "Coupes",
    bodySubtype: "American Muscle Coupe",
    fuel: "Petrol",
    price: "$42,710",
    popularity: 94,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "5.0L Naturally Aspirated Gen IV Coyote V8",
      displacement: "5,038 cc",
      power: "480 HP (358 kW) @ 7,150 rpm",
      torque: "415 lb-ft (563 Nm) @ 4,900 rpm",
      redline: "7,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed Manual with Rev-Matching / 10-Speed Auto",
      drivetrain: "Rear-Wheel Drive (RWD)",
      differential: "Torsen Limited-Slip Differential"
    },
    performance: {
      zeroToHundred: "4.3 sec",
      zeroToSixty: "4.1 sec",
      zeroToTwoHundred: "14.8 sec",
      topSpeed: "257 km/h (160 mph)",
      brakingHundredToZero: "110 ft (33.5 m)"
    },
    dimensions: {
      length: "4,811 mm (189.4 in)",
      width: "1,915 mm (75.4 in)",
      height: "1,397 mm (55.0 in)",
      wheelbase: "2,718 mm (107.0 in)",
      kerbWeight: "1,736 kg (3,827 lbs)"
    },
    wheels: {
      frontTyres: "255/40 R19",
      rearTyres: "275/40 R19",
      brakes: "Brembo 6-piston front / 4-piston rear"
    },
    editorial: {
      overview: "The 7th-generation Ford Mustang GT continues the American muscle legend with dual throttle-body Coyote V8 induction, active valve exhaust, and a fighter-jet inspired cockpit.",
      design: "Aggressive front fascia with tri-bar LED headlamps, functional bonnet heat extractor, and classic fastback proportions.",
      interior: "Customizable dual curved screens powered by Unreal Engine, featuring vintage Fox Body instrument cluster mode and segment-first Electronic Drift Brake."
    },
    mainImage: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=85", caption: "Aggressive Muscle Grille & Tri-Bar Headlights", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1600&q=85", caption: "Sculpted Hood Vent & Profile Lines", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=85", caption: "Active Quad Chrome Exhaust Tips", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Dual Curved Screens Powered by Unreal Engine", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Electronic Drift Handbrake Handle", type: "interior" }
    ]
  },

  // --- TOYOTA ---
  {
    id: "toyota-gr-supra",
    brand: "Toyota",
    model: "GR Supra 3.0",
    year: 2024,
    region: "[US]",
    body: "Sports Cars",
    bodySubtype: "Pure Sports Coupe",
    fuel: "Petrol",
    price: "$56,450",
    popularity: 89,
    isLatest: false,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "3.0L Twin-Scroll Single-Turbo Inline-6 (B58)",
      displacement: "2,998 cc",
      power: "382 HP (285 kW) @ 5,800 rpm",
      torque: "368 lb-ft (500 Nm) @ 1,800 rpm",
      redline: "6,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed Intelligent Manual (iMT) / 8-Speed Auto",
      drivetrain: "Rear-Wheel Drive (RWD)",
      differential: "Active Rear Differential"
    },
    performance: {
      zeroToHundred: "3.9 sec",
      zeroToSixty: "3.7 sec",
      zeroToTwoHundred: "14.2 sec",
      topSpeed: "250 km/h (155 mph)",
      brakingHundredToZero: "107 ft (32.6 m)"
    },
    dimensions: {
      length: "4,379 mm (172.4 in)",
      width: "1,854 mm (73.0 in)",
      height: "1,292 mm (50.9 in)",
      wheelbase: "2,470 mm (97.2 in)",
      kerbWeight: "1,542 kg (3,400 lbs)"
    },
    wheels: {
      frontTyres: "255/35 ZR19",
      rearTyres: "275/35 ZR19",
      brakes: "Brembo 4-piston front"
    },
    editorial: {
      overview: "Tuned by TOYOTA GAZOO Racing at the Nürburgring, the GR Supra delivers pure sports car dynamics with 50:50 weight balance, active differential, and an available 6-speed manual gearbox.",
      design: "Condensed double-bubble roof, prominent ducktail rear spoiler, and wide wheel arches paying homage to the legendary 4th-generation Supra.",
      interior: "Driver-centric layout with high-grip sport seats, knee pads for hard cornering, and intuitive digital telemetry display."
    },
    mainImage: "https://images.unsplash.com/photo-1756990683708-afd38ed20f1f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1756990683708-afd38ed20f1f?auto=format&fit=crop&w=1600&q=85", caption: "Front 3/4 View & Sculpted Hood Lines", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85", caption: "Ducktail Spoiler & Integrated Dual Exhaust", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Driver-Oriented Cockpit with Sport Seats", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 6-Speed Manual Shifter with Red Stitching", type: "interior" }
    ]
  },

  // --- TESLA ---
  {
    id: "tesla-model-s-plaid",
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    region: "[US]",
    body: "Sedans",
    bodySubtype: "High-Performance Electric Saloon",
    fuel: "Electric",
    price: "$89,990",
    popularity: 95,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "Tri-Motor Electric Powertrain with Carbon-Sleeved Rotors",
      displacement: "N/A",
      power: "1,020 HP (760 kW)",
      torque: "1,050 lb-ft (1,420 Nm)",
      redline: "20,000 rpm",
      battery: "100 kWh Lithium-ion (359 miles range)"
    },
    transmission: {
      gearbox: "Single-Speed Fixed Gear",
      drivetrain: "All-Wheel Drive (Tri-Motor Torque Vectoring AWD)",
      differential: "Dual Independent Rear Motors"
    },
    performance: {
      zeroToHundred: "2.1 sec",
      zeroToSixty: "1.99 sec",
      zeroToTwoHundred: "6.2 sec",
      topSpeed: "322 km/h (200 mph)",
      brakingHundredToZero: "104 ft (31.7 m)"
    },
    dimensions: {
      length: "4,978 mm (196.0 in)",
      width: "1,964 mm (77.3 in)",
      height: "1,445 mm (56.9 in)",
      wheelbase: "2,960 mm (116.5 in)",
      kerbWeight: "2,162 kg (4,766 lbs)"
    },
    wheels: {
      frontTyres: "265/35 ZR21",
      rearTyres: "295/30 ZR21",
      brakes: "Carbon-Silicon Carbide Track Package Available"
    },
    editorial: {
      overview: "With a tri-motor electric powertrain delivering 1,020 horsepower and torque vectoring, the Model S Plaid offers supercar-beating acceleration with family sedan practicality.",
      design: "Ultra-low 0.208 drag coefficient with flush motorized handles, subtle carbon-fiber decklid spoiler, and wide rear track.",
      interior: "17-inch cinematic tilt touchscreen with 2200x1300 resolution, rear passenger gaming display, and yoke or round steering wheel."
    },
    mainImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=85", caption: "Aerodynamic Front Fascia & Carbon Spoiler", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1600&q=85", caption: "Side Profile & Flush Door Handles", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 17-inch Cinematic Display & Yoke Steering", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Rear Seat Entertainment Display", type: "interior" }
    ],
    officialUrl: "https://www.tesla.com",
    wikiUrl: "https://en.wikipedia.org/wiki/Tesla_Model_S"
  },

  // --- TATA MOTORS (INDIAN) ---
  {
    id: "tata-sierra-ev-concept",
    brand: "Tata",
    model: "Sierra EV Concept",
    year: 2026,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Electric Lifestyle SUV",
    fuel: "Electric",
    price: "₹25,00,000 (Est.)",
    popularity: 97,
    isLatest: true,
    isConcept: true,
    isEyeCandy: true,
    engine: {
      type: "Dual-Motor All-Wheel Drive Gen-2 EV Architecture",
      displacement: "N/A",
      power: "280 HP (209 kW)",
      torque: "380 lb-ft (515 Nm)",
      redline: "16,000 rpm",
      battery: "69 kWh Liquid-Cooled Lithium-ion (550 km Range)"
    },
    transmission: {
      gearbox: "Single-Speed Automatic",
      drivetrain: "All-Wheel Drive (AWD)",
      differential: "Electronic Torque Vectoring"
    },
    performance: {
      zeroToHundred: "6.5 sec",
      zeroToSixty: "6.2 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "180 km/h (112 mph)",
      brakingHundredToZero: "128 ft (39.0 m)"
    },
    dimensions: {
      length: "4,410 mm (173.6 in)",
      width: "1,860 mm (73.2 in)",
      height: "1,730 mm (68.1 in)",
      wheelbase: "2,670 mm (105.1 in)",
      kerbWeight: "1,850 kg (4,078 lbs)"
    },
    wheels: {
      frontTyres: "235/55 R19",
      rearTyres: "235/55 R19",
      brakes: "All-Round Ventilated Discs with Regenerative Braking"
    },
    editorial: {
      overview: "The Tata Sierra EV re-imagines one of India's most celebrated automotive icons. Showcased with an expansive signature rear curved glasshouse, flush door handles, and Tata's Acti.ev pure-electric skateboard architecture.",
      design: "Honoring the original 1991 Sierra, the new concept combines a muscular front fascia with full-width horizon LED light bars, contrasting black roof, and rugged squared wheel arches.",
      interior: "A lounge-inspired cabin with sustainable fabrics, revolving front passenger seats, ambient lounge lighting, and panoramic dual 12.3-inch floating screens."
    },
    mainImage: "images/tata_sierra_ev.jpg",
    gallery: [
      { url: "images/tata_sierra_ev.jpg", caption: "Tata Sierra EV Concept - Authentic Exterior", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1615063029891-497bebd4f03c?auto=format&fit=crop&w=1600&q=85", caption: "High Ground Clearance & Flush Aero Wheels", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Floating Cockpit Displays & Minimalist Dash", type: "interior" },
      { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Lounge Seating & Sustainable Upholstery", type: "interior" }
    ],
    officialUrl: "https://ev.tatamotors.com",
    wikiUrl: "https://en.wikipedia.org/wiki/Tata_Sierra"
  },
  {
    id: "tata-harrier",
    brand: "Tata",
    model: "Harrier Fearless+",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Midsize Premium SUV",
    fuel: "Diesel",
    price: "₹26,44,000",
    popularity: 92,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "2.0L Kryotec Turbocharged Diesel",
      displacement: "1,956 cc",
      power: "170 HP (125 kW) @ 3,750 rpm",
      torque: "258 lb-ft (350 Nm) @ 1,750–2,500 rpm",
      redline: "4,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed Torque Converter Automatic",
      drivetrain: "Front-Wheel Drive (FWD) with Multi-Drive Modes (ESP Terrain Response)",
      differential: "Electronic Stability Program"
    },
    performance: {
      zeroToHundred: "9.8 sec",
      zeroToSixty: "9.3 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "190 km/h (118 mph)",
      brakingHundredToZero: "135 ft (41.1 m)"
    },
    dimensions: {
      length: "4,605 mm (181.3 in)",
      width: "1,922 mm (75.7 in)",
      height: "1,718 mm (67.6 in)",
      wheelbase: "2,741 mm (107.9 in)",
      kerbWeight: "1,695 kg (3,737 lbs)"
    },
    wheels: {
      frontTyres: "245/55 R19",
      rearTyres: "245/55 R19",
      brakes: "Front Ventilated Discs / Rear Solid Discs"
    },
    editorial: {
      overview: "Built on Tata's OMEGArc architecture derived from Land Rover's D8 platform, the Harrier is a flagship midsize SUV commanding immense road presence with bold parametric styling.",
      design: "Features biometric welcome animation on end-to-end LED light bars, signature split headlamp housing, and aerodynamic gloss black skid plates.",
      interior: "The cabin is appointed with Oyster White & Titan Brown dual-tone theme, 12.3-inch touchscreen infotainment, 10-speaker JBL audio system, and touch-based dual-zone climate controls."
    },
    mainImage: "images/tata_harrier.jpg",
    gallery: [
      { url: "images/tata_harrier.jpg", caption: "Tata Harrier Fearless+ - Bold Front Stance", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85", caption: "Muscular Side Silhouette & 19-inch Alloy Wheels", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 12.3-inch Touchscreen with Digital Instrument Cluster", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Leatherette Ventilated Front Seats", type: "interior" }
    ],
    officialUrl: "https://cars.tatamotors.com",
    wikiUrl: "https://en.wikipedia.org/wiki/Tata_Harrier"
  },
  {
    id: "tata-safari",
    brand: "Tata",
    model: "Safari Accomplished+",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Flagship 3-Row 7-Seater SUV",
    fuel: "Diesel",
    price: "₹27,34,000",
    popularity: 95,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "2.0L Kryotec Turbocharged Diesel",
      displacement: "1,956 cc",
      power: "170 HP (125 kW) @ 3,750 rpm",
      torque: "258 lb-ft (350 Nm) @ 1,750–2,500 rpm",
      redline: "4,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed E-Shifter Automatic",
      drivetrain: "Front-Wheel Drive (FWD) with Terrain Response Modes (Normal, Rough, Wet)",
      differential: "Electronic Stability Program with Hill Descent Control"
    },
    performance: {
      zeroToHundred: "10.1 sec",
      zeroToSixty: "9.5 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "190 km/h (118 mph)",
      brakingHundredToZero: "136 ft (41.5 m)"
    },
    dimensions: {
      length: "4,668 mm (183.8 in)",
      width: "1,922 mm (75.7 in)",
      height: "1,795 mm (70.7 in)",
      wheelbase: "2,741 mm (107.9 in)",
      kerbWeight: "1,825 kg (4,023 lbs)"
    },
    wheels: {
      frontTyres: "245/55 R19",
      rearTyres: "245/55 R19",
      brakes: "All 4 Disc Brakes with Corner Stability Control"
    },
    editorial: {
      overview: "The legendary Tata Safari stands as India's premier 3-row flagship SUV, blending Land Rover D8-derived OMEGArc engineering with opulent executive comfort and Level-2 ADAS active safety.",
      design: "Distinguished by its iconic stepped roof silhouette, parametric jewel chrome grille, full-width connected LED daytime lights, and dual-tone R19 Spider alloys.",
      interior: "Luxurious 6 or 7-seater layout with ventilated captain seats, gesture-controlled power tailgate, panoramic sunroof with mood lighting, and dual 12.3-inch screens."
    },
    mainImage: "images/tata_safari.jpg",
    gallery: [
      { url: "images/tata_safari.jpg", caption: "Tata Safari Accomplished+ - Flagship 3-Row SUV", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=85", caption: "Commanding Stance with Connected LED Tail Lamp", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 6/7-Seater Captain Seats & Panoramic Sunroof", type: "interior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 10-Speaker JBL Audio & 12.3-inch Cockpit", type: "interior" }
    ],
    officialUrl: "https://cars.tatamotors.com/suv/safari",
    wikiUrl: "https://en.wikipedia.org/wiki/Tata_Safari"
  },
  {
    id: "tata-curvv-ev",
    brand: "Tata",
    model: "Curvv EV Empowered+",
    year: 2025,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Electric Coupe SUV",
    fuel: "Electric",
    price: "₹21,99,000",
    popularity: 98,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "Permanent Magnet Synchronous Liquid-Cooled Motor (Acti.ev Architecture)",
      displacement: "N/A",
      power: "167 HP (123 kW)",
      torque: "159 lb-ft (215 Nm)",
      redline: "14,000 rpm",
      battery: "55 kWh High-Density LFP Battery (502 km MIDC Range)"
    },
    transmission: {
      gearbox: "Single-Speed E-Drive with Multi-Mode Regenerative Braking",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Traction Control"
    },
    performance: {
      zeroToHundred: "8.6 sec",
      zeroToSixty: "8.1 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "160 km/h (99 mph)",
      brakingHundredToZero: "126 ft (38.4 m)"
    },
    dimensions: {
      length: "4,310 mm (169.7 in)",
      width: "1,810 mm (71.3 in)",
      height: "1,637 mm (64.4 in)",
      wheelbase: "2,560 mm (100.8 in)",
      kerbWeight: "1,550 kg (3,417 lbs)"
    },
    wheels: {
      frontTyres: "215/55 R18",
      rearTyres: "215/55 R18",
      brakes: "All 4 Disc Brakes with Regenerative Paddle Shifters"
    },
    editorial: {
      overview: "The Tata Curvv EV introduces India's first mass-market coupe SUV silhouette, fusing aerodynamic crossover efficiency with an advanced 55 kWh battery delivering over 500 km certified range and Vehicle-to-Load (V2L) capability.",
      design: "Striking sloping coupe roofline, flush motorized door handles, aero-optimized 18-inch wheels, and connected bi-LED horizon light bars with sequential welcome animations.",
      interior: "Minimalist dual-tone cabin equipped with a 12.3-inch floating infotainment system by HARMAN, 10.25-inch digital driver display, 4-spoke illuminated steering wheel, and ventilated seats."
    },
    mainImage: "images/tata_curvv_ev.jpg",
    gallery: [
      { url: "images/tata_curvv_ev.jpg", caption: "Tata Curvv EV - Pure Electric Coupe SUV", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85", caption: "Full-Width LED Horizon Bar & Split Aero Spoilers", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Cinematic Floating Screen & 4-Spoke Illuminated Logo Steering", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Panoramic Sunroof & Ventilated Front Seats", type: "interior" }
    ],
    officialUrl: "https://ev.tatamotors.com/curvv",
    wikiUrl: "https://en.wikipedia.org/wiki/Tata_Curvv"
  },
  {
    id: "tata-nexon-ev",
    brand: "Tata",
    model: "Nexon EV Empowered+",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Compact Electric SUV",
    fuel: "Electric",
    price: "₹19,29,000",
    popularity: 96,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "Gen-2 Permanent Magnet Synchronous Motor (PMSM)",
      displacement: "N/A",
      power: "143 HP (106 kW)",
      torque: "159 lb-ft (215 Nm)",
      redline: "12,000 rpm",
      battery: "40.5 kWh High-Energy Density Battery (465 km Range)"
    },
    transmission: {
      gearbox: "Single-Speed Automatic",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Brake Distribution"
    },
    performance: {
      zeroToHundred: "8.9 sec",
      zeroToSixty: "8.4 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "150 km/h (93 mph)",
      brakingHundredToZero: "125 ft (38.1 m)"
    },
    dimensions: {
      length: "3,994 mm (157.2 in)",
      width: "1,811 mm (71.3 in)",
      height: "1,616 mm (63.6 in)",
      wheelbase: "2,498 mm (98.3 in)",
      kerbWeight: "1,440 kg (3,175 lbs)"
    },
    wheels: {
      frontTyres: "215/60 R16",
      rearTyres: "215/60 R16",
      brakes: "All 4 Disc Brakes with Regenerative Braking"
    },
    editorial: {
      overview: "The Nexon EV is India's pioneer and undisputed king of electric passenger cars, democratizing electric mobility across the subcontinent with over 5-star BNCAP safety and V2V charging.",
      design: "Modernized with sharp digital daytime running lights, a closed front aero grille, contrasting dual-tone roof, and connected X-factor rear tail lights.",
      interior: "Highlights include a 12.3-inch ultra-crisp cinematic touchscreen with Arcade.ev app suite, wireless smartphone connectivity, JBL 9-speaker sound, and ventilated seating."
    },
    mainImage: "images/tata_nexon_ev.jpg",
    gallery: [
      { url: "images/tata_nexon_ev.jpg", caption: "Tata Nexon EV Empowered+ - India's Top Electric SUV", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=85", caption: "X-Factor Connected LED Tail Lamp", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Phygital Control Panel & 12.3-inch Floating Screen", type: "interior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 2-Spoke Illuminated Logo Steering Wheel", type: "interior" }
    ],
    officialUrl: "https://ev.tatamotors.com/nexon",
    wikiUrl: "https://en.wikipedia.org/wiki/Tata_Nexon"
  },
  {
    id: "tata-punch-ev",
    brand: "Tata",
    model: "Punch EV Empowered+",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Micro Electric SUV",
    fuel: "Electric",
    price: "₹14,29,000",
    popularity: 94,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "Liquid-Cooled Permanent Magnet AC Motor (Acti.ev Platform)",
      displacement: "N/A",
      power: "122 HP (90 kW)",
      torque: "140 lb-ft (190 Nm)",
      redline: "11,000 rpm",
      battery: "35 kWh Lithium-ion Battery (421 km Range)"
    },
    transmission: {
      gearbox: "Single-Speed Automatic",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program"
    },
    performance: {
      zeroToHundred: "9.5 sec",
      zeroToSixty: "8.8 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "140 km/h (87 mph)",
      brakingHundredToZero: "128 ft (39.0 m)"
    },
    dimensions: {
      length: "3,857 mm (151.9 in)",
      width: "1,742 mm (68.6 in)",
      height: "1,633 mm (64.3 in)",
      wheelbase: "2,445 mm (96.3 in)",
      kerbWeight: "1,290 kg (2,844 lbs)"
    },
    wheels: {
      frontTyres: "195/60 R16",
      rearTyres: "195/60 R16",
      brakes: "All 4 Disc Brakes"
    },
    editorial: {
      overview: "Built on Tata's dedicated Acti.ev pure EV platform, the Punch EV is India's top-selling micro-SUV boasting a 5-star Bharat NCAP rating, 190 mm ground clearance, and 14-liter front trunk (frunk).",
      design: "Chunky upright stance with full-width horizon DRL, smart charging lid with sequential animation, roof rails, and bold cladding.",
      interior: "Fitted with dual 10.25-inch high-resolution screens, 360-degree surround camera, blind spot monitor, wireless phone charger, and cooled glovebox."
    },
    mainImage: "images/tata_punch_ev.jpg",
    gallery: [
      { url: "images/tata_punch_ev.jpg", caption: "Tata Punch EV - Compact Electric Micro-SUV", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85", caption: "Front Frunk Storage & Charge Port Animation", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Dual 10.25-inch Displays with Wireless CarPlay", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Cooled Glovebox & Jeweled Drive Selector", type: "interior" }
    ],
    officialUrl: "https://ev.tatamotors.com/punch",
    wikiUrl: "https://en.wikipedia.org/wiki/Tata_Punch"
  },
  {
    id: "tata-altroz-racer",
    brand: "Tata",
    model: "Altroz Racer R3",
    year: 2024,
    region: "[IN]",
    body: "Hatchbacks",
    bodySubtype: "Performance Hot Hatchback",
    fuel: "Petrol",
    price: "₹10,99,000",
    popularity: 91,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "1.2L i-Turbo+ Turbocharged 3-Cylinder Petrol",
      displacement: "1,199 cc",
      power: "120 HP (88 kW) @ 5,500 rpm",
      torque: "125 lb-ft (170 Nm) @ 1,750–4,000 rpm",
      redline: "6,000 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed Short-Throw Manual",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Traction Control System"
    },
    performance: {
      zeroToHundred: "10.4 sec",
      zeroToSixty: "9.8 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "185 km/h (115 mph)",
      brakingHundredToZero: "124 ft (37.8 m)"
    },
    dimensions: {
      length: "3,990 mm (157.1 in)",
      width: "1,755 mm (69.1 in)",
      height: "1,523 mm (60.0 in)",
      wheelbase: "2,501 mm (98.5 in)",
      kerbWeight: "1,150 kg (2,535 lbs)"
    },
    wheels: {
      frontTyres: "185/60 R16",
      rearTyres: "185/60 R16",
      brakes: "Front Disc / Rear Drum with ABS & EBD"
    },
    editorial: {
      overview: "The Altroz Racer is Tata's adrenaline-infused performance hatchback built on the ALFA architecture, offering a throaty sport-tuned dual exhaust and segment-first 360-degree camera.",
      design: "Dressed in Pure Grey and Atomic Orange dual-tone schemes with white racing stripes on the hood and roof, extended sport rear spoiler, and blacked-out 16-inch alloy wheels.",
      interior: "Granite Black cabin highlighted by red and orange racing accents, leatherette ventilated seats, 10.25-inch infotainment system, and 7-inch digital cluster."
    },
    mainImage: "images/tata_altroz_racer.jpg",
    gallery: [
      { url: "images/tata_altroz_racer.jpg", caption: "Tata Altroz Racer R3 - Performance Hot Hatchback", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=85", caption: "16-inch Laser Cut Alloys & Sport Exhaust Note", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Granite Black Cabin with Orange Accents & Ventilated Seats", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 6-Speed Short-Throw Gear Shifter", type: "interior" }
    ],
    officialUrl: "https://cars.tatamotors.com/altroz",
    wikiUrl: "https://en.wikipedia.org/wiki/Tata_Altroz"
  },

  // --- MAHINDRA (INDIAN) ---
  {
    id: "mahindra-thar-roxx",
    brand: "Mahindra",
    model: "Thar Roxx 4x4",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "5-Door Off-Road SUV",
    fuel: "Petrol",
    price: "₹22,49,000",
    popularity: 96,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "2.0L mStallion TGDi Turbo Petrol",
      displacement: "1,997 cc",
      power: "177 HP (130 kW) @ 5,000 rpm",
      torque: "280 lb-ft (380 Nm) @ 1,750–3,000 rpm",
      redline: "5,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed AISIN Torque Converter Automatic",
      drivetrain: "4x4 with 4L (Low-Range) Transfer Case & Electronic Locking Differential",
      differential: "Mechanical Locking Differential (MLD) + Brake Locking Differential"
    },
    performance: {
      zeroToHundred: "10.2 sec",
      zeroToSixty: "9.6 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "170 km/h (106 mph)",
      brakingHundredToZero: "138 ft (42.0 m)"
    },
    dimensions: {
      length: "4,428 mm (174.3 in)",
      width: "1,870 mm (73.6 in)",
      height: "1,923 mm (75.7 in)",
      wheelbase: "2,850 mm (112.2 in)",
      kerbWeight: "1,980 kg (4,365 lbs)"
    },
    wheels: {
      frontTyres: "255/60 R19",
      rearTyres: "255/60 R19",
      brakes: "All 4 Disc Brakes with ABS & EBD"
    },
    editorial: {
      overview: "The Thar Roxx is Mahindra's highly anticipated 5-door iteration of the iconic Thar off-roader, built on the rigid 4G ladder-frame platform with sophisticated multi-link rear suspension featuring Watts linkage.",
      design: "Distinctive double-decker grille, C-shaped LED daytime running lamps, extended wheelbase, removable roof panels, and chunky all-terrain tires.",
      interior: "Equipped with twin 10.25-inch high-definition digital screens, Harman Kardon 9-speaker audio system, panoramic sunroof, and ventilated front bucket seats."
    },
    mainImage: "images/mahindra_thar_roxx.jpg",
    gallery: [
      { url: "images/mahindra_thar_roxx.jpg", caption: "Mahindra Thar Roxx 4x4 - 5-Door Off-Road SUV", type: "exterior" },
      { url: "images/mahindra_thar_interior.jpg", caption: "Interior: 10.25-inch Touchscreen with Off-Road Telemetry & Dual-Tone Cabin", type: "interior" },
      { url: "images/mahindra_thar_interior.jpg", caption: "Interior: Panoramic Skyroof & Ventilated Comfort Seating", type: "interior" }
    ],
    officialUrl: "https://auto.mahindra.com",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahindra_Thar"
  },
  {
    id: "mahindra-thar-4x4",
    brand: "Mahindra",
    model: "Thar LX 4x4 (3-Door)",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "3-Door Hardcore 4x4 Off-Roader",
    fuel: "Diesel",
    price: "₹17,60,000",
    popularity: 98,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "2.2L mHawk 130 Turbocharged Diesel",
      displacement: "2,184 cc",
      power: "130 HP (97 kW) @ 3,750 rpm",
      torque: "221 lb-ft (300 Nm) @ 1,600–2,800 rpm",
      redline: "4,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed Manual with Mechanical 4x4 Shift Lever",
      drivetrain: "Shift-on-the-Fly 4WD with 2H, 4H, and 4L Low-Ratio Crawl",
      differential: "Mechanical Locking Rear Differential (MLD)"
    },
    performance: {
      zeroToHundred: "12.1 sec",
      zeroToSixty: "11.4 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "155 km/h (96 mph)",
      brakingHundredToZero: "142 ft (43.3 m)"
    },
    dimensions: {
      length: "3,985 mm (156.9 in)",
      width: "1,820 mm (71.7 in)",
      height: "1,920 mm (75.6 in)",
      wheelbase: "2,450 mm (96.5 in)",
      kerbWeight: "1,750 kg (3,858 lbs)"
    },
    wheels: {
      frontTyres: "255/65 R18",
      rearTyres: "255/65 R18",
      brakes: "Front Disc / Rear Drum with ESP & Roll-Over Mitigation"
    },
    editorial: {
      overview: "The 3-door Mahindra Thar is an off-roading legend that captures the spirit of freedom and adventure, celebrated across India for conquering the highest mountain passes in Ladakh and sand dunes in Rajasthan.",
      design: "Iconic boxy silhouette, circular retro headlamps, exposed door hinges, convertible or hard top options, and 650 mm water wading capability.",
      interior: "IP54 water-and-dust resistant cabin with washable interior floor, roof-mounted speakers, roll-cage, and adventure statistics telemetry."
    },
    mainImage: "images/mahindra_thar_3door.jpg",
    gallery: [
      { url: "images/mahindra_thar_3door.jpg", caption: "Mahindra Thar LX 4x4 - 3-Door Hardcore Off-Roader", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85", caption: "Approach & Departure Angles for Extreme Rock Crawling", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Washable Drizzle-Resistant Cabin with Roll Cage", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Mechanical 4x4 Shift Lever & Adventure Displays", type: "interior" }
    ],
    officialUrl: "https://auto.mahindra.com/suv/thar",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahindra_Thar"
  },
  {
    id: "mahindra-scorpio-n",
    brand: "Mahindra",
    model: "Scorpio-N Z8L 4x4",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "D-Segment Authentic Ladder-Frame SUV",
    fuel: "Diesel",
    price: "₹24,54,000",
    popularity: 97,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "2.2L mHawk Gen-2 All-Aluminum Turbocharged Diesel",
      displacement: "2,184 cc",
      power: "175 HP (129 kW) @ 3,500 rpm",
      torque: "295 lb-ft (400 Nm) @ 1,750–2,750 rpm",
      redline: "4,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed AISIN Automatic",
      drivetrain: "4XPLOR Intelligent Terrain Response (Normal, Snow, Mud, Sand)",
      differential: "Mechanical Locking Differential + Brake Locking Differential"
    },
    performance: {
      zeroToHundred: "9.9 sec",
      zeroToSixty: "9.3 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "185 km/h (115 mph)",
      brakingHundredToZero: "134 ft (40.8 m)"
    },
    dimensions: {
      length: "4,662 mm (183.5 in)",
      width: "1,917 mm (75.5 in)",
      height: "1,857 mm (73.1 in)",
      wheelbase: "2,750 mm (108.3 in)",
      kerbWeight: "2,050 kg (4,519 lbs)"
    },
    wheels: {
      frontTyres: "255/60 R18",
      rearTyres: "255/60 R18",
      brakes: "All 4 Disc Brakes with Frequency Selective Damping (FSD)"
    },
    editorial: {
      overview: "Hailed as the 'Big Daddy of SUVs', the Mahindra Scorpio-N combines an unyielding third-generation ladder-frame chassis with sophisticated multi-link rear suspension with Watts Linkage and intelligent 4XPLOR 4WD.",
      design: "Imposing commanding posture, sting-like chrome front grille, dynamic LED sequential turn signals, and distinctive stacked vertical taillights extending to the roofline.",
      interior: "Upholstered in rich Coffee Black leatherette, boasting a 12-speaker Sony 3D immersive audio system, 8-inch touchscreen with AdrenoX, and electric sunroof."
    },
    mainImage: "images/mahindra_scorpio_n.jpg",
    gallery: [
      { url: "images/mahindra_scorpio_n.jpg", caption: "Mahindra Scorpio-N Z8L 4x4 - The Big Daddy of SUVs", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=85", caption: "Tall Stance & Signature Vertically Stacked Tail Lamps", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Rich Coffee Black Leatherette & Sony 12-Speaker 3D Audio", type: "interior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 4XPLOR Rotary Terrain Selector & Digital Cockpit", type: "interior" }
    ],
    officialUrl: "https://auto.mahindra.com/suv/scorpio-n",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahindra_Scorpio-N"
  },
  {
    id: "mahindra-scorpio-classic",
    brand: "Mahindra",
    model: "Scorpio Classic S11",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Rugged Body-on-Frame SUV",
    fuel: "Diesel",
    price: "₹17,49,000",
    popularity: 93,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "2.2L Gen-2 mHawk Diesel",
      displacement: "2,184 cc",
      power: "132 HP (97 kW) @ 3,750 rpm",
      torque: "221 lb-ft (300 Nm) @ 1,600–2,800 rpm",
      redline: "4,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed Cable Shift Manual",
      drivetrain: "Rear-Wheel Drive (RWD)",
      differential: "Solid Rear Axle"
    },
    performance: {
      zeroToHundred: "12.5 sec",
      zeroToSixty: "11.8 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "165 km/h (103 mph)",
      brakingHundredToZero: "140 ft (42.7 m)"
    },
    dimensions: {
      length: "4,456 mm (175.4 in)",
      width: "1,820 mm (71.7 in)",
      height: "1,995 mm (78.5 in)",
      wheelbase: "2,680 mm (105.5 in)",
      kerbWeight: "1,860 kg (4,101 lbs)"
    },
    wheels: {
      frontTyres: "235/65 R17",
      rearTyres: "235/65 R17",
      brakes: "Front Disc / Rear Drum with ABS"
    },
    editorial: {
      overview: "The Scorpio Classic preserves the unmatched raw authority and indestructible mechanical character that made the Scorpio badge an Indian cultural phenomenon for over two decades.",
      design: "Classic hood scoop, bold chrome vertical grille slats, unmistakable tall tower taillights, and robust body cladding.",
      interior: "Refreshed with a classic wood-finish center console, 9-inch touchscreen infotainment with phone mirroring, and quilted fabric seating."
    },
    mainImage: "images/mahindra_scorpio_classic.jpg",
    gallery: [
      { url: "images/mahindra_scorpio_classic.jpg", caption: "Mahindra Scorpio Classic S11 - Rugged Body-on-Frame SUV", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85", caption: "Tower LED Taillights & Side Steps", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Wood-Finished Console & 9-inch Touchscreen", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Spacious 7/9-Seater High-Seating Layout", type: "interior" }
    ],
    officialUrl: "https://auto.mahindra.com/suv/scorpio-classic",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahindra_Scorpio"
  },
  {
    id: "mahindra-xuv700",
    brand: "Mahindra",
    model: "XUV700 AX7L",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Midsize Luxury SUV",
    fuel: "Petrol",
    price: "₹25,49,000",
    popularity: 94,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "2.0L mStallion Turbocharged Petrol",
      displacement: "1,997 cc",
      power: "200 HP (147 kW) @ 5,000 rpm",
      torque: "280 lb-ft (380 Nm) @ 1,750–3,000 rpm",
      redline: "6,000 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed AISIN Automatic",
      drivetrain: "All-Wheel Drive (AWD)",
      differential: "Electronic AWD Coupling"
    },
    performance: {
      zeroToHundred: "8.8 sec",
      zeroToSixty: "8.4 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "200 km/h (124 mph)",
      brakingHundredToZero: "130 ft (39.6 m)"
    },
    dimensions: {
      length: "4,695 mm (184.8 in)",
      width: "1,890 mm (74.4 in)",
      height: "1,755 mm (69.1 in)",
      wheelbase: "2,750 mm (108.3 in)",
      kerbWeight: "1,780 kg (3,924 lbs)"
    },
    wheels: {
      frontTyres: "235/60 R18",
      rearTyres: "235/60 R18",
      brakes: "All 4 Disc Brakes"
    },
    editorial: {
      overview: "The Mahindra XUV700 is a technologically advanced midsize SUV equipped with Level-2 ADAS driver assistance, flush smart door handles, and a class-leading 200 hp turbo-petrol powertrain.",
      design: "Features arrow-head LED taillamps, clear C-shaped LED daytime lights, and a prominent sculpted hood with Twin Peaks emblem.",
      interior: "Dual 10.25-inch superscreen cockpit display, Sony 12-speaker 3D sound system, memory driver seat with welcome retract, and expansive skyroof."
    },
    mainImage: "images/mahindra_xuv700.jpg",
    gallery: [
      { url: "images/mahindra_xuv700.jpg", caption: "Mahindra XUV700 AX7L - Midsize Luxury Tech SUV", type: "exterior" },
      { url: "images/mahindra_xuv700_interior.jpg", caption: "Interior: Dual 10.25-inch Superscreen Cockpit with AdrenoX", type: "interior" },
      { url: "images/mahindra_xuv700_interior.jpg", caption: "Interior: Premium Leatherette Seats with Memory Function", type: "interior" }
    ],
    officialUrl: "https://auto.mahindra.com/suv/xuv700",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahindra_XUV700"
  },
  {
    id: "mahindra-xuv-3xo",
    brand: "Mahindra",
    model: "XUV 3XO AX7L",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Subcompact Tech SUV",
    fuel: "Petrol",
    price: "₹15,49,000",
    popularity: 95,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "1.2L mStallion TGDi Direct Injection Turbo Petrol",
      displacement: "1,197 cc",
      power: "130 HP (96 kW) @ 5,000 rpm",
      torque: "170 lb-ft (230 Nm) @ 1,500–3,750 rpm",
      redline: "6,000 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "6-Speed AISIN Torque Converter Automatic",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program with 3 Steering Modes"
    },
    performance: {
      zeroToHundred: "9.2 sec",
      zeroToSixty: "8.6 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "180 km/h (112 mph)",
      brakingHundredToZero: "123 ft (37.5 m)"
    },
    dimensions: {
      length: "3,990 mm (157.1 in)",
      width: "1,821 mm (71.7 in)",
      height: "1,647 mm (64.8 in)",
      wheelbase: "2,600 mm (102.4 in)",
      kerbWeight: "1,380 kg (3,042 lbs)"
    },
    wheels: {
      frontTyres: "215/55 R17",
      rearTyres: "215/55 R17",
      brakes: "All 4 Disc Brakes"
    },
    editorial: {
      overview: "The Mahindra XUV 3XO redefines the subcompact SUV segment in India with first-in-segment Level-2 ADAS, panoramic skyroof, and the punchy 130 hp TGDi direct-injection motor.",
      design: "Aggressive front fascia with drop-down C-shaped LED daytime lights, piano black grille accents, and full-width infinity LED connected tail lamp.",
      interior: "Dual 10.25-inch high-definition floating screens, Harman Kardon audio with 65W fast USB-C charging, and soft-touch dashboard."
    },
    mainImage: "images/mahindra_xuv_3xo.jpg",
    gallery: [
      { url: "images/mahindra_xuv_3xo.jpg", caption: "Mahindra XUV 3XO AX7L - Subcompact Tech SUV", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85", caption: "Full-Width Infinity LED Tail Lamp", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: First-in-Segment Panoramic Skyroof & Dual 10.25\" Screens", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Harman Kardon Premium Audio System", type: "interior" }
    ],
    officialUrl: "https://auto.mahindra.com/suv/xuv3xo",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahindra_XUV_3XO"
  },
  {
    id: "mahindra-be-6e",
    brand: "Mahindra",
    model: "BE 6e Electric Coupe",
    year: 2025,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Born-Electric INGLO SUV Coupe",
    fuel: "Electric",
    price: "₹24,90,000 (Est.)",
    popularity: 98,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "Rear-Mounted High-Output Permanent Magnet Motor (INGLO Architecture)",
      displacement: "N/A",
      power: "281 HP (207 kW)",
      torque: "280 lb-ft (380 Nm)",
      redline: "15,000 rpm",
      battery: "79 kWh Blade LFP Cell-to-Pack Battery (682 km WLTP Range)"
    },
    transmission: {
      gearbox: "Single-Speed High-Efficiency Transmission",
      drivetrain: "Rear-Wheel Drive (RWD) with semi-active suspension",
      differential: "Electronic Torque Vectoring"
    },
    performance: {
      zeroToHundred: "6.7 sec",
      zeroToSixty: "6.3 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "200 km/h (124 mph)",
      brakingHundredToZero: "120 ft (36.5 m)"
    },
    dimensions: {
      length: "4,371 mm (172.1 in)",
      width: "1,906 mm (75.0 in)",
      height: "1,627 mm (64.1 in)",
      wheelbase: "2,775 mm (109.3 in)",
      kerbWeight: "1,910 kg (4,211 lbs)"
    },
    wheels: {
      frontTyres: "245/50 R20",
      rearTyres: "245/50 R20",
      brakes: "Brake-by-Wire with Intelligent Deceleration Assist"
    },
    editorial: {
      overview: "The BE 6e represents Mahindra's born-electric future, engineered from the ground up on the modular INGLO platform featuring 175 kW DC ultra-fast charging (20-80% in 20 mins) and semi-active dampers.",
      design: "Futuristic blade styling with functional aerodynamic hood air pass-through ducts, illuminated logos, C-shaped daytime running lights, and sweeping fastback roofline.",
      interior: "Fighter-jet inspired Halo Cockpit surrounding the driver with illuminated floating center bridge, ambient light tubes, and multi-display immersive glass screen."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/9/91/Mahindra_BE6_pic_1_%28cropped%29.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Mahindra_BE6_pic_1_%28cropped%29.jpg", caption: "Mahindra BE 6e Electric Coupe - Born-Electric INGLO Architecture", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85", caption: "Coupe Glasshouse with Illuminated Aero Spoilers", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Sci-Fi Halo Cockpit with Floating Center Bridge", type: "interior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Aircraft-Style Drive Selector & Ambient Lighting", type: "interior" }
    ],
    officialUrl: "https://mahindraelectricsuv.com",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahindra_%26_Mahindra"
  },

  // --- MARUTI SUZUKI (INDIAN) ---
  {
    id: "maruti-suzuki-jimny",
    brand: "Maruti Suzuki",
    model: "Jimny Alpha 4x4",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "5-Door Ladder-Frame 4x4",
    fuel: "Petrol",
    price: "₹14,95,000",
    popularity: 96,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "1.5L K15B 4-Cylinder Naturally Aspirated Petrol",
      displacement: "1,462 cc",
      power: "103 HP (77 kW) @ 6,000 rpm",
      torque: "99 lb-ft (134 Nm) @ 4,000 rpm",
      redline: "6,300 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "5-Speed Manual with Dedicated Low-Range Transfer Lever",
      drivetrain: "ALLGRIP PRO Part-Time 4WD with 2H, 4H, and 4L Modes",
      differential: "Brake LSD (Limited Slip Differential)"
    },
    performance: {
      zeroToHundred: "12.8 sec",
      zeroToSixty: "12.0 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "145 km/h (90 mph)",
      brakingHundredToZero: "139 ft (42.4 m)"
    },
    dimensions: {
      length: "3,985 mm (156.9 in)",
      width: "1,645 mm (64.8 in)",
      height: "1,720 mm (67.7 in)",
      wheelbase: "2,590 mm (102.0 in)",
      kerbWeight: "1,200 kg (2,646 lbs)"
    },
    wheels: {
      frontTyres: "195/80 R15",
      rearTyres: "195/80 R15",
      brakes: "Front Solid Discs / Rear Drums"
    },
    editorial: {
      overview: "Manufactured exclusively in India for both domestic and international markets, the 5-door Jimny features a heavy-duty ladder frame, 3-link rigid axle coil spring suspension, and ALLGRIP PRO 4WD for go-anywhere mountain exploration.",
      design: "Retro upright geometry, 5-slot chrome-accented vertical grille, round LED headlamps with washer jets, upright windshield, and rear door-mounted full-size spare wheel.",
      interior: "Utilitarian scratch-resistant dashboard, grab handle for co-driver, 9-inch SmartPlay Pro+ touchscreen with wireless Apple CarPlay & Android Auto, and cruise control."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/1/13/2019_Suzuki_Jimny_SZ5_4X4_Automatic_1.5.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/1/13/2019_Suzuki_Jimny_SZ5_4X4_Automatic_1.5.jpg", caption: "Maruti Suzuki Jimny Alpha 4x4 - Round LED Headlamps & 5-Slot Grille", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1612057473166-af2affdb92ad?auto=format&fit=crop&w=1600&q=85", caption: "Rigid 3-Link Axle Suspension & ALLGRIP PRO 4WD", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Scratch-Resistant Tactical Dashboard & 9-inch SmartPlay Pro+", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Mechanical 4WD Shift Lever & Passenger Grab Rail", type: "interior" }
    ],
    officialUrl: "https://www.nexaexperience.com/jimny",
    wikiUrl: "https://en.wikipedia.org/wiki/Suzuki_Jimny"
  },
  {
    id: "maruti-suzuki-grand-vitara",
    brand: "Maruti Suzuki",
    model: "Grand Vitara Strong Hybrid",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Midsize Intelligent Electric Hybrid SUV",
    fuel: "Hybrid",
    price: "₹19,93,000",
    popularity: 95,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "1.5L 3-Cylinder Atkinson Cycle Petrol + Synchronous AC Electric Motor",
      displacement: "1,490 cc",
      power: "114 HP (85 kW) Combined System Power",
      torque: "104 lb-ft (141 Nm) Engine + Electric Torque",
      redline: "5,500 rpm",
      battery: "Lithium-ion Self-Charging Hybrid Battery (27.97 km/l Fuel Efficiency)"
    },
    transmission: {
      gearbox: "e-CVT (Electronic Continuous Variable Transmission)",
      drivetrain: "Front-Wheel Drive / ALLGRIP Select AWD Available",
      differential: "Electronic Drive Mode Selection"
    },
    performance: {
      zeroToHundred: "11.5 sec",
      zeroToSixty: "10.8 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "175 km/h (109 mph)",
      brakingHundredToZero: "130 ft (39.6 m)"
    },
    dimensions: {
      length: "4,345 mm (171.1 in)",
      width: "1,795 mm (70.7 in)",
      height: "1,645 mm (64.8 in)",
      wheelbase: "2,600 mm (102.4 in)",
      kerbWeight: "1,295 kg (2,855 lbs)"
    },
    wheels: {
      frontTyres: "215/60 R17",
      rearTyres: "215/60 R17",
      brakes: "All 4 Disc Brakes"
    },
    editorial: {
      overview: "The Grand Vitara is Maruti Suzuki's flagship midsize SUV featuring an advanced self-charging strong hybrid powertrain capable of running in pure EV mode, achieving an astonishing 27.97 km/l fuel economy.",
      design: "Crafted with NEXA's 'Crafted Futurism' design philosophy: NEXWave front grille with dark chrome, 3-point NEXTre' LED daytime running lights, and full-width connected LED light bar across the tailgate.",
      interior: "Dual-tone black and bordeaux faux leather with champagne gold accents, panoramic sliding sunroof, head-up display (HUD), 360-degree camera, and ventilated front seats."
    },
    mainImage: "images/maruti_grand_vitara.png",
    gallery: [
      { url: "images/maruti_grand_vitara.png", caption: "Maruti Suzuki Grand Vitara - NEXWave Grille & NEXTre' DRLs", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85", caption: "Full-Width LED Light Bar & Precision Cut 17\" Alloys", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Dual-Pane Panoramic Sunroof & Head-Up Display", type: "interior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Self-Charging Hybrid Energy Monitor & Ventilated Seats", type: "interior" }
    ],
    officialUrl: "https://www.nexaexperience.com/grand-vitara",
    wikiUrl: "https://en.wikipedia.org/wiki/Suzuki_Grand_Vitara"
  },
  {
    id: "maruti-suzuki-swift",
    brand: "Maruti Suzuki",
    model: "Swift ZXi+ Dual Tone",
    year: 2024,
    region: "[IN]",
    body: "Hatchbacks",
    bodySubtype: "Sporty Premium Hatchback",
    fuel: "Petrol",
    price: "₹9,64,000",
    popularity: 99,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "1.2L Z-Series 3-Cylinder High-Efficiency Dual VVT Petrol",
      displacement: "1,197 cc",
      power: "82 HP (60 kW) @ 5,700 rpm",
      torque: "83 lb-ft (112 Nm) @ 4,300 rpm",
      redline: "6,200 rpm",
      battery: "N/A (25.75 km/l Fuel Economy)"
    },
    transmission: {
      gearbox: "5-Speed Manual Transmission",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program (ESP)"
    },
    performance: {
      zeroToHundred: "11.8 sec",
      zeroToSixty: "11.1 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "165 km/h (103 mph)",
      brakingHundredToZero: "125 ft (38.1 m)"
    },
    dimensions: {
      length: "3,860 mm (152.0 in)",
      width: "1,735 mm (68.3 in)",
      height: "1,520 mm (59.8 in)",
      wheelbase: "2,450 mm (96.5 in)",
      kerbWeight: "920 kg (2,028 lbs)"
    },
    wheels: {
      frontTyres: "185/65 R15",
      rearTyres: "185/65 R15",
      brakes: "Front Ventilated Disc / Rear Drum with 6 Airbags Standard"
    },
    editorial: {
      overview: "The 4th-generation Maruti Suzuki Swift elevates India's favorite sporty hatchback with the brand-new Z12E 3-cylinder engine, standard 6 airbags, and a sharper, lower aerodynamic stance.",
      design: "Smoked LED projector headlights with Boomerang DRLs, glossy black honeycomb front grille, wrap-around clamshell hood, and floating roof design with black pillar accents.",
      interior: "Center stack tilted 8 degrees towards the driver, 9-inch SmartPlay Pro+ touchscreen, flat-bottom steering wheel with audio switches, and wireless Qi smartphone charging."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg", caption: "Maruti Suzuki Swift 2024 - Gloss Black Grille & L-Shaped LED DRLs", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85", caption: "Floating Roof Silhouette & Two-Tone Precision Wheels", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Driver-Focused Center Stack & Flat-Bottom Steering", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 9-inch SmartPlay Pro+ with Wireless Smartphone Link", type: "interior" }
    ],
    officialUrl: "https://www.marutisuzuki.com/swift",
    wikiUrl: "https://en.wikipedia.org/wiki/Suzuki_Swift"
  },
  {
    id: "maruti-suzuki-brezza",
    brand: "Maruti Suzuki",
    model: "Brezza ZXi+ Dual Tone",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Urban Compact SUV",
    fuel: "Petrol",
    price: "₹14,14,000",
    popularity: 95,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    engine: {
      type: "1.5L K15C Smart Hybrid DualJet Dual VVT Petrol",
      displacement: "1,462 cc",
      power: "103 HP (76 kW) @ 6,000 rpm",
      torque: "101 lb-ft (137 Nm) @ 4,400 rpm",
      redline: "6,200 rpm",
      battery: "Dual-Battery Progressive Smart Hybrid with Torque Assist"
    },
    transmission: {
      gearbox: "6-Speed Automatic with Steering Paddle Shifters",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program with Hill Hold Assist"
    },
    performance: {
      zeroToHundred: "11.6 sec",
      zeroToSixty: "10.9 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "170 km/h (106 mph)",
      brakingHundredToZero: "128 ft (39.0 m)"
    },
    dimensions: {
      length: "3,995 mm (157.3 in)",
      width: "1,790 mm (70.5 in)",
      height: "1,685 mm (66.3 in)",
      wheelbase: "2,500 mm (98.4 in)",
      kerbWeight: "1,190 kg (2,624 lbs)"
    },
    wheels: {
      frontTyres: "215/60 R16",
      rearTyres: "215/60 R16",
      brakes: "Front Ventilated Discs / Rear Drums"
    },
    editorial: {
      overview: "The Maruti Suzuki Brezza is India's premier compact urban SUV, recognized for robust build reliability, Smart Hybrid fuel efficiency, and a comprehensive suite of modern tech.",
      design: "Bold upright SUV posture with dual LED projector headlamps, geometric gunmetal skid plates, floating contrast roof, and sleek LED taillights.",
      interior: "Equipped with electric sunroof, head-up display, 360-degree view camera, 9-inch SmartPlay Pro+ screen with Arkamys surround sound, and cooled center console."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/e/ee/2022_Maruti_Suzuki_Brezza_ZXi%2B_%28India%29_front_view_03.png",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/2022_Maruti_Suzuki_Brezza_ZXi%2B_%28India%29_front_view_03.png", caption: "Maruti Suzuki Brezza - Dual LED Projector Headlamps & Skid Plates", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=85", caption: "Floating Roof with Shark Fin Antenna", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Electric Sunroof, 360-View Camera & Wireless Charging", type: "interior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Head-Up Display & Paddle Shifters", type: "interior" }
    ],
    officialUrl: "https://www.marutisuzuki.com/brezza",
    wikiUrl: "https://en.wikipedia.org/wiki/Suzuki_Brezza"
  },
  {
    id: "maruti-suzuki-fronx",
    brand: "Maruti Suzuki",
    model: "Fronx Turbo Alpha",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Athletic Coupe Crossover",
    fuel: "Petrol",
    price: "₹13,04,000",
    popularity: 96,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    engine: {
      type: "1.0L K-Series Turbo Boosterjet Direct-Injection Petrol",
      displacement: "998 cc",
      power: "100 HP (74 kW) @ 5,500 rpm",
      torque: "109 lb-ft (148 Nm) @ 2,000–4,500 rpm",
      redline: "6,200 rpm",
      battery: "Smart Hybrid Dual-Battery System"
    },
    transmission: {
      gearbox: "6-Speed Torque Converter Automatic with Paddle Shifters",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program with Hill Hold Assist"
    },
    performance: {
      zeroToHundred: "9.9 sec",
      zeroToSixty: "9.3 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "180 km/h (112 mph)",
      brakingHundredToZero: "126 ft (38.4 m)"
    },
    dimensions: {
      length: "3,995 mm (157.3 in)",
      width: "1,765 mm (69.5 in)",
      height: "1,550 mm (61.0 in)",
      wheelbase: "2,520 mm (99.2 in)",
      kerbWeight: "1,060 kg (2,337 lbs)"
    },
    wheels: {
      frontTyres: "195/60 R16",
      rearTyres: "195/60 R16",
      brakes: "Front Ventilated Discs / Rear Drums"
    },
    editorial: {
      overview: "The Maruti Suzuki Fronx is an aerodynamic coupe-styled crossover that brings exhilarating Boosterjet turbo performance and striking crossover stance to the sub-4 meter class.",
      design: "NEXA's 'Crafted Futurism' styling with a high bonnet, dual-finish NEXWave grille, crystal block LED DRLs, sloping coupe roofline, and full-width connected rear LED light bar.",
      interior: "Rich dual-tone Bordeaux and Black theme with forged metal accents, 9-inch SmartPlay Pro+ screen, HUD, 360-degree camera, wireless charging, and paddle shifters."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/8/80/2024_Suzuki_Fronx.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/8/80/2024_Suzuki_Fronx.jpg", caption: "Maruti Suzuki Fronx Turbo Alpha - NEXWave Grille & Athletic Silhouette", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85", caption: "Connected Rear LED Light Guide & Dual-Tone Finish", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Burgundy & Black Dual-Tone Interior with ARKAMYS Sound", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Head-Up Display & Wireless Charging Console", type: "interior" }
    ],
    officialUrl: "https://www.nexaexperience.com/fronx",
    wikiUrl: "https://en.wikipedia.org/wiki/Suzuki_Fronx"
  },

  // --- HYUNDAI (INDIAN MARKET TITAN) ---
  {
    id: "hyundai-creta",
    brand: "Hyundai",
    model: "Creta SX(O) Turbo",
    year: 2025,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Midsize Tech SUV",
    fuel: "Petrol",
    price: "₹20,15,000",
    popularity: 99,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    isUpcoming: false,
    newsDate: "September 2026",
    newsBadge: "Market Leader",
    newsHeadline: "2025 Hyundai Creta SX(O) Reasserts Dominance as India's #1 Best-Selling Midsize SUV",
    engine: {
      type: "1.5L Kappa Turbo GDi 4-Cylinder Petrol",
      displacement: "1,482 cc",
      power: "160 HP (118 kW) @ 5,500 rpm",
      torque: "187 lb-ft (253 Nm) @ 1,500–3,500 rpm",
      redline: "6,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "7-Speed Dual-Clutch (DCT) with Paddle Shifters",
      drivetrain: "Front-Wheel Drive (FWD) with Drive Modes (Eco, Normal, Sport) & Traction Modes (Snow, Mud, Sand)",
      differential: "Electronic Stability Control with Hill-Start Assist"
    },
    performance: {
      zeroToHundred: "8.9 sec",
      zeroToSixty: "8.4 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "190 km/h (118 mph)",
      brakingHundredToZero: "128 ft (39.0 m)"
    },
    dimensions: {
      length: "4,330 mm (170.5 in)",
      width: "1,790 mm (70.5 in)",
      height: "1,635 mm (64.4 in)",
      wheelbase: "2,610 mm (102.8 in)",
      kerbWeight: "1,310 kg (2,888 lbs)"
    },
    wheels: {
      frontTyres: "215/60 R17",
      rearTyres: "215/60 R17",
      brakes: "All 4 Disc Brakes with ABS & EBD"
    },
    editorial: {
      overview: "The Hyundai Creta is India's undisputed king of midsize SUVs and the country's highest-selling SUV for over 5 consecutive years. The facelifted generation introduces aggressive parametric jewel styling, seamless connected displays, and Level-2 SmartSense ADAS suite with 19 autonomous safety features.",
      design: "Distinguished by a bold black chrome parametric grille, horizon full-width quad-beam LED headlights, connected LED tail lamps with sequential indicators, and aerodynamic 17-inch diamond-cut alloy wheels.",
      interior: "Lavish dual-tone cabin equipped with dual integrated 10.25-inch panoramic curved screens, 8-speaker Bose premium sound system, panoramic sunroof with voice control, 8-way powered driver seat, and front row ventilated cooling seats."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/2/21/2024_Hyundai_Creta_1.5_MPi_SX%28O%29_%28India%29_front_view.png",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/2/21/2024_Hyundai_Creta_1.5_MPi_SX%28O%29_%28India%29_front_view.png", caption: "Hyundai Creta SX(O) - Black Chrome Parametric Grille & Quad-Beam LEDs", type: "exterior" },
      { url: "images/hyundai_creta_interior.jpg", caption: "Interior: Dual 10.25-inch Panoramic Curved Displays with Bose Audio", type: "interior" },
      { url: "images/hyundai_creta_interior.jpg", caption: "Interior: Voice-Controlled Panoramic Sunroof & Ventilated Seats", type: "interior" }
    ],
    officialUrl: "https://www.hyundai.com/in/en/find-a-car/creta",
    wikiUrl: "https://en.wikipedia.org/wiki/Hyundai_Creta"
  },

  // --- MARUTI SUZUKI (TOP SELLERS) ---
  {
    id: "maruti-suzuki-dzire",
    brand: "Maruti Suzuki",
    model: "Dzire ZXi+",
    year: 2025,
    region: "[IN]",
    body: "Sedans",
    bodySubtype: "Compact Executive Sedan",
    fuel: "Petrol",
    price: "₹10,14,000",
    popularity: 99,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    isUpcoming: true,
    newsDate: "September 2026",
    newsBadge: "Latest Reveal",
    newsHeadline: "All-New 2025 Maruti Suzuki Dzire Debuts with 5-Star GNCAP Rating and Segment-First Sunroof",
    engine: {
      type: "1.2L Z-Series 3-Cylinder Dual VVT Petrol (Z12E)",
      displacement: "1,197 cc",
      power: "82 HP (60 kW) @ 5,700 rpm",
      torque: "83 lb-ft (112 Nm) @ 4,300 rpm",
      redline: "6,200 rpm",
      battery: "N/A (25.71 km/l Certified Efficiency)"
    },
    transmission: {
      gearbox: "5-Speed Manual / 5-Speed Auto Gear Shift (AGS)",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program with Hill Hold"
    },
    performance: {
      zeroToHundred: "12.0 sec",
      zeroToSixty: "11.3 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "165 km/h (103 mph)",
      brakingHundredToZero: "126 ft (38.4 m)"
    },
    dimensions: {
      length: "3,995 mm (157.3 in)",
      width: "1,735 mm (68.3 in)",
      height: "1,525 mm (60.0 in)",
      wheelbase: "2,450 mm (96.5 in)",
      kerbWeight: "925 kg (2,039 lbs)"
    },
    wheels: {
      frontTyres: "185/65 R15",
      rearTyres: "185/65 R15",
      brakes: "Front Ventilated Discs / Rear Drums (6 Airbags Standard)"
    },
    editorial: {
      overview: "The 4th-generation Maruti Suzuki Dzire is India's highest-selling sedan of all time, reimagined with a completely distinct executive front profile, a class-first electric sunroof, 360-degree surround camera, and a stellar 5-star Global NCAP adult safety rating.",
      design: "Features a wide horizontal chrome-slat front grille, sleek multi-reflector LED headlamps with integrated LED daytime running strips, clean sedan proportions, and 3D Y-shaped LED tail lamps.",
      interior: "Modern dual-tone black and beige cabin with faux wood ornamentation, 9-inch SmartPlay Pro+ floating touchscreen with wireless Apple CarPlay & Android Auto, rear AC vents, and wireless smartphone charger."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Suzuki_Dzire_II_1.2_GLX_Hybrid_Arctic_White_Pearl.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Suzuki_Dzire_II_1.2_GLX_Hybrid_Arctic_White_Pearl.jpg", caption: "All-New 2025 Maruti Suzuki Dzire - Executive Front Stance", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1615063029891-497bebd4f03c?auto=format&fit=crop&w=1600&q=85", caption: "Sleek Sedan Silhouette & Precision 15\" Dual-Tone Alloys", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 9-inch SmartPlay Pro+ Screen & Electric Sunroof", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Beige Comfort Seating & Automatic Climate Control", type: "interior" }
    ],
    officialUrl: "https://www.marutisuzuki.com/dzire",
    wikiUrl: "https://en.wikipedia.org/wiki/Suzuki_Dzire"
  },
  {
    id: "maruti-suzuki-wagonr",
    brand: "Maruti Suzuki",
    model: "WagonR ZXi+ 1.2L",
    year: 2024,
    region: "[IN]",
    body: "Hatchbacks",
    bodySubtype: "Tallboy Practical Hatchback",
    fuel: "Petrol",
    price: "₹7,40,000",
    popularity: 100,
    isLatest: false,
    isConcept: false,
    isEyeCandy: false,
    isUpcoming: false,
    newsDate: "August 2026",
    newsBadge: "All-Time Top Seller",
    newsHeadline: "Maruti Suzuki WagonR Crosses 3.2 Million Sales Milestone Across India",
    engine: {
      type: "1.2L Advanced K-Series DualJet Dual VVT Petrol",
      displacement: "1,197 cc",
      power: "89 HP (66 kW) @ 6,000 rpm",
      torque: "83 lb-ft (113 Nm) @ 4,400 rpm",
      redline: "6,200 rpm",
      battery: "N/A (24.43 km/l Fuel Efficiency)"
    },
    transmission: {
      gearbox: "5-Speed Manual / Auto Gear Shift (AGS)",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program with Hill Hold"
    },
    performance: {
      zeroToHundred: "11.9 sec",
      zeroToSixty: "11.2 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "160 km/h (99 mph)",
      brakingHundredToZero: "128 ft (39.0 m)"
    },
    dimensions: {
      length: "3,655 mm (143.9 in)",
      width: "1,620 mm (63.8 in)",
      height: "1,675 mm (65.9 in)",
      wheelbase: "2,435 mm (95.9 in)",
      kerbWeight: "835 kg (1,841 lbs)"
    },
    wheels: {
      frontTyres: "165/70 R14",
      rearTyres: "165/70 R14",
      brakes: "Front Disc / Rear Drum with ABS"
    },
    editorial: {
      overview: "The Maruti Suzuki WagonR is India's most iconic 'Tall Boy' hatchback and frequently holds the title of India's #1 best-selling passenger vehicle month after month, loved for its unmatched headroom, expansive 341-liter boot, and bulletproof reliability.",
      design: "Tall upright proportions, dual-split headlamp cluster, dynamic floating roof design with blacked-out pillars, and flared wheel arches.",
      interior: "Remarkably airy cabin with massive vertical headroom, 7-inch SmartPlay Studio touchscreen with smartphone navigation, steering-mounted controls, and 60:40 split rear folding seats."
    },
    mainImage: "images/maruti_wagonr.png",
    gallery: [
      { url: "images/maruti_wagonr.png", caption: "Maruti Suzuki WagonR - Iconic Tallboy Architecture", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=85", caption: "Floating Roof Design & Flared Wheel Arches", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Spacious High-Roof Cabin & 7-inch SmartPlay", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 341-Liter Cavernous Luggage Boot", type: "interior" }
    ],
    officialUrl: "https://www.marutisuzuki.com/wagonr",
    wikiUrl: "https://en.wikipedia.org/wiki/Maruti_Suzuki_Wagon_R"
  },
  {
    id: "maruti-suzuki-baleno",
    brand: "Maruti Suzuki",
    model: "Baleno Alpha",
    year: 2024,
    region: "[IN]",
    body: "Hatchbacks",
    bodySubtype: "Premium City Hatchback",
    fuel: "Petrol",
    price: "₹9,88,000",
    popularity: 98,
    isLatest: false,
    isConcept: false,
    isEyeCandy: false,
    isUpcoming: false,
    newsDate: "August 2026",
    newsBadge: "Market Benchmark",
    newsHeadline: "Maruti Suzuki Baleno Remains India's Preferred Premium Hatchback with Over 1.5 Million Customers",
    engine: {
      type: "1.2L DualJet Dual VVT with Idle Start-Stop",
      displacement: "1,197 cc",
      power: "89 HP (66 kW) @ 6,000 rpm",
      torque: "83 lb-ft (113 Nm) @ 4,400 rpm",
      redline: "6,200 rpm",
      battery: "N/A (22.94 km/l Certified Efficiency)"
    },
    transmission: {
      gearbox: "5-Speed Manual / 5-Speed Auto Gear Shift (AGS)",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program with Hill Hold"
    },
    performance: {
      zeroToHundred: "11.6 sec",
      zeroToSixty: "10.9 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "170 km/h (106 mph)",
      brakingHundredToZero: "125 ft (38.1 m)"
    },
    dimensions: {
      length: "3,990 mm (157.1 in)",
      width: "1,745 mm (68.7 in)",
      height: "1,500 mm (59.1 in)",
      wheelbase: "2,520 mm (99.2 in)",
      kerbWeight: "955 kg (2,105 lbs)"
    },
    wheels: {
      frontTyres: "195/55 R16",
      rearTyres: "195/55 R16",
      brakes: "Front Ventilated Discs / Rear Drums (6 Airbags)"
    },
    editorial: {
      overview: "The Baleno is Maruti Suzuki's flagship premium hatchback retailing through the upscale NEXA network. It pioneered advanced segment-first technologies in India including a color Head-Up Display (HUD) and 360-degree surround view camera.",
      design: "Crafted with 'Crafted Futurism' design language: wide NEXWave front grille with chrome accent, 3-point NEXTre' LED DRLs, sweeping character shoulder line, and precision-cut R16 dual-tone alloys.",
      interior: "Rich blue and black dual-tone interior with piano black trim, 9-inch SmartPlay Pro+ touchscreen with Arkamys Surround Sense, retractable color HUD, and cruise control."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/9/96/2017_Suzuki_Baleno_SZ3_Dualjet_1.2_Front.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/9/96/2017_Suzuki_Baleno_SZ3_Dualjet_1.2_Front.jpg", caption: "Maruti Suzuki Baleno Alpha - NEXWave Grille & NEXTre' LED DRLs", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85", caption: "Aerodynamic Silhouette & 16-inch Precision Alloys", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Color Head-Up Display (HUD) & 9-inch SmartPlay Pro+", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 360-Degree View Camera Console", type: "interior" }
    ],
    officialUrl: "https://www.nexaexperience.com/baleno",
    wikiUrl: "https://en.wikipedia.org/wiki/Suzuki_Baleno_(2015)"
  },
  {
    id: "maruti-suzuki-ertiga",
    brand: "Maruti Suzuki",
    model: "Ertiga ZXi+ Smart Hybrid",
    year: 2024,
    region: "[IN]",
    body: "MPVs",
    bodySubtype: "7-Seater Family MPV",
    fuel: "Hybrid",
    price: "₹13,03,000",
    popularity: 97,
    isLatest: false,
    isConcept: false,
    isEyeCandy: false,
    isUpcoming: false,
    newsDate: "July 2026",
    newsBadge: "Family Leader",
    newsHeadline: "Maruti Suzuki Ertiga Commands 50%+ Share of India's 7-Seater MPV Segment",
    engine: {
      type: "1.5L K15C Smart Hybrid DualJet Dual VVT Petrol",
      displacement: "1,462 cc",
      power: "103 HP (76 kW) @ 6,000 rpm",
      torque: "101 lb-ft (137 Nm) @ 4,400 rpm",
      redline: "6,200 rpm",
      battery: "Dual-Battery Progressive Smart Hybrid with Regenerative Braking"
    },
    transmission: {
      gearbox: "6-Speed Automatic with Steering Paddle Shifters",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program with Hill Hold Assist"
    },
    performance: {
      zeroToHundred: "12.4 sec",
      zeroToSixty: "11.7 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "170 km/h (106 mph)",
      brakingHundredToZero: "132 ft (40.2 m)"
    },
    dimensions: {
      length: "4,395 mm (173.0 in)",
      width: "1,735 mm (68.3 in)",
      height: "1,690 mm (66.5 in)",
      wheelbase: "2,740 mm (107.9 in)",
      kerbWeight: "1,180 kg (2,601 lbs)"
    },
    wheels: {
      frontTyres: "185/65 R15",
      rearTyres: "185/65 R15",
      brakes: "Front Ventilated Discs / Rear Drums"
    },
    editorial: {
      overview: "The Maruti Suzuki Ertiga is India's most popular and best-selling multi-purpose vehicle (MPV), delivering an effortless blend of 3-row, 7-seater space, fuel-efficient Smart Hybrid engineering, and comfortable ride dynamics.",
      design: "Winged power chrome grille, 3D origami-style LED tail lamps, metallic dual-tone 15-inch alloy wheels, and a balanced MPV profile.",
      interior: "Sculpted dual-tone interior with teak-wood ornamentation, 7-inch SmartPlay Pro touchscreen, roof-mounted AC vents for 2nd and 3rd rows, and one-touch recline and slide seats."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Suzuki_Ertiga_NC_FL_1.5_GLX_Hybrid_Snow_White_Pearl.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Suzuki_Ertiga_NC_FL_1.5_GLX_Hybrid_Snow_White_Pearl.jpg", caption: "Maruti Suzuki Ertiga - Winged Chrome Grille & 3D LED Tail Lamps", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=85", caption: "Spacious 7-Seater Profile with 2,740mm Wheelbase", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: 3-Row Flexible Seating & Roof-Mounted AC Vents", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Teak-Wood Finish Dashboard & Paddle Shifters", type: "interior" }
    ],
    officialUrl: "https://www.marutisuzuki.com/ertiga",
    wikiUrl: "https://en.wikipedia.org/wiki/Suzuki_Ertiga"
  },

  // --- MAHINDRA (UTILITY LEGEND) ---
  {
    id: "mahindra-bolero-neo",
    brand: "Mahindra",
    model: "Bolero Neo N10 (O)",
    year: 2024,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Rugged 7-Seater Ladder-Frame Utility SUV",
    fuel: "Diesel",
    price: "₹12,15,000",
    popularity: 96,
    isLatest: false,
    isConcept: false,
    isEyeCandy: false,
    isUpcoming: false,
    newsDate: "August 2026",
    newsBadge: "Rural & Urban Titan",
    newsHeadline: "Mahindra Bolero Neo Delivers Tough-As-Nails Multi-Terrain Capability with Mechanical Locking Diff",
    engine: {
      type: "1.5L mHawk75 3-Cylinder Turbocharged Diesel",
      displacement: "1,493 cc",
      power: "100 HP (74 kW) @ 3,750 rpm",
      torque: "192 lb-ft (260 Nm) @ 1,750–2,250 rpm",
      redline: "4,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "5-Speed Manual Transmission",
      drivetrain: "Rear-Wheel Drive (RWD) with Multi-Terrain Technology (MTT)",
      differential: "Mechanical Locking Rear Differential (MLD by Eaton)"
    },
    performance: {
      zeroToHundred: "13.8 sec",
      zeroToSixty: "12.9 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "150 km/h (93 mph)",
      brakingHundredToZero: "142 ft (43.3 m)"
    },
    dimensions: {
      length: "3,995 mm (157.3 in)",
      width: "1,795 mm (70.7 in)",
      height: "1,817 mm (71.5 in)",
      wheelbase: "2,680 mm (105.5 in)",
      kerbWeight: "1,580 kg (3,483 lbs)"
    },
    wheels: {
      frontTyres: "215/75 R15",
      rearTyres: "215/75 R15",
      brakes: "Front Disc / Rear Drum with ABS & Corner Braking Control"
    },
    editorial: {
      overview: "Built on Mahindra's tough 3rd-generation ladder-frame chassis shared with the Scorpio-N, the Bolero Neo fuses the indestructible legacy of the Bolero badge with modern comfort and an authentic Eaton mechanical locking differential (MTT) for conquering uneven rural terrain.",
      design: "Chunky upright body-on-frame geometry, signature 6-slat chrome grille with Twin Peaks logo, squared wheel arches, high 180 mm ground clearance, and rear door-mounted spare tire.",
      interior: "Designed by Italian design house Pininfarina: 7-seater layout with side-facing 3rd-row jump seats, 7-inch touchscreen infotainment, Eco drive mode, and wash-durable fabric upholstery."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mahindra_TUV_300_Chennai_2016_%282%29.JPG/1280px-Mahindra_TUV_300_Chennai_2016_%282%29.JPG",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mahindra_TUV_300_Chennai_2016_%282%29.JPG/1280px-Mahindra_TUV_300_Chennai_2016_%282%29.JPG", caption: "Mahindra Bolero Neo N10 (O) - Authentic 3rd-Gen Ladder Frame", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85", caption: "Rugged Ground Clearance & Rear-Mounted Spare Wheel", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Pininfarina-Designed 7-Seater Cabin", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Mechanical Locking Differential Telemetry", type: "interior" }
    ],
    officialUrl: "https://auto.mahindra.com/suv/bolero-neo",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahindra_Bolero_Neo"
  },

  // --- TATA (ACCESSIBLE EV LEADER) ---
  {
    id: "tata-tiago-ev",
    brand: "Tata",
    model: "Tiago EV Tech LUX",
    year: 2024,
    region: "[IN]",
    body: "Hatchbacks",
    bodySubtype: "All-Electric City Hatchback",
    fuel: "Electric",
    price: "₹11,89,000",
    popularity: 96,
    isLatest: false,
    isConcept: false,
    isEyeCandy: false,
    isUpcoming: false,
    newsDate: "August 2026",
    newsBadge: "EV Revolution",
    newsHeadline: "Tata Tiago EV Surpasses 60,000 Deliveries, Democratizing Pure Electric Mobility in India",
    engine: {
      type: "Permanent Magnet Synchronous Motor (Ziptron Tech)",
      displacement: "N/A",
      power: "74 HP (55 kW)",
      torque: "84 lb-ft (114 Nm)",
      redline: "10,000 rpm",
      battery: "24 kWh Liquid-Cooled IP67 Lithium-ion (315 km MIDC Range)"
    },
    transmission: {
      gearbox: "Single-Speed Automatic with 4-Level Regenerative Braking",
      drivetrain: "Front-Wheel Drive (FWD)",
      differential: "Electronic Stability Program with Corner Stability Control"
    },
    performance: {
      zeroToHundred: "12.8 sec",
      zeroToSixty: "5.7 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "130 km/h (81 mph)",
      brakingHundredToZero: "128 ft (39.0 m)"
    },
    dimensions: {
      length: "3,769 mm (148.4 in)",
      width: "1,677 mm (66.0 in)",
      height: "1,536 mm (60.5 in)",
      wheelbase: "2,400 mm (94.5 in)",
      kerbWeight: "1,150 kg (2,535 lbs)"
    },
    wheels: {
      frontTyres: "175/65 R14",
      rearTyres: "175/65 R14",
      brakes: "Front Disc / Rear Drum with Regenerative Braking"
    },
    editorial: {
      overview: "The Tata Tiago EV is India's most accessible and successful pure electric hatchback. Powered by Tata's proven Ziptron EV architecture with an IP67-rated water-and-dustproof battery pack and 4-star Global NCAP safety.",
      design: "Closed glossy black front grille with EV humanity line in signature Teal Blue, projector headlamps with LED DRLs, and contrasting dual-tone black roof.",
      interior: "Equipped with a jeweled rotary gear selector with Sports mode, 7-inch Harman touchscreen with 8-speaker audio, multi-mode regenerative paddle shifters, and automatic climate control."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/c/ca/2022_Tata_Tiago_XZA%2B_front_20230512.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/2022_Tata_Tiago_XZA%2B_front_20230512.jpg", caption: "Tata Tiago EV - Humanity Line & Signature Teal Blue Accents", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=85", caption: "Compact Urban Stance & Dual-Tone Contrast Roof", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Jeweled Rotary Gear Dial & 8-Speaker Harman Audio", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Multi-Mode Regenerative Braking Telemetry", type: "interior" }
    ],
    officialUrl: "https://ev.tatamotors.com/tiago",
    wikiUrl: "https://en.wikipedia.org/wiki/Tata_Tiago"
  },

  // --- KIA (HIGH-TECH SUV SENSATION) ---
  {
    id: "kia-seltos",
    brand: "Kia",
    model: "Seltos X-Line Turbo",
    year: 2025,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Sport Tech Midsize SUV",
    fuel: "Petrol",
    price: "₹20,35,000",
    popularity: 98,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    isUpcoming: false,
    newsDate: "September 2026",
    newsBadge: "Performance SUV",
    newsHeadline: "2025 Kia Seltos X-Line Unleashes 160 HP Smartstream Turbo with Dual Panoramic Screen Cockpit",
    engine: {
      type: "1.5L Smartstream T-GDi Turbo Petrol",
      displacement: "1,482 cc",
      power: "160 HP (118 kW) @ 5,500 rpm",
      torque: "187 lb-ft (253 Nm) @ 1,500–3,500 rpm",
      redline: "6,500 rpm",
      battery: "N/A"
    },
    transmission: {
      gearbox: "7-Speed Dual-Clutch Transmission (DCT)",
      drivetrain: "Front-Wheel Drive (FWD) with Multi-Drive & Traction Modes",
      differential: "Electronic Stability Control with Vehicle Stability Management"
    },
    performance: {
      zeroToHundred: "8.9 sec",
      zeroToSixty: "8.3 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "195 km/h (121 mph)",
      brakingHundredToZero: "126 ft (38.4 m)"
    },
    dimensions: {
      length: "4,365 mm (171.9 in)",
      width: "1,800 mm (70.9 in)",
      height: "1,645 mm (64.8 in)",
      wheelbase: "2,610 mm (102.8 in)",
      kerbWeight: "1,340 kg (2,954 lbs)"
    },
    wheels: {
      frontTyres: "215/55 R18",
      rearTyres: "215/55 R18",
      brakes: "All 4 Disc Brakes with ABS"
    },
    editorial: {
      overview: "The Kia Seltos is the model that launched the Kia brand to automotive stardom in India. In its flagship X-Line trim, it commands attention with exclusive Matte Graphite exterior paint, an ultra-potent 160 hp turbo-petrol motor, and Level-2 ADAS active driver assistance.",
      design: "Signature Kia Digital Tiger Nose grille with star-map LED daytime running lamps, sweeping sequential LED turn indicators, athletic quad-exhaust tips, and crystalline 18-inch alloy wheels.",
      interior: "High-tech driver environment dominated by a dual 10.25-inch panoramic curved display cluster, 8-speaker Bose audio, panoramic dual-pane sunroof, dual-zone automatic climate control, and Sage Green leatherette seating."
    },
    mainImage: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg",
    gallery: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg", caption: "Kia Seltos X-Line - Digital Tiger Nose Grille & Star-Map DRLs", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=85", caption: "Matte Graphite Finish & 18-inch Crystal Cut Alloy Wheels", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Dual 10.25-inch Panoramic Curved Screen Cockpit", type: "interior" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85", caption: "Interior: Bose 8-Speaker Sound & Panoramic Skyroof", type: "interior" }
    ],
    officialUrl: "https://www.kia.com/in/our-vehicles/seltos",
    wikiUrl: "https://en.wikipedia.org/wiki/Kia_Seltos"
  },

  // ==========================================================================
  // UPCOMING 2027 REVEALS: INDIA & AROUND THE WORLD
  // ==========================================================================

  // --- TATA MOTORS (INDIA 2027) ---
  {
    id: "tata-avinya-ev",
    brand: "Tata",
    model: "Avinya EV Flagship",
    year: 2027,
    region: "[IN]",
    body: "Electric",
    bodySubtype: "Pure Electric Skateboard Lounge",
    fuel: "Electric",
    price: "₹35,00,000 (Est.)",
    popularity: 98,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    isUpcoming: true,
    newsDate: "January 2027",
    newsBadge: "2027 India Debut",
    newsHeadline: "Tata Avinya EV to Spearhead Tata's Gen-3 Pure Skateboard Platform in 2027 with 500km Range in 30 Min",
    engine: {
      type: "Dual Permanent Magnet Synchronous Motors (Gen-3 Skateboard)",
      displacement: "N/A",
      power: "450 HP (335 kW)",
      torque: "413 lb-ft (560 Nm)",
      redline: "18,000 rpm",
      battery: "85 kWh Gen-3 Battery with 800V Ultra-Fast Architecture (500 km in 30 min)"
    },
    transmission: {
      gearbox: "Single-Speed Reduction Gear",
      drivetrain: "Dual-Motor All-Wheel Drive (AWD)",
      differential: "Dynamic Electronic Torque Distribution"
    },
    performance: {
      zeroToHundred: "4.9 sec",
      zeroToSixty: "4.6 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "200 km/h (124 mph)",
      brakingHundredToZero: "118 ft (36.0 m)"
    },
    dimensions: {
      length: "4,650 mm (183.1 in)",
      width: "1,920 mm (75.6 in)",
      height: "1,550 mm (61.0 in)",
      wheelbase: "2,980 mm (117.3 in)",
      kerbWeight: "1,950 kg (4,299 lbs)"
    },
    wheels: {
      frontTyres: "255/40 R22",
      rearTyres: "255/40 R22",
      brakes: "Regenerative Disc Brakes with ABS & EBD"
    },
    editorial: {
      overview: "The Tata Avinya represents Tata Motors' ambitious quantum leap into pure global electric mobility. Derived from the Sanskrit word for 'Innovation', the Avinya is built on Tata's bespoke Gen-3 pure EV skateboard architecture. Designed without the constraints of an engine bay, it offers an unprecedented ultra-spacious lounge cabin, screenless minimalist Zen interior, and an ultra-rapid 800V charging capability delivering over 500 km of range in under 30 minutes.",
      design: "A crossover silhouette marrying hatchback agility with MPV space and SUV road presence. Features butterfly doors, continuous horizon LED daytime lightbar forming Tata's illuminated 'T' signature, aerodynamic wheel arches, and sculpted airflow fins.",
      interior: "A screen-less sanctuary envisioned to minimize digital fatigue, featuring individual voice-activated speaker pods embedded in headrests, natural wood finishes, aroma diffusers, swiveling lounge seats, and sky-view panoramic electrochromic glass."
    },
    mainImage: "images/tata_avinya_2027.jpg",
    gallery: [
      { url: "images/tata_avinya_2027.jpg", caption: "Tata Avinya EV - Futuristic Crossover Silhouette & Butterfly Doors", type: "exterior" },
      { url: "images/tata_avinya_interior.jpg", caption: "Interior: Minimalist Screenless Lounge Cockpit & Sustainable Woods", type: "interior" },
      { url: "images/tata_avinya_interior.jpg", caption: "Interior: Swiveling Front Seats & Voice-Controlled Zone Headrests", type: "interior" }
    ],
    officialUrl: "https://ev.tatamotors.com/avinya.html",
    wikiUrl: "https://en.wikipedia.org/wiki/Tata_Motors"
  },

  // --- MAHINDRA (INDIA 2027) ---
  {
    id: "mahindra-xev-9e",
    brand: "Mahindra",
    model: "XEV 9e Luxury Coupe",
    year: 2027,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Born Electric Flagship Luxury SUV Coupe",
    fuel: "Electric",
    price: "₹28,50,000 (Est.)",
    popularity: 97,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    isUpcoming: true,
    newsDate: "March 2027",
    newsBadge: "2027 India Debut",
    newsHeadline: "Mahindra XEV 9e Born Electric Flagship Coupe Targets 2027 Commercial Launch with Triple-Screen Cockpit",
    engine: {
      type: "Permanent Magnet Synchronous Motor (INGLO Platform)",
      displacement: "N/A",
      power: "282 HP (210 kW)",
      torque: "280 lb-ft (380 Nm)",
      redline: "16,500 rpm",
      battery: "79 kWh LFP Blade Battery (656 km WLTP Range, 175 kW DC Fast Charging)"
    },
    transmission: {
      gearbox: "Single-Speed Fixed Ratio",
      drivetrain: "Rear-Wheel Drive (RWD) / Optional Dual-Motor AWD",
      differential: "Intelligent Torque Vectoring with Off-Road Terrain Modes"
    },
    performance: {
      zeroToHundred: "6.8 sec",
      zeroToSixty: "6.4 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "180 km/h (112 mph)",
      brakingHundredToZero: "122 ft (37.2 m)"
    },
    dimensions: {
      length: "4,790 mm (188.6 in)",
      width: "1,905 mm (75.0 in)",
      height: "1,690 mm (66.5 in)",
      wheelbase: "2,775 mm (109.3 in)",
      kerbWeight: "2,150 kg (4,740 lbs)"
    },
    wheels: {
      frontTyres: "245/50 R20",
      rearTyres: "245/50 R20",
      brakes: "Brake-by-Wire 4-Wheel Disc Brakes with Multi-Level Regeneration"
    },
    editorial: {
      overview: "The Mahindra XEV 9e is the crown jewel of Mahindra's 'Born Electric' visionary revolution. Underpinned by the cutting-edge INGLO skateboard architecture co-developed with Volkswagen components, the XEV 9e merges an aggressive coupe-SUV silhouette with world-class aerodynamics, high-voltage battery architecture, and an opulent triple-screen dashboard extending across the entire cabin.",
      design: "Commanding road presence characterized by razor-sharp C-shaped LED DRLs, a sweeping raked fastback roofline, flush motorized door handles, aero-optimized 20-inch alloy wheels, and an illuminated Mahindra Infinity emblem.",
      interior: "A tech palace anchored by a panoramic pillar-to-pillar triple-screen array (Driver Display, Central Touchscreen, Passenger Entertainment Display), a 16-speaker Harman Kardon spatial audio system with Dolby Atmos, ambient mood lighting, and an expansive panoramic skyroof."
    },
    mainImage: "images/mahindra_xev9e_2027.jpg",
    gallery: [
      { url: "images/mahindra_xev9e_2027.jpg", caption: "Mahindra XEV 9e - Aerodynamic Luxury Coupe Stance", type: "exterior" },
      { url: "images/mahindra_xev9e_interior.jpg", caption: "Interior: Panoramic Triple-Screen Cockpit with Harman Kardon Audio", type: "interior" },
      { url: "images/mahindra_xev9e_interior.jpg", caption: "Interior: Luxury Two-Tone Seating & Electrochromic Skyroof", type: "interior" }
    ],
    officialUrl: "https://auto.mahindra.com/suv/born-electric",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahindra_Auto"
  },

  // --- MARUTI SUZUKI (INDIA / GLOBAL 2027) ---
  {
    id: "maruti-suzuki-evitara",
    brand: "Maruti Suzuki",
    model: "e-Vitara ALLGRIP-e AWD",
    year: 2027,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Electric Compact Adventure SUV",
    fuel: "Electric",
    price: "₹21,00,000 (Est.)",
    popularity: 96,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    isUpcoming: true,
    newsDate: "February 2027",
    newsBadge: "2027 Global & India Reveal",
    newsHeadline: "2027 Maruti Suzuki e-Vitara Unveiled with Dedicated EV Platform and Dual-Motor ALLGRIP-e 4WD",
    engine: {
      type: "Dual Electric eAxle Motors (HEARTECT-e Platform)",
      displacement: "N/A",
      power: "181 HP (135 kW)",
      torque: "221 lb-ft (300 Nm)",
      redline: "15,000 rpm",
      battery: "61 kWh BYD LFP Blade Cell Battery (500 km range, 150 kW DC Fast Charging)"
    },
    transmission: {
      gearbox: "Single-Speed e-Transaxle",
      drivetrain: "ALLGRIP-e Electric 4-Wheel Drive (Dual-Motor)",
      differential: "Trail Mode with Intelligent Wheel Slip Braking"
    },
    performance: {
      zeroToHundred: "7.9 sec",
      zeroToSixty: "7.5 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "165 km/h (103 mph)",
      brakingHundredToZero: "125 ft (38.1 m)"
    },
    dimensions: {
      length: "4,275 mm (168.3 in)",
      width: "1,800 mm (70.9 in)",
      height: "1,635 mm (64.4 in)",
      wheelbase: "2,700 mm (106.3 in)",
      kerbWeight: "1,899 kg (4,187 lbs)"
    },
    wheels: {
      frontTyres: "225/55 R18",
      rearTyres: "225/55 R18",
      brakes: "All 4 Disc Brakes with ABS & Regenerative Braking"
    },
    editorial: {
      overview: "The Maruti Suzuki e-Vitara represents the historic arrival of Suzuki's first mass-production pure electric vehicle on a global scale. Manufactured in Gujarat for both the Indian market and global export to Europe and Japan, the e-Vitara features the newly developed HEARTECT-e skateboard platform, ultra-durable LFP Blade battery technology, and an electric ALLGRIP-e 4WD system with Trail Mode.",
      design: "Exudes an authentic 'High-Tech & Adventure' SUV presence with muscular wheel arches, prominent black body cladding, 3-point LED lighting elements, and high ground clearance (180 mm).",
      interior: "A rugged yet modern interior layout featuring an integrated dual-screen setup (10.25-inch instrument cluster and 10.1-inch infotainment), rotary drive selector, chunky dash vents, durable woven upholstery, and wireless charging."
    },
    mainImage: "images/maruti_evitara_2027.jpg",
    gallery: [
      { url: "images/maruti_evitara_2027.jpg", caption: "Maruti Suzuki e-Vitara - Rugged Stance & ALLGRIP-e AWD", type: "exterior" },
      { url: "images/maruti_evitara_interior.jpg", caption: "Interior: Dual Floating Screens & Rotary Shift Selector", type: "interior" },
      { url: "images/maruti_evitara_interior.jpg", caption: "Interior: Adventure Dual-Tone Cabin & Trail Mode Dial", type: "interior" }
    ],
    officialUrl: "https://www.marutisuzuki.com/evitara",
    wikiUrl: "https://en.wikipedia.org/wiki/Suzuki_e_Vitara"
  },

  // --- HYUNDAI (INDIA 2027) ---
  {
    id: "hyundai-ioniq-9",
    brand: "Hyundai",
    model: "Ioniq 9 3-Row EV",
    year: 2027,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Full-Size 3-Row Flagship Electric SUV",
    fuel: "Electric",
    price: "₹75,00,000 (Est.)",
    popularity: 95,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    isUpcoming: true,
    newsDate: "Mid 2027",
    newsBadge: "2027 Flagship Arrival",
    newsHeadline: "Hyundai Confirms Flagship Ioniq 9 Three-Row Electric Lounge for 2027 India Launch with 110 kWh Battery",
    engine: {
      type: "Dual Permanent Magnet Synchronous Motors (E-GMP 800V Architecture)",
      displacement: "N/A",
      power: "422 HP (315 kW)",
      torque: "516 lb-ft (700 Nm)",
      redline: "19,000 rpm",
      battery: "110.3 kWh NCM High-Capacity Battery (620 km WLTP, 350 kW Ultra-Fast 800V DC Charging: 10–80% in 24 min)"
    },
    transmission: {
      gearbox: "Single-Speed Reduction Gearbox",
      drivetrain: "HTRAC All-Wheel Drive (AWD)",
      differential: "Electronic Limited-Slip Differential (e-LSD)"
    },
    performance: {
      zeroToHundred: "5.2 sec",
      zeroToSixty: "4.9 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "200 km/h (124 mph)",
      brakingHundredToZero: "120 ft (36.6 m)"
    },
    dimensions: {
      length: "5,060 mm (199.2 in)",
      width: "1,970 mm (77.6 in)",
      height: "1,790 mm (70.5 in)",
      wheelbase: "3,130 mm (123.2 in)",
      kerbWeight: "2,670 kg (5,886 lbs)"
    },
    wheels: {
      frontTyres: "285/45 R21",
      rearTyres: "285/45 R21",
      brakes: "All 4 Ventilated Discs with i-Pedal Regenerative Braking"
    },
    editorial: {
      overview: "The Hyundai Ioniq 9 is Hyundai's flagship 3-row pure electric family luxury SUV. Built on an extended version of the acclaimed 800V Electric-Global Modular Platform (E-GMP), the Ioniq 9 brings aero-aesthetic 'Aerosthetic' streamlining, a massive 110.3 kWh battery pack delivering over 620 km of real-world endurance, and an ultra-luxurious swiveling lounge interior designed for executive and family long-distance touring.",
      design: "Characterized by Parametric Pixel lighting with full-width dynamic welcome animations, boat-tail aerodynamic rear contours, flush pop-out handles, and 21-inch turbine-blade aero wheels yielding a remarkable 0.259 drag coefficient.",
      interior: "A living room on wheels featuring second-row relaxation captain seats with massage function, 180-degree swiveling capability, sliding Universal Island center console, dual 12-inch panoramic curved screens, 14-speaker Bose sound system, and eco-friendly biophilic upholstery."
    },
    mainImage: "images/hyundai_ioniq9_2027.jpg",
    gallery: [
      { url: "images/hyundai_ioniq9_2027.jpg", caption: "Hyundai Ioniq 9 - Full-Size Aerosthetic Silhouette & Parametric Pixel Lighting", type: "exterior" },
      { url: "images/hyundai_ioniq9_interior.jpg", caption: "Interior: Swiveling Lounge Captain Chairs & Panoramic Curved Display", type: "interior" },
      { url: "images/hyundai_ioniq9_interior.jpg", caption: "Interior: Sliding Universal Island Console & Biophilic Materials", type: "interior" }
    ],
    officialUrl: "https://www.hyundai.com/worldwide/en/eco/ioniq9",
    wikiUrl: "https://en.wikipedia.org/wiki/Hyundai_Ioniq_9"
  },

  // --- TOYOTA (INDIA 2027) ---
  {
    id: "toyota-fortuner-hybrid",
    brand: "Toyota",
    model: "Fortuner Neo-Hybrid 4x4",
    year: 2027,
    region: "[IN]",
    body: "SUVs",
    bodySubtype: "Full-Size Ladder-Frame 4x4 SUV",
    fuel: "Hybrid",
    price: "₹45,00,000 (Est.)",
    popularity: 99,
    isLatest: true,
    isConcept: false,
    isEyeCandy: false,
    isUpcoming: true,
    newsDate: "Mid 2027",
    newsBadge: "2027 India Debut",
    newsHeadline: "Next-Gen 2027 Toyota Fortuner Hybrid Slated for Mid-2027 India Debut with TNGA-F Platform and 48V Tech",
    engine: {
      type: "2.8L 1GD-FTV DOHC Turbocharged Diesel + 48V Neo-Hybrid System",
      displacement: "2,755 cc",
      power: "220 HP (162 kW) Combined",
      torque: "406 lb-ft (550 Nm) @ 1,600–2,800 rpm",
      redline: "4,500 rpm",
      battery: "48V 4.3 Ah Lithium-ion System with Belt-Integrated Starter Generator (ISG)"
    },
    transmission: {
      gearbox: "6-Speed Automatic with Paddle Shifters",
      drivetrain: "Part-Time 4-Wheel Drive (4x4 with High/Low Range)",
      differential: "Electronic Rear Differential Lock & Auto Limited Slip Differential (Auto LSD)"
    },
    performance: {
      zeroToHundred: "9.5 sec",
      zeroToSixty: "8.9 sec",
      zeroToTwoHundred: "N/A",
      topSpeed: "185 km/h (115 mph)",
      brakingHundredToZero: "135 ft (41.1 m)"
    },
    dimensions: {
      length: "4,820 mm (189.8 in)",
      width: "1,885 mm (74.2 in)",
      height: "1,845 mm (72.6 in)",
      wheelbase: "2,760 mm (108.7 in)",
      kerbWeight: "2,240 kg (4,938 lbs)"
    },
    wheels: {
      frontTyres: "265/60 R18 All-Terrain",
      rearTyres: "265/60 R18 All-Terrain",
      brakes: "All 4 Ventilated Discs with Multi-Terrain ABS"
    },
    editorial: {
      overview: "The Toyota Fortuner is India's legendary king of full-size ladder-frame off-roaders. For 2027, Toyota is transitioning the Fortuner onto the high-rigidity TNGA-F platform shared with the Land Cruiser Prado, accompanied by an advanced 48V Neo-Hybrid system. This powertrain eliminates turbo lag, improves fuel efficiency by 10%, smooths stop-and-go acceleration, and introduces Toyota Safety Sense 3.0 ADAS.",
      design: "Rugged yet modern aesthetic highlighted by an imposing octagonal black grille, sharp bi-beam LED headlamps with integrated daytime running light signatures, wide wheel arches, and 225 mm of off-road ground clearance.",
      interior: "Refined 7-seater premium cabin with perforated ventilated leather seats, 12.3-inch Toyota Smart Connect multimedia touchscreen, 11-speaker JBL sound system, 360-degree panoramic view monitor, and dual-zone climate control."
    },
    mainImage: "images/toyota_fortuner_2027.jpg",
    gallery: [
      { url: "images/toyota_fortuner_2027.jpg", caption: "Toyota Fortuner Neo-Hybrid - Imposing 4x4 Off-Road Stance", type: "exterior" },
      { url: "images/toyota_fortuner_interior.jpg", caption: "Interior: 12.3-inch Digital Cockpit & 7-Seater Leather Luxury", type: "interior" },
      { url: "images/toyota_fortuner_interior.jpg", caption: "Interior: Multi-Terrain Select Controls & JBL Premium Audio", type: "interior" }
    ],
    officialUrl: "https://www.toyotabharat.com/showroom/fortuner",
    wikiUrl: "https://en.wikipedia.org/wiki/Toyota_Fortuner"
  },

  // --- FERRARI (GLOBAL 2027) ---
  {
    id: "ferrari-e-hypercar",
    brand: "Ferrari",
    model: "E-Hypercar (Project F244)",
    year: 2027,
    region: "[EU]",
    body: "Supercar",
    bodySubtype: "All-Electric Hypercar",
    fuel: "Electric",
    price: "$550,000 (Est.)",
    popularity: 99,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    isUpcoming: true,
    newsDate: "October 2027",
    newsBadge: "2027 World Debut",
    newsHeadline: "Ferrari's First-Ever All-Electric Supercar Slated for Late 2027 Debut with Quad-Motor Torque Vectoring",
    engine: {
      type: "4 Bespoke In-House Axial-Flux Electric Motors",
      displacement: "N/A",
      power: "1,050 HP (783 kW)",
      torque: "811 lb-ft (1,100 Nm)",
      redline: "20,000 rpm",
      battery: "95 kWh High-Density Structural Battery Pack with 800V Technology"
    },
    transmission: {
      gearbox: "Direct Drive Individual Motor Control",
      drivetrain: "Intelligent All-Wheel Drive (AWD) with Independent 4-Wheel Torque Vectoring",
      differential: "Full Digital Electronic Differential (Side Slip Control 9.0)"
    },
    performance: {
      zeroToHundred: "2.1 sec",
      zeroToSixty: "2.0 sec",
      zeroToTwoHundred: "6.2 sec",
      topSpeed: "350 km/h (217 mph)",
      brakingHundredToZero: "98 ft (29.8 m)"
    },
    dimensions: {
      length: "4,680 mm (184.3 in)",
      width: "2,020 mm (79.5 in)",
      height: "1,140 mm (44.9 in)",
      wheelbase: "2,650 mm (104.3 in)",
      kerbWeight: "1,650 kg (3,638 lbs)"
    },
    wheels: {
      frontTyres: "265/35 ZR20",
      rearTyres: "345/30 ZR21",
      brakes: "Carbon-Ceramic Matrix Discs (CCM-R Plus 410 mm Front / 390 mm Rear)"
    },
    editorial: {
      overview: "Ferrari's first-ever 100% all-electric supercar, developed under the codename Project F244 at the brand-new 'E-Building' in Maranello, marks an historic milestone for the Prancing Horse. Designed to deliver authentic visceral Ferrari emotion without fossil fuels, it pairs quad axial-flux electric motors with an advanced structural battery pack, active ground-effect aerodynamics, and a patented acoustic resonance system translating electric powertrain vibrations into an intoxicating sonic experience.",
      design: "Sculpted under Flavio Manzoni's direction, featuring an extreme S-Duct front hood, active trailing-edge flap, underbody tunnels producing over 800 kg of downforce at speed, and ultra-slender horizontal LED light blades.",
      interior: "A driver-focused cockpit fusing aerospace-grade carbon fiber with finest Italian Pelle Frau leather, racing bucket seats with integrated haptic telemetry feedback, and an F1-inspired steering wheel with mechanical Manettino rotary dials."
    },
    mainImage: "images/ferrari_ehypercar_2027.jpg",
    gallery: [
      { url: "images/ferrari_ehypercar_2027.jpg", caption: "Ferrari E-Hypercar - Extreme Aerodynamic Ground-Effect Stance", type: "exterior" },
      { url: "images/ferrari_cockpit_interior.jpg", caption: "Interior: Carbon Fiber Racing Cockpit & F1 Manettino Controls", type: "interior" },
      { url: "images/ferrari_cockpit_interior.jpg", caption: "Interior: Haptic Racing Seats & Digital Telemetry Cluster", type: "interior" }
    ],
    officialUrl: "https://www.ferrari.com",
    wikiUrl: "https://en.wikipedia.org/wiki/Ferrari"
  },

  // --- LAMBORGHINI (GLOBAL 2027) ---
  {
    id: "lamborghini-lanzador",
    brand: "Lamborghini",
    model: "Lanzador Ultra GT",
    year: 2027,
    region: "[EU]",
    body: "Supercar",
    bodySubtype: "2+2 High-Riding Ultra Gran Turismo",
    fuel: "Electric",
    price: "$350,000 (Est.)",
    popularity: 99,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    isUpcoming: true,
    newsDate: "April 2027",
    newsBadge: "2027 World Debut",
    newsHeadline: "2027 Lamborghini Lanzador Enters Final Production Testing: 1,341 HP Electric 2+2 Ultra GT",
    engine: {
      type: "Dual High-Output Electric Motors (Over 1 Megawatt Output)",
      displacement: "N/A",
      power: "1,341 HP (1,000 kW)",
      torque: "1,032 lb-ft (1,400 Nm)",
      redline: "17,500 rpm",
      battery: "105 kWh Performance Lithium-ion Pack (500+ km range, 800V Charging)"
    },
    transmission: {
      gearbox: "Single-Speed Reduction Gearbox",
      drivetrain: "Permanent All-Wheel Drive with Active e-Torque Vectoring",
      differential: "Steerable Rear Axle & Electronic Torque Distribution"
    },
    performance: {
      zeroToHundred: "2.5 sec",
      zeroToSixty: "2.3 sec",
      zeroToTwoHundred: "7.0 sec",
      topSpeed: "320 km/h (199 mph)",
      brakingHundredToZero: "102 ft (31.1 m)"
    },
    dimensions: {
      length: "4,980 mm (196.1 in)",
      width: "2,050 mm (80.7 in)",
      height: "1,500 mm (59.1 in)",
      wheelbase: "2,950 mm (116.1 in)",
      kerbWeight: "2,200 kg (4,850 lbs)"
    },
    wheels: {
      frontTyres: "285/35 R23",
      rearTyres: "325/30 R23",
      brakes: "Carbon-Ceramic Brakes (420 mm Front / 410 mm Rear)"
    },
    editorial: {
      overview: "The Lamborghini Lanzador establishes a bold new vehicle segment: the Ultra GT. Blending the super-sports performance of the Revuelto with the versatile ground clearance and daily usability of the Urus, the 2+2 Lanzador unleashes over one megawatt of peak electrical power. Controlled by Lamborghini Dinamica Veicolo Integrata (LDVI 2.0) with active rear-wheel steering and air suspension, it sets an uncharted benchmark for electric emotion.",
      design: "Styled by Mitja Borkert at Centro Stile Lamborghini, showcasing futuristic spaceship lines, hexagonal wheel arches, Aerodinamica Lamborghini Attiva (ALA 2.0) mobile front air flaps, and iconic Y-shaped daytime running lights.",
      interior: "A pilot-oriented cockpit with jet-fighter styling, featuring a floating center console bridge, digital passenger display, 100% sustainable materials including Australian Merino wool, regenerated carbon fiber, and synthetic nylon from recycled ocean plastics."
    },
    mainImage: "images/lamborghini_lanzador_2027.jpg",
    gallery: [
      { url: "images/lamborghini_lanzador_2027.jpg", caption: "Lamborghini Lanzador - High-Riding 2+2 Ultra GT Stance", type: "exterior" },
      { url: "images/lamborghini_lanzador_interior.jpg", caption: "Interior: Jet-Fighter Pilot Cockpit with Floating Bridge", type: "interior" },
      { url: "images/lamborghini_lanzador_interior.jpg", caption: "Interior: Regenerated Carbon & Merino Wool Luxury", type: "interior" }
    ],
    officialUrl: "https://www.lamborghini.com/en-en/models/concept/lanzador",
    wikiUrl: "https://en.wikipedia.org/wiki/Lamborghini_Lanzador"
  },

  // --- PORSCHE (GLOBAL 2027) ---
  {
    id: "porsche-718-cayman-ev",
    brand: "Porsche",
    model: "718 Cayman EV",
    year: 2027,
    region: "[EU]",
    body: "Sports Cars",
    bodySubtype: "Mid-Motor Electric Sports Coupe",
    fuel: "Electric",
    price: "$98,000 (Est.)",
    popularity: 98,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    isUpcoming: true,
    newsDate: "May 2027",
    newsBadge: "2027 World Debut",
    newsHeadline: "2027 Porsche 718 Cayman EV Revealed with Revolutionary e-Core Mid-Battery Architecture",
    engine: {
      type: "Dual Permanently Excited Synchronous Motors (PSM)",
      displacement: "N/A",
      power: "450 HP (335 kW)",
      torque: "442 lb-ft (600 Nm)",
      redline: "17,000 rpm",
      battery: "82 kWh 'e-Core' Mid-Mounted Battery Pack (800V Architecture, 270 kW DC Fast Charging: 10–80% in 18 min)"
    },
    transmission: {
      gearbox: "2-Speed Rear Transmission / Single-Speed Front",
      drivetrain: "Rear-Biased All-Wheel Drive (AWD)",
      differential: "Porsche Torque Vectoring Plus (PTV Plus)"
    },
    performance: {
      zeroToHundred: "3.4 sec",
      zeroToSixty: "3.2 sec",
      zeroToTwoHundred: "11.2 sec",
      topSpeed: "285 km/h (177 mph)",
      brakingHundredToZero: "104 ft (31.7 m)"
    },
    dimensions: {
      length: "4,400 mm (173.2 in)",
      width: "1,830 mm (72.0 in)",
      height: "1,270 mm (50.0 in)",
      wheelbase: "2,480 mm (97.6 in)",
      kerbWeight: "1,620 kg (3,571 lbs)"
    },
    wheels: {
      frontTyres: "245/35 ZR20",
      rearTyres: "295/30 ZR20",
      brakes: "Porsche Surface Coated Brakes (PSCB 390 mm Front / 360 mm Rear)"
    },
    editorial: {
      overview: "The all-electric Porsche 718 Cayman represents the definitive transition of pure mid-engine sports car handling into the electric era. By packaging the 82 kWh battery vertically behind the driver's seats ('e-Core' layout) rather than flat in the underfloor, Porsche engineers preserved the ultra-low seating position, agile polar moment of inertia, and authentic 50:50 weight distribution that define the 718 pedigree.",
      design: "Sleek aerodynamic evolution of the classic Cayman shape with quad-LED matrix headlights derived from the Mission X, active front cooling louvers, flush aero door handles, and a continuous light band at the rear with animated welcome graphics.",
      interior: "Driver-centric cabin with a curved 12.6-inch OLED instrument cluster, tactile haptic climate controls, 10.9-inch PCM infotainment screen with track telemetry app, and ultra-lightweight carbon fiber bucket seats."
    },
    mainImage: "images/porsche_cayman_2027.jpg",
    gallery: [
      { url: "images/porsche_cayman_2027.jpg", caption: "Porsche 718 Cayman EV - Low-Slung Mid-Engine Electric Stance", type: "exterior" },
      { url: "images/porsche_cayman_interior.jpg", caption: "Interior: Curved 12.6-inch OLED Cockpit & Drive Mode Switch", type: "interior" },
      { url: "images/porsche_cayman_interior.jpg", caption: "Interior: Race-Tex Carbon Bucket Seats & Track App", type: "interior" }
    ],
    officialUrl: "https://www.porsche.com",
    wikiUrl: "https://en.wikipedia.org/wiki/Porsche_718"
  },

  // --- BMW (GLOBAL 2027) ---
  {
    id: "bmw-im3-neue-klasse",
    brand: "BMW",
    model: "iM3 Neue Klasse",
    year: 2027,
    region: "[EU]",
    body: "Sedans",
    bodySubtype: "Quad-Motor Electric M Performance Sedan",
    fuel: "Electric",
    price: "$115,000 (Est.)",
    popularity: 98,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    isUpcoming: true,
    newsDate: "July 2027",
    newsBadge: "2027 World Debut",
    newsHeadline: "BMW M Confirms Quad-Motor 1,341 HP iM3 for 2027 Production on Neue Klasse 800V Architecture",
    engine: {
      type: "4 Independent Wheel-Mounted Electric Motors with 'Heart of Joy' ECU",
      displacement: "N/A",
      power: "1,341 HP (1,000 kW)",
      torque: "958 lb-ft (1,300 Nm)",
      redline: "21,000 rpm",
      battery: "100 kWh Gen6 Cylindrical Cell Battery (800V Architecture, 30% Faster Charging)"
    },
    transmission: {
      gearbox: "Direct Drive Quad-Motor Transmission",
      drivetrain: "M xDrive with Fully Variable Independent 4-Wheel Torque Vectoring",
      differential: "Software-Defined Dynamic M Differential with RWD Drift Mode"
    },
    performance: {
      zeroToHundred: "2.4 sec",
      zeroToSixty: "2.2 sec",
      zeroToTwoHundred: "6.8 sec",
      topSpeed: "310 km/h (193 mph)",
      brakingHundredToZero: "101 ft (30.8 m)"
    },
    dimensions: {
      length: "4,750 mm (187.0 in)",
      width: "1,920 mm (75.6 in)",
      height: "1,420 mm (55.9 in)",
      wheelbase: "2,875 mm (113.2 in)",
      kerbWeight: "1,980 kg (4,365 lbs)"
    },
    wheels: {
      frontTyres: "275/35 ZR20",
      rearTyres: "295/30 ZR21",
      brakes: "M Carbon Ceramic Brakes (400 mm Front / 380 mm Rear)"
    },
    editorial: {
      overview: "The upcoming 2027 BMW iM3 (codenamed ZA0) is the first pure electric super-sedan developed by BMW M GmbH. Built on the radical Neue Klasse architecture, the iM3 harnesses four electric motors—one per wheel—managed by BMW's revolutionary 'Heart of Joy' supercomputing central processor. Capable of generating up to 1,000 kW (1,341 horsepower), it delivers instant millisecond-level torque adjustments and a switchable 100% rear-wheel drift mode.",
      design: "Reimagines classic BMW design with a horizontal full-width digital kidney grille seamlessly integrating the headlights, Hofmeister kink, muscular boxy M fenders, carbon-fiber roof, and active rear diffuser.",
      interior: "Next-generation BMW Panoramic Vision HUD spanning the full width of the windshield base, central parallelogram touchscreen, M multifunction steering wheel with illuminated red M1/M2 buttons, and carbon shell sports seats."
    },
    mainImage: "images/bmw_im3_2027.jpg",
    gallery: [
      { url: "images/bmw_im3_2027.jpg", caption: "BMW iM3 Neue Klasse - Full-Width Digital Grille & Monolithic Stance", type: "exterior" },
      { url: "images/bmw_im3_interior.jpg", caption: "Interior: Panoramic Vision Windshield HUD & M Steering Wheel", type: "interior" },
      { url: "images/bmw_im3_interior.jpg", caption: "Interior: M Carbon Shell Racing Bucket Seats & Minimalist Controls", type: "interior" }
    ],
    officialUrl: "https://www.bmw-m.com",
    wikiUrl: "https://en.wikipedia.org/wiki/BMW_M3"
  },

  // --- TESLA (GLOBAL 2027) ---
  {
    id: "tesla-roadster-2",
    brand: "Tesla",
    model: "Roadster 2.0 SpaceX Package",
    year: 2027,
    region: "[US]",
    body: "Supercar",
    bodySubtype: "All-Electric Hypercar with Aero Thrusters",
    fuel: "Electric",
    price: "$250,000",
    popularity: 100,
    isLatest: true,
    isConcept: false,
    isEyeCandy: true,
    isUpcoming: true,
    newsDate: "August 2027",
    newsBadge: "2027 World Debut",
    newsHeadline: "Tesla Roadster 2.0 Target Confirmed for 2027 Customer Deliveries with Sub-1-Second 0-60 Time",
    engine: {
      type: "Tri-Motor Plaid Electric Powertrain + Optional SpaceX Cold-Gas Thruster System",
      displacement: "N/A",
      power: "1,400+ HP (Combined)",
      torque: "7,375 lb-ft (10,000 Nm at wheels)",
      redline: "23,000 rpm",
      battery: "200 kWh High-Energy Density Battery Pack (1,000 km / 620 miles range)"
    },
    transmission: {
      gearbox: "Single-Speed Automatic",
      drivetrain: "All-Wheel Drive (AWD) with Independent Rear Motors",
      differential: "Plaid Dynamic Torque Vectoring"
    },
    performance: {
      zeroToHundred: "1.9 sec (sub 1.0 sec with SpaceX Thruster Package)",
      zeroToSixty: "1.1 sec",
      zeroToTwoHundred: "4.2 sec",
      topSpeed: "400+ km/h (250+ mph)",
      brakingHundredToZero: "92 ft (28.0 m)"
    },
    dimensions: {
      length: "4,450 mm (175.2 in)",
      width: "1,980 mm (78.0 in)",
      height: "1,210 mm (47.6 in)",
      wheelbase: "2,600 mm (102.4 in)",
      kerbWeight: "1,850 kg (4,078 lbs)"
    },
    wheels: {
      frontTyres: "265/35 ZR20",
      rearTyres: "325/30 ZR21",
      brakes: "Carbon-Ceramic Matrix High-Performance Brakes"
    },
    editorial: {
      overview: "The 2027 Tesla Roadster 2.0 aims to shatter every metric of automotive performance. Engineered with a tri-motor Plaid powertrain and a 200 kWh battery pack delivering over 620 miles of highway range, the flagship SpaceX Package equips cold-gas thrusters around the car to achieve physics-defying acceleration, braking, and cornering grip, targeting 0–60 mph in under 1.0 second.",
      design: "Ultra-sleek carbon composite monocoque bodywork with removable lightweight glass roof that stores in the trunk, aerodynamic rear diffuser, and active retractable wing.",
      interior: "Minimalist 4-passenger (2+2) interior with race-inspired yoke steering controller, curved central touchscreen display, and lightweight racing seats."
    },
    mainImage: "images/tesla_roadster_2027.jpg",
    gallery: [
      { url: "images/tesla_roadster_2027.jpg", caption: "Tesla Roadster 2.0 - Sculpted Aerodynamic Hypercar Silhouette", type: "exterior" },
      { url: "images/tesla_roadster_interior.jpg", caption: "Interior: Minimalist Cockpit with Yoke Steering & Glass Targa Roof", type: "interior" },
      { url: "images/tesla_roadster_interior.jpg", caption: "Interior: 2+2 Lightweight Racing Bucket Seats", type: "interior" }
    ],
    officialUrl: "https://www.tesla.com/roadster",
    wikiUrl: "https://en.wikipedia.org/wiki/Tesla_Roadster_(second_generation)"
  }
];

// ==========================================================================
// 2. REUSABLE CARD RENDERERS (Grid and List View Modes)
// ==========================================================================
function renderCarCard(car, viewMode = "grid") {
  const interiorCount = car.gallery ? car.gallery.filter(g => g.type === 'interior').length : 0;
  const powerClean = car.engine && car.engine.power ? car.engine.power.split('@')[0] : '';
  const topSpeedClean = car.performance && car.performance.topSpeed ? car.performance.topSpeed.split('(')[0] : '';

  if (viewMode === "list") {
    return `
      <article class="car-card car-card-list">
        <div class="car-image">
          <img src="${car.mainImage}" alt="${car.brand} ${car.model}" loading="lazy">
        </div>
        <div class="car-info">
          <span class="car-brand">${car.brand} <span class="region-badge">${car.region}</span></span>
          <h3>${car.year} ${car.brand} ${car.model}</h3>
          <span class="car-year">${car.year} &bull; ${car.body} &bull; ${car.fuel}</span>
          <p>${car.editorial.overview}</p>
          <ul class="specs">
            <li><strong>Power:</strong> ${powerClean}</li>
            <li><strong>0–100 km/h:</strong> ${car.performance.zeroToHundred}</li>
            <li><strong>Top Speed:</strong> ${topSpeedClean}</li>
          </ul>
          <a href="car-details.html?id=${car.id}" class="view-link">View Details &rarr;</a>
        </div>
      </article>
    `;
  }

  // Default Grid Card matching User's preferred layout
  return `
    <article class="car-card">
      <div class="car-image">
        <img src="${car.mainImage}" alt="${car.brand} ${car.model}" loading="lazy">
      </div>
      <div class="car-info">
        <span class="car-brand">${car.brand} <span class="region-badge">${car.region}</span></span>
        <h3>${car.model}</h3>
        <span class="car-year">${car.year} &bull; ${car.body}</span>
        <p>${car.editorial.overview}</p>
        <ul class="specs">
          <li><strong>Power:</strong> ${powerClean}</li>
          <li><strong>0–100 km/h:</strong> ${car.performance.zeroToHundred}</li>
          <li><strong>Top Speed:</strong> ${topSpeedClean}</li>
        </ul>
        <a href="car-details.html?id=${car.id}" class="view-link">View Details &rarr;</a>
      </div>
    </article>
  `;
}

// ==========================================================================
// 3. HOMEPAGE LOGIC (index.html)
// ==========================================================================
let homeVisibleCount = 6;

function initHomePage() {
  const searchForm = document.getElementById("home-search-form");
  const searchInput = document.getElementById("home-search-input");
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = searchInput.value.trim();
      window.location.href = q ? `cars.html?search=${encodeURIComponent(q)}` : "cars.html";
    });
  }

  const featuredGrid = document.getElementById("home-featured-grid");
  const showMoreBtn = document.getElementById("home-show-more-btn");
  const eyeCandyGrid = document.getElementById("home-eyecandy-grid");

  function renderFeaturedCars() {
    if (!featuredGrid) return;
    const carsToShow = CARS_DATABASE.slice(0, homeVisibleCount);
    featuredGrid.innerHTML = carsToShow.map(c => renderCarCard(c, "grid")).join("");

    if (showMoreBtn) {
      showMoreBtn.style.display = homeVisibleCount >= CARS_DATABASE.length ? "none" : "inline-block";
    }
  }

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      homeVisibleCount += 4;
      renderFeaturedCars();
    });
  }

  // Render Curated Eye Candy Section
  if (eyeCandyGrid) {
    const eyeCandyCars = CARS_DATABASE.filter(c => c.isEyeCandy).slice(0, 4);
    eyeCandyGrid.innerHTML = eyeCandyCars.map(c => renderCarCard(c, "grid")).join("");
  }

  renderFeaturedCars();
}

// ==========================================================================
// 4. LATEST CARS & ALL CARS ARCHIVE (cars.html)
// ==========================================================================
let currentViewMode = "grid";
let carsVisibleCount = 8;

function initCarsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialSearch = urlParams.get("search") || "";
  const initialBrand = urlParams.get("brand") || "";
  const initialCategory = urlParams.get("category") || "";

  const searchInput = document.getElementById("cars-search-input");
  const brandSelect = document.getElementById("filter-brand");
  const bodySelect = document.getElementById("filter-body");
  const fuelSelect = document.getElementById("filter-fuel");
  const yearSelect = document.getElementById("filter-year");
  const sortSelect = document.getElementById("sort-select");
  const clearBtn = document.getElementById("clear-filters-btn");
  const gridViewBtn = document.getElementById("view-grid-btn");
  const listViewBtn = document.getElementById("view-list-btn");
  const resultsContainer = document.getElementById("cars-results-grid");
  const resultsCount = document.getElementById("cars-results-count");
  const showMoreBtn = document.getElementById("cars-show-more-btn");

  if (searchInput && initialSearch) searchInput.value = initialSearch;
  if (brandSelect && initialBrand) {
    for (let opt of brandSelect.options) {
      if (opt.value.toLowerCase() === initialBrand.toLowerCase()) {
        brandSelect.value = opt.value;
        break;
      }
    }
  }
  if (bodySelect && initialCategory) {
    for (let opt of bodySelect.options) {
      if (opt.value.toLowerCase() === initialCategory.toLowerCase()) {
        bodySelect.value = opt.value;
        break;
      }
    }
  }

  function getFilteredCars() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const selBrand = brandSelect ? brandSelect.value : "";
    const selBody = bodySelect ? bodySelect.value : "";
    const selFuel = fuelSelect ? fuelSelect.value : "";
    const selYear = yearSelect ? yearSelect.value : "";
    const selSort = sortSelect ? sortSelect.value : "newest";

    let results = CARS_DATABASE.filter(car => {
      if (query !== "") {
        const fullText = `${car.brand} ${car.model} ${car.body} ${car.bodySubtype} ${car.fuel} ${car.year} ${car.editorial.overview}`.toLowerCase();
        if (!fullText.includes(query)) return false;
      }
      if (selBrand !== "" && car.brand.toLowerCase() !== selBrand.toLowerCase()) return false;
      if (selBody !== "" && car.body.toLowerCase() !== selBody.toLowerCase()) return false;
      if (selFuel !== "" && car.fuel.toLowerCase() !== selFuel.toLowerCase()) return false;
      if (selYear !== "" && car.year.toString() !== selYear) return false;
      return true;
    });

    if (selSort === "newest") {
      results.sort((a, b) => b.year - a.year);
    } else if (selSort === "popular") {
      results.sort((a, b) => b.popularity - a.popularity);
    } else if (selSort === "oldest") {
      results.sort((a, b) => a.year - b.year);
    } else if (selSort === "name-asc") {
      results.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    } else if (selSort === "name-desc") {
      results.sort((a, b) => `${b.brand} ${b.model}`.localeCompare(`${a.brand} ${a.model}`));
    }

    return results;
  }

  function renderCars() {
    if (!resultsContainer) return;

    const filtered = getFilteredCars();
    if (resultsCount) {
      resultsCount.textContent = `Showing ${Math.min(carsVisibleCount, filtered.length)} of ${filtered.length} vehicles`;
    }

    if (filtered.length === 0) {
      resultsContainer.className = "car-grid";
      resultsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No vehicles found</h3>
          <p>No cars matched your query. Try resetting filters or browsing by manufacturer.</p>
          <button class="btn-primary" onclick="resetCarsFilters()">Clear All Filters</button>
        </div>
      `;
      if (showMoreBtn) showMoreBtn.style.display = "none";
      return;
    }

    resultsContainer.className = currentViewMode === "list" ? "car-list-container" : "car-grid";
    const slice = filtered.slice(0, carsVisibleCount);
    resultsContainer.innerHTML = slice.map(c => renderCarCard(c, currentViewMode)).join("");

    if (showMoreBtn) {
      showMoreBtn.style.display = carsVisibleCount >= filtered.length ? "none" : "inline-block";
    }
  }

  window.resetCarsFilters = function() {
    if (searchInput) searchInput.value = "";
    if (brandSelect) brandSelect.value = "";
    if (bodySelect) bodySelect.value = "";
    if (fuelSelect) fuelSelect.value = "";
    if (yearSelect) yearSelect.value = "";
    if (sortSelect) sortSelect.value = "newest";
    carsVisibleCount = 8;
    renderCars();
  };

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      carsVisibleCount += 6;
      renderCars();
    });
  }

  if (gridViewBtn) {
    gridViewBtn.addEventListener("click", () => {
      currentViewMode = "grid";
      gridViewBtn.classList.add("active");
      if (listViewBtn) listViewBtn.classList.remove("active");
      renderCars();
    });
  }

  if (listViewBtn) {
    listViewBtn.addEventListener("click", () => {
      currentViewMode = "list";
      listViewBtn.classList.add("active");
      if (gridViewBtn) gridViewBtn.classList.remove("active");
      renderCars();
    });
  }

  if (searchInput) searchInput.addEventListener("input", () => { carsVisibleCount = 8; renderCars(); });
  if (brandSelect) brandSelect.addEventListener("change", () => { carsVisibleCount = 8; renderCars(); });
  if (bodySelect) bodySelect.addEventListener("change", () => { carsVisibleCount = 8; renderCars(); });
  if (fuelSelect) fuelSelect.addEventListener("change", () => { carsVisibleCount = 8; renderCars(); });
  if (yearSelect) yearSelect.addEventListener("change", () => { carsVisibleCount = 8; renderCars(); });
  if (sortSelect) sortSelect.addEventListener("change", () => { carsVisibleCount = 8; renderCars(); });
  if (clearBtn) clearBtn.addEventListener("click", window.resetCarsFilters);

  renderCars();
}

// ==========================================================================
// 5. CAR DETAILS PAGE (car-details.html)
// ==========================================================================
let currentCar = null;
let activeGalleryType = "all";
let currentLightboxIndex = 0;

function initCarDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const carId = urlParams.get("id");
  const detailsContainer = document.getElementById("car-details-container");
  if (!detailsContainer) return;

  const car = CARS_DATABASE.find(c => c.id === carId) || CARS_DATABASE[0];
  currentCar = car;

  document.title = `${car.year} ${car.brand} ${car.model} ${car.region} — Car Curator`;

  const exteriorPhotos = car.gallery.filter(g => g.type === "exterior");
  const interiorPhotos = car.gallery.filter(g => g.type === "interior");
  const detailPhotos = car.gallery.filter(g => g.type === "details" || g.type === "engine");
  const moreBrandCars = CARS_DATABASE.filter(c => c.brand === car.brand && c.id !== car.id);
  const eyeCandyCars = CARS_DATABASE.filter(c => c.isEyeCandy && c.id !== car.id).slice(0, 3);

  detailsContainer.innerHTML = `
    <!-- NetCarShow A-Z Navigation Strip -->
    <div class="az-bar">
      <div class="container az-inner">
        <span class="az-label">Quick Brand:</span>
        <div class="az-letters">
          <a href="cars.html">All</a>
          <a href="cars.html?brand=Aston%20Martin">Aston Martin</a>
          <a href="cars.html?brand=Audi">Audi</a>
          <a href="cars.html?brand=BMW">BMW</a>
          <a href="cars.html?brand=Bugatti">Bugatti</a>
          <a href="cars.html?brand=Chevrolet">Chevrolet</a>
          <a href="cars.html?brand=Ferrari">Ferrari</a>
          <a href="cars.html?brand=Ford">Ford</a>
          <a href="cars.html?brand=Lamborghini">Lamborghini</a>
          <a href="cars.html?brand=McLaren">McLaren</a>
          <a href="cars.html?brand=Mercedes-AMG">Mercedes-AMG</a>
          <a href="cars.html?brand=Porsche">Porsche</a>
          <a href="cars.html?brand=Tesla">Tesla</a>
          <a href="cars.html?brand=Toyota">Toyota</a>
        </div>
      </div>
    </div>

    <!-- Breadcrumb -->
    <nav class="breadcrumb-bar">
      <div class="container">
        <a href="index.html">Home</a> &gt; 
        <a href="cars.html">Cars</a> &gt; 
        <a href="cars.html?brand=${encodeURIComponent(car.brand)}">${car.brand}</a> &gt; 
        <span>${car.year} ${car.model} ${car.region}</span>
      </div>
    </nav>

    <!-- Details Header -->
    <section class="details-hero container">
      <div class="details-header-info">
        <div class="details-tags">
          <a href="cars.html?brand=${encodeURIComponent(car.brand)}" class="badge badge-accent">${car.brand}</a>
          <span class="badge badge-glass">${car.year}</span>
          <a href="cars.html?category=${encodeURIComponent(car.body)}" class="badge badge-glass">${car.body}</a>
          <span class="badge badge-glass">${car.fuel}</span>
          <span class="badge badge-glass" style="color: #10b981;">📸 ${car.gallery.length} High-Res Photos</span>
          <a href="compare.html?car1=${car.id}" class="badge badge-accent" style="text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">⚖️ Compare this Car</a>
        </div>
        <h1 class="details-title">${car.year} ${car.brand} ${car.model} <span class="region-title-badge">${car.region}</span></h1>
        <div class="details-price-row">
          <span class="details-price">${car.price}</span>
          <span class="details-est">Base MSRP / Estimate</span>
        </div>
      </div>

      <!-- Hero Main Image -->
      <div class="details-main-img-box" onclick="openLightboxAtIndex(0)">
        <img src="${car.mainImage}" alt="${car.brand} ${car.model}" class="details-main-img">
        <div class="details-img-overlay-btn">Click to View Fullscreen / Wallpapers &rarr;</div>
      </div>
    </section>

    <!-- Editorial Description & Technical Specs -->
    <section class="details-content container">
      <div class="details-grid">
        
        <!-- Editorial Section -->
        <div class="details-overview-col">
          <div class="card-box">
            <h2>Vehicle Overview</h2>
            <p class="overview-text">${car.editorial.overview}</p>
            
            <h3 class="subsection-title">Design &amp; Aerodynamics</h3>
            <p class="overview-text">${car.editorial.design}</p>

            <h3 class="subsection-title">Interior &amp; Technology</h3>
            <p class="overview-text">${car.editorial.interior}</p>

            <h3 class="subsection-title">Reference Links</h3>
            <div class="external-links-row">
              <a href="${car.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-external">
                Official ${car.brand} Website &nearr;
              </a>
              <a href="${car.wikiUrl}" target="_blank" rel="noopener noreferrer" class="btn-external">
                Wikipedia Article &nearr;
              </a>
            </div>
          </div>
        </div>

        <!-- Technical Specifications Table Groups -->
        <div class="details-specs-col">
          <div class="card-box">
            <h2>Technical Specifications</h2>
            
            <h3 class="spec-group-title">🔥 Engine &amp; Powertrain</h3>
            <table class="specs-table">
              <tr><td>Engine Type</td><td><strong>${car.engine.type}</strong></td></tr>
              <tr><td>Displacement</td><td><strong>${car.engine.displacement}</strong></td></tr>
              <tr><td>Maximum Power</td><td><strong>${car.engine.power}</strong></td></tr>
              <tr><td>Maximum Torque</td><td><strong>${car.engine.torque}</strong></td></tr>
              <tr><td>Redline</td><td><strong>${car.engine.redline}</strong></td></tr>
              ${car.engine.battery !== "N/A" ? `<tr><td>Battery / Hybrid</td><td><strong>${car.engine.battery}</strong></td></tr>` : ''}
            </table>

            <h3 class="spec-group-title" style="margin-top: 18px;">⚙️ Transmission &amp; Drivetrain</h3>
            <table class="specs-table">
              <tr><td>Gearbox</td><td><strong>${car.transmission.gearbox}</strong></td></tr>
              <tr><td>Drive System</td><td><strong>${car.transmission.drivetrain}</strong></td></tr>
              <tr><td>Differential</td><td><strong>${car.transmission.differential}</strong></td></tr>
            </table>

            <h3 class="spec-group-title" style="margin-top: 18px;">🏁 Performance</h3>
            <table class="specs-table">
              <tr><td>0–100 km/h (0–62 mph)</td><td><strong>${car.performance.zeroToHundred}</strong></td></tr>
              <tr><td>0–60 mph</td><td><strong>${car.performance.zeroToSixty}</strong></td></tr>
              <tr><td>Top Speed</td><td><strong>${car.performance.topSpeed}</strong></td></tr>
              <tr><td>Braking 100–0 km/h</td><td><strong>${car.performance.brakingHundredToZero}</strong></td></tr>
            </table>

            <h3 class="spec-group-title" style="margin-top: 18px;">📐 Dimensions &amp; Weight</h3>
            <table class="specs-table">
              <tr><td>Length</td><td><strong>${car.dimensions.length}</strong></td></tr>
              <tr><td>Width</td><td><strong>${car.dimensions.width}</strong></td></tr>
              <tr><td>Height</td><td><strong>${car.dimensions.height}</strong></td></tr>
              <tr><td>Wheelbase</td><td><strong>${car.dimensions.wheelbase}</strong></td></tr>
              <tr><td>Kerb Weight</td><td><strong>${car.dimensions.kerbWeight}</strong></td></tr>
            </table>

            <h3 class="spec-group-title" style="margin-top: 18px;">🛞 Wheels &amp; Brakes</h3>
            <table class="specs-table">
              <tr><td>Front Tyres</td><td><strong>${car.wheels.frontTyres}</strong></td></tr>
              <tr><td>Rear Tyres</td><td><strong>${car.wheels.rearTyres}</strong></td></tr>
              <tr><td>Brakes</td><td><strong>${car.wheels.brakes}</strong></td></tr>
            </table>
          </div>
        </div>

      </div>
    </section>

    <!-- Multi-Angle Photo Gallery with Category Tabs -->
    <section class="details-gallery-section container">
      <div class="section-header">
        <div>
          <h2>High-Resolution Photo Gallery &amp; Wallpapers</h2>
          <p>Explore exterior angles, interior cockpit, steering wheel, and mechanical details</p>
        </div>
        <div class="gallery-type-pills">
          <button class="pill active" onclick="setGalleryFilter('all', this)">All Photos (${car.gallery.length})</button>
          <button class="pill" onclick="setGalleryFilter('exterior', this)">Exterior (${exteriorPhotos.length})</button>
          <button class="pill" onclick="setGalleryFilter('interior', this)">Interior (${interiorPhotos.length})</button>
          ${detailPhotos.length > 0 ? `<button class="pill" onclick="setGalleryFilter('details', this)">Details &amp; Engine (${detailPhotos.length})</button>` : ''}
        </div>
      </div>

      <div class="details-gallery-grid" id="details-gallery-grid"></div>
    </section>

    <!-- More From This Manufacturer -->
    ${moreBrandCars.length > 0 ? `
      <section class="cars-section container" style="border-top: 1px solid var(--border-color); padding-top: 40px;">
        <div class="section-header">
          <div>
            <h2>More from ${car.brand}</h2>
            <p>Explore other models and generations from the ${car.brand} collection</p>
          </div>
          <a href="cars.html?brand=${encodeURIComponent(car.brand)}" class="btn-card-details" style="align-self: flex-end;">
            All ${car.brand} Models &rarr;
          </a>
        </div>
        <div class="car-grid">
          ${moreBrandCars.map(c => renderCarCard(c, "grid")).join("")}
        </div>
      </section>
    ` : ''}

    <!-- Curated Eye Candy -->
    <section class="cars-section container" style="border-top: 1px solid var(--border-color); padding-top: 40px;">
      <div class="section-header">
        <div>
          <h2>Curated Eye Candy</h2>
          <p>Visually stunning automotive highlights from across our reference archive</p>
        </div>
        <a href="cars.html" class="btn-card-details" style="align-self: flex-end;">Explore Archive &rarr;</a>
      </div>
      <div class="car-grid">
        ${eyeCandyCars.map(c => renderCarCard(c, "grid")).join("")}
      </div>
    </section>
  `;

  renderGalleryItems();
}

function renderGalleryItems() {
  const grid = document.getElementById("details-gallery-grid");
  if (!grid || !currentCar) return;

  const filtered = currentCar.gallery.filter(item => {
    if (activeGalleryType === "all") return true;
    if (activeGalleryType === "details") return item.type === "details" || item.type === "engine";
    return item.type === activeGalleryType;
  });

  grid.innerHTML = filtered.map((item, idx) => `
    <div class="gallery-card" onclick="openLightboxAtIndex(${currentCar.gallery.indexOf(item)})">
      <img src="${item.url}" alt="${item.caption}" loading="lazy">
      <div class="gallery-card-overlay">
        <span>🔍 ${item.caption}</span>
        <span class="gallery-tag-pill">${item.type.toUpperCase()}</span>
      </div>
    </div>
  `).join("");
}

window.setGalleryFilter = function(type, btn) {
  activeGalleryType = type;
  document.querySelectorAll(".gallery-type-pills .pill").forEach(p => p.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderGalleryItems();
};

// ==========================================================================
// 6. FULL-SCREEN LIGHTBOX & WALLPAPER DOWNLOAD SELECTOR
// ==========================================================================
function openLightboxAtIndex(index) {
  if (!currentCar || !currentCar.gallery[index]) return;
  currentLightboxIndex = index;

  let lightbox = document.getElementById("image-lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "image-lightbox";
    lightbox.className = "lightbox-overlay";
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" onclick="closeLightbox()" aria-label="Close viewer">&times;</button>
        <button class="lightbox-nav-btn prev" onclick="navigateLightbox(-1)" aria-label="Previous photo">&#10094;</button>
        <button class="lightbox-nav-btn next" onclick="navigateLightbox(1)" aria-label="Next photo">&#10095;</button>
        
        <img id="lightbox-img" src="" alt="Full view">
        
        <div class="lightbox-footer">
          <div class="lightbox-info">
            <span id="lightbox-counter" class="lightbox-counter"></span>
            <p id="lightbox-caption" class="lightbox-caption"></p>
          </div>
          <div class="wallpaper-download-actions">
            <span class="wallpaper-label">Download Wallpaper:</span>
            <a id="download-4k" href="" target="_blank" rel="noopener noreferrer" class="btn-primary btn-sm">4K UHD (3840×2160)</a>
            <a id="download-1080p" href="" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm">1080p Full HD</a>
            <a id="download-mobile" href="" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm">Mobile Phone</a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  updateLightboxView();
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateLightboxView() {
  if (!currentCar || !currentCar.gallery[currentLightboxIndex]) return;
  const item = currentCar.gallery[currentLightboxIndex];

  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const counter = document.getElementById("lightbox-counter");
  const dl4k = document.getElementById("download-4k");
  const dl1080 = document.getElementById("download-1080p");
  const dlMobile = document.getElementById("download-mobile");

  if (img) img.src = item.url;
  if (caption) caption.textContent = `${currentCar.brand} ${currentCar.model} — ${item.caption}`;
  if (counter) counter.textContent = `Photo ${currentLightboxIndex + 1} of ${currentCar.gallery.length}`;

  if (dl4k) dl4k.href = item.url;
  if (dl1080) dl1080.href = item.url;
  if (dlMobile) dlMobile.href = item.url;
}

function navigateLightbox(dir) {
  if (!currentCar) return;
  currentLightboxIndex += dir;
  if (currentLightboxIndex < 0) currentLightboxIndex = currentCar.gallery.length - 1;
  if (currentLightboxIndex >= currentCar.gallery.length) currentLightboxIndex = 0;
  updateLightboxView();
}

function closeLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  if (lightbox) lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

window.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("image-lightbox");
  if (!lightbox || !lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") navigateLightbox(-1);
  if (e.key === "ArrowRight") navigateLightbox(1);
});

// ==========================================================================
// 7. CAR COMPARISON STUDIO (compare.html) - Inspired by Carshow360
// ==========================================================================
let compareCar1Id = "ferrari-296-gtb";
let compareCar2Id = "porsche-911-gt3-rs";
let compareActiveMode = "side-by-side";
let compareActiveAngle = "front";

function initComparePage() {
  const select1 = document.getElementById("compare-select-1");
  const select2 = document.getElementById("compare-select-2");
  const swapBtn = document.getElementById("swap-cars-btn");
  const stage = document.getElementById("compare-stage");
  const phantomControls = document.getElementById("phantom-controls");
  const phantomRange = document.getElementById("phantom-range");
  const metricsGrid = document.getElementById("compare-metrics-grid");
  const specsTableWrap = document.getElementById("compare-specs-table-wrap");
  const presetBtns = document.querySelectorAll(".preset-pill");
  const modeTabs = document.querySelectorAll("#compare-mode-tabs .mode-tab");
  const angleBtns = document.querySelectorAll("#compare-angle-toggles .angle-btn");

  if (!select1 || !select2) return;

  // 1. Populate Dropdowns grouped by Brand
  const brandsMap = {};
  CARS_DATABASE.forEach(car => {
    if (!brandsMap[car.brand]) brandsMap[car.brand] = [];
    brandsMap[car.brand].push(car);
  });

  const sortedBrands = Object.keys(brandsMap).sort();

  function buildOptionsHtml(selectedId) {
    return sortedBrands.map(brand => {
      const options = brandsMap[brand].map(car => `
        <option value="${car.id}" ${car.id === selectedId ? "selected" : ""}>
          ${car.year} ${car.brand} ${car.model} ${car.region}
        </option>
      `).join("");
      return `<optgroup label="${brand}">${options}</optgroup>`;
    }).join("");
  }

  // 2. Read URL Parameters (?car1=...&car2=...)
  const params = new URLSearchParams(window.location.search);
  const urlCar1 = params.get("car1");
  const urlCar2 = params.get("car2");

  if (urlCar1 && CARS_DATABASE.some(c => c.id === urlCar1)) {
    compareCar1Id = urlCar1;
  }
  if (urlCar2 && CARS_DATABASE.some(c => c.id === urlCar2)) {
    compareCar2Id = urlCar2;
  } else if (urlCar1 && !urlCar2) {
    const c1 = CARS_DATABASE.find(c => c.id === compareCar1Id);
    const competitor = CARS_DATABASE.find(c => c.id !== c1.id && (c.body === c1.body || c.brand !== c1.brand));
    if (competitor) compareCar2Id = competitor.id;
  }

  // Ensure car1 and car2 exist in CARS_DATABASE
  if (!CARS_DATABASE.some(c => c.id === compareCar1Id)) {
    compareCar1Id = CARS_DATABASE[0] ? CARS_DATABASE[0].id : "ferrari-296-gtb";
  }
  if (!CARS_DATABASE.some(c => c.id === compareCar2Id)) {
    const competitor = CARS_DATABASE.find(c => c.id !== compareCar1Id);
    compareCar2Id = competitor ? competitor.id : (CARS_DATABASE[1] ? CARS_DATABASE[1].id : "");
  }

  // Ensure car1 and car2 are not identical
  if (compareCar1Id === compareCar2Id) {
    const diffCar = CARS_DATABASE.find(c => c.id !== compareCar1Id);
    if (diffCar) compareCar2Id = diffCar.id;
  }

  select1.innerHTML = buildOptionsHtml(compareCar1Id);
  select2.innerHTML = buildOptionsHtml(compareCar2Id);

  // Helper to sync URL
  function syncUrl() {
    const newUrl = `${window.location.pathname}?car1=${encodeURIComponent(compareCar1Id)}&car2=${encodeURIComponent(compareCar2Id)}`;
    window.history.replaceState(null, "", newUrl);
  }

  // Helper to get car image by perspective/angle
  function getCarPhoto(car, angle) {
    if (!car) return "";
    if (angle === "interior") {
      const item = car.gallery.find(g => g.type === "interior" || g.caption.toLowerCase().includes("interior") || g.caption.toLowerCase().includes("cockpit"));
      return item ? item.url : car.mainImage;
    }
    if (angle === "engine") {
      const item = car.gallery.find(g => g.type === "engine" || g.caption.toLowerCase().includes("engine") || g.caption.toLowerCase().includes("v8") || g.caption.toLowerCase().includes("v6") || g.caption.toLowerCase().includes("motor"));
      return item ? item.url : (car.gallery[car.gallery.length - 1] ? car.gallery[car.gallery.length - 1].url : car.mainImage);
    }
    if (angle === "side") {
      const item = car.gallery.find(g => g.caption.toLowerCase().includes("side") || g.caption.toLowerCase().includes("profile") || g.caption.toLowerCase().includes("silhouette"));
      return item ? item.url : (car.gallery[1] ? car.gallery[1].url : car.mainImage);
    }
    if (angle === "rear") {
      const item = car.gallery.find(g => g.caption.toLowerCase().includes("rear") || g.caption.toLowerCase().includes("tail") || g.caption.toLowerCase().includes("diffuser") || g.caption.toLowerCase().includes("exhaust"));
      return item ? item.url : (car.gallery[2] ? car.gallery[2].url : car.mainImage);
    }
    // Default front
    return car.mainImage;
  }

  // Numerical parsing helpers for metrics
  function parseHp(str) {
    if (!str) return 0;
    const match = str.match(/(\d+[\d,]*)\s*HP/i);
    return match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  }
  function parseSec(str) {
    if (!str || str === "N/A") return 999;
    const match = str.match(/([\d\.]+)\s*sec/i);
    return match ? parseFloat(match[1]) : 999;
  }
  function parseTopSpeed(str) {
    if (!str || str === "N/A") return 0;
    const match = str.match(/(\d+[\d,]*)\s*km\/h/i);
    return match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  }
  function parseWeight(str) {
    if (!str || str === "N/A") return 0;
    const match = str.match(/(\d+[\d,]*)\s*kg/i);
    return match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  }

  // 3. Render Visual Comparison Stage
  function renderStage() {
    const car1 = CARS_DATABASE.find(c => c.id === compareCar1Id);
    const car2 = CARS_DATABASE.find(c => c.id === compareCar2Id);
    if (!car1 || !car2 || !stage) return;

    const img1 = getCarPhoto(car1, compareActiveAngle);
    const img2 = getCarPhoto(car2, compareActiveAngle);

    // Toggle Phantom Controls visibility
    if (phantomControls) {
      phantomControls.style.display = compareActiveMode === "phantom" ? "block" : "none";
      const pCar1Name = document.getElementById("phantom-car1-name");
      const pCar2Name = document.getElementById("phantom-car2-name");
      if (pCar1Name) pCar1Name.textContent = `${car1.brand} ${car1.model}`;
      if (pCar2Name) pCar2Name.textContent = `${car2.brand} ${car2.model}`;
    }

    if (compareActiveMode === "side-by-side" || compareActiveMode === "interior") {
      const activeAngleToUse = compareActiveMode === "interior" ? "interior" : compareActiveAngle;
      const displayImg1 = getCarPhoto(car1, activeAngleToUse);
      const displayImg2 = getCarPhoto(car2, activeAngleToUse);

      stage.innerHTML = `
        <div class="stage-face-to-face">
          <article class="compare-card car1-card">
            <div class="compare-img-wrap">
              <img src="${displayImg1}" alt="${car1.brand} ${car1.model}">
              <span class="compare-img-badge">${car1.year} ${car1.brand.toUpperCase()}</span>
            </div>
            <div class="compare-card-body">
              <div class="compare-card-header">
                <div class="compare-meta-pills">
                  <span class="compare-pill">${car1.body}</span>
                  <span class="compare-pill">${car1.fuel}</span>
                  <span class="compare-pill">${car1.region}</span>
                </div>
                <h3>${car1.year} ${car1.brand} ${car1.model}</h3>
                <div class="compare-price-line">${car1.price}</div>
              </div>
              <ul class="compare-quick-specs">
                <li><span>Power:</span> <strong>${car1.engine.power.split("@")[0]}</strong></li>
                <li><span>0–100 km/h:</span> <strong>${car1.performance.zeroToHundred}</strong></li>
                <li><span>Top Speed:</span> <strong>${car1.performance.topSpeed.split("(")[0]}</strong></li>
                <li><span>Drivetrain:</span> <strong>${car1.transmission.drivetrain.split("(")[0]}</strong></li>
              </ul>
              <a href="car-details.html?id=${car1.id}" class="compare-detail-link">Full Vehicle Profile &rarr;</a>
            </div>
          </article>

          <article class="compare-card car2-card">
            <div class="compare-img-wrap">
              <img src="${displayImg2}" alt="${car2.brand} ${car2.model}">
              <span class="compare-img-badge">${car2.year} ${car2.brand.toUpperCase()}</span>
            </div>
            <div class="compare-card-body">
              <div class="compare-card-header">
                <div class="compare-meta-pills">
                  <span class="compare-pill">${car2.body}</span>
                  <span class="compare-pill">${car2.fuel}</span>
                  <span class="compare-pill">${car2.region}</span>
                </div>
                <h3>${car2.year} ${car2.brand} ${car2.model}</h3>
                <div class="compare-price-line">${car2.price}</div>
              </div>
              <ul class="compare-quick-specs">
                <li><span>Power:</span> <strong>${car2.engine.power.split("@")[0]}</strong></li>
                <li><span>0–100 km/h:</span> <strong>${car2.performance.zeroToHundred}</strong></li>
                <li><span>Top Speed:</span> <strong>${car2.performance.topSpeed.split("(")[0]}</strong></li>
                <li><span>Drivetrain:</span> <strong>${car2.transmission.drivetrain.split("(")[0]}</strong></li>
              </ul>
              <a href="car-details.html?id=${car2.id}" class="compare-detail-link">Full Vehicle Profile &rarr;</a>
            </div>
          </article>
        </div>
      `;
    } else if (compareActiveMode === "split-slider") {
      stage.innerHTML = `
        <div class="split-slider-container" id="split-slider-container">
          <div class="split-layer split-layer-base">
            <img src="${img2}" alt="${car2.brand} ${car2.model}">
          </div>
          <div class="split-layer split-layer-overlay" id="split-overlay">
            <img src="${img1}" alt="${car1.brand} ${car1.model}" id="split-overlay-img">
          </div>
          <div class="split-divider-line" id="split-divider"></div>
          <div class="split-slider-handle" id="split-handle">&#8644;</div>
          <span class="split-label-car1">${car1.brand} ${car1.model}</span>
          <span class="split-label-car2">${car2.brand} ${car2.model}</span>
        </div>
      `;

      initSplitSlider();
    } else if (compareActiveMode === "phantom") {
      const opacity = phantomRange ? phantomRange.value / 100 : 0.5;
      stage.innerHTML = `
        <div class="phantom-stage-container">
          <div class="phantom-layer phantom-layer-base">
            <img src="${img1}" alt="${car1.brand} ${car1.model}">
          </div>
          <div class="phantom-layer phantom-layer-overlay" id="phantom-overlay-layer" style="opacity: ${opacity};">
            <img src="${img2}" alt="${car2.brand} ${car2.model}">
          </div>
          <span class="split-label-car1">${car1.brand} ${car1.model} (Base)</span>
          <span class="split-label-car2">${car2.brand} ${car2.model} (Ghost)</span>
        </div>
      `;
    }
  }

  // Interactive Split Slider drag handler
  function initSplitSlider() {
    const container = document.getElementById("split-slider-container");
    const overlay = document.getElementById("split-overlay");
    const overlayImg = document.getElementById("split-overlay-img");
    const divider = document.getElementById("split-divider");
    const handle = document.getElementById("split-handle");
    if (!container || !overlay || !overlayImg || !divider || !handle) return;

    let isDragging = false;

    function updateSlider(x) {
      const rect = container.getBoundingClientRect();
      let pos = x - rect.left;
      if (pos < 0) pos = 0;
      if (pos > rect.width) pos = rect.width;

      const pct = (pos / rect.width) * 100;
      overlay.style.width = `${pct}%`;
      divider.style.left = `${pct}%`;
      handle.style.left = `${pct}%`;
      overlayImg.style.width = `${rect.width}px`;
    }

    // Set initial size
    overlayImg.style.width = `${container.clientWidth}px`;

    container.addEventListener("mousedown", (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    container.addEventListener("touchstart", (e) => {
      isDragging = true;
      if (e.touches[0]) updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!isDragging || !e.touches[0]) return;
      updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchend", () => {
      isDragging = false;
    });
  }

  // 4. Render Metrics Bar Comparison
  function renderMetrics() {
    const car1 = CARS_DATABASE.find(c => c.id === compareCar1Id);
    const car2 = CARS_DATABASE.find(c => c.id === compareCar2Id);
    if (!car1 || !car2 || !metricsGrid) return;

    const hp1 = parseHp(car1.engine.power);
    const hp2 = parseHp(car2.engine.power);
    const sec1 = parseSec(car1.performance.zeroToHundred);
    const sec2 = parseSec(car2.performance.zeroToHundred);
    const top1 = parseTopSpeed(car1.performance.topSpeed);
    const top2 = parseTopSpeed(car2.performance.topSpeed);
    const wt1 = parseWeight(car1.dimensions.kerbWeight);
    const wt2 = parseWeight(car2.dimensions.kerbWeight);

    function getBarPct(v1, v2) {
      if (!v1 || !v2) return { p1: 50, p2: 50 };
      const total = v1 + v2;
      return { p1: Math.round((v1 / total) * 100), p2: Math.round((v2 / total) * 100) };
    }

    const hpBar = getBarPct(hp1, hp2);
    const secBar = getBarPct(sec2, sec1); // lower is better
    const topBar = getBarPct(top1, top2);
    const wtBar = getBarPct(wt2, wt1); // lighter is better

    metricsGrid.innerHTML = `
      <!-- Power Duel -->
      <div class="metric-card">
        <div class="metric-header">
          <span class="metric-title">🔥 Maximum Horsepower</span>
          ${hp1 !== hp2 ? `
            <span class="metric-diff-badge">
              ${hp1 > hp2 ? `+${hp1 - hp2} HP (${car1.brand})` : `+${hp2 - hp1} HP (${car2.brand})`}
            </span>
          ` : '<span class="metric-diff-badge">Equal Power</span>'}
        </div>
        <div class="metric-values-row">
          <span class="metric-val-car1">${hp1 > 0 ? `${hp1} HP` : 'N/A'}</span>
          <span class="metric-val-car2">${hp2 > 0 ? `${hp2} HP` : 'N/A'}</span>
        </div>
        <div class="metric-dual-bar">
          <div class="metric-bar-fill-1" style="width: ${hpBar.p1}%;"></div>
          <div class="metric-bar-fill-2" style="width: ${hpBar.p2}%;"></div>
        </div>
      </div>

      <!-- Acceleration Duel -->
      <div class="metric-card">
        <div class="metric-header">
          <span class="metric-title">⚡ 0–100 km/h (0–62 mph)</span>
          ${sec1 !== sec2 && sec1 < 900 && sec2 < 900 ? `
            <span class="metric-diff-badge">
              ${sec1 < sec2 ? `${(sec2 - sec1).toFixed(1)}s faster (${car1.brand})` : `${(sec1 - sec2).toFixed(1)}s faster (${car2.brand})`}
            </span>
          ` : '<span class="metric-diff-badge">Identical Benchmark</span>'}
        </div>
        <div class="metric-values-row">
          <span class="metric-val-car1">${sec1 < 900 ? `${sec1}s` : 'N/A'}</span>
          <span class="metric-val-car2">${sec2 < 900 ? `${sec2}s` : 'N/A'}</span>
        </div>
        <div class="metric-dual-bar">
          <div class="metric-bar-fill-1" style="width: ${secBar.p1}%;"></div>
          <div class="metric-bar-fill-2" style="width: ${secBar.p2}%;"></div>
        </div>
      </div>

      <!-- Top Speed Duel -->
      <div class="metric-card">
        <div class="metric-header">
          <span class="metric-title">🏁 Maximum Velocity</span>
          ${top1 !== top2 ? `
            <span class="metric-diff-badge">
              ${top1 > top2 ? `+${top1 - top2} km/h (${car1.brand})` : `+${top2 - top1} km/h (${car2.brand})`}
            </span>
          ` : '<span class="metric-diff-badge">Equal Top Speed</span>'}
        </div>
        <div class="metric-values-row">
          <span class="metric-val-car1">${top1 > 0 ? `${top1} km/h` : 'N/A'}</span>
          <span class="metric-val-car2">${top2 > 0 ? `${top2} km/h` : 'N/A'}</span>
        </div>
        <div class="metric-dual-bar">
          <div class="metric-bar-fill-1" style="width: ${topBar.p1}%;"></div>
          <div class="metric-bar-fill-2" style="width: ${topBar.p2}%;"></div>
        </div>
      </div>

      <!-- Weight Duel -->
      <div class="metric-card">
        <div class="metric-header">
          <span class="metric-title">⚖️ Kerb Weight (Lighter is Better)</span>
          ${wt1 !== wt2 && wt1 > 0 && wt2 > 0 ? `
            <span class="metric-diff-badge">
              ${wt1 < wt2 ? `${wt2 - wt1} kg lighter (${car1.brand})` : `${wt1 - wt2} kg lighter (${car2.brand})`}
            </span>
          ` : '<span class="metric-diff-badge">Equal Weight</span>'}
        </div>
        <div class="metric-values-row">
          <span class="metric-val-car1">${wt1 > 0 ? `${wt1.toLocaleString()} kg` : 'N/A'}</span>
          <span class="metric-val-car2">${wt2 > 0 ? `${wt2.toLocaleString()} kg` : 'N/A'}</span>
        </div>
        <div class="metric-dual-bar">
          <div class="metric-bar-fill-1" style="width: ${wtBar.p1}%;"></div>
          <div class="metric-bar-fill-2" style="width: ${wtBar.p2}%;"></div>
        </div>
      </div>
    `;
  }

  // 5. Render Detailed Technical Specs Matrix Table
  function renderSpecsTable() {
    const car1 = CARS_DATABASE.find(c => c.id === compareCar1Id);
    const car2 = CARS_DATABASE.find(c => c.id === compareCar2Id);
    if (!car1 || !car2 || !specsTableWrap) return;

    const hp1 = parseHp(car1.engine.power);
    const hp2 = parseHp(car2.engine.power);
    const sec1 = parseSec(car1.performance.zeroToHundred);
    const sec2 = parseSec(car2.performance.zeroToHundred);
    const top1 = parseTopSpeed(car1.performance.topSpeed);
    const top2 = parseTopSpeed(car2.performance.topSpeed);

    function formatRow(label, v1, v2, winner) {
      const c1Class = winner === 1 ? 'class="winner-cell"' : '';
      const c2Class = winner === 2 ? 'class="winner-cell"' : '';
      const w1Tag = winner === 1 ? '<span class="winner-pill-tag">Advantage</span>' : '';
      const w2Tag = winner === 2 ? '<span class="winner-pill-tag">Advantage</span>' : '';

      return `
        <tr>
          <td><strong>${label}</strong></td>
          <td ${c1Class}>${v1 || "N/A"} ${w1Tag}</td>
          <td ${c2Class}>${v2 || "N/A"} ${w2Tag}</td>
        </tr>
      `;
    }

    specsTableWrap.innerHTML = `
      <table class="compare-matrix-table">
        <thead>
          <tr>
            <th class="col-feature">Technical Specification</th>
            <th class="col-car1">${car1.year} ${car1.brand} ${car1.model}</th>
            <th class="col-car2">${car2.year} ${car2.brand} ${car2.model}</th>
          </tr>
        </thead>
        <tbody>
          <!-- Performance -->
          <tr class="compare-group-row"><td colspan="3">🏁 Performance &amp; Acceleration</td></tr>
          ${formatRow("0–100 km/h (0–62 mph)", car1.performance.zeroToHundred, car2.performance.zeroToHundred, sec1 < sec2 ? 1 : (sec2 < sec1 ? 2 : 0))}
          ${formatRow("0–60 mph", car1.performance.zeroToSixty, car2.performance.zeroToSixty, 0)}
          ${formatRow("0–200 km/h", car1.performance.zeroToTwoHundred, car2.performance.zeroToTwoHundred, 0)}
          ${formatRow("Top Speed", car1.performance.topSpeed, car2.performance.topSpeed, top1 > top2 ? 1 : (top2 > top1 ? 2 : 0))}
          ${formatRow("Braking 100–0 km/h", car1.performance.brakingHundredToZero, car2.performance.brakingHundredToZero, 0)}

          <!-- Engine & Powertrain -->
          <tr class="compare-group-row"><td colspan="3">🔥 Engine &amp; Powertrain</td></tr>
          ${formatRow("Engine Architecture", car1.engine.type, car2.engine.type, 0)}
          ${formatRow("Engine Displacement", car1.engine.displacement, car2.engine.displacement, 0)}
          ${formatRow("Maximum Horsepower", car1.engine.power, car2.engine.power, hp1 > hp2 ? 1 : (hp2 > hp1 ? 2 : 0))}
          ${formatRow("Maximum Torque", car1.engine.torque, car2.engine.torque, 0)}
          ${formatRow("Engine Redline", car1.engine.redline, car2.engine.redline, 0)}
          ${formatRow("Battery / Hybrid Architecture", car1.engine.battery, car2.engine.battery, 0)}

          <!-- Transmission & Drivetrain -->
          <tr class="compare-group-row"><td colspan="3">⚙️ Transmission &amp; Drivetrain</td></tr>
          ${formatRow("Transmission / Gearbox", car1.transmission.gearbox, car2.transmission.gearbox, 0)}
          ${formatRow("Drive Configuration", car1.transmission.drivetrain, car2.transmission.drivetrain, 0)}
          ${formatRow("Differential Setup", car1.transmission.differential, car2.transmission.differential, 0)}

          <!-- Dimensions & Weight -->
          <tr class="compare-group-row"><td colspan="3">📐 Dimensions &amp; Weight</td></tr>
          ${formatRow("Overall Length", car1.dimensions.length, car2.dimensions.length, 0)}
          ${formatRow("Overall Width", car1.dimensions.width, car2.dimensions.width, 0)}
          ${formatRow("Overall Height", car1.dimensions.height, car2.dimensions.height, 0)}
          ${formatRow("Wheelbase", car1.dimensions.wheelbase, car2.dimensions.wheelbase, 0)}
          ${formatRow("Kerb Weight", car1.dimensions.kerbWeight, car2.dimensions.kerbWeight, 0)}

          <!-- Wheels & Brakes -->
          <tr class="compare-group-row"><td colspan="3">🛞 Wheels, Tyres &amp; Brakes</td></tr>
          ${formatRow("Front Tyres", car1.wheels.frontTyres, car2.wheels.frontTyres, 0)}
          ${formatRow("Rear Tyres", car1.wheels.rearTyres, car2.wheels.rearTyres, 0)}
          ${formatRow("Brake System", car1.wheels.brakes, car2.wheels.brakes, 0)}

          <!-- Price & Classification -->
          <tr class="compare-group-row"><td colspan="3">💰 Pricing &amp; Market Segment</td></tr>
          ${formatRow("Base MSRP / Estimate", car1.price, car2.price, 0)}
          ${formatRow("Body Architecture", car1.body, car2.body, 0)}
          ${formatRow("Body Subtype", car1.bodySubtype, car2.bodySubtype, 0)}
          ${formatRow("Fuel Category", car1.fuel, car2.fuel, 0)}
          ${formatRow("Regional Variant", car1.region, car2.region, 0)}
          <tr>
            <td><strong>Full Reference Link</strong></td>
            <td><a href="car-details.html?id=${car1.id}" class="view-link" style="font-weight:700;">View ${car1.brand} ${car1.model} Profile &rarr;</a></td>
            <td><a href="car-details.html?id=${car2.id}" class="view-link" style="font-weight:700;">View ${car2.brand} ${car2.model} Profile &rarr;</a></td>
          </tr>
        </tbody>
      </table>
    `;
  }

  function updateAll() {
    syncUrl();
    renderStage();
    renderMetrics();
    renderSpecsTable();
  }

  // 6. Bind Event Listeners
  select1.addEventListener("change", (e) => {
    compareCar1Id = e.target.value;
    updateAll();
  });

  select2.addEventListener("change", (e) => {
    compareCar2Id = e.target.value;
    updateAll();
  });

  if (swapBtn) {
    swapBtn.addEventListener("click", () => {
      const tmp = compareCar1Id;
      compareCar1Id = compareCar2Id;
      compareCar2Id = tmp;
      select1.value = compareCar1Id;
      select2.value = compareCar2Id;
      updateAll();
    });
  }

  presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      presetBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const c1 = btn.getAttribute("data-car1");
      const c2 = btn.getAttribute("data-car2");
      if (CARS_DATABASE.some(c => c.id === c1)) compareCar1Id = c1;
      if (CARS_DATABASE.some(c => c.id === c2)) compareCar2Id = c2;
      select1.value = compareCar1Id;
      select2.value = compareCar2Id;
      updateAll();
    });
  });

  modeTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      modeTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      compareActiveMode = tab.getAttribute("data-mode");
      renderStage();
    });
  });

  angleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      angleBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      compareActiveAngle = btn.getAttribute("data-angle");
      renderStage();
    });
  });

  if (phantomRange) {
    phantomRange.addEventListener("input", (e) => {
      const overlayLayer = document.getElementById("phantom-overlay-layer");
      if (overlayLayer) {
        overlayLayer.style.opacity = e.target.value / 100;
      }
    });
  }

  // Initial render
  updateAll();
}

// ==========================================================================
// 8. CONTACT & EDITORIAL DESK PAGE (contact.html)
// ==========================================================================
function initContactPage() {
  const form = document.getElementById("contact-form");
  const carSelect = document.getElementById("contact-car");
  const submitBtn = document.getElementById("contact-submit-btn");
  const faqAccordion = document.getElementById("faq-accordion");

  // Populate Vehicle of Interest dropdown
  if (carSelect) {
    const sorted = [...CARS_DATABASE].sort((a, b) => a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model));
    sorted.forEach(car => {
      const opt = document.createElement("option");
      opt.value = `${car.brand} ${car.model} (${car.year})`;
      opt.textContent = `${car.brand} ${car.model} (${car.year}) ${car.region}`;
      carSelect.appendChild(opt);
    });
  }

  // FAQ Accordion Toggle
  if (faqAccordion) {
    faqAccordion.querySelectorAll(".faq-question").forEach(qBtn => {
      qBtn.addEventListener("click", () => {
        const item = qBtn.parentElement;
        const isOpen = item.classList.contains("open");
        faqAccordion.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
        if (!isOpen) {
          item.classList.add("open");
        }
      });
    });
  }

  // Form Submission & Validation
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const messageInput = document.getElementById("contact-message");
      const nameErr = document.getElementById("name-error");
      const emailErr = document.getElementById("email-error");
      const msgErr = document.getElementById("message-error");

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim()) {
        nameErr.textContent = "Please enter your full name.";
        nameErr.style.display = "block";
        isValid = false;
      } else {
        nameErr.style.display = "none";
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailErr.textContent = "Please provide a valid email address.";
        emailErr.style.display = "block";
        isValid = false;
      } else {
        emailErr.style.display = "none";
      }

      // Validate message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        msgErr.textContent = "Message must be at least 10 characters.";
        msgErr.style.display = "block";
        isValid = false;
      } else {
        msgErr.style.display = "none";
      }

      if (!isValid) return;

      // Submit feedback state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending Inquiry...</span>`;
      }

      setTimeout(() => {
        const userName = nameInput.value.trim();
        const selectedCar = carSelect ? carSelect.value : "";
        const subject = document.getElementById("contact-subject") ? document.getElementById("contact-subject").value : "general";

        // Toast notification
        let toast = document.createElement("div");
        toast.className = "curator-toast";
        toast.innerHTML = `
          <span style="font-size: 1.4rem;">✅</span>
          <div>
            <strong>Inquiry Received!</strong>
            <p style="margin: 0; font-size: 0.85rem; color: #d1d5db;">
              Thank you, ${userName}. Your inquiry${selectedCar ? ` regarding ${selectedCar}` : ""} has been routed to our ${subject} editorial desk.
            </p>
          </div>
        `;
        document.body.appendChild(toast);

        setTimeout(() => {
          toast.remove();
        }, 5000);

        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Send Message</span> &rarr;`;
        }
      }, 600);
    });
  }
}

// ==========================================================================
// 8. NEWS & LATEST REVEALS PAGE (news.html) - Inspired by NetCarShow.com/latest-cars.html
// ==========================================================================
function initNewsPage() {
  const container = document.getElementById("news-results-grid");
  const countEl = document.getElementById("news-results-count");
  const searchInput = document.getElementById("news-search-input");
  const filterBtns = document.querySelectorAll(".news-filter-pills button");
  const showMoreBtn = document.getElementById("news-show-more-btn");
  const viewGridBtn = document.getElementById("view-grid-btn");
  const viewListBtn = document.getElementById("view-list-btn");

  let activeFilter = "all";
  let searchQuery = "";
  let currentViewMode = localStorage.getItem("carCurator_viewMode") || "grid";
  let visibleCount = 12;

  // View mode switcher
  if (viewGridBtn && viewListBtn) {
    if (currentViewMode === "list") {
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
    } else {
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
    }

    viewGridBtn.addEventListener("click", () => {
      currentViewMode = "grid";
      localStorage.setItem("carCurator_viewMode", "grid");
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
      renderNews();
    });

    viewListBtn.addEventListener("click", () => {
      currentViewMode = "list";
      localStorage.setItem("carCurator_viewMode", "list");
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      renderNews();
    });
  }

  // Filter pills
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      visibleCount = 12;
      renderNews();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      visibleCount = 12;
      renderNews();
    });
  }

  // Show more
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      visibleCount += 12;
      renderNews();
    });
  }

  function getNewsCars() {
    return CARS_DATABASE.filter(c => {
      if (activeFilter === "upcoming-2027") {
        if (c.year !== 2027) return false;
      } else if (activeFilter === "2027-india") {
        if (c.year !== 2027 || c.region !== "[IN]") return false;
      } else if (activeFilter === "2027-global") {
        if (c.year !== 2027 || c.region === "[IN]") return false;
      } else if (activeFilter === "upcoming") {
        if (!c.isUpcoming && c.year < 2025) return false;
      } else if (activeFilter === "indian") {
        if (c.region !== "[IN]") return false;
      } else if (activeFilter === "supercars") {
        if (c.body !== "Supercar" && c.body !== "Sports Car") return false;
      } else if (activeFilter === "electric") {
        if (c.fuel !== "Electric" && c.fuel !== "Hybrid") return false;
      }

      if (searchQuery) {
        const text = `${c.year} ${c.brand} ${c.model} ${c.editorial.overview} ${c.newsHeadline || ''}`.toLowerCase();
        if (!text.includes(searchQuery)) return false;
      }

      return true;
    }).sort((a, b) => {
      if ((b.isUpcoming ? 1 : 0) !== (a.isUpcoming ? 1 : 0)) {
        return (b.isUpcoming ? 1 : 0) - (a.isUpcoming ? 1 : 0);
      }
      return b.year - a.year || b.popularity - a.popularity;
    });
  }

  function renderNewsCard(car, viewMode = "grid") {
    const powerClean = car.engine && car.engine.power ? car.engine.power.split('@')[0] : '';
    const dateTag = car.newsDate || `${car.year} Reveal`;
    const badgeText = car.newsBadge || (car.isConcept ? "Concept Study" : (car.isUpcoming ? "Upcoming Debut" : "Latest Reveal"));
    const headline = car.newsHeadline || `${car.year} ${car.brand} ${car.model} Unveiled`;

    if (viewMode === "list") {
      return `
        <article class="car-card car-card-list news-card-list">
          <div class="car-image">
            <span class="news-pill-badge">${badgeText}</span>
            <img src="${car.mainImage}" alt="${car.brand} ${car.model}" loading="lazy">
          </div>
          <div class="car-info">
            <div class="news-meta-row">
              <span class="car-brand">${car.brand} <span class="region-badge">${car.region}</span></span>
              <span class="news-date">${dateTag}</span>
            </div>
            <h3 class="news-headline-title">${headline}</h3>
            <span class="car-year">${car.year} &bull; ${car.body} &bull; ${car.fuel}</span>
            <p>${car.editorial.overview}</p>
            <ul class="specs">
              <li><strong>Power:</strong> ${powerClean}</li>
              <li><strong>0–100 km/h:</strong> ${car.performance.zeroToHundred}</li>
              <li><strong>Price:</strong> ${car.price}</li>
            </ul>
            <a href="car-details.html?id=${car.id}" class="view-link">Read Full Reveal &amp; View Gallery &rarr;</a>
          </div>
        </article>
      `;
    }

    return `
      <article class="car-card news-card">
        <div class="car-image">
          <span class="news-pill-badge">${badgeText}</span>
          <img src="${car.mainImage}" alt="${car.brand} ${car.model}" loading="lazy">
        </div>
        <div class="car-info">
          <div class="news-meta-row">
            <span class="car-brand">${car.brand} <span class="region-badge">${car.region}</span></span>
            <span class="news-date">${dateTag}</span>
          </div>
          <h3 class="news-headline-title">${car.year} ${car.brand} ${car.model}</h3>
          <span class="car-year">${car.body} &bull; ${car.fuel}</span>
          <p>${car.editorial.overview}</p>
          <ul class="specs">
            <li><strong>Power:</strong> ${powerClean}</li>
            <li><strong>0–100:</strong> ${car.performance.zeroToHundred}</li>
            <li><strong>Price:</strong> ${car.price}</li>
          </ul>
          <a href="car-details.html?id=${car.id}" class="view-link">View Full Reveal &rarr;</a>
        </div>
      </article>
    `;
  }

  function renderNews() {
    if (!container) return;
    const cars = getNewsCars();
    const visibleCars = cars.slice(0, visibleCount);

    if (countEl) {
      countEl.textContent = `Showing ${visibleCars.length} of ${cars.length} Latest & Upcoming Reveals`;
    }

    if (cars.length === 0) {
      container.innerHTML = `
        <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <h3>No reveals match your criteria</h3>
          <p style="color: var(--color-text-muted); margin-top: 8px;">Try clearing your search query or selecting a different filter.</p>
        </div>
      `;
      if (showMoreBtn) showMoreBtn.style.display = "none";
      return;
    }

    container.innerHTML = visibleCars.map(c => renderNewsCard(c, currentViewMode)).join("");

    if (showMoreBtn) {
      showMoreBtn.style.display = visibleCount >= cars.length ? "none" : "inline-block";
    }
  }

  renderNews();
}

// ==========================================================================
// 9. EXPLORE / CATEGORIES PAGE (categories.html) - Full Body Style Catalog
// ==========================================================================
function initCategoriesPage() {
  const container = document.getElementById("categories-results-grid");
  const countEl = document.getElementById("categories-results-count");
  const searchInput = document.getElementById("category-search-input");
  const filterBtns = document.querySelectorAll(".category-filter-pills button");
  const viewGridBtn = document.getElementById("view-grid-btn");
  const viewListBtn = document.getElementById("view-list-btn");

  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("category") || "all";
  let searchQuery = "";
  let currentViewMode = localStorage.getItem("carCurator_viewMode") || "grid";

  // Match initial button state
  filterBtns.forEach(btn => {
    if (btn.getAttribute("data-category").toLowerCase() === activeCategory.toLowerCase()) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // View mode switcher
  if (viewGridBtn && viewListBtn) {
    if (currentViewMode === "list") {
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
    } else {
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
    }

    viewGridBtn.addEventListener("click", () => {
      currentViewMode = "grid";
      localStorage.setItem("carCurator_viewMode", "grid");
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
      renderCategories();
    });

    viewListBtn.addEventListener("click", () => {
      currentViewMode = "list";
      localStorage.setItem("carCurator_viewMode", "list");
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      renderCategories();
    });
  }

  // Filter pills
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      const newUrl = activeCategory === "all" ? "categories.html" : `categories.html?category=${encodeURIComponent(activeCategory)}`;
      window.history.replaceState({}, "", newUrl);
      renderCategories();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCategories();
    });
  }

  function getCategoryCars() {
    return CARS_DATABASE.filter(c => {
      if (activeCategory !== "all") {
        if (activeCategory === "Electric") {
          if (c.fuel !== "Electric" && c.fuel !== "Hybrid") return false;
        } else if (activeCategory === "Concepts") {
          if (!c.isConcept) return false;
        } else if (c.body.toLowerCase() !== activeCategory.toLowerCase()) {
          return false;
        }
      }

      if (searchQuery) {
        const text = `${c.year} ${c.brand} ${c.model} ${c.body} ${c.fuel} ${c.editorial.overview}`.toLowerCase();
        if (!text.includes(searchQuery)) return false;
      }

      return true;
    });
  }

  function renderCategories() {
    if (!container) return;
    const cars = getCategoryCars();

    const categoryTitle = activeCategory === "all" ? "All Vehicle Types" : activeCategory;
    if (countEl) {
      countEl.textContent = `Showing ${cars.length} vehicles under "${categoryTitle}" with complete technical specifications`;
    }

    if (cars.length === 0) {
      container.innerHTML = `
        <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <h3>No vehicles found for "${categoryTitle}"</h3>
          <p style="color: var(--color-text-muted); margin-top: 8px;">Try selecting a different body type or clearing your search.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = cars.map(c => renderCarCard(c, currentViewMode)).join("");
  }

  renderCategories();
}

// ==========================================================================
// 10. BROWSE / BRANDS PAGE (brands.html) - Full Manufacturer A-Z Catalog
// ==========================================================================
function initBrandsPage() {
  const container = document.getElementById("brands-results-grid");
  const countEl = document.getElementById("brands-results-count");
  const searchInput = document.getElementById("brand-search-input");
  const filterBtnsContainer = document.getElementById("brand-filter-pills");
  const viewGridBtn = document.getElementById("view-grid-btn");
  const viewListBtn = document.getElementById("view-list-btn");

  const urlParams = new URLSearchParams(window.location.search);
  let activeBrand = urlParams.get("brand") || "all";
  let searchQuery = "";
  let currentViewMode = localStorage.getItem("carCurator_viewMode") || "grid";

  // Build brand counts dynamically from CARS_DATABASE
  const brandCounts = {};
  CARS_DATABASE.forEach(c => {
    brandCounts[c.brand] = (brandCounts[c.brand] || 0) + 1;
  });

  const sortedBrands = Object.keys(brandCounts).sort((a, b) => a.localeCompare(b));

  if (filterBtnsContainer) {
    let pillsHtml = `
      <button type="button" class="btn-secondary btn-sm ${activeBrand === 'all' ? 'active' : ''}" data-brand="all">
        All Brands (${CARS_DATABASE.length})
      </button>
    `;
    sortedBrands.forEach(b => {
      pillsHtml += `
        <button type="button" class="btn-secondary btn-sm ${activeBrand.toLowerCase() === b.toLowerCase() ? 'active' : ''}" data-brand="${b}">
          ${b} (${brandCounts[b]})
        </button>
      `;
    });
    filterBtnsContainer.innerHTML = pillsHtml;

    filterBtnsContainer.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtnsContainer.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeBrand = btn.getAttribute("data-brand");
        const newUrl = activeBrand === "all" ? "brands.html" : `brands.html?brand=${encodeURIComponent(activeBrand)}`;
        window.history.replaceState({}, "", newUrl);
        renderBrands();
      });
    });
  }

  // View mode switcher
  if (viewGridBtn && viewListBtn) {
    if (currentViewMode === "list") {
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
    } else {
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
    }

    viewGridBtn.addEventListener("click", () => {
      currentViewMode = "grid";
      localStorage.setItem("carCurator_viewMode", "grid");
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
      renderBrands();
    });

    viewListBtn.addEventListener("click", () => {
      currentViewMode = "list";
      localStorage.setItem("carCurator_viewMode", "list");
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      renderBrands();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderBrands();
    });
  }

  function getBrandCars() {
    return CARS_DATABASE.filter(c => {
      if (activeBrand !== "all" && c.brand.toLowerCase() !== activeBrand.toLowerCase()) {
        return false;
      }
      if (searchQuery) {
        const text = `${c.year} ${c.brand} ${c.model} ${c.body} ${c.fuel} ${c.editorial.overview}`.toLowerCase();
        if (!text.includes(searchQuery)) return false;
      }
      return true;
    });
  }

  function renderBrands() {
    if (!container) return;
    const cars = getBrandCars();

    const brandTitle = activeBrand === "all" ? "All Manufacturers" : activeBrand;
    if (countEl) {
      countEl.textContent = `Showing ${cars.length} vehicles from "${brandTitle}" with full models & specifications`;
    }

    if (cars.length === 0) {
      container.innerHTML = `
        <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <h3>No models found for "${brandTitle}"</h3>
          <p style="color: var(--color-text-muted); margin-top: 8px;">Try selecting a different manufacturer or clearing your search.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = cars.map(c => renderCarCard(c, currentViewMode)).join("");
  }

  renderBrands();
}

// ==========================================================================
// 11. PRIVACY & COOKIE MODAL CONTROLLER
// ==========================================================================
function openPrivacyModal() {
  let modal = document.getElementById("privacy-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "privacy-modal";
    modal.className = "lightbox-overlay active";
    modal.innerHTML = `
      <div class="card-box" style="max-width: 600px; width: 92%; position: relative;">
        <button class="lightbox-close" onclick="closePrivacyModal()">&times;</button>
        <h2>Privacy &amp; Cookie Preferences</h2>
        <p style="color: var(--text-muted); margin-bottom: 16px;">
          Car Curator uses local browser storage exclusively for user interface preferences (such as your preferred Grid or List view setting). We do not utilize intrusive tracking cookies or sell personal data.
        </p>
        <h3 class="subsection-title">Essential Cookies</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem;">Required for core functionality, such as maintaining search filters and gallery navigation.</p>
        <div style="margin-top: 24px; text-align: right;">
          <button class="btn-primary" onclick="closePrivacyModal()">Save Preferences</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closePrivacyModal(); });
  } else {
    modal.classList.add("active");
  }
}

function closePrivacyModal() {
  const modal = document.getElementById("privacy-modal");
  if (modal) modal.classList.remove("active");
}

// ==========================================================================
// 12. GLOBAL ROUTER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("news.html")) {
    initNewsPage();
  } else if (path.includes("cars.html")) {
    initCarsPage();
  } else if (path.includes("car-details.html")) {
    initCarDetailsPage();
  } else if (path.includes("compare.html")) {
    initComparePage();
  } else if (path.includes("contact.html")) {
    initContactPage();
  } else if (path.includes("categories.html")) {
    initCategoriesPage();
  } else if (path.includes("brands.html")) {
    initBrandsPage();
  } else {
    initHomePage();
  }
});

