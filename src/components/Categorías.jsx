import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3456/api/products/');
        const { countByCategory } = response.data;
        const categoriasArray = Object.entries(countByCategory);
        setCategorias(categoriasArray);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='col-lg-6 mb-4'>
      <h2 className='font-weight-bold'>Nuestras categorías</h2>
      {categorias.map(([categoria, count]) => (
        <div key={categoria}>
          <h3>{categoria}</h3>
          <p>Total: {count}</p>
        </div>
      ))}
    </div>
  );
};

export default Categorias;
