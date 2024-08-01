import { render, screen, fireEvent } from '@testing-library/react';

import CreateBooking from './CreateBooking';
import { createBooking } from '../../api';

jest.mock('../../api', () => ({
  createBooking: jest.fn(),
}));

describe('CreateBooking Component', () => {
  it('renders the form correctly', () => {
    render(<CreateBooking />);
    expect(screen.getByText(/Book Your Sitting Today!/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Animal Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cat/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Dog/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Hours Requested/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Service:/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  it('updates form data on input change', () => {
    render(<CreateBooking />);

    fireEvent.change(screen.getByPlaceholderText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Animal Name/i), { target: { value: 'Buddy' } });
    fireEvent.change(screen.getByLabelText(/Hours Requested/i), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText(/Date of Service:/i), { target: { value: '2024-08-01' } });

    expect(screen.getByPlaceholderText(/First Name/i)).toHaveValue('John');
    expect(screen.getByPlaceholderText(/Last Name/i)).toHaveValue('Doe');
    expect(screen.getByPlaceholderText(/Animal Name/i)).toHaveValue('Buddy');
    expect(screen.getByLabelText(/Hours Requested/i)).toHaveValue(4);
    expect(screen.getByLabelText(/Date of Service:/i)).toHaveValue('2024-08-01');
  });

  it('displays the total price for a cat', () => {
    render(<CreateBooking />);
    const catRadio = screen.getByLabelText(/Cat/i);
    fireEvent.click(catRadio);

    fireEvent.change(screen.getByLabelText(/Hours Requested/i), { target: { value: '4' } });
  
    expect(screen.getByText(/Total Price of this sitting:/i)).toBeInTheDocument();
    expect(screen.getByText(/\$40/i)).toBeInTheDocument(); // Base $20 + $5 per hour * 4 hours
  });

  it('submits the form and displays the success modal', async () => {
    (createBooking as jest.Mock).mockResolvedValue({});

    render(<CreateBooking />);

    fireEvent.change(screen.getByPlaceholderText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Animal Name/i), { target: { value: 'Buddy' } });
    fireEvent.change(screen.getByLabelText(/Hours Requested/i), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText(/Date of Service:/i), { target: { value: '2024-08-01' } });

    fireEvent.click(screen.getByText(/Submit/i));

    expect(createBooking).toHaveBeenCalled();
    expect(await screen.findByText(/Success!/i)).toBeInTheDocument();
  });
});


