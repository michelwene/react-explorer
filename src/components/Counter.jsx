import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function deleteIncrement() {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={deleteIncrement}>
        Delete
      </button>
    </div>
  );
}
