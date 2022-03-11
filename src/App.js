import React from 'react';
import NavBar from './element/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './element/pages/Home';
import About from './element/pages/About';
import Contact from './element/pages/Contact';
import SignIn from './element/Signin';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route exact path = '/about' element={ <About/> }/>
        <Route exact path = '/contact' element={ <Contact/> }/>
        <Route exact path = '/sign-up' element={ <SignIn/> }/>
       
      </Routes>
    </Router>
    </>
  );
}

export default App;
 //link to /insta then use routes here to change it to instagram page (about is in use for insta)