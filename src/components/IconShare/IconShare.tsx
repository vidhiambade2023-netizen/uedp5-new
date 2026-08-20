import React from 'react';
import './IconShare.css';

export interface IconShareProps {
  size?: number;
  color?: string;
}

export const IconShare: React.FC<IconShareProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconshare" style={{ width: size, height: size, color }} data-figma-layer="Icon Share">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconShare;
