import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector.ts";

const UserList: React.FC = () => {
    const {users, loading, error} = useAppSelector(state => state.user);

    return (
        <div>
            
        </div>
    );
};

export default UserList;