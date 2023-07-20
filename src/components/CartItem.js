import React from "react";

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image ? item.image : ""} alt="mini img of item" />
      <p>{item.name}</p>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity ? item.quantity : ""}</p>
      <button
        onClick={() => {
          removeItem(item.name);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
