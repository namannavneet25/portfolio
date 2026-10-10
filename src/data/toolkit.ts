export interface ToolkitCategory {
  category: string;
  items: string[];
}

export const toolkit: ToolkitCategory[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'C/C++', 'Bash'],
  },
  {
    category: 'Systems and Networking',
    items: ['Linux', 'Zeek', 'Suricata', 'Wireshark', 'PCAP'],
  },
  {
    category: 'Electronics and Signals',
    items: ['IMU', 'Sensor Fusion', 'DSP', 'Circuit Design'],
  },
  {
    category: 'Development Tools',
    items: ['Git', 'Vite', 'React'],
  }
];
