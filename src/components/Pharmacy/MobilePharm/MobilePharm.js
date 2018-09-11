import React from 'react';
import LTRX from '../pharmacy.jpg'
import Side from '../side.jpg';
import Front from '../front.jpg';
import './MobilePharm.css'
const mobilePharm = (props) => {
    let mobpharmClass;
    if (props.isMobile) {
        mobpharmClass = 'mobpharm-block'
    } else if (!props.isMobile) {
        mobpharmClass = 'mobpharm-block none'
    }
    return (
            <div className={mobpharmClass}>
                    <div className="mobpharm-container">    
                            <div className="mobpharm-img">
                                    <img src={LTRX} alt="pharmacy" />
                                </div>
                                <div className="mobpharm-description">
                                    <h2>Pharmacist-Patient Relationship</h2>
                                    <p>We have been helping patients
                                            in the local community with
                                            their health by developing
                                            a strong pharmacist-patient
                                                relationship</p>
                                </div>
                    </div>
                    <div className="mobpharm-container">    
                            <div className="mobpharm-img">
                                    <img src={Side} alt="pharmacy" />
                                </div>
                                <div className="mobpharm-description">
                                    <h2>High Quality Service</h2>
                                    <p>Our pharmacy is dedicated to providing
                                             high quality prescription services,
                                              as well as health care products for all
                                             your health needs. We accept most major
                                             insurance plans, and are committed to
                                             providing you with fast, friendly service.</p>
                                </div>
                    </div>
                    <div className="mobpharm-container">    
                            <div className="mobpharm-img">
                                    <img src={Front} alt="pharmacy" />
                                </div>
                                <div className="mobpharm-description">
                                    <h2>Shouldn't Be Complicated</h2>
                                    <p>We also provide something else you 
                                        can't find just anywhere. We'll 
                                        take the time to talk with you 
                                        whenever you have healthcare/insurance
                                         concerns or questions.</p>
                                </div>
                    </div>
            </div>
    )
}

export default mobilePharm ;