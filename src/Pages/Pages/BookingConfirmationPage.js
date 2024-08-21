import { Button, ThemeProvider, Typography, Box } from '@mui/material';
import theme from '../../Components/Themes';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BookingConfirmationPage = () => {
    const location = useLocation();
    const {bookingDetails} = location.state || {}; 

    if (!bookingDetails) {
      console.error("No booking details received:", location.state); 
      return <p>No booking details found.</p>
    }
    console.log ("Booking details:", bookingDetails);

 
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        color: 'text.secondary',
        padding: 4,
        marginBottom: '2rem'
      }}
    >
    <Typography variant='h5' fontWeight="bold">
      Booking Confirmation
    </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
    <Typography variant='body1'>
    Thank you for your reservation. Here are your booking details:
    <ul style={{listStyleType: 'none', padding: 0, display:'flex', flexDirection: 'column', alignItems:"flex-start"}}>
    <li>Number of People: {bookingDetails.numberOfPeople}</li>
        <li>Date: {bookingDetails.date}</li>
        <li>Time: {bookingDetails.time}</li>
        <li>Occasion: {bookingDetails.occasion}</li>
        <li>Phone: {bookingDetails.phone}</li>
        <li>Preferences: {bookingDetails.preferences}</li>
    </ul>
    </Typography>
    <Button 
      component={Link}
      to="/"
      variant='contained'
      sx={{
          backgroundColor: 'secondary.main',
          color: 'text.primary',
          marginTop: '1rem',
          borderRadius: '8pt',
          width: '12rem'
          }}
    >
      Back to homepage
    </Button>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default BookingConfirmationPage
