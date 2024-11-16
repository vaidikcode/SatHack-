// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddBook from './AddBook';
import Checkout from './Checkout';
import Blockdisplay from './Blockdisplay';
import EmissionRate from './EmissionRate';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blockdisplay" element={<Blockdisplay />} />
        <Route path="/emissionrate" element={<EmissionRate />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
