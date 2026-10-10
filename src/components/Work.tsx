import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';
import './Work.css';
import { ExternalLink, Code, ChevronDown, ChevronUp } from 'lucide-react';

function ProjectCard({ project, isFeatured }: { project: Project; isFeatured: boolean }) {
  return (
    <article className={`project-card ${isFeatured ? 'featured' : 'secondary'} animate-reveal`}>
      <div className="project-content">
        <div className="project-header">
          <span className="project-id">{project.id.toUpperCase()}</span>
          <span className="project-category">{project.category}</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        
        <p className="project-description">
          {project.description}
        </p>
        
        <ul className="project-tech" aria-label="Technologies used">
          {project.technologies.map(tech => (
            <li key={tech} className="tech-tag">{tech}</li>
          ))}
        </ul>
        
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`GitHub repository for ${project.title}`}>
              <Code size={16} />
              <span>Source</span>
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Live demo for ${project.title}`}>
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
      
      <div className="project-visual">
        <ProjectVisual type={project.visualType} />
      </div>
    </article>
  );
}

export function Work() {
  const [visibleCount, setVisibleCount] = useState(3);
  
  const featuredProject = projects.find(p => p.featured);
  const allSecondaryProjects = projects.filter(p => !p.featured);
  
  // Since 1 project is featured, the number of secondary projects to show is visibleCount - 1
  const visibleSecondaryProjects = allSecondaryProjects.slice(0, visibleCount - 1);
  const hasMore = visibleCount < projects.length;

  const handleReveal = () => {
    if (hasMore) {
      setVisibleCount(prev => prev + 2);
    } else {
      // Return back to the initial 3 projects
      setVisibleCount(3);
      // Smooth scroll back to the start of the section if they click show less
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="work" className="page-section container" aria-label="Work">
      <div className="section-intro">
        <h2 className="section-heading">
          Things I've built.<br />
          <span className="section-heading-sub">Systems I've explored.</span>
        </h2>
        <p className="section-support-text">
          A collection of experiments, engineering projects, and security investigations.
        </p>
      </div>

      <div className="projects-grid">
        {featuredProject && (
          <ProjectCard project={featuredProject} isFeatured={true} />
        )}
        
        <div className="secondary-projects">
          {visibleSecondaryProjects.map(project => (
            <ProjectCard key={project.id} project={project} isFeatured={false} />
          ))}
        </div>
      </div>

      {projects.length > 3 && (
        <div className="projects-reveal-container">
          <button 
            className="btn btn-secondary reveal-btn" 
            onClick={handleReveal}
            aria-expanded={!hasMore}
          >
            {hasMore ? (
              <>
                VIEW MORE PROJECTS
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
