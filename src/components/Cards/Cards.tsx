import React from 'react';
import './Cards.css';

export interface CardsProps {
  nameText?: string;
  priceText?: string;
  ordersText?: string;
  state?: 'default' | 'disabled' | 'yellow' | 'mint';
  onClick?: () => void;
}

export const Cards: React.FC<CardsProps> = ({
  nameText = 'Name',
  priceText = '₹ 00',
  ordersText = '0 orders placed',
  state = 'default',
  onClick
}) => {
  return (
    <div
      className={`uedp-cards uedp-cards--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="cards"
      data-figma-node-id="52:243"
    >
      {/* BigBasket Brand Circle Icon */}
      <div className="uedp-cards__brand-icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#84CC16" />
          <text x="17" y="31" textAnchor="middle" fill="#DC2626" fontSize="22" fontWeight="900" fontFamily="sans-serif">
            b
          </text>
          <text x="29" y="31" textAnchor="middle" fill="#000000" fontSize="22" fontWeight="900" fontFamily="sans-serif">
            b
          </text>
        </svg>
      </div>

      {/* Name Title */}
      <h4 className="uedp-cards__name">{nameText}</h4>

      {/* Price Amount */}
      <span className="uedp-cards__price">{priceText}</span>

      {/* Orders Subtitle */}
      <span className="uedp-cards__orders">{ordersText}</span>
    </div>
  );
};

export default Cards;

