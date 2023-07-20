import React from "react";
import CartItem from "./CartItem";

const CartDisplay = ({ itemsToDisplay, removeItem }) => {
  // const renderCartItems = itemsToDisplay.map((item, idx) => (
  //   <CartItem key={idx} item={item} removeItem={removeItem} />
  // ));

  const priceSum = itemsToDisplay.reduce(
    (prevVal, currItem) => prevVal + currItem.price,
    0
  );

  const countDuplicates = () => {
    const setOfItems = [];
    itemsToDisplay.forEach((element) => {
      if (!setOfItems.includes(element)) {
        element.quantity = 1;
        setOfItems.push(element);
      } else {
        element.quantity = element.quantity + 1;
      }
    });

    const rendItems = setOfItems.map((item) => (
      <CartItem key={item.id} item={item} removeItem={removeItem} />
    ));

    return rendItems;
  };

  return (
    <div className="item-display cart-display">
      <h2> Your Cart: </h2>
      {itemsToDisplay.length > 0 ? countDuplicates() : "no items!"}
      <p className="total-price">Total Price: ${priceSum}</p>
    </div>
  );
};

export default CartDisplay;
