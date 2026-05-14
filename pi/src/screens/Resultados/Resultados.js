import React, { useState, useEffect } from "react";
import CardP from "../../componentes/CardP/CardP";
import CardS from "../../componentes/CardS/CardS";
import Loader from "../../componentes/Loader/Loader";
import "./styles.css"

function Resultados (props){
    const [resultados, setResultados] = useState ([])
    const [tipo, setTipo] = useState ("")



    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const tipoBusqueda = query.get("tipo");
        const search = query.get("search");

        fetch(`https://api.themoviedb.org/3/search/${tipoBusqueda}?query=${search}&api_key=9f00611fdf617c67427de634a461ac6c`)
        .then(response => response.json())
        .then (data => {
            setResultados(data.results)
            setTipo(tipoBusqueda)
        })
        .catch(error => console.log(error))
    },  [props.location.search])


        return(
            <div>
                <section className="section">
                    {!resultados || resultados.length === 0 ? ( <Loader/> ) :
                    
                    (
                    tipo === "movie" ? 
                        resultados.map( pelicula =>
                    (<CardP
                        key = {pelicula.id}
                        id={pelicula.id}
                        img= {pelicula.poster_path}
                        title = {pelicula.original_title}
                        overview = {pelicula.overview} 
                        />
                    ))
                    
                :
                    
                    resultados.map( serie =>
                    (<CardS
                        key = {serie.id}
                        id={serie.id}
                        img= {serie.poster_path}
                        name = {serie.original_name}
                        overview = {serie.overview} />
                    ))
                )}
                </section>


            </div>
        )

}
export default Resultados;
