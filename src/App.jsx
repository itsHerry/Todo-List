import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";

let id = 0;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function addTodo() {
    if (value === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: ++id, value, checked: false, deleted: false },
    ]);
    setValue("");
  }

  function deleteTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (id !== todo.id) return todo;
        return { ...todo, deleted: true };
      })
    );

    setTimeout(
      () => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)),
      300
    );
  }

  const handleCheck = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, checked: !todo.checked };
      })
    );
  };

  return (
    <div className="App p-3 rounded overflow-auto">
      <h1 className="app-name text-center ">To Do List</h1>
      <Form value={value} addTodo={addTodo} setValue={setValue} />
      {todos.length === 0 ? (
        <p className="mt-3">No Todos Yet</p>
      ) : (
        <Todos
          todos={todos}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}
