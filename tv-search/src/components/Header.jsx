//rafce
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <nav className='navbar__nav'>
          <h2 className='navbar-brand'>
          <NavLink to='/home'>
          <i className="fa-brands fa-youtube"></i>
            TV SERIES
          </NavLink>
          </h2>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}


export default Header
