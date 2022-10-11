import React from "react";
import "../styles/navbar.css";


const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shoping Cart
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <img src="https://clipground.com/images/icon-cart-clipart-2.jpg" className="cartImage"></img>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;