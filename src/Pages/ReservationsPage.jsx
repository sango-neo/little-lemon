import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/Booking/BookingForm';
import Booking from '../components/Booking/components/Booking';
import { fetchAPI, initializeTimes } from '../api/api';

const updateTimes = (state, action) => {
  if (action.type === 'timeUpdate') {
    return {...state, times: fetchAPI(action.date) }
  }
  return state;
}

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
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
          <Booking availableTimes={availableTimes} />
        </div>
    </main>
  )
}

export default ReservationsPage