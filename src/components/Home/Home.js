import React, { Component } from 'react';
import './Home.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Wrapper from '../hoc/Wrapper'


class Home extends Component {
    serviceHandler = () => {
        document.getElementById('services').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        })
    }
    render() {
        return (
        <Wrapper>
            <Toolbar click={this.props.click} drawerOpen={this.props.drawerOpen} />
            <div id="home" className="home">
                <div className="home-title">
                    <h1 className="home-text first">Experience Personalized<br/> Service</h1>
                    <p className="home-text second">We make sure you are confident about your prescription before you leave our pharmacy</p>
                    <i onClick={this.serviceHandler} className="fas fa-chevron-down"></i>
                </div>
                
                
            </div>
        </Wrapper>
        )
    }
}

export default Home;