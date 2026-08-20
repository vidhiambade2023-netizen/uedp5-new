import React from 'react';
import './IconAdd2.css';

export interface IconAdd2Props {
  size?: number;
  color?: string;
}

export const IconAdd2: React.FC<IconAdd2Props> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconadd2" style={{ width: size, height: size, color }} data-figma-layer="Icon Add 2">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconAdd2;
