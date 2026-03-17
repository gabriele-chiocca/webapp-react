import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import Homepage from './pages/homepage';
import MovieDetailPage from './pages/movieDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movies/:id" element={<MovieDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
