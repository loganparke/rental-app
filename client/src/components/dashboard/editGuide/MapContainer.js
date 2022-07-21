import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useStoreContext } from '../../../utils/GlobalState';
import Marker from './marker';

// NEED TO ADD LAT AND LNG TO GUIDE SCHEMA AND USE GLOBAL STATE TO GET LAT AND LNG IN THIS COMPONOENT, STOP USING PROPS
const MapContainer = ({pois}) => {
  const [state] = useStoreContext();
  //console.log(pois)

  const home = pois?.find(({ name }) => name === 'home');
  const homeLatLng = {lat: home?.lat, lng: home?.lng}
  console.log(homeLatLng);

  const mapStyles = {        
    height: "350px",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: home?.lat || 10, lng: home?.lng || 10
    //lat:10, lng:10
  }
  // console.log('default center', defaultCenter);
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 44.4451,
        lng: 111.6734 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 44.4351,
        lng: 111.5934
      },
    }
  ];

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDzUiDXLmgKTJ0bS6E2MetMhgTUZbxPSx8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
            <Marker
            lat={home?.lat}
            lng={home?.lng}
            name="My Marker"
          />
          {/* {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
          } */}
        </GoogleMap>
    </LoadScript>
  )
}
export default MapContainer;


