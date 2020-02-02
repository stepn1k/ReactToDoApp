import React from "react";
import ListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = ({
  todoElements,
  onDeleted,
  onToggleDone,
  onToggleImportant
}) => {
  let elements = todoElements.map(item => {
    let { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ListItem
          {...itemProps}
          onDeleted={() => {
            onDeleted(id);
          }}
          onToggleDone={() => {
            onToggleDone(id);
          }}
          onToggleImportant={() => {
            onToggleImportant(id);
          }}
        />
      </li>
    );
  });

  return <ul className="list-group">{elements}</ul>;
};

export default TodoList;
