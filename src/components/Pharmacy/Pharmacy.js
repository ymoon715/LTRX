import React, { Component } from 'react';
import {connect} from 'react-redux'
import './Pharmacy.css'
import Webpharm from './WebPharm/WebPharm'
import Mobilepharm from './MobilePharm/MobilePharm'

class Pharmacy extends Component {
    componentDidMount(){
        document.addEventListener('scroll',this.titleHandler);
        document.addEventListener('scroll',this.sliderFadeHandler);
    }

    titleHandler = () =>{
        const pharmacyHeight = document.getElementById("pharmacy").offsetTop - 500;
        if (document.body.scrollTop > pharmacyHeight || document.documentElement.scrollTop > pharmacyHeight || this.props.drawerOpen){
            document.getElementsByClassName('pharmacy-title')[0].className = 'pharmacy-title animated'
        }
    }

    sliderFadeHandler = () => {
        const pharmacyHeight = document.getElementById("pharmacy").offsetTop - 400;
        if (document.body.scrollTop > pharmacyHeight || document.documentElement.scrollTop > pharmacyHeight || this.props.drawerOpen){
            document.getElementsByClassName('pharmslides')[0].className = 'pharmslides animated'
        }
    }

   render() {
       return (
            <div id="pharmacy">
                <section className="pharmacy">
                            <div className="pharmacy-title">
                                <h1>Our Pharmacy</h1>
                                <p>Helping the community since 2006.</p>
                                <div className="pharmacy-underline" />
                            </div>
                            <div className="pharmslides">
                                <Webpharm isMobile={this.props.isMobile} />
                                <Mobilepharm isMobile={this.props.isMobile} />
                            </div>

                </section>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isMobile: state.isMobile
    }
}


export default connect(mapStateToProps)(Pharmacy);