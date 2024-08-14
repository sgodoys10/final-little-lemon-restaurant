import React from 'react';
import { Typography, Box } from '@mui/material';
import restaurantFood from '../../../assets/restaurantfood.jpg';
import CallToActionButton from '../../../Components/CallToActionButton';

const Hero = () => {
  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens, horizontally on larger screens
          justifyContent: 'space-between', // Space out the text and image
          padding: 1,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Align text to the start
            justifyContent: 'flex-start',
            maxWidth: { xs: '100%', sm: '50%' },
          }}
        >
          <Typography variant='h4' color='#F4CE14' marginTop='1rem'>
            Little Lemon
          </Typography>
          <Typography variant='h5' color='white' marginTop='-.5rem' marginBottom='2rem'>
            Chicago
          </Typography>
          <Typography 
            variant='body1' 
            color='white' 
            sx={{ maxWidth: '75%' }}
          >
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </Typography>
          <Box sx={{marginTop:4}}>
          <CallToActionButton/>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end', 
            alignItems: 'center',
            maxWidth: '100%'
          }}
        >
          <img 
            src={restaurantFood}
            alt="Restaurant food"
            style={{ 
              width: '35%', 
              maxWidth: '50%',
              height: 'auto', 
              objectFit: 'cover', 
              borderRadius: '8pt' }} // Adjust size as needed
          />
        </Box>
      </Box>
    </main>
  );
};

export default Hero;
