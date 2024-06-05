import React from "react";
import image from "../images/adds.jpg";
import "../style.scss";
import Header from "../Home-page-components/Header";
import Navbar from "../Home-page-components/Navbar";
import { CartItem, PannelItems } from "../constants";
import image2 from "../images/menu-bar.png";
import image1 from "../images/shop-now.jpg";
import Footer from "../Home-page-components/Footer";
import { useStateValue } from "./stateProvider";
import CartProducts from "./cart-products";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="nav-bar">
        <img src={image2} className="nav-bar-menu"></img>
        <Navbar PannelItems={PannelItems} />
        <img src={image1}></img>
      </div>

      <div className="cart-container">
        <div className="cart-container-left">
          <img className="cart-container-left-img" src={image} alt="" />
        </div>

        <div>
          <h2 className="cart-conatiner-head">Your Shooping Basket</h2>

          {basket.map((item) => (
            <CartProducts item={item} key={item.name} dispatch={dispatch} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
