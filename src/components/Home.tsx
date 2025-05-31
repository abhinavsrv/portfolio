import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

interface HomeProps {
  handleProfileClick: () => void;
}

const Home: React.FC<HomeProps> = ({ handleProfileClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header scroll effect
    const header = document.querySelector('.header') as HTMLElement;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

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

    // Initialize particles background
    initParticlesBackground();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Function to initialize particles background
  const initParticlesBackground = () => {
    const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${44 + Math.random() * 30}, ${82 + Math.random() * 30}, ${52 + Math.random() * 30}, ${0.3 + Math.random() * 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation function
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      // Draw connections
      connectParticles();
      
      requestAnimationFrame(animate);
    }

    // Connect particles with lines
    function connectParticles() {
      if (!ctx) return;
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(${44 + Math.random() * 30}, ${82 + Math.random() * 30}, ${52 + Math.random() * 30}, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Start animation
    animate();
  };

  return (
    <>
      <canvas id="particles-canvas" className="particles-background"></canvas>
      
      <section className="hero animate-section" ref={heroRef}>
        <div className="hero-content">
          <h1 className="portfolio-title animate-text">PORTFOLIO</h1>
          <div className="social-links animate-fade-in">
            <p>LI: <a href="https://linkedin.com/in/cofounderteenance" target="_blank" rel="noopener noreferrer">linkedin.com/in/cofounderteenance</a></p>
          </div>
          <div className="hero-text animate-fade-in-delay">
            <p>I love quantitative finance and machine learning. I approach problems in a rational and pragmatic way and seek the simplest and most functional solutions possible.</p>
          </div>
        </div>
        <div className="scroll-indicator animate-bounce">
          <span>Scroll down</span>
        </div>
      </section>

      <section id="about" className="about animate-section" ref={aboutRef}>
        <div className="about-content">
          <div className="about-text">
            <h2 className="animate-slide-up">Hello, I'm Abhinav!</h2>
            <p className="about-description animate-slide-up-delay">
              I'm a Computer Science student at BIT Mesra with a strong focus on quantitative finance, machine learning, and algorithm design. I've co-founded a fintech startup where I lead the development of high-frequency, low-latency trading algorithms for volatile markets like crypto, forex, and derivatives.
            </p>
            <div className="about-details animate-slide-up-delay-2">
              <div className="detail">
                <span className="detail-date">18 March 2006</span>
              </div>
              <div className="detail">
                <span className="detail-location">Ranchi, India</span>
              </div>
            </div>
            <div className="social-link animate-slide-up-delay-3">
              <a href="https://linkedin.com/in/cofounderteenance" target="_blank" rel="noopener noreferrer">linkedin.com/in/cofounderteenance</a>
            </div>
            <div className="resume-download animate-slide-up-delay-3">
              <a href="/abhinav_srivastava.pdf" download className="download-button">
                <i className="download-icon">📄</i> Download Resume
              </a>
            </div>
          </div>
          <div className="about-image animate-fade-in">
            <img 
              src={profileImage} 
              alt="Abhinav Srivastava" 
              className="animate-float" 
              onClick={handleProfileClick}
            />
            <div className="contact-box animate-slide-in">
              <h3>Contact</h3>
              <p><i className="location-icon">📍</i> Ranchi, India</p>
              <p><i className="email-icon">✉️</i> <a href="mailto:absolutelyabhinav@gmail.com">Email</a></p>
              <p><i className="phone-icon">📱</i> <a href="tel:7880314040">Phone</a></p>
              <p><i className="instagram-icon">📸</i> <a href="https://instagram.com/abhinav.hehe" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume animate-section" ref={resumeRef}>
        <h2 className="section-title animate-text-reveal">RESUME</h2>
        
        <div className="education">
          <h3 className="animate-slide-up">Education</h3>
          <div className="timeline">
            <div className="timeline-item animate-slide-in-left">
              <div className="year">2024-2028</div>
              <div className="institution">Birla Institute of Technology, Mesra</div>
              <div className="degree">Bachelor of Technology - BTech, Computer Science and Engineering</div>
              <div className="details">
                <p>- IEEE Society, Technical Team Member</p>
                <p>- FineArts Society, First Year Coordinator</p>
                <p>- Member, Institute Innovation Council</p>
              </div>
            </div>
            <div className="timeline-item animate-slide-in-left-delay">
              <div className="year">July 2024</div>
              <div className="institution">Indian Institute of Technology, Kharagpur</div>
              <div className="degree">Summer of Quant, Elementary and Advanced</div>
              <div className="details">
                <p>- Cleared the SOQ Elementary with distinction</p>
                <p>- Cleared the SOQ Advanced with 9.5 CGPA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience">
          <h3 className="animate-slide-up">Experience</h3>
          <div className="timeline">
            <div className="timeline-item animate-slide-in-right">
              <div className="year">Sept 2024 - Present</div>
              <div className="position">CTO and Quantitative Researcher</div>
              <div className="company">Teenance Group</div>
              <div className="details">
                <p>TeeNance is a fintech startup focused on building ultra-low latency trading systems and intelligent financial tools. We operate in high-volatility markets like crypto and forex, leveraging advanced ML and algorithmic strategies.</p>
                <p>- Developing ultra-high frequency and super-low frequency trading systems for profit maximization</p>
                <p>- Secured funding in BIT Mesra's flagship event- BIT NISHAN</p>
                <p>- Trading in volatile markets like Crypto Futures, Options, and Forex</p>
              </div>
            </div>
            <div className="timeline-item animate-slide-in-right-delay">
              <div className="year">April 2025 - Present</div>
              <div className="position">Technical Team Member</div>
              <div className="company">IEEE</div>
              <div className="details">
                <p>Technical Team, IEEE Society (Student Chapter), BIT Mesra</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills">
          <h3 className="animate-slide-up">Technical Skills</h3>
          <div className="skills-container">
            <div className="skills-column animate-fade-in">
              <h4>Software Skills</h4>
              <div className="skill-badges">
                <span className="skill-badge animate-pop">Python</span>
                <span className="skill-badge animate-pop-delay-1">Data Science</span>
                <span className="skill-badge animate-pop-delay-2">Machine Learning</span>
                <span className="skill-badge animate-pop-delay-3">Deep Learning</span>
                <span className="skill-badge animate-pop-delay-4">NLP</span>
              </div>
            </div>
            <div className="skills-column animate-fade-in-delay">
              <h4>Coding Skills</h4>
              <div className="skill-badges">
                <span className="skill-badge animate-pop">HTML</span>
                <span className="skill-badge animate-pop-delay-1">CSS</span>
                <span className="skill-badge animate-pop-delay-2">JavaScript</span>
                <span className="skill-badge animate-pop-delay-3">SQL</span>
                <span className="skill-badge animate-pop-delay-4">Algorithms</span>
                <span className="skill-badge animate-pop-delay-5">Data Structures</span>
              </div>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3 className="animate-slide-up">Licenses & Certifications</h3>
          <div className="cert-container">
            <div className="cert-item animate-scale-in">
              <div className="cert-title">Algorithms-I and Algorithms-II</div>
              <div className="cert-issuer">Princeton University</div>
              <div className="cert-date">Issued Mar 2025</div>
            </div>
            <div className="cert-item animate-scale-in-delay-1">
              <div className="cert-title">Programming in Python</div>
              <div className="cert-issuer">University of Leeds</div>
              <div className="cert-date">Issued Feb 2025</div>
            </div>
            <div className="cert-item animate-scale-in-delay-2">
              <div className="cert-title">Options-101</div>
              <div className="cert-issuer">Akuna Capital</div>
              <div className="cert-date">Issued Sep 2024</div>
            </div>
            <div className="cert-item animate-scale-in-delay-3">
              <div className="cert-title">Supervised Machine Learning: Regression and Classification</div>
              <div className="cert-issuer">DeepLearning.AI</div>
              <div className="cert-date">Issued Apr 2024</div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="projects animate-section" ref={projectsRef}>
        <h2 className="section-title animate-text-reveal">PROJECTS</h2>
        
        <div className="featured-projects">
          <div className="project-card large animate-slide-up">
            <h3>Risk Simulator</h3>
            <p className="project-subtitle">Enterprise-Grade Financial Risk Analytics Platform</p>
            <div className="project-tags">
              <span className="project-tag">#QuantitativeFinance</span>
              <span className="project-tag">#MachineLearning</span>
            </div>
            <p className="project-excerpt">
              A comprehensive analytics platform designed to transform how financial institutions assess credit risk, optimize portfolios, and simulate market conditions.
            </p>
            <Link to="/risk-simulator" className="project-link-button">View Project</Link>
          </div>
          
          <div className="project-card large animate-slide-up-delay">
            <h3>NaviDhan</h3>
            <p className="project-subtitle">AI-Powered Financial Guidance for Rural Communities</p>
            <div className="project-tags">
              <span className="project-tag">#AI</span>
              <span className="project-tag">#FinancialInclusion</span>
            </div>
            <p className="project-excerpt">
              A full-stack AI/ML platform designed to deliver personalized financial literacy, intelligent budgeting, and explainable investment guidance to underserved rural populations.
            </p>
            <Link to="/navidhan" className="project-link-button">View Project</Link>
          </div>
        </div>
        
        <div className="other-projects">
          <div className="project-card animate-scale-in">
            <h3>Comprehensive Backtesting of Advanced Trading Algorithms</h3>
            <p>Investigated algorithmic trading strategies for Apple stock using Python and backtesting. Implemented GitHub OAuth for trading data analysis.</p>
            <div className="project-skills">
              <span>Python</span>
              <span>SKLearn</span>
              <span>Matplotlib</span>
            </div>
          </div>
          
          <div className="project-card animate-scale-in-delay-1">
            <h3>Advanced Decision Tree Classification for Meteorological Forecasting</h3>
            <p>Built Decision Tree Classifier to forecast weather conditions. Ensured dataset integrity with 1,281 meteorological samples.</p>
            <div className="project-skills">
              <span>Python</span>
              <span>Numpy</span>
              <span>Pandas</span>
            </div>
          </div>
          
          <div className="project-card animate-scale-in-delay-2">
            <h3>Advanced Credit Card Fraud Detection Through ML</h3>
            <p>Developed a fraud detection system using Decision Tree, Random Forest, AdaBoost, and XGBoost.</p>
            <div className="project-skills">
              <span>Machine Learning</span>
              <span>Data Analysis</span>
              <span>XGBoost</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
