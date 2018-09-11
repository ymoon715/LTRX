import React from 'react';
import './Service.css';


const service = (props) => (
    <div className="service-container">
        <div className="service-icon">
            <i className={props.icon}></i>
        </div>
        <div className="service-text">
            <h2>{props.service}</h2>
            <p>{props.description}</p>
        </div>
    </div>
)

export default service;