import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { incrementCounter, decrementCounter } from '../../contexts/CounterProvider/actions';

export const Counter = () => {
  const { counterState, counterDispach } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => decrementCounter(counterDispach)}>-</button>
      <span> Counter {counterState.counter} </span>
      <button onClick={() => incrementCounter(counterDispach)}>+</button>
    </>
  );
};
