const express = require("express");
const router = express.Router();

// Example static data (for testing)
const products = [
  // 🌾 Cereals & Grains
  {
    name: "Wheat",
    description: "Staple grain used for flour.",
    basePrice: 100,
    smartPrice: 120,
    category: "Cereals & Grains",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Wheat_close-up.JPG",
  },
  {
    name: "Maize (Corn)",
    description: "Used for human and livestock consumption.",
    basePrice: 80,
    smartPrice: 95,
    category: "Cereals & Grains",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Corncobs.jpg",
  },
  {
    name: "Rice",
    description: "Long-grain rice, high yield.",
    basePrice: 90,
    smartPrice: 110,
    category: "Cereals & Grains",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rice_grains_%28IRRI%29.jpg",
  },
  {
    name: "Barley",
    description: "Used in brewing and animal feed.",
    basePrice: 70,
    smartPrice: 88,
    category: "Cereals & Grains",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Barley_close_up.jpg",
  },
  {
    name: "Millet",
    description: "Drought-resistant grain for porridge and bread.",
    basePrice: 85,
    smartPrice: 100,
    category: "Cereals & Grains",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Millet.jpg",
  },
  {
    name: "Sorghum",
    description: "Versatile grain for food and fodder.",
    basePrice: 88,
    smartPrice: 105,
    category: "Cereals & Grains",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Sorghum.jpg",
  },

  // 🥬 Vegetables
  {
    name: "Tomatoes",
    description: "Fresh red tomatoes.",
    basePrice: 50,
    smartPrice: 70,
    category: "Vegetables",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
  },
  {
    name: "Cabbage",
    description: "Large green cabbages rich in vitamins.",
    basePrice: 45,
    smartPrice: 60,
    category: "Vegetables",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Cabbage_and_cross_section_on_white.jpg",
  },
  {
    name: "Spinach",
    description: "Fresh leafy greens.",
    basePrice: 40,
    smartPrice: 55,
    category: "Vegetables",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Spinach_leaves.jpg",
  },
  {
    name: "Carrots",
    description: "Crunchy orange carrots.",
    basePrice: 55,
    smartPrice: 68,
    category: "Vegetables",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Carrots.jpg",
  },
  {
    name: "Onions",
    description: "Locally grown onions with strong flavor.",
    basePrice: 60,
    smartPrice: 75,
    category: "Vegetables",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Onion_on_White.JPG",
  },

  // 🍎 Fruits
  {
    name: "Mangoes",
    description: "Sweet tropical mangoes.",
    basePrice: 120,
    smartPrice: 150,
    category: "Fruits",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
  },
  {
    name: "Bananas",
    description: "Fresh dessert bananas.",
    basePrice: 90,
    smartPrice: 110,
    category: "Fruits",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
  },
  {
    name: "Avocados",
    description: "Creamy avocados for export.",
    basePrice: 150,
    smartPrice: 180,
    category: "Fruits",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Avocado_with_cross_section.jpg",
  },
  {
    name: "Apples",
    description: "Crisp red apples.",
    basePrice: 140,
    smartPrice: 165,
    category: "Fruits",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
  },

  // ☕ Cash Crops
  {
    name: "Coffee",
    description: "Premium Arabica coffee beans.",
    basePrice: 300,
    smartPrice: 350,
    category: "Cash Crops",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Coffee_beans_-_ziarna_kawy.jpg",
  },
  {
    name: "Tea",
    description: "High-quality black tea leaves.",
    basePrice: 250,
    smartPrice: 280,
    category: "Cash Crops",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Loose_black_tea_leaves.jpg",
  },
  {
    name: "Tobacco",
    description: "Dried tobacco leaves for export.",
    basePrice: 350,
    smartPrice: 400,
    category: "Cash Crops",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tobacco_leaves_drying.jpg",
  },
];


router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
