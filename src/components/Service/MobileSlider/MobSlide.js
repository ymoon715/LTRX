import React from 'react';
import './MobSlide.css';

const mobSlide = props => (
    <div className="mob-slide">
        <div className="mob-icon">
            <i className={props.icon}></i>
        </div>
        <div className="mob-description">
            <h2>{props.service}</h2>
            <p>{props.description}</p>
        </div>
    </div>
)

export default mobSlide;