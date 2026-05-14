import React, {useState, useEffect} from 'react';
import "./styles.css";
import Cookies from "universal-cookie"

const cookies = new Cookies ();


function Login (props) {
    const [ email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const evitarSubmit = (event) => {
        event.preventDefault();

        let usuariosGuardados = localStorage.getItem('Usuarios');
        
        if (usuariosGuardados === null || usuariosGuardados === "") {
            this.setState( "Credenciales incorrectas" );
            return;


    }

    let listaUsuarios = JSON.parse(usuariosGuardados);

    let usuarioValido = listaUsuarios.find((usuario) => {
            return usuario.email === email && usuario.password === password;
        });


     if (usuarioValido) {
            
            cookies.set("user-auth-cookie" , usuarioValido.email);
             
            props.history.push('/');
        } else {
            
         setError( "Credenciales incorrectas" );
        } 

};

 return (
            <div className ="login-container">
                <div className="login-card"> 
                <h2>Iniciar Sesión</h2>
                <form onSubmit={(event) => evitarSubmit(event)}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="submit">Ingresar</button>
                </form>

               
                {error !== "" ? <p style={{ color: "red" }}>{error}</p> : null}
                </div>
            </div>
        );
    
}

export default Login;

 

       
       
        
       

      

        
       

       
       
    