import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import MainPage from './MainPage';
import Footer from './Footer';
import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
        <>
          <NavigationBar />
          <MainPage />
          <Footer />
        </>
      </Router>
    )
  }
}

export default App;