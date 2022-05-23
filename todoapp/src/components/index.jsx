import React, { useState } from "react";
import Form from "./form/form";
import List from "./list/list";
import Footer from "./footer/footer";

function Components() {
  const [todos, setTodos] = useState([]);
  const [hide, setHide] = useState("All");
  return (
    <div className="todoapp">
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Components;
