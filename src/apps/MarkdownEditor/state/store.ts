import { configureStore } from "@reduxjs/toolkit";

export const EditorStore = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof EditorStore.getState>;

export type AppDispatch = typeof EditorStore.dispatch;
