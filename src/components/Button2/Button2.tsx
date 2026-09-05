import React from 'react';
import './Button2.css';

export interface Button2Props {
  size?: 'large' | 'small';
  state?: 'default' | 'disabled' | 'hover' | 'active';
  onClick?: () => void;
}

export const Button2: React.FC<Button2Props> = ({
  size = 'large',
  state = 'default',
  onClick
}) => {
  const iconSize = size === 'large' ? 28 : 20;
  return (
    <button
      className={`uedp-button2 uedp-button2--${size} uedp-button2--${state}`}
      disabled={state === 'disabled'}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="button-2"
      data-figma-node-id="29:994"
    >
      <svg
        width={iconSize}
        height={iconSize}
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
    </button>
  );
};

export default Button2;
