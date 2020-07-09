import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";

import { ITodo } from "../../stores/models/Todo";
import {
  deleteTodo,
  toggleTodo,
  updateFilter
} from "../../stores/TodoStore/TodoActions";
import TodoFooter from "../TodoFooter";

interface TodoListProps {}

export const getTodoListProps = (state: any) => ({
  todos: state.todoStore.todos,
  filter: state.todoStore.filter,
  loading: state.todoStore.loading
});

const TodoList = (props: TodoListProps) => {
  const dispatch = useDispatch();
  const { filter, loading, todos } = useSelector(getTodoListProps);
  const toggleTodoWithDispatch = (todo: ITodo) => {
    dispatch(toggleTodo(todo));
  };
  const deleteTodoWithDispatch = (todo: ITodo) => {
    dispatch(deleteTodo(todo));
  };
  const updateFilterWithDispatch = (todo: ITodo) => {
    dispatch(updateFilter(todo));
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
      footer={() => (
        <TodoFooter
          todos={todos}
          currentFilter={filter}
          updateFilter={updateFilterWithDispatch}
        />
      )}
    />
  );
};

export default TodoList;

// TODO: Remove Antd library
