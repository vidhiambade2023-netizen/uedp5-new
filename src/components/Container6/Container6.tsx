import React from 'react';
import './Container6.css';

export interface Container6Props {
  title?: string;
  savedLabel?: string;
  savedAmount?: string;
  totalLabel?: string;
  totalAmount?: string;
  comparisonText?: string;
  state?: 'default' | 'disabled' | 'vibrant' | 'limeYellow';
}

export const Container6: React.FC<Container6Props> = ({
  title = 'Saving Insight',
  savedLabel = 'You saved:',
  savedAmount = '₹ 00',
  totalLabel = 'Total:',
  totalAmount = '₹ 00',
  comparisonText = 'vs ₹ 00',
  state = 'default'
}) => {
  return (
    <div
      className={`uedp-container6 uedp-container6--${state}`}
      data-figma-layer="container-6"
      data-figma-node-id="33:2189"
    >
      {/* Header Row with Star Icon & Title */}
      <div className="uedp-container6__header">
        <span className="uedp-container6__star-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </span>
        <h4 className="uedp-container6__title">{title}</h4>
      </div>

      {/* Metrics Row: You Saved vs Total */}
      <div className="uedp-container6__metrics">
        {/* Left Column: You Saved */}
        <div className="uedp-container6__column uedp-container6__column--saved">
          <span className="uedp-container6__label uedp-container6__label--saved">{savedLabel}</span>
          <span className="uedp-container6__amount">{savedAmount}</span>
        </div>

        {/* Right Column: Total */}
        <div className="uedp-container6__column uedp-container6__column--total">
          <span className="uedp-container6__label uedp-container6__label--total">{totalLabel}</span>
          <span className="uedp-container6__amount">{totalAmount}</span>
          <span className="uedp-container6__comparison">{comparisonText}</span>
        </div>
      </div>
    </div>
  );
};

export default Container6;

