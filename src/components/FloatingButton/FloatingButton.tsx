import React from 'react';
import './FloatingButton.css';

export interface FloatingButtonProps {
  titleText?: string;
  subtitleText?: string;
  state?: 'default' | 'disabled' | 'vibrantGreen' | 'pastelYellow';
  onClick?: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  titleText = 'VIEW CART',
  subtitleText = '0 item added',
  state = 'default',
  onClick
}) => {
  return (
    <div
      className={`uedp-floatingbutton uedp-floatingbutton--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="floating button"
      data-figma-node-id="49:2866"
    >
      {/* Left Banana Bunch Thumbnail Circle */}
      <div className="uedp-floatingbutton__thumbnail">
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          <ellipse cx="24" cy="38" rx="16" ry="4" fill="#000000" fillOpacity="0.08" />
          <path d="M12 18C16 12 28 10 38 18C34 26 22 34 12 18Z" fill="#FACC15" stroke="#EAB308" strokeWidth="1.5" />
          <path d="M12 18C20 20 28 20 38 18" stroke="#CA8A04" strokeWidth="1" strokeLinecap="round" />
          <path d="M10 22C14 16 26 14 36 22C32 30 20 38 10 22Z" fill="#FDE047" stroke="#EAB308" strokeWidth="1.5" />
          <path d="M10 22C18 24 26 24 36 22" stroke="#CA8A04" strokeWidth="1" strokeLinecap="round" />
          <path d="M10 18C9 15 11 13 13 14" stroke="#854D0E" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Middle Text Content */}
      <div className="uedp-floatingbutton__content">
        <span className="uedp-floatingbutton__title">{titleText}</span>
        <span className="uedp-floatingbutton__subtitle">{subtitleText}</span>
      </div>

      {/* Right Action Chevron Circle */}
      <div className="uedp-floatingbutton__arrow-circle">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>
  );
};

export default FloatingButton;

