import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom" ;
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signin from './Components/SignIn/Signin';

export const userContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    <Header></Header>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path='/destination/:VehicleName'>
          <Destination/>
        </PrivateRoute>
        {/* <PrivateRoute path='/destination'>
        <Destination/>
        </PrivateRoute> */}
        <Router path='/blog'>
          <Blog/>
        </Router>
        <Router path='/contact'>
          <Contact/>
        </Router>
        <Router path='/login'>
          <Login/>
        </Router>
        <Router path='/signup'>
          <Signup/>
        </Router>
        <Router path='/signin'>
          <Signin/>
        </Router>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
