import React from "react"
import "./styles.css"
export default function Loader(){
    return(
        <div className="loader-container">
            <h2>Cargando....</h2>
            <img src="/img/fotocargando.webp" alt="Cargando..."/>
        </div>
    )
}