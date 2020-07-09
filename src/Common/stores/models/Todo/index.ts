import { v4 as uuid } from "uuid";

export interface ITodo {
  id: number;
  text: string;
  checked: boolean;
}

export class TodoModel {
  id = uuid();
  text = "";
  checked = false;
  constructor(text: string) {
    this.text = text;
  }
}
