//Importo React y sus funcionalidades (Component,useState,useEffect,etc)
import React from 'react';
import ReactDOM from 'react-dom';

// Importo los estilos
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

// Importo los componentes
import {App } from './components/App'

ReactDOM.render(<App/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
