import React from "react";

const Filters = ({ clickEvent }) => {
  const filters = [
    "All",
    "Shirts",
    "Pants",
    "Shorts",
    "Jackets",
    "Hoodies",
    "Crewnecks",
  ];

  return (
    <div className="filter-list">
      <strong>Filters:</strong>
      {filters.map((filter) => (
        <div
          key={filter}
          onClick={() => {
            clickEvent(filter);
          }}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default Filters;
