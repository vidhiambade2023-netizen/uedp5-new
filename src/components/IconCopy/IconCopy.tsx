import React from 'react';
import './IconCopy.css';

export interface IconCopyProps {
  size?: number;
  color?: string;
}

export const IconCopy: React.FC<IconCopyProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconcopy" style={{ width: size, height: size, color }} data-figma-layer="Icon Copy">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconCopy;
