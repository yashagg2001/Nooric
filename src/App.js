import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedirectPage from './pages/RedirectPage';
import HomePage from './pages/HomePage'; // Example existing page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qr" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
