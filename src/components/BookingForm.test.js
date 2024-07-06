import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { ChakraProvider } from '@chakra-ui/react';


describe('BookingForm', () => {
  const renderComponent = (submitFormMock) => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const dispatch = jest.fn();
    render(
      <ChakraProvider>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitFormMock} />
      </ChakraProvider>
    );
    return { availableTimes, dispatch };
  };

  test('renders BookingForm with initial values', () => {
    renderComponent();
    expect(screen.getByLabelText(/Choose date/i)).toHaveValue(new Date().toISOString().split('T')[0]);
    expect(screen.getByLabelText(/Choose Time/i)).toHaveValue('17:00');
    expect(screen.getByLabelText(/Number of guests/i)).toHaveValue('1');
    expect(screen.getByLabelText(/Occasion/i)).toHaveValue('Birthday');
  });

  test('updates form values on user input', () => {
    renderComponent();

    const newDate = '2024-07-10';
    const newTime = '18:00';
    const newGuests = 4;
    const newOccasion = 'Anniversary';

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: newDate } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: newTime } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: newGuests.toString() } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: newOccasion } });

    expect(screen.getByLabelText(/Choose date/i)).toHaveValue(newDate);
    expect(screen.getByLabelText(/Choose Time/i)).toHaveValue(newTime);
    expect(screen.getByLabelText(/Number of guests/i)).toHaveValue(newGuests.toString());
    expect(screen.getByLabelText(/Occasion/i)).toHaveValue(newOccasion);
  });

 
  test('calls handleSubmit on form submission', () => {
    const submitFormMock = jest.fn();
    renderComponent(submitFormMock);

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-07-15' } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Anniversary' } });

    fireEvent.click(screen.getByText(/make your reservation/i));

    expect(submitFormMock).toHaveBeenCalledWith({
      date: '2024-07-15',
      time: '18:00',
      occasion: 'Anniversary',
      guest: 3,
    });
    expect(submitFormMock).toHaveBeenCalledTimes(1);
  });
});