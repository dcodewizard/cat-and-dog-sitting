import React from 'react';
import { ErrorResponse } from '../../types';

interface FailureModelProps {
  closeModal: () => void;
  error?: ErrorResponse;
}

const FailureModel: React.FC<FailureModelProps> = ({ closeModal, error }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Oops!</h2>
        <p>We are unable to submit your form. Please check the error and try to resubmit the form</p>
        {error && <p>Error: {error.message}</p>}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default FailureModel;
