import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="app-header">
      <h1 className="app-header-title">
        <span>
          ToDo React App<i className="fa fa-edit"></i>
        </span>
      </h1>
      <p className="app-header-subtitle">
        <span className="todo">1</span> more to do,
        <span className="done">3</span> done
      </p>
    </div>
  );
};

export default Header;
