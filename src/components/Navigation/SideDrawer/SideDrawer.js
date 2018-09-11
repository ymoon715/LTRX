import React, { Component } from 'react';
import './SideDrawer.css'


class SideDrawer extends Component {
    componentDidMount(){
        document.addEventListener('scroll',this.textcolorchange)
        for (let i = 0; i < document.getElementsByClassName('side-li').length;i++){
        document.getElementsByClassName('side-li')[i].addEventListener('click',this.props.click)
        }
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

    textcolorchange = () => {
        const servicesH = document.getElementById("services").offsetTop - 100
        const pharmacyH = document.getElementById("pharmacy").offsetTop - 100
        const aboutH = document.getElementById("about").offsetTop - 100
        const contactH = document.getElementById("contact").offsetTop - 100
        if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < servicesH) {
            document.getElementsByClassName("side-li")[0].className = "side-li active"
            document.getElementsByClassName("side-li")[1].className = "side-li"
            document.getElementsByClassName("side-li")[2].className = "side-li"
            document.getElementsByClassName("side-li")[3].className = "side-li"
            document.getElementsByClassName("side-li")[4].className = "side-li"
        } else if (document.documentElement.scrollTop > servicesH && document.documentElement.scrollTop < pharmacyH) {
            document.getElementsByClassName("side-li")[0].className = "side-li"
            document.getElementsByClassName("side-li")[1].className = "side-li active"
            document.getElementsByClassName("side-li")[2].className = "side-li"
            document.getElementsByClassName("side-li")[3].className = "side-li"
            document.getElementsByClassName("side-li")[4].className = "side-li"
        }  else if (document.documentElement.scrollTop > pharmacyH && document.documentElement.scrollTop < aboutH) {
            document.getElementsByClassName("side-li")[0].className = "side-li"
            document.getElementsByClassName("side-li")[1].className = "side-li"
            document.getElementsByClassName("side-li")[2].className = "side-li active"
            document.getElementsByClassName("side-li")[3].className = "side-li"
            document.getElementsByClassName("side-li")[4].className = "side-li"
        }  else if (document.documentElement.scrollTop > aboutH && document.documentElement.scrollTop < contactH) {
            document.getElementsByClassName("side-li")[0].className = "side-li"
            document.getElementsByClassName("side-li")[1].className = "side-li"
            document.getElementsByClassName("side-li")[2].className = "side-li"
            document.getElementsByClassName("side-li")[3].className = "side-li active"
            document.getElementsByClassName("side-li")[4].className = "side-li"
        } else if (document.documentElement.scrollTop > contactH) {
            document.getElementsByClassName("side-li")[0].className = "side-li"
            document.getElementsByClassName("side-li")[1].className = "side-li"
            document.getElementsByClassName("side-li")[2].className = "side-li"
            document.getElementsByClassName("side-li")[3].className = "side-li"
            document.getElementsByClassName("side-li")[4].className = "side-li active"
        }
    }
    render() {
        let drawerClass = 'sidedrawer'
        if (this.props.drawerOpen) {
            drawerClass = 'sidedrawer open'
        }
        return (
        <div className={drawerClass}>
            <nav className="sidedrawer-nav">
                <ul>
                    <li onClick={this.homeHandler} className="side-li">Home</li>
                    <li onClick={this.serviceHandler} className="side-li">Service</li>
                    <li onClick={this.pharmacyHandler} className="side-li">Pharmacy</li>
                    <li onClick={this.aboutHandler} className="side-li">About</li>
                    <li onClick={this.contactHandler} className="side-li">Contact</li>
                </ul>
            </nav>
        </div>
        )
    }
}

export default SideDrawer