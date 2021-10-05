import React, {FC} from "react";
import {IUser} from "../types/types";
import UsersStore from "../store/UsersStore"
import {observer} from "mobx-react";
import todo from "../store/TodoStore";

interface UserItemProps{
    user: IUser;
    onClick: (user: IUser) => void;
}

const store = new UsersStore();

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <tr className="todo" key={user.id}>
            <td>
                {user.id}
            </td>
            <td>
                <div onClick={() => onClick(user)}>
                    {user.name} проживает в городе {user.address.city} на улице {user.address.street}
                </div>
            </td>
            <td>
                <button onClick={() => store.removeUser(user.id)}>X</button>
            </td>
        </tr>
    );
};

export default UserItem;