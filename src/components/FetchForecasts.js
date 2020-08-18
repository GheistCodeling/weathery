import React from 'react';
import './FetchForecasts.css'
import axios from 'axios';

export default class FetchForecasts extends React.Component {
  state = {
    forecasts: []
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=hamburg&appid=96c826d66dc862381827c36ced559551&units=metric`)
      .then(res => {
        const forecasts = [];

        const list  = res.data.list;
        
        for(let i = 0; i < list.length; i += 8) {
          forecasts.push(list[i]);
        }
        console.log(forecasts);
        this.setState({ forecasts });
      })
  }

  render() {
    return (
      <div className="forecast__wrapper">
        <div className="forecast__inner">
            { this.state.forecasts.map(forecast => <div className="forecast__item" key={forecast.main.feels_like}><span><img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}></img>{forecast.main.feels_like} °C</span></div>)}
        </div>
    </div>
    )
  }
}