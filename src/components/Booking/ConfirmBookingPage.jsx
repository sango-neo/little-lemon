import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ConfirmBookingPage = () => {
  const location = useLocation();

  return (
    <main className='confirmation_page_wrapper'>
      <h1>Booking confirmed!</h1>
      <section>
        <article className='confirmation_details'>
          <h2>Your booking details: </h2>
          <p>Date: <span>{location.state.resDate}</span></p>
          <p>Time: <span>{location.state.resTime}</span></p>
          <p>Number of guests: <span>{location.state.guests}</span></p>
          <p>Occasion: <span>{location.state.occasion}</span></p>
          <hr />
          <p>You will receive an email with your unique digital ticket to present on arrival at the restaurant. Enjoy!</p>
        </article>
      </section>
    </main>
  )
}

export default ConfirmBookingPage