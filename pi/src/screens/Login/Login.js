import React, { Component } from 'react';
import "./styles.css";


class Login extends Component {
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

       
        let usuariosGuardados = localStorage.getItem('Usuarios');
        
        
        if (usuariosGuardados === null) {
            this.setState({ error: "Credenciales incorrectas" });
            return;
        }

        let listaUsuarios = JSON.parse(usuariosGuardados);

        
        let usuarioValido = listaUsuarios.find((usuario) => {
            return usuario.email === this.state.email && usuario.password === this.state.password;
        });

       
        if (usuarioValido) {
            
            document.cookie = "user=" + usuarioValido.email + "; path=/";
            
            
            localStorage.setItem("userLoggedIn", usuarioValido.email);

           
            this.props.history.push('/home');
        } else {
            
            this.setState({ error: "Credenciales incorrectas" });
        }
    }

    controlarEmail(event) {
        this.setState({ email: event.target.value });
    }

    controlarPassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className ="login-container">
                <div className="login-card"> 
                <h2>Iniciar Sesión</h2>
                <form onSubmit={(event) => this.evitarSubmit(event)}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(event) => this.controlarEmail(event)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={this.state.password}
                        onChange={(event) => this.controlarPassword(event)}
                    />
                    <button type="submit">Ingresar</button>
                </form>

               
                {this.state.error !== "" ? <p style={{ color: "red" }}>{this.state.error}</p> : null}
                </div>
            </div>
        );
    }
}

export default Login;