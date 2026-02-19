import { Trash } from "lucide-react";
import { type ActionDispatch, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FormAction, FormState } from "../models/form-builder.model";

type Props = {
  state: FormState;
  dispatch: ActionDispatch<[action: FormAction]>;
};

export const FormPreview = ({ state, dispatch }: Props) => {
  const dragItemIndex = useRef<number | null>(null);
  const dragOverItemIndex = useRef<number | null>(null);

  const handleDragStart = (index: number) => {
    dragItemIndex.current = index;
  };

  const handleDragEnter = (index: number) => {
    dragOverItemIndex.current = index;
  };

  const handleDrop = () => {
    if (dragItemIndex.current === null || dragOverItemIndex.current === null)
      return;

    const newFields = [...state.fields];

    const draggedItem = newFields[dragItemIndex.current];

    newFields.splice(dragItemIndex.current, 1);

    newFields.splice(dragOverItemIndex.current, 0, draggedItem);

    dispatch({
      type: "REORDER_FIELDS",
      payload: newFields,
    });

    dragItemIndex.current = null;
    dragOverItemIndex.current = null;
  };

  const removeField = (id: string) => {
    dispatch({
      type: "REMOVE_FIELD",
      payload: id,
    });
  };

  return (
    <Card className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">Preview</h2>
        <Button
          type="button"
          className="self-end hover:bg-red-600"
          disabled={!state.fields.length && !state.formTitle}
          onClick={() => dispatch({ type: "RESET_FORM" })}
        >
          <Trash />
        </Button>
      </div>
      <h3 className="font-semibold text-xl">
        <code>{state.formTitle ?? "-"}</code>
      </h3>
      <div className="flex flex-col gap-4">
        {state.fields.length > 0 &&
          state.fields.map((item, idx) => {
            const itemIsInput =
              item.type === "text" ||
              item.type === "number" ||
              item.type === "checkbox" ||
              item.type === "radio";
            return (
              <div
                key={item.id}
                className="flex justify-between border border-gray-600 p-4 rounded-md cursor-grab "
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragEnter={() => handleDragEnter(idx)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <div className="flex flex-col gap-4 w-3/4">
                  <label htmlFor={item.id}>
                    {item.label}
                    {item.required ? "*" : ""}
                  </label>
                  {itemIsInput ? (
                    <input
                      className="border border-gray-600 p-2 rounded-lg"
                      type={item.type}
                      key={item.id}
                      name={item.id}
                      placeholder={item.placeholder}
                    />
                  ) : (
                    <select
                      id={item.id}
                      name={item.id}
                      className="border border-gray-600 p-2 rounded-lg"
                    >
                      {item.selectionOptions?.split(",")?.map((option) => (
                        <option key={`${item.id}-${option}`} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <Button
                  type="button"
                  className="self-end hover:bg-red-600"
                  onClick={() => removeField(item.id)}
                >
                  <Trash />
                </Button>
              </div>
            );
          })}
      </div>
    </Card>
  );
};
