import React from 'react';
import GenresInDb from './GenresInDb';
import QuienesSomos from './QuienesSomos';
import Categorias from './Categorías'
import LastProduct from './Productoultimo';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- último producto -->*/}
            < LastProduct />
           {/*  <QuienesSomos /> */}
            {/* <GenresInDb /> */}
            <Categorias/>
        </div>
    )
}

export default ContentRowCenter;