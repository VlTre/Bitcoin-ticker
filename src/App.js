import React, { Component } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import CurrencyTab from './components/CurrencyTab';
import Footer from './components/Footer';
import AverageUsdPrice from './components/AverageUsdPrice';

import './App.css';

class App extends Component{

  render(){
    return(
        <div className={'App'}>
            <Header/>
            <AverageUsdPrice/>
            <CurrencyTab/>
            <Cards/>
            <Footer/>
        </div>
    );
  }
}

export default App;
