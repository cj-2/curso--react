O useReducer é uma forma mais simples de tatar com lógicas que envolvem vários sub-valores. 
Parecido com o Redux (ou Vuex por exemplo no Vue.js).

https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer

Ele disponibiliza um método chamado dispach que torna possivel emitir ações 
para o reducer contendo um objeto com um "type", que pode ser verificado dentro da `função
reducer` passada para o useReducer. Ex:

```jsx
import { useReducer } from 'react';

const globalState = {
  title: 'O título daqui!',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'mudar':
      return { ...state, title: 'O título mudou em ' + action.payload };
    case 'inverter':
      return { ...state, title: state.title.split('').reverse().join('') };
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);

  const { title } = state;

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => dispatch({ type: 'mudar', payload: new Date().toLocaleString('pt-BR') })}>
        Mudar Título
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverter Título</button>
    </div>
  );
}

export default App;
```