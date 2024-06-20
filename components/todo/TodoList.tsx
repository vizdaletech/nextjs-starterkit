import { fetchData } from "@/utils/api/fetchData";
import React, { Suspense } from "react";
import TodoItem from "./TodoItem";
import { TodoProp } from "@/types/props";
import { CircularProgress } from "@nextui-org/progress";

const TodoList:any = async () => {
  const todos = await fetchData("https://jsonplaceholder.typicode.com/todos");
  console.log({todos})
  return (
    <Suspense fallback={<CircularProgress />}>
      <div>
        {todos?.map((todo: TodoProp) => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    </Suspense>
  );
};

export default TodoList;
