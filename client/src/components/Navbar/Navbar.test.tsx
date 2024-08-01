import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

jest.mock('../PasswordPrompt/PasswordPrompt', () => ({
  __esModule: true,
  default: ({ onPasswordCorrect, closeModal }: any) => (
    <div>
      <button onClick={onPasswordCorrect}>Correct Password</button>
      <button onClick={closeModal}>Close</button>
    </div>
  ),
}));

describe('Navbar Component', () => {
  it('renders Navbar component', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByText('Animal Daycare')).toBeInTheDocument();
  });

  it('shows PasswordPrompt when Admin Page button is clicked', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    fireEvent.click(screen.getByText('Admin Page'));
    expect(screen.getByText('Correct Password')).toBeInTheDocument();
  });

  it('hides PasswordPrompt and navigates to /bookings on correct password', async () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    fireEvent.click(screen.getByText('Admin Page'));
    expect(screen.getByText('Correct Password')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Correct Password'));
    await waitFor(() => {
      expect(screen.queryByText('Correct Password')).not.toBeInTheDocument();
    });
    expect(mockedNavigate).toHaveBeenCalledWith('/bookings');
  });

  it('closes PasswordPrompt when Close button is clicked', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    fireEvent.click(screen.getByText('Admin Page'));
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText('Correct Password')).not.toBeInTheDocument();
  });
});
