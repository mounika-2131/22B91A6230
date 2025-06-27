import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatisticsPage from './pages/StatisticsPage';

const App = () => (
  <Router>
    <nav style={{ padding: 20 }}>
      <Link to="/" style={{ marginRight: 15 }}>Shortener</Link>
      <Link to="/stats">Statistics</Link>
    </nav>
    <Routes>
      <Route path="/" element={<ShortenerPage />} />
      <Route path="/stats" element={<StatisticsPage />} />
    </Routes>
  </Router>
);

export default App;
