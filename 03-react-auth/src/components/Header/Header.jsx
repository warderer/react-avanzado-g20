import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/context/AuthContext'
import './Header.scss'

// Documentación NavLink https://reactrouter.com/en/main/components/nav-link
// NavLink es un tipo especial de Link, que me permite gestionar estilos en función si la ruta está activa o no (isActive) o si esta esta cargando (isPending).

const Header = () => {
  const { isAuth, logout } = useAuthContext()

  const linkIsActive = (isActive, isPending) => {
    if (isPending) return 'header__item-link'
    if (isActive) return 'header__item-link header__item-link--is-active'
    else return 'header__item-link'
  }

  return (
    <nav className='header'>
      <NavLink to='/' className='header__logo'>LOGO</NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink
            to='/'
            className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >Home
          </NavLink>
        </li>

        <li className='header__list-item'>
          <NavLink
            to='/dashboard'
            className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >Dashboard
          </NavLink>
        </li>
        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/secret'
                  className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                >Secret
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/'
                  className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                  onClick={logout}
                >Logout
                </NavLink>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/login'
                  className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                >Login
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/signup'
                  className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                >Signup
                </NavLink>
              </li>
            </>)}

      </ul>
    </nav>
  )
}
export default Header
