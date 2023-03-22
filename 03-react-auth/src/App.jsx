import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '@/components/Header'
import RoutesIndex from '@/routes/Index'
import { AuthProvider } from '@/context/AuthContext'

function App () {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
