import React from 'react';
import './App.css';
import LeftSidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import PageContent from './components/sidebar/pagecontent';
import Login from '../src/components/login/Login'
import PopularPacks from '../src/components/popularpacks/PopularPacks'
import BundleDetails from '../src/components/bundledetails/BundleDetails'
import Homepage from '../src/components/homepage/Homepage'
<<<<<<< Updated upstream
=======
import PageContent from './components/sidebar/pagecontent';
import LeftSidebar from './components/sidebar/sidebar';
import FrontPage from './components/frontpage/FrontPage';
import Welcome from './components/welcome/Welcome';
import StartPage from './components/startpage/StartPage';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <Router>
            
            <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path="/popularpacks" element={<PopularPacks/>}/>
            <Route path="/bundledetails" element={<BundleDetails/>}/>
<<<<<<< Updated upstream
            <Route path='/homepage' element={<Homepage/>}/>
=======
            <Route path='/dashboard' element={<Homepage/>}/>
            <Route path='/FrontPage' element={<FrontPage/>}/>
            <Route path='/Welcome' element={<Welcome/>}/>
            <Route path='/StartPage' element={<StartPage/>}/>
>>>>>>> Stashed changes
            </Routes>

      </Router>

    
    </div>
  );
}

export default App;
