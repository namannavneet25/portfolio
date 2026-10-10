import type { VisualType } from '../data/projects';
import './ProjectVisual.css';

interface ProjectVisualProps {
  type: VisualType;
}

export function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === 'proofs') {
    return (
      <svg className="project-svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {/* Zero-knowledge proof concept */}
        <circle cx="200" cy="150" r="60" fill="none" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        <rect x="160" y="110" width="80" height="80" rx="8" fill="var(--bg-color)" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        
        {/* Verification check or lock */}
        <path d="M 185 155 L 195 165 L 215 135" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        
        {/* Connecting nodes */}
        <circle cx="100" cy="150" r="10" fill="var(--bg-color)" stroke="var(--text-secondary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <circle cx="300" cy="150" r="10" fill="var(--bg-color)" stroke="var(--text-secondary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        
        <path d="M 115 150 L 150 150" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        <path d="M 250 150 L 285 150" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        
        <text x="85" y="180" className="visual-label">PROVER</text>
        <text x="270" y="180" className="visual-label">VERIFIER</text>
      </svg>
    );
  }

  if (type === 'tls') {
    return (
      <svg className="project-svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {/* TLS Handshake / Security signals */}
        <path d="M 50 250 L 350 250 M 50 250 L 50 50" stroke="var(--border-color)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M 50 200 L 350 200 M 50 150 L 350 150 M 50 100 L 350 100" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" vectorEffect="non-scaling-stroke" />
        
        <text x="340" y="265" className="visual-label">TIME</text>
        <text x="20" y="60" className="visual-label">SEC</text>

        {/* Handshake plot */}
        <path d="M 50 230 L 100 150 L 150 180 L 220 80 L 280 120 L 330 60" fill="none" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        
        <circle cx="220" cy="80" r="4" fill="var(--accent)" />
        <text x="200" y="65" className="visual-label">PQ_KEY</text>
      </svg>
    );
  }

  if (type === 'routing') {
    return (
      <svg className="project-svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {/* Routing graph diagram */}
        <circle cx="100" cy="150" r="15" fill="var(--bg-color)" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <circle cx="200" cy="80" r="15" fill="var(--bg-color)" stroke="var(--text-secondary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <circle cx="200" cy="220" r="15" fill="var(--bg-color)" stroke="var(--text-secondary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <circle cx="300" cy="150" r="15" fill="var(--bg-color)" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        
        <text x="85" y="185" className="visual-label">DEPOT</text>
        <text x="285" y="185" className="visual-label">DEST</text>
        
        {/* Routing edges */}
        <path d="M 112 142 L 188 88" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        <path d="M 112 158 L 188 212" fill="none" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M 212 88 L 288 142" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        <path d="M 212 212 L 288 158" fill="none" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M 200 95 L 200 205" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" vectorEffect="non-scaling-stroke" />
        
        {/* Vehicle indicator */}
        <rect x="235" y="175" width="12" height="12" rx="2" fill="var(--accent)" transform="rotate(-30, 241, 181)" />
      </svg>
    );
  }

  if (type === 'embedded') {
    return (
      <svg className="project-svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {/* Hardware/chip illustration */}
        <rect x="140" y="90" width="120" height="120" rx="4" fill="var(--bg-color)" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <rect x="150" y="100" width="100" height="100" rx="2" fill="none" stroke="var(--border-color)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        
        <text x="175" y="155" className="visual-label">RISC-V</text>
        
        {/* Chip pins */}
        <path d="M 120 110 L 140 110 M 120 130 L 140 130 M 120 150 L 140 150 M 120 170 L 140 170 M 120 190 L 140 190" stroke="var(--text-secondary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M 260 110 L 280 110 M 260 130 L 280 130 M 260 150 L 280 150 M 260 170 L 280 170 M 260 190 L 280 190" stroke="var(--text-secondary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M 160 70 L 160 90 M 180 70 L 180 90 M 200 70 L 200 90 M 220 70 L 220 90 M 240 70 L 240 90" stroke="var(--text-secondary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M 160 210 L 160 230 M 180 210 L 180 230 M 200 210 L 200 230 M 220 210 L 220 230 M 240 210 L 240 230" stroke="var(--text-secondary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }

  return null;
}
