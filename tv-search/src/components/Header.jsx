//rafce
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <nav>
          <NavLink className='navbar-brand' to='/home'>
          <i className="fa-brands fa-youtube"></i>
            TV SERIES
          </NavLink>
        </nav>

        <Link className='nav-link active' to='/home'>
          Home
        </Link>

        <Link className='nav-link' to='/about'>
          About
        </Link>
      </div>
    </nav>
  )
}


export default Header
