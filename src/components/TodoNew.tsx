import { useState, type FC } from "react";
import type { Todo } from "../types";

type todoProp={
  todoArray: Todo[]
}

// const [todoData, setTodoData] = useState<Todo[]>([]);

export const TodoNew: FC<todoProp> = ({todoArray}) => {


  return <>
  <ul>
   {todoArray.map((Item)=>{
    return <li key={Item.id}>{Item.title}</li>
   })}
  </ul>
  </>;
};

export default TodoNew;
