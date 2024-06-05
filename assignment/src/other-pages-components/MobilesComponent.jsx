import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const MobileDeals = ({ cartItems }) => {
  const mobileItems = cartItems.filter((item) => item.categorie === "mobiles");

  return (
    <>
      <h2>Mobile Deals</h2>
      <div className="mobile-deals">
        <ul>
          {mobileItems.map((item, index) => (
            <li key={index} className="mobile-deals-content">
              <h3 className="mobile-deals-head">{item.title}</h3>
              <img
                src={item.image1}
                alt="Product"
                className="mobile-deals-img"
              />
              <p className="mobile-deals-foot">{item.deals}</p>
              <div className="mobile-deals-rating">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </Stack>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileDeals;
