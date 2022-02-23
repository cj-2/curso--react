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

Como no Vue.js, o React pode ser inserido em um site existente, sem a necessidade de ser toda a base do projeto.

Os componentes React também podem ser criados por classes, baseados em uma classe chamada Component.

```jsx
import { Component } from "react";

class App extends Component {
    render() {
        return <span>Teste de Componente</span>;
    }
}

export default App;
```

Exemplo de componente mais complexo utilizando classes.

```jsx
class App extends Component {
    constructor(props) {
        super(props);

        // Para utilizar o "this" dentro de métodos "normais" é necessario dar bind.
        this.handlePClick = this.handlePClick.bind(this);

        this.state = {
            name: "Carlos Roberto",
            counter: 0,
        };
    }

    handlePClick() {
        // Para modificar o state, utiliza this.setState()
        this.setState({ name: "Juninho" });
    }

    // Arrow functions iliminam a necessidade do bind.
    handleAClick = (event) => {
        event.preventDefault();
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
    };

    render() {
        const { name, counter } = this.state;
        return (
            <div className="App">
                <p onClick={this.handlePClick}>
                    {name} - {counter}
                </p>
                <a
                    onClick={this.handleAClick}
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                >
                    Clique aqui!
                </a>
            </div>
        );
    }
}
```

Reduções que podem ser feitas na criação do componente anterior:

```jsx
class App extends Component {
    // Definindo o state de fora, sem a necessidade do constructor()
    state = {
        name: "Carlos Roberto",
        counter: 0,
    };

    // Utilizando apenas arrow functions.
    handlePClick = () => {
        this.setState({ name: "Juninho" });
    };

    handleAClick = (event) => {
        event.preventDefault();
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
    };

    render() {
        const { name, counter } = this.state;
        return <span onClick={this.handleAClick}> Exemplo {name} - {counter} </span>;
    }
}

export default App;
```

Um padrão de nomeação seguindo no React.js é chamar os métodos que lidam de tarefas dentro de
componentes de handle. Ex: handleTasks

Para criar um "if" no React como é feito no Vue.js com "v-if" é necessário utilizar
um artifício do javasctip chamado operadores de curto circuito.

```jsx
    // case true
    {!!searchValue && (
        <h1>Search value: {searchValue}</h1>
    )}

    // case false
    {!searchValue && (
        <div className="button-container">
            <Button
                text="Load more posts"
                actionClick={this.loadMorePosts}
                disabled={noMorePosts}
            />
        </div>
    )}
```

Quando um componente é re-renderizado, todos os seus filhos também são.

Documentação dos SyntheticEvent https://pt-br.reactjs.org/docs/events.html