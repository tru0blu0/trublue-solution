import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { registerWebMCP } from './webmcp'

// Register site tools for AI agents via WebMCP (experimental Chrome API)
registerWebMCP()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
