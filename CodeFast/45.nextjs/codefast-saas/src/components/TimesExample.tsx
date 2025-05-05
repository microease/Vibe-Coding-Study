"use client";
import { useState } from "react";

export default function Example() {
  // 修改这里

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button onClick={increment} className="btn btn-primary">
          Increment
        </button>
        <button onClick={decrement} className="btn btn-secondary">
          Decrement
        </button>
      </div>
      <div className="mt-4">
        <p className="text-lg">Current Count: {count}</p>
      </div>
    </div>
  );
}
