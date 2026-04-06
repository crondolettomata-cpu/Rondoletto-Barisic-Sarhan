import React from "react";
import Header from './componentes/Header/Header';
import NotFound from './screens/NotFound/NotFound';
import {Switch, Route} from 'react-router-dom'
import Resultados from './screens/Resultados/Resultados';
import Home from "./screens/Home/Home";
import Buscador from "./componentes/Buscador/Buscador"


function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route path='/busqueda/:busqueda' component={Buscador}/>
        <Route path="/home" component={Home}/>
        <Route path='' component={NotFound}/>
      </Switch>
    
    </div>
  );
}

export default App;
