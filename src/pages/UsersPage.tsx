import React from "react";
import {IUser} from "../types/types";
import UserItem from "../components/UserItem";
import List from "../components/List";
import {useHistory} from 'react-router-dom';
import {observer} from "mobx-react";

import UsersStore from "../store/UsersStore"

const store = new UsersStore();

const UsersPage = observer(   () => {
    const history = useHistory();
    return (
        <div>
            <button onClick={() => store.fetchUsers()}>Fetch Users</button>
            <button onClick={() => store.fetchUsers()}>Add User</button>
            <List
                items={store.Users}
                renderItem={(user: IUser) => <UserItem onClick={(user)=>history.push('/users/'+user.id)} user={user} key={user.id}/>}
            />
        </div>
    );
});

export default UsersPage;
