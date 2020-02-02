import React from "react";
import "./search-panel.css";

const SearchPanel = props => {
  return (
    <input
      placeholder="Search..."
      className="search-panel"
      onChange={props.onSearchChange}
    ></input>
  );
};

export default SearchPanel;
