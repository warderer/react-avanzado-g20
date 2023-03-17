// Reglas para crear un Hook de React
// Custom Hook es una función que utiliza otros hooks de react.
// 1. Siempre debemos usar la palabra 'use' al nombrar el archivo como la función que contiene el hook.
// 2. Siempre deben ser funciones (a partir de la versión 16.8 de React usamos Hooks)
// 3. Siempre debe de usar al menos un hook de React (useState, useEffect, useContext, useRef, etc.)
// 4. Deben ser REUTILIZABLES, no para casos muy especificos.

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado único para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto
  // useEffect se utiliza para manejar efectos secundarios en los componentes de React (manejar APIS)
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  // Función que se ejecuta cada vez que haya un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (event) => {
    // Evitar que se recargue la página y se rompa el SPA
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
