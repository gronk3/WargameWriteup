import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import StartScreen from './components/StartScreen'
import Map from './components/Map';
import Home from './components/Home'
import Wargame from './components/Wargame'
import End from './components/End'

function App () {
  return (
    <div>
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/home/" element={<Home/>}/>
        <Route path="/:wargame/:level" element={<Wargame/>}/>
        <Route path="/end/" element={<End/>}/>
        <Route path="/end/:wargame" element={<End/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
