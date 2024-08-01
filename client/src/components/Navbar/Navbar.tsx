import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordPrompt from '../PasswordPrompt/PasswordPrompt';


const Navbar: React.FC = () => {
  const [isPromptVisible, setPromptVisible] = useState(false);
  const navigate = useNavigate();

  const handlePasswordCorrect = () => {
    setPromptVisible(false);
    navigate('/bookings');
  };

  return (
    <nav className="navbar navbar-light justify-content-between nav-bg-color">
      <a className="navbar-brand" onClick={() => navigate('/')}>
        <p className='ps-3 fst-italic fw-bold'>Animal Daycare</p>
      </a>
      <>
        <button
          className="btn btn-secondary me-5"
          type="button"
          onClick={() => setPromptVisible(true)}
        >
          Admin Page
        </button>

        {isPromptVisible && <PasswordPrompt onPasswordCorrect={handlePasswordCorrect} closeModal ={() => setPromptVisible(false)}/>}
      </>
    </nav>
  )
}

export default Navbar;