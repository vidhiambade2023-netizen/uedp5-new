import React from 'react';
import './Map.css';

export interface MapProps {
  zoomLevel?: string;
}

export const Map: React.FC<MapProps> = ({ zoomLevel = '100%' }) => (
  <div className="uedp-map" data-figma-layer="Map">
    <div className="uedp-map__grid" />
    <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <span style={{ fontSize: 12, color: '#f8fafc', fontWeight: 600, marginTop: 4, background: '#0f172a', padding: '2px 8px', borderRadius: 4 }}>Central Zone ({zoomLevel})</span>
    </div>
  </div>
);
export default Map;
