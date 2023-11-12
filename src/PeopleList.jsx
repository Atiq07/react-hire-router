import React from 'react';
import PeopleListItem from './PeopleListItem';

function PeopleList(props) {
  // eslint-disable-next-line react/prop-types
  const { people } = props;

  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem key={person.login.uuid} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
