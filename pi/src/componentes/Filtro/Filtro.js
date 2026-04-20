import React, { Component } from "react";

class Filtro extends Component{

    
    render(){
    return (
        <div className="filtro">
            <input
            type="text"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={(e) => this.props.onChange(e.target.value)}
            />
        </div>
        );
    }
};

export default Filtro;