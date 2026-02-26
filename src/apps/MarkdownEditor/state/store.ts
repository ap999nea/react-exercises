import { configureStore } from "@reduxjs/toolkit";
import EditorReducer from "./slice";

export const EditorStore = configureStore({
  reducer: {
    editor: EditorReducer,
  },
});

export type RootState = ReturnType<typeof EditorStore.getState>;

export type AppDispatch = typeof EditorStore.dispatch;
