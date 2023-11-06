import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
