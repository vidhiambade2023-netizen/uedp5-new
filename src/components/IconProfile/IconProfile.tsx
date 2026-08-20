import React from 'react';
import './IconProfile.css';

export interface IconProfileProps {
  size?: number;
  color?: string;
}

export const IconProfile: React.FC<IconProfileProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconprofile" style={{ width: size, height: size, color }} data-figma-layer="Icon Profile">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconProfile;
