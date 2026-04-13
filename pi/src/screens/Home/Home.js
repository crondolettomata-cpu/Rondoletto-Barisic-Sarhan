import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import SeccionPelicula from "../../componentes/SeccionPelicula/SeccionPelicula.js";
import SeccionSerie from "../../componentes/SeccionSerie/SeccionSerie";
import Buscador from "../../componentes/Buscador/Buscador";

function Home() {
    return(
         <React.Fragment className="home">
            <Buscador/>
            <SeccionPelicula/>
            <SeccionSerie />
        </React.Fragment>
    )
};

export default Home;