import React, { useState } from 'react'
import './BookingForm.css';
import { submitAPI } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const date = new Date();
const todayDay = date.getDate();
const todayMonth = date.getMonth() + 1;
const todayYear = date.getFullYear();
const today = `${todayYear}-${todayMonth > 9 ? todayMonth : '0'+todayMonth}-${todayDay > 9 ? todayDay : '0'+todayDay}`;

const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      resDate: today,
      resTime: '',
      guests: 1,
      occasion: '',
    },
    validationSchema: Yup.object({
      resDate: Yup.string().matches(
        /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/,
        'Date is not input correctly.'
      ).required("Date is required"),
      resTime: Yup.string().matches(/^(1[6-9]|2[0-1]):([0-2][0-9]|30)$/,'Time is not input correctly.').required('Time is required'),
      guests: Yup.number()
      .min(1, 'At least one person must attend')
      .max(10, 'Cannot have more than 10 attendees')
      .required('number of guests is required'),
      occasion: Yup.string()
      .oneOf(['anniversary', 'birthday'], 'Select an occasion from the options')
      .required('Occasion is required'),
    }),
    onSubmit: (values) => {
      
      if (submitAPI(values)) {
        navigate("/booking-confirmation", { state: {...values} })
      } else {
        alert("Something's wrong with the form data");
      }
    },
  });
  

  return (
    <div>
      <h3 data-testid="form-heading">Reserve a table: </h3>
      <form
      onSubmit={formik.handleSubmit}
      data-testid="booking-form"
    >
        <label htmlFor="res-date">
          Choose date
          <br />
          <input aria-label='select a date' type="date" id="res-date" name="resDate" value={formik.values.resDate} onBlur={formik.handleBlur} min={today}
            onChange={(e) => {
              const date = e.target.value;
              dispatch({type: 'timeUpdate', date});

              formik.handleChange(e)
          }}
          data-testid="date-picker"
          />
          {formik.touched.resDate && formik.errors.resDate ? (
            <div>{formik.errors.resDate}</div>
          ): null}
        </label>
        <label htmlFor="res-time">
          Choose time
          <br />
          <select 
            required
            aria-label='reserve a time' 
            id="res-time" 
            name='resTime' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            data-testid="time-select"
          >
              <option value="choose-time">--select a time--</option>
              {availableTimes.times.map(time => <option key={time} value={time}>{time}</option>)}
          </select>
          {formik.touched.resTime && formik.errors.resTime ? (
            <div>{formik.errors.resTime}</div>
          ): null}
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
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-label='number of people attending'
            data-testid="guests"
            />
            {formik.touched.guests && formik.errors.guests ? (
            <div>{formik.errors.guests}</div>
          ): null}
        </label>
        <label htmlFor="occasion">
          Occasion
          <br />
          <select 
            required
            id="occasion"
            name='occasion'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-label='select an occasion'
            data-testid="occasion-select"
          >
            <option value="choose-occasion">--select an occasion--</option>
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
            <div>{formik.errors.occasion}</div>
          ): null}
        </label>
        
        <button aria-label='submit form' type="submit" disabled={!formik.dirty || !formik.isValid}>Make your reservation</button>
    </form>
    </div>
  )
}

export default BookingForm