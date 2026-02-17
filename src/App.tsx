import { useState } from "react";
import { Card } from "./components/ui/card";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      todo: "Learn React",
      completed: false,
    },
  ]);

  const addTodo = () => {
    const newTodo: Todo = {
      id: Math.random(),
      todo,
      completed: false,
    };
    setTodos((todos) => [...todos, newTodo]);
    setTodo("");
  };

  return (
    <div className="flex flex-col items-center my-6 gap-6">
      <h1 className="text-3xl font-bold">Simple Todo App</h1>
      <Card className="w-5/6 md:w-4/6">
        <form className="flex flex-col sm:flex-row justify-between mx-6 gap-6 sm:gap-0">
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
          <button
            className="border-1 p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow"
            type="button"
            onClick={addTodo}
          >
            Add to list
          </button>
        </form>
      </Card>
      <ul className="list-decimal w-5/6 md:w-4/6 list-inside">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};
