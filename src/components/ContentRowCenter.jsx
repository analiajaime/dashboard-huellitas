import React from 'react';
import GenresInDb from './GenresInDb';
import QuienesSomos from './QuienesSomos';
import Categorias from './Categorías'

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <QuienesSomos />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            {/* <GenresInDb /> */}
            <Categorias/>
        </div>
    )
}

export default ContentRowCenter;