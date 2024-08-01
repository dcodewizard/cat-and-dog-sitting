import React, { useState } from 'react';

interface PasswordPromptProps {
  onPasswordCorrect: () => void;
  closeModal: () => void;
}

const PasswordPrompt: React.FC<PasswordPromptProps> = ({ onPasswordCorrect, closeModal }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '12345') {
      onPasswordCorrect();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="password-prompt">
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className='me-3'>Submit</button>
        <button onClick={closeModal}>Close</button>
      </form>
    </div>
  );
};

export default PasswordPrompt;
