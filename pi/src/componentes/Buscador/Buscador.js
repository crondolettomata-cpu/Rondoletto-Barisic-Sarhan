import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import "./styles.css";
import Resultados from "../../screens/Resultados/Resultados"
import { useState } from "react";

function Buscador (props) {
    const [search, setSearch] = useState("");
    const [tipo, setTipo] = useState("movie");

    const onSubmit = (event) => {
        event.preventDefault()
        props.history.push(`/resultados?tipo=${tipo}&search=${search}`);
    };

    const guardarTipo = (event) => {
        setTipo (event.target.value)
    }

    const guardarBusqueda = (event) => {
        setSearch( event.target.value)
    }

    
        return(
            <div>
                <form className="buscador" onSubmit={(event) => onSubmit(event)}>
                    <input onChange={(event) => guardarBusqueda(event)}/>

                    <select onChange={(event) => guardarTipo(event)} value={tipo}>
                    
                    <option value="movie">Peliculas</option>
                    <option value="tv">Series</option>
                    </select>

                    <button type='submit'>Buscar</button>
                </form>
            </div>

        );

};

export default withRouter (Buscador);