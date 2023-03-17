import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '@/components/Header'
import RoutesIndex from '@/routes/Index'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </div>
  )
}

export default App
