import "../style.scss";
import Header from "./Header";
import Navbar from "./Navbar";
import { CartItem, PannelItems } from "../constants";
import CartItems from "./Cartitems";
import image3 from "../images/adds.jpg";
import CenterCarousel from "./Carousel";
import Footer from "./Footer";
import image from "../images/menu-bar.png";
import image1 from "../images/shop-now.jpg";
import React, { useState } from "react";

function FirstPage() {
  return (
    <>
      <div>
        <Header />

        <div className="nav-bar">
          <img src={image} className="nav-bar-menu"></img>
          <Navbar PannelItems={PannelItems} />
          <img src={image1}></img>
        </div>

        <div className="hero-section">
          <div className="body-content">
            <CenterCarousel />
          </div>
          <div className="shopping-carts">
            {CartItem.map((each) => (
              <CartItems dataObj={each} />
            ))}
            <div className="shopping-carts-add">
              <img src={image3}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <Footer />
      </div>
    </>
  );
}

export default FirstPage;
