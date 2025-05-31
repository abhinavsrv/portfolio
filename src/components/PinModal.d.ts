import React from 'react';
interface PinModalProps {
    pinAttempt: string;
    pinError: string;
    onPinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
    onCancel: () => void;
}
declare const PinModal: React.FC<PinModalProps>;
export default PinModal;
