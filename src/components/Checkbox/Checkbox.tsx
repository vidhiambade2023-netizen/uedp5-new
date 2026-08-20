import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label = 'Checkbox Option', checked = true }) => (
  <label className="uedp-checkbox" data-figma-layer="Checkbox">
    <div className="uedp-checkbox__box">
      {checked && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
    </div>
    <span>{label}</span>
  </label>
);
export default Checkbox;
