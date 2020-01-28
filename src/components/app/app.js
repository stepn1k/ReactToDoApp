import React from "react";
import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import AddPanel from "../add-panel/add-panel";

import "./app.css";

const App = () => {
  let todoData = [
    { label: "drink coffee", important: false, id: 1 },
    { label: "build react app", important: true, id: 2 },
    { label: "learn English", important: true, id: 3 }
  ];

  return (
    <div className="container-fluid">
      <div className="app">
        <Header />
        <div className="search-filter-row">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todoElements={todoData} />
        <AddPanel />
      </div>
    </div>
  );
};

export default App;
