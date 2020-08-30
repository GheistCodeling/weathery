import React from 'react';
import './ForecastIcon.css';

export default class ForecastItem extends React.Component {

  componentDidMount() {
     
  }

  render() {
    return (
      <>
        
         <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt={this.props.description} />
    </>
    )
  }
}