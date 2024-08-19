import {useState, useEffect} from 'react'; 

const useLocalStorageBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect (() => {
      const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      setBookings(existingBookings); 
    }, []); 
  
    return bookings;
};

export default useLocalStorageBookings; 