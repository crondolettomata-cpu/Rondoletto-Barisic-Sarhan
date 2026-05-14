import React, { useState, useEffect} from "react";
import Loader from "../Loader/Loader";
import "./styles.css"

function DetalleSerie (props) {
   const [serie, setSerie] = useState(null)
   useEffect ( () => {

        const serie = props.match.params.id

 fetch(`https://api.themoviedb.org/3/tv/${serie}?api_key=9f00611fdf617c67427de634a461ac6c`)
.then(response => response.json())
.then(data => setSerie(data))
.catch(error => console.log(error))
         

}, [] );


        return (

            serie ? 
            <section className="detalleserie"> 
            <img 
 
src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name}  className='foto' />
            
             <div className="info">
                    <h1>{serie.name}</h1>
                    <p>Rating: {serie.vote_average}</p>
                    <p>Fecha: {serie.release_data}</p>
                    <p>{serie.overview}</p>
                    <p>Duracion: {serie.runtime} minutos</p>
                    <p>Géneros: {serie.genres ? this.state.datos.genres.map(genero => genero.name).join(", ") : ""}</p>
                </div>
           
            </section>
            : <Loader/>


        )

}


    


export default DetalleSerie;