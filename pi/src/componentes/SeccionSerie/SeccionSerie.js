import React, { Component } from 'react';
import CardS from "../CardS/CardS";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader"
import "./styles.css"

class SeccionSerie extends Component{
    constructor(props){
        super(props)
        this.state = {
            datos:[],
            pagina: 1
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=1")
        .then (response => response.json())
        .then(data => {this.setState({datos: data.results})})
        .catch(error => console.log(error))
    }

    cargarMas = () => {
        let paginaSiguiente = this.state.pagina + 1;

        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=9f00611fdf617c67427de634a461ac6c&page=${paginaSiguiente}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                datos: this.state.datos.concat(data.results),
                pagina: paginaSiguiente
            });
        })
        .catch(error => console.log(error));
    }

    render(){

        const textoFiltro = this.props.filtro || "";

        const filtradas = this.state.datos.filter(serie =>
        serie.name.toLowerCase().includes(textoFiltro.toLowerCase())
        );

        return(
            <section >
                <h1 className='titulo'> Series mejores ranqueadas</h1>

                <div className='section'>
                {this.state.datos.length === 0 ? (
                    <Loader/>
                ) : (
                    filtradas.map(serie =>(
                    <CardS
                        key={serie.id}
                        id={serie.id}
                        img={serie.poster_path}
                        title={serie.name}
                        overview={serie.overview}
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

export default SeccionSerie;