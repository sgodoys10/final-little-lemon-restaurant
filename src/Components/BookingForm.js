import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/BookingForm.css'

const BookingForm = ({formData, availableTimes, numberOfPeople, occasions, onFormChange, onFormSubmit}) => {

    return (
    <>
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
            padding: '1rem',
        }}
    >
        <form onSubmit={onFormSubmit}>
            <Typography>
            <Box mb={2}>
                <label htmlFor='numberOfPeople' className='label'>Number of people:</label>
                <select id='numberOfPeople' name='numberOfPeople' value={formData.numberOfPeople} onChange={onFormChange} required>
                <option value="" disabled>Select number of people:</option>
                    {numberOfPeople.map((people,index) => (
                <option key={index} value={people}>{people}</option>
                ))}
                </select>
            </Box>
            <Box mb={2}>
                <label htmlFor='date' className='label'>Select a date:</label>
                <input type='date' id='date' name='date' value={formData.date} onChange={onFormChange} required/>
            </Box>
            <Box mb={2}>
                <label htmlFor='time' className='label'>Select a time:</label>
                <select id='time' name='time' value={formData.time} onChange={onFormChange} required>
                    <option value="" disabled>Select available time:</option>
                        {availableTimes.map((time,index) => (
                            <option key ={index} value= {time}>{time}</option>
                        ))}
                </select>
            </Box>
            <Box mb={2}>
                <label htmlFor='occasion' className='label'>Occasion:</label>
                <select id='occasion' name='occasion' value={formData.occasion} onChange={onFormChange}>
                    <option value="" disabled>Select an occasion:</option>
                    {occasions.map((occasions,index) => (
                    <option key={index} value={occasions}>{occasions}</option>
                    ))}
                </select>
            </Box>
            <Box mb={2}>
                <label htmlFor='phone' className='label'>Phone number:</label>
                <input type='tel' id='phone' name='phone' value={formData.phone} onChange={onFormChange} required/>
            </Box>
            <Box mb={2}>
                <label htmlFor='preferences' className='label'>Additional preferences:</label>
                <textarea id='preferences' name='preferences' className='preferences-input' value={formData.preferences} onChange={onFormChange}/>
            </Box>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
            <Box>
                <Button 
                    variant='contained'
                    type='submit'
                    sx={{
                        backgroundColor: '#F4CE14',
                        color: '#333333',
                        borderRadius: '8pt',
                        marginTop: '1rem', 
                        width: '12rem'
                    }}
                >
                    Reserve
                </Button>
            </Box>
            <Box>
                <Button 
                    component={Link}
                    to="/"
                    variant='contained'
                    sx={{
                        backgroundColor: '#495E57',
                        color: '#EDEFEE',
                        marginTop: '1rem',
                        borderRadius: '8pt',
                        width: '12rem'
                    }}
                >
                    Back to homepage
                </Button>
            </Box>
            </Box>
            </Typography>
        </form>
    </Box>
    </>
  )
}

export default BookingForm
