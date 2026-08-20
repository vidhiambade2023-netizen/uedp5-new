import React from 'react';
import './IconMessage.css';

export interface IconMessageProps {
  size?: number;
  color?: string;
}

export const IconMessage: React.FC<IconMessageProps> = ({ size = 24, color = 'currentColor' }) => (
  <span className="uedp-iconmessage" style={{ width: size, height: size, color }} data-figma-layer="Icon Message">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  </span>
);
export default IconMessage;
