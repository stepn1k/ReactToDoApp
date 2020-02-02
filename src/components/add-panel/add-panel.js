import React, { Component } from "react";
import "./add-panel.css";

export default class AddPanel extends Component {
  constructor() {
    super();

    this.state = {
      label: ""
    };

    this.onLabelChange = e => {
      this.setState({
        label: e.target.value
      });
    };

    this.onSubmit = e => {
      e.preventDefault();
      this.props.addItem(this.state.label);
      this.setState({ label: "" });
    };
  }

  render() {
    return (
      <form className="add-panel" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className="btn-success m-1">Add</button>
      </form>
    );
  }
}
