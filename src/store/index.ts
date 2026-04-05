import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice.ts";
import type {RootState} from "../types/root.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type { RootState };