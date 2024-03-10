import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/Booking/BookingForm';
import Booking from '../components/Booking/Booking';
import { fetchAPI, initializeTimes } from '../api/api';

const updateTimes = (state, action) => {
  // needs to return updated times based on the selected date
  // this is the reducer function that's passed into the useReducer hooks as a 2nd param
  // Will not have all data for a period of time fetched at once => upon selection of a date,
  // make an api call to return the "available times" for that date.
  // initially all days have same available times/slots

  // if (action.type === 'today') return ["18:00", "19:00"];
  // if (action.type === 'tomorrow') return ["17:00", "18:00", "20:00"];
  if (action.type === 'timeUpdate') {
    return {...state, times: fetchAPI(action.date) }
  }
  return state;
}


// const initializeTimes = () => {
//   // create the initial state for the availableTimes
//   return [
//     "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
//   ]
 
// }

const ReservationsPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  useEffect(() => {
    console.log("checking availables times from API/app state...");
    setTimeout(() => {
      console.log("done");
    }, 2000)
  }, []);


  return (
    <main >
      <div style={{margin: '2rem 10% 0'}}>Reservations</div>
        <hr />
        <div className='booking_content_wrapper'>
          <Booking availableTimes={availableTimes} />
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    </main>
  )
}

export default ReservationsPage