import React from 'react';
import './InputBox.css';

export interface InputBoxProps {
  label?: string;
  placeholder?: string;
  value?: string;
  state?: 'default' | 'focus' | 'disabled' | 'error';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox: React.FC<InputBoxProps> = ({
  label = 'Input Label',
  placeholder = 'Enter text...',
  value,
  state = 'default',
  onChange
}) => {
  return (
    <div className={`uedp-inputbox uedp-inputbox--${state}`} data-figma-layer="Input Box">
      {label && <label className="uedp-inputbox__label">{label}</label>}
      <input
        type="text"
        className="uedp-inputbox__input"
        placeholder={placeholder}
        defaultValue={value}
        disabled={state === 'disabled'}
        onChange={onChange}
      />
    </div>
  );
};
export default InputBox;
