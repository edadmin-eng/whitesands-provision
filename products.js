/* ============================================================
   WHITE SANDS PROVISION — SITE CONTENT
   ------------------------------------------------------------
   Huwag i-edit ito nang manu-mano kung ayaw mo.
   Buksan ang admin.html para sa visual editor,
   tapos i-download ulit ang file na ito at i-replace.
   ============================================================ */

window.SITE_DATA = {

  announce: {
    text: 'Complimentary delivery on orders over ₱8,000 within Metro Manila',
    linkText: 'Refer a friend, earn ₱2,500 credit'
  },

  hero: {
    eyebrow: 'Never Drink an Ordinary Bottle Again',
    title: "The world's greatest cellars,",
    titleEm: 'opened for you',
    sub: 'Our tasting panel travels the great estates of Bordeaux, Burgundy, Speyside, and beyond — securing allocations that rarely leave the cellar door. Every bottle vetted. Every story told.',
    photo: '',
    img: 'wine,cellar', lock: 1
  },

  favorites: [
    { quote: '"The finest Cabernet to pass our table this year — members cleared half the allocation in a day"', name: '2021 Sandoval Reserve Cabernet · Napa Valley', photo: '', img: 'wine,bottle', lock: 11 },
    { quote: '"A 21-year Speyside sleeper our spirits buyer refuses to describe — taste it blind"', name: 'Glen Marloch 21 Year · Speyside, Scotland', photo: '', img: 'whiskey,glass', lock: 12 },
    { quote: '"Stunning value from the birthplace of Chardonnay — buy it by the case"', name: '2023 Domaine Céline Mâcon-Villages · Burgundy', photo: '', img: 'vineyard', lock: 13 },
    { quote: '"Our \'baby Amarone\' — the bold Veneto red members reorder by the caseload"', name: '2022 Passione Rosso Appassimento · Veneto', photo: '', img: 'wine,red', lock: 14 },
    { quote: '"The grower Champagne sleeper found on a two-star Michelin list"', name: 'NV Maison Verlaine Extra-Brut · Champagne', photo: '', img: 'champagne', lock: 15 },
    { quote: '"A winemaker\'s personal Pinot from the best vintage on record — quietly allocated to us"', name: '2021 Alto Piedra Pinot Noir · Willamette Valley', photo: '', img: 'wine,cellar', lock: 16 }
  ],

  products: {

    popular: [
      { teaser: '"One of the best we\'ve ever poured at a panel tasting"', pts: 96, name: '2021 Sandoval Reserve Cabernet Sauvignon', region: 'Napa Valley, USA', was: 4800, now: 2950, photo: '', img: 'wine,red,bottle', lock: 31 },
      { teaser: 'Stunning value from the birthplace of Chardonnay', pts: null, name: '2023 Domaine Céline Mâcon-Villages', region: 'Burgundy, France', was: null, now: 1150, photo: '', img: 'wine,white', lock: 32 },
      { teaser: '"Baby Amarone" our members buy by the caseload', pts: 97, name: '2022 Passione Rosso Appassimento', region: 'Veneto, Italy', was: null, now: 990, photo: '', img: 'wine,italian', lock: 33 },
      { teaser: 'Estate-grown Sauvignon Blanc that massively overdelivers', pts: null, name: '2024 Mount Aroha Sauvignon Blanc Sur Lie', region: 'Marlborough, New Zealand', was: null, now: 1090, photo: '', img: 'wine,glass', lock: 34 },
      { teaser: 'The alpine Italian white that earns a cult following', pts: 93, name: '2023 Cascata Erbaluce di Caluso', region: 'Piedmont, Italy', was: null, now: 1490, photo: '', img: 'wine,vineyard', lock: 35 },
      { teaser: 'Our #1 Côtes-du-Rhône, from a 100-point southern estate', pts: null, name: '2023 Clos Saint-Rémy Côtes-du-Rhône', region: 'Rhône Valley, France', was: 1350, now: 1190, photo: '', img: 'wine,cellar', lock: 36 },
      { teaser: 'Gorgeous ripeness with vibrating acidity — pure terroir', pts: null, name: 'NV Villa Corazza Prosecco Extra Dry', region: 'Treviso, Italy', was: null, now: 1050, photo: '', img: 'champagne,sparkling', lock: 37 },
      { teaser: 'Sensational Provence rosé from one of the finest palates in the trade', pts: null, name: "2024 Maison Azur Coteaux d'Aix-en-Provence", region: 'Provence, France', was: null, now: 1190, photo: '', img: 'wine,rose', lock: 38 }
    ],

    offers: [
      { teaser: '"One of the best ever from our Napa allocations" — 59% off', pts: null, name: '2022 1888 Estate Cabernet Sauvignon', region: 'Napa Valley, USA', was: 5200, now: 2150, photo: '', img: 'wine,bottle,dark', lock: 41 },
      { teaser: 'A star Super Tuscan value from a great vintage', pts: 94, name: '2021 Tenuta del Sasso Toscana Rosso', region: 'Tuscany, Italy', was: 1400, now: 1090, photo: '', img: 'wine,tuscany', lock: 42 },
      { teaser: '"Never disappoints" — old-vine Pinot from a landmark vineyard', pts: 93, name: '2022 Hillcrest Old Vine Pinot Noir', region: 'Willamette Valley, USA', was: 2900, now: 1750, photo: '', img: 'wine,pinot', lock: 43 },
      { teaser: 'The Champagne sleeper found on a two-Michelin-star list', pts: null, name: 'NV Maison Verlaine Réserve Extra-Brut', region: 'Champagne, France', was: 3900, now: 3300, photo: '', img: 'champagne,celebration', lock: 44 },
      { teaser: 'Small-batch reposado at an introductory price', pts: null, name: 'Cielo Alto Reposado Tequila', region: 'Jalisco, Mexico', was: 3200, now: 2450, photo: '', img: 'tequila,agave', lock: 45 },
      { teaser: 'Wine Panel: "one of the best values around"', pts: 96, name: '2023 Altavista Concreto Malbec', region: 'Mendoza, Argentina', was: 2400, now: 2100, photo: '', img: 'wine,malbec', lock: 46 }
    ],

    expert: [
      { teaser: "Our spirits director's desert-island dram", pts: 95, name: 'Glen Marloch 21 Year Single Malt', region: 'Speyside, Scotland', was: null, now: 14500, photo: '', img: 'whiskey,single,malt', lock: 51 },
      { teaser: '"Elevates the appellation into the stratosphere"', pts: 99, name: '2016 Château Belrose Grand Vin', region: 'Margaux, France', was: null, now: 28500, photo: '', img: 'wine,chateau', lock: 52 },
      { teaser: "One of the world's rarest Burgundies — three bottles remain", pts: null, name: '2020 Domaine Perrault Corton Grand Cru', region: 'Burgundy, France', was: null, now: 64000, photo: '', img: 'wine,burgundy', lock: 53 },
      { teaser: 'Precise, high-altitude Cab Franc from a visionary grower', pts: 94, name: '2023 Piedra Alta Cabernet Franc', region: 'Uco Valley, Argentina', was: null, now: 1990, photo: '', img: 'wine,mountain', lock: 54 },
      { teaser: 'A sweet wine that stands with the greatest Sauternes', pts: 96, name: '2015 Klein Valley Vin de Réserve (500mL)', region: 'Constantia, South Africa', was: null, now: 7500, photo: '', img: 'wine,dessert', lock: 55 },
      { teaser: 'A 40-year blend our cognac buyer calls "liquid heritage"', pts: null, name: 'Maison Delacroix XO Grande Champagne', region: 'Cognac, France', was: null, now: 24500, photo: '', img: 'cognac,brandy', lock: 56 }
    ],

    last: [
      { teaser: 'Final cases of a member favorite — gone this week', pts: null, name: '2022 Bahía Blanca Albariño', region: 'Rías Baixas, Spain', was: 1400, now: 950, photo: '', img: 'wine,spanish', lock: 61 },
      { teaser: 'Last allocation of the cult island single malt', pts: 95, name: 'Cladach 18 Year Island Single Malt', region: 'Islay, Scotland', was: 12800, now: 9900, photo: '', img: 'whiskey,scotland', lock: 62 },
      { teaser: 'The house pour at Sum Wine — final drop', pts: null, name: '2023 Sum Wine House Red Blend', region: 'Barossa Valley, Australia', was: 1600, now: 1150, photo: '', img: 'wine,pour', lock: 63 },
      { teaser: 'Aged Caribbean rum, one barrel left in the vault', pts: null, name: 'Marea Negra 15 Year Solera Rum', region: 'Dominican Republic', was: 5400, now: 4200, photo: '', img: 'rum,barrel', lock: 64 }
    ]

  }
};
