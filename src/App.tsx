import { useState } from 'react'
import { type ReportItem } from '@socket/api-types'
import ReportSidebar from './components/ReportSidebar'

function App() {
  const [item] = useState<ReportItem>({
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "March JUDE Report",
    chartType: "bar-chart",
    properties: { 
      label: "Revenue Growth", 
      subtitle: "Monthly analysis for Q1" 
    }
  });

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      fontFamily: 'Inter, system-ui, sans-serif',
      color: '#2d3748'
    }}>
      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '40px' }}>
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ margin: 0, color: '#1a202c' }}>Socket Dashboard</h1>
          <p style={{ color: '#718096' }}>Type-Safe Architecture Demo</p>
        </header>

        <div style={{ 
          padding: '30px', 
          backgroundColor: '#fff', 
          border: '1px solid #e2e8f0', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginTop: 0 }}>Main Canvas</h3>
          <div style={{ 
            height: '200px', 
            backgroundColor: '#edf2f7', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '2px dashed #cbd5e0'
          }}>
            {item.chartType === 'bar-chart' ? '📊 Bar Chart Visualization' : '📄 Document View'}
          </div>
          
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#4a5568' }}>
            <strong>System ID:</strong> <code style={{ backgroundColor: '#f7fafc', padding: '2px 4px' }}>{item.id}</code>
          </div>
        </div>
      </div>

      {/* The Sidebar Component */}
      <ReportSidebar activeItem={item} />
    </div>
  )
}

export default App