import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import SeccionPelicula from "../../componentes/SeccionPelicula/SeccionPelicula.js";
import SeccionSerie from "../../componentes/SeccionSerie/SeccionSerie";
import Buscador from "../../componentes/Buscador/Buscador";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Home extends Component {

componentDidMount() {
    const auth = cookies.get("userName");
}

render () {
    return(
         <React.Fragment >
            <Header/>
            <div className="home">
            <Buscador/>
            <SeccionPelicula/>
            <SeccionSerie />
            </div>
        </React.Fragment>
    );
};
}

export default Home;