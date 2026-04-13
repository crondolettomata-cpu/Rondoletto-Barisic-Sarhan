import React from "react";
import Loader from "../../componentes/Loader/Loader"
import Header from "../../componentes/Header/Header";
import SeccionPelicula from "../../componentes/SeccionPelicula/SeccionPelicula";

function Peliculas ( ) {

    return(
        <React.Fragment >
            <Header/>
            <div>
            <SeccionPelicula />
            </div>
        </React.Fragment>
    );
};

export default Peliculas;