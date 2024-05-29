import { TodoProp } from "@/types/props";
import React from "react";

const TodoItem = ({ todo }: { todo: TodoProp }) => {
  return <p>{todo.title}</p>;
};

export default TodoItem;
