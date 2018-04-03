export interface Action<T> {
  type: string;
  payload: T;
}

export interface Todo {
  id: number;
  text: string;
  completed?: boolean;
}

export interface User {
  id: number;
  name: string;
  address: string;
}
