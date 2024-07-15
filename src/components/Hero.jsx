import { useState, useEffect } from "react";
import productData from "../data/products.json";
import { Link } from "react-router-dom";
import heroImage from "/src/assets/KStore.png";

export default function Hero({ addToCart }) {
  const [sample, setSample] = useState([]);

  useEffect(() => {
    setSample(productData.slice(2, 8));
  }, []);

  return (
    <>
      <div style={{}}>
        <div className="hero-banner">
          <img src={heroImage} alt="Hero Banner" />

          <button
            className="hero-button"
            onClick={() => (window.location.href = "/products")}
          >
            Shop Now
          </button>
        </div>
      </div>

      <hr />
      <h2 style={{ textAlign: "center", margin: "10px" }}>Latest Arrivals</h2>

      <div className="productContainer">
        {sample.map((item) => (
          <div key={item.id}>
            <img src={item.image} />
            <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>
              {item.name}
            </div>
            <div style={{ fontSize: "1rem", fontWeight: "600" }}>
              ${item.price.toFixed(2)}
            </div>
            <button
              className="button-add-to-cart"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Link to="/products">
        <p style={{ textAlign: "center", margin: "10px" }}>Shop More </p>
      </Link>
    </>
  );
}
