import { useId } from "react";

export default function Todo({ todo, deleteTodo, handleCheck }) {
  const id = useId();
  let classes = todo.checked
    ? "text-decoration-line-through d-inline-block h4 ms-2 "
    : "d-inline-block h4 ms-2";

  let todoClasses = todo.deleted
    ? "deleted container shadow p-3 mb-5 bg-white rounded "
    : "add container shadow p-3 mb-5 bg-white rounded";

  return (
    <div className={todoClasses}>
      <div className="row ">
        <div className="col-10">
          <div className="form-check d-inline-block">
            <input
              type="checkbox"
              id={id}
              className="form-check-input mt-2"
              checked={todo.checked}
              onChange={handleCheck}
            />
            <label className={classes} htmlFor={id}>
              {todo.value}
            </label>
          </div>
        </div>
        <div className="col-2">
          <button
            onClick={deleteTodo}
            className="btn btn-danger float-end d-flex"
            disabled={!todo.checked}
          >
            <ion-icon name="trash"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
