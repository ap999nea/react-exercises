import { Trash } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import type { Todo } from "@/Todo/TodoApp";

interface Props {
  todo: Todo;
  deleteTodo: () => void;
  toggleTodo: () => void;
}

export const TodoItem = ({
  todo,
  deleteTodo,
  toggleTodo: completeTodo,
}: Props) => {
  return (
    <Card className="flex flex-row justify-between">
      <li className={`${todo.completed ? "line-through" : ""}`}>{todo.task}</li>
      <div className="flex gap-4 items-center">
        <Checkbox checked={todo.completed} onCheckedChange={completeTodo} />
        <button className="cursor-pointer" type="button" onClick={deleteTodo}>
          <Trash />
        </button>
      </div>
    </Card>
  );
};
