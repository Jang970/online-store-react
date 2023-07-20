import React from "react";
import Item from "./Item";

const ItemsDisplay = ({ itemsToDisplay, addToCart }) => {
  const items = itemsToDisplay.map((item) => (
    <Item key={item.id} clickEvent={addToCart} item={item} />
  ));

  return (
    <div className="item-display">
      {items.length > 0 ? items : "no items :("}
    </div>
  );
};

export default ItemsDisplay;
