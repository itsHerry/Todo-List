export default function Form({ value, setValue, addTodo }) {
  return (
    <form action="#">
      <div className="form-group">
        <label htmlFor="todoInput" className="ps-1 h5">
          To Do
        </label>
        <input
          type="text"
          className="form-control p-2"
          id="todoInput"
          placeholder="Thing To Do"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTodo} className="btn btn-primary mt-2 p-2 w-100">
          Add
        </button>
      </div>
    </form>
  );
}
