import React from "react";
import foto from "../assets/images/logohuellitashorisontal.png";

function TopBar() {
  return (
    <>
      {/*<!-- Topbar -->*/}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/*<!-- Sidebar Toggle (Topbar) -->*/}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/*<!-- Topbar Navbar -->*/}
        <ul className="navbar-nav ml-auto">
          

          {/* <div className="topbar-divider d-none d-sm-block"></div> */}

          {/*<!-- Nav Item - User Information -->*/}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle d-flex justify-content-center align-items-center" href="http://localhost:3456/" id="userDropdown" style={{ width: "130px", height: "80px" }}>
              {/* <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Huellitas
              </span> */}
              <img
                className="img-profile rounded-circle w-100 h-75"
                src={foto}
                alt="logo Huellitas"
                width="150"
              />
            </a>
          </li>
        </ul>
      </nav>
      {/*<!-- End of Topbar -->*/}
    </>
  );
}
export default TopBar;
