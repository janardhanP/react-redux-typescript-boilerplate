import { ActionCreator } from "redux";
import TodoActionTypeConstants, {
  AddTodoAction,
  DeleteTodoAction,
  UpdateFilterAction,
  LoadTodosAction,
  TodosLoadingAction,
} from "./TodoActionTypes";
import { ITodo } from "../models/Todo";
import api from "../../utils/APIUtils";

export const addTodoSuccess: ActionCreator<AddTodoAction> = (todo: ITodo) => ({
  type: TodoActionTypeConstants.ADD_TODO_SUCCESS,
  todo,
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
  type: TodoActionTypeConstants.LOAD_TODOS_SUCCESS,
  todos,
});

export const updateLoading: ActionCreator<TodosLoadingAction> = (
  loading: boolean
) => ({
  type: TodoActionTypeConstants.UPDATE_TODOS_LOADING,
  loading,
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
  type: TodoActionTypeConstants.DELETE_TODO_SUCCESS,
  todo,
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
  type: TodoActionTypeConstants.TOGGLE_TODO_SUCCESS,
  todo,
});

export const toggleTodo = (todo: ITodo) => {
  return async (dispatch: any) => {
    const response = await api.update({
      ...todo,
      completed: !todo.completed,
    });
    dispatch(toggleTodoSuccess(response.data));
  };
};

export const updateFilter: ActionCreator<UpdateFilterAction> = (
  filter: string
) => ({
  type: TodoActionTypeConstants.UPDATE_FILTER,
  filter,
});

export function addTodoSync(text: string) {
  return {
    type: TodoActionTypeConstants.ADD_TODO_SYNC,
    payload: text,
  };
}

export function removeTodoSync(id: string) {
  return {
    type: TodoActionTypeConstants.REMOVE_TODO_SYNC,
    payload: id,
  };
}

// TODO: Add Dispatch appropriately
