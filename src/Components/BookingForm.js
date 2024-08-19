import { Button, Typography } from '@mui/material'
import React from 'react'

const BookingForm = ({formData, availableTimes, numberOfPeople, occasions, onFormChange, onFormSubmit}) => {

    return (
    <>
        <form onSubmit={onFormSubmit}>
            <Typography>
            <div>
                <label htmlFor='numberOfPeople'>Number of people:</label>
                <select id='numberOfPeople' name='numberOfPeople' value={formData.numberOfPeople} onChange={onFormChange} required>
                <option value="" disabled>Select number of people:</option>
                    {numberOfPeople.map((people,index) => (
                <option key={index} value={people}>{people}</option>
                ))}
                </select>
            </div>
            <div>
                <label htmlFor='date'>Select a date:</label>
                <input type='date' id='date' name='date' value={formData.date} onChange={onFormChange} required/>
            </div>
            <div>
                <label htmlFor='time'>Select a time:</label>
                <select id='time' name='time' value={formData.time} onChange={onFormChange} required>
                    <option value="" disabled>Select available time:</option>
                        {availableTimes.map((time,index) => (
                            <option key ={index} value= {time}>{time}</option>
                        ))}
                </select>
            </div>
            <div>
                <label htmlFor='occasion'>Occasion:</label>
                <select id='occasion' name='occasion' value={formData.occasion} onChange={onFormChange}>
                    <option value="" disabled>Select an occasion:</option>
                    {occasions.map((occasions,index) => (
                    <option key={index} value={occasions}>{occasions}</option>
                    ))}
                </select>
            <div>
            <div>
                <label htmlFor='phone'>Phone number:</label>
                <input type='tel' id='phone' name='phone' value={formData.phone} onChange={onFormChange} required/>
            </div>
                <label htmlFor='preferences'>Additional preferences:</label>
                <input type='text' id='preferences' name='preferences' value={formData.preferences} onChange={onFormChange}/>
            </div>
            </div>
            <div>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#F4CE14',
                        color: '#333333',
                        borderRadius: '8pt'
                    }}
                >
                    Reserve
                </Button>
            </div>
            <div>
                <Button variant='contained'
                    sx={{
                        backgroundColor: '#495E57',
                        color: '#EDEFEE',
                        marginTop: '1rem',
                        borderRadius: '8pt'
                    }}
                >
                    Back to homepage
                </Button>
            </div>
            </Typography>
        </form>
    </>
  )
}

export default BookingForm
