import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero animate-section">
        <div className="container">
          <h1 className="animate-text-reveal">About Me</h1>
          <div className="about-intro animate-fade-in">
            <p>I'm a Computer Science student at BIT Mesra with a strong focus on quantitative finance, machine learning, and algorithm design. My journey combines academic excellence with practical innovation in the fintech space.</p>
          </div>
        </div>
      </section>

      <section className="about-story animate-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">My Journey</h2>
          <div className="story-content animate-fade-in">
            <p>My fascination with technology and finance began during my early academic years. As I progressed through my education, I developed a particular interest in how algorithms and mathematical models could be applied to financial markets and risk assessment.</p>
            
            <p>At BIT Mesra, I've had the opportunity to deepen my understanding of computer science fundamentals while simultaneously exploring advanced concepts in quantitative finance. The intersection of these fields has become my primary area of focus and passion.</p>
            
            <p>Beyond academics, I've channeled my interests into practical applications through my co-founded startup, Teenance Group, where we're developing cutting-edge trading systems and financial tools for volatile markets.</p>
          </div>
        </div>
      </section>

      <section className="about-philosophy animate-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">My Approach</h2>
          <div className="philosophy-content animate-fade-in">
            <p>I approach problems in a rational and pragmatic way, seeking the simplest and most functional solutions possible. My work philosophy centers around three core principles:</p>
            
            <div className="philosophy-principles">
              <div className="principle animate-scale-in">
                <h3>Data-Driven Decision Making</h3>
                <p>I believe in letting data guide the development process, using empirical evidence to validate hypotheses and refine solutions.</p>
              </div>
              
              <div className="principle animate-scale-in-delay-1">
                <h3>Elegant Simplicity</h3>
                <p>While I work with complex systems, I strive for elegant simplicity in implementation—creating solutions that are maintainable, scalable, and efficient.</p>
              </div>
              
              <div className="principle animate-scale-in-delay-2">
                <h3>Continuous Learning</h3>
                <p>The fields of machine learning and quantitative finance are constantly evolving. I maintain a commitment to continuous learning and adaptation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-education animate-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">Education</h2>
          <div className="education-timeline">
            <div className="timeline-item animate-slide-in-left">
              <div className="year">2024-2028</div>
              <div className="institution">Birla Institute of Technology, Mesra</div>
              <div className="degree">Bachelor of Technology - BTech, Computer Science and Engineering</div>
              <div className="details">
                <p>As a student at BIT Mesra, I've immersed myself in both academic excellence and extracurricular involvement. My coursework has focused on algorithm design, machine learning, and data structures, while my extracurricular activities have allowed me to develop leadership and collaborative skills.</p>
                <p>Key Involvements:</p>
                <ul>
                  <li>IEEE Society, Technical Team Member</li>
                  <li>FineArts Society, First Year Coordinator</li>
                  <li>Member, Institute Innovation Council</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item animate-slide-in-left-delay">
              <div className="year">July 2024</div>
              <div className="institution">Indian Institute of Technology, Kharagpur</div>
              <div className="degree">Summer of Quant, Elementary and Advanced</div>
              <div className="details">
                <p>The Summer of Quant program at IIT Kharagpur provided me with intensive training in quantitative finance and machine learning applications. This specialized program helped me develop a strong foundation in mathematical modeling for financial markets.</p>
                <p>Achievements:</p>
                <ul>
                  <li>Cleared the SOQ Elementary with distinction, meeting the prerequisites for the SOQ Advanced</li>
                  <li>Cleared the SOQ Advanced with 9.5 CGPA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-skills animate-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">Skills & Expertise</h2>
          
          <div className="skills-categories">
            <div className="skill-category animate-fade-in">
              <h3>Programming Languages</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <div className="skill-name">Python</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">SQL</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">HTML/CSS</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skill-category animate-fade-in-delay">
              <h3>Machine Learning & Data Science</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <div className="skill-name">Data Analysis</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">Machine Learning</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">Deep Learning</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">NLP</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skill-category animate-fade-in-delay-2">
              <h3>Quantitative Finance</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <div className="skill-name">Algorithmic Trading</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">Risk Modeling</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">Portfolio Optimization</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">Financial Analysis</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-interests animate-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">Beyond Tech</h2>
          <div className="interests-content animate-fade-in">
            <p>While my professional focus is on quantitative finance and machine learning, I maintain a variety of interests that help me stay balanced and creative:</p>
            
            <div className="interests-grid">
              <div className="interest-item animate-scale-in">
                <h3>Fine Arts</h3>
                <p>As a coordinator in the Fine Arts Society, I enjoy exploring various visual art forms and creative expression.</p>
              </div>
              
              <div className="interest-item animate-scale-in-delay-1">
                <h3>Financial Markets</h3>
                <p>I follow global financial markets closely, analyzing trends and studying market behaviors beyond my professional work.</p>
              </div>
              
              <div className="interest-item animate-scale-in-delay-2">
                <h3>Technology Innovation</h3>
                <p>I'm passionate about emerging technologies and their potential applications in solving real-world problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-navigation animate-fade-in">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/teenance" className="nav-button primary">Learn About Teenance</Link>
      </div>
    </div>
  );
};

export default About;
