import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Logout extends Component{
    componentDidMount(){
        cookies.remove("user-auth-cookie");
        localStorage.removeItem("userLoggedIn");
        this.props.history.push("/");  
    }

    render (){
        return null;
    }
}

export default Logout;