import React from "react";
import Header from './componentes/Header/Header';
import NotFound from './screens/NotFound/NotFound';
import {Switch, Route} from 'react-router-dom'
import Resultados from './screens/Resultados/Resultados';
import Home from "./screens/Home/Home";
import Buscador from "./componentes/Buscador/Buscador"
import Register from "./screens/Register/Register";

function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route path="/Register" component={Register} />

        <Route path='/Busqueda/:busqueda' component={Buscador}/>
        <Route exact path="/Home" component={Home}/>



        <Route path='' component={NotFound}/>
      </Switch>
    
    </div>
  );
}

export default App;
