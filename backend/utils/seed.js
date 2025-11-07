const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log('🔍 .env path:', path.resolve(__dirname, '../.env'));
console.log('🔍 Current working dir:', process.cwd());
console.log('🔍 MONGODB_URI value:', process.env.MONGODB_URI);

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Product = require('../models/Product');
const connectDB = require('../config/db');

console.log('🧩 User model type:', typeof User);
console.log('🧩 Product model type:', typeof Product);
console.log('🧩 Product keys:', Object.keys(Product));

const seedData = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log('🌿 MongoDB connected for seeding...');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('🧹 Cleared existing users and products');

    // Create demo users
    const adminPassword = await bcrypt.hash(process.env.SEED_ADMIN_PASSWORD || 'admin123', 10);
    const farmerPassword = await bcrypt.hash(process.env.SEED_FARMER_PASSWORD || 'farmer123', 10);

    const admin = await User.create({
      name: 'Admin User',
      email: process.env.SEED_ADMIN_EMAIL || 'admin@agrismart.com',
      password: adminPassword,
      role: 'admin',
    });

    const farmer = await User.create({
      name: 'Demo Farmer',
      email: process.env.SEED_FARMER_EMAIL || 'farmer@agrismart.com',
      password: farmerPassword,
      role: 'farmer',
    });
    console.log('👥 users seeded successfully');
    // Create sample products
    const products = [
      {
        name: 'Rice (Jasmine)',
        description: 'High-quality fragrant jasmine rice.',
        category: 'cereals',
        basePrice: 50,
        currentPrice: 45,
        quantity: { value: 100, unit: 'kg' },
        farmer: farmer._id
      },
      {
        name: 'Tomatoes',
        description: 'Freshly picked red tomatoes.',
        category: 'vegetables',
        basePrice: 30,
        currentPrice: 28,
        quantity: { value: 50, unit: 'kg' },
        farmer: farmer._id
      },
      {
        name: 'Bananas',
        description: 'Sweet and ripe bananas.',
        category: 'fruits',
        basePrice: 25,
        currentPrice: 20,
        quantity: { value: 80, unit: 'kg' },
        farmer: farmer._id
      }
    ];

    await Product.insertMany(products);

    console.log('✅ Demo users and products seeded successfully!');
    console.log(`👨‍🌾 Farmer login: ${farmer.email} / ${process.env.SEED_FARMER_PASSWORD}`);
    console.log(`🧑‍💼 Admin login: ${admin.email} / ${process.env.SEED_ADMIN_PASSWORD}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();