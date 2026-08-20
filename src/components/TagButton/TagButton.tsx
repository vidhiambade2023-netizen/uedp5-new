import React from 'react';
import './TagButton.css';

export interface TagButtonProps {
  tag?: string;
}

export const TagButton: React.FC<TagButtonProps> = ({ tag = 'New Tag' }) => (
  <span className="uedp-tagbutton" data-figma-layer="Tag Button">
    <span>{tag}</span>
  </span>
);
export default TagButton;
