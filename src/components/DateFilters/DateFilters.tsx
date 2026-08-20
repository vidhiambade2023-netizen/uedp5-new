import React from 'react';
import './DateFilters.css';

export interface DateFiltersProps {
  activeTab?: string;
}

export const DateFilters: React.FC<DateFiltersProps> = ({ activeTab = 'Today' }) => {
  const options = ["Today","7 Days","30 Days","Custom"];
  return (
    <div className="uedp-datefilters" data-figma-layer="Date filters">
      {options.map(opt => (
        <div
          key={opt}
          className={`uedp-datefilters__item ${opt === activeTab ? 'uedp-datefilters__item--active' : ''}`}
        >
          {opt}
        </div>
      ))}
    </div>
  );
};
export default DateFilters;
