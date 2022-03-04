# useState

Link: https://pt-br.reactjs.org/docs/hooks-state.html

```jsx
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [reverse, setReverse] = useState(false); // hook de state, retorna a referencia e um set
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1); // o primeiro parâmetro da função é o valor da constante setada.
    setReverse((preveReverse) => !preveReverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {counter}</h1>
        <button type="button" onClick={handleClick}>
          Reverte!
        </button>
      </header>
    </div>
  );
}

export default App;
```