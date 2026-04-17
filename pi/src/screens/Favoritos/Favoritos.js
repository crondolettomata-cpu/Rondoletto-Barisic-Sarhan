import React , {Component} from "react";
import "./styles.css"
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
        let storageP = localStorage.getItem("favoritosPeliculas")
        
        let favSeries = [];
        let favPeliculas =[];

        
        if (storageS !== null && storageS !== "") {
            favSeries = JSON.parse(storageS)
        } ;
        if (storageP !== null && storageP !== "") {
            favPeliculas = JSON.parse(storageP)
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
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=9f00611fdf617c67427de634a461ac6c`)
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
        let nuevosFavsP = this.state.favoritosPeliculas.filter(eliminar => eliminar !== id);
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
                <h1 className = "tit1">Favoritos</h1>
                <h2 className = "tit1">Peliculas favoritas</h2>
                <div className = "ppff"> 
                    {this.state.peliculas.length === 0 ? (
                        <Loader/>
                    ) : (
                    this.state.peliculas.map (pelicula => (
                    <CardP 
                    key = {pelicula.id}
                    id = {pelicula.id}
                    img = {pelicula.poster_path}
                    title = {pelicula.original_title}
                    overview = {pelicula.overview}
                    />
                    ))
                    )}
                </div>
                <h2 className = "tit1">Series favoritas</h2>
                <div className = "ppff"> 
                    {this.state.series.length === 0 ? (
                        <Loader/>
                    ) : (
                    this.state.series.map (serie => (
                    <CardS 
                    key = {serie.id}
                    id = {serie.id}
                    img = {serie.poster_path}
                    name = {serie.original_name}
                    overview = {serie.overview}
                    />
                    ))
                    )}
                </div>
            </section>
        )
    }


}

export default Favoritos