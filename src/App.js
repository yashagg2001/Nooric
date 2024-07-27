import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import RedirectPage from './pages/RedirectPage';
import HomePage from './pages/HomePage'; 

function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/qr" element={<RedirectPage/>} ></Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
