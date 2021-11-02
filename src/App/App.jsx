import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import Home from './Components/Home/Home';
import { Route, Redirect, Switch } from 'react-router';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';




export default class App extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar/>
           
            <Switch>

              <Route path='/home'> <Home/> </Route>
              {/* <Route path='/portfolio'> <Portfolio/> </Route>
              <Route path='/contact'> <Contact/> </Route>
              <Route path='/about'> <Contact/> </Route> */}
              
              <Redirect from="/" to="/home" />
            </Switch>
            
            <Footer/> 
            </React.Fragment>
        )
    }
}


