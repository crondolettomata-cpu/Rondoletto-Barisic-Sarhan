import React from "react";
import {Link} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


function Menu (){
    return (
        <section className="headerMenu">
            <ul className="menu">
                <li className="liMenu"><Link to="/">Home</Link></li>
                <li className="liMenu"><Link to="/peliculas">Peliculas</Link></li>
                <li className="liMenu"><Link to="/series">Series</Link></li>
                <li className="liMenu"><Link to="/favoritos">Favoritos</Link></li>
                <li className="liMenu"><Link to="/favoritos">LogOut</Link></li>
                <li className="liMenu"><Link to="/login">LogIn</Link></li>
                <li className="liMenu"><Link to="/register">Register</Link></li>
            </ul>
            <img src= "/img/clotilde.png" alt="logo de clotilde" className="logoClotilde"></img>
        </section>
        
    )
}

export default Menu;