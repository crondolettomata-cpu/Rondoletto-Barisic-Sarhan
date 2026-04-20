import React, { Component } from "react";
import Cookies from "universal-cookie";
import "./styles.css";

const cookies = new Cookies();

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    evitarSubmit(event) {
        event.preventDefault();

       
        if (this.state.password.length < 6) {
            this.setState({ error: "La contraseña debe tener al menos 6 caracteres" });
            return; 
        }

     
        let usuariosGuardados = localStorage.getItem('Usuarios');
        let listaUsuarios = [];

        if (usuariosGuardados !== null && usuariosGuardados !== "") {
            listaUsuarios = JSON.parse(usuariosGuardados);
        }

        let usuarioExistente = listaUsuarios.find((usuario) => usuario.email === this.state.email);

        if (usuarioExistente) {
            this.setState({ error: "El email ya está en uso" });
            return; 
        }

       
        let nuevoUsuario = {
            email: this.state.email,
            password: this.state.password
        };

        listaUsuarios.push(nuevoUsuario);
        localStorage.setItem("Usuarios", JSON.stringify(listaUsuarios));

        
        cookies.set("user-auth-cookie", this.state.email, { path: '/' });

        
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <h2>Crear Cuenta</h2>
                    <form className="auth-form" onSubmit={(event) => this.evitarSubmit(event)}>
                        <input
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={(event) => this.setState({ email: event.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })}
                        />
                        <button type="submit">Crear cuenta</button>
                    </form>
                    {this.state.error !== "" ? <p style={{ color: 'red' }}>{this.state.error}</p> : null}
                </div>
            </div>
        );
    }
}

export default Register;