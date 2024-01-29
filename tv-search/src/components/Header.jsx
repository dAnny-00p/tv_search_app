import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          TV Shows
        </NavLink>
      </div>
    </nav>
  )
}
export default Header
