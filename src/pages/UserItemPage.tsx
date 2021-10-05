import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import {useParams, useHistory} from 'react-router-dom';

interface UserItemPageParams{
    id: string
}


const UserItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const history = useHistory()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = [
                {
                    id: 1,
                    name: 'Пятро',
                    email: 'test@test.ru',
                    address: {city: 'д. Дышло', street: 'Проезжая 1', zipcode: '1234'}
                },
                {
                    id: 2,
                    name: 'Пятро 2',
                    email: 'test2@test.ru',
                    address: {city: 'д. Хуйкова', street: 'Проезжая 12', zipcode: '122134'}
                }
            ]

            if (localStorage.getItem('Users') !== null) {
                const response = localStorage.getItem('Users')
                console.log(response)
                //setUsers(response)
            }
            setUser(response[0])
        } catch (e) {
            alert(e)
        }
    }



    return (
        <div>
            <button onClick={() => history.push('/users')} >Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;