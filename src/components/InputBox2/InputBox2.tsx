import React from 'react';
import './InputBox2.css';

export interface InputBox2Props {
  label?: string;
  placeholder?: string;
  value?: string;
  state?: 'default' | 'focus' | 'disabled' | 'error';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox2: React.FC<InputBox2Props> = ({
  label = 'Input Label',
  placeholder = 'Enter text...',
  value,
  state = 'default',
  onChange
}) => {
  return (
    <div className={`uedp-inputbox2 uedp-inputbox2--${state}`} data-figma-layer="Input Box 2">
      {label && <label className="uedp-inputbox2__label">{label}</label>}
      <input
        type="text"
        className="uedp-inputbox2__input"
        placeholder={placeholder}
        defaultValue={value}
        disabled={state === 'disabled'}
        onChange={onChange}
      />
    </div>
  );
};
export default InputBox2;
