import React, { useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { useStoreContext } from "../../../utils/GlobalState";

function GuideMap() {
  const [state] = useStoreContext();
  const places = state?.guide?.poi;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: '',
  })

  const [map, setMap] = useState( /** @type google.maps.map */ (null));

  if(!isLoaded) {
    return <div>map is loading</div>
  }

  const defaultCenter = {
    lat: parseFloat(state?.guide?.poi[0]?.lat) || 10, lng: parseFloat(state?.guide?.poi[0]?.lng) || 10
  }

  return(
    <div className="guideMap w-screen">
    <div className="w-full h-full">
    <GoogleMap center={defaultCenter} zoom={13} mapContainerStyle={{width: '100%', height: '100%'}}
    onLoad={(map) => setMap(map)}
    options={{
      fullscreenControl: false
    }}
    >
      {places.map((place) => {
        return(
          <Marker key={place.name} position={{lat: place.lat, lng: place.lng}} />
        )
      })}
      {/* <Marker position={defaultCenter}/> */}
      <div className='w-full h-full flex justify-between'>
        <p></p>
        <button onClick={() => map.panTo(defaultCenter)} className='centerMapButton bg-gray-50 shadow-lg p-2 m-3 z-50 h-8 grid content-center rounded-sm'><p className='centerMapButtonIcon text-lg'>➤</p></button>
      </div>
      
    </GoogleMap>
      
    </div>
    </div>
  )
}

export default GuideMap;
