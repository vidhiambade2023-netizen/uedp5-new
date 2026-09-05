import React from 'react';
import './FullWidthButton.css';

export interface FullWidthButtonProps {
  label?: string;
  state?: 'default' | 'disabled' | 'hover' | 'active';
  hasArrow?: boolean;
  onClick?: () => void;
}

export const FullWidthButton: React.FC<FullWidthButtonProps> = ({
  label = 'Button',
  state = 'default',
  hasArrow = true,
  onClick
}) => {
  return (
    <button
      className={`uedp-fullwidthbutton uedp-fullwidthbutton--${state}`}
      disabled={state === 'disabled'}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="Full Width Button"
      data-figma-node-id="23:668"
    >
      <span className="uedp-fullwidthbutton__label">{label}</span>
      {hasArrow && (
        <span className="uedp-fullwidthbutton__arrow">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </button>
  );
};

export default FullWidthButton;
