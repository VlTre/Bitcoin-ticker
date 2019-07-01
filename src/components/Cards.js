import React, { Component } from 'react';

class Cards extends Component{

    constructor(props){
        super(props);
        this.state = {
            totalbc: '',
            hashestowin: '',
            nextretarget: '',
            bcperblock: ''
        }
    }

    componentDidMount(){
        const urlTotalbc = 'https://blockchain.info/q/totalbc';
        const urlHashtowin = 'https://blockchain.info/q/hashestowin';
        const urlNextretarget = 'https://blockchain.info/q/nextretarget';
        const urlBcperblock = 'https://blockchain.info/q/bcperblock';
        fetch(urlTotalbc)
            .then(res=>res.json())
            .then(parsedRes=>{
                this.setState({
                    totalbc: parsedRes
                })
            });
        fetch(urlHashtowin)
            .then(res=>res.json())
            .then(parsedRes=>{
                this.setState({
                    hashestowin: parsedRes
                })
            });
        fetch(urlNextretarget)
            .then(res=>res.json())
            .then(parsedRes=>{
                this.setState({
                    nextretarget: parsedRes
                })
            });
        fetch(urlBcperblock)
            .then(res=>res.json())
            .then(parsedRes=>{
                this.setState({
                    bcperblock: parsedRes
                })
            });
    }

    render(){
        return(
            <div className={'cards container'}>
                <div className={'card'}> <p className={'cardDesc'}>Total Bitcoins in circulation (delayed by up to 1 hour)</p> <p className={'cardInfo'}>{this.state.totalbc}</p> </div>
                <div className={'card'}> <p className={'cardDesc'}>Block height of the next difficulty retarget</p> <p className={'cardInfo'}>{this.state.nextretarget}</p> </div>
                <div className={'card'}> <p className={'cardDesc'}>Average number of hash attempts needed to solve a block</p > <p className={'cardInfo'}>{this.state.hashestowin}</p> </div>
                <div className={'card'}> <p className={'cardDesc'}>Current block reward in BTC</p> <p className={'cardInfo'}>{this.state.bcperblock}</p> </div>

            </div>
        );
    }
}

export default Cards;
