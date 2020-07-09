import React from "react";
import { useDispatch } from "react-redux";

import { addTodo, addTodoSuccess } from "../../stores/TodoStore/TodoActions";

import TodoList from "../../components/TodoList";

interface TodosRouteProps {}

let id = 1;
const TodosRoute = () => {
  const dispatch = useDispatch();

  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && addTodo) {
      const todoObject = {
        id: id,
        order: id,
        title: e.currentTarget.value,
        url: "http://todobackend.apphb.com/todo-backend/todo/" + id,
        completed: false,
      };
      dispatch(addTodoSuccess(todoObject));
      id++;
      //dispatch(addTodo(e.currentTarget.value));
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
