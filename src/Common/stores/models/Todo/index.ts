import { v4 as uuid } from "uuid";

export interface ITodo {
  title: string;
  order: number;
  id: number;
  completed: boolean;
  url: string;
}

export class TodoModel {
  id = uuid();
  title = "";
  completed = false;
  constructor(title: string) {
    this.title = title;
  }
}
