import { type ActionDispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FormAction } from "../models/form-builder.model";

type Props = {
  dispatch: ActionDispatch<[action: FormAction]>;
};

type TitleForm = {
  titleForm: string;
};

export const FormBuilder = ({ dispatch }: Props) => {
  const [showTitleForm, setShowTitleForm] = useState(false);
  const { register, handleSubmit } = useForm<TitleForm>();

  const onSubmit = (data: TitleForm) => {
    dispatch({
      type: "UPDATE_FORM_TITLE",
      payload: data.titleForm,
    });
    setShowTitleForm(false);
  };

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
      <Button onClick={() => setShowTitleForm((prev) => !prev)}>
        Add Form Title
      </Button>
      {showTitleForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 my-8"
        >
          <label className="font-bold" htmlFor="title-form">
            Form Title:
          </label>
          <input
            className="border p-2 rounded-md"
            type="text"
            id="title-form"
            placeholder="Type here..."
            {...register("titleForm", { required: true })}
          />
          <Button type="submit">Save</Button>
        </form>
      )}
      <Button onClick={addInputText}>Add Field</Button>
    </Card>
  );
};
