import React from 'react'
import { Button, ThemeProvider } from '@mui/material'
import theme from './Themes'
import { Link } from 'react-router-dom'

const OnlineMenuButton = () => {
  return (
    <Link to="/" style={{textDecoration:'none'}}>
    <ThemeProvider theme={theme}>
      <Button
        variant='contained'
        color='secondary'
        sx={{borderRadius:'16pt'}}
        >
        Order Online
      </Button>
    </ThemeProvider>
    </Link>
  )
}

export default OnlineMenuButton; 