//rafce
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='navbar'>
      <div className='container__fluid'>
        <nav className='navbar__nav'>
          <h2 className='navbar__brand'>
            <NavLink to='/home'>
              <i className="fa-brands fa-youtube"></i>
              TV SERIES
            </NavLink>
          </h2>
        </nav>
      </div>
    </nav>
  )
}


export default Header
