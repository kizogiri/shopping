import { Link } from "react-router-dom";
import cartImage from "/src/assets/shopping-cart.png";
import logo from "/src/assets/logo-no-background.png";
export default function Navigation({ number }) {
  return (
    <header className="nav-container">
      <ul
        style={{
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <li>
            <img style={{ height: "30px" }} src={logo} />
          </li>
        </Link>
        <Link to="/">
          <li>HOME</li>
        </Link>

        <Link to="/products">
          <li>PRODUCTS</li>
        </Link>

        <Link to="/cart">
          <li>
            <img
              style={{ height: "20px", position: "relative" }}
              src={cartImage}
              alt="cartIcon"
            />
          </li>
          <li
            style={{
              fontWeight: "600",
              position: "absolute",
              marginTop: "-38px",
              marginLeft: "10px",
              color: "red",
              background: "white",
              padding: "9px",
              borderRadius: "50%",
              width: "7px",
              height: "7px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {number}
          </li>
        </Link>
      </ul>
    </header>
  );
}
