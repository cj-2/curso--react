import * as types from './types';

export const reducer = (state, action) => {
  console.log(action.type);

  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      return { ...state, counter: state.counter + 1 };
    }

    case types.DECREMENT_COUNTER: {
      return { ...state, counter: state.counter - 1 };
    }
  }

  return {
    ...state,
  };
};
