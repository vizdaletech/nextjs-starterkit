"use client"
import { TodoProp } from "@/types/props";
import React from "react";

const TodoItem = ({ todo }: { todo: TodoProp }) => {
  return <p className="text-black">{todo.title}</p>;
};

export default TodoItem;
