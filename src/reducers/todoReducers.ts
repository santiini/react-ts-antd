/**
 * 利用 createReducer 产生 reducer
 */
import createReducer from './createReducer';
import * as types from './action-types';

import { Action, Todo } from './model';

// 初始化 state
export let initialState = [
  {
    id: 1,
    text: 'todo11',
    completed: true
  },
  {
    id: 2,
    text: 'todo22',
    completed: false
  },
  {
    id: 3,
    text: 'todo33',
    completed: false
  },
  {
    id: 4,
    text: 'todo44',
    completed: true
  },
];

// createReducer 返回函数，相当于 case-functions
const todoReducers = createReducer(initialState, {
  [types.SHOWTODOS](state: Array<Todo>) {
    return state;
  },
  [types.ADDTODO](state: Array<Todo>, action: Action<Todo>) {
    return [action.payload, ...state];
  },
  [types.DELETETODO](state: Array<Todo>, action: Action<Todo>) {
    return state.filter((todo) => todo.id !== action.payload.id);
  },
  [types.UPDATETODO](state: Array<Todo>, action: Action<Todo>) {
    return state.map((todo) => todo.id === action.payload.id ?
      Object.assign({}, todo, {
        text: action.payload,
      }) :
      todo);
  },
  [types.FINDTODO](state: Array<Todo>, action: Action<Todo>) {
    const ret = state.find((todo) => todo.id === action.payload.id);
    return ret ? ret : {};
  }
});

export {todoReducers};