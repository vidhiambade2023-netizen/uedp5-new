import React from 'react';
import './InputBox.css';

export interface InputBoxProps {
  label?: string;
  placeholder?: string;
  value?: string;
  state?: 'default' | 'focus' | 'disabled' | 'shadow' | 'error';
  hasIcon?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox: React.FC<InputBoxProps> = ({
  label,
  placeholder = 'enter your email',
  value,
  state = 'default',
  hasIcon = true,
  onChange
}) => {
  return (
    <div className="uedp-inputbox-container">
      {label && <label className="uedp-inputbox__label">{label}</label>}
      <div
        className={`uedp-inputbox uedp-inputbox--${state}`}
        data-figma-layer="Input Box"
        data-figma-node-id="23:719"
      >
        {hasIcon && (
          <span className="uedp-inputbox__icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="8" y="8" width="11" height="12" rx="3" />
              <path d="M16 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 3 3h2" />
            </svg>
          </span>
        )}
        <input
          type="text"
          className="uedp-inputbox__input"
          placeholder={placeholder}
          defaultValue={value}
          disabled={state === 'disabled'}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputBox;
