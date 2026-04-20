import React , {Component} from "react";
import Loader from "../Loader/Loader"
import "./styles.css"

class DetallePelicula extends Component {
    constructor (props) {
        super(props);
        this.state = {
            datos : null,
            favorito: false
        };
    }
    componentDidMount (){
        const pelicula = this.props.match.params.id 
        fetch(`https://api.themoviedb.org/3/movie/${pelicula}?api_key=9f00611fdf617c67427de634a461ac6c`)
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
            <section className="detallepelicula">
                <img 
                src={`https://image.tmdb.org/t/p/w342${this.state.datos.poster_path}`}
                alt={this.state.datos.title} 
                className='foto'/>
                <div className="info">
                    <h1>{this.state.datos.title}</h1>
                    <p>Rating: {this.state.datos.vote_average}</p>
                    <p>Fecha: {this.state.datos.release_date}</p>
                    <p>{this.state.datos.overview}</p>
                    <p>Duración: {this.state.datos.runtime} minutos</p>
                    <p>Géneros:{this.state.datos.genres ? this.state.datos.genres.map(genero => genero.name).join(", ") : ""}</p> 
                </div>
                
            </section>
        )
    }
}
export default DetallePelicula 