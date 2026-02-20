import React from "react";

function Sidebar({ categories, onCategoryClick }) {
  return (
    <div className="sidebar">
      <ul className="list-group">
        {categories.map((category, index) => (
          <li
            key={index}
            className="list-group-item"
            style={{ cursor: "pointer" }}
            onClick={() => onCategoryClick(category)} // handle click
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
