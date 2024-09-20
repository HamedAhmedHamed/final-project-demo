import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { AuthProvider } from './context/AuthContext.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </AuthProvider> */}
  </React.StrictMode>,
)