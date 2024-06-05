import React from "react";
import { CartItem } from "../constants";

function CartProducts({ item, dispatch }) {
  const removeFromCart = () => {
    dispatch({
      type: "Remove-from-cart",
      title: item.title,
    });
  };
  return (
    <>
      <div className="cartproducts">
        <img src={item.image} alt="" className="cartproducts-img" />
        <div className="cartproducts-info">
          <p className="cartproducts-info-title">{item.title}....</p>
          <div className="cartproducts-info-foot">
            <p className="cartproducts-info-foot-deals">{item.deals}</p>
            <button
              className="cartproducts-info-foot-button"
              onClick={removeFromCart}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProducts;
