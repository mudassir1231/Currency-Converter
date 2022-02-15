import logo from './logo.svg';
import './App.css';
//import header from './components/header';
import Navbar from './components/Navbar';
import Body from './components/body';
import About from './components/About';
import Footer from './components/Footer';
import NewsFeed from './components/NewsFeed';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <>

        <Router>
          <Navbar/>

          <Switch>

              <Route path="/about">
                <About/>
              </Route>

              <Route path="/" render={()=>{
              return(
              <>
              <CurrencyConverter/>
              </>
              )}}>
              
              </Route>
              
              <Route path="/body">
                <Body/>
              </Route>


          </Switch>

          <Footer/>

        </Router>

    </>

  );
}

export default App;
