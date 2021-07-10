import React from "react";

function Todo(props) {
  return (
    <div>
      <h4>{props.todos.srn}</h4>
      <h3>{props.todos.title}</h3>
      <h2>{props.todos.desc}</h2>
      <button
        onClick={()=>{props.onDelete(props.todos)}}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
