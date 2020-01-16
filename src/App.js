import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Your Counter is : {count}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter} disabled={count === 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
}
export default App;
