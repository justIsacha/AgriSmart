import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { productAPI } from "../api";

export default function Home() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productAPI.getById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <Link to="/">← Back to Marketplace</Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        💰 Farm Gate Price: {product.farmGatePrice} | 🏪 Market Price:{" "}
        {product.marketPrice}
      </p>
    </div>
  );
}
