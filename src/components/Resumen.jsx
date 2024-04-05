import React from 'react';
import TotalCategories from './Totalcategorías';
import TotalProductos from './Productos';
import UserComponent from './Usuarios';

const CombinedComponent = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-4 d-flex">
          <div className="card shadow d-flex flex-column">
            <div className="card-body">
              <TotalCategories />
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card shadow d-flex flex-column">
            <div className="card-body">
              <TotalProductos />
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card shadow d-flex flex-column">
            <div className="card-body">
              <UserComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedComponent;

