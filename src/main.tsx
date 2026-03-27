import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// We use "!" to tell TypeScript that #root definitely exists in index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)