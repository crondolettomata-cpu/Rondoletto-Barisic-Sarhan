import React, {Component} from "react";
import Header from '../../componentes/Header/Header';
import "./styles.css";
import Cookies from "universal-cookie"

const cookies = new Cookies();

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            error:""
        };
    }


    evitarSubimit(event){
        event.preventDefault();

        let usuariosGuardados = localStorage.getItem('Usuarios');
        if (usuariosGuardados === null || usuariosGuardados === ""){
            usuariosGuardados = [];
        }
        else {
            usuariosGuardados = JSON.parse(usuariosGuardados);
        }


        let usuariosConEseEmail = usuariosGuardados.filter((usuario) =>{
            return usuario.email === this.state.email;
        });

        if (usuariosConEseEmail.length > 0){
            this.setState({error:"El email ya esta en uso"})
            return;
        }

        if (this.state.password.length < 6){
            this.setState({error:"la contraseña debe tener al menos 6 caracteres"});
            return;
        }

        let nuevoUsuario = {
            email: this.state.email,
            password: this.state.password
        };

        usuariosGuardados.push(nuevoUsuario);

        localStorage.setItem("Usuarios", JSON.stringify(usuariosGuardados));
        // localStorage.setItem("userLoggedIn", this.state.email);
        
        cookies.set("user-auth-cookie", this.state.email)

        this.props.history.push('/');

        this.setState({
            email:"",
            password: "",
            error: "",
        });

    }

    controlarEmail(event){
         this.setState({email:event.target.value});
    }

    controlarPassword(event){
          this.setState({password:event.target.value});
    }

    render (){
         return (
             <div className="auth-container">

                <div className="auth-card">
                  <React.Fragment>
                        <h2>Crear Cuenta</h2>
                  </React.Fragment>

                 <form className="auth-form" onSubmit={(event) => this.evitarSubimit(event)}>
                       <input
                           type="Email"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={(event) => this.controlarEmail(event)}/>
                        
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={this.state.password}
                            onChange={(event) => this.controlarPassword(event)}/>

                        <button type="submit">Crear cuenta</button>

           
                    </form>

                    {this.state.error !=="" ? <p>{this.state.error}</p> : null}
                    </div>
                </div>
            
            );
        }

}

export default Register 