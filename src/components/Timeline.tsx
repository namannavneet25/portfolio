import { useState } from 'react';
import { timelineData } from '../data/timeline';
import './Timeline.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Timeline() {
  const [visibleCount, setVisibleCount] = useState(4);
  
  const visibleTimelineData = timelineData.slice(0, visibleCount);
  const hasMore = visibleCount < timelineData.length;

  const handleReveal = () => {
    if (hasMore) {
      setVisibleCount(prev => prev + 4);
    } else {
      setVisibleCount(4);
      const timelineSection = document.getElementById('timeline');
      if (timelineSection) {
        timelineSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="timeline" className="page-section container" aria-label="Timeline">
      <div className="section-intro">
        <h2 className="section-heading">The journey so far.</h2>
        <p className="section-support-text">
          Academic milestones, engineering competitions, and security challenges.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" aria-hidden="true"></div>
        
        <div className="timeline-items">
          {visibleTimelineData.map((item) => (
            <div key={item.id} className={`timeline-item animate-reveal ${item.isHighlight ? 'timeline-item-highlight' : ''}`}>
              <div className="timeline-node" aria-hidden="true">
                <div className="timeline-node-inner"></div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-year">{item.year}</span>
                </div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {timelineData.length > 4 && (
        <div className="projects-reveal-container">
          <button 
            className="btn btn-secondary reveal-btn" 
            onClick={handleReveal}
            aria-expanded={!hasMore}
          >
            {hasMore ? (
              <>
                VIEW MORE MILESTONES
                <ChevronDown size={16} />
              </>
            ) : (
              <>
                SHOW LESS
                <ChevronUp size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
