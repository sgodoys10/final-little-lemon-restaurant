import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingConfirmationPage from '../Pages/Pages/BookingConfirmationPage';

describe('BookingConfirmationPage', () => {
  it('displays booking details from local storage', () => {
    // Mock local storage
    const mockBookingDetails = {
      numberOfPeople: '4',
      date: '2024-08-21',
      time: '19:00',
      occasion: 'Birthday',
      phone: '1234567890',
      preferences: 'Vegetarian'
    };
    
    // Set up the local storage
    window.localStorage.setItem('bookings', JSON.stringify([mockBookingDetails]));

    // Render the component with the necessary routing context
    render(
      <MemoryRouter initialEntries={[{ pathname: '/booking-confirmation-page', state: { bookingDetails: mockBookingDetails } }]}>
        <BookingConfirmationPage />
      </MemoryRouter>
    );

    // Check if the heading is in the document
    expect(screen.getByText(/Booking Confirmation/i)).toBeInTheDocument();
    
    // Verify if the booking details are displayed correctly
    expect(screen.getByText(/Number of People: 4/i)).toBeInTheDocument();
    expect(screen.getByText(/Date: 2024-08-21/i)).toBeInTheDocument();
    expect(screen.getByText(/Time: 19:00/i)).toBeInTheDocument();
    expect(screen.getByText(/Occasion: Birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone: 1234567890/i)).toBeInTheDocument();
    expect(screen.getByText(/Preferences: Vegetarian/i)).toBeInTheDocument();
  });
});

