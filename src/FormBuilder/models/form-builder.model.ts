export type FieldType = "text" | "checkbox" | "radio" | "number" | "select";

export interface BaseField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
  placeholder: string;
  selectionOptions?: string;
}

export interface FormState {
  formTitle: string | null;
  fields: BaseField[];
}

export type FormAction =
  | { type: "UPDATE_FORM_TITLE"; payload: string }
  | { type: "ADD_FIELD"; payload: BaseField }
  | { type: "REMOVE_FIELD"; payload: string }
  | {
      type: "UPDATE_FIELD";
      payload: {
        id: string;
        updates: Partial<BaseField>;
      };
    }
  | { type: "REORDER_FIELDS"; payload: BaseField[] };
