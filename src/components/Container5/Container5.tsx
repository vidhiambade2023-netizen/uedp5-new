import React from 'react';
import './Container5.css';

export interface Container5Props {
  appNameText?: string;
  itemText?: string;
  buyButtonText?: string;
  state?: 'default' | 'disabled' | 'shadow' | 'cream';
  onBuyClick?: () => void;
}

export const Container5: React.FC<Container5Props> = ({
  appNameText = 'enter app name',
  itemText = '0 item',
  buyButtonText = 'BUY',
  state = 'default',
  onBuyClick
}) => {
  return (
    <div
      className={`uedp-container5 uedp-container5--${state}`}
      data-figma-layer="container-5"
      data-figma-node-id="33:2072"
    >
      {/* Left Swiggy Brand Icon Circle */}
      <div className="uedp-container5__brand-icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#FC8019" />
          <path
            d="M24 9.5C18.48 9.5 14 13.98 14 19.5C14 25.5 20.3 33.7 22.9 36.8C23.48 37.5 24.52 37.5 25.1 36.8C27.7 33.7 34 25.5 34 19.5C34 13.98 29.52 9.5 24 9.5ZM24 23C22.07 23 20.5 21.43 20.5 19.5C20.5 17.57 22.07 16 24 16C25.93 16 27.5 17.57 27.5 19.5C27.5 21.43 25.93 23 24 23Z"
            fill="#FFFFFF"
          />
          <text x="24" y="41" textAnchor="middle" fill="#FFFFFF" fontSize="5.2" fontWeight="bold" letterSpacing="0.06em" fontFamily="sans-serif">
            SWIGGY
          </text>
        </svg>
      </div>

      {/* Middle Text Details */}
      <div className="uedp-container5__details">
        <h4 className="uedp-container5__app-name">{appNameText}</h4>
        <span className="uedp-container5__item-count">{itemText}</span>
      </div>

      {/* Right BUY Action Button */}
      <button
        className="uedp-container5__buy-btn"
        onClick={state !== 'disabled' ? onBuyClick : undefined}
        disabled={state === 'disabled'}
        aria-label="Buy product"
      >
        {buyButtonText}
      </button>
    </div>
  );
};

export default Container5;

