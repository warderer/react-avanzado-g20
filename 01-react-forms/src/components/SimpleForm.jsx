import logo from '../assets/react.svg'
import { useState } from 'react'

const SimpleForm = () => {
  // Paso #1: Crear los estados donde guardare la información tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso #3: Crear la función que se ejecutara al hacer click en el botón de envio del formulario
  const handleSubmit = (event) => {
    // Evitar que se recargue la página y se rompa el SPA
    event.preventDefault()
    const submittedData = JSON.stringify({
      email,
      password
    })
    console.log(submittedData)
  }

  // Paso #2: Crear el formulario base en JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' onChange={(event) => setEmail(event.target.value)} />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' onChange={(event) => setPassword(event.target.value)} />
          <button onClick={handleSubmit}>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}
export default SimpleForm
