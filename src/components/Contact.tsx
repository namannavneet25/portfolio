import { siteConfig } from '../data/config';
import './Contact.css';
import { FileText, Mail, Link as LinkIcon } from 'lucide-react';

export function Contact() {
  const { github, linkedin, resume } = siteConfig;
  
  // Honest placeholder if email is not configured
  
  return (
    <section id="contact" className="page-section container" aria-label="Contact">
      <div className="contact-panel">
        <div className="section-intro">
          <h2 className="section-heading">Have something interesting in mind?</h2>
          <p className="section-support-text">
            I'm always interested in exploring challenging problems across electronics, systems, and security.
          </p>
        </div>
        
        <form 
          className="contact-form" 
          action="mailto:namannavneet25@gmail.com" 
          method="POST" 
          encType="text/plain"
        >
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" name="email" required placeholder="your.email@domain.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" name="message" required rows={5} placeholder="What's on your mind?"></textarea>
          </div>
          
          <div className="form-footer">
            <div className="contact-secondary-links">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visit GitHub profile">
                  <LinkIcon size={16} />
                  <span>GitHub</span>
                </a>
              )}
              
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visit LinkedIn profile">
                  <LinkIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              )}
              
              {resume && (
                <a href={resume} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View Resume">
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              <Mail size={16} className="contact-icon" />
              SEND TRANSMISSION
            </button>
          </div>
        </form>
        

      </div>
    </section>
  );
}
