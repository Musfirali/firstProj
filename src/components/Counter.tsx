import { useEffect, useState } from "react";

const Counter = () => {
  // let counterValue = 10;
  const [counterValue, setCounterValue] = useState(10);
  const [isRunning, setisRunning] = useState(true);
  var [timer, setTimer]=useState(0)

  const increment = () => {
    if(isRunning==true){
  timer = setInterval(()=>{
      setCounterValue(prevCounterVal =>{
        const newCounterVal = prevCounterVal+2
        console.log(counterValue)
        return newCounterVal;
      } );
    
    }, 100)
  }
  return timer;
  } 
  
  useEffect(()=>{
   const newtime = increment();
    setTimer(newtime)

   return()=>{
    clearInterval(timer)
   }
}, [])

  const decrement = () => {
    setCounterValue(counterValue - 1);
  }
  const reset = () => {
    setisRunning(false)
    clearInterval(timer)
    setCounterValue(timer);
  }
  return <section className="mb-10 flex flex-col">
    <h2 className="text-2xl">Count is</h2>
    <p className="text-xl">{counterValue}</p>
    <div className="flex gap-4 mb-4 justify-center">
      <button onClick={decrement}>- Decrement</button>
      <button onClick={increment}>+ Increment</button>
    </div>
    <div className="flex justify-center">
      <button onClick={reset}>Reset</button>
    </div>
  </section>
}

export default Counter;