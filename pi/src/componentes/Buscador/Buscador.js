import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import "./styles.css";
import Resultados from "../../screens/Resultados/Resultados"

class Buscador extends Component {
    constructor(props){
        super(props);
        this.state ={
            search: '',
            tipo: 'movie'
        };
    };

    onSubmit(event){
        event.preventDefault()

        this.props.history.push(`/resultados?tipo=${this.state.tipo}&search=${this.state.search}`);
    };

    guardarTipo(event){
        this.setState({tipo:event.target.value})
    }

    guardarBusqueda(event){
        this.setState(
            {search: event.target.value}, () => this.state.search)
    }

    render(){
        return(
            <div>
                <form className="buscador" onSubmit={(event) => this.onSubmit(event)}>
                    <input onChange={(event) => this.guardarBusqueda(event)}/>

                    <select onChange={(event) => this.guardarTipo(event)} value={this.state.tipo}>
                    
                    <option value="movie">Peliculas</option>
                    <option value="tv">Series</option>
                    </select>

                    <button type='submit'>Buscar</button>
                </form>
            </div>

        );
    };
};

export default withRouter (Buscador);