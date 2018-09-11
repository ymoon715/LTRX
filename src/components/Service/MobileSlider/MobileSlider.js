import React,{ Component} from 'react';
import Mobslide from './MobSlide'
import './MobileSlider.css'

const mobSlides = [{
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
},{
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
}]

class MobileSlider extends Component {
    state = {
        mobileIndex: 1
    }

    componentDidMount(){
        window.onload = this.mobSliderHandler();
        document.getElementById('mob-next').addEventListener('click',this.nextHandler);
        document.getElementById('mob-prev').addEventListener('click',this.prevHandler);
    }
    prevHandler = () => {
        this.setState({mobileIndex: this.state.mobileIndex -1});
        const slider = document.getElementsByClassName('mob-slide');
        if (this.state.mobileIndex > slider.length) {
            this.setState({mobileIndex: 1})
        }
        if (this.state.mobileIndex < 1) {
            this.setState({mobileIndex: slider.length})
        }
        for (let i = 0; i < slider.length; i++){
            slider[i].style.display = 'none';
        }
        slider[this.state.mobileIndex - 1].style.display = 'block';
    }
    nextHandler = () => {
        this.setState({mobileIndex: this.state.mobileIndex + 1});
        const slider = document.getElementsByClassName('mob-slide');
        if (this.state.mobileIndex > slider.length) {
            this.setState({mobileIndex: 1})
        }
        if (this.state.mobileIndex < 1) {
            this.setState({mobileIndex: slider.length})
        }
        for (let i = 0; i < slider.length; i++){
            slider[i].style.display = 'none';
        }
        slider[this.state.mobileIndex - 1].style.display = 'block';
    }

    mobSliderHandler = () => {
        const slider = document.getElementsByClassName('mob-slide');
        if (this.state.mobileIndex > slider.length) {
            this.setState({mobileIndex: 1})
        }
        if (this.state.mobileIndex < 1) {
            this.setState({mobileIndex: slider.length})
        }
        for (let i = 0; i < slider.length; i++){
            slider[i].style.display = 'none';
        }
        slider[this.state.mobileIndex - 1].style.display = 'block';
    }

    render(){
        let mobSliderClass;
        if (this.props.isMobile) {
            mobSliderClass = 'mob-slider'
        } else {
            mobSliderClass = 'mob-slider none'
        }
        return (
            <div className={mobSliderClass} >
                {mobSlides.map((ea,i)=>(
                    <Mobslide key={i} service={ea.service} description={ea.description} icon={ea.icon} />
                ))}
                <a id="mob-prev">&#10094;</a>
                <a id="mob-next">&#10095;</a>
            </div>
        )
    }
}

export default MobileSlider;