import React, { Component } from 'react';
import Header from './components/Header';
import CurrencyTab from './components/CurrencyTab';

import './App.css';

class App extends Component{
    state = {
      loading: true,
      USD: null
    };


  render(){
    return(
        <div className={'App'}>
            <Header/>
            <CurrencyTab/>
        </div>
    );
  }
}

export default App;
