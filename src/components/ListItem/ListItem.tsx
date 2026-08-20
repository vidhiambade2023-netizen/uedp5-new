import React from 'react';
import './ListItem.css';

export interface ListItemProps {
  title?: string;
  subtitle?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ title = 'List Item Title', subtitle = 'Subtitle details' }) => (
  <div className="uedp-listitem" data-figma-layer="List Item">
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#f8fafc' }}>{title}</div>
        <div style={{ fontSize: 12, color: '#94a3b8' }}>{subtitle}</div>
      </div>
    </div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
  </div>
);
export default ListItem;
