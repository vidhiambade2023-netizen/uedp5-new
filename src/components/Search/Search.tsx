import React from 'react';
import './Search.css';

export interface SearchProps {
  placeholder?: string;
}

export const Search: React.FC<SearchProps> = ({ placeholder = 'Search components...' }) => (
  <div className="uedp-search" data-figma-layer="Search">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    <input type="text" className="uedp-search__input" placeholder={placeholder} />
  </div>
);
export default Search;
