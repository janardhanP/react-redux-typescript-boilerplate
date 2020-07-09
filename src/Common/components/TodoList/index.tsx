import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";

import { ITodo } from "../../stores/models/Todo";
import { deleteTodo, toggleTodo } from "../../stores/TodoStore/TodoActions";
interface TodoListProps {}

export const selectTodoStore = (state: any) => ({
  todos: state.todoStore.todos,
  filter: state.todoStore.filter,
  loading: state.todoStore.loading
});

const TodoList = (props: TodoListProps) => {
  const dispatch = useDispatch();
  const { filter, loading, todos } = useSelector(selectTodoStore);
  const toggleTodoWithDispatch = (todo: ITodo) => {
    dispatch(toggleTodo(todo));
  };
  const deleteTodoWithDispatch = (todo: ITodo) => {
    dispatch(deleteTodo(todo));
  };

  const getTodos = () => {
    switch (filter) {
      case "ACTIVE":
        return todos.filter((todo: ITodo) => !todo.completed);
      case "COMPLETED":
        return todos.filter((todo: ITodo) => todo.completed);
      default:
        return todos;
    }
  };

  const columns = [
    {
      key: "complete",
      width: "10%",
      render: (text: string, record: ITodo) => (
        <input
          type="checkbox"
          defaultChecked={record.completed}
          onClick={() => toggleTodoWithDispatch(record)}
        />
      )
    },
    {
      key: "title",
      title: "Thing to do",
      render: (text: string, record: ITodo) => (
        <span>
          <span style={{ fontWeight: "bold" }}>{record.order}.</span>
          <span className={record.completed ? "completed" : "active"}>
            {record.title}
          </span>
        </span>
      )
    },
    {
      key: "delete",
      width: "10%",
      render: (text: string, record: ITodo) => (
        <span
          style={{ width: "100%", textAlign: "right" }}
          onClick={() => deleteTodoWithDispatch(record)}
        >
          <Button>Delete</Button>
        </span>
      )
    }
  ];

  return (
    <Table
      rowKey={(record: ITodo) => record.id.toString()}
      columns={columns}
      dataSource={getTodos()}
      bordered={true}
      pagination={false}
      loading={loading}
      size="middle"
      footer={() => <div>Footer</div>}
    />
  );
};

export default TodoList;

// TODO: Remove Antd library
