import React from "react";
import image from "../images/amazon-BG3.jpg";
import ProductFilter from "./sidebar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const DealComponent = ({ cartItems }) => {
  const totalRepeats = 2;

  const repeatedItems = [];
  for (let i = 0; i < totalRepeats; i++) {
    repeatedItems.push(...cartItems);
  }

  return (
    <>
      <div className="background">
        <img src={image} alt="" />
      </div>
      <div className="container">
        <div className="container-reviews">
          <ProductFilter />
        </div>
        <div className="container-individual">
          {repeatedItems.map((item, index) => {
            const randomDiscount =
              Math.floor(Math.random() * (90 - 50 + 1)) + 50;

            return (
              <div key={index} className="container-individual-cart">
                <img
                  src={item.image1}
                  alt={item.title}
                  className="container-individual-cart-img"
                />
                <div className="container-individual-cart-tagline">
                  <span className="container-individual-cart-tagline-button">
                    Up to {randomDiscount}% off
                  </span>
                  <h5 className="container-individual-cart-tagline-content">
                    Great Indian Festival
                  </h5>
                </div>
                <p className="container-individual-cart-desc">{item.title}</p>
                <div className="container-individual-cart-rating">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DealComponent;
