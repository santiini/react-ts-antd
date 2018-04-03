/**
 * 拆分 reducers: user
 */
import createReducer from './createReducer';
import * as types from './action-types';

import { Action, User } from './model';

export const initialState = [
  {
    id: 1,
    name: 'sun',
    address: '海淀'
  },
  {
    id: 2,
    name: 'xiao',
    address: '大兴'
  },
  {
    id: 3,
    name: 'tao',
    address: '昌平'
  },
  {
    id: 4,
    name: 'wang',
    address: '洛阳'
  },
];

const userReducers = createReducer(initialState, {
  [types.SHOWUSERS](state: Array<User>, action: Action<User>) {
    return state;
  },
  [types.ADDUSER](state: Array<User>, action: Action<User>) {
    return [action.payload, ...state];
  },
  [types.DELETEUSER](state: Array<User>, action: Action<User>) {
    return state.filter((user) => user.id !== action.payload.id);
  },
  [types.UPDATEUSER](state: Array<User>, action: Action<User>) {
    return state.map((user) => user.id === action.payload.id ?
      Object.assign({}, user, action.payload) :
      user
    );
  },
  [types.FINDTODO](state: Array<User>, action: Action<User>) {
    const ret = state.find((user) => user.id === action.payload.id);
    return ret ? ret : {};
  }
});

export { userReducers };