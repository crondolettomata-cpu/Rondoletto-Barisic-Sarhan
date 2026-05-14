import React, { Component } from "react";
import SeccionPelicula from "../../componentes/SeccionPelicula/SeccionPelicula";
import Loader from "../../componentes/Loader/Loader";
import Filtro from "../../componentes/Filtro/Filtro";
import { useState } from "react";

function Peliculas () {
  const [filtro, setFiltro] = useState("")
  const [click, setClick] = useState(0)

    const filtros = (texto) => { 
        setFiltro(texto);
    };

    const cargarMas = () => {
        setClick(click + 1)
    };

    return (
      <div>

        <Filtro
            placeholder= "filtro"
            value={filtro}
            onChange={filtros}
        />

        <SeccionPelicula 
            filtro={filtro}
            mostrarBoton={true}
        />
        
      </div>
    );
}

export default Peliculas;