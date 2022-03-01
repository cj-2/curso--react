Diferente do view que possui uma forma padrão de passar os tipos das propriedades, no React é necessário utilizar uma biblioteca
chama prop-types

Instalando prop-type

    npm i prop-types

Exemplo:

```jsx
import P from "prop-types";
import PostCard from "../PostCard";
import "./styles.css";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {!!posts.length &&
      posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          cover={post.cover}
          body={post.body}
        />
      ))}
  </div>
);

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    })
  ),
};

// Posts.defaultProps = {
//   posts: [],
// };

export default Posts;
```

O `.defaultProps` pode ser subtituido apenas passando o valor padrão dentro no `destructuring` da função de entrada,
ou sejá, a duplicação é desnecessária. 