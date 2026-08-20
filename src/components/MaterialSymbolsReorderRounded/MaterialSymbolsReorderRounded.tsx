import React from 'react';
import './MaterialSymbolsReorderRounded.css';

export interface MaterialSymbolsReorderRoundedProps {
  size?: number;
  color?: string;
}

export const MaterialSymbolsReorderRounded: React.FC<MaterialSymbolsReorderRoundedProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-materialsymbolsreorderrounded" style={{ width: size, height: size, color }} data-figma-layer="Material Symbols Reorder Rounded">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  </span>
);
export default MaterialSymbolsReorderRounded;
