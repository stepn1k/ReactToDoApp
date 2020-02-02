import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  constructor() {
    super();
    this.buttons = [
      { name: "all", label: "All" },
      { name: "active", label: "Active" },
      { name: "done", label: "Done" }
    ];
  }
  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      let clazz = isActive ? "btn-success" : "btn-secondary";
      return (
        <button
          className={clazz}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="item-status-filter">{buttons}</div>;
  }
}
