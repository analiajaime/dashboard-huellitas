import React, { useState, useEffect } from 'react';

const LastUserComponent = () => {
  const [lastUser, setLastUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3456/api/users/');
        const data = await response.json();
        const lastUserData = data.users[data.users.length - 1];
        setLastUser(lastUserData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="fw-bold">Último usuario ingresado</h2>
      {lastUser ? (
        <div>
          <p>Nombre: {lastUser.username}</p>
          <p>Email: {lastUser.email}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default LastUserComponent;
