import { createContext, useEffect, useState, useContext } from 'react'
import listaDeCanciones from '../../assets/listaCanciones.json'
// CONTEXT tiene que ver con el manejo de estados globales en React, es decir, poder compartir LA MISMA información entre varios componentes sin tener que pasarla por props.

// Para usar CONTEXT necesitamos seguir una serie de pasos.

// #1: Creación del contexto vacío
const SongContext = createContext()

// #2: Creación del provider del contexto
// El provider maneja de donde se obtiene y como se pasa la información a los componentes que lo consuman.
function SongProvider (props) {
  const [list, setList] = useState([]) // Lista de canciones
  const [loading, setLoading] = useState(true) // Nos indica cuando estan disponibles las canciones
  const [selectedSong, setSelectedSong] = useState({}) // Canción seleccionada

  // Simulo llamada a la API de la lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(listaDeCanciones)
      setLoading(false)
    }, 2500)
  }, [])

  // Tenemos que indicar al provider, que datos debe proveer.
  // Estos datos son publicos para todos los componentes.
  const values = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }

  return (
    <SongContext.Provider value={values} {...props} />
  )
}

// #3: Consumidor del contexto
// Brinda acceso a los datos del contexto a los componentes que lo consuman.
const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// #4: Exportar el provider y el consumidor para que podamos usarlos en nuestros componentes.
export {
  SongProvider,
  useSongContext
}

/* USO DE CONTEXT */

// #5 Debemos de ir a un componente superior y envolverlo con el provider. A partir de ese componente para abajo estaran disponibles los datos del contexto.
