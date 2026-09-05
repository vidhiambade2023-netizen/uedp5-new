import React from 'react';
import './ListItem.css';

export interface ListItemProps {
  productName?: string;
  selected?: boolean;
  state?: 'default' | 'placeholder' | 'disabled' | 'shadow' | 'cream';
  onClick?: () => void;
  onCompareClick?: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  productName = 'Enter product name',
  selected = false,
  state = 'default',
  onClick,
  onCompareClick
}) => {
  return (
    <div
      className={`uedp-listitem uedp-listitem--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="list item"
      data-figma-node-id="35:2549"
    >
      {/* Left Radio / Yellow Selection Circle */}
      <div className={`uedp-listitem__radio ${selected ? 'uedp-listitem__radio--selected' : ''}`}>
        {selected && <div className="uedp-listitem__radio-dot" />}
      </div>

      {/* Middle Product Name */}
      <span className="uedp-listitem__name">{productName}</span>

      {/* Right Icons Group: Compare Circle + Chevron Arrow */}
      <div className="uedp-listitem__actions">
        <button
          type="button"
          className="uedp-listitem__compare-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (state !== 'disabled' && onCompareClick) onCompareClick();
          }}
          disabled={state === 'disabled'}
          aria-label="Compare item"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
            <path d="M17 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" strokeDasharray="3 3" />
            <path d="M12 8v8" />
          </svg>
        </button>

        <span className="uedp-listitem__chevron">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ListItem;

