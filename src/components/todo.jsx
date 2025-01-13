import { useState } from "react";

//uso de propiedades en un componente
export default function Todo({ todo, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    //creacion del estado para el posterior manejo de la informacion
    const [newValue, setNewValue] = useState(todo.title); //inicialmente el valor es el titulo del todo

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo() {
      onUpdate(todo.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        {todo.title} <button onClick={() => setIsEdit(true)}>Edit </button>
        <button>Delete</button>
      </div>
    );
  }

  return (
    <>
      <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>
    </>
  );
}
