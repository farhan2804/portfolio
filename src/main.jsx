import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "./components/Themes/ThemeProvider.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
