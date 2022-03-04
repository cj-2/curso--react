# useEffect

Com esse hook podemos emular o `componentDidUpdate`, `componentWillUnmount` e `componentDidMount`, 
além executar uma ação quando dependencias específicas são modificadas.

Link: https://pt-br.reactjs.org/docs/hooks-effect.html

```jsx
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que a view é atualizada.
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa 1x
  // Quando passado um array de dependencias vazio para useEffect,
  // ele se comporta como um componentDidMount.
  useEffect(() => {
    console.log('componentDidMount');

    // componentWillUnmount - clean
    // É possível tratar o unmount passando uma função de retorno no useEffect.
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  // com dependencia - executa quando a dependencia é modificada
  useEffect(() => {
    console.log('O contador mudou para', counter); // é necessário que seja dependencia.
  }, [counter]);

  return (
    <div className="App">
      <h1>
        C1: {counter} - C2: {counter2}
      </h1>
      <button onClick={() => setCounter((c) => c + 1)}>Adicionar C1</button>
      <button onClick={() => setCounter2((c) => c + 1)}>Adicionar C2</button>
    </div>
  );
}

export default App;
```