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
import Footer from "./componentes/Footer/Footer";
import Login from "./screens/Login/Login";

function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/detalles" component={Detalles}/>
        <Route path="/favoritos" component={Favoritos}/>
         <Route path="/login" component={Login}/> 
        <Route path="/peliculas" component={Peliculas}/>
        <Route path="/resultados" component={Resultados} />
        <Route path="/series" component={Series}/>
        <Route path="/register" component={Register} />

        <Route path='/busqueda/:busqueda' component={Buscador}/>

        <Route path='' component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
