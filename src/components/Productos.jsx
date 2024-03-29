import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalProductos = () => {
  const [totalProductos, setTotalProductos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3456/api/products/');
        const { count } = response.data;
        setTotalProductos(count);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Total de productos</h2>
      <p> {totalProductos} productos en Huellitas</p>
    </div>
  );
};

export default TotalProductos;