import React from 'react';
import './IconArrowRightBig.css';

export interface IconArrowRightBigProps {
  size?: number;
  color?: string;
}

export const IconArrowRightBig: React.FC<IconArrowRightBigProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconarrowrightbig" style={{ width: size, height: size, color }} data-figma-layer="Icon Arrow Right Big">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconArrowRightBig;
