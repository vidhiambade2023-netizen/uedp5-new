import React from 'react';
import './Button2.css';

export interface Button2Props {
  label?: string;
  onClick?: () => void;
}

export const Button2: React.FC<Button2Props> = ({ label = 'Button 2', onClick }) => (
  <button className="uedp-button2" onClick={onClick} data-figma-layer="Button 2">
    {label}
  </button>
);
export default Button2;
