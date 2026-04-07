import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {fetchTodosAction} from "../store/action-creators/todo.ts";

const TodoList: React.FC= () => {
    const {
        page,
        error,
        todos,
        loading,
        limit
    } = useAppSelector(state => state.todo);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodosAction(page, limit) as any);
    }, []);


    if (loading) {
        return <h1>Загрузка, пожалуйста подождите...</h1>
    }

    if (error) {
        return <h1 style={{color: 'red'}}>Произошла ошибка: {error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id}. {todo.name}</div>
            )}
        </div>
    );
};

export default TodoList;