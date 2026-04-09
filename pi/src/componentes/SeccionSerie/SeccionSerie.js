import React, { Component } from 'react';
import CardS from "../CardS/CardS";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader"
import "./styles.css"

class SeccionPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {datos:[]}
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=9f00611fdf617c67427de634a461ac6c")
        .then (response => response.json())
        .then(data => {this.setState({datos: data.results})})
        .catch(error => console.log(error))
    }

    render(){
        return(
            <section>
                {this.state.datos.length === 0 ? (
                <Loader />
                ) : (
                this.state.datos.map(serie => (
                <CardS
                key={serie.id}
                id={serie.id}
                img={serie.poster_path}
                name={serie.original_name}
                overview={serie.overview}
                    />
                ))
            )}
            </section>
        );
    };
};

export default SeccionPelicula;