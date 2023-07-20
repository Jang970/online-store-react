import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = ({ cartAmount, defaultItems, setListItems, inCart }) => {
  const renderElement = () => {
    if (inCart) {
      return "Cart";
    } else {
      return "Cart (" + cartAmount.length + ")";
    }
  };

  return (
    <div className="nav-bar">
      <h3>My Online Store!</h3>
      <Link to="/" className="link">
        Shop
      </Link>
      <Link to="/cart" className="link">
        {renderElement()}
      </Link>
      <SearchBar
        defaultItems={defaultItems}
        setListItems={setListItems}
        inCart={inCart}
      />
    </div>
  );
};

export default NavBar;
