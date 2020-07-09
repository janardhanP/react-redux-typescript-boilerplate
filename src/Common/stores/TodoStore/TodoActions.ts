import { Action, ActionCreator } from "redux";
import TodoActionTypes from "./TodoActionTypes";
import { ITodo } from "../models/Todo";
import api from "../../utils/APIUtils";

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

export const addTodoSuccess: ActionCreator<AddTodoAction> = (todo: ITodo) => ({
  type: TodoActionTypes.ADD_TODO_SUCCESS,
  todo
});

export const addTodo = (title: string) => {
  return async (dispatch: any) => {
    const response = await api.add(title);
    dispatch(addTodoSuccess(response.data));
  };
};

export const loadTodosSuccess: ActionCreator<LoadTodosAction> = (
  todos: ITodo[]
) => ({
  type: TodoActionTypes.LOAD_TODOS_SUCCESS,
  todos
});

export const updateLoading: ActionCreator<TodosLoadingAction> = (
  loading: boolean
) => ({
  type: TodoActionTypes.UPDATE_TODOS_LOADING,
  loading
});

export const loadTodos = () => {
  return async (dispatch: any) => {
    dispatch(updateLoading(true));

    const response = await api.fetch();
    dispatch(loadTodosSuccess(response.data));
    dispatch(updateLoading(false));
  };
};

export const deleteTodoSuccess: ActionCreator<DeleteTodoAction> = (
  todo: ITodo
) => ({
  type: TodoActionTypes.DELETE_TODO_SUCCESS,
  todo
});

export const deleteTodo = (todo: ITodo) => {
  return async (dispatch: any) => {
    await api.delete(todo);
    dispatch(deleteTodoSuccess(todo));
  };
};

export const toggleTodoSuccess: ActionCreator<AddTodoAction> = (
  todo: ITodo
) => ({
  type: TodoActionTypes.TOGGLE_TODO_SUCCESS,
  todo
});

export const toggleTodo = (todo: ITodo) => {
  return async (dispatch: any) => {
    const response = await api.update({
      ...todo,
      completed: !todo.completed
    });
    dispatch(toggleTodoSuccess(response.data));
  };
};

export const updateFilter: ActionCreator<UpdateFilterAction> = (
  filter: string
) => ({
  type: TodoActionTypes.UPDATE_FILTER,
  filter
});

export function addTodoSync(text: string) {
  return {
    type: TodoActionTypes.ADD_TODO_SYNC,
    payload: text
  };
}

export function removeTodoSync(id: string) {
  return {
    type: TodoActionTypes.REMOVE_TODO_SYNC,
    payload: id
  };
}

// TODO: Add Dispatch appropriately
