import React, { Component } from 'react';
import icon from './img/Bitcoin-icon.png';

class Header extends Component{
    render(){
        return(
            <header className={'header'}>
                <img src={icon} alt="icon" className={'logo'}/>
                <p className={'brand'}>Bitcoin Info</p>
            </header>
        );
    }
}

export default Header;