import React, { useState } from "react";
import Cookies from "universal-cookie";
import "./styles.css";

const cookies = new Cookies();

function Register (props){
    const [email, setEmail] = useState("")
    const [password, setPassword] =  useState("")
    const [error, setError] = useState("")

    
    const evitarSubmit = (event) => {
        event.preventDefault();

       
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres" );
            return; 
        }

     
        let usuariosGuardados = localStorage.getItem('Usuarios');
        let listaUsuarios = [];

        if (usuariosGuardados !== null && usuariosGuardados !== "") {
            listaUsuarios = JSON.parse(usuariosGuardados);
        }

        let usuarioExistente = listaUsuarios.find((usuario) => usuario.email === this.state.email);

        if (usuarioExistente) {
            setError("El email ya está en uso" );
            return; 
        }

       
        let nuevoUsuario = {
            email: email,
            password: password
        };

        listaUsuarios.push(nuevoUsuario);
        localStorage.setItem("Usuarios", JSON.stringify(listaUsuarios));

        
        cookies.set("user-auth-cookie", this.state.email, { path: '/login' });

        
        this.props.history.push('/login');
    }

        return (
            <div className="auth-container">
                <div className="auth-card">
                    <h2>Crear Cuenta</h2>
                    <form className="auth-form" onSubmit={evitarSubmit}>
                        <input
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={(event) => email( event.target.value )}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={this.state.password}
                            onChange={(event) => setPassword(  event.target.value )}
                        />
                        <button type="submit">Crear cuenta</button>
                    </form>
                    {error !== "" ? <p style={{ color: 'red' }}>{error}</p> : null}
                </div>
            </div>
        );
}

export default Register;