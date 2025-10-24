import { useEffect, useState } from 'react'
import './App.css'
import { getTodosApi } from './apis/todos/todos-api'
import type { Todo } from './types'
import TodoNew from './components/TodoNew'


function App() {

  const [todosApiData, settodosApiData] = useState<Todo[]>([])
  const [count, setCount] = useState(0)

  useEffect(()=>{
  getTodosApi().then(val=>{
    settodosApiData(val);
    setTimeout(()=>{
      settodosApiData((todoArray)=>{
      return todoArray.map((item, index)=>{
          if(index === 0){
            return {...item,
            completed: true
          }
        }return item
      })})
    },2000)
  })
  },[])

  useEffect(()=>{
    const finished = todosApiData.filter(val => val.completed == true).length;
    setCount(finished);
  },[count])


  return (
    <>
    <h1>Count of completed: {count}</h1>
    <TodoNew todoArray={todosApiData}></TodoNew>
    </>
  )
}

export default App
