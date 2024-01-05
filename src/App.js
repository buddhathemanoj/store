import React from 'react';
import './App.css';
import LeftSidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import PageContent from './components/sidebar/pagecontent';

function App() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <Router>
            <LeftSidebar/>
            <PageContent/>
      </Router>

    
    </div>
  );
}

export default App;
