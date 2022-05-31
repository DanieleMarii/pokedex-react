import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Poke from './pages/Pokedex/Poke';
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes >
            <Route path="/" element={< Home />} />
            <Route path="/poke" element={<Poke />} />
        </Routes>
    </Router>
  )
}

export default App;
