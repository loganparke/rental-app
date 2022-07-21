
import React, { useState, useRef} from "react";
import { useStoreContext } from '../../../utils/GlobalState';
import { useMutation } from "@apollo/client";
import { SET_GUIDE } from "../../../utils/actions";
import { UPDATE_GUIDE_ADDRESS, UPDATED_POI } from '../../../utils/mutations';
import MapContainer from './MapContainer';

const EditAddressComponent = ({guideId}) => {
    const [state, dispatch] = useStoreContext();
    const id = guideId;
    //console.log(state);
      //toggle edit address
      const [toggleEditAddress, setToggleEditAddress] = useState('false');
      const [updateGuideAddress] = useMutation(UPDATE_GUIDE_ADDRESS);
      const [updatePoi] = useMutation(UPDATED_POI);
      const guideAddress = useRef();
      
    

      // let location = {
      //   //lat: home.lng || 10,
      //   //lng: home.lng || 10,
      //   lat: 10,
      //   lng: 10,
      // }
      
      
      const editAddress = async () => {
        const mutationResponse = await updateGuideAddress({
          variables: {
            guideId: id,
            address: guideAddress.current.value
          }
        });
        if (mutationResponse) {
          console.log(mutationResponse)
          dispatch({
            type: SET_GUIDE,
            guide: mutationResponse.data.updateGuideAddress,
          });
        }

        let geocodeAddress = state.guide.address.split(' ').join('%20').concat('&');
        console.log(geocodeAddress);

        const newLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${geocodeAddress}key=`)
        .then(Response => Response.json())
        .then((data) => {
          console.log(data);
          const newLatLong = data.results[0].geometry.location;
          return newLatLong;
        })
        .catch((err) => console.log(err));

        const updatePoiResponse = await updatePoi({
          variables: {
            guideId: guideId,
            name: 'home',
            lat: newLocation.lat,
            lng: newLocation.lng
          }
        });
        if (updatePoiResponse) {
          console.log(updatePoiResponse)
          dispatch({
            type: SET_GUIDE,
            guide: updatePoiResponse.data.updatePoiResponse,
          });
        }
        setToggleEditAddress('false')
      }

      const pois = state?.guide?.poi;

  return (
    <div className="w-5/6 m-auto p-3 flex justify-around border-b-2 border-gray-300 pb-5 my-5" >
          <div className="w-2/3">
            <MapContainer pois={pois}/>
          </div>
        
          <div className="grid content-center">
            {toggleEditAddress === 'true' ? 
            <div>
              <textarea ref={guideAddress} type='text' defaultValue={state?.guide?.address} className='w-5/6 h-48 border-2 border-gray-300 rounded-md m-auto text-center'/>
              <button className=' bg-cyan-400 text-white font-bold p-2 rounded-md w-2/3 my-2' onClick={() => editAddress()}>save changes</button>
            </div>
            :
            <div>
            
              <h1 className="text-xl">{state?.guide?.address}</h1>
              <button onClick={() => setToggleEditAddress('true')} className='bg-cyan-700 text-white font-bold p-2 rounded-md mt-5'>Change Address 📝</button>
            </div>}
          </div>

        </div>
  )

};

export default EditAddressComponent;