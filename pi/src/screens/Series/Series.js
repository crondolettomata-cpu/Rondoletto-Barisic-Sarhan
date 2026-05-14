import React, { Component } from "react";
import SeccionSerie from "../../componentes/SeccionSerie/SeccionSerie";
import Filtro from "../../componentes/Filtro/Filtro";
import { useState } from "react";

function Series () {
    const [filtro, setFiltro] = useState("")
    const [click, setClick] = useState(0)
    

    const filtros = (texto) => {
        setFiltro(texto );
    };

    const cargarMas = () => {
        setClick(click + 1)
    }


        return (
            <div>

                <Filtro
                    placeholder="flitro"
                    value={filtro}
                    onChange={filtros}
                />

                <SeccionSerie
                    filtro={filtro}
                    mostrarBoton={true}
                />

            </div>
        );
    
}

export default Series;