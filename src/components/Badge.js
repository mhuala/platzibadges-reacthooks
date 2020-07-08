import React from 'react';

import '../styles/Badge.css'
import confLogo from '../images/badge-header.svg'
import avatarURL from '../images/avatar.JPG'

// Los props son pasados cuando se llama al componente 
export const Badge = (props) => (

<div className="Badge">
    <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia"/>
    </div>
    <div className="Badge__section-name">
        <img src={avatarURL} className="Badge__avatar" alt="Avatar"/>
        <h1>{props.firstName} <br/> {props.lastName}</h1>
    </div>
    <div className="Badge__section-info">
        <h3>{props.jobTitle}</h3>
        {/* Al hacerlo div se le quita el margen inferior que tendria si fuera parrafo */}
        <div>@{props.twitter}</div>
    </div>

    <div className="Badge__footer">
        #platziconf
    </div>

</div>
)