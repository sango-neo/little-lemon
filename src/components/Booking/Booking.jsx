import React from 'react'
import BookingSlotList from './BookingSlotList';

const Booking = ({ availableTimes }) => {
  return (
    <div>
        <BookingSlotList availableTimes={availableTimes} />
    </div>
  )
}

export default Booking