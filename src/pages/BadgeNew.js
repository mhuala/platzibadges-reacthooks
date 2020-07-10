import React, {useState} from 'react';
import '../styles/BadgeNew.css'

import header from '../images/badge-header.svg'
import { Badge } from '../components/Badge';
import { BadgeForm } from '../components/BadgeForm';

export const BadgeNew = (props) => {
    const [ user , setUser] = useState({form:{
        firstName:'',
        lastName:'',
        jobTitle:'',
        twitter:'',
        email:'',
    }});

    const handleChange = e => {
        const nextForm = user.form
        nextForm[e.target.name]=e.target.value
        setUser(
            {form:nextForm}
    )}

    return(
    <React.Fragment>
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
    </React.Fragment>
    )
}
export default BadgeNew;