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
      {/* Product Image & ADD Badge Container */}
      <div className="uedp-container3__image-wrapper">
        <div className="uedp-container3__packet">
          <svg width="105" height="130" viewBox="0 0 110 140" fill="none">
            {/* Main Yellow Packet Body */}
            <path
              d="M18 18C18 12 30 6 55 6C80 6 92 12 92 18V122C92 128 80 134 55 134C30 134 18 128 18 122V18Z"
              fill="#FACC15"
              stroke="#EAB308"
              strokeWidth="2"
            />
            {/* Top Red Header Strip */}
            <path d="M18 18C30 14 80 14 92 18V40H18V18Z" fill="#DC2626" />
            {/* Bottom Red Footer Strip */}
            <path d="M18 102H92V122C80 126 30 126 18 122V102Z" fill="#B91C1C" />
            
            {/* Green Circular Emblem */}
            <circle cx="55" cy="54" r="18" fill="#15803D" />
            <text x="55" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
              Beyond™
            </text>
            <text x="55" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
              Snack
            </text>

            {/* Kathakali Art Illustration (Right Side of Bag) */}
            <path d="M72 65 C78 68, 85 75, 82 85 C80 92, 75 95, 70 92 Z" fill="#16A34A" />
            <circle cx="76" cy="74" r="5" fill="#DC2626" />
            <circle cx="76" cy="74" r="3" fill="#FACC15" />

            {/* Crispy Chips Illustration */}
            <circle cx="38" cy="78" r="6" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
            <circle cx="50" cy="85" r="7" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
            <circle cx="64" cy="76" r="6" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
            <circle cx="44" cy="94" r="5.5" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
          </svg>
        </div>

        {/* Floating ADD badge */}
        <div className="uedp-container3__addbadge">
          <span className="uedp-container3__addtitle">ADD</span>
          <span className="uedp-container3__addsub">{addOptionsText}</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="uedp-container3__details">
        <h4 className="uedp-container3__title">{title}</h4>
        <span className="uedp-container3__weight">{weightText}</span>

        {/* Footer Row: Swiggy Logo, Price, Discount */}
        <div className="uedp-container3__footer">
          <div className="uedp-container3__brand-price">
            <div className="uedp-container3__swiggylogo">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.12.48 1.52 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <span className="uedp-container3__price">{priceText}</span>
          </div>
          <span className="uedp-container3__discount">{discountText}</span>
        </div>
      </div>

      {/* Floating Action Button (Plus) */}
      <button className="uedp-container3__actionbtn" aria-label="Add product">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  );
};

export default Container3;

