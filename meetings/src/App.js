import React from 'react'
import './App.css'
import SideNav from './components/SideNav'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className='wrapper'>
        <div>
          <SideNav />
        </div>
        <div>
        <Switch>
        <Route path='/about' component={AboutPage}/>
        <Route path='/' component={HomePage}/>
        </Switch>
        </div>
        </div>
      </Router>
  );
}

export default App;
