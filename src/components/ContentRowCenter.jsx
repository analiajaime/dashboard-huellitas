import React from 'react';
import GenresInDb from './GenresInDb';
import QuienesSomos from './QuienesSomos';
import Categorias from './Categorías'
import LastProduct from './Productoultimo';
import LastUserComponent from './Usuarioultimo';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- último producto -->*/}
         <div className="col-lg-6 pr-md-3">   
            < LastProduct />
         </div>
           {/*  <QuienesSomos /> */}
            {/* <GenresInDb /> */}
        <div className="col-lg-6 pr-md-3">
            < LastUserComponent />
        </div>
            {/* <Categorias/> */}
        </div>
    )
}

export default ContentRowCenter;