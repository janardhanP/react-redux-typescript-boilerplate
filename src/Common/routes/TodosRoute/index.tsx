import React from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../stores/TodoStore/TodoActions";

import TodoList from "../../components/TodoList";

interface TodosRouteProps {}

const TodosRoute = () => {
  const dispatch = useDispatch();

  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && addTodo) {
      dispatch(addTodo(e.currentTarget.value));
      e.currentTarget.value = "";
    }
  };

  return (
    <div>
      <input
        autoFocus={true}
        type="text"
        className="form-control"
        placeholder="What needs to be done?"
        onKeyUp={keyHandler}
      />
      <h1>Todoslist</h1>
      <TodoList />
    </div>
  );
};

export default TodosRoute;

// TODO: Setup eslint
