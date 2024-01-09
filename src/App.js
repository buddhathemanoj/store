import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from '../src/components/login/Login'
import PopularPacks from '../src/components/popularpacks/PopularPacks'
import BundleDetails from '../src/components/bundledetails/BundleDetails'
import Homepage from '../src/components/homepage/Homepage'
import Newitems from './components/ournewitem/newitems';


function App() {
  return (
    <div>

      <Router>
            
            
            <Routes>
            <Route path='/' element={<Login />}/>
            <Route path="/popularpacks" element={<PopularPacks/>}/>
            <Route path="/bundledetails" element={<BundleDetails/>}/>
            <Route path='/dashboard' element={<Homepage/>}/>
            <Route path="/newitems" element={<Newitems/>}/>
            </Routes>

      </Router>

    
    </div>
  );
}

export default App;
