import React, { useEffect, useReducer, useState } from 'react'
import BookingForm from '../components/Booking/BookingForm';
import Booking from '../components/Booking/components/Booking';
import { updateTimes, initializeTimes } from '../api/api';




const ReservationsPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

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