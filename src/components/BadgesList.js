import React, { useState } from 'react';

import '../styles/BadgesList.css'

export const BadgesList = props => (
    <ul className="list-unstyled BadgesList">
    {props.badges.map((badge)=>{
       return(
          <li key={badge.id}className="BadgesListItem">
             <img src={badge.avatarUrl} alt=""className="BadgesListItem__avatar"/>
             <div>
                <div>
                <strong>{badge.firstName} {badge.lastName}</strong>
                </div>
                <div className="Twitter__name">
                   <span className="Twitter__logo"></span>@{badge.twitter}
                </div>
                <div>{badge.jobTitle}</div>
             </div>
          </li>)})}
    </ul>    
)
