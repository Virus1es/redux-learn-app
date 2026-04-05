import React from 'react';
import {useSelector} from "react-redux";
import type {RootState} from "../types/root.ts";

const UserList: React.FC = () => {
    const state = useSelector.withTypes<RootState>()(state => state.user);
    console.log(state);

    return (
        <div>
            
        </div>
    );
};

export default UserList;