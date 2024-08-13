import './App.css';
import HomePage from './Pages/Pages/HomePage';
import BookingPage from './Pages/Pages/BookingPage';
import BookingConfirmation from './Pages/Pages/BookingConfirmation';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/booking' element={<BookingPage/>}/> 
      <Route path='/booking-confirmation' element={<BookingConfirmation/>}/> 
    </Routes>
    </>
  )
};


export default App;
