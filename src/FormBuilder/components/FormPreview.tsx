import { type ActionDispatch, useRef } from "react";
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

  return (
    <Card className="w-1/2 flex flex-col gap-6">
      <h2 className="font-semibold text-2xl">Preview</h2>
      <h3 className="font-semibold text-xl">{state.formTitle ?? "-"}</h3>
      <div className="flex flex-col gap-4">
        {state.fields.length > 0 &&
          state.fields.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="border border-gray-600 p-2 rounded-md cursor-grab flex flex-col gap-4"
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragEnter={() => handleDragEnter(idx)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <label htmlFor={item.id}>{item.label}</label>
                <input
                  type={item.type}
                  key={item.id}
                  name={item.id}
                  placeholder={item.placeholder}
                />
              </div>
            );
          })}
      </div>
    </Card>
  );
};
