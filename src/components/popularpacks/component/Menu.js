import React from 'react';
import { CiApple } from "react-icons/ci"
import { IoFishOutline } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa"
import { TbBabyCarriage } from "react-icons/tb";
import { LuPencilRuler } from "react-icons/lu";
import { GiLipstick } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GiPlantWatering } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { FaGlasses } from "react-icons/fa6"
import { IoBagOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";

import Navfooter from './Navfooter';

const Menu = () => {
  return (
    <div>
      <div> <h1 class="text-2xl font-semibold text-black text-center mt-4 pb-4"> Choose a category</h1></div>
        <div class="flex justify-around pb-20 gap-10 mt-4">
           <div><CiApple className=" w-10 h-10 ml-4 rounded-2xl bg-gray-100 hover:bg-slate-200 cursor-pointer"/><p class="text-xl text-gray-500 ">Vegetables</p></div> 
           <div><IoFishOutline   className="h-10 w-10 ml-6 rounded-2xl bg-gray-100 hover:bg-slate-200 cursor-pointer" /><p  class="text-xl text-gray-500 ">Meat and Fish</p></div> 
           <div> <FaHandHoldingMedical  className="h-10 w-10 ml-4  rounded-2xl bg-gray-100 hover:bg-slate-200 cursor-pointer" /><p class="text-xl text-gray-500 ">Medicine</p></div>
       </div>
       <div>
        <div class="flex justify-around pb-20 gap-10 ">
           <div><TbBabyCarriage className=" w-10 h-10  ml-4  rounded-xl bg-gray-100 hover:bg-slate-200 cursor-pointer"/><p  class="text-xl text-gray-500 ">Baby care</p></div> 
           <div><LuPencilRuler   className="h-10 w-10 ml-6 rounded-xl bg-gray-100 hover:bg-slate-200 cursor-pointer" /><p class="text-xl text-gray-500 ">Office supplies</p></div> 
           <div><GiLipstick  className="h-10 w-10  ml-1 rounded-xl bg-gray-100 hover:bg-slate-200 cursor-pointer" /><p class="text-xl text-gray-500 ">Beauty</p></div>
       </div>
        <div>
        <div class="flex justify-around pb-20 gap-10 ">
           <div><CgGym  class=" w-12 h-12 ml-6 rounded-xl bg-gray-100 hover:bg-slate-200 cursor-pointer"/><p class="text-lg font-medium text-gray-500 ">Gym Equpies</p></div> 
           <div><GiPlantWatering class="h-12 w-12 ml-2 rounded-2xl bg-gray-100 hover:bg-slate-200 cursor-pointer" /><p  class="text-xl  text-gray-500 ">Gardening</p></div> 
           <div><GiSittingDog class="h-12 w-12 ml-4  rounded-2xl bg-gray-100 hover:bg-slate-200 cursor-pointer" /><p class="text-xl text-gray-500 ">Pet Care</p></div>
       </div>
        </div>
        <div>
        <div class="flex justify-around pb-20 gap-10 ">
           <div><FaGlasses class=" w-12 h-12 ml-6 rounded-xl bg-gray-100 hover:bg-slate-200 cursor-pointer"/><p class="text-lg font-medium text-gray-500 ">Gym Equpies</p></div> 
           <div><IoBagOutline class="h-12 w-12 ml-2 rounded-2xl bg-gray-100 hover:bg-slate-200 cursor-pointer" /><p  class="text-xl text-gray-500 ">Gardening</p></div> 
           <div>< HiDotsHorizontal class="h-12 w-12 ml-4  rounded-2xl bg-gray-100 hover:bg-slate-200 cursor-pointer" /><p class="text-xl text-gray-500 ">Pet Care</p></div>
       </div>
        </div>
       </div>
       <div class="content-end fixed bottom-0 w-full ">
        <Navfooter/>
        </div>
    </div>
    
  );
}

export default Menu;
