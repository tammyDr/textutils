
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import './App.css';
import { useState } from 'react';
import About from './Components/About';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('dark')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#5f30ab'
      document.title="Textutils - Dark Mode"  
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      document.title="Textutils - Light Mode"
    }
  }
  return (
     <>
<Router>
<Navbar title="texTutils2" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">

<Switch>
          <Route path="/about">
            <About />
          </Route>
                   <Route path="/">
          <Textform heading = "Enter your text below" mode={mode}/> 
          </Route>
       
        </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
