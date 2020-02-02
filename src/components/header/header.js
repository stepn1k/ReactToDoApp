import React from "react";
import "./header.css";

const Header = props => {
  let { todo, done } = props;
  return (
    <div className="app-header">
      <h1 className="app-header-title">
        <span>
          ToDo React App<i className="fa fa-edit"></i>
        </span>
      </h1>
      <h5 className="app-header-subtitle">
        <span className="todo">{todo}</span> more to do,
        <span className="done">{done}</span> done
      </h5>
    </div>
  );
};

export default Header;
