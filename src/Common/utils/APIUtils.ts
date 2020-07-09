import axios from "axios";
import { ITodo } from "../stores/models/Todo";

const baseUrl = "https://todobackend.apphb.com/todo-backend";

export default {
  async add(title: string) {
    return await axios.post<ITodo>(baseUrl, {
      title,
      completed: false
    });
  },
  async fetch() {
    return await axios.get<ITodo[]>(baseUrl);
  },
  async delete(todo: ITodo) {
    await axios.delete(todo.url);
  },
  async update(todo: ITodo) {
    return await axios.patch<ITodo>(todo.url, todo);
  }
};

// TODO: Refactor to actual APIUtils - networkcallwithAPISauce
