import { ADD_TODO, REMOVE_TODO } from "./TodoActionTypes";

export function addTodo(text: string) {
  return {
    type: ADD_TODO,
    payload: text
  };
}

export function removeTodo(id: string) {
  return {
    type: REMOVE_TODO,
    payload: id
  };
}
