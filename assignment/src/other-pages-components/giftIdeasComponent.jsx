import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const GiftDeals = ({ cartItems }) => {
  const giftItems = cartItems.filter((item) => item.categorie === "gift ideas");

  return (
    <div>
      <h2>Find The Perfect Gifts</h2>
      <ul>
        {giftItems.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <img src={item.image2} alt="Product" />
            <p>{item.deals}</p>
            <div className="mobile-deals-rating">
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftDeals;
