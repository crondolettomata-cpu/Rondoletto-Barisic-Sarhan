import React, { Component, useState, useEffect } from 'react';
import CardP from "../CardP/CardP";
import {Link} from "react-router-dom";
import "./styles.css"
import Loader from "../Loader/Loader";

function SeccionPelicula(props){
    const [datos, setDatos] = useState([])
    const [pagina, setPagina] = useState(1)

    useEffect( () => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=1")
        .then (response => response.json())
        .then(data => setDatos(data.results))
        .catch(error => console.log(error))
    }, [])

    const cargarMas = () => {
        let paginaSiguiente = pagina + 1;

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=${this.state.pagina}`)
        .then(res => res.json())
        .then(data => {
            setDatos(datos.concat(data.results))
            setPagina (paginaSiguiente)
        })
        .catch(error => console.log(error));
    };

    
        const textoFiltro = props.filtro || "";

        const filtradas = datos.filter(pelicula =>
        pelicula.original_title.toLowerCase().includes(textoFiltro.toLowerCase())
        );

        return(
            <section>
                <h1 className='titulo'> Peliculas mejores ranqueadas </h1>

                <div className='section'>
                    {datos.length === 0 ? (
                    <Loader/>
                    ) : (
                        filtradas.map(pelicula =>(
                        
                    <CardP
                        key={pelicula.id}
                        id={pelicula.id}
                        img={pelicula.poster_path}
                        title={pelicula.original_title}
                        overview={pelicula.overview}
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

export default SeccionPelicula;