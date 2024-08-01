import axios, { AxiosResponse } from 'axios';
import { BookingData, ErrorResponse } from '../types';

export async function createBooking(newBooking: BookingData): Promise<AxiosResponse | ErrorResponse | BookingData> {
  try {
    const res: AxiosResponse = await axios.post('bookings', { booking: newBooking });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        status: error.response.status,
        message: error.response.data?.message || 'An error occurred'
      } as ErrorResponse;
    } else {
      return {
        status: 500,
        message: 'Unknown error occurred'
      } as ErrorResponse;
    }
  }
}

