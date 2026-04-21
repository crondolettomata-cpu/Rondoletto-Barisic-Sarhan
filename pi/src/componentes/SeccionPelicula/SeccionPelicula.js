import React, { Component } from 'react';
import CardP from "../CardP/CardP";
import {Link} from "react-router-dom";
import Filtro from "../Filtro/Filtro";
import "./styles.css"
import Loader from "../Loader/Loader";

class SeccionPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos:[],
            filtro: "",
            pagina: 1
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=1")
        .then (response => response.json())
        .then(data => { console.log(data);
         this.setState({datos: data.results})})
        .catch(error => console.log(error))
    }

    filtros = (texto) => { 
        this.setState({ filtro: texto });
    };

    cargarMas() {
        let paginaSiguiente = this.state.pagina + 1
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=${paginaSiguiente}`)
        .then (response => response.json())
        .then (data => {
            this.setState ({
                datos: this.state.datos.concat(data.results),
                pagina: paginaSiguiente
            })
        })
        .catch(error => console.log(error))
    }

    render(){

        const peliculasFiltradas = this.state.datos.filter(pelicula =>
        pelicula.original_title
            .toLowerCase()
            .includes(this.state.filtro.toLowerCase())
        );

        return(
            <section>
                <h1 className='titulo'> Peliculas mejores ranqueadas </h1>

                <Filtro
                    placeholder= "filtro"
                    value={this.state.filtro}
                    onChange={this.filtros}
                />

                <div className='section'>
                    {this.state.datos.length === 0 ? (
                    <Loader/>
                    ) : (
                        peliculasFiltradas.map(pelicula =>(
                        
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
                
                <button onClick={() => this.cargarMas()}>
                    Cargar más
                </button>

            </section>
        );
    };
};

export default SeccionPelicula;