import React, { useState } from "react";
import "../../styles/TodoList.css";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todosData, setTodosData] = useState([]);

  const todoInputChange = (e) => {
    setTodoValue(e.target.value);
  };

  const saveTodo = (e) => {
    if (e.keyCode === 13 || e.keyCode === undefined) {
      if (todoValue !== "" && !todosData.includes(todoValue)) {
        setTodosData([todoValue, ...todosData]);
        setTodoValue("");
      }
    }
  };

  const deleteTodo = (todo) => {
    setTodosData(todosData.filter((item) => item !== todo));
  };

  return (
    <div className="todo-list">
      <div className="todolist-header-block">
        <h1 className="todo-list-header">To-Do List</h1>
      </div>
      <div className="create-todo-block">
        <input
          className="todo-input"
          type="text"
          placeholder="Type something..."
          onChange={todoInputChange}
          value={todoValue}
          onKeyUp={saveTodo}
        ></input>
        <button className="add-todo-btn" onClick={saveTodo}>
          Add
        </button>
      </div>
      <div className="todos">
        {todosData.map((todo, index) => {
          return (
            <div className="todo" key={index}>
              <p className="todo-name">{todo}</p>
              <button className="delete-todo" onClick={() => deleteTodo(todo)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
