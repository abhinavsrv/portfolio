import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import navidhan1 from '../assets/navidhan/navidhan1.jpg';
import navidhan2 from '../assets/navidhan/navidhan2.jpg';
import navidhan3 from '../assets/navidhan/navidhan3.jpg';
import navidhan4 from '../assets/navidhan/navidhan4.jpg';

const NaviDhan: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="project-page navidhan">
      <section className="project-hero animate-section" ref={headerRef}>
        <div className="project-hero-content">
          <h1 className="animate-text-reveal">NaviDhan</h1>
          <h2 className="animate-fade-in">AI-Powered Financial Guidance for Rural Communities</h2>
          <div className="project-tags animate-fade-in-delay">
            <span className="project-tag">#AI</span>
            <span className="project-tag">#MachineLearning</span>
            <span className="project-tag">#Fintech</span>
            <span className="project-tag">#NLP</span>
            <span className="project-tag">#ExplainableAI</span>
            <span className="project-tag">#TimeSeries</span>
            <span className="project-tag">#SocialImpact</span>
            <span className="project-tag">#FinancialInclusion</span>
          </div>
          <div className="project-links animate-slide-up">
            <a href="https://github.com/abhinavsrv/" target="_blank" rel="noopener noreferrer" className="secondary-link">GitHub</a>
          </div>
        </div>
      </section>

      <section className="project-intro animate-section" ref={introRef}>
        <div className="container">
          <div className="intro-content">
            <h3 className="section-title animate-slide-up">Project Overview</h3>
            <div className="intro-text animate-fade-in">
              <p>NaviDhan is a full-stack AI/ML platform designed to deliver personalized financial literacy, intelligent budgeting, and explainable investment guidance to underserved rural populations. As the lead developer for the AI/ML systems, I've engineered a robust and scalable solution that merges cutting-edge machine learning with real-world financial empowerment.</p>
              
              <div className="project-image-container animate-scale-in">
                <img src={navidhan2} alt="NaviDhan Platform Interface" className="project-image" />
                <div className="image-caption">NaviDhan's intuitive interface designed for rural users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-features animate-section" ref={featuresRef}>
        <div className="container">
          <h3 className="section-title animate-text-reveal">Core Features</h3>
          
          <div className="features-grid">
            <div className="feature-card animate-scale-in">
              <div className="feature-icon">🔤</div>
              <h4>Multilingual Financial Education</h4>
              <p>Deploys FastText, BERT, IndicBERT, and custom transformers to deliver content and guidance in regional languages with cultural relevance.</p>
            </div>
            
            <div className="feature-card animate-scale-in-delay-1">
              <div className="feature-icon">📊</div>
              <h4>Smart Budgeting & Savings Forecasting</h4>
              <p>Combines ARIMA, Prophet, ETS, and LSTM models for personalized savings planning and predictive goal tracking.</p>
            </div>
            
            <div className="feature-card animate-scale-in-delay-2">
              <div className="feature-icon">💡</div>
              <h4>Explainable Micro-Investment Recommendations</h4>
              <p>Built with XGBoost, AdaBoost, and enhanced via SHAP & LIME to ensure users understand why each suggestion is made—bringing transparency to financial advice.</p>
            </div>
          </div>

          <div className="project-image-grid animate-fade-in">
            <div className="image-wrapper animate-slide-in-left">
              <img src={navidhan3} alt="NaviDhan Features" className="feature-image" />
            </div>
            <div className="image-wrapper animate-slide-in-right">
              <img src={navidhan4} alt="NaviDhan AI Features" className="feature-image" />
            </div>
          </div>
          
          <div className="in-progress">
            <h4 className="animate-slide-up">🧠 In Progress:</h4>
            <div className="progress-features">
              <div className="progress-feature animate-slide-in-left">
                <h5>🏦 AI Banking Assistant</h5>
                <p>A secure, intuitive natural language interface for accessing basic banking services.</p>
              </div>
              
              <div className="progress-feature animate-slide-in-left-delay">
                <h5>👥 Mentor & Advisor Matching</h5>
                <p>An AI-powered matchmaking engine to connect users with the right financial mentors and experts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-testimonials animate-section" ref={testimonialsRef}>
        <div className="container">
          <h3 className="section-title animate-slide-up">Success Stories</h3>
          
          <div className="testimonials-grid">
            <div className="testimonial-card animate-scale-in">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">NaviDhan helped me understand how to manage my seasonal income and save for my children's education.</p>
              <div className="testimonial-author">
                <p className="author-name">Rajesh Kumar</p>
                <p className="author-title">Farmer, Bihar</p>
              </div>
            </div>
            
            <div className="testimonial-card animate-scale-in-delay-1">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">The investment recommendations helped me grow my small business with confidence.</p>
              <div className="testimonial-author">
                <p className="author-name">Lakshmi Devi</p>
                <p className="author-title">Small Business Owner, Tamil Nadu</p>
              </div>
            </div>
            
            <div className="testimonial-card animate-scale-in-delay-2">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">I learned how to budget and save money for emergencies through the educational content in Hindi.</p>
              <div className="testimonial-author">
                <p className="author-name">Anita Sharma</p>
                <p className="author-title">Homemaker, Rajasthan</p>
              </div>
            </div>
          </div>
          
          <div className="project-image-container full-width animate-fade-in">
            <img src={navidhan1} alt="NaviDhan How It Works" className="full-width-image" />
            <div className="image-caption">How NaviDhan works - from profile creation to wealth growth</div>
          </div>
        </div>
      </section>

      <section className="project-tech animate-section">
        <div className="container">
          <h3 className="section-title animate-slide-up">Technology Stack</h3>
          
          <div className="tech-categories">
            <div className="tech-category animate-fade-in">
              <h4>Backend</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">Python</span>
                <span className="tech-pill animate-pop-delay-1">FastAPI</span>
                <span className="tech-pill animate-pop-delay-2">Flask</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay">
              <h4>Machine Learning</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">XGBoost</span>
                <span className="tech-pill animate-pop-delay-1">AdaBoost</span>
                <span className="tech-pill animate-pop-delay-2">Time-Series ML</span>
                <span className="tech-pill animate-pop-delay-3">Transformers</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay-2">
              <h4>Explainability</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">SHAP</span>
                <span className="tech-pill animate-pop-delay-1">LIME</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay-3">
              <h4>Computer Vision</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">CNN</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay-4">
              <h4>Infrastructure</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">Full ML Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-conclusion animate-section">
        <div className="container">
          <div className="conclusion-content animate-fade-in">
            <p>NaviDhan has been a powerful journey—blending technical depth with social impact. It's a testament to how applied AI can directly uplift underserved communities with tools that are intelligent, explainable, and human-centric.</p>
            <p className="note animate-slide-up">📌 Note: The AI Banking Assistant and Mentor/Advisor Matching features are still under development. Any names, roles, or entities referenced are fictional and intended strictly for demonstration purposes.</p>
            <div className="cta-buttons animate-slide-up">
              <Link to="/" className="cta-button secondary">Back to Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaviDhan;
