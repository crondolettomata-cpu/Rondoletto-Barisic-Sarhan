import React, { Component } from "react";
import CardP from "../../componentes/CardP/CardP";
import CardS from "../../componentes/CardS/CardS";
import Loader from "../../componentes/Loader/Loader";
import "./styles.css"

class Resultados extends Component{
    constructor(props){
        super(props)
        this.state={
            resultados:[],
            tipo: ''
        }
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const tipo = query.get("tipo");
        const search = query.get("search");

        fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${search}&api_key=9f00611fdf617c67427de634a461ac6c`)
        .then(response => response.json())
        .then (data => {this.setState({
            resultados: data.results,
            tipo: tipo
        })})
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <section className="section">
                    {!this.state.resultados || this.state.resultados.length === 0 ? ( <Loader/> ) :
                    
                    (
                    this.state.tipo === "movie" ? 
                        this.state.resultados.map( pelicula =>
                    (<CardP
                        key = {pelicula.id}
                        id={pelicula.id}
                        img= {pelicula.poster_path}
                        title = {pelicula.original_title}
                        overview = {pelicula.overview} 
                        />
                    ))
                    
                :
                    
                    this.state.resultados.map( serie =>
                    (<CardS
                        key = {serie.id}
                        id={serie.id}
                        img= {serie.poster_path}
                        name = {serie.original_name}
                        overview = {serie.overview} />
                    ))
                )}
                </section>


            </div>
        )
    }

}
export default Resultados;