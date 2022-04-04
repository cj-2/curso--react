import * as types from './types';

export const incrementCounter = async (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER });
};

export const decrementCounter = async (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER });
};
