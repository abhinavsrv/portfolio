import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';
const Home = ({ handleProfileClick }) => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const resumeRef = useRef(null);
    const projectsRef = useRef(null);
    useEffect(() => {
        // Header scroll effect
        const header = document.querySelector('.header');
        const handleScroll = () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            }
            else {
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
        const canvas = document.getElementById('particles-canvas');
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particles = [];
        const particleCount = 100;
        // Particle class
        class Particle {
            x;
            y;
            size;
            speedX;
            speedY;
            color;
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
                if (this.x > canvas.width)
                    this.x = 0;
                else if (this.x < 0)
                    this.x = canvas.width;
                if (this.y > canvas.height)
                    this.y = 0;
                else if (this.y < 0)
                    this.y = canvas.height;
            }
            draw() {
                if (!ctx)
                    return;
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
            if (!ctx)
                return;
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
            if (!ctx)
                return;
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
    return (_jsxs(_Fragment, { children: [_jsx("canvas", { id: "particles-canvas", className: "particles-background" }), _jsxs("section", { className: "hero animate-section", ref: heroRef, children: [_jsxs("div", { className: "hero-content", children: [_jsx("h1", { className: "portfolio-title animate-text", children: "PORTFOLIO" }), _jsx("div", { className: "social-links animate-fade-in", children: _jsxs("p", { children: ["LI: ", _jsx("a", { href: "https://linkedin.com/in/cofounderteenance", target: "_blank", rel: "noopener noreferrer", children: "linkedin.com/in/cofounderteenance" })] }) }), _jsx("div", { className: "hero-text animate-fade-in-delay", children: _jsx("p", { children: "I love quantitative finance and machine learning. I approach problems in a rational and pragmatic way and seek the simplest and most functional solutions possible." }) })] }), _jsx("div", { className: "scroll-indicator animate-bounce", children: _jsx("span", { children: "Scroll down" }) })] }), _jsx("section", { id: "about", className: "about animate-section", ref: aboutRef, children: _jsxs("div", { className: "about-content", children: [_jsxs("div", { className: "about-text", children: [_jsx("h2", { className: "animate-slide-up", children: "Hello, I'm Abhinav!" }), _jsx("p", { className: "about-description animate-slide-up-delay", children: "I'm a Computer Science student at BIT Mesra with a strong focus on quantitative finance, machine learning, and algorithm design. I've co-founded a fintech startup where I lead the development of high-frequency, low-latency trading algorithms for volatile markets like crypto, forex, and derivatives." }), _jsxs("div", { className: "about-details animate-slide-up-delay-2", children: [_jsx("div", { className: "detail", children: _jsx("span", { className: "detail-date", children: "18 March 2006" }) }), _jsx("div", { className: "detail", children: _jsx("span", { className: "detail-location", children: "Ranchi, India" }) })] }), _jsx("div", { className: "social-link animate-slide-up-delay-3", children: _jsx("a", { href: "https://linkedin.com/in/cofounderteenance", target: "_blank", rel: "noopener noreferrer", children: "linkedin.com/in/cofounderteenance" }) }), _jsx("div", { className: "resume-download animate-slide-up-delay-3", children: _jsxs("a", { href: "/abhinav_srivastava.pdf", download: true, className: "download-button", children: [_jsx("i", { className: "download-icon", children: "\uD83D\uDCC4" }), " Download Resume"] }) })] }), _jsxs("div", { className: "about-image animate-fade-in", children: [_jsx("img", { src: profileImage, alt: "Abhinav Srivastava", className: "animate-float", onClick: handleProfileClick }), _jsxs("div", { className: "contact-box animate-slide-in", children: [_jsx("h3", { children: "Contact" }), _jsxs("p", { children: [_jsx("i", { className: "location-icon", children: "\uD83D\uDCCD" }), " Ranchi, India"] }), _jsxs("p", { children: [_jsx("i", { className: "email-icon", children: "\u2709\uFE0F" }), " ", _jsx("a", { href: "mailto:absolutelyabhinav@gmail.com", children: "Email" })] }), _jsxs("p", { children: [_jsx("i", { className: "phone-icon", children: "\uD83D\uDCF1" }), " ", _jsx("a", { href: "tel:7880314040", children: "Phone" })] }), _jsxs("p", { children: [_jsx("i", { className: "instagram-icon", children: "\uD83D\uDCF8" }), " ", _jsx("a", { href: "https://instagram.com/abhinav.hehe", target: "_blank", rel: "noopener noreferrer", children: "Instagram" })] })] })] })] }) }), _jsxs("section", { id: "resume", className: "resume animate-section", ref: resumeRef, children: [_jsx("h2", { className: "section-title animate-text-reveal", children: "RESUME" }), _jsxs("div", { className: "education", children: [_jsx("h3", { className: "animate-slide-up", children: "Education" }), _jsxs("div", { className: "timeline", children: [_jsxs("div", { className: "timeline-item animate-slide-in-left", children: [_jsx("div", { className: "year", children: "2024-2028" }), _jsx("div", { className: "institution", children: "Birla Institute of Technology, Mesra" }), _jsx("div", { className: "degree", children: "Bachelor of Technology - BTech, Computer Science and Engineering" }), _jsxs("div", { className: "details", children: [_jsx("p", { children: "- IEEE Society, Technical Team Member" }), _jsx("p", { children: "- FineArts Society, First Year Coordinator" }), _jsx("p", { children: "- Member, Institute Innovation Council" })] })] }), _jsxs("div", { className: "timeline-item animate-slide-in-left-delay", children: [_jsx("div", { className: "year", children: "July 2024" }), _jsx("div", { className: "institution", children: "Indian Institute of Technology, Kharagpur" }), _jsx("div", { className: "degree", children: "Summer of Quant, Elementary and Advanced" }), _jsxs("div", { className: "details", children: [_jsx("p", { children: "- Cleared the SOQ Elementary with distinction" }), _jsx("p", { children: "- Cleared the SOQ Advanced with 9.5 CGPA" })] })] })] })] }), _jsxs("div", { className: "experience", children: [_jsx("h3", { className: "animate-slide-up", children: "Experience" }), _jsxs("div", { className: "timeline", children: [_jsxs("div", { className: "timeline-item animate-slide-in-right", children: [_jsx("div", { className: "year", children: "Sept 2024 - Present" }), _jsx("div", { className: "position", children: "CTO and Quantitative Researcher" }), _jsx("div", { className: "company", children: "Teenance Group" }), _jsxs("div", { className: "details", children: [_jsx("p", { children: "TeeNance is a fintech startup focused on building ultra-low latency trading systems and intelligent financial tools. We operate in high-volatility markets like crypto and forex, leveraging advanced ML and algorithmic strategies." }), _jsx("p", { children: "- Developing ultra-high frequency and super-low frequency trading systems for profit maximization" }), _jsx("p", { children: "- Secured funding in BIT Mesra's flagship event- BIT NISHAN" }), _jsx("p", { children: "- Trading in volatile markets like Crypto Futures, Options, and Forex" })] })] }), _jsxs("div", { className: "timeline-item animate-slide-in-right-delay", children: [_jsx("div", { className: "year", children: "April 2025 - Present" }), _jsx("div", { className: "position", children: "Technical Team Member" }), _jsx("div", { className: "company", children: "IEEE" }), _jsx("div", { className: "details", children: _jsx("p", { children: "Technical Team, IEEE Society (Student Chapter), BIT Mesra" }) })] })] })] }), _jsxs("div", { className: "skills", children: [_jsx("h3", { className: "animate-slide-up", children: "Technical Skills" }), _jsxs("div", { className: "skills-container", children: [_jsxs("div", { className: "skills-column animate-fade-in", children: [_jsx("h4", { children: "Software Skills" }), _jsxs("div", { className: "skill-badges", children: [_jsx("span", { className: "skill-badge animate-pop", children: "Python" }), _jsx("span", { className: "skill-badge animate-pop-delay-1", children: "Data Science" }), _jsx("span", { className: "skill-badge animate-pop-delay-2", children: "Machine Learning" }), _jsx("span", { className: "skill-badge animate-pop-delay-3", children: "Deep Learning" }), _jsx("span", { className: "skill-badge animate-pop-delay-4", children: "NLP" })] })] }), _jsxs("div", { className: "skills-column animate-fade-in-delay", children: [_jsx("h4", { children: "Coding Skills" }), _jsxs("div", { className: "skill-badges", children: [_jsx("span", { className: "skill-badge animate-pop", children: "HTML" }), _jsx("span", { className: "skill-badge animate-pop-delay-1", children: "CSS" }), _jsx("span", { className: "skill-badge animate-pop-delay-2", children: "JavaScript" }), _jsx("span", { className: "skill-badge animate-pop-delay-3", children: "SQL" }), _jsx("span", { className: "skill-badge animate-pop-delay-4", children: "Algorithms" }), _jsx("span", { className: "skill-badge animate-pop-delay-5", children: "Data Structures" })] })] })] })] }), _jsxs("div", { className: "certifications", children: [_jsx("h3", { className: "animate-slide-up", children: "Licenses & Certifications" }), _jsxs("div", { className: "cert-container", children: [_jsxs("div", { className: "cert-item animate-scale-in", children: [_jsx("div", { className: "cert-title", children: "Algorithms-I and Algorithms-II" }), _jsx("div", { className: "cert-issuer", children: "Princeton University" }), _jsx("div", { className: "cert-date", children: "Issued Mar 2025" })] }), _jsxs("div", { className: "cert-item animate-scale-in-delay-1", children: [_jsx("div", { className: "cert-title", children: "Programming in Python" }), _jsx("div", { className: "cert-issuer", children: "University of Leeds" }), _jsx("div", { className: "cert-date", children: "Issued Feb 2025" })] }), _jsxs("div", { className: "cert-item animate-scale-in-delay-2", children: [_jsx("div", { className: "cert-title", children: "Options-101" }), _jsx("div", { className: "cert-issuer", children: "Akuna Capital" }), _jsx("div", { className: "cert-date", children: "Issued Sep 2024" })] }), _jsxs("div", { className: "cert-item animate-scale-in-delay-3", children: [_jsx("div", { className: "cert-title", children: "Supervised Machine Learning: Regression and Classification" }), _jsx("div", { className: "cert-issuer", children: "DeepLearning.AI" }), _jsx("div", { className: "cert-date", children: "Issued Apr 2024" })] })] })] })] }), _jsxs("section", { id: "work", className: "projects animate-section", ref: projectsRef, children: [_jsx("h2", { className: "section-title animate-text-reveal", children: "PROJECTS" }), _jsxs("div", { className: "featured-projects", children: [_jsxs("div", { className: "project-card large animate-slide-up", children: [_jsx("h3", { children: "Risk Simulator" }), _jsx("p", { className: "project-subtitle", children: "Enterprise-Grade Financial Risk Analytics Platform" }), _jsxs("div", { className: "project-tags", children: [_jsx("span", { className: "project-tag", children: "#QuantitativeFinance" }), _jsx("span", { className: "project-tag", children: "#MachineLearning" })] }), _jsx("p", { className: "project-excerpt", children: "A comprehensive analytics platform designed to transform how financial institutions assess credit risk, optimize portfolios, and simulate market conditions." }), _jsx(Link, { to: "/risk-simulator", className: "project-link-button", children: "View Project" })] }), _jsxs("div", { className: "project-card large animate-slide-up-delay", children: [_jsx("h3", { children: "NaviDhan" }), _jsx("p", { className: "project-subtitle", children: "AI-Powered Financial Guidance for Rural Communities" }), _jsxs("div", { className: "project-tags", children: [_jsx("span", { className: "project-tag", children: "#AI" }), _jsx("span", { className: "project-tag", children: "#FinancialInclusion" })] }), _jsx("p", { className: "project-excerpt", children: "A full-stack AI/ML platform designed to deliver personalized financial literacy, intelligent budgeting, and explainable investment guidance to underserved rural populations." }), _jsx(Link, { to: "/navidhan", className: "project-link-button", children: "View Project" })] })] }), _jsxs("div", { className: "other-projects", children: [_jsxs("div", { className: "project-card animate-scale-in", children: [_jsx("h3", { children: "Comprehensive Backtesting of Advanced Trading Algorithms" }), _jsx("p", { children: "Investigated algorithmic trading strategies for Apple stock using Python and backtesting. Implemented GitHub OAuth for trading data analysis." }), _jsxs("div", { className: "project-skills", children: [_jsx("span", { children: "Python" }), _jsx("span", { children: "SKLearn" }), _jsx("span", { children: "Matplotlib" })] })] }), _jsxs("div", { className: "project-card animate-scale-in-delay-1", children: [_jsx("h3", { children: "Advanced Decision Tree Classification for Meteorological Forecasting" }), _jsx("p", { children: "Built Decision Tree Classifier to forecast weather conditions. Ensured dataset integrity with 1,281 meteorological samples." }), _jsxs("div", { className: "project-skills", children: [_jsx("span", { children: "Python" }), _jsx("span", { children: "Numpy" }), _jsx("span", { children: "Pandas" })] })] }), _jsxs("div", { className: "project-card animate-scale-in-delay-2", children: [_jsx("h3", { children: "Advanced Credit Card Fraud Detection Through ML" }), _jsx("p", { children: "Developed a fraud detection system using Decision Tree, Random Forest, AdaBoost, and XGBoost." }), _jsxs("div", { className: "project-skills", children: [_jsx("span", { children: "Machine Learning" }), _jsx("span", { children: "Data Analysis" }), _jsx("span", { children: "XGBoost" })] })] })] })] })] }));
};
export default Home;
