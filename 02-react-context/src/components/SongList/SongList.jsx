import { useEffect, useState } from 'react'
import './songlist.css'
import listaDeCanciones from '../../assets/listaCanciones.json'

const SongList = () => {
  const [list, setList] = useState([]) // Lista de canciones
  const [loading, setLoading] = useState(true)

  // Simulo llamada a la API de la lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(listaDeCanciones)
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <section>
      {loading
        ? <h1>Cargando...</h1>
        : list.map((song) => (
          <div className='row-song' key={song.id}>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))}
    </section>
  )
}
export default SongList
