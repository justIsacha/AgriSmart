const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['cereals', 'vegetables', 'fruits', 'livestock', 'dairy', 'poultry']
  },
  description: String,
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quantity: {
    value: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true,
      enum: ['kg', 'tons', 'pieces', 'liters', 'crates']
    }
  },
  basePrice: {
    type: Number,
    required: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  priceFactors: {
    seasonality: Number,
    demand: Number,
    quality: Number,
    marketTrend: Number
  },
  quality: {
    type: String,
    enum: ['premium', 'standard', 'economy'],
    default: 'standard'
  },
  location: {
    county: String,
    market: String
  },
  images: [String],
  status: {
    type: String,
    enum: ['available', 'sold', 'reserved'],
    default: 'available'
  },
  harvestDate: Date,
  expiryDate: Date,
  organic: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  favorites: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

productSchema.index({ category: 1, status: 1 });
productSchema.index({ farmer: 1 });
productSchema.index({ currentPrice: 1 });

module.exports = mongoose.model('Product', productSchema);