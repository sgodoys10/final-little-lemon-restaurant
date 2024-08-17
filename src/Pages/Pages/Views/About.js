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
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',  // Two equal columns
            alignItems: 'center',  // Center content vertically in each column
            gap: '1rem',  // Add some space between the text and images
            padding: '1rem',  // Optional padding around the content
          }}
        >
          <Box
            sx={{
              maxWidth: '100%',  // Ensure text doesn't overflow
            }}
          >
        <Typography variant='body1' marginTop='2rem'>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </Typography>
      </Box>
      <Box
          sx={{
            display: 'flex',
            width: '100%',
          }}
        >
          <img 
          src={marioandadriana} 
          alt='Mario and Adrian '
          style={{ 
            width: '50%', 
            maxWidth: '100%',
            height: 'auto', 
            objectFit: 'cover', 
            borderRadius: '8pt',
            margin: '0',
            padding: '.5rem'
          }}
          />
          <img 
          src={MarioandAdrianb} 
          alt='Mario and Adrian '
          style={{ 
            width: '50%', 
            maxWidth: '100%',
            height: 'auto', 
            objectFit: 'cover', 
            borderRadius: '8pt',
            margin: '0',
            padding: '.5rem'
          }}
          />
        </Box>
        </Box>
      </ThemeProvider>
      
    </>
  )
}

export default About
