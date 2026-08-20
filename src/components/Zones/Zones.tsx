import React from 'react';
import './Zones.css';

export interface ZonesProps {
  activeZone?: string;
}

export const Zones: React.FC<ZonesProps> = ({ activeZone = 'Zone A' }) => (
  <div className="uedp-zones" data-figma-layer="Zones">
    {['Zone A', 'Zone B', 'Zone C'].map(z => (
      <div key={z} className="uedp-zones__zone" style={{ borderColor: z === activeZone ? '#3b82f6' : '#1e293b' }}>
        <div style={{ fontSize: 12, color: '#94a3b8' }}>{z}</div>
        <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>{z === activeZone ? 'Active' : 'Standby'}</div>
      </div>
    ))}
  </div>
);
export default Zones;
