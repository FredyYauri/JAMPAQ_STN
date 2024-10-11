// import './App.css'
import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom' 
import { AuthProvider } from './hooks/useAuth'

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
