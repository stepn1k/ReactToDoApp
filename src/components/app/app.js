import React, { Component } from "react";
import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import AddPanel from "../add-panel/add-panel";

import "./app.css";

export default class App extends Component {
  constructor() {
    super();

    this.maxId = 100;

    this.state = {
      todoData: [
        { label: "drink coffee", important: false, id: 1 },
        { label: "build react app", important: true, id: 2 },
        { label: "learn English", important: true, id: 3 }
      ]
    };

    this.deleteItem = id => {
      this.setState(({ todoData }) => {
        const index = todoData.findIndex(el => el.id === id);
        let newData = [
          ...todoData.slice(0, index),
          ...todoData.slice(index + 1)
        ];
        return { todoData: newData };
      });
    };

    this.addItem = text => {
      let newItem = {
        label: text,
        important: false,
        id: this.maxId++
      };
      this.setState(({ todoData }) => {
        let newData = [...todoData, newItem];
        return { todoData: newData };
      });
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="app">
          <Header />
          <div className="search-filter-row">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <TodoList
            todoElements={this.state.todoData}
            onDeleted={this.deleteItem}
          />
          <AddPanel addItem={this.addItem} />
        </div>
      </div>
    );
  }
}
