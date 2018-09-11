import React, {Component} from 'react';
import Misook from './misook.jpg';
import './About.css'

class About extends Component {
    componentDidMount(){
        document.addEventListener('scroll',this.titleHandler);
        document.addEventListener('scroll',this.sliderFadeHandler);
    }

    titleHandler = () =>{
        const aboutHeight = document.getElementById("about").offsetTop - 500;
        if (document.body.scrollTop > aboutHeight || document.documentElement.scrollTop > aboutHeight || this.props.drawerOpen){
            document.getElementsByClassName('about-title')[0].className = 'about-title animated'
        }
    }

    sliderFadeHandler = () => {
        const aboutHeight = document.getElementById("about").offsetTop - 400;
        if (document.body.scrollTop > aboutHeight || document.documentElement.scrollTop > aboutHeight || this.props.drawerOpen){
            document.getElementsByClassName('about-container')[0].className = 'about-container animated'
        }
    }
    render() {
        return (
            <div id="about">
                <section className="about">
                        <div className="about-title">
                            <h1>Meet our pharmacist</h1>
                            <p>Determined to make a difference.</p>
                            <div className="about-underline" />
                        </div>
                    <div className="about-container">
        
                        <div className="about-img">
                            <img src={Misook} alt="Misook" />
                        </div>
                        <div className="about-text">
                                <h2>Misook Cho</h2>
                                <p>
                                    Misook always greets her customer with her
                                     smile and takes her time to make sure her
                                      patients are fully taken care of. Don't be surprised if
                                       she remembers who you are from your first visit and remembers
                                        exactly what you need the next time you come in.
                                </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
} 

export default About;