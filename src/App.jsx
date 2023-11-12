import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; 
import Dashboard from './Dashboard';

export default function App() {
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        {/* Remove this Route if you don't have a Home component */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
