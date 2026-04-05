import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {UserState} from "../../types/user.ts";


const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUsers(state, action: PayloadAction<null>): UserState {
            return {
                loading: true,
                error: null,
                users: []
            };
        },
        fetchUsersSuccess(state, action: PayloadAction<any[]>): UserState {
            return {
                loading: false,
                error: null,
                users: action.payload
            };
        },
        fetchUsersError(state, action: PayloadAction<string>): UserState {
            return {
                loading: false,
                error: action.payload,
                users: []
            };
        },
    }
});

export const {
    fetchUsers,
    fetchUsersSuccess,
    fetchUsersError,
} = userSlice.actions;
export default userSlice.reducer;