import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./styles.css"

class CardP extends Component{
    constructor (props){
        super(props);
        this.state ={
            verMenos: false
        };
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
            </article>
        )
    }
}

export default CardP;