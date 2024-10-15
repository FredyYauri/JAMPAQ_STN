import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/style.css'
import 'remixicon/fonts/remixicon.css';
import { ModalConfirm } from './components/common/modals/modalConfirm.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <ModalConfirm />        
    </StrictMode>
)
