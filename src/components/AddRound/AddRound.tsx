import React from 'react';
import './AddRound.css';

export interface AddRoundProps {
  size?: number;
  color?: string;
}

export const AddRound: React.FC<AddRoundProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-addround" style={{ width: size, height: size, color }} data-figma-layer="Add Round">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default AddRound;
