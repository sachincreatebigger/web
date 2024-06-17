import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ToastContainer, toast } from 'react-toastify';
import { Applecover } from './store/usecontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Applecover>
  <React.StrictMode>
    <App />
    <ToastContainer 
        position="top-right"
        autoClose={2000} // Set autoClose to 5 minutes (300000 milliseconds)
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
     // Correctly assign the transition
      />
  </React.StrictMode>,
  </Applecover>
)
