import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PinModal = ({ pinAttempt, pinError, onPinChange, onSubmit, onCancel }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
        if (e.key === 'Escape') {
            onCancel();
        }
    };
    return (_jsx("div", { className: "pin-modal-overlay", children: _jsx("div", { className: "pin-modal", children: _jsxs("div", { className: "pin-modal-content", children: [_jsx("h3", { children: "Enter PIN" }), _jsx("p", { children: "Please enter the PIN to access the secret gallery" }), _jsx("div", { className: "pin-input-container", children: _jsx("input", { type: "password", value: pinAttempt, onChange: onPinChange, onKeyDown: handleKeyDown, placeholder: "Enter PIN", maxLength: 4, autoFocus: true }) }), pinError && _jsx("p", { className: "pin-error", children: pinError }), _jsxs("div", { className: "pin-modal-buttons", children: [_jsx("button", { className: "pin-cancel-btn", onClick: onCancel, children: "Cancel" }), _jsx("button", { className: "pin-submit-btn", onClick: onSubmit, children: "Submit" })] })] }) }) }));
};
export default PinModal;
