import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PersonProfile() {
  const { id } = useParams();
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data.results[parseInt(id) - 1]);
      });
  }, [id]);

  return (
    <div>
      <h2>Profile of {person.name && person.name.first} {person.name && person.name.last}</h2>
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      {/* Display other details as needed */}
    </div>
  );
}
