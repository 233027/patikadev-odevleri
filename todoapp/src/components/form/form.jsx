import { useState, useEffect } from "react";
function Form({ todos, setTodos }) {
  const [form, setForm] = useState("");
  useEffect(() => {
    setForm("");
    
  }, [todos]);
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      return false;
    }

    setTodos([
      ...todos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
        todo: form,
        checked: false,
      },
    ]);
    console.log(form);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input className="new-todo" placeholder="Whats up, pal?" autoFocus value={form} onChange={(e) => setForm(e.target.value)} />
      </form>
    </header>
  );
}

export default Form;
