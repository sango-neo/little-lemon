import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        useNavigate: () => vi.fn(),
    }
});

describe('BookingForm', () => {
  it('renders the "Reserve a table" heading', () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={{ times: ["17:00", "18:00"] }} dispatch={vi.fn()} />
        </MemoryRouter>
    );
    expect(screen.getByTestId("form-heading")).toHaveTextContent("Reserve a table:")
  });

  it('renders input fields with validation attributes', () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={{ times: ["17:00", "18:00"] }} dispatch={vi.fn()} />
        </MemoryRouter>
    );

    // Check validation attributes for each input field
    const inputFields = [
      { id: 'date-picker', validationAttribute: 'min' },
      { id: 'time-select', validationAttribute: 'required' },
      { id: 'guests', validationAttribute: 'max' },
      { id: 'occasion-select', validationAttribute: 'required' },
    ];

    inputFields.forEach(({ id, validationAttribute }) => {
      const inputElement = screen.getByTestId(id);
      expect(inputElement).toHaveAttribute(validationAttribute);
    });
  });

    //   Will not check validation functions that are made redundant by HTML validation checks (date picker and guests)
  it('displays validation error for time select input field', async () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={{ times: ["17:00", "18:00"] }} dispatch={vi.fn()} />
        </MemoryRouter>
    );

    const timeSelect = screen.getByTestId('time-select');
    fireEvent.focus(timeSelect);
    fireEvent.blur(timeSelect);

    const errorMsg = await screen.findByText('Time is required');
    expect(errorMsg).toBeInTheDocument();
  });

  it('displays validation error for occasion select input field', async () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={{ times: ["17:00", "18:00"] }} dispatch={vi.fn()} />
        </MemoryRouter>
    );

    const occasionSelect = screen.getByTestId('occasion-select');
    fireEvent.focus(occasionSelect);
    fireEvent.blur(occasionSelect);

    const errorMsg = await screen.findByText('Occasion is required');
    expect(errorMsg).toBeInTheDocument();
  });

//   it('submits the form validly', async () => {
//     const mockNavigate = vi.fn();
//     const mockNav = vi.spyOn(mockNavigate, "mockImplementation");
//     render(
//         <MemoryRouter>
//             <BookingForm availableTimes={{ times: ["17:00", "18:00"] }} dispatch={vi.fn()} />
//         </MemoryRouter>
//     );

//     // Fill out form fields
//     userEvent.type(screen.getByTestId('date-picker'), '2024-03-11')
//     userEvent.type(screen.getByTestId('time-select'), '17:00');
//     userEvent.type(screen.getByTestId('guests'), "2");
//     userEvent.type(screen.getByTestId('occasion-select'), 'birthday');

//     // Submit the form
//     fireEvent.submit(screen.getByTestId('booking-form'));

//     // Wait for form submission
//     await waitFor(() => {
//       // Assert that form submission was successful
//       expect(mockNav).toHaveBeenCalledOnce()
//     });
//   });
});
