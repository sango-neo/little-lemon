import React from 'react'

const ConfirmBookingPage = () => {
  return (
    <main>
      <h1>Booking confirmed!</h1>
      <section>
        <h2>Your booking details: </h2>
        <div>
          <p>Date: <span>Your date</span></p>
          <p>Time: <span>Your time</span></p>
          <p>Number of guests: <span>Guests</span></p>
          <p>Occasion: <span>Your occasion</span></p>
        </div>
      </section>
      <p>Click 'confirm booking' to have an email with your unique booking ID emailed to you</p>
      <button>Confirm</button>
    </main>
  )
}

export default ConfirmBookingPage