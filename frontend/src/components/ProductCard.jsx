import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} className="product-card">
      <div className="card-body">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        )}
        <h3>{product.name}</h3>
        <p>{product.description || "No description available"}</p>
        <div className="prices">
          <span>Base Price: KES {product.basePrice}</span>
          <span>Smart Price: KES {product.smartPrice}</span>
        </div>
      </div>
    </Link>
  );
}
