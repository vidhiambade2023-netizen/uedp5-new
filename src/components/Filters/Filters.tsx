import React from 'react';
import './Filters.css';

export interface FiltersProps {
  activeTab?: string;
}

export const Filters: React.FC<FiltersProps> = ({ activeTab = 'All' }) => {
  const options = ["All","Active","Pending","Archived"];
  return (
    <div className="uedp-filters" data-figma-layer="Filters">
      {options.map(opt => (
        <div
          key={opt}
          className={`uedp-filters__item ${opt === activeTab ? 'uedp-filters__item--active' : ''}`}
        >
          {opt}
        </div>
      ))}
    </div>
  );
};
export default Filters;
