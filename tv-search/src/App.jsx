//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
//import Home from './pages/Home'
//import Details from './pages/Details'
//import Details from './pages/Error404'
import RoutesIndex from './routes/RoutesIndex'

function App () {
  return (
    <>
      
      <Router>
        <Header />
        <RoutesIndex />
        {/*
        <div className="container">
          <Switch>
            <Route exact path='/' Component={Home}/>
            <Route path='/details/:id' Component={Details}/>
          </Switch>
        </div>*/}
      </Router>
    </>
  )
}

export default App
