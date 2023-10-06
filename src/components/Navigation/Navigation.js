import './Navigation.css';
import { useLocation } from "react-router-dom";
import NavigationLogin from '../NavigationLogin/NavigationLogin';
import NavigationMovies from '../NavigationMovies/NavigationMovies';

function Navigation({logged}) {
    let location = useLocation().pathname;
    if(location === '/' && logged === false) {
      return(<NavigationLogin />)
    } else {
      return(<NavigationMovies />)
    }
    
}

export default Navigation;