import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import PasswordPrompt from '../PasswordPrompt/PasswordPrompt';


const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPromptVisible, setPromptVisible] = useState<boolean>(false);

  const isOnBookingsPage = location.pathname.includes('/bookings');

  const handlePasswordCorrect = () => {
    setPromptVisible(false);
    navigate('/bookings');
  };

  return (
    <nav className="navbar navbar-light justify-content-between nav-bg-color">
      <a className="navbar-brand" onClick={() => navigate('/')}>
        <p className='ps-3 fst-italic fw-bold cursor-pointer'>Animal Daycare</p>
      </a>
      <>
        {isOnBookingsPage ? (
          <button
            className="btn btn-secondary me-5"
            type="button"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        ) : (
          <button
            className="btn btn-secondary me-5"
            type="button"
            onClick={() => setPromptVisible(true)}
          >
            Admin Page
          </button>
        )}
        {isPromptVisible && <PasswordPrompt onPasswordCorrect={handlePasswordCorrect} closeModal ={() => setPromptVisible(false)}/>}
      </>
    </nav>
  )
}

export default Navbar;