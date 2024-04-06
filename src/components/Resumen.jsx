import React from 'react';
import TotalCategories from './Totalcategorías';
import TotalProductos from './Productos';
import UserComponent from './Usuarios';

const CombinedComponent = () => {
  return (
    <div   >
      <div className="row">
        <div className="col-md-3 d-flex">
          <div className="card card card-body shadow d-flex flex-column">
            <TotalCategories />
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="card card-body shadow d-flex flex-column">
              <TotalProductos />
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="card card-body  shadow d-flex flex-column">
              <UserComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedComponent;

