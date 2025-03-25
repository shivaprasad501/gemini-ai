import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/Appcontext.jsx'

createRoot(document.getElementById('root')).render(

    <AppContextProvider>
    <App />
    </AppContextProvider>

)
