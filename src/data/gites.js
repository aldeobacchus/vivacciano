const commonAmenities = [
  "kitchen",
  "heating",
  "hot_water",
  "coffee_capsules",
  "coffee_italian",
  "candles",
  "hairdryer",
  "clock",
  "extra_beds",
  "tv"
]

const casa2628Amenities = [
  ...commonAmenities,
  "fireplaces",
  "terrace",
  "panoramic_view",
  "private_shower",
  "sink_each_floor",
  "bathrobes"
]


export const gites = [
  {
    id: "gite-1",
    nom: "Sole",
    shortDescription: "Studio lumineux et charmant.",
    longDescription:
      "Un studio lumineux situé dans un environnement calme, idéal pour se ressourcer en pleine nature avec vue sur les montagnes.",
    images: [
      "/images/gites/11.jpg"
    ],
    maxPersons: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 120,
    amenities: commonAmenities,
    airbnb: "https://www.airbnb.fr/",
    booking: ""
  },
  {
    id: "gite-2",
    nom: "Il Gigante",
    shortDescription: "Top confort, visite bellissime.",
    longDescription:
      "Un gite de deux pieces lumineux situé dans un environnement calme, idéal pour se ressourcer en pleine nature avec vue sur les montagnes.",
    images: [
      "/images/gites/21.jpg",
      "/images/gites/22.jpg",
      "/images/gites/23.jpg",
      "/images/gites/11.jpg"
    ],
    maxPersons: 3,
    bedrooms: 2,
    bathrooms: 2,
    price: 180,
    amenities: commonAmenities,
    airbnb: "https://www.airbnb.fr/",
    booking: ""
  },
   {
    id: "gite-3",
    nom: "26-28",
    shortDescription: "Maison spacieuse et conviviale, avec belle terrasse",
    longDescription:
      "Un gite spacieux et lumineux situé dans un environnement calme, idéal pour se ressourcer en pleine nature avec vue sur les montagnes.",
    images: [
      "/images/gites/11.jpg"
    ],
    maxPersons: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 210,
    amenities: casa2628Amenities,
    airbnb: "https://www.airbnb.fr/",
    booking: ""
  }

];