Criando um projeto na mesma pasta.

    npx create-react-app .

O código HTML dos componentes são exportados de uma função com a letra maiúscula (que remete 
a um componente), dentro do return escopado por ( ... )

```jsx
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
```

Dentro do JSX, o class="" do html é chamado de className="", por causa da palavra 
reservda do JavaScript.

     <img src={logo} className="App-logo" alt="logo" />

Ao contrário do vue, quando referenciamos uma variavel dentro de um return, 
não é necessário o : nem o "", e sim o escopo do {}. Ex:

    // Vue.js
    <img :src="logo" class="App-logo" alt="logo" />

    // React
     <img src={logo} className="App-logo" alt="logo" />

Diferente do Vue.js, para adicionar alguma função, variável ou cálculo no HTML,
é utilziado { 1 + 1 }, e não como no Vue.js {{ 1 + 1 }}

Como no Vue.js 2, o React só aceita a exportação de um elemento pai no retorno do componente.

Para ter a possibilidade de ter mais de um elemento root, exite um artifício chamado React Fragment <>,
que também pode ser usado com: <React.Fragment> </React.Fragment>

```jsx
class Columns extends React.Component {
    render() {
        return (
        <>
            <td>Hello</td>
            <td>World</td>
        </>
        );
    }
}
```

É possível servir o build de um projeto react com a extensão do VSCode Live Server.