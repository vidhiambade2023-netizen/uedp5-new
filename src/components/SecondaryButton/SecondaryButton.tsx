import React from 'react';
import './SecondaryButton.css';

export interface SecondaryButtonProps {
  label?: string;
  onClick?: () => void;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label = 'Secondary Button', onClick }) => (
  <button className="uedp-secondarybutton" onClick={onClick} data-figma-layer="Secondary Button">
    {label}
  </button>
);
export default SecondaryButton;
