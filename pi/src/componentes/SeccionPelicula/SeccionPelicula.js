import React, { Component } from 'react';
import CardP from "../CardP/CardP";
import {Link} from "react-router-dom";
import "./styles.css"
import Loader from "../Loader/Loader";

class SeccionPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos:[],
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

    cargarMas = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=${this.state.pagina}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
            datos: this.state.datos.concat(data.results),
            pagina: this.state.pagina + 1
            });
        });
    };

    render(){
        const textoFiltro = this.props.filtro || "";
        const filtradas = this.state.datos.filter(pelicula =>
        pelicula.original_title.toLowerCase().includes(textoFiltro.toLowerCase())
        );

        return(
            <section>
                <h1 className='titulo'> Peliculas mejores ranqueadas </h1>

                <div className='section'>
                    {this.state.datos.length === 0 ? (
                    <Loader/>
                    ) : (
                        filtradas.map(pelicula =>(
                        
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

                {this.props.mostrarBoton && (
                    <button onClick={this.cargarMas}>
                        Cargar más
                    </button>
                )}
            </section>
        );
    };
};

export default SeccionPelicula;