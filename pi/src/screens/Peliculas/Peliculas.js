import React, { Component } from "react";
import SeccionPelicula from "../../componentes/SeccionPelicula/SeccionPelicula";
import Loader from "../../componentes/Loader/Loader";
import Filtro from "../../componentes/Filtro/Filtro";

class Peliculas extends Component {
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
            placeholder= "filtro"
            value={this.state.filtro}
            onChange={this.filtros}
        />

        <SeccionPelicula 
            filtro={this.state.filtro}
            mostrarBoton={true}
        />
        
      </div>
    );
  }
}

export default Peliculas;