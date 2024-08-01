import { BookingData } from "../../types";

export const initialFormData: BookingData = {
  first_name: '',
  last_name: '',
  animal_name: '',
  animal_type: 0,
  hours_requested: 0,
  date_of_service: '',
  price: 0
};

export const tableHeadings = ['First Name', 'Last Name', 'Animal Name', 'Animal Type', 'Hours Requested', 'Date of Service', 'Price']