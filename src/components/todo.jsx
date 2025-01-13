//uso de propiedades en un componente
export default function Todo({ todo }) {
  return <div className="todoItem">{todo.title}</div>;
}
