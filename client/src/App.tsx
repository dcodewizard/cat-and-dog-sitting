import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateBooking from './containers/CreateBooking/CreateBooking';
import BookingsList from './containers/BookingsList/BookingsList'
import Navbar from './components/Navbar/Navbar';

import './App.css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<CreateBooking />} />
            <Route path="/bookings" element={<BookingsList />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
