import React, { Component } from "react";
import SeccionSerie from "../../componentes/SeccionSerie/SeccionSerie";
import Filtro from "../../componentes/Filtro/Filtro";

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
        filtro: "",
        click: 0
        };
    }

    filtros = (texto) => {
        this.setState({ filtro: texto });
    };

    cargarMas = () => {
        this.setState({
            click: this.state.click + 1
        });
    };

    render() {
        return (
        <div>

            <Filtro
                placeholder="flitro"
                value={this.state.filtro}
                onChange={this.filtros}
            />

            <SeccionSerie
                filtro={this.state.filtro}
                mostrarBoton={true}
            />

        </div>
        );
    }
}

export default Series;