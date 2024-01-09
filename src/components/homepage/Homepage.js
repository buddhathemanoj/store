import React from "react";
import PopularPackDesign from "../popularpacks/component/PopularPackDesign";
import PopularPacklist from "../popularpacks/component/PopularPacklist";
import withLayout from "../sidebar/withlayout";
import { Link } from "react-router-dom";
import Ournewitems from "../popularpacks/component/Ournewitems";
import Newitems from "../popularpacks/component/Newitems";
const Homepage = () => {
    return (
     <div>
         <div><PopularPackDesign/></div>
         <div class = "flex justify-between w-11/12 mb-3 mt-2">
            <h1 class ="text-2xl font-semibold text-black">Popular Packs</h1>
            <Link to='/popularpacks'class="text-lg font-medium text-green-800">View All</Link>
         </div>
          <PopularPacklist/>
          <div class = "flex justify-between w-11/12 mb-3 mt-5">
            <h1 class ="text-2xl font-semibold text-black">Our New Item</h1>
            <Link to='/ournewitems'class="text-lg font-medium text-green-800">View All</Link>
         </div>
         <Newitems/>
     </div>
        
    )
}

export default withLayout(Homepage)