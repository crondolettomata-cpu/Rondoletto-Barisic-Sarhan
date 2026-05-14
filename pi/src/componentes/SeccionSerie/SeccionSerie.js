import React, { Component, useEffect, useState } from 'react';
import CardS from "../CardS/CardS";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader";
import "./styles.css"


function SeccionSerie (props){
    const [datos, setDatos] = useState([])
    const [pagina, setPagina] = useState(1)
   
    useEffect ( () => {
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=1")
        .then (response => response.json())
        .then(data => setDatos(data.results))
        .catch(error => console.log(error))
    }, []) 
    

    

    const cargarMas = () => {
        let paginaSiguiente = pagina + 1;

        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=${paginaSiguiente}`)
        .then(res => res.json())
        .then(data => {
            setDatos(datos.concat(data.results))
            setPagina (paginaSiguiente)
        })
        .catch(error => console.log(error));
    }

   

        const textoFiltro = props.filtro || "";

        const filtradas = datos.filter(serie =>
        serie.name.toLowerCase().includes(textoFiltro.toLowerCase())
        );

        return(
            <section >
                <h1 className='titulo'> Series mejores ranqueadas</h1>

                <div className='section'>
                {datos.length === 0 ? (
                    <Loader/>
                ) : (
                    filtradas.map(serie =>(
                    <CardS
                        key={serie.id}
                        id={serie.id}
                        img={serie.poster_path}
                        title={serie.name}
                        overview={serie.overview}
                    />
                    ))
                )}
                </div>

                {props.mostrarBoton && (
                    <button onClick={cargarMas}>
                        Cargar más
                    </button>
                )}

            </section>
        );

};

export default SeccionSerie;