import {useState, useEffect} from "react";
import Loader from "../Loader/Loader"
import "./styles.css"


function DetallePelicula(props) {
    const [pelicula, setPelicula] = useState(null);

    useEffect( () =>{
         const pelicula = props.match.params.id 
        fetch(`https://api.themoviedb.org/3/movie/${pelicula}?api_key=9f00611fdf617c67427de634a461ac6c`)
            .then (response => response.json())
            .then (data => setPelicula(data))  
            .catch (error => console.log(error))
    }, [])

       
        return (

         pelicula ?
                <section className="detallepelicula">
                    <img 
                    src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
                    alt={pelicula.title} 
                    className='foto'/>
                    <div className="info">
                        <h1>{pelicula.title}</h1>
                        <p>Rating: {pelicula.vote_average}</p>
                        <p>Fecha: {pelicula.release_date}</p>
                        <p>{pelicula.overview}</p>
                        <p>Duración: {pelicula.runtime} minutos</p>
                        <p>Géneros:{pelicula.genres ? pelicula.genres.map(genero => genero.name).join(", ") : ""}</p> 
                    </div>
                
             </section>
            : <Loader />
        )
}
export default DetallePelicula;