import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      text: "todo 1",
      id: 1,
    },
    {
      text: "todo 2",
      id: 2,
    },
    {
      text: "todo 3",
      id: 3,
    },
  ]);
  const deleteItem = (id: number) => {
   const t = todos.filter(todo => todo.id != id);
    setTodos(t);
  }
  return (
    <ul>
      {todos.map((todoItem) => {
        return <li onClick={()=>{
          deleteItem(todoItem.id);
        }} key={todoItem.id}>
          {todoItem.text}
        </li>
      })}
    </ul>
  );
};

export default Todos;
