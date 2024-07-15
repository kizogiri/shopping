import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <div style={{ justifyContent: "center" }}>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                margin: "10px 0",
                padding: "10px",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ccc",
              }}
            >
              <img
                style={{ height: "120px" }}
                src={item.image}
                alt={item.name}
              />
              <div style={{ flex: 1, marginLeft: "10px" }}>
                <div>{item.name}</div>
                <div>
                  ${item.price.toFixed(2)} x {item.quantity}
                </div>
              </div>
              <button
                className="delete-button"
                style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onClick={() => removeFromCart(index)}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#c82333")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#dc3545")
                }
              >
                Remove
              </button>
            </div>
          ))}
          <div style={{ fontSize: "1.3rem", fontWeight: "600" }}>
            Total: ${calculateTotal()}
          </div>
          <div
            style={{
              margin: "20px",
              color: "#fff",
              cursor: "pointer",
              padding: "14px",
              background: "#2a9d8f",
              fontSize: "1.2rem",
              borderRadius: "5px",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#21867a")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2a9d8f")}
          >
            Make a payment
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
