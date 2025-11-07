const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌾 AgriSmart server running on port ${PORT}`));
