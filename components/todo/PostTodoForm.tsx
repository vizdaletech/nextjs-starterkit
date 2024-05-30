"use client";
import { postData } from "@/utils/api/postData";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { CircularProgress } from "@nextui-org/progress";
import React, { ReactElement, useState } from "react";

const PostTodoForm = () => {
  const [todo, setTodo] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log({ todo });
  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    console.log("Working");
    e.preventDefault();
    const data = await postData("https://jsonplaceholder.typicode.com/todos", {
      title: todo,
    });

    if (data) {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto w-4/12 flex-wrap md:flex-nowrap gap-4"
    >
      <Input
        required
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        label="Todo"
        placeholder="Enter your todo"
      />
      <Button
        className="w-[100px] block ml-auto"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress /> : <>Submit</>}
      </Button>
    </form>
  );
};

export default PostTodoForm;
