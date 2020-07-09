import React, {useState} from 'react';
import '../styles/BadgeNew.css'

import header from '../images/badge-header.svg'
import { Navbar } from '../components/Navbar';
import { Badge } from '../components/Badge';
import { BadgeForm } from '../components/BadgeForm';

export const BadgeNew = (props) => {
    const [ user , setUser] = useState({form:{}});

    const handleChange = e => {
        const nextForm = user.form
        nextForm[e.target.name]=e.target.value
        setUser(
            {form:nextForm}
    )}

    return(
    <div>
        <Navbar/> 
        <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt=""/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                     {/* Inserto los props */}
                    <Badge firstName={user.form.firstName} lastName={user.form.lastName} jobTitle={user.form.jobTitle} twitter={user.form.twitter} email={user.form.email}/>
                </div>
                <div className="col">
                    {/* Inserto los props */}
                    <BadgeForm onChange={handleChange} formValues={user.form}/>
                </div>       
            </div> 
        </div>
    </div>
    )
}
export default BadgeNew;