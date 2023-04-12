import logo from '../assets/react.svg'
import { useState } from 'react'

const SimpleForm = () => {
  // Paso #2: Crear los estados donde guardare la información tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso #4: Crear la función que se ejecutara al hacer click en el botón de envio del formulario
  const handleSubmit = (event) => {
    // Evitar que se recargue la página y se rompa el SPA
    event.preventDefault()
    // JSON.stringify convierte un objeto en un string JSON
    const submittedData = JSON.stringify({
      email,
      password
    })
    console.log(submittedData)
  }

  // Paso #1: Crear el formulario base en JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form onSubmit={handleSubmit}>
          {/* Paso #3: Guardar cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type='submit'>
            Iniciar Sesion
          </button>

        </form>
      </div>
    </div>
  )
}
export default SimpleForm
