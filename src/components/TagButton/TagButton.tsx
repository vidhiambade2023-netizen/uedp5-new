import React from 'react';
import './TagButton.css';

export interface TagButtonProps {
  label?: string;
  tag?: string;
  state?: 'default' | 'filled' | 'disabled' | 'shadow' | 'cream';
  onClick?: () => void;
}

export const TagButton: React.FC<TagButtonProps> = ({
  label,
  tag = '0 kg',
  state = 'default',
  onClick
}) => {
  const displayText = label || tag;
  return (
    <button
      className={`uedp-tagbutton uedp-tagbutton--${state}`}
      disabled={state === 'disabled'}
      onClick={state !== 'disabled' ? onClick : undefined}
      data-figma-layer="tag button"
      data-figma-node-id="29:1558"
    >
      <span>{displayText}</span>
    </button>
  );
};

export default TagButton;
