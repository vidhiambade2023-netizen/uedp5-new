import React from 'react';
import './IconCompare.css';

export interface IconCompareProps {
  size?: number;
  color?: string;
}

export const IconCompare: React.FC<IconCompareProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconcompare" style={{ width: size, height: size, color }} data-figma-layer="Icon Compare">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </span>
);
export default IconCompare;
