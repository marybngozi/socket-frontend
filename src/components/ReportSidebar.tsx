import React from 'react';
import { type ReportItem } from '@marybngozi/socket-types';

interface Props {
  activeItem: ReportItem | null;
}

const ReportSidebar: React.FC<Props> = ({ activeItem }) => {
  if (!activeItem) {
    return (
      <div style={{ padding: '20px', color: '#888', fontStyle: 'italic' }}>
        No item selected.
      </div>
    );
  }

  const isChart = activeItem.chartType !== "none";

  return (
    <div style={{ 
      width: '300px', 
      height: '100vh', 
      backgroundColor: '#f9f9f9', 
      borderLeft: '1px solid #ddd', 
      padding: '24px',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Item Properties</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>Label</label>
        <div style={{ fontWeight: 'bold' }}>{activeItem.properties.label}</div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>Chart Type</label>
        <div style={{ 
          display: 'inline-block', 
          padding: '2px 8px', 
          borderRadius: '4px', 
          backgroundColor: '#e0e7ff', 
          color: '#4338ca',
          fontSize: '13px',
          marginTop: '4px'
        }}>
          {activeItem.chartType}
        </div>
      </div>

      {isChart && (
        <div style={{ 
          marginTop: '30px', 
          padding: '15px', 
          backgroundColor: '#ecfdf5', 
          borderRadius: '8px',
          border: '1px solid #10b981',
          color: '#065f46'
        }}>
          ✨ <strong>Contract Verified:</strong> This item is a valid Chart type.
        </div>
      )}
    </div>
  );
};

export default ReportSidebar;