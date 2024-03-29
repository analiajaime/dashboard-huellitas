import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRow from './ContentRow';
import Chart from './Chart';
import TotalProductos from './Productos';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">HUELLITAS</h1>
					</div>
				
					{/*<!-- Conteo->*/}
					< TotalProductos/>
					
					{/* <ContentRow /> */}
					<ContentRowCenter />
					{/* <Chart /> */}
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;