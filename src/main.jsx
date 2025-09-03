import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScrollToTop from './components/ScrollToTopOnMount.jsx'
import AppRoutes from './Routes.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
