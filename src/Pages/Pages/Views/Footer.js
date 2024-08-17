import React from 'react'
import FooterNav from '../../../Components/FooterNav'
import { Box, IconButton, Typography } from '@mui/material'
import restaurantChef from '../../../assets/restaurantChef.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          alignItems: 'start',
          gap: '1rem'
        }}
      >
        <img 
        src={restaurantChef}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        }}
        alt='Restaurant Chef'
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant='h6'>
            Navigation
          </Typography>
          <FooterNav/>
      </Box>
      <Box>
          <Typography variant='h6'>
            Contact
          </Typography>
          <Typography variant='body1'>
            1311 Mediterranean St
          </Typography>
          <Typography variant='body1'>
            855-747-9384
          </Typography>
          <Typography variant='body1'>
            littlelemon@example.com
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6'>
            Social Media
          </Typography>
          <Box sx={{display:'flex'}}>
            <IconButton
              href="https://www.facebook.com"
              target='_blank'
              aria-label='Facebook'
            >
              <FacebookIcon fontSize='medium'/>
            </IconButton>
            <IconButton
              href="https://www.instagram.com"
              target='_blank'
              aria-label='Instagram'
            >
              <InstagramIcon fontSize='medium'/>
            </IconButton>
            <IconButton
              href="https://www.x.com"
              target='_blank'
              aria-label='X'
            >
              <XIcon fontSize='medium'/>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer
