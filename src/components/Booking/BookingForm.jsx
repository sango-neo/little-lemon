import React, { useEffect, useState } from 'react'
import './BookingForm.css';
import { submitAPI } from '../../api/api';
import { useNavigate } from 'react-router-dom';


const date = new Date();
const todayDay = date.getDate();
const todayMonth = date.getMonth() + 1;
const todayYear = date.getFullYear();
const today = `${todayYear}-${todayMonth > 9 ? todayMonth : '0'+todayMonth}-${todayDay > 9 ? todayDay : '0'+todayDay}`;

const BookingForm = ({ availableTimes, dispatch }) => {
  // const [date, setDate] = useState(today);
  // const [availableTimes, setAvailableTimes] = useState();
  // const [guests, setGuests] = useState(1);
  // const [occasions, setOccasions] = useState(['Birthday', 'Anniversary']);

  // useEffect(() => {
  //   console.log(availableTimes);
  // }, [])

  const [formData, setFormData] = useState({
    resDate: today,
    resTime: "",
    guests: 1,
    occasion: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("form data has changed");
    if (e.target.name === "resDate") {
      const date = e.target.value;
      dispatch({type: 'timeUpdate', date})

      return setFormData({
        ...formData,
        resDate: date
      });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data to send: ", formData);
    if (submitAPI(formData)) {
      navigate("/booking-confirmation", { state: {...formData} })
    } else {
      alert("Something's wrong with the form data");
    }
  }
  

  return (
    <div>
      <h3>Reserve a table: </h3>
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
              <option value="choose-time">--select a time--</option>
              {availableTimes.times.map(time => <option key={time} value={time}>{time}</option>)}
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
            <option value="choose-occasion">--select an occasion--</option>
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
        </select>
        </label>
        
        <input type="submit" value="Make Your reservation" />
    </form>
    </div>
  )
}

export default BookingForm