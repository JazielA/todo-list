//el uso de llaves {...} es para importar solo una parte de la libreria
import { useState } from "react";

export default function todoApp() {
  //manejo de estado
  const [title, setTitle] = useState("hola mundo"); //inicialmente el titulo esta vacio
  // estado para guardar la lista de tareas (todos)
  const [todos, setTodos] = useState([]); //inicialmente la lista de todos esta vacia

  function handleClick(e) {
    e.preventDefault();
    setTitle("jaziel"); //cambiamos el titulo
  }

  function handleChange(e) {
    const value = e.target.value; //accedemos al valor del input

    setTitle(value); //cambiamos el titulo
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleClick}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>
    </div>
  );
}
