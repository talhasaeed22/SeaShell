import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Rooms from './Components/Rooms';
import Welcome from './Components/Welcome';
import Signup from './Components/Signup';

function App() {
  const [mode, setMode] = useState('light');
  const switchMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>
    <Router>
      <Navbar mode = {mode} switchMode={switchMode}/>
        <Routes>
        <Route exact path="/Welcome" element={<Welcome/>}> 
        </Route>
        <Route exact path="/Signup" element={<Signup/>}> 
        </Route>
        <Route exact path="/" element={<Home/>}> 
        </Route>
        <Route exact path="/Standard" element={<Rooms key="123" category="Standard" />}> 
        </Route>
        <Route exact path="/Luxury" element={<Rooms key="12" category="Luxury" />}> 
        </Route>
        <Route exact path="/Deluxe" element={<Rooms key="1" category="Deluxe" />}> 
        </Route>
        <Route exact path="/About" element={<About/>}> 
        </Route>
        </Routes>
      </Router>
      <Footer mode={mode}/>
   </>
  );
}

export default App;
