import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    // console.log('cityData - ', cityData);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => (weather.main.temp - 273.15));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;

    console.log('temps - ', temps);

// <td> {name} </td>
   return(
     <tr key={name}>
      <td> <GoogleMap lon={lon} lat={lat}/> </td>
      <td> <Chart data={temps} color="orange" units="&deg;C"/> </td>
      <td> <Chart data={pressures} color="green" units="hPa"/> </td>
      <td> <Chart data={humidities} color="blue" units="%"/> </td>
     </tr>
   )
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&deg;C) </th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStatetoProps(state) {
//   return { weather: state.weather };
// }

function mapStatetoProps({ weather }) {
  return { weather };
}

export default connect(mapStatetoProps)(WeatherList);
