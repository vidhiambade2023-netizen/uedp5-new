import React from 'react';
import './BasketAlt3.css';

export interface BasketAlt3Props {
  size?: number;
  color?: string;
}

export const BasketAlt3: React.FC<BasketAlt3Props> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-basketalt3" style={{ width: size, height: size, color }} data-figma-layer="Basket Alt 3">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </span>
);
export default BasketAlt3;
