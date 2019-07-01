import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class CurrencyTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            usd: {},
            eur: {},
            gbp: {},
            rub: {},
            jpy: {},
            cny: {},
        }
    }
     componentDidMount() {
        const url = 'https://blockchain.info/ticker';
        fetch(url)
            .then(res=> res.json())
            .then(currency =>{
                this.setState({
                    usd: currency.USD,
                    eur: currency.EUR,
                    gbp: currency.GBP,
                    rub: currency.RUB,
                    jpy: currency.JPY,
                    cny: currency.CNY,
                })})
    }


    render() {
        return(

            <div className={'tabContainer container'}>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Last prise</th>
                        <th scope="col">Buy</th>
                        <th scope="col">Sell</th>
                        <th scope="col">Symbol</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>USD</td>
                        <td>{this.state.usd.last}</td>
                        <td>{this.state.usd.buy}</td>
                        <td>{this.state.usd.sell}</td>
                        <td>{this.state.usd.symbol}</td>
                    </tr>
                    <tr>
                        <td>EUR</td>
                        <td>{this.state.eur.last}</td>
                        <td>{this.state.eur.buy}</td>
                        <td>{this.state.eur.sell}</td>
                        <td>{this.state.eur.symbol}</td>
                    </tr>
                    <tr>
                        <td>GBP</td>
                        <td>{this.state.gbp.last}</td>
                        <td>{this.state.gbp.buy}</td>
                        <td>{this.state.gbp.sell}</td>
                        <td>{this.state.gbp.symbol}</td>
                    </tr>
                    <tr>
                        <td>RUB</td>
                        <td>{this.state.rub.last}</td>
                        <td>{this.state.rub.buy}</td>
                        <td>{this.state.rub.sell}</td>
                        <td>{this.state.rub.symbol}</td>
                    </tr>
                    <tr>
                        <td>JPY</td>
                        <td>{this.state.jpy.last}</td>
                        <td>{this.state.jpy.buy}</td>
                        <td>{this.state.jpy.sell}</td>
                        <td>{this.state.jpy.symbol}</td>
                    </tr>
                    <tr>
                        <td>CNY</td>
                        <td>{this.state.cny.last}</td>
                        <td>{this.state.cny.buy}</td>
                        <td>{this.state.cny.sell}</td>
                        <td>{this.state.cny.symbol}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CurrencyTab;