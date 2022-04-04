import { useReducer } from 'react';
import P from 'prop-types';

import { PostsContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispach] = useReducer(reducer, data);
  return <PostsContext.Provider value={{ postsState, postsDispach }}>{children}</PostsContext.Provider>;
};

PostsProvider.propTypes = {
  children: P.oneOfType([P.string, P.element, P.node]).isRequired,
};
