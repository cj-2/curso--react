# useCallback

Geralmente utilizados em otimizações para contornar o gasto da execução de toda função sempre que algo é atualizado.

Quando uma função é criada com o `useCallback`, criamos a possibilidade e evitar uma nova renderização daquela função,
e dessa forma evitamos uma nova renderização dos compontentes que a recebe como propriedade caso o componente utilize
o `React.memo`.

`useCallback` recebe uma função e uma lista de dependências que pode ser vazia.

Deve ser usado com moderação e em apenas lugares necessários.

Link: https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback

```jsx
import P from 'prop-types';
import React, { useCallback, useState } from 'react';
import './App.css';

// React.memo é utilizado junto com o useCallback
const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho renderizou?');
  return <button onClick={() => incrementButton(10)}>Adicionar</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  // useCallback recebe uma lista dependencias (no caso vazia) que dita quando 
  // será necessário renderizar a função. Isso evita que o componente que depende 
  // dela não seja renderizado toda vez que função tb é.
  const incrementCounter = useCallback((num) => setCounter((c) => c + num), []);

  console.log('pai renderizou!');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
```

Um artifício para criar um "cache" do componente é utilziar o `React.memo`, fazendo que ele não renderize novamente
caso não tenha nenhuma alteração. Observação: Utilizar somente para otimização, mas não conte como um "bloqueado" de rendereização.

Link: https://pt-br.reactjs.org/docs/react-api.html#reactmemo

```jsx
const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>Adicionar</button>;
});
```