import React, {FC, useEffect, useState} from 'react';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import CitiesPage from "./pages/CitiesPage";
import UserItemPage from "./pages/UserItemPage";
import CityItemPage from "./pages/CityItemPage";
import TodoPage from "./pages/TodoPage";


function App() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to="/users">Пользователи</NavLink>
                    <NavLink to="/citis">Список городов</NavLink>
                    <NavLink to="/todo">Список дел</NavLink>
                </div>

                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>
                <Route path={'/users/:id'}>
                    <UserItemPage/>
                </Route>

                <Route path={'/citis'} exact>
                    <CitiesPage/>
                </Route>
                <Route path={'/citis/:id'}>
                    <CityItemPage/>
                </Route>

                <Route path={'/todo'}>
                    <TodoPage/>
                </Route>

            </div>
        </BrowserRouter>

    );
}

export default App;
