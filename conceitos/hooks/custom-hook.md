# Exemplo de Hook Personalizado

```jsx
import { useState, useEffect, useRef } from 'react';

// useMyHook.js
export const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

// App.jsx
function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h2>Delay: {delay}</h2>
      <button onClick={() => setDelay((d) => d + incrementor)}>+ {incrementor}</button>
      <button onClick={() => setDelay((d) => d - incrementor)}>- {incrementor}</button>
      <input type="text" name="" id="" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))} />
    </div>
  );
}

export default App;
```