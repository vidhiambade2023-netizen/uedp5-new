import React from 'react';
import './TopBar.css';

export interface TopBarProps {
  listName?: string;
  subtitleText?: string;
  state?: 'default' | 'disabled' | 'shadow' | 'cream';
  onBackClick?: () => void;
  onShareClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  listName = 'List Name',
  subtitleText = '0 items  •  updated now',
  state = 'default',
  onBackClick,
  onShareClick
}) => {
  return (
    <header
      className={`uedp-topbar uedp-topbar--${state}`}
      data-figma-layer="top bar"
      data-figma-node-id="35:2389"
    >
      {/* Left Back Chevron Button */}
      <button
        type="button"
        className="uedp-topbar__btn uedp-topbar__btn--back"
        onClick={state !== 'disabled' ? onBackClick : undefined}
        disabled={state === 'disabled'}
        aria-label="Go back"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Middle List Name & Subtitle Details */}
      <div className="uedp-topbar__content">
        <h3 className="uedp-topbar__title">{listName}</h3>
        <span className="uedp-topbar__subtitle">{subtitleText}</span>
      </div>

      {/* Right Share Export Button */}
      <button
        type="button"
        className="uedp-topbar__btn uedp-topbar__btn--share"
        onClick={state !== 'disabled' ? onShareClick : undefined}
        disabled={state === 'disabled'}
        aria-label="Share list"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      </button>
    </header>
  );
};

export default TopBar;

