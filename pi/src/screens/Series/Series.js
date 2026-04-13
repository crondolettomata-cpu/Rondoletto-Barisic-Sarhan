import React from "react";
import Header from "../../componentes/Header/Header";
import SeccionSerie from "../../componentes/SeccionSerie/SeccionSerie";

function Series () {
    return(
         <React.Fragment >
            <Header/>
            <div>
            <SeccionSerie />
            </div>
        </React.Fragment>
    );
};

export default Series;