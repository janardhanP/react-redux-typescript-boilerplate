import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../stores/TodoStore/TodoStoreActions";

const TodosRoute = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onChange = (event: any) => {
    setText(event.target.value);
  };
  const onClickSubmit = () => {
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onClickSubmit}>Submit</button>
    </div>
  );
};

export default TodosRoute;
