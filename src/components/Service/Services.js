import React, { Component } from 'react';
import './Services.css';
import Slider from './Slider/Slider'
import Mobslider from './MobileSlider/MobileSlider'
import {connect} from 'react-redux'


class Services extends Component {
    componentDidMount(){
        document.addEventListener('scroll',this.titleHandler);
        document.addEventListener('scroll',this.sliderFadeHandler);
    }

    titleHandler = () =>{
        const serviceHeight = document.getElementById("services").offsetTop - 500;
        if (document.body.scrollTop > serviceHeight || document.documentElement.scrollTop > serviceHeight || this.props.drawerOpen){
            document.getElementsByClassName('services-text')[0].className = 'services-text animated'
        }
    }

    sliderFadeHandler = () => {
        const serviceHeight = document.getElementById("services").offsetTop - 400;
        if (document.body.scrollTop > serviceHeight || document.documentElement.scrollTop > serviceHeight || this.props.drawerOpen){
            document.getElementsByClassName('services-slider')[0].className = 'services-slider animated'
        }
    }

    render() {
        return (
            <div id="services">
                <div className="services-text">
                    <h1>
                        Services we offer
                    </h1>
                    <p>
                        Our exceptional service separates us from regular chain retail pharmacies.
                    </p>
                    <div className="services-underline" />
                </div>
                <div className="services-slider">
                    <Slider isMobile={this.props.isMobile} />
                    <Mobslider isMobile={this.props.isMobile} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.isMobile
    }
}


export default connect(mapStateToProps)(Services);