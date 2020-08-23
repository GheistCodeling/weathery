import React from 'react';
import './ForecastItem.css';

export default class ForecastItem extends React.Component {

  componentDidMount() {
     
  }

  render() {
    return (
      <>
        
         <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`} />
    </>
    )
  }
}