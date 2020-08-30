import React from 'react';
import './ForecastItem.css';
import ForecastIcon from './ForecastIcon';

// const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const DATE_OPTIONS = { weekday: 'long'};

export default class ForecastItem extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
          forecasts: [],
          city: 'Hamburg',
          icon: []
        }

        
      }
      
  componentDidMount() {

  }
  
  render() {
    const map = this.props.forecasts[0];
    // const today =  Object.keys(map).map((key) => map[key]);
    let forecasts = this.props.forecasts.slice(1);
    console.log(map);
    return (
      <>
        <div className="today">
            <div className="inner">
                <p>
                  {} <span>°C</span>
                </p>
            </div>
        </div>
          { forecasts.map(forecast => 
          <div className="forecast__item" key={forecast.main.feels_like}>
            <p>{new Date(forecast.dt_txt).toLocaleDateString('de-DE', DATE_OPTIONS)}</p>
            <div className="inner">
                <ForecastIcon {...forecast.weather[0]} />
                <p>
                  {forecast.main.feels_like} <span>°C</span>
                </p>
            </div>
            <p>
              {forecast.weather[0].description}
            </p>
          </div>
          )}
    </>
    )
  }
}