import React, { useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { useStoreContext } from '../../../utils/GlobalState';
import homeMarker from '../../../assets/homeMarker.png'

// NEED TO ADD LAT AND LNG TO GUIDE SCHEMA AND USE GLOBAL STATE TO GET LAT AND LNG IN THIS COMPONOENT, STOP USING PROPS
const MapContainer = ({pois}) => {
  const [state] = useStoreContext();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: '',
  })

  const [map, setMap] = useState( /** @type google.maps.map */ (null));
  

  const home = pois?.find(({ name }) => name === 'home');

  const homeLatLng = {lat: home?.lat, lng: home?.lng};
  const defaultCenter = {
    lat: parseFloat(home?.lat) || 10, lng: parseFloat(home?.lng) || 10
  }

  if(!isLoaded) {
    return <div> map is loading </div>
  }
  
  return (
    <GoogleMap center={defaultCenter} zoom={11} mapContainerStyle={{width: '100%', height: '350px'}}
    onLoad={(map) => setMap(map)}
    options={{
      fullscreenControl: false
    }}
    >
      <Marker position={defaultCenter}/>
      {pois?.map((place) => {
        if(place.name === 'home') {
          return(
            <Marker key={place._id} position={place}/>
          )
        }
        return (
          <Marker key={place._id} position={place}
          icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" 
          />
        )
      })}
      <div className='w-full h-full flex justify-between'>
        <p></p>
        <button onClick={() => map.panTo(defaultCenter)} className='centerMapButton bg-gray-50 shadow-lg p-2 m-3 z-20 h-8 grid content-center rounded-sm'><p className='centerMapButtonIcon text-lg'>➤</p></button>
      </div>
      
    </GoogleMap>
  )
}
export default MapContainer;


