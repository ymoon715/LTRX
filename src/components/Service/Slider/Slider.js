import React, { Component } from 'react';
import './Slider.css'
import Service from '../WebServices/Service'
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions'
const servone = [{
    service: "Medication Services",
    description: "Our pharmacists are always ready to help you with every prescription need. Our pharmacists will make sure your health comes first.",
    icon: "fas fa-mortar-pestle"
},{
    service: "Vaccines",
    description: "Stay up-to date with vaccines that can prevent serious illness. Call our pharmacy to find out if we have these vaccines in stock.",
    icon: "fas fa-syringe"
},{
    service: "Over-The-Counter",
    description: "We have a large selection of high-quality over-the-counter medications and supplements. If you aren't sure which one you should take for your needs, ask our pharmacist for a recommendation!",
    
    icon: "fas fa-prescription-bottle-alt"
}]

const servtwo = [{
    service: "Birth Control Rx",
    description: "Did your doctor forget to give you a refill for your birth control? Our head pharmacist Misook is able to prescribe birth controls. Call our pharmacy to find out more information regarding birth control prescriptions.",
    
    icon: "fas fa-pills"
},{
    service: "Diabetic Supplies",
    description: "We provide glucose test strips, lancets, and testing machines. We also have varieties of diabetic shoes in stock as well. We also have OTC items that is safe for diabetic patients to use.",
    
    icon: "fas fa-notes-medical"
},{
    service: "Delivery*",
    description: "We currently only deliver to following locations:Mayako Gardens, Little Tokyo Towers, Hollenback Palms, Sakura Gardens (formerly known as Keiro). If you or your family is a resident of any of these senior/retirement homes, give us a call and ask us about our delivery service.",
    icon: "fas fa-ambulance"
}];


class Slider extends Component {
    
    componentDidMount() {
        window.onload = this.sliderHandler();
        document.getElementById("prev").addEventListener('click',this.prevSlide);
        document.getElementById('next').addEventListener('click',this.nextSlide);
    }

    prevSlide=()=>{
        const slides = document.getElementsByClassName("slide");
        this.props.decIndex();
        if ( this.props.slideIndex > slides.length) {
            this.props.setToOne()
        }
        if ( this.props.slideIndex < 1 ) {
            this.props.setToLength()
        }
        for (let i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        slides[this.props.slideIndex - 1].style.display = "flex";
    }

    nextSlide=()=>{
        const slides = document.getElementsByClassName("slide");
        this.props.incIndex();
        if ( this.props.slideIndex > slides.length) {
            this.props.setToOne()
        }
        if ( this.props.slideIndex < 1 ) {
            this.props.setToLength()
        }
        for (let i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        slides[this.props.slideIndex - 1].style.display = "flex";
    }

    sliderHandler=()=>{
        const slides = document.getElementsByClassName("slide");
        if ( this.props.slideIndex > slides.length) {
            this.props.setToOne()
        }
        if ( this.props.slideIndex < 1 ) {
            this.props.setToLength()
        }
        for (let i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        slides[this.props.slideIndex - 1].style.display = "flex";

    }

 
    render() {
        let sliderClass;
        if (!this.props.isMobile) {
            sliderClass = 'slider'
        } else {
            sliderClass = 'slider none'
        }
        return (
            <div className={sliderClass}>
                <div className="slide">
                    {servone.map((ea,i)=>(
                        <Service key={i} icon={ea.icon} description={ea.description} service={ea.service} />
                    ))}
                </div>
                <div className="slide">
                    {servtwo.map((ea,i)=>(
                            <Service key={i} icon={ea.icon} description={ea.description} service={ea.service} />
                        ))}
                </div>
                <a id="prev">&#10094;</a>
                <a id="next">&#10095;</a>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        slideIndex: state.slideIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decIndex: () => dispatch({type: actionTypes.DECREMENT}),
        incIndex: () => dispatch({type: actionTypes.INCREMENT}),
        setToOne: () => dispatch({type: actionTypes.INDEXTOONE}),
        setToLength: () => dispatch({type: actionTypes.INDEXLENGTH})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);