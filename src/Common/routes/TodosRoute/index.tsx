import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateFilter
} from "../../stores/TodoStore/TodoActions";
import { selectTodos } from "../../stores/TodoStore/TodoSelectors";
import { ITodo } from "../../stores/models/Todo";
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
