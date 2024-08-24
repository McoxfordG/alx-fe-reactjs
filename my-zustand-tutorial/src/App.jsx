import React from 'react'
import useStore from './Store';

function App() {
  const count = useStore((state) => state.count);
  const incrementAsync = useStore((state) => state.incrementAsync);
  const decrement = useStore((state) => state.decrement);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementAsync}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App