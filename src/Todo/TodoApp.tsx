import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../components/ui/card";
import { TodoItem } from "./components/TodoItem/TodoItem";

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export const TodoApp = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      task: "Learn React",
      completed: false,
    },
    {
      id: 2,
      task: "Learn Angular",
      completed: false,
    },
    {
      id: 3,
      task: "Learn Javascript",
      completed: false,
    },
    {
      id: 4,
      task: "Make Money",
      completed: false,
    },
  ]);

  const addTodo = () => {
    const newTodo: Todo = {
      id: Math.random(),
      task: todo,
      completed: false,
    };
    setTodos((todos) => [...todos, newTodo]);
    setTodo("");
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Simple Todo App</h1>
      <Card className="">
        <form className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0">
          <div className="flex gap-4 items-center content-between justify-between">
            <label className="font-bold" htmlFor="todo">
              Todo:
            </label>
            <input
              className="border-1 p-2 rounded-md"
              type="text"
              id="todo"
              name="todo"
              placeholder="Type here..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={todo.length === 0} onClick={addTodo}>
            Add to list
          </Button>
        </form>
      </Card>
      <ul className="list-decimal list-inside flex flex-col gap-6">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};
