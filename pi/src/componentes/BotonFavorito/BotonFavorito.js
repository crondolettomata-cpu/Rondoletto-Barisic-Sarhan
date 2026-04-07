import React from "react";
export default class BotonFavorito extends Component {
    constructor (props) {
        super (props)
        this.state = {
            favoritos : false
        }}
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
            this.setState ({favoritos: true})
        }
        eliminarFav(id) {
            let storage = localStorage.getItem("favoritos");
            let favoritos = JSON.parse(storage); 
            let nuevosFavs = favoritos.filter(function(fav){
                return fav !==id; 
            }); 
            localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));
            this.setState({favoritos: false})
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