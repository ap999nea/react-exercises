import { type ActionDispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FieldType, FormAction } from "../models/form-builder.model";

type Props = {
  dispatch: ActionDispatch<[action: FormAction]>;
};

type TitleForm = {
  titleForm: string;
};

type FieldForm = {
  type: FieldType;
  label: string;
  placeholder: string;
  required: boolean;
};

export const FormBuilder = ({ dispatch }: Props) => {
  const [showTitleForm, setShowTitleForm] = useState(false);
  const [showFieldForm, setShowFieldForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TitleForm>();
  const {
    register: registerField,
    handleSubmit: handleSubmitField,
    formState: { isValid: isValidField },
    reset,
  } = useForm<FieldForm>();

  const onSubmit = (data: TitleForm) => {
    dispatch({
      type: "UPDATE_FORM_TITLE",
      payload: data.titleForm,
    });
    setShowTitleForm(false);
  };

  const onSubmitField = (data: FieldForm) => {
    const { type, label, placeholder, required } = data;

    dispatch({
      type: "ADD_FIELD",
      payload: {
        id: uuid(),
        type,
        label,
        placeholder,
        required,
      },
    });
    reset();
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
          <Button disabled={!isValid} type="submit">
            Save
          </Button>
        </form>
      )}
      <Button onClick={() => setShowFieldForm((prev) => !prev)}>
        Add Field
      </Button>
      {showFieldForm && (
        <form
          onSubmit={handleSubmitField(onSubmitField)}
          className="flex flex-col gap-4 my-8"
        >
          <label className="font-bold" htmlFor="type">
            Input type:
          </label>
          <select id="type" {...registerField("type", { required: true })}>
            <option value="text">Text</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio</option>
          </select>
          <label className="font-bold" htmlFor="label">
            Input label:
          </label>
          <input
            className="border p-2 rounded-md"
            type="text"
            id="type"
            placeholder="Type here..."
            {...registerField("label", { required: true })}
          />
          <label className="font-bold" htmlFor="placeholder">
            Input placeholder:
          </label>
          <input
            className="border p-2 rounded-md"
            type="text"
            id="type"
            placeholder="Type here..."
            {...registerField("placeholder", { required: true })}
          />
          <div className="flex items-center gap-4">
            <label className="font-bold" htmlFor="required">
              Is required:
            </label>
            <input
              className="border p-2 rounded-md"
              type="checkbox"
              id="required"
              {...registerField("required")}
            />
          </div>
          <Button disabled={!isValidField} type="submit">
            Save
          </Button>
        </form>
      )}
    </Card>
  );
};
