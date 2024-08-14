import { styled, Typography, Box, ThemeProvider } from '@mui/material'
import React from 'react'
import theme from '../../../Components/Themes';
import TestimonialCards from '../../../Components/TestimonialCards';

const TestimonialHeaderWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
});

const Testimonials = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
      <TestimonialHeaderWrapper>
        <Typography variant='h5' color='text.primary'>
          Testimonials
        </Typography>
      </TestimonialHeaderWrapper>
      </ThemeProvider>
      <TestimonialCards/>
    </main>
  )
}

export default Testimonials
