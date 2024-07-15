import React, { useEffect, useState } from "react";
import productData from "../data/products.json";

export default function ProductsList({ addToCart }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setData(productData);
    console.log(productData);
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "10px" }}>ALL PRODUCT</h2>
      <div>
        <input
          type="text"
          placeholder="Search item"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "320px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            margin: "10px",
            fontSize: "16px",
          }}
        />
      </div>
      <div className="productContainer">
        {filteredData.map((item) => (
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
    </>
  );
}
