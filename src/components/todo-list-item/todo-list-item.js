import React, { Component } from "react";
import "./todo-list-item.css";

export default class ListItem extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    };

    this.onLabelClick = () => {
      this.setState(({ done }) => {
        return { done: !done };
      });
    };

    this.onMarkImportant = () => {
      this.setState(({ important }) => {
        return { important: !important };
      });
    };
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    let classNames = "";
    if (done) classNames += "done";
    if (important) classNames += " important";

    return (
      <span className="todo-list-item">
        <span onClick={this.onLabelClick} className={classNames}>
          {label}
        </span>
        <div>
          <button className="btn btn-outline-danger" onClick={onDeleted}>
            <i className="fa fa-times"></i>
          </button>
          <button
            className="btn btn-outline-info"
            onClick={this.onMarkImportant}
          >
            <i className="fa fa-exclamation"></i>
          </button>
        </div>
      </span>
    );
  }
}
