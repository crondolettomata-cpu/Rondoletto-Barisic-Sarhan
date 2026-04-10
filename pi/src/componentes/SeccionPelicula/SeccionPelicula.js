import React, { Component } from 'react';
import CardP from "../CardP/CardP";
import {Link} from "react-router-dom";
import "./styles.css"
import Loader from "../Loader/Loader";

class SeccionPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {datos:[]}
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9f00611fdf617c67427de634a461ac6c")
        .then (response => response.json())
        .then(data => { console.log(data);
         this.setState({datos: data.results})})
        .catch(error => console.log(error))
    }

    render(){
        return(
            <section className='section'>
                {this.state.datos.length === 0?(
                <Loader/>
                ) : (
                    this.state.datos.map(pelicula =>{
                        console.log(pelicula);
                        
                <CardP

                id={pelicula.id}
                img={pelicula.poster_path}
                title={pelicula.original_title}
                overview={pelicula.overview}
                    />
    })
            )}
            </section>
        );
    };
};

export default SeccionPelicula;