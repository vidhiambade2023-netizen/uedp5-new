import React from 'react';
import './Container4.css';

export interface Container4Props {
  title?: string;
  text?: string;
}

export const Container4: React.FC<Container4Props> = ({
  title = 'Container 4',
  text = 'High fidelity UI component synchronized with Figma design system tokens.'
}) => (
  <div className="uedp-container4" data-figma-layer="Container 4">
    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#38bdf8', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>
    </div>
    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#f8fafc' }}>{title}</h4>
    <p style={{ margin: '8px 0 16px', fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{text}</p>
  </div>
);
export default Container4;
