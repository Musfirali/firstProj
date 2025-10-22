import { Button } from "@mui/material";

const Counter = () => {
  let counterValue = 10;

  const increment = () => {
    counterValue++;
  } 
  
  const decrement = () => {
    counterValue--;

  }
  const reset = () => {
    counterValue = 0
  }
  return <section className="mb-10 flex flex-col">
    <h2 className="text-2xl">Count is</h2>
    <p className="text-xl">{counterValue}</p>
    <div className="flex gap-4 mb-4 justify-center">
      <Button onClick={decrement}>- Decrement</Button>
      <Button onClick={increment}>+ Increment</Button>
    </div>
    <div className="flex justify-center">
      <Button onClick={reset}>Reset</Button>
    </div>
  </section>
}

export default Counter;