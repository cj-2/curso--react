import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';

export const Posts = () => {
  const isMounted = useRef(true);
  const { postsState, postsDispach } = useContext(PostsContext);

  console.log(isMounted.current);

  useEffect(() => {
    loadPosts(postsDispach).then((dispatch) => {
      if (isMounted.current) dispatch();
    });

    return () => {
      isMounted.current = false;
      console.log(isMounted.current);
    };
  }, [postsDispach]);

  return (
    <div>
      <h1>Posts</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando Posts...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
