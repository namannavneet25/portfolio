export type VisualType = 'proofs' | 'routing' | 'tls' | 'embedded';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  visualType: VisualType;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'quantum-sentry',
    title: 'QuantumSentry',
    category: 'COLLABORATIVE PROJECT',
    description: 'A post-quantum cryptography readiness scanner that analyzes TLS connections, evaluates cryptographic configurations, and generates Cryptographic Bills of Materials (CBOMs). Co-developed system featuring bulk scanning and remediation trails.',
    technologies: ['Go', 'TLS', 'Post-Quantum Cryptography', 'CBOM'],
    visualType: 'tls',
    githubUrl: 'https://github.com/namannavneet25/QuantumSentry',
    featured: true,
  },
  {
    id: 'kriti-optimization',
    title: 'KRITI\'26 — Route Optimization',
    category: 'BACKEND ENGINEERING · TEAM PROJECT',
    description: 'A vehicle-routing and employee-transport optimization backend. Contributed heavily to the C++ backend orchestrating CSV data ingestion, OSRM distance matrices, and concurrent optimization solvers. (Gold Medal, Kriti\'26)',
    technologies: ['C++', 'Crow', 'Backend Systems', 'Optimization'],
    visualType: 'routing',
    githubUrl: 'https://github.com/namannavneet25/KRITI-Optimization',
    featured: false,
  },
  {
    id: 'qtrino',
    title: 'QTrino — Secure Embedded Communications',
    category: 'RESEARCH & TESTING · INTER IIT TEAM',
    description: 'An embedded secure-communication research project exploring DTLS 1.3 and post-quantum cryptography (ML-KEM-512) on bare-metal RISC-V systems. Contributed to research, evaluation, and hardware simulation testing. (Bronze Medal, Inter IIT 14.0)',
    technologies: ['DTLS 1.3', 'Post-Quantum', 'RISC-V', 'LiteX'],
    visualType: 'embedded',
    githubUrl: 'https://github.com/namannavneet25/QTrino',
    featured: false,
  },
  {
    id: 'prooflease',
    title: 'ProofLease',
    category: 'INDEPENDENT PROJECT',
    description: 'A privacy-preserving rental eligibility system that lets applicants prove they meet financial requirements without exposing their underlying transaction history. Features Noir zero-knowledge proofs, browser-side generation, and Solidity verification on Sepolia.',
    technologies: ['Noir', 'Solidity', 'Ethereum', 'Zero-Knowledge Proofs'],
    visualType: 'proofs',
    githubUrl: 'https://github.com/namannavneet25/ProofLease',
    featured: false,
  }
];
