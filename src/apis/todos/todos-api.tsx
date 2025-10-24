import type { Todo } from "/home/musfirali/firstProj/src/types";

export const getTodosApi = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonResp = await resp.json();
  return jsonResp as Todo[];
};

export default getTodosApi;