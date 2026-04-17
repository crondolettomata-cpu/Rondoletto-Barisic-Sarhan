import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Logout extends Component{
    componentDidMount(){
        console.log("antes de borrar", cookies.get("user-auth-cookie"));
        cookies.remove("user-auth-cookie");
        console.log("despues de borrar", cookies.get("user-auth-cookie"));
        localStorage.removeItem("userLoggedIn");
        this.props.history.push("/");  
    }

    render (){
        return null;
    }
}

export default Logout;