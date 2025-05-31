import React from 'react';
import { Link } from 'react-router-dom';

const Teenance: React.FC = () => {
  return (
    <div className="teenance-page">
      <section className="teenance-hero animate-section">
        <div className="container">
          <h1 className="animate-text-reveal">Teenance Group</h1>
          <div className="teenance-subtitle animate-fade-in">
            <p>Co-Founder & CTO</p>
            <p className="teenance-date">September 2024 - Present</p>
          </div>
        </div>
      </section>

      <section className="teenance-intro animate-section">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title animate-slide-up">The Venture</h2>
            <div className="intro-text animate-fade-in">
              <p>TeeNance is a fintech startup that I co-founded, focused on building ultra-low latency trading systems and intelligent financial tools. We operate in high-volatility markets like crypto and forex, leveraging advanced ML and algorithmic strategies to optimize execution and profitability.</p>
              
              <p className="highlight-text animate-scale-in">As a co-founder, I played a pivotal role in securing funding during BIT Mesra's flagship event - BIT NISHAN, helping to establish our venture's financial foundation and market presence.</p>
              
              <div className="mission-box animate-slide-in">
                <h3>Our Mission</h3>
                <p>To engineer performance-driven systems for the future of quantitative finance, making sophisticated trading strategies accessible and effective in volatile market conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="teenance-role animate-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">My Role</h2>
          
          <div className="role-content">
            <div className="role-description animate-fade-in">
              <p>As the CTO and Quantitative Researcher at Teenance Group, I lead the development of our core trading systems and financial tools. My responsibilities span from algorithmic strategy design to technical implementation and performance optimization.</p>
            </div>
            
            <div className="responsibilities">
              <div className="responsibility-item animate-slide-in-left">
                <h3>Trading System Development</h3>
                <p>Developing ultra-high frequency and super-low frequency trading systems for profit maximization in volatile markets.</p>
              </div>
              
              <div className="responsibility-item animate-slide-in-left-delay-1">
                <h3>Algorithmic Strategy Design</h3>
                <p>Creating and implementing advanced algorithmic trading strategies for crypto futures, options, and forex markets.</p>
              </div>
              
              <div className="responsibility-item animate-slide-in-left-delay-2">
                <h3>Funding & Business Development</h3>
                <p>Helped secure initial funding through BIT Mesra's flagship event - BIT NISHAN, and continue to drive business growth and market expansion.</p>
              </div>
              
              <div className="responsibility-item animate-slide-in-left-delay-3">
                <h3>Technical Leadership</h3>
                <p>Leading the technical direction of the company, making architectural decisions, and ensuring system reliability and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="teenance-tech animate-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">Technology Stack</h2>
          
          <div className="tech-categories">
            <div className="tech-category animate-fade-in">
              <h3>Trading Infrastructure</h3>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">Python</span>
                <span className="tech-pill animate-pop-delay-1">C++</span>
                <span className="tech-pill animate-pop-delay-2">Redis</span>
                <span className="tech-pill animate-pop-delay-3">ZeroMQ</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay">
              <h3>Machine Learning</h3>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">TensorFlow</span>
                <span className="tech-pill animate-pop-delay-1">PyTorch</span>
                <span className="tech-pill animate-pop-delay-2">Scikit-learn</span>
                <span className="tech-pill animate-pop-delay-3">XGBoost</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay-2">
              <h3>Data Processing</h3>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">Pandas</span>
                <span className="tech-pill animate-pop-delay-1">NumPy</span>
                <span className="tech-pill animate-pop-delay-2">Apache Kafka</span>
                <span className="tech-pill animate-pop-delay-3">ClickHouse</span>
              </div>
            </div>
            
            <div className="tech-category animate-fade-in-delay-3">
              <h3>Market Analysis</h3>
              <div className="tech-pills">
                <span className="tech-pill animate-pop">TA-Lib</span>
                <span className="tech-pill animate-pop-delay-1">Plotly</span>
                <span className="tech-pill animate-pop-delay-2">Matplotlib</span>
                <span className="tech-pill animate-pop-delay-3">Seaborn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="teenance-achievements animate-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">Key Achievements</h2>
          
          <div className="achievements-list">
            <div className="achievement-item animate-scale-in">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h3>Secured Funding</h3>
                <p>Successfully secured initial funding through BIT Mesra's flagship event - BIT NISHAN, providing the capital needed to develop our core technology.</p>
              </div>
            </div>
            
            <div className="achievement-item animate-scale-in-delay-1">
              <div className="achievement-icon">📈</div>
              <div className="achievement-content">
                <h3>Trading System Performance</h3>
                <p>Developed trading systems that consistently outperform market benchmarks in volatile conditions, with particular success in crypto futures and forex markets.</p>
              </div>
            </div>
            
            <div className="achievement-item animate-scale-in-delay-2">
              <div className="achievement-icon">🚀</div>
              <div className="achievement-content">
                <h3>Technical Innovation</h3>
                <p>Pioneered new approaches to ultra-low latency trading in cryptocurrency markets, reducing execution times by over 40% compared to conventional methods.</p>
              </div>
            </div>
            
            <div className="achievement-item animate-scale-in-delay-3">
              <div className="achievement-icon">🔍</div>
              <div className="achievement-content">
                <h3>Market Analysis Framework</h3>
                <p>Created a comprehensive market analysis framework that integrates traditional technical indicators with machine learning models for enhanced prediction accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="teenance-future animate-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">Future Directions</h2>
          
          <div className="future-content animate-fade-in">
            <p>At Teenance Group, we're continuously evolving our technology and market approach. Our roadmap includes several exciting developments:</p>
            
            <div className="future-items">
              <div className="future-item animate-slide-in-right">
                <h3>Expanded Market Coverage</h3>
                <p>Extending our trading systems to additional market segments, including equities and commodities.</p>
              </div>
              
              <div className="future-item animate-slide-in-right-delay-1">
                <h3>Enhanced ML Capabilities</h3>
                <p>Incorporating advanced reinforcement learning techniques to further optimize trading strategies and risk management.</p>
              </div>
              
              <div className="future-item animate-slide-in-right-delay-2">
                <h3>Institutional Partnerships</h3>
                <p>Developing partnerships with financial institutions to provide our technology as a service to broader markets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-navigation animate-fade-in">
        <Link to="/about" className="nav-button">About Me</Link>
        <Link to="/risk-simulator" className="nav-button primary">Risk Simulator Project</Link>
      </div>
    </div>
  );
};

export default Teenance;
