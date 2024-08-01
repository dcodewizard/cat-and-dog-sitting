import React from 'react';
import { ErrorResponse } from '../../types';

interface SuccessModelProps {
  closeModal: () => void;
}

const SuccessModel: React.FC<SuccessModelProps> = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Success!</h2>
        <p>Your form has been submitted successfully.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default SuccessModel;
