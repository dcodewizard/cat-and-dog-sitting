import { render, screen, waitFor } from '@testing-library/react';
import BookingsList from './BookingsList';
import { getAllBookings } from '../../api';
import { BookingData } from '../../types';

jest.mock('../../api', () => ({
  getAllBookings: jest.fn(),
}));

const mockBookings: BookingData[] = [
  {
    first_name: 'John',
    last_name: 'Doe',
    animal_name: 'Fluffy',
    animal_type: 0,
    hours_requested: 3,
    date_of_service: '2024-07-31',
    price: 35
  },
  {
    first_name: 'Jane',
    last_name: 'Smith',
    animal_name: 'Rover',
    animal_type: 1,
    hours_requested: 4,
    date_of_service: '2024-08-01',
    price: 60
  }
];

it('displays bookings in a table', async () => {
  (getAllBookings as jest.Mock).mockReturnValue({ data: { bookings: mockBookings } });
  render(<BookingsList />);

  await waitFor(() => {
    expect(screen.getByText(/Bookings List/i)).toBeInTheDocument();
    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Fluffy/i)).toBeInTheDocument();
    expect(screen.getByText(/Cat/i)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(/35/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane/i)).toBeInTheDocument();
    expect(screen.getByText(/Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Rover/i)).toBeInTheDocument();
    expect(screen.getByText(/Dog/i)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(screen.getByText(/60/i)).toBeInTheDocument();
  });
});

describe('BookingsList', () => {
  beforeEach(() => {
    (getAllBookings as jest.Mock).mockClear();
  });

  it('displays "No bookings available." when there are no bookings', async () => {
    (getAllBookings as jest.Mock).mockResolvedValueOnce({ data: { bookings: [] } });

    render(<BookingsList />);

    const noBookingsMessage = await screen.findByText('No bookings available.');
    expect(noBookingsMessage).toBeInTheDocument();
  });
});
