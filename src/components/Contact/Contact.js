import React,{Component} from 'react';
import GoogleMap from './GoogleMap/GoogleMap'
import './Contact.css'

class Contact extends Component {
    componentDidMount(){
        document.addEventListener('scroll',this.titleHandler);
        document.addEventListener('scroll',this.contentFadeHandler);
        document.addEventListener('scroll',this.mapFadeHandler);
    }

    titleHandler = () =>{
        const contactHeight = document.getElementById("contact").offsetTop - 500;
        if (document.body.scrollTop > contactHeight || document.documentElement.scrollTop > contactHeight || this.props.drawerOpen){
            document.getElementsByClassName('contact-text')[0].className = 'contact-text animated'
        }
    }

    contentFadeHandler = () => {
        const contactHeight = document.getElementById("contact").offsetTop - 400;
        if (document.body.scrollTop > contactHeight || document.documentElement.scrollTop > contactHeight || this.props.drawerOpen){
            document.getElementsByClassName('contact-info')[0].className = 'contact-info animated'
        }
    }
    mapFadeHandler = () => {
        const contactHeight = document.getElementById("contact").offsetTop - 150;
        if (document.body.scrollTop > contactHeight || document.documentElement.scrollTop > contactHeight || this.props.drawerOpen){
            document.getElementsByClassName('map')[0].className = 'map animated'
        }
    }


    render () {
        return (
                    <section id="contact">
                        <div className="contact-text">
                            <h1>
                                Contact us
                            </h1>
                            <p>
                                Let us know how we can help you.<br />
                                Monday-Saturday 9AM to 6PM
                            </p>
                            <div className="contact-underline" />
                        </div>
                        <div className="contact-info">

                            <div className="contact-container">
                                <div className="contact-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="contact-desc">
                                    <h1>Contact</h1>
                                    <p>P: (213) 680-4011 <br />
                                    F: (213) 680-0307 <br />
                                    misook@littletokyorx.com</p>
                                </div>
                            </div>
                            <div className="contact-container middle">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-desc">
                                    <h1>Address</h1>
                                    <p>402 E. 2nd St <br/>
                                    Los Angeles, CA 90012</p>
                                </div>
                            </div>
                            <div className="contact-container">
                                <div className="contact-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <div className="contact-desc">
                                    <h1>Can't find us?</h1>
                                    <p>We are located across from the Office Depot, in the Honda Plaza. Free parking is available with validaiton.</p>
                                </div>
                            </div>

                        </div>
                        <div class="map">
                            <GoogleMap />
                        </div>
                    </section>
       )}
}
export default Contact;