import React from 'react';
import './InputBox2.css';

export interface InputBox2Props {
  placeholder?: string;
  value?: string;
  state?: 'default' | 'disabled' | 'shadow' | 'cream';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCopy?: () => void;
  onSubmit?: () => void;
}

export const InputBox2: React.FC<InputBox2Props> = ({
  placeholder = 'enter text',
  value,
  state = 'default',
  onChange,
  onCopy,
  onSubmit
}) => {
  return (
    <div
      className={`uedp-inputbox2 uedp-inputbox2--${state}`}
      data-figma-layer="input box-2"
      data-figma-node-id="33:2302"
    >
      {/* Stadium Input Pill Container */}
      <div className="uedp-inputbox2__pill">
        <input
          type="text"
          className="uedp-inputbox2__input"
          placeholder={placeholder}
          defaultValue={value}
          disabled={state === 'disabled'}
          onChange={onChange}
        />
        <button
          type="button"
          className="uedp-inputbox2__copy-btn"
          onClick={onCopy}
          disabled={state === 'disabled'}
          aria-label="Copy input text"
        >
          <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="8" width="12" height="13" rx="3" />
            <path d="M16 8V6a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1" />
          </svg>
        </button>
      </div>

      {/* Right Circular Submit Arrow Button */}
      <button
        type="button"
        className="uedp-inputbox2__submit-btn"
        onClick={state !== 'disabled' ? onSubmit : undefined}
        disabled={state === 'disabled'}
        aria-label="Submit input"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default InputBox2;

