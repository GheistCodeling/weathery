import React from 'react';
import './FetchForecasts.css';
import ForecastItem from './ForecastItem';
import axios from 'axios';

export default class FetchForecasts extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      forecasts: [],
      city: 'Hamburg',
      icon: []
    }
  }

  handleSubmit(e) {
    
    if(this.refs.city.value === '') {
      alert('Please specify a city!');
    } else {
      this.setState({
        city: this.refs.city.value
        
      }, function() {
        this.fetchWeather();
      });
    }

    e.preventDefault();
  }

  fetchWeather() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=96c826d66dc862381827c36ced559551&units=metric`)
      .then(res => {
        const forecasts = [];

        const list  = res.data.list;
        
        for(let i = 0; i < list.length; i += 8) {
          forecasts.push(list[i]);
          
        }
       
        this.setState({ forecasts });
      })
  }
  componentDidMount() {
    if(this.city !== 'undefined') {
      this.fetchWeather();
    }
  }

  render() {
    return (
      <>
      <div className="forecast__wrapper">
      <div className="forecast__form">
        <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" ref="city" />
              <input type="submit" value="GO" />
        </form>
        <h1>{this.state.city}</h1>
      </div>
        <div className="forecast__inner row">
        
          <ForecastItem {...this.state} />
        </div>
    </div>
    </>
    )
  }
}