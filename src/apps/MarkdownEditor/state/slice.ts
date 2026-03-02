import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface EditorState {
  text: string;
}

const initialState: EditorState = {
  text: "Hi! I'm just a simple textarea. Try editing me however you like.",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    eraseText: (state) => {
      state.text = "";
    },
  },
});

export const { updateText, eraseText } = editorSlice.actions;
export default editorSlice.reducer;
