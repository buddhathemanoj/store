import React from 'react';
import './App.css';
import LeftSidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import PageContent from './components/sidebar/pagecontent';
import Login from '../src/components/login/Login'
import PopularPacks from '../src/components/popularpacks/PopularPacks'
import BundleDetails from '../src/components/bundledetails/BundleDetails'
import Homepage from '../src/components/homepage/Homepage'

function App() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <Router>
            
            <Routes>
            <Route path='/' element={<Login />}/>
            <Route path="/popularpacks" element={<PopularPacks/>}/>
            <Route path="/bundledetails" element={<BundleDetails/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
            </Routes>

      </Router>

    
    </div>
  );
}

export default App;
