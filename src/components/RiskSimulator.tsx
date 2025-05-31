import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const RiskSimulator: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

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
    <div className="project-page risk-simulator">
      <section className="project-hero animate-section" ref={headerRef}>
        <div className="project-hero-content">
          <h1 className="animate-text-reveal">Risk Simulator</h1>
          <h2 className="animate-fade-in">Enterprise-Grade Financial Risk Analytics Platform</h2>
          <div className="project-tags animate-fade-in-delay">
            <span className="project-tag">#QuantitativeFinance</span>
            <span className="project-tag">#MachineLearning</span>
            <span className="project-tag">#PortfolioOptimization</span>
            <span className="project-tag">#FinancialRisk</span>
            <span className="project-tag">#RiskManagement</span>
            <span className="project-tag">#UIUX</span>
            <span className="project-tag">#DataVisualization</span>
            <span className="project-tag">#XAI</span>
          </div>
          <div className="project-links animate-slide-up">
            <a href="https://lnkd.in/eSQ5Th7a" target="_blank" rel="noopener noreferrer" className="primary-link">View Project</a>
            <a href="https://github.com/abhinavsrv/" target="_blank" rel="noopener noreferrer" className="secondary-link">GitHub</a>
          </div>
        </div>
      </section>

      <section className="project-intro animate-section" ref={introRef}>
        <div className="container">
          <div className="intro-content">
            <h3 className="section-title animate-slide-up">Project Overview</h3>
            <div className="intro-text animate-fade-in">
              <p>Risk Simulator is a comprehensive analytics platform designed to transform how financial institutions assess credit risk, optimize portfolios, and simulate market conditions. As the lead (and only) developer for this project, I've engineered a robust solution that merges cutting-edge machine learning with advanced financial modeling to deliver actionable insights for risk management professionals.</p>
              
              <p className="highlight-text animate-scale-in">This project has been with me for years—started, abandoned, and revived more times than I can count. With the recent frontend overhaul, it's no longer just functional—it's complete.</p>
              
              <div className="update-box animate-slide-in">
                <h4>🚀 Recent Update: Fully Upgraded Frontend</h4>
                <p>Two weeks after the official launch of Risk Simulator, I completed a major update: a complete frontend redesign to match the platform's analytical depth with a high-performance, enterprise-grade user experience.</p>
                
                <div className="whats-new">
                  <h5>🔧 What's New:</h5>
                  <ul>
                    <li className="animate-slide-in-left">
                      <strong>📊 Real-Time Interactive Dashboards</strong>
                      <p>Dynamic exploration of credit models, simulations, and portfolios—powered by Plotly.js and D3.js</p>
                    </li>
                    <li className="animate-slide-in-left-delay-1">
                      <strong>🎨 Sleek, Responsive UI/UX</strong>
                      <p>Fully rebuilt using HTML5, CSS3, and JavaScript for intuitive navigation and seamless performance</p>
                    </li>
                    <li className="animate-slide-in-left-delay-2">
                      <strong>🔍 Visual Clarity for Complex Insights</strong>
                      <p>From SHAP explainability to CVaR risk surfaces—everything is now visually accessible and actionable</p>
                    </li>
                  </ul>
                </div>
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
              <div className="feature-icon">📊</div>
              <h4>Multi-Agent Market Simulation</h4>
              <p>Leverages SimPy and agent-based modeling to create realistic financial market simulations with configurable parameters for volatility, interest rates, and market conditions.</p>
            </div>
            
            <div className="feature-card animate-scale-in-delay-1">
              <div className="feature-icon">🧠</div>
              <h4>Explainable Credit Risk Modeling</h4>
              <p>Combines XGBoost with SHAP values to deliver transparent, interpretable risk assessments that help institutions understand the "why" behind each prediction.</p>
            </div>
            
            <div className="feature-card animate-scale-in-delay-2">
              <div className="feature-icon">📈</div>
              <h4>Advanced Portfolio Optimization</h4>
              <p>Implements Markowitz Mean-Variance Optimization and Conditional Value at Risk (CVaR) modeling to maximize returns while controlling risk exposure across different market segments.</p>
            </div>
            
            <div className="feature-card animate-scale-in-delay-3">
              <div className="feature-icon">🔍</div>
              <h4>Interactive Analytics Dashboard</h4>
              <p>Provides a sleek, enterprise-grade interface for exploring risk models, optimizing portfolios, and running market simulations with real-time visualization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-tech animate-section" ref={techStackRef}>
        <div className="container">
          <h3 className="section-title animate-slide-up">Technology Stack</h3>
          
          <div className="tech-categories">
            <div className="tech-category animate-fade-in">
              <h4>Simulation</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">SimPy</span>
                <span className="tech-pill animate-pop-delay-1">NumPy</span>
                <span className="tech-pill animate-pop-delay-2">Pandas</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay">
              <h4>Machine Learning</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">XGBoost</span>
                <span className="tech-pill animate-pop-delay-1">Scikit-learn</span>
                <span className="tech-pill animate-pop-delay-2">SHAP</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay-2">
              <h4>Portfolio Optimization</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">CVXPY</span>
                <span className="tech-pill animate-pop-delay-1">SciPy</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay-3">
              <h4>Visualization</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">Plotly.js</span>
                <span className="tech-pill animate-pop-delay-1">D3.js</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay-4">
              <h4>Frontend</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">HTML5</span>
                <span className="tech-pill animate-pop-delay-1">CSS3</span>
                <span className="tech-pill animate-pop-delay-2">JavaScript</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay-5">
              <h4>Data Processing</h4>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">Pandas</span>
                <span className="tech-pill animate-pop-delay-1">NumPy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-conclusion animate-section">
        <div className="container">
          <div className="conclusion-content animate-fade-in">
            <p>Risk Simulator represents the intersection of quantitative finance and modern software engineering—delivering institutional-grade analytics with the polish and usability of consumer applications.</p>
            <p>The platform demonstrates how advanced mathematical concepts like portfolio theory and machine learning explainability can be made accessible through thoughtful UI/UX design and interactive visualization.</p>
            <div className="cta-buttons animate-slide-up">
              <a href="https://lnkd.in/eSQ5Th7a" target="_blank" rel="noopener noreferrer" className="cta-button primary">View Live Project</a>
              <Link to="/" className="cta-button secondary">Back to Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskSimulator;
