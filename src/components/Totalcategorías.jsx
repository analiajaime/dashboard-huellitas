import React, { useState, useEffect } from 'react';

function TotalCategories() {
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3456/api/products/');
        const data = await response.json();
        const categories = Object.keys(data.countByCategory);
        setTotalCategories(categories.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Llamar a la función para obtener los datos al cargar el componente
    fetchData();
  }, []);

  return (
    <div>
      <h3 className="fw-bold">Total de categorías</h3>
      <p className='fs-5'>{totalCategories}</p>
    </div>
  );
}

export default TotalCategories;
