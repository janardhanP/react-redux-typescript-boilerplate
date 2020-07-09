import {
  TodoActions,
  AddTodoAction,
  DeleteTodoAction,
  ToggleTodoAction,
  UpdateFilterAction,
  LoadTodosAction,
  TodosLoadingAction,
} from "./TodoActionTypes";

import { ITodo } from "../models/Todo";
import TodoActionTypeConstants from "./TodoActionTypes";

export interface ITodoStore {
  filter: string;
  todosLoading: boolean;
  todos: ITodo[];
}

const initialState = {
  todos: [],
  todosLoading: false,
  filter: "ACTIVE",
};

export const TodoReducer = (
  state: ITodoStore = initialState,
  action: TodoActions
): ITodoStore => {
  switch (action.type) {
    case TodoActionTypeConstants.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, (action as AddTodoAction).todo],
      };

    case TodoActionTypeConstants.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(
          (t) => (action as DeleteTodoAction).todo.id !== t.id
        ),
      };

    case TodoActionTypeConstants.UPDATE_TODOS_LOADING:
      return {
        ...state,
        todosLoading: (action as TodosLoadingAction).loading,
      };

    case TodoActionTypeConstants.TOGGLE_TODO_SUCCESS:
      const todo = (action as ToggleTodoAction).todo;

      return {
        ...state,
        todos: state.todos.map((t) => (todo.id === t.id ? todo : t)),
      };

    case TodoActionTypeConstants.UPDATE_FILTER:
      return {
        ...state,
        filter: (action as UpdateFilterAction).filter,
      };

    case TodoActionTypeConstants.LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: (action as LoadTodosAction).todos,
      };

    default:
      return state;
  }
};

export default TodoReducer;

// TODO: Need to use createReducer syntax to remove switch cases
// TODO: Need to change to getTodosAPIStatus, getTodosAPIError
// TODO: ProposalStage: Need to use Todo defined in models for creation of todo instance
