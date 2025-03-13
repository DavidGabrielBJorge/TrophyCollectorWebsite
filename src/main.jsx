/*
*************************************************************************************************************
The index.html has several functions:
- It defines the basic skeleton of the website (standard HTML).
- It contains the <div id="root">, where React injects the entire application interface.
- It imports the main JavaScript file (main.jsx or index.js), which loads React.
*************************************************************************************************************
*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
