import React from "react";
import {Provider} from 'react-redux'
import store from "./store"
import Jugadores from "./components/Jugadores";
import EquipoSeleccionado from "./components/EquipoSeleccionado"
import "./styles/styles.scss";


function App() {
  return (
    <Provider store ={store}>
         <main>
            <h1>Seleccionar Equipo</h1>
            <Jugadores></Jugadores>
            <EquipoSeleccionado></EquipoSeleccionado>
        </main>
    </Provider>
  );
}

export default App;
