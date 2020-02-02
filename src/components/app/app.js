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

    this.createTodoItem = label => {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      };
    };

    this.onToggleProperty = (arr, id, prop) => {
      const index = arr.findIndex(el => el.id === id);
      let oldItem = arr[index];
      let newItem = { ...oldItem, [prop]: !oldItem[prop] };
      let newArray = [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
      return { todoData: newArray };
    };

    this.state = {
      todoData: [
        this.createTodoItem("drink coffee"),
        this.createTodoItem("build react app"),
        this.createTodoItem("improve JS skills")
      ],
      filter: "all",
      searchText: ""
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
      let newItem = this.createTodoItem(text);
      this.setState(({ todoData }) => {
        let newData = [...todoData, newItem];
        return { todoData: newData };
      });
    };

    this.onToggleImportant = id => {
      this.setState(({ todoData }) => {
        return this.onToggleProperty(todoData, id, "important");
      });
    };

    this.onToggleDone = id => {
      this.setState(({ todoData }) => {
        return this.onToggleProperty(todoData, id, "done");
      });
    };

    this.onFilterChange = filter => {
      this.setState({ filter });
    };

    this.itemFilter = (items, filter) => {
      switch (filter) {
        case "all":
          return items;
        case "active":
          return items.filter(el => !el.done);
        case "done":
          return items.filter(el => el.done);
        default:
          return items;
      }
    };

    this.onSearchChange = e => {
      let searchText = e.target.value.toLowerCase();
      this.setState({ searchText });
    };

    this.itemSearch = (data, searchText) => {
      if (searchText === "") return data;
      return data.filter(el => {
        let item = el.label.toLowerCase();
        return item.includes(searchText);
      });
    };
  }

  render() {
    let { todoData, filter, searchText } = this.state;
    let done = todoData.filter(el => el.done).length;
    let todo = todoData.length - done;

    let todoOnPage = this.itemFilter(
      this.itemSearch(todoData, searchText),
      filter
    );

    return (
      <div className="container-fluid">
        <div className="app">
          <Header done={done} todo={todo} />
          <div className="search-filter-row">
            <SearchPanel
              onSearchChange={this.onSearchChange}
              searchText={searchText}
            />
            <ItemStatusFilter
              onFilterChange={this.onFilterChange}
              filter={filter}
            />
          </div>
          <TodoList
            todoElements={todoOnPage}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <AddPanel addItem={this.addItem} />
        </div>
      </div>
    );
  }
}
