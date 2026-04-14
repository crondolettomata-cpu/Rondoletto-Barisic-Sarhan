import React, {Component} from "react";
import Menu from "../Menu/Menu"
import "./styles.css"
import Cookies from "universal-cookie"

const cookies = new Cookies();

function Header(){
    return (
        <Menu />
    )
}

export default Header;