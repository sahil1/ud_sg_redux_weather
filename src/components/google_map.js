import React, { Component } from 'react';

// const google=window.google;

class GoogleMap extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    new google.maps.Map(this.refs.map, {
    // new google.maps.Map(document.getElementById('map'), {
      zoom:12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map and it will give direct reference to below div html element
    return (
      <div className="outerMap">
        <div className="mapclass" ref="map" />
      </div>
      );
  }
}

export default GoogleMap;
