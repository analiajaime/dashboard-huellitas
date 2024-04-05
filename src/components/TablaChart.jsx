import React from 'react'
import Chart from './Chart'
import Footer from './Footer'
import TopBar from "./TopBar";
import ProductsTable from "./Tablaproductos"

export const TablaChart = () => {
  return (
    <>
        {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />
          <ProductsTable />
         {/*  <Chart /> */}
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default TablaChart;
