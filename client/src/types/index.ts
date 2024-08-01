export interface BookingData {
  first_name: string;
  last_name: string;
  animal_name: string;
  animal_type: 0 | 1;
  hours_requested: number;
  date_of_service: string;
  price: number;
}

export interface ErrorResponse {
  status: number | null;
  message: string;
}

export interface BookingFormProps {
  formData: BookingData;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disableSave: boolean;
}

export interface FailureModelProps {
  closeModal: () => void;
  error?: ErrorResponse;
}

export interface SuccessModelProps {
  closeModal: () => void;
}

export interface FormData {
  animal_type: 0 | 1;
  hours_requested: number;
}