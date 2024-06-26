import React, { useState, useEffect } from 'react';

const UserComponent = () => {
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3456/api/users/');
        const data = await response.json();
        setTotalCount(data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 className="fw-bold">Total de usuarios</h3>
      {totalCount !== null ? (
        <p className='fs-5'>{totalCount}</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default UserComponent;
