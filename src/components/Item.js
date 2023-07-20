import React from "react";

const Item = ({ clickEvent, item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt="image of item" />
      <p>{item.name}</p>
      <p>${item.price}</p>
      <button
        onClick={() => {
          clickEvent(item);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
