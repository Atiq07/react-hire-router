import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HireForm from './HireForm';

function PersonProfile(props) {
  // eslint-disable-next-line react/prop-types
  const { hiredPeople, setHiredPeople } = props;
  const [person, setPerson] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      setPerson(person);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
      {/* ... rest of your component */}
    </article>
  );
}

export default PersonProfile;
