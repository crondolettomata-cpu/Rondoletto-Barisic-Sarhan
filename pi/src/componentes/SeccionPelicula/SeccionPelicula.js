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
            filtro: ""
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9f00611fdf617c67427de634a461ac6c")
        .then (response => response.json())
        .then(data => { console.log(data);
         this.setState({datos: data.results})})
        .catch(error => console.log(error))
    }

    filtros = (texto) => { 
        this.setState({ filtro: texto });
    };

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
                    {this.state.datos.length === 0?(
                    <Loader/>
                    ) : (
                        this.state.datos.map(pelicula =>(
                        
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
                

            </section>
        );
    };
};

export default SeccionPelicula;