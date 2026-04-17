import React from "react";
import {Link} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Cookies from "universal-cookie";


let cookies = new Cookies ()


function Menu (){
    let usuario = cookies.get("user-auth-cookie");
    console.log("menu usuario", usuario);
    
    return (
        <section className="headerMenu">
            <ul className="menu">
                <li className="liMenu"><Link to="/">Home</Link></li>
                <li className="liMenu"><Link to="/peliculas">Peliculas</Link></li>
                <li className="liMenu"><Link to="/series">Series</Link></li>
                {usuario ? (
                    <React.Fragment>
                        <li className="liMenu"><Link to="/login">LogIn</Link></li>
                        <li className="liMenu"><Link to="/register">Register</Link></li>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <li className="liMenu"><Link to="/favoritos">Favoritos</Link></li>
                        <li className="liMenu"><Link to="/logout">LogOut</Link></li>
                    </React.Fragment>
                )}
            </ul>
            <img src= "/img/clotilde.png" alt="logo de clotilde" className="logoClotilde"></img>
        </section>
       
    )
}


export default Menu;