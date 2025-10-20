import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import PostPage from './PostPage'

function App() {
  const[showCounter, setShowCounter]=useState(true)
  return (
    <>
    {showCounter && <Counter></Counter>}
    <button onClick={()=>{
      setShowCounter(show => !show)
    }}>Close the Counter</button>
    <PostPage></PostPage>
    
    </>
  )
}

export default App
