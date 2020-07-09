import { TodoModel } from "../models/Todo";
import * as ActionTypes from "./ActionTypes";

import { createReducer } from "../../utils/ReducerUtils";

// interface ITodoStore {
//   todos: TodoModel[];
//   getTodosAPIStatus: number;
//   getTodosAPIError: any;
// }

// TODO: Need to write error types

const initialState = {
  todos: [],
  getTodosAPIStatus: 0,
  getTodosAPIError: null
};

export const TodoReducer = createReducer(initialState, {
  [ActionTypes.ADD_TODO]: (state, action) => {
    console.log("state", state);
    const todo = new TodoModel(action.payload);
    console.log("todo", todo);

    const newTodosState = [...state.todos, todo];

    return {
      ...state,
      todos: newTodosState
    };
  }
});

export default TodoReducer;
