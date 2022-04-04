import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';
import { Posts } from '../../components/Posts';
import { Counter } from '../../components/Counter';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <Counter />
        <Posts />
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
