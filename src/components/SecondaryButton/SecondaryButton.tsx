import React from 'react';
import './SecondaryButton.css';

export interface SecondaryButtonProps {
  label?: string;
  showIcon?: boolean;
  state?: 'default' | 'disabled' | 'ice' | 'cream';
  onClick?: () => void;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label = 'button',
  showIcon = true,
  state = 'default',
  onClick
}) => {
  return (
    <button
      className={`uedp-secondarybutton uedp-secondarybutton--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      disabled={state === 'disabled'}
      data-figma-layer="secondary button"
      data-figma-node-id="30:1836"
    >
      {showIcon && (
        <span className="uedp-secondarybutton__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        </span>
      )}
      <span className="uedp-secondarybutton__label">{label}</span>
    </button>
  );
};

export default SecondaryButton;

