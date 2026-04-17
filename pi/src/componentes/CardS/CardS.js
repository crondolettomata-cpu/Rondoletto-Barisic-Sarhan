import React, { Component } from "react";
import {Link} from "react-router-dom";


class CardS extends Component{
    constructor (props){
        super(props);
        this.state ={
            verMenos: false,
            favorito : false
        };
    
    }

    componentDidMount(){
        let storage = localStorage.getItem ("favoritosSeries")
        
        if (storage !== null && storage !== "") {
            let favoritos = JSON.parse(storage)

            let existe = favoritos.filter (fav => {
                return fav === this.props.id })
            if (existe.length > 0){
                this.setState({
                    favorito: true
                })
            }
        }
    }

    agregarFav (id) {
        let storage = localStorage.getItem("favoritosSeries");
        let favoritos = [];

        if (storage !== null && storage !== "") {
            favoritos = JSON.parse(storage)
        }

        if (favoritos == null || favoritos.length === 0) {
            let primerFav = [id]
            localStorage.setItem("favoritosSeries", JSON.stringify(primerFav))
        }
        else {
            favoritos.push(id);
            localStorage.setItem ("favoritosSeries", JSON.stringify(favoritos));
        }
        this.setState ({favorito: true})
    }

    eliminarFav(id) {
        let storage = localStorage.getItem("favoritosSeries");
        let favoritos = JSON.parse(storage); 
        let filtrados = favoritos.filter(fav => fav !== id)
        localStorage.setItem("favoritosSeries", JSON.stringify(filtrados));
        this.setState({favorito: false})
    } 

    clickVerMenos(){
        this.setState({verMenos: !this.state.verMenos});
    }

    render(){
        console.log(this.props);

        return(
            <article className = 'card-personaje'>

                <img src= { "https://image.tmdb.org/t/p/w342" +this.props.img} alt={this.props.name} className='fotos'/>
                <h2 className='titulo'>{this.props.name}</h2>

                <section className="info">
                    <p className={'extra-info' + (this.state.verMenos ? ' false' : ' true')}> {this.props.overview}</p>
                </section>
                <Link to={`/detalle/pelicula/${this.props.id}`} className="link"></Link>

                <button className="vermas" onClick={()=> this.clickVerMenos()}>
                    {this.state.verMenos ? "Ver más" : "Ver menos"}
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
    export default CardS;