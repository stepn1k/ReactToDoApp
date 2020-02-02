import React from "react";
import "./todo-list-item.css";

const ListItem = (props) => {
  const { label, onDeleted, onToggleDone, onToggleImportant, done, important } = props;
  let classNames = "";
  if (done) classNames += "done";
  if (important) classNames += " important";

  return (
    <span className="todo-list-item">
      <span onClick={onToggleDone} className={classNames}>
        {label}
      </span>
      <div>
        <button className="btn btn-outline-danger" onClick={onDeleted}>
          <i className="fa fa-times"></i>
        </button>
        <button className="btn btn-outline-info" onClick={onToggleImportant}>
          <i className="fa fa-exclamation"></i>
        </button>
      </div>
    </span>
  );
};

export default ListItem