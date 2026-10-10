import { useState, useEffect, useCallback } from 'react';
import './SignalVisual.css';

interface NodeDef {
  id: string;
  cx: number;
  cy: number;
  r: number;
  labelX: number;
  labelY: number;
}

interface EdgeDef {
  id: string;
  source: string;
  target: string;
  d: string;
}

interface Packet {
  id: number;
  path: string;
  duration: number;
}

const NODES: NodeDef[] = [
  { id: 'SRC_01', cx: 150, cy: 200, r: 10, labelX: 130, labelY: 175 },
  { id: 'RTR_A', cx: 350, cy: 120, r: 8, labelX: 360, labelY: 105 },
  { id: 'RTR_B', cx: 300, cy: 320, r: 8, labelX: 310, labelY: 345 },
  { id: 'FW_01', cx: 550, cy: 80, r: 7, labelX: 560, labelY: 70 },
  { id: 'RTR_C', cx: 500, cy: 240, r: 10, labelX: 500, labelY: 270 },
  { id: 'DST_01', cx: 700, cy: 180, r: 8, labelX: 715, labelY: 175 },
  { id: 'DST_02', cx: 650, cy: 300, r: 7, labelX: 660, labelY: 325 }
];

const EDGES: EdgeDef[] = [
  { id: 'edge1', source: 'SRC_01', target: 'RTR_A', d: 'M 150 200 L 350 120' },
  { id: 'edge2', source: 'SRC_01', target: 'RTR_B', d: 'M 150 200 L 300 320' },
  { id: 'edge3', source: 'RTR_A', target: 'FW_01', d: 'M 350 120 L 550 80' },
  { id: 'edge4', source: 'RTR_A', target: 'RTR_C', d: 'M 350 120 L 500 240' },
  { id: 'edge5', source: 'RTR_B', target: 'RTR_C', d: 'M 300 320 L 500 240' },
  { id: 'edge6', source: 'RTR_C', target: 'DST_01', d: 'M 500 240 L 700 180' },
  { id: 'edge7', source: 'FW_01', target: 'DST_01', d: 'M 550 80 L 700 180' },
  { id: 'edge8', source: 'DST_01', target: 'DST_02', d: 'M 700 180 L 650 300' },
  { id: 'edge9', source: 'RTR_C', target: 'DST_02', d: 'M 500 240 L 650 300' }
];

// Pre-defined multi-hop routes
const ROUTES = [
  'M 150 200 L 350 120 L 550 80 L 700 180',
  'M 150 200 L 300 320 L 500 240 L 650 300',
  'M 700 180 L 500 240 L 350 120 L 150 200',
  'M 300 320 L 500 240 L 700 180 L 650 300'
];

let packetIdCounter = 0;

export function SignalVisual() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [packets, setPackets] = useState<Packet[]>([]);

  // Periodically spawn background packets
  useEffect(() => {
    const interval = setInterval(() => {
      spawnPacket(ROUTES[Math.floor(Math.random() * ROUTES.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const spawnPacket = useCallback((path: string) => {
    const id = packetIdCounter++;
    const duration = 2 + Math.random() * 2; // 2s to 4s
    setPackets(prev => [...prev, { id, path, duration }]);
    
    // Clean up packet after it finishes
    setTimeout(() => {
      setPackets(prev => prev.filter(p => p.id !== id));
    }, duration * 1000);
  }, []);

  const handleNodeClick = (nodeId: string) => {
    // Find all edges connected to this node
    const connectedEdges = EDGES.filter(e => e.source === nodeId || e.target === nodeId);
    if (connectedEdges.length === 0) return;
    
    // Spawn 2 packets down random connected edges
    for(let i=0; i<2; i++) {
      const randomEdge = connectedEdges[Math.floor(Math.random() * connectedEdges.length)];
      
      // Orient the path correctly based on click origin
      let path = randomEdge.d;
      if (randomEdge.target === nodeId) {
        // Reverse path naive string split for line (M x y L x y)
        const coords = path.match(/\d+/g);
        if (coords && coords.length === 4) {
          path = `M ${coords[2]} ${coords[3]} L ${coords[0]} ${coords[1]}`;
        }
      }
      
      spawnPacket(path);
    }
  };

  return (
    <div className="signal-wrapper" aria-hidden="true">
      <svg
        className="signal-svg"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id="svg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border-color)" strokeWidth="1" strokeOpacity="0.2" />
          </pattern>
        </defs>
        
        <rect width="800" height="400" fill="url(#svg-grid)" />

        {/* Edges */}
        <g fill="none">
          {EDGES.map(edge => {
            const isHighlighted = hoveredNode === edge.source || hoveredNode === edge.target;
            return (
              <path 
                key={edge.id}
                d={edge.d}
                stroke={isHighlighted ? "var(--accent)" : "var(--text-secondary)"}
                strokeWidth={isHighlighted ? "3" : "2"}
                strokeOpacity={isHighlighted ? "0.6" : "0.2"}
                style={{ transition: 'all 0.3s ease' }}
              />
            );
          })}
        </g>

        {/* Active Packets */}
        <g fill="var(--accent)">
          {packets.map(packet => (
            <circle 
              key={packet.id} 
              r="5"
              className="signal-packet"
              style={{
                offsetPath: `path('${packet.path}')`,
                animationDuration: `${packet.duration}s`
              }}
            />
          ))}
        </g>

        {/* Nodes */}
        <g strokeWidth="3">
          {NODES.map(node => {
            const isHovered = hoveredNode === node.id;
            return (
              <circle 
                key={node.id}
                cx={node.cx} 
                cy={node.cy} 
                r={isHovered ? node.r + 3 : node.r} 
                fill={isHovered ? "var(--accent)" : "var(--bg-color)"}
                stroke="var(--accent)"
                style={{ transition: 'all 0.2s ease' }}
                className="signal-node"
                role="button"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => handleNodeClick(node.id)}
              />
            );
          })}
        </g>

        {/* Node Labels */}
        <g className="signal-label" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="16px" letterSpacing="0.1em">
          {NODES.map(node => {
            const isHovered = hoveredNode === node.id;
            return (
              <text 
                key={`${node.id}-label`}
                x={node.labelX} 
                y={node.labelY}
                fill={isHovered ? "var(--text-primary)" : "var(--text-secondary)"}
                style={{ transition: 'all 0.2s ease', pointerEvents: 'none' }}
              >
                {node.id}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
