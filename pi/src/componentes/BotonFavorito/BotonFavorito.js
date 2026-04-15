import React, {Component} from "react";

export default class BotonFavorito extends Component {
    constructor (props) {
        super (props)
        this.state = {
            favoritos : false
        }}

        componentDidMount(){
            let storage = localStorage.getItem ("favoritos")
            let favoritos = JSON.parse(storage)

            if (favoritos !== null) {
                let existe = favoritos.filter(fav => fav === this.props.id)
                if (existe.lenght > 0){
                    this.setState({
                        favorito: true
                    })
                }
            }
        }

        agregarFav (id) {
            let storage = localStorage.getItem("favoritos");
            let favoritos = JSON.parse(storage);
            if (favoritos == null) {
                let primerFav = [id];
                let primerFavString = JSON.stringify(primerFav);
                localStorage.setItem ("favoritos", primerFavString)
            }
            else {
                favoritos.push(id);
                localStorage.setItem ("favoritos", JSON.stringify(favoritos));
            }
            this.setState ({favorito: true})
        }
        eliminarFav(id) {
            let storage = localStorage.getItem("favoritos");
            let favoritos = JSON.parse(storage); 
            let nuevosFavs = favoritos.filter(fav => fav !== id)
            
            localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));
            this.setState({favorito: false})
        }
        render (){
            return (
                <div>
                    <button onClick= {() => this.agregarFav(this.props.id)}>
                        Agregar a favoritos
                    </button>
                    <button onClick = {() => this.agregarFav (this.props.id)}>
                        Eliminar de favoritos
                    </button>
                </div>
            )
        }
    }