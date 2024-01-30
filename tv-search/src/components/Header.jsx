//rafce
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          TV Series
        </NavLink>
        </div>
        <div>
          <NavLink className='nav-link active' aria-current='page' to='/home'>
            Home
          </NavLink>
        </div>
        
        <NavLink className='nav-link' to='/about'>
          About
        </NavLink>
      
    </nav>
  )
}


export default Header
