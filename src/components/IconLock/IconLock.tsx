import React from 'react';
import './IconLock.css';

export interface IconLockProps {
  size?: number;
  color?: string;
}

export const IconLock: React.FC<IconLockProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconlock" style={{ width: size, height: size, color }} data-figma-layer="Icon Lock">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconLock;
