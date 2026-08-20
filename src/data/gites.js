const commonAmenities = [
  "kitchen",
  "coffee_capsules",
  "coffee_italian",
  "candles",
  "hairdryer",
  "clock",
  "extra_beds",
  "tv"
]

const casa2628Amenities = [
  "kitchen",
  "fireplaces",
  "tv",
  "coffee_capsules",
  "coffee_italian",
  "candles",
  "hairdryer",
  "clock",
  "extra_beds",
  "terrace",
  "panoramic_view",
  "sink_each_floor",
  "bathrobes"
]


export const gites = [
  {
    id: "gg",
    nom: "Gran Gigante",
    shortDescription: "Grande maison modulable en deux ailes avec belle terrasse.",
    longDescription:
      "Le Gran Gigante est une grande maison composée de deux ailes (l'aile Gigante et l'aile 26). Il est possible de réserver soit la totalité de la maison pour 6 personnes, soit seulement une aile en fonction de vos besoins.",
    wings: [
      { id: "gigante", name: "Aile Gigante", maxPersons: 2, rooms: 2 },
      { id: "26", name: "Aile 26", maxPersons: 4, rooms: 4 }
    ],
    images: [
      //{
      //  url: "/images/gites/26/26-1.jpeg",
      //  caption: "Grande cuisine toute équipée."
      //},

      //"/images/gites/26/26-2.jpeg",

      //{
      //  url: "/images/gites/26/26-5.jpeg",
      //  caption: "Espace repas extérieur pour vos soirées d'été."
      //},

      //"/images/gites/26/26-4.jpeg",
      //"/images/gites/26/26-3.jpeg",
      //"/images/gites/26/26-6.jpeg",
      //"/images/gites/26/26-7.jpeg",
      //"/images/gites/26/26-8.jpeg",
      //"/images/gites/26/26-9.jpeg",
      //"/images/gites/26/26-10.jpeg",
      //"/images/gites/26/26-11.jpeg",
      { id: 1, url: "/images/gites/26/26-12.jpeg", caption: "gites_data.gg.captions.img_1" },
      { id: 2, url: "/images/gites/26/26--24.jpeg", caption: "gites_data.gg.captions.img_2" },
      { id: 3, url: "/images/gites/26/26-29.jpeg", caption: "gites_data.gg.captions.img_3" },
      { id: 4, url: "/images/gites/26/26-30.jpeg", caption: "gites_data.gg.captions.img_4" },
      { id: 5, url: "/images/gites/26/26-36.jpeg", caption: "gites_data.gg.captions.img_5" },
      { id: 6, url: "/images/gites/gigante/gigante-1.jpeg", caption: "gites_data.gg.captions.img_6" },
      { id: 7, url: "/images/gites/gigante/gigante-2.jpeg", caption: "gites_data.gg.captions.img_7" },
      { id: 8, url: "/images/gites/gigante/gigante-10.jpg", caption: "gites_data.gg.captions.img_8" },
      { id: 9, url: "/images/gites/gigante/gigante-4.jpeg", caption: "gites_data.gg.captions.img_13" },
      { id: 10, url: "/images/gites/gigante/gigante-8.jpeg", caption: "gites_data.gg.captions.view" },
      { id: 11, url: "/images/gites/26/26-street2.jpeg", caption: "gites_data.gg.captions.img_10" },
      { id: 12, url: "/images/gites/26/26-street3.jpeg", caption: "gites_data.gg.captions.img_11" },
      { id: 13, url: "/images/gites/26/26-street5.jpeg", caption: "gites_data.gg.captions.img_12" },
      { id: 14, url: "/images/gites/26/GG-ext-13.jpeg", caption: "gites_data.gg.captions.view" },
      { id: 15, url: "/images/gites/gigante/gigante-6.jpeg", caption: "gites_data.gg.captions.img_15" },
      { id: 16, url: "/images/gites/gigante/gigante-street.jpeg", caption: "gites_data.gg.captions.img_16" },
      { id: 17, url: "/images/gites/26/GG-ext-1.jpeg", caption: "gites_data.gg.captions.img_18" },
      { id: 18, url: "/images/gites/26/GG-ext-2.jpeg", caption: "gites_data.gg.captions.img_19" },
      { id: 19, url: "/images/gites/26/GG-ext-3.jpeg", caption: "gites_data.gg.captions.img_20" },
      { id: 20, url: "/images/gites/26/GG-ext-4.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 21, url: "/images/gites/26/GG-ext-5.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 22, url: "/images/gites/26/GG-ext-6.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 23, url: "/images/gites/26/GG-ext-7.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 24, url: "/images/gites/26/GG-ext-8.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 25, url: "/images/gites/26/GG-ext-9.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 26, url: "/images/gites/26/GG-ext-10.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 27, url: "/images/gites/26/GG-ext-11.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 28, url: "/images/gites/26/GG-ext-12.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 29, url: "/images/gites/26/GG-ext-14.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 30, url: "/images/gites/26/GG-ext-15.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 31, url: "/images/gites/26/GG-ext-16.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 32, url: "/images/gites/26/GG-ext-17.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 33, url: "/images/gites/26/GG-ext-18.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 34, url: "/images/gites/26/GG-ext-19.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 35, url: "/images/gites/26/GG-ext-20.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 36, url: "/images/gites/26/GG-ext-21.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 37, url: "/images/gites/26/GG-ext-22.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 38, url: "/images/gites/26/GG-ext-23.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 39, url: "/images/gites/26/GG-ext-24.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 40, url: "/images/gites/26/GG-ext-25.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 41, url: "/images/gites/26/GG-ext-26.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 42, url: "/images/gites/26/GG-ext-27.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 43, url: "/images/gites/26/GG-ext-28.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 44, url: "/images/gites/26/GG-ext-29.jpeg", caption: "gites_data.gg.captions.ext" },
      { id: 45, url: "/images/gites/gigante/gigante-key.jpeg", caption: "gites_data.gg.captions.img_17" }
    ],
    maxPersons: 6,
    bedrooms: 3,
    bathrooms: 3,
    price: 240,
    amenities: casa2628Amenities,
    airbnb: "https://www.airbnb.fr/",
    booking: "",
    geolocation: "https://maps.app.goo.gl/7VcGDD8GpJzzmeH27?g_st=aw"
  },
  {
    id: "sole",
    nom: "Sole",
    shortDescription: "Studio lumineux et charmant.",
    longDescription:
      "Un studio lumineux situé dans un environnement calme, idéal pour se ressourcer en pleine nature avec vue sur les montagnes.",
    // Vous pouvez inscrire les images sous forme d'objet { url: "...", caption: "Description..." }
    // ou sous forme de simple chemin texte "/images/...". Si caption est présent, il s'affichera dans le carrousel.
    images: [
      { id: 1, url: "/images/gites/sole/sole-3.jpg", caption: "gites_data.sole.captions.img_1" },
      { id: 2, url: "/images/gites/sole/sole-4.jpg", caption: "gites_data.sole.captions.img_2" },
      { id: 3, url: "/images/gites/sole/sole-ext-5.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 4, url: "/images/gites/sole/sole-ext-6.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 5, url: "/images/gites/sole/sole-ext-7.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 6, url: "/images/gites/sole/sole-ext-8.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 7, url: "/images/gites/sole/sole-ext-9.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 8, url: "/images/gites/sole/sole-ext-10.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 9, url: "/images/gites/sole/sole-ext-11.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 10, url: "/images/gites/sole/sole-ext-12.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 11, url: "/images/gites/sole/sole-ext-13.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 12, url: "/images/gites/sole/sole-ext-14.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 13, url: "/images/gites/sole/sole-ext-15.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 14, url: "/images/gites/sole/sole-ext-16.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 15, url: "/images/gites/sole/sole-ext-17.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 16, url: "/images/gites/sole/sole-ext-18.jpeg", caption: "gites_data.sole.captions.ext" },
      { id: 17, url: "/images/gites/sole/sole-key.jpeg", caption: "gites_data.sole.captions.img_3" }
    ],
    maxPersons: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 120,
    amenities: commonAmenities,
    airbnb: "https://www.airbnb.fr/",
    booking: "",
    geolocation: "https://maps.app.goo.gl/7VcGDD8GpJzzmeH27?g_st=aw"
  }
];