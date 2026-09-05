import React from 'react';
import './PrimaryButton.css';

export interface PrimaryButtonProps {
  label?: string;
  showIcon?: boolean;
  state?: 'default' | 'disabled' | 'emerald' | 'darkest';
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label = 'button',
  showIcon = true,
  state = 'default',
  onClick
}) => {
  return (
    <button
      className={`uedp-primarybutton uedp-primarybutton--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      disabled={state === 'disabled'}
      data-figma-layer="primary button"
      data-figma-node-id="30:1827"
    >
      {showIcon && (
        <span className="uedp-primarybutton__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6h15l-1.5 9h-11L6 6z" />
            <path d="M6 6L4 2H1" />
            <circle cx="9.5" cy="19" r="1.5" fill="currentColor" />
            <circle cx="17.5" cy="19" r="1.5" fill="currentColor" />
          </svg>
        </span>
      )}
      <span className="uedp-primarybutton__label">{label}</span>
    </button>
  );
};

export default PrimaryButton;

