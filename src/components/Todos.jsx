import Todo from "./Todo";

export default function Todos({ todos, deleteTodo, handleCheck }) {
  return (
    <div className="d-flex mt-5 flex-column ">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleCheck={() => handleCheck(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
}
