import { useState } from "react";
function Counter() {
  // Hooks
  // State
  const [counter, setCounter] = useState(0);
  console.log("counter is rendering");

  function increment() {
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log("increment", newCounter);
  }

  function decrement() {
    const newCounter = counter - 1;
    setCounter(newCounter);
    console.log("decrement", newCounter);
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{counter >= 1 && <button onClick={decrement}>-</button>}</span>
      <h2>{counter}</h2>
    </div>
  );
}

export default Counter;
