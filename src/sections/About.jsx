import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaUniversity } from 'react-icons/fa';
import profileImg from '../assets/images/profile.jpg';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          {/* Left Column - Photo & Social */}
          <div className="about-left">
            <div className="photo-placeholder">
              <img 
                src={profileImg} 
                alt="Mriganka Saikia" 
                className="profile-photo"
              />
            </div>
            
            <div className="social-links">
              <a href="https://github.com/mriganka93" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub size={26} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/mriganka1993" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={26} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:mriganka.saikia1993@posteo.com" className="social-link">
                <FaEnvelope size={26} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content">
            <p>
              I am a Data Engineer with strong expertise in building robust data solutions,
              analytics systems, and backend processes. My work primarily revolves around
              writing complex SQL queries, developing payroll and financial reports,
              creating Power BI dashboards, and working with Azure Databricks for large-scale data processing.
            </p>
            <p>
              I previously worked at EdgeVerve (Infosys) on the Finacle core banking product,
              where I focused on backend development, writing SQL code for banking's WMS module,
              managing relational databases, and handling data-related operations and some frontend developments.
            </p>

            <div className="divider"></div>

            <h3 className="experience-heading">Professional Experience</h3>
            <div className="experience-cards">
              <div className="experience-card">
                <div className="exp-icon">💼</div>
                <div className="exp-details">
                  <h4>Data Engineer</h4>
                  <p className="company">GMS</p>
                  <p className="duration">2025 — Present</p>
                  <p className="exp-desc">Building scalable data pipelines, analytics systems, and financial reporting solutions using SQL, Azure Databricks, and Power BI.</p>
                </div>
              </div>

              <div className="experience-card">
                <div className="exp-icon">💼</div>
                <div className="exp-details">
                  <h4>Associate Product Developer</h4>
                  <p className="company">EdgeVerve Systems (Infosys)</p>
                  <p className="duration">2022 — 2023</p>
                  <p className="exp-desc">Worked on Finacle Core Banking product, developed backend systems and complex SQL modules for banking operations.</p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <h3 className="experience-heading">Mentorship & Teaching</h3>
            <div className="experience-cards">
              <div className="experience-card">
                  <div className="exp-icon">
                  <FaUniversity size={28} />
                </div>
                <div className="exp-details">
                  <h4>Section Leader Mentor</h4>
                  <p className="company">Stanford University - Code in Place (CS106A)</p>
                  <p className="duration">2025</p>
                  <p className="exp-desc">Teaching first half of Stanford's CS106A, a 6-week course on Programming Methodology</p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <h3 className="experience-heading">Academic Background</h3>
            <div className="experience-cards">
              <div className="experience-card">
                <div className="exp-icon">
                  <FaUniversity size={28} />
                </div>
                <div className="exp-details">
                  <h4>B.Tech in Electronics & Communication Engineering</h4>
                  <p className="company">North Eastern Hill University</p>
                  <p className="duration">2015 — 2020</p>
                  <p className="exp-desc">Completed my undergraduate degree with a strong foundation in Electronics, Communication Systems, and Programming.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;