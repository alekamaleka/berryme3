import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css'

// Создаем элемент если его нет
if (!document.getElementById('app')) {
  const app = document.createElement('div')
  app.id = 'app'
  document.body.appendChild(app)
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)