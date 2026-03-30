import React, { Component } from "react";
import {withRouter} from 'react-router-dom'


class Buscador extends Component {

    constructor(props){
        super(props);
        this.state ={
            search: ''
        };
    };

    onSubmit(event){
        event.preventDeFault()
    };

    guardarBusqueda(event){
        this.setState(
            {search: event.target.value}, () => this.state.search)
    }

    render(){
        return(
            <div>
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input onChange={(event) => this.guardarBusqueda(event)} value={this.state.search}/>
                    <button type='submit'>Buscar</button>
                <form/>
            </div>
        );
    };
};

export default withRouter (Buscador)