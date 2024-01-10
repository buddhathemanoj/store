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
import ProductDetails from './components/productdetails/Productdetails';
import Packs from './components/popularpacks/Packs';
import Newpacks from './components/popularpacks/Newpacks';
import Menu from './components/popularpacks/component/Menu';
import Save from './components/popularpacks/component/Save';


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
            <Route path='/menu'element={<Menu/>}/>
            <Route path='/save'element={<Save/>}/>
            <Route path='/FrontPage' element={<FrontPage/>}/>
            <Route path='/Welcome' element={<Welcome/>}/>
            <Route path='/StartPage' element={<StartPage/>}/>
            <Route path="/productdetails"element={<ProductDetails/>}/>
            <Route path="/Packs"element={<Packs/>}/>
            <Route path='/newpacks'element={<Newpacks/>}/>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
