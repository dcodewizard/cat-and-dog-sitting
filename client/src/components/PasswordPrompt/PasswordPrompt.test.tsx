import { render, screen, fireEvent } from '@testing-library/react';
import PasswordPrompt from './PasswordPrompt';

describe('PasswordPrompt Component', () => {
  it('renders the PasswordPrompt component', () => {
    render(<PasswordPrompt onPasswordCorrect={jest.fn()} closeModal={jest.fn()} />);
    
    expect(screen.getByText('Enter Password:')).toBeInTheDocument();
    expect(screen.getByLabelText('Enter Password:')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('calls onPasswordCorrect when correct password is entered', () => {
    const onPasswordCorrect = jest.fn();
    render(<PasswordPrompt onPasswordCorrect={onPasswordCorrect} closeModal={jest.fn()} />);

    fireEvent.change(screen.getByLabelText('Enter Password:'), { target: { value: '12345' } });
    fireEvent.click(screen.getByText('Submit'));

    expect(onPasswordCorrect).toHaveBeenCalled();
  });

  it('shows error message when incorrect password is entered', () => {
    render(<PasswordPrompt onPasswordCorrect={jest.fn()} closeModal={jest.fn()} />);

    fireEvent.change(screen.getByLabelText('Enter Password:'), { target: { value: 'wrong_password' } });
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Incorrect password')).toBeInTheDocument();
  });

  it('calls closeModal when Close button is clicked', () => {
    const closeModal = jest.fn();
    render(<PasswordPrompt onPasswordCorrect={jest.fn()} closeModal={closeModal} />);

    fireEvent.click(screen.getByText('Close'));

    expect(closeModal).toHaveBeenCalled();
  });
});
