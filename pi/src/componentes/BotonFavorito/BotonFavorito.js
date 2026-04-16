import React, {Component} from "react";

export default class BotonFavorito extends Component {
    constructor (props) {
        super (props)
        this.state = {
            favorito : false
        }}

        componentDidMount(){
            let storage = localStorage.getItem ("favoritos")
            let favoritos = JSON.parse(storage)

            if (favoritos !== null) {
                let existe = favoritos.filter(fav => {
                    return fav.id === this.props.id && fav.tipo === this.props.tipo})
                if (existe.lenght > 0){
                    this.setState({
                        favorito: true
                    })
                }
            }
        }

        agregarFav (id, tipo) {
            let storage = localStorage.getItem("favoritos");
            let favoritos = JSON.parse(storage);
            let nuevoFavorito = {
                id: id,
                tipo: tipo
            }
            if (favoritos == null) {
                let primerFav = [nuevoFavorito]
                localStorage.setItem("favoritos", JSON.stringify(primerFav))
            }
            else {
                favoritos.push(nuevoFavorito);
                localStorage.setItem ("favoritos", JSON.stringify(favoritos));
            }
            this.setState ({favorito: true})
        }
        eliminarFav(id, tipo) {
            let storage = localStorage.getItem("favoritos");
            let favoritos = JSON.parse(storage); 
            let nuevosFavs = favoritos.filter(fav => {
                return !(fav.id === id && fav.tipo === tipo)
            })
            
            localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));
            this.setState({favorito: false})
        }
        render (){
            return (
                <div>
                    { this.state.favorito === false ? 
                    <button onClick={() => this.agregarFav(this.props.id, this.props.tipo)}>
                        Agregar a favoritos
                    </button>
                    :
                    <button onClik ={() => this.eliminarFav(this.props.id, this.props.tipo)}>
                        Eliminar de favoritos
                    </button>
                    }
                </div>
            )
        }
    }