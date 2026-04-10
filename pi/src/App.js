import React from "react";
import Header from './componentes/Header/Header';
import NotFound from './screens/NotFound/NotFound';
import {Switch, Route} from 'react-router-dom'
import Resultados from './screens/Resultados/Resultados';
import Home from "./screens/Home/Home";
import Buscador from "./componentes/Buscador/Buscador"
import Register from "./screens/Register/Register";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Detalles from "./screens/Detalles/Detalles";
import Favoritos from "./screens/Favoritos/Favoritos";
import Login from "./screens/Login/Login";

function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/Detalles" component={Detalles}/>
        <Route path="/Favoritos" component={Favoritos}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Peliulas" component={Peliculas}/>
        <Route path="/Resultados" component={Resultados}/>
        <Route path="/Series" component={Series}/>
        <Route path="/Register" component={Register} />

        <Route path='/Busqueda/:busqueda' component={Buscador}/>
        <Route exact path="/Home" component={Home}/>

        <Route path='' component={NotFound}/>
      </Switch>
    
    </div>
  );
}

export default App;
