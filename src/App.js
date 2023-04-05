import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/signup'>
          <Signup/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App
