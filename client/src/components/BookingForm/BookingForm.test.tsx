import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { BookingData, BookingFormProps } from '../../types';

const mockHandleSubmit = jest.fn();
const mockHandleChange = jest.fn();

const initialFormData: BookingData = {
  first_name: '',
  last_name: '',
  animal_name: '',
  animal_type: 0,
  hours_requested: 0,
  date_of_service: '',
  price: 0,
};

const renderComponent = (formData: BookingData) =>
  render(
    <BookingForm
      formData={formData}
      handleSubmit={mockHandleSubmit}
      handleChange={mockHandleChange}
    />
  );

describe('BookingForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form with initial data', () => {
    renderComponent(initialFormData);

    expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Animal Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Hours Requested/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Service:/i)).toBeInTheDocument();
    expect(screen.getByText(/Book Your Sitting Today!/i)).toBeInTheDocument();
  });

  it('calls handleSubmit when form is submitted', () => {
    renderComponent(initialFormData);

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('calls handleChange when input values change', () => {
    renderComponent(initialFormData);
  
    fireEvent.change(screen.getByPlaceholderText(/First Name/i), {
      target: { value: 'John' },
    });

    fireEvent.change(screen.getByPlaceholderText(/Last Name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Animal Name/i), {
      target: { value: 'Buddy' },
    });
    fireEvent.change(screen.getByLabelText(/Hours Requested/i), {
      target: { value: 4 },
    });
    fireEvent.change(screen.getByLabelText(/Date of Service:/i), {
      target: { value: '2024-08-01' },
    });
  
    expect(mockHandleChange).toHaveBeenCalledTimes(5);
  });
  

  it('displays the total price if price is greater than 0', () => {
    const formDataWithPrice = {
      ...initialFormData,
      price: 100,
    };

    renderComponent(formDataWithPrice);

    expect(screen.getByText(/Total Price of this sitting/i)).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });
});
