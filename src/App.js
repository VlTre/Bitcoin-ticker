import React, { Component } from 'react';

import './App.css';

class App extends Component{
    state = {
      loading: true,
      USD: null
    };

    async componentDidMount() {
        const url = 'https://blockchain.info/ticker';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({USD: data.USD, loading: false});
    }


  render(){
    return(
        <div>
            {this.state.loading || !this.state.USD ? <div> loading... </div>: <div> {this.state.USD.buy} </div>}
        </div>
    );
  }
}

export default App;
