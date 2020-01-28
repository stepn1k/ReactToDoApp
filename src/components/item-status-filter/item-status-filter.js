import React from "react";
import "./item-status-filter.css";

const ItemStatusFilter = () => {
  return (
    <div className="item-status-filter">
      <button className="btn-success">All</button>
      <button className="btn-secondary">Active</button>
      <button className="btn-secondary">Done</button>
    </div>
  );
};

export default ItemStatusFilter;
