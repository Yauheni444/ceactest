import {action, makeAutoObservable, makeObservable, observable} from "mobx";


class UsersStore{

    Users = [];
    keyLocalStorage = 'Users';

    constructor() {
        makeAutoObservable(this,{
            Users: observable,
            fetchUsers: action.bound,
            removeUser: action.bound,
        });
    }

    GetLocalStorage(){
        const response = localStorage.getItem(this.keyLocalStorage)
        if (response !== null)return response;
        return [];
    }

    fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.Users = [...this.Users, ...json]
            })

        console.log(this.Users);
    }

    addUser(user){
        this.Users.push(user)
    }
    removeUser(id){
        this.Users = this.Users.filter(user => user.id !== id)
    }
}

export default UsersStore;