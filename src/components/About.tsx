import { toolkit } from '../data/toolkit';
import './About.css';

export function About() {
  return (
    <section id="about" className="page-section container" aria-label="About and Approach">
      <div className="section-intro">
        <p className="section-eyebrow">03 / APPROACH</p>
        <h2 className="section-heading">Curiosity across the stack.</h2>
        <p className="section-support-text">
          I'm an ECE undergraduate interested in how hardware, software, and security intersect. I enjoy understanding systems from the inside out — building things, investigating how they behave, and learning from the places where they fail.
        </p>
      </div>

      <div className="domains-grid">
        {/* Hardware / Signals Domain */}
        <div className="domain-card">
          <div className="domain-visual" aria-hidden="true">
            <svg viewBox="0 0 200 100" className="domain-svg" preserveAspectRatio="xMidYMid meet">
              <path d="M 20 50 L 50 50 L 70 20 L 90 80 L 110 50 L 180 50" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <circle cx="20" cy="50" r="3" fill="var(--accent)" />
              <circle cx="180" cy="50" r="3" fill="var(--accent)" />
              {/* Circuit traces */}
              <path d="M 20 30 L 40 30 L 50 20 L 70 20" fill="none" stroke="var(--border-color)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d="M 20 70 L 40 70 L 50 80 L 90 80" fill="none" stroke="var(--border-color)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <h3 className="domain-title">Hardware / Signals</h3>
          <ul className="domain-topics">
            <li>Digital electronics</li>
            <li>Embedded systems</li>
            <li>Sensors and IMU data</li>
            <li>Signal processing</li>
            <li>Circuit and system design</li>
          </ul>
        </div>

        {/* Software / Security Domain */}
        <div className="domain-card">
          <div className="domain-visual" aria-hidden="true">
            <svg viewBox="0 0 200 100" className="domain-svg" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r="6" fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="100" cy="20" r="4" fill="var(--text-secondary)" />
              <circle cx="150" cy="50" r="4" fill="var(--text-secondary)" />
              <circle cx="100" cy="80" r="4" fill="var(--text-secondary)" />
              
              <path d="M 56 46 L 96 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
              <path d="M 56 50 L 146 50" fill="none" stroke="var(--accent)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d="M 56 54 L 96 76" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
              
              <rect x="85" y="45" width="10" height="10" fill="var(--bg-color)" stroke="var(--accent)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <rect x="115" y="45" width="10" height="10" fill="var(--bg-color)" stroke="var(--accent)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <h3 className="domain-title">Software / Security</h3>
          <ul className="domain-topics">
            <li>Cybersecurity</li>
            <li>Network analysis</li>
            <li>Digital forensics</li>
            <li>Python and scripting</li>
            <li>Linux and systems exploration</li>
          </ul>
        </div>
      </div>

      <div className="toolkit-section page-section" style={{ paddingBottom: 0, border: 'none', marginTop: '4rem' }}>
        <div className="section-intro" style={{ marginBottom: '4rem' }}>
          <p className="section-eyebrow">04 / TOOLKIT</p>
          <h2 className="section-heading">Instruments of creation.</h2>
          <p className="section-support-text">
            The languages, tools, and environments I use to build and break systems.
          </p>
        </div>
        
        <div className="toolkit-grid">
          {toolkit.map(group => (
            <div key={group.category} className="toolkit-group">
              <h4 className="toolkit-category">{group.category}</h4>
              <ul className="toolkit-list">
                {group.items.map(item => (
                  <li key={item} className="toolkit-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
