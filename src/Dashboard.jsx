import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://reactrouter.com/en/main/start/overview')
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      });
  }, []);

  const hirePerson = (person) => {
    setHiredPeople([...hiredPeople, person]);
  };

  return (
    <>
      <h2>People to Hire</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <Link to={`/view/${index + 1}`}>View Profile</Link>
            <button onClick={() => hirePerson(person)}>Hire</button>
          </li>
        ))}
      </ul>
      <h2>Hired</h2>
      <ul>
        {hiredPeople.map((person, index) => (
          <li key={index}>{person.name.first} {person.name.last}</li>
        ))}
      </ul>
    </>
  );
}
