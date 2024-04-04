import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRow from './ContentRow';
import Chart from './Chart';
import TotalProductos from './Productos';
import UserComponent from './Usuarios'
import TotalCategories from './Totalcategorías'
import LastUserComponent from './Usuarioultimo';
import CombinedComponent from './Resumen';


function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content>*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Huellitas</h1>
					</div>
				
					{/*<!-- Conteo->*/}
					<CombinedComponent/>
					{/* < TotalCategories />
					< TotalProductos/>
					< UserComponent /> */}
					<div></div>
					{/* <ContentRow /> */}
					<ContentRowCenter />
					{/* <Chart /> */}
					
					<LastUserComponent />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;