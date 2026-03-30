import React, {Component} from "react";

export default class Resultados extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>Resultados de: {this.props.match.params.busqueda}</div>
        )
    }
}