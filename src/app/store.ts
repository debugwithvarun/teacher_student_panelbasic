import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from "./features/course/courseSlice";

export const store = configureStore({
  reducer: {
    course: StoreReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
