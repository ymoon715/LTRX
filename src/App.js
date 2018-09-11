import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Home from './components/Home/Home'
import Pharmacy from './components/Pharmacy/Pharmacy'
import Services from './components/Service/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Backdrop from './components/Backdrop/Backdrop'
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer'
import Footer from './components/Footer/Footer'
import * as actionTypes from './store/actions'

class App extends Component {

  state = {
    sideDrawer: false
  }

  componentDidMount() {
    window.onload = this.mobileHandler();
    window.onresize = this.mobileHandler;
  }

  backdropHandler = () => {
    this.setState((prevState)=>{
      return {sideDrawer: !prevState.sideDrawer}
    })
  }
  mobileHandler = () => {
    if (document.body.offsetWidth > 960 && this.props.isMobile != false) {
      this.props.notMobile();
      console.log("notMobile")
    } else if (document.body.offsetWidth < 960 && this.props.isMobile != true) {
      this.props.setMobile()
      console.log("ismobile");
    }
  }


  render() {
    let backdrop;
    if (this.state.sideDrawer) {
      backdrop = <Backdrop click={this.backdropHandler} />
    }
    return (
      <div className="App">
        {backdrop}
        <Home click={this.backdropHandler} drawerOpen={this.state.sideDrawer} />
        <SideDrawer  click={this.backdropHandler} drawerOpen={this.state.sideDrawer} />
        <Services />
        <Pharmacy />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      isMobile: state.isMobile
  }
}

const mapDispatchToProps = dispatch => {
  return {
      notMobile: () => dispatch({type: actionTypes.NOTMOBILE}),
      setMobile: () => dispatch({type: actionTypes.SETMOBILE})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
