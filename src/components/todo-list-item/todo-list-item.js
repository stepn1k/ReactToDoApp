import React from "react";
import "./todo-list-item.css";

const ListItem = ({ label, important = false }) => {
  const listStyle = {
    color: important ? "#5BC0DE" : "white"
  };

  return (
    <span className="todo-list-item">
      <span style={listStyle}>{label}</span>
      <div>
        <button className="btn btn-outline-danger">
          <i className="fa fa-times"></i>
        </button>
        <button className="btn btn-outline-info">
          <i className="fa fa-exclamation"></i>
        </button>
      </div>
    </span>
  );
};

export default ListItem;
