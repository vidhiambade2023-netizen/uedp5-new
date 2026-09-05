import React from 'react';
import './QuickActionCards.css';

export interface QuickActionCardsProps {
  label?: string;
  state?: 'default' | 'disabled' | 'hover' | 'active';
  hasIcon?: boolean;
  onClick?: () => void;
}

export const QuickActionCards: React.FC<QuickActionCardsProps> = ({
  label = 'enter text',
  state = 'default',
  hasIcon = true,
  onClick
}) => {
  return (
    <div
      className={`uedp-quickactioncards uedp-quickactioncards--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="quick action cards"
      data-figma-node-id="23:800"
    >
      {hasIcon && (
        <span className="uedp-quickactioncards__icon">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 4h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            <path d="M19 7v2" strokeDasharray="1.5 1.5" />
            <path d="M19 11v2" strokeDasharray="1.5 1.5" />
            <path d="M19 15v2" strokeDasharray="1.5 1.5" />
          </svg>
        </span>
      )}
      <span className="uedp-quickactioncards__label">{label}</span>
    </div>
  );
};

export default QuickActionCards;
