import React from 'react';
import './FloatingButton.css';

export interface FloatingButtonProps {
  onClick?: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => (
  <button className="uedp-floatingbutton" onClick={onClick} data-figma-layer="Floating Button">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
  </button>
);
export default FloatingButton;
