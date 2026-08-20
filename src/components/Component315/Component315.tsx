import React from 'react';
import './Component315.css';

export interface Component315Props {
  value?: string;
  trend?: string;
}

export const Component315: React.FC<Component315Props> = ({ value = '$24,500', trend = '+12.5%' }) => (
  <div className="uedp-component315" data-figma-layer="Component 315">
    <div style={{ fontSize: 13, color: '#94a3b8' }}>Total Revenue</div>
    <div style={{ fontSize: 28, fontWeight: 800, color: '#f8fafc', margin: '6px 0' }}>{value}</div>
    <div style={{ fontSize: 12, color: '#10b981', fontWeight: 600 }}>{trend} vs last month</div>
  </div>
);
export default Component315;
