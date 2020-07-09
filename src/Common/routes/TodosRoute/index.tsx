import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../../stores/TodoStore/TodoActions";
import { selectTodos } from "../../stores/TodoStore/TodoSelectors";
import { TodoModel } from "../../stores/models/Todo";

const TodosRoute = () => {
  const [text, setText] = useState("");
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const onChange = (event: any) => {
    setText(event.target.value);
  };
  const onClickSubmit = () => {
    dispatch(addTodo(text));
    setText("");
  };

  const renderTodos = () => {
    return todos.map((eachTodo: TodoModel) => {
      return <div key={eachTodo.id}>{eachTodo.text}</div>;
    });
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onClickSubmit}>Submit</button>
      <h1>Todoslist</h1>
      {renderTodos()}
    </div>
  );
};

export default TodosRoute;
