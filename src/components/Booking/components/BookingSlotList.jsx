import React from 'react'
import BookingSlot from './BookingSlot';

const BookingSlotList = ({ availableTimes }) => {
  return (
    <section className='booking_slot_list'>
        <h3>Available times for chosen date: </h3>
        <ul>
            {availableTimes.times.map(time => {
                return <li><BookingSlot time={time} key={time} /></li>
            })}
        </ul>
    </section>
  )
}

export default BookingSlotList