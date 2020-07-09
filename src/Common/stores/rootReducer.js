import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import TodoReducer from "./TodoStore/TodoReducer";

export default history => {
  const reducerMap = {
    router: connectRouter(history),
    todoStore: TodoReducer
  };

  return combineReducers(reducerMap);
};
