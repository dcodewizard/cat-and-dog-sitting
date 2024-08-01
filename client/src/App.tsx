import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateBooking from './containers/CreateBooking/CreateBooking';

import './App.css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<CreateBooking />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
