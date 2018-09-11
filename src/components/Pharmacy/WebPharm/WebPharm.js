import React from 'react';
import Wrapper from '../../hoc/Wrapper'
import './WebPharm.css'
import LTRX from '../pharmacy.jpg'
import Side from '../side.jpg';
import Front from '../front.jpg';
const webPharm = (props) => {
        let webpharmClass;
        if (props.isMobile) {
            webpharmClass = 'pharmacy-blocks none'
        } else if (!props.isMobile) {
            webpharmClass = 'pharmacy-blocks'
        }
        return (<div className={webpharmClass}>
                    <div className="pharmacy-container">    
                                <div className="pharmacy-left">
                                    <img src={LTRX} alt="pharmacy" />
                                </div>
                                <div className="pharmacy-right">
                                    <div className="pharmacy-description">
                                    <h2>Pharmacist-Patient Relationship</h2>
                                        <p>We have been helping patients
                                            in the local community with
                                            their health by developing
                                            a strong pharmacist-patient
                                                relationship</p>
                                </div>
                                </div>
                            </div>
                            <div className="pharmacy-container">    
                                <div className="pharmacy-left">
                                <div className="pharmacy-description">
                                        <h2>High Quality Service</h2>
                                        <p>Our pharmacy is dedicated to providing
                                             high quality prescription services,
                                              as well as health care products for all
                                               your health needs. We accept most major
                                                insurance plans, and are committed to
                                                 providing you with fast, friendly service.</p>
                                    </div>
                                </div>
                                <div className="pharmacy-right">
                                    <img src={Side} alt="pharmacy" />
                                </div>
                            </div>
                            <div className="pharmacy-container">   

                                    <div className="pharmacy-left">
                                        <img src={Front} alt="pharmacy" />
                                    </div>

                                    <div className="pharmacy-right">
                                        
                                        <div className="pharmacy-description">
                                        <h2>Shouldn't Be Complicated</h2>
                                            <p>We also provide something else you 
                                                can't find just anywhere. We'll 
                                                take the time to talk with you 
                                                whenever you have healthcare/insurance
                                                concerns or questions.</p>
                                    </div>
                                    </div>
                    </div>
            </div>
            )
}

export default webPharm;