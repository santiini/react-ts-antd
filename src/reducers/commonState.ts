/**
 * 公共变量的声明
 */
import { Action } from './model';

const initialState = {
  name: 'santiiny',
  address: '海淀',
  date: '2018-3-28',
  uri: '/test',
};

export default (state = initialState, action: Action<any>) => {
  return state;
};