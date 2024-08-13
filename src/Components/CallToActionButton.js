import React from 'react'
import { Button, ThemeProvider } from '@mui/material'
import theme from './Themes'
import { Link } from 'react-router-dom'

const CallToActionButton = () => {
  return (
    <Link to="/booking" style={{textDecoration:'none'}}>
    <ThemeProvider theme={theme}>
      <Button variant='contained' color='secondary'>Reserve a table</Button>
    </ThemeProvider>
    </Link>
  )
}

export default CallToActionButton
