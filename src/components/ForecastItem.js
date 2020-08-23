import React from 'react';
import './ForecastItem.css';
import ForecastIcon from './ForecastIcon';

const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

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
      console.log(this.state.forecast)
  }

  render() {
    return (
      <>
        
          { this.props.forecasts.map(forecast => 
          <div className="forecast__item msall-12 medium-6 large-3" key={forecast.main.feels_like}>
            <p>{new Date(forecast.dt_txt).toLocaleDateString('de-DE', DATE_OPTIONS)}</p>
                <ForecastIcon {...forecast.weather[0]} />
            <p>
              {forecast.weather[0].description}
            </p>
            <p>
              {forecast.main.feels_like} °C
            </p>
          </div>)}
    </>
    )
  }
}