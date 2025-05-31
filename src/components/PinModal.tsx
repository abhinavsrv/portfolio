import React from 'react';

interface PinModalProps {
  pinAttempt: string;
  pinError: string;
  onPinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const PinModal: React.FC<PinModalProps> = ({ 
  pinAttempt, 
  pinError, 
  onPinChange, 
  onSubmit, 
  onCancel 
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
    if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <div className="pin-modal-overlay">
      <div className="pin-modal">
        <div className="pin-modal-content">
          <h3>Enter PIN</h3>
          <p>Please enter the PIN to access the secret gallery</p>
          <div className="pin-input-container">
            <input
              type="password"
              value={pinAttempt}
              onChange={onPinChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter PIN"
              maxLength={4}
              autoFocus
            />
          </div>
          {pinError && <p className="pin-error">{pinError}</p>}
          <div className="pin-modal-buttons">
            <button className="pin-cancel-btn" onClick={onCancel}>Cancel</button>
            <button className="pin-submit-btn" onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinModal;
