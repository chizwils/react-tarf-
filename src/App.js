import Nav from './component/nav/Nav'
import Footer from './component/Footer/Footer'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
//import './head/head'
import Home from './pages/home'
import Contact from './pages/contact'
import Work from './pages/work'
//require ('./js/webflow')
class App extends Component {
  componentDidMount(){
    const script1 = document.createElement("script");
    script1.async = true;
    script1.type = 'text/javascript'
    script1.src = "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f91add57eae516db2fb92c0";
    script1.integrity = "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=";
    script1.crossOrigin ='anonymous'
    document.body.appendChild(script1)
    const script = document.createElement("script");
    script.async = true;
    script.type = 'text/javascript'
    script.src = './js/webflow.js';
    document.body.appendChild(script)
  }
  render(){
  return (
    
  
      
      <BrowserRouter>
        <div className="main " style={{opacity: "0"}} ref={el=>(this.dev = el)}>
          <Nav/>
          <Switch>
            <Route path='/' component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/work"component={Work}/>
          </Switch>
          <Footer/>
          <div style={{display:"block"}} className="preloader-half-half">
    <div className="preloader-top"></div>
    <div className="preloader-bottom"></div>
    <div className="preloader-line"></div>
  </div>
  
        </div>
      </BrowserRouter>
     
    
  );}
}

export default App;
