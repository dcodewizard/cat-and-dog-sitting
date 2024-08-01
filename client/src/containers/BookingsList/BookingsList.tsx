import { useEffect, useState } from 'react';
import { getAllBookings } from '../../api';
import { BookingData } from '../../types';
import { initialFormData, tableHeadings } from '../../utils/constants'

export default function BookingsList() {
  const [bookings, setBookings] = useState<BookingData[]>([initialFormData]);

  useEffect(() => {
    async function fetchBookings() {
      const response = await getAllBookings();
      if (response && response.data.bookings) {
        setBookings(response.data.bookings);
      }
    }
    fetchBookings();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Bookings List</h1>
      {bookings.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              {tableHeadings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.first_name}</td>
                <td>{booking.last_name}</td>
                <td>{booking.animal_name}</td>
                <td>{booking.animal_type === 0 ? 'Cat' : 'Dog'}</td>
                <td>{booking.hours_requested}</td>
                <td>{booking.date_of_service}</td>
                <td>${booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  );
}
