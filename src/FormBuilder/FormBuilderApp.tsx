import { useReducer } from "react";
import { FormBuilder } from "./components/FormBuilder";
import { FormPreview } from "./components/FormPreview";
import type { FormAction, FormState } from "./models/form-builder.model";

const reducerState: FormState = {
  formTitle: null,
  fields: [],
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "ADD_FIELD":
      return {
        ...state,
        fields: [...state.fields, action.payload],
      };

    case "REMOVE_FIELD":
      return {
        ...state,
        fields: state.fields.filter((field) => field.id !== action.payload),
      };
    case "UPDATE_FORM_TITLE":
      return {
        ...state,
        formTitle: action.payload,
      };
    case "REORDER_FIELDS":
      return {
        ...state,
        fields: action.payload,
      };

    default:
      return state;
  }
};

export const FormBuilderApp = () => {
  const [state, dispatch] = useReducer(formReducer, reducerState);

  return (
    <div className="flex flex-col gap-6 w-5/6 md:w-4/6">
      <h1 className="text-3xl font-bold">Form Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormBuilder dispatch={dispatch} />
        <FormPreview state={state} dispatch={dispatch} />
      </div>
    </div>
  );
};
