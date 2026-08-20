import React from 'react';
import './TopBar.css';

export interface TopBarProps {
  title?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ title = 'UEDP Dashboard' }) => (
  <header className="uedp-topbar" data-figma-layer="Top Bar">
    <div className="uedp-topbar__brand">
      <div style={{ width: 28, height: 28, borderRadius: 6, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }} />
      <span>{title}</span>
    </div>
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <span style={{ fontSize: 13, color: '#94a3b8' }}>Analytics</span>
      <span style={{ fontSize: 13, color: '#94a3b8' }}>Projects</span>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#334155', border: '1px solid #475569' }} />
    </div>
  </header>
);
export default TopBar;
