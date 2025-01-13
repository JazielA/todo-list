//el uso de llaves {...} es para importar solo una parte de la libreria
import { useState } from "react";
import Todo from "./todo";

//importo el fichero css para darle estilos a la aplicacion
import "./todoApp.css";

export default function TodoApp() {
  //manejo de estado
  const [title, setTitle] = useState(""); //inicialmente el titulo esta vacio
  // estado para guardar la lista de tareas (todos)
  const [todos, setTodos] = useState([]); //inicialmente la lista de todos esta vacia

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

    setTodos([...todos, newTodo]);

    setTitle(""); //limpiamos el titulo despues de agregar un todo
  }

  //funcion para actualizar el titulo de un todo
  function handleUpdate(id, newValue) {
    const temp = [...todos];
    const todo = temp.find((todo) => todo.id === id);
    todo.title = newValue;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((todo) => todo.id !== id);

    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {/* recorrer un arreglo de elementos con .map */}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
