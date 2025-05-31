import React, { useState, useEffect, useRef } from 'react';
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

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinAttempt(e.target.value);
    setPinError('');
  };

  const handlePinSubmit = () => {
    if (pinAttempt === correctPin) {
      setShowPinModal(false);
      setRedirectToEasterEgg(true);
    } else {
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

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
            <span className="logo-icon">✦</span>
            <span className="logo-text">Abhinav Srivastava</span>
          </div>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/teenance">Teenance</Link></li>
              <li><Link to="/risk-simulator">Risk Simulator</Link></li>
              <li><Link to="/navidhan">NaviDhan</Link></li>
              <li><a href="#contact" className="contact-button" onClick={toggleContactEmails}>Get in touch</a></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home handleProfileClick={handleProfileClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/teenance" element={<Teenance />} />
          <Route path="/risk-simulator" element={<RiskSimulator />} />
          <Route path="/navidhan" element={<NaviDhan />} />
          <Route path="/easter-egg" element={<EasterEgg />} />
          {redirectToEasterEgg && <Route path="/" element={<Navigate to="/easter-egg" />} />}
        </Routes>

        <section id="contact" className="contact">
          <h2>Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <p>
                <i className="email-icon">✉️</i> 
                <a href="mailto:absolutelyabhinav@gmail.com" className="contact-link">Email</a>
              </p>
              {showContactEmails && (
                <div className="additional-emails animate-fade-in">
                  <p>
                    <i className="email-icon">✉️</i> 
                    <a href="mailto:abhinavsrv@icloud.com" className="contact-link">Personal Email</a>
                  </p>
                  <p>
                    <i className="email-icon">✉️</i> 
                    <a href="mailto:abhinav.sr022@outlook.com" className="contact-link">Work Email</a>
                  </p>
                </div>
              )}
              <p>
                <i className="linkedin-icon">🔗</i> 
                <a href="https://linkedin.com/in/cofounderteenance" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              </p>
              <p>
                <i className="github-icon">💻</i> 
                <a href="https://github.com/abhinavsrv/" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
              </p>
              <p>
                <i className="instagram-icon">📸</i> 
                <a href="https://instagram.com/abhinav.hehe" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
              </p>
              <p>
                <i className="instagram-icon">📸</i> 
                <a href="https://instagram.com/abhinavxsrv" target="_blank" rel="noopener noreferrer" className="contact-link">Secondary Instagram</a>
              </p>
              <p>
                <i className="phone-icon">📱</i> 
                <a href="tel:7880314040" className="contact-link">Phone</a>
              </p>
              <p>
                <i className="download-icon">📄</i> 
                <a href="/abhinav_srivastava.pdf" download className="contact-link">Download Resume</a>
              </p>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">✦</span>
              <span className="logo-text">Abhinav Srivastava</span>
            </div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/teenance">Teenance</Link>
              <Link to="/risk-simulator">Risk Simulator</Link>
              <Link to="/navidhan">NaviDhan</Link>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com/in/cofounderteenance" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/abhinavsrv/" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://instagram.com/abhinav.hehe" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2025 Abhinav Srivastava. All rights reserved.</p>
          </div>
        </footer>

        {showPinModal && (
          <PinModal 
            pinAttempt={pinAttempt}
            pinError={pinError}
            onPinChange={handlePinChange}
            onSubmit={handlePinSubmit}
            onCancel={handlePinCancel}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
