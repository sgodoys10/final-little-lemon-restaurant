import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from './Views/Footer'
import About from '../Pages/Views/About'
import Testimonials from '../Pages/Views/Testimonials'
import Hero from '../Pages/Views/Hero'
import Specials from '../Pages/Views/Specials'
import { Grid, Container, Box, Typography } from '@mui/material'
import Logo from '../../assets/Logo.png'

const HomePage = () => {
  return (
    <Container>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Box sx={{color: '#333333', padding: 2}}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <img
                src={Logo}
                alt='Little Lemon logo'
                style={{width:'40px', height:'auto'}}
                />
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <Navbar/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item>
          <Box sx={{backgroundColor: '#495E57', padding:2, borderRadius: '8pt'}}>
            <Hero/>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{padding:2}}>
            <Specials/>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{backgroundColor: '#f5f5f5', padding:2}}>
            <Testimonials/>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{backgroundColor: '#f5f5f5', padding:2}}>
            <About/>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{backgroundColor: '#f5f5f5', padding:2}}>
            <Footer/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage
