import React, { useState, useEffect } from "react";
import Todo from "./todo";
import AddTodo from "./addtodo";
function Todos() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addtodo = (title, desc) => {
    console.log(title, desc);
    const myTodo = {
      srn: todos.length + 1,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <h1>Vaibhav Gupta's Todo's List</h1>
      <AddTodo addtodo={addtodo} />
      {todos.length
        ? todos.map((todos, index) => (
            <Todo todos={todos} key={index} onDelete={onDelete} />
          ))
        : "No Todo's Here"}
    </div>
  );
}

export default Todos;
