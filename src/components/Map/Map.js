import React, { Component } from 'react';
import './Map.css';
import { Helmet } from 'react-helmet';
import * as data from '../.././test_buildings.json'

console.log(data);

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <Helmet>
        {/*<div id="map">*/}
        {/*</div>*/}
        {/*<script>*/}
        {/*function initMap() {*/}
        {/*const google = window.google;*/}
        {/*let uluru = {lat: -25.363, lng: 131.044};*/}
        {/*let map = new google.maps.Map(document.getElementById('map'), {*/}
        {/*zoom: 4,*/}
        {/*center: uluru*/}
        {/*});*/}
        {/*let marker = new google.maps.Marker({*/}
        {/*position: uluru,*/}
        {/*map: map*/}
        {/*});*/}
        {/*}*/}
        {/*</script>*/}
        {/*<script async defer*/}
        {/*src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAijvPt5C6zYLlkD5HjGWbBjKQkvMRHlw&callback=initMap">*/}
        {/*</script>*/}
      </Helmet>
    );
  }
}

export default Map;
