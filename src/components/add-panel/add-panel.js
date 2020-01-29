import React from "react";
import "./add-panel.css";

const AddPanel = props => {
  return (
    <div className="add-panel">
      <input></input>
      <button
        className="btn-success m-1"
        onClick={() => props.addItem("hello world")}
      >
        Add
      </button>
    </div>
  );
};

export default AddPanel;
