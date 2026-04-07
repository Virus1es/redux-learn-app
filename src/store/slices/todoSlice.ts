import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {TodoState} from "../../types/todo.ts";
import type {UserState} from "../../types/user.ts";


const initialState: TodoState = {
    todos: [],
    page: 1,
    error: null,
    loading: false,
    limit: 10,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        fetchTodos(state: TodoState, action: PayloadAction<null>): TodoState {
            return {
                ...state,
                loading: true,
            };
        },
        fetchTodosSuccess(state: TodoState, action: PayloadAction<any[]>): TodoState {
            return {
                ...state,
                loading: false,
                todos: action.payload,
            };
        },
        fetchTodosError(state: TodoState, action: PayloadAction<string>): TodoState {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        },
        setTodoPage(state: TodoState, action: PayloadAction<number>): TodoState {
            return {
                ...state,
                page: action.payload,
            };
        },
    },
});

export const {

} = todoSlice.actions;
export default todoSlice.reducer;