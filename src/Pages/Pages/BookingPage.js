import React, { useEffect, useReducer, useState } from 'react'
import BookingForm from '../../Components/BookingForm'
import { Typography, Box, ThemeProvider } from '@mui/material'
import theme from '../../Components/Themes'
import { useNavigate } from 'react-router-dom';
import useLocalStorageBookings from '../../CustomHooks/useLocalStorageBookings';


const intializeTimesState = {
  times:[],
};

export const timesReducer = (state,action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return {times:action.payload};
      default:
        return state; 
  }
};

const BookingPage = () => {
  const [formData, setFormData] = useState({
    numberOfPeople: '',
    date: '',
    time: '',
    occasion: '',
    phone: '',
    preferences: ''
  });

  const [timesState, dispatch] = useReducer(timesReducer, intializeTimesState);
  const bookings = useLocalStorageBookings();
  const navigate = useNavigate(); 

  const numberOfPeople= [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"
  ];

  const occasions = [
    "Birthday", "Engagement", "Anniversary", "Other"
  ];

  const fetchAvailableTimes = (selectedDate) => {
    try {
      const newTimes = window.fetchAPI(new Date(selectedDate));
      return newTimes; 
    } catch (error) {
      console.error('Error fetching available times:', error); 
      return []; 
    }
  }; 

  const updateAvailableTimes = (selectedDate) => {
    if (selectedDate) {
      const updatedTimes =fetchAvailableTimes(selectedDate); 
      dispatch ({type:'SET_TIMES', payload:updatedTimes});
    }
  }; 

  useEffect (() =>{
    const fetchInitialTimes = () => {
      const today = new Date().toISOString().split('T')[0];
      const fetchedTimes = fetchAvailableTimes(today);
      dispatch({type: 'SET_TIMES', payload: fetchedTimes});
    }; 
    fetchInitialTimes();
  }, []); 

  const submitForm = (formData) => {
    try {
      const result = window.submitAPI(formData); 
      if (result){
        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || []; 
        const updatedBookings = [...existingBookings, formData];
        localStorage.setItem('bookings', JSON.stringify(updatedBookings)); 
        navigate ('/booking-confirmation-page', {state:{bookingDetails: formData}});
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    if (name === 'phone') {
      const phoneNumberPattern = /^[0-9\b]+$/;
      if (value === '' || phoneNumberPattern.test(value)){
    setFormData(prevState => ({
          ...prevState, 
          [name]:value 
        })); 
      } else {
        alert ('Please enter only numbers.'); 
      }
    } else {
      setFormData(prevState => ({
        ...prevState, 
        [name]:value
      }));
    }

    if (name ==='date'){
      updateAvailableTimes(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault (); 
    console.log('form submitted:', formData);
    submitForm(formData); 
  };


  return (
    <>
    <ThemeProvider theme={theme}>
    <Box 
      sx={{
        backgroundColor:'#495E57',
        padding: 2
  }}
    >
      <Typography variant='h5'
        sx={{
          color: 'text.secondary',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Reserve a table
      </Typography>
    </Box>
    </ThemeProvider>
    <BookingForm
        numberOfPeople={numberOfPeople}
        availableTimes={timesState.times}
        occasions={occasions}
        formData={formData}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
    </>
  )
}

export default BookingPage
