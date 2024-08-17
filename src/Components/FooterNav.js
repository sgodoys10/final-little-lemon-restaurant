import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/FooterNavbar.css';


const FooterNav = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '.3rem',
        listStyle: 'none',
        padding: 0, 
        margin: 0, 
    };

  return (
    <>
    <nav style={{padding: '2px'}}>
        <ul style={containerStyle}>
            <li><Link to='/' className='footer-nav-item'>Home</Link></li> 
            <li><Link to='/' className='footer-nav-item'>About</Link></li> 
            <li><Link to='/' className='footer-nav-item'>Menu</Link></li> 
            <li><Link to='/booking'  className='footer-nav-item'>Reserve a table</Link></li> 
            <li><Link to='/' className='footer-nav-item'>Order online</Link></li> 
            <li><Link to='/'  className='footer-nav-item'>Log in</Link></li> 
        </ul>
    </nav>
    </>
    
  )
}

export default FooterNav
