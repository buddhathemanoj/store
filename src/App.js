import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from '../src/components/login/Login'
import PopularPacks from '../src/components/popularpacks/PopularPacks'
import BundleDetails from '../src/components/bundledetails/BundleDetails'
import Homepage from '../src/components/homepage/Homepage'
import Newitems from './components/ournewitem/newitems';
import FrontPage from './components/frontpage/FrontPage';
import Welcome from './components/welcome/Welcome';
import StartPage from './components/startpage/StartPage';
import BundleDetailsPP from './components/bundledetails/BundleDetailsPP';
import ProductDetails from './components/productdetails/ProductDetails';
import ProductDetailsPP from './components/productdetails/ProductDetailsPP';
import Checkout from './components/checkout/Checkout';
import CardDetails from './components/carddetails/CardDetails';
import OrderPlaced from './components/orderplaced/OrderPlaced';

function App() {
  return (
    <div>

      <Router>
            
            
            <Routes>
            <Route path='/' element={<Login />}/>
            <Route path="/popularpacks" element={<PopularPacks/>}/>
            <Route path="/bundledetails" element={<BundleDetails/>}/>
            <Route path='/dashboard' element={<Homepage/>}/>
            <Route path='/FrontPage' element={<FrontPage/>}/>
            <Route path='/Welcome' element={<Welcome/>}/>
            <Route path='/StartPage' element={<StartPage/>}/>
            <Route path="/newitems" element={<Newitems/>}/>
            <Route path="/bundledetailspp/:id" element={<BundleDetailsPP/>}/>
            <Route path="/productdetails" element={<ProductDetails/>}/>
            <Route path="/productdetailspp/:id" element={<ProductDetailsPP/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/carddetails' element={<CardDetails/>}/>
            <Route path='/orderplaced' element={<OrderPlaced/>}/>
            </Routes>
            
      </Router>

    
    </div>
  );
}

export default App;
