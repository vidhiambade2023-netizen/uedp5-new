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
            {/* Left solid bracket */}
            <path d="M9.5 5H7A2 2 0 0 0 5 7v10a2 2 0 0 0 2 2h2.5" />
            {/* Right dashed bracket */}
            <path d="M14.5 5H17a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2.5" strokeDasharray="3.2 2.2" />
          </svg>
        </span>
      )}
      <span className="uedp-quickactioncards__label">{label}</span>
    </div>
  );
};

export default QuickActionCards;
