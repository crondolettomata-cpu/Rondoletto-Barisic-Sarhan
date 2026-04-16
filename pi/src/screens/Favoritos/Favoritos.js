import React , {Component} from "react";
import { Link } from "react-router-dom";
import CardS from "../../componentes/CardS/CardS";
import CardP from "../../componentes/CardP/CardP"

class Favoritos extends Component {
    constructor (props) {
        super(props)
        this.state = {
            peliculas : [],
            series : []
        }
    }
    componentDidMount () {
        if (!document.cookie) {
            this.props.history.push("/")
        }
        let storage = localStorage.getItem("favoritos")
        let favoritos= JSON.parse(storage)
        if (favoritos !== null) {
            let peliculasFav = favoritos.filter(fav => fav.tipo === "movie")
            let seriesFav = favoritos.filter(fav => fav.tipo === "tv")

            peliculasFav.map(fav => 
                fetch(`https://api.themoviedb.org/3/movie/${fav.id}?api_key=9f00611fdf617c67427de634a461ac6c`)
                .then (response => response.json())
                .then (data => {
                    let peliculasAct = this.state.peliculas
                    peliculasAct.push (data)
                    this.setState ({
                        peliculas: peliculasAct
                    })
                })
                .catch(error => console.log(error))
            )
            seriesFav.map(fav => 
                fetch(`https://api.themoviedb.org/3/tv/${fav.id}?api_key=9f00611fdf617c67427de634a461ac6c`)
                .then (response => response.json())
                .then (data => {
                    let seriesAct = this.state.series
                    seriesAct.push (data)
                    this.setState ({
                        peliculas: seriesAct
                    })
                })
                .catch(error => console.log(error))
            )
        } ;
    
    };
    borrarFav (id, tipo){
        let storage = localStorage.getItem ("favoritos")
        let favoritos = JSON.parse(storage)
        let nuevosFavs = favoritos.filter (fav => {
            return !(fav.id === id && fav.tipo === tipo)
        })
        localStorage.setItem ("favoritos", JSON.stringify(nuevosFavs))

        if (tipo === "movie") {
            let nuevasPel = this.state.peliculas.filter( pelicula => pelicula.id !== id)
            this.setState ({
                peliculas: nuevasPel
            })
        } else {
            let nuevasSer = this.state.series.filter (series => series.id !== id)
            this.setState ({
                series: nuevasSer
            })
        }
    }
    render () {
        return (
            <section>
                <h2>Peliculas favoritas</h2>
               { this.state.peliculas.map(pelicula => {(
                    <CardP
                        key = {pelicula.id}
                        id = {pelicula.id}
                        img = {pelicula.poster_path}
                        title = {pelicula.original_title}
                        overview = {pelicula.overview}
                    />
                 )})}
                <h2>Series favoritas</h2>
            </section>
        )
    }


}

export default Favoritos