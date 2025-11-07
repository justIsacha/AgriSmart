import React, { useState, useEffect } from "react";
import { productAPI } from "../api";
import ProductCard from "../components/ProductCard";
import PriceGrowthChart from "../components/PriceGrowthChart";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const data = await productAPI.getAll();
      console.log("Fetched products:", JSON.stringify(data, null, 2)); // 👈 clearer log
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, []);

  return (
    <div className="marketplace container">
      <img src="AgriSmart Logo.png" alt="AgriSmart Logo" className="logo"/>
      <h1 className="title"> AgriSmart Marketplace</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <>
          <PriceGrowthChart products={Array.isArray(products) ? products : []} />
          <div className="product-grid">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => {
                console.log("Rendering product:", product); // 👈 correct placement
                return <ProductCard key={product._id} product={product} />;
      })
    ) : (
      <p>No products available.</p>
      )}
  
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
