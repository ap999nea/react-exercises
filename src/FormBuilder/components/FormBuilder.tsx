import type { ActionDispatch } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FormAction } from "../models/form-builder.model";

type Props = {
  dispatch: ActionDispatch<[action: FormAction]>;
};

export const FormBuilder = ({ dispatch }: Props) => {
  const addInputText = () => {
    dispatch({
      type: "ADD_FIELD",
      payload: {
        id: "1",
        type: "text",
        label: "Input Text",
        required: false,
        placeholder: "Insert text...",
      },
    });
  };
  return (
    <Card className="w-1/2 flex flex-col gap-6">
      <h2 className="font-semibold text-2xl">Build</h2>
      <Button onClick={addInputText}>Add Input Text</Button>
    </Card>
  );
};
