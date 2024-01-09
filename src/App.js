import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from '../src/components/login/Login'
import PopularPacks from '../src/components/popularpacks/PopularPacks'
import BundleDetails from '../src/components/bundledetails/BundleDetails'
import Homepage from '../src/components/homepage/Homepage';
import FrontPage from './components/frontpage/FrontPage';
import Welcome from './components/welcome/Welcome';
import StartPage from './components/startpage/StartPage';
import Ournewitems from './components/popularpacks/component/Ournewitems';

function App() {
  return (
    <div>

      <Router>
            
            
            <Routes>
            <Route path='/' element={<Login />}/>
            <Route path="/popularpacks" element={<PopularPacks/>}/>
            <Route path='/ournewitems' element={<Ournewitems/>}/>
            <Route path="/bundledetails" element={<BundleDetails/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
            <Route path='/dashboard' element={<Homepage/>}/>
            <Route path='/FrontPage' element={<FrontPage/>}/>
            <Route path='/Welcome' element={<Welcome/>}/>
            <Route path='/StartPage' element={<StartPage/>}/>
         
            </Routes>

      </Router>

    
    </div>
  );
}

export default App;
