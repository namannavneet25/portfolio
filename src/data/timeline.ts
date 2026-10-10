export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    id: 'bronco-26',
    year: '2026',
    title: 'Worldwide Top 25 — BroncoCTF\'26',
    description: 'Part of Team InfosecIITG, which secured 24th place worldwide in BroncoCTF\'26.',
    isHighlight: true
  },
  {
    id: 'kriti-26',
    year: '2026',
    title: 'Gold Medal — Kriti\'26',
    description: 'Part of the team that secured 1st place in the Velora Route Optimization challenge, focusing on algorithmic optimization and software development, at Kriti\'26, IIT Guwahati.',
    isHighlight: true
  },
  {
    id: 'inter-iit-25',
    year: '2025',
    title: 'Bronze Medal — Inter IIT Tech Meet 14.0',
    description: 'Part of the team that secured 3rd place among all participating IITs for the QTRINO Labs cybersecurity problem statement at Inter IIT Tech Meet 14.0.',
    isHighlight: true
  },
  {
    id: 'joined-iitg',
    year: '2025',
    title: 'Joined IIT Guwahati',
    description: 'Joined the B.Tech programme in Electronics and Communication Engineering at IIT Guwahati.'
  },
  {
    id: 'jee-25',
    year: '2025',
    title: 'JEE 2025 — 99 Percentile',
    description: 'Secured the 99th percentile in JEE 2025, placing among the top 1% of approximately 1.4 million candidates.'
  },
  {
    id: 'class-xii',
    year: '2025',
    title: 'Class XII — CBSE',
    description: 'Scored 91.4% in the CBSE Class XII examinations.'
  },
  {
    id: 'class-x',
    year: '2023',
    title: 'Class X — ICSE',
    description: 'Scored 94.2% in the ICSE Class X examinations.'
  }
];
