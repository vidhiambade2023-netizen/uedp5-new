import React from 'react';
import './PrimaryButton.css';

export interface PrimaryButtonProps {
  label?: string;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label = 'Primary Button', onClick }) => (
  <button className="uedp-primarybutton" onClick={onClick} data-figma-layer="Primary Button">
    {label}
  </button>
);
export default PrimaryButton;
