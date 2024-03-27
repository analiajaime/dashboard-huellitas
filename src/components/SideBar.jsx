import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import image from '../assets/images/logoHuellitasMinimal.png';
import ContentWrapper from './ContentWrapper.jsx';
import ContentRow from './ContentRow.jsx';
import NotFound from './NotFound.jsx';
import UltimasCargas from './UltimasCargas.jsx';
import NuestrasCategorias from './NuestrasCategorias.jsx';
import TablaChart from './TablaChart.jsx';
import TablaChartVentas from './TablaChartVentas.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function SideBar() {
  return (
    <Router>
      <>
        {/* Sidebar */}
        <ul className="navbar-nav bg-cyan-custom sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon">
              <img className="w-25" src={image} alt="HUELLITAS"/>
            </div>
          </Link>
          {/* Divider */}
          <hr className="sidebar-divider my-0"/>
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard - HUELLITAS</span>
            </Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider"/>
          {/* Heading */}
          <div className="sidebar-heading text-muted">Acciones</div>
          {/* Nav Item - Tables */}
          <li className="nav-item">
            <Link className="nav-link" to="/TablaChart">
              <i className="fas fa-table"></i>
              <span>Detalle de Productos</span>
            </Link>
          </li>
          {/* Nav Item - Charts */}
          <li className="nav-item">
            <Link className="nav-link" to="/Ultimas-Cargas">
              <i className="fas fa-users"></i>
              <span>Ultimas Cargas</span>
            </Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block"/>
        </ul>
        {/* End of Sidebar */}

        <Routes>
          <Route path="/" element={<ContentWrapper />} />{/* Esta es la vista principal */}
          <Route path="/NuestrasCategorias" element={<NuestrasCategorias />} />
          <Route path="/TablaChart" element={<TablaChart />} />
          <Route path="/Ultimas-Cargas" element={<UltimasCargas />} />
          <Route path="/ContentRow" element={<ContentRow />} />
          <Route path="/TablaChartVentas" element={<TablaChartVentas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default SideBar;
