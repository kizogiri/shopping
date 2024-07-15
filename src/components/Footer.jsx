import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={footerSectionStyle}>
          <h4>About Us</h4>
          <p>
            K Store is your go-to destination for trendy and affordable fashion.
            We offer a wide range of products to suit every style.
          </p>
        </div>
        <div style={footerSectionStyle}>
          <h4>Contact Us</h4>
          <p>Email: support@Kstore.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div style={footerSectionStyle}>
          <h4>Follow Us</h4>
          <p>
            <a href="#" style={linkStyle}>
              Facebook
            </a>{" "}
            |{" "}
            <a href="#" style={linkStyle}>
              Twitter
            </a>{" "}
            |{" "}
            <a href="#" style={linkStyle}>
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>&copy; 2024 K Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
};

const footerContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  maxWidth: "1200px",
  margin: "0 auto",
};

const footerSectionStyle = {
  flex: 1,
  padding: "0 20px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const footerBottomStyle = {
  borderTop: "1px solid #444",
  padding: "10px 0",
};

export default Footer;
