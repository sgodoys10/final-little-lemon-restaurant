import './App.css';
import HomePage from './Pages/Pages/HomePage';
import BookingPage from './Pages/Pages/BookingPage';
import BookingConfirmationPage from './Pages/Pages/BookingConfirmationPage';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/booking' element={<BookingPage/>}/> 
      <Route path='/booking-confirmation-page' element={<BookingConfirmationPage/>}/> 
    </Routes>
    </>
  )
};


export default App;
