import React from 'react';
import './IconAdd.css';

export interface IconAddProps {
  size?: number;
  color?: string;
}

export const IconAdd: React.FC<IconAddProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconadd" style={{ width: size, height: size, color }} data-figma-layer="Icon Add">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconAdd;
