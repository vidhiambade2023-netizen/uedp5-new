import React, { useState } from 'react';
import './Container4.css';

export interface Container4Props {
  title?: string;
  piecesText?: string;
  quantity?: number;
  state?: 'default' | 'disabled' | 'shadow' | 'tint';
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export const Container4: React.FC<Container4Props> = ({
  title = 'enter your text',
  piecesText = '0 pieces',
  quantity: initialQuantity = 1,
  state = 'default',
  onIncrement,
  onDecrement
}) => {
  const [count, setCount] = useState(initialQuantity);

  const handleDecrement = () => {
    if (state === 'disabled') return;
    if (onDecrement) {
      onDecrement();
    } else {
      setCount((prev) => Math.max(0, prev - 1));
    }
  };

  const handleIncrement = () => {
    if (state === 'disabled') return;
    if (onIncrement) {
      onIncrement();
    } else {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div
      className={`uedp-container4 uedp-container4--${state}`}
      data-figma-layer="container-4"
      data-figma-node-id="30:2015"
    >
      {/* Left Thumbnail (Banana Bunch) */}
      <div className="uedp-container4__thumbnail">
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
          <ellipse cx="24" cy="38" rx="16" ry="4" fill="#000000" fillOpacity="0.08" />
          <path d="M12 18C16 12 28 10 38 18C34 26 22 34 12 18Z" fill="#FACC15" stroke="#EAB308" strokeWidth="1.5" />
          <path d="M12 18C20 20 28 20 38 18" stroke="#CA8A04" strokeWidth="1" strokeLinecap="round" />
          <path d="M10 22C14 16 26 14 36 22C32 30 20 38 10 22Z" fill="#FDE047" stroke="#EAB308" strokeWidth="1.5" />
          <path d="M10 22C18 24 26 24 36 22" stroke="#CA8A04" strokeWidth="1" strokeLinecap="round" />
          <path d="M10 18C9 15 11 13 13 14" stroke="#854D0E" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Middle Text Details */}
      <div className="uedp-container4__details">
        <h4 className="uedp-container4__title">{title}</h4>
        <span className="uedp-container4__pieces">{piecesText}</span>
      </div>

      {/* Right Stepper Counter Control */}
      <div className="uedp-container4__stepper">
        <button
          className="uedp-container4__stepper-btn uedp-container4__stepper-btn--minus"
          onClick={handleDecrement}
          disabled={state === 'disabled'}
          aria-label="Decrease quantity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M5 12h14" />
          </svg>
        </button>

        <span className="uedp-container4__stepper-count">{count}</span>

        <button
          className="uedp-container4__stepper-btn uedp-container4__stepper-btn--plus"
          onClick={handleIncrement}
          disabled={state === 'disabled'}
          aria-label="Increase quantity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Container4;

