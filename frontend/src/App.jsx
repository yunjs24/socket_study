import { useState } from 'react'
import {Route, Switch} from "react-router-dom";
import Signin from "./view/Signin"
import Signup from "./view/Signup"
import logo from './logo.svg'
import './App.css'

import LandingPage from 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}>
          <Route exact path="/login" component={Signin}>
          <Route exact path="/register" component={Signup}>
        </Switch>
      </div>
    </div>
  )
}

export default App;
