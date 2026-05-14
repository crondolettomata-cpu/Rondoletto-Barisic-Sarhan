import React, { Component } from "react";
import { useState } from "react";

function Filtro (props){
    
        return (
        <div className="filtro">
            <input
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
        );
    
}

export default Filtro;