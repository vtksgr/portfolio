import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WorkHistoryPage from './assets/components/WorkHistoryPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkHistoryPage />
  </StrictMode>,
)
