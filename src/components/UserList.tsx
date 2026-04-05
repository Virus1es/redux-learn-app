import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector.ts";

const UserList: React.FC = () => {
    const state = useAppSelector(state => state.user);
    console.log(state);

    return (
        <div>
            
        </div>
    );
};

export default UserList;