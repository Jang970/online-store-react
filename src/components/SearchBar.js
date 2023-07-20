import React from "react";

const SearchBar = ({ defaultItems, setListItems, inCart }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    let currentText = e.target.value.toLowerCase();
    setListItems(
      defaultItems.filter(
        (item) =>
          item.name.toLowerCase().includes(currentText) ||
          item.category.includes(currentText)
      )
    );
  };

  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for Items..."
        onChange={onChange}
        readOnly={inCart}
      />
    </form>
  );
};

export default SearchBar;
