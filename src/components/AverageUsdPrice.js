import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HichartTheme from "./HighchartTheme";

class AverageUsdPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          type: "line"
        },
        title: {
          text: "Monthly Average USD Price"
        },
        xAxis: {
          categories: []
        },
        yAxis: {
          title: {
            text: "Price in USD"
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [

        ]
      },
    };
  }

  componentDidMount() {
    const url =
      "https://api.blockchain.info/charts/market-price?timespan=30days&format=json&cors=true";
    fetch(url)
      .then(res => res.json())
      .then(parsedRes => {
        const costs = parsedRes.values.map(cost => Math.round(cost.y));
        const date = parsedRes.values.map(date => new Date(date.x * 1000));
        console.log(costs, date);
          this.setState({
              options: {
                  categories: date,
                  series: [{
                      name: "",
                      data: costs
                  }]
              }
          });
      });
  }

  render() {
    return (
        <div className={'chart container'}>
            <HighchartsReact highcharts={Highcharts} options={this.state.options} >    </HighchartsReact>
        </div>

    );
  }
}

export default AverageUsdPrice;
