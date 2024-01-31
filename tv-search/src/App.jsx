import { BrowserRouter as Router} from 'react-router-dom'
//import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
//import Home from './pages/Home'
//import Details from './pages/Details'
import RoutesIndex from './routes/RoutesIndex'
import './App.css'

function App () {
  return (
    <>
      <Router>
        <Header />
        <RoutesIndex />
      </Router>
    </>
  )
}

export default App
