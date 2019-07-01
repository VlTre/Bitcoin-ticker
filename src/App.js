import React, { Component } from 'react';
import Header from './components/Header';
import Caeds from './components/Cards';
import CurrencyTab from './components/CurrencyTab';
import AverageUsdPrice from './components/AverageUsdPrice';

import './App.css';

class App extends Component{

  render(){
    return(
        <div className={'App'}>
            <Header/>
            <AverageUsdPrice/>
            <CurrencyTab/>
            <Caeds/>
        </div>
    );
  }
}

export default App;
