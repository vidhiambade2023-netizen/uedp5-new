import React from 'react';
import './IconAdd5.css';

export interface IconAdd5Props {
  size?: number;
  color?: string;
}

export const IconAdd5: React.FC<IconAdd5Props> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconadd5" style={{ width: size, height: size, color }} data-figma-layer="Icon Add 5">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconAdd5;
