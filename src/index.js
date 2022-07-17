import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import JobContextProvider from './contexts/JobContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
