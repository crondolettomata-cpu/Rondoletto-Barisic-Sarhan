import React , {Component} from "react";
import { Link } from "react-router-dom";
import CardS from "../../componentes/CardS/CardS";
import CardP from "../../componentes/CardP/CardP"
import Loader from "../../componentes/Loader/Loader";


class Favoritos extends Component {
    constructor (props) {
        super(props)
        this.state = {
            peliculas : [],
            series : [],
            favoritosSeries : [],
            favoritosPeliculas : []
        }
    }
    componentDidMount () {
        let storageS = localStorage.getItem("favoritosSeries")
        let favSeries= JSON.parse(storageS)
        let storageP = localStorage.getItem("favoritosPeliculas")
        let favPeliculas = JSON.parse(storageP)
        if (favSeries === null) {
            favSeries = [];
        } ;
        if (favPeliculas === null) {
            favPeliculas = [];
        }
        this.setState ({
            favoritosPeliculas : favPeliculas,
            favoritosSeries : favSeries
        });

        favPeliculas.map (id => 
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9f00611fdf617c67427de634a461ac6c`)
            .then(response => response.json())
            .then(data => {
                let peli = this.state.peliculas; 
                peli.push(data);
                this.setState ({
                    peliculas: peli
                })
            })
            .catch(error => console.log(error))
        )
        favSeries.map (id => 
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9f00611fdf617c67427de634a461ac6c`)
            .then(response => response.json())
            .then(data => {
                let serie = this.state.series;
                serie.push(data);
                this.setState ({
                    series: serie
                })
            })
            .catch(error => console.log(error))
        )

      
    };

    eliminarPeli (id) {
        let nuevosFavsP = this.state.favoritosPeliculas.filter(eliminar => eliminaar != id);
        localStorage.setItem(
            "favoritosPeliculas",
            JSON.stringify(nuevosFavsP)
        );
        this.setState ({
            favoritosPeliculas: nuevosFavsP,
            peliculas: this.state.peliculas.filter( pelis => pelis.id !== id)
        })
    }

    eliminarSerie(id) {
        let nuevosFavsS = this.state.favoritosSeries.filter(eliminar => eliminar !== id);
        localStorage.setItem(
            "favoritosSeries",
            JSON.stringify(nuevosFavsS)
        );
        this.setState ({
            favoritosSeries: nuevosFavsS,
            series: this.state.series.filter (serie => serie.id !== id)
        });
    }

    render () {
        return (
            <section>
                <h1>Favoritos</h1>
                <h2>Peliculas favoritas</h2>
                <div> 
                    {this.state.peliculas.length === 0 ? (
                        <Loader/>
                    ) : (
                    this.state.peliculas.map (serie => (
                    <CardS 
                    key = {peliculas.id}
                    id = {peliculas.id}
                    img = {peliculas.poster_path}
                    name = {peliculas.original_name}
                    overview = {peliculas.overview}
                    />
                    ))
                    )}
                </div>
                <h2>Series favoritas</h2>
                <div> 
                    {this.state.series.length === 0 ? (
                        <Loader/>
                    ) : (
                    this.state.series.map (serie => (
                    <CardS 
                    key = {series.id}
                    id = {series.id}
                    img = {series.poster_path}
                    name = {series.original_name}
                    overview = {series.overview}
                    />
                    ))
                    )}
                </div>
            </section>
        )
    }


}

export default Favoritos