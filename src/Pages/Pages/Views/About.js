import { Box, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../Components/Themes'
import marioandadriana from '../../../assets/MarioandAdrianA.jpg'
import MarioandAdrianb from '../../../assets/MarioandAdrianb.jpg'

const About = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',
          }}
        >
      <Typography variant= 'h4' color='primary'>
        Little Lemon 
      </Typography>
      <Typography variant= 'h5'>
        Chicago
      </Typography>
      </Box>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',
            maxWidth: '50%'
          }}
        >
      <Typography variant='body1' marginTop='2rem'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. t occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. t occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.st.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. t occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. t occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.st.
      </Typography>
      </Box>
      <Box
          sx={{
            display: 'flex', 
            justifyContent: 'flex-end',
            alignItems: 'center', // Center vertically
            width: '100%',
          }}
        >
          <img 
          src={marioandadriana} 
          alt='Mario and Adrian '
          style={{ 
            width: '15%', 
            maxWidth: '40%',
            height: 'auto', 
            objectFit: 'cover', 
            borderRadius: '8pt',
          }}
          />
          <img 
          src={MarioandAdrianb} 
          alt='Mario and Adrian '
          style={{ 
            width: '15%', 
            maxWidth: '40%',
            height: 'auto', 
            objectFit: 'cover', 
            borderRadius: '8pt',
          }}
          />
        </Box>
      </ThemeProvider>
      
    </>
  )
}

export default About
