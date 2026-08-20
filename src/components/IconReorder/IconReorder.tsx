import React from 'react';
import './IconReorder.css';

export interface IconReorderProps {
  size?: number;
  color?: string;
}

export const IconReorder: React.FC<IconReorderProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconreorder" style={{ width: size, height: size, color }} data-figma-layer="Icon Reorder">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  </span>
);
export default IconReorder;
