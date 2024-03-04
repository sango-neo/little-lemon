import React, { useState } from 'react'
import './BookingForm.css';


const date = new Date();
const todayDay = date.getDate();
const todayMonth = date.getMonth + 1;
const todayYear = date.getFullYear;
const today = `${todayYear}-${todayMonth > 9 ? todayMonth : '0'+todayMonth}-${todayDay}`;

const BookingForm = () => {
  // const [date, setDate] = useState(today);
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);
  // const [guests, setGuests] = useState(1);
  // const [occasions, setOccasions] = useState(['Birthday', 'Anniversary']);

  const [formData, setFormData] = useState({
    resDate: today,
    resTime: "",
    guests: 1,
    occasion: "",
  });

  const handleChange = (e) => {
    console.log("form data has changed");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data to send: ", formData);
  }
  

  return (
    <form
      onSubmit={handleSubmit}
    >
        <label htmlFor="res-date">
          Choose date
          <br />
          <input type="date" id="res-date" name="resDate" value={formData.resDate} onChange={handleChange}/>
          {/* needs logic to prevent selecting day in the past */}
        </label>
        <label htmlFor="res-time">
          Choose time
          <br />
          <select id="res-time" name='resTime' onChange={handleChange}>
              {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
          </select>
        </label>
        <label htmlFor="guests">
          Number of guests
          <br />
          <input 
            type="number" 
            placeholder="1" 
            min="1" 
            max="10" 
            id="guests"
            name='guests'
            value={formData.guests}
            onChange={handleChange}
            />
        </label>
        <label htmlFor="occasion">
          Occasion
          <br />
          <select 
            id="occasion"
            name='occasion'
            onChange={handleChange}
          >
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
        </select>
        </label>
        
        <input type="submit" value="Make Your reservation" />
    </form>
  )
}

export default BookingForm