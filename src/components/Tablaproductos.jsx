import React, { useState, useEffect } from 'react';

function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:3456/api/products/');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Lista de Productos</h2>
      <div className="table-responsive" style={{ 
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        overflowX: 'auto'
      }}>
        <table className="table table-bordered" style={{ minWidth: '1000px' }}> 
          <thead>
            <tr>
              <th className="fw-bold fs-5">ID</th>
              <th className="fw-bold fs-5">Nombre</th>
              <th className="fw-bold fs-5">Categoría</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;






