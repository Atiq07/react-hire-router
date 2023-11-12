import React, { useState, useEffect } from 'react';
import PeopleList from './PeopleList';

function Dashboard(props) {
  const { hiredPeople } = props;
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=50');
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <PeopleList people={people} hiredPeople={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
