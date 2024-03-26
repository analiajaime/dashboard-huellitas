import React from 'react';
import SideBar from './components/SideBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/app.css';


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
        </div>
    </React.Fragment>
  );
}

export default App;
