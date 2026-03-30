import React from "react";
import Header from './componentes/Header/Header';
import {Switch, Route} from 'react-router-dom'
import Resultados from './screens/Resultados/Resultados';

function App() {
  return (
    <div>
      <Route path='/busqueda/:busqueda' component={Resultados}/>
      <Route path='' component={NotFound}/>
    </div>
  );
}

export default App;
