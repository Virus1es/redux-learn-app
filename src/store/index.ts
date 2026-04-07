import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice.ts";
import todoReducer from "./slices/todoSlice.ts";
import type {RootState} from "../types/root.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        todo: todoReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type { RootState };