import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FailureModel from './FailureModel';
import { ErrorResponse } from '../../types';

describe('FailureModel Component', () => {
  it('renders the FailureModel component without an error', () => {
    render(<FailureModel closeModal={jest.fn()} />);
    
    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText('We are unable to submit your form. Please check the error and try to resubmit the form')).toBeInTheDocument();
    expect(screen.queryByText('Error:')).not.toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('renders the FailureModel component with an error', () => {
    const error: ErrorResponse = { status: 400, message: 'Invalid data provided' };
    render(<FailureModel closeModal={jest.fn()} error={error} />);

    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText('We are unable to submit your form. Please check the error and try to resubmit the form')).toBeInTheDocument();
    expect(screen.getByText('Error: Invalid data provided')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('calls closeModal when Close button is clicked', () => {
    const closeModal = jest.fn();
    render(<FailureModel closeModal={closeModal} />);

    fireEvent.click(screen.getByText('Close'));

    expect(closeModal).toHaveBeenCalled();
  });
});
