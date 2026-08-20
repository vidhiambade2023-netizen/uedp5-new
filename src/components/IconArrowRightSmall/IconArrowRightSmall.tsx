import React from 'react';
import './IconArrowRightSmall.css';

export interface IconArrowRightSmallProps {
  size?: number;
  color?: string;
}

export const IconArrowRightSmall: React.FC<IconArrowRightSmallProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconarrowrightsmall" style={{ width: size, height: size, color }} data-figma-layer="Icon Arrow Right Small">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconArrowRightSmall;
