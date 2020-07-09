import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import TodoReducer from "./TodoStore/TodoReducer";
// import RequestingReducer from "./requesting/RequestingReducer";
// import ErrorReducer from "./error/ErrorReducer";
// import ShowsReducer from "./shows/ShowsReducer";
// import ToastsReducer from "./toasts/ToastsReducer";

export default history => {
  const reducerMap = {
    // error: ErrorReducer.reducer,
    // requesting: RequestingReducer.reducer,
    router: connectRouter(history),
    todoStore: TodoReducer
  };

  return combineReducers(reducerMap);
};
