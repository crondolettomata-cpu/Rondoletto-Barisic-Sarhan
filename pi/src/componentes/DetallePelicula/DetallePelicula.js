import React from "react";
import Loader from "../Loader/Loader"

class DetallePelicula extends Component {
    constructor (props) {
        super(props);
        this.state = {
            datos : null
        };
    }
    componentDidMount (){
        const pelicula = this.props.match.params.id 
        fetch("https://api.themoviedb.org/3/movie/${pelicula}?api_key=9f00611fdf617c67427de634a461ac6c")
        .then (response => response.json())
        .then (data => {
            this.setState ({datos: data})
        })
        .catch (error => console.log(error))
    }

    render () {
        if (!this.state.datos) {
                return <Loader /> 
        }
        return (
            <section>
                <img src={`https://image.tmdb.org/t/p/w500${this.state.datos.poster_path}`}> </img>
                <h1>{this.state.datos.title}</h1>
                <p>Rating: {this.state.datos.vote_average}</p>
                <p>Fecha: {this.state.datos.release_date}</p>
                <p>{this.state.datos.overview}</p>
                <p>Géneros: {this.state.datos.genres.map(genero => (<li key={genero.id}>{genero.name}</li>))}</p> 
            </section>
        )
    }
}
export default DetallePelicula 