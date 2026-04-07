import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {useActions} from "../hooks/useActions.ts";


const UserList: React.FC = () => {
    const {users, loading, error} = useAppSelector(state => state.user);

    const {fetchUsersAction} = useActions();

    useEffect(() => {
        fetchUsersAction();
    }, []);

    if (loading) {
        return <h1>Загрузка, пожалуйста подождите...</h1>
    }

    if (error) {
        return <h1 style={{color: 'red'}}>Произошла ошибка: {error}</h1>
    }
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;