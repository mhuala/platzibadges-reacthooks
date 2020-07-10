import React from 'react';

import {Link} from 'react-router-dom'

import logo from '../images/logo.svg'
import "../styles/Navbar.css"

export const Navbar = (props) => (
    <div className="Navbar">
        {/* Encerramos esto en un container-fluid para generar el padding y que el contenido no esté pegado a la izquierda de la pantalla */}
        <div className="container-fluid">
            {/* Reemplazamos la antigua etiqueta a por Link */}
            <Link to="/" className="Navbar__brand">
                <img src={logo} alt="Logo" className="Navbar__brand-logo"/>
                <span className="font-weight-light">Platzi </span>
                <span className="font-weight-Bold">  Conf</span>
            </Link>
        </div>
    </div>
    )