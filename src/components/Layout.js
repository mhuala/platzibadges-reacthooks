import React from 'react';

import { Navbar } from '../components/Navbar';

export const Layout = (props) => (
    // Colocar la etiqueta React.Fragment nos permitará ocultar todos los div vacios al navegador
    <React.Fragment>
        <Navbar/>
        {/* El layout recibe como props a sus children y los renderiza, estos son todas las etiquetas que están dentro de Layout en App.js */}
        {props.children}
    </React.Fragment>
)