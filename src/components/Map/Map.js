import React, { Component } from 'react';
import './Map.css';
import scriptLoader from 'react-async-script-loader';
// import data from '../../test_buildings.json'

// const id = data.data.map((markers)=>(markers.id));
// const type = data.data.map((markers)=>(markers.type));
// const name = data.data.map((markers)=>(markers.name));
// const building_grade = data.data.map((markers)=>(markers.building_grade));
// const status = data.data.map((markers)=>(markers.status));
// const latitude = data.data.map((markers)=>(markers.latitude));
// const longitude = data.data.map((markers)=>(markers.longitude));

// const markers = [...latitude, ...longitude];

// console.log(markers);

class Map extends Component{

  componentWillReceiveProps({isScriptLoadSucceed}){
    if (isScriptLoadSucceed) {
      
        let uluru = {lat: -25.363, lng: 131.044};
        let map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        let marker = new window.google.maps.Marker({
          position: uluru,
          map: map,
          title: "Hello World"
        });
    }
    else{
      alert("script not loaded")
    }
  }

  render(){
    return(
      <div>
        <div id="map"></div>
      </div>
    )
  }
}

export default scriptLoader(
  ["https://maps.googleapis.com/maps/api/js?key= AIzaSyAAijvPt5C6zYLlkD5HjGWbBjKQkvMRHlw&callback=initMap"]
)(Map)
