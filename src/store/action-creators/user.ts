import {fetchUsers, fetchUsersError, fetchUsersSuccess} from "../slices/userSlice.ts";
import type {AppDispatch} from "../index.ts";
import * as axios from "axios";

export const fetchUsersAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchUsers(null));

            const response = await axios.get('https://jsonplaceholder.typicode.com/users');

            dispatch(fetchUsersSuccess(response.data));
        } catch (e) {
            dispatch(fetchUsersError("Произошла ошибка при загрузке пользователей"));
        }
    }
}