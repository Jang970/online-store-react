import React from "react";
import NavBar from "./NavBar";
import CartDisplay from "./CartDisplay";

const Cart = ({
  cartAmount,
  defaultItems,
  setItemsList,
  inCart,
  removeItem,
}) => {
  return (
    <div className="App">
      <NavBar
        cartAmount={cartAmount}
        defaultItems={defaultItems}
        setListItems={setItemsList}
        inCart={inCart}
      />
      <CartDisplay itemsToDisplay={cartAmount} removeItem={removeItem} />
    </div>
  );
};

export default Cart;
