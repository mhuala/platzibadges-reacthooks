import React, {useState} from 'react';

export const BadgeForm = (props) => {
    // Funciones que tienen por parametro e (representa al evento
    // const handleChange= (e) => {console.log({name:e.target.name,value:e.target.value})} 
    const handleClick= (e) => console.log(); 

    // Componente
    return(
    <div>
        <h1> New Attendant</h1>
        <form action="">
            <div className="form-group">
                <label htmlFor="">  First Name </label>
                <input 
                value = {props.formValues.ola}
                onChange={props.onChange} 
                className="form-control" 
                type="text" 
                name="firstName"/>
            </div>
            <div className="form-group">
                <label htmlFor="">  Last Name </label>
                <input 
                value = {props.formValues.lastName}
                onChange={props.onChange}
                className="form-control" 
                type="text" 
                name="lastName"/>
            </div>
            <div className="form-group">
                <label htmlFor="">  E-Mail </label>
                <input 
                value = {props.formValues.email}
                onChange={props.onChange}
                className="form-control" 
                type="email" 
                name="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="">  Job Title </label>
                <input 
                value = {props.formValues.jobTitle}
                onChange={props.onChange}
                className="form-control" 
                type="text" 
                name="jobTitle"/>
            </div>
            <div className="form-group">
                <label htmlFor="">  Twitter </label>
                <input 
                value = {props.formValues.twitter}
                onChange={props.onChange}
                className="form-control" 
                type="text" 
                name="twitter"/>
            </div>
            {/* El boton tiene por defecto el tipo "submit", que al presionarlo refresca la pagina 
            de nuevo. Para evitarlo debemos cambiar el tipo a "button" */}
            <button type="button" className="btn btn-primary" onClick={handleClick}> Save </button>
        </form>
    </div>
)}
