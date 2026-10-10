import { useState, useEffect } from 'react';
import './Hero.css';
import { SignalVisual } from './SignalVisual';

const SENTENCES = [
  "A sophomore pursuing B.Tech in Electronics and Communication Engineering at IIT Guwahati.",
  "From electronics and embedded systems to cybersecurity, I enjoy exploring how things work at every layer.",
  "I learn by building, experimenting, and breaking things apart to understand what makes them tick."
];

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    
    let timeout: ReturnType<typeof setTimeout>;
    const currentSentence = SENTENCES[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentSentence.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentSentence.slice(0, displayText.length + 1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentSentence.slice(0, displayText.length - 1));
        }, 20);
      } else {
        setCurrentIndex((prev) => (prev + 1) % SENTENCES.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex, reducedMotion]);

  return (
    <section className="hero-section container" id="top">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-headline">
            Hi, I'm Navneet Naman.
          </h1>
          
          <div className="hero-support-text hero-typewriter-container">
            {reducedMotion ? (
              <p>{SENTENCES.join(' ')}</p>
            ) : (
              <p>
                {displayText}
                <span className="typewriter-cursor" aria-hidden="true">|</span>
              </p>
            )}
          </div>
          
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              Explore My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="hero-visual-container">
          <SignalVisual />
        </div>
      </div>
    </section>
  );
}
