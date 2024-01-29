import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}
export default RoutesIndex