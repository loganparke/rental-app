import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import { formatDate } from "../utils/dateFormat";
import { useMutation } from '@apollo/client';
import { ADD_SUBSRIPTION } from "../utils/mutations";

function AddSubscription() {

  //form capture
  const [formState, setFormState] = useState();
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  //date functionality
  const currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth();
  var day = currentDate.getDate();
  const nextYearDate = new Date(year + 1, month, day)
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(nextYearDate);

  //determine price functionality
  let price = 0;
  switch(formState?.propertiesAllowed) {
    case '1': 
      price = '99';
      
      break;
    case '2':
      price = '149';
      break;
    case '3':
      price = '189';
      break;
    case '4':
      price = '215';
      break;
    default:
      price = '0'
      break;
  }

    //useEffect to add price & date to form state
    useEffect(() => {
      setFormState({
        ...formState,
        price: price,
        startDate: startDate,
        endDate: endDate
      });
    }, [price, startDate, endDate]);

    // SUBMIT SUBSCRIPTION FUNCTIONALITY
    const [addSubscription] = useMutation(ADD_SUBSRIPTION);
    const submitSub = async (event) => {
      //event.prventDefault();
      try {
        console.log('hi');
        const mutationResponse = await addSubscription({
          variables: {
            propertiesAllowed: parseInt(formState.propertiesAllowed),
            price: parseInt(formState.price),
            startDate: formState.startDate,
            endDate: formState.endDate
          }
        });
        console.log('123');
        console.log(mutationResponse);
        window.location.replace("/dashboard");
      } catch (e) {
        console.log(e);
      }
    }
  return (
    <div>
      <div className="w-full bg-cyan-700 p-2 py-5"> <a href="/dashboard" className="p-2 bg-cyan-300 font-bold rounded-full "> Dashboard</a></div>
      Add Subscription
      <div className="bg-white w-5/6 m-auto rounded-md">
        <div>
          <p>How many property guides do you need?</p>
          <select name="propertiesAllowed" onChange={handleFormChange}>
            <option defaultValue disabled selected>
              select an option
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="flex w-full justify-around">
          <div>
            <p>Start Date: </p>
            <Calendar value={startDate} onClickDay={(value) => {
              setStartDate(value);
              }}/>
              <p name='startDate' onChange={handleFormChange}>{formatDate(startDate)}</p>
          </div>
          <div>
            <p>End Date: </p>
            <Calendar value={endDate} onClickDay={(value) => {setEndDate(value);}}/>
            <p name='endDate' onChange={handleFormChange}>{formatDate(endDate)}</p>
          </div>
        </div>
        
        <p>Yearly Cost: <span onChange={handleFormChange}>{'$' + price}</span> </p>

        <button className="bg-cyan-700 text-white font-bold p-2 rounded-full" onClick={submitSub}>Save Subscription</button>

          
      </div>
    </div>
  )
}

export default AddSubscription;