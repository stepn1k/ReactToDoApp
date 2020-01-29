import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="item-status-filter">
        <button className="btn-success">All</button>
        <button className="btn-secondary">Active</button>
        <button className="btn-secondary">Done</button>
      </div>
    );
  }
}
