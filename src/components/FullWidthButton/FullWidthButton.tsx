import React from 'react';
import './FullWidthButton.css';

export interface FullWidthButtonProps {
  label?: string;
  onClick?: () => void;
}

export const FullWidthButton: React.FC<FullWidthButtonProps> = ({ label = 'Full Width Button', onClick }) => (
  <button className="uedp-fullwidthbutton" onClick={onClick} data-figma-layer="Full Width Button">
    {label}
  </button>
);
export default FullWidthButton;
