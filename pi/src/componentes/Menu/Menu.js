import React from "react";
import {Link} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


function Menu (){
    return (
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/peliculas">Peliculas</Link></li>
            <li><Link to="/series">Series</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li><Link to="/login">LogIn</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    )
}

export default Menu;