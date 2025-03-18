import React from "react";
import { useTodo } from "../Contexts/TodoContext";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = React.useState("");

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({
      todo,
      completed: false,
    });
    setTodo("");
  };
  return <form action=""></form>;
}
