import React, { useState } from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  checked?: boolean;
  state?: 'default' | 'disabled' | 'checked' | 'shadow' | 'checkedShadow' | 'cream';
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked: controlledChecked,
  state = 'default',
  onChange
}) => {
  const isCheckedByDefault = state === 'checked' || state === 'checkedShadow' || state === 'cream' || state === 'disabled';
  const [internalChecked, setInternalChecked] = useState(isCheckedByDefault);

  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleClick = () => {
    if (state === 'disabled') return;
    const nextChecked = !isChecked;
    setInternalChecked(nextChecked);
    if (onChange) onChange(nextChecked);
  };

  const showCheckmark = isChecked || state === 'checked' || state === 'checkedShadow' || state === 'cream' || state === 'disabled';

  return (
    <div
      className={`uedp-checkbox uedp-checkbox--${state}`}
      onClick={handleClick}
      data-figma-layer="checkbox"
      data-figma-node-id="35:2611"
    >
      <div className="uedp-checkbox__circle">
        {showCheckmark && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Checkbox;

