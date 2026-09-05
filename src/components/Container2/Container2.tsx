import React from 'react';
import './Container2.css';

export interface Container2Props {
  title?: string;
  badgeText?: string;
  priceText?: string;
  state?: 'default' | 'disabled' | 'shadow' | 'cream';
  onClick?: () => void;
}

export const Container2: React.FC<Container2Props> = ({
  title = 'enter text',
  badgeText = 'cheapest',
  priceText = '₹00',
  state = 'default',
  onClick
}) => {
  return (
    <div
      className={`uedp-container2 uedp-container2--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="container-2"
      data-figma-node-id="29:1103"
    >
      <div className="uedp-container2__left">
        <div className="uedp-container2__logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="uedp-container2__logotext">SWIGGY</span>
        </div>
        <span className="uedp-container2__title">{title}</span>
      </div>

      <div className="uedp-container2__right">
        {badgeText && <span className="uedp-container2__badge">{badgeText}</span>}
        <span className="uedp-container2__price">{priceText}</span>
      </div>
    </div>
  );
};

export default Container2;
