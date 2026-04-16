import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./styles.css"

class CardP extends Component{
    constructor (props){
        super(props);
        this.state ={
            verMenos: false
        };
        this.state = {
            favorito : false
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem ("favoritosPeliculas")
        let favoritos = JSON.parse(storage)

        if (favoritos !== null) {
            let existe = favoritos.filter (fav => {
                return fav === this.props.id })
            if (existe.lenght > 0){
                this.setState({
                    favorito: true
                })
            }
        }
    }

    agregarFav (id) {
        let storage = localStorage.getItem("favoritosPeliculas");
        let favoritos = JSON.parse(storage);

        if (favoritos == null) {
            let primerFav = [id]
            localStorage.setItem("favoritosPeliculas", JSON.stringify(primerFav))
        }
        else {
            favoritos.push(id);
            localStorage.setItem ("favoritosPeliculas", JSON.stringify(favoritos));
        }
        this.setState ({favorito: true})
    }
    eliminarFav(id) {
        let storage = localStorage.getItem("favoritos");
        let favoritos = JSON.parse(storage); 
        favoritos.push(id)
        localStorage.setItem("favoritosPelicula", JSON.stringify(favoritos));
        this.setState({favorito: false})
    }    

    clickVerMenos(){
        this.setState({verMenos: !this.state.verMenos});
    }

    render(){
        console.log(this.props);

        return(
            <article className = 'card-personaje'>

                <img src= { "https://image.tmdb.org/t/p/w342" + this.props.img} alt={this.props.title} className='fotos'/>
                <h2 className='titulo'>{this.props.title}</h2>

                <section className="info">
                    <p className={'extra-info' + (this.state.verMenos ?  ' false' : ' true')}> {this.props.overview} </p>
                </section>
                <Link to={`/Detalle/pelicula/${this.props.id}`} className="link"></Link>

                <button className="vermas" onClick={()=> this.clickVerMenos()}>
                    {this.state.verMenos ? "Ver más" : "Ver menos" }
                </button>
                
                <div className = "botonfav">
                    { this.state.favorito === false ? 
                    <button onClick={() => this.agregarFav(this.props.id)}>
                        Agregar a favoritos
                    </button>
                    :
                    <button onClick ={() => this.eliminarFav(this.props.id)}>
                        Eliminar de favoritos
                    </button>
                    }
                </div>

            </article>
        )
    }
}

export default CardP;