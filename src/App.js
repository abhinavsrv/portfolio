import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RiskSimulator from './components/RiskSimulator';
import NaviDhan from './components/NaviDhan';
import EasterEgg from './components/EasterEgg';
import About from './components/About';
import Teenance from './components/Teenance';
import PinModal from './components/PinModal';
function App() {
    const [showContactEmails, setShowContactEmails] = useState(false);
    const [showPinModal, setShowPinModal] = useState(false);
    const [pinAttempt, setPinAttempt] = useState('');
    const [pinError, setPinError] = useState('');
    const [redirectToEasterEgg, setRedirectToEasterEgg] = useState(false);
    const correctPin = '2905';
    const toggleContactEmails = () => {
        setShowContactEmails(!showContactEmails);
    };
    const handleProfileClick = () => {
        setShowPinModal(true);
    };
    const handlePinChange = (e) => {
        setPinAttempt(e.target.value);
        setPinError('');
    };
    const handlePinSubmit = () => {
        if (pinAttempt === correctPin) {
            setShowPinModal(false);
            setRedirectToEasterEgg(true);
        }
        else {
            setPinError('Incorrect PIN. Please try again.');
        }
    };
    const handlePinCancel = () => {
        setShowPinModal(false);
        setPinAttempt('');
        setPinError('');
    };
    useEffect(() => {
        if (redirectToEasterEgg) {
            setRedirectToEasterEgg(false);
        }
    }, [redirectToEasterEgg]);
    return (_jsx(Router, { children: _jsxs("div", { className: "App", children: [_jsxs("header", { className: "header", children: [_jsxs("div", { className: "logo", children: [_jsx("span", { className: "logo-icon", children: "\u2726" }), _jsx("span", { className: "logo-text", children: "Abhinav Srivastava" })] }), _jsx("nav", { className: "nav", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/about", children: "About" }) }), _jsx("li", { children: _jsx(Link, { to: "/teenance", children: "Teenance" }) }), _jsx("li", { children: _jsx(Link, { to: "/risk-simulator", children: "Risk Simulator" }) }), _jsx("li", { children: _jsx(Link, { to: "/navidhan", children: "NaviDhan" }) }), _jsx("li", { children: _jsx("a", { href: "#contact", className: "contact-button", onClick: toggleContactEmails, children: "Get in touch" }) })] }) })] }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, { handleProfileClick: handleProfileClick }) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/teenance", element: _jsx(Teenance, {}) }), _jsx(Route, { path: "/risk-simulator", element: _jsx(RiskSimulator, {}) }), _jsx(Route, { path: "/navidhan", element: _jsx(NaviDhan, {}) }), _jsx(Route, { path: "/easter-egg", element: _jsx(EasterEgg, {}) }), redirectToEasterEgg && _jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/easter-egg" }) })] }), _jsxs("section", { id: "contact", className: "contact", children: [_jsx("h2", { children: "Get In Touch" }), _jsxs("div", { className: "contact-container", children: [_jsxs("div", { className: "contact-info", children: [_jsxs("p", { children: [_jsx("i", { className: "email-icon", children: "\u2709\uFE0F" }), _jsx("a", { href: "mailto:absolutelyabhinav@gmail.com", className: "contact-link", children: "Email" })] }), showContactEmails && (_jsxs("div", { className: "additional-emails animate-fade-in", children: [_jsxs("p", { children: [_jsx("i", { className: "email-icon", children: "\u2709\uFE0F" }), _jsx("a", { href: "mailto:abhinavsrv@icloud.com", className: "contact-link", children: "Personal Email" })] }), _jsxs("p", { children: [_jsx("i", { className: "email-icon", children: "\u2709\uFE0F" }), _jsx("a", { href: "mailto:abhinav.sr022@outlook.com", className: "contact-link", children: "Work Email" })] })] })), _jsxs("p", { children: [_jsx("i", { className: "linkedin-icon", children: "\uD83D\uDD17" }), _jsx("a", { href: "https://linkedin.com/in/cofounderteenance", target: "_blank", rel: "noopener noreferrer", className: "contact-link", children: "LinkedIn" })] }), _jsxs("p", { children: [_jsx("i", { className: "github-icon", children: "\uD83D\uDCBB" }), _jsx("a", { href: "https://github.com/abhinavsrv/", target: "_blank", rel: "noopener noreferrer", className: "contact-link", children: "GitHub" })] }), _jsxs("p", { children: [_jsx("i", { className: "instagram-icon", children: "\uD83D\uDCF8" }), _jsx("a", { href: "https://instagram.com/abhinav.hehe", target: "_blank", rel: "noopener noreferrer", className: "contact-link", children: "Instagram" })] }), _jsxs("p", { children: [_jsx("i", { className: "instagram-icon", children: "\uD83D\uDCF8" }), _jsx("a", { href: "https://instagram.com/abhinavxsrv", target: "_blank", rel: "noopener noreferrer", className: "contact-link", children: "Secondary Instagram" })] }), _jsxs("p", { children: [_jsx("i", { className: "phone-icon", children: "\uD83D\uDCF1" }), _jsx("a", { href: "tel:7880314040", className: "contact-link", children: "Phone" })] }), _jsxs("p", { children: [_jsx("i", { className: "download-icon", children: "\uD83D\uDCC4" }), _jsx("a", { href: "/abhinav_srivastava.pdf", download: true, className: "contact-link", children: "Download Resume" })] })] }), _jsx("div", { className: "contact-form", children: _jsxs("form", { children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", placeholder: "Your name" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", placeholder: "Your email" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "message", children: "Message" }), _jsx("textarea", { id: "message", name: "message", placeholder: "Your message" })] }), _jsx("button", { type: "submit", className: "submit-btn", children: "Send Message" })] }) })] })] }), _jsxs("footer", { children: [_jsxs("div", { className: "footer-content", children: [_jsxs("div", { className: "footer-logo", children: [_jsx("span", { className: "logo-icon", children: "\u2726" }), _jsx("span", { className: "logo-text", children: "Abhinav Srivastava" })] }), _jsxs("div", { className: "footer-links", children: [_jsx(Link, { to: "/", children: "Home" }), _jsx(Link, { to: "/about", children: "About" }), _jsx(Link, { to: "/teenance", children: "Teenance" }), _jsx(Link, { to: "/risk-simulator", children: "Risk Simulator" }), _jsx(Link, { to: "/navidhan", children: "NaviDhan" }), _jsx("a", { href: "#contact", children: "Contact" })] }), _jsxs("div", { className: "footer-social", children: [_jsx("a", { href: "https://linkedin.com/in/cofounderteenance", target: "_blank", rel: "noopener noreferrer", children: "LinkedIn" }), _jsx("a", { href: "https://github.com/abhinavsrv/", target: "_blank", rel: "noopener noreferrer", children: "GitHub" }), _jsx("a", { href: "https://instagram.com/abhinav.hehe", target: "_blank", rel: "noopener noreferrer", children: "Instagram" })] })] }), _jsx("div", { className: "footer-copyright", children: _jsx("p", { children: "\u00A9 2025 Abhinav Srivastava. All rights reserved." }) })] }), showPinModal && (_jsx(PinModal, { pinAttempt: pinAttempt, pinError: pinError, onPinChange: handlePinChange, onSubmit: handlePinSubmit, onCancel: handlePinCancel }))] }) }));
}
export default App;
