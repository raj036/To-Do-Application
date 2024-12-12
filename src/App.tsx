import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [value, setValue] = useState("");
  const [listTodo, setTodoList] = useState<any>([]);

  let addList = (inpText: any) => {
    if (inpText.trim() !== "") {
      setTodoList([...listTodo, inpText]);
      setValue("");
    }
  };

  const deleteListItem = (key: any) => {
    let newList = [...listTodo];
    newList.splice(key, 1);
    setTodoList([...newList]);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">My Todo List</h1>

      <div className="todo-input-container">
        <input
          type="text"
          value={value}
          className="todo-input"
          placeholder="Add a new task..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="todo-add-btn" onClick={() => addList(value)}>
          Add
        </button>
      </div>

      <div className="todo-list">
        {listTodo.map((listItem: any, i: any) => {
          return (
            <TodoList
              key={i}
              index={i}
              list={listItem}
              deleteList={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;