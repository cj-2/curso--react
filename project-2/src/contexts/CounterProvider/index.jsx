import { useReducer } from 'react';
import P from 'prop-types';

import { CounterContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispach] = useReducer(reducer, data);
  return <CounterContext.Provider value={{ counterState, counterDispach }}>{children}</CounterContext.Provider>;
};

CounterProvider.propTypes = {
  children: P.oneOfType([P.string, P.element, P.node]).isRequired,
};
