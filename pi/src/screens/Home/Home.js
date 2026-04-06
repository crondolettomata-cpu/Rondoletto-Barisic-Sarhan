import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Series from "../Series/Series"
import Peliculas from "../Peliculas/Peliculas";
import Buscador from "../../componentes/Buscador/Buscador";

function Home() {
    return(
        <div>
            <Header/>
            <Buscador/>
            <main>
                <Peliculas/>
                <Series />
            </main>
        </div>
    )
};

export default Home;