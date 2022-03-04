# useMemo

O hook é bem parecido com o `useCallback`, porem funcionando apenas para componentes, fazendo algo algo bem parecido com 
o `React.memo`. Também requere um array de rependencias.

Deve ser usado com moderação e em apenas lugares necessários.

Link: https://pt-br.reactjs.org/docs/hooks-reference.html#usememo

```jsx
function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => setCounter((c) => c + num), []);

  // Criando cash de <Button />
  const btn = useMemo(() => <Button incrementButton={incrementCounter} />, [incrementCounter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      {btn}
    </div>
  );
}
```

Um exemplo mais completo em que ao utilizar o input não devemos renderizar novamento os posts todas as vezes.

```jsx
const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({ id: P.number, title: P.string, body: P.string }),
};

function App() {
  console.log('pai renderizou');

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // mount
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1>Oi!</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
        {useMemo(() => {
          console.log('o filho renderizou');
          return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />);
        }, [posts])}

        {posts.length <= 0 && <p>Nenhum post carregado.</p>}
      </div>
    </div>
  );
}

export default App;
```