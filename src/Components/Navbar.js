import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
    const containerStyle = {
        display: 'flex',
        listStyle: 'none',
        padding: 0, 
        margin: 0, 
    };

    const itemStyle = {
        margin: '0 5px',
    };

  return (
    <nav style={{padding: '2px'}}>
        <ul style={containerStyle}>
            <li style={itemStyle}><Link to='/' className='header-nav-item'>Home</Link></li> 
            <li style={itemStyle}><Link to='/' className='header-nav-item'>About</Link></li> 
            <li style={itemStyle}><Link to='/' className='header-nav-item'>Menu</Link></li> 
            <li style={itemStyle}><Link to='/booking'  className='header-nav-item'>Reserve a table</Link></li> 
            <li style={itemStyle}><Link to='/' className='header-nav-item'>Order online</Link></li> 
            <li style={itemStyle}><Link to='/'  className='header-nav-item'>Log in</Link></li> 
        </ul>
    </nav>
  )
}

export default Navbar
