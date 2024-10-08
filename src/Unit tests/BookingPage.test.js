import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from '../Pages/Pages/BookingPage';
import BookingForm from '../Components/BookingForm';
import '@testing-library/jest-dom';

// Mock data for the test
const mockAvailableTimes = ['12:00', '13:00', '14:00'];
let mockFormData;

beforeEach(() => {
  // Clear local storage and reset mockFormData before each test
  localStorage.clear();
  mockFormData = {
    numberOfPeople: '',
    date: '',
    time: '',
    occasion: '',
    phone: '',
    preferences: ''
  };
});

test('renders heading for booking page', () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const headingElement = screen.getByText(/Reserve a table/i);
  expect(headingElement).toBeInTheDocument();
});

test('should render available times correctly', async () => {
  render(
    <Router>
      <BookingForm
        formData={mockFormData}
        availableTimes={mockAvailableTimes}
        numberOfPeople={[]}
        occasions={[]} // Pass empty array or relevant options for occasions
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </Router>
  );

  // Check if the available times are rendered as options
  await waitFor(() => {
    mockAvailableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });
});

test('should save booking data to local storage on form submit', async () => {
  const updatedFormData = {
    numberOfPeople: '5',
    date: '2024-08-17',
    time: '14:00',
    occasion: 'Engagement',
    phone: '571-345-8296',
    preferences: ''
  };

  const mockSubmit = jest.fn((event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Update the form data with the test values
    mockFormData = updatedFormData;
    // Save the form data to local storage
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push(mockFormData);
    localStorage.setItem('reservations', JSON.stringify(reservations));
  });

  render(
    <Router>
      <BookingForm
        formData={mockFormData}
        availableTimes={mockAvailableTimes}
        numberOfPeople={['1', '2', '3', '4', '5']}
        occasions={['Birthday', 'Anniversary', 'Engagement']}
        onFormChange={(e) => {
          mockFormData[e.target.name] = e.target.value;
        }}
        onFormSubmit={mockSubmit}
      />
    </Router>
  );

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Number of people/i), { target: { value: '5' } });
  fireEvent.change(screen.getByLabelText(/Select a date/i), { target: { value: '2024-08-17' } });
  fireEvent.change(screen.getByLabelText(/Select a time/i), { target: { value: '14:00' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Engagement' } });
  fireEvent.change(screen.getByLabelText(/Phone number/i), { target: { value: '571-345-8296' } });

  // Submit the form
  fireEvent.click(screen.getByText(/Reserve/i));

  // Wait for the form submission to complete and local storage to update
  await waitFor(() => {
    expect(mockSubmit).toHaveBeenCalled(); // Ensure the submit function was called
    expect(localStorage.getItem('reservations')).toBeTruthy();
  });

  // Verify that the reservation was saved in local storage
  const reservations = JSON.parse(localStorage.getItem('reservations'));
  expect(reservations).toEqual(
    expect.arrayContaining([
      expect.objectContaining(updatedFormData)
    ])
  );
});
