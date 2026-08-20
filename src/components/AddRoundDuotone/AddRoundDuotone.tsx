import React from 'react';
import './AddRoundDuotone.css';

export interface AddRoundDuotoneProps {
  size?: number;
  color?: string;
}

export const AddRoundDuotone: React.FC<AddRoundDuotoneProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-addroundduotone" style={{ width: size, height: size, color }} data-figma-layer="Add Round Duotone">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default AddRoundDuotone;
