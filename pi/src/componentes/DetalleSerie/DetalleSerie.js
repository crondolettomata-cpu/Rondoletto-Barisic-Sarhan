import React, { Component } from "react";
import Loader from "../Loader/Loader";
import "./styles.css"

class DetalleSerie extends Component {
    constructor (props) {
        super (props);
        this.state = {
            datos: null
        };
    }
    componentDidMount (){
        const serie = this.props.match.params.id
       fetch(`https://api.themoviedb.org/3/tv/${serie}?api_key=9f00611fdf617c67427de634a461ac6c`)
       .then(response => response.json())
       .then(data => { console.log(data);
         this.setState({datos: data})})
        .catch(error => console.log(error))
    }

    render(){
        if (!this.state.datos){
            return <Loader />
        }
        return (
            <section className = "detalleserie">
                <img className="foto" src={`https://image.tmdb.org/t/p/w500${this.state.datos.poster_path}`} alt="" />
                <div className="info">
                    <h1>{this.state.datos.name}</h1>
                    <p>Rating: {this.state.datos.vote_average}</p>
                    <p>Fecha: {this.state.datos.first_air_date}</p>
                    <p>{this.state.datos.overview}</p>
                    <p>Géneros: {this.state.datos.genres ? this.state.datos.genres.map(genero => genero.name).join(", ") : ""}</p>
                </div>
            </section>
        )
    }
}


export default DetalleSerie;