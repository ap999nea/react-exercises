import { createSlice } from "@reduxjs/toolkit";

export interface EditorState {
  text: string;
}

const initialState: EditorState = {
  text: "#Hi! \nTry editing me however you like. \nI'm just a simple textarea",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateText: (state, action) => {},
  },
});
