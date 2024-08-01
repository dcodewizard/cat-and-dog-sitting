import { render, screen, fireEvent } from '@testing-library/react';
import SuccessModel from './SuccessModel';

describe('SuccessModel Component', () => {
  it('renders the SuccessModel component', () => {
    render(<SuccessModel closeModal={jest.fn()} />);
    
    expect(screen.getByText('Success!')).toBeInTheDocument();
    expect(screen.getByText('Your form has been submitted successfully.')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('calls closeModal when Close button is clicked', () => {
    const closeModal = jest.fn();
    render(<SuccessModel closeModal={closeModal} />);

    fireEvent.click(screen.getByText('Close'));

    expect(closeModal).toHaveBeenCalled();
  });
});
