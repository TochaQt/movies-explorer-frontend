import './Navigation.css';
import { Route, Link, Routes } from "react-router-dom";
import NavigationLogin from '../NavigationLogin/NavigationLogin';
import NavigationMovies from '../NavigationMovies/NavigationMovies';

function Navigation() {
    return (
            <Routes>
                <Route path='/'>
                    <Route index element={<NavigationLogin />} />
                </Route>
                <Route path='/movies'>
                    <Route index element={<NavigationMovies />} />
                </Route>
                <Route path='/saved-movies'>
                    <Route index element={<NavigationMovies />} />
                </Route>
                <Route path='/profile'>
                    <Route index element={<NavigationMovies />} />
                </Route>
            </Routes>
    )
}

export default Navigation;