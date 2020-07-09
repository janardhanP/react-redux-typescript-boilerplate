import { Action } from "redux";
import { ITodo } from "../models/Todo";

export interface TodosLoadingAction extends Action {
  loading: boolean;
}

export interface AddTodoAction extends Action {
  todo: ITodo;
}

export interface LoadTodosAction extends Action {
  todos: ITodo[];
}

export interface ToggleTodoAction extends Action {
  todo: ITodo;
}

export interface DeleteTodoAction extends Action {
  todo: ITodo;
}

export interface UpdateFilterAction extends Action {
  filter: string;
}

export type TodoActions =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction
  | UpdateFilterAction
  | LoadTodosAction
  | TodosLoadingAction;

enum TodoActionTypeConstants {
  ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS",
  DELETE_TODO_SUCCESS = "DELETE_TODO",
  TOGGLE_TODO_SUCCESS = "TOGGLE_TODO_SUCCESS",
  UPDATE_FILTER = "UPDATE_FILTER",
  LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS",
  UPDATE_TODOS_LOADING = "UPDATE_TODOS_LOADING",
  ADD_TODO_SYNC = "ADD_TODO_SYNC",
  REMOVE_TODO_SYNC = "REMOVE_TODO_SYNC",
}

export default TodoActionTypeConstants;
