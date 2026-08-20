import React from 'react';
import './Ellipse157.css';

export interface Ellipse157Props {
  size?: number;
  color?: string;
}

export const Ellipse157: React.FC<Ellipse157Props> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-ellipse157" style={{ width: size, height: size, color }} data-figma-layer="Ellipse 157">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default Ellipse157;
