
# Arrays

Exemplo básico da iteração de uma lista de posts.

```jsx
import { Component, Fragment } from "react";

class App extends Component {
    state = {
        posts: [
            { id: 1, title: "Título 1", body: "Corpo do post 1" },
            { id: 2, title: "Título 2", body: "Corpo do post 2" },
            { id: 3, title: "Título 3", body: "Corpo do post 3" },
            { id: 4, title: "Título 4", body: "Corpo do post 4" },
        ],
    };

    render() {
        const { posts } = this.state;
        return (
            <div className="App">
                {posts.map((post) => (
                    <Fragment key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </Fragment>
                ))}
            </div>
        );
    }
}

export default App;
```
