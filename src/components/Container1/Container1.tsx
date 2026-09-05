import React from 'react';
import './Container1.css';

export interface Container1Props {
  title?: string;
  itemsCount?: number;
  addedTodayCount?: number;
  state?: 'default' | 'disabled' | 'shadow' | 'cream';
  onClick?: () => void;
}

export const Container1: React.FC<Container1Props> = ({
  title = 'enter your text',
  itemsCount = 0,
  addedTodayCount = 0,
  state = 'default',
  onClick
}) => {
  return (
    <div
      className={`uedp-container1 uedp-container1--${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="container-1"
      data-figma-node-id="29:1103"
    >
      <div className="uedp-container1__content">
        <h4 className="uedp-container1__title">{title}</h4>
        <div className="uedp-container1__meta">
          <span>{itemsCount} items</span>
          <span className="uedp-container1__dot">•</span>
          <span>{addedTodayCount} added today</span>
        </div>
      </div>
      <div className="uedp-container1__button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M13 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Container1;
