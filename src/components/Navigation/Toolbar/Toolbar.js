import React, {Component} from 'react';
import './Toolbar.css'
import Logo from './Logo.JPG'


class Toolbar extends Component {
    componentDidMount(){
        document.addEventListener("scroll", this.tbFadeHandler)
        document.addEventListener('scroll',this.textcolorchange)
        document.getElementById('toolbar-drawer').addEventListener('click', this.tbHandler)
    }

    homeHandler = () => {
        document.getElementById('home').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        })
    }
    serviceHandler = () => {
        document.getElementById('services').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        })
    }
    pharmacyHandler = () => {
        document.getElementById('pharmacy').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        })
    }
    aboutHandler = () => {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        })
    }
    contactHandler = () => {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        })
    }
    
    tbFadeHandler = () => {
        const serviceHeight = document.getElementById("services").offsetTop - 50;
        if (document.body.scrollTop > serviceHeight || document.documentElement.scrollTop > serviceHeight || this.props.drawerOpen){
            document.getElementById("toolbar").className = "toolbar-background";
        } else {
            document.getElementById("toolbar").className = "toolbar";
        }
    }

    tbHandler = () => {
        const serviceHeight = document.getElementById("services").offsetTop - 50;
        if (!this.props.drawerOpen && document.documentElement.scrollTop < serviceHeight) {
            document.getElementById("toolbar").className = "toolbar-background";
        } else if (this.props.drawerOpen && document.documentElement.scrollTop < serviceHeight){
            document.getElementById("toolbar").className = "toolbar";
        }
    }

    textcolorchange = () => {
        const servicesH = document.getElementById("services").offsetTop - 100
        const pharmacyH = document.getElementById("pharmacy").offsetTop - 100
        const aboutH = document.getElementById("about").offsetTop - 100
        const contactH = document.getElementById("contact").offsetTop - 100
        if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < servicesH) {
            document.getElementsByClassName("tool-li")[0].className = "tool-li active"
            document.getElementsByClassName("tool-li")[1].className = "tool-li"
            document.getElementsByClassName("tool-li")[2].className = "tool-li"
            document.getElementsByClassName("tool-li")[3].className = "tool-li"
            document.getElementsByClassName("tool-li")[4].className = "tool-li"
        } else if (document.documentElement.scrollTop > servicesH && document.documentElement.scrollTop < pharmacyH) {
            document.getElementsByClassName("tool-li")[0].className = "tool-li"
            document.getElementsByClassName("tool-li")[1].className = "tool-li active"
            document.getElementsByClassName("tool-li")[2].className = "tool-li"
            document.getElementsByClassName("tool-li")[3].className = "tool-li"
            document.getElementsByClassName("tool-li")[4].className = "tool-li"
        }  else if (document.documentElement.scrollTop > pharmacyH && document.documentElement.scrollTop < aboutH) {
            document.getElementsByClassName("tool-li")[0].className = "tool-li"
            document.getElementsByClassName("tool-li")[1].className = "tool-li"
            document.getElementsByClassName("tool-li")[2].className = "tool-li active"
            document.getElementsByClassName("tool-li")[3].className = "tool-li"
            document.getElementsByClassName("tool-li")[4].className = "tool-li"
        }  else if (document.documentElement.scrollTop > aboutH && document.documentElement.scrollTop < contactH) {
            document.getElementsByClassName("tool-li")[0].className = "tool-li"
            document.getElementsByClassName("tool-li")[1].className = "tool-li"
            document.getElementsByClassName("tool-li")[2].className = "tool-li"
            document.getElementsByClassName("tool-li")[3].className = "tool-li active"
            document.getElementsByClassName("tool-li")[4].className = "tool-li"
        } else if (document.documentElement.scrollTop > contactH) {
            document.getElementsByClassName("tool-li")[0].className = "tool-li"
            document.getElementsByClassName("tool-li")[1].className = "tool-li"
            document.getElementsByClassName("tool-li")[2].className = "tool-li"
            document.getElementsByClassName("tool-li")[3].className = "tool-li"
            document.getElementsByClassName("tool-li")[4].className = "tool-li active"
        }
    }

    render(){
    return (
        <header id="toolbar" className="toolbar">
            <nav className="toolbar-nav">

                <div className="toolbar-logo">
                    <img onClick={this.homeHandler} src={Logo} alt="LTRX" />
                </div>
                    
                <div className="spacer" />

                <div className="toolbar-items effect">   
                        <a onClick={this.homeHandler} className="tool-li" >Home</a>
                        <a onClick={this.serviceHandler} className="tool-li" >Service</a>
                        <a onClick={this.pharmacyHandler} className="tool-li" >Pharmacy</a>
                        <a onClick={this.aboutHandler} className="tool-li" >About</a>
                        <a onClick={this.contactHandler} className="tool-li" >Contact</a>                   
                </div>

                <div id="toolbar-drawer" onClick={this.props.click} className="toolbar-drawer">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
            </nav>
        </header>
    )}
}

export default Toolbar;