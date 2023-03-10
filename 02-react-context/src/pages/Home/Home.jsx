import SongDetails from '../../components/SongDetails'
import SongList from '../../components/SongList'
import { SongProvider } from '../../context/SongContext'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <SongProvider>
        <div className='izquierdo'>
          <h2>Song List</h2>
          <SongList />
        </div>

        <div className='derecho'>
          <SongDetails />
        </div>
      </SongProvider>
    </div>
  )
}
export default Home
