import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { MemoryRouter } from 'react-router-dom';

describe('BookingForm', () => {
  it('renders the "Reserve a table" heading', () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={{ times: ["17:00", "18:00"] }} dispatch={vi.fn()} />
        </MemoryRouter>
    );
    expect(screen.getByTestId("form-heading")).toHaveTextContent("Reserve a table:")
  });
});
