import React , {Component} from "react";
import { Link } from "react-router-dom";
class Favoritos extends Component {
    constructor (props) {
        super(props)
        this.state = {
            peliculas : [],
            series : []
        }
    }
    componentDidMount () {
        if (!document.cookie) {
            this.props.history.push("/")
        }
        let PStorage = localStorage.getItem("peliculasFav")
        let SStorage = localStorage.getItem("seriesFav")
        if (PStorage !== null) {
            this.setState ({
                peliculas : JSON.parse(PStorage)
            })
        }
        if (SStorage !== null) {
            this.setState ({
                series : JSON.parse(SStorage)
            })
        }
    }

};

export default Favoritos