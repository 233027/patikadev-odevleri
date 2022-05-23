import React, { useState } from "react";
import Form from "./form/form";
import List from "./list/list";
import Footer from "./footer/footer";

  function Components() {
  const storage = JSON.parse(localStorage.getItem("ToDoS")) 
  const [todos, setTodos] = useState(storage);
  const [hide, setHide] = useState("All");
  localStorage.setItem("ToDoS", JSON.stringify(todos))
  return (
    <div className="todoapp">
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos}  hide={hide} />
      <Footer todos={todos} setTodos={setTodos} setHide={setHide} />
    </div>
  );
}

export default Components;
