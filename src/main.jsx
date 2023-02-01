import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ScreenSizeProvider } from './context/ScreenSizeContext'
import App from './pages/App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenSizeProvider>
        <App />
      </ScreenSizeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
