export type FieldType = "text" | "select" | "checkbox" | "radio";

export interface BaseField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
}

export interface TextField extends BaseField {
  type: "text";
  placeholder: string;
}

export interface SelectField extends BaseField {
  type: "select";
  options: string[];
}

export interface CheckboxField extends BaseField {
  type: "checkbox";
}

export interface RadioField extends BaseField {
  type: "radio";
  options: string[];
}

export type FormField = TextField | SelectField | CheckboxField | RadioField;

export interface FormState {
  formTitle: string | null;
  fields: FormField[];
}

export type FormAction =
  | { type: "UPDATE_FORM_TITLE"; payload: string }
  | { type: "ADD_FIELD"; payload: FormField }
  | { type: "REMOVE_FIELD"; payload: string }
  | {
      type: "UPDATE_FIELD";
      payload: {
        id: string;
        updates: Partial<FormField>;
      };
    };
