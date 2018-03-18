import AppDispatcher from '../dispatcher/AppDispatcher';
import * as ActionTypes from './ActionTypes';

export const incream = () => {
  AppDispatcher.dispatch({
    type: ActionTypes.INCREAM
  })
}
