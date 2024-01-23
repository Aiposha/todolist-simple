import React from "react";
import { useState } from "react";

export const TodoForm = ({ onNewTodo }) => {
  
const [value, setValue] = useState("")
const [age, setAge] = useState("")
const [password, setPassword] = useState("")

  const handleTodoSubmit = () => {
    const newTodo = {
      title: value,
      age,
      password,
      id: Date.now().toString(),
    };
    onNewTodo(newTodo);
    setValue("");
    setAge("")
    setPassword("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <input
        placeholder="enter your todo"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="submit" onClick={handleTodoSubmit}>
        Add Todo
      </button>
    </form>
  );
};
