const plans = [
  {
    id: "0",
    name: "Mobile",
    price: 199,
    videoQuality: "Good",
    resolution: "480P",
    devices: [
      {
        id: "10",
        name: "mobile",
      },
      {
        id: "11",
        name: "tablet",
      },
    ],
  },
  {
    id: "100",
    name: "Basic",
    price: 299,
    videoQuality: "Better",
    resolution: "1080P",
    devices: [
      {
        id: "20",
        name: "mobile",
      },
      {
        id: "21",
        name: "tablet",
      },
      {
        id: "25",
        name: "laptop",
      },
    ],
  },
  {
    id: "2",
    name: "Standard",
    price: 649,
    videoQuality: "Better",
    resolution: "1080P",
    devices: [
      {
        id: "20",
        name: "mobile",
      },
      {
        id: "21",
        name: "tablet",
      },
      {
        id: "25",
        name: "laptop",
      },
      {
        id: "45",
        name: "tv",
      },
    ],
  },
  {
    id: "3",
    name: "Premium",
    price: 749,
    videoQuality: "Best",
    resolution: "4k+UHD",
    devices: [
      {
        id: "20",
        name: "mobile",
      },
      {
        id: "21",
        name: "tablet",
      },
      {
        id: "25",
        name: "laptop",
      },
      {
        id: "45",
        name: "tv",
      },
    ],
  },
];

const profiles = [
  {
    id: "0",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU",
    name: "Pranav",
  },
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU",
    name: "Sujan",
  },
  {
    id: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU",
    name: "Kiran",
  },
  {
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU",
    name: "Samarth",
  },
];

const tmdbAPI = [
  {
    id: 0,
    type: "all/day",
    path: "/trending",
    name: "Trending Today",
    param: [],
  },
  {
    id: 1,
    type: "movie",
    path: "/discover",
    name: "Original Movies",
    param: [{ key: "with_networks", value: 213 }],
  },
  {
    id: 2,
    type: "tv",
    path: "/discover",
    name: "Original Shows",
    param: [{ key: "with_networks", value: 213 }],
  },
  {
    id: 3,
    type: "movie",
    path: "/discover",
    name: "Tamil Movies",
    param: [{ key: "with_original_language", value: "ta" }],
  },
  {
    id: 4,
    type: "movie",
    path: "/discover",
    name: "Action Movies",
    param: [
      { key: "with_genres", value: 28 },
      { key: "with_original_language", value: "ta" },
    ],
  },
  {
    id: 5,
    type: "movie",
    path: "/discover",
    name: "Comedy Movies",
    param: [
      { key: "with_genres", value: 35 },
      { key: "with_original_language", value: "ta" },
    ],
  },
  {
    id: 6,
    type: "movie",
    path: "/discover",
    name: "Horror Movies",
    param: [
      { key: "with_genres", value: 27 },
      { key: "with_original_language", value: "ta" },
    ],
  },
  {
    id: 7,
    type: "movie",
    path: "/discover",
    name: "Romance Movies",
    param: [
      { key: "with_genres", value: 37 },
      { key: "with_original_language", value: "ta" },
    ],
  },
];

export { plans, profiles, tmdbAPI };
