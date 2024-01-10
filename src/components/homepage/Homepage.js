import React from "react";
import PopularPackDesign from "../popularpacks/component/PopularPackDesign";
import PopularPacklist from "../popularpacks/component/PopularPacklist";
import withLayout from "../sidebar/withlayout";
import { Link } from "react-router-dom";
import Newitems from "../popularpacks/component/Newitems";
import Navfooter from "../popularpacks/component/Navfooter";
const Homepage = () => {
    return (
     <div>
         <div class="ml-5"><PopularPackDesign/></div>
         <div class = "flex justify-between w-11/12 mb-3 mt-2 ml-5">
            <h1 class ="text-2xl font-semibold text-black">Popular Packs</h1>
            <Link to='/popularpacks'class="text-lg font-medium text-green-800">View All</Link>
         </div>
         <div class="ml-4"><PopularPacklist/></div> 
          <div class = "flex justify-between w-11/12 mb-3 mt-5 ml-5 ">
            <h1 class ="text-2xl font-semibold text-black">Our New Item</h1>
            <Link to='/ournewitems'class="text-lg font-medium text-green-800">View All</Link>
         </div>
         <div class="ml-4"><Newitems/></div>
         <div class="fixed bottom-0 w-full ">
         <Navfooter/>
         </div>
         
     </div>
        
    )
}

export default withLayout(Homepage)