import './App.css'
import { Dashboard, Home, Login, Signup, Secret } from './pages'

function App () {
  return (
    <div>
      <h1> React Auth </h1>
      <Home />
      <Login />
      <Signup />
      <Dashboard />
      <Secret />
    </div>
  )
}

export default App
