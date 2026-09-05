import React from 'react';
import './Cards2.css';

export interface Cards2Props {
  titleText?: string;
  priceText?: string;
  saveText?: string;
  state?: 'default' | 'disabled' | 'shadow' | 'active';
  imageSrc?: string;
  onClick?: () => void;
}

export const Cards2: React.FC<Cards2Props> = ({
  titleText = 'enter text',
  priceText = '₹00',
  saveText = 'save ₹00',
  state = 'default',
  imageSrc,
  onClick,
}) => {
  return (
    <div
      className={`uedp-cards2 uedp-cards2--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="cards-2"
      data-figma-node-id="37:2672"
    >
      {/* Product Image Wrapper */}
      <div className="uedp-cards2__image-container">
        {imageSrc ? (
          <img src={imageSrc} alt={titleText} className="uedp-cards2__img" />
        ) : (
          <svg
            width="120"
            height="135"
            viewBox="0 0 120 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="uedp-cards2__bread-svg"
          >
            {/* Bag Top Knot / Tie */}
            <path
              d="M48 24C48 24 52 10 60 10C68 10 72 24 72 24L65 32H55L48 24Z"
              fill="#E2E8F0"
            />
            <path
              d="M45 5C52 14 60 16 60 16C60 16 68 14 75 5C68 18 64 24 60 24C56 24 52 18 45 5Z"
              fill="#CBD5E1"
            />
            <rect x="52" y="28" width="16" height="5" rx="2" fill="#E2E8F0" />

            {/* Bread Loaf Base Body */}
            <rect x="25" y="32" width="70" height="92" rx="14" fill="#D97706" />
            <rect x="27" y="34" width="66" height="88" rx="12" fill="#F59E0B" />
            <path
              d="M30 46C30 40 36 36 44 36H76C84 36 90 40 90 46V114C90 120 84 124 76 124H44C36 124 30 120 30 114V46Z"
              fill="#B45309"
            />

            {/* Slices Lines Side Detail */}
            <line x1="28" y1="48" x2="28" y2="112" stroke="#92400E" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="92" y1="48" x2="92" y2="112" stroke="#92400E" strokeWidth="2" strokeDasharray="3 3" />

            {/* Plastic Bag Shimmer Gloss */}
            <path
              d="M25 40C25 35 30 32 36 32H84C90 32 95 35 95 40V114C95 120 90 124 84 124H36C30 124 25 120 25 114V40Z"
              fill="white"
              fillOpacity="0.15"
            />

            {/* Front Label Sticker */}
            <rect x="33" y="44" width="54" height="68" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />

            {/* Maroon Brand Header */}
            <path d="M33 50C33 46.6863 35.6863 44 39 44H81C84.3137 44 87 46.6863 87 50V56H33V50Z" fill="#7C2D12" />
            <text x="60" y="52" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              The Health Factory
            </text>

            {/* Veg Mark */}
            <rect x="80" y="46" width="4" height="4" stroke="#16A34A" strokeWidth="0.6" fill="white" />
            <circle cx="82" cy="48" r="1" fill="#16A34A" />

            {/* Label Title: ZERO MAIDA BREAD */}
            <text x="60" y="64" fill="#451A03" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
              ZERO
            </text>
            <text x="60" y="71" fill="#451A03" fontSize="6" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
              MAIDA
            </text>
            <text x="60" y="77" fill="#451A03" fontSize="5.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
              BREAD™
            </text>

            {/* 100% WHOLE WHEAT Red Pill */}
            <rect x="37" y="80" width="46" height="6.5" rx="3" fill="#991B1B" />
            <text x="60" y="85" fill="#FFFFFF" fontSize="4" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              100% WHOLE WHEAT
            </text>

            {/* Subtext Strip */}
            <rect x="35" y="88.5" width="50" height="5" fill="#FEF2F2" />
            <text x="60" y="92" fill="#7F1D1D" fontSize="3" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
              NO CHEMICAL PRESERVATIVES & NO COLOURS
            </text>

            {/* 3 Bottom Feature Icons */}
            <circle cx="44" cy="99" r="3" fill="#FFFBEB" stroke="#D97706" strokeWidth="0.5" />
            <text x="44" y="100" fill="#78350F" fontSize="2.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">P</text>

            <circle cx="60" cy="99" r="3" fill="#FFFBEB" stroke="#D97706" strokeWidth="0.5" />
            <text x="60" y="100" fill="#78350F" fontSize="2.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">F</text>

            <circle cx="76" cy="99" r="3" fill="#FFFBEB" stroke="#D97706" strokeWidth="0.5" />
            <text x="76" y="100" fill="#78350F" fontSize="2.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">L</text>

            <text x="44" y="105" fill="#92400E" fontSize="2" textAnchor="middle" fontFamily="sans-serif">PROTEIN</text>
            <text x="60" y="105" fill="#92400E" fontSize="2" textAnchor="middle" fontFamily="sans-serif">FIBRE</text>
            <text x="76" y="105" fill="#92400E" fontSize="2" textAnchor="middle" fontFamily="sans-serif">LOW FAT</text>
          </svg>
        )}
      </div>

      {/* Product Title / Name */}
      <div className="uedp-cards2__title">{titleText}</div>

      {/* Price & Savings Row */}
      <div className="uedp-cards2__price-row">
        <span className="uedp-cards2__price">{priceText}</span>
        <span className="uedp-cards2__save">{saveText}</span>
      </div>
    </div>
  );
};

export default Cards2;

