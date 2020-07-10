import React from 'react';

// Importamos las funcionalidades de React-router
import { BrowserRouter, Switch , Route} from 'react-router-dom';

// Importamos las paginas creadas
import {BadgeNew } from '../pages/BadgeNew';
import {BadgesDisplay } from '../pages/BadgesDisplay';
import {Layout } from './Layout';
import {NotFound } from './NotFound';

// Creamos la función (En caso de no tener estados, o que hayan mas funciones)

export const App = (props) => (
        // asdasd
        <BrowserRouter>
            <Layout>
            {/* Funciona de manera parecida que el switch */}
            <Switch>
                {/* Especificamos las rutas que mostrarán las paginas */}
                <Route exact path="/badges" component={BadgesDisplay}/>
                <Route exact path="/badges/new" component={BadgeNew}/>
                {/* NotFound */}
                <Route component={NotFound}/>
            </Switch>
            </Layout>
        </BrowserRouter>
    );


