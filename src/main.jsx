import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { ScreenSizeProvider } from './context/ScreenSizeContext'
import App from './pages/App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenSizeProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ScreenSizeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
