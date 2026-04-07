import type {UserState} from "./user.ts";
import type {TodoState} from "./todo.ts";

export interface RootState {
    user: UserState;
    todo: TodoState;
}