import React, { Component } from 'react';
import CardS from "../CardS/CardS";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader"
import Filtro from "../Filtro/Filtro"
import "./styles.css"

class SeccionSerie extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos:[],
            filtro: "",
            pagina: 1
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=1")
        .then (response => response.json())
        .then(data => {this.setState({datos: data.results})})
        .catch(error => console.log(error))
    }

    filtros = (texto) => {
        this.setState ({filtro : texto});
    }

    cargarMas() {
        let paginaSiguiente = this.state.pagina + 1
        fetch (`https://api.themoviedb.org/3/tv/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=${paginaSiguiente}`)
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

        const seriesFiltradas = this.state.datos.filter(pelicula => 
            pelicula.original_name 
                .toLowerCase()
                .includes(this.state.filtro.toLowerCase())
        );

        return(
            <section >
                <h1 className='titulo'> Series mejores ranqueadas</h1>
                <Filtro
                    placeholder= "filtro"
                    value={this.state.filtro}
                    onChange={this.filtros}
                />
                <div className='section'>
                    {this.state.datos.length === 0 ? (
                    <Loader />
                    ) : (
                    seriesFiltradas.map(serie => (
                    <CardS
                    key={serie.id}
                    id={serie.id}
                    img={serie.poster_path}
                    name={serie.original_name}
                    overview={serie.overview}
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

export default SeccionSerie;