import React from 'react';
import './Container3.css';

export interface Container3Props {
  title?: string;
  weightText?: string;
  priceText?: string;
  discountText?: string;
  addOptionsText?: string;
  state?: 'default' | 'disabled' | 'shadow' | 'cream';
  onClick?: () => void;
}

export const Container3: React.FC<Container3Props> = ({
  title = 'enter text',
  weightText = '00 g',
  priceText = '₹ 00',
  discountText = '00% off',
  addOptionsText = '4 options',
  state = 'default',
  onClick
}) => {
  return (
    <div
      className={`uedp-container3 uedp-container3--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="container-3"
      data-figma-node-id="29:1316"
    >
      {/* Product Image Banner Container */}
      <div className="uedp-container3__image-wrapper">
        <div className="uedp-container3__packet">
          <svg width="90" height="110" viewBox="0 0 100 130" fill="none">
            {/* Packet Bag Shape */}
            <path
              d="M15 15C15 10 25 5 50 5C75 5 85 10 85 15V115C85 120 75 125 50 125C25 125 15 120 15 115V15Z"
              fill="#eab308"
              stroke="#ca8a04"
              strokeWidth="2"
            />
            {/* Red Header & Bottom Banners */}
            <path d="M15 15C25 12 75 12 85 15V35H15V15Z" fill="#dc2626" />
            <path d="M15 95H85V115C75 118 25 118 15 115V95Z" fill="#b91c1c" />
            {/* Green Badge Emblem */}
            <circle cx="50" cy="50" r="16" fill="#15803d" />
            <text x="50" y="47" textAnchor="middle" fill="#ffffff" fontSize="6" fontWeight="bold">
              Beyond
            </text>
            <text x="50" y="54" textAnchor="middle" fill="#ffffff" fontSize="5" fontWeight="bold">
              Snack
            </text>
            {/* Chips Graphic Details */}
            <circle cx="35" cy="72" r="5" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="48" cy="78" r="6" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="62" cy="70" r="5" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          </svg>
        </div>

        {/* Floating ADD badge */}
        <div className="uedp-container3__addbadge">
          <span className="uedp-container3__addtitle">ADD</span>
          <span className="uedp-container3__addsub">{addOptionsText}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="uedp-container3__details">
        <h4 className="uedp-container3__title">{title}</h4>
        <span className="uedp-container3__weight">{weightText}</span>

        {/* Footer Row: Swiggy logo, Price, Discount */}
        <div className="uedp-container3__footer">
          <div className="uedp-container3__brand">
            <div className="uedp-container3__swiggylogo">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <span className="uedp-container3__price">{priceText}</span>
          </div>
          <span className="uedp-container3__discount">{discountText}</span>
        </div>
      </div>

      {/* Bottom Right Floating Plus Action Button */}
      <div className="uedp-container3__actionbtn">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
    </div>
  );
};

export default Container3;
