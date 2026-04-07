import type {AppDispatch} from "../index.ts";
import axios from "axios";
import {fetchTodos, fetchTodosError, fetchTodosSuccess, setTodoPage} from "../slices/todoSlice.ts";

export const fetchTodosAction = (page = 1, limit = 10) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchTodos(null));

            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);

            dispatch(fetchTodosSuccess(response.data));
        } catch (e) {
            dispatch(fetchTodosError("Произошла ошибка при загрузке списка задач"));
        }
    }
}

export function setTodoPageAction(page: number) {
    return setTodoPage(page);
}