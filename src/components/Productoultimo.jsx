import React, { useState, useEffect } from 'react';

function LastProduct() {
  const [lastProductName, setLastProductName] = useState('');

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3456/api/products/');
        const data = await response.json();
        const lastProduct = data.products[data.products.length - 1];
        setLastProductName(lastProduct.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Llamar a la función para obtener los datos al cargar el componente
    fetchData();
  }, []);

  const handleGoToWeb = () => {
    window.location.href = 'http://localhost:3456/products/detail/39';
  };

  return (
    <div className='mt-4 card card-body  shadow'>
      <h2 className="fw-bold ">Último producto ingresado</h2>
      <p className='fs-5'>{lastProductName}</p>
      <button className ='col-lg-6 bg-cyan-custom '  onClick={handleGoToWeb}>Ir a la web</button>
    </div>
  );
}


export default LastProduct;
