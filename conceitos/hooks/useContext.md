# useContext e createContext

Como o `useContext` conseguimos utilizar um estado global criado um `createContext`.

Para acessar o contexto é necessario que os componentes estejam envolvidos pela tag `<GlobalContext.Provider>`.

Link: https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext


```jsx
const GlobalContext = createContext();

const globalState = {
  title: 'O título daqui!',
  body: 'Sou um body...',
  counter: 0,
};

function App() {
  return (
    <GlobalContext.Provider value={globalState}>
      ...
    </GlobalContext.Provider>
  );
}

```

Exemplo mais completo:

```jsx
import { useContext, useState, createContext } from 'react';

const globalState = {
  title: 'O título daqui!',
  body: 'Sou um body...',
  counter: 0,
};

const GlobalContext = createContext();

// eslint-disable-next-line
const Div = () => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const {
    contextState: { title, counter },
  } = useContext(GlobalContext);

  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

// eslint-disable-next-line
const P = () => {
  const {
    contextState: { body },
    setContextState,
  } = useContext(GlobalContext);

  const incremmentCounter = () => {
    setContextState((c) => ({ ...c, counter: c.counter + 1 }));
  };

  return <p onClick={incremmentCounter}>{body}</p>;
};

function App() {
  // exemplo de utilização, porém não é a forma mais indicada.
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
```

