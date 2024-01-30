import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Details from '../pages/Details'
import Error404 from '../pages/Error404'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/informacion' element={<Details />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}
export default RoutesIndex